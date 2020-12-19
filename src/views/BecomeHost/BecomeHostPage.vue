<template lang="pug">
.becomeHostPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/" tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 房源與房客
  .progress
    .progressBar
  .form
    h2 哈囉，{{ this.userProfile.lastName }}{{ this.userProfile.firstName }}！現在就開始發佈房源吧。
    .form-group
      label.question 您要發佈的房源類型？
      .row
        select.form-control.form-control-sm(v-model="hostRoom.hotelStyle")
          option 公寓
          option 私有公寓
          option 獨棟房屋
          option 平房
          option 別墅
          option 客用住房
          option 飯店
          option 青年旅舍
          option 度假村
    .form-group
      label.question 房客會住在什麼類型的空間？
      .row
        select.form-control.form-control-sm(v-model="hostRoom.homeStyle")
          option 整個房源
          option 獨立房間
          option 合住房間
    .form-group
      label.question 這是僅供房客使用的空間嗎？
      .custom-control.custom-radio.custom-control-inline
        input#onlyForTenant1.custom-control-input(v-model="hostRoom.onlyForTenant" type='radio' name='onlyForTenant' value="true")
        label.custom-control-label(for='onlyForTenant1') 是的，這裡主要供房客使用
      .custom-control.custom-radio.custom-control-inline
        input#onlyForTenant2.custom-control-input(v-model="hostRoom.onlyForTenant" type='radio' name='onlyForTenant' value="false")
        label.custom-control-label(for='onlyForTenant2') 不是，我會存放私人物品在這裡
    router-link.btn.btn-primary.btn-sm(@click.native="setData" to="rooms" tag="button" append) 下一步

</template>

<script>
import { mapState } from 'vuex'

// var date = new Date()

export default {
  data(){
    return {
      hostRoom: {
        hotelStyle: '',
        homeStyle: '',
        onlyForTenant: false
      }
    }
  },
  computed: {
    ...mapState({
      userProfile: state => state.mLogin.userProfile,
      tempHostRooms: state => state.mHost.hostRooms,
    })
  },
  methods: {
    setData() {
      // var roomID = this.userProfile.id + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds()
      this.$store.dispatch('mHost/uploadHostRoom', {
        userID: this.userProfile.id,
        // roomID: roomID,
        roomID: 'test',
        hotelStyle: this.hostRoom.hotelStyle,
        homeStyle: this.hostRoom.homeStyle,
        onlyForTenant: this.hostRoom.onlyForTenant
      })
    },
    // test() {
    //   var roomID = this.userProfile.id + date.getFullYear() + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds()
    //   console.log(roomID)
    // }
  },
  watch: {
    "hostRoom.hotelStyle": function() {
      console.log(this.hostRoom.hotelStyle)
    },
    "hostRoom.homeStyle": function() {
      console.log(this.hostRoom.homeStyle)
    },
    "hostRoom.onlyForTenant": function() {
      console.log(this.hostRoom.onlyForTenant)
    }
  }
}
</script>

<style lang="sass">
$Blue: #0051CB

*
  // border: 1px solid #000

.progress
  width: 100%
  height: 10px
  .progressBar
    width: 6%
    height: 100%
    background-color: $Blue
    border-radius: 0px 50px 50px 0px
    transition: 2s

.form
  width: 800px
  padding: 50px 100px
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

</style>