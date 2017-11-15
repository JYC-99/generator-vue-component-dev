import { mount } from 'vue-test-utils';
import <%= exportName %> from '../src/index.vue';

describe('<%= exportName %>', () => {
  test('should not throw any errors', () => {
    expect(() => {
      mount(<%= exportName %>).not.toThrow();
    });
  });

  test('is a Vue instance', () => {
    expect(mount(<%= exportName %>).isVueInstance()).toBeTruthy();
  });
});
