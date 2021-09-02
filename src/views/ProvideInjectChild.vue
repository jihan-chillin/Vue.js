<template>
    <div>
        <ProvideInjectChildChild :itemLength ="itemLength"/>
    </div>
</template>
<script>
import ProvideInjectChildChild from "./ProvideInjectChildChild";
export default {
    components:{ProvideInjectChildChild},
    props: {
           itemLengt : {
               type: Number, 
               default : 0,
           }
        },
    }
</script>