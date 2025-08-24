export default class Edge {
  /**
   * @param
   */
  constructor(start, end, weight = 0) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }

  getKey() {
    const startKey = this.start.getKey();
    const endKey = this.end.getKey();

    return `${startKey}_${endKey}`;
  }

  reverse() {
    const tmp = this.start;
    this.start = this.end;
    this.end = tmp;
  }

  toString() {
    this.getKey();
  }
}
