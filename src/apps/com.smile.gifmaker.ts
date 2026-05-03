import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    {
      key: 10,
      name: '全屏广告-首页红包弹窗',
      desc: '关闭首页弹出的各类红包广告弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 1,
          name: '老友回归红包弹窗',
          matches:
            '@ImageView[id=null][clickable=true] + ViewGroup > [text!=null] + [text!=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/12708649',
            'https://i.gkd.li/i/12708660',
          ],
        },
        {
          key: 2,
          name: '限时高额奖励弹窗',
          matches:
            '@ImageView[id=null][clickable=true] < ViewGroup + ViewGroup >2 [text="立即领取"]',
          snapshotUrls: 'https://i.gkd.li/i/12708681',
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-首页左侧红包悬浮控件',
      desc: '关闭首页左侧悬浮的红包广告控件',
      enable: false,
      fastQuery: true,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          matches:
            '[id="com.smile.gifmaker:id/pendant_mask_bg"] + [id="com.smile.gifmaker:id/pendant_close"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12708671',
            'https://i.gkd.li/i/12708676', // 执行规则后，控件隐藏，使用 visibleToUser=true 进行限定，防止反复触发规则
          ],
        },
      ],
    },
    {
      key: 12,
      name: '功能类-推荐关注',
      desc: '关闭各页面的推荐关注提示',
      enable: false,
      activityIds: 'com.yxcorp.gifshow.HomeActivity',
      rules: [
        {
          key: 0,
          name: '消息页面-你可能感兴趣的人',
          fastQuery: true,
          matches: '[id="com.smile.gifmaker:id/close_pymk"]',
          snapshotUrls: 'https://i.gkd.li/i/12708707',
        },
        {
          key: 1,
          name: '我的页面-你可能感兴趣的人',
          fastQuery: true,
          matches:
            'ViewGroup[childCount=3] > [text="隐藏"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/14001536',
        },
        {
          key: 2,
          name: '朋友推荐弹窗',
          fastQuery: true,
          matches: '[text="朋友推荐"] + [vid="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/14232217',
        },
      ],
    },
    {
      key: 14,
      name: '全屏广告-直播间广告',
      desc: '关闭直播间的全屏广告',
      enable: false,
      rules: [
        {
          fastQuery: true,
          action: 'back',
          activityIds:
            'com.kuaishou.live.core.basic.activity.LiveSlideActivity',
          matches: '[text="幸运奖池"][visibleToUser=true] <<n [vid="webView"]',
          snapshotUrls: 'https://i.gkd.li/i/15629334',
        },
      ],
    },
  ],
});
