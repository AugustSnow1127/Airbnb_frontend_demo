<template lang="pug">
.bathroomsPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 房源與房客
  .progress
    .progressBar3
  .form
    label.question 有幾間衛浴？
    p.hint 請將沒有淋浴間或浴缸的衛浴空間算為廁所。
    .hostInputBox
      span 臥室
      .calculate
        button.calBtn.activeBathRoomMinusBtn(v-if="this.hostRooms.bathroomNum" @click="bathroomMinus")
          span
            img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
        button.calBtn.inactiveBtn.inactiveBathRoomMinusBtn(v-else)
          span
            img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
        span.bathroomNum {{ this.hostRooms.bathroomNum }}
        button.calBtn(@click="bathroomPlus")
          span
            img(src="https://img.icons8.com/android/24/000000/plus.png")
    .backAndNext
      router-link.btn(to="/becomehost/rooms", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(to="bathrooms/location", tag="button") 下一步
</template>

<script>
export default {
  methods: {
    bathroomPlus() {
      this.hostRooms.bathroomNum++
    },
    bathroomMinus() {
      if (this.hostRooms.bathroomNum > 0) {
        this.hostRooms.bathroomNum--
      }
    }
  },
  data(){
    return {
      hostRooms: {
        bathroomNum: 0,
      }
    }
  },
}
</script>

<style lang="sass">
$Blue: #0051CB

.progress
  width: 100%
  height: 10px
  .progressBar3
    width: 10%
    height: 100%
    background-color: $Blue
    border-radius: 0px 50px 50px 0px
    transition: 0.5s

.form
  width: 800px
  padding: 50px 100px
  position: absolute
  h2
    padding-bottom: 10px
  .question
    font-size: 26px
    font-weight: 600
    margin: 5px 0px
  .form-control
    margin: 5px
    font-size: 20px
    height: 60px

.hostInputBox
  display: flex
  font-size: 28px
  align-items: center
  padding: 20px 0px

.calculate
  display: flex
  align-items: center
  position: absolute
  right: 300px
  span
    display: flex
    align-items: center
    justify-content: center
    img
      width: 20px
      height: 20px
  .calBtn
    width: 45px
    height: 45px
    margin: 0px 15px
    border-radius: 50px
    border: 1px solid rgb(200, 200, 200)
    background-color: white
    outline: none
    &::hover
      border: 1px solid black
  .inactiveBtn
    opacity: 0.3
    cursor: not-allowed
    &:hover
      border: 1px solid rgb(200, 200, 200)

.hint
  font-size: 18px
  color: gray

.backAndNext
  margin-top: 50px

.nextBtn
  position: absolute
  right: 100px 
</style>