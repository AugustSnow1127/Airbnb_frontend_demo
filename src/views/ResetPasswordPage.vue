<template lang="pug">
form.resetPasswordBox(@submit.prevent)
  h6 忘記密碼？
  .description 請輸入與您的帳號關聯的電子信箱地址，我們會透過電子郵件向您寄送重設密碼的連結。
  .resetEmailBox
    input(v-model.trim="email" type="email" placeholder="電子郵件" id="email" autocomplete="off")
  p.error(v-if="errorMsg !== ''") {{ errorMsg }}
  button.resetPasswordBtn(@click="resetPassword()") 傳送重設連結
</template>

<script>
import { auth } from '@/firebase'
import router from '@/router/index'

export default {
  props: ['resetPasswordErr'],
  data() {
    return {
      email: "",
      errorMsg: ''
    }
  },
  methods: {
    async resetPassword() {
      await auth.sendPasswordResetEmail(this.email)
      .then(()=>{
        alert('重設連結已寄至信箱');
        router.push('/login')
      }).catch(err =>{
        var errorCode = err.code;
        if (errorCode === 'auth/invalid-email') {
          this.errorMsg = "您輸入的信箱格式錯誤"
        }else if (errorCode === 'auth/user-not-found') {
          this.errorMsg = "您輸入的使用者不存在"
        }else { 
          alert(err);
        }
        console.log(err);
      })
    }
  }
}
</script>

<style lang="sass">
$gray: #bbb

html,body
  // height: 100%
  width: 100%
  display: flex
  justify-content: center
  align-items: center

.resetPasswordBox
  width: 800px
  height: 500px
  box-sizing: border-box
  border: 1px solid $gray
  padding: 50px 25px
  border-radius: 20px
  h6
    text-align: center
    font-weight: 600

.description
  color: #484848
  font-size: 22px
  margin: 50px 0px 20px 0px

.resetEmailBox
  display: flex
  padding: 10px 15px
  margin-bottom: 50px
  border-radius: 10px 
  border: 1px solid $gray
  ::placeholder
    color: $gray
  ::-internal-autofill-selected

.error
  color: red

.resetPasswordBtn
  width: 100%
  margin: 20px 0px
  padding: 10px
  border-radius: 10px
  background-color: black
  color: white
  font-weight: 600
  transition: 0.2s
  border: 1px solid $gray
  &:hover
    opacity: 0.8
  &:focus
    outline: none
</style>