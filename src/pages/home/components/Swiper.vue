<template>
<div class="wrapper">
     <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide  v-for="(item,index) of  swiperList" :key="index" >
        <img class="swiper-img" :src="item.url" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
    export default {
        name: 'HomeSwiper',
        data: function(){
            return {
                swiperOption:{
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [
                    {
                        id:0,
                        url: 'http://img1.qunarzz.com/piao/fusion/1805/10/3ee6df72beb86402.jpg_750x200_e02a4c99.jpg'
                    },
                    {
                        id: 1,
                        url: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
                    },
                    {
                        id:2,
                        url: 'http://img1.qunarzz.com/piao/fusion/1805/10/3ee6df72beb86402.jpg_750x200_e02a4c99.jpg'
                    }
                ]
            }
        },
        methods: {

        },
        computed: {

        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
// 对象穿透
.wrapper >>> .swiper-pagination-bullet-active
    background: red !important 
.wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 26.8%
    background: #eee
.swiper-img
    width :100%

</style>