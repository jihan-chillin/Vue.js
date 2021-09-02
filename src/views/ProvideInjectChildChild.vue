<template>
    <div>
        Item Length : {{this.itemLength}}
    </div>
</template>
<script>
export default {
    props: {
           itemLength : {
               type: Number, 
               default: 0,
           },
        },
    }
</script>