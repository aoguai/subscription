import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cainiao.wireless',
  name: '菜鸟',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '关闭首页和物流页面的全屏推广弹窗',
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
          matches:
            '[vid="draw_dialog_iv_close" || vid="package_import_ad_dialog_iv_close"]',
          snapshotUrls: [
            'https://i.gkd.li/import/14162087',
            'https://i.gkd.li/import/14162238',
            'https://i.gkd.li/i/16118156',
            'https://i.gkd.li/i/22570634',
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
        {
          key: 5,
          fastQuery: true,
          activityIds: '.homepage.view.activity.HomePageActivity',
          matches:
            '[desc="恭喜你获得" || desc="你想买的"] - @ImageView[id=null][text=null][clickable=true][visibleToUser=true][width<150&&height<150] <2 FrameLayout <2 FrameLayout < FrameLayout < [vid="fl_guide_ad_get_reward_dialog_dx_container"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22441306',
            'https://i.gkd.li/i/22570632',
          ],
        },
        {
          key: 6,
          name: '好友代取功能提示',
          fastQuery: true,
          activityIds:
            'com.cainiao.wireless.homepage.view.activity.HomePageActivity',
          matches: ['[text^="好友代取"]', '[text="下次再说"][clickable=true]'],
          snapshotUrls: 'https://i.gkd.li/i/23787455',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告',
      desc: '关闭首页底部横幅、地图底部广告、物流页面横条广告',
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
      desc: '自动展开包裹页面的物流详情信息',
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
