import apps from './rawApps';
import type { RawGlobalGroup } from './types';
import { OPEN_AD_ORDER } from './utils';

const diabledAppIds: string[] = [
  'com.android.systemui', // 通知栏界面/下拉开关/控制中心
  'com.android.settings', // 系统设置
  'com.android.mms', // 短信/信息
  'com.android.phone', // 拨号
  'com.android.incallui', // 通话
  'com.android.contacts', // 联系人/电话簿
  'com.android.providers.Telephony', // 电话和短信存储
  'com.android.phone.recorder', // 录音
  'com.android.soundrecorder', // 录音机
  'com.android.server.telecom', // 来电拒接短信服务

  // 在一些常见的应用中禁用
  'com.tencent.mm', // 微信
  'li.songe.gkd',

  // 小米系
  'com.miui.aod', // miui 锁屏界面
  'miui.systemui.plugin', // miui 状态栏界面
  'com.miui.securityadd', // 系统服务组件

  // 华为系
  'com.huawei.android.launcher', // 桌面
  'com.huawei.mediacontroller', // 音频播控中心

  // 荣耀系
  'com.hihonor.android.launcher', // 桌面

  // OPPO 系
  'com.oppo.launcher', // 桌面

  // VIVO 系
  'com.bbk.launcher2', // 桌面

  // 一加系
  'net.oneplus.launcher', // 桌面

  // 三星系
  'com.sec.android.app.launcher', // 桌面

  // https://github.com/gkd-kit/gkd/issues/451
  'mark.via',
  'com.mycompany.app.soulbrowser',
  'com.mmbox.xbrowser',
];

function filterAppsByGroup(apps: any[], groupNamePrefix: string): string[] {
  return apps
    .filter((a) =>
      a.groups.some(
        (g: { name: string; enable: boolean }) =>
          g.name.startsWith(groupNamePrefix) && g.enable !== false,
      ),
    )
    .map((a) => a.id);
}

const uniqueAppIdsAd = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '开屏广告'),
]);
const uniqueAppIdsUp = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '更新提示'),
]);

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    order: OPEN_AD_ORDER,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        quickFind: true,
        matches: '[text*="跳过"][text.length<10][visibleToUser=true]',
      },
      {
        key: -1,
        matches:
          '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳過"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: [...uniqueAppIdsAd].map((id) => ({ id, enable: false })),
  },
  {
    key: 1,
    name: '更新提示',
    order: OPEN_AD_ORDER,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches:
          '[childCount=0][visibleToUser=true][text$="更新"||text$="升级"||text$="体验"||text$="升級"||text$="體驗"||text$="Update"||text$="Upgrade"||text$="Experience"] <n * > [childCount=0][visibleToUser=true][text$="再说"||text="忽略"||text^="暂不"||text="取消"||text$="再說"||text$="暫不"||text$="Later"||text="Ignore"||text^="Not now"||text="Cancel"]',
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: [...uniqueAppIdsUp].map((id) => ({ id, enable: false })),
  },
];
export default globalGroups;
