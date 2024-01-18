const calcAverage = (a, b, c) => {
    return (a + b + c) / 3
}

const Dolphins = calcAverage(28, 16, 29)
const Koalas = calcAverage(22, 27, 19)

function checkWinner(avgDolphins, avgKoalas) {
    if(avgDolphins > avgKoalas) {
        console.log(`Dolphins won ${avgDolphins} vs ${avgKoalas}`)
    } else {
        console.log(`Koalas won ${avgKoalas} vs ${avgDolphins}`);
    }
}

checkWinner(Dolphins, Koalas)