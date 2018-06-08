<template>
    <div>
       <div class="city-header">
             选择城市
             <router-link to="/">
              <div class="city-left"><span class="iconfont">&#xe624;</span></div>
              </router-link>
        </div>
    </div>
</template>

<script>
    export default{
        name:'HeaderCity'
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.city-header
 position: relative
 overflow: hidden
 height: $headerHight
 line-height: $headerHight
 text-align: center
 background: $bgColor
 color:$colorb
 font-size: 0.32rem
 .city-left
  position: absolute
  left:0
  top:0
  width: 0.64rem
  color: $colorb
</style>
