const students = [
    { id: 45, name: "Deepjol" },
    { id: 21, name: 'Omar' },
    { id: 11, name: "Sakib" }
];

const names = students.map(s => s.name);
const ids = students.map( i => i.id);
console.log(ids);
console.log(names);

const bigger = students.filter( s => s.id > 40);
console.log(bigger);

const biggerOne = students.find ( s => s.id > 40);
console.log(biggerOne);
