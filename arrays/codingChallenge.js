
const calcTip = (x) => {
    if (x >= 50 && x <= 300){
        return x * 0.15
    } else return x * 0.2
}

const bills = [125, 555, 44]
const tips = [calcTip(125), calcTip(555), calcTip(44)]

console.log(tips);


console.log('------------------------------');


// const ages = [5, 2, 4, 1, 15, 8, 3];
function calcAverageHumanAge(ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
    console.log(humanAges);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])