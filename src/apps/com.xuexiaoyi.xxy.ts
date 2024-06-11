import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xuexiaoyi.xxy',
  name: '学小易',
  groups: [
    {
      key: 1,
      name: '分段广告-首页信息流广告',
      enable: false,
      activityIds: [
        'com.xuexiaoyi.entrance.main.MainActivity',
        'com.xuexiaoyi.platform.base.arch.RouterFragmentActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
      ],
      rules: [
        {
          key: 0,
          name: '点击在下方的X',
          matches: [
            '[text="广告"] < View <2 View <n View[childCount>4] > View[childCount=1] > Image[text.length=0]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13068836',
            'https://i.gkd.li/import/13375502',
            'https://i.gkd.li/import/13375559',
            'https://i.gkd.li/i/14472483',
            'https://i.gkd.li/i/15521090',
          ],
        },
        {
          key: 1,
          name: '点击在下方的X-2',
          matches: ['[text="广告"] <<n FrameLayout > [desc^="dislike"] > View'],
          snapshotUrls: ['https://i.gkd.li/i/15782668'],
        },
        {
          key: 2,
          name: '点击在上方的X-类型1',
          matches: [
            'Image[text.length>=20] < View < View + View > Image[text.length=0]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/import/13068811',
            'https://i.gkd.li/import/13202990',
            'https://i.gkd.li/import/13266356',
            'https://i.gkd.li/import/13266362',
            'https://i.gkd.li/import/13457114',
            'https://i.gkd.li/import/13457204',
          ],
        },
        {
          key: 3,
          name: '点击在上方的X-类型2',
          matches: [
            '[text.length>=2&&text.length<=6] < FrameLayout -n FrameLayout > View',
          ],
          snapshotUrls: ['https://i.gkd.li/import/13266689'],
        },
        {
          key: 4,
          name: '点击在内部的X',
          matches: 'View[text.length=4] - View > View > Image[text.length=0]',
          snapshotUrls: [
            'https://i.gkd.li/import/13457210',
            'https://i.gkd.li/import/13457302',
          ],
        },
        {
          key: 5,
          name: '点击[反馈]',
          matches:
            '[text="广告"][visibleToUser=true] < * <n View +n [text="反馈"][visibleToUser=true]',
          snapshotUrls: ['https://i.gkd.li/i/14965789'],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5],
          key: 10,
          name: '点击不感兴趣',
          quickFind: true,
          matches: 'TextView[text="不感兴趣"]',
          snapshotUrls: [
            'https://i.gkd.li/import/13068819',
            'https://i.gkd.li/import/13457380',
            'https://i.gkd.li/i/14965790',
          ],
        },
      ],
    },
  ],
});
