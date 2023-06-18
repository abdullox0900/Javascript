'use strict'

// function Do() {
//     let x = 0
//      y = 0
//     x++
//     y++
//     return x
// }

// console.log(Do(), typeof x, typeof y);

// var res = console.log('Hello World');

// console.log(res);

let name = 'Ali';
let age = 19

// console.log('Ismi:', name, 'Yoshi:', age);

let elBody = document.body

let elText = document.createElement('p').textContent = 'Hello';

elBody.append(elText)

console.log(document.getElementById('text').textContent = `ismi: ${name} yoshi: ${age}`);
