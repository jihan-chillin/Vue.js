<template>
    <div>
        <h1>hello {{lastName}}{{firstName}}</h1>
        <h1>hello {{getFullName()}}</h1>
        <!-- ▲ 이렇게 나타내면 낭비가 됨  -->
        <h1>hello {{fullName}}</h1>
        <br>
        <input type="text" v-model="lastName"><br>
        <input type="text" v-model="firstName">
    </div>
</template>
<script>
export default {
    name: '',
    components : {},
    data(){
        return{
          firstName : '재석',
          lastName : '유'
        };
    },
    computed:{
        fullName(){
            return this.lastName + this.firstName
        }
    },
    setup(){},
    created(){},
    mounted() {},
    unmounted(){},
    methods:{
        getFullName(){
            return this.lastName + this.firstName
        }
    }
}
</script>