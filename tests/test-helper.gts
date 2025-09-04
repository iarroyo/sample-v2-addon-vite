import EmberApp from '@ember/application';
import Resolver from 'ember-resolver';
import EmberRouter from '@ember/routing/router';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start as qunitStart, setupEmberOnerrorValidation } from 'ember-qunit';
import ApplicationTemplate from './test-app/application.gts';
import FooTemplate from './test-app/foo.gts';

class Router extends EmberRouter {
  location = 'none';
  rootURL = '/';
}

class TestApp extends EmberApp {
  modulePrefix = 'test-app';
  Resolver = Resolver.withModules({
    'test-app/router': { default: Router },
    'test-app/templates/application': { default: ApplicationTemplate },
    'test-app/templates/foo': { default: FooTemplate },
    // add any custom services here
  });
}

Router.map(function () {
  this.route('foo');
});

export function start() {
  setApplication(
    TestApp.create({
      autoboot: false,
      rootElement: '#ember-testing',
    }),
  );
  setup(QUnit.assert);
  setupEmberOnerrorValidation();
  qunitStart();
}
