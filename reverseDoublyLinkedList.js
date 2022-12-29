class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length || this.length === 0) {
      return null;
    }
    if (index <= this.length / 2) {
      let cursor = this.head;
      for (let i = 0; i < index; i++) {
        cursor = cursor.next;
      }
      return cursor;
    } else {
      let cursor = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        cursor = cursor.prev;
      }
      return cursor;
    }
  }

  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let removed = this.tail;
    this.tail = this.tail.prev;
    removed.prev = null;
    if (this.length === 1) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this.length--;
    return removed;
  }

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let removed = this.head;
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = this.head;
    } else {
      this.head.prev = null;
    }
    removed.next = null;
    this.length--;
    return removed;
  }

  unshift(val) {
    if (this.length === 0) {
      return this.push(val);
    }
    let node = new Node(val);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this;
  }

  remove(index) {
    if (this.length === 0 || index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    let removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    this.length--;
    return removed;
  }

  insert(index, val) {
    let target = this.get(index);
    if (!target) {
      return false;
    }
    if (target === 0) {
      return !!this.unshift(val);
    }
    if (target === this.length) {
      return !!this.push(val);
    }
    let node = new Node(val);
    node.prev = target;
    node.next = target.next;
    target.next = node;
    node.next.prev = node;
    this.length++;
    return true;
  }

  reverse() {
    if (this.length >= 2) {
      let cursor = this.head;
      this.head = this.tail;
      this.tail = cursor;
      while (cursor) {
        let next = cursor.next;
        cursor.next = cursor.prev;
        cursor.prev = next;
        cursor = next;
      }
    }
    return this;
  }
}
