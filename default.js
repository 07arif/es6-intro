

// old default system if condition .

// function add(first, second) {
//     if (second === undefined) {
//         second = 0;
//     }
//     const total = first + second;
//     return total;

// }
// const result = add(10);
// console.log(result);

// old default system .
// function add(first, second) {
//     second = second || 0;
//     const total = first + second;
//     return total;

// }
// const result = add(10);
// console.log(result);

// es6 default value 
// function add(first, second = 0) {

//     const total = first + second;
//     return total;

// }
// const result = add(10);
// console.log(result);

// function fullName(first, last = 'chowdory') {

//     const total = first + ' ' + last;
//     return total;

// }
// const name = fullName('aslam')
// console.log(name);