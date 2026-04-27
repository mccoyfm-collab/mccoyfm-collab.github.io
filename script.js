//variables
const heading = document.querySelector("#heading");
const firstname = document.querySelector("#fname");
const lastname = document.querySelector("#lname");

//functions
lastname.oninput = function() {
    if (firstname.value == "1"){
        updateHeading("Come on, it's not that bad.");
    } else if (firstname.value == "2"){
        updateHeading("Better than one star.");
    } else if (firstname.value == "3"){
        updateHeading("Middle of the road, fair.");
    } else if (firstname.value == "4"){
        updateHeading("Hey okay, four ain't bad.");
    } else if (firstname.value == "5"){
        updateHeading("Aw really, five? Thanks!");
    } else {
        updateHeading("Hey just type out '1, 2, 3, 4, or 5' it isn't that hard.");
    }
}

firstname.oninput = function() {
    updateHeading("Thanks for taking the time to rate!");
}

function updateHeading(message) {
    heading.innerHTML = message;
}