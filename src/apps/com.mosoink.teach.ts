import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mosoink.teach',
  name: '云班课',
  groups: [
    {
      key: 0,
      name: '全屏广告-班课列表弹窗广告',
      enable: false,
      activityIds: [
        'com.mosoink.teach.MainMenuActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'TextView - View <1 FrameLayout - FrameLayout >1 FrameLayout > ImageView < FrameLayout',
          snapshotUrls: 'https://i.gkd.li/import/13784406',
        },
        {
          key: 2,
          matches: '@Image[text.length=0] < View <n * > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/15051392',
        },
      ],
    },
  ],
});
