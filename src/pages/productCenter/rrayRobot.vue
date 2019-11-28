<template>
  <div class="wallet-wrapper" id="rrayrobot-wrapper" style=";animation: feadInUp 1s both">
    <!--1.0头部-->
    <div class="header bg">
      <div class="felx-wrapper">
        <div class="wrapper">
          <div class="title-wrapper">
            <h1 class="header-title">{{$t('productCenter.rrayRobot.header.title')}}</h1>
            <p class="header-text">{{$t('productCenter.rrayRobot.header.desc')}}</p>
          </div>
        </div>
      </div>
    </div>
    <!--2.0 智能训练师系统-->
    <div class="small-ray">
      <h1 class="generalize-headline title-headline">{{$t('productCenter.rrayRobot.section1.title')}}</h1>
      <hr class="line-hr">
      <p class="text-html text-desc">{{$t('productCenter.rrayRobot.section1.desc')}}</p>
    </div>
    <div class="our-advantages-list-wrapper">
          <div class="our-advantages-list clearfix">
            <div class="list-item">
              <div class="img-box">
                <img src="../../assets/images/productCenter/rray_robot/quietchat.svg" alt="">
              </div>
              <div class="list-desc-wrapper">
                <h3 class="list-headtitle">{{$t('productCenter.rrayRobot.section2.list1.title')}}</h3>
                <p class="text-html list-desc">{{$t('productCenter.rrayRobot.section2.list1.desc')}}</p>
              </div>
            </div>
            <div class="list-item">
              <div class="img-box">
                <img src="../../assets/images/productCenter/rray_robot/superzhineng.svg" alt="">
              </div>
              <div class="list-desc-wrapper">
                <h3 class="list-headtitle">{{$t('productCenter.rrayRobot.section2.list2.title')}}</h3>
                <p class="text-html list-desc">{{$t('productCenter.rrayRobot.section2.list2.desc')}}</p>
              </div>
            </div>
            <div class="list-item">
              <div class="img-box">
                <img src="../../assets/images/productCenter/rray_robot/360.svg" alt="">
              </div>
              <div class="list-desc-wrapper">
                <h3 class="list-headtitle">{{$t('productCenter.rrayRobot.section2.list3.title')}}</h3>
                <p class="text-html list-desc">{{$t('productCenter.rrayRobot.section2.list3.desc')}}</p>
              </div>
            </div>
          </div>
        </div>
    <!--3.0联系我们-->
    <section class="main-content app-download">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="row learn_more">
              <div class="col-md-12">
                <div class="special-heading textaligncenter default blue_heading header_title">
                  <h1 class="headline title-headline">{{$t('productCenter.rrayRobot.section3.title')}}</h1><hr class="line-hr">
                </div>
                <div class="text-block textaligncenter text-html">{{$t('productCenter.rrayRobot.section3.desc')}}</div>
                <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                  <div class="wpb_wrapper">
                    <button type="button" class="btn btn-primary download"><router-link to="/contact">{{$t('productCenter.rrayRobot.section3.btn')}}</router-link></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
  @import "../../assets/css/3/media.css";
  .title-headline{
    font-size: 30px;
    color: #066b98;
  }
  .text-html{
    font-size: 17px;
    color: #808080;
  }
  .wrapper{
    margin: 0 auto;
  }
  .header-title{
    font-size: 64px;
    font-weight: 400;
    line-height: 1;
    animation: feadInUp 1s both;
  }
  .wallet-wrapper{
    h1,h3,h6{
      font-weight: 500;
      line-height: 1;
    }
    .title-wrapper{
      box-sizing: border-box;
      color: #ffffff;
      margin: 0 auto;
    }
    .line-hr{
      max-width: 100px;
      margin: 0 auto;
      height: 1px;
      border: none;
      border-top: 1px solid #ccc;
      box-sizing: border-box;
    }
    /*-1.0头部*/
    .header{
      &.bg{
        height: 500px;
        width: 100%;
        background-image: url("../../assets/images/productCenter/rray_robot/littleleileibanner.png");
        background-repeat: no-repeat;
        background-position: bottom center;
        background-size: cover;
      }
      .felx-wrapper{
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .wrapper{
        width: 100%;
        margin: 0 auto;
        max-width: 1200px;
        .header-text{
          font-size: 22px;
          margin-top: 40px;
          line-height: 1;
          animation: feadInUp 1.5s both;
        }
      }
    }
    /*2.0 智能训练师系统*/
    .small-ray{
      border-bottom: 1px solid #ccc;
      padding: 130px 0;
    }
    .title-headline{
      text-align: center;
      margin-bottom: 28px;
    }
    .text-desc{
      max-width: 1007px;
      line-height: 24px;
      text-align: center;
      margin: 86px auto 0;
      padding: 0 15px;
    }
    .our-advantages-list-wrapper{
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0;
    }
    .our-advantages-list{
      .list-item{
        float: left;
        width: 288px;
        box-sizing: border-box;
        &:nth-child(2) {
          margin: 0 166px;
        }
        .img-box{
          text-align: center;
          height: 130px;
          margin-bottom: 30px;
          img{
            width: 130px;
            height: 130px;
            border-radius: 50%;
          }
        }
        .list-desc-wrapper{
          .list-headtitle{
            font-size: 17px;
            color: #4d4d4d;
            text-align: center;
          }
          .list-desc{
            line-height: 24px;
            max-width: 294px;
            text-align: center;
            margin-top: 20px;
          }
        }
      }
    }
    /*5.0更多功能*/
    .morefunction{
      padding: 120px 0 200px;
      .headline{
        text-align: center;
        margin-bottom: 28px;
      }
      .more-wrapper{
        max-width: 1200px;
        margin: 40px auto 0;
        ul{
          .more-list{
            float: left;
            width: 500px;
            height: 400px;
            padding: 58px 107px 0 107px;
            box-sizing: border-box;
            box-shadow: 0 2px 6px rgba(194,194,194,.75);
            text-align: center;
            &:first-child{
              margin-right: 200px;
            }
            .img-box{
              width: 160px;
              height: 73px;
              margin: 0 auto;
              text-align: center;
            }
            .list-title{
              font-size: 17px;
              color: #344e5a;
              margin-top: 30px;
            }
            .text-html{
              margin: 36px 0 54px;
            }
            .btn{
              width: 170px;
              height: 48px;
              border: 1px solid #6b6b6b;
              text-align: center;
              line-height: 48px;
              margin: 0 auto;
              cursor: pointer;
            }
          }
        }
      }
    }
    /*6.0App下载*/
    .app-download{
      border-top: 1px solid #ccc;
      padding: 125px 0 78px;
      background-color: #f4f6f7;
      .container{
        max-width: 100%;
        margin: 0 auto;
        padding: 0 15px;
      }
      .title-headline{
        text-align: center;
        margin-bottom: 28px;
      }
      .textaligncenter{
        text-align: center;
        margin-bottom: 57px;
        &:nth-child(2){
          margin-bottom: 56px;
        }
      }
      .wpb_wrapper{
        text-align: center;
      }
      .download{
        width: 180px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 14px;
        color: #ffffff;
        background-color: #27a2db;
        border-radius: 4px;
        outline: none;
        border: none;
        cursor: pointer;
        &:hover,&:focus{
          background-color: #43bded;
          transition: .5s;
          outline: 0;
        }
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
