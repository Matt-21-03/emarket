

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//import { getCategoryAPI } from '@/apis/testapi'
import router from '@/router'
import {directivePlugin} from '@/directives'
import { componentPlugin } from '@/components'
import '@/styles/common.scss'
// getCategoryAPI().then(res=>{
//     console.log(res)
// })

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(directivePlugin)
app.use(componentPlugin)

pinia.use(piniaPluginPersistedstate)
app.mount('#app')




