import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-20254.firebaseio.com/',
})

export default instance
