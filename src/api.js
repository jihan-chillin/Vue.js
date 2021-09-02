import axios from 'axios';

export default{
    mounted(){
        // 컴포넌트가 mount가 끝났을 대 자동호출
        console.log('믹스인 mounted');
    },
    methods:{
        async $callApi(url, method, data){
            return  (await axios({
                method : method,
                url : url, 
                data : data
            }).catch(e=>{
                console.log(e);
            })).data;
        }
    }
}