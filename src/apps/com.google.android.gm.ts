import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.gm',
  name: 'Gmail',
  groups: [
    {
      key: 2,
      name: '分段广告-信息流广告',
      desc: '点击广告选项并完成屏蔽操作',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 1,
          actionMaximum: 1,
          matches:
            '[vid="basic_ad_teaser_info_icon" || vid="button_chip_ad_teaser_info_icon"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13255698', // 旧快照 节点还未引进 vid 属性
            'https://i.gkd.li/i/25542293',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '②点击[屏蔽]',
          action: 'clickCenter', // 此界面不接受无障碍事件
          anyMatches: [
            '@Button[text="屏蔽此广告" || text^="Block"][clickable=true] <<n [vid="my_ad_center_dialog"]',
            '@Button[desc="屏蔽"][clickable=true] <<n [vid="my_ad_center_dialog"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13255700', // 屏蔽此广告
            'https://i.gkd.li/i/13724271', // Block
            'https://i.gkd.li/i/20585351', // 屏蔽
          ],
        },
        {
          preKeys: [2],
          key: 3,
          name: '③点击[继续]',
          matches:
            '@Button[text="继续" || text="Continue"][clickable=true] <<n [id="com.google.android.gm:id/my_ad_center_dialog"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13255701', // 继续
            'https://i.gkd.li/i/13724287', // Continue
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '④x掉',
          matches: '[vid="my_ad_center_close_icon"][clickable=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/13263279',
            'https://i.gkd.li/i/25543406',
          ],
        },
      ],
    },
  ],
});
