<template>
<div>
    <div>
        <select v-model="selectedCity">
            <option :value="city.code" :key="i" v-for= "(city,i) in cityList">{{city.name}}</option>
        </select>
        <input type="text" v-model="userName" @keyup="searchUserList">
        <button type="button" @click="searchUserList">조회</button>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>직업</th>
                </tr>
            </thead>

            <tbody>
                <tr :key="i" v-for="(person, i) in userList">
                    <td>{{person.name}}</td>
                    <td>{{person.age}}</td>
                    <td>{{person.job}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
export default {
    name: '',
    components : {},
    data(){
        return{
         cityList:[
             {name : '서울', code : '02'},
             {name : '부산', code : '021'},
             {name : '제주', code : '064'}
         ],
         selectedCity :'',
         userName : '',
         userList: []
        };
    },
    setup(){},
    created(){},
    mounted() {},
    unmounted(){},
    methods:{
        searchUserList(){
            // const selectedCity = this.selectedCity;
            // const userName = this.userName;
            const params = {
                selectedCity : this.selectedCity,
                userName : this.userName,
            }

            this.userList = this.getUserList(params);
        },
        getUserList(params){
            console.log(params);
            
            let list = [
                {name : '유재석', age : 50, job : "연예인"},
                {name : '유태오', age : 41, job : "연예인"},
                {name : '강호동', age : 52, job : "연예인"},
                {name : '박규영', age : 29, job : "연예인"}
                
            ];

            return list;
        }
    }
}
</script>