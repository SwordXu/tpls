<template>
   <div>
            <div class="container-fluid navbar-show">
                <div class="navbar-content">
                    <button type="button" class="toggle-button">
                        <span class="sr-only">切换菜单</span>
                        <span class="glyphicon glyphicon-menu-hamburger"></span>
                    </button>
                       <img src="../assets/img/logo.png" alt="">
                       <input type="text" class="form-control" placeholder="搜索游戏及其他">
                </div>
            </div>
        <div class="left-nav">
            <div id="content">
                <a href=""><img src="../assets/img/logo.png" alt="" class="logo"></a>
                <div class="form-group has-feedback search">
                    <label for="kw" class="sr-only">搜索游戏及其他:</label>
                    <input type="text" class="form-control search-input" placeholder="搜索游戏及其他">
                    <span class="glyphicon glyphicon-search form-control-feedback"></span>
                </div>
                <div class=" nav nav-stacked">
                    <ul class="list-unstyled">
                        <li>
                            <router-link to="/indexContent" class="store-active nav-active">商店</router-link>
                            <ul class="list-unstyled detail-list">
                                <li class="first-lev">
                                    <router-link to="/view-game">浏览游戏</router-link><span class="glyphicon glyphicon glyphicon-chevron-right"></span>
                                     <div class="view-game dropdown-menu">
                                        <ul class="list-unstyled">
                                            <li><a href="javascript:;">所有PC游戏</a></li>
                                            <li><a href="javascript:;">战地风云</a></li>
                                            <li><a href="javascript:;">泰坦陨落</a></li>
                                            <li><a href="javascript:;">星球大战</a></li>
                                            <li><a href="javascript:;">极品飞车</a></li>
                                        </ul>     
                                     </div>
                                </li>
                                <li class="first-lev">
                                    <router-link to="/sale">特卖</router-link><span class="glyphicon glyphicon glyphicon-chevron-right"></span>
                                    <div class="sale dropdown-menu">
                                        <ul class="list-unstyled">
                                            <li><a href="">特价</a></li>
                                            <li><a href="">€10以下</a></li>
                                            <li><a href="">€10-€20</a></li>
                                        </ul>     
                                    </div>
                                </li>
                                <li class="first-lev">
                                    <router-link to="/onsale">免费游戏</router-link><span class="glyphicon glyphicon glyphicon-chevron-right"></span>
                                     <div class="onsale dropdown-menu">
                                        <ul class="list-unstyled">
                                            <li><a href="">本店招待</a></li>
                                            <li><a href="">试玩版</a></li>
                                            <li><a href="">体验版与Beta测试版</a></li>
                                        </ul>     
                                    </div>
                                </li>
                                <li class="first-lev">
                                    <router-link to="/originAccess">Origin Access</router-link><span class="glyphicon glyphicon glyphicon-chevron-right"></span>
                                    <div class="access dropdown-menu">
                                        <ul class="list-unstyled">
                                            <li><a href="">最值得的游戏</a></li>
                                        </ul>     
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="line"></div>
                <ul class="function-area clearfix list-unstyled">
                <li><a href="">关于</a></li>
                <li>•</li>
                <li><a href="">下载</a></li>
                <li>•</li>
                <li><a href="">说明</a></li>
                </ul>  
                 <div class="reg_login">
                    <router-link  to="/login"class="btn btn-info">登录</router-link>
                    <router-link to="/reg"class="btn btn-info">注册</router-link>
                </div> 
            </div>
        </div>
       <div class="container-fluid biggest">
          <div class="row">
            <div class="col-xs-12  right-cotainer">
               <router-view></router-view>
            </div>
          </div>
      </div>
   </div>
   
</template>

<script>
//  bootlint.showLintReportForCurrentDocument([]);
export default{
    data:function(){
        return {
        }
    },
    methods:{
    },
    mounted:function(){
        $(".detail-list li.first-lev:nth-child(1)").mouseenter(function(){
            $(".view-game").css("display","block");
        })
        $(".detail-list li.first-lev:nth-child(1)").mouseleave(function(){
            $(".view-game").css("display","none");
        })
        $(".detail-list li.first-lev:nth-child(2)").mouseenter(function(){
            $(".sale").css("display","block");
        })
        $(".detail-list li.first-lev:nth-child(2)").mouseleave(function(){
            $(".sale").css("display","none");
        })
        $(".detail-list>li.first-lev:nth-child(3)").mouseenter(function(){
            $(".onsale").css("display","block");
        })
        $(".detail-list>li.first-lev:nth-child(3)").mouseleave(function(){
            $(".onsale").css("display","none");
        })
        $(".detail-list>li.first-lev:nth-child(4)").mouseenter(function(){
            $(".access").css("display","block");
        })
        $(".detail-list>li.first-lev:nth-child(4)").mouseleave(function(){
            $(".access").css("display","none");
        })
        $(".first-lev").on("click",">a",function(e){
              e.preventDefault();
              var sel=$(e.target);
              setTimeout(function(){
                 sel.addClass("nav-active");
                 $(".store-active").removeClass("nav-active")
              },0)
        })
    }
}

