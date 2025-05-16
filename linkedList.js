class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at the end
  append(value) {
    /*summary 
        1. if the head is null then set the head to the new node.
        2. iterate through the list until the next node is null.
        3. set the next node to the new node.
    */
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Insert at a specific position
  insertAt(index, value) {
    const newNode = new ListNode(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    if (!prev) return; // Index out of bounds
    prev.next = newNode;
    newNode.next = current;
  }

  // Find a value in the list and return its index
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1; // Not found
  }

  // Delete a node by value
  delete(value) {
    /* summary 
        1. if the head is null then do nothing.
        2. if the head value is equal to the value then set the head to the next node.
        3. iterate through the list until the next node value is equal to the value.
        4. if the next node is not null then set the next node to the next next node.
    */
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Delete at a specific position
  deleteAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current && i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    if (!current) return; // Index out of bounds
    prev.next = current.next;
  }

  // Reverse the list
  reverse() {
    /* summary
        1. set prev to null.
        2. set current to the head.
        3. iterate through the list.
        4. set next to the next node.
        5. set the next node to the prev node.
        6. set the prev node to the current node.
        7. set the current node to the next node.
        8. set the head to the prev node.
    */
    let prev = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  // Traverse and print the list
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
}

// Example usage:
const sll = new SinglyLinkedList();
sll.append(1);
sll.append(2);
sll.append(3);
sll.print(); // Output: 1 -> 2 -> 3
sll.reverse();
sll.print(); // Output: 3 -> 2 -> 1
sll.delete(2);
sll.print(); // Output: 3 -> 1

// class DoublyListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   // Insert at the end
//   append(value) {
//     const newNode = new DoublyListNode(value);
//     if (!this.head) {
//       this.head = this.tail = newNode;
//       return;
//     }
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//   }

//   // Insert at a specific position
//   insertAt(index, value) {
//     const newNode = new DoublyListNode(value);
//     if (index === 0) {
//       newNode.next = this.head;
//       if (this.head) this.head.prev = newNode;
//       this.head = newNode;
//       if (!this.tail) this.tail = newNode;
//       return;
//     }
//     let current = this.head;
//     let i = 0;
//     while (current && i < index) {
//       current = current.next;
//       i++;
//     }
//     if (!current) {
//       this.append(value); // If index is out of bounds, append at the end
//       return;
//     }
//     newNode.prev = current.prev;
//     newNode.next = current;
//     if (current.prev) current.prev.next = newNode;
//     current.prev = newNode;
//     if (index === 0) this.head = newNode;
//   }

//   // Delete at a specific position
//   deleteAt(index) {
//     if (!this.head) return;
//     if (index === 0) {
//       this.head = this.head.next;
//       if (this.head) this.head.prev = null;
//       return;
//     }
//     let current = this.head;
//     let i = 0;
//     while (current && i < index) {
//       current = current.next;
//       i++;
//     }
//     if (!current) return; // Index out of bounds
//     if (current.next) current.next.prev = current.prev;
//     if (current.prev) current.prev.next = current.next;
//     if (current === this.tail) this.tail = current.prev;
//   }

//   // Find a value in the list and return its index
//   find(value) {
//     let current = this.head;
//     let index = 0;
//     while (current) {
//       if (current.value === value) return index;
//       current = current.next;
//       index++;
//     }
//     return -1; // Not found
//   }

//   // Traverse and print the list forward
//   printForward() {
//     let current = this.head;
//     let result = [];
//     while (current) {
//       result.push(current.value);
//       current = current.next;
//     }
//     console.log('Forward:', result.join(' <-> '));
//   }

//   // Traverse and print the list backward
//   printBackward() {
//     let current = this.tail;
//     let result = [];
//     while (current) {
//       result.push(current.value);
//       current = current.prev;
//     }
//     console.log('Backward:', result.join(' <-> '));
//   }
// }

// // Example usage:
// const dll = new DoublyLinkedList();
// dll.append(1);
// dll.append(2);
// dll.append(3);
// dll.printForward(); // Output: Forward: 1 <-> 2 <-> 3
// console.log(dll.find(2)); // Output: 1
// console.log(dll.find(4)); // Output: -1

//Doubly Linked List (DLL)

// class DoublyListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   // Insert at the end
//   append(value) {
//     const newNode = new DoublyListNode(value);
//     if (!this.head) {
//       this.head = this.tail = newNode;
//       return;
//     }
//     this.tail.next = newNode;
//     newNode.prev = this.tail;
//     this.tail = newNode;
//   }

//   // Insert at a specific position
//   insertAt(index, value) {
//     const newNode = new DoublyListNode(value);
//     if (index === 0) {
//       newNode.next = this.head;
//       if (this.head) this.head.prev = newNode;
//       this.head = newNode;
//       if (!this.tail) this.tail = newNode;
//       return;
//     }
//     let current = this.head;
//     let i = 0;
//     while (current && i < index) {
//       current = current.next;
//       i++;
//     }
//     if (!current) {
//       this.append(value); // If index is out of bounds, append at the end
//       return;
//     }
//     newNode.prev = current.prev;
//     newNode.next = current;
//     if (current.prev) current.prev.next = newNode;
//     current.prev = newNode;
//     if (index === 0) this.head = newNode;
//   }

//   // Delete at a specific position
//   deleteAt(index) {
//     if (!this.head) return;
//     if (index === 0) {
//       this.head = this.head.next;
//       if (this.head) this.head.prev = null;
//       return;
//     }
//     let current = this.head;
//     let i = 0;
//     while (current && i < index) {
//       current = current.next;
//       i++;
//     }
//     if (!current) return; // Index out of bounds
//     if (current.next) current.next.prev = current.prev;
//     if (current.prev) current.prev.next = current.next;
//     if (current === this.tail) this.tail = current.prev;
//   }

//   // Find a value in the list and return its index
//   find(value) {
//     let current = this.head;
//     let index = 0;
//     while (current) {
//       if (current.value === value) return index;
//       current = current.next;
//       index++;
//     }
//     return -1; // Not found
//   }

//   // Traverse and print the list forward
//   printForward() {
//     let current = this.head;
//     let result = [];
//     while (current) {
//       result.push(current.value);
//       current = current.next;
//     }
//     console.log("Forward:", result.join(" <-> "));
//   }

//   // Traverse and print the list backward
//   printBackward() {
//     let current = this.tail;
//     let result = [];
//     while (current) {
//       result.push(current.value);
//       current = current.prev;
//     }
//     console.log("Backward:", result.join(" <-> "));
//   }
// }

// // Example usage:
// const dll = new DoublyLinkedList();
// dll.append(1);
// dll.append(2);
// dll.append(3);
// dll.printForward();  // Output: Forward: 1 <-> 2 <-> 3
// console.log(dll.find(2));  // Output: 1
// console.log(dll.find(4));  // Output: -1

//Undo and Redo with LinkedList

// class Node {
//   constructor(text) {
//     this.text = text; // Stores text at this state
//     this.next = null; // Pointer to next state
//     this.prev = null; // Pointer to previous state
//   }
// }

// class TextEditor {
//   constructor() {
//     this.current = new Node(''); // Start with an empty document
//     this.head = this.current; // First state
//   }

//   // User types something new
//   type(text) {
//     const newNode = new Node(text);
//     newNode.prev = this.current;
//     if (this.current) this.current.next = newNode;
//     this.current = newNode;
//   }

//   // Undo: Move back to the previous state
//   undo() {
//     if (this.current.prev) {
//       this.current = this.current.prev;
//       console.log('Undo:', this.current.text);
//     } else {
//       console.log('No more undo.');
//     }
//   }

//   // Redo: Move forward to the next state
//   redo() {
//     if (this.current.next) {
//       this.current = this.current.next;
//       console.log('Redo:', this.current.text);
//     } else {
//       console.log('No more redo.');
//     }
//   }

//   // Display current text
//   getText() {
//     return this.current.text;
//   }
// }

// // Example Usage:
// const editor = new TextEditor();

// editor.type('Hello');
// editor.type('Hello, world!');
// editor.type('Hello, world! How are you?');
// console.log('Current:', editor.getText()); // Hello, world! How are you?

// editor.undo(); // Undo: Hello, world!
// editor.undo(); // Undo: Hello
// editor.redo(); // Redo: Hello, world!
// console.log('Final:', editor.getText());

//Playlist linkedlist sample

class SongNode {
  constructor(title) {
    this.title = title;
    this.next = null;
    this.prev = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  // Add song to the end of the playlist
  addSong(title) {
    const newSong = new SongNode(title);
    if (!this.head) {
      this.head = this.tail = this.current = newSong;
    } else {
      this.tail.next = newSong;
      newSong.prev = this.tail;
      this.tail = newSong;
    }
  }

  // Play the current song
  play() {
    if (this.current) {
      console.log(`Playing: 🎵 ${this.current.title}`);
    } else {
      console.log('Playlist is empty.');
    }
  }

  // Go to the next song
  next() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      this.play();
    } else {
      console.log('End of playlist.');
    }
  }

  // Go to the previous song
  prev() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      this.play();
    } else {
      console.log('Start of playlist.');
    }
  }

  // Remove a song by title
  removeSong(title) {
    let song = this.head;
    while (song) {
      if (song.title === title) {
        if (song.prev) song.prev.next = song.next;
        if (song.next) song.next.prev = song.prev;
        if (song === this.head) this.head = song.next;
        if (song === this.tail) this.tail = song.prev;
        if (song === this.current) this.current = song.next || song.prev;
        console.log(`Removed: ❌ ${title}`);
        return;
      }
      song = song.next;
    }
    console.log(`Song not found: ${title}`);
  }

  // Find a song by title and return its position
  findSong(title) {
    let song = this.head;
    let index = 0;
    while (song) {
      if (song.title === title) {
        console.log(`✅ Found "${title}" at position ${index}`);
        return index;
      }
      song = song.next;
      index++;
    }
    console.log(`❌ "${title}" not found in playlist.`);
    return -1;
  }

  // Show all songs in order
  showPlaylist() {
    let song = this.head;
    let playlist = [];
    while (song) {
      playlist.push(song.title);
      song = song.next;
    }
    console.log('🎶 Playlist:', playlist.join(' -> '));
  }
}

