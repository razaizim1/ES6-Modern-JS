const numbers = [2, 5, 6, 7, 9]
// const output = [];
// for( let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element *element;
//     output.push(result);
// }

// numbers.map (function(element){
//     return element *element;
// })

const result = numbers.map(x => x * x)
const result2 = numbers.filter (x => x > 5)

console.log(result2);