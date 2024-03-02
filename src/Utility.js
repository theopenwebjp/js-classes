/*
This file is not exposed publicly.
It is ONLY for maintaining utility functions temporarily.
Utility functions SHOULD generally be move to another repository.
*/
/**
 * @template T
 * @param {T|import('./types/ts').Falsy} value
 */
export function failOnFalsy(value) {
  if (!value) {
    throw new Error(`${value} expected to be non-falsy failed check.`)
  }
  return /** @type {Exclude<T, import('./types/ts').Falsy>} */ (value)
}

/**
 * Simplest way of traversing object.
 * @param {Object} o 
 * @param {(parent: Object, key: string) => void} onProperty 
 */
export const traverseObject = (o, onProperty) => {
  for (const k in o) {
    onProperty(o, k)
    // @ts-ignore
    const v = o[k]
    if (v && typeof v === 'object') {
      traverseObject(v, onProperty)
    }
  }
};
