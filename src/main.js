import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import awsConfig from "./aws-exports"
import { Auth } from 'aws-amplify'
import "@aws-amplify/ui-vue/styles.css"
import "./assets/base.css"

Auth.configure(awsConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')



