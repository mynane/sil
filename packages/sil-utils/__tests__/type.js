const { isNumber, isNull, isObject, isArray } = require('../lib')

describe('type', function() {
  it('should be number', function() {
    expect(isNumber('3')).toBe(false)
    expect(isNumber(4)).toBe(true)
  });
  it('should be null', function() {
    expect(isNull(null)).toBe(true)
    expect(isNull('null')).toBe(false)
  })
  it('should be Object', function() {
    expect(isObject(null)).toBe(false)
    expect(isObject({})).toBe(true)
  })
  it('should be Array', function() {
    expect(isArray([])).toBe(true)
    expect(isArray(new Array())).toBe(true)
  })
});