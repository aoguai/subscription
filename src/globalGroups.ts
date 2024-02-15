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

  'com.google.ar.core', // 谷歌AR服务
  'com.google.android.syncadapters.calendar', // 谷歌日历同步

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
    .filter(
      (a) =>
        a.groups.filter((g: { name: string }) =>
          g.name.startsWith(groupNamePrefix),
        ).length === 1,
    )
    .map((a) => a.id);
}

const uniqueAppIdsAD = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '开屏广告'),
]);
const uniqueAppIdsUP = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '更新提示'),
]);
const uniqueAppIdsYM = new Set([
  ...diabledAppIds,
  ...filterAppsByGroup(apps, '青少年模式'),
]);

const COMMON_PREFIX = '[childCount=0][visibleToUser=true]';

const NEGATION_PART_RULE_TEXT = `${COMMON_PREFIX}[((text^="不"&&text$="谢谢")||text="否"||text="关闭"||text="关闭按钮"||text="不开启"||text="暂时不用"||text="不用了"||text="考虑一下"||text="考慮一下"||text="先不了"||text="不允许"||text^="不了"||text^="不再"||text^="忽略"||text^="暂不"||text^="放弃"||text^="取消"||text$="再说"||text$="拒绝"||text$="再想想"||text$="知道了"||(text^="不"&&text$="謝謝")||text="關閉"||text="關閉按鈕"||text="不開啟"||text$="再說"||text$="拒絕"||text^="暫不"||text="close"||text="Close"||text="Not now"||text="not now"||text^="Ignore"||text^="Lgnore"||text^="Cancel"||text^="cancel"||text$="later"||text$="Later"||text$="refuse"||text$="Refuse"||text$="i see"||text$="I see")&&text.length<=7]`;
const NEGATION_PART_RULE_DESC = `${COMMON_PREFIX}[((desc^="不"&&desc$="谢谢")||desc="否"||desc="关闭"||desc="关闭按钮"||desc="不开启"||desc="暂时不用"||desc="不用了"||desc="考虑一下"||desc="考慮一下"||desc="先不了"||desc="不允许"||desc^="不了"||desc^="不再"||desc^="忽略"||desc^="暂不"||desc^="放弃"||desc^="取消"||desc$="再说"||desc$="拒绝"||desc$="再想想"||desc$="知道了"||(desc^="不"&&desc$="謝謝")||desc="關閉"||desc="關閉按鈕"||desc="不開啟"||desc$="再說"||desc$="拒絕"||desc^="暫不"||desc="close"||desc="Close"||desc="Not now"||desc="not now"||desc^="Ignore"||desc^="Lgnore"||desc^="Cancel"||desc^="cancel"||desc$="later"||desc$="Later"||desc$="refuse"||desc$="Refuse"||desc$="i see"||desc$="I see")&&desc.length<=7]`;
const NEGATION_PART_RULE_BUTTON = `${COMMON_PREFIX}[(id*="iv"||id*="guide"||id*="alert"||id*="Notific"||id*="dialog"||id*="btn"||id*="ad"||id*="ab")&&(id$="close"||id$="Close"||id$="Delete"||id$="delete"||id$="cancel"||id$="Cancel"||id$="cancle"||id$="Cancle"||id$="exit"||id$="Exit")||id*="/close"||id*="/Close"||id*="/ab"||id*="/deleteIv"||id*="_close"||id*="_Close"||text=""||desc=""||text="×"||desc="×"||text="퀺"||desc="퀺"]`;

const UP_commonTextPatterns =
  '[text^="测试版"||text^="新版本"||text^="新版"||text^="更新"||text^="升级"||text^="体验"||text^="升級"||text^="體驗"||text^="Update"||text^="Upgrade"||text^="Experience"||text$="测试版"||text$="新版本"||text$="新版"||text$="更新"||text$="升级"||text$="体验"||text$="升級"||text$="體驗"||text$="Update"||text$="Upgrade"||text$="Experience"]';
