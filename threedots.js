const num1 = [12, 13, 14];
const num2 = [15, 18, 20];
const num3 = [20, 23, 29];

// const result = num1.concat(num2).concat(num3);
// console.log(result);

// const result = [num1, num2, num3, 1230];
const result = [...num1, ...num2, ...num3, 1400]
console.log(result);

const razaiAmount = 500;
const zimAmount = 6500;
const rabbiAmount = 1200;
const result2 = Math.max(razaiAmount, zimAmount, rabbiAmount);
console.log(result2)

const totalAmount = [10, 20, 50];
const result3 = Math.max(...totalAmount);
console.log(result3)