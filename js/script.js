let field1 = 'Привіт';
let field2 = 'Денис';

if (field1 !== '' && field2 !== '') {
    console.log('Обидва поля заповнені');
} else {
    console.log('Не всі поля заповнені');
}



let number1 = 2;
let number2 = 9;
let sum = number1 + number2;

if (sum > 10) {
    console.log('Сума більша за 10');
} else {
    console.log('Сума менша або дорівнює 10');
}



let text = 'Я вивчаю JavaScript';

if (text.includes('JavaScript')) {
    console.log('Текст містить слово JavaScript');
} else {
    console.log('Текст не містить слово JavaScript');
}



let number = 17;

if (number > 10 && number < 20) {
    console.log('Число входить в діапазон від 10 до 20');
} else {
    console.log('Число не входить в діапазон від 10 до 20');
}



let name = 'Денис';
let email = 'ting17021188@gmail.com';
let password = 'qwerty123';

if (name.length >= 3 && email.includes('@') && email.indexOf('.') > email.indexOf('@') && password.length >= 6) {
    console.log('Перенаправлення на іншу сторінку');
} else {
    console.log('Помилка: неправильне заповнення');
}