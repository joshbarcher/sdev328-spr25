
const author = {
    name: "J.K. Rowling",
    isBillionaire: false
}

const format = {
    hardcover: true,
    slipcover: true
}

const book = {
    title: "Goblet of Fire",
    pages: 700,
    hardcover: false,
    ...author,
    ...format
}

console.log(book)

const odds = [1, 3, 5, 7];
const evens = [2, 4, 6, 8];

const nums = [...odds, ...evens, Math.PI];
console.log(nums);