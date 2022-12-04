class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// popping the node at the end of linked list.

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

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

let linkedList = new SinglyLinkedList();
linkedList.push("1st value");
linkedList.push("2nd value");
linkedList.push("3rd value");
// linkedList.push(100);
linkedList.pop();
linkedList.pop();
linkedList.pop();
console.log(linkedList);
