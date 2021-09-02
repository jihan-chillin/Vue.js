<template>
    <h1>{{title}}</h1>
</template>
<script>
// inject를 import해야만 쓸 수 있음.
import {inject} from 'vue';
export default {
    setup(){
        const title = inject('title');

        return {title};
    }
}
</script>