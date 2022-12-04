class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// pushing the item at the end of linked list.

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let linkedList = new SinglyLinkedList();
linkedList.push("1st value");
linkedList.push("2nd value");
linkedList.push("3rd value");
linkedList.push(100);
console.log(linkedList);
