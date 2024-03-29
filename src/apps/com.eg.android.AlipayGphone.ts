import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  deprecatedKeys: [1, 2, 11],
  groups: [
    {
      key: 0,
      name: '通知提示-关闭花呗, 借呗弹窗',
      desc: '包括升级和开通弹窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views', //views.MspContainerActivity & views.MspUniRenderActivity
        'com.alipay.android.msp.ui.views.MspContainerActivity',
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            '@[(name$=".Image")||(text^="暂不升级"||text="关闭")][visibleToUser=true][desc.length=null] <<n * <n * > * >n [(text^="同意协议并")&&(text$="确认交易"||text$="升级"||text$="开通"||text$="刷脸验证")]',
          snapshotUrls: [
            'https://i.gkd.li/import/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
            'https://i.gkd.li/import/13915022',
            'https://i.gkd.li/import/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/import/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/import/12915864',
            'https://i.gkd.li/import/14229068',
            'https://i.gkd.li/import/13631362',
            'https://i.gkd.li/import/13857535',
            'https://i.gkd.li/import/14060628',
            'https://i.gkd.li/i/14650607',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '更新提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      activityIds: [
        'com.alipay.mobile.alipassapp.alkb.kb.ALPMainPage63',
        'com.eg.android.AlipayGphone.AlipayLogin',
        'com.alipay.mobile.about.ui.AboutAlipayActivity',
      ],
      rules: [
        {
          key: 0,
          name: '卡片-【x】',
          matches:
            '[text="立即升级最新版支付宝客户端"] < LinearLayout + [id="com.alipay.mobile.advertisement:id/announcementview_righticon"]',
          snapshotUrls: 'https://i.gkd.li/import/13490797',
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-设置支付宝小组件',
      desc: '点击关闭',
      enable: false,
      quickFind: true,
      activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
      rules: [
        {
          matches:
            '@TextView[text="关闭"] < * <3 * < * + * >3 TextView[text="设置支付宝小组件"]',
          snapshotUrls: 'https://i.gkd.li/import/13327349',
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-小程序-12306',
      enable: false,
      activityIds: 'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      rules: [
        {
          key: 0,
          matches:
            '[desc="推荐广告"] > [desc="展开更多选项"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13763314',
        },
        {
          preKeys: 0,
          key: 1,
          quickFind: true,
          matches: '[text="对该内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/import/13763315',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-支付后自动点击完成',
      enable: false,
      quickFind: true,
      rules: [
        {
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[id="com.alipay.android.app:id/rl_nav_bar"] > [id="com.alipay.android.app:id/nav_right_textview"]',
          snapshotUrls: 'https://i.gkd.li/import/14008852',
        },
      ],
    },
    {
      key: 13,
      name: '分段广告-出行扫码广告',
      desc: '点击[展开更多]-点击[对该内容不感兴趣]',
      enable: false,
      quickFind: true,
      activityIds:
        'com.alipay.android.phone.wallet.aptrip.ui.activity.result.ResultPageActivityV2',
      rules: [
        {
          key: 0,
          name: '点击[展开更多]',
          matches: '@[desc="展开更多选项"] - * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14546044',
        },
        {
          key: 1,
          preKeys: [0],
          name: '点击[对该内容不感兴趣]',
          matches:
            '@RelativeLayout[clickable=true] >2 [text="对该内容不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14546047',
        },
      ],
    },
    {
      key: 14,
      name: '功能类-关闭免密支付开关',
      actionMaximum: 1,
      rules: [
        {
          quickFind: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches: '@[checked=true] < * - [text$="免密支付"]',
          exampleUrls:
            'https://m.gkd.li/57941037/1e3a5f01-c42b-4d41-9d7d-21ff96c0075f',
          snapshotUrls: [
            'https://i.gkd.li/i/14630824', // 关闭前
            'https://i.gkd.li/i/14630825', // 关闭后
          ],
        },
      ],
    },
    {
      key: 15,
      name: '分段广告-服务消息页面-卡片广告',
      desc: '点击[关闭]-点击[不感兴趣]',
      quickFind: true,
      activityIds:
        'com.alipay.android.phone.messageboxapp.ui.MsgBoxTabActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/14787644',
        },
        {
          preKeys: [0],
          key: 1,
          matches: '@[clickable=true] >2 [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/14787585',
        },
      ],
    },
  ],
});
