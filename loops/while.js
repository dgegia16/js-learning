// Write a program that uses a while loop to count down from 10 to 1.

let num1 = 10;

while (num1 >= 1) {
    console.log(num1);
    num1--
}

console.log('-------------------------');

// Write a program that calculates the sum of numbers from 1 to 5 using a while loop.

let num = 1;
sum = 0;

while (num <= 5) {
    sum += num
    num++
}

console.log(sum);

console.log('-------------------------');

// Display even numbers from 2 to 10 using a while loop.

let even = 2;

while (even <= 10) {
    console.log(even);
    even += 2
}

console.log('-------------------------------');

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (x) => {
    if (x >= 50 && x <= 300){
        return x * 0.15
    } else return x * 0.2
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i])
}
console.log(bills, tips, totals);







