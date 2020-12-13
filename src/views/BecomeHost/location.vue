<template lang="pug">
.locationPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 位置
  .progress
    .progressBar4
  .form
    label.question 您的房源位於什麼地方？
    button.locationBtn
      span 
        svg(viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false' style='display: block; height: 16px; width: 16px; fill: currentcolor;')
          path(d='M16 1C9.925 1 5 6 5 12s3.667 12.167 11 18.5C23.333 24.167 27 18 27 12c0-6.075-4.925-11-11-11zm0 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z')
      span 使用目前位置
    .questionBlock
      label.smallQuestion 國家／地區
      select.form-control.form-control-sm
        option 台灣地區
    .questionBlock
      label.smallQuestion 街道
      input#formGroupExampleInput.form-control(type='text' placeholder='房屋名稱／號碼 + 街／路')
    .questionBlock
      label.smallQuestion 公寓、套房門牌號碼（選填）
      input#formGroupExampleInput.form-control(type='text' placeholder='公寓、套房、大廈號碼')
    .row
      .col
        label.smallQuestion 城市
        input.form-control(type='text' placeholder='城市(例：台北市)')
      .col
        label.smallQuestion 地區
        input.form-control(type='text' placeholder='地區(例：信義區)')
    .row
      .col
        label.smallQuestion 郵遞區號
        input.form-control(type='text' placeholder='郵遞區號')
      .col
    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(to="location/amenities", tag="button") 下一步


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
  .progressBar4
    width: 15%
    height: 100%
    background-color: $Blue
    border-radius: 0px 50px 50px 0px
    transition: 0.5s
p
  font-size: 18px
  color: gray
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

.locationBtn
  background-color: white
  border-radius: 20px
  padding: 10px 30px
  font-size: 16px
  display: flex
  justify-content: center
  align-items: center
  margin: 10px 0px
  &:focus
    outline: none

.smallQuestion
  font-size: 20px

.questionBlock
  margin: 30px 0px
</style>