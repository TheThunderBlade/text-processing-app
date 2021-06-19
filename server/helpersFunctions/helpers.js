//функция для формирования заглавной буквы
function toUpperCaseFunc(str) {
    if (!str) return str

    return str[0].toUpperCase() + str.slice(1)
}

module.exports = {toUpperCaseFunc}