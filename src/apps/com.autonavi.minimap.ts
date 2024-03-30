import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  deprecatedKeys: [0, 1],
  groups: [
    {
      key: 4,
      name: '功能类-截屏分享',
      desc: '关闭截屏时app弹出的分享弹窗',
      enable: false,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '[text="分享截图至"] < ViewGroup < ViewGroup + @ViewGroup[clickable=true] > ImageView',
      snapshotUrls: 'https://i.gkd.li/import/13473388',
    },
    {
      key: 10,
      name: '通知提示-首页地图页面上方消息提醒',
      enable: false,
      quickFind: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'RelativeLayout[desc="弹窗"] > [id="com.autonavi.minimap:id/msgbox_popup_clear"]',
      snapshotUrls: 'https://i.gkd.li/import/12642830',
    },
    {
      key: 11,
      name: '局部广告-首页广告卡片',
      desc: '关闭首页的所有可关闭的广告卡片',
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        'ViewGroup[index=0][childCount<4] < ViewGroup[childCount<5][visibleToUser=true] > @ViewGroup[index!=0][childCount=1][visibleToUser=true][clickable=true] > ImageView[visibleToUser=true]',
      snapshotUrls: [
        'https://i.gkd.li/import/12642842',
        'https://i.gkd.li/import/12642845',
        'https://i.gkd.li/import/12818770', // 限定 ImageView[visibleToUser=true]，防止控件不可见时触发规则
        'https://i.gkd.li/import/13764540', // 避免在此误触
        'https://i.gkd.li/i/14715295',
        'https://i.gkd.li/i/14730914',
        'https://i.gkd.li/i/14730915',
        'https://i.gkd.li/i/14784970',
      ],
    },
    {
      key: 12,
      name: '全屏广告-加油页面优惠券弹窗',
      enable: false,
      quickFind: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules:
        '@ImageView < [desc="关闭"][clickable=true] <n * > * >n View[text="立即领取"]',
      snapshotUrls: ['https://i.gkd.li/import/12642857'],
    },
    {
      key: 13,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      enable: false,
      quickFind: true,
      activityIds: 'com.autonavi.map.activity.NewMapActivity',
      rules: [
        {
          key: 0,
          name: '【欢迎】弹窗',
          matches:
            'ViewGroup[childCount=6] >4 ViewGroup[childCount=5] > @ImageView + View[text!=null] <<n [vid="fragment_container"]',
          snapshotUrls: 'https://i.gkd.li/i/14800704',
        },
        {
          key: 1,
          name: '签到弹窗',
          matches: '[desc="弹窗"] + [vid="main_map_msg_dialog_close"]',
          snapshotUrls: 'https://i.gkd.li/i/14809993',
        },
      ],
    },
  ],
});
