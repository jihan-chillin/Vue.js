<template>
<div>
    <button type="button" @click="getProductList">조회</button>
    <table>
        <thead>
            <tr>
                <th>제품명</th>
                <th>가격</th>
                <th>배송료</th>
                <th>카테고리</th>
            </tr>
        </thead>
            <tr :key="i" v-for="(product, i) in productList">
                <td>{{product.product_name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.delivery_price}}</td>
                <td>{{product.cate}}</td>
            </tr>
        <tbody>

        </tbody>
    </table>
</div>
</template>
<script>
// import ApiMixin from '../api.js'
import monitoringMixin from '../monitoring.js'

export default {
    name: '',
    mixins : [/*ApiMixin*/ monitoringMixin],
    components : {},
    data(){
        return{
          productList:[]
        };
    },
    setup(){},
    created(){},
    mounted() {
        console.log('컴포넌트 mounted()');
    },
    unmounted(){},
    methods:{
        async getProductList(){
            this.productList = await this.$api('https://ac75a679-0461-41f2-b49b-f92ea20a49cc.mock.pstmn.io/productList','get',{});
            console.log(this.productList);
        }
       
    }
}
</script>