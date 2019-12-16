const { Parser } = require('../lib')
const generator = require('@sil/sil-generator').default

describe('Parser', () => {
  test('test parser', () => {
    generator(Parser(`<div></div>`))
    // expect(parser('<View></View>')).toBe('<View></View>')
  })
})
