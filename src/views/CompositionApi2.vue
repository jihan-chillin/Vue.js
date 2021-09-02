<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <!-- 이벤트 사라짐 compositionapi에 비해서 -->
            <input type="text" v-model.number="state.num1" />
            <span> + </span>
            <input type="text" v-model="state.num2"/>
            <span> = </span>
            <span>{{state.result}}</span>
        </div>
    </div>
</template>
<script>
// keyup은 사라지고 computed import됨
import {reactive, computed} from 'vue';
export default {
    name: 'calculator',
    components : {},
    setup(){
        let state = reactive({ 
            num1 : 0,
            num2 : 0,
            // 함수로 정의되던 거 computed로 한 번에 해결
            result : computed(()=> state.num1+parseInt(state.num2))
        });

        return{
            state, 
            
        }
    },
    
}
</script>