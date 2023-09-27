export {}

type HttpResponse = [number, string]

const goodRes: HttpResponse = [200, "OK"]

const responses: HttpResponse[] = [
    [200, "OK"],
    [404, "Not Found"]
]

console.log(goodRes);
console.log(responses);