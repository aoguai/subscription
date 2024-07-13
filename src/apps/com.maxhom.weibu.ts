import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.maxhom.weibu',
  name: '暮瑟',
  groups: [
    {
      key: 3,
      name: '分段广告-交友页面底部广告',
      enable: false,
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
        'com.maxhom.weibu.WelcomeActivity',
      ],
      rules: [
        {
          key: 0,
          name: '类型1-点击右侧X',
          matches: [
            'TextView[text.length>0] < FrameLayout + FrameLayout > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13377607',
            'https://i.gkd.li/import/13377810',
            'https://i.gkd.li/import/13728552',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '类型1-点击弹出窗口的X',
          matches:
            '[text.length>=2&&text.length<=6] <n FrameLayout < FrameLayout - FrameLayout > ImageView',
          snapshotUrls: ['https://i.gkd.li/import/13377611'],
        },
        {
          key: 2,
          name: '类型2-点击右侧X',
          matches: [
            '[id="com.maxhom.weibu:id/anythink_myoffer_banner_close"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13702305',
            'https://i.gkd.li/import/13702339',
            'https://i.gkd.li/import/13702345',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '通知提示-漂流瓶页面提示弹窗',
      fastQuery: true,
      activityIds: [
        'com.maxhom.weibu.tool.home.activity.ToolBottleActivity',
        'com.maxhom.weibu.tool.home.activity.NewMainActivity',
      ],
      rules: [
        {
          matches: '[id="com.maxhom.weibu:id/ivClose"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13377649',
            'https://i.gkd.li/import/13457015',
          ],
        },
      ],
    },
  ],
});
