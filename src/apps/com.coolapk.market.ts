import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 0,
      name: '分段广告-卡片广告',
      desc: '关闭信息流中的卡片广告',
      enable: false,
      matchRoot: true,
      fastQuery: true,
      activityIds: [
        'com.coolapk.market.view.main.MainActivity', // 缺少快照
        'com.coolapk.market.view.base.SimpleAlphaActivity', // 缺少快照
        'com.coolapk.market.view.node.DynamicNodePageActivity',
        'com.coolapk.market.view.feed.FeedDetailActivityV8',
        '.view.search.SuperSearchResultActivity',
      ],
      rules: [
        {
          key: 1,
          name: '点击右上角x按钮',
          matches: 'TextView[text!="编辑"] + [vid="close_view"][childCount=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/12707506',
            'https://i.gkd.li/import/12642094',
            'https://i.gkd.li/import/12642148',
            'https://i.gkd.li/import/12774771',
            'https://i.gkd.li/import/13257987',
            'https://i.gkd.li/i/19004644',
            'https://i.gkd.li/i/19004652',
            'https://i.gkd.li/i/19004663',
            'https://i.gkd.li/i/19005176',
            'https://i.gkd.li/i/20776874',
            'https://i.gkd.li/i/21693917',
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/14996359',
            'https://i.gkd.li/i/15259305',
            'https://i.gkd.li/i/15159886',
            'https://i.gkd.li/i/15587119',
            'https://i.gkd.li/i/20768037',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '点击[不感兴趣]/[关闭]',
          anyMatches: [
            '@[text="不感兴趣" || text="关闭"] <n * > [text*="广告"]',
            '@[clickable=true] >(1,2) [text="不感兴趣"][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12707509',
            'https://i.gkd.li/import/12642132',
            'https://i.gkd.li/import/12642155',
            'https://i.gkd.li/import/12774753',
            'https://i.gkd.li/i/14959519',
            'https://i.gkd.li/i/14964859',
            'https://i.gkd.li/i/14549551',
            'https://i.gkd.li/i/21693916',
            'https://i.gkd.li/i/23046625',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '选择关闭原因-点击不感兴趣',
          anyMatches: [
            '@[clickable=true] > [text="不感兴趣"][visibleToUser=true]',
            '[text="不感兴趣"][clickable=true][visibleToUser=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/12472633',
            'https://i.gkd.li/import/12655713',
            'https://i.gkd.li/import/12660759',
            'https://i.gkd.li/import/12706437',
            'https://i.gkd.li/import/13786886', // 没有id
            'https://i.gkd.li/i/19004649',
            'https://i.gkd.li/i/19004661',
            'https://i.gkd.li/i/19643258',
            'https://i.gkd.li/i/19643262',
            'https://i.gkd.li/i/19534649',
            'https://i.gkd.li/i/20776872',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '功能类-自动查看原图',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      fastQuery: true,
      activityIds: 'com.coolapk.market.view.photo.PhotoViewActivity',
      rules: '[vid="load_source_button"][checked=false]',
      snapshotUrls: ['https://i.gkd.li/i/14913023'],
    },
    {
      key: 5,
      name: '局部广告-应用推荐',
      desc: '关闭搜索结果页面的应用推荐广告',
      rules: [
        {
          key: 1,
          fastQuery: true,
          activityIds: [
            '.view.search.SuperSearchResultActivity',
            '.view.node.DynamicNodePageActivity',
          ],
          matches: '[text="大家还下载了"] + [vid="close_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16448265',
            'https://i.gkd.li/i/16448385',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds: ['.view.search.SuperSearchResultActivity'],
          matches:
            '@[desc="关闭"] <<n [vid="item_view"] <<n [vid="to_native_ad_view"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/19643150',
        },
      ],
    },
  ],
});
