class HashMap {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      let val = char.charCodeAt(0) - 96;
      total = (total * weirdPrime + val) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
}
