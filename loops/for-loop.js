//-----------1------------

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum = 0;

for (let i = 0; i < arr_1.length; i++) {
  sum += arr_1[i];
}

for (let i = 0; i < arr_1.length; i++) {
  sum += arr_2[i];
}

console.log(sum);

// -----------------2----------------

let n1 = 22;

for (let i = 2; i <= 22; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("-------------------------");

// -----------------3----------------

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

console.log("--------------------------");

// -----------------4----------------

let arr_3 = [4, 6, 7];
let arr_4 = [8, 1, 9];
let arr_sum = [];

for (let i = 0; i < arr_3.length; i++) {
  arr_sum.push(arr_3[i] + arr_4[i]);
}

console.log(arr_sum);

console.log("---------------------------");

// -----------------5----------------


/* Write a for loop that prints numbers from 1 to 10. */

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log('-------------------------------');

/* Write a for loop that prints even numbers from 2 to 20. */

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log('----------------------------');

/* Write a for loop that prints numbers from 10 to 1 in reverse order. */

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log('----------------------------');

/* Write a for loop to calculate and print the sum of numbers from 1 to 5. */

let sum1 = 0

for (let i = 1; i <= 5; i++) {
  sum1 += i
  
}

console.log(sum1);

// ------------------------------------

let num = 5;
let num2 = '5';

console.log(num === num2);

//---------------------------

for (let rep = 1; rep <= 10; rep++) {
  console.log(`rep number ${rep}`);
}


console.log('------------------------');

// -----------------------------------

const infoArr = [
  'Dati',
  new Date().getFullYear() - 2005,
  'student'
]

for (let i = 0; i < infoArr.length; i++) {
  console.log(infoArr[i]);
  
}

console.log('--------------------------');

const years = [1991, 2007, 1969, 2023]
const ages = []


for (let i = 0; i < years.length; i++) {
  ages.push(new Date().getFullYear() - years[i])
}

console.log(ages);