export {}

function someDemo(x: string | number, y: string | boolean) {

    if (x === y) {
        // x is string, y is string
        const a = x
        const b = y

        console.log(a.toLowerCase());
        console.log(b.toLowerCase());
    }
}
