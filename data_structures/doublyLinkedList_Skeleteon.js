// here change in the node class it now contains value , next pointer , prev pointer as well

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

// here no change in basic constructor it is similar to singly linkedList
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
