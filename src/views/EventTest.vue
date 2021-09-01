<template>
    <div>
        <!-- <button type="button" v-on:click="increaseCounter">Add 1</button> -->
        <button type="button" @click="one(), two()">Add 1</button>
        <p>The count is : {{counter}}</p>
        <br>
        <select v-model="city" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
        <br><br>
        <input type="text" v-model="textValue" @keyup.enter="showValue"/>
    </div>
</template>
<script>
export default {
    name: '',
    components : {},
    data(){
        return{
          counter : 0,
          city : ""
        };
    },
    setup(){},
    created(){},
    mounted() {},
    unmounted(){},
    methods:{
        increaseCounter(){
            this.counter = this.counter +1;
        },

        one(){
            alert('One');
        },

        two(){
            alert('two');
        },
        changeSelect(){
            alert(this.city);
        },
        showValue(){
            // key.tab, delete, esc, space, up, down, left, right
            alert(this.textValue);
        }
    }
}
</script>