import type { TOC } from '@ember/component/template-only';
//import config from 'ember-get-config';
import { RemoteData } from 'reactiveweb/remote-data';
import { ENVIRONMENT } from 'sample-v2-addon-vite/environment.ts';

//const ENV = config as ENVIRONMENT;

const RemoteAddonInfo = RemoteData<{ name: string }>;

export const AddonInfo: TOC<{ Element: Element }> = <template>
  {{!-- {{ENV.APP.ADDON_NAME}} --}}
  <p>
    {{ENVIRONMENT.APP.ADDON_NAME}}
  </p>
  {{#let (RemoteAddonInfo "/addon-info") as |request|}}
    {{#if request.isLoading}}...loading
    {{else if request.value}}
      Addon Name:
      {{request.value.name}}
    {{/if}}
  {{/let}}
</template>;
export default AddonInfo;
