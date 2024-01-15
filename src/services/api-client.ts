import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fb936b93843c47da83bf7c1d916d4c31'
    }
})