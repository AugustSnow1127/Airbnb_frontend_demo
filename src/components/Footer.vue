<template lang="pug">
footer.footer
    section.footerLink
      .linkList
        .linkListBlock.customerService 客服中心
          ul.linkListGroup
            li.linkListLink 服務中心/常見Q&amp;A
            li.linkListLink 隱私權政策
            li.linkListLink 服務條款
        .linkListBlock.aboutUs 關於我們
          ul.linkListGroup
            li.linkListLink 關於我們
            li.linkListLink 職缺介紹
            li.linkListLink 新聞報導
            li.linkListLink 旅遊部落格
        .linkListBlock.becomePartner 成為合作夥伴
          ul.linkListGroup
            li.linkListLink 旅遊部落格
        .linkListBlock.mobileLink 行動裝置APP
          ul.linkListGroup
            li.linkListLink iOS免費下載
            li.linkListLink Android免費下載
    section.footerCopyright
      .copyrightContainer
        p.copyrightInfo 本網站內容由© 2005–2020 Angus Company Pte. Ltd.保留所有權利
        p.copyrightInfo Angus.com隸屬於全球線上旅遊相關事業的領導品牌Booking Holdings集團。
</template>

<script>
export default {

}
</script>

<style lang="sass">
.footer
  width: 100%
  height: 400px
  background-color: #eee
  padding: 70px 0px
  .footerLink
    padding: 0px 50px
    .linkList
      display: flex
      justify-content: center
      .linkListBlock
        margin: 0px 80px
        font-weight: 600
        font-size: 20px
      .linkListGroup
        padding: 0
        margin-top: 15px
        list-style: none
        .linkListLink
          padding: 0
          font-weight: normal
          font-size: 16px
          width: 150%

  .footerCopyright
    width: 100%
    height: 300px
    background-color: #333
    .copyrightContainer
      margin: 50px
      padding: 70px
      .copyrightInfo
        color: rgb(153,153,153)
        font-family: mallory, "Helvetica Neue", Helvetica, Arial
        font-size: 16px
        font-weight: 400
        margin: 0
        padding: 0
        text-align: center
</style>