import {createStore} from 'vuex'

const store = createStore({
    state(){
        return {
            // state 작성되는 것들이 data의 key값이 되는 것
            // 따라서 state안에 작성된 것들의 상태를 볼 수 있는 것
            count : 0,
            cart : [
                {
                    product_id : 1, 
                    product_name : '아이폰 거치대', 
                    cate : 'A'
                },
                {
                    product_id : 2, 
                    product_name : '블루투스 마우스',
                    cate : 'B'
                },
            ]
        }
    },
    mutations:{
        increment(state){
            // state 안에 정의된 변수는 직접접근자를 써야 함.
            state.count = state.count +1;
        }
    },
    getters:{
        cartCount:(state) =>{
            return state.cart.length;
        },
        ProductACount: (state)=>{
            return state.cart.filter(p => p.cate == 'A').length;
        }
    }
})

export default store;