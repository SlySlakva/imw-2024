$(document).ready(function () {

    //Connect with the Poetry API and display the list of authors in the side bar. 
    fetch("https://poetrydb.org/author")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch data from the API");
            }
        })
        .then(function (data) {
            data.authors.forEach(author => {
                //Create a div in the side bar for each author listed in the data base. 
                $('#sidebar').append(`<div class="author"><h3>${author}</h3></div>`);
            });
        })
        .catch(function (error) {
            console.log("uh oh something's stinky...");
            console.log(error);
        });

    //Click event for when the user navigates the side bar. 
    $('#sidebar').on('click', '.author', function () {
        var authorName = $(this).text().trim();

        $('#poembar').empty();

        //connect to the poetry API to receive everything relevant to the specified author. 
        fetch(`https://poetrydb.org/author/${authorName}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch data for the author from the API");
                }
            })
            .then(function (data) {
                data.forEach(poem => {
                    //Create a div under the author to display each of their works. 
                    var poemDiv = $('<div class="title"><h4>').text(poem.title);
                    poemDiv.click(function () {
                        displayPoemLines(poem.lines);
                    });
                    $('#poembar').append(poemDiv);
                });
            }.bind(this)) // Ensure 'this' retains its value inside the callback function
            .catch(function (error) {
                console.log("Error fetching data for the author:", error);
            });
    });

    function displayPoemLines(lines) {
        $('#mainbar').empty();
        lines.forEach(line => {
            $('#mainbar').append(`<p>${line}</p>`);
        });
    }


    //search function to allow the user to search for authors.
    $('#searchInput').on('input', function () {
        var searchTerm = $(this).val().trim().toLowerCase();

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

function formatLines(lines) {
    return lines.map(line => `&emsp;${line}`).join('<br>');
}