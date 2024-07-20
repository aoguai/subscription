import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      enable: false,
      rules: [
        {
          key: 1,
          name: '腾讯广告',
          activityIds: [
            'com.xyhui.start.PUMainActivity',
            'com.xyhui.start.LoadingActivity',
            'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity',
          ],
          matches:
            '[id="android:id/content"] >(4,5) @FrameLayout[index=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/import/12642482',
            'https://i.gkd.li/import/12646519',
            'https://i.gkd.li/import/12868369',
            'https://i.gkd.li/import/12646541', // 华为手机的快照，activityId = 'com.huawei.permissioncontroller.hwcust.appjump.AppJumpActivity'
            'https://i.gkd.li/import/13695488',
            'https://i.gkd.li/import/12643276',
            'https://i.gkd.li/import/12868503',
            'https://i.gkd.li/import/12646420',
            'https://i.gkd.li/import/13259194',
            'https://i.gkd.li/import/12793180',
            'https://i.gkd.li/import/12646347',
            'https://i.gkd.li/import/12793157',
            'https://i.gkd.li/import/12793177',
            'https://i.gkd.li/import/12868157', // com.xyhui.start.LoadingActivity
            'https://i.gkd.li/import/13348807', // com.bbk.launcher2.Launcher
            'https://i.gkd.li/i/14766902',
          ],
        },
        {
          key: 2,
          name: '快手广告',
          activityIds: 'com.xyhui.start.LoadingActivity',
          matches:
            'ImageView < @ViewGroup[clickable=true] < * <2 * + * >3 [text="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13259196',
            'https://i.gkd.li/import/13259198',
          ],
        },
        {
          key: 3,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '*[childCount=5] - *[childCount=5] < * < * -n * > [name$=".View"||name$=".Image"][text=""||text=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/13259183',
            'https://i.gkd.li/i/16319383',
          ],
        },
        {
          key: 4,
          name: '美数广告',
          activityIds: 'com.meishu.sdk.activity.SdkInterstitialActivity',
          matches: '[vid~="(?is).*ms_activity_sdk_interstitial_cacel"]',
          snapshotUrls: 'https://i.gkd.li/i/16216011',
        },
      ],
    },
  ],
});
