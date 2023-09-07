const products = [
    {name:'laptop', price:3500, brand:'lenavo', color:'silver'},
    {name:'phone', price:3000, brand:'iphone', color:'black'},
    {name:'watch', price:200, brand:'casio', color:'red'},
    {name:'sunglass', price:300, brand:'ribon', color:'yellow'},
    {name:'camera', price:500, brand:'canon', color:'blue'}
];
// map
const brands = products.map(product => product.brand);
const price = products.map(product => product.price);
// console.log(brands, price);
// forEach
// products.forEach(product => console.log(product.color))
// products.forEach(product => {
//     console.log(product)
// })

// filter

const cheap = products.filter(product => product.price <=2000);
console.log(cheap)

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);
const specialName = products.find(product => product.name.includes('n'));
console.log(specialName);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(totalPrice)
