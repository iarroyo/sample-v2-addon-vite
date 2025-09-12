import { name } from '../package.json' with { type: 'json' };

export const ENVIRONMENT = {
  APP: {
    ADDON_NAME: name,
  },
} as const;

export type ENVIRONMENT = typeof ENVIRONMENT;

export default ENVIRONMENT;

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'config:environment': ENVIRONMENT;
  }
}
