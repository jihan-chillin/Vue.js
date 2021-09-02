<template>
<div>
    <page-title class="page-title" :title="title"/>
    <ChildComponent :likes = "23" :isOk = "true" :comment-ids="commentIds" :author="author"/> 
</div>
</template>
<script>
import PageTitle from '../components/PageTitle';
import ChildComponent from './ChildComponent';
export default {
    name: '',
    components : {'page-title' :PageTitle, ChildComponent},
    data(){
        return{
          title : "동적으로도 데이터 전달 가능",
          likes : 23,
          isOk : true,
          commentIds : [1,2,3,4,],
          author : {name : "홍길동", company : "회사이름"}
        };
    },
    setup(){},
    created(){},
    mounted() {},
    unmounted(){},
    methods:{

    }
}
</script>
<style scoped>
    .page-title{
        padding-left: 10px;
        border-left: 5px solid red;
        text-align: left;
        border-radius: 3px;
    }
</style>