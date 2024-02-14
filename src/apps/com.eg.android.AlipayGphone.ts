import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  deprecatedKeys: [1, 2],
  groups: [
    {
      key: 0,
      name: '通知提示-关闭花呗弹窗',
      desc: '包括升级和开通弹窗',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
        'com.alipay.android.msp.ui.views', //views.MspContainerActivity & views.MspUniRenderActivity
        'com.alipay.android.msp.ui.views.MspContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'Image[visibleToUser=true][desc.length=null] <n * +n * > [(text^="同意协议并")&&(text$="确认交易"||text$="升级"||text$="开通")]',
          snapshotUrls: 'https://i.gkd.li/import/12737055', //com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main
        },
        {
          key: 1,
          matches:
            '@[text^="暂不升级"||text="关闭"] <<n * <n * > * >n [(text^="同意协议并")&&(text$="确认交易"||text$="升级"||text$="开通")]',
          snapshotUrls: [
            'https://i.gkd.li/import/13183946', //com.alipay.android.msp.ui.views.MspContainerActivity
            'https://i.gkd.li/import/12826077', //com.alipay.android.msp.ui.views.MspUniRenderActivity
            'https://i.gkd.li/import/12915864',
            'https://i.gkd.li/import/14229068',
            'https://i.gkd.li/import/13631362',
            'https://i.gkd.li/import/13857535',
            'https://i.gkd.li/import/14060628',
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
          action: 'clickCenter',
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
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13763314',
        },
        {
          preKeys: 0,
          key: 1,
          quickFind: true,
          matches: '[text="对该内容不感兴趣"]',
          action: 'clickCenter',
          snapshotUrls: 'https://i.gkd.li/import/13763315',
        },
      ],
    },
    {
      key: 11,
      name: '全屏广告-借呗消费信贷协议',
      desc: '点击X',
      enable: false,
      rules: [
        {
          activityIds:
            'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
          matches:
            '[text="同意协议并刷脸验证"] < * -4 * >2 Image[visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13915022',
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
  ],
});
