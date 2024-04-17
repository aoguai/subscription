import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mosoink.teach',
  name: '云班课',
  groups: [
    {
      key: 0,
      name: '全屏广告-首页-班课列表广告',
      enable: false,
      activityIds: ['com.mosoink.teach.MainMenuActivity'],
      rules: [
        {
          matches:
            'TextView - View <1 FrameLayout - FrameLayout >1 FrameLayout > ImageView < FrameLayout',
          exampleUrls:
            'https://m.gkd.li/64072399/69bb91ee-5367-4819-94d7-90e357dd9d3c',
          snapshotUrls: 'https://i.gkd.li/import/13784406', //极少触发
        },
      ],
    },
  ],
});
