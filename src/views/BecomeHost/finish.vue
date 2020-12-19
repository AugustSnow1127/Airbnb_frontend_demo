<template lang="pug">
.finishPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 完成
  .progress
    .progressBar15
  .form
    label.question 完成房源發布，開始賺取收入
    p.hint 房源發布後，您可以隨時編輯房源資訊。
    .questionBlock
      .content 房源資訊
      .content 房間資訊
      .content 衛浴設備
      .content 位置
      .content 設施與服務
      .content 相片
      .content 房源描述
      .content 標題
      .content 電話號碼
      .content 房屋守則
      .content 價格

    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements/house-rules", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(to="/", tag="button") 完成


</template>

<script>
export default {

}
</script>

<style lang="sass">
$Blue: #0051CB

// default css
.progress
  width: 100%
  height: 10px
  .progressBar15
    width: 95%
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