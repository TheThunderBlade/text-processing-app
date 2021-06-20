import React, {useEffect, useState} from 'react';
import Style from './App.module.css'
import {sendMessage} from "./http/Axios";
import {resultOutputString} from "./functions/textFunctions";

const App = () => {
    const [inputMessage, setInputMessage] = useState('')
    const [outputMessage, setOutputMessage] = useState([])
    const [uniqueValue, setUniqueValue] = useState(0)
    const [error, setError] = useState('')

    useEffect(() => {
        setOutputMessage([])
        setError('')
    }, [inputMessage])

    return (
        <div className={Style.Container}>
            <h1>Введите текст на обработку</h1>

            <form className={Style.Form__Container}>
                <textarea
                    value={inputMessage}
                    onChange={e => setInputMessage(e.target.value)}
                    placeholder='Input'> </textarea>

                <textarea
                    style={{
                        height: '200px'
                    }}
                    readOnly
                    defaultValue={error ? error : resultOutputString(outputMessage, uniqueValue)}
                    placeholder='Output'/>

                <button onClick={e => {
                    e.preventDefault()
                    sendMessage(inputMessage).then(data => {
                        const tmpArray = []

                        if (!data.message) {
                            data.wordData.map(word => {
                                tmpArray.push(...outputMessage, {key: word[0], value: word[1]})
                                return true
                            })
                            setOutputMessage(tmpArray)
                            setUniqueValue(data.wordData.length)
                        } else {
                            setError(data.message)
                        }
                    })
                    setInputMessage('')
                }}>Proceed</button>
            </form>
        </div>
    );
};

export default App;