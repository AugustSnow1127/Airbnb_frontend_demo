<template lang="pug">
.houseRulesPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 預訂設定
  .progress
    .progressBar12
  .form
    label.question 為房客制定《房屋守則》 
    p.hint 房客必須同意您的《房屋守則》才能預訂住宿。
    .questionBlock
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.suitableForChildren" type='checkbox' value='true')
        .lb
          label.form-check-label 適合兒童（2-12歲）
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.suitableForBaby" type='checkbox' value='true')
        .lb
          label.form-check-label 適合嬰幼兒（2歲以下）
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.suitableForPet" type='checkbox' value='true')
        .lb
          label.form-check-label 適合寵物
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.smokingAllowed" type='checkbox' value='true')
        .lb
          label.form-check-label 允許吸煙
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.eventAllowed" type='checkbox' value='true')
        .lb
          label.form-check-label 允許舉辦活動
    p.hint 房客必須知道的房源相關詳情
    .questionBlock
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.needToTakeStair" type='checkbox' value='true')
        .lb
          label.form-check-label 需要走樓梯
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.maybeNoisy" type='checkbox' value='true')
        .lb
          label.form-check-label 可能會有噪音
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.havePet" type='checkbox' value='true')
        .lb
          label.form-check-label 房源內有寵物
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.noParkingSpace" type='checkbox' value='true')
        .lb
          label.form-check-label 房源沒有停車位
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.needToShareSpace" type='checkbox' value='true')
        .lb
          label.form-check-label 需要共用部分空間
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.restrictedEquipAndService" type='checkbox' value='true')
        .lb
          label.form-check-label 受限的設備與服務
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.undersurveillance" type='checkbox' value='true')
        .lb
          label.form-check-label 房源中的監視或錄影裝置
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.withProtectionTool" type='checkbox' value='true')
        .lb
          label.form-check-label 房源中的防護工具
      .qb
        input#defaultCheck1.form-check-input(v-model.trim="hostRooms.houseRules.withDangerousAnimal" type='checkbox' value='true')
        .lb
          label.form-check-label 房源中的危險動物
    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(@click.native="setData" to="house-rules/price", tag="button") 下一步


</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      hostRooms: {
        houseRules: {
          suitableForChildren: false,
          suitableForBaby: false,
          suitableForPet: false,
          smokingAllowed: false,
          eventAllowed: false,
          needToTakeStair: false,
          maybeNoisy: false,
          havePet: false,
          noParkingSpace: false,
          needToShareSpace: false,
          restrictedEquipAndService: false,
          undersurveillance: false,
          withProtectionTool: false,
          withDangerousAnimal: false,
        },
      }
    }
  },
  computed: {
    ...mapState({
      userProfile: state => state.mLogin.userProfile,
      tempHostRooms: state => state.mHost.hostRooms,
    }),
  },
  methods: {
    setData() {
      this.$store.dispatch('mHost/uploadHostRoom', {
        userID: this.userProfile.id,
        // roomID: roomID,
        roomID: 'test',
        houseRules: this.hostRooms.houseRules
      })
    },
  },
}
</script>

<style lang="sass">
$Blue: #0051CB

// default css
.progress
  width: 100%
  height: 10px
  .progressBar12
    width: 72%
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