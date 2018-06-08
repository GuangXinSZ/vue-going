<template>
    <div>
        <header-city></header-city>
        <header-search :cityList="cityList"></header-search>
        <header-list :hotList="hotCity" :cityList="cityList" :letter="letter"></header-list>
        <header-bet :alpList="cityList" @change="changeLetter"></header-bet>
    </div>
</template>

<script>
import HeaderCity from './components/HeaderCity'
import HeaderSearch from './components/search'
import HeaderList from './components/List'
import HeaderBet from './components/AlphaBet'
import axios from 'axios'
    export default {
        name: 'City',
        data: function(){
            return {
                cityList: [],
                hotCity:[],
                letter: ''
            }
        },
        components: {
            HeaderCity,
            HeaderSearch,
            HeaderList,
            HeaderBet,
        },
        methods: {
            getCityMsg(){
                axios.get('/api/city.json')
                .then(this.getShowMsg)
            },
            getShowMsg(res){
                res = res.data;
                if(res.ret && res.data){
                    this.cityList = res.data.cities
                    this.hotCity = res.data.hotCities
                }
            },
            changeLetter: function(letter){
                this.letter = letter
            }
        },
        mounted(){
            this.getCityMsg()
        }
    }
</script>

<style lang="stylus" scoped>

</style>
