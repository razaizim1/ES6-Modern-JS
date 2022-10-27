// function doubleIt (num) {
//     return num * 2
// }

// const doubleIt = function (num) {
//     return num / 2;
// }


// ES6 Function
const doubleIt = num => num / 2;

console.log(doubleIt(5));

const result = (x, y) => {
    const multiline = x * y;
    const div = x / y;
    return multiline + div;
}

console.log(result(2, 4));