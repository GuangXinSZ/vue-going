<template>
    <div class="header" v-bind:style="bgColor">
       <div class="header-left"><span class="iconfont">&#xe624;</span></div>
       <router-link 
       to="/search" 
       tag="div"
       class="header-input">
        <span class="iconfont">&#xe632;</span>{{address}}
       </router-link>
       <router-link to="/city">
       <div class="header-right">{{ this.$store.state.city }}<span class="iconfont arrow-icon">&#xe64a;</span></div>
       </router-link>
    </div>
</template>
<script>
    export default {
        name: 'HomeHeader',
        data: function(){
            return {
                address: '请输入你想要去的/景点/城市',
                bgColor: {
                    background: '#00bcd4'
                }
            }
        },
        mounted(){
            window.onscroll = (event) =>{
                var that = this;
                let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
                let optatic = 0.8 * (realHeight/142);
                 if(optatic == 0 || optatic == 0.1 || optatic == 0.2){
                    setTimeout(()=>{
                         this.bgColor.background = '#00bcd4'
                    },1)
                }
                if(optatic <= 0.8 ) {
                    let bgk = `rgba(0, 188, 212,${optatic})`;
                    this.bgColor.background = bgk
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
    position: fixed
    top:0
    left:0
    width:100%
    display: flex
    height: .86rem
    transition: all 0.1s
    line-height: 0.86rem
    color: #fff
    z-index:2
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
