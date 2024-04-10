$(document).ready(function () {


    //Filters the work
    $('.filter').click(function () {
        //creates a variable that holds the current data-id. 
        var id = $(this).attr('data-id');
        //search each box for a matching class name. Those that do will be displayed while those that don't will be hidden.
        $('.box').each(function () {
            if ($(this).hasClass(id)) {
                $(this).css('display', 'block');
            } else {
                $(this).css('display', 'none');
            }
        });
    });

    //This turns the notification display off and on.
    $('.bell-container').click(function () {
        $('.notification-box').toggleClass('hidden');
    });

    // //This creates the hover effect on the videos. 
    // $('.box').on('mouseenter', function () {
    //     //When the user hovers over the thumbnail of a video/assignment, the corresponding image for that assignment will appear. 
    //     $(this).find('.image').css('display', 'block');
    // });

    // $('.box').on('mouseleave', function () {
    //     //When the user exits the thumbnail of a video or assignemnt, the corresponding image will disappear again. 
    //     $(this).find('.image').css('display', 'none');
    // });


    //This controls the Filter functionality
    // function selectFilter(element) {
    //     //any filter elements that hasn't been clicked will not invert colors.
    //     $('.filter').removeClass('selected');

    //     //The selected element in the navigation bar will invert colors.
    //     $(element).addClass('selected');
    // }
});

//had a tough time doing this with jquery. 
function search() {
    //variables for the following.
    var input, filter, container, boxes, i, title, txtValue;
    //get the input from the element ided with search input.
    input = document.getElementById('searchInput');
    //change to upper case for easier comparison.
    filter = input.value.toUpperCase();
    //get the parent container and child boxes. 
    container = document.querySelector('.container');
    boxes = container.querySelectorAll('.box');

    for (i = 0; i < boxes.length; i++) {
        //find the child elements within the boxes that have the class title.
        title = boxes[i].querySelector('.title');
        //compare the text to the title. 
        txtValue = title.textContent || title.innerText;
        //if they match, display the box. if not, don't display.
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            boxes[i].style.display = "";
        } else {
            boxes[i].style.display = "none";
        }
    }


}