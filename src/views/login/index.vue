<template>
  <div class="login-container">
    <div class="login">
      <div class="title">
        <h3>AI数字人虚拟直播平台</h3>
        <p class="text">7*24小时为您不间断直播</p>
        <div class="login_box">
          <el-radio-group v-model="loginType" class="login_title">
            <el-radio-button label="sms">短信登录</el-radio-button>
            <el-radio-button label="account">账号登录</el-radio-button>
          </el-radio-group>
          <!-- 短信登录 -->
          <el-form v-show="loginType === 'sms'" ref="smsForm" class="sms-login" :model="sms" :rules="smsRules" label-position="left" label-width="80px">
            <el-form-item prop="phone">
              <el-input
                ref="phone"
                v-model="sms.phone"
                placeholder="请输入手机号"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
              />
            </el-form-item>
            <el-form-item prop="code">
              <el-input ref="code" v-model="sms.code" placeholder="请输入验证码" name="code" tabindex="2" auto-complete="on" type="code" />
              <el-button type="primary" style="right:20px" class="phoneCode" :disabled="disabled" @click.prevent="handleSendCode">{{ btnTxt }}</el-button>
            </el-form-item>
            <p class="login_agree">
              <el-checkbox v-model="agreed">我已阅读并同意<a>《用户服务协议》</a>和<a>《隐私权政策》</a></el-checkbox>
            </p>
            <el-button
              :disabled="!agreed"
              class="login_btn"
              :loading="loading"
              type="primary"
              @click.native.prevent="handleSmsLogin"
            >登 录</el-button>
            <p class="small_title">只需5分钟<span style="padding-left:10px">开启您的直播之旅</span></p>
          </el-form>

          <!-- 账号登录 -->
          <el-form v-show="loginType === 'account'" ref="accountForm" class="account-login" :model="account" :rules="accountRules" label-position="left" label-width="80px">
            <el-form-item prop="username">
              <el-input
                ref="username"
                v-model="account.username"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
                placeholder="请输入账号"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                ref="password"
                v-model="account.password"
                name="password"
                tabindex="2"
                auto-complete="on"
                type="password"
                placeholder="请输入密码"
              />
            </el-form-item>

            <p class="login_agree">
              <el-checkbox v-model="agreed">我已阅读并同意<a>《用户服务协议》</a>和<a>《隐私权政策》</a></el-checkbox>
            </p>
            <el-button
              :disabled="!agreed"
              class="login_btn"
              :loading="loading"
              type="primary"
              @click.native.prevent="handleLogin"
            >
              <router-link to="/">登 录</router-link>
            </el-button>
            <p class="small_title">只需5分钟<span style="padding-left:10px">开启您的直播之旅</span></p>
          </el-form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import { validMobild } from '@/utils/validate'
import { mapActions } from 'vuex'
import { getSMSCode } from '@/api/user'
export default {
  name: 'Login',
  data() {
    const validatePhone = (rule, value, callback) => {
      // console.log(rule)
      // console.log(value)
      // console.log(callback)
      // 判断输入框中是否输入手机号
      if (!value) {
        callback(new Error('手机号不能为空'))
      }
      // 正则表达式进行验证手机号，从1开始，第二位是35789中的任意一位，以9数字结尾
      if (!/^1[35789]\d{9}$/.test(value)) {
        callback(new Error('手机号格式不正确'))
      }
      callback()
    }
    return {
      btnTxt: '获取验证码',
      redirect: undefined,
      agreed: false,
      disabled: false,
      loading: false,
      loginType: 'account', // 当前登录方式
      // 账号登录方式
      account: {
        username: '13563567582',
        password: '123456'
      },
      // 短信登录方式
      sms: {
        phone: '13563567582',
        code: '123456'
      },
      smsCountdown: 0, // 短信验证码倒计时

      accountRules: { // 账号登录表单验证规则
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }, { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      smsRules: { // 短信登录表单验证规则
        phone: [{ required: true, trigger: 'blur', message: '请输入11位手机号' },
          { required: true, trigger: 'blur', min: 11, max: 11, message: '长度不符合' },
          { required: true, trigger: 'blur', validator: validatePhone }],
        code: [{ required: true, trigger: 'blur', message: '请输入6位验证码' },
          { required: true, trigger: 'blur', min: 6, max: 6, message: '验证码错误' }
        ]
      }
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions(['user/login']),
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 点击账号登录跳转页面
    handleLogin() {
      this.$refs.accountForm.validate(valid => {
        if (valid) {
          console.log('账号登录', this.account)
          const obj = { user_phone: this.account.username, user_password: this.account.password, softwareId: 1, softwareName: 'Aibobo' }
          // debugger
          this.loading = true
          this.$store.dispatch('user/login', obj).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        }
      })
    },
    // // 点击短信登录跳转页面
    handleSmsLogin() {
      this.$refs.smsForm.validate(valid => {
        if (valid) {
          console.log('短信登录', this.sms)
          const obj = { user_username: this.sms.phone, sms_code: this.sms.code, softwareId: '1', softwareName: 'Aibobo' }
          this.loading = true
          this.$store.dispatch('user/login', obj).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            console.log(new Error())
            this.loading = false
          })
        }
      })
    },
    // 手机号登陆页面
    // async handleSmsLogin() {
    //   try {
    //     const sms = this.sms
    //     const res = await phone_login(sms)
    //     console.log(res, this.sms)
    //     const obj = { user_phone: this.sms.phone, sms_code: this.sms.code, softwareId: '1', softwareName: 'Aibobo' }
    //     this.loading = true
    //     this.$store.dispatch('user/login', obj)
    //     this.$router.push({ path: this.redirect || '/' })
    //     this.loading = false
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },
    // 短信验证码
    handleSendCode() {
      // 校验手机号码
      if (!this.sms.phone) {
        // 号码校验不通过
        this.$message({
          message: '请输入手机号',
          type: 'warning'
        })
        // 正则判断 从1开始，第二位是35789中的任意一位，以9数字结尾
      } else if (!/1[35789]\d{9}/.test(this.sms.phone)) {
        // 失去焦点后自动触发校验手机号规则
      } else {
        this.smsCountdown = 60
        this.disabled = true
        this.smsCountdown
        // 调用倒计时方法
        this.timer()
        // 封装的axios接口
        getSMSCode({
          phone: this.sms.phone
        }).then(({ data }) => {
          if (data.code === 200) {
            this.$message({
              message: '验证成功',
              type: 'success'
            })
          } else {
            this.$message({
              message: '发送失败',
              type: 'warning'
            })
          }
        })
      }
    },
    // 验证码倒计时
    timer() {
      if (this.smsCountdown > 0) {
        this.smsCountdown--
        // console.log(this.time);
        this.btnTxt = this.smsCountdown + 's后重新获取验证码'
        setTimeout(this.timer, 1000)
      } else {
        this.smsCountdown = 0
        this.btnTxt = '获取验证码'
        this.disabled = false
      }
    }
  }
}
</script>

