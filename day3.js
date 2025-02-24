//*Making Calls using fetch()

// fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//   console.log(res)
// );

// let data = {
//   name: "Sunil",
//   gender: "male",
//   email: "abcdefghijk@gmail.com",
//   status: "active",
//   gender: "male",
// };

// fetch("https://gorest.co.in/public/v2/users", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization:
//       "Bearer 81a7aaa45cd4826b2b1515f8b2d923cd7d0502d74502b0e6f381b2112b4910bb",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://gorest.co.in/public/v2/users/7714085", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization:
//       "Bearer 81a7aaa45cd4826b2b1515f8b2d923cd7d0502d74502b0e6f381b2112b4910bb",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// let data = {
//   name: "Satish",
// };

// fetch("https://gorest.co.in/public/v2/users/7713991", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization:
//       "Bearer 81a7aaa45cd4826b2b1515f8b2d923cd7d0502d74502b0e6f381b2112b4910bb",
//   },
//   body: JSON.stringify(data),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// let data = {
//   status: "Inactive",
// };

// fetch("https://gorest.co.in/public/v2/users/7713991", {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     Authorization:
//       "Bearer 81a7aaa45cd4826b2b1515f8b2d923cd7d0502d74502b0e6f381b2112b4910bb",
//   },
//   body: JSON.stringify(data),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://gorest.co.in/public/v2/users/7714085", {
//   method: "DELETE",
//   headers: {
//     Accept: "application/json",
//     Authorization:
//       "Bearer 81a7aaa45cd4826b2b1515f8b2d923cd7d0502d74502b0e6f381b2112b4910bb",
//   },
// }).then((res) => console.log(res.status));
// // .then((data) => console.log(data));

//*Default Values

// function defaults(x = 2, y = 3) {
//   console.log(x * y);
// }
// defaults(1, 7);
// defaults();

//*REST & SPREAD

// function rest(...args) {
//   console.log(args);
// }
// rest(1, 2, 3, 4, 5, 6, 7, 8, 9);
// [a, b, c, d, e, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(rest);
// const obj = {
//   name: "JS",
//   age: 30,
// };
// [...rest] = Object.keys(obj);
// console.log(rest);

// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [1, 2, 3, ...arr1, 7, 8, 9];
// console.log(arr2);

// const arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// const spread = { ...arr };
// console.log(spread);
// console.log(Math.max(arr));
// console.log(Math.max(...arr));

//*Closures

// function outer() {
//   let count = 0;
//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }
// outer();
// outer();
// let countFun = outer();
// countFun();
// countFun();
// countFun();

// let num = 0;
// function add() {
//   num++;
//   console.log(num);
// }
// add();
// add();
// add();

// add();
// add();

// function add() {
//   let num = 0;
// num++;
//   console.log(num);
// }
// let number = add();
// number();
// number();
// number();

// let number = function add() {
//   let num = 0;
//   num++;
//   console.log(num);
// };
// number();
// number();
// number();

//*Currying

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// let sum = add(3);
// console.log(sum(2));

let arr = [1, 2, 3];
let result = arr.forEach((num) => console.log(num * 2));
console.log(arr);

let mapResult = arr.map((num) => num * num);
console.log(mapResult);
console.log(arr);
