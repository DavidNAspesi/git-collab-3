array = [1, 2, 3, 4, 5, 6, 7, 8]
let newArray = []

function onlyEven(array) {
    for (i = 0; i < array.length; i++) {
        if (array[i]%2 == 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}
