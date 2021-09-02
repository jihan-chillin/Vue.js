import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixins from './views/mixins'

const app = createApp(App);
app.use(router)
app.mixin(mixins)
app.use(VueSweetalert2)
app.mount('#app')
app.directive('focus',{
    mounted(el){
        el.focus();
    }
})
