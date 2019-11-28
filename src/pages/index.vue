<template>
  <div class="index-wrapper" style="animation: feadInUp 1s both">
    <div class="content1-wrapper">
      <div class="content-bg">
        <div class="content-info">
          <h1 style="width: 100%;font-size: 64px;font-weight: normal;animation: feadInUp 1s both">{{$t('index.text1')}}</h1>
          <p style="width: 100%;font-size: 22px;margin-top: 40px;margin-bottom: 50px;line-height: 28px;animation: feadInUp 1.5s both">{{$t('index.text2')}}</p>
          <a href="#/downLoad" target="_blank" class="blue-btn" style="animation: feadInUp 2s both;padding: 0 15px;">{{$t('index.text3')}}</a>
        </div>
      </div>
    </div>
    <div class="content2-wrapper">
      <div class="content-bg">
        <div class="content-info1">
          <h1 style="color:#066b98;font-size: 30px;font-weight: normal;margin-top: 65px">{{$t('index.text4')}}</h1>
          <p style="font-size: 17px;margin-top: 53px;line-height: 36px" v-html="$t('index.text5')"></p>
        </div>
        <div class="content-info2">
          <img style="width: 100%" src="../assets/images/1/index/1.svg">
        </div>
      </div>
    </div>
    <div class="content3-wrapper">
      <div class="content-bg">
        <div class="content-info1">
          <img style="width: 100%" src="../assets/images/1/index/2.gif">
        </div>
        <div class="content-info2">
          <h1 style="color:#066b98;font-size: 30px;font-weight: normal;margin-top: 65px">{{$t('index.text6')}}</h1>
          <p style="font-size: 17px;margin-top: 53px;line-height: 36px" v-html="$t('index.text7')"></p>
          <div class="dominant-position">
            <div class="dominant-position-info">
              <div class="infoImg" :style="{backgroundImage:'url('+imgUrl1+')'}"></div>
              <p style="font-size: 14px;margin-top: 28px;color: #344e5a">{{$t('index.text8')}}</p>
              <p style="font-size: 14px;margin-top: 28px;color: #808080">{{$t('index.text9')}}</p>
            </div>
            <div class="dominant-position-info">
              <div class="infoImg" :style="{backgroundImage:'url('+imgUrl2+')'}"></div>
              <p style="font-size: 14px;margin-top: 28px;color: #344e5a">{{$t('index.text10')}}</p>
              <p style="font-size: 14px;margin-top: 28px;color: #808080">{{$t('index.text11')}}</p>
            </div>
            <div class="dominant-position-info">
              <div class="infoImg" :style="{backgroundImage:'url('+imgUrl3+')'}"></div>
              <p style="font-size: 14px;margin-top: 28px;color: #344e5a">{{$t('index.text12')}}</p>
              <p style="font-size: 14px;margin-top: 28px;color: #808080">{{$t('index.text13')}}</p>
            </div>
            <div class="dominant-position-info">
              <div class="infoImg" :style="{backgroundImage:'url('+imgUrl4+')'}"></div>
              <p style="font-size: 14px;margin-top: 28px;color: #344e5a">{{$t('index.text14')}}</p>
              <p style="font-size: 14px;margin-top: 28px;color: #808080">{{$t('index.text15')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content4-wrapper">
      <div class="content-bg">
        <div class="content-info1">
          <h1 style="color:#066b98;font-size: 30px;font-weight: normal;margin-top: 65px">{{$t('index.text16')}}</h1>
          <p style="font-size: 17px;margin-top: 53px;line-height: 36px" v-html="$t('index.text17')"></p>
        </div>
        <div class="content-info2">
          <img style="width: 100%" src="../assets/images/1/index/4.gif">
        </div>
      </div>
    </div>
    <div class="content7-wrapper">
      <div class="content-bg2">
        <div class="content-info">
          <h1 style="color:#066b98;font-size: 30px;font-weight: normal;margin-top: 76px">{{$t('index.text20')}}</h1>
          <span class="transverseLine" style="margin-top: 22px;margin-bottom: 63px"></span>
          <p style="font-size: 17px;line-height: 24px;margin-bottom: 110px">{{$t('index.text21')}}</p>
          <img src="../assets/images/1/index/number.svg" alt="">
          <p style="font-size: 14px;line-height: 24px;margin-top: 23px">{{$t('index.text19')}}</p>
        </div>
      </div>
    </div>
    <div class="content5-wrapper">
      <div class="content-bg">
        <h1 style="color:#066b98;font-size: 30px;font-weight: normal;margin-top: 125px">{{$t('index.text22')}}</h1>
        <span class="transverseLine" style="margin-top: 28px;margin-bottom: 57px"></span>
        <p style="font-size: 17px;margin-bottom: 135px;line-height: 24px">{{$t('index.text23')}}</p>
      </div>
      <div class="content-bg1">
        <div>
          <img style="margin-top: 57px" src="../assets/images/1/index/5-1.svg" alt="">
          <p style="font-size: 17px;margin-top: 30px;color: #344e5a">{{$t('index.text24')}}</p>
          <p style="font-size: 17px;margin-top: 35px;color: #808080">{{$t('index.text25')}}</p>
        </div>
        <div>
          <img style="margin-top: 57px" src="../assets/images/1/index/5-2.svg" alt="">
          <p style="font-size: 17px;margin-top: 30px;color: #344e5a">{{$t('index.text26')}}</p>
          <p style="font-size: 17px;margin-top: 35px;color: #808080">{{$t('index.text27')}}</p>
        </div>
        <div>
          <img style="margin-top: 57px" src="../assets/images/1/index/5-3.svg" alt="">
          <p style="font-size: 17px;margin-top: 30px;color: #344e5a">{{$t('index.text28')}}</p>
          <p style="font-size: 17px;margin-top: 35px;color: #808080">{{$t('index.text29')}}</p>
        </div>
      </div>
      <div class="content-bg2">
        <div>
          <img style="margin-top: 57px" src="../assets/images/1/index/5-4.svg" alt="">
          <p style="font-size: 17px;margin-top: 30px;color: #344e5a">{{$t('index.text30')}}</p>
          <p style="font-size: 17px;margin-top: 35px;color: #808080">{{$t('index.text31')}}</p>
        </div>
        <div>
          <img style="margin-top: 57px" src="../assets/images/1/index/5-5.svg" alt="">
          <p style="font-size: 17px;margin-top: 30px;color: #344e5a">{{$t('index.text32')}}</p>
          <p style="font-size: 17px;margin-top: 35px;color: #808080">{{$t('index.text33')}}</p>
        </div>
        <div>
          <img style="margin-top: 57px" src="../assets/images/1/index/5-6.svg" alt="">
          <p style="font-size: 17px;margin-top: 30px;color: #344e5a">{{$t('index.text34')}}</p>
          <p style="font-size: 17px;margin-top: 35px;color: #808080">{{$t('index.text35')}}</p>
        </div>
      </div>
    </div>
    <div class="content6-wrapper">
      <div class="content-bg">
        <h1 style="color:#066b98;font-size: 30px;font-weight: normal;">{{$t('index.text36')}}</h1>
        <span class="transverseLine" style="margin-top: 28px;margin-bottom: 57px"></span>
        <p style="font-size: 17px;line-height: 24px">{{$t('index.text37')}}</p>
        <router-link to="/contact" class="blue-btn" style="margin: 56px auto 0">{{$t('index.text38')}}</router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'index',
  data () {
    return {
      imgUrl1: './static/images/1/index/3-1.svg',
      imgUrl2: './static/images/1/index/3-2.svg',
      imgUrl3: './static/images/1/index/3-3.svg',
      imgUrl4: './static/images/1/index/3-4.svg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
