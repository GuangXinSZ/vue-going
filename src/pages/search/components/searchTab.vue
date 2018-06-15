<template>
    <div>
        <ul class="tab-commit" ref="topHeight">
            <li 
            v-for="(item,index) of list" 
            :key="index" 
            @click="changeIndex(item.id,item.city)"
            :class="currentIndex == item.id ? 'bg': '' "
            >
                {{ item.city }}
                </li>
        </ul>
        <ul class="tab-list">
            <li v-for="(item,index) of childName" :key="index" :class="currentIndex == item.id ? 'bgk': '' ">
                <div class="tab-title">{{ item.title }}</div>
                <div class="tab-content">
                    <ul v-for="(itemImg,index) of item.imgUrl" :key="index">
                        <li><img class="pic" :src="itemImg.imgUrl" /></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
    export default {
        name: 'SearchTab',
        props: {
            list: [Array,String]
        },
        data(){
            return{
                 currentIndex: 0,
                 childName: ''
            }
        },
         mounted(){
            this.firstMsg()
        },
        methods: {
            changeIndex(event,name){
                var that = this;
                this.currentIndex = event
                this.list.forEach((item,index)=>{
                    if(item.city == name){
                        that.childName = []
                        that.childName.push(item)
                    }
                })
            },
            firstMsg(){
                setTimeout(()=>{
                     let getFirst = this.list[0]
                     this.changeIndex(this.currentIndex,getFirst.city)
                },200)
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

 .tab-commit
  display: flex
  flex-direction: column
  position: absolute
  left:0
  top: 1.4rem
  background: #fafafa
  width: 22%
  color: #616161
  li
   height: 1rem
   line-height: 1rem
   width:100%
   justify-content: center
   align-items: center
   text-align: center
 .tab-list
  margin-left: 23%
  width: 77%
  display: flex
  li
   width:100%
   font-size: 0.34rem
   .tab-title
    width: 100%
    text-align: center
   .tab-content
    margin-top: 0.1rem
 .bg
  background: $colorb
  border-left: 3px solid $bkColoe
 .bgk
  background: $colorb
 .pic
   width: 2.5rem
   height: 1.5rem

</style>