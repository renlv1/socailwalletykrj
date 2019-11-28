<template>
  <div v-if="isTure" class="header-wrapper" :class="{'activeNavs': changeColor}">
    <div class="header-bg">
      <div class="header-left">
        <router-link to="/" @click.native="barType = 1">
          <div class="logo-bg"></div>
        </router-link>

      </div>
      <div class="header-right">
        <div class="router-bg">
          <ul class="router-lists" :class="{'activeNav': barType === 0}">
            <li @mouseover="displayLanguage1" @mouseout="nodisplayLanguage1">
              {{$t('header.text1')}}
              <span class="fa fa-caret-down gradual-change"></span>
              <dl :class="{'activeNav': displayState1}">
                <dt><router-link to="/socailWallet2" @click.native="barType = 1">{{$t('header.text2')}}</router-link></dt>
                <dt><router-link to="/gagaWalletWeb" @click.native="barType = 1">{{$t('header.text13')}}</router-link></dt>
                <dt><router-link to="/rrayRobot2" @click.native="barType = 1">{{$t('header.text4')}}</router-link></dt>
                <dt><router-link to="/intelligentTrainer2" @click.native="barType = 1">{{$t('header.text3')}}</router-link></dt>
              </dl>
            </li>
            <li @mouseover="displayLanguage2" @mouseout="nodisplayLanguage2">
              {{$t('header.text5')}}
              <span class="fa fa-caret-down gradual-change"></span>
              <dl :class="{'activeNav': displayState2}">
                <dt><router-link to="/blockChain" @click.native="barType = 1">{{$t('header.text7')}}</router-link></dt>
                <dt><router-link to="/artificialIntelligence" @click.native="barType = 1">{{$t('header.text6')}}</router-link></dt>
              </dl>
            </li>
            <li><router-link to="/radar" @click.native="barType = 1">{{$t('header.text8')}}</router-link></li>
            <li><router-link to="/resourceCenter" @click.native="barType = 1">{{$t('header.text9')}}</router-link></li>
            <li><router-link to="/about" @click.native="barType = 1">{{$t('header.text10')}}</router-link></li>
            <li><router-link to="/helpCenter" @click.native="barType = 1">{{$t('header.text11')}}</router-link></li>
            <li class="last-nav"><router-link to="/contact" @click.native="barType = 1">{{$t('header.text12')}}</router-link></li>
          </ul>
          <div class="btn-bar fa fa-2x" @click="emargeBar" :class="{'fa-bars': barType === 1, 'fa-times': barType === 0}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import $ from 'jquery'
export default {
  data () {
    return {
      barType: 1,
      displayState1: false,
      displayState2: false,
      scroll: '',
      changeColor: false,
      isTure: true
    }
  },
  methods: {
    emargeBar () {
      if (this.barType === 1) {
        this.barType = 0
      } else {
        this.barType = 1
      }
    },
    displayLanguage1 () {
      this.displayState1 = true
    },
    nodisplayLanguage1 () {
      this.displayState1 = false
    },
    displayLanguage2 () {
      this.displayState2 = true
    },
    nodisplayLanguage2 () {
      this.displayState2 = false
    },
    menu () {
      this.scroll = $(window).scrollTop()
    }
  },
  mounted () {
    window.addEventListener('scroll', this.menu)
  },
  watch: {
    scroll (val) {
      if (val === 0) {
        // console.log('我爬到顶了')
        this.changeColor = false
      } else {
        // console.log('我走了')
        this.changeColor = true
      }
    }
  },
  created () {
    if (location.hash === '#/downLoad') {
      this.isTure = false
    } else {
      this.isTure = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

</style>
