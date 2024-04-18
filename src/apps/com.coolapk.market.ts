import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 0,
      name: '分段广告-卡片广告',
      desc: '点击卡片右上角按钮->免广告-点击关闭->选择关闭原因-点击不感兴趣',
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
          matches: 'TextView + [vid="close_view"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12707506',
            'https://i.gkd.li/import/12642094',
            'https://i.gkd.li/import/12642148',
            'https://i.gkd.li/import/12774771',
            'https://i.gkd.li/import/13257987',
            'https://i.gkd.li/i/14996359', // 误触
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '点击[不感兴趣]/[关闭]',
          matches: '@[text="不感兴趣" || text="关闭"] <n * > [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/12707509',
            'https://i.gkd.li/import/12642132',
            'https://i.gkd.li/import/12642155',
            'https://i.gkd.li/import/12774753',
            'https://i.gkd.li/i/14959519',
            'https://i.gkd.li/i/14964859',
            'https://i.gkd.li/i/14549551',
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
      ],
    },
    {
      key: 4,
      name: '功能类-自动查看原图',
      desc: '查看图片时自动点击原图',
      enable: false,
      quickFind: true,
      activityIds: 'com.coolapk.market.view.photo.PhotoViewActivity',
      rules: '[vid="load_source_button"][checked=false]',
      snapshotUrls: ['https://i.gkd.li/i/14913023'],
    },
  ],
});
