export default class Comparator {
  constructor(cmpFn) {
    this.comp = cmpFn || Comparator.defCmpFn;
  }

  static defCmpFn(a, b) {
    if (a === b) return 0;

    return a < b ? -1 : 1;
  }

  equal(a, b) {
    return this.comp(a, b) === 0;
  }
}
