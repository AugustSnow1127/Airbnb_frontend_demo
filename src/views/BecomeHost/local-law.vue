<template lang="pug">
.localLawPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 法律
  .progress
    .progressBar14
  .form
    label.question 您的當地法律和稅費
    .lawContent.bold 請確保您已熟知當地相關法律以及
      span Airbnb的反歧視政策。
    .lawContent 請花點時間查看您房源適用的當地法規。 我們希望確保您做好一切準備，有美好的開始。
    .lawContent 大多數城市對於住家分享都有相關規定，許多地方甚至制定專門法規和條例（例如分區、建築物、執照或稅法）。 在大多數地區，必須先辦理登記、取得許可證或執照，才能發佈房源或接待房客。 您可能還要負責代收彙繳特定稅費。 某些地方可能完全禁止短期出租。
    .lawContent 由於在Airbnb發佈房源或開放預訂的決定與責任在於您，在此之前請詳加了解適用規定。 我們在「您所在城市的法規」下方提供了一些實用資源，供您參考。
    span.lawContent 進一步了解房東義務
    .lawContent 接受我們的服務條款並發佈您的房源，即表示您保證遵守適用的法律與法規。

    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos/description/title/phone/guest-requirements/house-rules/price", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(to="local-law/finish", tag="button") 下一步


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
  .progressBar14
    width: 84%
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

.lawContent
  font-size: 20px
  margin: 20px 0px

.bold
  font-weight: 600
</style>