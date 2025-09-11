// Add any types here that you need for local development only.
// These will *not* be published as part of your addon, so be careful that your published code does not rely on them!

import '@glint/environment-ember-loose';
import '@glint/environment-ember-template-imports';
import type EmberIntlRegistry from 'ember-intl/template-registry';

// Uncomment if you need to support consuming projects in loose mode
//

declare module '@glint/environment-ember-loose/registry' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export default interface Registry
    extends EmberIntlRegistry /* other addon registries */ {
    // local entries
  }
}
