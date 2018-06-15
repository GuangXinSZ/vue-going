!<template>
    <div class="banner">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_600x330_039a22c0.jpg"/>
        <div class="banner-info">
            <div class="branner-main">
                <div class="branner-title">
                海洋奇梦馆
                </div>
                <div class="banner-number">
                    2
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'recommend',   
}
</script>

<style lang="stylus" scoped>
    .banner
     position: relative
     overflow: hidden
     height: 0
     padding-bottom: 55%
     .banner-img
      width: 100%
    .banner-info
      position: absolute
      bottom: 0px
      left: 0px
      right: 0
      color:#fff
      line-height: 0.6rem
      background: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .branner-main
       display:flex
       .branner-title
        flex:1
        font-size: 0.35rem
        padding: 0.2rem
       .banner-number
        margin-top: 0.37rem;
        border-radius: 0.2rem;
        background: #7a7a7c;
        opacity: 0.6;
        font-size: 0.24rem;
        padding: 0 0.7rem;
        height: 0.4rem;
        line-height: 0.4rem;
</style>