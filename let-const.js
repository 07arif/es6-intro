//breakup with var
//no more use of var
//ler : let it to reassign
// const: do not allow it to reassign

let money = 34;
money = 50;
console.log(money);

let number1 = [12, 89, 65, 45];
number1 = [77, 66, 44, 22];
console.log(number1);




const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const message = bird + 'potas potas'; // reassign kora jabe na . modify kora jabe
console.log(message);


const number = [12, 89, 65, 45];
// number = [77, 66, 44, 22];
number.push(128);
number[1] = 90;
console.log(number);


const student = {

    name: 'mofiz',
    address: 'Rongpur',
}
student.name = 'mofazzol';
console.log(student);


//---------------
for (let i = 0; i < number1.length; i++) {
    const number = number1[i];
    console.log(number);

}