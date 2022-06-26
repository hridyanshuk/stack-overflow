import axios from "axios"
import baseURL from './baseURL'
const instance = axios.create({
  baseURL: baseURL
})

export default instance
