<template lang="pug">
.searchBox
  label.locLabel
    .searchSub 位置
      .inputBox.locationInput 你要去哪裡?
    .locationSuggestionBox
      ul
        li.suggestion.taipeiLocationSuggestion
          font-awesome-icon.mapIcon(icon="map-marker-alt")
          label.locationSuggestionLabel 台北市
        li.suggestion.kaohsiungLocationSuggestion
          font-awesome-icon.mapIcon(icon="map-marker-alt")
          label.locationSuggestionLabel 高雄市
        li.suggestion.taitungLocationSuggestion
          font-awesome-icon.mapIcon(icon="map-marker-alt")
          label.locationSuggestionLabel 台東市
  label.checkInLabel
    .searchSub 入住
      .inputBox.checkInInput 選擇日期
  label.checkOutLabel
    .searchSub 退房
      .inputBox.checkOutInput 選擇日期
  label.peopleLabel
    .searchSub 人數
      .inputBox.peopleInput 新增人數
    .peopleWritingBox 
      .writingBox.adultWriting
        .humanKind
          div 成人
          .yearOld 滿 13 歲
        .calculate
          button.adultMinus.calBtn.inactiveBtn
            span
              img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
          span.adultNum 0
          button.adultPlus.calBtn
            span
              img(src="https://img.icons8.com/android/24/000000/plus.png")
      .writingBox.childrenWriting 
        .humanKind
          div 兒童
          .yearOld 2 - 12歲
        .calculate
          button.childrenMinus.calBtn.inactiveBtn
            span
              img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
          span.childrenNum 0
          button.childrenPlus.calBtn
            span
              img(src="https://img.icons8.com/android/24/000000/plus.png")
      .writingBox.babyWriting 
        .humanKind
          div 嬰幼兒
          .yearOld 2歲以下
        .calculate
          button.babyMinus.calBtn.inactiveBtn
            span
              img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
          span.babyNum 0
          button.babyPlus.calBtn
            span
              img(src="https://img.icons8.com/android/24/000000/plus.png")
              
  .searchButton
    button.searchBtn
      font-awesome-icon.searchIcon(icon="search")
</template>

<script>
import $ from 'jquery'

let adultNumber = 0
let childrenNumber = 0
let babyNumber = 0

let selectedLocation = ""

export default {
  mounted() {
    //scroll menu slideToggle
    $(".locationInput").click(function(){
      $(".locationSuggestionBox").slideToggle("fast")
      $(".peopleWritingBox").slideUp("fast")
    })
    $(".peopleInput").click(function(){
      $(".peopleWritingBox").slideToggle("fast")
      $(".locationSuggestionBox").slideUp("fast")
    })

    //location suggestion logic
    $(".taipeiLocationSuggestion").click(function(){
      selectedLocation = "台北市"
      $(".locationInput").text(selectedLocation)
      $(".locationSuggestionBox").slideUp("fast")
    })
    $(".kaohsiungLocationSuggestion").click(function(){
      selectedLocation = "高雄市"
      $(".locationInput").text(selectedLocation)
      $(".locationSuggestionBox").slideUp("fast")
    })
    $(".taitungLocationSuggestion").click(function(){
      selectedLocation = "台東市"
      $(".locationInput").text(selectedLocation)
      $(".locationSuggestionBox").slideUp("fast")
    })

    //adult calulate logic
    $(".adultPlus").click(function(){
      adultNumber++
      $(".adultNum").text(adultNumber)
      $(".adultMinus").removeClass("inactiveBtn")
      if(adultNumber + childrenNumber != 0){
        $(".peopleInput").css("opacity","1")
        $(".peopleInput").text(adultNumber + childrenNumber + "位")
        if(babyNumber != 0){
          $(".peopleInput").append(", " + babyNumber + "名嬰幼兒")
        }
      }else{
        $(".peopleInput").text("新增人數")
        $(".peopleInput").css("opacity","0.8")
      }
    })
    $(".adultMinus").click(function(){
      if(adultNumber != 0){
        adultNumber--
        if(adultNumber == 0 && childrenNumber + babyNumber != 0){
          adultNumber++
        }else if(adultNumber + childrenNumber != 0){
          $(".peopleInput").css("opacity","1")
          $(".peopleInput").text(adultNumber + childrenNumber + "位")
          if(babyNumber != 0){
            $(".peopleInput").append(", " + babyNumber + "名嬰幼兒")
          }
        }else{
          $(".peopleInput").text("新增人數")
          $(".peopleInput").css("opacity","0.8")
        }
        if(adultNumber == 0){
          $(".adultMinus").addClass("inactiveBtn")
        }
        $(".adultNum").text(adultNumber)
      }
    })
    //children calulate logic
    $(".childrenPlus").click(function(){
      //a least one adult
      if(adultNumber == 0){
        childrenNumber++
        $(".childrenNum").text(childrenNumber)
        $(".childrenMinus").removeClass("inactiveBtn")
        adultNumber++
        $(".adultNum").text(adultNumber)
        $(".adultMinus").removeClass("inactiveBtn")
      }else{
        childrenNumber++
        $(".childrenNum").text(childrenNumber)
        $(".childrenMinus").removeClass("inactiveBtn")
      }

      if(adultNumber + childrenNumber != 0){
        $(".peopleInput").css("opacity","1")
        $(".peopleInput").text(adultNumber + childrenNumber + "位")
        if(babyNumber != 0){
          $(".peopleInput").append(", " + babyNumber + "名嬰幼兒")
        }
      }else{
        $(".peopleInput").text("新增人數")
        $(".peopleInput").css("opacity","0.8")
      }
    })
    $(".childrenMinus").click(function(){
      if(childrenNumber != 0){
        childrenNumber--
        $(".childrenNum").text(childrenNumber)
        if(adultNumber + childrenNumber != 0){
          $(".peopleInput").css("opacity","1")
          $(".peopleInput").text(adultNumber + childrenNumber + "位")
          if(babyNumber != 0){
            $(".peopleInput").append(", " + babyNumber + "名嬰幼兒")
          }
        }else{
          $(".peopleInput").text("新增人數")
          $(".peopleInput").css("opacity","0.8")
        }
        if(childrenNumber == 0){
          $(".childrenMinus").addClass("inactiveBtn")
        }
      }
    })
    //baby calulate logic
    $(".babyPlus").click(function(){
      //a least one adult
      if(adultNumber == 0){
        babyNumber++
        $(".babyNum").text(babyNumber)
        $(".babyMinus").removeClass("inactiveBtn")
        adultNumber++
        $(".adultNum").text(adultNumber)
        $(".adultMinus").removeClass("inactiveBtn")
      }else{
        babyNumber++
        $(".babyNum").text(babyNumber)
        $(".babyMinus").removeClass("inactiveBtn")
      }

      if(adultNumber + childrenNumber != 0){
        $(".peopleInput").css("opacity","1")
        $(".peopleInput").text(adultNumber + childrenNumber + "位")
        if(babyNumber != 0){
          $(".peopleInput").append(", " + babyNumber + "名嬰幼兒")
        }
      }else{
        $(".peopleInput").text("新增人數")
        $(".peopleInput").css("opacity","0.8")
      }
    })
    $(".babyMinus").click(function(){
      if(babyNumber != 0){
        babyNumber--
        $(".babyNum").text(babyNumber)
        if(adultNumber + babyNumber != 0){
          $(".peopleInput").css("opacity","1")
          $(".peopleInput").text(adultNumber + childrenNumber + "位")
          if(babyNumber != 0){
            $(".peopleInput").append(", " + babyNumber + "名嬰幼兒")
          }
        }else{
          $(".peopleInput").text("新增人數")
          $(".peopleInput").css("opacity","0.8")
        }
        if(babyNumber == 0){
          $(".babyMinus").addClass("inactiveBtn")
        }
      }
    })
  }
}
</script>

