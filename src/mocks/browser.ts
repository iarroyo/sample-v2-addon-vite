// src/mocks/browser.js
import { setupWorker } from 'msw';
import { handlers } from 'sample-v2-addon-vite/mocks/handlers.ts';

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers);
