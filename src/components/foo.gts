import Component from '@glimmer/component';

export default class Foo extends Component<{ Element: Element }> {
  foo = 'foo';
  <template>Addon {{this.foo}}</template>
}
