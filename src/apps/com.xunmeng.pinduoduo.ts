import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '关闭应用更新提示弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 1,
          activityIds: '.ui.activity.HomeActivity',
          matches: '@Image[clickable=true][text="webp"] +5 [text="立即升级"]',
          snapshotUrls: 'https://i.gkd.li/i/13195645',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-弹窗广告',
      desc: '关闭各类全屏弹窗广告，包括活动弹窗、红包弹窗等',
      enable: false,
      rules: [
        {
          key: 3,
          fastQuery: true,
          action: 'back',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.ui.activity.MainFrameActivity',
          ],
          matches:
            '[text="开心收下" || text="去抢购" || text="立即抽免单" || text="去刮奖" || text="立即领取" || text="去领大额金币" || text="送你大额现金" || text*="红包助手" || text="刮刮卡发来的消息通知"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13625441',
            'https://i.gkd.li/i/13761182',
            'https://i.gkd.li/i/13944165',
            'https://i.gkd.li/i/14456101',
            'https://i.gkd.li/i/14596990',
            'https://i.gkd.li/i/14614135',
            'https://i.gkd.li/i/15360330',
            'https://i.gkd.li/i/15032649',
            'https://i.gkd.li/i/15076322',
            'https://i.gkd.li/i/17564786',
            'https://i.gkd.li/i/17585645',
            'https://i.gkd.li/i/17625608',
          ],
        },
        {
          key: 4,
          fastQuery: true,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            '@ViewGroup[clickable=true] - ViewGroup[childCount=3] >2 [text="其他"]',
          snapshotUrls: 'https://i.gkd.li/i/15103543',
        },
        {
          key: 5,
          fastQuery: true,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches: [
            '[text="继续拼单"]',
            '@[clickable=true] > [text="先去逛逛"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/15197527',
            'https://i.gkd.li/i/15211473',
          ],
        },
        {
          key: 6,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: '[text="上滑看视频得现金"] - [text="webp"]',
          snapshotUrls: 'https://i.gkd.li/i/13809053',
        },
        {
          key: 7,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.ui.activity.MainFrameActivity',
          ],
          matches:
            'ImageView[childCount=0] < ViewGroup[childCount=1] < @ViewGroup[childCount=1][clickable=true][visibleToUser=true] < ViewGroup <(1,2) ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <(1,2,3) [parent=null]',
          snapshotUrls: [
            'https://i.gkd.li/i/17528782',
            'https://i.gkd.li/i/17655498',
            'https://i.gkd.li/i/17893977',
          ],
        },
        {
          key: 8,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            '@ViewGroup[childCount=1][clickable=true] < ViewGroup[childCount=2] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] < [childCount=1] <2 FrameLayout <2 [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/17773799',
        },
        {
          key: 9,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.ui.activity.HomeActivity',
          matches:
            '@ImageView[index=0][vid="pdd"][childCount=0][visibleToUser=true][width<120&&height<120] < RelativeLayout[childCount=2] < FrameLayout[childCount=1] < FrameLayout[childCount=1] < [parent=null]',
          snapshotUrls: 'https://i.gkd.li/i/18375615',
        },
      ],
    },
    {
      key: 6,
      name: '局部广告-悬浮广告',
      desc: '关闭各种悬浮广告',
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches:
            '@TextView[id=null][clickable=true] + Image[id=null][text="webp"]',
          snapshotUrls: 'https://i.gkd.li/i/12642058',
        },
        {
          key: 1,
          matches:
            '[id="unactive_watch_video_pendant"] > TextView[clickable=true][text=""][childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/12642058',
        },
        {
          key: 2,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout[vid="pdd"] + @FrameLayout[childCount=1][clickable=true][visibleToUser=true][text=null][vid="pdd"] > ImageView[childCount=0][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15140800',
        },
      ],
    },
    {
      key: 8,
      name: '局部广告-商品详情页视频讲解窗口',
      desc: '点击关闭',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches: '[vid="iv_float_window_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14549415',
        },
      ],
    },
    {
      key: 9,
      name: '功能类-多多视频每日自动签到',
      desc: '自动点击签到按钮并关闭签到后的弹窗',
      enable: false,
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          name: '自动签到',
          matches:
            '@[clickable=true] >2 [text="领取今日现金"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13201422',
            'https://i.gkd.li/i/13372677',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '在签到后关闭弹窗',
          matches:
            '@[clickable=true] >2 [text="明日继续来领"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/13205634',
        },
      ],
    },
    {
      key: 10,
      name: '全屏广告-多多视频划到广告自动跳过',
      desc: '点击返回自动刷新，从而跳过广告',
      enable: false,
      fastQuery: true,
      activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
      rules: [
        {
          key: 0,
          matches: [
            'TextView[text="正在直播"]',
            '@ImageView[desc="返回"] <4 ViewGroup < * < * < [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13446291',
        },
        {
          key: 1,
          matches: [
            'TextView[text="查看更多低价商品"]',
            '@ImageView[desc="返回"] <4 ViewGroup < * < * < [id="android:id/content"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13791119',
        },
      ],
    },
    {
      key: 11,
      name: '功能类-发送图片时自动勾选原图',
      desc: '发送图片时自动勾选原图选项',
      enable: false,
      fastQuery: true,
      rules: [
        {
          activityIds:
            'com.xunmeng.pinduoduo.app_album.album.MultiImageSelectorActivity',
          matches: '@[text="原图"][checked=false] + [text="发送"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13925378', // checked=false
            'https://i.gkd.li/i/13925380', // checked=true
          ],
        },
      ],
    },
    {
      key: 12,
      name: '全屏广告-下单后出现的弹窗',
      desc: '点击关闭',
      enable: false,
      rules: [
        {
          key: 0,
          name: '邀请好友弹窗',
          activityIds: [
            'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
            'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          ],
          matches: 'Button[text="关闭弹窗"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13927594',
            'https://i.gkd.li/i/14434154',
            'https://i.gkd.li/i/14456017',
            'https://i.gkd.li/i/13308175',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '权限提示-通知权限',
      desc: '关闭通知权限申请弹窗',
      enable: false,
      ignoreGlobalGroupMatch: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          activityIds: '.ui.activity.HomeActivity',
          matches:
            'FrameLayout > ViewGroup[vid="pdd"] > ViewGroup > ViewGroup[childCount<3] > ViewGroup[childCount=3 || childCount=2] >(1,2) ImageView[clickable=true][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14109435',
            'https://i.gkd.li/i/14549423',
            'https://i.gkd.li/i/14662202', // 避免在此页面误触
          ],
        },
        {
          key: 1,
          fastQuery: true,
          action: 'back',
          activityIds: [
            '.ui.activity.HomeActivity',
            '.activity.NewPageActivity',
            '.ui.activity.MainFrameActivity',
          ],
          matches:
            '[text="及时获取物流消息" || text="开启通知" || text="允许通知"]',
          snapshotUrls: [
            'https://i.gkd.li/i/15004580',
            'https://i.gkd.li/i/15048085',
            'https://i.gkd.li/i/16643295',
            'https://i.gkd.li/i/18371979',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '全屏广告-[个性化推荐]弹窗',
      desc: '点击[取消]',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          matches: ['[text="个性化推荐未开启"]', '[text="取消"]'],
          snapshotUrls: 'https://i.gkd.li/i/14964851',
        },
      ],
    },
    {
      key: 20,
      name: '全屏广告-登录提现页面点击[跳过]',
      desc: '自动点击登录提现页面的跳过按钮',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.login.LoginActivity',
          matches: ['[text="已获得现金"]', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/17450614',
        },
      ],
    },
  ],
});
