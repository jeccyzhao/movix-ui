import axios from 'axios'
// import { Spin } from 'iview'
// import store from '@/store'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Spin.show()
    return config
  },
  error => {
    console.log('err' + error) // for debug
  }
)

// response interceptor
service.interceptors.response.use(
  res => {
    const { data, status } = res
    return { data, status }
  },
  error => {
    console.log('err' + error) // for debug
  }
)

export default service
