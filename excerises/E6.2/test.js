$(document).ready(function () {
    var tabCount = 1; //start with one tab

    //provides a random position for each generated tab. 
    function randomPosition() {
        var posX = Math.random() * ($(window).width() - 250); // 50 is width of the tab
        var posY = Math.random() * ($(window).height() - 180); // 50 is height of the tab
        return { x: posX, y: posY };
    }

    function createTabs(numTabs) {
        for (var i = 0; i < numTabs; i++) {
            console.log("creating");
            var newPos = randomPosition();
            var newTab = $('<div class="tab"></div>');
            newTab.css({ top: newPos.y + 'px', left: newPos.x + 'px' });

            //Drag
            $(function () {
                // Make the body draggable
                $("body").draggable({
                    handle: ".header",
                    drag: function (event, ui) {
                        console.log("dragging");
                        var dx = ui.position.left;
                        var dy = ui.position.top;
                        $(".tab").css("background-position", -dx + "px " + -dy + "px");
                    }
                });
            });
        }
    }

    // Add click event listener to the button
    $('.tab').click(function () {
        $(this).closest('.tab').fadeOut(300, function () {
            console.log("destroying");
            $(this).remove();
            tabCount += 2; // add the tab count
            createTabs(tabCount);
        });
    });

    createTabs(tabCount);
});
