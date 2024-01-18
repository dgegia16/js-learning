// // Write a function that takes two parameters and returns their sum.

// function sum(a, b) {
//     return a + b
// }

// const res = sum(10,20)
// console.log(res);

// console.log('-----------------------------');

// // Write a function that takes two parameters and returns their product

// function multiply(a,b) {
//     return a * b
// }

// const result = multiply(10,20)
// console.log(result);

// console.log('------------------------------');

// // Write a function that takes a name as a parameter and returns a greeting message.

// function helloMessage(name){
//     return `Hello, ${name}`
// }

// const hello = helloMessage("Dati")
// console.log(hello);

// console.log('-------------------------------');

// // Write a function that takes a number as a parameter and returns whether it's even or odd.

// function numbers(a){
//     if (a % 2 === 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

// const evenOdd = numbers(5)

// console.log(evenOdd);

// console.log('-------------------------------');


// const fruitSlicer = (fruits) => {
//     return fruits * 4
// }

// function fruitProcessor(apples, oranges) {

//     const appleSlicer = fruitSlicer(apples)
//     const orangeSlicer = fruitSlicer(oranges)

//     const juice = `Juice with ${appleSlicer} apples and ${orangeSlicer} oranges`;
//     return juice;
// }

// const resultat = fruitProcessor(5,4)

// console.log(resultat);

// console.log('---------------------------------');

// function calculateAge(birthYear) {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - birthYear
//     return age
// }

// const shedegi = calculateAge(2005)

// console.log(shedegi);


// console.log('---------------------------------');

// const retirementCalculator = (birthDate, firstName) => {
//     const weli = new Date().getFullYear();
//     const asaki = weli - birthDate
//     const retirement = 65 - asaki
//     return `${firstName} pensiaze gava ${retirement} welshi`
// }

// const sapensioAsaki = retirementCalculator(2005, "Dati")
// console.log(sapensioAsaki);


// console.log('--------------------------------');


// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1, price = 199){
//     // ES5
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking('LH123', 30, 200)



// console.log('-------------------------');

// const example = {
//     key: 'value',
//     name: 'pavle',
//     lastName: 'xui'
// }

// const ricxvi = 5;
// let kopi = ricxvi;
// kopi = 8;

// const copy = example;
// copy.name = 'joni'

// console.log(example);
// console.log(copy);
// console.log(ricxvi);


// console.log("--------------------------")


// const MarriotHotel = {
//     name: 'Marriot',
//     iataCode: 'MRT',
//     bookings: [],
//     book(roomNum, name){
//         console.log(`${name} reserved a room number ${this.iataCode}${roomNum}`);
//         this.bookings.push({roomNum: `${this.iataCode}${roomNum}`, name: `${name}`})
//     }

// }

// MarriotHotel.book(489, 'Dati')
// MarriotHotel.book(123, 'Joni')
// console.log(MarriotHotel);


// const ParagraphHotel = {
//     name: 'Paragraph',
//     iataCode: 'PRG',
//     bookings: [],
    
// }


// // CALL METHOD
// // calling function from another object LINE 164
// const book = MarriotHotel.book;

// book.call(ParagraphHotel, 234, 'Zauri')
// console.log(ParagraphHotel);

// book.call(MarriotHotel, 564, 'Ylifona');
// console.log(MarriotHotel);

// const SheratonHotel = {
//     name: 'Sheraton',
//     iataCode: 'SHT',
//     bookings: []
// }

// book.call(SheratonHotel, 444, 'Mutela')
// book.call(SheratonHotel, 111, 'Vagina')

// console.log(SheratonHotel);

// // BIND METHOD

// const bookPRG = book.bind(ParagraphHotel);
// const bookSHT = book.bind(SheratonHotel);

// bookPRG(23, 'Bachuki')
// bookSHT(109, 'Shotiko')
// console.log(ParagraphHotel);
// console.log(SheratonHotel);

// const bookSHT197 = book.bind(SheratonHotel, 197)
// bookSHT197('Gandona');
// console.log(SheratonHotel);


// console.log('---------------------');

function yle(name, lastName){
    return `Hello ${name} ${lastName}`
}
