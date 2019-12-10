/**
 * Checks if `value` is the of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 * @param {*} value
 */
function isObject(value): boolean {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

export default isObject
