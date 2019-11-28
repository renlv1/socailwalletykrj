<template>
  <div class="helpCenter" style="animation: feadInUp 1s both">
    <div class="lin-header">
      <div class="lin-wrap">
        <h3 style=";animation: feadInUp 1s both">{{$t('helpCenter.title')}}</h3>
        <p style=";animation: feadInUp 1.5s both">{{$t('helpCenter.subtitle')}}</p>
      </div>
    </div>
    <div class="content lin-wrap">
      <h3 class="help-title">{{$t('helpCenter.title2')}}</h3>
      <ul class="help-list">
        <li v-for="item in $t('helpCenter.list')" :key="item.title">
          <a :class="{minHeight300: enMinHeight}" :href="item.pdf" target="_blank">
            <img :src="item.img" alt="">
            <h4 v-html="item.title"></h4>
            <p>{{item.content}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .helpCenter
    .lin-header
      background-image url("../../assets/images/lin-img/helpBanner.png")
    .content
      padding-top 55px
      padding-bottom 76px
      .help-title
        color #066b98
        font-size 36px
        font-weight normal
        padding-bottom 20px
        border-bottom 1px solid #e0e0e0
        margin-bottom 60px
      .help-list
        display flex
        padding 2px
        overflow hidden
        @media only screen and (max-width 1199px)
          display block
        li
          flex 1
          margin-right 50px
          @media only screen and (max-width 767px)
            width 100%
            margin-right 0
            margin-bottom 60px
            &:last-child
              margin-bottom 0
          @media only screen and (min-width: 768px) and (max-width: 1199px)
            width 48%
            float left
            margin-bottom 60px
            &:nth-child(odd)
              margin-right 4%
            &:nth-child(even)
              margin-right 0
            &:nth-child(3)
              margin-bottom 0
            &:nth-child(4)
              margin-bottom 0
          &:last-child
            margin-right 0
          a
            display block
            min-height 376px
            padding 40px 0
            box-sizing border-box
            background-color #ffffff
            box-shadow 0px 0px 6px rgba(0,0,0,0.2)
            text-align center
            cursor pointer
            &.minHeight300
              min-height 300px
            img
              display inline-block
              width 100px
              height auto
              margin-bottom 20px
            h4
              min-height 56px
              font-size 20px
              font-weight normal
              color #676767
            p
              max-width 192px
              margin 0 auto
              font-size 16px
              line-height 1.5
              color #b7b7b7
</style>

<script>
export default{
  data () {
    return {
      watchLang: '',
      enMinHeight: false
    }
  },
  created () {
    if (localStorage.getItem('langu') === 'EN' || !localStorage.getItem('langu')) {
      this.watchLang = 'EN'
    } else {
      this.watchLang = 'CN'
    }
  },
  watch: {
    watchLang: function () {
      if (this.watchLang === 'EN') {
        this.enMinHeight = false
      } else {
        this.enMinHeight = true
      }
    }
  }
}
</script>
