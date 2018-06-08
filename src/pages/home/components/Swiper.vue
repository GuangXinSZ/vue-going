<template>
<div class="wrapper">
     <swiper :options="swiperOption">
        <swiper-slide  v-for="(item,index) of  list" :key="index" >
            <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 2500,
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
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
    padding-bottom: 28.8%
    background: #eee
.swiper-img
    width :100%

</style>