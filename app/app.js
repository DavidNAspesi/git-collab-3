array = [1, 2, 3, 4, 5, 6, 7, 8]

function onlyEven(array) {
    let newArray
    for (i = 0; i < array.length; i++) {
        if (array[i]%2 == 0) {
            newArray.push(array[i])
        }
        return newArray
    }
}

function multiply(array) {
    let accumulator = array[0]
    for (i = 1; i < array.length; i++) {
        accumulator = accumulator * array[i]
    }
    return accumulator
}