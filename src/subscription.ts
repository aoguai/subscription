import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 86,
  name: '奥怪的GKD订阅',
  version: 0,
  author: 'aoguai',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/aoguai/subscription/tree/custom',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
