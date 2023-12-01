import axios from 'axios'

const key = "0f1d2d2959b249058ed921341792b5b5";
const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList = axiosCreate.get('/genres?key=' + key);

export default { getGenreList };