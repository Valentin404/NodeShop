import data from '../default.back/defoultBack'
import axios from 'axios'

  // "proxy": "http://127.0.0.1:5000",
const shopAPI = axios.create({
    baseURL: 'http://127.0.0.1:5000/'
})

const checkError = (res) => res.data.massage === 'good' ? res.data.session : Promise.reject('status error')


export default {
    getGoods : () =>new Promise((resolve)=> setTimeout(()=> resolve(data),300)),
    // addSession : (data) => shopAPI.post('/session/ad', data).then(res=>res.data),
    // getSession : () => shopAPI.get('').then(res=>res.data),
    getGoods : () => shopAPI.get('/goods').then(res=>res.data.goods),
    // setSession : (data) => shopAPI.post('/session',data).then(checkError),
    // setSession : (data) => shopAPI.get('/sessionSet').then(checkError),
    setSession : (data) => shopAPI.post('/sessionSet',{data : data}).then(checkError).then(a=>{
      console.log(a);
      return a
    })  ,
    setSessionFirst : () => shopAPI.get('/sessionSetFirst').then(checkError) ,
    getSession : () => shopAPI.get('/sessionGet').then(checkError),
    // getSessionSet : () => shopAPI.get('/sessionSet').then(checkError),

}

// fetch('/session').then(d=>d.json()).then(console.log)