// Example Usage:
const myPlaylist = new Playlist();
myPlaylist.addSong('Song 1');
myPlaylist.addSong('Song 2');
myPlaylist.addSong('Song 3');
myPlaylist.showPlaylist(); // 🎶 Playlist: Song 1 -> Song 2 -> Song 3

myPlaylist.findSong('Song 2'); // ✅ Found "Song 2" at position 1
myPlaylist.findSong('Song 4'); // ❌ "Song 4" not found in playlist.

myPlaylist.play(); // Playing: 🎵 Song 1
myPlaylist.next(); // Playing: 🎵 Song 2
myPlaylist.removeSong('Song 2');
myPlaylist.findSong('Song 2'); // ❌ "Song 2" not found in playlist.

//when to use linkedlist
/**
 * When Frequent Insertions/Deletions are Needed (O(1))
Use Case: When you need to add/remove elements dynamically, especially in the middle of the list.
Why?: Unlike arrays, linked lists don’t require shifting elements when inserting or deleting.
Example: Implementing an LRU (Least Recently Used) Cache, where frequent deletions and insertions occur.

 * When You Need Circular or Bidirectional Navigation
Use Case: When implementing structures that require circular traversal or both forward and backward movement.
Why?: Doubly linked lists and circular linked lists allow easy traversal in both directions.
Example: Browser history (back/forward navigation), music playlist shuffling.

 * When Memory Usage is a Concern for Large Datasets
Use Case: When you have a large dataset with unknown size at runtime.
Why?: Unlike arrays, which allocate a fixed memory block, linked lists grow dynamically.
Example: Implementing a large text editor (Undo/Redo feature)

* When You Need Efficient Queue or Stack Operations
Use Case: When implementing queues or stacks where constant-time insertions and deletions are needed.
Why?: With linked lists, push, pop, enqueue, and dequeue operations are O(1), unlike arrays, where shift() is O(n).
Example: Task scheduling in operating systems.

When NOT to Use Linked Lists
❌ When random access is required frequently (O(n) search is slow).
✅ Use an array (O(1) access) if you need to access elements by index often.
❌ When extra memory overhead is a problem (linked lists require extra memory for pointers).

Conclusion
Use linked lists when insertions, deletions, and dynamic growth are important. 
Use arrays when you need fast indexing and less memory overhead.

 */
