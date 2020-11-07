<template lang="pug">
.homePage
  NavBar
  .img
    SearchBar
    .blackCover
    section.slogan
      h1 一趟放鬆身心的旅程
      p 換個環境，安頓下來。探索附近適合居住、工作或放鬆休息的住宿。
      button 探索周邊
  .suggestionHotel
    h2 推薦您下一趟旅行去處！
    .hotels
      HotelBlock(v-bind:hotels="$store.state.mHotels.hotels")
  Footer
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import HotelBlock from '@/components/HotelBlock.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
components: {
    SearchBar,
    HotelBlock,
    NavBar,
    Footer
  },
}
</script>

<style lang="sass">
html, body
  margin: 0

.img
    background-image: url(https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)
    width: 100%
    height: 85vh
    background-size: cover
    display: flex
    justify-content: center
    section
      position: absolute
      color: white
      left: 5%
      bottom: 30%
      width: 500px
      h1
        font-size: 40px
        font-weight: 600
        margin-bottom: 20px
      p
        font-size: 20px
        opacity: 0.9
      button
        padding: 10px 20px
        border-radius: 15px
        font-size: 24px
        background-color: white
        font-weight: bold
        margin-top: 15px
        border: none
        outline: none
        &:hover
          opacity: 0.9

.suggestionHotel
  h2
    text-align: center
    font-size: 28px
    font-weight: 500
    padding: 20px
    margin-top: 30px
  .hotels
    display: flex
    // padding: 0px 130px
    justify-content: center

.blackCover
  width: 100%
  height: 100%
  background-color: black
  opacity: 0.6
</style>