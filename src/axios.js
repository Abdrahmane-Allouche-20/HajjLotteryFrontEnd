import axios from 'axios'


const instance =axios.create({
  baseURL:'https://hajjlotterybackend-1.onrender.com/api/v1'
})

export default instance