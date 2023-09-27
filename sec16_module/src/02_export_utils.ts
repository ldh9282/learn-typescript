export function add2(x: number, y: number) {
    return x + y;
}
export function sample2<T>(arr: T[]): T {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}