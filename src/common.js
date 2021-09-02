import {reactive, computed, toRefs} from 'vue';

const plusCalculator=()=>{
    let state = reactive({
        num1 : 0, 
        num2 : 0, 
        result : computed(()=> parseInt(state.num1)+parseInt(state.num2))
    });

    return toRefs(state);
    // 반응형으로 선언된 데이터가 외부 function에서 정상적으로 인식
};

export{
    plusCalculator
}