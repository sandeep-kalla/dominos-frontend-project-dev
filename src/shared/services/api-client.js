import axios from 'axios';
const callApi = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

export default callApi;