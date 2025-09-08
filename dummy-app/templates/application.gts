import Route from 'ember-route-template';
import DummyFoo from '#dummyapp/components/foo';
import AddonFoo from '#src/components/foo';
//import AddonSample from '#src/components/sample';  //does NOT work
//import AddonSample from '/dist/components/sample'; //works
import { Sample as AddonSample } from 'sample-v2-addon-vite';
//import DummySample from '#dummyapp/components/sample';

export default Route(
  <template>
    {{@model}}
    <DummyFoo />
    <AddonFoo />
    <AddonSample />
    <!-- <DummySample /> -->
    <p>
      {{outlet}}
    </p>
  </template>,
);
