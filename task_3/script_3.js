import {createEmptyObject} from '../assets/js/functions.js'

// Задание 3
// Напишите функцию, которая создает пустой объект, но без прототипа.

const obj = createEmptyObject();

console.log(obj);

console.log('');
console.log(`Object.getPrototypeOf(obj) === ${Object.getPrototypeOf(obj)}`);
