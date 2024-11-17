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
          key: 3,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches:
            '*[childCount=5] - *[childCount=5] < * < * -n @* > [name$=".View"||name$=".Image"][text=""||text=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/13259183',
            'https://i.gkd.li/i/16319383',
          ],
        },
        {
          key: 4,
          name: '倍孜广告',
          fastQuery: true,
          activityIds: [
            'com.beizi.ad.internal.activity.BeiZiInterstitialActivity',
            '.lut.act.LutMainActivity',
          ],
          matches: '[vid="beizi_interstitial_ad_close_iv"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17391799',
            'https://i.gkd.li/i/17690662',
          ],
        },
        {
          key: 5,
          name: '拼多多广告',
          fastQuery: true,
          activityIds: ['.lut.act.LutMainActivity'],
          matches:
            '@ImageView[desc.length=null][clickable=false] < ViewGroup[childCount=1] <<(36,37) [id="com.kwad.dy.sdk:id/ksad_tk_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17690703',
            'https://i.gkd.li/i/17690704',
          ],
        },
      ],
    },
  ],
});
