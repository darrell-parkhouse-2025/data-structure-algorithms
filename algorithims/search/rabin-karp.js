/**
 *
 * @param {*} t - the text to search
 * @param {*} p - pattern in the text
 * @param {*} q - prime number for the polynomial
 */

export const robin_karp = (t, p, q = 10) => {
  const d = 256
  const _q = 101
  const n = t.length
  const m = p.length
  const matches = []

  if (m>n|| m === 0)
};
