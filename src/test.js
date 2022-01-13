
const test = [12, 3, 5]

const hello = test.reduce((acc, e)=> {
    return acc + e.toString()
}, "")

console.log(hello)

