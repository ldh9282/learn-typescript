export {}

function triple(value: number | string) {
    // typeof guard(if typeof -> return pattern)
    if (typeof value === "number") {
        return value * 3
    }

    return value.repeat(3)
}