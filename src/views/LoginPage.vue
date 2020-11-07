<template lang="pug">
form.loginBox(@submit.prevent)
  h6 登入
  .emailBox
    input(v-model.trim="loginForm.email" type="text" placeholder="電子郵件" id="email" autocomplete="off")
  .passwordBox
    input(v-model.trim="loginForm.password" type="password" placeholder="密碼" id="password")
  button.loginBtn(@click="login()") 登入
  .otherLoginBox
    .otherLoginBtn
      svg.facebookLogo.sc-fznzqM.cGsYwR.sc-fznOgF.glfmCu(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24')
        path(fill='#4267B2' fill-rule='evenodd' d='M22.122 12.061C22.122 6.505 17.618 2 12.062 2 6.504 2 2 6.505 2 12.061c0 5.022 3.68 9.184 8.49 9.939v-7.03H7.933V12.06h2.555V9.845c0-2.522 1.502-3.915 3.8-3.915 1.101 0 2.252.197 2.252.197v2.476h-1.268c-1.25 0-1.64.775-1.64 1.57v1.888h2.79l-.446 2.908h-2.344V22c4.81-.755 8.49-4.917 8.49-9.939')
      span Facebook登入
    .otherLoginBtn
      svg.googleLogo.sc-AxirZ.fyXWRs(xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24')
        path(fill='#eb4134' d='M2.93 3.43A9.97 9.97 0 0 1 10 .5a9.97 9.97 0 0 1 7.07 2.93l-2.828 2.828A5.98 5.98 0 0 0 10 4.5a5.98 5.98 0 0 0-4.242 1.758L2.93 3.43z')
        path(fill='#34aa51' d='M14.242 14.742l2.828 2.828A9.97 9.97 0 0 1 10 20.5a9.97 9.97 0 0 1-7.07-2.93l2.828-2.828A5.98 5.98 0 0 0 10 16.5a5.98 5.98 0 0 0 4.242-1.758z')
        path(fill='#fbbe04' d='M2.93 3.43l2.828 2.828A5.98 5.98 0 0 0 4 10.5a5.98 5.98 0 0 0 1.758 4.242L2.93 17.57A9.97 9.97 0 0 1 0 10.5a9.97 9.97 0 0 1 2.93-7.07z')
        path(fill='#4186f7' d='M10 8.5h9.8a10.131 10.131 0 0 1 0 4 9.99 9.99 0 0 1-2.73 5.07l-2.828-2.828a6 6 0 0 0 1.416-2.242H10v-4z')
      span Gmail登入
  .signinSuggestion
    span 還沒有帳號？
    router-link.link(to="/signup" tag="span") 註冊
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
  login() {
    this.$store.mLogin.dispatch('login', {
      email: this.loginForm.email,
      password: this.loginForm.password
    })
  }
}
}
</script>

<style lang="sass">
$gray: #bbb

*
  // border: 1px solid #000

html,body
  height: 100%
  width: 100%
  display: flex
  justify-content: center
  align-items: center

.loginBox
  width: 800px
  height: 600px
  box-sizing: border-box
  border: 1px solid $gray
  padding: 50px 25px
  border-radius: 20px
  h6
    text-align: center
    font-weight: 600

.emailBox
  display: flex
  padding: 10px 15px
  margin-top: 50px
  border-radius: 10px 10px 0px 0px
  border: 1px solid $gray
  ::placeholder
    color: $gray
  ::-internal-autofill-selected


.passwordBox
  width: 100%
  display: flex
  padding: 10px 15px
  margin-bottom: 50px
  border-radius: 0px 0px 10px 10px 
  border: 1px solid $gray
  ::placeholder
    color: $gray

.loginBtn
  width: 100%
  margin: 20px 0px
  padding: 10px
  border-radius: 10px
  background-color: #75A8F9
  color: white
  font-weight: 600
  transition: 0.2s
  border: 1px solid $gray
  &:hover
    opacity: 0.8
  &:focus
    outline: none

.otherLoginBox
  display: flex
  justify-content: center
  width: 100%

.otherLoginBtn
  width: 100%
  padding: 10px
  border-radius: 10px
  border: 1px solid $gray
  background-color: white
  display: flex
  justify-content: center
  align-items: center
  font-size: 22px
  transition: 0.2s
  cursor: pointer
  span
    font-weight: 600
    font-size: 20px
  &:hover
    background-color: #eee
  .facebookLogo
    height: 1.5em
    margin-right: 5px
  .googleLogo
    height: 1.5em
    transform: translateY(2px)
    margin-right: 5px
  
.signinSuggestion
  margin-top: 50px
  font-size: 20px
  span
    margin-right: 10px
  .link
    cursor: pointer
    text-decoration: underline
</style>