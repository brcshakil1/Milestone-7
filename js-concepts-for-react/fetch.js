// 1. JSON

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

const employeeJson = JSON.stringify(employee);
const employeeObj = JSON.parse(employeeJson);

// fetch('url')
// .then(res => res.json())
// .then(data => data)
// console.log(employee, employeeJson, employeeObj)

const keys = Object.keys(employee);
const values = Object.values(employee);
// console.log(keys, values)

// add and remove from the array
const products = [
    {name:'laptop', price:3500, brand:'lenavo', color:'silver'},
    {name:'phone', price:3000, brand:'iphone', color:'black'},
    {name:'watch', price:200, brand:'casio', color:'red'},
    {name:'sunglass', price:300, brand:'ribon', color:'yellow'},
    {name:'camera', price:500, brand:'canon', color:'blue'}
];

const newProduct = {name:'webcam', price:340, color:'lal'};

// copy products array and then add new product
const newProducts = {...products, newProduct};
console.log(newProducts)

// create a new array with one specific item
// removed phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);