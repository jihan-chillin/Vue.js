<template>
    <div>
        <h1>Cart  :{{cartCount}}</h1>
        <h1>Cart - Product A  :{{productACount}}</h1>
        <h2>Count : {{count}}</h2>
        <button type="button" @click="increment">1추가</button>
    </div>
</template>
<script>
export default {
    computed:{
        count() {
            return this.$store.state.count;
        },
        cartCount(){
            return this.$store.getters.cartCount;
        },
        productACount(){
            return this.$store.getters.ProductACount;
        }
    },
    methods: {
        increment(){
            // 반드시 commit을 적고 () 안에 함수명 적으면 됨.
            this.$store.commit("increment");
        }
    },
}
</script>