$(document).ready(function () {

    fetch("https://poetrydb.org/author")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch data from the API");
            }
        })
        .then(function (data) {
            console.log("Data received from API:", data);

            data.authors.forEach(author => {
                $('#sidebar').append(`<div class="author"><h3>${author}</h3></div>`);
            });
        })
        .catch(function (error) {
            $('body').append('<h1>WUH OH SOMETHING IS STINKY</h1>');
            console.log("uh oh something's stinky...");
        });

    $('#sidebar').on('click', '.author', function () {
        var authorName = $(this).text().trim();

        $('#mainbar').empty();

        fetch(`https://poetrydb.org/author/${authorName}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Failed to fetch data for the author from the API");
                }
            })
            .then(function (data) {
                $('#mainbar').append(`<div class="intro"><h2>Poems by ${authorName}:</h2></div>`);
                data.forEach(poem => {
                    $('#mainbar').append(`<div class="title"><h4>${poem.title}</h4></div>`);
                    $('#mainbar').append(`<div class="lines"><p>${formatLines(poem.lines)}</p></div>`);
                });
            })
            .catch(function (error) {
                console.log("Error fetching data for the author:", error);
            });
    });

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