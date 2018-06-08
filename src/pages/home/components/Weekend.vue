<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bot" v-for="(item,index) of list" :key="index">
              <div class="item-img-wrapper">
                  <img class="item-img" :src="item.imgUrl" /> 
              </div>
              <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
              </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'recommend',
    props: {
        list: Array
    },
    data: function(){
        return {
           
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mimix.styl'
  .border-bot
   padding-bottom: 0.2rem
   border-bottom: 1px solid #ccc
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    color: #1abc9c
   .item
    margin-top:0.1rem
    .item-img-wrapper
     height:0
     overflow: hidden
     padding-bottom: 33.9%
    .item-img
      width: 100%
      heihgt: 1.7rem
    .item-info
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
</style>
