import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0a31fdf039744fa889524bbca55fcdd5'
    }
})
