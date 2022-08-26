// Arrow function, multiple parameter, function body

// function add(first, second) {
//     const total = first + second;
//     return total;
// }

// document.getElementById('btn').addEventListener('click',function addBG(){
// })

const number = 58;


//function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// function expression with anonymous function 
const add2 = function (first, second) {

    const total = first + second;
    return total;
}
//============================

function add(first, second) {
    const total = first + second;
    return total;
}

function add4(first, second) {
    return first + second;

}

const add5 = function (first, second) {
    return first + second;
}

// arrow function 
const add6 = (first, second) => first + second;

const result = add6(10, 50);
console.log(result);

//interview question : differences between declaration,function expression and aroow function 