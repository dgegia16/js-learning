let arr = ['a', 'b', 'c', 'd', 'e,' ];
let arr2 = ['f', 'g', 'h', 'i', 'j']

let result = arr.join('|')

console.log(arr.concat(arr2));
console.log(arr.splice(1, 3));
console.log(result);

console.log('-------------------------');

// MAPPING ARRAYS

const multiply = 2.5;
const array = [2, 4, 6, 7, 19, 21, -100, -20];

// const mappedArray = array.map(function(mult){
//     return mult * multiply
// });

// const mappedArray = array.map((arrayNumbers) => {
//     return arrayNumbers * multiply
// })


// console.log(array);
// console.log(mappedArray);

console.log('-------------------------');

const deposits = array.filter(function(arrayNumbers){
    return arrayNumbers > 0;
})
console.log(deposits);

const withdrawals = array.filter(function(arrayNumbers){
    return arrayNumbers < 0
})

console.log(withdrawals);

console.log('-------------------------');

// accumulator => SNOWBALL
// const balance = array.reduce(function(acc, cur){
//     console.log(`Iteration ${i}: ${acc}`);
//     return acc + cur;
// }, 100);
// console.log(balance);

console.log('------------------------');

const numbers = [1, 2, 3, 4, 5];

const factorial = numbers.reduce(function(prev, cur){
    return prev * cur
}, 0)

console.log(factorial);

console.log('-------------------------');

const mapping = numbers.map(function(number){
    return number + 1
})

console.log(mapping);
console.log(numbers);


const cars = ['Volvo', 'Ferrari', 'Opel'];

const objectArray = cars.map(car => ({car}))
console.log(objectArray);


console.log('----------------------------');



const names = ['David', 'John', 'George', 'Kev'];

const res = names.find(findJohn);

function findJohn(item){
    return item === 'John'
}

console.log(res);


// FILTER

const nums = [1, -3, 19, -233, 28, 10, -92, -121];

const final = nums.filter(findNegative);

function findNegative(number){
    return number < 0;
}

console.log(final);
console.log(nums);

console.log('---------------------------------');

// FIND INDEX

const pasuxi = nums.findIndex(ipoveAti)

function ipoveAti(value){
    return value === 10;
}

console.log(pasuxi);


names.splice(0, 3);
console.log(names);