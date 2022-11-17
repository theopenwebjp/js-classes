/*
This file is not exposed publicly.
It is ONLY for maintaining utility functions temporarily.
Utility functions SHOULD generally be move to another repository.
*/

/**
 * @typedef {undefined|null|false|0|''} Falsy 
 */

/**
 * @template T
 * @param {T|Falsy} value
 */
export function failOnFalsy(value) {
  if (!value) {
    throw new Error(`${value} expected to be non-falsy failed check.`)
  }
  return /** @type {Exclude<T, Falsy>} */ (value)
}
