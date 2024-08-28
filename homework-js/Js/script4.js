// --1--
// 1) написати об`єкт студента який буде виводити ім`я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити значення за допомогою call, apply, bind

// const infoStudent = {
//     name: name,
//     speciality: "engineer",
//     rating: 4.2,
//     missedСlasses: 10,
//     showInfo: function () {
//         console.group(`${name} info:`);
//         console.log(`Name : ${this.name}`);
//         console.log(`Speciality : ${this.speciality}`);
//         console.log(`Rating : ${this.rating}`);
//         console.log(`Missed classes : ${this.missedСlasses}`);
//         console.groupEnd();
//     },
// };

// const Dmytro = {
//     name: "Дмитро",
//     speciality: "mechanical engineering",
//     rating: 3.7,
//     missedСlasses: 12,
// }

// const Olivia = {
//     name: "Олівія",
//     speciality: "desiner",
//     rating: 4.1,
//     missedСlasses: 5,
// }

// const Lidia = {
//     name: "Лідія",
//     speciality: "manager",
//     rating: 4.5,
//     missedСlasses: 3,
// }

// infoStudent.showInfo.bind(Dmytro)();
// infoStudent.showInfo.call(Olivia);
// infoStudent.showInfo.apply(Lidia);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const term = {
//     name: name,
//     showInfo() {
//         console.log(`${this.name} - це ${this.info}`);
//     },
// };

// const term1 = {
//     name: "HTML",
//     info: "стандартизована мова гіпертекстової розмітки документів для перегляду веб-сторінок у браузері.",
// };
// const term2 = {
//     name: "CSS",
//     info: "спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду."
// };

// document.querySelector("#html").addEventListener("click", term.showInfo.bind(term1));
// document.querySelector("#css").addEventListener("click", term.showInfo.bind(term2));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89, 3,4

// const items = {
//     name: name,
//     price: "грн",
//     amount: "кг",
//     showInfo() {
//         console.log(this.name, ":", this.price, "грн");
//     },
// };

// const item1 = {
//     name: "banana",
//     price: 30,
//     amount: 4.5,
// };

// const item2 = {
//     name: "cherry",
//     price: 58,
//     amount: 1.3,
// };

// const item3 = {
//     name: "orange",
//     price: 89,
//     amount: 3.4,
// };

// items.showInfo.bind(item1)();
// items.showInfo.call(item2);
// items.showInfo.apply(item3);