const numbers = [12, 32, 45, 65, 67, 76, 78, 98];

const student = {
    id: 101,
    name: 'Shahabuddin', 
    age: 25,
    movies: ['number one', 'king khan', 'Dakhar pula']
}

// template string
const studentSelf = `The actor name is ${student.name}. He is ${student.age}. The movie: ${student.movies[2]} `;

const num = () => 44;
const sum = (a,b) => a + b;
const isEven = (a) => a % 2 === 0;
const sum2 = (a,b,c) => a + b + c;
const doMath = (x, y) => {
    const sum = x + y;
    return sum;
}

// spread operator
const newNumArr = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 22, 33];

numbers.push(55);
numbers.push(55);
numbers.push(55);

console.log(studentSelf);
console.log(numbers);
console.log(newNumArr);
console.log(currentNumbers);