const UP_commonDescPatterns =
  '[desc^="测试版"||desc^="新版本"||desc^="新版"||desc^="更新"||desc^="升级"||desc^="体验"||desc^="升級"||desc^="體驗"||desc^="Update"||desc^="Upgrade"||desc^="Experience"||desc$="测试版"||desc$="新版本"||desc$="新版"||desc$="更新"||desc$="升级"||desc$="体验"||desc$="升級"||desc$="體驗"||desc$="Update"||desc$="Upgrade"||desc$="Experience"]';

const RP_commonTextPatterns =
  '[text$="好评"||text$="鼓励一下"||text="马上评价"||text$="好評"||text$="鼓勵一下"||text$="马上評價"]';
const RP_commonDescPatterns =
  '[desc$="好评"||desc$="鼓励一下"||desc="马上评价"||desc$="好評"||desc$="鼓勵一下"||desc$="马上評價"]';

const NP_commonTextPatterns =
  '[(text*="申请"||text*="开启"||text*="打开"||text*="获取"||text*="订阅"||text*="接收"||text*="Turn on"||text*="turn on")&&(text*="通知"||text*="推送"||text*="notifications"||text*="Notifications")&&(text!*="定位"&&text!*="位置"&&text!*="location"&&text!*="权限")]';
const NP_commonDescPatterns =
  '[(desc*="申请"||desc*="开启"||desc*="打开"||desc*="获取"||desc*="订阅"||desc*="接收"||desc*="Turn on"||desc*="turn on")&&(desc*="通知"||desc*="推送"||desc*="notifications"||desc*="Notifications")&&(desc!*="定位"&&desc!*="位置"&&desc!*="location"&&desc!*="权限")]';

const YM_commonTextPatterns =
  '[text*="青少年模式"||(text*="未成年"&&text*="模式")||text*="儿童模式"]';
const YM_commonDescPatterns =
  '[desc*="青少年模式"||(desc*="未成年"&&desc*="模式")||desc*="儿童模式"]';

const PP_commonTextPatterns =
  '[(text*="申请"||text*="开启"||text*="打开"||text*="获取")&&text*="权限"&&(text!*="定位"&&text!*="位置"&&text!*="location"&&text!*="通知")]';
const PP_commonDescPatterns =
  '[(desc*="申请"||desc*="开启"||desc*="打开"||desc*="获取")&&desc*="权限"&&(desc!*="定位"&&desc!*="位置"&&desc!*="location"&&desc!*="通知")]';

const LP_commonTextPatterns =
  '[(text*="访问"||text*="申请"||text*="开启"||text*="打开"||text*="获取")&&(text*="定位"||text*="位置"||text*="location")&&text!*="通知"]';
const LP_commonDescPatterns =
  '[(desc*="访问"||desc*="申请"||desc*="开启"||desc*="打开"||desc*="获取")&&(desc*="定位"||desc*="位置"||desc*="location")&&desc!*="通知"]';

const PA_commonTextPatterns =
  '[text^="广告"||text$="广告"||text^="廣告"||text$="廣告"||text$="限时福利"||text^="热门活动"||text$="热门活动"||text$="限時福利"||text^="限时福利"||text^="限時福利"||((text$="AD"||text="ad")&&((text!*="download"&&text!*="Download"&&text!*="DOWNLOAD")&&(text!*="read"&&text!*="Read"&&text!*="READ")))||(text*="申请"||text*="开启"||text*="打开"||text*="获取"||text*="订阅"||text*="接收"||text*="Turn on")&&(text*="个性化"||text*="推荐"||text*="感兴趣"||text*="個性化"||text*="推薦"||text*="感興趣"||text*="感興趣")]';
