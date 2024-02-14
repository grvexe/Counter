/* Counter program 
• Create 3 buttons and a label on Dom
• Clicking on the buttons should increase, decrease and reset the count*/

// Declaring DOM elements as variables to keep the code clean

let counttxt = document.getElementById("counttxt");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let count = 0;

// Creating an array to store colours

let colours = ['#92FFF2', '#FF92D3', '#9B92FF', '#E9FF92', '#FD974E', 
              '#4EFDA9', '#FD4E4E', '#FFD700', '#FD4EEB', '#0085FF',]


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