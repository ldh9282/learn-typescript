export {}

let coordinate: {x: number; y: number} = {x: 34, y: 67}

function randomCoordinate(): {x: number; y: number} {
    return {x: Math.random(), y: Math.random()}
}

console.log(coordinate);
console.log(randomCoordinate());

