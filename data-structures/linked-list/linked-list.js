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
}
