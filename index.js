/* Counter program 
• Create 3 buttons and a label on Dom
• Clicking on the buttons should increase, decrease and reset the count*/

// Declaring DOM elements as variables to keep the code clean

let counttxt = document.getElementById("counttxt");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let count = 0;
let randomIndex = 0;
let tempRandom;

// Creating an array to store colours

let colours = ['#92FFF2', '#FF92D3', '#9B92FF', '#E9FF92', '#FD974E', 
              '#4EFDA9', '#FD4E4E', '#FFD700', '#FD4EEB', '#0085FF',]

/*Creating a function that generates a random number and use it as index 
in colours array to change the background color of the page and + symbol*/

function changeColor() {

    tempRandom = Math.floor(Math.random() * colours.length);

    if (tempRandom === randomIndex){
        tempRandom = Math.floor(Math.random() * colours.length);
    }
    else {
        randomIndex = tempRandom;
    }

}




// arrow function expression to decrease the count

decrease.onclick = () => {
    counttxt.textContent = count -= 1;
}

// arrow function expression to reset the count

reset.onclick = () => {
    count = 0
    counttxt.textContent = count;
}

// arrow function expression to increase the count

increase.onclick = () => {
    counttxt.textContent = count += 1;
}