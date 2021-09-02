<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model.number="state.num1" @keyup="plusNumbers"/>
            <span> + </span>
            <input type="text" v-model="state.num2" @keyup="plusNumbers"/>
            <span> = </span>
            <span>{{state.result}}</span>
        </div>
    </div>
</template>
<script>
import {reactive} from 'vue';
export default {
    name: 'calculator',
    components : {},
    setup(){
        let state = reactive({ 
            // reactive : num1, num2, result를 실시간 변경사항에 대한 반응형 적용
            num1 : 0,
            num2 : 0,
            result : 0
        });

        function plusNumbers(){
            state.result = state.num1 + parseInt(state.num2);
        }

        return{
            state, 
            plusNumbers,
        }
    },
    
}
</script>