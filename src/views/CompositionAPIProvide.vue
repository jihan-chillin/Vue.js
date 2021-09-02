<template>
    <CompositionAPIInject />
</template>
<script>
// inject를 provide해야만 쓸 수 있음.
import {provide} from 'vue';
import CompositionAPIInject from './CompositionAPIInject.vue'
export default {
    components :{
        CompositionAPIInject
    },
    setup(){
        provide('title', 'vue.js 프로젝트')
    }
}
</script>