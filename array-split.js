const numbs = [20, 30, 40, 5, 6, 7];
// const part = numbs.slice(2, 5);
const newPart = numbs.splice(2, 5, 45, 788);
console.log(newPart);
console.log(numbs);

const join = numbs.join('new');
console.log(join);