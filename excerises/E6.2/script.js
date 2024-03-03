$(document).ready(function () {
    var tabCount = 1; //start with one tab

    //provides a random position for each generated tab. 
    function randomPosition() {
        var posX = Math.random() * ($(window).width() - 250); //subtracting the width of the tab
        var posY = Math.random() * ($(window).height() - 180); //subtracting the height of the tab
        return { x: posX, y: posY };
    }

    //provides a random color for each generated tab.
    function randomColor() {
        //randomly selects 6 letters to make up a color code. 
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    //creates new tabs when called upon. 
    function createTabs(numTabs) {
        for (var i = 0; i < numTabs; i++) {
            var newPos = randomPosition(); //variable that calls the position function.
            var newTab = $('<div class="tab"></div>'); //variable for the new tab to exist in.
            newTab.css({ top: newPos.y + 'px', left: newPos.x + 'px' }); //ties the new position to the new tab. 

            //creating variables for the other elements in the tab. 
            var header = $('<div class="header"></div>');
            var button = $('<div class="button"></div>');
            var content = $('<div class="content"></div>');
            var image = $('<div class="image"></div>');

            //assigns a random color to the content element. 
            content.css('background-color', randomColor());

            //ties the children elements to their parent tab. 
            newTab.append(header, button, content, image);
            //ties the tab element to the body, allowing it to be displayed on screen.
            $('body').append(newTab);

            //user can drag the tab element by the header. 
            $('.tab').draggable({ handle: '.header' });
        }
    }


    //allows the user to close a tab by clicking the red button. 
    $(document).on('click', '.button', function () {
        //animates the element fading out.
        $(this).closest('.tab').fadeOut(300, function () {
            $(this).remove(); //removes this element.
            tabCount += 2; // adds to the tab count each time. 
            createTabs(tabCount); //calls to create more tabs. 
        });
    });

    createTabs(tabCount); //calls the first tab on refresh. 
});