const API_URL = 'http://geek.itheima.net/v1_0/channels'
import { defineStore } from 'pinia'
import {ref} from 'vue'
import axios from 'axios'

export const useCounterStore = defineStore('counter', ()=>{
  // 数据
  const list = ref([])
  // 异步action
  const loadList = async ()=>{
    const res = await axios.get(API_URL)
    list.value = res.data.data.channels
  }
  
  return {
    list,
    loadList
  }
})