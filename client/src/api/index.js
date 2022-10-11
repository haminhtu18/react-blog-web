import axios from 'axios'; //day la mot thu vien giup chung ta goi 1 api

const URL = 'http://localhost:5000'

export const fetchPosts = () => axios.get(`${URL}/posts`)
