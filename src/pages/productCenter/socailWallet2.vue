<template>
  <div class="socailWallet2-wrapper" style="animation: feadInUp 1s both">
    <div class="content1-wrapper">
      <div class="content-bg">
        <div class="content-info">
          <h1 style="width: 100%;font-size: 64px;font-weight: normal;animation: feadInUp 1s both;text-align: center">{{$t('productCenter.socailWallet.header.title')}}</h1>
          <p style="width: 100%;font-size: 22px;margin-top: 40px;margin-bottom: 50px;line-height: 28px;animation: feadInUp 1.5s both">{{$t('productCenter.socailWallet.header.desc')}}</p>
          <a href="#/downLoad" target="_blank" class="blue-btn" style="animation: feadInUp 2s both;padding: 0 15px;">{{$t('productCenter.socailWallet.header.btn')}}</a>
        </div>
      </div>
    </div>
    <div class="content2-wrapper">
      <div class="content-bg" style="animation: feadInUp 1s both;">
        <h1 style="font-size: 36px;font-weight: bold;color: #ffffff">{{$t('productCenter.socailWallet.section1.title')}}</h1>
        <span class="quarantine"></span>
        <p style="margin:auto;color: #808080;font-size: 17px;line-height: 34px;max-width:778px;margin-bottom: 124px ">{{$t('productCenter.socailWallet.section1.desc')}}</p>
        <img src="../../assets/images/1/rrayRobot2/icon_1.svg" alt="">
        <h1 :class="{'active-animation': isactive1}" style="font-size: 36px;font-weight: bold;color: #ffffff">{{$t('productCenter.socailWallet.section2.title')}}</h1>
        <span :class="{'active-animation': isactive1}" class="quarantine"></span>
        <p :class="{'active-animation': isactive1}" style="margin:auto;color: #808080;font-size: 17px;line-height: 34px;max-width:778px;margin-bottom: 124px ">{{$t('productCenter.socailWallet.section2.desc')}}</p>
        <img :class="{'active-animation': isactive1}" src="../../assets/images/1/rrayRobot2/icon_2.svg" alt="">
      </div>
      <div class="content-bg2" :class="{'active-animation': isactive2}">
        <h1 :class="{'active-animation': isactive1}" style="font-size: 36px;font-weight: bold;color: #ffffff">{{$t('productCenter.socailWallet.section3.title')}}</h1>
        <span :class="{'active-animation': isactive1}" class="quarantine"></span>
        <div class="content-info1">
          <div>
            <img src="../../assets/images/1/rrayRobot2/icon_3_1.svg" alt="">
            <h1>{{$t('productCenter.socailWallet.section3.list1.listname')}}</h1>
            <span class="quarantine"></span>
            <p>{{$t('productCenter.socailWallet.section3.list1.list_desc')}}</p>
          </div>
          <div>
            <img src="../../assets/images/1/rrayRobot2/icon_3_2.svg" alt="">
            <h1>{{$t('productCenter.socailWallet.section3.list2.listname')}}</h1>
            <span class="quarantine"></span>
            <p>{{$t('productCenter.socailWallet.section3.list2.list_desc')}}</p>
          </div>
        </div>
        <div class="content-info2">
          <div>
            <img src="../../assets/images/1/rrayRobot2/icon_3_3.svg" alt="">
            <h1>{{$t('productCenter.socailWallet.section3.list3.listname')}}</h1>
            <span class="quarantine"></span>
            <p>{{$t('productCenter.socailWallet.section3.list3.list_desc')}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="content3-wrapper">
      <div :class="{'active-animation': isactive3}" class="content-bg1">
        <div class="content-info1">
          <h1>{{$t('productCenter.socailWallet.section4.title')}}</h1>
          <span class="quarantine"></span>
          <div>
            <h2>{{$t('productCenter.socailWallet.section4.list2.listname')}}</h2>
            <p>{{$t('productCenter.socailWallet.section4.list2.list_desc')}}</p>
            <router-link to="/rrayRobot2">{{$t('productCenter.socailWallet.section4.list2.btn')}}</router-link>
          </div>
          <div>
            <h2>{{$t('productCenter.socailWallet.section4.list1.listname')}}</h2>
            <p>{{$t('productCenter.socailWallet.section4.list1.list_desc')}}</p>
            <router-link to="/intelligentTrainer2">{{$t('productCenter.socailWallet.section4.list1.btn')}}</router-link>
          </div>
        </div>
        <div class="content-info2">
          <img src="../../assets/images/1/rrayRobot2/icon_4.svg" alt="">
        </div>
      </div>
      <div :class="{'active-animation': isactive3}" class="content-bg2">
        <h1 style="font-size: 30px;color: #ffffff;font-weight: normal">{{$t('productCenter.socailWallet.section5.title')}}
        </h1>
        <span class="quarantine"></span>
        <p style="font-size: 17px;color: #878988">{{$t('productCenter.socailWallet.section5.desc')}}</p>
        <a href="#/downLoad" target="_blank" class="blue-btn" style="animation: feadInUp 2s both;padding: 0 15px;">{{$t('productCenter.socailWallet.section5.btn')}}</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import $ from 'jquery'
export default {
  data () {
    return {
      scroll: '',
      isactive1: false,
      isactive2: false,
      isactive3: false
    }
  },
  methods: {
    menu () {
      this.scroll = $(window).scrollTop()
    }
  },
  mounted () {
    window.addEventListener('scroll', this.menu)
  },
  watch: {
    scroll (val) {
      // console.log(val)
      if (val < 400) {
        // console.log('我爬到顶了')
        this.isactive1 = false
      } else {
        // console.log('我走了')
        this.isactive1 = true
      }
      if (val < 1400) {
        // console.log('我爬到顶了')
        this.isactive2 = false
      } else {
        // console.log('我走了')
        this.isactive2 = true
      }
      if (val < 2600) {
        // console.log('我爬到顶了')
        this.isactive3 = false
      } else {
        // console.log('我走了')
        this.isactive3 = true
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
