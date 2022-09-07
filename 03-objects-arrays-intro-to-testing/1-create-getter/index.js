/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fields = path.split(".");
  return (obj) => {
    let curObj = obj;
    for (const field of fields) {
      if (typeof curObj[field] === "object") {
        curObj = curObj[field];
      } else {
        return curObj[field];
      }
    }
  };
}
