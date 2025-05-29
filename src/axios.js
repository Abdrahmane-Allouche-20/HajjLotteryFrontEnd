import axios from 'axios'


const instance =axios.create({
  baseURL:'https://hajjlotterybackend-3.onrender.com/api/v1'
})

export default instance