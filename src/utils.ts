export const tryRun = <T>(fc: () => T, fallbackFc: (e: unknown) => T) => {
  try {
    return fc();
  } catch (e) {
    return fallbackFc(e);
  }
};

export const OPEN_AD_ORDER = -10; // 开屏广告
export const YOUTH_MODE = -9; // 青少年模式
export const UPDATE_PROMPT = -8; // 更新提示
export const REVIEW_PROMPT = -7; // 评价提示
export const NOTIFICATION_PROMPT = -6; // 通知提示
export const LOCATION_PROMPT = -5; // 定位提示
export const PERMISSION_PROMPT = -4; // 权限提示
export const PARTIAL_AD = -3; // 局部广告
export const FULLSCREEN_AD = -2; // 全屏广告
export const SEGMENTED_AD = -1; // 分段广告
