<template>
   <div class="container-fluid carousel-content">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <img src="../assets/img/index/1.jpg" alt="..." style="height:450px" class="img-responsive">
                    <div class="carousel-caption">
                        <div class="container intro-container">
                            <div class="row">
                                <div class="col-xs-8">
                                  <div class="intro-content">
                                    <h2>即將加入到「The Vault」的內容</h2>
                                    <p>加入「Origin Access」& 準備探索《質量效應：仙女座》</p>
                                  </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="know-detail">
                                        <a href="">告诉我详情</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/img/index/2.jpg" alt="..." style="height:450px" class="img-responsive">
                    <div class="carousel-caption">
                        <div class="container intro-container">
                            <div class="row">
                                <div class="col-xs-8">
                                  <div class="intro-content">
                                    <h2>預購《The Sims 4 貓狗總動員》</h2>
                                    <p>準備好這個擴展包來進行搖尾巴和添臉頰的樂趣！</p>
                                  </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="know-detail">
                                        <a href="">告诉我详情</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/img/index/6.jpg" alt="..." style="height:450px" class="img-responsive">
                    <div class="carousel-caption">
                          <div class="container intro-container">
                            <div class="row">
                                <div class="col-xs-8">
                                  <div class="intro-content">
                                    <h2>準備好迎接史詩規模的戰鬥</h2>
                                    <p>從西奈沙漠一路鏖戰至東線戰場，並在充滿刺激冒險的單人模式戰役中體驗滿布全球的戰爭故事。</p>
                                  </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="know-detail">
                                        <a href="">前往购买</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/img/index/4.jpg" alt="..." style="height:450px" class="img-responsive">
                    <div class="carousel-caption">
                        <div class="container intro-container">
                            <div class="row">
                                <div class="col-xs-8">
                                  <div class="intro-content">
                                    <h2>最高可用 5 折優惠購得《The Sims 4》</h2>
                                    <p>奪取一些親切款待！獲得《The Sims 4 吸血鬼》，《毛骨悚然組合》以及更多!</p>
                                  </div>
                                </div>
                                <div class="col-xs-4">
                                    <div class="know-detail">
                                        <a href="">查看特卖详情</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Controls -->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="container-fluid four-banner">
            <div class="row">
              <div class="col-xs-3 banner-div">
                <div class="banner-container">
                  <img src="../assets/img/index/x1.jpg" alt="" class="img-responsive">
                  <div class="carousel-caption">
                          <div class="container intro-container post">
                            <img src="../assets/img/index/xx1.jpg" alt="" class="img-responsive">
                         </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-3 banner-div">
                 <div class="banner-container">
                  <img src="../assets/img/index/x2.jpg" alt="" class="img-responsive">
                  <div class="carousel-caption">
                          <div class="container intro-container post">
                             <img src="../assets/img/index/xx2.jpg" alt="" class="img-responsive">
                         </div>
                  </div>
                </div>   
              </div>
              <div class="col-xs-3 banner-div">
                 <div class="banner-container">
                  <img src="../assets/img/index/x3.jpg" alt="" class="img-responsive">
                  <div class="carousel-caption">
                          <div class="container intro-container">
                            
                         </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-3 banner-div">
                 <div class="banner-container">
                  <img src="../assets/img/index/x4.jpg" alt="" class="img-responsive">
                  <div class="carousel-caption">
                          <div class="container intro-container">
                            
                         </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
   </div>
   
</template>

<script>
    export default{
        data:function(){
            return {

            }
        },
        mounted:function(){
            $('.carousel').carousel({
                interval:1000000000
            })
        }
    }
</script>

<style>
/*                       banner区                       */
    /*小点点的距离修改*/
    .carousel-indicators{
        bottom:-50px;
    }
    div.carousel-content{
        margin-bottom: 50px;
    }
    /*小点点的样式修改*/
    .carousel-indicators .active{
        background-color: #f56c2d
    }
    .carousel-indicators li{
        border:1px solid black;
    }
    .carousel-control.left,.carousel-control.right{
        width: 8%;
        background-image:none;
    }
    /*轮播图的下方介绍内容修改*/
    div.carousel-caption{
        background-color: black;
        bottom: 0;
        opacity: 0.8;
        padding: 0;
        bottom: 0;
        left: 0;
        height: 30%;
        width: 100%;
    }
    div.intro-container{
        position: relative;
    }
    /*    轮播图媒体查询   */
     @media screen and (min-width:1200px) {
            div.know-detail{
                position: absolute;
                right: 20%;
                top: 20%;
                margin-top:50px ;
            }
            div.know-detail>a{
            display: inline-block;
            height: 40px;
            width: 330%;
            background-color: #f56c2d;
            text-decoration: none;
            color:white;
            font-size: 15px;
            line-height: 40px;
            border-radius: 3px;
            box-sizing: border-box;
            }
             div.intro-content{
                margin-top:20px ;
                position: absolute;
                top: 20%;
                left: 0;
            }
     }
    @media screen and (max-width:992px) {
         div.intro-content>h2{
             font-size: 15px;
         }
          div.intro-content>p{
             font-size: 10px;
         }
         div.know-detail{
            position: absolute;
            top:90px;
            left:-135%;
         }
         div.know-detail>a{
            color: #2ac4f5;
         }
          div.intro-content{
            margin-top:20px ;
            position: absolute;
            top: 20%;
            left: 10%;
        }
    }
/*               四个广告位区域              */
div.four-banner{
    margin-top: 50px;
}
div.banner-div{
    width: 50%;
    padding: 2%;
    box-sizing: border-box;
}
div.banner-container{
    position: relative;
}
@media only screen and (min-width: 600px){
    div.post>img{
        width:6%;
        margin-left: 25px;
    }
}
@media only screen and (min-width: 1150px){
     div.post>img{
        width:6%;
        margin-left: 25px;
    }
}

</style>
