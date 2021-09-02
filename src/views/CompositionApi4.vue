<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <!--Html 코드밖에 안씀 / 이벤트도 없음-->
            <input type="text" v-model="num1" />
            <span> + </span>
            <input type="text" v-model="num2"/>
            <span> = </span>
            <span>{{result}}</span>
        </div>
    </div>
</template>
<script>
// 이제 외부함수만 import하면 됨.
import {plusCalculator} from '../common.js';

export default {
    name: 'calculator',
    components : {},
    setup(){
        let {num1, num2, result} = plusCalculator(); 
        return{
            num1, 
            num2,
            result, 
        }
    },
    
}
</script>