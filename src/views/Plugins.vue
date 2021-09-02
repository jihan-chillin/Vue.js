<template>
    <div>
        <h1>{{$translate("ko.hi")}}</h1>
        <h1>{{$translate("en.hi")}}</h1>
        <button type="button">{{$translate("en.save")}}</button>
        <br>
        <button type="button">{{$translate("ko.save")}}</button>
    </div>
</template>
<script>

export default {
    name: '',
    components : {},
    data(){
        return{
          sampleData : ''
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