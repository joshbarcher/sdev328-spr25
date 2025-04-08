const colors = ["red", "yellow", "blue", "white", "green", "beige", "cyan"];

const pencil = {
    type: "mechanical",
    size: 0.7,
    hasEraser: true,
    color: "black",
    newPencil: true
}

const [c1, c2, ...otherColors] = colors;
console.log(otherColors)

const { type, size, ...props } = pencil;
console.log(type);
console.log(props);

console.log(pencil);

function printColors(favorite, ...others) {
    console.log(`Favorite color: ${favorite}`);

    for (let i = 0; i < others.length; i++) {
        console.log(others[i]);
    }
}

printColors("red", "green", "white", "green", "beige");
printColors("red", "green", "white");