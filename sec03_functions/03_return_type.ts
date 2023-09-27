export {}

function square(num: number): number {
    return num * num
}

const greet = (person: string): string => {
    return `Hi, ${person}`
}

const printGreet = (person: string): void => {
    console.log(`Hi, ${person}`);
}

function rando(num: number): string | number {
    if (Math.random() < 0.5) {
        return num.toString()
    }
    return num
}


square(3)
greet('Gray')
printGreet('Gray')
rando(5)