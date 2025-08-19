import LinkedListNode from "./linked-list-node";
import Comparator from "../../utility/comparator";

export default class LinkedList {
  constructor(compFn) {
    this.head = null;
    this.tail = null;

    this.comp = new Comparator(compFn);
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {}

  insert(value, rawIdx) {}

  delete(value) {}

  find({ value = undefined, callback = undefined }) {}

  deleteTail() {}

  deleteHead() {}

  fromArray(values) {
    values.forEach((value) => this.append(value));
    return this;
  }

  toArray() {
    const nodes = [];
    const curr = this.head;

    while (curr) {
      nodes.push(curr);
      curr = curr.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr) {
      newNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.tail = this.head;
    this.head = prev;

    return this;
  }
}
