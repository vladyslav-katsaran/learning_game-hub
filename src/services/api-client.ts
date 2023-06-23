import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'cd3c597f53194816ac1ec7db3736f113'
    }
})