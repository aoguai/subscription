import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.smarthome',
  name: '米家',
  groups: [
    {
      key: 0,
      name: '局部广告-各类广告',
      desc: '关闭各类局部广告',
      rules: [
        {
          key: 0,
          name: '卡片广告1',
          activityIds: 'com.xiaomi.smarthome.SmartHomeMainActivity',
          matches:
            'RelativeLayout[childCount=2] > ImageView[id!=null] + ImageView[clickable=true][id!=null]',
          snapshotUrls: 'https://i.gkd.li/i/12639658',
        },
        {
          key: 1,
          name: '顶部横幅1',
          fastQuery: true,
          activityIds: '.framework.plugin.rn.PluginRNActivity',
          matches:
            '@[desc="关闭"] <3 ViewGroup < [visibleToUser=true] <2 [childCount=2] < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/29299389',
        },
      ],
    },
  ],
});
