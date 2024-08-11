import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      enable: false,
      forcedTime: 10000,
      activityIds: [
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
        'com.alipay.mobile.nebulax.integration.mpaas.activity.NebulaActivity$Main',
      ],
      rules: [
        {
          key: 0,
          fastQuery: true,
          matches: '[vid="draw_dialog_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14162087',
            'https://i.gkd.li/import/14162238',
            'https://i.gkd.li/i/16118156',
          ],
        },
        {
          key: 1,
          matches:
            'View[childCount=4] > Image + View + Image + View[text.length>0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/13042279',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[vid="dialog_full_image_close"]',
          snapshotUrls: 'https://i.gkd.li/import/13842492',
        },
        {
          key: 3,
          matches: 'View[childCount=2][clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://i.gkd.li/import/14033859',
        },
        {
          key: 4,
          fastQuery: true,
          activityIds:
            'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
          matches: '[vid="cn_bottom_sheet_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16118155',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      desc: '各个页面的局部广告卡片广告或横幅广告等，包括首页，包裹等',
      activityIds: [
        'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
        'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
      ],
      rules: [
        {
          key: 0,
          name: '地图底部横条广告',
          matches: 'View[desc="立即查看"] +2 ImageView[id=null]',
          snapshotUrls: 'https://i.gkd.li/import/14162159',
        },
        {
          key: 1,
          name: '物流信息底部横条广告',
          fastQuery: true,
          matches: '[vid="iv_banner_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15879126',
        },
        {
          key: 2,
          name: '首页底部横条广告',
          fastQuery: true,
          matches: '[vid="home_task_action_close"]',
          snapshotUrls: 'https://i.gkd.li/i/16028234',
        },
        {
          key: 3,
          fastQuery: true,
          matches:
            'FrameLayout[childCount=8] > @FrameLayout[clickable=true][childCount=0][text=null] + ImageView[childCount=0][text=null] <<n [vid="layout_root"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16024305',
            'https://i.gkd.li/i/16518502', // 避免误触
          ],
        },
      ],
    },
    {
      key: 10,
      name: '功能类-包裹页面-自动展开更多物流信息',
      desc: '点击[展开]',
      enable: false,
      fastQuery: true,
      activityIds: 'com.taobao.cainiao.logistic.ui.view.LogisticDetailActivity',
      rules: [
        {
          matches:
            '@[clickable=true] > View[desc="展开"] <<n LinearLayout[vid="layout_root"]',
          snapshotUrls: 'https://i.gkd.li/i/15879126',
        },
      ],
    },
  ],
});
