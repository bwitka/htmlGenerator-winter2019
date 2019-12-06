// let needToUpdate = 0;

// let myFirstPromise0 = new Promise(resolve => {
//   let saveThis = needToUpdate;

//   setTimeout(resolve, 2000);
// });

// let myFirstPromise1 = new Promise(resolve => {
//   let saveThis = needToUpdate;

//   setTimeout(resolve, 2000);
// });

// // myFirstPromise0.then(() => { console.log("This promise was fulfilled!")}).finally(() => {console.log("We are done here!")});
// // myFirstPromise1.then(() => { console.log("This promise was fulfilled!")}).finally(() => {console.log("We are done here!")});

// Promise.all([myFirstPromise0, myFirstPromise1]).then(results => {
//   console.log(results);
// });

// // Math.random();
// // ["hello"].forEach();
// // Array.forEach

// console.log("This runs after calling the Promise!");

// // let honda = new Car();

// // function runThisFunction(myFunction) {

// //     setTimeout(myFunction, 2000);

// // }

// // runThisFunction(alert("hello!"));

// // runThisFunction(() => {console.log("Goodbye!")});

// function convertToF(celsius) {
//   let fahrenheit = (celsius * 9 / 5 + 32);
//   return fahrenheit;
// }

// let convertToF = celsius => {
//   return (celsius * 9) / 5 + 32;
// };

// // // console.log(convertToF(30));

// let convertToC = fahrenheit => {
//   return ((fahrenheit - 32) * 5) / 9;
// };

// console.log(convertToC(convertToF(30)));

// let convertToTempScale = (num, scale) => {
//   if (scale === "F" || scale === "f") {
//     return `${convertToC(num)}C`;
//   } else if (scale === "C" || scale === "c") {
//     return `${convertToF(num)}F`;
//   } else {
//     console.log(
//       `You forgot to enter a acceptable temperature or scale value (or possibly both). Please enter two values like so: convertToTempScale(30, "C")`
//     );
//   }
// };

// console.log(convertToTempScale(30, "C"));

// let convertToCustomTemp = (temp, equation) => {
//   console.log(equation(temp));
// };

// convertToCustomTemp(32, F => {
//   return ((F - 32) * 5) / 9 + 273.15;
// });

let numArray = [100, 35, 78, 1, 23, 900, 3, 14, 60, 8];

let newNumArray = numArray.map(num => {
  return num * 2;
});

console.log(numArray, newNumArray);
