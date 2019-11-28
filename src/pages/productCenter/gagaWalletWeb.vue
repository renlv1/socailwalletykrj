<template>
  <div class="gagaWalletWeb socailWallet2-wrapper" style="animation: feadInUp 1s both">
    <div class="content1-wrapper">
      <div class="content-bg">
        <div class="content-info">
          <h1 style="width: 100%;font-size: 64px;font-weight: normal;animation: feadInUp 1s both;text-align: center">{{$t('productCenter.gagaWalletWeb.header.title')}}</h1>
          <p style="width: 100%;text-align: center;font-size: 22px;margin-top: 40px;margin-bottom: 50px;line-height: 28px;animation: feadInUp 1.5s both">{{$t('productCenter.gagaWalletWeb.header.desc')}}</p>
          <a href="https://webapp.social2018.com/#/login" target="_blank" class="blue-btn" style="animation: feadInUp 2s both;padding: 0 15px;">{{$t('productCenter.gagaWalletWeb.header.title')}}</a>
        </div>
      </div>
    </div>
    <div class="content2-wrapper">
      <div class="content-bg" style="animation: feadInUp 1s both;">
        <h1 style="font-size: 36px;font-weight: bold;color: #ffffff">{{$t('productCenter.gagaWalletWeb.content.text1')}}</h1>
        <span class="quarantine"></span>
        <div class="list">
          <div class="li" v-for="(item,index) in $t('productCenter.gagaWalletWeb.listDatas')" :key="index">
            <div class="info">
              <img class="img" :src="item.ulrImg" alt="">
              <div class="tit">{{item.tit}}</div>
              <div class="hr"></div>
              <p class="textp">{{item.text}}</p>
            </div>
          </div>
        </div>
        <div class="qr-code">
          <div class="code">
            <img src="" alt="">
          </div>
          <div class="tit">{{$t('header.text13')}}</div>
          <div class="hr"></div>
          <div class="tetxp">{{$t('productCenter.gagaWalletWeb.content.text2')}}</div>
          <div class="app-text">{{$t('productCenter.gagaWalletWeb.content.text3')}}</div>
          <a href="https://webapp.social2018.com/#/login" target="_blank" class="but" style="animation: feadInUp 2s both;padding: 0 15px;">{{$t('productCenter.gagaWalletWeb.content.text4')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {},
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .gagaWalletWeb{
    width: 100%;
    height: 100%;
    .content2-wrapper{
      background: none !important;
      background-color: #222 !important;
      min-height: auto !important;
      padding-left: 15px;
      padding-right: 15px;
      height: auto;
      .quarantine{
        margin-bottom: 122px;
      }
      .list{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding-bottom: 186px;
        @media screen and (max-width: 1024px){
          width: 100%;
          display: block;
          padding-bottom: 100px;
        }
        .li{
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          @media screen and (max-width: 1024px){
            margin: 0 auto;
            margin-bottom: 110px;
          }
          &:nth-child(2){
            .info{
              .img{
                height: 200px;
                margin-bottom: 20px;
              }
            }
          }
          .info{
            width: 100%;
            height: 100%;
            .img{
              display: block;
              width: 100%;
              height: 220px;
            }
            .tit{
              font-size: 21px;
              padding: 20px 0;
            }
            .hr{
              width: 100px;
              height: 1px;
              background-color: #fff;
              margin: auto;
              margin-bottom: 42px;
            }
            .textp{
              font-size: 17px;
              color: #7e7e7e;
            }
          }
        }
      }
      .qr-code{
        width: auto;
        margin: 0 auto;
        color: #fff;
        @media screen and (max-width: 768px){
          padding-bottom: 210px;
        }
        .code{
          width: 278px;
          height: 278px;
          background-color: #fff;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border-radius: 4px;
          &:after{
            content: '';
            display: block;
            position: absolute;
            width: 232px;
            height: 232px;
            background: url("../../assets/images/productCenter/gagaWalletWeb/code.png") no-repeat center;
            background-size: 100% 100%;
          }
          @media screen and (max-width: 1200px){
            width: 122px;
            height: 122px;
            background: url("../../assets/images/productCenter/gagaWalletWeb/LOGO.svg") no-repeat center;
            background-size: 100% 100%;
            &:after{
              display: none;
            }
          }
        }
        .tit{
          font-size: 34px;
          text-align: center;
          padding-top: 80px;
        }
        .hr{
          width: 200px;
          height: 1px;
          background-color: #0375ad;
          margin: 25px auto 28px;
        }
        .tetxp{
          font-size: 24px;
          color: #7e7e7e;
          text-align: center;
          padding-bottom: 280px;
          @media screen and (max-width: 768px){
            display: none;
          }
        }
        .app-text{
          font-size: 14px;
          color: #7e7e7e;
          text-align: center;
          display: none;
          @media screen and (max-width: 769px){
            display: block;
          }
        }
        .but{
          font-size: 14px;
          width: 160px;
          height: 50px;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background-color: #27a2db;
          margin: auto;
          margin-top: 40px;
          display: none;
          @media screen and (max-width: 769px){
            display: flex;
          }
        }
      }
    }
  }
</style>
