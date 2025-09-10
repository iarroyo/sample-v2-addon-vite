import Route from '@ember/routing/route';
import { registerDestructor } from '@ember/destroyable';
import { htmlSafe } from '@ember/template';
//import { DEBUG } from '@glimmer/env';

export default class ApplicationRoute extends Route {
  async beforeModel() {
    // Don't include MSW in production, only in DEBUG (tests, development)
    //if (DEBUG) {
    await setupMSW(this);
    //}
  }

  async model() {
    const response = await fetch('/addon-info');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, version } = await response.json();
    return htmlSafe(`Addon Info: ${name} - ${version}`);
  }
}

async function setupMSW(context: ApplicationRoute) {
  const { worker } = await import('sample-v2-addon-vite/mocks/browser.js');

  await worker.start();

  // Prevent duplication in tests,
  // where the app is setup and torn down a lot
  registerDestructor(context, () => worker.stop());
}
