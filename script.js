//Main JavaScript Code

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        
        userList.appendChild(li);

        //Clear Fields
        nameInput.value = '';
        emailInput.value = '';
    }   
}






/*const btn = document.querySelector('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = "#ccc";
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
})

/*const ul = document.querySelector('.items');
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

btn.style.background = 'red';*/

// Console
/*console.log('Hello World');
console.error('error');
console.warning('warning');

// Variables
let age = 23;

console.log(age);
//Always use const unless you know you are going to reassign the value

// Data Types: Strings, numbers, boolean, null, undefined
const myName = 'Gibby';
const isStudent = true;
const x = null;
const y = undefined;
let z; //Will show as undefined

console.log(typeof age);

// Concatenation
console.log('My name is ' + myName + ' .');
console.log(`My name is ${myName}.`)

const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase)
console.log(s.toLowerCase)
console.log(s.substring(0, 5));
console.log(s.split(''));
console.log(s.split(, ));

//Single line comment
/*Multi-line comment*/

//Arrays
/*
const numbers = new Array(1, 2, 3, 4, 5)
const fruits = ['apples', 'grapes', 'bananas'];
fruits[1] = 'oranges';
console.log(fruits[1]);
fruits.push('mangos');
fruits.unshift('strawberries');
fruits.pop();

console.log(fruits.isArray);
console.log(fruits.indexOf('bananas'));


//object literals

const person = {
    firstName: 'Brayden',
    lastName: 'Gibson',
    personAge: 23,
    country: 'United States',
    hobbies: ['Piano', 'Painting', 'Video Games'],
    address: {
        city: 'Tooele',
        state: 'Utah'
        country: 'United States',
    }
}

console.log(person.firstName.lastName);
person.email = "brayden.gibson@gmail.com";

const todos = [
    {
        id: 1,
        task: 'Paint Walls',
        isCompleted: false
    },
    {
        id: 2,
        task: 'Mop Floor',
        isCompleted: false
    }, 
    {
        id: 3,
        task: 'Clean Toilet',
        isCompleted: false
    },];

//JSON
    const todo.JSON = JSON.stringify(todos);
    console.log(todo.JSON)


// For Loop
for(let i = 0; 1 < 10; i++) {
    console.log(`For Loop Number: ${i}`);
};

// While Loop
let i = 0;
while(i < 10; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
    i++;
}


// Looping through arrays
for(let todo of todos) {
    console.log(todo.id);
}

//conditionals
const pie = 10;

if (pie === 10) {
    console.log('pie is 10.');
} else if(x > 10) {
    console.log('pie is more than 10');
} else {
    console.log('No pie left')
}

const a = 6;

if(a >=6 || a === 0) {

}

//Switches
const dig = 11;
const color = dig > 10 ? 'red' : 'blue';

const addNums = (num1 = 1, num2 = 2)

//constructive function
function Person(firstName, lastName, dob) {
    this.firstName =  firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4-17-1995');
console.log(person1.getBirthYear);
console.log(person1.getFullYear);

console.log(person1.getFullName()); 
*/