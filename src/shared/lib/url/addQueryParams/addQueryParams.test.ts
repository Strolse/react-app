import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('with one param', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toEqual('?test=value');
  });

  test('with multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      second: 'two',
    });
    expect(params).toEqual('?test=value&second=two');
  });

  test('with undefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined,
    });
    expect(params).toEqual('?test=value');
  });
});