<style lang="sass">
$Blue: #0051CB

*
  font-family: 微軟正黑體, sans-serif

.searchBox
  width: 1000px
  height: 85px
  display: flex
  border-radius: 50px
  margin: 0
  position: absolute
  top: 250px
  z-index: 100
  background-color: white
  opacity: 0.95
  box-sizing: border-box
  // overflow: hidden

label
  box-sizing: border-box

.locLabel
  width: 25%
.checkInLabel
  width: 20%
.checkOutLabel
  width: 20%
.peopleLabel
  width: 40%

.searchSub
  // width: 23%
  height: inherit
  box-sizing: border-box
  padding: 12px 35px
  box-sizing: border-box
  font-size: 20px
  background-color: white
  font-weight: 600
  border-radius: 50px 
  &:hover
    background-color: rgba(0,0,0,0.1)


.inputBox
  font-size: 18px
  padding: 0
  margin-top: 2px
  background: none
  width: 100%
  text-overflow: ellipsis
  font-weight: normal
  opacity: 0.8

.searchButton
  position: absolute
  right: 10px
  height: 100%
  display: flex
  align-items: center
  transform: translate(-5px)
  border: none
  outline: none
  .searchBtn
    width: 65px
    height: 65px
    background-color: #DA0A64
    border-radius: 50px
    border: none
    transition: 0.2s
    outline: none
    &:hover
      background-color: #a5094a
    
.searchIcon
  color: white

.locationSuggestionBox
  width: 300%
  background-color: white
  border-radius: 50px
  padding: 0
  margin: 0
  position: relative
  top: 20px
  overflow: hidden
  display: none
  ul
    padding: 0
    margin: 0
  li
    list-style: none
    width: 100%
    height: 90px
    display: block
    margin: 5px 0px
    padding: 25px
    &:hover
      background-color: rgba(0,0,0,0.05)
  .mapIcon
    color: $Blue
  .locationSuggestionLabel
    margin: 0px 20px

.peopleWritingBox
  width: 100%
  background-color: white
  border-radius: 50px
  padding: 10px 30px 20px 30px
  margin: 0
  position: relative
  top: 20px
  overflow: hidden
  display: none
  .writingBox
    width: 100%
    height: 90px
    margin: 0
    padding: 30px 0px
    font-weight: 600
    font-size: 20px
    display: flex
    .humanKind
      transform: translateY(-10px)
    .yearOld
      font-size: 16px
      padding: 0
      color: gray
      transform: translateY(-5px)

  .adultWriting, .childrenWriting
    border-bottom: 1px solid rgb(235, 235, 235)

  .calculate
    position: absolute
    right: 30px
    display: flex
    align-items: center
    span
      display: flex
      align-items: center
      justify-content: center
      img
        width: 20px
        height: 20px
    .calBtn
      width: 45px
      height: 45px
      margin: 0px 15px
      border-radius: 50px
      border: 1px solid rgb(200, 200, 200)
      background-color: white
      outline: none
      &::hover
        border: 1px solid black
    .inactiveBtn
      opacity: 0.3
      cursor: not-allowed
      &:hover
        border: 1px solid rgb(200, 200, 200)

</style>