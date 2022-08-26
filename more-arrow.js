// 30-6 More Arrow functions and big arrow function

const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;

const sum = add(10, 30);
// console.log(sum);

const fullName = getFullName('abdur', 'razzak');
// console.log(fullName);

const result = multiply(7, 8);
// console.log(result);

const addAll = (a, b, c, d, e, f,) => a + b + c + d + e + f;


//no parameter arrow funtion;
const getPie = () => 3.14;

//one parameter 
const doubleIt = (number) => num * 2;


//one parameter simple version
const fiveTimes = num => num * 5;     //ekta parameter hole (first brecket-()) na dilew hoi

// multyline aroow function 
//if you want to return something, use the return 
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
const Math = (5, 5, 1);
console.log(Math);
