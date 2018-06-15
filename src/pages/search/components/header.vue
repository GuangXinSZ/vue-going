<template>
    <div>
        <div class="search">
            <div class="header-left" @click="SearchGo"><span class="iconfont">&#xe624;</span></div>
            <input class="search-input" type="text" placeholder="国家/城市/关键词" />
        </div>
        <div class="advertising">
            开发中
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Search',
        data: function (){
            return {

            }
        },
        methods: {
            SearchGo(){
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .search
    display: flex
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .header-left
     line-height: 0.72rem
     width: 0.64rem
     text-align: center
     color: $colorb
    .search-input
      box-sizing: border-box
      width: 80%
      height: .62rem
      margin-top: 0.04rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: 0.3rem
      color: #666
.advertising
 heiht: 0
 padding-bottom: 0.3rem
 background: white
 width: 96%
 margin: 0 auto
 border-radius: 0.25rem
 display: flex
 justify-content: center
 align-self: center
</style>
