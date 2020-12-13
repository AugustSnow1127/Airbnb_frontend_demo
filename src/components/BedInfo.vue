<template lang="pug">
.bedInfo
  .bed(v-for="bedroom in hostRooms.bedrooms" :key="bedroom.roomNo")
    #leftInfo
      .bedroom 臥室{{ bedroom.roomNo }}
      .bedNum {{bedroom.oneFourBedNum + bedroom.oneFiveBedNum + bedroom.oneBedNum}}張床
      .selectedResult
      .bedInputBox(class="bedroom.roomNo")
        .selectBed
          span.selectBedStyle 1.4米寬雙人床
          .hostRoomsCalculate
            button.calBtn.activeOneFourBedMinusBtn(v-if="bedroom.oneFourBedNum" @click="oneFourBedMinus(bedroom.roomNo)")
              span
                img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
            button.calBtn.inactiveBtn(v-else)
              span
                img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
            span.oneFourBedNum {{ bedroom.oneFourBedNum }}
            button.calBtn(@click="oneFourBedPlus(bedroom.roomNo)")
              span
                img(src="https://img.icons8.com/android/24/000000/plus.png")
        .selectBed
          span.selectBedStyle 1.5米寬雙人床
          .hostRoomsCalculate
            button.calBtn.activeoneFiveBedMinusBtn(v-if="bedroom.oneFiveBedNum" @click="oneFiveBedMinus(bedroom.roomNo)")
              span
                img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
            button.calBtn.inactiveBtn(v-else)
              span
                img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
            
            span.oneFiveBedNum {{ bedroom.oneFiveBedNum }}
            button.calBtn(@click="oneFiveBedPlus(bedroom.roomNo)")
              span
                img(src="https://img.icons8.com/android/24/000000/plus.png")
        .selectBed
          span.selectBedStyle 1米寬單人床
          .hostRoomsCalculate
            button.calBtn.activeoneBedMinusBtn(v-if="bedroom.oneBedNum" @click="oneBedMinus(bedroom.roomNo)")
              span
                img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
            button.calBtn.inactiveBtn(v-else)
              span
                img(src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAA/0lEQVR4nO3ZMUoDQRQG4PcGz+ENBFlIWsFD5C6ewMaDiHewsQwbsBFbEc+xk8bCwhCMgbch3wdTzT744Wem2IkAAAAAAAAAAAAAAAAAADhFWR1gn/V6fd1aWx0yO03T03K5fD12pmO6qA6wT2ZeRcTdgbPvEaGA/8jMt4h4+GXrMiJW39889t6/dszO2uyvoF02m81t7/05IqK1djMMw0t1pkO06gDnTgEnqM9hLRaLPo5jH8exD8NQnufH+hMnoJgCiimgmAKKKaCYAoopoJhfEcWcgGIKKKaAYgooNvsHmV2mafrIzPuIiMz8rM4DAAAAAAAAAAAAAAAAAHBetiItdLcYh9C1AAAAAElFTkSuQmCC")
            
            span.oneBedNum {{ bedroom.oneBedNum }}
            button.calBtn(@click="oneBedPlus(bedroom.roomNo)")
              span
                img(src="https://img.icons8.com/android/24/000000/plus.png")
    //- #rightInfo
    //-   button.btn.btn-light(@click="toggleBedInputBox(bedroom.roomNo)") 添加床型
</template>

<script>
export default {
  props: ['hostRooms'],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {
    oneFourBedPlus(roomNo) {
      this.hostRooms.bedrooms[roomNo - 1].oneFourBedNum++
    },
    oneFourBedMinus(roomNo) {
      if(this.hostRooms.bedrooms[roomNo - 1].oneFourBedNum > 0){
        this.hostRooms.bedrooms[roomNo - 1].oneFourBedNum--
      }
    },
    oneFiveBedPlus(roomNo) {
      this.hostRooms.bedrooms[roomNo - 1].oneFiveBedNum++
    },
    oneFiveBedMinus(roomNo) {
      if(this.hostRooms.bedrooms[roomNo - 1].oneFiveBedNum > 0){
        this.hostRooms.bedrooms[roomNo - 1].oneFiveBedNum--
      }
    },
    oneBedPlus(roomNo) {
      this.hostRooms.bedrooms[roomNo - 1].oneBedNum++
    },
    oneBedMinus(roomNo) {
      if(this.hostRooms.bedrooms[roomNo - 1].oneBedNum > 0){
        this.hostRooms.bedrooms[roomNo - 1].oneBedNum--
      }
    },
  },
}
</script>

<style lang="sass">
*
  // border: 1px solid rgb(200, 200, 200)
  
.bed
  margin-bottom: 20px
  display: flex
  border-bottom: 1px solid rgba(200, 200, 200, 0.5)

.bedInputBox
  font-size: 28px
  align-items: center
  padding: 20px 0px
  .selectBed
    display: flex
    .selectBedStyle
      width: 250px
      margin-bottom: 20px

.bedNum
  color: gray
  font-size: 16px

.hostRoomsCalculate
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

#rightInfo
  position: absolute
  right: 80px
</style>