class DynamicArray {
  constructor(capicity = 4) {
    this.capicity = capicity;
    this.size = 0;
    this.data = [this.capicity];
  }

  get(idx) {
    if (idx < 0 || idx >= this.capicity) {
      throw new Error("index out of bounds");
    }

    return this.data[idx];
  }
}
