export {}

const bools: Array<boolean> = []
bools.push(true)
bools.push(false)

type Point = {
    x: number;
    y: number;
}

const coords: Point[] = []

coords.push({x: 23, y: 8})
coords.push({x: 23, y: 9})

const coordArr: Array<Point> = []

coordArr.push({x: 23, y: 8})
coordArr.push({x: 23, y: 9})

console.log(bools);
console.log(coords);
console.log(coordArr);

