<template lang="pug">
#app
  transition(name="page" mode="out-in")
    router-view
</template>

<style lang="sass">
#app 
  // font-family: 'Avenir', Helvetica, Arial, sans-serif
  // -webkit-font-smoothing: antialiased
  // -moz-osx-font-smoothing: grayscale
  // text-align: center
  // color: #2c3e50
  // margin-top: 60px
.page-enter-active, .page-leave-active
  transition: 0.5s
.page-enter, .page-leave-to
  opacity: 0
</style>
