<template>
    <div>
        <ProvideInjectChild :itemLength="items.length"/>
    </div>
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild";
export default {
    components:{ProvideInjectChild},
    data(){
        return{
            items: ["A", "B"],
        };
    },
};
</script>