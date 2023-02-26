class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    apresentar() {
        console.log(`Olá me chamo ${this.name} tenho ${this.age} anos e tenho ${this.height} de altura.`);

    }
}

class Worker extends Person {

    constructor(name, age, height, occupation) {
        super(name, age, height);
        this.occupation = occupation;
    }


    profissao() {
        return this.occupation;
    }

    apresentar() {
        console.log(`Olá me chamo ${this.name} tenho ${this.age} anos e tenho ${this.height} de altura e sou ${this.occupation}.`);
    }
}
// Testes:
const person1 = new Person('Joana Mel', 18, 1.72);
person1.apresentar();
const person2 = new Worker('Pedro Val', 25, 1.73, 'desenhista');
person2.apresentar();