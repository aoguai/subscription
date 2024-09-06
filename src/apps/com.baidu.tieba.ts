import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 1,
      name: '通知提示-申请消息提醒弹窗',
      enable: false,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches:
            '@ImageView[clickable=true] -2 LinearLayout > [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/import/13536170',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      desc: '关闭广告、直播推广',
      enable: false,
      fastQuery: true,
      forcedTime: 10000,
      rules: [
        {
          key: 0,
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.forum.ForumActivity',
          ],
          matches:
          '@ImageView[clickable=true][visibleToUser=true] <(1,2) LinearLayout <4 RelativeLayout +2 RelativeLayout >2 [text="直播中"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595137',
            'https://i.gkd.li/i/16596473',
          ],
        },
        {
          key: 1,
          activityIds: [
            'com.baidu.tieba.forum.ForumActivity',
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          matches:
          '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < RelativeLayout <3 LinearLayout < RelativeLayout + LinearLayout >2 [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595127',
            'https://i.gkd.li/i/16595515',
            'https://i.gkd.li/i/16596130',
          ],
        },
        {
          key: 2,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] < LinearLayout < FrameLayout -(1,2) [text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595120',
            'https://i.gkd.li/i/16595133',
          ],
        },
        {
          key: 3,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] -3 [text="直播中"]',
          snapshotUrls: 'https://i.gkd.li/i/16596210',
        },
        {
          key: 4,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches:
            '@[clickable=true][vid="obfuscated"][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595124',
            'https://i.gkd.li/i/16596297',
            'https://i.gkd.li/i/16632851', // [childCount>1] 防止误触
          ],
        },
        {
          key: 5,
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.forum.ForumActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] <4 RelativeLayout + FrameLayout >7 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595301',
            'https://i.gkd.li/i/16596195',
            'https://i.gkd.li/i/16596775',
          ],
        },
        {
          preKeys: [0, 1, 2, 3, 4 ,5],
          key: 10,
          activityIds: [
            'com.baidu.tieba.tblauncher.MainTabActivity',
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.forum.ForumActivity',
          ],
          matches:
            '@View[clickable=true][visibleToUser=true] - [text^="选择不喜欢"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595134',
            'https://i.gkd.li/i/16595511',
            'https://i.gkd.li/i/16595113',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '局部广告-首页、推荐列表顶部卡片式广告',
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.frs.FrsActivity',
      ],
      rules: [
        {
          key: 1,
          matches:
            'RelativeLayout[childCount=2] > @RelativeLayout[childCount=1][clickable=true] > ImageView',
          snapshotUrls: 'https://i.gkd.li/import/13060892',
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-广告弹窗',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: [
        'com.baidu.tbadk.browser.TBWebContainerActivity',
        'com.baidu.tieba.frs.FrsActivity',
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.LogoActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击右上角x关闭',
          matches:
            'View[childCount=3] > @View[clickable=true][childCount=1] > Image',
          snapshotUrls: [
            'https://i.gkd.li/import/13060891',
            'https://i.gkd.li/import/13222361', // childCount=1否则误触这里
          ],
        },
        {
          key: 1,
          name: '点击正下方x关闭',
          matches:
            '@TextView[clickable=true && text=null] - FrameLayout TextView[text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13168383',
            'https://i.gkd.li/import/13322120',
            'https://i.gkd.li/import/13328246',
          ],
        },
        {
          key: 2,
          name: '点击正下方x关闭2',
          forcedTime: 10000,
          matches:
            'WebView[text="会员弹窗" || text="一键签到"] >(3,4) TextView + Image[text!=null][childCount=0][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14630806',
            'https://i.gkd.li/i/14630806',
            'https://i.gkd.li/i/15119439',
            'https://i.gkd.li/i/15119451',
            'https://i.gkd.li/i/16426630',
          ],
        },
        {
          key: 3,
          name: '点击正下方x关闭3',
          matches: '@TextView[visibleToUser=true][text=""] -2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/16703244',
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-悬浮小广告',
      matchDelay: 500,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '首页右侧悬浮广告-1',
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          matches:
            '@ImageView[clickable=true] - TextView[text="广告"] < RelativeLayout + ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/13115167',
            'https://i.gkd.li/import/13327933', // 原规则在此误触
          ],
        },
        {
          key: 1,
          name: '首页右侧悬浮广告-2',
          activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
          matches:
            'RelativeLayout >2 RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/import/14291964',
        },
        {
          key: 2,
          name: '评论区左侧悬浮广告',
          fastQuery: true,
          activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
          matches: 'LinearLayout[childCount=2] > @ImageView + [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/import/13296280',
        },
        {
          key: 3,
          activityIds: [
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout[childCount=1] > ImageView[childCount=0][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/import/13625336',
            'https://i.gkd.li/import/13627881',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '局部广告-帖子底部浮窗广告',
      activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
      rules:
        '* + @ImageView[clickable=true] <<(6,7,8) RelativeLayout[childCount>=2] > [name="android.widget.LinearLayout"||name="android.widget.ImageView"][index=1][clickable=false]',
      snapshotUrls: [
        'https://i.gkd.li/import/13322337',
        'https://i.gkd.li/import/13328738',
        'https://i.gkd.li/i/14571741',
        'https://i.gkd.li/i/14586847',
        'https://i.gkd.li/i/16595234',
        'https://i.gkd.li/i/16619736',
        'https://i.gkd.li/i/16647874',
      ],
    },
    {
      key: 12,
      name: '功能类-贴吧内签到并关闭弹窗',
      enable: false,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          name: '贴吧页签到',
          activityIds: 'com.baidu.tieba.forum.ForumActivity',
          matches:
            '@TextView[text="签到"][visibleToUser=true] <<n WebView[text="frs"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13776801',
            'https://i.gkd.li/i/15087289',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '关闭签到成功弹窗',
          activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
          action: 'back',
          matches: 'WebView[text="签到弹窗"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13776424',
            'https://i.gkd.li/i/15087327',
            'https://i.gkd.li/i/15881225',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '局部广告-帖子推广',
      desc: '关闭首页、吧内游戏推广帖子',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.baidu.tieba.forum.ForumActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          // 防止误触标题以“游戏”开头的帖子，此页面推广帖子和正常帖子节点没有区别；[childCount=2]区分是否在热门页面
          excludeMatches: 'RelativeLayout[childCount=2] > [text="热门"]',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] < LinearLayout <4 RelativeLayout + FrameLayout > [text^="游戏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16828309',
            'https://i.gkd.li/i/16828230',
            'https://i.gkd.li/i/16828318',
            'https://i.gkd.li/i/16828401',
            'https://i.gkd.li/i/16828436',
          ],
        },
      ],
    },
  ],
});
