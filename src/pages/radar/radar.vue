<template>
    <div class="radar-wrapper" style="animation: feadInUp 1s both">
      <div class="content1-wrapper-bg">
        <div class="content1-wrapper">
          <div class="content-bg">
            <div class="content-info">
              <h1 style="width: 100%;font-size: 64px;font-weight: normal;animation: feadInUp 1s both">{{$t('radar.text1')}}</h1>
              <p style="width: 100%;font-size: 22px;margin-top: 40px;margin-bottom: 50px;line-height: 28px;color: #808080;animation: feadInUp 1.5s both">{{$t('radar.text2')}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content2-wrapper">
        <div class="content-bg" :class="{'active-animation': isactive1}">
          <p style="color: #808080;font-size: 22px;text-align: center;max-width: 750px;margin: auto">{{$t('radar.text3')}}</p>
          <a style="margin: 80px auto 0" class="blue-btn" target="_blank" href="http://radarlab.org/en/">{{$t('radar.text4')}}</a>
        </div>
        <div class="content-bg2" :class="{'active-animation': isactive2}">
          <h1 style="font-size: 36px;color: #ffffff;text-align: center;font-weight: normal">{{$t('radar.text5')}}</h1>
          <span style="margin: 20px auto 0" class="blue-line"></span>
          <div class="content-info-wrapper">
            <div class="content-info1">
              <img src="../../assets/images/1/radar/1.svg" alt="">
              <span style="font-size: 17px;color: #ffffff;display: block;margin-top: 40px;margin-bottom: 40px">{{$t('radar.text6')}}</span>
              <p style="font-size: 17px;color: #808080">{{$t('radar.text7')}}</p>
            </div>
            <div class="content-info1">
              <img src="../../assets/images/1/radar/2.svg" alt="">
              <span style="font-size: 17px;color: #ffffff;display: block;margin-top: 40px;margin-bottom: 40px">{{$t('radar.text8')}}</span>
              <p style="font-size: 17px;color: #808080">{{$t('radar.text9')}}</p>
            </div>
          </div>
        </div>
        <div class="content-bg3" :class="{'active-animation': isactive3}">
          <h1 style="font-size: 36px;color: #ffffff;text-align: center;font-weight: normal">{{$t('radar.text10')}}</h1>
          <span style="margin: 20px auto 0" class="blue-line"></span>
          <p style="color: #808080;font-size: 22px;text-align: center;max-width: 750px;margin: auto;margin-top: 87px">{{$t('radar.text11')}}</p>
          <a style="margin: 122px auto 0" class="blue-btn" href="http://radarlab.org/en/" target="_blank">{{$t('radar.text12')}}</a>
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
      if (val < 700) {
        // console.log('我爬到顶了')
        this.isactive2 = false
      } else {
        // console.log('我走了')
        this.isactive2 = true
      }
      if (val < 1200) {
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
