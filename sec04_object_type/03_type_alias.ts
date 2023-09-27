export {}

function doublePoint(point: {x: number; y: number}): {x: number; y:number} {
    return {x: point.x * 2, y: point.y * 2}
}

// type alias
type Point = {
    x: number;
    y: number;
}

function doublePoint2(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2}
}

console.log(doublePoint({x: 3, y: 3}));
console.log(doublePoint2({x: 3, y: 3}));
