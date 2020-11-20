<template lang="pug">
nav.navbar.navbar-expand-lg.bg-light
    a.navbar-brand(href='#') 
      img#brandLogo(src="https://fxdailyreport.com/wp-content/uploads/2018/10/Atlassian-Corporation-1200x1200.png")
    button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarNav.collapse.navbar-collapse
      ul.navbar-nav
        li.nav-item
          a.nav-link(href='#')
            | 住宿 
            span.sr-only (current)
        li.nav-item
          a.nav-link(href='#') 機票
        li.nav-item
          a.nav-link(href='#') 租車
        li.nav-item
          a.nav-link(href='#') 熱門景點
        li.nav-item
          a.nav-link(href='#') 成為房東
        li.nav-item
          router-link.nav-link.loginBtn(to="/login" tag="a") 登入
</template>

<script>
export default {

}
</script>

<style lang="sass">
$Blue: #0051CB

li
  padding-left: 0.25rem
  font-weight: 600
  font-size: 22px
  a
    &.loginBtn
      border-radius: 50px
      position: absolute
      right: 30px
      margin: 5px
      padding: 10px 30px
      border: 1px solid black
      transition: 0.2s
      &:hover
        color: white
        background-color: $Blue
  
.nav-link
  color: black
  &:hover
    color: $Blue

.navbar-toggler
  border: 1px solid transparent
  border-radius: 0.25rem

.navbar-toggler-icon 
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")

#brandLogo
  width: 40px
</style>