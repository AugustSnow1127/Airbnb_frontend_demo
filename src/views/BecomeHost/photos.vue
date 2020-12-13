<template lang="pug">
.photosPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 相片
  .progress
    .progressBar7
  .form
    label.question 透過相片讓房源鮮活起來
    p.hint 使用手機或相機拍攝相片。 上傳至少一張相片好發布房源，之後你可以隨時增加相片數量或加以編輯。

    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(to="photos/description", tag="button") 下一步


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
  .progressBar7
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

</style>