// 30-8 (advanced) Object and Array Destructuring

const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '0128548564',
    price: 4000

}
const phone = fish.phone;
const color = fish.color;
const price = fish.price;


console.log(phone);
console.log(color);
console.log(price);

//Object Destructuring
const { address } = fish;
console.log(address)

const { age, name } = { name: 'Almas', age: 56, profession: 'makeupArtist' }
console.log(age);


//array Destructuring
const [first, another] = [44, 99, 55, 66]
console.log(first, another)


//
const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(lost)

//
function getName() {
    return ['baba', 'caca'];
}
const [baba, caca] = getName();
console.log(caca, baba)