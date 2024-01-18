const person1 = {
    name: 'John',
    lastName: 'Doe',
    age: 46,
    address: {
        city: 'Tbilisi',
        country: 'Georgia',
        planet: 'Earth'
    },
    family: [
        'Dad',
        'Mom',
        'Brother',
        'Sister'
    ]
}

const person1Copy = Object.assign({}, person1)
person1Copy.address.city = 'Chicago'
person1Copy.family.push('Uncle')


console.log(person1)
console.log(person1Copy);