<template>
    <div class="login">
      <span v-if="showTitle" class="title">
        <template v-if="isLoginMode">登录</template>
        <template v-else>注册</template>
      </span>
      <el-form
        :model="form"
        label-width="80px"
        size="medium"
      >
        <el-form-item label="用户名">
          <el-input type="text" v-model="form.username" @keyup.enter.native="isLoginMode ? login() : register()"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" @keyup.enter.native="isLoginMode ? login() : register()"></el-input>
        </el-form-item>
        <el-form-item v-if="!isLoginMode" label="重复密码">
          <el-input type="password" v-model="form.repeatPassword" @keyup.enter.native="register"></el-input>
        </el-form-item>
        <template v-if="isLoginMode">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button v-if="showRegister" @click="isLoginMode = !isLoginMode">没有帐号？点击前往注册</el-button>
        </template>
        <template v-else>
          <el-button type="primary" @click="register">注册</el-button>
          <el-button @click="isLoginMode = !isLoginMode">已经注册过帐号？点击前往登录</el-button>
        </template>
      </el-form>
    </div>
</template>

<script>
  export default {
    name: 'Login',
    props: {
      showTitle: {
        type: Boolean,
        default: true
      },
      showRegister: {
        type: Boolean,
        default: true
      },
      validator: function (value) {
        return ['login', 'register'].indexOf(value) !== -1
      }
    },
    data () {
      return {
        isLoginMode: true,
        form: {
          username: '',
          password: '',
          repeatPassword: ''
        }
      }
    },
    methods: {
      login () {
        alert('login')
      },
      register () {
        alert('register')
      }
    }
  }
</script>

<style scoped>
  .login {
    text-align: center;
  }
  .login .title {
    font-size: 20px;
  }
</style>