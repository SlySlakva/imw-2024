//First Container - Color Select
//Variables
//A quicker version of color select
const colorBtns = document.querySelectorAll(".colors");
let interactionContainer = document.getElementById("interactionContainer");
console.log(colorBtns);

//setting up for the number of colors. 
for (let i = 0; i < colorBtns.length; i++) {

    colorBtns[i].addEventListener('click', function () {
        interactionContainer.style.backgroundColor = getComputedStyle(colorBtns[i]).backgroundColor;
    })

}

//Second Container - Loop Task
//Variables
const loopContainer = document.getElementById("loopContainer");
const message = "Brave";

//For Loop - to repeat text element. 
for (let i = 0; i < 10; i++) {
    const textDiv = document.createElement("div"); //creating a div element in js. can be a paragraph element, etc. 
    textDiv.innerHTML = message; //include the message variable to this div. 
    loopContainer.appendChild(textDiv); //ties the text element to the div element
}

//Third Container - Conditions. 
//Variables
const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

//Event Listeners - to change the color of the square based on the mouse location. 
conditionContainer.addEventListener("mouseover", function () {
    square.style.backgroundColor = "red";
})

conditionContainer.addEventListener("mouseout", function () {
    square.style.backgroundColor = "lightsalmon";
}
)

//Fourth Container - The Passage of Time.
const increase = document.getElementById("increaseText");
var currentSize = 20; //starting size
var increment = 0.5; //size increase per second.

//Function - to increase the size over time. 
function increaseSize() {
    currentSize += increment; //add to the font size over time.
    increase.style.fontSize = currentSize + "px"; //apply new font size to css. 
    setTimeout(increaseSize, 100); //Time out after 100 seconds. 
}

increaseSize(); //Calling function to start it


//Fifth Container - Simon Says. 
//Variables
const inputText = document.getElementById("inputText");
const textLength = document.getElementById("text-length");
const form = document.getElementById("form");

//Event Listeners - to check if the user submits their response and change the display text accordingly. 
form.addEventListener("submit", function (event) {

    //prevent the submit event from executing it's usual behaviour of reloading the page. 
    event.preventDefault();

    //get the input value the user submitted with. 
    const inputValue = inputText.value;

    //apply the input value to the display text. 
    textLength.textContent = inputValue;

    // Clear the input field
    inputText.value = '';

    // Print a log of all the submissions the user sent. 
    console.log('User Submission: ' + inputValue);
}
)

//Six Container - Console Log. 
console.log("Sixth Container.");
console.log("My name is Jared, 19.");

