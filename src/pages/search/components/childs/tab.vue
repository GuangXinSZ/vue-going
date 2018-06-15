<template>
    <div>
        
    </div>
</template>
<script>

export default {
    props: {
        name: [Array,Object]
    },
    name: 'Tab',
    mounted(){
        console.log('====================================');
        console.log(this.name);
        console.log('====================================');
    }
}
</script>

<style lang="stylus" scoped>

</style>