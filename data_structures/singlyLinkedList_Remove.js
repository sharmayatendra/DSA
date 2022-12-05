class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// remove the nodeValue at the particular index of linked list.

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

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== idx) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(idx, val) {
    let reqNode = this.get(idx);
    if (!reqNode) return false;
    reqNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (this.length === idx) {
      this.push(val);
      return true;
    }
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let prevNode = this.get(idx - 1);
    let removeNode = prevNode.next;
    prevNode.next = removeNode.next;
    this.length--;
    return removeNode;
  }
}

let linkedList = new SinglyLinkedList();
//   linkedList.push("1st value");
//   linkedList.push("2nd value");
//   linkedList.push("3rd value");
//   // linkedList.push(100);
//   linkedList.pop();
//   linkedList.pop();
//   linkedList.pop();
//   console.log(linkedList);