<style lang="scss">
.login {
  background-image: url("~@/assets/common/login.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100%;
}
.title {
  float: right;
  background-color: #fff;
  height: 600px;
  width: 465px;
  margin-top: 170px;
  margin-right: 250px;
  h3 {
    margin-top: 50px;
    color: #186cf4;
    font-size: 24px;
    text-align: center;
  }
  .text {
    font-size: #000;
    font-size: 18px;
    text-align: center;
  }
  .login_box {
    background-color: #fff;
    border-radius: 18px;
    margin: 0 auto;
    padding: 0px 50px 30px 50px;
  }
 .login_title {
   display: flex;
    text-align: center;
    margin: 30px 30px 40px 55px;
    font-size: 18px;
    color: #666;
  }
  .login_title span {
    margin: 0 20px 0 20px;
  }
  .login_agree {
    margin-left: 30px;
    .el-checkbox {
      padding-left: 20px;
      .el-checkbox__label {
        font-size: 12px;
        text-align: center;
      }
    }
  }
  .login_btn {
    width: 320px;
    height: 60px;
    margin-left: 40px;
    font-size: 18px;
    border-radius: 8px;
    background-color: #186cf4;
  }
  .small_title {
    text-align: center;
    margin-top: 95px;
    padding-left: 50px;
  }
  .isActiveTitle {
    color: #2f7af5;
    font-weight: bolder;
    padding-bottom: 10px;
    border-bottom: 3px solid #186cf4;
  }
}
.el-radio-button__inner{
  border: 0 solid #000;
}
.el-radio-button:first-child .el-radio-button__inner{
  border: none;
  font-size: 16px;
}
.el-radio-button__orig-radio:checked+.el-radio-button__inner{
  color: #186cf4;
  font-size: 16px;
  border-bottom: 5px solid #186cf4;
  border-radius: 5px;
  background-color: #fff;
}
.el-radio-button:last-child .el-radio-button__inner{
  border: none;
  font-size: 16px;
}
.el-radio-button__orig-radio:checked + .el-radio-button__inner {
  color: #186cf4;
  font-size: 16px;
  border-bottom: 5px solid #186cf4;
  border-radius: 5px;
  border-left: none;
  -webkit-box-shadow: none
  }
  .el-form-item__content{
    margin-left: 60px;
    margin-right: -20px
  }
  .el-input__inner{
    margin-left: -20px;
  }
  .el-form-item__content{
    position: relative;
  }
  .el-button{
    position: absolute;
    border-radius: none !important;;
  }
  .el-button phoneCode el-button--primary{
    margin-left: -20px;
    position: absolute;
    right: 20px;
    color: #000;
  }
//   .el-button--primary{

//     background-color: none;
//     border-left: 1px solid #000;
//     color: #000;
//   }
// .el-button--primary:focus, .el-button--primary phoneCode:hover{
//   background:none;
//   color: #000;
//   border: none;
//   border-left: 1px solid #000;
// }
// .el-button--primary.is-disabled, .el-button--primary.is-disabled:active, .el-button--primary.is-disabled:focus, .el-button--primary.is-disabled:hover{
//   background:none;
//   color: #000;
//   border: none;
//   border-left: 1px solid #000;
// }
// .el-button--primary{
//  background:none;
//   color: #000;
//   border: none;
//   border-left: 1px solid #000;
// }
// .el-button login_btn el-button--primary{
//    width: 320px;
//     height: 60px;
//     margin-left: 40px;
//     font-size: 18px;
//     border-radius: 8px;
//     background-color: #186cf4;
//     color: #fff;
// }
</style>
