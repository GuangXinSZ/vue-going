<template>
    <div>
    <div class="search">
       <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-result" v-show="keyword">
      <ul>
        <li class="search-item" v-for="(item,index) in list" :key="index" @click="handleCityClick(item.name)">{{item.name}}</li>
      </ul>
      <div v-show="!list.length">
        暂无数据
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name:'SearchCity',
         props:{
          cityList: [Object,Array]
        },
        data () {
          return {
            keyword: '',
            list: [],
            timee: null
          }
        },
        mounted(){
         
        },
        methods: {
          handleCityClick(city){
            this.$store.dispatch('changeCity',city)
            this.$router.push('/')
          }
        },
        watch: {
          keyword(){
            if(this.timer){
              clearInterval(this.timer)
            }
            if(!this.keyword){
              this.list = []
              return false
            }
            this.timer = setInterval( ()=>{
              const resArray = [];
              for (let i in this.cityList){
                this.cityList[i].forEach((value,index)=> {
                  if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                    resArray.push(value)
                  }
                });
                this.list = resArray;
              }
            },100)    
          }
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
  .search-result
   position: absolute
   top: 1.58rem
   right: 0
   bottom: 0
   left: 0
   background: #fff
   z-index:1
   ul
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
    
</style>
