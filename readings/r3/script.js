$(document).ready(function () {
    // Make shapes draggable
    $(".shape").draggable();

    // Make each word draggable
    $("#paragraph p").html(function (_, html) {
        return html.replace(/\b(\w+)\b/g, "<span class='draggable-word'>$1</span>");
    });

    $(".draggable-word").draggable();
});
