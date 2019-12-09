/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * @param {*} value 
 */
function isNumber(value) {
  return typeof value == 'number'
}

export default isNumber;
