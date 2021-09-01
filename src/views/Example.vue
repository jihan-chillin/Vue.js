<template>
   <!-- <div> -->
        
        <!-- <input type="number" v-model.number="valueModel2"/>
        <textarea v-model="valueModel3"></textarea>

        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주도</option>
        </select> -->

        <!-- <label><input type="checkbox" v-model="checked">{{checked}}</label> -->

        <!-- <label><input type="checkbox" value="서울" v-model="checked">서울</label>
        <label><input type="checkbox" value="부산" v-model="checked">부산</label>
        <label><input type="checkbox" value="제주" v-model="checked">제주</label>

        <br>
        <span>체크한 지역 : {{checked}}</span> -->

        <!-- <label><input type="radio" v-bind:value="radio[0]" v-model="picked">서울</label>
        <label><input type="radio" v-bind:value="radio[1]" v-model="picked">부산</label>
        <label><input type="radio" v-bind:value="radio[2]" v-model="picked">제주</label>
        <br>
        <span>체크한 지역 : {{picked}}</span> -->

        <!-- <img v-bind:src ="url" style="height : 100px; width:auto"/>
        <br> -->
        <!-- input태그 안에 아무것도 입력하지 않으면, 클릭버튼을 비활성화하기 -->
        <!-- <input type="text" v-model="textValue"/>
        <button type="button" v-bind:disabled="textValue==''">Click</button> -->
   <!-- </div> -->

  <div v-bind:style="[baseStyle, addStyle]">인라인 스타일 Binding</div>
</template>
<script>
export default {
    name: '',
    components : {},
    data(){
        return{
        //   valueModel : 'South Korea',
        //   valueModel2 : 12,
        //   valueModel3 : '안녕하세요',
        //   city : "02",
        //   checked :[],
        //   radio : ["서울", "부산", "배열"],
        //   picked : "",
        //   radio1 : "서울", 
        //   radio2 : "부산", 
        //   radio3 : "제주"
        // url : 'https://kr.vuejs.org/images/logo.png',
        // textValue : "",
            activeClass : 'active',
            navyClass :'text-navy',
            styleObject :{
                backgroundColor : 'yellow',
                color : 'navy',
                fontWeight : 'bold'
            },
            baseStyle: 'background-color : yellow',
            addStyle : 'color : red; font-weight : bold;'

        };
    },
    setup(){},
    created(){},
    mounted() {
        // 데이터에 접근하려면 this객체를 이용해서만 접근 가능
        console.log(this.valueModel2);
    },
    unmounted(){},
    methods:{

    }
}
</script>
<style scoped>
.container{
    width: 100%;
    height: 200px;
}

.active{
    background-color: yellow;
    font-weight: bold;
}

.text-navy{
    color: navy;
}
</style>