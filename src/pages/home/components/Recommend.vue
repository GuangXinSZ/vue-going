<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <router-link 
            tag="li"
            class="item border-bot" 
            v-for="(item,index) of list" 
            :key="index"
            :to="'/detail/' + item.id"
             >
                <img class="item-img" :src="item.imgUrl" />
                <div class="item-info">
                    <p class="item-title">{{ item.title }}</p>
                    <p class="item-desc">{{ item.desc }}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
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
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
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
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
