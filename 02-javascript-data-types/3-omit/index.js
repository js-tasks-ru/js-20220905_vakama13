/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let answer = {};

  for (let field of Object.keys(obj)) {
    if (!fields.includes(field)) {
      answer[field] = obj[field];
    }
  }
  return answer;
};
