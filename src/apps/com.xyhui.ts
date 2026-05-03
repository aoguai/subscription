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
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@View[clickable=true] < FrameLayout +4 * >2 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13259183',
        },
        {
          key: 5,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '[text="反馈"] + @View[visibleToUser=true] > Image',
          snapshotUrls: 'https://i.gkd.li/i/14560546',
        },
        {
          key: 8,
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches:
            '@Image[childCount=0][text=""] < View[childCount=1] < View[childCount=1] - View[childCount=1] > [text="反馈"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/22863858',
        },
        {
          key: 9,
          fastQuery: true,
          activityIds: [
            'com.anythink.basead.ui.ATPortraitTranslucentActivity',
            'com.smartdigimkt.sdk.basead.ui.ATPortraitTranslucentActivity',
            'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          ],
          matches:
            '[vid="anythink_myoffer_btn_close_id" || vid="sdm_myoffer_btn_close_id" || vid="beizi_interstitial_ad_close_iv"]',
          snapshotUrls: [
            'https://i.gkd.li/i/22868736',
            'https://i.gkd.li/i/23293759',
            'https://i.gkd.li/i/23577343',
          ],
        },
        {
          key: 10,
          fastQuery: true,
          activityIds: '.lut.act.LutMainActivity',
          matches: '@[text="关闭"] < * +n * >(1,2) [text*="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/23125533',
            'https://i.gkd.li/i/23577305',
          ],
        },
        {
          key: 11,
          fastQuery: true,
          activityIds: '.lut.act.LutMainActivity',
          matches:
            '@ImageView[width<140 && height<140] - * > [text^="请允许"][text$="安装应用"]',
          snapshotUrls: 'https://i.gkd.li/i/23125594',
        },
        {
          key: 13,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          matches:
            '@ImageView[width<100 && height<100] <<4 * + * >4 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/23567050',
        },
      ],
    },
  ],
});
