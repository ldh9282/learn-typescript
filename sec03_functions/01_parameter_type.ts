export {}

// parameter type on function

function square(num: number) {
    return num * num
}

function greet(person: string) {
    person = person.toUpperCase()
    return `Hi there, ${person}!`
}

square(3)
greet("Gray")
