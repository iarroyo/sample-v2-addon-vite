import type { TOC } from '@ember/component/template-only';
import ENVIRONMENT from '#src/environment.ts';

export const AddonInfo: TOC<{ Element: Element }> = <template>
  Addon Name {{ENVIRONMENT.APP.ADDON_NAME}}
</template>;
export default AddonInfo;
