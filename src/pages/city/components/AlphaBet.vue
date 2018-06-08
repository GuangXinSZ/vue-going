<template>
    <div>
         <ul class="list">
             <li class="item"
               v-for="(item,index) of letters" 
               :key="index" 
               @touchstart="handleTounchStart"
               @touchmove="handleTounchMove"
               @touchend="handleTounchEnd"
               @click="getInner"
               :ref="item"
               >
               {{item}}</li>
         </ul>
     </div>
</template>

<script>
    export default {
        name:'AlphaBetCity',
        props:{
            alpList:[Object,Array]
        },
        data(){
            return {
                tounchStatus: false,
                startY: 0,
                timer: null
            }
        },
        updated () {
            this.startY = this.$refs['A'][0].offsetTop
        },
        methods: {
            getInner: function(res){
                this.$emit('change',res.target.innerText)
            },
            handleTounchStart(){
                this.tounchStatus = true
            },
            handleTounchMove(e){
                 if(this.tounchStatus == true){
                     if(this.timer){
                         clearInterval(this.timer)
                     }
                      const startY = this.$refs['A'][0].offsetTop
                     this.timer = setInterval( ()=>{
                            /* 获取点击事件对顶部的高度 */
                    const touchy = e.touches[0].clientY - 79
                    /* 获取当前位置的高度  除以20的意思是 这个index再这这些字母中 所代表的位置能分分之几 以及取反 比如D触发的时候带来离上面的距离 就是60然后每个height是20px  
                    那么60 / 20 = 3 3就代表letters数据里面的index值*/
                    const index = Math.floor( (touchy - this.startY) / 20)
                    if(index >= 0 && index<this.letters.length){
                         this.$emit('change',this.letters[index])
                      }
                     },16)
                 }
            },
            handleTounchEnd(){
                 this.tounchStatus = false
            }
        },
        computed: {
            letters(){
                const letters = []
                for(let i in this.alpList){
                    letters.push(i)
                }
                return letters
            }
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
 display: flex
 flex-direction: column
 justify-content: center
 position:absolute
 top: 1.58rem
 right: 0
 bottom:0
 width: 0.4rem
 .item
  color: $bgColor
  line-height: 0.4rem
  text-align: center
  font-size: 0.3rem
</style>
