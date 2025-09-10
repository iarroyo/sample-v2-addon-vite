import { name } from '../package.json' with { type: 'json' };

export const ENVIRONMENT = {
  APP: {
    ADDON_NAME: name,
  },
} as const;

export type ENVIRONMENT = typeof ENVIRONMENT;

export default ENVIRONMENT;
