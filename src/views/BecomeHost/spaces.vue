<template lang="pug">
.spacesPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section  設備與服務
  .progress
    .progressBar6
  .form
    label.question 房客可以使用哪些區域或設施？
    p.hint 包含公共區域，但請不要納入不在房源範圍內的空間。
    .questionBlock
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.space.kitchen" type='checkbox' value='')
        .lb
          label.form-check-label 廚房
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.space.washingMachine" type='checkbox' value='')
        .lb
          label.form-check-label 洗衣機
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.space.dryer" type='checkbox' value='')
        .lb
          label.form-check-label 烘衣機
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.space.parkingSpace" type='checkbox' value='')
        .lb
          label.form-check-label 停車位
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.space.gym" type='checkbox' value='')
        .lb
          label.form-check-label 健身房
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.space.swimmingPool" type='checkbox' value='')
        .lb
          label.form-check-label 游泳池
      .qb
        input#defaultCheck1.form-check-input(v-model="hostRooms.space.jacuzzi" type='checkbox' value='')
        .lb
          label.form-check-label 按摩浴池
    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(@click.native="setData" to="spaces/photos", tag="button") 下一步


</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      hostRooms: {
        space: {
          kitchen: false,
          washingMachine: false,
          dryer: false,
          parkingSpace: false,
          gym: false,
          swimmingPool: false,
          jacuzzi: false,
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
        space: this.hostRooms.space
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
  .progressBar6
    width: 36%
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