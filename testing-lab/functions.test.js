let myFunctions = require('./functions')

test("Return Two test", () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("Greeting Test", () => {
    expect(myFunctions.greeting('James')).toBe('Hello, James.')
})

test("Greeting Test 2", () => {
    expect(myFunctions.greeting('Jill')).toBe('Hello, Jill.')
})

test("Add Test", () => {
    expect(myFunctions.add(1, 2)).toBe(3)
})

test("Add Test", () => {
    expect(myFunctions.add(5, 9)).toBe(14)
})

//Challenge

describe("WackAkaMath Challenge!", () => {
    test("Add", () => {
        expect(myFunctions.add(14, 6)).toBe(20)
    })
    test("Subtract", () => {
        expect(myFunctions.subtract(11, 3)).toBe(8)
    })
    test("Multiply", () => {
        expect(myFunctions.multiply(12, 3)).toBe(36)
    })
    test("Divide", () => {
        expect(myFunctions.divide(15, 5)).toBe(3)
    })
})