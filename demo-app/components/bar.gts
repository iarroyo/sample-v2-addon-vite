import Component from '@glimmer/component';

export default class Bar extends Component {
  hello = 'hello';
  <template>
    <div class="bg-slate-600">sample {{this.hello}}</div>
  </template>
}
