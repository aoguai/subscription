import apps from './rawApps';
import type { RawGlobalGroup } from './types';
import * as utils from './utils';

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
const uniqueAppIdsRp = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '评价提示'),
]);

const COMMON_PREFIX = '[childCount=0][visibleToUser=true]';

const NEGATION_PART_RULE_TEXT = `${COMMON_PREFIX}[((text^="不"&&text$="谢谢")||text="否"||text="关闭"||text="不开启"||text="暂时不用"||text="先不了"||text="不允许"||text^="不了"||text^="不再"||text^="忽略"||text^="暂不"||text^="放弃"||text^="取消"||text$="再说"||text$="拒绝"||text$="再想想"||text$="知道了"||(text^="不"&&text$="謝謝")||text="關閉"||text="不開啟"||text="關閉"||text$="再說"||text$="拒絕"||text^="暫不"||text="close"||text="not now"||text^="Ignore"||text^="Cancel"||text$="later"||text$="refuse"||text$="I see")&&text.length<=7]`;
const NEGATION_PART_RULE_DESC = `${COMMON_PREFIX}[((desc^="不"&&desc$="谢谢")||desc="否"||desc="关闭"||desc="不开启"||desc="暂时不用"||desc="先不了"||desc="不允许"||desc^="不了"||desc^="不再"||desc^="忽略"||desc^="暂不"||desc^="放弃"||desc^="取消"||desc$="再说"||desc$="拒绝"||desc$="再想想"||desc$="知道了"||(desc^="不"&&desc$="謝謝")||desc="關閉"||desc="不開啟"||desc="關閉"||desc$="再說"||desc$="拒絕"||desc^="暫不"||desc="close"||desc="not now"||desc^="Ignore"||desc^="Cancel"||desc$="later"||desc$="refuse"||desc$="I see")&&desc.length<=7]`;

const RP_commonTextPatterns =
  '[text$="好评"||text$="鼓励一下"||text="马上评价"||text$="好評"||text$="鼓勵一下"||text$="马上評價"]';
const RP_commonDescPatterns =
  '[desc$="好评"||desc$="鼓励一下"||desc="马上评价"||desc$="好評"||desc$="鼓勵一下"||desc$="马上評價"]';

const globalGroups: RawGlobalGroup[] = [
  {
    key: 0,
    name: '开屏广告',
    order: utils.OPEN_AD_ORDER,
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
    enable: false,
    order: utils.UPDATE_PROMPT,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: [
          '[childCount=0][visibleToUser=true][text$="新版本"||text$="更新"||text$="升级"||text$="体验"||text$="升級"||text$="體驗"||text$="Update"||text$="Upgrade"||text$="Experience"] <n * > ',
          NEGATION_PART_RULE_TEXT,
        ].join(''),
      },
      {
        key: 1,
        matches: [
          '[childCount=0][visibleToUser=true][desc$="新版本"||desc$="更新"||desc$="升级"||desc$="体验"||desc$="升級"||desc$="體驗"||desc$="Update"||desc$="Upgrade"||desc$="Experience"] <n * > ',
          NEGATION_PART_RULE_DESC,
        ].join(''),
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: [...uniqueAppIdsUp].map((id) => ({ id, enable: false })),
  },
  {
    key: 2,
    name: '评价提示',
    enable: false,
    order: utils.REVIEW_PROMPT,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: `${COMMON_PREFIX}${RP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 1,
        matches: `${COMMON_PREFIX}${RP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 2,
        matches: `${COMMON_PREFIX}${RP_commonTextPatterns} <n * <n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 3,
        matches: `${COMMON_PREFIX}${RP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 4,
        matches: `${COMMON_PREFIX}${RP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 5,
        matches: `${COMMON_PREFIX}${RP_commonDescPatterns} <n * <n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: [...uniqueAppIdsUp].map((id) => ({ id, enable: false })),
  },
];
export default globalGroups;
