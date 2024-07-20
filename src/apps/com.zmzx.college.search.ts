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
        'com.zmzx.college.search.activity.common.DialogWebActivity',
        'com.mercury.sdk.activity.InterstitialPortraitActivity',
        'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          name: '广告-1',
          fastQuery: true,
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
          fastQuery: true,
          matches: '[vid="iv_itr_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15360368',
        },
        {
          key: 2,
          name: '广告-3',
          matches:
            'ImageView - FrameLayout >3 FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15372979',
        },
        {
          key: 3,
          name: '广告-4',
          fastQuery: true,
          matches:
            '@ImageView <n RelativeLayout > RelativeLayout > RelativeLayout > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/15521123',
        },
        {
          key: 4,
          name: '字节广告',
          matches:
            '@Image[text.length=0] < View +(3,5) View > View > TextView[text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13523288',
            'https://i.gkd.li/i/14965922',
            'https://i.gkd.li/i/15316457',
            'https://i.gkd.li/i/15442099',
          ],
        },
        {
          key: 5,
          preKeys: [0, 1, 2, 3, 4],
          name: '关闭开通会员免广告打扰弹窗',
          matches: '@TextView[text.length=0] <n View > [text*="免广告"]',
          snapshotUrls: ['https://i.gkd.li/i/15316467'],
        },
      ],
    },
    {
      key: 10,
      name: '分段广告-信息流广告',
      activityIds:
        'com.zmzx.college.search.activity.main.activity.MainActivity',
      rules: [
        {
          key: 0,
          matches:
            'ImageView < FrameLayout > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/15373051',
        },
        {
          key: 1,
          matches: '[text="广告"] <<n [name*=".View"] +n [name*=".View"] >(1, 2) [name*=".Image"][index=0]',
          snapshotUrls: [
            'https://i.gkd.li/i/15521151',
            'https://i.gkd.li/i/16319245',
          ]
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[vid="iv_native_close"]',
          snapshotUrls: 'https://i.gkd.li/i/15527866',
        },
        {
          key: 3,
          matches: '@Image < View + View > View >n [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/15885694',
        },
        {
          key: 4,
          matches:
            '@ImageView - ImageView <(2) * > TextView[text.length>0] < * <n * > TextView[text.length>0]',
          snapshotUrls: 'https://i.gkd.li/i/16157056',
        },
        {
          preKeys: [0, 1, 2, 3, 4],
          key: 10,
          name: '点击不感兴趣',
          fastQuery: true,
          matches: 'TextView[text="不感兴趣"]',
          snapshotUrls: ['https://i.gkd.li/i/15913004'],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 10],
          key: 11,
          name: '关闭开通会员免广告打扰弹窗',
          matches: '@TextView[text.length=0] <n View > [text*="免广告"]',
          snapshotUrls: ['https://i.gkd.li/i/16319260'],
        },
      ],
    },
    {
      key: 11,
      name: '分段广告-底部卡片广告',
      desc: '点击关闭-点击不感兴趣',
      fastQuery: true,
      rules: [
        {
          key: 0,
          name: '首页底部广告',
          activityIds:
            'com.zmzx.college.search.activity.main.activity.MainActivity',
          matches: '[vid="tvClose"]',
          snapshotUrls: 'https://i.gkd.li/i/14518991',
        },
        {
          key: 1,
          name: '教材底部广告',
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
          matches: '@[desc$="dislike"] <<n [vid="rlBottomADContainer"]',
          snapshotUrls: 'https://i.gkd.li/i/15902162',
        },
        {
          preKeys: [1],
          key: 10,
          name: '点击不感兴趣',
          activityIds:
            'com.zmzx.college.search.activity.booksearch.result.activity.AnswerBrowseActivity',
          matches: '@[clickable=true] > [text="不感兴趣"]',
          snapshotUrls: 'https://i.gkd.li/i/15902298',
        },
      ],
    },
  ],
});
