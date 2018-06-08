<template>
    <div class="header">
       <div class="header-left"><span class="iconfont">&#xe624;</span></div>
       <div class="header-input"><span class="iconfont">&#xe632;</span>{{address}}</div>
       <router-link to="/city">
       <div class="header-right">{{ this.city }}<span class="iconfont arrow-icon">&#xe64a;</span></div>
       </router-link>
    </div>
</template>
<script>
    export default {
        name: 'HomeHeader',
        props: {
            city: String
        },
        data: function(){
            return {
                address: '请输入你想要去的/景点/城市'
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    display: flex
    height: .86rem
    line-height: 0.86rem
    background: $bgColor
    color: #fff
    .header-left
        width: 0.64rem
        float: left
        text-align: center
    .header-input
        flex: 1
        background:#fff
        line-height: 0.64rem
        height: 0.64rem
        margin-top: 0.12rem
        margin-left: 0.2rem 
        padding-left: 0.2rem
        border-radius: 0.1rem
        color: #ccc
        span
         line-height 0.64rem
         padding-right: 0.1rem
    .header-right
        width: 1.24rem
        float: right
        text-align center
        color: #fff
        .arrow-icon
         font-size: 0.24rem  
</style>
