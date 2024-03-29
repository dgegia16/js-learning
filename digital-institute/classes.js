// შექმენით კლასი სახელად person რომელსაც ექნება name და
// age ასევე ამ კლასს შეუქმენით მეთოდი სახელად introduce რომელიც
// გამოიტანს შემდეგ ტექსტს "გამარჯობა ჩემი სახელია 'name' და მე ვარ 'age' წლის"

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(
//       `გამარჯობა ჩემი სახელია ${this.name} და მე ვარ ${this.age} წლის`
//     );
//   }
//   get personInfo() {
//     return `სახელი: ${this.name}, ასაკი: ${this.age}`;
//   }
//   set newAge(updatedAge) {
//     if (updatedAge < 0) {
//       console.log("არავალიდურია");
//     } else {
//       this.age = updatedAge;
//     }
//   }
// }

// შექმენით კლასი სტუდენტი რომელი კლასიც მემკვიდრეობას(Inheritance) მიიღებს Person კლასისგან
// დამატებით ექნება grade ასევე student კლასს უნდა ჰქონდეს საკუთარი
// introduction მეთოდი რომელი მეთოდის საშუალებით გამოიტანს შემდეგ ტექსტს
// "გამარჯობა მე ვარ 'name' ვარ 'age' წლის და ჩემი შეფასებაა 'grade'"

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
//   introduce2() {
//     console.log(
//       `გამარჯობა მე ვარ ${this.name}, ვარ ${this.age} და ჩემი შეფასებაა ${this.grade}`
//     );
//   }
// }

// const dati = new Student("დათი", 18, 4.0);

// dati.introduce2();

// დაამატეთ პერსონსის კლასს get ტიპის ფუნქცია
// რომელიც დაგვიბრუნებს ასაკს და სახელს ერთად persoInfo
// შემდეგ შექმენით set ფუქნცია რომელიც განაახლებს age ს დაარქვით updateAge
// და ფუქნციის შიგნით დაწერეთ შემდეგი ლოგიკა რო თუ მომხამრებელმა მიანიჭა ისეთი ასაკი
// რომელიც ნაკლებია 0 ზე დაწეროს რომ "მნიშვნელობა რომლის მინიჭებაც გინდათ არის არავალიდური"
// ხოლო თუ მიანიჭა ნებისმიერი 0 ზე მეტი მიანიჭოს წარმატებით

// console.log(dati.personInfo);

// შექმენით კლასი person რომელსაც ექნება სახელი, ასაკი, გენდერი

// ასევე ამ კლასს შეუქმენით introduction ფუნქცია რომელიც დალოგავს
// "გამარჯობა მე ვარ '', ვარ კაცი";
// ასევე შექმენით static ფუნქცია რომელსაც არგუმენტად გადაეწოდება ასაკი და თუ ასაკი მეტია ან ტოლია 18 ის გამოიტანს
// რომ სრულწლოვანია (console.log ში)

// ხოლო თუ ნაკლებია (არასრულწლოვანია)

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  get introduction() {
    console.log(`გამარჯობა მე ვარ ${this.name}, ${this.gender}`);
  }
  static age(age) {
    if (age >= 18) {
      console.log("სრულწლოვანი");
    } else {
      console.log("არასრულწლოვანი");
    }
  }
}

const tipi = new Person("დათი", 18, "კაცი")

tipi.introduction
Person.age(18)

