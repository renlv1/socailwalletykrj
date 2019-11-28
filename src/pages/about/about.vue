<template>
    <div class="aboutUs" style="animation: feadInUp 1s both">
      <div class="lin-header">
        <div class="lin-wrap">
          <h3 style=";animation: feadInUp 1s both">{{$t('aboutUs.title')}}</h3>
          <p style=";animation: feadInUp 1.5s both">{{$t('aboutUs.subtitle')}}</p>
          <router-link tag="button" to="/contact"  class="lin-btn" style=";animation: feadInUp 2s both">{{$t('aboutUs.content1')}}</router-link>
        </div>
      </div>
      <div class="content lin-wrap">
        <h3 class="title">{{$t('aboutUs.content2')}}</h3>
        <p class="subtitle subtitle-two">{{$t('aboutUs.content3_1')}}</p>
        <p class="subtitle subtitle-two">{{$t('aboutUs.content3')}}</p>
        <p class="subtitle subtitle-two">{{$t('aboutUs.content4')}}</p>
        <p class="subtitle">{{$t('aboutUs.content5')}}</p>
        <!--<h3 class="lin-content-list-title">{{$t('aboutUs.content6')}}</h3>-->
        <!--<p class="list-subtitle">{{$t('aboutUs.content7')}}</p>-->
        <!--<ul class="content-list">-->
          <!--<li v-for="item in $t('aboutUs.listData')" :key="item.title">-->
            <!--<img :src="item.img" alt="">-->
            <!--<h3>{{item.title}}</h3>-->
            <!--<p>{{item.content}}</p>-->
          <!--</li>-->
        <!--</ul>-->
        <div class="img-bg">
          <div class="img-info-1">
            <img src="../../assets/images/lin-img/profile_1.jpg" alt="">
          </div>
          <div class="img-info-2">
            <img src="../../assets/images/lin-img/profile_2.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="content lin-wrap">
        <h3 class="title">{{$t('aboutUs.content8')}}</h3>
        <p class="subtitle subtitle-two">{{$t('aboutUs.content9')}}</p>
        <p class="subtitle subtitle-two">{{$t('aboutUs.content10')}}</p>
        <div class="img-bg">
          <div class="img-info-1">
            <img src="../../assets/images/lin-img/profile_3.jpg" alt="">
          </div>
          <div class="img-info-2">
            <img src="../../assets/images/lin-img/profile_4.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="lin-contactUs-box">
        <div class="lin-content-list">
          <h3 class="lin-content-list-title">{{$t('ArtificialIntelligence.contact1')}}</h3>
          <div class="lin-contactUs-subtitle">{{$t('ArtificialIntelligence.contact2')}}</div>
          <router-link tag="button" to="/contact" class="lin-btn">{{$t('ArtificialIntelligence.contact3')}}</router-link>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.aboutUs
  .lin-header
    background-image url("../../assets/images/lin-img/bg_3.jpg")
    h3
      @media only screen and (max-width 767px)
        margin-bottom 10px
    .lin-btn
      margin-top 28px
  .content
    padding-top 110px
    .img-bg
      width 100%
      display flex
      justify-content space-between
      @media screen and (max-width: 1024px)
        display block
        &>div
          width 100%
          text-align center
          img
            width  100%!important
            margin-bottom 50px
      .img-info-1
        /*width 706px*/
        /*height 400px*/
        img
          width auto
      .img-info-2
        /*width 414px*/
        /*height 400px*/
        img
          width auto
    .title
      font-size 36px
      font-weight normal
      color #066b98
      margin-bottom 50px
    .subtitle
      font-size 16px
      line-height 24px
      color #808080
      margin-bottom 52px
      &.subtitle-two
        margin-bottom 52px
    .lin-content-list-title
      margin-top 108px
    .list-subtitle
      font-size 16px
      color #808080
      text-align center
    .content-list
      margin-top 95px
      overflow hidden
      li
        width 50%
        float left
        text-align center
        box-sizing border-box
        margin-bottom 60px
        min-height 385px
        @media only screen and (max-width 767px)
          width 100%
        @media only screen and (min-width: 768px) and (max-width: 1199px)
          min-height 430px
        img
          display inline-block
          max-width 100%
          height auto
          @media screen and (max-width: 768px)
            width 100%
        h3
          font-size 16px
          color #344e5a
          font-weight normal
          margin-top 20px
          margin-bottom 6px
        p
          font-size 14px
          color #808080
          line-height 1.5
          padding 0 12%
  .lin-contactUs-box
    margin-top 280px
</style>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>
