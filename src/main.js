import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";

import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


//set default for wask base url & demo purpose token
const baseurl = import.meta.env.VITE_BASEURL;
const token = import.meta.env.VITE_TOKEN;

axios.defaults.baseURL = baseurl;
axios.defaults.headers.common['token'] = token;

createApp(App).mount('#app')




