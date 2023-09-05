import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import awsConfig from './aws-exports'
import { Auth } from 'aws-amplify'
import "primevue/resources/themes/lara-light-indigo/theme.css";
import PrimeVue from 'primevue/config';

import '@aws-amplify/ui-vue/styles.css'
import './assets/base.css'

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional

Auth.configure(awsConfig)


const app = createApp(App)
app.use(PrimeVue);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.use(router)

app.mount('#app')
