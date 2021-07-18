/**
 * Initialize your data structure here.
 */
 var MyLinkedList = function() {
    this.linkedList = {
        'val': '',
        'next': null
    };
    this.head = this.linkedList;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
    let ptr = this.head.next;
    
    while (ptr) {
        if (index == 0) return ptr.val;
        ptr = ptr.next;
        index--;
    }
    
    return -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    
    let newNode = {'val': val};
    newNode.next = this.head.next;
    this.head.next = newNode;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    
    let ptr = this.head;
    while (ptr.next) ptr = ptr.next;
    ptr.next = {'val': val, 'next': null};
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    let ptr = this.head;
    let newNode = {'val': val};
    
    while(index > 0) {
        ptr = ptr.next;
        index--;
    }
    
    newNode.next = ptr.next;
    ptr.next = newNode;
    
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
    let ptr = this.head;
    
    while(index > 0) {
        ptr = ptr.next;
        index--;
    }
    
    if (ptr.next) ptr.next = ptr.next.next;
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */