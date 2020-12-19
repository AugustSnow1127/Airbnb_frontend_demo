<template lang="pug">
.amennitiesPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section  設備與服務
  .progress
    .progressBar5
  .form
    label.question 您提供的設施有哪些？
    p.hint 這些只是房客通常預期房源內會提供的設備與服務，不過您可以在發佈房源後新增更多設備與服務。
    .questionBlock
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.necessities" type='checkbox' value='true')
        .lb
          label.form-check-label 生活必需品
          p.hint 毛巾、床單、香皂、衛生紙和枕頭
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.wifi" type='checkbox' value='true')
        .lb
          label.form-check-label WiFi
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.television" type='checkbox' value='true')
        .lb
          label.form-check-label 電視
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.heating" type='checkbox' value='true')
        .lb
          label.form-check-label 暖氣
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.aircon" type='checkbox' value='true')
        .lb
          label.form-check-label 空調
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.iron" type='checkbox' value='true')
        .lb
          label.form-check-label 熨斗
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.shampoo" type='checkbox' value='true')
        .lb
          label.form-check-label 洗髮露
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.hairDryer" type='checkbox' value='true')
        .lb
          label.form-check-label 吹風機
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.breakfast" type='checkbox' value='true')
        .lb
          label.form-check-label 早餐、咖啡、茶
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.desk" type='checkbox' value='true')
        .lb
          label.form-check-label 書桌／工作區
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.fireplace" type='checkbox' value='true')
        .lb
          label.form-check-label 壁爐
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.closet" type='checkbox' value='true')
        .lb
          label.form-check-label 壁櫥／抽屜
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.independentEntrance" type='checkbox' value='true')
        .lb
          label.form-check-label 獨立入口
    label.question 安全設施
    .questionBlock
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.smokeAlarm" type='checkbox' value='true')
        .lb
          label.form-check-label 煙霧探測器
          p.hint 請查閱您當地的法律條文，條文中可能會規定每個房間都需配備一個能正常運作的一氧化碳偵測器
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.carbonMonoxideAlarm" type='checkbox' value='true')
        .lb
          label.form-check-label 一氧化碳偵測器
          p.hint 請查閱您當地的法律條文，條文中可能會規定每個房間都需配備一個能正常運作的一氧化碳偵測器
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.aidKit" type='checkbox' value='true')
        .lb
          label.form-check-label 急救包
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.fireExtinguisher" type='checkbox' value='true')
        .lb
          label.form-check-label 滅火器
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.equipAndService.lockedRoom" type='checkbox' value='true')
        .lb
          label.form-check-label 可上鎖的臥室門
          p.hint 配鎖的獨立房間可以保護房客的安全和隱私

    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(@click.native="setData" to="amenities/spaces", tag="button") 下一步


</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      hostRooms: {
        equipAndService: {
          necessities: false,
          wifi: false,
          television: false,
          heating: false,
          aircon: false,
          iron: false,
          shampoo: false,
          hairDryer: false,
          breakfast: false,
          desk: false,
          fireplace: false,
          closet: false,
          independentEntrance: false,
          smokeAlarm: false,
          carbonMonoxideAlarm: false,
          aidKit: false,
          fireExtinguisher: false,
          lockedRoom: false,
        }
      }
    }
  },
  methods: {
    setData() {
      this.$store.dispatch('mHost/uploadHostRoom', {
        userID: this.userProfile.id,
        // roomID: roomID,
        roomID: 'test',
        equipAndService: this.hostRooms.equipAndService
      })
    },
  },
  computed: {
    ...mapState({
      userProfile: state => state.mLogin.userProfile,
      tempHostRooms: state => state.mHost.hostRooms,
    })
  },
}
</script>

<style lang="sass">
$Blue: #0051CB

// default css
.progress
  width: 100%
  height: 10px
  .progressBar5
    width: 30%
    height: 100%
    background-color: $Blue
    border-radius: 0px 50px 50px 0px
    transition: 0.5s
.hint
  font-size: 18px
  color: gray
  margin-bottom: 10px
.backAndNext
  margin-top: 50px
.nextBtn
  position: absolute
  right: 100px 
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

.questionBlock
  margin: 30px 0px
.qb
  display: flex
  transform: translateX(30px)
  margin-bottom: 10px
.form-check-input
  width: 30px
  height: 30px
.form-check-label
  font-size: 20px
.lb
  margin-left: 20px
  transform: translateY(-2px) 
  .hint
    font-size: 16px
    margin: 0
</style>