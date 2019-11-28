<template>
  <div class="blockChain artificialIntelligence" style="animation: feadInUp 1s both">
    <div class="lin-header">
      <div class="lin-wrap">
        <h3 style=";animation: feadInUp 1s both">{{$t('ArtificialIntelligence.title')}}</h3>
        <p style=";animation: feadInUp 1.5s both">{{$t('ArtificialIntelligence.subtitle')}}</p>
      </div>
    </div>
    <div class="lin-content lin-wrap">
      <div class="lin-content-list">
        <h3 class="lin-content-list-title">{{$t('ArtificialIntelligence.content1')}}</h3>
        <p class="lin-content-list-subtitle">{{$t('ArtificialIntelligence.content2')}}</p>
        <ul class="ul-one">
          <li v-for="item in $t('ArtificialIntelligence.listOne')" :key="item.title">
            <h3>{{item.title}}</h3>
            <div>
              <img style="width: 116px" :src="item.img" alt="">
              <h4>{{item.subtitle}}</h4>
              <p>{{item.content}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="lin-content-list">
        <h3 class="lin-content-list-title">{{$t('ArtificialIntelligence.content3')}}</h3>
        <ul class="ul-two">
          <li v-for="item in $t('ArtificialIntelligence.listTwo')" :key="item.title">
            <img :src="item.img" alt="" style="width: 100px;height: 100px;">
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
          </li>
        </ul>
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
.blockChain
  &.artificialIntelligence
    .lin-header
      background-image url("../../assets/images/lin-img/bg_1.jpg")
    .lin-content
      .lin-content-list
        .lin-content-list-subtitle
          width 605px
</style>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>
