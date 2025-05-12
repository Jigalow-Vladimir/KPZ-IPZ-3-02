let strVar: string;
let numVar: number;
let boolVar: boolean;
let arrVar: [];
let objVar: object;

function printNameAge (name : string, age : number) : string {
    return `Name: ${name}, Age: ${age}`;
}

console.log(printNameAge("John", 30));

interface Person {
    name: string,
    age: number,
    address?: string,
}

function printPerson (person: Person) {
    console.log(
        `person ${person.name}:
        age: ${person.age}
        address: ${person.address}`
        );
}

let person: Person = { name: "John", age: 30, address: "some address"};
printPerson(person);

type Status = 'success' | 'error' | 'loading';

function checkStatus(status: Status) {
    console.log(`operation status: ${status}`);
}

checkStatus('success');
checkStatus('error');
checkStatus('loading');

function identity<T>(value: T): T {
    return value;
}

console.log(`string value:  ${identity("amogus")}`)
console.log(`number value:  ${identity(1)}`)
console.log(`boolean value: ${identity(false)}`)

class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    getCarInfo() : string {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}

let car = new Car("Panzerkampfwagen I Sd.Kfz. 101", 1934)
console.log(car.getCarInfo());
