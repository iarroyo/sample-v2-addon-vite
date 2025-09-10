import Component from '@glimmer/component';

export class Foo extends Component<{ Element: Element }> {
  foo = 'foo';
  <template>
    <div class="blue">Addon {{this.foo}}</div>
  </template>
}

export default Foo;
