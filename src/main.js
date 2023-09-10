import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import awsConfig from './aws-exports'
import { Auth } from 'aws-amplify'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import PrimeVue from 'primevue/config';

import '@aws-amplify/ui-vue/styles.css'
import './assets/base.css'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



const app = createApp(App)
app.use(ElementPlus)
app.use(router)
Auth.configure(awsConfig)

app.mount('#app')
