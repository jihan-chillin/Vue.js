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
//toRefs import됨
import {reactive, computed, toRefs} from 'vue';

function plusCalculator(){
    let state = reactive({
        num1 : 0, 
        num2 : 0, 
        result : computed(()=> parseInt(state.num1)+parseInt(state.num2))
    });

    return toRefs(state);
    // 반응형으로 선언된 데이터가 외부 function에서 정상적으로 인식
}

export default {
    name: 'calculator',
    components : {},
    setup(){
        let {num1, num2, result} = plusCalculator(); // 외부 function

        return{
            // 얘네 return 해주기 때문에 template에서 그냥 html코드로 쓸 수 있음.
            num1, 
            num2,
            result, 
        }
    },
    
}
</script>