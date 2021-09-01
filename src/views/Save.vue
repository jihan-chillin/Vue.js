<template>
    <div>
        <input type="text" v-model="userInfo.name">
        <input type="text" v-model.number="userInfo.age">
        <input type="text" v-model="userInfo.job">
        <button type="button" @click="saveUserInfo">저장</button>
    </div>
</template>
<script>
export default {
    name: '',
    components : {},
    data(){
        return{
        //   name : '',
        //   age : 0,
        //   job : '', 
          userInfo : {
               name : '',
            age : 0,
            job : ''
          }
        };
    },
    setup(){},
    created(){},
    mounted() {},
    unmounted(){},
    methods:{
        saveUserInfo(){
            if(this.userInfo.name == ''){
                alert("사용자 이름을 입력하시오");
            }

            if(this.userInfo.age == 0 || this.userInfo.age == ''){
                alert("사용자 나이를 입력하시오");
            }
            
            // const params = {
            //     name : this.name,
            //     age : this.age,
            //     job : this.job
            // }

            const r = this.saveData(this.userInfo);
            if(r =='S'){
                alert("사용자 정보가 생성되었습니다.");
            }
        },
        saveData(params){
            console.log(params);
            const r = 'S';
            return r ;
        }
    }
}
</script>