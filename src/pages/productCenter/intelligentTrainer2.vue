<template>
  <div class="intelligentTrainer2-wrapper" style="animation: feadInUp 1s both">
    <div class="content1-wrapper">
      <div class="content-bg">
        <div class="content-info">
          <h1 style="width: 100%;font-size: 46px;font-weight: normal;animation: feadInUp 1s both;text-align: center">{{$t('productCenter.intelligentTrainer.header.title')}}</h1>
          <p style="width: 100%;font-size: 22px;margin:40px auto 50px;line-height: 28px;animation: feadInUp 1.5s both;text-align: center">{{$t('productCenter.intelligentTrainer.header.desc')}}</p>
        </div>
      </div>
    </div>
    <div class="content2-wrapper">
      <div class="content-bg">
        <img src="../../assets/images/1/rrayRobot2/pic.png" alt="">
        <h1 :class="{'active-animation': isactive1}" style="font-size: 36px;font-weight: bold;color: #ffffff">{{$t('productCenter.intelligentTrainer.section1.title')}}</h1>
        <span :class="{'active-animation': isactive1}" class="quarantine"></span>
        <p :class="{'active-animation': isactive1}" style="margin:auto;color: #808080;font-size: 17px;line-height: 34px;max-width:778px ">{{$t('productCenter.intelligentTrainer.section1.desc')}}</p>
      </div>
      <div class="content-bg2" :class="{'active-animation': isactive2}">
        <div>
          <h1 style="font-size: 24px;color: #ffffff;min-height: 60px">{{$t('productCenter.intelligentTrainer.section2.list1.title')}}</h1>
          <span class="quarantine"></span>
          <p style="font-size: 17px;color: #808080;line-height: 42px">{{$t('productCenter.intelligentTrainer.section2.list1.desc')}}</p>
        </div>
        <div>
          <h1 style="font-size: 24px;color: #ffffff;min-height: 60px">{{$t('productCenter.intelligentTrainer.section2.list2.title')}}</h1>
          <span class="quarantine"></span>
          <p style="font-size: 17px;color: #808080;line-height: 42px">{{$t('productCenter.intelligentTrainer.section2.list2.desc')}}</p>
        </div>
        <div>
          <h1 style="font-size: 24px;color: #ffffff;min-height: 60px">{{$t('productCenter.intelligentTrainer.section2.list3.title')}}</h1>
          <span class="quarantine"></span>
          <p style="font-size: 17px;color: #808080;line-height: 42px">{{$t('productCenter.intelligentTrainer.section2.list3.desc')}}</p>
        </div>
      </div>
      <div class="content-bg3" :class="{'active-animation': isactive3}">
        <h1 style="font-size: 30px;color: #ffffff;font-weight: normal">{{$t('productCenter.intelligentTrainer.section3.title')}}</h1>
        <span class="quarantine"></span>
        <p style="font-size: 17px;color: #878988">{{$t('productCenter.intelligentTrainer.section3.desc')}}</p>
        <router-link to="/contact" class="blue-btn" style="animation: feadInUp 2s both;padding: 0 15px;">{{$t('productCenter.intelligentTrainer.section3.btn')}}</router-link>
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
      if (val < 200) {
        // console.log('我爬到顶了')
        this.isactive1 = false
      } else {
        // console.log('我走了')
        this.isactive1 = true
      }
      if (val < 600) {
        // console.log('我爬到顶了')
        this.isactive2 = false
      } else {
        // console.log('我走了')
        this.isactive2 = true
      }
      if (val < 1045) {
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
