<template lang="pug">
.phonePage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 描述和標題
  .progress
    .progressBar10
  .form
    label.question 新增手機電話號碼
    p.hint 我們會發送預訂申請、提醒和其他通知給您。這組號碼應該要可以接收簡訊或接聽電話。
    .questionBlock
      input#formGroupExampleInput.form-control(v-model.trim="hostRooms.landlordInfo.phone" type='text' placeholder='新增手機電話號碼 Ex: 0912345678')
    label.question 新增您會的語言
    p.hint 您會越多語言能吸引越多不同國家的房客
    .questionBlock
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.landlordInfo.language.chinese" type='checkbox' value='true')
        .lb
          label.form-check-label 中文
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.landlordInfo.language.english" type='checkbox' value='true')
        .lb
          label.form-check-label 英文
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.landlordInfo.language.taiwanese" type='checkbox' value='true')
        .lb
          label.form-check-label 台語

    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(@click.native="setData" to="phone/guest-requirements", tag="button") 下一步
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      hostRooms: {
        landlordInfo : {
          landlordName: '',
          phone: '',
          language: {
            chinese: false,
            english: false,
            taiwanese: false,
          },
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
      this.hostRooms.landlordInfo.landlordName = this.userProfile.lastName + this.userProfile.firstName
      this.$store.dispatch('mHost/uploadHostRoom', {
        userID: this.userProfile.id,
        // roomID: roomID,
        roomID: 'test',
        landlordInfo: this.hostRooms.landlordInfo
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
  .progressBar10
    width: 60%
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
</style>