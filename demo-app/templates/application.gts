import Route from 'ember-route-template';
import DemoFoo from 'demo-app/components/foo';
import AddonFoo from 'sample-v2-addon-vite/components/foo';
//import AddonSample from 'sample-v2-addon-vite/components/sample';  //does NOT work
//import AddonSample from '/dist/components/sample'; //works
//import { Sample as AddonSample } from 'sample-v2-addon-vite/components/sample';
import AddonInfo from 'sample-v2-addon-vite/components/addon-info';
import DemoBar from 'demo-app/components/bar';
//import DummySample from 'demo-app/components/sample';

export default Route(
  <template>
    <p>
      {{@model}}
    </p>
    <DemoFoo />
    <DemoBar />
    <AddonFoo />
    <!-- <AddonSample /> -->
    <AddonInfo />
    <!-- <DummySample /> -->
    <p>
      {{outlet}}
    </p>
  </template>,
);
