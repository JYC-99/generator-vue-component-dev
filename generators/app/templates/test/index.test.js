import { mount } from 'vue-test-utils';
import <%= exportName %> from '../src/index.vue';

const mockConfig = {
  tableClasses: ['table', 'table-bordered'],
  dataSource: {
    type: 'memory',
    data: [{ UserName: 'abc' }],
    primaryKey: 'UserName',
  },
};

describe('<%= exportName %>', () => {
  test('should not throw any errors', () => {
    expect(() => {
      mount(<%= exportName %>, {
        propsData: {
          config: mockConfig,
        },
      }).not.toThrow();
    });
  });

  test('is a Vue instance', () => {
    expect(mount(<%= exportName %>, {
      propsData: {
        config: mockConfig,
      },
    }).isVueInstance()).toBeTruthy();
  });

  // todo: test destory
});
