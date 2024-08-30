//Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні

// class Abonent {
//     constructor(name, phoneNumber) {
//         this.name = name;
//         this._phoneNumber = phoneNumber;
//     }
    
//     set phoneNumber(newPhoneNumber) {
//         if (typeof newPhoneNumber === 'string' && newPhoneNumber.startsWith('+')) {
//             this._phoneNumber = newPhoneNumber;
//         } else {
//             console.log('Некоректний номер телефона');
//         }
//     }

//     get info() {
//         return `Iм'я: ${this.name}  телефон: ${this._phoneNumber}`;
//     }
// }
// const Pavel = new Abonent("Павел", "+380987788934");
// Pavel.phoneNumber = "+380987654321";
// console.log(Pavel.info); 

// const Natalia = new Abonent("Наталія", "+80987665445");
// Natalia.phoneNumber = "30658945789";
// console.log(Natalia.info);

// const Yana = new Abonent("Яна", "+45677654342");
// console.log(Yana.info);
