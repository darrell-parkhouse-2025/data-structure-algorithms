# Data Structures and Algorithms in JavaScript

A comprehensive collection of data structures and algorithms implemented in JavaScript with clear explanations, examples, and time/space complexity analysis.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Data Structures](#data-structures)
- [Algorithms](#algorithms)
- [Usage Examples](#usage-examples)
- [Testing](#testing)
- [Contributing](#contributing)
- [Resources](#resources)

## Overview

This repository contains JavaScript implementations of fundamental data structures and algorithms commonly used in computer science and software development. Each implementation includes:

- Clean, readable code with detailed comments
- Time and space complexity analysis
- Usage examples and test cases
- Performance benchmarks where applicable

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/js-data-structures-algorithms.git

# Navigate to the project directory
cd js-data-structures-algorithms

# Install dependencies
npm install
```

## Data Structures

### Linear Data Structures
- **[Array](./data-structures/array/)** - Dynamic array implementation
- **[Linked List](./data-structures/linked-list/)** - Singly and doubly linked lists
- **[Stack](./data-structures/stack/)** - LIFO (Last In, First Out) structure
- **[Queue](./data-structures/queue/)** - FIFO (First In, First Out) structure
- **[Deque](./data-structures/deque/)** - Double-ended queue

### Non-Linear Data Structures
- **[Binary Tree](./data-structures/binary-tree/)** - Basic binary tree structure
- **[Binary Search Tree](./data-structures/bst/)** - Self-balancing BST
- **[AVL Tree](./data-structures/avl-tree/)** - Height-balanced binary search tree
- **[Red-Black Tree](./data-structures/red-black-tree/)** - Self-balancing BST
- **[Heap](./data-structures/heap/)** - Min and max heap implementations
- **[Trie](./data-structures/trie/)** - Prefix tree for string operations
- **[Graph](./data-structures/graph/)** - Adjacency list and matrix representations

### Hash-Based Structures
- **[Hash Table](./data-structures/hash-table/)** - Hash map implementation
- **[Bloom Filter](./data-structures/bloom-filter/)** - Probabilistic data structure

## Algorithms

### Sorting Algorithms
- **[Bubble Sort](./algorithms/sorting/bubble-sort.js)** - O(n²) time complexity
- **[Selection Sort](./algorithms/sorting/selection-sort.js)** - O(n²) time complexity
- **[Insertion Sort](./algorithms/sorting/insertion-sort.js)** - O(n²) time complexity
- **[Merge Sort](./algorithms/sorting/merge-sort.js)** - O(n log n) time complexity
- **[Quick Sort](./algorithms/sorting/quick-sort.js)** - O(n log n) average case
- **[Heap Sort](./algorithms/sorting/heap-sort.js)** - O(n log n) time complexity
- **[Radix Sort](./algorithms/sorting/radix-sort.js)** - O(nk) time complexity

### Searching Algorithms
- **[Linear Search](./algorithms/searching/linear-search.js)** - O(n) time complexity
- **[Binary Search](./algorithms/searching/binary-search.js)** - O(log n) time complexity
- **[Jump Search](./algorithms/searching/jump-search.js)** - O(√n) time complexity
- **[Interpolation Search](./algorithms/searching/interpolation-search.js)** - O(log log n) average case

### Graph Algorithms
- **[Breadth-First Search (BFS)](./algorithms/graph/bfs.js)** - Graph traversal
- **[Depth-First Search (DFS)](./algorithms/graph/dfs.js)** - Graph traversal
- **[Dijkstra's Algorithm](./algorithms/graph/dijkstra.js)** - Shortest path
- **[A* Search](./algorithms/graph/a-star.js)** - Pathfinding algorithm
- **[Floyd-Warshall](./algorithms/graph/floyd-warshall.js)** - All-pairs shortest paths
- **[Kruskal's Algorithm](./algorithms/graph/kruskal.js)** - Minimum spanning tree
- **[Prim's Algorithm](./algorithms/graph/prim.js)** - Minimum spanning tree

### Dynamic Programming
- **[Fibonacci Sequence](./algorithms/dynamic-programming/fibonacci.js)** - Multiple approaches
- **[Knapsack Problem](./algorithms/dynamic-programming/knapsack.js)** - 0/1 and unbounded
- **[Longest Common Subsequence](./algorithms/dynamic-programming/lcs.js)** - String comparison
- **[Edit Distance](./algorithms/dynamic-programming/edit-distance.js)** - Levenshtein distance

### String Algorithms
- **[KMP Algorithm](./algorithms/string/kmp.js)** - Pattern matching
- **[Rabin-Karp](./algorithms/string/rabin-karp.js)** - String searching
- **[Boyer-Moore](./algorithms/string/boyer-moore.js)** - String searching

## Usage Examples

### Stack Example
```javascript
import { Stack } from './data-structures/stack/Stack.js';

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.size()); // 2
```

### Binary Search Tree Example
```javascript
import { BinarySearchTree } from './data-structures/bst/BST.js';

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(5)); // true
console.log(bst.inOrderTraversal()); // [5, 10, 15]
```

### Quick Sort Example
```javascript
import { quickSort } from './algorithms/sorting/quick-sort.js';

const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = quickSort(arr);
console.log(sortedArr); // [11, 12, 22, 25, 34, 64, 90]
```

## Testing

Run the test suite to verify all implementations:

```bash
# Run all tests
npm test

# Run specific test file
npm test -- stack.test.js

# Run tests with coverage
npm run test:coverage
```

## Performance Benchmarks

To run performance benchmarks:

```bash
npm run benchmark
```

This will compare the performance of different algorithms and data structures with various input sizes.

## Time and Space Complexity

Each implementation includes detailed complexity analysis:

| Data Structure | Access | Search | Insertion | Deletion | Space |
|----------------|--------|--------|-----------|----------|-------|
| Array          | O(1)   | O(n)   | O(n)      | O(n)     | O(n)  |
| Linked List    | O(n)   | O(n)   | O(1)      | O(1)     | O(n)  |
| Stack          | O(n)   | O(n)   | O(1)      | O(1)     | O(n)  |
| Queue          | O(n)   | O(n)   | O(1)      | O(1)     | O(n)  |
| Hash Table     | O(1)*  | O(1)*  | O(1)*     | O(1)*    | O(n)  |
| Binary Search Tree | O(log n)* | O(log n)* | O(log n)* | O(log n)* | O(n) |

*Average case

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/algorithm-name`)
3. Implement your algorithm/data structure with:
   - Clear code comments
   - Time/space complexity analysis
   - Unit tests
   - Usage examples
4. Commit your changes (`git commit -am 'Add new algorithm: Algorithm Name'`)
5. Push to the branch (`git push origin feature/algorithm-name`)
6. Create a Pull Request

### Code Style
- Use ESLint configuration provided in the repository
- Follow consistent naming conventions
- Include JSDoc comments for all functions
- Write comprehensive test cases

## Resources

### Books
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein
- "Data Structures and Algorithms in JavaScript" by Michael McMillan
- "Cracking the Coding Interview" by Gayle Laakmann McDowell

### Online Resources
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [Visualgo - Algorithm Visualizations](https://visualgo.net/)
- [LeetCode](https://leetcode.com/) - Practice problems
- [HackerRank](https://www.hackerrank.com/) - Coding challenges

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the computer science community for the foundational algorithms and data structures
- Inspired by various open-source implementations and educational resources
- Special thanks to contributors who have helped improve this repository

---

**Note**: This is an educational repository. While the implementations are functional, they may not be optimized for production use. Always consider using well-tested libraries in production environments.
