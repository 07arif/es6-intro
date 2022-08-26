// 30-4 Template string, multiple line string, dynamic string


const person = ' adam sandler';
const persson2 = "ben white";
const person3 = `donald trump`;

const multiLine = 'First Line Text \n' +
    'second Line of text \n' +
    'forth line of text \n';
// console.log(multiLine);

const newMultiline = `First Line of text
Second Line of Text
Thirsd line of text`;
// console.log(newMultiline)

const a = 20;
const b = 30;
const nums = [78, 96, 35, 20];

const summary = 'sum of : ' + a + ' and ' + b + ' is ' + (a + b);
// console.log(summary)

const newSummary = `sum of ${a}  and ${b.leng} is: ${a + b}`;
console.log(newSummary);


