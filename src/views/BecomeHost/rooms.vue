<template lang="pug">
.becomeHostPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/" tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 房源與房客
  .progress
    .progressBar2
  .becomeHostForm
    h4 您的房源可以容納幾位房客？
    label.question 有幾間臥室可以給房客使用？
    .hostInputBox
      span 臥室
      .calculate
        button.roomMinus.calBtn.inactiveBtn
          span
            img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
        span.roomNum 0
        button.roomPlus.calBtn
          span
            img(src="https://img.icons8.com/android/24/000000/plus.png")
    label.question 房型資訊
    p 提供每個房間的床型資訊，以利房客了解床位安排。
    hr
    .bedInfoBlocks
      
    router-link.btn.btn-primary.btn-sm(to="becomehost/rooms" tag="button") 下一步
</template>

<script>
import { mapState } from 'vuex'
import BedInfo from '@/components/BedInfo.vue'
import $ from 'jquery'

var roomNum = 0

export default {
  mounted() {
    $(".roomPlus").click(function(){
      roomNum++
      $(".roomNum").text(roomNum)
      if(roomNum > 0){
        $(".roomMinus").removeClass("inactiveBtn")
      }
      $(".bedInfoBlocks").append("<BedInfo></BedInfo>")
    })
  },
  data(){
    return {
      hostRoom: {
        name: '',
        region: {
          country: '',
          address: '',
          mapInfo: '',
        },
        onlyForTenant: true,
        comments: [{
          userName: '',
          commentTime: '',
          contents: '',
        }],
        imgUrl: [],
        originalPrice: 0,
        discount: 0,
        landlordInfo : {
          landlordName: '',
          joinTime: '',
          phone: '',
          language: [],
          intro: '',
        },
        hotelstyle: '',
        homeStyle: '',
        bathroom: '',
        pointer: {
          deepClean: false,
          selfCheckIn: false,
          greatLandlord: false,
          unbookPolicy: false,
          hotelRules: false,
        },
        roomIntro: '',
        bedrooms: [{
          bedNum: 0,
          bedWidth: 0,
          bedType: "",
        }],
        equipAndService: {
          necessities: false,
          aircon: false,
          television: false,
          hairDryer: false,
          shampoo: false,
          lockedRoom: false,
          smokeAlarm: false,
          fireExtinguisher: false,
          kitchen: false,
          wifi: false,
          washingMachine: false,
          carbonMonoxideAlarm: false,
          heating: false,
        },
        Precautions: {
          checkInTime: '',
          checkOutTime: '',
          smoke: false,
          otherRules: '',
        },
      }
    }
  },
  computed: {
    ...mapState({
      userProfile: state => state.mLogin.userProfile
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
    width: 5%
    height: 100%
    background-color: $Blue
    border-radius: 0px 50px 50px 0px
    transition: 0.5s

.becomeHostForm
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

p
  font-size: 22px
  color: gray
</style>