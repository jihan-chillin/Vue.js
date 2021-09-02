<template>
    <div>
        <ProvideInjectChild />
    </div>
</template>
<script>
import ProvideInjectChild from "./ProvideInjectChild";
export default {
    components:{ProvideInjectChild},
    data(){
        return{
            items:["A","B"],
        };
    },
    provide(){
        return{
            itemsLength : this.items.length,
            items : this.items
        }
    }
};
</script>