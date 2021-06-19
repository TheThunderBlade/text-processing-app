export const resultOutputString = (words, uniqueValue) => {
    let tmpArray = ''

    words.map(item => {
        tmpArray += `${item.key} - ${item.value}\n`
        return true
    })

    if (tmpArray) {
        tmpArray += `Unique: ${uniqueValue}`
    }

    return tmpArray
}