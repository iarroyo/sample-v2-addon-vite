import Application from '@ember/application';

import Resolver from 'ember-resolver';
import config from './config.ts';
import * as Router from './router.ts';
import * as ApplicationRoute from './routes/application.ts';
import * as PageRoute from './routes/page.ts';
import * as ApplicationTemplate from 'demo-app/templates/application.gts';
import * as PageTemplate from 'demo-app/templates/page.gts';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  Resolver = Resolver.withModules({
    // This App
    'dummy-app/router': Router,
    'dummy-app/routes/application': ApplicationRoute,
    'dummy-app/routes/page': PageRoute,
    'dummy-app/templates/application': ApplicationTemplate,
    'dummy-app/templates/page': PageTemplate,
  });
}
