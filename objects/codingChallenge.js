const user1 = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const user2 = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

user1.calcBMI()
user2.calcBMI()

if (user1.calcBMI > user2.calcBMI) {
    console.log(`Marks BMI (${user1.bmi}) is higher than John's BMI (${user2.bmi}))`);
} else console.log(`John's BMI (${user2.bmi}) is higher than Mark's BMI (${user1.bmi}))`);

