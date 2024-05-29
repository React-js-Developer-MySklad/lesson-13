import queryString from 'query-string';

describe('query-string', () => {
  it('should be mocked', () => {
    expect(queryString.parse('param=1')).toEqual({ name: 1 });
  });
});
