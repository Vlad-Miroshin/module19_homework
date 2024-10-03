import {logOwnProps, hasOwnProp, hasProp} from '../assets/js/functions.js'

// Задание 2
// Напишите функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function Customer() {
    this.uuid = 'f227c5f-de3e-4cc7-b561-32a49a25b210',
    this.familyName = 'Петров',
    this.surname = 'Сергей',
    this.patronymic = 'Павлович',
    this.discount = 5,
    this.category = 'Private',
    this.birthDay = '1983-05-11'
}

Customer.prototype.abc = "abc";

const customer = new Customer();

console.log('Object customer');

logOwnProps(customer);

console.log('');
console.log(`hasOwnProp('familyName', customer) === ${hasOwnProp('familyName', customer)}`);
console.log(`hasOwnProp('abcdef', customer) === ${hasOwnProp('abcdef', customer)}`);
console.log(`hasOwnProp('abc', customer) === ${hasOwnProp('abc', customer)}`);
console.log(`hasProp('abc', customer) === ${hasProp('abc', customer)}`);
console.log(`hasProp('zzz', customer) === ${hasProp('zzz', customer)}`);