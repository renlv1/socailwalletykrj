<template>
  <div class="app-download" id="app-download">
    <!--大屏-->
    <div v-show="bgShow" class="screen bigscreen">
      <div class="bg bgImg"></div>
      <div class="download-wrapper">
        <div class="download-container">
          <div class="erweima bgErweima">
            <div id="code"></div>
            <span id="downloadUrl"></span>
          </div>
          <h1 class="shejiao-title"
              style=" background: -webkit-linear-gradient(left, #b6e98f , #1cce8d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;font-size: 48px;">{{$t('productCenter.socailWallet.header.title')}}</h1>
          <p class="text">{{$t('productCenter.download.desc')}}</p>
          <div class="ctrl"><a :href="android" download="socailwallet"><span class="btn androidbgImg"></span></a><a :href="ios"><span class="btn iosbgImg"></span></a></div>
        </div>
      </div>
    </div>
    <!--小屏-->
    <div v-show="smallShow" class="screen small-screen">
      <div class="bg smallbg"></div>
      <div class="download-wrapper">
        <div class="download-container">
          <!--<div class="erweima smallErweima"></div>-->
          <h1 class="shejiao-title"  style=" background: -webkit-linear-gradient(left, #b6e98f , #1cce8d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;font-size: 48px;">{{$t('productCenter.socailWallet.header.title')}}</h1>
          <p class="text">{{$t('productCenter.download.desc')}}</p>
          <div class="ctrl ctrl-box">
            <div class="btn small-btn">
              <a :href="android" download="socailwallet" @click="androidDown" v-show="!isShowAndroid" class="downA"><img class="imgsHeight" src="../../assets/images/productCenter/download/S_Android.png" alt=""></a>
              <a v-show="isShowAndroid" class="downLoadbtn andorlobtn"  aria-disabled="true">{{$t('productCenter.download.btn')}}<span class="dotting"></span></a>
            </div>
            <div class="btn small-btn">
              <a :href="ios" download="socailwallet" @click="iosDown" class="downA" v-show="!isShowIos"><img class="imgsHeight" src="../../assets/images/productCenter/download/S_IOS.png" alt=""></a>
              <a v-show="isShowIos" class="downLoadbtn" aria-disabled="true">{{$t('productCenter.download.btn')}}<span class="dotting"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../assets/js/jquery.qrcode.min.js'
import $ from 'jquery'
export default {
  data () {
    return {
      bgShow: false,
      smallShow: false,
      ios: 'itms-services://?action=download-manifest&url=https://www.rraystudio.com/ios/social_wallet_1.0_2.plist',
      android: 'http://download.wb41.cn/android/social_wallet_1.0_1.apk',
      isShowIos: false,
      isShowAndroid: false
    }
  },
  mounted () {
    let downloadUrl = location.href
    $('#downloadUrl').text(downloadUrl)
    $('#code').qrcode({
      render: 'canvas', //     table方式
      width: 225, //            宽度
      height: 225, //            高度
      text: downloadUrl //      任意内容
    })
  },
  created () {
    this.init()
    let _this = this
    window.onresize = function () {
      _this.init()
    }
  },
  methods: {
    init () {
      let result = window.matchMedia('(max-width: 750px)')
      if (result.matches) {
        this.bgShow = false
        this.smallShow = true
      } else {
        this.bgShow = true
        this.smallShow = false
      }
    },
    iosDown () {
      this.isShowIos = true
    },
    androidDown () {
      this.isShowAndroid = true
    }
  }
}
</script>

