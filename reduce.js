// begening
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const totalNum = num.reduce((preResult, currenElement, index, arr) => {
    return index
}, 1)
console.log(totalNum);


const persons = [{ name: 'Muhammad Sa', age: 24 }, { name: 'Muhammad Sa', age: 46 }, { name: 'Muhammad Sa', age: 16 }]


//find totalAge
const topId = persons.reduce((previousAge, person) => person.age + previousAge, 0)

console.log(topId);


