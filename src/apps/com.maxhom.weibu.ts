import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.maxhom.weibu',
  name: '暮瑟',
  groups: [
    {
      key: 3,
      name: '局部广告-交友-底部广告',
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
          matches: ['[id="com.maxhom.weibu:id/anythink_myoffer_banner_close"]'],
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
      name: '通知提示-漂流瓶-提示弹窗',
      quickFind: true,
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
