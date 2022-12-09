class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentRoot = this.root;

      while (true) {
        if (value === currentRoot.value) return undefined;
        if (value < currentRoot.value) {
          if (currentRoot.left === null) {
            currentRoot.left = newNode;
            return this;
          } else {
            currentRoot = currentRoot.left;
          }
        } else if (value > currentRoot.value) {
          if (currentRoot.right === null) {
            currentRoot.right = newNode;
            return this;
          } else {
            currentRoot = currentRoot.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}
