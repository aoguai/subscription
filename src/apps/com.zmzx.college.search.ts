import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zmzx.college.search',
  name: '大学搜题酱',
  groups: [
    {
      key: 2,
      name: '全屏广告',
      enable: false,
      activityIds: [
        'com.zmzx.college.search.activity.main.activity.MainActivity',
        'com.zmzx.college.search.activity.questionsearch.camera.activity.PicSearchResultActivity',
        'com.zmzx.college.search.activity.camerasdk.ZybCameraSDKActivity',
        'com.zmzx.college.search.activity.common.CommonCacheHybridActivity',
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
        'com.zmzx.college.search.activity.common.DialogWebActivity',
        'com.mercury.sdk.activity.InterstitialPortraitActivity',
      ],
      rules: [
        {
          key: 0,
          name: '广告-1',
          quickFind: true,
          matches: '[vid="iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12867751',
            'https://i.gkd.li/import/12894813',
            'https://i.gkd.li/import/13522998',
          ],
        },
        {
          key: 1,
          name: '广告-2',
          quickFind: true,
          matches: '[vid="iv_itr_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15360368',
        },
        {
          key: 2,
          name: '广告-3',
          matches: 'ImageView - FrameLayout >3 FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15372979',
        },
        {
          key: 3,
          name: '字节广告',
          quickFind: true,
          matches:
            '@Image[text.length=0] < View +(3,5) View > View > TextView[text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13523288',
            'https://i.gkd.li/i/14965922',
            'https://i.gkd.li/i/15316457',
          ],
        },
        {
          key: 4,
          preKeys: [0, 1, 2, 3],
          name: '关闭开通会员免广告打扰弹窗',
          matches: '@TextView[text.length=0] <n View > [text*="免广告"]',
          snapshotUrls: ['https://i.gkd.li/i/15316467'],
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-信息流广告',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: 'ImageView < FrameLayout > FrameLayout[childCount=1] > ImageView',
      snapshotUrls: 'https://i.gkd.li/i/15373051',
    },
    {
      key: 11,
      name: '局部广告-首页底部广告',
      quickFind: true,
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: '[vid="tvClose"]',
      snapshotUrls: 'https://i.gkd.li/i/14518991',
    },
  ],
});
