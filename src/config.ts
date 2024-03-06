import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import type { RawSubscription } from '@gkd-kit/api';

const subsConfig: RawSubscription = {
  id: 86,
  version: 0,
  name: '奥怪的GKD订阅',
  author: 'aoguai',
  supportUri: 'https://github.com/aoguai/subscription/tree/custom',
  updateUrl:
    'https://raw.githubusercontent.com/aoguai/subscription/custom/dist/aoguai_gkd.json5',
  checkUpdateUrl:
    'https://raw.githubusercontent.com/aoguai/subscription/custom/dist/aoguai_gkd.version.json',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