<style lang="less" scoped>
/*顶部动画*/
.dotting {
  display: inline-block; min-width: 2px; min-height: 2px;
  box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor; /* for IE9+, ..., 3个点 */
  animation: dot 2s infinite step-start both; /* for IE10+, ... */
}
.dotting:before { content: '...'; } /* for IE8. 若无需兼容IE8, 此行以及下一行删除*/
.dotting::before { content: ''; } /* for IE9+ 覆盖 IE8 */
:root .dotting { margin-right: 8px; } /* for IE9+,FF,CH,OP,SF 占据空间*/
@keyframes dot {
  25% { box-shadow: none; }                                  /* 0个点 */
  50% { box-shadow: 2px 0 currentColor; }                    /* 1个点 */
  75% { box-shadow: 2px 0 currentColor, 6px 0 currentColor;  /* 2个点 */ }
}
@keyframes feadInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
.app-download{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  .bigscreen{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    #downloadUrl{
      display: none;
    }
  }
  .screen{
    &.small-screen{
      height: 100%;
      .shejiao-title{
        margin: 37px 0 22px;
      }
      .download-container{
        height: auto;
        padding-bottom: 75px;
        .text{
          font-size: 16px;
          font-weight: 300;
          padding: 0 15px;
          line-height: 24px;
        }
      }
      .ctrl-box{
        margin-top: 30px;
        margin-bottom: 30px;
      }
      .download-wrapper{
        display: block !important;
        padding-top: 50px;
        padding-bottom:50px;
        overflow: auto;
      }
      .small-btn:first-child{
        margin-bottom: 20px !important;
      }
    }
    .ctrl{
      .downA{
        width: 200px;
        height: 48px;
        display: inline-block;
        margin-right: 60px;
        &:nth-child(2){
          margin-right: 0;
        }
      }
    }
    .btn{
      .downA{
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }
  .bg{
    width: 100%;
    height: 100%;
    background-size:cover;
    background-position: center center;
    background-repeat:no-repeat;
    z-index: -1;
    position: absolute;
    &.bgImg{
      background-image: url("../../assets/images/productCenter/download/BG_L.jpg");
    }
    &.smallbg{
      background-image: url("../../assets/images/productCenter/download/BG_S.jpg");
    }
  }
  .download-wrapper{
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .download-container{
      max-width: 100%;
      padding: 0 15px;
    }
    .erweima{
      margin: 0 auto;
      &.bgErweima{
        width: 255px;
        height: 255px;
        padding: 15px;
        box-sizing: border-box;
        background-color: #fff;
      }
      &.smallErweima{
        width: 110px;
        height: 95px;
        background: url("../../assets/images/productCenter/download/shejiaomoney.png") no-repeat;
      }
    }
    .shejiao-title{
      text-align: center;
      margin: 60px 0 43px;
    }
    .text{
      color: #ffffff;
      font-size: 18px;
      font-family: "Microsoft YaHei";
      text-align: center;
      margin: 0 auto;
      max-width: 1300px;
      padding: 0 30px;
      line-height: 36px;
    }
    .ctrl{
      margin-top: 70px;
      text-align: center;
      &.ctrl-box{
        .small-btn{
          width: 100%;
          padding: 0 15px;
          box-sizing: border-box;
          &:first-child{
            margin-bottom: 40px;
          }
          img{
            width: 100%;
          }
        }
      }
      .btn{
        cursor: pointer;
        &.androidbgImg{
          width: 200px;
          height: 48px;
          display: inline-block;
          background: url("../../assets/images/productCenter/download/l_Android.png") no-repeat;
          margin-right: 60px;
        }
        &.androidsmallbg{
          width: 100%;
          height: 120px;
          margin: 0 30px 40px 30px;
          box-sizing: border-box;
          background: url("../../assets/images/productCenter/download/S_Android.png") no-repeat;
        }
        &.iosbgImg{
          width: 200px;
          height: 48px;
          display: inline-block;
          background: url("../../assets/images/productCenter/download/l_IOS.png") no-repeat;
        }
        &.iossmallbg{
          width: 690px;
          height: 120px;
          background: url("../../assets/images/productCenter/download/S_IOS.png") no-repeat;
        }
        .downLoadbtn{
          width: 100%;
          height: 120px;
          line-height: 120px;
          background-color: #169AE6;
          outline: none;
          border: none;
          color: #ffffff;
          font-size: 24px;
          cursor: not-allowed;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          &.andorlobtn{
            background-color: #33D167;
          }
          /*.android-icon{*/
            /*display: inline-block;*/
            /*width: 22px;*/
            /*height: 26px;*/
            /*background: url("../../assets/images/productCenter/download/Android.png") no-repeat;*/
            /*background-size: cover;*/
            /*margin-right: 6px;*/
          /*}*/
          /*.ios-icon{*/
            /*display: inline-block;*/
            /*width: 20px;*/
            /*height: 24px;*/
            /*background: url("../../assets/images/productCenter/download/ios.png") no-repeat;*/
          /*}*/
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .downLoadbtn{
    width: 100%;
    height: 100px !important;
    line-height: 100px !important;
  }
}
@media (max-width: 500px) {
  .downLoadbtn{
    width: 100%;
    height: 75px !important;
    line-height: 75px !important;
  }
  .small-btn img{
    height: 75px;
  }
}
@media (max-width: 415px) {
  .downLoadbtn{
    width: 100%;
    height: 61px !important;
    line-height: 61px !important;
    font-size: 18px !important;
  }
  .small-btn img{
    height: 61px;
  }
}
@media (max-width: 375px) {
  .downLoadbtn{
    width: 100%;
    height: 55px !important;
    line-height: 55px !important;
    font-size: 18px !important;
  }
  .small-btn img{
    height: 55px;
  }
}
@media (max-width: 342px) {
  .downLoadbtn{
    width: 100%;
    height: 50px !important;
    line-height: 50px !important;
    font-size: 16px !important;
  }
  .small-btn img{
    height: 50px;
  }
}
@media (max-width: 320px) {
  .downLoadbtn{
    width: 100%;
    height: 38px !important;
    line-height: 38px !important;
    font-size: 14px !important;
  }
  .small-btn img{
    height: 38px;
  }
}
</style>
