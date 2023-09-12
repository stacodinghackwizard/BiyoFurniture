import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/animate.css'
import './assets/css/icomoon.css'
import './assets/css/bootstrap.css'
import './assets/css/flexslider.css'
import './assets/fonts/flaticon/font/flaticon.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/style.css'
//import './assets/js/modernizr-2.6.2.min.js'
//import "https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700"


//import './assets/js/modernizr-2.6.2.min'
import './assets/js/jquery.min.js'
import './assets/js/jquery.easing.1.3.js'
import './assets/js/bootstrap.min.js'
import './assets/js/jquery.waypoints.min.js'
import './assets/js/jquery.flexslider-min.js'
import './assets/js/sticky-kit.min.js'
import './assets/js/owl.carousel.min.js'
import './assets/js/jquery.countTo.js'
import './assets/js/main.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
