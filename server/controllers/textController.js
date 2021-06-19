//продключение функции, для преобразования первой буквы в заглавную
const {toUpperCaseFunc} = require('../helpersFunctions/helpers')

class TextController {
    async textProcessing(req, res) {
        const {message} = req.body //получаем текст сообщения с фронта

        //если тело запроса пустое, то возвращается соответствующий текст ошибки
        if (!message) {
            return res.json({message: 'Тело запроса пустое!'})
        }

        //создаём карту, куда будут записываться данные
        const uniqueWordsMap = new Map()

        //удаление лишних символов и знаков пунктуации
        const messageProcessing = message.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]\"\'@№+]/g, "")
        //удаление лишних пробелов, что утрорились в результате удаления симловов
        const messageWithoutSymbols = messageProcessing.replace(/\s{2,}/g, " ");

        //разбитие строки на массив слов
        const words = messageWithoutSymbols.split(' ')

        //перебор массива слов и запись в результирующую карту
        for (let i = 0; i < words.length; i++) {
            if (!uniqueWordsMap.has(toUpperCaseFunc(words[i]))) {
                uniqueWordsMap.set(toUpperCaseFunc(words[i]), 1)
            } else {
                uniqueWordsMap.set(toUpperCaseFunc(words[i]), uniqueWordsMap.get(toUpperCaseFunc(words[i])) + 1)
            }
        }

        //отправляет ответ
        return res.status(200).json({
            wordData: Array.from(uniqueWordsMap.entries()).sort()
        })
    }
}

module.exports = new TextController()