<template lang="pug">
.HB
  .hotelBlock(v-for="hotel in hotels.slice(0,6)")
    a.blockLink
      .comment
        .leftComment
          span.textComment(v-if="hotel.commentScore>8") 很讚
          span.textComment(v-if="hotel.commentScore>6 && hotel.commentScore<8") 很好
          span.textComment(v-if="hotel.commentScore>4 && hotel.commentScore<6") 滿意
          span.textComment(v-if="hotel.commentScore>2 && hotel.commentScore<4") 較差
          span.textComment(v-if="hotel.commentScore>=0 && hotel.commentScore<2") 劣質
          span.numOfComment {{hotel.numOfComment}}篇評論
        .rightComment
          .blueBox
            span.commentScore {{hotel.commentScore}}
      img.hotelImg(:src='hotel.backgroundImgUrl')
      .hotelInfo
        .top
          .hotelName {{hotel.name}}
          .region {{hotel.region}}
          .stars 
            font-awesome-icon(v-if="hotel.commentScore > 0" :icon=['fas',"star"])
            font-awesome-icon(v-if="hotel.commentScore > 2" :icon=['fas',"star"])
            font-awesome-icon(v-if="hotel.commentScore > 4" :icon=['fas',"star"])
            font-awesome-icon(v-if="hotel.commentScore > 6" :icon=['fas',"star"])
            font-awesome-icon(v-if="hotel.commentScore > 8" :icon=['fas',"star"])
            font-awesome-icon(v-if="hotel.commentScore == 0" :icon=['far',"star"])
            font-awesome-icon(v-if="hotel.commentScore < 2" :icon=['far',"star"])
            font-awesome-icon(v-if="hotel.commentScore < 4" :icon=['far',"star"])
            font-awesome-icon(v-if="hotel.commentScore < 6" :icon=['far',"star"])
            font-awesome-icon(v-if="hotel.commentScore < 8" :icon=['far',"star"])
        .bottom
          .discount 
            span {{Math.floor((1-hotel.discount)*100)}}% off
          .price
            .originalPrice NT$ {{(hotel.originalPrice-hotel.originalPrice%1000)/1000}},{{hotel.originalPrice%1000}}
            span NT$ 
            .discountedPrice {{(hotel.originalPrice*hotel.discount-hotel.originalPrice*hotel.discount%1000)/1000}},{{Math.floor(hotel.originalPrice*hotel.discount%1000)}}
</template>

<script>
export default {
  props: ['hotels'],
  name: 'App'
}
</script>

<style lang="sass">
.HB
  display: flex
  justify-content: center
  flex-wrap: wrap
  margin: 0px 15%
.hotelBlock
  border: 1px solid #000
  width: 350px
  height: 425px
  border-radius: 5px
  overflow: hidden
  display: inline-block
  margin: 0px 40px 20px 40px
  border: 1px solid rgba(115,115,115,0.2)
  transition: 0.1s
  &:hover
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3)
  .blockLink
    color: black
    cursor: pointer
    position: relative
    &:hover
      text-decoration: none
  .hotelImg
    // background-image: url(https://pix6.agoda.net/hotelImages/666/666/666_17071308270054428767.jpg?s=1024x768)
    height: 50%
    width: 100%
    background-size: cover
    position: relative
  .comment
    background-color: white
    width: 160px
    height: 70px
    display: flex
    align-items: center
    padding: 5px
    margin: 10px
    position: absolute
    right: 0px
    border-radius: 5px
    z-index: 100
    .leftComment
      text-align: right
      transform: translateX(4px)
      span
        display: block
      .textComment
        font-size: 18px
        font-weight: 600
      .numOfComment
        font-size: 14px
        opacity: 0.8
    .rightComment
      margin-left: 12px
      border-radius: 5px
      overflow: hidden
      height: 80%
      width: 60px
      .blueBox
        background-color: #5392F9
        padding: 5px
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        color: white
        font-weight: 600

  .hotelInfo
    height: 50%
    padding: 10px
    .top
      height: 50%
      .hotelName
        font-size: 18px
        font-weight: 600
      .region
        font-size: 16px
        opacity: 0.8
        margin-top: -5px
      .stars
        color: #FFA726
        font-size: 14px
        margin: 5px 0px
    .bottom
      height: 50%
      text-align: right
      .discount
        font-size: 14px
        transform: translateX(10px)
        span
          background-color: #d32626
          padding: 5px 8px
          color: white
      .price
        padding: 10px 5px
        .originalPrice
          font-size: 12px
          opacity: 0.8
          text-decoration: line-through
          transform: translateY(5px)
        span
          font-size: 12px
          display: inline-block
          color: #d32626
          margin-right: 5px
        .discountedPrice
          display: inline-block
          font-size: 20px
          color: #d32626
          font-weight: 600


</style>