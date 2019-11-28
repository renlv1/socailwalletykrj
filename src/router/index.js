import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import socailWallet from '@/pages/productCenter/socailWallet'
import socailWallet2 from '@/pages/productCenter/socailWallet2'
import gagaWalletWeb from '@/pages/productCenter/gagaWalletWeb'
import intelligentTrainer from '@/pages/productCenter/intelligentTrainer'
import intelligentTrainer2 from '@/pages/productCenter/intelligentTrainer2'
import rrayRobot from '@/pages/productCenter/rrayRobot'
import rrayRobot2 from '@/pages/productCenter/rrayRobot2'
import artificialIntelligence from '@/pages/technology/artificialIntelligence'
import blockChain from '@/pages/technology/blockChain'
import radar from '@/pages/radar/radar'
import resourceCenter from '@/pages/resourceCenter/resourceCenter'
import about from '@/pages/about/about'
import helpCenter from '@/pages/helpCenter/helpCenter'
import contact from '@/pages/contact/contact'
import downLoad from '@/pages/productCenter/appDownload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/socailWallet',
      name: 'socailWallet',
      component: socailWallet
    },
    {
      path: '/socailWallet2',
      name: 'socailWallet2',
      component: socailWallet2
    },
    {
      path: '/gagaWalletWeb',
      name: 'gagaWalletWeb',
      component: gagaWalletWeb
    },
    {
      path: '/intelligentTrainer',
      name: 'intelligentTrainer',
      component: intelligentTrainer
    },
    {
      path: '/intelligentTrainer2',
      name: 'intelligentTrainer2',
      component: intelligentTrainer2
    },
    {
      path: '/rrayRobot',
      name: 'rrayRobot',
      component: rrayRobot
    },
    {
      path: '/rrayRobot2',
      name: 'rrayRobot2',
      component: rrayRobot2
    },
    {
      path: '/artificialIntelligence',
      name: 'artificialIntelligence',
      component: artificialIntelligence
    },
    {
      path: '/blockChain',
      name: 'blockChain',
      component: blockChain
    },
    {
      path: '/radar',
      name: 'radar',
      component: radar
    },
    {
      path: '/resourceCenter',
      name: 'resourceCenter',
      component: resourceCenter
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: helpCenter
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/downLoad',
      name: 'downLoad',
      component: downLoad
    }
  ]
})
