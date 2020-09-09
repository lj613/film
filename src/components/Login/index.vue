<template>
  <div class="login_body">
    <div>
      <input type="text" class="login_text" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input type="password" class="login_text" placeholder="请输入密码" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登陆" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
    <div class="copyright">
      <span class="copyright">
        © 猫眼电影 客服电话：
        <a href="#">400-670-5335</a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    handleToBack() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.login_body {
  width: 100%;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin-bottom: 5px;
  outline: none;
  text-align: 10px;
  padding: 0 5px;
}
.login_body .login_btn {
  height: 50px;
  margin: 10px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  background-color: #e54847;
  border-radius: 3px;
  border: none;
  display: block;
  color: white;
  font-size: 20px;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 0 5px;
  font-size: 12px;
  color: #fe8c00;
}
.copyright {
  margin-top: 20px;
  padding: 4px 20px;
  /* background-color: #f8f8f8; */
  text-align: center;
  font-size: 14px;

}
.copyright a {
  color: #df2d2d;
  text-decoration: none;
  outline: 0;
  font-size: 14px;
}
</style>