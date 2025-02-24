//*apply()
// const person = {
//   details: function (city) {
//     return (
//       "My friend " +
//       this.name +
//       " " +
//       this.age +
//       " years Old. And living in " +
//       city
//     );
//   },
// };
// const person1 = {
//   name: "Satish",
//   age: 29,
// };
// console.log(person.details.apply(person1, ["Hyderabad"]));

//Scope of an apply()
// let arr = [1, 2, 3];
// console.log(Math.max.apply("", arr));
// console.log(arr.max());

//*bind()
// const person = {
//   name: "JS",
//   display: function () {
//     console.log(this.name);
//   },
// };
// console.log(person.display());
// let x = setTimeout(person.display, 3000);
// console.log(x); //1 Here x will acts as id of setTimeout() serial count
// setTimeout(person.display.bind(person), 3000);

//*async, await

// async function display() {
//   let myPromise = new Promise(function (resolve) {
//     resolve("async/await");
//     reject("rejected");
//   });
//   console.log(await myPromise);
// }
// display();

//*JS Classes, Project-Know the age using Class, Inheritance,

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const person1 = new Person("Satish", "29");
// const person2 = new Person("Sai", "27");
// console.log(person1);
// console.log(person2);

// class Person {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   age() {
//     let date = new Date();
//     let age = date.getFullYear() - this.birthYear;
//     return this.name + " age is " + age + " years old.";
//   }
// }
// console.log(person1.age());
// console.log(person1.age());

// class Person {
//   constructor(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//   }
//   age(parameter) {
//     let diff = parameter - this.birthYear;
//     return this.name + " age is " + diff + " years old.";
//   }
// }
// let date = new Date();
// let age = date.getFullYear();
// const person1 = new Person("abc", "1997");
// const person2 = new Person("xyz", "1999");
// console.log(person1.age(age));
// console.log(person2.age(age));

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   age() {
//     return "My name is " + this.name;
//   }
// }
// class Year extends Person {
//   constructor(name, birthYear) {
//     super(name);
//     this.birthYear = birthYear;
//   }
//   show() {
//     let date = new Date();
//     let diff = date.getFullYear() - this.birthYear;
//     return this.age() + " " + diff + " years old.";
//   }
// }
// const person1 = new Year("abc", "1999");
// console.log(person1.show());

//*Event Bubbling/Trickling

// document
//   .getElementById("grandParent")
//   .addEventListener("click", grandParentFunction);
// document.getElementById("parent").addEventListener("click", parentFunction);
// document.getElementById("child").addEventListener("click", childFunction);
// function grandParentFunction() {
//   console.log("first");
// }
// function parentFunction() {
//   console.log("second");
// }
// function childFunction() {
//   console.log("third");
// }

//*Event Loop

// console.log("start");
// setTimeout(() => {
//   console.log("Set Timeout");
// }, 0);
// Promise.resolve().then(() => {
//   console.log("Promise Resolved");
// });
// console.log("end");

//Exception Handling - try, catch, throw, finally

// let x = 6;
// try {
//   if (x % 2 == 0) throw consoe.log("Remainder 0");
//   if (x % 2 == 1) throw console.log("Remainder 1");
// } catch (err) {
//   console.log(err);
// }
