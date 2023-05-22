import axios from 'axios';
import UserData from '../models/forms';

interface Params {
    baseUrl: string, headers: any, method: string
}

const postConfig: Params = {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': '4JTjqMmvgC2WeZfzglpFAaiYVxDaLmPI1I43Is1U'
    },
    method: 'post'
}

export const postAPI = async (url : string, data : UserData) : Promise < any > => {
    return await axios({
        ... postConfig,
        url: `${
            postConfig.baseUrl
        }/${url}`,
        data
    }).then((response) => {
        console.log(response)
        return {status: response.status, data: response.data}
    }).catch((error) => {
        console.log(error)
        return {status: error.status, data: error.response}
    })
}
