<template>
    <div class="wallet-wrapper" id="wallet-wrapper" style=";animation: feadInUp 1s both">
      <!--1.0头部-->
      <div class="header bg">
        <div class="felx-wrapper">
          <div class="wrapper">
            <div class="title-wrapper">
              <h1 class="header-title">{{$t('productCenter.socailWallet.header.title')}}</h1>
              <p class="header-text">{{$t('productCenter.socailWallet.header.desc')}}</p>
              <div class="btn"><a href="#/downLoad" target="_blank">{{$t('productCenter.socailWallet.header.btn')}}</a></div>
            </div>
          </div>
        </div>
      </div>
      <!--2.0 社交钱包-->
      <div class="content social-wallet-wrapper">
        <div class="wrapper">
          <div class="socailWallet">
            <h3 class="socailWallet-headline">{{$t('productCenter.socailWallet.section1.title')}}</h3>
            <hr class="line-hr">
            <div class="WalletBg"></div>
            <p class="socailWallet-text">{{$t('productCenter.socailWallet.section1.desc')}}</p>
          </div>
        </div>
      </div>
      <!--3.0安全推广-->
      <div class="generalize">
        <div class="wrapper">
          <h1 class="generalize-headline">{{$t('productCenter.socailWallet.section2.title')}}</h1>
          <p class="generalize-desc">{{$t('productCenter.socailWallet.section2.desc')}}</p>
        </div>
      </div>
      <!--4.0我们的优势-->
      <div class="our-advantages">
        <div class="wrapper">
          <h1 class="generalize-headline title-headline">{{$t('productCenter.socailWallet.section3.title')}}</h1>
          <hr class="line-hr">
          <div class="our-advantages-list-wrapper">
            <div class="our-advantages-list">
              <div class="list-item">
                <div class="img-box">
                  <img src="../../assets/images/productCenter/system.svg" alt="">
                </div>
                <div class="list-desc-wrapper">
                  <p class="list-headtitle">{{$t('productCenter.socailWallet.section3.list1.listname')}}</p>
                  <p class="text-html list-desc">{{$t('productCenter.socailWallet.section3.list1.list_desc')}}</p>
                </div>
              </div>
              <div class="list-item">
                <div class="img-box">
                  <img src="../../assets/images/productCenter/money.svg" alt="">
                </div>
                <div class="list-desc-wrapper">
                  <p class="list-headtitle">{{$t('productCenter.socailWallet.section3.list2.listname')}}</p>
                  <p class="text-html list-desc">{{$t('productCenter.socailWallet.section3.list2.list_desc')}}</p>
                </div>
              </div>
              <div class="list-item">
                <div class="img-box">
                  <img src="../../assets/images/productCenter/quite.svg" alt="">
                </div>
                <div class="list-desc-wrapper">
                  <p class="list-headtitle">{{$t('productCenter.socailWallet.section3.list3.listname')}}</p>
                  <p class="text-html list-desc">{{$t('productCenter.socailWallet.section3.list3.list_desc')}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--5.0更多功能-->
      <div class="morefunction">
        <h1 class="headline title-headline">{{$t('productCenter.socailWallet.section4.title')}}</h1>
        <hr class="line-hr">
        <div class="more-wrapper">
          <ul class="clearfix">
            <li class="more-list">
              <div class="img-box">
                <img src="../../assets/images/productCenter/pic1.png" alt="">
              </div>
              <h6 class="list-title">{{$t('productCenter.socailWallet.section4.list1.listname')}}</h6>
              <div class="text-html">{{$t('productCenter.socailWallet.section4.list1.list_desc')}}</div>
              <div class="btn"><a href="#/intelligentTrainer" target="_blank">{{$t('productCenter.socailWallet.section4.list1.btn')}}</a></div>
            </li>
            <li class="more-list">
              <div class="img-box">
                <img src="../../assets/images/productCenter/pic2.png" alt="">
              </div>
              <h6 class="list-title">{{$t('productCenter.socailWallet.section4.list2.listname')}}</h6>
              <div class="text-html">{{$t('productCenter.socailWallet.section4.list2.list_desc')}}</div>
              <div class="btn"><a href="#/rrayRobot" target="_blank">{{$t('productCenter.socailWallet.section4.list2.btn')}}</a></div>
            </li>
          </ul>
        </div>
      </div>
      <!--6.0App下载-->
      <section class="main-content app-download">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row learn_more">
                <div class="col-md-12">
                  <div class="special-heading textaligncenter default blue_heading header_title">
                     <h1 class="headline title-headline">{{$t('productCenter.socailWallet.section5.title')}}</h1><hr class="line-hr">
                  </div>
                  <div class="text-block textaligncenter text-html">{{$t('productCenter.socailWallet.section5.desc')}}</div>
                  <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                    <div class="wpb_wrapper">
                      <button type="button" class="btn btn-primary download"><a href="#/downLoad" target="_blank">{{$t('productCenter.socailWallet.section5.btn')}}</a></button>
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

<script type="text/ecmascript-6">
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
    line-height: 24px;
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
    .btn{
      a{
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
    /*-1.0头部*/
    .header{
      &.bg{
        height: 500px;
        width: 100%;
        background-image: url("../../assets/images/productCenter/walletbanner.png");
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
        .title-wrapper{
          padding: 0 15px;
          box-sizing: border-box;
        }
        .header-text{
          font-size: 22px;
          margin: 40px 0 52px;
          line-height: 1;
          animation: feadInUp 1.5s both;
        }
        .btn{
          width: 165px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          background-color: #27a2db;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          animation: feadInUp 2s both;
        }
        .btn:hover{
          background-color: #43bded;
        }
      }
    }
    /*2.0社交钱包*/
    .content{
      &.social-wallet-wrapper{
        padding: 120px 0 110px;
      }
      .socailWallet{
        text-align: center;
        .socailWallet-headline{
          display: inline-block;
          font-size: 30px;
          color: #066b98;
          padding-bottom: 28px;
        }
        .WalletBg{
          width: 260px;
          height: 176px;
          background: url("../../assets/images/productCenter/shejiaomoneybag.svg");
          margin: 98px auto 0;
        }
        .socailWallet-text{
          max-width: 1200px;
          margin: 40px auto 0;
          padding: 0 50px;
          box-sizing: border-box;
          text-align: center;
          font-size: 17px;
          color: #808080;
          line-height: 24px;
        }
      }
    }
    /*3.0安全推广*/
    .generalize{
      text-align: center;
      background-color: #f4f6f7;
      padding: 145px 0 123px;
      box-sizing: border-box;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      .generalize-headline{
        font-size: 30px;
        color: #066b98;
        margin-bottom: 60px;
        line-height: 35px;
        padding: 0 15px;
      }
      .generalize-desc{
        font-size: 17px;
        color: #808080;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 50px;
        box-sizing: border-box;
        line-height: 24px;
      }
    }
    /*4.0我们的优势*/
    .our-advantages{
      padding: 140px 0;
      border-bottom: 1px solid #ccc;
      .title-headline{
        text-align: center;
        margin-bottom: 28px;
      }
      .our-advantages-list-wrapper{
        max-width: 1200px;
        margin: 0 auto;
      }
      .our-advantages-list{
        margin-top: 104px;
        justify-content: space-between;
        .list-item{
          /*float: left;*/
          /*&:nth-child(2) {*/
            /*margin: 0 159px;*/
          /*}*/
          /*@media screen and (max-width: 768px){*/
            /*&:nth-child(2) {*/
              /*margin: 0;*/
            /*}*/
          /*}*/
          width: 260px;
          .img-box{
            text-align: center;
            /*height: 181px;*/
            /*line-height: 181px;*/
            width: 100%;
          }
          .list-desc-wrapper{
            margin-top: 52px;
            .list-headtitle{
              font-size: 18px;
              color: #4d4d4d;
              text-align: center;
              margin-bottom: 20px;
              min-height: 50px;
            }
            .list-desc{
              line-height: 24px;
              /*max-width: 294px;*/
              width: 100%;
              text-align: center;
            }
          }
        }
        @media screen and (max-width: 768px){
          .list-item {
            width: 100%;
            .img-box{
              text-align: center;
              /*height: 181px;*/
              /*line-height: 181px;*/
              width: 60%;
              margin: auto;
            }
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
        margin: 150px auto 0;
        ul{
          .more-list{
            float: left;
            width: 500px;
            min-height: 400px;
            padding: 58px 107px 0 107px;
            box-sizing: border-box;
            box-shadow: 0 2px 6px #c2c2c2;
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
              margin: 36px 0 26px;
              min-height: 80px;
            }
            .btn{
              width: 170px;
              height: 48px;
              border: 1px solid #cccccc;
              text-align: center;
              line-height: 48px;
              margin: 0 auto 30px;
              cursor: pointer;
              &:hover{
                background-color: #f0f0f0;
              }
              a{
                display: inline-block;
                width: 100%;
                height: 100%;
                font-size: 14px;
                color: #808080;
              }
            }
          }
        }
      }
    }
    /*6.0App下载*/
    .app-download{
      padding: 125px 0 78px;
      background-color: #f4f6f7;
      border-top: 1px solid #ccc;
      .container{
        max-width: 100%;
        margin: 0 auto;
        padding: 0 15px;
        box-sizing: border-box;
      }
      .title-headline{
        text-align: center;
        margin-bottom: 28px;
      }
      .textaligncenter{
        text-align: center;
        margin-bottom: 57px;
        &:nth-child(2) {
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
      }
      .download:hover{
        background-color: #43bded;
      }
    }
  }
</style>
