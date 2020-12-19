<template lang="pug">
.pricePage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 價格
  .progress
    .progressBar13
  .form
    label.question 為房源設定價格
    p.hint 我們會發送預訂申請、提醒和其他通知給您。這組號碼應該要可以接收簡訊或接聽電話。
    .questionBlock
      label.content 幣別
        select.form-control.form-control-sm(v-model.trim="hostRooms.price.currency")
          option TWD 新台幣
    .questionBlock
      label.content 基礎價格
        p.hint 這會成為您關閉智慧訂價期間的預設價格。
        input#formGroupExampleInput.form-control(v-model.trim="hostRooms.price.originalPrice" type='text' placeholder='基礎價格')
    .questionBlock
      label.content 優惠折扣
        select.form-control.form-control-sm(v-model.trim="hostRooms.price.discount")
          option(value="1") 不打折
          option(value="0.9") 9折
          option(value="0.8") 8折
          option(value="0.7") 7折
          option(value="0.6") 6折
          option(value="0.5") 5折
          option(value="0.4") 4折
          option(value="0.3") 3折
          option(value="0.2") 2折
          option(value="0.1") 1折

    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements/house-rules", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(@click.native="setData" to="price/local-law", tag="button") 下一步


</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      hostRooms: {
        price: {
          currency: '',
          originalPrice: '',
          discount: 1,
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
        price: this.hostRooms.price
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
  .progressBar13
    width: 78%
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

.content
  font-size: 20px
  margin-bottom: 10px

</style>