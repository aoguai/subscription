import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.taobao',
  name: '淘宝',
  deprecatedKeys: [11, 15, 17],
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[id="com.taobao.taobao:id/close"]',
    },
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.taobao.tao.welcome.Welcome',
        'com.taobao.tao.TBMainActivity',
        'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
        'com.taobao.android.detail.wrapper.activity.DetailActivity',
        'com.alibaba.triver.container.TriverMainActivity',
      ],
      rules: [
        {
          key: 1,
          name: '88VIP开通优惠弹窗',
          matches: '@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13198052', //com.taobao.tao.welcome.Welcome
            'https://i.gkd.li/import/13249418', //com.taobao.tao.TBMainActivity
            'https://i.gkd.li/i/12642792',
            'https://i.gkd.li/i/13180826',
            'https://i.gkd.li/i/12648734',
            'https://i.gkd.li/i/12648746',
            'https://i.gkd.li/i/13198239',
            'https://i.gkd.li/i/14905372',
          ],
        },
        {
          key: 2,
          name: '抢天降补贴弹窗',
          matches: '@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]',
          snapshotUrls: 'https://i.gkd.li/import/14060521',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-消息页面热门活动卡片',
      quickFind: true,
      activityIds: 'com.taobao.tao.welcome.Welcome',
      rules: 'View[desc.length>0] +2n FrameLayout > TextView[text="퀺"]',
      snapshotUrls: ['https://i.gkd.li/import/13197877'],
    },
    {
      key: 3,
      name: '局部广告-悬浮广告',
      rules: [
        {
          key: 0,
          name: '商品详情右侧悬浮广告',
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            'View[childCount=2] > @Image[text!=""][clickable=true] + View[childCount>1]',
          snapshotUrls: [
            'https://i.gkd.li/import/13521702',
            'https://i.gkd.li/import/14236602', // 防止误触
          ],
        },
      ],
    },
    {
      key: 8,
      name: '通知提示',
      desc: '自动点击关闭',
      enable: false,
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.taobao.tao.welcome.Welcome',
        'com.taobao.android.order.bundle.TBOrderDetailActivity',
        'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
        'com.taobao.tao.TBMainActivity',
      ],
      rules:
        '[text^="开启系统通知"] + @Image[clickable=true] <<n [id="com.taobao.taobao:id/poplayer_inner_view"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13197594', //com.taobao.tao.welcome.Welcome
        'https://i.gkd.li/import/13222946', //com.taobao.android.order.bundle.TBOrderDetailActivity
        'https://i.gkd.li/import/13438404', //com.taobao.android.tbabilitykit.pop.StdPopContainerActivity
        'https://i.gkd.li/import/13446901',
        'https://i.gkd.li/import/13455424', //com.taobao.tao.TBMainActivity
      ],
    },
    {
      key: 9,
      name: '局部广告-各级页面-添加到首页弹窗',
      desc: '自动点击退出',
      quickFind: true,
      activityIds: [
        'com.taobao.themis.container.app.TMSActivity',
        'com.alibaba.triver.container.TriverMainActivity',
      ],
      rules: 'TextView[text="去首页"] + TextView[text="退出"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13197553',
        'https://i.gkd.li/import/13197546',
      ],
    },
    {
      key: 10,
      name: '全屏广告-视频页面-弹窗',
      enable: false,
      activityIds: [
        'com.taobao.tao.welcome.Welcome',
        'com.taobao.tao.TBMainActivity',
      ],
      rules: [
        {
          key: 0,
          name: '类型1',
          matches:
            'View[id=null] > [text="立即参加"] + TextView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642813',
        },
        {
          key: 1,
          name: '签到弹窗',
          matches:
            '@Image[text.length>40] < View - View >n TextView[text*="立即"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642798',
            'https://i.gkd.li/import/14163734',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '更新提示',
      enable: false,
      quickFind: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.taobao.android.detail.wrapper.activity.DetailActivity',
        'com.taobao.android.order.bundle.TBOrderListActivity',
        'com.taobao.search.sf.MainSearchResultActivity',
      ],
      rules: '[vid="update_imageview_cancel_v2"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13336760',
        'https://i.gkd.li/import/13695520',
        'https://i.gkd.li/import/13965740',
        'https://i.gkd.li/i/14899863',
      ],
    },
    {
      key: 13,
      name: '功能类-关闭小额免密支付',
      desc: '在支付的时候出现，自动点击关闭和不开通',
      enable: false,
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          key: 0,
          name: '类型1',
          matches: '@[text="关闭"] < * <3 * < * + * >3 [text$="小额免密支付"]',
          snapshotUrls: 'https://i.gkd.li/import/13438414',
        },
        {
          key: 1,
          name: '类型2',
          matches: '@[checked=true] < * - [text="开通淘宝小额免密支付"]',
          snapshotUrls: [
            'https://i.gkd.li/i/14471853', // 关闭前
            'https://i.gkd.li/i/14471858', // 关闭后
          ],
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-将小组件添加到手机桌面',
      desc: '点击取消',
      enable: false,
      activityIds: 'com.alibaba.triver.container.TriverMainActivity',
      rules: 'View[childCount=2] >3 View[text="立即添加"] + View[text="取消"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13598578',
        'https://i.gkd.li/import/13853510', //误触快照
      ],
    },
    {
      key: 16,
      name: '全屏广告-花呗升级报送征信',
      enable: false,
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="花呗服务未升级，将影响后续使用"] <<n FrameLayout @FrameLayout[clickable=true] [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/import/13628020',
        },
        {
          key: 1,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="根据相关法律法规要求，请尽快完成花呗升级"] <<n FrameLayout FrameLayout @[text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/13691864',
        },
        {
          key: 2,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[id="com.taobao.taobao:id/flybird_userinfo"] + * [text="暂不升级，继续付款"]',
          snapshotUrls: 'https://i.gkd.li/import/13898735',
        },
      ],
    },
    {
      key: 18,
      name: '全屏广告-"「0元下单」权益"弹窗',
      desc: '点击关闭',
      enable: false,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="关闭"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*="0元下单"]',
          exampleUrls:
            'https://m.gkd.li/57941037/a35c954d-5162-463c-aee3-b72b9c2d6625',
          snapshotUrls: 'https://i.gkd.li/import/14155537',
        },
      ],
    },
  ],
});
