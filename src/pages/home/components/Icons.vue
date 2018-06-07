<template>
    <div class="icons">
       <swiper :options="swiperOption">
        <swiper-slide v-for="(pages ,index) of page" :key="index" >
        <div class="icon" v-for="(item,index) of pages" :key="index">
            <div class="icon-img">
                 <img class="icon-img-content" :src="item.url" />
            </div>
            <p class="icon-desc">{{ item.name }}</p>
        </div>
        </swiper-slide>
       </swiper>    
    </div>
</template>
<script>
    export default {
        name: 'Icons',
        data: function(){
            return {
                swiperOption: {},
                icomImg: [
                    {
                        "id": '01',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/10/3ee6df72beb86402.jpg_750x200_e02a4c99.jpg',
                        "name": '产品销售'
                    },
                    {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                     {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                    {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                    {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                    {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                    {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                    {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                    {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                    {
                        "id": '02',
                        "url": 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg',
                        "name": '在线销售'
                    },
                   
                ]
            }
        },
        computed: {
            page: function(){
                const pages = []
                this.icomImg.forEach((item,index)=>{
                    const page = Math.floor(index / 8);
                    if(!pages[page]){
                        pages[page] = []
                    }
                    /*第一次添加8 条 第二次添加n */
                    pages[page].push(item);
                })
                console.log(pages)
                return pages;
            }
        }
    }    
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
<<<<<<< HEAD
@import '~styles/mimix.styl'
=======
>>>>>>> 69a01071b3759ede819ebe9e5abdd4441db3a5cd
    .icons >>> .swiper-container
     padding-bottom: 50%
  .icons
    height: 0
    overflow: hidden
    padding-bottom: 50%
    .icon
     position: relative
     overflow: hidden
     float: left
     width:25%
     height:0
     padding-bottom: 25%
     .icon-img
      position: absolute
      top: 0
      right: 0
      left: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem 
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
     .icon-desc
      position: absolute
      right: 0
      left: 0
      bottom: 0
      line-height: 0.44rem
      height: 0.44rem
      color: $color
      text-align: center
      ellipsis()
</style>
