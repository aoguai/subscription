import categories from './categories';
import globalGroups from './globalGroups';
import apps from './rawApps';
import { RawSubscription } from '@gkd-kit/api';

const subsConfig: RawSubscription = {
  id: 86,
  version: 0,
  name: '奥怪的GKD订阅',
  author: 'aoguai',
  supportUri: 'https://github.com/aoguai/subscription/tree/custom',
  checkUpdateUrl: './aoguai_gkd.version.json5',
  globalGroups,
  categories,
  apps,
};

export default subsConfig;
