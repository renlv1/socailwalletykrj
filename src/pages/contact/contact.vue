<template>
    <div class="contactUs" style="animation: feadInUp 1s both">
      <div class="lin-header">
        <div class="lin-wrap">
          <h3 style=";animation: feadInUp 1s both">{{$t('contactUs.title')}}</h3>
          <p v-html="$t('contactUs.subtitle')" style=";animation: feadInUp 1.5s both"></p>
          <!--<p style=";animation: feadInUp 1.5s both">{{$t('contactUs.subtitle2')}}</p>-->
        </div>
      </div>
      <div class="content lin-wrap">
        <div class="content-lf">
          <h3 class="title">{{$t('contactUs.content1')}}</h3>
          <form id="msgForm">
            <div class="nameBox">
              <div class="inputBox">
                <div>{{$t('contactUs.content2')}} <i>*</i></div>
                <input :class="{borderColorRed: firstNameBl}" v-on:focus="checkInput()" v-model="firstName" type="text">
                <p v-if="firstNameBl" class="input-tip">{{$t('contactUs.content3')}}</p>
              </div>
              <div class="inputBox">
                <div>{{$t('contactUs.content4')}} <i>*</i></div>
                <input :class="{borderColorRed: lastNameBl}" v-on:focus="checkInput2()" v-model="lastName" type="text">
                <p v-if="lastNameBl" class="input-tip">{{$t('contactUs.content5')}}</p>
              </div>
            </div>
            <div class="inputBox">
              <div>{{$t('contactUs.content6')}} <i>*</i></div>
              <input :class="{borderColorRed: emailBl || emailBlTwo}" v-on:focus="checkInput3()" v-model="email" type="text">
              <p v-if="emailBl" class="input-tip">{{$t('contactUs.content7')}}</p>
              <p v-if="emailBlTwo" class="input-tip">{{$t('contactUs.content8')}}</p>
            </div>
            <div class="inputBox">
              <div>{{$t('contactUs.content11')}}</div>
              <input v-model="title" type="text">
            </div>
            <div class="inputBox">
              <div>{{$t('contactUs.content12')}}</div>
              <textarea v-model="content" name="" id="" cols="40" rows="10"></textarea>
            </div>
            <button class="lin-btn" @click="sendMsg()">{{$t('contactUs.content13')}}</button>
            <p class="bt-tip">{{$t('contactUs.content14')}}</p>
          </form>
        </div>
        <ul class="content-rt">
          <li v-for="item in $t('contactUs.listData')" :key="item.title">
            <h3>{{item.title}}</h3>
            <p>{{item.contentP}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.contactUs
  input,textarea
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -webkit-transition: all border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s ease-out;
    -o-transition: all border-color ease-in-out .15s,box-shadow ease-in-out .15s ease-out;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -webkit-transition: all border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s ease-out;
    -o-transition: all border-color ease-in-out .15s,box-shadow ease-in-out .15s ease-out;
    transition: all border-color ease-in-out .15s,box-shadow ease-in-out .15s ease-out;
    &:focus
      border-color: #888888;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(136,136,136,0.6);
      box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(136,136,136,0.6);
  .lin-header
    background-image url("../../assets/images/lin-img/bg_4.jpg")
  .content
    padding-bottom 200px
    overflow hidden
    .content-lf
      width 560px
      padding-top 80px
      margin-right 86px
      float left
      box-sizing border-box
      @media only screen and (min-width: 768px) and (max-width: 1199px)
        width 100%
        padding 0 40px
        padding-top 80px
        margin-right 0
      @media only screen and (max-width 767px)
        width 100%
        padding 0 0
        padding-top 80px
        margin-right 0
      .title
        font-size 36px
        font-weight normal
        color #066b98
        margin-bottom 30px
      .nameBox
        margin-left -20px
        margin-right -20px
        overflow hidden
        .inputBox
          float left
          width 50%
          padding 0 20px
          box-sizing border-box
      .inputBox
        margin-bottom 20px
        div
          font-size 14px
          color #808080
          i
            font-style normal
            color #d86761
        input
          height 42px
          padding-left 10px
          width 100%
          margin-top 10px
          color #333
          font-size 14px
          letter-spacing .03em
          box-sizing border-box
          background-color #ffffff
          outline none
          &.borderColorRed
            border-color #d86761
        .input-tip
          padding-top 5px
          font-size 14px
          color #d86761
        textarea
          width 100%
          margin-top 10px
          resize none
      .lin-btn
        margin-top 60px
      .bt-tip
        margin-top 20px
        font-size 12px
        color #808080
    .content-rt
      padding-top 100px
      float left
      @media only screen and (max-width 1199px)
        display none
      li
        margin-bottom 45px
        &:last-child
          p
            margin-bottom 5px
        h3
          font-size 18px
          /*font-weight normal*/
          color #066b98
          margin-bottom 15px
        p
          font-size 14px
          color #808080
</style>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      title: '',
      content: '',
      firstNameBl: false,
      lastNameBl: false,
      emailBl: false,
      //  邮箱验证
      emailBlTwo: false
    }
  },
  methods: {
    checkInput () {
      this.firstNameBl = false
    },
    checkInput2 () {
      this.lastNameBl = false
    },
    checkInput3 () {
      this.emailBl = false
      this.emailBlTwo = false
    },
    checkInput4 () {
      this.addressBl = false
    },
    sendMsg () {
      let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
      if (!this.firstName || this.firstName === ' ') {
        this.firstNameBl = true
      }
      if (!this.lastName || this.lastName === ' ') {
        this.lastNameBl = true
      }
      if (!this.email || this.email === ' ') {
        this.emailBl = true
      } else if (!reg.test(this.email)) {
        this.emailBl = false
        this.emailBlTwo = true
      }
      if ((this.firstName && this.firstName !== ' ') && (this.lastName && this.lastName !== ' ') && ((this.email && this.email !== ' ') && reg.test(this.email))) {
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.title = ''
        this.content = ''
        alert(this.$t('contactUs.alertText'))
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
