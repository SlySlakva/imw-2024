// let groceries = { "meat": "ground beef", "fruits": "strawberries", "snacks": "chocolate eggs" };
// let char = [{ "name": "gojo satoru", "power": "infinity" }, { "name": "geto suguru", "power": "curse manipultion" }];
// console.log(groceries); //returns the keys
// console.log(groceries.meat); //returns the value of the key. 

// $('groceries.fruit').append('<p>$(groceries.snacks)</p>');
// $('body').append('<p>$(groceries.fruit)</p>');

// for (let i = 0; i < char.length; i++) {
//     <div>

//     </div>
//     $('body').append('<p>$(char[i].name)</p>');
// }

//something about fetch idek anymore. 

fetch("data.json")
    .then(function (response) {
        //check for response from file (?)
        return response.json();
    })
    .then(function (data) {
        //display data to document 
        console.log(data.char(0).name);
    })
    .catch(function (error) {
        //display error message
        $('body').append('<h1>WUH OH SOMETHING IS STINKY</h1>');
        console.log("uh oh something's stinky...")
    })


// Make a GET request to the API endpoint
fetch("https://eightballapi.com/api")
    .then(response => {
        // Check if the response is successful (status code 200)
        if (response.ok) {
            // Parse the JSON response
            return response.json();
        } else {
            // If the response is not successful, throw an error
            throw new Error("Failed to fetch data from the API");
        }
    })
    .then(data => {
        // Extract the answer from the response
        let answer = data.answer;
        // Display the answer
        console.log("The answer is:", answer);
        document.getElementById("answerText").innerText = answer;
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error("Error:", error);
    });

