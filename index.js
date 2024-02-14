/* Counter program 
• Create 3 buttons and a label on Dom
• Clicking on the buttons should increase, decrease and reset the count*/

// Declaring DOM elements as variables to keep the code clean

let counttxt = document.getElementById("counttxt");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let count = 0;


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