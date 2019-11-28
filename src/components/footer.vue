<template>
    <div v-if="isTure" class="footer-wrapper">
      <div class="content-bg">
        <ul>
          <li class="first-title">{{$t('footer.text1')}}</li>
          <li><router-link to="/socailWallet2">{{$t('footer.text2')}}</router-link></li>
          <li><router-link to="/rrayRobot2">{{$t('footer.text4')}}</router-link></li>
          <li><router-link to="/intelligentTrainer2">{{$t('footer.text3')}}</router-link></li>
        </ul>
        <ul>
          <li class="first-title">{{$t('footer.text5')}}</li>
          <li><router-link to="/blockChain">{{$t('footer.text7')}}</router-link></li>
          <li><router-link to="/artificialIntelligence">{{$t('footer.text6')}}</router-link></li>
        </ul>
        <ul>
          <li class="first-title">{{$t('footer.text8')}}</li>
          <li><a target="_blank" href="https://radarlab.org/dev/radar-api-tool.html">{{$t('footer.text9')}}</a></li>
          <li><a target="_blank" href="https://radarlab.org/dev">{{$t('footer.text10')}}</a></li>
          <!--<li><a href="https://cnwiki.radarlab.org/tech:continuous_ledger_close">{{$t('footer.text11')}}</a></li>-->
        </ul>
        <ul>
          <li class="first-title">{{$t('footer.text12')}}</li>
          <li><router-link to="/about">{{$t('footer.text13')}}</router-link></li>
          <li><router-link to="/contact">{{$t('footer.text14')}}</router-link></li>
        </ul>
      </div>
      <div class="content-bg1">
        <p style="margin-bottom: 34px">© 2013-2018 Rraystudio All Rights Reserved.</p>
        <p>Rraystudio Tech Ltd.</p>
        <div class="language-wrapper">
          <span @click="chooseLan('EN')">English</span>
          <span @click="chooseLan('CN')">中文</span>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {i18n} from '../i18n/i18nconfig'
export default {
  data () {
    return {
      isTure: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (localStorage.getItem('langu')) {
        i18n.locale = localStorage.getItem('langu')
      }
    })
  },
  methods: {
    chooseLan (lan) {
      localStorage.setItem('langu', lan)
      i18n.locale = lan
      //      window.location.reload()
      //    刷新页面
      this.$router.go(0)
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

<style lang="css" scoped>

</style>
