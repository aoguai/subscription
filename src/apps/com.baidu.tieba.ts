import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 1,
      name: '通知提示-申请消息提醒弹窗',
      desc: '关闭消息通知开启提示弹窗',
      enable: false,
      ignoreGlobalGroupMatch: true,
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true] -2 LinearLayout > [text^="打开通知"]',
          snapshotUrls: 'https://i.gkd.li/import/13536170',
        },
      ],
    },
    {
      key: 2,
      name: '分段广告-信息流广告',
      desc: '关闭首页、帖子内的广告和直播推广',
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
            '@[clickable=true][visibleToUser=true] <(1,2) RelativeLayout <(1,4) RelativeLayout[childCount>1] >(3,4) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595124',
            'https://i.gkd.li/i/16596297',
            'https://i.gkd.li/i/16632851', // [childCount>1] 防止误触
          ],
        },
        {
          key: 5,
          activityIds: [
            'com.baidu.tieba.pb.pb.main.PbActivity',
            'com.baidu.tieba.forum.ForumActivity',
            'com.baidu.tieba.tblauncher.MainTabActivity',
          ],
          matches:
            '@FrameLayout[clickable=true][visibleToUser=true] <4 RelativeLayout + FrameLayout >(7,8,9) [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595301',
            'https://i.gkd.li/i/16596195',
            'https://i.gkd.li/i/16596775',
            'https://i.gkd.li/i/21524232',
            'https://i.gkd.li/i/21529443',
          ],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5],
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
      desc: '关闭首页顶部的卡片广告和小游戏推广',
      matchTime: 10000,
      forcedTime: 10000,
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
        {
          key: 2,
          fastQuery: true,
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] < LinearLayout[childCount=1] <4 RelativeLayout +3 LinearLayout >4 [text="小游戏"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17943902',
            'https://i.gkd.li/i/18217417',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告-广告弹窗',
      desc: '关闭会员弹窗、签到弹窗等全屏广告',
      enable: false,
      matchTime: 10000,
      actionMaximum: 1,
      activityIds: [
        'com.baidu.tbadk.browser.TBWebContainerActivity',
        'com.baidu.tieba.frs.FrsActivity',
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.LogoActivity',
      ],
      rules: [
        {
          key: 1,
          name: '点击正下方x关闭',
          matches:
            '@TextView[id="com.baidu.tieba:id/obfuscated"][clickable=true][childCount=0][visibleToUser=true] - FrameLayout[childCount=2][getChild(1).text="广告"] < RelativeLayout[childCount=2] < [parent=null]',
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
          matches:
            'WebView[text!=null] > View[childCount=1] > View[childCount=3] > @[visibleToUser=true][index=2]',
          snapshotUrls: [
            'https://i.gkd.li/i/13060891',
            'https://i.gkd.li/i/16703244',
          ],
          excludeSnapshotUrls: ['https://i.gkd.li/i/13222361'],
        },
      ],
    },
    {
      key: 10,
      name: '局部广告-悬浮小广告',
      desc: '关闭首页右侧和评论区的悬浮广告',
      matchDelay: 500,
      matchTime: 10000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '首页右侧悬浮广告-1',
          activityIds: [
            '.tblauncher.MainTabActivity',
            '.pb.pb.main.PbActivity',
          ],
          matches:
            '@ImageView[clickable=true][visibleToUser=true][vid="obfuscated"] - [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13115167',
            'https://i.gkd.li/i/16622395',
            'https://i.gkd.li/i/16632851',
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/import/13327933',
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
          matches:
            'FrameLayout[getChild(1).getChild(1).text!=null] + @FrameLayout[clickable=true] > LinearLayout[childCount=2] > ImageView + [text="广告"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/import/13296280',
          excludeSnapshotUrls: 'https://i.gkd.li/i/20361318',
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
      name: '局部广告-[帖子内/吧内]底部悬浮窗',
      desc: '关闭帖子内和吧内底部的推荐悬浮窗',
      fastQuery: true,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          activityIds: '.pb.pb.main.PbActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text$="热议中" || text^="猜你喜欢" || text*="进吧逛逛"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16595234',
            'https://i.gkd.li/i/16619736',
            'https://i.gkd.li/i/16647874',
          ],
        },
        {
          key: 1,
          activityIds: '.forum.ForumActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <2 LinearLayout - * > [text^="关注本吧"]',
          snapshotUrls: 'https://i.gkd.li/i/17992981',
        },
      ],
    },
    {
      key: 12,
      name: '功能类-贴吧内签到并关闭弹窗',
      desc: '自动进行贴吧签到并关闭签到成功提示',
      fastQuery: true,
      enable: false,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          name: '贴吧页签到',
          activityIds: 'com.baidu.tieba.forum.ForumActivity',
          anyMatches: [
            '@TextView[text="签到"][visibleToUser=true] <3 View < View <2 View < View < WebView < WebView < FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id="android:id/content"]',
            '@TextView[text="签到"][visibleToUser=true] <5 View < View <2 View < WebView < WebView < FrameLayout < ViewGroup <2 FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13776801',
            'https://i.gkd.li/i/15087289',
            'https://i.gkd.li/i/17902156',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '关闭签到成功弹窗',
          activityIds: 'com.baidu.tbadk.browser.TBWebContainerActivity',
          action: 'back',
          matches:
            '@WebView[text="签到弹窗"][visibleToUser=true] < WebView < FrameLayout < LinearLayout < RelativeLayout < [id="android:id/content"]',
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
      name: '局部广告-感兴趣的吧推广',
      desc: '关闭首页和吧内的贴吧推荐',
      rules: [
        {
          key: 0,
          fastQuery: true,
          activityIds: ['.tblauncher.MainTabActivity', '.forum.ForumActivity'],
          matches:
            '@ImageView[childCount=0][clickable=true][visibleToUser=true] - [text="你可能感兴趣的吧" || text^="本吧的人都在逛"]',
          snapshotUrls: [
            'https://i.gkd.li/i/16914357',
            'https://i.gkd.li/i/17944680',
            'https://i.gkd.li/i/18218517',
          ],
        },
      ],
    },
  ],
});
