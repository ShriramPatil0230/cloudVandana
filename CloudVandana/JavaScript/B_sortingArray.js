const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to sort an array in descending order
function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Take user input for an array
rl.question('Enter numbers separated by spaces: ', (inputArray) => {
    const arr = inputArray.split(' ').map(Number);
    sortDescending(arr);
    console.log("Sorted Array in Descending Order:", arr);
    rl.close();
});
