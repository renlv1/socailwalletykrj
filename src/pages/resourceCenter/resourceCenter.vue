<template>
    <div class="resourceCenter-wrapper" style="animation: feadInUp 1s both">
      <div class="content1-wrapper">
        <div class="content-bg">
          <div class="content-info">
            <h1 style="width: 100%;font-size: 64px;font-weight: normal;animation: feadInUp 1s both">{{$t('resourceCenter.text1')}}</h1>
            <p style="width: 100%;font-size: 22px;margin-top: 40px;margin-bottom: 50px;line-height: 28px;animation: feadInUp 1.5s both" v-html="$t('resourceCenter.text2')">丰富开发资源，助力开发者驰骋云端。基于雷达实验室的开放接口，实现分布式货币交易网络，<br>帮助用户安全、快捷、低成本地进行全球货币的自由兑换、支付和转账。</p>
          </div>
        </div>
      </div>
      <div class="content2-wrapper">
        <div class="content-bg">
          <h1 style="font-size: 36px;font-weight: normal;color: #066b98">{{$t('resourceCenter.text3')}}</h1>
          <div class="resource-list-wrapper">
            <ul>
              <li>{{$t('resourceCenter.text4')}}</li>
              <li><a target="_blank" href="https://github.com/radrbiz/radard">{{$t('resourceCenter.text5')}}</a></li>
              <li><a target="_blank" href="https://github.com/radrbiz/radarj">{{$t('resourceCenter.text6')}}</a></li>
            </ul>
            <ul>
              <li>{{$t('resourceCenter.text7')}}</li>
              <li><a target="_blank" href="https://radarlab.org/dev/radar-api-tool.html">{{$t('resourceCenter.text8')}}</a></li>
              <li><a target="_blank" href="https://info.radarlab.org/index.html">{{$t('resourceCenter.text9')}}</a></li>
            </ul>
            <ul>
              <li>{{$t('resourceCenter.text10')}}</li>
              <li><a target="_blank" href="https://cnwiki.radarlab.org/tech:radar:consensus_graphic">{{$t('resourceCenter.text11')}}</a></li>
              <!--<li><a target="_blank" href="https://cnwiki.radarlab.org/tech:reaching-consensus">{{$t('resourceCenter.text12')}}</a></li>-->
              <li><a target="_blank" href="https://cnwiki.radarlab.org/tech:ledger-consensus-process">{{$t('resourceCenter.text13')}}</a></li>
            </ul>
            <ul>
              <li>{{$t('resourceCenter.text14')}}</li>
              <li><a target="_blank" href="https://cnwiki.radarlab.org/tech:continuous_ledger_close">{{$t('resourceCenter.text15')}}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content3-wrapper">
        <div class="content-bg">
          <h1 style="font-size: 16px;color: #344e5a;margin-bottom: 28px">{{$t('resourceCenter.text16')}}</h1>
          <div class="document-list1">
            <div>
              <a target="_blank" href="https://radarlab.org/dev/radard-apis.html">
                <img src="../../assets/images/1/resourceCenter/resource_center_1.png" alt="">
              </a>
              <span style="display: block;font-size: 18px;color: #333;margin-top: 14px">{{$t('resourceCenter.text17')}}</span>
              <span style="display: block;font-size: 14px;color: #999999;margin-top: 12px">{{$t('resourceCenter.text18')}}</span>
            </div>
            <div>
              <a target="_blank" href="https://radarlab.org/dev/radar-rest.html">
                <img src="../../assets/images/1/resourceCenter/resource_center_2.png" alt="">
              </a>
              <span style="display: block;font-size: 18px;color: #333;margin-top: 14px">{{$t('resourceCenter.text19')}}</span>
              <span style="display: block;font-size: 14px;color: #999999;margin-top: 12px">{{$t('resourceCenter.text20')}}</span>
            </div>
            <div>
              <a target="_blank" href="https://radarlab.org/dev/transactions.html">
                <img src="../../assets/images/1/resourceCenter/resource_center_3.png" alt="">
              </a>
              <span style="display: block;font-size: 18px;color: #333;margin-top: 14px">{{$t('resourceCenter.text21')}}</span>
              <span style="display: block;font-size: 14px;color: #999999;margin-top: 12px">{{$t('resourceCenter.text22')}}</span>
            </div>
          </div>
          <div class="document-list2">
            <div>
              <a target="_blank" href="https://radarlab.org/dev/reliable_tx.html">
                <img src="../../assets/images/1/resourceCenter/resource_center_4.png" alt="">
              </a>
              <span style="display: block;font-size: 18px;color: #333;margin-top: 14px">{{$t('resourceCenter.text23')}}</span>
              <span style="display: block;font-size: 14px;color: #999999;margin-top: 12px">{{$t('resourceCenter.text24')}}</span>
            </div>
            <div>
              <a target="_blank" href="https://radarlab.org/dev/gateway_guide.html">
                <img src="../../assets/images/1/resourceCenter/resource_center_5.png" alt="">
              </a>
              <span style="display: block;font-size: 18px;color: #333;margin-top: 14px">{{$t('resourceCenter.text25')}}</span>
              <span style="display: block;font-size: 14px;color: #999999;margin-top: 12px">{{$t('resourceCenter.text26')}}</span>
            </div>
            <div>
              <a target="_blank" href="https://radarlab.org/dev/whitepapers.html">
                <img src="../../assets/images/1/resourceCenter/resource_center_6.png" alt="">
              </a>
              <span style="display: block;font-size: 18px;color: #333;margin-top: 14px">{{$t('resourceCenter.text27')}}</span>
              <span style="display: block;font-size: 14px;color: #999999;margin-top: 12px">{{$t('resourceCenter.text28')}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  }
}
</script>

<style lang="css" scoped>

</style>
