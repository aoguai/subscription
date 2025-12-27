import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 2,
      name: '局部广告-悬浮广告',
      desc: '关闭首页悬浮广告、参与调研提示、红包弹窗和购物车砸金蛋',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          name: '参与调研',
          anyMatches: [
            'FrameLayout + RelativeLayout > RelativeLayout[childCount=2] > ImageView[visibleToUser=true] + ImageView[!(desc="返回")][visibleToUser=true]',
            'FrameLayout + RelativeLayout > RelativeLayout[childCount=2] > ImageView[visibleToUser=true] + *[childCount=1] > ImageView[!(desc="返回")][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12642270',
            'https://i.gkd.li/i/21793011',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/import/12774910', // 使用 [!(desc="返回")] 进行限定，防止在进入商品详情页时点击返回按钮
            'https://i.gkd.li/i/15110548', // 避免误触
          ],
        },
        {
          key: 1,
          name: '邀好友得红包',
          matches:
            '@ImageView[id!=null] + FrameLayout[childCount=3] > ImageView + LinearLayout + TextView',
          snapshotUrls: 'https://i.gkd.li/import/13242002',
        },
        {
          key: 2,
          name: '首页贴边广告',
          matches:
            'RelativeLayout >n * > [desc^="关闭" && !(id*="egg")][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13165659',
            'https://i.gkd.li/import/12837870',
            'https://i.gkd.li/import/13072091',
            'https://i.gkd.li/import/12837870',
            'https://i.gkd.li/i/17690650',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/15077913',
        },
        {
          key: 3,
          name: '购物车页面砸金蛋',
          fastQuery: true,
          matches: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642266',
            'https://i.gkd.li/i/14731003',
          ],
        },
        {
          key: 4,
          name: '推推红包',
          matches:
            '@ImageView[id^="com.jd.lib.personal.feature"][index=parent.childCount.minus(1)] <<(3,4) RelativeLayout > LinearLayout[id=null][childCount=2] > ImageView[id^="com.jd.lib.personal.feature"][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/20532279',
            'https://i.gkd.li/i/20532280',
            'https://i.gkd.li/i/23693918',
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/21343338'],
        },
      ],
    },
    {
      key: 4,
      name: '通知提示',
      desc: '关闭消息通知开启提示',
      ignoreGlobalGroupMatch: true,
      actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      fastQuery: true,
      activityIds: [
        'com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew',
        'com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity',
        'com.jd.lib.message.messagecenter3.MessageCenterActivity',
        'com.jingdong.app.mall.MainFrameActivity',
      ],
      rules: [
        {
          matches:
            '@ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true] -n [text="开启消息通知"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12839864', //com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew
            'https://i.gkd.li/import/13772299', //com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity
            'https://i.gkd.li/import/13917163', //com.jingdong.app.mall.MainFrameActivity
            'https://i.gkd.li/i/13463618',
            'https://i.gkd.li/i/14692570',
            'https://i.gkd.li/i/18060234',
          ],
        },
        {
          matches:
            '@ImageView < FrameLayout[clickable=true] + TextView[text^="打开系统通知"]',
          snapshotUrls: 'https://i.gkd.li/import/12839865',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-广告弹窗',
      desc: '关闭各种全屏广告弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          resetMatch: 'activity',
          matchTime: 10000,
          activityIds: [
            'com.jingdong.app.mall.MainFrameActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
            'com.jd.lib.cashier.complete.view.CashierCompleteActivity',
          ],
          excludeMatches: [
            'ImageView[desc="关闭页面"] - [text="优惠券"]',
            'TextView[text="退换/售后"][id=null]',
            '[text="立即购买"][visibleToUser=true]',
          ],
          matches:
            '[name$="Layout"][childCount=2][text=null][desc=null][visibleToUser=true] > @ImageView[desc*="关闭"][visibleToUser=true] - [name$="Layout"||desc="弹窗"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13258996',
            'https://i.gkd.li/import/13218034',
            'https://i.gkd.li/import/14162769',
            'https://i.gkd.li/import/13241883',
            'https://i.gkd.li/import/13259029',
            'https://i.gkd.li/i/15416926',
            'https://i.gkd.li/i/15862131',
            'https://i.gkd.li/i/14927060',
            'https://i.gkd.li/i/14445257',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/import/13336847', // 增加excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]', 避免在该快照误触
            'https://i.gkd.li/i/18455760',
            'https://i.gkd.li/i/16818580', // 增加excludeMatches: 'TextView[text="退换/售后"]', 避免在刚刚打开该快照页面时误触（此时activityId并未改变）
            'https://i.gkd.li/i/24170046', // 增加excludeMatches: '[text="立即购买"][visibleToUser=true]', 避免在该快照误触
          ],
        },
        {
          key: 2,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          anyMatches: [
            '[id="android:id/content"] > RelativeLayout > RelativeLayout > *[childCount=2] > ImageView[index=1][clickable=true][!(desc="拍照购")]',
            'ViewGroup[childCount>=2] > FrameLayout + FrameLayout > ImageView[desc="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/14612925',
            'https://i.gkd.li/i/17974166',
            'https://i.gkd.li/i/15364514',
            'https://i.gkd.li/i/13165721',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-横幅广告',
      desc: '关闭页面顶部横幅广告和吸顶广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          matches:
            'ImageView < FrameLayout[index=0] < ViewGroup[childCount=3] > FrameLayout[index=parent.childCount.minus(1)||index=parent.childCount.minus(2)][childCount=1] > ImageView[desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13258973',
            'https://i.gkd.li/import/13258980',
            'https://i.gkd.li/import/13258981',
            'https://i.gkd.li/i/22319329',
          ],
        },
        {
          key: 1,
          matches:
            '@View[desc.length=null][clickable=true][longClickable=false][visibleToUser=true][id=null] -n ImageView[id=null] <n RelativeLayout[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/14163014',
        },
        {
          key: 2,
          anyMatches: [
            'ImageView +n ViewGroup >2 [text.length>0] < ViewGroup + @ViewGroup > ImageView',
            '@ViewGroup[index=parent.childCount.minus(1)] -2 ViewGroup[childCount<=1][index=0] + ViewGroup[childCount=2] >2 [text.length>0&&text.length<=3]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15047238',
            'https://i.gkd.li/i/17001455',
            'https://i.gkd.li/i/21344132',
            'https://i.gkd.li/i/23694139',
          ],
        },
        {
          key: 3,
          matches:
            '[desc="吸顶楼层"] > [desc="关闭按钮"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15112953',
        },
        {
          key: 4,
          fastQuery: true,
          matches: '[id="com.jd.lib.cart.feature:id/plus_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15229577',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-京东账号登录授权',
      desc: '点击确认登录按钮',
      enable: false,
      activityIds: 'com.jingdong.app.mall.WebActivity',
      rules: '[text="京东登录"] > [desc="确认登录"]',
      snapshotUrls: 'https://i.gkd.li/import/12901734',
    },
    {
      key: 11,
      name: '局部广告-支付页面产品推荐',
      desc: '关闭支付页面的推荐商品广告',
      activityIds:
        'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      rules: 'ImageView[clickable=true && desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13191146',
    },
    {
      key: 12,
      name: '全屏广告-购物车页面支付成功广告弹窗',
      desc: '关闭购物车支付成功后的广告弹窗',
      enable: false,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
          matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
          snapshotUrls: 'https://i.gkd.li/import/13446362',
        },
      ],
    },
    {
      key: 13,
      name: '功能类-支付订单后点击[完成]',
      desc: '点击支付完成后的完成按钮',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds:
            '.bundle.cashierfinish.view.CashierUserContentCompleteActivity',
          matches: '[vid="lib_cashier_finish_back_page_text"]',
          snapshotUrls: 'https://i.gkd.li/i/17358003',
        },
      ],
    },
    {
      key: 14,
      name: '通知提示-关闭支付时各类开通弹窗',
      desc: '关闭支付时弹出的免密、快付、人脸等弹窗',
      enable: false,
      ignoreGlobalGroupMatch: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity',
        'com.jingdong.manto.card.MantoLightActivity',
        'com.jd.lib.jdpaysdk.JDPayActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text*="《"&&text*="协议"]',
            '[text*="暂不"||desc="关闭"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/19918601',
            'https://i.gkd.li/i/20033983',
            'https://i.gkd.li/i/20265504',
            'https://i.gkd.li/i/20709175',
          ],
        },
        {
          key: 1,
          fastQuery: true,
          matches:
            '@ImageView[id!=""][clickable=true] <n * > [(text*="京东快付"||text="设置默认支付工具")&&text.length<=8]',
          snapshotUrls: [
            'https://i.gkd.li/i/20516256',
            'https://i.gkd.li/i/23832919',
          ],
        },
      ],
    },
  ],
});
