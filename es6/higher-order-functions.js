
const names = ["Jill", "Jose", "Josh", "Amy", "Anderson", "Phil"];

//map
const upperNames = names.map(el => el.toUpperCase());
console.log(upperNames);

const lengthOfNames = names.map(el => el.length);
console.log(lengthOfNames);

const prefixedNames = names.map(el => `Name: ${el}`);
console.log(prefixedNames);

//multiple actions
const result = names
    .filter(el => el.startsWith("J"))
    .map(el => el.toUpperCase())
    .map(el => `Name: ${el}`);

console.log(result);

//in react.js we do this...
const html = names.map(el => `<div class="name"><p>${el}</p></div>`);
console.log(html);

const filteredNames = names.filter(el => el.startsWith("J"));
console.log(filteredNames);

const sorted = names.sort((el1, el2) => {
    if (el1 < el2) {
        return -1;
    } else if (el2 < el1) {
        return 1;
    }
    return 0;
})

console.log(sorted)