// 1. array destructuring
const numbers = [42, 64];
// const x = numbers[0];
// const y = numbers[1];

const [x,y] = numbers;

const boxify = (num1,num2) => {
    const nums = [num1, num2];
    return nums
}

// const [first, seconds]= [90, 43]
const [first, seconds]= boxify(90, 43);

// console.log(boxify(23,245))
const student = {
    id: 101,
    name: 'Shahabuddin', 
    age: 25,
    movies: ['number one', 'king khan', 'Dakhar pula']
}

const [firstMovie, secondMovie, thirdMovie] = student.movies;

// object destructuring
const {name,age,salary}= {name:'allu',age:26, salary:3555000};

const employee = {
    ide: 'VS code',
    designation: 'developer', 
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 5.5,
        weight:64,
        address: 'Moulvibazar',
        drink: 'water',
        watch: {
            color: 'black',
            price:500,
            brand: 'garmin'
        }
    }
}

const {ide, designation} = employee;
const {height, address} = employee.specification;
const {brand} = employee.specification?.watch;
console.log(brand)
