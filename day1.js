//AJAX
// function onLoad() {
//   var xHttpObj = new XMLHttpRequest();
//   xHttpObj.onreadystatechange = function data() {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("ajaxData").innerHTML = this.responseText;
//     }
//   };
//   xHttpObj.open("GET", "day1.txt", true);
//   xHttpObj.send();
// }

//Promise

// console.log(Promise.resolve("name"));

// const promise = new Promise(function (resolve, reject) {
//   let x = 5;
//   x % 2 == 0 ? resolve("Even") : reject("Odd");
// });
// promise.then(
//   function (value) {
//     console.log(console.log(value));
//   },
//   function (error) {
//     console.log(console.log(error));
//   }
// );

//Promise.all(), Promise.any(), Promise.race(), Promise.allSettled()

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "First");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Second");
// });

// Promise.all([promise1, promise2]).then((x) => {
//   console.log(x);
// });

// Promise.any([promise1, promise2]).then((x) => {
//   console.log(x);
// });
// Promise.race([promise1, promise2]).then((x) => {
//   console.log(x);
// });
// Promise.allSettled([promise1, promise2]).then((x) => {
//   console.log(x);
//   let status = x.forEach((i) => console.log(i.status));
// });

//call(), apply(), bind()

// const person = {
//   details: function (city) {
//     return this.name + " working in " + this.company + " at " + city + ".";
//   },
// };
// const person1 = {
//   name: "Satish",
//   company: "TCS",
// };
// const person2 = {
//   name: "Sai",
//   company: "V!",
// };

// console.log(person.details.call(person1, "Hyderabad"));
// console.log(person.details.call(person2, "Hyderabad"));
