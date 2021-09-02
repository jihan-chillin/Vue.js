<template>
<div>
    <!-- <page-title class="page-title" :title="title"/>
    <ChildComponent :likes = "23" :isOk = "true" :comment-ids="commentIds" :author="author"/>  -->
    <!-- ref : id값이랑 비슷한 개념(요소에 접근할 때) -->
    <!-- <button type="button" @click="callChildFunc">부모에 있는 클릭</button> -->
    <!-- <ChildComponent ref ="child_component"/> -->
    <!-- <h1>{{parentMsg}}</h1>
    <ChildComponent @send-message="sendMessage" /> -->
    <button type="button" @click="showData">부모데이터</button>
    <ChildComponent ref="child_component"/>
    
</div>
</template>
<script>
// import PageTitle from '../components/PageTitle';
import ChildComponent from './ChildComponent';
export default {
    name: '',
    components : {/*'page-title' :PageTitle,*/ ChildComponent},
    data(){
        return{
        //   title : "동적으로도 데이터 전달 가능",
        //   likes : 23,
        //   isOk : true,
        //   commentIds : [1,2,3,4,],
        //   author : {name : "홍길동", company : "회사이름"}
        parentMsg : ''
      };
    },
    setup(){},
    created(){},
    mounted() {},
    unmounted(){},
    methods:{
        // callChildFunc(){
        //     // this.$refs.child_component.$refs.child_btn.click();
        //     // this.$refs.child_component.childFunc();
        //     this.$refs.child_component.msg = "부모컴포넌트에서 변경한 메세지";
        // },
        // sendMessage(data){
        //     alert(data);
        //     this.parentMsg = data;
        // }
        showData(){
            alert(this.msg);
        }
    },
    computed:{
        msg() {
            return this.$refs.child_component.msg;
        }
    }
}
</script>
<style scoped>
    
</style>