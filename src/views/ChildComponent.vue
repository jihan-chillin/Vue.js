<template>
    <!-- <div>likes : {{likes}}</div>
    <div>isOk : {{isOk}}</div>
    <div>author name : {{author.name}}</div>
    <div>author company : {{author.company}}</div> -->

    <!-- <button type="button" @click="childFunc" ref="child_btn">자식에 있는 클릭</button> -->
    <!-- <h1>{{msg}}</h1> -->
    <div>
        <!-- <button type="button" @click="sendFromChild">자식 컴포넌트 버튼</button> -->
        <button type="button" @click="changeData">자식 컴포넌트 데이터 변경</button>
    </div>
</template>
<script>
export default {
    name: '',
    props : {
        likes : {
            type : Number,
            default : 0
        },
        isOk:{
            type : Boolean,
            default : false
        },
        commentIds:{
            type : Array
        },
        author : {
            type : Object
        }        
    },
    components : {},
    data(){
        return{
          msg : '자식 컴포넌트에로부터 보내는 메세지'
        };
    },
    setup(){},
    created(){},
    mounted() {
        console.log(this.commentIds);
    },
    unmounted(){},
    methods:{
        childFunc(){
            alert('부모컴퍼넌트에서 직접 발생시킴');
        },
        sendFromChild(){
            this.$emit('send-message', this.msg);
        },
        changeData(){
            this.msg = "자식 컴포넌트에서 데이터 변경이 일어남";
        }
    }
}
</script>