</script>

<style>
/*            总体样式类 active                */
div.biggest{
   margin-left:308.5px;  /* 消除导航栏的宽度   */
    position: relative;
}
.nav-active{
  border-left: solid 4px #f56c2d; 
  background-color:rgba(130,125,133,.5); 
  transition: all .3s linear;
}
/*左侧边栏颜色*/
#content{
    position: relative;
    height: 100%;
    width: 100%;
}
div.navbar-show{
    display: none;
}
div.left-nav{
    position: fixed;
    top:0;
    left:0;
    height: 100%;
    z-index: 1200;
    width:294.5px;
    background-color:#1E262C;  
    padding: 0;
}
/*          响应式菜单栏自定义         */
@media screen and (max-width:1000px){
    div.navbar-show{
        display: block;
        height: 60px;
        background-color:#1E262C;

    }
    div.biggest{
        margin-left:0;  /* 消除导航栏的宽度   */
        position: relative;
    }
   div.left-nav{
        position: fixed;
        top:0;
        left:-294.5px;
        height: 100%;
        z-index: 1200;
        width:294.5px;
        background-color:#1E262C;  
        padding: 0;
    } 
}
/*logo上边距*/
img.logo{
    margin-top: 20px
}

/*搜索框设置*/
input.search-input{
    height:45px;
    border-radius: 45px;
}
/*搜索框图标*/
div.search{
    margin: 15px 15px;
}
.form-control{
    padding:6px 50px
}
.form-control-feedback{
    position:absolute;
    left: 20px;
    line-height:45px
}
/*商店图标*/
a.store-active{
  display: inline-block;
  width: 100%;
  /*background-color:rgba(120,125,133,.5); */
  height:36px ;
  text-align:left;
  padding-left:20px;
  line-height: 36px;
  font-size: 18px;
  color: white;
  text-decoration: none;
  box-sizing:border-box;
}
a.store-active:hover{
  background-color:rgba(130,125,133,.5); 
}
ul.detail-list>li{
   position: relative;
}
ul.detail-list>li>a{
   display:block;
   width: 100%;
   height: 40px;
   line-height: 40px;
   color: white;
   text-align: left;
   text-decoration: none;
   padding-left: 55px;
   box-sizing: border-box
}
ul.detail-list>li>span{
   position:absolute;
   top:12px;
   right:40px;
   color: white;
}
/*  横线  */
div.line{
    display: block;
    width: auto;
    height: 1px;
    border-bottom:1px solid #787d85
}
/*   导航栏功能区   */
ul.function-area{
    margin-left: 25px;
    margin-top: 10px;
}
ul.function-area li{
   float:left;
   margin-right: 8px;
}
ul.function-area li>a,ul.function-area li{
    color: #787d85;
    text-decoration: none
}
ul.function-area li>a:hover{
    color: whitesmoke;
}
/*    登录注册按钮       */
div.reg_login{
     position:absolute;
    width: 100%;
    height: 20%;
    left: 0%;
    bottom:5%;
    padding: 100px 25px 0 25px;
    box-sizing: border-box;
}
div.reg_login a{
    display: block;
    height: 50px;
    width: 100%;
    line-height: 36px;
}
div.reg_login a:first-child{
    color:white;
    background-color: #f56c2d;
    border: 1px solid #f56c2d;
    margin-bottom: 15px;
}
div.reg_login a:first-child:hover{
    background-color: rgb(245, 108, 47);
}
.btn-info:active:hover{
    background-color: transparent;
}
div.reg_login a:last-child{
    color:white;
    background-color: transparent;
    border: 1px solid white;
}
/* 所有二级菜单 */
.dropdown-menu{
    position:fixed;
    display: block;
    margin-left: 3px;
}
div.dropdown-menu ul{
   margin: 0;
}
div.dropdown-menu li{
   padding-left: 20px;
}
div.dropdown-menu a{
    text-decoration:none;
    display: block;
    height: 40px;
    line-height: 40px;
    color: #1e262c;
}
div.dropdown-menu li:hover{
   background-color:#EDF1F2; 
}
div.view-game{
    left:294.5px;
    top:170px;
    display: none;
}
div.sale{
    left:294.5px;
    top:210px;
     display: none;
}
div.onsale{
    left:294.5px;
    top:250px;
     display: none;
}
div.access{
    left:294.5px;
    top:290px;
    display: none;
}
/*                     右侧容器设置               */
div.right-cotainer{
    border: 1px solid black;
    height: 100%;
    background-color:#EDF1F2;
    margin: 0 0;
    padding: 0 0;
}
.container-fluid{
    padding:0 0;
}
</style>
