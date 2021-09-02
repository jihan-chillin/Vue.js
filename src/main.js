import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import mixins from './views/mixins'
import i18nPlugin from './plugins/i18n'

const i18nStrings = {
    en :{
        hi : 'Hello!',
        save : 'Save'
    },
    ko : {
        hi : '안녕하세요!', 
        save : '저장'
    }
}

const app = createApp(App);
app.use(router)
app.mixin(mixins)
app.use(VueSweetalert2)
app.use(i18nPlugin, i18nStrings)
app.mount('#app')
app.directive('focus',{
    mounted(el){
        el.focus();
    }
})
