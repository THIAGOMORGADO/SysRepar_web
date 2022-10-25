
import axios from 'axios';

const server = axios.create({
  // baseURL: 'http://localhost:3333'
},
  {
   baseURL: 'server-mu-nine.vercel.app' 
})

export default server;