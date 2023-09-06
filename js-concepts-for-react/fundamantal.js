// 1. How to declare a variable using let and const

const fatherName = 'Arnold';
let season = 'rainy season';
season = 'winter season';
const num = 9

// 2. condition
// 6 condition:=> >, <, >=, <=, !==, ===
// multiple condition && ||
if(fatherName === 'Shakib' || season === 'winter season') {
    console.log('One condition fulfilled')
} else if(num > 5) {
    console.log('Number is bigger')
} else {
    console.log('no condition fulfilled')
}

// 3. array declare
// index, length, push, pop, shift, unshift
// you can set an element value with index
const numbers = [12, 32, 45, 65, 67, 76, 78, 98];
numbers[3] = 100;
numbers.push(112);
numbers.unshift(120);
console.log('number array', numbers)

// 4. loop
// for loop, while loop
for (let i = 0; i < numbers.length; i++) {
    console.log('looping number', numbers[i]);
}

function sum(num1, num2) {
    return num1 + num2;
}

const result = sum(numbers[0], numbers[1]);
console.log('function', result);

const sum2 = (num1, num2) => num1 + num2;
const result2  = sum2(numbers[2], numbers[3]);
console.log('arrow function', result2)

// 6. object
//  3 ways to access property by name

const student = {
    id: 101,
    name: 'Shahabuddin', 
    age: 25
}

const id = student['id'];
console.log(id, student['name'], student.age);