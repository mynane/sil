
const { say } = require('../lib');

describe('curry function syntax', function() {
  it('should parse', function() {
    expect(say()).toBe('say hi');
  });
});
