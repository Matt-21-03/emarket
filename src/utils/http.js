
// import axios from 'axios'
// import {ElMessage} from 'element-plus'
// import { useUserStore } from '@/stores/userStore'


// // 创建axios实例
// const http = axios.create({
//   baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
//   timeout: 5000
// })

// // axios请求拦截器
// http.interceptors.request.use(config => {
//   const userStore = useUserStore()
//   const token = userStore.userInfo.token
//   if (token){
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// }, e => Promise.reject(e))

// // axios响应式拦截器
// http.interceptors.response.use(res => res.data, e => {
//   return Promise.reject(e)
// })

// // axios请求拦截器
// http.interceptors.response.use(res =>res.data,e=>{
//   ElMessage({
//     type:'warning',
//     message: e.response.data.msg
//   })
// })

// export default http


// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 20000
})

// 拦截器

// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    console.log('had token')
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  // 统一错误提示
  const userStore = useUserStore()
  ElMessage({
    type: 'warning',
    message: e.response.data.message
  })
  if (e.response.status === 401){
    console.log('401')
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})


export default httpInstance