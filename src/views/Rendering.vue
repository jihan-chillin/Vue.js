<template>
    <div>
        <!-- <select v-model="city">
            <option :value="city.v" :key="i" v-for="(city,i) in options">{{city.t}}</option>
        </select>

        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>제품가격</th>
                    <th>배송비</th>
                    <th>제품카테고리</th>
                </tr>
            </thead>

            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.delivery_fee}}</td>
                    <td>{{product.cate}}</td>
                </tr>
            </tbody>

        </table> -->

        <!-- <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else-if="type=='C'">C</h1>
        <h1 v-else>other</h1> -->
        <h1 v-show="bRender">A</h1>
    </div>
</template>
<script>
export default {
    name: '',
    components : {},
    data(){
        return{
        //   options : [
        //       {v : '02', t : '서울'},
        //       {v : '21', t : '부산'},
        //       {v : '064', t : '제주'}
        //   ],
        //   city : '064',
        //   productList:[
        //       {product_name : '기계식 키보드', price: 25000, delivery_fee : 5000, cate : '전자제품' },
        //       {product_name : '마우스', price: 9000, delivery_fee : 5000, cate : '전자제품' }
        //   ]
        // type: 'B'
        bRender : false
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