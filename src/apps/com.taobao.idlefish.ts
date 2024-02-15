import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  deprecatedKeys: [2, 3],
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
  ],
});
