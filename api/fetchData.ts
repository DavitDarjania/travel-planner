import axios from 'axios'
import { API_URL } from './apiUrl'

const fetchData = axios.create({
    baseURL: API_URL
})
export default fetchData