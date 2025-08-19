export default class Comparator {
  constructor(cmpFn) {
    this.comp = cmpFn || Comparator.defCmpFn;
  }

  static defCmpFn(a, b) {
    if (a === b) return 0;

    return a < b ? -1 : 1;
  }

  equal(a, b) {
    if (a === b) return true;
    return false;
  }

  lessThan(a, b) {
    if (a < b) return true;
    return false;
  }

  greterThan(a, b) {
    if (a > b) return true;
    return false;
  }

  lessThanEqual(a, b) {
    if (a < b || a === b) return true;
    return false;
  }

  greaterThanEqual(a, b) {
    if (a > b || a === b) return true;
  }

  reverse() {
    const compOrig = this.comp;
    this.comp = (a, b) => compOrig(b, a);
  }
}
