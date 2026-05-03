import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 2,
      name: '全屏广告-首页弹窗广告',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '[id="com.greenpoint.android.mc10086.activity:id/ad_image"] < RelativeLayout + [id="com.greenpoint.android.mc10086.activity:id/close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/12662361',
        },
      ],
    },
    {
      key: 12,
      name: '局部广告-右侧悬浮小图标',
      fastQuery: true,
      rules: [
        {
          key: 0,
          actionCd: 300,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '[vid="close_btn" || vid="close_btn_bottom" || vid="cmcc_digital_delete_float_icon_ll"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12662265', // close_btn
            'https://i.gkd.li/i/14570369', // close_btn_bottom
            'https://i.gkd.li/i/25768816', // close_btn_bottom 和 cmcc_digital_delete_float_icon_ll
          ],
        },
        {
          key: 1,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '[vid="tab_ai_tag"] >2 [vid="ai_floatingBar_close"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/25768547',
        },
        {
          key: 2,
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          matches:
            '@Image[clickable=true][text!=null] <<3 WebView[text="余量查询"] <<2 [vid="patmentwebview"]',
          snapshotUrls: 'https://i.gkd.li/i/14738550',
        },
      ],
    },
  ],
});
