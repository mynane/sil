const { parser } = require('../lib')

describe('Parser', () => {
  test('test parser', () => {
    expect(parser('<View></View>')).toBe('<View></View>')
  })
})
