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
      input#formGroupExampleInput.form-control(type='text' placeholder='新增手機電話號碼')

    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(to="phone/guest-requirements", tag="button") 下一步


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
  .progressBar10
    width: 45%
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

</style>