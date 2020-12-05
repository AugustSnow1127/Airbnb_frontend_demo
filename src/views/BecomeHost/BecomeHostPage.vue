<template lang="pug">
.becomeHostPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(
        src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png"
      )
    section 房源與房客
  .progress
    .progressBar
  .becomeHostForm
    h2 哈囉，{{ this.userProfile.lastname }}{{ this.userProfile.firstname }}！現在就開始發佈房源吧。
    .form-group
      label.question 您要發佈的房源類型？
      .row
        select.form-control.form-control-sm
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
        select.form-control.form-control-sm
          option 整個房源
          option 獨立房間
          option 合住房間
    .form-group
      label.question 您要發佈的房源地址？
      .row
        input.form-control.form-control-sm(type="text", placeholder="輸入位置")
    .form-group
      label.question 這是僅供房客使用的空間嗎？
      .custom-control.custom-radio.custom-control-inline
        input#onlyForTenant1.custom-control-input(
          type="radio",
          name="onlyForTenant"
        )
        label.custom-control-label(for="onlyForTenant1") 是的，這裡主要供房客使用
      .custom-control.custom-radio.custom-control-inline
        input#onlyForTenant2.custom-control-input(
          type="radio",
          name="onlyForTenant"
        )
        label.custom-control-label(for="onlyForTenant2") 不是，我會存放私人物品在這裡
    router-link.btn.btn-primary.btn-sm(to="becomehost/rooms", tag="button") 下一步
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      hostRoom: {
        name: "",
        region: {
          country: "",
          address: "",
          mapInfo: "",
        },
        onlyForTenant: true,
        comments: [
          {
            userName: "",
            commentTime: "",
            contents: "",
          },
        ],
        imgUrl: [],
        originalPrice: 0,
        discount: 0,
        landlordInfo: {
          landlordName: "",
          joinTime: "",
          phone: "",
          language: [],
          intro: "",
        },
        hotelstyle: "",
        homeStyle: "",
        bathroom: "",
        pointer: {
          deepClean: false,
          selfCheckIn: false,
          greatLandlord: false,
          unbookPolicy: false,
          hotelRules: false,
        },
        roomIntro: "",
        bedrooms: [
          {
            bedNum: 0,
            bedWidth: 0,
            bedType: "",
          },
        ],
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
          checkInTime: "",
          checkOutTime: "",
          smoke: false,
          otherRules: "",
        },
      },
    };
  },
  computed: {
    ...mapState({
      userProfile: (state) => state.mLogin.userProfile,
    }),
  },
};
</script>

<style lang="sass">
$Blue: #0051CB

*
  // border: 1px solid #000

.progress
  width: 100%
  height: 10px
  .progressBar
    width: 2%
    height: 100%
    background-color: $Blue
    border-radius: 0px 50px 50px 0px
    transition: 2s

.becomeHostForm
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
</style>