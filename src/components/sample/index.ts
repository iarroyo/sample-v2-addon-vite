import Component from '@glimmer/component';

interface SampleSignature {
  Element: Element;
}
export default class Sample extends Component<SampleSignature> {
  hello = 'hello';
}

/*
declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Sample: typeof Sample;
    sample: typeof Sample;
  }
}
*/
