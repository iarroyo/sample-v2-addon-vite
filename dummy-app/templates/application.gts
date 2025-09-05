import Route from 'ember-route-template';

export default Route(
  <template>
    {{@model}}
    <p>
      {{outlet}}
    </p>
  </template>,
);
