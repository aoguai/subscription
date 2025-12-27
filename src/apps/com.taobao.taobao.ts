import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '关闭各种全屏弹窗广告，包括会员促销、活动邀请等',
      enable: false,
      rules: [
        {
          key: 1,
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
            'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
            'com.taobao.android.detail.wrapper.activity.DetailActivity',
            'com.alibaba.triver.container.TriverMainActivity',
          ],
          fastQuery: true,
          matches: '@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13198052', //com.taobao.tao.welcome.Welcome
            'https://i.gkd.li/import/13249418', //com.taobao.tao.TBMainActivity
            'https://i.gkd.li/import/14060521',
            'https://i.gkd.li/i/12642792',
            'https://i.gkd.li/i/13180826',
            'https://i.gkd.li/i/12648734',
            'https://i.gkd.li/i/12648746',
            'https://i.gkd.li/i/13198239',
            'https://i.gkd.li/i/14905372',
            'https://i.gkd.li/i/22319206',
          ],
        },
        {
          key: 3,
          name: '"「0元下单」权益"弹窗',
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          fastQuery: true,
          matches:
            '[text="关闭"] < @FrameLayout[clickable=true] <3 FrameLayout[childCount=3] < * + FrameLayout[childCount=3] [text*="0元下单"]',
          snapshotUrls: 'https://i.gkd.li/import/14155537',
        },
        {
          key: 4,
          name: '视频页面-弹窗-类型1',
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
          ],
          matches:
            'View[id=null] > [text="立即参加"] + TextView[id=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/12642813',
        },
        {
          key: 5,
          name: '视频页面-签到弹窗',
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
          ],
          matches:
            '@Image[text.length>40] < View - View >n TextView[text*="立即"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12642798',
            'https://i.gkd.li/import/14163734',
          ],
        },
        {
          key: 6,
          name: '将小组件添加到手机桌面',
          activityIds: 'com.alibaba.triver.container.TriverMainActivity',
          matches:
            'View[childCount=2] >3 View[text="立即添加"] + View[text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13598578',
            'https://i.gkd.li/import/13853510', //误触快照
          ],
        },
        {
          key: 7,
          name: '各级页面-添加到首页弹窗',
          fastQuery: true,
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.alibaba.triver.container.TriverMainActivity',
          ],
          matches: 'TextView[text="去首页"] + TextView[text="退出"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13197553',
            'https://i.gkd.li/import/13197546',
          ],
        },
        {
          key: 8,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            '@ImageView[desc="图片"][childCount=0][clickable=true][visibleToUser=true][index=parent.childCount.minus(1)][width<200&&height<200]',
          snapshotUrls: [
            'https://i.gkd.li/i/18218537',
            'https://i.gkd.li/i/20277438',
          ],
        },
        {
          key: 9,
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            'WebView[text="红包签到"] > [id="ice-container"] >(3,4) View[childCount=3] > [name$="Image" || name$="Button"][text*="jpg" || text="关闭"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/18587158',
            'https://i.gkd.li/i/18587159',
          ],
        },
        {
          key: 10,
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches:
            '[text*="淘宝闪购"] <n View + View[childCount=1] > Image[text.length>20]',
          snapshotUrls: ['https://i.gkd.li/i/22319191'],
        },
        {
          key: 11,
          fastQuery: true,
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            '[text="规则"] +2 @View[childCount=1][clickable=true] > Image[childCount=0][text!=null] <<n [vid="tms_tab_content_view"]',
          snapshotUrls: 'https://i.gkd.li/i/22308745',
        },
        {
          key: 12,
          fastQuery: true,
          activityIds: [
            'com.taobao.search.uniform.SearchActivity',
            'com.taobao.android.detail.alittdetail.TTDetailActivity',
            'com.taobao.tao.TBMainActivity',
          ],
          matches:
            '@[clickable=true][childCount=0][width<150 && height<150][index=parent.childCount.minus(1)] - TextView[text.length>0] <n View <<n WebView[vid="poplayer_inner_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22949963',
            'https://i.gkd.li/i/23289412',
            'https://i.gkd.li/i/23567053',
          ],
        },
        {
          key: 13,
          name: '充值类商品界面广告',
          fastQuery: true,
          activityIds: 'com.taobao.weex.WXActivity',
          matches:
            '@ImageView[clickable=true][width<150 && height<155] < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid="weex_render_view"]',
          snapshotUrls: 'https://i.gkd.li/i/23923991',
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-悬浮/卡片广告',
      desc: '关闭各种悬浮或卡片广告',
      rules: [
        {
          key: 0,
          name: '商品详情右侧悬浮广告',
          fastQuery: true,
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches:
            '@Image[childCount=0][clickable=true][text!=null] < View <2 View < WebView < o0 <2 WebView < [id="android:id/content"]',
          snapshotUrls: ['https://i.gkd.li/import/13521702'],
          excludeSnapshotUrls: 'https://i.gkd.li/import/14236602',
        },
        {
          key: 1,
          name: '首页底部浮条广告',
          fastQuery: true,
          activityIds: 'com.taobao.tao.welcome.Welcome',
          matches: '@[desc="关闭浮条"] <<n [vid="poplayer_native_state_id"]',
          snapshotUrls: [
            'https://i.gkd.li/i/19121544',
            'https://i.gkd.li/i/19399328',
          ],
        },
        {
          key: 2,
          name: '消息页面热门活动卡片',
          fastQuery: true,
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.taobao.tao.TBMainActivity',
          ],
          matches:
            '[desc.length>0 || text.length>0] + @LinearLayout[clickable=true] + FrameLayout > TextView[text="퀺"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13197877',
            'https://i.gkd.li/i/23140899',
          ],
        },
        {
          key: 3,
          fastQuery: true,
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
          matches:
            '@Image[childCount=0][clickable=true][text!=null] <2 View < View < View <9 View < WebView < m0 <2 WebView < RelativeLayout < [vid="tms_tab_content_view"]',
          snapshotUrls: 'https://i.gkd.li/i/22291107',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.taobao.android.detail.alittdetail.TTDetailActivity',
          matches:
            '@FrameLayout[desc="关闭"][clickable=true] <<n [vid="ll_dinamicx_container"]',
          snapshotUrls: 'https://i.gkd.li/i/23289445',
        },
      ],
    },
    {
      key: 8,
      name: '通知提示',
      desc: '关闭消息推送开启提示',
      ignoreGlobalGroupMatch: true,
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.taobao.tao.welcome.Welcome',
        'com.taobao.android.order.bundle.TBOrderDetailActivity',
        'com.taobao.android.tbabilitykit.pop.StdPopContainerActivity',
        'com.taobao.tao.TBMainActivity',
      ],
      rules:
        '@Image[childCount=0][visibleToUser=true][text!=null] <n View >(1,2) [visibleToUser=true][text*="消息通知" || text*="系统通知"] <<n [vid="poplayer_inner_view"]',
      snapshotUrls: [
        'https://i.gkd.li/import/13197594', //com.taobao.tao.welcome.Welcome
        'https://i.gkd.li/import/13222946', //com.taobao.android.order.bundle.TBOrderDetailActivity
        'https://i.gkd.li/import/13438404', //com.taobao.android.tbabilitykit.pop.StdPopContainerActivity
        'https://i.gkd.li/import/13446901',
        'https://i.gkd.li/import/13455424', //com.taobao.tao.TBMainActivity
        'https://i.gkd.li/i/15104645',
        'https://i.gkd.li/i/18407606',
        'https://i.gkd.li/i/21789921',
      ],
    },
    {
      key: 12,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
      enable: false,
      fastQuery: true,
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
      name: '功能类-关闭支付相关推荐开通',
      desc: '关闭支付时的小额免密支付、花呗支付等推荐开通提示',
      enable: false,
      fastQuery: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          key: 0,
          name: '类型1',
          matches:
            '@[text="关闭"] < FrameLayout -n FrameLayout > [text$="推荐你"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13438414',
            'https://i.gkd.li/i/15520321',
          ],
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
      key: 16,
      name: '全屏广告-花呗相关弹窗',
      desc: '关闭花呗升级及征信授权相关弹窗',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: [
            '[text*="花呗升级" || text*="花呗服务" || text$="开通花呗"][visibleToUser=true]',
            '[text="暂不升级，继续付款" || text="关闭"][visibleToUser=true] <n [clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13628020',
            'https://i.gkd.li/import/13691864',
            'https://i.gkd.li/import/13898735',
            'https://i.gkd.li/i/18296345',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '功能类-登录授权',
      desc: '点击确认授权按钮',
      enable: false,
      fastQuery: true,
      rules: [
        {
          activityIds: 'com.taobao.browser.BrowserActivity',
          matches: '[text="确认授权"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/18271783',
        },
      ],
    },
    {
      key: 21,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.taobao.taopai.business.image.album.ImageGalleryActivity',
          matches:
            '[text="预览"] + [text="原图"][clickable=true][width!=height]',
          snapshotUrls: 'https://i.gkd.li/i/19126601',
        },
      ],
    },
  ],
});
