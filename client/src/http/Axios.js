import axios from "axios";

export const sendMessage = async message => {
    try {
        const {data} = await axios.post('/api/textProcessing', {message})
        return data
    }catch (e) {
        console.log(e.response.data)
    }
}