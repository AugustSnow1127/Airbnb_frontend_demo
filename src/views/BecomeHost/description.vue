<template lang="pug">
.descriptionPage
  nav.navbar.navbar-expand-lg.bg-light
    router-link.navbar-brand.nav-link(to="/", tag="a")
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    section 描述和標題
  .progress
    .progressBar8
  .form
    label.question 向房客描述您的空間
    p.hint 說明房源最棒的特色，強調高速 WiFi 或停車位等特殊設備與服務，並分享所在街區令人喜愛的原因。
    .questionBlock
      textarea#desText.form-control(rows='3')
    .questionBlock
      label 你的空間（選填）
      p.hint 描述房源的樣子和感覺。 點出房源的特殊設計元素或區域，例如溫馨的閱讀區或戶外座椅。
      textarea#desText.form-control(rows='3')
    .questionBlock
      label 你與房客的互動（選填）
      p.hint 說明房客入住時，你會以什麼方式提供協助。 為了安全起見，預訂確認前請勿分享你的電話號碼或電子郵件。
      textarea#desText.form-control(rows='3')
    .questionBlock
      label 你的街區（選填）
      p.hint 分享你所在街區的特別之處，例如環境氛圍、鄰近的咖啡廳、獨特地標或步行可達的景點。
      textarea#desText.form-control(rows='3')
    .questionBlock
      label 周邊交通（選填）
      p.hint 新增城市或街區的交通資訊，例如周邊的大眾交通、自駕提示或不錯的散步路線。
      textarea#desText.form-control(rows='3')

    .questionBlock
    .questionBlock
    .questionBlock

    hr
    .backAndNext
      router-link.btn(to="/becomehost/rooms/bathrooms/location/amenities/spaces/photos", tag="button") &lt;&lt;返回
      router-link.btn.btn-primary.btn-sm.nextBtn(to="description/title", tag="button") 下一步


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
  .progressBar8
    width: 35%
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
  #desText
    height: 200px

</style>