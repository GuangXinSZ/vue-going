<template>
    <div class="app">
       <search-header></search-header>
       <search-tab :list="cityName"></search-tab>
    </div>
</template>

<script>
import SearchHeader from './components/header'
import SearchTab from './components/searchTab'
import axios from 'axios'
    export default {
        name: 'Search',
        data () {
            return {
                cityName: ''
            }
        },
        methods: {
            getHomeUser(){
                axios.get('/api/search.json').then(this.getSearchInfo)
            },
            getSearchInfo(res){
                 var that = this;
                 res = res.data
                 if(res.ret && res.data){
                     this.cityName = res.data.swiperList
                 }
            }
        },
        mounted(){
            this.getHomeUser()
        },
        components: {
            SearchHeader,
            SearchTab
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.app
 background: #fafafa
</style>
