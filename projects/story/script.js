document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.getElementById("star-container");

    function createStar() {
        //get the details of the star and assign a random position to it. 
        const star = document.createElement("div");
        star.className = "star";

        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        starContainer.appendChild(star);
    }

    //If less than the number given, create a star. 
    function createStars(numStars) {
        for (let i = 0; i < numStars; i++) {
            createStar();
        }
    }

    //Number of stars created
    createStars(200);
});
