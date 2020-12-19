<template lang="pug">
.titlePage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 描述和標題
  .progress
    .progressBar9
  .form
    label.question 為您的房源取一個標題
    p.hint 取一個能展現房源獨特之處的標題，好吸引更多房客。
    .questionBlock
      input#formGroupExampleInput.form-control(v-model.trim="hostRooms.title" type='text' placeholder='標題')
    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(@click.native="setData" to="title/phone", tag="button") 下一步

</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      hostRooms: {
        title: ''
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
        title: this.hostRooms.title
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
  .progressBar9
    width: 54%
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

.questionBlock
  margin: 30px 0px

</style>