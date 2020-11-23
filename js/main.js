
// task 1


const handleClick = (button) => {
    let buttons = document.querySelectorAll('.button');
    for(let i=0; i<buttons.length; i+=1) {
        buttons[i].addEventListener('click', () => console.log(buttons[i].textContent));
    }
}

handleClick();


// task 2

const summation = (a = 0, b = 0) => a + b;

const subtraction = (a = 0, b = 0) => a - b;

console.log(summation(30));
console.log(summation(30, 10));
console.log(subtraction(10));
console.log(subtraction(10, 5));


// task 3

const personDataLog = ({ firstName = 'John', lastName = 'Doe', age = 33 } = {}) => {
    console.log("My name is", firstName, lastName + ". I'm", age, "years old.");
}

const person = {
    firstName: 'Jane',
};

personDataLog(person);

const person2 = {
    firstName: 'Jim', lastName: 'Smith', age: 44
};

personDataLog(person2);