const PA_commonDescPatterns =
  '[desc^="广告"||desc$="广告"||desc^="廣告"||desc$="廣告"||desc$="限时福利"||desc^="热门活动"||desc$="热门活动"||desc$="限時福利"||desc^="限时福利"||desc^="限時福利"||((desc$="AD"||desc="ad")&&((desc!*="download"&&desc!*="Download"&&desc!*="DOWNLOAD")&&(desc!*="read"&&desc!*="Read"&&desc!*="READ")))||(desc*="申请"||desc*="开启"||desc*="打开"||desc*="获取"||desc*="订阅"||desc*="接收"||desc*="Turn on")&&(desc*="个性化"||desc*="推荐"||desc*="感兴趣"||desc*="個性化"||desc*="推薦"||desc*="感興趣"||desc*="感興趣")]';

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
    apps: [...uniqueAppIdsAD].map((id) => ({ id, enable: false })),
  },
  {
    key: 1,
    name: '全屏广告',
    enable: false,
    order: utils.FULLSCREEN_AD,
    matchTime: 10000,
    resetMatch: 'activity',
    rules: [
      {
        key: 0,
        name: '快手SDK-类型1',
        matches: `[text="广告"] <<n ViewGroup >n ViewGroup[childCount=1][clickable=true] > ImageView${COMMON_PREFIX}`,
      },
      {
        key: 1,
        name: '快手SDK-类型2',
        matches: `[text="广告"] <<n ViewGroup >n ViewGroup[childCount=4][clickable=true] > [text="跳过"]${COMMON_PREFIX}`,
      },
      {
        key: 2,
        name: '快手SDK-类型3',
        matches: `[text="广告"]  <<n ViewGroup +2 ViewGroup[childCount=3][checked=false] >n ImageView${COMMON_PREFIX}`,
      },
      {
        key: 3,
        name: '字节SDK-类型1',
        matches: `[id$="tt_reward_full_count_down_after_close"]${COMMON_PREFIX}`,
      },
      {
        key: 4,
        name: '字节SDK-类型2',
        matches: `[id$="ad_flag_source_layout"] + [id$="iv_close"]${COMMON_PREFIX}`,
      },
      {
        key: 5,
        name: '美数SDK-类型1',
        matches: `[id$="ms_activity_sdk_interstitial_cacel"]${COMMON_PREFIX}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
  {
    key: 2,
    name: '局部广告',
    enable: false,
    order: utils.PARTIAL_AD,
    matchTime: 10000,
    resetMatch: 'activity',
    rules: [
      {
        key: 0,
        matches: `[(((id*="/ad"||id*="/AD"||id$="ad"||id$="Ad"||id$="AD")&&id*="_")||id$="/adIv"||id$="_ad_"||id$="_Ad_"||id$="_AD_")&&(id!*="download"&&id!*="Download"&&id!*="DOWNLOAD")&&(id!*="read"&&id!*="Read"&&id!*="READ")] <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 1,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <n * > ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 2,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 3,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 4,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <n * > ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 5,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 6,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 7,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 8,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 9,
        matches: `${COMMON_PREFIX}${PA_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 10,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 11,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 12,
        matches: `${COMMON_PREFIX}${PA_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
  {
    key: 3,
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
        matches: `${COMMON_PREFIX}${UP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 1,
        matches: `${COMMON_PREFIX}${UP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 2,
        matches: `${COMMON_PREFIX}${UP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 3,
        matches: `${COMMON_PREFIX}${UP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 4,
        matches: `${COMMON_PREFIX}${UP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 5,
        matches: `${COMMON_PREFIX}${UP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 6,
        matches: `${COMMON_PREFIX}${UP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 7,
        matches: `${COMMON_PREFIX}${UP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 8,
        matches: `${COMMON_PREFIX}${UP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 9,
        matches: `${COMMON_PREFIX}${UP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 10,
        matches: `${COMMON_PREFIX}${UP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 11,
        matches: `${COMMON_PREFIX}${UP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: [...uniqueAppIdsUP].map((id) => ({ id, enable: false })),
  },
  {
    key: 4,
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
        matches: `${COMMON_PREFIX}${RP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
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
        matches: `${COMMON_PREFIX}${RP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 6,
        matches: `${COMMON_PREFIX}${RP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 7,
        matches: `${COMMON_PREFIX}${RP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 8,
        matches: `${COMMON_PREFIX}${RP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 9,
        matches: `${COMMON_PREFIX}${RP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 10,
        matches: `${COMMON_PREFIX}${RP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 11,
        matches: `${COMMON_PREFIX}${RP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
  {
    key: 5,
    name: '通知提示',
    enable: false,
    order: utils.NOTIFICATION_PROMPT,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: `${COMMON_PREFIX}${NP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 1,
        matches: `${COMMON_PREFIX}${NP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 2,
        matches: `${COMMON_PREFIX}${NP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 3,
        matches: `${COMMON_PREFIX}${NP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 4,
        matches: `${COMMON_PREFIX}${NP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 5,
        matches: `${COMMON_PREFIX}${NP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 6,
        matches: `${COMMON_PREFIX}${NP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 7,
        matches: `${COMMON_PREFIX}${NP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 8,
        matches: `${COMMON_PREFIX}${NP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 9,
        matches: `${COMMON_PREFIX}${NP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 10,
        matches: `${COMMON_PREFIX}${NP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 11,
        matches: `${COMMON_PREFIX}${NP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
  {
    key: 6,
    name: '青少年模式',
    enable: false,
    order: utils.YOUTH_MODE,
    actionMaximum: 2,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: `${COMMON_PREFIX}${YM_commonTextPatterns} <n * > ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 1,
        matches: `${COMMON_PREFIX}${YM_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 2,
        matches: `${COMMON_PREFIX}${YM_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 3,
        matches: `${COMMON_PREFIX}${YM_commonDescPatterns} <n * > ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 4,
        matches: `${COMMON_PREFIX}${YM_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 5,
        matches: `${COMMON_PREFIX}${YM_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 6,
        matches: `${COMMON_PREFIX}${YM_commonTextPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 7,
        matches: `${COMMON_PREFIX}${YM_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 8,
        matches: `${COMMON_PREFIX}${YM_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 9,
        matches: `${COMMON_PREFIX}${YM_commonDescPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 10,
        matches: `${COMMON_PREFIX}${YM_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 11,
        matches: `${COMMON_PREFIX}${YM_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: [...uniqueAppIdsYM].map((id) => ({ id, enable: false })),
  },
  {
    key: 7,
    name: '权限提示',
    desc: '! 该规则会自动拒绝 APP 一些权限申请弹窗提示，如果有影响请关闭',
    enable: false,
    order: utils.YOUTH_MODE,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: `${COMMON_PREFIX}${PP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 1,
        matches: `${COMMON_PREFIX}${PP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 2,
        matches: `${COMMON_PREFIX}${PP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 3,
        matches: `${COMMON_PREFIX}${PP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 4,
        matches: `${COMMON_PREFIX}${PP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 5,
        matches: `${COMMON_PREFIX}${PP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 6,
        matches: `${COMMON_PREFIX}${PP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 7,
        matches: `${COMMON_PREFIX}${PP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 8,
        matches: `${COMMON_PREFIX}${PP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 9,
        matches: `${COMMON_PREFIX}${PP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 10,
        matches: `${COMMON_PREFIX}${PP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 11,
        matches: `${COMMON_PREFIX}${PP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
  {
    key: 8,
    name: '定位提示',
    desc: '! 该规则会自动拒绝 APP 的位置权限申请弹窗提示，如果有影响请关闭',
    enable: false,
    order: utils.LOCATION_PROMPT,
    matchTime: 10000,
    resetMatch: 'app',
    actionCdKey: 0,
    actionMaximumKey: 0,
    rules: [
      {
        key: 0,
        matches: `${COMMON_PREFIX}${LP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 1,
        matches: `${COMMON_PREFIX}${LP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 2,
        matches: `${COMMON_PREFIX}${LP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_TEXT}`,
      },
      {
        key: 3,
        matches: `${COMMON_PREFIX}${LP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 4,
        matches: `${COMMON_PREFIX}${LP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 5,
        matches: `${COMMON_PREFIX}${LP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_DESC}`,
      },
      {
        key: 6,
        matches: `${COMMON_PREFIX}${LP_commonTextPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 7,
        matches: `${COMMON_PREFIX}${LP_commonTextPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 8,
        matches: `${COMMON_PREFIX}${LP_commonTextPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 9,
        matches: `${COMMON_PREFIX}${LP_commonDescPatterns} <n * > ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 10,
        matches: `${COMMON_PREFIX}${LP_commonDescPatterns} <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
      {
        key: 11,
        matches: `${COMMON_PREFIX}${LP_commonDescPatterns} <<n * <n * > * >n ${NEGATION_PART_RULE_BUTTON}`,
      },
    ],
    // 将 Set 转换为数组，并设置 enable 为 false
    apps: diabledAppIds.map((id) => ({ id, enable: false })),
  },
];
export default globalGroups;
