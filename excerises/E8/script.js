$(document).ready(function () {

    //Connect with the Poetry API.
    //Link to the github - https://github.com/thundercomb/poetrydb#readme
    fetch("https://poetrydb.org/author")
        .then(response => {
            //Check if the connection is working. 
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch data from the API");
            }
        })
        .then(function (data) {
            //Create a div in the side bar for each author listed in the data base. 
            data.authors.forEach(author => {
                $('#sidebar').append(`<div class="author"><h3>${author}</h3></div>`);
            });
        })
        .catch(function (error) {
            console.log(error);
        });

    //When the user clicks on an author's name, the author's works will expand below. When the user clicks on a work, the contents will load on the main-bar. 
    $('#sidebar').on('click', '.author', function () {
        //Get the author's name to search in the API.
        var authorName = $(this).text().trim();

        // Toggle the visibility of titles under the selected author.
        $(this).find('.title').toggle();

        if ($(this).find('.title').is(':visible')) {
            return;
        }

        // Store a reference to the author element
        var authorElement = $(this);

        // Connect to the poetry API to receive everything relevant to the specified author. 
        fetch(`https://poetrydb.org/author/${authorName}`)
            .then(response => {
                //Check if the connection is working.
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch data for the author from the API");
                }
            })
            .then(function (data) {
                data.forEach(poem => {
                    // Create a div under the author to display each of their works. 
                    var poemDiv = $('<div class="title">').append($('<h6>').text(poem.title));

                    //If the user clicks on the title div, clear the main bar and display the title work, author, and poem in the main bar. 
                    poemDiv.click(function () {
                        $('#mainbar').empty();

                        $('#mainbar').append(`<div class="title"><h4>${poem.title}</h4></div>`);
                        $('#mainbar').append(`<div class="author"><h5>${poem.author}</h5></div>`);
                        displayPoemLines(poem.lines);
                    });
                    // Append poemDiv under the author element
                    authorElement.append(poemDiv);
                });
            })
            .catch(function (error) {
                console.log("Error fetching data for the author:", error);
            });
    });

    //Displays the lines in the poem. 
    function displayPoemLines(lines) {
        //Gets each line in the poem and appends them one by one.
        lines.forEach(line => {
            $('#mainbar').append(`<p>${line}</p>`);
        });
    }

    //When the user inputs a string of values, filter the index to the author or their works. 
    $('#searchInput').on('input', function () {
        var searchTerm = $(this).val().trim().toLowerCase(); //converts the text to the barebone characters for searching. No uppercase, no spaces, etc. 

        // Filter authors based on search term
        $('.author').each(function () {
            var authorName = $(this).text().trim().toLowerCase();
            if (authorName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
