<template lang="pug">
.bedInfo
  #leftInfo
    .bedroom 臥室
    .bedNum 0張床
    .selectedResult
    .bedInputBox
      div
        span 1.4米寬雙人床
        .calculate
          button.firstBedMinus.calBtn.inactiveBtn
            span
              img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
          span.roomNum 0
          button.firstBedPlus.calBtn
            span
              img(src="https://img.icons8.com/android/24/000000/plus.png")
      div
        span 1.5米寬雙人床
        .calculate
          button.secondBedMinus.calBtn.inactiveBtn
            span
              img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
          span.roomNum 0
          button.secondBedPlus.calBtn
            span
              img(src="https://img.icons8.com/android/24/000000/plus.png")
      div
        span 1米寬單人床
        .calculate
          button.thirdBedMinus.calBtn.inactiveBtn
            span
              img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
          span.roomNum 0
          button.thirdBedPlus.calBtn
            span
              img(src="https://img.icons8.com/android/24/000000/plus.png")
  #rightInfo
    button.btn.btn-default 添加床型
</template>

<script>
export default {

}
</script>

<style lang="sass">
.bedInputBox
  display: flex
  font-size: 28px
  align-items: center
  padding: 20px 0px

.calculate
  display: flex
  align-items: center
  position: absolute
  right: 300px
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