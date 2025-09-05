import EmberRouter from '@ember/routing/router';
import { properLinks } from 'ember-primitives/proper-links';
import config from './config.ts';

@properLinks({
  ignore: ['/tests'],
})
export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('page');
});
