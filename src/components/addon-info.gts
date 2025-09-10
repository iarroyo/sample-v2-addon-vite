import type { TOC } from '@ember/component/template-only';
import config from 'ember-get-config';
import type { ENVIRONMENT } from '#src/environment.ts';

const ENV = config as ENVIRONMENT;

export const AddonInfo: TOC<{ Element: Element }> = <template>
  Addon Name {{ENV.APP.ADDON_NAME}}
</template>;
export default AddonInfo;
