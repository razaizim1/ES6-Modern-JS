const person = {name: 'Razai Zim', age: 25, job: 'Freelancer', friends: ['Tom', 'Jerry']}

// const {name, job,  friends} = person;
// console.log(name, job, friends);


// console.log(person.name);
// console.log(person.name);
// console.log(person.name);
// console.log(person.name);

friendsName = ['Razai Zim', 'King Khan', 'Sakib Khan', 'Amir Khan'];

const [first, ...newF] = friendsName;
console.log(first, newF);

const complexObj = {
    newName : 'Razai Zim',
    info : {
        address : 'Lola Bagan',
        job : 'Freelancer'
    }
}

const {job} = complexObj.info;
console.log(job)