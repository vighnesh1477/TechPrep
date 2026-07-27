// Data Structures & Algorithms (DSA) Questions

export default [
    {
        id: "dsa-1",
        question: "What is the primary difference between an Abstract Data Type (ADT) and a Data Structure?",
        options: [
            "An ADT is the logical description of operations, while a Data Structure is the physical implementation.",
            "An ADT is written in C++, while a Data Structure is written in Java.",
            "A Data Structure defines the interface, while an ADT defines the memory layout.",
            "There is no difference; they are synonymous terms."
        ],
        answer: 0,
        explanation: "An ADT (like a Stack or Queue) defines the set of operations and their behavior logically. A Data Structure (like an array or linked list) is the concrete implementation of that ADT in memory.",
        difficulty: "Easy",
        topic: "Abstract Data Types"
    },
    {
        id: "dsa-2",
        question: "Which of the following represents the worst-case time complexity of searching for an element in a singly linked list?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        answer: 2,
        explanation: "In the worst case, the element being searched for is either at the end of the list or not present at all, requiring a traversal of all n nodes. Hence, the time complexity is O(n).",
        difficulty: "Easy",
        topic: "Time Complexity"
    },
    {
        id: "dsa-3",
        question: "What does the Big-O notation specifically describe?",
        options: [
            "The exact number of operations an algorithm performs.",
            "The upper bound of an algorithm's growth rate.",
            "The lower bound of an algorithm's growth rate.",
            "The average memory consumed by an algorithm."
        ],
        answer: 1,
        explanation: "Big-O notation provides an asymptotic upper bound on the time or space complexity of an algorithm, describing the worst-case scenario as the input size grows.",
        difficulty: "Easy",
        topic: "Big O"
    },
    {
        id: "dsa-4",
        question: "If an algorithm has a space complexity of O(1), what does this imply?",
        options: [
            "The algorithm requires exactly 1 byte of memory.",
            "The algorithm's memory usage grows linearly with input size.",
            "The algorithm uses a constant amount of extra memory regardless of input size.",
            "The algorithm allocates memory on the heap."
        ],
        answer: 2,
        explanation: "O(1) space complexity means the algorithm requires a fixed amount of auxiliary memory that does not scale with the input size n.",
        difficulty: "Easy",
        topic: "Space Complexity"
    },
    {
        id: "dsa-5",
        question: "Which notation represents the tight bound (both upper and lower) of an algorithm's running time?",
        options: [
            "Big-O",
            "Big-Omega",
            "Big-Theta",
            "Little-o"
        ],
        answer: 2,
        explanation: "Big-Theta (Θ) notation denotes a tight bound, meaning the algorithm's growth rate is both upper-bounded and lower-bounded by the same function asymptotically.",
        difficulty: "Easy",
        topic: "Big Theta"
    },
    {
        id: "dsa-6",
        question: "In the context of algorithm analysis, what does Big-Omega (Ω) notation define?",
        options: [
            "The worst-case execution time.",
            "The best-case lower bound of an algorithm's growth rate.",
            "The exact average-case time complexity.",
            "The space complexity upper bound."
        ],
        answer: 1,
        explanation: "Big-Omega provides an asymptotic lower bound, representing the best-case scenario or the minimum time an algorithm will take as input size increases.",
        difficulty: "Easy",
        topic: "Big Omega"
    },
    {
        id: "dsa-7",
        question: "What is the best-case time complexity of Bubble Sort?",
        options: [
            "O(n^2)",
            "O(n log n)",
            "O(n)",
            "O(1)"
        ],
        answer: 2,
        explanation: "If the array is already sorted, an optimized Bubble Sort that uses a flag to check if any swaps occurred will terminate after a single pass, resulting in O(n) time complexity.",
        difficulty: "Easy",
        topic: "Best Case"
    },
    {
        id: "dsa-8",
        question: "Which of the following sorting algorithms is considered in-place but not stable?",
        options: [
            "Merge Sort",
            "Bubble Sort",
            "Quick Sort",
            "Insertion Sort"
        ],
        answer: 2,
        explanation: "Quick Sort operates in-place (requires only O(log n) auxiliary stack space), but it is not stable because the swapping of elements across the pivot can change the relative order of equal elements.",
        difficulty: "Easy",
        topic: "Stability of Sorting"
    },
    {
        id: "dsa-9",
        question: "What is the primary characteristic of a greedy algorithm?",
        options: [
            "It breaks the problem into overlapping subproblems.",
            "It makes the locally optimal choice at each step hoping to find a global optimum.",
            "It explores all possible paths using backtracking.",
            "It divides the problem into independent subproblems and combines their solutions."
        ],
        answer: 1,
        explanation: "A greedy algorithm builds up a solution piece by piece by always choosing the next piece that offers the most immediate benefit. It does not reconsider past choices.",
        difficulty: "Easy",
        topic: "Greedy Algorithms"
    },
    {
        id: "dsa-10",
        question: "How does Dynamic Programming differ from Divide and Conquer?",
        options: [
            "Dynamic Programming only works on trees.",
            "Divide and Conquer requires more memory than Dynamic Programming.",
            "Dynamic Programming solves overlapping subproblems by storing their results, whereas Divide and Conquer solves independent subproblems.",
            "Divide and Conquer uses recursion, while Dynamic Programming does not."
        ],
        answer: 2,
        explanation: "The key distinction is that Dynamic Programming is used when subproblems overlap (so results can be cached/memoized). Divide and Conquer is used when subproblems are independent."
    },
    {
        id: "dsa-11",
        question: "What is the time complexity of accessing an element at a specific index in an array?",
        options: [
            "O(n)",
            "O(log n)",
            "O(n^2)",
            "O(1)"
        ],
        answer: 3,
        explanation: "Arrays provide random access. Since elements are stored in contiguous memory locations, calculating the address of any index takes constant time O(1).",
        difficulty: "Easy",
        topic: "Arrays"
    },
    {
        id: "dsa-12",
        question: "In a stack, from which end are elements inserted and removed?",
        options: [
            "Front",
            "Rear",
            "Top",
            "Middle"
        ],
        answer: 2,
        explanation: "A stack follows the LIFO (Last-In-First-Out) principle. All insertions (push) and deletions (pop) occur at the same end, referred to as the top of the stack.",
        difficulty: "Easy",
        topic: "Stack"
    },
    {
        id: "dsa-13",
        question: "Which data structure is ideally suited for implementing a Breadth-First Search (BFS) traversal in a graph?",
        options: [
            "Stack",
            "Queue",
            "Array",
            "Binary Tree"
        ],
        answer: 1,
        explanation: "BFS explores nodes level by level. A Queue is used to keep track of the nodes at the current level before moving on to nodes at the next level.",
        difficulty: "Easy",
        topic: "BFS"
    },
    {
        id: "dsa-14",
        question: "What is the maximum number of nodes at level 'L' of a binary tree?",
        options: [
            "L",
            "2^L",
            "2^L - 1",
            "2^(L+1) - 1"
        ],
        answer: 1,
        explanation: "In a binary tree, the root is at level 0 and has 2^0 = 1 node. Level 1 has 2^1 = 2 nodes. Therefore, level L can have a maximum of 2^L nodes.",
        difficulty: "Easy",
        topic: "Binary Tree"
    },
    {
        id: "dsa-15",
        question: "What is the worst-case time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "A balanced BST (like AVL or Red-Black tree) guarantees that the height of the tree is O(log n). Searching requires traversing from the root to a leaf, taking O(log n) time.",
        difficulty: "Easy",
        topic: "BST"
    },
    {
        id: "dsa-16",
        question: "Which of the following is NOT a linear data structure?",
        options: [
            "Array",
            "Linked List",
            "Stack",
            "Binary Tree"
        ],
        answer: 3,
        explanation: "Arrays, Linked Lists, and Stacks arrange data in a sequential, linear manner. A Binary Tree is a hierarchical, non-linear data structure.",
        difficulty: "Easy",
        topic: "Introduction to DSA"
    },
    {
        id: "dsa-17",
        question: "What happens when you dequeue an element from an empty queue?",
        options: [
            "It returns 0.",
            "It returns NULL or throws an Underflow exception.",
            "It returns the last element that was dequeued.",
            "The program automatically resizes the queue."
        ],
        answer: 1,
        explanation: "Attempting to remove an element from an empty queue is an illegal operation known as queue underflow. It typically results in returning a null value or throwing an exception.",
        difficulty: "Easy",
        topic: "Queue"
    },
    {
        id: "dsa-18",
        question: "Which traversal of a binary tree visits the nodes in the order: Left, Root, Right?",
        options: [
            "Pre-order",
            "In-order",
            "Post-order",
            "Level-order"
        ],
        answer: 1,
        explanation: "In-order traversal visits the left subtree first, then the root node, and finally the right subtree. For a BST, this yields nodes in ascending sorted order.",
        difficulty: "Easy",
        topic: "Tree Traversals"
    },
    {
        id: "dsa-19",
        question: "In hashing, what is a collision?",
        options: [
            "When the hash table is completely full.",
            "When two different keys map to the same hash value (index).",
            "When a key is inserted at the wrong index.",
            "When the hash function takes too long to compute."
        ],
        answer: 1,
        explanation: "A collision occurs when the hash function generates the same index for two or more distinct keys. Collision resolution techniques (like chaining or open addressing) are then required.",
        difficulty: "Easy",
        topic: "Hashing"
    },
    {
        id: "dsa-20",
        question: "Which graph representation is most space-efficient for a sparse graph?",
        options: [
            "Adjacency Matrix",
            "Adjacency List",
            "Incidence Matrix",
            "Edge List with duplicate removal"
        ],
        answer: 1,
        explanation: "An Adjacency Matrix requires O(V^2) space regardless of the number of edges. An Adjacency List requires O(V + E) space, which is much more efficient when E is significantly less than V^2 (sparse graph).",
        difficulty: "Easy",
        topic: "Adjacency List"
    },
    {
        id: "dsa-21",
        question: "What is the primary purpose of a dummy node (sentinel node) in a linked list?",
        options: [
            "To store the length of the linked list.",
            "To simplify edge cases like insertion/deletion at the head.",
            "To increase the speed of traversal.",
            "To dynamically resize the linked list."
        ],
        answer: 1,
        explanation: "A dummy node points to the head of the list. It ensures that every node in the actual list has a previous node, eliminating the need for special conditional logic when inserting or deleting at the head.",
        difficulty: "Easy",
        topic: "Singly Linked List"
    },
    {
        id: "dsa-22",
        question: "Which of the following is an example of a stable sorting algorithm?",
        options: [
            "Quick Sort",
            "Heap Sort",
            "Selection Sort",
            "Merge Sort"
        ],
        answer: 3,
        explanation: "Merge Sort is stable because it only merges elements. If two elements are equal, the element from the left subarray is placed before the element from the right subarray, preserving their original relative order.",
        difficulty: "Easy",
        topic: "Stability of Sorting"
    },
    {
        id: "dsa-23",
        question: "What is the time complexity of inserting an element at the beginning of a singly linked list (assuming you have a pointer to the head)?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "Inserting at the head simply involves creating a new node, pointing its 'next' to the current head, and updating the head pointer. This requires a constant number of operations, O(1).",
        difficulty: "Easy",
        topic: "Singly Linked List"
    },
    {
        id: "dsa-24",
        question: "In a Max Heap, where is the maximum element located?",
        options: [
            "At any leaf node",
            "At the leftmost leaf node",
            "At the root node",
            "At the rightmost child of the root"
        ],
        answer: 2,
        explanation: "A Max Heap is a complete binary tree where the value of every parent node is greater than or equal to the values of its children. Thus, the absolute maximum must be at the root.",
        difficulty: "Easy",
        topic: "Max Heap"
    },
    {
        id: "dsa-25",
        question: "Which data structure is used to check for balanced parentheses in an expression?",
        options: [
            "Queue",
            "Stack",
            "Array",
            "Tree"
        ],
        answer: 1,
        explanation: "A stack is ideal because the most recently opened parenthesis must be closed first (LIFO property). Push opening brackets, pop and match when encountering closing brackets.",
        difficulty: "Easy",
        topic: "Applications of Stack"
    },
    {
        id: "dsa-26",
        question: "What is a full binary tree?",
        options: [
            "A tree where all levels are completely filled except possibly the last.",
            "A tree where every node has either 0 or 2 children.",
            "A tree with exactly two children for the root only.",
            "A tree where all leaf nodes are at the same level."
        ],
        answer: 1,
        explanation: "By definition, a full binary tree (also called a strict binary tree) is one in which every node has either zero or exactly two children. (Option A describes a complete binary tree).",
        difficulty: "Easy",
        topic: "Binary Tree"
    },
    {
        id: "dsa-27",
        question: "In a circular queue with an array of size N, what is the maximum number of elements it can hold?",
        options: [
            "N",
            "N - 1",
            "N + 1",
            "2N"
        ],
        answer: 1,
        explanation: "To differentiate between an empty queue and a full queue (where front == rear), one slot is typically left empty. Thus, a circular queue of size N holds a maximum of N - 1 elements.",
        difficulty: "Easy",
        topic: "Circular Queue"
    },
    {
        id: "dsa-28",
        question: "Which of the following algorithms uses a divide-and-conquer strategy?",
        options: [
            "Bubble Sort",
            "Merge Sort",
            "Insertion Sort",
            "Selection Sort"
        ],
        answer: 1,
        explanation: "Merge Sort divides the array into two halves, recursively sorts them, and then merges the sorted halves. This is a classic example of the divide-and-conquer paradigm.",
        difficulty: "Easy",
        topic: "Divide and Conquer"
    },
    {
        id: "dsa-29",
        question: "What is the degree of a node in a tree?",
        options: [
            "The number of edges from the root to the node.",
            "The total number of children a node has.",
            "The depth of the subtree rooted at that node.",
            "The number of ancestors the node has."
        ],
        answer: 1,
        explanation: "The degree of a node in a tree is defined as the number of direct children it possesses. A leaf node has a degree of 0.",
        difficulty: "Easy",
        topic: "Binary Tree"
    },
    {
        id: "dsa-30",
        question: "Which sorting algorithm works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning?",
        options: [
            "Bubble Sort",
            "Insertion Sort",
            "Selection Sort",
            "Quick Sort"
        ],
        answer: 2,
        explanation: "Selection Sort maintains two subarrays: sorted and unsorted. In every iteration, it scans the unsorted subarray to find the minimum element and swaps it with the first unsorted element.",
        difficulty: "Easy",
        topic: "Selection Sort"
    },
    {
        id: "dsa-31",
        question: "What is tail recursion?",
        options: [
            "A recursive function that calls itself more than once.",
            "A recursive function where the recursive call is the very last operation performed.",
            "A recursive function that has no base case.",
            "A recursive function used specifically for trees."
        ],
        answer: 1,
        explanation: "In tail recursion, the recursive call is the final action in the function. This allows compilers to optimize it into a loop, preventing stack overflow by reusing the current stack frame.",
        difficulty: "Easy",
        topic: "Tail Recursion"
    },
    {
        id: "dsa-32",
        question: "What is the time complexity of deleting a node from a doubly linked list, given a pointer to that node?",
        options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n^2)"
        ],
        answer: 0,
        explanation: "Because it is a doubly linked list, you have direct access to both the previous and next nodes via the given pointer. Adjusting a few pointers takes constant time O(1).",
        difficulty: "Easy",
        topic: "Doubly Linked List"
    },
    {
        id: "dsa-33",
        question: "In a 2D array of size M x N, what is the formula to access the element at row 'i' and column 'j' (assuming row-major order and 0-based indexing)?",
        options: [
            "base_address + (i * N + j) * element_size",
            "base_address + (j * M + i) * element_size",
            "base_address + (i * M + j) * element_size",
            "base_address + (i + j) * element_size"
        ],
        answer: 0,
        explanation: "In row-major order, elements of a row are contiguous. To skip 'i' complete rows (each of size N) and 'j' columns in the current row, the offset is (i * N + j).",
        difficulty: "Easy",
        topic: "2D Arrays"
    },
    {
        id: "dsa-34",
        question: "Which of the following is true about a deque (double-ended queue)?",
        options: [
            "Elements can only be added at the rear.",
            "Elements can only be removed from the front.",
            "Elements can be added or removed from both ends.",
            "It follows a LIFO principle strictly."
        ],
        answer: 2,
        explanation: "A deque (Double-Ended Queue) is a generalized version of a queue that allows insertion and deletion of elements at both the front and the rear ends.",
        difficulty: "Easy",
        topic: "Deque"
    },
    {
        id: "dsa-35",
        question: "What is the primary condition for binary search to work correctly?",
        options: [
            "The array must be of even length.",
            "The array must be sorted.",
            "The array must contain only positive integers.",
            "The array must not contain duplicate elements."
        ],
        answer: 1,
        explanation: "Binary search relies on comparing the target value to the middle element and eliminating half of the remaining array. This is only valid if the array is sorted.",
        difficulty: "Easy",
        topic: "Binary Search"
    },
    {
        id: "dsa-36",
        question: "What is the worst-case time complexity of Linear Search?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "Linear search checks every element sequentially. In the worst case (the element is at the end or not in the array), it performs n comparisons, yielding O(n) complexity.",
        difficulty: "Easy",
        topic: "Linear Search"
    },
    {
        id: "dsa-37",
        question: "Which of the following is NOT a method for collision resolution in hash tables?",
        options: [
            "Chaining",
            "Linear Probing",
            "Quadratic Probing",
            "Binary Search Tree Insertion"
        ],
        answer: 3,
        explanation: "Chaining, Linear Probing, and Quadratic Probing are standard collision resolution techniques. BST insertion is a separate data structure operation, not a hash collision resolution method.",
        difficulty: "Easy",
        topic: "Collision Resolution"
    },
    {
        id: "dsa-38",
        question: "In graph theory, what is a path?",
        options: [
            "A cycle that visits every vertex exactly once.",
            "A sequence of edges that connects a sequence of vertices without repeating any vertex.",
            "The number of edges connected to a single vertex.",
            "A subgraph that is completely disconnected."
        ],
        answer: 1,
        explanation: "A path is defined as a sequence of vertices connected by edges, where no vertex is repeated. (If vertices can be repeated, it is called a walk).",
        difficulty: "Easy",
        topic: "Graphs"
    },
    {
        id: "dsa-39",
        question: "What is an acyclic graph?",
        options: [
            "A graph with no edges.",
            "A graph that contains at least one cycle.",
            "A graph that does not contain any cycles.",
            "A graph where all vertices have the same degree."
        ],
        answer: 2,
        explanation: "An acyclic graph is a graph that has no closed loops or cycles. A directed acyclic graph (DAG) is particularly important in scheduling and topological sorting.",
        difficulty: "Easy",
        topic: "Cycle Detection"
    },
    {
        id: "dsa-40",
        question: "Which traversal technique is used to convert an expression tree into a postfix notation?",
        options: [
            "In-order traversal",
            "Pre-order traversal",
            "Post-order traversal",
            "Level-order traversal"
        ],
        answer: 2,
        explanation: "Post-order traversal (Left, Right, Root) processes the operands before the operator, which is exactly the structure of postfix (Reverse Polish) notation.",
        difficulty: "Easy",
        topic: "Tree Traversals"
    },
    {
        id: "dsa-41",
        question: "What is memoization in the context of Dynamic Programming?",
        options: [
            "Solving a problem by breaking it into smaller subproblems iteratively.",
            "Storing the results of expensive function calls and returning the cached result when the same inputs occur again.",
            "Ignoring overlapping subproblems to save memory.",
            "A technique to convert a recursive algorithm into a greedy one."
        ],
        answer: 1,
        explanation: "Memoization is a top-down DP technique where you cache the results of subproblems (usually using a hash map or array) to avoid redundant calculations during recursion.",
        difficulty: "Medium",
        topic: "Memoization"
    },
    {
        id: "dsa-42",
        question: "What is the time complexity of building a Min Heap from an unsorted array?",
        options: [
            "O(n log n)",
            "O(n^2)",
            "O(n)",
            "O(log n)"
        ],
        answer: 2,
        explanation: "Building a heap using the heapify procedure (starting from the last non-leaf node down to the root) takes O(n) time, not O(n log n), because most nodes are at the bottom and take less time to heapify.",
        difficulty: "Medium",
        topic: "Min Heap"
    },
    {
        id: "dsa-43",
        question: "In an AVL tree, what is the maximum allowed difference in height between the left and right subtrees of any node?",
        options: [
            "0",
            "1",
            "2",
            "log n"
        ],
        answer: 1,
        explanation: "An AVL tree is a self-balancing BST where the balance factor (height of left subtree minus height of right subtree) of every node must be -1, 0, or 1.",
        difficulty: "Medium",
        topic: "AVL Tree"
    },
    {
        id: "dsa-44",
        question: "What is the time complexity of finding the Longest Common Subsequence (LCS) of two strings of lengths M and N using standard Dynamic Programming?",
        options: [
            "O(M + N)",
            "O(M * N)",
            "O(2^(M+N))",
            "O(M * log N)"
        ],
        answer: 1,
        explanation: "The standard DP approach for LCS uses a 2D table of size (M+1) x (N+1). Filling each cell takes O(1) time, leading to a total time complexity of O(M * N).",
        difficulty: "Medium",
        topic: "Longest Common Subsequence"
    },
    {
        id: "dsa-45",
        question: "Which algorithm is most efficient for finding the shortest path from a single source to all other nodes in a graph with negative edge weights (assuming no negative cycles)?",
        options: [
            "Dijkstra's Algorithm",
            "Kruskal's Algorithm",
            "Bellman-Ford Algorithm",
            "Floyd-Warshall Algorithm"
        ],
        answer: 2,
        explanation: "Dijkstra's algorithm fails with negative edge weights. Bellman-Ford can handle negative weights as long as there are no negative weight cycles, taking O(V*E) time.",
        difficulty: "Medium",
        topic: "Bellman Ford"
    },
    {
        id: "dsa-46",
        question: "What is a Trie primarily used for?",
        options: [
            "Sorting arrays of integers.",
            "Efficient retrieval of strings and prefix matching.",
            "Balancing binary search trees.",
            "Finding the shortest path in a weighted graph."
        ],
        answer: 1,
        explanation: "A Trie (prefix tree) stores strings character by character. It is highly optimized for operations like autocomplete, spell checking, and prefix-based searches.",
        difficulty: "Medium",
        topic: "Trie"
    },
    {
        id: "dsa-47",
        question: "In Disjoint Set Union (Union-Find), what is Path Compression used for?",
        options: [
            "To merge two sets faster.",
            "To flatten the structure of the tree during Find() to make future queries faster.",
            "To detect cycles in a graph.",
            "To balance the tree by rank during Union operations."
        ],
        answer: 1,
        explanation: "Path compression is an optimization applied during the Find operation. It makes every node on the path point directly to the root, drastically reducing the tree height and speeding up subsequent finds. (Union by Rank handles balancing).",
        difficulty: "Medium",
        topic: "Disjoint Set (Union Find)"
    },
    {
        id: "dsa-48",
        question: "Which of the following sorting algorithms is NOT a comparison-based sort?",
        options: [
            "Merge Sort",
            "Quick Sort",
            "Counting Sort",
            "Heap Sort"
        ],
        answer: 2,
        explanation: "Counting sort does not compare elements directly. Instead, it counts the occurrences of each distinct key value and uses arithmetic to determine positions. It bypasses the O(n log n) lower bound of comparison sorts.",
        difficulty: "Medium",
        topic: "Counting Sort"
    },
    {
        id: "dsa-49",
        question: "What is the time complexity of Radix Sort?",
        options: [
            "O(n log n)",
            "O(nk), where k is the number of digits in the maximum number.",
            "O(n^2)",
            "O(n + k), where k is the range of input."
        ],
        answer: 1,
        explanation: "Radix sort processes each digit of the numbers. If there are 'n' numbers and 'k' digits, it performs 'k' passes of a stable sort (like counting sort), resulting in O(nk) time complexity.",
        difficulty: "Medium",
        topic: "Radix Sort"
    },
    {
        id: "dsa-50",
        question: "What is the space complexity of Depth-First Search (DFS) in a graph represented using an adjacency list?",
        options: [
            "O(V)",
            "O(E)",
            "O(V + E)",
            "O(V^2)"
        ],
        answer: 0,
        explanation: "The space complexity of DFS is dominated by the recursion stack (or an explicit stack). In the worst case, the stack can contain all vertices (e.g., a straight line graph), taking O(V) space. The adjacency list itself takes O(V+E), but the *algorithm's* extra space is O(V).",
        difficulty: "Medium",
        topic: "DFS"
    },
    {
        id: "dsa-51",
        question: "Which of the following problems can be solved using a Segment Tree?",
        options: [
            "Finding the shortest path between two nodes.",
            "Efficiently answering range minimum/sum queries with point updates.",
            "Sorting a list of strings alphabetically.",
            "Detecting a cycle in a directed graph."
        ],
        answer: 1,
        explanation: "A Segment Tree is a binary tree used for storing information about intervals or segments. It allows answering range queries (like sum, min, max) and performing point updates in O(log n) time.",
        difficulty: "Medium",
        topic: "Segment Tree"
    },
    {
        id: "dsa-52",
        question: "In the context of hashing, what is the load factor?",
        options: [
            "The number of collisions per bucket.",
            "The ratio of the number of elements stored to the size of the hash table.",
            "The time taken to compute the hash function.",
            "The maximum number of elements a bucket can hold."
        ],
        answer: 1,
        explanation: "Load factor = n / m, where n is the number of entries and m is the number of buckets. A high load factor increases collisions and decreases performance in open addressing.",
        difficulty: "Medium",
        topic: "Hash Table"
    },
    {
        id: "dsa-53",
        question: "What is the primary difference between Kruskal's and Prim's algorithms for finding a Minimum Spanning Tree (MST)?",
        options: [
            "Prim's works on disconnected graphs, Kruskal's does not.",
            "Kruskal's uses a priority queue, Prim's uses a hash map.",
            "Prim's grows the MST from a single starting vertex, Kruskal's builds it by adding the cheapest edge globally that doesn't form a cycle.",
            "Kruskal's only works for directed graphs."
        ],
        answer: 2,
        explanation: "Prim's is a vertex-based algorithm that adds the minimum weight edge connected to the growing tree. Kruskal's is an edge-based algorithm that sorts all edges and adds them if they connect disconnected components.",
        difficulty: "Medium",
        topic: "Minimum Spanning Tree"
    },
    {
        id: "dsa-54",
        question: "What is the time complexity of the partition step in Quick Sort?",
        options: [
            "O(n log n)",
            "O(n)",
            "O(log n)",
            "O(1)"
        ],
        answer: 1,
        explanation: "The partition step involves iterating through the array once using two pointers (or an index) to place elements smaller than the pivot on one side and larger on the other. This takes O(n) time.",
        difficulty: "Medium",
        topic: "Quick Sort"
    },
    {
        id: "dsa-55",
        question: "Which data structure is best suited for implementing a LRU (Least Recently Used) Cache?",
        options: [
            "Array",
            "Singly Linked List",
            "Doubly Linked List paired with a Hash Map",
            "Binary Search Tree"
        ],
        answer: 2,
        explanation: "A Hash Map provides O(1) lookup for cache keys. A Doubly Linked List allows O(1) removal and addition of nodes (to move recently accessed items to the front and remove the tail).",
        difficulty: "Medium",
        topic: "Doubly Linked List"
    },
    {
        id: "dsa-56",
        question: "What does the 'heapify' process do in a binary heap?",
        options: [
            "Creates a new node at the end of the heap.",
            "Restores the heap property by moving a node up or down the tree as needed.",
            "Sorts the entire heap array.",
            "Merges two heaps into one."
        ],
        answer: 1,
        explanation: "Heapify is a crucial operation that checks if a node and its children violate the heap property (min or max), and if so, swaps the node with the appropriate child and recurses until the property is restored.",
        difficulty: "Medium",
        topic: "Heap"
    },
    {
        id: "dsa-57",
        question: "In a Red-Black Tree, why are nodes colored red or black?",
        options: [
            "To indicate whether the node is a leaf or an internal node.",
            "To ensure the tree remains perfectly balanced like an AVL tree.",
            "To provide a simple way to enforce approximate balancing, guaranteeing O(log n) operations.",
            "To optimize memory usage during deletion."
        ],
        answer: 2,
        explanation: "Red-Black trees use colors and a set of rules (e.g., root is black, red nodes cannot have red children) to ensure the tree remains approximately balanced, keeping the longest path at most twice the length of the shortest path.",
        difficulty: "Medium",
        topic: "Red Black Tree"
    },
    {
        id: "dsa-58",
        question: "What is the time complexity of Floyd-Warshall's algorithm for finding all-pairs shortest paths?",
        options: [
            "O(V^2)",
            "O(V^2 log V)",
            "O(V^3)",
            "O(V * E)"
        ],
        answer: 2,
        explanation: "Floyd-Warshall uses three nested loops, each running from 1 to V (number of vertices). It checks if the path from i to j can be shortened by going through vertex k, resulting in O(V^3) time complexity.",
        difficulty: "Medium",
        topic: "Floyd Warshall"
    },
    {
        id: "dsa-59",
        question: "Which algorithm is used to find strongly connected components in a directed graph?",
        options: [
            "Prim's Algorithm",
            "Kosaraju's Algorithm",
            "Dijkstra's Algorithm",
            "Bellman-Ford Algorithm"
        ],
        answer: 1,
        explanation: "Kosaraju's algorithm finds strongly connected components (SCCs) by performing two DFS traversals: one on the original graph and one on the transposed graph (edges reversed).",
        difficulty: "Medium",
        topic: "Strongly Connected Components"
    },
    {
        id: "dsa-60",
        question: "What is the worst-case time complexity of Quick Sort?",
        options: [
            "O(n log n)",
            "O(n^2)",
            "O(n)",
            "O(log n)"
        ],
        answer: 1,
        explanation: "If the pivot selection is consistently poor (e.g., the smallest or largest element is always chosen in an already sorted array), the partition divides the array into sizes 0 and n-1, leading to O(n^2) time.",
        difficulty: "Medium",
        topic: "Worst Case"
    },
    {
        id: "dsa-61",
        question: "In a circular linked list, how do you identify the end of the list?",
        options: [
            "The next pointer of the last node points to the head node.",
            "The next pointer of the last node is null.",
            "The last node contains a special flag.",
            "The head node points to the last node."
        ],
        answer: 0,
        explanation: "Unlike a standard linked list where the last node's 'next' is null, in a circular linked list, the 'next' pointer of the last node wraps around and points back to the first node (head).",
        difficulty: "Medium",
        topic: "Circular Linked List"
    },
    {
        id: "dsa-62",
        question: "Which of the following is an application of Topological Sorting?",
        options: [
            "Finding the shortest path in a weighted graph.",
            "Determining the order of tasks to execute when some tasks depend on others.",
            "Finding the minimum spanning tree.",
            "Detecting if an undirected graph is connected."
        ],
        answer: 1,
        explanation: "Topological sort produces a linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge (u, v), u comes before v. This perfectly models task scheduling with dependencies.",
        difficulty: "Medium",
        topic: "Topological Sort"
    },
    {
        id: "dsa-63",
        question: "What is the space complexity of Merge Sort?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "Standard Merge Sort requires an auxiliary array of the same size as the input array to merge the sorted subarrays. Thus, it requires O(n) additional space.",
        difficulty: "Medium",
        topic: "Merge Sort"
    },
    {
        id: "dsa-64",
        question: "How does Insertion Sort handle an array that is already sorted?",
        options: [
            "It still takes O(n^2) time.",
            "It takes O(n) time (best case).",
            "It takes O(log n) time.",
            "It enters an infinite loop."
        ],
        answer: 1,
        explanation: "In an already sorted array, the inner loop of Insertion Sort never executes because the current element is always greater than or equal to the last element of the sorted portion. It only makes n-1 comparisons, resulting in O(n) time.",
        difficulty: "Medium",
        topic: "Insertion Sort"
    },
    {
        id: "dsa-65",
        question: "What is a bipartite graph?",
        options: [
            "A graph that can be divided into two sets of vertices such that no two vertices within the same set are adjacent.",
            "A graph with exactly two connected components.",
            "A graph where all vertices have a degree of 2.",
            "A graph that contains exactly two cycles."
        ],
        answer: 0,
        explanation: "A bipartite graph's vertices can be partitioned into two disjoint sets U and V, where every edge connects a vertex in U to one in V. Edges within the same set do not exist.",
        difficulty: "Medium",
        topic: "Bipartite Graph"
    },
    {
        id: "dsa-66",
        question: "What is the time complexity of finding an element in a balanced BST vs. a Hash Table?",
        options: [
            "BST: O(1), Hash Table: O(log n)",
            "BST: O(log n), Hash Table: O(1) average",
            "BST: O(n), Hash Table: O(n)",
            "BST: O(log n), Hash Table: O(log n)"
        ],
        answer: 1,
        explanation: "A balanced BST restricts height to O(log n), so search takes O(log n). A well-implemented hash table provides O(1) average time complexity for lookups, though O(n) in the worst case.",
        difficulty: "Medium",
        topic: "Hash Table"
    },
    {
        id: "dsa-67",
        question: "Which of the following is true about a Fenwick Tree (Binary Indexed Tree) compared to a Segment Tree?",
        options: [
            "Fenwick Tree is faster for range minimum queries.",
            "Fenwick Tree uses more memory than a Segment Tree.",
            "Fenwick Tree is easier to implement and uses less memory, but is limited to specific operations like sum/XOR.",
            "Fenwick Tree can handle range updates and range queries more efficiently."
        ],
        answer: 2,
        explanation: "A Fenwick Tree (BIT) is very concise, easy to code, and uses O(n) space. However, it is primarily designed for point updates and prefix sum queries, unlike Segment Trees which are more versatile but heavier.",
        difficulty: "Medium",
        topic: "Fenwick Tree (BIT)"
    },
    {
        id: "dsa-68",
        question: "In the sliding window technique, what is typically the time complexity to find a maximum sum subarray of size K in an array of size N?",
        options: [
            "O(N^2)",
            "O(N log N)",
            "O(N)",
            "O(K)"
        ],
        answer: 2,
        explanation: "The sliding window technique maintains a running sum of the current window of size K. As the window slides one element at a time, it subtracts the outgoing element and adds the incoming element in O(1) per step, taking O(N) total time.",
        difficulty: "Medium",
        topic: "Sliding Window"
    },
    {
        id: "dsa-69",
        question: "What is the role of the 'pivot' in the Quick Sort algorithm?",
        options: [
            "It is the first element of the array.",
            "It is an element used to partition the array into two parts: elements less than the pivot and elements greater than the pivot.",
            "It is the middle element that is automatically sorted.",
            "It is used to calculate the time complexity."
        ],
        answer: 1,
        explanation: "The pivot is the central element in Quick Sort's divide-and-conquer strategy. The partition step arranges the array so that all elements smaller than the pivot are to its left, and all larger are to its right.",
        difficulty: "Medium",
        topic: "Quick Sort"
    },
    {
        id: "dsa-70",
        question: "Which of the following is an advantage of Open Addressing over Chaining in hash tables?",
        options: [
            "It is immune to the clustering problem.",
            "It stores all data directly in the array, which can be more cache-friendly.",
            "It never requires resizing the hash table.",
            "It allows the hash table to hold more elements than its size."
        ],
        answer: 1,
        explanation: "In open addressing, all elements are stored in the underlying array itself. This spatial locality makes it more cache-friendly compared to chaining, which stores elements in linked lists scattered in memory.",
        difficulty: "Medium",
        topic: "Open Addressing"
    },
    {
        id: "dsa-71",
        question: "What is the time complexity of the 'next_permutation' function in C++ STL?",
        options: [
            "O(1)",
            "O(n)",
            "O(n log n)",
            "O(n!)"
        ],
        answer: 1,
        explanation: "The `next_permutation` function modifies the sequence in-place to the lexicographically next greater permutation. It involves a single reverse operation at worst, taking O(n) time where n is the sequence length.",
        difficulty: "Medium",
        topic: "next_permutation()"
    },
    {
        id: "dsa-72",
        question: "In a priority queue implemented using a binary heap, what is the time complexity of extracting the minimum element?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "Extracting the minimum involves removing the root (O(1)), replacing it with the last element, and then calling heapify down to restore the heap property, which takes O(log n) time.",
        difficulty: "Medium",
        topic: "Priority Queue"
    },
    {
        id: "dsa-73",
        question: "What is the main characteristic of a greedy algorithm that makes it unsuitable for the 0/1 Knapsack problem?",
        options: [
            "It takes too much time.",
            "It requires sorting the items.",
            "Making locally optimal choices (e.g., picking the item with the highest value-to-weight ratio) does not guarantee a globally optimal solution.",
            "The 0/1 Knapsack problem does not have overlapping subproblems."
        ],
        answer: 2,
        explanation: "In the 0/1 Knapsack problem, you cannot take fractions of items. A greedy approach might fill the knapsack with a heavy, high-ratio item, leaving no room for smaller items that would yield a higher total value. Dynamic Programming is required.",
        difficulty: "Medium",
        topic: "0/1 Knapsack"
    },
    {
        id: "dsa-74",
        question: "Which of the following is a valid invariant during the execution of Dijkstra's algorithm?",
        options: [
            "All edge weights are negative.",
            "The shortest path to a vertex is finalized the first time it is visited.",
            "The distance to a vertex in the priority queue is the shortest distance from the source to that vertex.",
            "Once a vertex is added to the shortest path tree, its distance value never changes."
        ],
        answer: 3,
        explanation: "Dijkstra's algorithm extracts the vertex with the minimum distance from the unvisited set. Once extracted and added to the visited set (shortest path tree), its shortest distance is guaranteed and never updated again.",
        difficulty: "Medium",
        topic: "Dijkstra"
    },
    {
        id: "dsa-75",
        question: "What is the purpose of a 'difference array'?",
        options: [
            "To store the absolute difference between adjacent elements.",
            "To efficiently apply range updates (adding a value to a range) in O(1) time.",
            "To sort an array of differences.",
            "To find the longest increasing subsequence."
        ],
        answer: 1,
        explanation: "A difference array D is constructed such that D[i] = A[i] - A[i-1]. To add 'v' to elements from index l to r, you just do D[l] += v and D[r+1] -= v. After all updates, a prefix sum reconstructs the final array in O(n).",
        difficulty: "Medium",
        topic: "Difference Array"
    },
    {
        id: "dsa-76",
        question: "In Huffman Coding, which characters are assigned the shortest codes?",
        options: [
            "Characters that appear first in the string alphabetically.",
            "Characters with the highest frequency of occurrence.",
            "Characters with the lowest frequency of occurrence.",
            "All characters are assigned codes of the same length."
        ],
        answer: 1,
        explanation: "Huffman coding is a greedy algorithm that builds an optimal prefix tree. Characters with higher frequencies are placed closer to the root of the tree, resulting in shorter binary codes.",
        difficulty: "Medium",
        topic: "Huffman Coding"
    },
    {
        id: "dsa-77",
        question: "What is the time complexity of the Boyer-Moore string matching algorithm in the best case?",
        options: [
            "O(n + m)",
            "O(n/m)",
            "O(n * m)",
            "O(m^2)"
        ],
        answer: 1,
        explanation: "In the best case (e.g., the text consists of repetitions of the last character of the pattern), the Boyer-Moore algorithm can skip ahead by the length of the pattern 'm' at each step, resulting in a sub-linear O(n/m) complexity.",
        difficulty: "Medium",
        topic: "String Matching"
    },
    {
        id: "dsa-78",
        question: "What is the time complexity of the 'lower_bound' function in C++ STL on a sorted container (like std::vector)?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "`lower_bound` uses binary search to find the first element that is not less than a given value. Binary search operates in O(log n) time on a random-access iterator.",
        difficulty: "Medium",
        topic: "lower_bound()"
    },
    {
        id: "dsa-79",
        question: "Why is Merge Sort preferred over Quick Sort for sorting linked lists?",
        options: [
            "Merge Sort requires O(1) extra space for linked lists.",
            "Linked lists do not support random access, making Quick Sort's partition step inefficient (O(n^2) to find pivots), whereas Merge Sort only requires sequential access.",
            "Quick Sort causes stack overflow on linked lists.",
            "Merge Sort is a stable sort, which is illegal for linked lists."
        ],
        answer: 1,
        explanation: "Quick Sort heavily relies on random access (jumping to the middle, partitioning via indices). Linked lists only support sequential access. Merge Sort can merge linked lists in O(1) extra space and O(n) time sequentially.",
        difficulty: "Medium",
        topic: "Merge Sort"
    },
    {
        id: "dsa-80",
        question: "What does the 'Two Pointers' technique typically require to be effective?",
        options: [
            "The array must be a linked list.",
            "The array or data structure is usually sorted, or the pointers move towards each other based on a specific monotonic condition.",
            "The array must contain only positive integers.",
            "The array must be of even length."
        ],
        answer: 1,
        explanation: "The two pointers technique often involves one pointer starting at the beginning and another at the end (or both at the beginning moving at different speeds). A sorted array is a very common prerequisite to decide whether to move the left or right pointer.",
        difficulty: "Medium",
        topic: "Two Pointers"
    },
    {
        id: "dsa-81",
        question: "What is the worst-case time complexity of the Activity Selection problem when solved using a greedy algorithm?",
        options: [
            "O(n^2)",
            "O(n log n)",
            "O(n)",
            "O(2^n)"
        ],
        answer: 1,
        explanation: "The greedy approach for Activity Selection requires sorting the activities by their finish times, which takes O(n log n) time. The subsequent iteration to select activities takes O(n) time. The total complexity is O(n log n).",
        difficulty: "Medium",
        topic: "Activity Selection"
    },
    {
        id: "dsa-82",
        question: "In the context of a hash table using chaining, what is the average time complexity of a search operation assuming a good hash function and a load factor of α?",
        options: [
            "O(1)",
            "O(α) which is O(1) if α is bounded by a constant",
            "O(n)",
            "O(log n)"
        ],
        answer: 1,
        explanation: "With chaining, the average length of a chain is the load factor α (n/m). Searching requires hashing O(1) plus traversing the chain O(α). If the table is resized to keep α bounded (e.g., < 1), it resolves to O(1).",
        difficulty: "Medium",
        topic: "Chaining"
    },
    {
        id: "dsa-83",
        question: "Which of the following conditions guarantees that a directed graph is acyclic?",
        options: [
            "The graph is bipartite.",
            "A topological sort of the graph results in a valid linear ordering of all vertices.",
            "The graph has no vertices with an in-degree of 0.",
            "The number of edges is less than the number of vertices."
        ],
        answer: 1,
        explanation: "Topological sorting is only possible for Directed Acyclic Graphs (DAGs). If a topological sort successfully includes all vertices, the graph is guaranteed to be acyclic.",
        difficulty: "Medium",
        topic: "Cycle Detection"
    },
    {
        id: "dsa-84",
        question: "What is the space complexity of the standard recursive implementation of the Longest Increasing Subsequence (LIS) problem without memoization?",
        options: [
            "O(n)",
            "O(n^2)",
            "O(2^n)",
            "O(1) auxiliary space"
        ],
        answer: 2,
        explanation: "Without memoization, the recursive solution explores all possible subsequences. The recursion tree has a depth of n, and each node can branch into 2 choices (include or exclude), leading to O(2^n) time and corresponding stack space.",
        difficulty: "Medium",
        topic: "Longest Increasing Subsequence"
    },
    {
        id: "dsa-85",
        question: "When using the 'sort()' function in C++ STL, which algorithm is typically used for large datasets?",
        options: [
            "Quick Sort exclusively",
            "Introsort (a hybrid of Quick Sort, Heap Sort, and Insertion Sort)",
            "Merge Sort exclusively",
            "Bubble Sort"
        ],
        answer: 1,
        explanation: "C++ STL's `sort()` uses Introsort. It starts with Quick Sort, switches to Heap Sort if the recursion depth exceeds a certain limit (to prevent O(n^2) worst-case), and uses Insertion Sort for small partitions.",
        difficulty: "Medium",
        topic: "sort()"
    },
    {
        id: "dsa-86",
        question: "What is the time complexity of finding the connected components in an undirected graph using BFS/DFS?",
        options: [
            "O(V)",
            "O(E)",
            "O(V + E)",
            "O(V * E)"
        ],
        answer: 2,
        explanation: "To find connected components, you must visit every vertex and every edge at least once. Using an adjacency list, BFS/DFS takes O(V + E) time for the entire traversal.",
        difficulty: "Medium",
        topic: "Connected Components"
    },
    {
        id: "dsa-87",
        question: "Which of the following is true about a Multiset in C++ STL?",
        options: [
            "It stores only unique elements.",
            "It allows duplicate elements and keeps them in sorted order.",
            "It provides O(1) access to the maximum element.",
            "It does not support iterators."
        ],
        answer: 1,
        explanation: "Unlike a `std::set` which stores unique elements, a `std::multiset` allows multiple elements with the same value. Both are typically implemented as Red-Black trees, maintaining sorted order.",
        difficulty: "Medium",
        topic: "Multiset"
    },
    {
        id: "dsa-88",
        question: "In the Fractional Knapsack problem, why can a greedy approach yield the optimal solution?",
        options: [
            "Because the items cannot be broken.",
            "Because taking the fraction of an item with the highest value-to-weight ratio locally is mathematically proven to lead to the global optimum when fractions are allowed.",
            "Because the problem has no overlapping subproblems.",
            "Because the knapsack has infinite capacity."
        ],
        answer: 1,
        explanation: "Since items can be broken into fractions, we can completely fill the knapsack. Greedily picking the item with the highest value/weight ratio, taking as much as possible, and moving to the next ensures no wasted capacity, guaranteeing optimality.",
        difficulty: "Medium",
        topic: "Fractional Knapsack"
    },
    {
        id: "dsa-89",
        question: "What is the time complexity of inserting an element into a standard `std::map` (C++ STL)?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "`std::map` is typically implemented as a balanced Red-Black Tree. Inserting a node requires traversing the tree to find the correct position (O(log n)) and rebalancing (O(log n)), resulting in an overall O(log n) time complexity.",
        difficulty: "Medium",
        topic: "Map"
    },
    {
        id: "dsa-90",
        question: "What is the output of the following C++ code snippet?\nstd::vector<int> v = {10, 20, 30, 40};\nauto it = std::lower_bound(v.begin(), v.end(), 25);\nstd::cout << *it;",
        options: [
            "20",
            "25",
            "30",
            "Undefined behavior"
        ],
        answer: 2,
        explanation: "`lower_bound` returns an iterator to the first element that is *not less than* 25. In the sorted vector {10, 20, 30, 40}, the first element not less than 25 is 30.",
        difficulty: "Medium",
        topic: "lower_bound()"
    },
    {
        id: "dsa-91",
        question: "What is the worst-case time complexity of the N-Queens problem using standard backtracking?",
        options: [
            "O(N!)",
            "O(N^N)",
            "O(2^N)",
            "O(N^2)"
        ],
        answer: 1,
        explanation: "In the worst case, the algorithm tries placing a queen in every row, and for each row, it checks up to N columns. The branching factor is approximately N, and the depth is N, leading to O(N^N) time complexity.",
        difficulty: "Hard",
        topic: "N Queens"
    },
    {
        id: "dsa-92",
        question: "What is the time and space complexity of the optimized DP solution (using two rows) for the 0/1 Knapsack problem with N items and capacity W?",
        options: [
            "Time: O(N*W), Space: O(N*W)",
            "Time: O(N*W), Space: O(W)",
            "Time: O(2^N), Space: O(N)",
            "Time: O(N log W), Space: O(W)"
        ],
        answer: 1,
        explanation: "The standard DP uses a 2D table of size N x W, taking O(N*W) time and space. Since the current row only depends on the previous row, we can optimize space to O(W) by using two 1D arrays (or a single array iterated backwards).",
        difficulty: "Hard",
        topic: "0/1 Knapsack"
    },
    {
        id: "dsa-93",
        question: "In the context of Graph Coloring, what is the chromatic number of a complete graph K_n?",
        options: [
            "1",
            "2",
            "n",
            "n(n-1)/2"
        ],
        answer: 2,
        explanation: "In a complete graph K_n, every vertex is connected to every other vertex. Therefore, no two vertices can share the same color, requiring exactly n distinct colors.",
        difficulty: "Hard",
        topic: "Graph Coloring"
    },
    {
        id: "dsa-94",
        question: "What is the amortized time complexity of inserting an element into a dynamically resizing array (like std::vector in C++)?",
        options: [
            "O(n)",
            "O(n^2)",
            "O(1)",
            "O(log n)"
        ],
        answer: 2,
        explanation: "While an individual insertion might trigger an O(n) resize (allocating a new array and copying elements), these expensive operations happen infrequently. Spread out over n insertions, the cost per insertion averages out to O(1).",
        difficulty: "Hard",
        topic: "Vector"
    },
    {
        id: "dsa-95",
        question: "What is the time complexity of finding the edit distance between two strings of length M and N?",
        options: [
            "O(M + N)",
            "O(M * N)",
            "O(2^(M+N))",
            "O(M * log N)"
        ],
        answer: 1,
        explanation: "Edit distance is typically solved using a 2D DP table of size (M+1) x (N+1). Filling each cell takes O(1) time by comparing adjacent cells, leading to an overall time complexity of O(M * N).",
        difficulty: "Hard",
        topic: "Edit Distance"
    },
    {
        id: "dsa-96",
        question: "Which of the following statements is true about the Branch and Bound technique?",
        options: [
            "It is only used for sorting algorithms.",
            "It is used to solve optimization problems by systematically enumerating candidate solutions while using bounds to prune branches that cannot yield a better solution than the current best.",
            "It guarantees finding a solution in polynomial time.",
            "It does not require a heuristic to function efficiently."
        ],
        answer: 1,
        explanation: "Branch and Bound is used for combinatorial optimization (like TSP or 0/1 Knapsack). It explores the state space tree but uses a bounding function to cut off branches that are guaranteed to be suboptimal.",
        difficulty: "Hard",
        topic: "Branch and Bound"
    },
    {
        id: "dsa-97",
        question: "What is the time complexity of the standard algorithm to find the strongly connected components (SCCs) using Kosaraju's algorithm?",
        options: [
            "O(V)",
            "O(V + E)",
            "O(V^2)",
            "O(V * E)"
        ],
        answer: 1,
        explanation: "Kosaraju's algorithm involves two DFS traversals: one on the original graph and one on the transposed graph. Each DFS takes O(V + E) time using an adjacency list, making the total complexity O(V + E).",
        difficulty: "Hard",
        topic: "Strongly Connected Components"
    },
    {
        id: "dsa-98",
        question: "In a B+ Tree used in databases, where are all the actual data records (or pointers to them) stored?",
        options: [
            "Only in the root node.",
            "In both internal and leaf nodes.",
            "Only in the leaf nodes.",
            "In a separate hash table."
        ],
        answer: 2,
        explanation: "Unlike a B-Tree where data is stored in all nodes, a B+ Tree stores data (or record pointers) exclusively in its leaf nodes. Internal nodes only store keys for routing. This allows for higher fanout and faster range queries.",
        difficulty: "Hard",
        topic: "Introduction to DSA"
    },
    {
        id: "dsa-99",
        question: "What is the time complexity of the Sieve of Eratosthenes to find all prime numbers up to N?",
        options: [
            "O(N)",
            "O(N log log N)",
            "O(N log N)",
            "O(N^2)"
        ],
        answer: 1,
        explanation: "The Sieve of Eratosthenes marks the multiples of each prime. The sum of the harmonic series of primes (1/2 + 1/3 + 1/5 + ...) up to N approaches log log N. Thus, the time complexity is O(N log log N).",
        difficulty: "Hard",
        topic: "Pattern Recognition"
    },
    {
        id: "dsa-100",
        question: "Consider a scenario where you need to frequently find the median of a continuously growing stream of numbers. Which data structure combination is most efficient?",
        options: [
            "A single unsorted array.",
            "A Max Heap to store the lower half and a Min Heap to store the upper half of the numbers.",
            "A balanced BST storing all numbers, searching for the middle element.",
            "Two separate arrays, one sorted ascending and one descending."
        ],
        answer: 1,
        explanation: "By maintaining a Max Heap for the lower half and a Min Heap for the upper half (balancing their sizes), the median can be found in O(1) time (from the roots), and insertions take O(log n) time.",
        difficulty: "Hard",
        topic: "Interview-Level Questions"
    },
    {
        id: "dsa-101",
        question: "What is the worst-case time complexity of the 'find' operation in a Disjoint Set Union (DSU) data structure using ONLY Union by Rank without Path Compression?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "Union by Rank ensures the tree height is at most O(log n). Without path compression, finding the root of a node requires traversing this height, resulting in O(log n) time complexity per operation.",
        difficulty: "Hard",
        topic: "Disjoint Set (Union Find)"
    },
    {
        id: "dsa-102",
        question: "What is the time complexity of Matrix Chain Multiplication solved via Dynamic Programming?",
        options: [
            "O(n^2)",
            "O(n^3)",
            "O(2^n)",
            "O(n^4)"
        ],
        answer: 1,
        explanation: "The DP solution uses a 3-nested loop structure. The outermost loop runs for the chain length L (from 2 to n), and the two inner loops run for the starting index i and ending index j. This results in O(n^3) time complexity.",
        difficulty: "Hard",
        topic: "Matrix Chain Multiplication"
    },
    {
        id: "dsa-103",
        question: "In the context of bit manipulation, what does the expression `n & (n - 1)` achieve?",
        options: [
            "It multiplies n by n-1.",
            "It clears the least significant set bit (rightmost 1) in the binary representation of n.",
            "It sets the least significant bit to 1.",
            "It reverses the bits of n."
        ],
        answer: 1,
        explanation: "Subtracting 1 from n flips all the bits from the least significant set bit to the end. When you AND this with n, it clears that specific least significant set bit. This is commonly used to check if a number is a power of 2.",
        difficulty: "Hard",
        topic: "Bit Manipulation"
    },
    {
        id: "dsa-104",
        question: "What is the time complexity of the subset sum problem (deciding if there is a subset that sums to a target T) using dynamic programming?",
        options: [
            "O(N * T)",
            "O(2^N)",
            "O(N^2)",
            "O(N * log T)"
        ],
        answer: 0,
        explanation: "The DP approach uses a boolean 2D array (or 1D array) of size (N+1) x (T+1). Filling this table takes N * T operations. Note that this is pseudo-polynomial because it depends on the numeric value of the target T, not just the input size.",
        difficulty: "Hard",
        topic: "Subset Sum"
    },
    {
        id: "dsa-105",
        question: "Which of the following is a disadvantage of using an Adjacency Matrix to represent a graph?",
        options: [
            "It takes O(V + E) space.",
            "Checking if an edge exists between two specific vertices takes O(V) time.",
            "Finding all adjacent vertices of a given vertex takes O(V) time, even if the vertex has few neighbors.",
            "It cannot represent weighted graphs."
        ],
        answer: 2,
        explanation: "To find all neighbors of a vertex in an adjacency matrix, you must scan the entire row of size V. If the graph is sparse, most of these checks are wasted, taking O(V) time instead of O(degree).",
        difficulty: "Hard",
        topic: "Adjacency Matrix"
    },
    {
        id: "dsa-106",
        question: "What is the space complexity of the standard recursive solution to the Rat in a Maze problem?",
        options: [
            "O(1)",
            "O(N^2) where N is the size of the maze",
            "O(N^2) for the matrix plus O(N^2) for the recursion stack in the worst case",
            "O(2^(N^2))"
        ],
        answer: 2,
        explanation: "The algorithm requires an O(N^2) matrix to keep track of visited cells. Additionally, in the worst case (a maze with no dead ends), the recursion stack can go as deep as the number of cells, O(N^2).",
        difficulty: "Hard",
        topic: "Rat in a Maze"
    },
    {
        id: "dsa-107",
        question: "In the context of advanced string matching, what is the time complexity of the Knuth-Morris-Pratt (KMP) algorithm?",
        options: [
            "O(n * m)",
            "O(n + m)",
            "O(n^2)",
            "O(m^2)"
        ],
        answer: 1,
        explanation: "KMP preprocesses the pattern in O(m) time to create the Longest Prefix Suffix (LPS) array. It then scans the text in O(n) time without ever backing up the text pointer. Total time is O(n + m).",
        difficulty: "Hard",
        topic: "String Matching"
    },
    {
        id: "dsa-108",
        question: "What is the primary difference between a `std::map` and a `std::unordered_map` in C++?",
        options: [
            "`std::map` is implemented using a hash table, while `std::unordered_map` uses a Red-Black tree.",
            "`std::map` maintains sorted order of keys and has O(log n) operations, while `std::unordered_map` does not maintain order and has average O(1) operations.",
            "`std::unordered_map` does not allow duplicate keys, but `std::map` does.",
            "`std::map` can only store integer keys."
        ],
        answer: 1,
        explanation: "`std::map` is a sorted associative container (usually Red-Black tree) providing O(log n) time complexity. `std::unordered_map` is a hash table providing average O(1) time complexity but no ordering guarantees.",
        difficulty: "Hard",
        topic: "Unordered Map"
    },
    {
        id: "dsa-109",
        question: "Given a string of length N, what is the time complexity of the Z-Algorithm for pattern matching?",
        options: [
            "O(N * M)",
            "O(N + M)",
            "O(N log N)",
            "O(N^2)"
        ],
        answer: 1,
        explanation: "The Z-Algorithm computes the Z-array (length of the longest substring starting from i that matches the prefix) in linear time O(N). Combined with the pattern length M, the overall matching time is O(N + M).",
        difficulty: "Hard",
        topic: "String Matching"
    },
    {
        id: "dsa-110",
        question: "What is the worst-case time complexity of the Coin Change problem (finding the minimum number of coins) using BFS?",
        options: [
            "O(V * E) where V is the target and E is the number of coins",
            "O(amount * number of coins)",
            "O(amount^number of coins)",
            "O(2^amount)"
        ],
        answer: 0,
        explanation: "BFS treats the problem as a shortest path problem in an unweighted graph where nodes are amounts (0 to target) and edges are coin additions. The worst-case time complexity is O(V * E) = O(target * number of coins).",
        difficulty: "Hard",
        topic: "Coin Change"
    },
    {
        id: "dsa-111",
        question: "In a Sudoku solver using backtracking, what is the role of the 'isSafe' function?",
        options: [
            "It checks if the entire grid is solved.",
            "It validates that placing a number in a cell does not violate the row, column, and 3x3 subgrid constraints.",
            "It finds the next empty cell.",
            "It optimizes the memory usage of the grid."
        ],
        answer: 1,
        explanation: "Before placing a number in an empty cell, the `isSafe` function checks the current row, column, and the corresponding 3x3 subgrid to ensure the number doesn't already exist, thus maintaining the rules of Sudoku.",
        difficulty: "Hard",
        topic: "Sudoku"
    },
    {
        id: "dsa-112",
        question: "What is the time complexity of finding the Longest Palindromic Substring using Manacher's Algorithm?",
        options: [
            "O(n^2)",
            "O(n log n)",
            "O(n)",
            "O(2^n)"
        ],
        answer: 2,
        explanation: "Manacher's Algorithm processes the string linearly by exploiting the symmetry of palindromes around a center. It calculates the radius of the longest palindrome at each center in O(1) amortized time per step, resulting in O(n) total time.",
        difficulty: "Hard",
        topic: "Optimization Techniques"
    },
    {
        id: "dsa-113",
        question: "When solving the Travelling Salesperson Problem (TSP) using Dynamic Programming with bitmasking, what is the time complexity?",
        options: [
            "O(n^2)",
            "O(n^2 * 2^n)",
            "O(n!)",
            "O(2^n)"
        ],
        answer: 1,
        explanation: "The DP state is represented as `dp[mask][i]`, where `mask` is a bitmask of visited cities (2^n possibilities) and `i` is the current city (n possibilities). Computing each state takes O(n) time, leading to O(n^2 * 2^n) complexity.",
        difficulty: "Hard",
        topic: "Bit Manipulation"
    },
    {
        id: "dsa-114",
        question: "What is the amortized time complexity per operation of a Splay Tree?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "While individual operations in a Splay Tree can take O(n) time, the splay operation moves the accessed node to the root. Using the potential method, it can be proven that a sequence of M operations takes O(M log n) time, amortizing to O(log n) per operation.",
        difficulty: "Hard",
        topic: "BST"
    },
    {
        id: "dsa-115",
        question: "In the context of an LRU Cache implemented with a Doubly Linked List and Hash Map, what is the time complexity of the 'get' operation?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "The Hash Map provides O(1) lookup to find the node in the Doubly Linked List. Once found, moving that node to the head of the list (to mark it as recently used) involves pointer manipulation which also takes O(1) time.",
        difficulty: "Hard",
        topic: "Interview-Level Questions"
    },
    {
        id: "dsa-116",
        question: "What is the space complexity of storing a sparse graph using a Compressed Sparse Row (CSR) format?",
        options: [
            "O(V^2)",
            "O(V + E)",
            "O(E^2)",
            "O(V * E)"
        ],
        answer: 1,
        explanation: "CSR format uses three arrays: values (stores non-zero edge weights, size E), column_indices (stores destination vertices, size E), and row_pointers (stores starting index of each row, size V+1). Total space is O(V + E).",
        difficulty: "Hard",
        topic: "Graphs"
    },
    {
        id: "dsa-117",
        question: "Why is Quick Sort generally faster than Merge Sort in practice despite having the same average time complexity of O(n log n)?",
        options: [
            "Quick Sort uses less memory.",
            "Quick Sort has better cache performance due to in-place partitioning, and the inner loop is very tight and fast.",
            "Merge Sort has a higher constant factor in its time complexity.",
            "Quick Sort is a stable sort."
        ],
        answer: 1,
        explanation: "Quick Sort operates in-place, accessing memory sequentially during partitioning, which heavily benefits from CPU caching. Merge Sort requires additional O(n) memory and non-sequential array accesses during the merge step.",
        difficulty: "Hard",
        topic: "Quick Sort"
    },
    {
        id: "dsa-118",
        question: "What is the time complexity of finding the Kth smallest element in an unsorted array using the QuickSelect algorithm in the average case?",
        options: [
            "O(n log n)",
            "O(n)",
            "O(n^2)",
            "O(k log n)"
        ],
        answer: 1,
        explanation: "QuickSelect is a derivative of Quick Sort. Instead of sorting both partitions, it only recursively sorts the partition that contains the Kth element. On average, it reduces the search space by half each time, resulting in O(n) average time complexity.",
        difficulty: "Hard",
        topic: "Common Interview Problems"
    },
    {
        id: "dsa-119",
        question: "In the context of Deques in C++ STL (`std::deque`), what is the time complexity of inserting an element at the front?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "`std::deque` is typically implemented as a dynamic array of fixed-size arrays. This design allows O(1) insertion and deletion at both the front and the back, unlike `std::vector` which is O(n) at the front.",
        difficulty: "Hard",
        topic: "Deque"
    },
    {
        id: "dsa-120",
        question: "What is the worst-case time complexity of Dijkstra's algorithm when implemented using a standard array (without a priority queue)?",
        options: [
            "O(V + E)",
            "O(V^2)",
            "O(E log V)",
            "O(V E log V)"
        ],
        answer: 1,
        explanation: "Without a min-heap, finding the minimum distance vertex in the unvisited set requires scanning the entire array of V vertices. This is done V times, leading to O(V^2) time complexity, which is actually better than O(E log V) for dense graphs (E ≈ V^2).",
        difficulty: "Hard",
        topic: "Dijkstra"
    },
    {
        id: "dsa-121",
        question: "What does the 'pair' data structure in C++ STL primarily store?",
        options: [
            "Three elements of the same type.",
            "A key-value pair of potentially different types.",
            "A dynamically sized array of elements.",
            "A single pointer to a linked list node."
        ],
        answer: 1,
        explanation: "`std::pair` is a templated struct that holds two heterogeneous objects (e.g., `pair<int, string>`). It is commonly used to return two values from a function or to store key-value tuples in maps.",
        difficulty: "Easy",
        topic: "Pair"
    },
    {
        id: "dsa-122",
        question: "What is the role of an iterator in C++ STL?",
        options: [
            "It is used to allocate memory for containers.",
            "It provides a way to access and traverse elements in a container uniformly, acting like a generalized pointer.",
            "It sorts the elements of a container.",
            "It calculates the size of a container."
        ],
        answer: 1,
        explanation: "Iterators provide a standard interface to traverse containers (like vectors, lists, maps) without needing to know the underlying implementation. They support operators like `++` (next), `*` (dereference), and `==` (comparison).",
        difficulty: "Easy",
        topic: "Iterator"
    },
    {
        id: "dsa-123",
        question: "What is the time complexity of the `find()` function in C++ STL when used on a `std::list`?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "`std::list` is a doubly linked list, which does not support random access. The `find()` function must perform a linear search from the beginning, resulting in O(n) time complexity.",
        difficulty: "Easy",
        topic: "find()"
    },
    {
        id: "dsa-124",
        question: "Which C++ STL container is implemented as a doubly linked list?",
        options: [
            "std::vector",
            "std::deque",
            "std::list",
            "std::forward_list"
        ],
        answer: 2,
        explanation: "`std::list` is implemented as a doubly linked list, allowing bidirectional traversal and O(1) insertions/deletions at any position if an iterator is provided. (`std::forward_list` is a singly linked list).",
        difficulty: "Easy",
        topic: "List"
    },
    {
        id: "dsa-125",
        question: "What is the time complexity of the `binary_search()` function in C++ STL?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "`std::binary_search` operates on sorted ranges. It uses binary search internally, dividing the search space in half each step, which takes O(log n) time.",
        difficulty: "Easy",
        topic: "binary_search()"
    },
    {
        id: "dsa-126",
        question: "What is the output of `std::upper_bound()`?",
        options: [
            "An iterator to the first element that is greater than the given value.",
            "An iterator to the last element that is less than the given value.",
            "An iterator to the first element that is not less than the given value.",
            "A boolean indicating if the element exists."
        ],
        answer: 0,
        explanation: "`upper_bound` returns an iterator to the first element that is strictly *greater* than the given value. (In contrast, `lower_bound` returns the first element *not less than* the value).",
        difficulty: "Medium",
        topic: "upper_bound()"
    },
    {
        id: "dsa-127",
        question: "What is the time complexity of inserting an element at the end of a `std::vector` when no reallocation is needed?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "A `std::vector` maintains a contiguous block of memory. If the current capacity is greater than the size, inserting at the end simply places the element at `size` and increments the size counter, taking O(1) time.",
        difficulty: "Easy",
        topic: "Vector"
    },
    {
        id: "dsa-128",
        question: "Which of the following operations is NOT efficiently supported by a `std::multimap`?",
        options: [
            "Inserting a key-value pair.",
            "Finding all elements with a specific key.",
            "Updating the value associated with a specific key (when duplicates exist).",
            "Iterating through elements in sorted key order."
        ],
        answer: 2,
        explanation: "Because a `multimap` can contain multiple elements with the same key, there is no direct `operator[]` to update a value. You must first find the specific key-value pair (which might return a range) and then erase and re-insert to 'update' it.",
        difficulty: "Medium",
        topic: "Multimap"
    },
    {
        id: "dsa-129",
        question: "What happens if you call `std::next_permutation()` on a container that is already in descending order (the last permutation)?",
        options: [
            "It throws an exception.",
            "It returns true and wraps around to the first permutation (ascending order).",
            "It returns false and transforms the range into the first permutation (ascending order).",
            "It returns false and leaves the container unchanged."
        ],
        answer: 2,
        explanation: "If the sequence is already the highest possible permutation, `next_permutation` returns `false` and resets the sequence to the lowest possible permutation (sorted ascending).",
        difficulty: "Medium",
        topic: "next_permutation()"
    },
    {
        id: "dsa-130",
        question: "In asymptotic analysis, if f(n) = O(n^2) and g(n) = O(n^3), what is f(n) + g(n)?",
        options: [
            "O(n^2)",
            "O(n^3)",
            "O(n^5)",
            "O(n^6)"
        ],
        answer: 1,
        explanation: "When adding two functions, the overall complexity is dominated by the function with the higher growth rate. Since n^3 grows faster than n^2, f(n) + g(n) is bounded by O(n^3).",
        difficulty: "Easy",
        topic: "Asymptotic Analysis"
    },
    {
        id: "dsa-131",
        question: "What is the primary characteristic of a stable sorting algorithm?",
        options: [
            "It always runs in O(n log n) time.",
            "It uses O(1) extra space.",
            "It preserves the relative order of equal elements in the sorted output.",
            "It does not use recursion."
        ],
        answer: 2,
        explanation: "Stability means that if two elements have the same key, their relative order in the input array will be the same in the output array. This is crucial when sorting by multiple keys.",
        difficulty: "Easy",
        topic: "Stability of Sorting"
    },
    {
        id: "dsa-132",
        question: "Which of the following is an example of an in-place sorting algorithm?",
        options: [
            "Merge Sort",
            "Counting Sort",
            "Radix Sort",
            "Heap Sort"
        ],
        answer: 3,
        explanation: "An in-place algorithm sorts the data structure using only a constant amount O(1) of extra memory. Heap Sort achieves this by using the input array itself to represent the heap structure.",
        difficulty: "Easy",
        topic: "In-place Sorting"
    },
    {
        id: "dsa-133",
        question: "What is the average case time complexity of Interpolation Search?",
        options: [
            "O(n)",
            "O(log n)",
            "O(log log n) if elements are uniformly distributed",
            "O(1)"
        ],
        answer: 2,
        explanation: "Interpolation search estimates the position of the target based on the values at the low and high ends. If the data is uniformly distributed, it can find the target in O(log log n) time on average.",
        difficulty: "Medium",
        topic: "Interpolation Search"
    },
    {
        id: "dsa-134",
        question: "What is the time complexity of Jump Search on a sorted array of size N with an optimal jump step of √N?",
        options: [
            "O(√N)",
            "O(log N)",
            "O(N)",
            "O(N log N)"
        ],
        answer: 0,
        explanation: "Jump Search jumps ahead by √N steps until it overshoots the target, taking √N jumps. It then performs a linear search backwards in the previous block of size √N. Total time is O(√N) + O(√N) = O(√N).",
        difficulty: "Medium",
        topic: "Jump Search"
    },
    {
        id: "dsa-135",
        question: "What is a Prefix Sum array used for?",
        options: [
            "Sorting an array of integers.",
            "Efficiently answering range sum queries in O(1) time after O(n) preprocessing.",
            "Finding the maximum element in a subarray.",
            "Reversing an array in place."
        ],
        answer: 1,
        explanation: "A prefix sum array `pre[i]` stores the sum of elements from index 0 to i-1. The sum of elements from index l to r is simply `pre[r+1] - pre[l]`, which takes O(1) time.",
        difficulty: "Easy",
        topic: "Prefix Sum"
    },
    {
        id: "dsa-136",
        question: "In a Max Heap, what is the index of the right child of a node at index 'i' (using 0-based indexing)?",
        options: [
            "2 * i + 1",
            "2 * i + 2",
            "2 * i",
            "i / 2"
        ],
        answer: 1,
        explanation: "For a binary heap represented as an array with 0-based indexing, the left child is at `2i + 1` and the right child is at `2i + 2`. The parent is at `floor((i-1)/2)`.",
        difficulty: "Easy",
        topic: "Heap"
    },
    {
        id: "dsa-137",
        question: "What is the time complexity of deleting the root node of a Min Heap with N elements?",
        options: [
            "O(1)",
            "O(log N)",
            "O(N)",
            "O(N log N)"
        ],
        answer: 1,
        explanation: "Deleting the root involves replacing it with the last element and then 'heapifying down' to restore the heap property. The height of the heap is O(log N), so heapifying down takes O(log N) time.",
        difficulty: "Medium",
        topic: "Min Heap"
    },
    {
        id: "dsa-138",
        question: "Which of the following is NOT a property of a Binary Search Tree (BST)?",
        options: [
            "The left subtree of a node contains only nodes with keys lesser than the node's key.",
            "The right subtree of a node contains only nodes with keys greater than the node's key.",
            "Both the left and right subtrees must also be binary search trees.",
            "All leaf nodes must be at the same depth."
        ],
        answer: 3,
        explanation: "A BST does not require leaf nodes to be at the same depth (that is a property of a perfect binary tree). A BST can be highly unbalanced, leading to O(n) search times.",
        difficulty: "Easy",
        topic: "BST"
    },
    {
        id: "dsa-139",
        question: "What is the worst-case space complexity of Bubble Sort?",
        options: [
            "O(1)",
            "O(n)",
            "O(n^2)",
            "O(log n)"
        ],
        answer: 0,
        explanation: "Bubble Sort is an in-place sorting algorithm. It only requires a constant amount of extra memory for a few temporary variables (like a swap variable), resulting in O(1) space complexity.",
        difficulty: "Easy",
        topic: "Bubble Sort"
    },
    {
        id: "dsa-140",
        question: "When implementing a Queue using two Stacks (Stack A for enqueue, Stack B for dequeue), what is the worst-case time complexity of the dequeue operation?",
        options: [
            "O(1)",
            "O(n)",
            "O(log n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "If Stack B is empty during a dequeue, all elements from Stack A must be popped and pushed into Stack B to reverse their order. If Stack A has n elements, this takes O(n) time. (Note: The amortized time is O(1)).",
        difficulty: "Medium",
        topic: "Queue"
    },
    {
        id: "dsa-141",
        question: "What is the time complexity of Bucket Sort assuming uniform distribution of input elements and N buckets?",
        options: [
            "O(N log N)",
            "O(N^2)",
            "O(N)",
            "O(N + K) where K is the range"
        ],
        answer: 2,
        explanation: "With uniform distribution, elements are spread evenly across N buckets, meaning each bucket has O(1) elements. Sorting these individual buckets takes O(1) time each. Concatenating them takes O(N) total time.",
        difficulty: "Medium",
        topic: "Bucket Sort"
    },
    {
        id: "dsa-142",
        question: "In a graph, what is an Eulerian circuit?",
        options: [
            "A path that visits every vertex exactly once.",
            "A cycle that visits every edge exactly once and starts and ends at the same vertex.",
            "A path that visits every edge exactly once but does not return to the start.",
            "A tree that spans all vertices with minimum weight."
        ],
        answer: 1,
        explanation: "An Eulerian circuit traverses every edge of a graph exactly once and returns to the starting vertex. (A path that visits every vertex exactly once is a Hamiltonian path).",
        difficulty: "Medium",
        topic: "Graphs"
    },
    {
        id: "dsa-143",
        question: "What is the main disadvantage of using an adjacency list for dense graphs?",
        options: [
            "It consumes O(V^2) space.",
            "It consumes more space than an adjacency matrix for dense graphs.",
            "It cannot represent weighted graphs.",
            "Finding if a specific edge exists is slower than in an adjacency matrix."
        ],
        answer: 3,
        explanation: "In a dense graph (many edges), checking if an edge (u, v) exists requires traversing u's adjacency list, taking O(degree(u)) time, which approaches O(V). An adjacency matrix provides O(1) edge lookup.",
        difficulty: "Medium",
        topic: "Adjacency List"
    },
    {
        id: "dsa-144",
        question: "Which data structure is used to implement a depth-first search (DFS) iteratively (without recursion)?",
        options: [
            "Queue",
            "Stack",
            "Priority Queue",
            "Array"
        ],
        answer: 1,
        explanation: "DFS goes as deep as possible before backtracking. This LIFO (Last-In-First-Out) behavior is naturally modeled using a Stack when implemented iteratively.",
        difficulty: "Easy",
        topic: "DFS"
    },
    {
        id: "dsa-145",
        question: "What is the time complexity of topological sort using Kahn's Algorithm (based on BFS/in-degrees)?",
        options: [
            "O(V)",
            "O(E)",
            "O(V + E)",
            "O(V * E)"
        ],
        answer: 2,
        explanation: "Kahn's algorithm involves calculating in-degrees for all vertices (O(V+E)), initializing a queue with 0 in-degree nodes (O(V)), and then processing each vertex and its edges exactly once (O(V+E)). Total is O(V+E).",
        difficulty: "Medium",
        topic: "Topological Sort"
    },
    {
        id: "dsa-146",
        question: "In a Red-Black Tree, what happens when a red node is inserted?",
        options: [
            "The tree is immediately rebalanced by rotating the root.",
            "No rebalancing is needed because red nodes do not affect the black-height.",
            "It may cause a red-red violation, which is fixed by recoloring and/or rotations.",
            "The node is automatically colored black."
        ],
        answer: 2,
        explanation: "A core property of Red-Black trees is that no two adjacent nodes (parent-child) can both be red. Inserting a red node might violate this rule, triggering fix-up procedures (recoloring and rotations).",
        difficulty: "Hard",
        topic: "Red Black Tree"
    },
    {
        id: "dsa-147",
        question: "What is the space complexity of a Trie containing N words with a total of L characters?",
        options: [
            "O(N)",
            "O(L)",
            "O(N * L)",
            "O(ALPHABET_SIZE * L)"
        ],
        answer: 3,
        explanation: "A Trie node typically contains an array of pointers (one for each character in the alphabet) and a boolean flag. The space is proportional to the number of nodes, which is bounded by the alphabet size times the total number of characters L.",
        difficulty: "Medium",
        topic: "Trie"
    },
    {
        id: "dsa-148",
        question: "Which of the following statements is TRUE about a Suffix Array?",
        options: [
            "It stores all suffixes of a string explicitly.",
            "It is an array of integers giving the starting indices of all suffixes of a string, sorted lexicographically.",
            "It can be built in O(1) time.",
            "It requires more space than storing all suffixes explicitly in a 2D array."
        ],
        answer: 1,
        explanation: "A Suffix Array is a space-efficient data structure. It does not store the suffixes themselves (which would take O(N^2) space), but rather an array of integers (pointers to the suffixes) sorted alphabetically, taking O(N) space.",
        difficulty: "Hard",
        topic: "Optimization Techniques"
    },
    {
        id: "dsa-149",
        question: "What is the time complexity of the 'find' operation in a Disjoint Set Union using both Path Compression and Union by Rank?",
        options: [
            "O(log n)",
            "O(1)",
            "O(α(n)), where α is the inverse Ackermann function",
            "O(n)"
        ],
        answer: 2,
        explanation: "When Path Compression and Union by Rank are used together, the amortized time complexity per operation is O(α(n)), where α(n) grows so incredibly slowly that it is effectively a constant (< 5 for any practical value of n).",
        difficulty: "Hard",
        topic: "Disjoint Set (Union Find)"
    },
    {
        id: "dsa-150",
        question: "In the context of hashing, what is Double Hashing?",
        options: [
            "Hashing the input string twice to get a shorter key.",
            "Using a secondary hash function to calculate the step size for the probe sequence in open addressing.",
            "Storing two hash tables simultaneously.",
            "A collision resolution technique used in chaining."
        ],
        answer: 1,
        explanation: "Double hashing uses two hash functions: `h1(key)` for the initial index, and `h2(key)` to calculate the jump size (step) if a collision occurs. The probe sequence is `(h1 + i * h2) % size`. This eliminates primary and secondary clustering.",
        difficulty: "Hard",
        topic: "Open Addressing"
    },
    {
        id: "dsa-151",
        question: "What is the worst-case time complexity of finding the diameter of a binary tree?",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "O(log n)"
        ],
        answer: 0,
        explanation: "The diameter (longest path between any two nodes) can be found in a single DFS/BFS traversal by calculating the height of left and right subtrees at each node and keeping track of the maximum sum, taking O(n) time.",
        difficulty: "Medium",
        topic: "Binary Tree"
    },
    {
        id: "dsa-152",
        question: "What is the space complexity of the standard recursive implementation of the Tower of Hanoi problem with N disks?",
        options: [
            "O(1)",
            "O(N)",
            "O(2^N)",
            "O(N^2)"
        ],
        answer: 1,
        explanation: "The recursion tree for Tower of Hanoi has a depth of N. At any point, the maximum number of recursive calls active on the stack is N, resulting in O(N) auxiliary space complexity.",
        difficulty: "Medium",
        topic: "Recursion"
    },
    {
        id: "dsa-153",
        question: "Which of the following is a disadvantage of using recursion?",
        options: [
            "It is always slower than iteration.",
            "It can lead to stack overflow if the recursion depth is too high, and it often has overhead from function calls.",
            "It cannot be used to solve tree-related problems.",
            "It makes the code more readable, which is a disadvantage."
        ],
        answer: 1,
        explanation: "Recursion has overhead: each function call pushes a new frame onto the call stack (consuming memory and time). For very deep recursions (e.g., traversing a long linked list), this can exhaust the stack memory.",
        difficulty: "Easy",
        topic: "Recursion"
    },
    {
        id: "dsa-154",
        question: "In a Singly Linked List, what is the time complexity of deleting the last node?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "To delete the last node, you must change the 'next' pointer of the second-to-last node to null. Since you can only traverse forward, you must iterate through the entire list to find this second-to-last node, taking O(n) time.",
        difficulty: "Easy",
        topic: "Singly Linked List"
    },
    {
        id: "dsa-155",
        question: "What is the time complexity of checking if a binary tree is a BST?",
        options: [
            "O(1)",
            "O(n)",
            "O(n log n)",
            "O(n^2)"
        ],
        answer: 1,
        explanation: "You can check the BST property by performing a tree traversal (like in-order) and ensuring each node's value falls within a valid `(min, max)` range. This visits every node exactly once, taking O(n) time.",
        difficulty: "Medium",
        topic: "BST"
    },
    {
        id: "dsa-156",
        question: "What is the time complexity of converting an infix expression to a postfix expression using a stack?",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "O(2^n)"
        ],
        answer: 0,
        explanation: "The algorithm scans the infix expression from left to right once. Each operator/operand is pushed to or popped from the stack at most once. Thus, the total time complexity is O(n), where n is the length of the expression.",
        difficulty: "Medium",
        topic: "Applications of Stack"
    },
    {
        id: "dsa-157",
        question: "What is the height of a complete binary tree with N nodes?",
        options: [
            "N",
            "log2(N)",
            "floor(log2(N))",
            "ceil(log2(N + 1)) - 1"
        ],
        answer: 3,
        explanation: "A complete binary tree fills levels from left to right. The height h is related to the number of nodes by `2^h - 1 < N <= 2^(h+1) - 1`. Solving for h gives `floor(log2(N))` or equivalently `ceil(log2(N + 1)) - 1`.",
        difficulty: "Medium",
        topic: "Binary Tree"
    },
    {
        id: "dsa-158",
        question: "Which of the following scenarios is best solved using a Greedy Algorithm?",
        options: [
            "0/1 Knapsack problem",
            "Fractional Knapsack problem",
            "Longest Common Subsequence",
            "Matrix Chain Multiplication"
        ],
        answer: 1,
        explanation: "The Fractional Knapsack problem allows taking fractions of items. A greedy strategy (taking the highest value-to-weight ratio first) guarantees an optimal solution. The others require Dynamic Programming.",
        difficulty: "Easy",
        topic: "Greedy Algorithms"
    },
    {
        id: "dsa-159",
        question: "What is the time complexity of finding the maximum element in a Max Heap?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 0,
        explanation: "By the definition of a Max Heap, the root node always contains the maximum element. Accessing the root of an array-based heap takes O(1) time.",
        difficulty: "Easy",
        topic: "Max Heap"
    },
    {
        id: "dsa-160",
        question: "In the context of a Priority Queue, what is the time complexity of decreasing the key of an element?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "Decreasing a key (in a Min Heap) might violate the heap property (the node becomes smaller than its parent). To fix this, the node must 'bubble up' or 'heapify up' along the tree, which takes O(log n) time.",
        difficulty: "Medium",
        topic: "Priority Queue"
    },
    {
        id: "dsa-161",
        question: "What is a self-balancing binary search tree?",
        options: [
            "A BST where the height is always exactly log2(n).",
            "A BST that automatically adjusts its structure during insertions and deletions to keep the height O(log n).",
            "A BST where all leaves are at the exact same level.",
            "A BST that balances itself using a separate array."
        ],
        answer: 1,
        explanation: "Self-balancing BSTs (like AVL or Red-Black trees) perform rotations and recoloring during updates to ensure the tree remains approximately balanced, guaranteeing O(log n) time for search, insert, and delete operations.",
        difficulty: "Easy",
        topic: "AVL Tree"
    },
    {
        id: "dsa-162",
        question: "What is the worst-case time complexity of Quick Sort when the median-of-three pivot selection strategy is used?",
        options: [
            "O(n log n)",
            "O(n^2)",
            "O(n)",
            "O(log n)"
        ],
        answer: 1,
        explanation: "While median-of-three makes the worst-case highly unlikely, it does NOT completely prevent it. An adversary can still craft an input that forces poor pivots, maintaining the theoretical worst-case bound of O(n^2).",
        difficulty: "Hard",
        topic: "Quick Sort"
    },
    {
        id: "dsa-163",
        question: "What is the output of the following bit manipulation operation: `5 | 3` ?",
        options: [
            "1",
            "2",
            "7",
            "8"
        ],
        answer: 2,
        explanation: "The bitwise OR operator `|` compares bits and sets the result to 1 if at least one of the corresponding bits is 1. 5 is 101, and 3 is 011. 101 | 011 = 111, which is 7 in decimal.",
        difficulty: "Easy",
        topic: "Binary Operations"
    },
    {
        id: "dsa-164",
        question: "What is the output of the following bit manipulation operation: `5 & 3` ?",
        options: [
            "1",
            "2",
            "7",
            "0"
        ],
        answer: 0,
        explanation: "The bitwise AND operator `&` compares bits and sets the result to 1 only if both corresponding bits are 1. 5 is 101, and 3 is 011. 101 & 011 = 001, which is 1 in decimal.",
        difficulty: "Easy",
        topic: "Binary Operations"
    },
    {
        id: "dsa-165",
        question: "What is the output of the following bit manipulation operation: `5 ^ 3` ?",
        options: [
            "1",
            "6",
            "7",
            "8"
        ],
        answer: 1,
        explanation: "The bitwise XOR operator `^` compares bits and sets the result to 1 if the corresponding bits are different, and 0 if they are the same. 5 is 101, and 3 is 011. 101 ^ 011 = 110, which is 6 in decimal.",
        difficulty: "Easy",
        topic: "Binary Operations"
    },
    {
        id: "dsa-166",
        question: "What does the left shift operator `x << 1` do to an integer x?",
        options: [
            "It divides x by 2.",
            "It multiplies x by 2.",
            "It sets the least significant bit to 1.",
            "It reverses the bits of x."
        ],
        answer: 1,
        explanation: "Left shifting a binary number by 1 position appends a 0 at the end (least significant bit), effectively multiplying the number by 2. For example, 5 (101) << 1 becomes 10 (1010).",
        difficulty: "Easy",
        topic: "Binary Operations"
    },
    {
        id: "dsa-167",
        question: "What is the time complexity of finding the number of set bits (1s) in an integer N using Brian Kernighan's algorithm?",
        options: [
            "O(log N)",
            "O(number of set bits in N)",
            "O(32) or O(1)",
            "O(N)"
        ],
        answer: 1,
        explanation: "Brian Kernighan's algorithm (`n = n & (n-1)`) clears the least significant set bit in each iteration. The loop runs exactly as many times as there are set bits in N, making it O(k) where k is the number of 1s.",
        difficulty: "Medium",
        topic: "Bit Manipulation"
    },
    {
        id: "dsa-168",
        question: "Which of the following is true about Tabulation in Dynamic Programming?",
        options: [
            "It is a top-down approach that uses recursion.",
            "It is a bottom-up approach that fills a table iteratively without using recursion.",
            "It uses a hash map to store results.",
            "It is only applicable to graph problems."
        ],
        answer: 1,
        explanation: "Tabulation is the bottom-up DP technique. It solves the smallest subproblems first, stores their results in a table (usually an array), and uses those results to iteratively solve larger subproblems, avoiding recursion entirely.",
        difficulty: "Easy",
        topic: "Tabulation"
    },
    {
        id: "dsa-169",
        question: "What is the time complexity of finding the transpose of a sparse matrix represented using a Coordinate List (list of non-zero elements)?",
        options: [
            "O(1)",
            "O(rows * cols)",
            "O(non-zero elements)",
            "O(rows + cols)"
        ],
        answer: 2,
        explanation: "In a Coordinate List representation, transposing involves iterating through the list of non-zero elements and swapping their row and column indices. The time taken is directly proportional to the number of non-zero elements.",
        difficulty: "Medium",
        topic: "2D Arrays"
    },
    {
        id: "dsa-170",
        question: "In the context of algorithm design, what is an 'optimal substructure'?",
        options: [
            "The algorithm runs in O(1) space.",
            "An optimal solution to the problem contains optimal solutions to its subproblems.",
            "The problem can be divided into equal parts.",
            "The algorithm uses a greedy choice at every step."
        ],
        answer: 1,
        explanation: "Optimal substructure is a property required for both Greedy and Dynamic Programming algorithms. It means that the optimal solution to the overall problem can be constructed from optimal solutions to its subparts.",
        difficulty: "Medium",
        topic: "Dynamic Programming"
    },
    {
        id: "dsa-171",
        question: "What is the time complexity of the standard algorithm to find the closest pair of points in a 2D plane using Divide and Conquer?",
        options: [
            "O(n log n)",
            "O(n^2)",
            "O(n log^2 n)",
            "O(n)"
        ],
        answer: 2,
        explanation: "The standard divide and conquer algorithm divides the points into two halves (O(n log n) for sorting), recursively finds closest pairs (T(n/2)), and merges by checking a strip of points. The merge step takes O(n log n), leading to O(n log^2 n). (It can be optimized to O(n log n)).",
        difficulty: "Hard",
        topic: "Divide and Conquer"
    },
    {
        id: "dsa-172",
        question: "What is a 'trie' also commonly known as?",
        options: [
            "Binary Tree",
            "Prefix Tree",
            "Heap Tree",
            "Segment Tree"
        ],
        answer: 1,
        explanation: "A trie is frequently referred to as a prefix tree because it stores strings by their prefixes. Every node represents a common prefix of the strings stored in its subtree.",
        difficulty: "Easy",
        topic: "Trie"
    },
    {
        id: "dsa-173",
        question: "Which sorting algorithm is most efficient for sorting an array of integers where the range of elements is significantly smaller than the number of elements (e.g., sorting 1 million students by their age, range 10-50)?",
        options: [
            "Quick Sort",
            "Merge Sort",
            "Counting Sort",
            "Heap Sort"
        ],
        answer: 2,
        explanation: "Counting Sort is ideal here. Since the range (K) is very small compared to the number of elements (N), its O(N + K) time complexity effectively becomes O(N), vastly outperforming O(N log N) comparison sorts.",
        difficulty: "Medium",
        topic: "Algorithm Selection"
    },
    {
        id: "dsa-174",
        question: "You need to implement a text editor's 'undo' feature. Which data structure is most appropriate?",
        options: [
            "Queue",
            "Stack",
            "Array",
            "Hash Map"
        ],
        answer: 1,
        explanation: "The 'undo' feature requires reversing the most recently performed action first. This Last-In-First-Out (LIFO) behavior is perfectly modeled by a Stack, where each action is pushed, and 'undo' pops the last action.",
        difficulty: "Easy",
        topic: "Scenario-Based Questions"
    },
    {
        id: "dsa-175",
        question: "You are designing a system to manage the order of patients in an emergency room based on the severity of their condition. Which data structure is most suitable?",
        options: [
            "Stack",
            "Queue",
            "Priority Queue",
            "Array"
        ],
        answer: 2,
        explanation: "Patients must be treated based on priority (severity), not strictly arrival time. A Priority Queue (usually implemented as a Max Heap based on severity) allows the highest priority patient to be treated next.",
        difficulty: "Easy",
        topic: "Scenario-Based Questions"
    },
    {
        id: "dsa-176",
        question: "You need to find the shortest path between all pairs of cities in a map where some roads have negative distances (due to special discounts), but there are no negative cycles. Which algorithm should you choose?",
        options: [
            "Dijkstra's Algorithm",
            "Kruskal's Algorithm",
            "Bellman-Ford Algorithm (run V times)",
            "Prim's Algorithm"
        ],
        answer: 2,
        explanation: "Running the Bellman-Ford algorithm from every vertex (V times) handles negative weights and yields all-pairs shortest paths in O(V^2 * E) time. Floyd-Warshall (O(V^3)) is another option, but it fails with negative weights if negative cycles exist (though the question guarantees none, Floyd-Warshall is standard, but Bellman-Ford is the safest explicit answer for negative weights).",
        difficulty: "Medium",
        topic: "Algorithm Selection"
    },
    {
        id: "dsa-177",
        question: "In a directed graph, how can you efficiently detect if a cycle exists?",
        options: [
            "Perform a BFS and check if a node is visited twice.",
            "Perform a DFS and maintain a 'recursion stack' (current path array) to detect back edges.",
            "Find the Minimum Spanning Tree; if it has V edges, there is a cycle.",
            "Use Dijkstra's algorithm."
        ],
        answer: 1,
        explanation: "During DFS, if you encounter an edge that points to a node currently in the recursion stack (an ancestor in the current DFS path), it is a 'back edge', indicating the presence of a cycle.",
        difficulty: "Medium",
        topic: "Cycle Detection"
    },
    {
        id: "dsa-178",
        question: "What is the time complexity of checking if an undirected graph is a tree?",
        options: [
            "O(V)",
            "O(E)",
            "O(V + E)",
            "O(V * E)"
        ],
        answer: 2,
        explanation: "A graph is a tree if it is connected and has exactly V-1 edges. We can verify this by doing a BFS/DFS to check connectivity (O(V+E)) and checking if the number of edges is V-1 (O(1) or O(E) depending on representation).",
        difficulty: "Medium",
        topic: "Graphs"
    },
    {
        id: "dsa-179",
        question: "Which data structure would you use to implement a phone directory that allows fast prefix searches (e.g., typing '98' shows all contacts starting with '98')?",
        options: [
            "Hash Table",
            "Binary Search Tree",
            "Trie",
            "Array"
        ],
        answer: 2,
        explanation: "A Trie is specifically designed for prefix-based retrieval. By traversing down the tree corresponding to the typed prefix, you can efficiently collect all contacts that share that prefix.",
        difficulty: "Easy",
        topic: "Scenario-Based Questions"
    },
    {
        id: "dsa-180",
        question: "What is the worst-case time complexity of searching in a `std::unordered_map` in C++?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        answer: 2,
        explanation: "While average case is O(1), the worst case occurs if all keys hash to the same bucket (severe collision). The container degrades into a single linked list, requiring O(n) time to search.",
        difficulty: "Medium",
        topic: "Unordered Map"
    },
    {
        id: "dsa-181",
        question: "What is the time complexity of the `std::set::insert` function in C++?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "`std::set` is implemented as a Red-Black tree. Inserting a node requires finding the correct leaf position (O(log n)) and performing necessary rotations to maintain balance (O(log n)), making the total operation O(log n).",
        difficulty: "Medium",
        topic: "Set"
    },
    {
        id: "dsa-182",
        question: "What is the output of the following C++ code?\nstd::vector<int> v = {1, 2, 3, 4, 5};\nstd::cout << v[v.size() - 1];",
        options: [
            "1",
            "4",
            "5",
            "Undefined behavior"
        ],
        answer: 2,
        explanation: "`v.size()` is 5. `v.size() - 1` is 4. In a 0-indexed vector, `v[4]` accesses the 5th element, which is 5.",
        difficulty: "Easy",
        topic: "Vector"
    },
    {
        id: "dsa-183",
        question: "What is the primary difference between `std::set` and `std::multiset` in C++?",
        options: [
            "`std::set` is faster than `std::multiset`.",
            "`std::set` stores unique elements, while `std::multiset` allows duplicate elements.",
            "`std::multiset` is unordered, while `std::set` is ordered.",
            "`std::set` can only store integers."
        ],
        answer: 1,
        explanation: "The fundamental difference is the handling of duplicates. `std::set` automatically rejects insertions of keys that already exist. `std::multiset` allows multiple elements with the same key.",
        difficulty: "Easy",
        topic: "Multiset"
    },
    {
        id: "dsa-184",
        question: "Which of the following is a disadvantage of Counting Sort?",
        options: [
            "It is a comparison-based sort.",
            "It is not stable.",
            "It is not efficient if the range of input elements (K) is very large compared to the number of elements (N).",
            "It cannot sort negative numbers."
        ],
        answer: 2,
        explanation: "Counting Sort creates a count array of size K (the range of elements). If K is very large (e.g., sorting 100 elements ranging from 1 to 1 billion), it requires massive O(K) space and time, making it highly inefficient.",
        difficulty: "Medium",
        topic: "Counting Sort"
    },
    {
        id: "dsa-185",
        question: "What is the time complexity of finding the lowest common ancestor (LCA) of two nodes in a balanced Binary Search Tree?",
        options: [
            "O(n)",
            "O(log n)",
            "O(n log n)",
            "O(1)"
        ],
        answer: 1,
        explanation: "You can find the LCA by traversing from the root. If both nodes are smaller than the current node, go left. If both are larger, go right. Otherwise, the current node is the LCA. This traversal takes O(height) = O(log n) time.",
        difficulty: "Medium",
        topic: "BST"
    },
    {
        id: "dsa-186",
        question: "In the context of the 'Sliding Window' technique, when do you typically shrink the window?",
        options: [
            "When the window size reaches zero.",
            "When the current window satisfies the condition, and you want to find the minimum valid window.",
            "When you encounter a negative number.",
            "At the end of the array."
        ],
        answer: 1,
        explanation: "To find the minimum window that satisfies a condition (e.g., minimum length substring containing all characters), you expand the window until the condition is met, then shrink it from the left while the condition remains true to find the smallest valid window.",
        difficulty: "Medium",
        topic: "Sliding Window"
    },
    {
        id: "dsa-187",
        question: "What is the space complexity of a perfectly balanced binary tree with N nodes?",
        options: [
            "O(N)",
            "O(log N)",
            "O(N log N)",
            "O(1)"
        ],
        answer: 0,
        explanation: "Space complexity measures the total memory used to store the data structure. A tree with N nodes requires memory to store all N nodes, plus their pointers. Therefore, the space complexity is always O(N), regardless of balance.",
        difficulty: "Easy",
        topic: "Space Complexity"
    },
    {
        id: "dsa-188",
        question: "Which of the following algorithms can be used to find the Maximum Flow in a flow network?",
        options: [
            "Dijkstra's Algorithm",
            "Ford-Fulkerson Method",
            "Prim's Algorithm",
            "Kruskal's Algorithm"
        ],
        answer: 1,
        explanation: "The Ford-Fulkerson method (often implemented using BFS as the Edmonds-Karp algorithm) is used to compute the maximum flow from a source to a sink in a flow network by finding augmenting paths.",
        difficulty: "Hard",
        topic: "Graphs"
    },
    {
        id: "dsa-189",
        question: "What is the time complexity of the Edmonds-Karp algorithm for Maximum Flow?",
        options: [
            "O(V * E^2)",
            "O(V^2 * E)",
            "O(V * E)",
            "O(E^2)"
        ],
        answer: 0,
        explanation: "Edmonds-Karp is Ford-Fulkerson implemented with BFS. BFS takes O(E) time. In the worst case, it finds O(V * E) augmenting paths. Total time complexity is O(V * E^2).",
        difficulty: "Hard",
        topic: "Graphs"
    },
    {
        id: "dsa-190",
        question: "In a weighted undirected graph, what does the Minimum Spanning Tree (MST) minimize?",
        options: [
            "The shortest path between any two vertices.",
            "The sum of the weights of the edges connecting all vertices.",
            "The maximum edge weight in the tree.",
            "The total number of edges."
        ],
        answer: 1,
        explanation: "An MST is a subset of the edges that connects all vertices together, without any cycles, while minimizing the total sum of the edge weights.",
        difficulty: "Easy",
        topic: "Minimum Spanning Tree"
    },
    {
        id: "dsa-191",
        question: "Which of the following is true about Kruskal's algorithm?",
        options: [
            "It starts from a specific root vertex.",
            "It uses a priority queue to select the minimum edge connected to the growing tree.",
            "It sorts all edges and uses a Disjoint Set data structure to avoid cycles.",
            "It only works on directed graphs."
        ],
        answer: 2,
        explanation: "Kruskal's algorithm sorts all edges by weight. It then iterates through them, adding an edge to the MST if it connects two disconnected components, which is efficiently checked using a Disjoint Set (Union-Find) structure.",
        difficulty: "Medium",
        topic: "Kruskal"
    },
    {
        id: "dsa-192",
        question: "What is the cut property in the context of Minimum Spanning Trees?",
        options: [
            "Removing an edge from an MST disconnects it.",
            "For any cut of the graph, the minimum weight edge crossing the cut is part of the MST.",
            "An MST has exactly V-1 cuts.",
            "The maximum weight edge in a cycle can be safely removed."
        ],
        answer: 1,
        explanation: "The cut property states that if you divide the vertices of a graph into two sets, the lightest (minimum weight) edge that connects a vertex in one set to a vertex in the other set must be included in *some* MST.",
        difficulty: "Hard",
        topic: "Minimum Spanning Tree"
    },
    {
        id: "dsa-193",
        question: "What is a 'back edge' in a graph DFS traversal?",
        options: [
            "An edge pointing to an already visited node that is NOT an ancestor in the DFS tree.",
            "An edge pointing to an ancestor in the DFS tree, indicating a cycle.",
            "An edge that connects a node to itself.",
            "An edge that is ignored during BFS."
        ],
        answer: 1,
        explanation: "In DFS tree classification, a back edge connects a vertex to one of its ancestors. The presence of a back edge is the definitive indicator of a cycle in a directed graph.",
        difficulty: "Medium",
        topic: "DFS"
    },
    {
        id: "dsa-194",
        question: "What is the time complexity of the Bellman-Ford algorithm?",
        options: [
            "O(V + E)",
            "O(V * E)",
            "O(V^2)",
            "O(E log V)"
        ],
        answer: 1,
        explanation: "Bellman-Ford relaxes all E edges V-1 times. Therefore, the time complexity is O(V * E). An additional pass over E edges is done to detect negative cycles.",
        difficulty: "Medium",
        topic: "Bellman Ford"
    },
    {
        id: "dsa-195",
        question: "What is the primary use of a Fenwick Tree (Binary Indexed Tree)?",
        options: [
            "Storing a complete binary search tree.",
            "Efficiently computing prefix sums and handling point updates.",
            "Finding the shortest path in a graph.",
            "Sorting an array of numbers."
        ],
        answer: 1,
        explanation: "A Fenwick Tree is specialized for dynamic prefix sum queries. It allows updating an element and querying the sum of the first 'i' elements, both in O(log n) time.",
        difficulty: "Medium",
        topic: "Fenwick Tree (BIT)"
    },
    {
        id: "dsa-196",
        question: "Why is the `std::list` container in C++ generally slower for traversal than `std::vector`?",
        options: [
            "Because `std::list` uses more memory.",
            "Because `std::vector` elements are stored in contiguous memory, which is highly cache-friendly, whereas `std::list` nodes are scattered in memory.",
            "Because `std::list` does not support iterators.",
            "Because `std::vector` uses a faster sorting algorithm."
        ],
        answer: 1,
        explanation: "Modern CPUs load memory in chunks (cache lines). Traversing a `std::vector` loads contiguous elements into the cache simultaneously. Traversing a `std::list` causes frequent cache misses because nodes are allocated dynamically and non-contiguously.",
        difficulty: "Medium",
        topic: "List"
    },
    {
        id: "dsa-197",
        question: "What is the time complexity of merging two sorted linked lists of sizes M and N?",
        options: [
            "O(M log M + N log N)",
            "O(M * N)",
            "O(M + N)",
            "O(max(M, N))"
        ],
        answer: 2,
        explanation: "Merging involves traversing both lists simultaneously using two pointers. At each step, the smaller element is appended to the result. This requires exactly M + N comparisons and node movements.",
        difficulty: "Easy",
        topic: "Singly Linked List"
    },
    {
        id: "dsa-198",
        question: "In the context of algorithm design, what does 'overlapping subproblems' mean?",
        options: [
            "The algorithm divides the problem into unequal parts.",
            "The same subproblems are solved multiple times during the recursion process.",
            "The base cases overlap with the recursive cases.",
            "The problem space overlaps with another problem's space."
        ],
        answer: 1,
        explanation: "Overlapping subproblems occur when a recursive algorithm solves the same instance of a subproblem multiple times. This is the key characteristic that makes a problem suitable for Dynamic Programming (to cache results).",
        difficulty: "Medium",
        topic: "Dynamic Programming"
    },
    {
        id: "dsa-199",
        question: "What is the output of `~0` (bitwise NOT of 0) in a 32-bit integer system?",
        options: [
            "1",
            "-1",
            "2147483647",
            "0"
        ],
        answer: 1,
        explanation: "The bitwise NOT operator flips all bits. 0 is represented as 000...000 (32 zeros). Flipping all bits gives 111...111 (32 ones). In a two's complement signed integer system, this represents -1.",
        difficulty: "Medium",
        topic: "Binary Operations"
    },
    {
        id: "dsa-200",
        question: "Which of the following is NOT a valid string matching algorithm?",
        options: [
            "Naive Algorithm",
            "KMP Algorithm",
            "Rabin-Karp Algorithm",
            "Floyd's Algorithm"
        ],
        answer: 3,
        explanation: "Floyd's Algorithm (Floyd-Warshall) is used for finding all-pairs shortest paths in a graph, not for string matching. Naive, KMP, and Rabin-Karp are standard string matching algorithms.",
        difficulty: "Easy",
        topic: "String Matching"
    },
    {
        id: "dsa-201",
        question: "What is the basic idea behind the Rabin-Karp string matching algorithm?",
        options: [
            "Using a finite automaton based on the pattern.",
            "Calculating a hash value for the pattern and comparing it with the hash values of substrings in the text.",
            "Using the Longest Prefix Suffix array to skip comparisons.",
            "Dividing the text and pattern into halves."
        ],
        answer: 1,
        explanation: "Rabin-Karp uses a rolling hash function. It computes the hash of the pattern and slides a window over the text, computing the hash of each window in O(1) time. If hashes match, it does a character-by-character check.",
        difficulty: "Medium",
        topic: "String Matching"
    },
    {
        id: "dsa-202",
        question: "What is the worst-case time complexity of the Rabin-Karp algorithm?",
        options: [
            "O(n + m)",
            "O(n * m)",
            "O(n log m)",
            "O(m^2)"
        ],
        answer: 1,
        explanation: "While the average case is O(n + m), the worst case occurs when there are many spurious hits (different strings having the same hash value). This forces a character-by-character comparison for every window, resulting in O(n * m) time.",
        difficulty: "Medium",
        topic: "String Matching"
    },
    {
        id: "dsa-203",
        question: "In a circular queue implemented with an array, if `front = -1` and `rear = -1`, what does it signify?",
        options: [
            "The queue is full.",
            "The queue is empty.",
            "The queue has exactly one element.",
            "An error in implementation."
        ],
        answer: 1,
        explanation: "Initializing both `front` and `rear` to -1 is a standard way to represent an empty circular queue. The first enqueue operation will set both to 0.",
        difficulty: "Easy",
        topic: "Circular Queue"
    },
    {
        id: "dsa-204",
        question: "What is the time complexity of finding the intersection of two unsorted arrays of size N and M?",
        options: [
            "O(N * M)",
            "O(N log N + M log M)",
            "O(N + M) using a hash set",
            "Both B and C are valid depending on the approach."
        ],
        answer: 3,
        explanation: "You can sort both arrays and use two pointers (O(N log N + M log M)), or you can insert one array into a hash set and iterate through the other (O(N + M) average time). Both are valid approaches.",
        difficulty: "Medium",
        topic: "Algorithm Selection"
    },
    {
        id: "dsa-205",
        question: "Which of the following sorting algorithms is adaptive?",
        options: [
            "Merge Sort",
            "Quick Sort",
            "Heap Sort",
            "Insertion Sort"
        ],
        answer: 3,
        explanation: "An adaptive algorithm takes advantage of existing order in its input. Insertion Sort is adaptive because if the array is already sorted (or nearly sorted), it runs in O(n) time instead of O(n^2).",
        difficulty: "Medium",
        topic: "Insertion Sort"
    },
    {
        id: "dsa-206",
        question: "What is a 'rogue pointer' (or dangling pointer)?",
        options: [
            "A pointer that points to a valid memory location.",
            "A pointer that points to memory that has been freed or deleted.",
            "A null pointer.",
            "A pointer to a static variable."
        ],
        answer: 1,
        explanation: "A dangling pointer arises when an object is deleted or deallocated, but the pointer still holds the memory address of the now-freed memory. Accessing it leads to undefined behavior.",
        difficulty: "Easy",
        topic: "Introduction to DSA"
    },
    {
        id: "dsa-207",
        question: "In the context of a Segment Tree, what is the time complexity of a range query (e.g., sum from index L to R)?",
        options: [
            "O(1)",
            "O(log N)",
            "O(N)",
            "O(N log N)"
        ],
        answer: 1,
        explanation: "A range query in a Segment Tree involves traversing from the root down to the leaves, but it prunes branches that are completely outside the query range or completely inside it. This visits at most O(log N) nodes.",
        difficulty: "Medium",
        topic: "Segment Tree"
    },
    {
        id: "dsa-208",
        question: "What is the time complexity of building a Segment Tree from an array of N elements?",
        options: [
            "O(N)",
            "O(N log N)",
            "O(log N)",
            "O(N^2)"
        ],
        answer: 1,
        explanation: "Building a Segment Tree recursively involves computing the value for each internal node based on its children. There are roughly 2N nodes in the tree, and computing each takes O(1) time, but the standard recursive build takes O(N) time. (Note: O(N) is also correct, but O(N log N) is the upper bound for naive implementations, let's re-verify: tree has O(N) nodes, filling each is O(1), total is O(N). Wait, the option O(N) is not here. Let's provide the best fit or assume standard recursive is O(N). Let me correct the options in my thought: if I must pick from these, O(N log N) is wrong, O(N) is right. Ah, I wrote O(N log N) as option B. Let's make the correct answer O(N) by fixing the options in the final output. Actually, I will ensure option A is O(N)).",
        options: [
            "O(N)",
            "O(N log N)",
            "O(N^2)",
            "O(log N)"
        ],
        answer: 0,
        explanation: "A Segment Tree is built bottom-up. There are approximately 2N nodes in the tree. Since computing the value of an internal node takes O(1) time (e.g., adding two children), the total time to build the tree is O(N).",
        difficulty: "Medium",
        topic: "Segment Tree"
    },
    {
        id: "dsa-209",
        question: "Which of the following data structures allows deletion from both ends in O(1) time?",
        options: [
            "Stack",
            "Queue",
            "Deque",
            "Priority Queue"
        ],
        answer: 2,
        explanation: "A Deque (Double-Ended Queue) is specifically designed to support insertion and deletion at both the front and the rear in constant O(1) time.",
        difficulty: "Easy",
        topic: "Deque"
    },
    {
        id: "dsa-210",
        question: "What is the time complexity of finding the middle element of a singly linked list in a single pass?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n/2)"
        ],
        answer: 0,
        explanation: "Using the slow and fast pointer technique (tortoise and hare), the slow pointer moves one step and the fast pointer moves two steps. When the fast pointer reaches the end, the slow pointer is at the middle. This takes O(n) time.",
        difficulty: "Easy",
        topic: "Singly Linked List"
    },
    {
        id: "dsa-211",
        question: "What is the primary advantage of using a `std::deque` over a `std::vector` for implementing a queue?",
        options: [
            "`std::deque` uses less memory.",
            "`std::deque` provides O(1) insertion and deletion at the front, while `std::vector` provides O(n) insertion at the front.",
            "`std::deque` supports random access, while `std::vector` does not.",
            "`std::deque` is always faster for sorting."
        ],
        answer: 1,
        explanation: "A queue requires operations at both the front (dequeue) and rear (enqueue). `std::vector` only provides O(1) amortized insertion at the rear; inserting at the front requires shifting elements (O(n)). `std::deque` provides O(1) at both ends.",
        difficulty: "Medium",
        topic: "Deque"
    },
    {
        id: "dsa-212",
        question: "In an AVL tree, if a node has a balance factor of +2 in its right subtree's right child, which rotation is required?",
        options: [
            "Left-Left (LL) Rotation",
            "Right-Right (RR) Rotation",
            "Left-Right (LR) Rotation",
            "Right-Left (RL) Rotation"
        ],
        answer: 0,
        explanation: "A balance factor of +2 means the left subtree is heavier by 2. If the imbalance is in the left subtree's left child (Left-Left case), a single Right Rotation on the unbalanced node fixes it. (Note: RR case requires Left Rotation. Wait, +2 is Left heavy. Left child is Left heavy -> LL case -> Right Rotation).",
        difficulty: "Hard",
        topic: "AVL Tree"
    },
    {
        id: "dsa-213",
        question: "What is the maximum number of edges in a directed acyclic graph (DAG) with V vertices?",
        options: [
            "V * (V - 1) / 2",
            "V * (V - 1)",
            "V^2",
            "2V"
        ],
        answer: 1,
        explanation: "In a directed graph, each vertex can have an edge to every other vertex. The maximum number of edges is V * (V - 1). A DAG can achieve this maximum (e.g., a total order where all edges point in one direction).",
        difficulty: "Medium",
        topic: "Graphs"
    },
    {
        id: "dsa-214",
        question: "Which of the following is NOT a valid type of graph traversal?",
        options: [
            "Depth-First Search (DFS)",
            "Breadth-First Search (BFS)",
            "Best-First Search",
            "Height-First Search"
        ],
        answer: 3,
        explanation: "DFS and BFS are standard graph traversal algorithms. Best-First Search is a search algorithm (often using a priority queue). 'Height-First Search' is not a standard or valid graph traversal technique.",
        difficulty: "Easy",
        topic: "Graphs"
    },
    {
        id: "dsa-215",
        question: "What is the time complexity of the 'union' operation in a Disjoint Set Union WITHOUT using Union by Rank?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "Without Union by Rank, the union operation might always attach the larger tree under the root of the smaller tree (or vice versa, depending on implementation). This can create a degenerate tree of height n, making subsequent find operations take O(n) time.",
        difficulty: "Medium",
        topic: "Disjoint Set (Union Find)"
    },
    {
        id: "dsa-216",
        question: "In the context of a B-Tree of order M, what is the maximum number of children an internal node can have?",
        options: [
            "M",
            "M - 1",
            "M / 2",
            "2M"
        ],
        answer: 0,
        explanation: "The 'order' M of a B-Tree typically defines the maximum number of children a node can have. Therefore, an internal node can have at most M children. (It must have at least ceil(M/2) children, except the root).",
        difficulty: "Hard",
        topic: "Introduction to DSA"
    },
    {
        id: "dsa-217",
        question: "What is the primary advantage of a B-Tree over a standard Binary Search Tree for database indexing?",
        options: [
            "B-Trees are easier to implement.",
            "B-Trees are perfectly balanced at all times.",
            "B-Trees have a lower height, reducing the number of disk I/O operations required to fetch data.",
            "B-Trees use less memory."
        ],
        answer: 2,
        explanation: "Database records are stored on disk. Disk I/O is slow. Because B-Trees are wide (many children per node), their height is logarithmic to the base M, drastically reducing the number of disk accesses needed to find a record.",
        difficulty: "Hard",
        topic: "Introduction to DSA"
    },
    {
        id: "dsa-218",
        question: "Which of the following problems cannot be solved efficiently using a standard Dynamic Programming approach?",
        options: [
            "Fibonacci Sequence",
            "0/1 Knapsack",
            "Finding if a path exists between two nodes in an unweighted graph",
            "Longest Common Subsequence"
        ],
        answer: 2,
        explanation: "Finding a path (reachability) in an unweighted graph does not have overlapping subproblems that benefit from DP. It is optimally and simply solved using BFS or DFS in O(V+E) time.",
        difficulty: "Medium",
        topic: "Algorithm Selection"
    },
    {
        id: "dsa-219",
        question: "What is the space complexity of the standard recursive implementation of Merge Sort?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "Standard recursive Merge Sort uses an auxiliary array of size N to merge the subarrays. The recursion stack depth is O(log n), but the auxiliary array dominates, resulting in O(n) total space complexity.",
        difficulty: "Medium",
        topic: "Merge Sort"
    },
    {
        id: "dsa-220",
        question: "In the context of Complexity Analysis, what does the term 'tight bound' refer to?",
        options: [
            "Big-O notation",
            "Big-Omega notation",
            "Big-Theta notation",
            "Little-o notation"
        ],
        answer: 2,
        explanation: "Big-Theta (Θ) provides a tight bound, meaning the function grows exactly at the rate specified, both asymptotically upper-bounded and lower-bounded by the same expression.",
        difficulty: "Easy",
        topic: "Big Theta"
    },
    {
        id: "dsa-221",
        question: "What is the worst-case time complexity of the 'find' operation in a `std::map`?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "Since `std::map` is implemented as a balanced Red-Black Tree, finding a key requires traversing from the root down to a leaf, which takes O(log n) time in the worst case.",
        difficulty: "Easy",
        topic: "Map"
    },
    {
        id: "dsa-222",
        question: "What is the time complexity of the `std::sort` function in C++ STL?",
        options: [
            "O(n^2)",
            "O(n log n)",
            "O(n)",
            "O(log n)"
        ],
        answer: 1,
        explanation: "The C++ standard guarantees that `std::sort` has a worst-case time complexity of O(n log n). It achieves this using Introsort.",
        difficulty: "Easy",
        topic: "sort()"
    },
    {
        id: "dsa-223",
        question: "What is the time complexity of deleting a specific element by value from a `std::vector`?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "To delete by value, you must first find the element (O(n) using `std::find`), and then erase it. Erasing an element from the middle of a vector requires shifting all subsequent elements left, which takes O(n) time. Total: O(n) + O(n) = O(n).",
        difficulty: "Medium",
        topic: "Vector"
    },
    {
        id: "dsa-224",
        question: "Which of the following is a characteristic of a 'greedy choice property'?",
        options: [
            "The problem must have overlapping subproblems.",
            "A globally optimal solution can be assembled by making locally optimal choices.",
            "The algorithm must use a stack.",
            "The solution must be unique."
        ],
        answer: 1,
        explanation: "The greedy choice property is the defining trait of greedy algorithms. It asserts that making the best local choice at each step leads to a globally optimal solution without needing to reconsider past choices.",
        difficulty: "Medium",
        topic: "Greedy Algorithms"
    },
    {
        id: "dsa-225",
        question: "What is the output of `1 << 4`?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        answer: 2,
        explanation: "The left shift operator `<<` shifts the bits of 1 (which is `0001` in binary) four places to the left, resulting in `10000` in binary, which is 16 in decimal. This is equivalent to 1 * 2^4.",
        difficulty: "Easy",
        topic: "Binary Operations"
    },
    {
        id: "dsa-226",
        question: "What is the output of `16 >> 2`?",
        options: [
            "2",
            "4",
            "8",
            "16"
        ],
        answer: 1,
        explanation: "The right shift operator `>>` shifts the bits of 16 (which is `10000` in binary) two places to the right, resulting in `00100` in binary, which is 4 in decimal. This is equivalent to integer division by 2^2 (16 / 4 = 4).",
        difficulty: "Easy",
        topic: "Binary Operations"
    },
    {
        id: "dsa-227",
        question: "In a max-heap, if a node's value is increased, which operation is required to maintain the heap property?",
        options: [
            "Heapify Down (Sift Down)",
            "Heapify Up (Sift Up)",
            "Rebuild the entire heap",
            "No operation is needed"
        ],
        answer: 1,
        explanation: "Increasing a node's value might make it larger than its parent, violating the max-heap property. To fix this, the node must 'bubble up' or 'heapify up' until it is smaller than or equal to its parent.",
        difficulty: "Medium",
        topic: "Max Heap"
    },
    {
        id: "dsa-228",
        question: "What is the time complexity of the 'cycle detection' algorithm in an undirected graph using Union-Find?",
        options: [
            "O(V)",
            "O(E)",
            "O(V * E)",
            "O(E * α(V)) where α is the inverse Ackermann function"
        ],
        answer: 3,
        explanation: "For each edge, we perform two `find` operations and one `union` operation. Using path compression and union by rank, each operation takes O(α(V)) amortized time. Since there are E edges, the total time is O(E * α(V)).",
        difficulty: "Hard",
        topic: "Cycle Detection"
    },
    {
        id: "dsa-229",
        question: "Which of the following statements is FALSE about a Red-Black Tree?",
        options: [
            "The root is always black.",
            "All leaves (NIL nodes) are black.",
            "If a node is red, both its children are black.",
            "Every path from a given node to any of its descendant NIL nodes goes through the same number of black nodes."
        ],
        answer: 3,
        explanation: "Option D is the definition of a 'perfectly balanced' tree (like a full binary tree). A Red-Black tree only requires that the number of black nodes on any path from root to leaf is the *same* (black-height property), not that *every* path from *any* node has the same black count.",
        difficulty: "Hard",
        topic: "Red Black Tree"
    },
    {
        id: "dsa-230",
        question: "What is the time complexity of finding the Kth largest element in an unsorted array using a Min-Heap of size K?",
        options: [
            "O(n log n)",
            "O(n + k log n)",
            "O(n log k)",
            "O(k log n)"
        ],
        answer: 2,
        explanation: "We build a Min-Heap of the first K elements (O(K)). For the remaining N-K elements, if an element is larger than the heap's root, we replace the root and heapify down (O(log K)). Total time: O(K) + (N-K) * O(log K) = O(N log K).",
        difficulty: "Hard",
        topic: "Heap"
    },
    {
        id: "dsa-231",
        question: "In the context of the 'Two Pointers' technique, how do you find if there exists a pair in a sorted array that sums to a target value T?",
        options: [
            "Place both pointers at the start and move them forward one by one.",
            "Place one pointer at the start and one at the end. If sum < T, move left pointer right; if sum > T, move right pointer left.",
            "Use binary search on every element.",
            "Sort the array in descending order first."
        ],
        answer: 1,
        explanation: "This is the standard two-pointer approach for pair sum. By starting at the extremes, you can logically deduce which pointer to move based on the current sum compared to the target, operating in O(n) time.",
        difficulty: "Medium",
        topic: "Two Pointers"
    },
    {
        id: "dsa-232",
        question: "What is a 'sparse matrix'?",
        options: [
            "A matrix with very few non-zero elements.",
            "A matrix where all elements are negative.",
            "A matrix that has more rows than columns.",
            "A matrix that cannot be represented in memory."
        ],
        answer: 0,
        explanation: "A sparse matrix is a matrix in which most of the elements are zero. Storing them using standard 2D arrays wastes space, so specialized representations (like CSR or Coordinate List) are used.",
        difficulty: "Easy",
        topic: "2D Arrays"
    },
    {
        id: "dsa-233",
        question: "What is the worst-case time complexity of the Quick Sort algorithm when the pivot is chosen randomly?",
        options: [
            "O(n log n)",
            "O(n^2)",
            "O(n)",
            "O(log n)"
        ],
        answer: 1,
        explanation: "Randomized pivot selection makes the worst-case scenario *extremely unlikely*, but it does NOT change the theoretical worst-case time complexity. An unlucky sequence of random choices can still result in O(n^2) partitions.",
        difficulty: "Hard",
        topic: "Quick Sort"
    },
    {
        id: "dsa-234",
        question: "Which of the following is an internal sorting algorithm?",
        options: [
            "Merge Sort",
            "External Merge Sort",
            "Polyphase Merge Sort",
            "Replacement Selection"
        ],
        answer: 0,
        explanation: "Internal sorting algorithms load the entire dataset into main memory. Standard Merge Sort assumes the data fits in RAM. The other options are external sorting techniques designed for datasets too large to fit in memory.",
        difficulty: "Medium",
        topic: "Sorting Algorithms"
    },
    {
        id: "dsa-235",
        question: "What is the time complexity of inserting a node at the end of a circular singly linked list if you only have a pointer to the head?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "To insert at the end, you must make the new node point to the head, and the current last node point to the new node. Since you only have the head pointer, you must traverse the entire list to find the last node, taking O(n) time.",
        difficulty: "Medium",
        topic: "Circular Linked List"
    },
    {
        id: "dsa-236",
        question: "In a hash table using Quadratic Probing, if the first hash index is `h` and there is a collision, what are the subsequent probe indices?",
        options: [
            "h+1, h+2, h+3, ...",
            "h+1, h+4, h+9, h+16, ...",
            "h+1, h+2^2, h+3^3, ...",
            "h, h*2, h*3, ..."
        ],
        answer: 1,
        explanation: "Quadratic probing eliminates primary clustering by using a quadratic function of the probe number 'i' to calculate the offset. The sequence of indices is `(h + i^2) % table_size`, resulting in offsets of 1, 4, 9, 16, etc.",
        difficulty: "Medium",
        topic: "Open Addressing"
    },
    {
        id: "dsa-237",
        question: "What is the time complexity of traversing a graph represented by an Adjacency Matrix?",
        options: [
            "O(V)",
            "O(E)",
            "O(V^2)",
            "O(V + E)"
        ],
        answer: 2,
        explanation: "To traverse a graph using an adjacency matrix, you must visit every vertex (V) and for each vertex, scan its entire row of size V to find neighbors. This results in a time complexity of O(V^2), regardless of the number of edges E.",
        difficulty: "Medium",
        topic: "Adjacency Matrix"
    },
    {
        id: "dsa-238",
        question: "Which of the following algorithms is used to solve the 'Single Source Shortest Path' problem in a Directed Acyclic Graph (DAG) in linear time?",
        options: [
            "Dijkstra's Algorithm",
            "Bellman-Ford Algorithm",
            "Topological Sort followed by relaxing edges in topological order",
            "Floyd-Warshall Algorithm"
        ],
        answer: 2,
        explanation: "In a DAG, performing a topological sort and then processing vertices in that order guarantees that when you process a vertex, all its incoming edges have already been processed. This finds shortest paths in O(V + E) time.",
        difficulty: "Hard",
        topic: "Shortest Path"
    },
    {
        id: "dsa-239",
        question: "What is the space complexity of Floyd-Warshall's algorithm?",
        options: [
            "O(V)",
            "O(E)",
            "O(V^2)",
            "O(V^3)"
        ],
        answer: 2,
        explanation: "Floyd-Warshall uses a 2D matrix `dist[V][V]` to store the shortest distances between all pairs of vertices. This matrix requires O(V^2) space.",
        difficulty: "Easy",
        topic: "Floyd Warshall"
    },
    {
        id: "dsa-240",
        question: "What is the primary condition under which Dijkstra's algorithm fails?",
        options: [
            "When the graph is disconnected.",
            "When the graph contains negative edge weights.",
            "When the graph is a multigraph.",
            "When the graph is undirected."
        ],
        answer: 1,
        explanation: "Dijkstra's algorithm assumes that once a node is added to the 'visited' set, its shortest distance is finalized. A negative edge weight could later provide a shorter path to a visited node, violating this assumption.",
        difficulty: "Medium",
        topic: "Dijkstra"
    },
    {
        id: "dsa-241",
        question: "In the context of advanced DP optimization, what technique reduces the time complexity of certain DP problems (like DP with convex hull trick) from O(N^2) to O(N log N) or O(N)?",
        options: [
            "Memoization",
            "Divide and Conquer DP optimization",
            "Knuth's Optimization",
            "Both B and C are specific optimization techniques."
        ],
        answer: 3,
        explanation: "Knuth's Optimization and Divide and Conquer DP optimization (along with Convex Hull Trick, Li Chao Tree) are advanced techniques used to optimize specific forms of DP recurrences (e.g., when the optimal point satisfies the monotonicity property).",
        difficulty: "Hard",
        topic: "Optimization Techniques"
    },
    {
        id: "dsa-242",
        question: "What is the time complexity of the 'Word Break' problem (determining if a string can be segmented into dictionary words) using standard DP?",
        options: [
            "O(n)",
            "O(n^2)",
            "O(n^3)",
            "O(2^n)"
        ],
        answer: 2,
        explanation: "The DP array `dp[i]` checks if substring `s[0...i]` can be segmented. For each `i`, we check all previous indices `j` (O(n)) and extract the substring `s[j...i]` (which takes O(n) time). Total complexity is O(n^3).",
        difficulty: "Hard",
        topic: "Dynamic Programming"
    },
    {
        id: "dsa-243",
        question: "What is the time complexity of finding the longest palindromic subsequence (LPS) of a string of length N?",
        options: [
            "O(N^2)",
            "O(N^3)",
            "O(2^N)",
            "O(N)"
        ],
        answer: 0,
        explanation: "LPS can be solved by finding the Longest Common Subsequence (LCS) of the string and its reverse. Since LCS takes O(N^2) time, LPS also takes O(N^2) time using a standard DP table.",
        difficulty: "Medium",
        topic: "Dynamic Programming"
    },
    {
        id: "dsa-244",
        question: "Which of the following is a limitation of the 'Difference Array' technique?",
        options: [
            "It cannot handle range updates.",
            "It requires O(n^2) space.",
            "It only supports point queries efficiently, not range queries.",
            "After applying all updates, you must perform an O(n) prefix sum pass to get the final array."
        ],
        answer: 3,
        explanation: "A difference array allows O(1) range updates, but the array itself does not represent the actual values. You must iterate through the entire array once at the end to compute the prefix sums and reconstruct the final values.",
        difficulty: "Medium",
        topic: "Difference Array"
    },
    {
        id: "dsa-245",
        question: "What is the time complexity of checking if a linked list is a palindrome?",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n^2)",
            "O(log n)"
        ],
        answer: 0,
        explanation: "Using the slow/fast pointer technique, find the middle in O(n/2). Reverse the second half in O(n/2). Compare the first and reversed second half in O(n/2). Total time is O(n).",
        difficulty: "Medium",
        topic: "Singly Linked List"
    },
    {
        id: "dsa-246",
        question: "What is the worst-case time complexity of inserting a node into a balanced BST (like AVL or Red-Black tree)?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "Because the tree is balanced, its height is strictly O(log n). Finding the insertion point takes O(log n) time, and the subsequent rotations/recoloring to maintain balance also take O(log n) time.",
        difficulty: "Easy",
        topic: "AVL Tree"
    },
    {
        id: "dsa-247",
        question: "In a Min-Heap, where is the minimum element located?",
        options: [
            "At any leaf node",
            "At the rightmost child of the root",
            "At the root node",
            "At the leftmost leaf node"
        ],
        answer: 2,
        explanation: "By the definition of a Min-Heap, the value of every parent node is less than or equal to the values of its children. Therefore, the absolute minimum value in the heap must reside at the root.",
        difficulty: "Easy",
        topic: "Min Heap"
    },
];
