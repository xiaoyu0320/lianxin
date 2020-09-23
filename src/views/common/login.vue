<template>
  <div class="login">
    <div class="logo-style">
      <img src="@s/login/logo.png" />
      <h3>幸运BaaS</h3>
    </div>
    <div class="login-content">
      <!-- phone -->
      <div class="line">
        <label>
          <img src="@s/login/phone.png" style="width:.21rem" />
        </label>
        <input type="text" :placeholder="$t('message.Pleaseenteryourphonenumber')" v-model="phone" />
      </div>
      <!-- password -->
      <div class="line">
        <label>
          <img src="@s/login/password1.png" style="width:.21rem" />
        </label>
        <input
          type="password"
          :placeholder="$t('message.Pleaseenterthepassword')"
          v-model="password"
          @keydown="submit($event)"
        />
      </div>
      <div class="align" @click="goforget">忘记密码?</div>
      <!-- code -->
    </div>
    <div class="login-bottom">
      <div class="btn pintuan-btn" @click="_login">
        登录
      </div>
      <div class="login__account">
        <a @click="goregister('/register')">新注册账号</a>
        <a @click="goregister('/download')" style="padding-left:.2rem">下载App</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
// import { ECPair, payments } from 'bitcoinjs-lib'
// import { bip32 } from "bip32";
// const wif = require("wif");
export default {
  data() {
    return {
      phone: '',
      password: '',
      Graphic: '',
      codeUrl: window.g.apiurl + 'user/getCaptcha',
      changeUrl: '',
      worngTime: null,
      ss: ''
    }
  },
  created() {
    if (localStorage['_shop_userId']) {
      this.$router.replace({
        path: '/wallet/index'
      })
    }
  },
  methods: {
    goagree() {},
    submit(e) {
      if (e.keyCode === 13) {
        this._login()
      }
    },
    goregister(url) {
      this.$router.push({
        path: url
      })
    },
    goforget() {
      this.$router.push({
        path: '/my/modifyPassword',
        query: {
          type: 1
        }
      })
    },
    _login() {
      // let reg = /^[A-Za-z0-9]{6,32}$/
      // let flag = reg.test(this.password)
      if (!this.phone) {
        Toast('请输入手机号码')
        return
      }
      if (!this.password) {
        Toast('请输入登录密码')
        return
      }
      if (this.password.length < 6) {
        Toast('密码不能小于6位数')
        return
      }
      // const keyPair = ECPair.makeRandom()
      // const wif = keyPair.toWIF()
      // const { address } = payments.p2pkh({ pubkey: keyPair.publicKey })
      Toast.loading({
        mask: true,
        message: '登录中...',
        duration: 0
      })
      const obj = {}
      obj.account = this.phone
      obj.password = this.password

      this.$store.dispatch('gologin', obj).then(res => {
        Toast.clear()
        localStorage.setItem('_shop_userId', res.uid)
        localStorage.setItem('_shop_token', res.token)
        Toast.success('登录成功')
        this.$router.push({
          path: '/'
        })
      })
      this.password = ''
    }
  }
}
</script>
<style scoped lang="scss">
.login {
  height: 100vh;
  overflow: hidden;
  .pref {
    position: relative;
  }
  text-align: center;
  .logo-style {
    margin: 20% 0;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 1.8rem;
      height: 1.8rem;
    }
    h3 {
      color: #333333;
      font-size: 0.36rem;
      margin-top: 0.2rem;
    }
  }
  .title {
    text-align: left;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .login-content {
    text-align: left;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    position: relative;
    div {
      display: flex;
      align-items: center;
      margin-top: 0.3rem;
      color: #222;
      label {
        color: #507ef2;
        img {
          width: 100%;
        }
      }
    }
    .login-code {
      margin-top: 0;
      position: absolute;
      right: 0;
      img {
        width: 2.5rem;
      }
    }
    div {
      font-size: 12px;
      color: #999;
      label {
        color: #333;
      }
    }
    input {
      font-size: 13px;
      outline: none;
      width: 100%;
      padding: 15px 0;
      color: #222;
    }
  }
  .login-bottom {
    display: flex;
    flex-direction: column;
    .btn {
      color: #fff;
      font-size: 0.3rem;
      height: 0.9rem;
      line-height: 0.9rem;
      border-radius: 0.16rem;
      width: 80%;
      margin: 10% auto 0;
      background: #2c5bf5;
    }
    .agreement {
      margin-top: 18px;
      font-size: 12px;
      color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
      label {
        border-radius: 50%;
        width: 11px;
        height: 11px;
        padding: 2px;
        margin-right: 10px;
        img {
          width: 100%;
        }
      }
      div {
        color: #333;
      }
    }
  }
}
.posifixed {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 100%;
}
.login {
  height: 100vh;
  font-size: 0.28rem;
  .login-content {
    div {
      .login__forget {
        position: absolute;
        right: 0;
        font-size: 12px;
        margin-top: 0;
        border: 0;
        right: 15%;
        font-weight: normal;
      }
      label {
        display: block;
        text-align: right;
        margin-right: 10px;
      }
    }
    .line {
      border-bottom: 1px solid #eee;
    }
    input {
      border: 0;
    }
  }
  .title {
    margin-top: 20px;
    padding: 0 15%;
  }
}
.login__account {
  display: flex;
  justify-content: center;
  padding: 0 10%;
  margin-top: 0.5rem;
  a {
    color: #1741ac;
    text-decoration: underline;
    font-size: 0.28rem;
  }
  label {
    color: #bfc4d6;
    font-size: 0.28rem;
  }
}
.align {
  text-align: right;
  justify-content: flex-end;
}
</style>
