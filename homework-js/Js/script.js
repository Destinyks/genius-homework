// Якщо змінна більше нуля - виведіть true, менше - false

// let x = 1;
// console.log(x > 0 ? true : false); //true


//Перевірте це на варіантах 1, 0, -3.

// let x = 0;
// console.log(x > 0 ? true : false); // false

// let x = -3;
// console.log(x > 0 ? true : false); // false


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

// let value = "test";

// switch (value) {
//     case "test":
//         console.log(true);
//     break;

//     case "qwerty":
//         console.log(false);
//     break;

//     case "true":
//         console.log(false);
//     break;
// }

// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let number = 1;

// if (number >= 10) {
//     number -= 5; 
// } else if (number < 10) {
//     number += 5;
// }
// console.log(number); // 6


// let number = 10;

// if (number >= 10) {
//     number -= 5; 
// } else if (number < 10) {
//     number += 5;
// }
// console.log(number); // 5


// let number = 13;

// if (number >= 10) {
//     number -= 5; 
// } else if (number < 10) {
//     number += 5;
// }
// console.log(number); // 8


//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const value = Number(prompt('Введіть номер місяця'));
// let month;

// switch (value) {
//     case 1:
//         month = 'January';
//         alert(month);
//         break;


//         case 2:
//         month = 'February';
//         alert(month);
//         break;

//         case 3:
//         month = 'March';
//         alert(month);
//         break;

//         case 4:
//         month = 'April';
//         alert(month);
//         break;

//         case 5:
//         month = 'May';
//         alert(month);
//         break;

//         case 6:
//         month = 'June';
//         alert(month);
//         break;

//         case 7:
//         month = 'July';
//         alert(month);
//         break;

//         case 8:
//         month = 'August';
//         alert(month);
//         break;

//         case 9:
//         month = 'September';
//         alert(month);
//         break;

//         case 10:
//         month = 'October';
//         alert(month);
//         break;

//         case 11:
//         month = 'November';
//         alert(month);
//         break;

//         case 12:
//         month = 'December';
//         alert(month);
//         break;

//         default:
//         alert('Невірний номер місяця');
//         break;      
// }


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const value = prompt('Введіть трьохзначне число:');

// const stringValue = String(value);

// if (stringValue.length === 3 && !isNaN(value)) {
    
//     const digit1 = Number(stringValue[0]);
//     const digit2 = Number(stringValue[1]);
//     const digit3 = Number(stringValue[2]);

//     const sum = digit1 + digit2 + digit3;

//     alert(`Сума цифр у числі ${value} дорівнює ${sum}`);
// } else {
//     alert('Будь-ласка, введіть трьохзначне число.');
// }