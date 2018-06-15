<template>
    <div>
       <home-header ></home-header>
       <home-swiper :list="swiperList" ></home-swiper>
       <home-icon :list="iconList"></home-icon>
       <home-recommend :list="recommendList"></home-recommend>
       <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
    export default {
        name: 'Home',
        data: function(){
            return {
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcon,
            HomeRecommend,
            HomeWeekend
        },
        methods:{
            getHomeInfo(){
                axios.get('/api/index.json').
                then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                var that = this
               if(res.status == 200){
                   that.swiperList = res.data.data.swiperList
                   that.iconList = res.data.data.iconList
                   that.recommendList = res.data.data.recommendList
                   that.weekendList = res.data.data.weekendList
               }else{
                   alert("数据获取失败")
               }
            }
        },
        mounted(){
            this.getHomeInfo()
        }
    }
</script>

<style lang="stylus" scoped>

</style>
