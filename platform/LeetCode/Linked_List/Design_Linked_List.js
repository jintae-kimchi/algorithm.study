/**
 * LeetCode results
 * Your runtime beats 60.98 % of javascript submissions.
 * Your memory usage beats 85.71 % of javascript submissions.
 */

/**
 * @class MyNode
 * @param {object} val
 * @property {object} data
 * @property {MyNode} prev
 * @property {MyNode} next
 */
var MyNode = function (val) {
    this.data = val;
    this.prev = null;
    this.next = null;
};

/**
 * @class MyLinkedList
 * @property {MyNode} head
 * @property {MyNode} tail
 * @property {number} size
 */
var MyLinkedList = function () {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/**
 * find node by index
 * @param {number} index
 * @returns {object} node or null
 */
MyLinkedList.prototype.getNode = function (index) {
    // invalid index
    if (index < 0 || this.size <= index) return null;

    // find
    var isHeadFirst = this.size / 2 > index;
    var node = isHeadFirst ? this.head : this.tail;
    var idx = isHeadFirst ? 0 : this.size - 1;
    if (isHeadFirst) {
        while (node !== null && idx < index && idx < this.size - 1) {
            idx++;
            node = node.next;
        }
    } else {
        while (node !== null && idx > index && idx > 0) {
            idx--;
            node = node.prev;
        }
    }

    return node;
};

/**
 * Get the value of the index-th node in the linked list.
 * If the index is invalid, return -1.
 * @param {number} index
 * @returns {number} node value or -1
 */
MyLinkedList.prototype.get = function (index) {
    var node = this.getNode(index);
    return node !== null ? node.data : -1;
};

/**
 * Add a node of value val before the first element of the linked list.
 * After the insertion, the new node will be the first node of the linked list.
 * @param {object} val
 * @returns {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    var newHead = new MyNode(val);
    var oldHead = this.head;
    this.head = newHead;
    newHead.next = oldHead;
    this.size += 1;
    if (oldHead) {
        oldHead.prev = newHead;
    } else {
        this.tail = newHead;
    }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    var newTail = new MyNode(val);
    var oldTail = this.tail;
    this.tail = newTail;
    newTail.prev = oldTail;
    this.size += 1;
    if (oldTail) {
        oldTail.next = newTail;
    } else {
        this.head = newTail;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list.
 * If index equals to the length of linked list,
 * the node will be appended to the end of linked list.
 * If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {object} val
 * @returns {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || this.size < index) return null;
    if (index === 0) {
        this.addAtHead(val);
        return null;
    }
    if (index === this.size) {
        this.addAtTail(val);
        return null;
    }

    var swapNode = this.getNode(index);
    var prevNode = swapNode.prev;
    var newNode = new MyNode(val);
    newNode.prev = prevNode;
    newNode.next = swapNode;
    prevNode.next = newNode;
    swapNode.prev = newNode;
    this.size += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    // invalid index
    if (index < 0 || this.size <= index || this.size <= 0) return null;

    var remNode = this.getNode(index);
    if (remNode === null) return null;

    var prev = remNode.prev;
    var next = remNode.next;
    if (index === 0) {
        // head
        if (next) next.prev = null;
        this.head = remNode.next;
    } else if (index === this.size - 1) {
        // tail
        if (prev) prev.next = null;
        this.tail = remNode.prev;
    } else {
        prev.next = next;
        next.prev = prev;
    }

    this.size -= 1;
    remNode = null;

    return null;
};

var getTest = (function () {
    var link = new MyLinkedList();
    link.addAtHead(1);
    link.addAtHead(2);
    link.addAtHead(3);
    // 3, 2, 1
    console.log(link.get(-1) === -1);
    console.log(link.get(0) === 3);
    console.log(link.get(1) === 2);
    console.log(link.get(3) === -1);
    // tail first
    link.addAtHead(4);
    link.addAtHead(5);
    // 5, 4, 3, 2, 1
    console.log(link.get(4) === 1);
    console.log(link.get(3) === 2);
})();
var addAtHeadTest = (function () {
    var link = new MyLinkedList();
    link.addAtHead(1);
    link.addAtHead(2);
    link.addAtHead(3);
    link.addAtHead(4);
    // 4, 3, 2, 1
    console.log(link.head.data === 4);
    console.log(link.head.next.data === 3);
})();
var addAtTailTest = (function () {
    var link = new MyLinkedList();
    link.addAtTail(1);
    link.addAtTail(2);
    link.addAtTail(3);
    link.addAtTail(4);
    // 1, 2, 3, 4
    console.log(link.tail.data === 4);
    console.log(link.tail.prev.data === 3);
})();
var addAtIndexTest = (function () {
    var link = new MyLinkedList();
    link.addAtIndex(0, 1);
    // 1
    console.log(link.get(0) === 1);
    link.addAtIndex(0, 2);
    // 2, 1
    console.log(link.get(0) === 2);
    link.addAtIndex(0, 3);
    // 3, 2, 1
    console.log(link.get(0) === 3);
    link.addAtIndex(1, 4);
    // 3, 4, 2, 1
    console.log(link.get(1) === 4);
    link.addAtIndex(3, 5);
    // 3, 4, 2, 5, 1
    console.log(link.get(3) === 5);
    link.addAtIndex(2, 6);
    // 3, 4, 6, 2, 5, 1
    console.log(link.get(2) === 6);
})();
var deleteAtIndexTest = (function () {
    var link = new MyLinkedList();
    link.addAtHead(1);
    link.addAtHead(2);
    link.addAtHead(3);
    link.addAtHead(4);
    // 4, 3, 2, 1
    link.deleteAtIndex(1);
    // 4, 2, 1
    console.log(link.head.data === 4);
    link.deleteAtIndex(2);
    // 4, 2
    console.log(link.head.data === 4);
    link.deleteAtIndex(0);
    // 2
    console.log(link.head.data === 2);
    link.deleteAtIndex(1);
    // 2
    console.log(link.head.data === 2);
    link.deleteAtIndex(-1);
    // 2
    console.log(link.head.data === 2);
    link.deleteAtIndex(0);
    // empty
    console.log(link.size === 0);
})();
