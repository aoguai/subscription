import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '通知提示',
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds:
        'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
      rules: '[desc^="开启系统通知"] > ImageView[clickable=true][desc=null]',
      snapshotUrls: 'https://i.gkd.li/import/13538351',
    },
    {
      key: 4,
      name: '全屏广告-红包弹窗',
      desc: '点击关闭',
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
  ],
});
