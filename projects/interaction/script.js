$(document).ready(function () {
    //creates a random position within the window's width and height
    function randomPosition() {
        var posX = Math.random() * ($(window).width() - 100); // Subtracting the width of the window
        var posY = Math.random() * ($(window).height() - 100); // Subtracting the height of the window
        return { x: posX, y: posY };
    }

    //a list of gradient colors to apply to a flower
    var colors = [
        "linear-gradient(45deg, rgb(248, 232, 241), rgb(222, 43, 105))",
        "linear-gradient(45deg, rgb(222, 43, 105), rgb(248, 232, 241))",
        "linear-gradient(45deg, rgb(26, 139, 184), rgb(213, 216, 255))",
        "linear-gradient(45deg, rgb(199, 213, 123), rgb(242, 254, 223))",
        "linear-gradient(45deg, rgb(253, 223, 254), rgb(95, 19, 189))",
        "linear-gradient(45deg, rgb(250, 220, 102), rgb(255, 167, 15))",
        "linear-gradient(45deg, rgb(252, 245, 235), rgb(245, 203, 228))",
        "linear-gradient(45deg, rgb(201, 62, 169 ), rgb(240, 235, 192))",
        "linear-gradient(45deg, rgb(215, 236, 245), rgb(199, 226, 237))",
        "linear-gradient(45deg, rgb(189, 219, 164), rgb(250, 70, 151))"
    ];

    //creates flowers when given the amount required
    function createFlower(numFlow) {
        for (var i = 0; i < numFlow; i++) {
            //creates a variable to create and contain a random position.
            var newPos = randomPosition();
            //creates a variable to contain the parent class of the flower.
            var newFlower = $('<div class="flower" id="flower" style="--main-rotate: 0deg;"></div>'); // Variable for the new tab to exist in.
            //applies the random position variable to the flower's position. 
            newFlower.css({ top: newPos.y + 'px', left: newPos.x + 'px' });

            //creates a variable containing a color from the colors list.  
            var mainPetalColor = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color from the 'colors' array
            //creates variables for all of the elements within the flower.
            var root = $('<div class="root"></div>');
            var petal1 = $('<div class="leaf petal" style="--green-rotate: -70deg;"></div>');
            var petal2 = $('<div class="leaf petal" style="--green-rotate: 70deg;"></div>');
            var petal3 = $('<div class="mainPetal petal" style="--green-rotate: 0deg; background: ' + mainPetalColor + '"></div>');
            var petal4 = $('<div class="leaf petal" style="--green-rotate: 0deg;" id="greenfrontleft"></div>');
            var petal5 = $('<div class="leaf petal" style="--green-rotate: 0deg;" id="greenfrontright"></div>');
            var petal6 = $('<div class="mainPetal petal" style="--petal-rotate: 60deg; background: ' + mainPetalColor + '"></div>');
            var petal7 = $('<div class="mainPetal petal" style="--petal-rotate: -60deg; background: ' + mainPetalColor + '"></div>');
            var petal8 = $('<div class="mainPetal petal" style="--petal-rotate: -30deg; background: ' + mainPetalColor + '"></div>');
            var petal9 = $('<div class="mainPetal petal" style="--petal-rotate: 30deg; background: ' + mainPetalColor + '"></div>');
            var petal10 = $('<div class="mainPetal petal" style="--petal-rotate: 45deg; background: ' + mainPetalColor + '" id="mainfrontsides"></div>');
            var petal11 = $('<div class="mainPetal petal" style="--petal-rotate: -45deg; background: ' + mainPetalColor + '" id="mainfrontsides"></div>');
            var petal12 = $('<div class="mainPetal petal" style="--petal-rotate: 0deg; background: ' + mainPetalColor + '" id="mainfront"></div>');
            var petal13 = $('<div class="leaf petal" style="--green-rotate: 0deg;" id="greenfront"></div>');

            // Ties the children elements to their parent flower.
            newFlower.append(petal1, petal2, petal3, petal4, petal5, petal6, petal7, petal8, petal9, petal10, petal11, petal12, root, petal13);
            // Ties the flower element to the body, allowing it to be displayed on the screen.
            $('body').append(newFlower);
        }
    }

    // Function to generate random number within a range
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to create lily pads
    function createLilyPads(numLilyPads) {

        //for each lily pad called, create the following
        for (let i = 0; i < numLilyPads; i++) {
            //create a variable to contain the image of a lilypad.
            const lilyPad = $('<img>').addClass('lily-pad');
            //create a variable to create and contain a random position.
            var newPos = randomPosition();
            //finds the src of the image.
            lilyPad.attr('src', 'lilypad2.png');
            //apply the random position to the lily pad.
            lilyPad.css({ top: newPos.y + 'px', left: newPos.x + 'px' });
            //apply a random animation duration to the floating animation within the lilypad class.
            lilyPad.css('animation-duration', getRandomNumber(10, 14) + 's');
            // Ties the flower element to the body, allowing it to be displayed on the screen.
            $('body').append(lilyPad);
        }
    }

    // Create lilypads and flowers.
    createLilyPads(90);
    createFlower(40);
});