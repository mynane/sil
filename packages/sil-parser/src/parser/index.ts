import parseHtml from './parseHtml'

const Parser = (code: string): any => {
  const str = parseHtml(code, {
    start: () => {},
    end: () => {},
    char: () => {},
  })

  return str
}

export default Parser
