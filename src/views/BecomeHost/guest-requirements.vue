<template lang="pug">
.guestRequirementsPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 預訂設定
  .progress
    .progressBar11
  .form
    label.question 查看Airbnb的房客條件
    p.hint 所有房客在預訂之前必須先符合Airbnb的房客條件。
    p.content 所有Airbnb房客都必須提供：
    .subContent
      svg(viewBox='0 0 24 24' role='presentation' aria-hidden='true' focusable='false' style='height: 21px; width: 21px; display: block; fill: rgb(35, 209, 193);')
        path(d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z' fill-rule='evenodd')
      p.content 電子郵件地址
    .subContent
      svg(viewBox='0 0 24 24' role='presentation' aria-hidden='true' focusable='false' style='height: 21px; width: 21px; display: block; fill: rgb(35, 209, 193);')
        path(d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z' fill-rule='evenodd')
      p.content 已確認的電話號碼
    .subContent
      svg(viewBox='0 0 24 24' role='presentation' aria-hidden='true' focusable='false' style='height: 21px; width: 21px; display: block; fill: rgb(35, 209, 193);')
        path(d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z' fill-rule='evenodd')
      p.content 付款資訊
    hr
    p.content 在預訂前，每位房客都必須：
    .subContent
      svg(viewBox='0 0 24 24' role='presentation' aria-hidden='true' focusable='false' style='height: 21px; width: 21px; display: block; fill: rgb(35, 209, 193);')
        path(d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z' fill-rule='evenodd')
      p.content 同意您的《房屋守則》
    .subContent
      svg(viewBox='0 0 24 24' role='presentation' aria-hidden='true' focusable='false' style='height: 21px; width: 21px; display: block; fill: rgb(35, 209, 193);')
        path(d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z' fill-rule='evenodd')
      p.content 與您分享他們旅程的詳情
    .subContent
      svg(viewBox='0 0 24 24' role='presentation' aria-hidden='true' focusable='false' style='height: 21px; width: 21px; display: block; fill: rgb(35, 209, 193);')
        path(d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z' fill-rule='evenodd')
      p.content 讓您知道前來入住的房客人數
    .subContent
      svg(viewBox='0 0 24 24' role='presentation' aria-hidden='true' focusable='false' style='height: 21px; width: 21px; display: block; fill: rgb(35, 209, 193);')
        path(d='m1.29 11.98c-.29-.3-.76-.31-1.06-.02s-.31.76-.02 1.06l6.75 7c .29.3.78.31 1.07.01l15.75-16c .29-.3.29-.77-.01-1.06s-.77-.29-1.06.01l-15.21 15.45z' fill-rule='evenodd')
      p.content 如果他們在2天內入住，就需要確認他們的入住時間
    
    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(to="guest-requirements/house-rules", tag="button") 下一步


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
  .progressBar11
    width: 50%
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

.subContent
  display: flex
  margin-left: 40px
  .content
    margin-left: 20px
</style>