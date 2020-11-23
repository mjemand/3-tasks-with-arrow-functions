
// task 1


const handleClick = (button) => {
    let buttons = document.querySelectorAll('.button');
    for(let i=0; i<buttons.length; i+=1) {
        buttons[i].addEventListener('click', () => console.log(buttons[i].textContent));
    }
}

// ('button:nth-child(2)')
handleClick();


// task 2

const sum = (a = 0, b = 0) => a + b;
console.log(sum(10));

function sub(a = 0, b = 0) {
    return a - b;
}

function higherOrderFunction(fn1, fn2, x, y) {
    return fn1(x, y) + fn2(x, y);
}

console.log(higherOrderFunction(sum, sub, 10));

console.log(sum());



// task 3

const personDataLog = ({ firstName = 'John', lastName = 'Doe', age = 33 } = {}) => {
    console.log('My name is ', firstName, lastName, '. Im ', age, 'years old');
}

const person = {
    firstName: 'Jane',
};

personDataLog(person);

