import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xyhui',
  name: 'PU口袋校园',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '关闭各类全屏弹窗广告',
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
            '.start.LoadingActivity',
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
          activityIds: ['.lut.act.LutMainActivity', '.start.LoadingActivity'],
          matches:
            '@ImageView[desc.length=null][clickable=false] < ViewGroup[childCount=1] <<(36,37) [id$="ksad_tk_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/17690703',
            'https://i.gkd.li/i/17690704',
          ],
        },
        {
          key: 6,
          name: '拼多多广告2',
          activityIds: ['.lut.act.LutMainActivity', '.start.LoadingActivity'],
          fastQuery: true,
          matches: '@[desc="top_close_button"] <<n [id$="ksad_tk_view"]',
          snapshotUrls: [
            'https://i.gkd.li/i/18810025',
            'https://i.gkd.li/i/18245369',
            'https://i.gkd.li/i/18501469',
            'https://i.gkd.li/i/18807884',
            'https://i.gkd.li/i/18810035',
          ],
        },
        {
          key: 7,
          name: '拼多多广告3',
          activityIds: ['.lut.act.LutMainActivity', '.start.LoadingActivity'],
          fastQuery: true,
          matches: '[vid="ksad_auto_close_btn"]',
          snapshotUrls: ['https://i.gkd.li/i/18807624'],
        },
        {
          key: 8,
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches:
            '@Image[childCount=0][text=""] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text="反馈"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22863858',
        },
      ],
    },
  ],
});
