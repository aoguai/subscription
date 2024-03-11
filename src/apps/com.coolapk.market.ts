import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.coolapk.market',
  name: '酷安',
  deprecatedKeys: [1, 2, 3],
  groups: [
    {
      key: 0,
      name: '分段广告-卡片广告',
      desc: '点击卡片右上角按钮->免广告-点击不感兴趣->选择关闭原因-点击不感兴趣',
      enable: false,
      quickFind: true,
      activityIds: [
        'com.coolapk.market.view.main.MainActivity', // 缺少快照
        'com.coolapk.market.view.base.SimpleAlphaActivity', // 缺少快照
        'com.coolapk.market.view.node.DynamicNodePageActivity',
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
      ],
      rules: [
        {
          key: 1,
          name: '点击右上角x按钮',
          matches:
            '[id="com.coolapk.market:id/ad_time_view"||id="com.coolapk.market:id/top_text_view"||id="com.coolapk.market:id/ad_text_view"] +n [id="com.coolapk.market:id/close_view"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12707506',
            'https://i.gkd.li/import/12642094',
            'https://i.gkd.li/import/12642148',
            'https://i.gkd.li/import/12774771',
            'https://i.gkd.li/import/13257987',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '去广告/免广告-点击不感兴趣',
          matches:
            'Button[text$="广告"] <n LinearLayout[childCount=2] > Button[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12707509',
            'https://i.gkd.li/import/12642132',
            'https://i.gkd.li/import/12642155',
            'https://i.gkd.li/import/12774753',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '选择关闭原因-点击不感兴趣',
          matches: '@LinearLayout > TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12472633',
            'https://i.gkd.li/import/12655713',
            'https://i.gkd.li/import/12660759',
            'https://i.gkd.li/import/12706437',
            'https://i.gkd.li/import/13786886', // 没有id
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '选择是否需要今日免广告',
          matches: '[text*="免广告"] + [text="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/i/14549551'],
        },
      ],
    },
  ],
});
