// 30 - 7 Spread operator, array max, copy arrays


const max = Math.max(12, 85, 999, 79);
// console.log(max);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
number2 = [...numbers];
numbers.push(7777);
number2.push(55);
console.log(numbers)
console.log(number2)
// console.log(...numbers);
console.log(largest);

const number3 = [...numbers];
console.log(number3);

const number4 = [444, 78, ...numbers, 111]
console.log(number4);

//spred operator: The javascrift spread operator(...) allows us to quikly copy all part an existing array or object into another arary or object.

casr1;
var a = ['anonto,', 'sakib', 'mohusi']
console.log(a);
//result:  ['anonto,', 'sakib' ,'mohusi']

case2:
console.log(...a);
// result: Anonto Sakib Moushumi