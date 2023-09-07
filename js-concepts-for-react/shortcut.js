// 'al', 5, true, {}, []
// '', 0, false, null, undefined

let myNum = 7;
// check any truthy
if(myNum) {
    myNum = myNum * 2;
} else {
    myNum = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if(!myMoney) {
    console.log(myMoney)
}

const money = 130;
let food;
if(money > 100) {
    food = 'beriyani'
} else {
    food = 'cai khaw'
}

// ternary
let food1 = money > 120 ? 'fry chicken' : 'ca khaw' ;
console.log(food1)

// number to string conversion
const myNum2 = 32;
const myNumStr = myNum2 + '';
// console.log(myNum2);
// console.log(myNumStr);

// string to number
const myNumStr2 = '212';
const myNumNum = +myNumStr2;

console.log(myNumStr2);
console.log(myNumNum);

let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// use && if the left side is true then right side will executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive