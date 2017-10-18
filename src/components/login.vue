<template>
  <div class="row reg-biggest">
        <div class="container-fluid">
           <div class="col-xs-4 col-xs-offset-4">
              <div class="register-area">
                  <h3>欢迎登录</h3>
                  <div class="input name form-group">
                     <input type="text" name="uname" placeholder="请输入用户名" id="name" class="reg-form-control">
                      <br>
                      <span class="Tips">用户名必须为3-9位（字母数字下划线组合)</span>
                  </div>
                  <div class="input pwd form-group">
                      <input type="password" name="upwd" placeholder="请输入密码" id="pwd" class="reg-form-control">
                      <br>
                      <span class="Tips">用户名必须为3-9位（字母数字下划线组合)</span>
                  </div>
                      <a href="#" id="btn" class="reg-btn">登录</a>
                </div>
              </div>
           </div>
        </div>
      </div>
</template>

<script>
    export default{
 
    }
</script>

<style>
 div.reg-biggest{
       background: url("../assets/img/bg.jpg"),no-repeat,center,center;
       height: 1000px;
   }
   div.register-area{
       border: 1px solid transparent;
       background-color: white;
       opacity: 0.8;
       border-radius: 8px;
       margin-top:50%;
       padding-top: 20px;
       padding-bottom: 35px;
   } 
   div.input{
       margin: 30px 0;
   }
   /*input{
       height: 40px;
       width:60% ;
       border-radius: 3px;
       outline: none;
       border: 1px solid black;
       padding-left:20px;
       margin: 0 20%;
       background-color: transparent;
       color:black;
   }*/
   .reg-form-control{
       width: 60%;
       height: 40px;
        background-color: transparent;
        color:black;
        border: 1px solid black;
        padding: 5px 20px;
        border-radius: 4px;
        box-sizing: border-box;
   }
   .reg-btn{
       display: inline-block;
       height: 40px;
       width: 60%;
       background-color: #f56c2d;
       text-decoration: none;
       color:white;
       font-size: 15px;
       line-height: 40px;
       border-radius: 3px;
   }
</style>

