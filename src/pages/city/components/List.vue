<template>
    <div class="list" ref="wrapper">
      <div>
       <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">北京</div>
               </div> 
           </div>
       </div>
          <div class="area">
           <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
               <div class="button-wrapper" v-for="item of hotList" :key="item.id">
                   <div class="button">{{ item.name }}</div>
               </div> 
           </div>
       </div>
        <div class="area" v-for="(item,index) of cityList" :key="index" :ref="index">
           <div class="title border-topbottom">{{index}}</div>
           <div class="item-list" v-for="cyList of item" :key="cyList.id">
               <div class="item border-bottom">{{cyList.name}}</div>
           </div>
       </div> 
       </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
    export default {
        name:'HeaderCity',
        props:{
            hotList: Array,
            cityList: [Object,Array],
            letter: String
        },
        mounted(){
            //使用betterScroll库 
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
        watch: {
            letter () {
                if(this.letter){
                    /*获取一个由于是遍历 */
                    const getScroll = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(getScroll)
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
     line-height: .54rem
     background: #eee
     padding-left: .2rem
     color: #666
     font-size: .26rem
    .button-list
     overflow: hidden
     padding: .1rem 0.6rem 0.1rem 0.1rem
     .button-wrapper
      float: left
      width: 33.33%
      .button
       margin: 0.1rem
       padding: 0.1rem 0
       text-align: center
       border: 0.02rem solid #ccc
       border-radius: 0.6rem
.item-list
 .item
  line-height: 0.64rem
  margin-left: 0.4rem
</style>
