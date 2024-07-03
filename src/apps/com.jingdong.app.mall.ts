import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 2,
      name: '局部广告-悬浮广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          name: '参与调研',
          matches:
            'FrameLayout + RelativeLayout > RelativeLayout > ImageView[visibleToUser=true] + ImageView[!(desc="返回")][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642270',
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
          name: '首页广告',
          matches:
            'RelativeLayout >n * > [desc^="关闭浮层"][clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13165659',
            'https://i.gkd.li/import/12837870',
            'https://i.gkd.li/import/13072091',
            'https://i.gkd.li/import/12837870',
            'https://i.gkd.li/i/15077913', // 防止误触
          ],
        },
        {
          key: 3,
          name: '购物车页面砸金蛋',
          quickFind: true,
          matches: '[id="com.jd.lib.cart.feature:id/iv_egg_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642266',
            'https://i.gkd.li/i/14731003',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '通知提示',
      actionMaximum: 1,
      resetMatch: 'app',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew',
        'com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity',
        'com.jingdong.app.mall.MainFrameActivity',
      ],
      rules: [
        {
          matches:
            '@ImageView[clickable=true] -n TextView[text="开启消息通知"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12839864', //com.jd.lib.message.messagecenter.view.activity.MessageCenterMainActivityNew
            'https://i.gkd.li/import/13772299', //com.jd.lib.ordercenter.mygoodsorderlist.view.activity.MyOrderListActivity
            'https://i.gkd.li/import/13917163', //com.jingdong.app.mall.MainFrameActivity
            'https://i.gkd.li/i/13463618',
            'https://i.gkd.li/i/14692570',
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
      enable: false,
      rules: [
        {
          key: 0,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '@FrameLayout[clickable=true] > [desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13165721',
            'https://i.gkd.li/i/15364514',
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.jd.lib.cashier.complete.view.CashierCompleteActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
          ],
          quickFind: true,
          matches: '[vid="close"][desc="关闭页面"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13218034',
            'https://i.gkd.li/i/14927060',
          ],
        },
        {
          key: 2,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches:
            '[id="android:id/content"] > RelativeLayout > RelativeLayout > *[childCount=2] > ImageView[index=1][clickable=true][!(desc="拍照购")]',
          snapshotUrls: [
            'https://i.gkd.li/import/13241883',
            'https://i.gkd.li/import/13259029',
            'https://i.gkd.li/i/14612925',
          ],
        },
        {
          key: 3,
          activityIds: [
            'com.jingdong.app.mall.MainFrameActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
          ],
          matches: 'RelativeLayout > ImageView[desc*="关闭"]',
          excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13258996',
            'https://i.gkd.li/import/13336847', // 增加excludeMatches: 'ImageView[desc="关闭页面"] - [text="优惠券"]', 避免在该快照误触
            'https://i.gkd.li/i/15416926',
            'https://i.gkd.li/i/15862131',
          ],
        },
        {
          key: 4,
          quickFind: true,
          activityIds: 'com.jingdong.app.mall.MainFrameActivity',
          matches: '[vid="close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14162769',
            'https://i.gkd.li/i/14445257',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-横幅广告',
      activityIds: 'com.jingdong.app.mall.MainFrameActivity',
      rules: [
        {
          key: 0,
          matches:
            'ImageView < FrameLayout - FrameLayout > ImageView[desc="关闭"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13258973',
            'https://i.gkd.li/import/13258980',
            'https://i.gkd.li/import/13258981',
          ],
        },
        {
          key: 1,
          matches:
            '@View[desc.length=null][clickable=true][longClickable=false] -n ImageView <n RelativeLayout',
          snapshotUrls: 'https://i.gkd.li/import/14163014',
        },
        {
          key: 2,
          quickFind: true,
          matches: '@ViewGroup[clickable=true] - * > [text="去续费"]',
          snapshotUrls: 'https://i.gkd.li/i/15047238',
        },
        {
          key: 3,
          matches:
            '[desc="吸顶楼层"] > [desc="关闭按钮"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15112953',
        },
        {
          key: 4,
          quickFind: true,
          matches: '[id="com.jd.lib.cart.feature:id/plus_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15229577',
        },
      ],
    },
    {
      key: 10,
      name: '功能类-京东账号登录授权',
      desc: '自动点击【确认登录】',
      enable: false,
      activityIds: 'com.jingdong.app.mall.WebActivity',
      rules: '[text="京东登录"] > [desc="确认登录"]',
      snapshotUrls: 'https://i.gkd.li/import/12901734',
    },
    {
      key: 11,
      name: '局部广告-支付页面产品推荐',
      desc: '自动点击右上角【x】',
      activityIds:
        'com.jd.lib.settlement.fillorder.activity.NewFillOrderActivity',
      rules: 'ImageView[clickable=true && desc="关闭"]',
      snapshotUrls: 'https://i.gkd.li/import/13191146',
    },
    {
      key: 12,
      name: '全屏广告-购物车页面支付成功广告弹窗',
      desc: '自动点击正下方的【x】',
      enable: false,
      quickFind: true,
      rules: [
        {
          activityIds: 'com.jd.lib.cart.ShoppingCartNewActivity',
          matches: '@ImageView - ViewGroup >2 TextView[text="查看订单"]',
          snapshotUrls: 'https://i.gkd.li/import/13446362',
        },
      ],
    },
  ],
});
