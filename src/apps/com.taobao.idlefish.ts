import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '通知提示',
      desc: '关闭消息推送开启提示',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: [
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
        '.maincontainer.activity.MainActivity',
      ],
      rules:
        '[desc^="开启系统通知"||desc^="开启消息通知"] > ImageView[clickable=true][desc=null]',
      snapshotUrls: 'https://i.gkd.li/import/13538351',
    },
    {
      key: 4,
      name: '全屏广告-红包弹窗',
      desc: '关闭首页红包弹窗广告',
      enable: false,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.taobao.idlefish.maincontainer.activity.MainActivity',
      rules:
        'WebView[text="Rax App"] > [id="root"] >6 View[index=2][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/i/14551046',
    },
    {
      key: 5,
      name: '分段广告-信息流广告',
      desc: '通过长按然后点击关闭按钮来移除信息流中的广告',
      enable: false,
      activityIds:
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
      rules: [
        {
          key: 0,
          matches: '@[clickable=true] > [desc$="广告"]',
          excludeMatches: '@[clickable=true] > [desc^="反馈成功"]',
          action: 'longClick',
          snapshotUrls: [
            'https://i.gkd.li/i/14723597',
            'https://i.gkd.li/i/14723718', // excludeMatches
          ],
        },
        {
          key: 1,
          preKeys: 0,
          matches:
            'View[childCount=6] > ImageView[index=1][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/14723632',
            'https://i.gkd.li/i/16486792',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '功能类-自动查看原图',
      desc: '浏览图片时自动切换至原图模式',
      enable: false,
      activityIds:
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
      rules: [
        {
          matches: '[desc="查看原图"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/15463399',
        },
      ],
    },
    {
      key: 7,
      name: '功能类-自动选中发送原图',
      desc: '图片和视频选择器-自动选中底部中间的发送原图',
      actionMaximum: 1,
      rules: [
        {
          activityIds:
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          matches: 'View[childCount=2] > @View[clickable=true] + [desc="原图"]',
          snapshotUrls: 'https://i.gkd.li/i/18824808',
        },
      ],
    },
  ],
});
