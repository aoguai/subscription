import { defineGkdSubscription } from '@gkd-kit/define';
import categories from './categories';
import globalGroups from './globalGroups';
import { RawApp, RawAppGroup } from '@gkd-kit/api';
import { batchImportApps } from '@gkd-kit/tools';
import { OPEN_AD_ORDER } from './globalGroups';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);
const rawApps: RawApp[] = [];
apps.forEach((appConfig) => {
  appConfig.groups?.forEach((g: RawAppGroup) => {
    if (!g.name.startsWith('开屏广告')) {
      g.enable = false;
    } else {
      g.order = OPEN_AD_ORDER;
    }
  });
  rawApps.push(appConfig);
});

export default defineGkdSubscription({
  id: 86,
  name: '奥怪的GKD订阅',
  version: 0,
  author: 'aoguai',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/aoguai/subscription/issues/new/choose',
  categories,
  globalGroups,
  apps: rawApps,
});
