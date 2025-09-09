import Component from '@glimmer/component';

export class Foo extends Component<{ Element: Element }> {
  foo = 'foo';
  <template>Addon {{this.foo}}</template>
}

export default Foo;
