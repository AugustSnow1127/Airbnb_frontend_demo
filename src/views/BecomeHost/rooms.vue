<template lang="pug">
.roomsPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 房源與房客
  .progress
    .progressBar2
  .form
    h4 您的房源可以容納幾位房客？
    label.question 有幾間臥室可以給房客使用？
    .hostInputBox
      span 臥室
      .calculate
        button.calBtn.activeRoomMinusBtn(v-if="this.hostRooms.bedrooms.length" @click="roomMinus")
          span
            img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
        button.calBtn.inactiveBtn.inactiveRoomMinusBtn(v-else)
          span
            img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
        span.roomNum {{ this.hostRooms.bedrooms.length }}
        button.calBtn(@click="roomPlus")
          span
            img(src="https://img.icons8.com/android/24/000000/plus.png")
    label.question 房型資訊
    p.hint 提供每個房間的床型資訊，以利房客了解床位安排。
    hr
    BedInfo(v-bind:hostRooms="this.hostRooms")
    .backAndNext
      router-link.btn(to="/becomehost", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(@click.native="setData" to="rooms/bathrooms", tag="button") 下一步
    
</template>

<script>
import { mapState } from 'vuex'
import BedInfo from '@/components/BedInfo.vue'

export default {
  data(){
    return {
      hostRooms: {
        bedrooms: []
      }
    }
  },
  methods: {
    roomPlus() {
      let tempRoomNo = this.hostRooms.bedrooms.length + 1
      this.hostRooms.bedrooms.push({
        roomNo: tempRoomNo,
        oneFourBedNum: 0,
        oneFiveBedNum: 0,
        oneBedNum: 0,
      })
      console.log(this.hostRooms.bedrooms)
    },
    roomMinus() {
      if (this.hostRooms.bedrooms.length > 0){
        this.hostRooms.bedrooms.splice(-1,1)
        console.log(this.hostRooms.bedrooms)
      }
    },
    setData() {
      this.$store.dispatch('mHost/uploadHostRoom', {
        userID: this.userProfile.id,
        // roomID: roomID,
        roomID: 'test',
        bedrooms: this.hostRooms.bedrooms,
      })
    },
  },
  computed: {
    ...mapState({
      userProfile: state => state.mLogin.userProfile,
      tempHostRooms: state => state.mHost.hostRooms,
    })
  },
  components: {
    BedInfo
  }
}
</script>

<style lang="sass">
$Blue: #0051CB

*
  // border: 1px solid #000
h4
  margin-bottom: 50px

.progress
  width: 100%
  height: 10px
  .progressBar2
    width: 12%
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

.nextBtn
  position: absolute
  right: 100px

.backAndNext
  margin-top: 50px
</style>