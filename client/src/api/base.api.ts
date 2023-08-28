
import axios from 'axios'

const port = process.env.REACT_APP_BACKEND_PORT || '8080'
const BASE_URL = `http://localhost:${port}/api/github/`

export const instance = axios.create({
    baseURL: BASE_URL
})
