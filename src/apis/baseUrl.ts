import axios from 'axios'
// import { storage } from './storage'

export const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

let isRTL = false
// process.env.NEXET_APP_BASE_URL;
let Headers = {
  'Content-Type': 'application/json',
//   Authorization: 'Bearer {token}',
  // 'Accept-Language': ,
}
// const token = storage.getToken()
// const lang = storage.getLang()
// console.log(lang)

export let baseInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${token}`,
    // Authorization: `Bearer ${token}` ,
    // 'Accept-Language': `${lang}`
  },
})

// baseInstance.interceptors.request.use(
  
//   function (error) {
//     return Promise.reject(error)
//   },
// )

// export let baseFetch = fetch(baseUrl, {
//   method: 'GET',
// });
console.log('baseURL:', baseUrl)
