// let obj1 ={name: "Kamila", age: "20" objfune: {name: "Kanat"}}
// let obj2 = obj1
// obj2.name

// ! Деструктуризация - это специальный синтаксис, который позволяет нам распоковать массив или объект в несколько переменных.
// ? Деструктизация массива

// const array = [100, 200, 300, 400, 500];

// let [a, b, c, d, e] = array;
// console.log(a, b, c, d, e);

// let array2 = ["john", "Mike", "Michael"];
// let [person1, person2, person3] = array2;
// console.log(person1);
// console.log(person2);

// ? Rest - Оператор
// С помощю Rest оператора можно получить остаточные значение.

// const food = ["eggs", "milk", "bread", "banan", "kaimak"];
// let [item1, , ...other] = food;
// console.log(item1);
// console.log(item2);
// console.log(other);

// let num1 = 1;
// let num2 = 2;
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log(num1, "num1");
// console.log(num2, "num2");

// let num1 = 1;
// let num2 = 2;
// [num1, num2] = [num2, num1];
// console.log(num1, "num1");
// console.log(num2, "num2");

// let zero = 2;
// let one = 1;
// let two = 0;
// [zero, one, two] = [two, one, zero];
// console.log(zero);
// console.log(one);
// console.log(two);
// console.log(zero, one, two);

// ? Деструктицация обеъекта
//! Порядок НЕ обяхателен

// let artist = {
//   name: "Drake",
//   lastName: "Грион",
//   position: "repper",
// };

// let { name, lastName, position } = artist;
// console.log(name);
// console.log(lastName);
// console.log(position);

// ? Перезаписовкеи кдючи в переменные
// let artist = {
//   name: "Drake",
//   lastName: "Грион",
//   position: "repper",
// };

// let { name: hisName, lastName: hisLastName, position: hisPosition } = artist;
// console.log(hisName, hisLastName, hisPosition);
// console.log(artist);

// // ! Деструктризация строки
// let strMain = "Makers course bootcamp";
// let newstrMain = strMain.split(" ");
// let [str1, , str2] = newstrMain;
// console.log(str1);
// console.log(str2);

// // ! Spread (поверхностная копирование. Изменение в  копии не повлияет на оригинал)

// let arr1 = ["hello", "bye", "good"];
// let arr2 = ["Привет", ...arr1, "Пока"];
// console.log(arr2);
// console.log(arr1);

// let arr3 = [...arr1];
// console.log(arr3);
// arr3.push("Добавили новое значение");
// console.log(arr3);
// console.log(arr1);

// ? Конкатенация

// let array1 = [20, 30];
// let array3 = [40, 50];

// let newArray = array1.concat(array3);
// let newArray = [...array1, ...array3];
// console.log(newArray);

// let object1 = { name: "Nursultan", position: "programmer" };
// let object2 = { name1: "Ilika", position1: "chempionUFC" };
// let resObj = { ...object1, ...object2 };
// console.log(resObj);

// ! JSON.parse() и JSON.stringify()

// const car1 = {
//   color: "red",
//   name: "Mers",
//   details: { model: "kaban", year: 1996 },
// };

// let car2 = { ...car1 };
// car2.color = "black";
// car2.details.year = 2000;
// console.log(car1);
// console.log(car2);

// ? JSON.stringify() преобразует переданный элемент в строку с форматом JSON. Затем JSON.parse () преобразует его обратно в объект JavaScript, это позволяет выполнять глубокое клонирование и для вложенных объектов, чего не происходит с оператором Spread.

// const car1 = {
//   color: "red",
//   name: "Mers",
//   details: { model: "kaban", year: 1996 },
//   sayHello() {
//     console.log("Не работает в глуюоком е=копировании");
//   },
// };

// let car2 = JSON.stringify(car1);
// car2 = JSON.parse(car2);
// let car2 = JSON.parse(JSON.stringify(car1));
// car2.details.year = 2005;
// console.log(car2);
// console.log(car1);

//! Вложенная деструктуризация
// let person = {
//   name: "Jack",
//   age: 19,
//   favoriteFood: ["Lagman", "Manty"],
//   pet: {
//     name: "Sharik",
//     age: 2,
//   },
//   study: {
//     university: "KSTU",
//     subjects: ["Math", "Literature"],
//     location: {
//       str: "Manas str 66",
//       city: "Bishkek",
//     },
//   },
// };

// let {
//   name,
//   favoriteFood: [food1, food2],
//   pet: { name: petName },
//   study: {
//     university,
//     subjects: [, litra],
//     location: { city, index = 1111 },
//   },
// } = person;
// console.log(name, food1, food2, petName, university, litra, city, index);

// //todo get: lagman and manty, sharik, KSTU, Literature, Manas str 66, Bishkek,
