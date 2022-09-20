let x = 10;
let y = 5;

x /= y; //Shortcut
// x += y; // artinya -> x = x + y;
// x -= y; // artinya -> x = x - y;
// x *= y; // artinya -> x = x * y;
// x /= y; // artinya -> x = x / y;
// x %= y; // artinya -> x = x % y;
console.log(x)

let myArr = ["Paul", "Walker", "Jon", "Bolot"]

//for of better than for
for (const loop of myArr) {
    console.log(loop);
}

function greet(data) {
    console.log('Halo ' + data)
}

greet('paul')

//Global Var
const a = 'a'

//Local Var
function parent() {
    const b = 'b';

    function child() {
        const c = 'c';

    }
}

function multiply(num) {
    total = num * num;
    return total;
}

let total = 9;
let number = multiply(20);

// alert(total)

// x = 9;
// showAngka();

// function showAngka() {

//     "use strict";
//     var x = 9;
//     alert(x)
// }