// class Parent {
//     constructor(){
//         this.fatherName = 'Sarkar';
//     }
// }

// class Child extends Parent {
//     constructor(name){
//         super();
//         this.name = name;
//         this.school = 'G.M. Pilot High School'
//     }
// }

// const baby1 = new Child('Razai Zim');
// console.log(baby1);


class Parent {
    constructor() {
        this.fatherName = 'Sarkar';
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
        this.school = 'G.M. Pilot High School'
    }
    getFullName() {
        return this.name + ' ' + this.fatherName
    }
}

const baby1 = new Child('Razai Zim');
console.log(baby1.getFullName());