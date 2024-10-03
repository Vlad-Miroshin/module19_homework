import {logOwnProps} from '../assets/js/functions.js'

// Задание 1
// Напишите функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

const customer = {
    uuid: 'f227c5f-de3e-4cc7-b561-32a49a25b210',
    familyName: 'Петров',
    surname: 'Сергей',
    patronymic: 'Павлович',
    discount: 5,
    category: 'Private',
    birthDay: '1983-05-11'
}

console.log('Object customer');

logOwnProps(customer);