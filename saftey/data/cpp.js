// C++ Programming Questions

[
{
    "id": "cpp-1",
    "question": "Who developed the C++ programming language?",
    "options": [
        "Dennis Ritchie",
        "Bjarne Stroustrup",
        "James Gosling",
        "Guido van Rossum"
    ],
    "answer": 1,
    "explanation": "Bjarne Stroustrup developed C++ at Bell Labs starting in 1979. He wanted to add object-oriented features to the C language.",
    "difficulty": "Easy",
    "topic": "History of C++"
},
{
    "id": "cpp-2",
    "question": "C++ was originally called:",
    "options": [
        "C with Classes",
        "C++",
        "C Enhanced",
        "Object-Oriented C"
    ],
    "answer": 0,
    "explanation": "C++ was originally called 'C with Classes' during its early development phase at Bell Labs before being renamed to C++ in 1983.",
    "difficulty": "Easy",
    "topic": "History of C++"
},
{
    "id": "cpp-3",
    "question": "Which of the following is NOT a feature of C++?",
    "options": [
        "Object-Oriented Programming",
        "Platform Independent Execution",
        "Operator Overloading",
        "Multiple Inheritance"
    ],
    "answer": 1,
    "explanation": "C++ code is compiled to machine code and is platform-dependent, unlike Java which is platform-independent. C++ must be recompiled for each target platform.",
    "difficulty": "Easy",
    "topic": "Features"
},
{
    "id": "cpp-4",
    "question": "What does the '++' in C++ signify?",
    "options": [
        "Addition of two values",
        "Increment operator",
        "Enhancement/evolution from C",
        "Memory allocation"
    ],
    "answer": 2,
    "explanation": "The '++' in C++ signifies that it is an enhanced/evolved version of C. It's a play on the increment operator, meaning 'one more than C'.",
    "difficulty": "Easy",
    "topic": "History of C++"
},
{
    "id": "cpp-5",
    "question": "What is the correct extension for C++ source files?",
    "options": [
        ".c",
        ".cpp",
        ".h",
        ".java"
    ],
    "answer": 1,
    "explanation": ".cpp is the standard extension for C++ source files. .c is for C, .h for header files, and .java for Java.",
    "difficulty": "Easy",
    "topic": "Basics"
},
{
    "id": "cpp-6",
    "question": "Which compiler phase converts source code to object code?",
    "options": [
        "Preprocessor",
        "Compiler",
        "Linker",
        "Loader"
    ],
    "answer": 1,
    "explanation": "The compiler phase converts preprocessed source code into object code (machine code). The preprocessor handles directives, and the linker combines object files.",
    "difficulty": "Easy",
    "topic": "Compilation Process"
},
{
    "id": "cpp-7",
    "question": "What does the preprocessor directive #include do?",
    "options": [
        "Compiles the header file",
        "Includes the content of a file in the source",
        "Links the library",
        "Creates a new file"
    ],
    "answer": 1,
    "explanation": "#include directive tells the preprocessor to insert the contents of the specified file into the source code at that point before compilation.",
    "difficulty": "Easy",
    "topic": "Preprocessor Directives"
},
{
    "id": "cpp-8",
    "question": "Which of the following is the correct entry point of a C++ program?",
    "options": [
        "start()",
        "main()",
        "begin()",
        "entry()"
    ],
    "answer": 1,
    "explanation": "main() is the standard entry point of a C++ program. Execution begins from main() function regardless of its position in the code.",
    "difficulty": "Easy",
    "topic": "Basics"
},
{
    "id": "cpp-9",
    "question": "What is the size of a char data type in C++?",
    "options": [
        "1 byte",
        "2 bytes",
        "4 bytes",
        "8 bytes"
    ],
    "answer": 0,
    "explanation": "char is guaranteed to be exactly 1 byte (8 bits) in C++, which is defined by the standard sizeof(char) == 1.",
    "difficulty": "Easy",
    "topic": "Data Types"
},
{
    "id": "cpp-10",
    "question": "Which data type is used to store floating-point numbers with single precision?",
    "options": [
        "double",
        "float",
        "int",
        "long double"
    ],
    "answer": 1,
    "explanation": "float is used for single-precision floating-point numbers (typically 4 bytes). double is for double-precision (typically 8 bytes).",
    "difficulty": "Easy",
    "topic": "Data Types"
},
{
    "id": "cpp-11",
    "question": "What is the default return type of main() in C++?",
    "options": [
        "void",
        "int",
        "char",
        "bool"
    ],
    "answer": 1,
    "explanation": "The standard specifies that main() should return int. In C++11 and later, you can omit the return statement, and 0 is implicitly returned.",
    "difficulty": "Easy",
    "topic": "Basics"
},
{
    "id": "cpp-12",
    "question": "Which keyword is used to define a constant in C++?",
    "options": [
        "var",
        "const",
        "define",
        "constant"
    ],
    "answer": 1,
    "explanation": "const keyword is used to define constants in C++. Once a const variable is initialized, its value cannot be changed.",
    "difficulty": "Easy",
    "topic": "Constants"
},
{
    "id": "cpp-13",
    "question": "What is the output of: cout << 10 / 3;",
    "options": [
        "3.33",
        "3.0",
        "3",
        "Compiler error"
    ],
    "answer": 2,
    "explanation": "When both operands are integers, division performs integer division, truncating the decimal part. 10/3 equals 3.",
    "difficulty": "Easy",
    "topic": "Operators"
},
{
    "id": "cpp-14",
    "question": "Which operator is used to get the remainder of integer division?",
    "options": [
        "/",
        "%",
        "&",
        "*"
    ],
    "answer": 1,
    "explanation": "The modulo operator % returns the remainder of integer division. For example, 10 % 3 returns 1.",
    "difficulty": "Easy",
    "topic": "Operators"
},
{
    "id": "cpp-15",
    "question": "What is the value of x after: int x = 5; x += 3;",
    "options": [
        "3",
        "5",
        "8",
        "15"
    ],
    "answer": 2,
    "explanation": "The += operator adds the right operand to the left operand and assigns the result. x += 3 is equivalent to x = x + 3, so x becomes 8.",
    "difficulty": "Easy",
    "topic": "Operators"
},
{
    "id": "cpp-16",
    "question": "Which of the following is the logical AND operator?",
    "options": [
        "&&",
        "&",
        "||",
        "!"
    ],
    "answer": 0,
    "explanation": "&& is the logical AND operator. & is the bitwise AND operator. Logical AND returns true only if both operands are true.",
    "difficulty": "Easy",
    "topic": "Operators"
},
{
    "id": "cpp-17",
    "question": "What is the correct way to declare a boolean variable in C++?",
    "options": [
        "boolean flag;",
        "bool flag;",
        "Boolean flag;",
        "FLAG flag;"
    ],
    "answer": 1,
    "explanation": "bool is the correct keyword for boolean type in C++. It can hold values true or false (lowercase).",
    "difficulty": "Easy",
    "topic": "Data Types"
},
{
    "id": "cpp-18",
    "question": "Which header file is needed for input/output in C++?",
    "options": [
        "<stdio.h>",
        "<iostream>",
        "<conio.h>",
        "<fstream>"
    ],
    "answer": 1,
    "explanation": "<iostream> is the standard C++ header for input/output streams (cin and cout). <stdio.h> is the C-style I/O header.",
    "difficulty": "Easy",
    "topic": "Input Output"
},
{
    "id": "cpp-19",
    "question": "What does std::cout represent?",
    "options": [
        "Character output",
        "Standard character output stream",
        "Console output utility",
        "Standard console output tool"
    ],
    "answer": 1,
    "explanation": "std::cout is the standard character output stream object defined in <iostream>. It's used to output data to the console.",
    "difficulty": "Easy",
    "topic": "cout"
},
{
    "id": "cpp-20",
    "question": "Which operator is used with cout for output?",
    "options": [
        ">>",
        "<<",
        "->",
        "=>"
    ],
    "answer": 1,
    "explanation": "The << (insertion operator) is used with cout. It directs data to the output stream. The >> (extraction operator) is used with cin.",
    "difficulty": "Easy",
    "topic": "cout"
},
{
    "id": "cpp-21",
    "question": "What does std::cin do?",
    "options": [
        "Prints output",
        "Reads input from user",
        "Clears screen",
        "Creates a file"
    ],
    "answer": 1,
    "explanation": "std::cin is the standard input stream object that reads input from the console (keyboard). It uses the >> extraction operator.",
    "difficulty": "Easy",
    "topic": "cin"
},
{
    "id": "cpp-22",
    "question": "Which control statement is used for decision making in C++?",
    "options": [
        "for",
        "while",
        "if",
        "do"
    ],
    "answer": 2,
    "explanation": "The if statement is the primary control statement for decision making. It executes a block of code if a condition is true.",
    "difficulty": "Easy",
    "topic": "if"
},
{
    "id": "cpp-23",
    "question": "What is the syntax for a for loop in C++?",
    "options": [
        "for i=0 to n",
        "for (init; condition; update)",
        "for each i in range",
        "loop for (condition)"
    ],
    "answer": 1,
    "explanation": "The C++ for loop syntax is: for (initialization; condition; update) { body }. This structure allows precise control over loop iterations.",
    "difficulty": "Easy",
    "topic": "for"
},
{
    "id": "cpp-24",
    "question": "How many times will 'Hello' be printed: for(int i=0; i<5; i++) cout << 'Hello';",
    "options": [
        "4",
        "5",
        "6",
        "Infinite"
    ],
    "answer": 1,
    "explanation": "The loop starts at i=0 and continues while i<5. It prints 'Hello' for i=0,1,2,3,4, which is exactly 5 times.",
    "difficulty": "Easy",
    "topic": "for"
},
{
    "id": "cpp-25",
    "question": "What is the difference between while and do-while loops?",
    "options": [
        "No difference",
        "do-while executes at least once",
        "while executes at least once",
        "do-while cannot have conditions"
    ],
    "answer": 1,
    "explanation": "The do-while loop tests the condition after executing the loop body, so it always executes at least once. The while loop tests before execution.",
    "difficulty": "Easy",
    "topic": "while"
},
{
    "id": "cpp-26",
    "question": "Which keyword is used to exit a loop prematurely?",
    "options": [
        "exit",
        "break",
        "continue",
        "return"
    ],
    "answer": 1,
    "explanation": "break is used to exit a loop or switch statement immediately. continue skips the current iteration and moves to the next one.",
    "difficulty": "Easy",
    "topic": "Control Statements"
},
{
    "id": "cpp-27",
    "question": "What does the continue statement do in a loop?",
    "options": [
        "Exits the loop",
        "Skips remaining code in current iteration",
        "Pauses the loop",
        "Restarts the loop from beginning"
    ],
    "answer": 1,
    "explanation": "continue skips the remaining statements in the current iteration and jumps to the loop condition check or update expression.",
    "difficulty": "Easy",
    "topic": "Control Statements"
},
{
    "id": "cpp-28",
    "question": "Which statement is used for multiple branches based on a value?",
    "options": [
        "if-else",
        "switch",
        "for",
        "while"
    ],
    "answer": 1,
    "explanation": "switch statement allows multiple branches based on the value of an integer or enum expression. It's cleaner than multiple if-else for this purpose.",
    "difficulty": "Easy",
    "topic": "switch"
},
{
    "id": "cpp-29",
    "question": "What is required at the end of each case in a switch statement?",
    "options": [
        "end;",
        "break;",
        "return;",
        "Nothing is required"
    ],
    "answer": 1,
    "explanation": "break is needed to prevent fall-through to the next case. Without break, execution continues into the next case's code.",
    "difficulty": "Easy",
    "topic": "switch"
},
{
    "id": "cpp-30",
    "question": "Which data type cannot be used in a switch expression?",
    "options": [
        "int",
        "char",
        "float",
        "enum"
    ],
    "answer": 2,
    "explanation": "switch expressions must be of integral or enum type. float and other floating-point types cannot be used due to precision issues in equality comparison.",
    "difficulty": "Easy",
    "topic": "switch"
},
{
    "id": "cpp-31",
    "question": "What is a function in C++?",
    "options": [
        "A variable type",
        "A reusable block of code",
        "A memory location",
        "A header file"
    ],
    "answer": 1,
    "explanation": "A function is a self-contained block of code that performs a specific task. It promotes code reusability and modularity.",
    "difficulty": "Easy",
    "topic": "Functions"
},
{
    "id": "cpp-32",
    "question": "What is function overloading?",
    "options": [
        "Calling a function multiple times",
        "Having multiple functions with same name but different parameters",
        "Overwriting a function's code",
        "A function calling itself"
    ],
    "answer": 1,
    "explanation": "Function overloading allows multiple functions with the same name but different parameter lists. The compiler selects the appropriate version based on arguments.",
    "difficulty": "Easy",
    "topic": "Function Overloading"
},
{
    "id": "cpp-33",
    "question": "What is the output of: void func(int a, int b = 10) { cout << a+b; } func(5);",
    "options": [
        "5",
        "10",
        "15",
        "Error"
    ],
    "answer": 2,
    "explanation": "The second parameter has a default value of 10. When func(5) is called, b takes the default value, so 5+10=15 is printed.",
    "difficulty": "Easy",
    "topic": "Default Arguments"
},
{
    "id": "cpp-34",
    "question": "What is recursion?",
    "options": [
        "A function calling another function",
        "A function calling itself",
        "A loop calling a function",
        "Nested functions"
    ],
    "answer": 1,
    "explanation": "Recursion is when a function calls itself directly or indirectly. Every recursive function needs a base case to prevent infinite recursion.",
    "difficulty": "Easy",
    "topic": "Recursion"
},
{
    "id": "cpp-35",
    "question": "What is a namespace in C++?",
    "options": [
        "A memory area",
        "A container for identifiers to avoid name conflicts",
        "A type of variable",
        "A loop structure"
    ],
    "answer": 1,
    "explanation": "Namespaces provide a way to group related identifiers and prevent name collisions. The std namespace contains standard library components.",
    "difficulty": "Easy",
    "topic": "Namespaces"
},
{
    "id": "cpp-36",
    "question": "What is the purpose of 'using namespace std;'?",
    "options": [
        "Creates a new namespace",
        "Imports all standard library names",
        "Defines std namespace",
        "Deletes std namespace"
    ],
    "answer": 1,
    "explanation": "'using namespace std;' brings all names from the std namespace into the current scope, allowing use of cout, cin, string, etc. without the std:: prefix.",
    "difficulty": "Easy",
    "topic": "Namespaces"
},
{
    "id": "cpp-37",
    "question": "Which storage class has local scope but persists between function calls?",
    "options": [
        "auto",
        "register",
        "static",
        "extern"
    ],
    "answer": 2,
    "explanation": "static local variables maintain their value between function calls. They are initialized only once and retain their value until program termination.",
    "difficulty": "Easy",
    "topic": "Storage Classes"
},
{
    "id": "cpp-38",
    "question": "What is the size of an int on most modern 64-bit systems?",
    "options": [
        "2 bytes",
        "4 bytes",
        "8 bytes",
        "16 bytes"
    ],
    "answer": 1,
    "explanation": "On most modern systems, int is typically 4 bytes (32 bits), regardless of whether the system is 32-bit or 64-bit.",
    "difficulty": "Easy",
    "topic": "Data Types"
},
{
    "id": "cpp-39",
    "question": "Which escape sequence is used for a new line?",
    "options": [
        "\\t",
        "\\n",
        "\\r",
        "\\b"
    ],
    "answer": 1,
    "explanation": "\\n is the newline escape sequence. It moves the cursor to the beginning of the next line. \\t is for tab, \\r for carriage return.",
    "difficulty": "Easy",
    "topic": "Basics"
},
{
    "id": "cpp-40",
    "question": "What is the output of: cout << 'A' + 1;",
    "options": [
        "A1",
        "B",
        "66",
        "Error"
    ],
    "answer": 2,
    "explanation": "'A' has ASCII value 65. Adding 1 gives 66, which is printed as integer 66. The char is promoted to int for the arithmetic operation.",
    "difficulty": "Easy",
    "topic": "Expressions"
},
{
    "id": "cpp-41",
    "question": "Which of the following is a correct comment in C++?",
    "options": [
        "# This is a comment",
        "<!-- This is a comment -->",
        "// This is a comment",
        "** This is a comment **"
    ],
    "answer": 2,
    "explanation": "// is used for single-line comments in C++. C++ also supports multi-line comments with /* */. # is for preprocessor directives.",
    "difficulty": "Easy",
    "topic": "Basics"
},
{
    "id": "cpp-42",
    "question": "What is a pointer in C++?",
    "options": [
        "A variable that stores data",
        "A variable that stores memory address",
        "A special type of loop",
        "A reference to a file"
    ],
    "answer": 1,
    "explanation": "A pointer is a variable that stores the memory address of another variable. It is declared using the * operator.",
    "difficulty": "Easy",
    "topic": "Pointers"
},
{
    "id": "cpp-43",
    "question": "Which operator is used to get the address of a variable?",
    "options": [
        "*",
        "&",
        "->",
        "."
    ],
    "answer": 1,
    "explanation": "The address-of operator & returns the memory address of a variable. For example, &x gives the address where x is stored.",
    "difficulty": "Easy",
    "topic": "Pointers"
},
{
    "id": "cpp-44",
    "question": "What does *ptr represent if ptr is a pointer?",
    "options": [
        "Address of ptr",
        "Value at the address stored in ptr",
        "Pointer to ptr",
        "Error"
    ],
    "answer": 1,
    "explanation": "The dereference operator * accesses the value stored at the memory address held by the pointer. *ptr gives the value at the address ptr points to.",
    "difficulty": "Easy",
    "topic": "Pointers"
},
{
    "id": "cpp-45",
    "question": "What is a null pointer?",
    "options": [
        "A pointer to address 0",
        "A pointer with no type",
        "A deleted pointer",
        "An invalid pointer"
    ],
    "answer": 0,
    "explanation": "A null pointer points to address 0 (or nullptr in modern C++). It indicates that the pointer doesn't point to any valid memory location.",
    "difficulty": "Easy",
    "topic": "Pointers"
},
{
    "id": "cpp-46",
    "question": "What is the difference between a pointer and a reference?",
    "options": [
        "No difference",
        "Reference must be initialized and cannot be reassigned",
        "Pointer must be initialized",
        "Reference can be null"
    ],
    "answer": 1,
    "explanation": "A reference must be initialized when declared and cannot be reassigned to refer to another variable. A pointer can be null and reassigned.",
    "difficulty": "Easy",
    "topic": "References"
},
{
    "id": "cpp-47",
    "question": "How is a reference declared in C++?",
    "options": [
        "int &ref = var;",
        "int *ref = &var;",
        "int ref% = var;",
        "ref int = var;"
    ],
    "answer": 0,
    "explanation": "A reference is declared using the & symbol after the type: int &ref = var; creates a reference named ref to the variable var.",
    "difficulty": "Easy",
    "topic": "References"
},
{
    "id": "cpp-48",
    "question": "What operator is used to allocate memory dynamically?",
    "options": [
        "malloc",
        "new",
        "alloc",
        "create"
    ],
    "answer": 1,
    "explanation": "The new operator is used in C++ to allocate memory dynamically. It returns a pointer to the allocated memory. For arrays, use new[] and delete[] operator.",
    "difficulty": "Easy",
    "topic": "Dynamic Memory"
},
{
    "id": "cpp-49",
    "question": "Which operator is used to free dynamically allocated memory?",
    "options": [
        "free",
        "delete",
        "release",
        "destroy"
    ],
    "answer": 1,
    "explanation": "delete is the C++ operator to free memory allocated with new. For arrays allocated with new[], use delete[] to properly deallocate.",
    "difficulty": "Easy",
    "topic": "Dynamic Memory"
},
{
    "id": "cpp-50",
    "question": "What is an array in C++?",
    "options": [
        "A single variable",
        "A collection of elements of same type stored contiguously",
        "A linked list",
        "A function"
    ],
    "answer": 1,
    "explanation": "An array is a collection of elements of the same data type stored in contiguous memory locations. Elements are accessed using an index.",
    "difficulty": "Easy",
    "topic": "Arrays"
},
{
    "id": "cpp-51",
    "question": "What is the index of the first element in a C++ array?",
    "options": [
        "1",
        "0",
        "-1",
        "Depends on array size"
    ],
    "answer": 1,
    "explanation": "C++ arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.",
    "difficulty": "Easy",
    "topic": "Arrays"
},
{
    "id": "cpp-52",
    "question": "How do you declare an array of 10 integers in C++?",
    "options": [
        "int array(10);",
        "int array[10];",
        "array int[10];",
        "int[10] array;"
    ],
    "answer": 1,
    "explanation": "The correct syntax for declaring an array in C++ is: type name[size]; so int array[10]; declares an array of 10 integers.",
    "difficulty": "Easy",
    "topic": "Arrays"
},
{
    "id": "cpp-53",
    "question": "What happens if you access array[10] in an array declared as int arr[10]?",
    "options": [
        "Compiler error",
        "Runtime error",
        "Undefined behavior",
        "Returns 0"
    ],
    "answer": 2,
    "explanation": "Accessing array[10] is out of bounds (valid indices are 0-9). C++ doesn't perform bounds checking, so this results in undefined behavior.",
    "difficulty": "Easy",
    "topic": "Arrays"
},
{
    "id": "cpp-54",
    "question": "Which header is required for std::string?",
    "options": [
        "<string.h>",
        "<cstring>",
        "<string>",
        "<iostream>"
    ],
    "answer": 2,
    "explanation": "<string> is the C++ standard header for std::string class. <cstring> is for C-style string functions, and <string.h> is the C version.",
    "difficulty": "Easy",
    "topic": "Strings"
},
{
    "id": "cpp-55",
    "question": "What is the null character in C-style strings?",
    "options": [
        "0",
        "\\0",
        "' '",
        "\\n"
    ],
    "answer": 1,
    "explanation": "\\0 (null character) marks the end of a C-style string. It has ASCII value 0 and must be present for string functions to work correctly.",
    "difficulty": "Easy",
    "topic": "Character Arrays"
},
{
    "id": "cpp-56",
    "question": "Which function returns the length of a std::string?",
    "options": [
        "length() or size()",
        "len()",
        "strlen()",
        "count()"
    ],
    "answer": 0,
    "explanation": "std::string provides both length() and size() methods that return the number of characters. They are equivalent for strings.",
    "difficulty": "Easy",
    "topic": "Strings"
},
{
    "id": "cpp-57",
    "question": "What is a structure in C++?",
    "options": [
        "A function template",
        "A user-defined data type grouping related variables",
        "A loop structure",
        "An array of pointers"
    ],
    "answer": 1,
    "explanation": "A structure (struct) is a user-defined data type that groups related variables of different types under a single name.",
    "difficulty": "Easy",
    "topic": "Structures"
},
{
    "id": "cpp-58",
    "question": "What is the difference between struct and class in C++?",
    "options": [
        "No difference",
        "Default access specifier (struct is public, class is private)",
        "struct cannot have methods",
        "class cannot have data members"
    ],
    "answer": 1,
    "explanation": "The only technical difference is the default access specifier: struct defaults to public, class defaults to private. Otherwise, they are identical.",
    "difficulty": "Easy",
    "topic": "Structures"
},
{
    "id": "cpp-59",
    "question": "What is an enum in C++?",
    "options": [
        "An enumerator loop",
        "A named set of integer constants",
        "An energy unit",
        "An enumerated array"
    ],
    "answer": 1,
    "explanation": "enum (enumeration) is a user-defined type consisting of named integer constants. It improves code readability by giving meaningful names to values.",
    "difficulty": "Easy",
    "topic": "Enum"
},
{
    "id": "cpp-60",
    "question": "What is a union in C++?",
    "options": [
        "Same as struct",
        "A type where only one member can have a value at a time",
        "A combined class",
        "A group of functions"
    ],
    "answer": 1,
    "explanation": "A union stores different data types in the same memory location. Only one member can contain a value at any given time. Size equals the largest member.",
    "difficulty": "Easy",
    "topic": "Union"
},
{
    "id": "cpp-61",
    "question": "What is a class in C++?",
    "options": [
        "A data type",
        "A blueprint for creating objects with data and methods",
        "A library",
        "A header file"
    ],
    "answer": 1,
    "explanation": "A class is a user-defined blueprint that encapsulates data (member variables) and functions (methods) that operate on that data.",
    "difficulty": "Easy",
    "topic": "Classes"
},
{
    "id": "cpp-62",
    "question": "What is an object in C++?",
    "options": [
        "A memory address",
        "An instance of a class",
        "A function",
        "A header file"
    ],
    "answer": 1,
    "explanation": "An object is an instance of a class. When a class is defined, no memory is allocated until an object of that class is created.",
    "difficulty": "Easy",
    "topic": "Objects"
},
{
    "id": "cpp-63",
    "question": "What is a constructor?",
    "options": [
        "A destructor function",
        "A special member function called when an object is created",
        "A member function called before main",
        "A static function"
    ],
    "answer": 1,
    "explanation": "A constructor is a special member function automatically called when an object is created. It initializes the object's members and has the same name as the class.",
    "difficulty": "Easy",
    "topic": "Constructors"
},
{
    "id": "cpp-64",
    "question": "What is a destructor?",
    "options": [
        "A function that deletes objects",
        "A special member function called when an object is destroyed",
        "A function that frees memory",
        "A constructor with no parameters"
    ],
    "answer": 1,
    "explanation": "A destructor is called automatically when an object goes out of scope or is deleted. It performs cleanup tasks and has ~ prefix before class name.",
    "difficulty": "Easy",
    "topic": "Destructor"
},
{
    "id": "cpp-65",
    "question": "Can a constructor have a return type?",
    "options": [
        "Yes, any type",
        "Yes, only void",
        "No, constructors cannot have a return type",
        "Yes, must return the object"
    ],
    "answer": 2,
    "explanation": "Constructors cannot have a return type, not even void. They implicitly return the constructed object. Adding a return type makes it a regular function.",
    "difficulty": "Easy",
    "topic": "Constructors"
},
{
    "id": "cpp-66",
    "question": "What is encapsulation?",
    "options": [
        "Inheriting from multiple classes",
        "Bundling data and methods that operate on data, hiding implementation details",
        "Creating multiple objects",
        "Overloading functions"
    ],
    "answer": 1,
    "explanation": "Encapsulation is bundling data and methods together while hiding internal implementation. It's achieved through access specifiers (private, protected, public).",
    "difficulty": "Easy",
    "topic": "Encapsulation"
},
{
    "id": "cpp-67",
    "question": "Which access specifier makes members accessible only within the class?",
    "options": [
        "public",
        "private",
        "protected",
        "internal"
    ],
    "answer": 1,
    "explanation": "private members are accessible only within the class they are declared. They cannot be accessed directly by derived classes or outside code.",
    "difficulty": "Easy",
    "topic": "Access Specifiers"
},
{
    "id": "cpp-68",
    "question": "What is inheritance?",
    "options": [
        "Copying code from another file",
        "A mechanism where a derived class inherits properties from a base class",
        "Creating multiple constructors",
        "Accessing private members"
    ],
    "answer": 1,
    "explanation": "Inheritance allows a derived class to inherit attributes and methods from a base class. It promotes code reuse and establishes an is-a relationship.",
    "difficulty": "Easy",
    "topic": "Inheritance"
},
{
    "id": "cpp-69",
    "question": "What is polymorphism?",
    "options": [
        "Having many variables",
        "The ability to take many forms (same interface, different implementations)",
        "Multiple inheritance",
        "Data hiding"
    ],
    "answer": 1,
    "explanation": "Polymorphism means 'many forms'. It allows objects of different classes to be treated as objects of a common base class, with appropriate behavior at runtime.",
    "difficulty": "Easy",
    "topic": "Polymorphism"
},
{
    "id": "cpp-70",
    "question": "What keyword is used for inheritance in C++?",
    "options": [
        "extends",
        "inherits",
        "implements",
        ": (colon)"
    ],
    "answer": 3,
    "explanation": "C++ uses the colon (:) for inheritance. For example, class Derived : public Base { }; indicates Derived inherits from Base.",
    "difficulty": "Easy",
    "topic": "Inheritance"
},
{
    "id": "cpp-71",
    "question": "What is the output of: int a = 10, b = 20; cout << (a > b ? a : b);",
    "options": [
        "10",
        "20",
        "0",
        "1"
    ],
    "answer": 1,
    "explanation": "The ternary operator (?:) returns a if condition is true, otherwise b. Since 10 > 20 is false, it returns b which is 20.",
    "difficulty": "Easy",
    "topic": "Operators"
},
{
    "id": "cpp-72",
    "question": "Which of these is NOT an access specifier in C++?",
    "options": [
        "public",
        "private",
        "protected",
        "internal"
    ],
    "answer": 3,
    "explanation": "C++ has public, private, and protected as access specifiers. 'internal' is an access modifier in C#, not C++.",
    "difficulty": "Easy",
    "topic": "Access Specifiers"
},
{
    "id": "cpp-73",
    "question": "What is a virtual function?",
    "options": [
        "A function that doesn't exist",
        "A member function declared with virtual keyword for runtime polymorphism",
        "A static function",
        "A private function"
    ],
    "answer": 1,
    "explanation": "A virtual function is declared with the virtual keyword in a base class and can be overridden in derived classes. It enables dynamic binding/runtime polymorphism.",
    "difficulty": "Easy",
    "topic": "Virtual Functions"
},
{
    "id": "cpp-74",
    "question": "What is a pure virtual function?",
    "options": [
        "A virtual function with no code",
        "A virtual function that must be overridden by derived classes",
        "A function with only return statement",
        "A deleted function"
    ],
    "answer": 1,
    "explanation": "A pure virtual function is declared with = 0 and has no implementation in the base class. Derived classes must override it to become concrete classes.",
    "difficulty": "Easy",
    "topic": "Pure Virtual Functions"
},
{
    "id": "cpp-75",
    "question": "What is an abstract class?",
    "options": [
        "A class with no methods",
        "A class with at least one pure virtual function",
        "A class without constructors",
        "A class that cannot be compiled"
    ],
    "answer": 1,
    "explanation": "An abstract class contains at least one pure virtual function and cannot be instantiated directly. It serves as a base class for other classes.",
    "difficulty": "Easy",
    "topic": "Abstract Classes"
},
{
    "id": "cpp-76",
    "question": "Which keyword is used to prevent a function from being overridden?",
    "options": [
        "static",
        "final",
        "sealed",
        "const"
    ],
    "answer": 1,
    "explanation": "The final keyword (C++11) prevents a virtual function from being overridden in derived classes or prevents a class from being inherited.",
    "difficulty": "Easy",
    "topic": "Function Overriding"
},
{
    "id": "cpp-77",
    "question": "What is a template in C++?",
    "options": [
        "A precompiled header",
        "A blueprint for creating generic classes or functions",
        "A macro definition",
        "A design pattern"
    ],
    "answer": 1,
    "explanation": "Templates allow writing generic code that works with different data types. They enable type-safe generic programming without code duplication.",
    "difficulty": "Easy",
    "topic": "Templates"
},
{
    "id": "cpp-78",
    "question": "What exception handling keyword is used to catch exceptions?",
    "options": [
        "try",
        "catch",
        "throw",
        "except"
    ],
    "answer": 1,
    "explanation": "catch block handles exceptions thrown in the preceding try block. It specifies the type of exception it can handle.",
    "difficulty": "Easy",
    "topic": "catch"
},
{
    "id": "cpp-79",
    "question": "What does the throw keyword do?",
    "options": [
        "Catches an exception",
        "Signals an exception has occurred",
        "Ignores an exception",
        "Handles an exception"
    ],
    "answer": 1,
    "explanation": "throw keyword signals that an exception or error has occurred. It can throw any type of object and transfers control to the matching catch handler.",
    "difficulty": "Easy",
    "topic": "throw"
},
{
    "id": "cpp-80",
    "question": "Which STL container provides key-value pair storage with unique keys?",
    "options": [
        "vector",
        "set",
        "map",
        "list"
    ],
    "answer": 2,
    "explanation": "std::map stores key-value pairs with unique keys, implemented as a balanced binary search tree. It provides O(log n) lookup time.",
    "difficulty": "Easy",
    "topic": "map"
},
{
    "id": "cpp-81",
    "question": "What is a vector in C++ STL?",
    "options": [
        "A fixed-size array",
        "A dynamic array that can grow and shrink",
        "A linked list",
        "A hash table"
    ],
    "answer": 1,
    "explanation": "std::vector is a dynamic array that can automatically resize. Elements are stored contiguously, providing fast random access and amortized O(1) push_back.",
    "difficulty": "Easy",
    "topic": "vector"
},
{
    "id": "cpp-82",
    "question": "Which function adds an element to the end of a vector?",
    "options": [
        "push()",
        "push_back()",
        "append()",
        "add()"
    ],
    "answer": 1,
    "explanation": "push_back() adds an element to the end of the vector, increasing its size by 1. If needed, it automatically reallocates memory to accommodate the new element.",
    "difficulty": "Easy",
    "topic": "vector"
},
{
    "id": "cpp-83",
    "question": "What does vector.size() return?",
    "options": [
        "Capacity in bytes",
        "Number of elements currently in the vector",
        "Maximum possible size",
        "Memory address"
    ],
    "answer": 1,
    "explanation": "size() returns the number of elements currently stored in the vector. This is different from capacity(), which returns the allocated storage size.",
    "difficulty": "Easy",
    "topic": "vector"
},
{
    "id": "cpp-84",
    "question": "Which container follows FIFO (First In, First Out) principle?",
    "options": [
        "stack",
        "queue",
        "deque",
        "priority_queue"
    ],
    "answer": 1,
    "explanation": "std::queue follows FIFO principle - the first element added is the first one removed. push() adds to back, pop() removes from front.",
    "difficulty": "Easy",
    "topic": "queue"
},
{
    "id": "cpp-85",
    "question": "Which container follows LIFO (Last In, First Out) principle?",
    "options": [
        "queue",
        "stack",
        "deque",
        "list"
    ],
    "answer": 1,
    "explanation": "std::stack follows LIFO principle - the last element added is the first one removed. push() adds to top, pop() removes from top.",
    "difficulty": "Easy",
    "topic": "stack"
},
{
    "id": "cpp-86",
    "question": "What is the purpose of #define?",
    "options": [
        "Declare a variable",
        "Define a macro (text replacement)",
        "Create a function",
        "Import a file"
    ],
    "answer": 1,
    "explanation": "#define creates a macro that performs text replacement before compilation. For example, #define PI 3.14159 replaces PI with 3.14159 in the code.",
    "difficulty": "Easy",
    "topic": "Macros"
},
{
    "id": "cpp-87",
    "question": "What is the output of: cout << sizeof(bool);",
    "options": [
        "1",
        "4",
        "0",
        "8"
    ],
    "answer": 0,
    "explanation": "sizeof(bool) is 1 byte in C++. A boolean only needs one bit, but the minimum addressable unit is one byte.",
    "difficulty": "Easy",
    "topic": "Data Types"
},
{
    "id": "cpp-88",
    "question": "Which of the following operators cannot be overloaded?",
    "options": [
        "+",
        "*",
        "::",
        "[]"
    ],
    "answer": 2,
    "explanation": "The scope resolution operator (::) cannot be overloaded. Other non-overloadable operators include: ., .*, ?:, sizeof, typeid, and static_cast operators.",
    "difficulty": "Easy",
    "topic": "Operator Overloading"
},
{
    "id": "cpp-89",
    "question": "What is an inline function?",
    "options": [
        "A function inside a class",
        "A function whose code is inserted at the call site",
        "A recursive function",
        "A static function"
    ],
    "answer": 1,
    "explanation": "An inline function's code is expanded at the call site during compilation, avoiding function call overhead. The inline keyword is a suggestion to the compiler.",
    "difficulty": "Easy",
    "topic": "Inline Functions"
},
{
    "id": "cpp-90",
    "question": "What does the static keyword do for a class member?",
    "options": [
        "Makes it private",
        "Makes it shared among all objects of the class",
        "Makes it constant",
        "Deletes the member"
    ],
    "answer": 1,
    "explanation": "A static member is shared by all objects of the class. It exists even without any objects and must be initialized outside the class definition.",
    "difficulty": "Easy",
    "topic": "Static Members"
},
{
    "id": "cpp-91",
    "question": "What is the this pointer?",
    "options": [
        "A pointer to the class definition",
        "A pointer to the current object",
        "A static pointer",
        "A null pointer"
    ],
    "answer": 1,
    "explanation": "The this pointer is an implicit pointer passed to all non-static member functions. It points to the object that invoked the member function.",
    "difficulty": "Easy",
    "topic": "this Pointer"
},
{
    "id": "cpp-92",
    "question": "Which cast operator is preferred in modern C++?",
    "options": [
        "(int)x",
        "int(x)",
        "static_cast<int>(x)",
        "reinterpret_cast<int>(x)"
    ],
    "answer": 2,
    "explanation": "C++ style casts like static_cast are preferred because they are more explicit, safer, and easier to search for than C-style casts.",
    "difficulty": "Easy",
    "topic": "Type Casting"
},
{
    "id": "cpp-93",
    "question": "What is the auto keyword used for in C++11?",
    "options": [
        "Automatic variable storage class",
        "Type inference - compiler deduces the type",
        "Automatic memory management",
        "Auto-increment"
    ],
    "answer": 1,
    "explanation": "In C++11 and later, auto allows the compiler to deduce the type from the initializer. For example, auto x = 10; makes x an int.",
    "difficulty": "Easy",
    "topic": "auto"
},
{
    "id": "cpp-94",
    "question": "What is a lambda expression in C++?",
    "options": [
        "A macro definition",
        "An anonymous function that can capture variables from enclosing scope",
        "A recursive function",
        "A template function"
    ],
    "answer": 1,
    "explanation": "A lambda expression creates an anonymous function object. Syntax: [captures](params) -> return_type { body }. It can capture variables by value or reference.",
    "difficulty": "Easy",
    "topic": "lambda"
},
{
    "id": "cpp-95",
    "question": "Which smart pointer shares ownership of the managed object?",
    "options": [
        "unique_ptr",
        "shared_ptr",
        "weak_ptr",
        "auto_ptr"
    ],
    "answer": 1,
    "explanation": "shared_ptr uses reference counting to share ownership. Multiple shared_ptrs can point to the same object, and the object is deleted when the last one is destroyed.",
    "difficulty": "Easy",
    "topic": "shared_ptr"
},
{
    "id": "cpp-96",
    "question": "What does unique_ptr provide?",
    "options": [
        "Shared ownership",
        "Exclusive ownership - only one pointer can own the object",
        "Weak ownership",
        "No ownership"
    ],
    "answer": 1,
    "explanation": "unique_ptr maintains exclusive ownership of the object. It cannot be copied, only moved. The object is deleted when the unique_ptr is destroyed.",
    "difficulty": "Easy",
    "topic": "unique_ptr"
},
{
    "id": "cpp-97",
    "question": "What is file handling used for?",
    "options": [
        "Memory management",
        "Reading from and writing to files",
        "Network communication",
        "Thread synchronization"
    ],
    "answer": 1,
    "explanation": "File handling allows programs to read data from files and write data to files. C++ uses fstream, ifstream, and ofstream classes for this purpose.",
    "difficulty": "Easy",
    "topic": "File Handling"
},
{
    "id": "cpp-98",
    "question": "Which class is used to read from a file in C++?",
    "options": [
        "ofstream",
        "ifstream",
        "fstream",
        "filestream"
    ],
    "answer": 1,
    "explanation": "ifstream (input file stream) is used for reading from files. It inherits from istream and provides file input operations.",
    "difficulty": "Easy",
    "topic": "ifstream"
},
{
    "id": "cpp-99",
    "question": "Which class is used to write to a file in C++?",
    "options": [
        "ifstream",
        "ofstream",
        "fstream",
        "writestream"
    ],
    "answer": 1,
    "explanation": "ofstream (output file stream) is used for writing to files. It inherits from ostream and provides file output operations.",
    "difficulty": "Easy",
    "topic": "ofstream"
},
{
    "id": "cpp-100",
    "question": "What is an iterator in STL?",
    "options": [
        "A counter variable",
        "An object that provides access to elements in a container",
        "A loop variable",
        "A pointer to a file"
    ],
    "answer": 1,
    "explanation": "An iterator is an object that points to an element in a container and provides a way to traverse through the container's elements.",
    "difficulty": "Easy",
    "topic": "iterator"
},
{
    "id": "cpp-101",
    "question": "Which header is needed for sort() algorithm in C++?",
    "options": [
        "<algorithm>",
        "<sort.h>",
        "<iostream>",
        "<vector>"
    ],
    "answer": 0,
    "explanation": "The sort() function is defined in <algorithm> header. It sorts elements in a range in ascending order by default with O(n log n) complexity.",
    "difficulty": "Easy",
    "topic": "algorithm"
},
{
    "id": "cpp-102",
    "question": "What is the time complexity of binary_search() in C++ STL?",
    "options": [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n log n)"
    ],
    "answer": 2,
    "explanation": "binary_search() has O(log n) time complexity as it uses binary search algorithm. The container must be sorted for it to work correctly.",
    "difficulty": "Easy",
    "topic": "binary_search"
},
{
    "id": "cpp-103",
    "question": "What does the explicit keyword prevent?",
    "options": [
        "Function overloading",
        "Implicit conversions using single-argument constructors",
        "Inheritance",
        "Virtual functions"
    ],
    "answer": 1,
    "explanation": "explicit keyword prevents implicit conversions using constructors that can take a single argument. The constructor can still be called explicitly.",
    "difficulty": "Easy",
    "topic": "Constructors"
},
{
    "id": "cpp-104",
    "question": "What is a friend function?",
    "options": [
        "A function that inherits from a class",
        "A function that has access to private members of a class",
        "A static member function",
        "A virtual function"
    ],
    "answer": 1,
    "explanation": "A friend function is declared with the friend keyword inside a class and can access its private and protected members, even though it's not a member function.",
    "difficulty": "Easy",
    "topic": "Friend Function"
},
{
    "id": "cpp-105",
    "question": "What is abstraction in OOP?",
    "options": [
        "Hiding implementation details and showing only essential features",
        "Inheriting from multiple classes",
        "Converting one type to another",
        "Creating multiple objects"
    ],
    "answer": 0,
    "explanation": "Abstraction is showing only essential features while hiding implementation details. In C++, it's achieved through abstract classes, interfaces, and access specifiers.",
    "difficulty": "Easy",
    "topic": "Abstraction"
},
{
    "id": "cpp-106",
    "question": "What is the output of: int x = 5; int y = x++ + ++x;",
    "options": [
        "11",
        "12",
        "13",
        "Undefined behavior"
    ],
    "answer": 3,
    "explanation": "This is undefined behavior because x is modified twice between sequence points. C++ standard doesn't guarantee the order of evaluation here.",
    "difficulty": "Medium",
    "topic": "Expressions"
},
{
    "id": "cpp-107",
    "question": "What is the output: int arr[] = {1, 2, 3}; cout << *arr + 1;",
    "options": [
        "1",
        "2",
        "3",
        "Error"
    ],
    "answer": 1,
    "explanation": "*arr gives the first element (1), then +1 adds 1, resulting in 2. This is NOT the same as *(arr+1) which would give the second element.",
    "difficulty": "Medium",
    "topic": "Arrays"
},
{
    "id": "cpp-108",
    "question": "What is the output: int a = 10; int &b = a; b = 20; cout << a;",
    "options": [
        "10",
        "20",
        "Error",
        "0"
    ],
    "answer": 1,
    "explanation": "b is a reference to a, so modifying b also modifies a. When b=20 is executed, a also becomes 20 because they refer to the same memory location.",
    "difficulty": "Medium",
    "topic": "References"
},
{
    "id": "cpp-109",
    "question": "What is the output: int *p = new int(5); cout << *p; delete p;",
    "options": [
        "Error",
        "5",
        "Memory address",
        "0"
    ],
    "answer": 1,
    "explanation": "new int(5) allocates an int with value 5 and returns its address. *p dereferences the pointer to get the value 5. delete frees the memory.",
    "difficulty": "Medium",
    "topic": "Dynamic Memory"
},
{
    "id": "cpp-110",
    "question": "What is the size of the pointer: int *p; double *q; cout << sizeof(p) << sizeof(q);",
    "options": [
        "4 8",
        "8 8",
        "8 16",
        "4 4 or 8 8 depending on system"
    ],
    "answer": 3,
    "explanation": "All pointers on a system have the same size (typically 4 bytes on 32-bit, 8 bytes on 64-bit), regardless of the type they point to.",
    "difficulty": "Medium",
    "topic": "Pointers"
},
{
    "id": "cpp-111",
    "question": "What is the output: char s[] = \"hello\"; cout << strlen(s);",
    "options": [
        "5",
        "6",
        "4",
        "Error"
    ],
    "answer": 0,
    "explanation": "strlen() returns the length of the string excluding the null terminator. 'hello' has 5 characters, so strlen returns 5.",
    "difficulty": "Medium",
    "topic": "Character Arrays"
},
{
    "id": "cpp-112",
    "question": "What is sizeof(\"hello\")?",
    "options": [
        "5",
        "6",
        "7",
        "8"
    ],
    "answer": 1,
    "explanation": "sizeof(\"hello\") includes the null terminator. The string 'hello' has 5 characters plus 1 null character, totaling 6 bytes.",
    "difficulty": "Medium",
    "topic": "Character Arrays"
},
{
    "id": "cpp-113",
    "question": "What is the output: string s1 = \"Hello\", s2 = \"World\"; cout << s1 + s2;",
    "options": [
        "Hello World",
        "HelloWorld",
        "Error",
        "Hello+World"
    ],
    "answer": 1,
    "explanation": "The + operator concatenates strings without adding any space. s1 + s2 results in 'HelloWorld'. To add a space, use s1 + ' ' + s2.",
    "difficulty": "Medium",
    "topic": "Strings"
},
{
    "id": "cpp-114",
    "question": "What is the output: int x = 10; if (x = 5) cout << \"True\"; else cout << \"False\";",
    "options": [
        "True",
        "False",
        "Error",
        "10"
    ],
    "answer": 0,
    "explanation": "x = 5 is assignment (not comparison), which returns 5 (non-zero = true). This is a common bug - should use == for comparison.",
    "difficulty": "Medium",
    "topic": "if"
},
{
    "id": "cpp-115",
    "question": "What is the output: for(int i = 0; i < 5; i++) { if(i == 3) continue; cout << i; }",
    "options": [
        "01234",
        "0124",
        "012",
        "1234"
    ],
    "answer": 1,
    "explanation": "When i=3, continue skips the cout statement. The loop prints 0, 1, 2, then skips 3, then prints 4, resulting in '0124'.",
    "difficulty": "Medium",
    "topic": "Control Statements"
},
{
    "id": "cpp-116",
    "question": "What is the output: for(int i = 0; i < 5; i++) { if(i == 3) break; cout << i; }",
    "options": [
        "01234",
        "0124",
        "012",
        "1234"
    ],
    "answer": 2,
    "explanation": "When i=3, break exits the loop immediately. Only 0, 1, 2 are printed before the loop terminates, resulting in '012'.",
    "difficulty": "Medium",
    "topic": "Control Statements"
},
{
    "id": "cpp-117",
    "question": "What is the output: int i = 5; cout << i++ << ' ' << i;",
    "options": [
        "5 5",
        "5 6",
        "6 5",
        "6 6"
    ],
    "answer": 1,
    "explanation": "i++ is post-increment: prints current value (5) then increments. After cout << i++, i becomes 6, so cout << i prints 6.",
    "difficulty": "Medium",
    "topic": "Operators"
},
{
    "id": "cpp-118",
    "question": "What is the output: int i = 5; cout << ++i << ' ' << i;",
    "options": [
        "5 5",
        "5 6",
        "6 5",
        "6 6"
    ],
    "answer": 3,
    "explanation": "++i is pre-increment: increments first, then prints. i becomes 6, so ++i prints 6, and the subsequent i also prints 6.",
    "difficulty": "Medium",
    "topic": "Operators"
},
{
    "id": "cpp-119",
    "question": "What is the output: int a = 10, b = 20; (a > b) ? a : b = 30; cout << b;",
    "options": [
        "20",
        "30",
        "10",
        "Error"
    ],
    "answer": 1,
    "explanation": "The ternary operator returns b (since a > b is false), and then 30 is assigned to it. So b becomes 30.",
    "difficulty": "Medium",
    "topic": "Operators"
},
{
    "id": "cpp-120",
    "question": "What is the output: int arr[3] = {1, 2, 3}; int *p = arr; cout << *(p+2);",
    "options": [
        "1",
        "2",
        "3",
        "Error"
    ],
    "answer": 2,
    "explanation": "p points to arr[0]. p+2 points to arr[2] (pointer arithmetic). *(p+2) dereferences to get the value 3.",
    "difficulty": "Medium",
    "topic": "Pointers"
},
{
    "id": "cpp-121",
    "question": "What is the output: int x = 5; int y = x << 2; cout << y;",
    "options": [
        "10",
        "15",
        "20",
        "25"
    ],
    "answer": 2,
    "explanation": "Left shift by 2 multiplies by 4 (2^2). x << 2 is equivalent to x * 4 = 5 * 4 = 20.",
    "difficulty": "Medium",
    "topic": "Operators"
},
{
    "id": "cpp-122",
    "question": "What is the output: int x = 20; int y = x >> 2; cout << y;",
    "options": [
        "5",
        "10",
        "15",
        "2"
    ],
    "answer": 0,
    "explanation": "Right shift by 2 divides by 4 (2^2). x >> 2 is equivalent to x / 4 = 20 / 4 = 5.",
    "difficulty": "Medium",
    "topic": "Operators"
},
{
    "id": "cpp-123",
    "question": "What is the output: int x = -1; cout << (x > 0);",
    "options": [
        "true",
        "false",
        "1",
        "0"
    ],
    "answer": 3,
    "explanation": "The expression -1 > 0 is false. In C++, boolean values are output as integers (0 for false, 1 for true).",
    "difficulty": "Medium",
    "topic": "Operators"
},
{
    "id": "cpp-124",
    "question": "What is the output: int a[] = {1,2,3,4,5}; cout << a[5];",
    "options": [
        "5",
        "0",
        "Garbage value",
        "Error"
    ],
    "answer": 2,
    "explanation": "Accessing a[5] is out of bounds (valid indices are 0-4). This results in undefined behavior, typically reading garbage from adjacent memory.",
    "difficulty": "Medium",
    "topic": "Arrays"
},
{
    "id": "cpp-125",
    "question": "What is the output: double d = 3.14159; int i = d; cout << i;",
    "options": [
        "3.14159",
        "3",
        "3.14",
        "Error"
    ],
    "answer": 1,
    "explanation": "Implicit conversion from double to int truncates the decimal part. d (3.14159) becomes 3 when assigned to int i.",
    "difficulty": "Medium",
    "topic": "Type Casting"
},
{
    "id": "cpp-126",
    "question": "What is the output: cout << 5 + 3.0;",
    "options": [
        "8",
        "8.0",
        "Error",
        "8.00"
    ],
    "answer": 1,
    "explanation": "When int and double are mixed, int is promoted to double. 5 + 3.0 = 8.0 (double). The output format depends on the default precision.",
    "difficulty": "Medium",
    "topic": "Type Casting"
},
{
    "id": "cpp-127",
    "question": "What is the output: int *p = nullptr; cout << (p == nullptr);",
    "options": [
        "0",
        "1",
        "Error",
        "Memory address"
    ],
    "answer": 1,
    "explanation": "nullptr is the null pointer value. The comparison p == nullptr is true (1) because p was initialized to nullptr.",
    "difficulty": "Medium",
    "topic": "Pointers"
},
{
    "id": "cpp-128",
    "question": "What is function signature?",
    "options": [
        "Function name only",
        "Function name and parameter types",
        "Function return type",
        "Function body"
    ],
    "answer": 1,
    "explanation": "Function signature consists of the function name and its parameter types (not names). It's used for function overloading resolution.",
    "difficulty": "Medium",
    "topic": "Function Overloading"
},
{
    "id": "cpp-129",
    "question": "Can these functions be overloaded? void func(int); void func(const int);",
    "options": [
        "Yes",
        "No - top-level const is ignored for overloading",
        "Only in C++11",
        "Only with different return types"
    ],
    "answer": 1,
    "explanation": "Top-level const (const on the value itself) doesn't affect overloading. Both have the same signature because const int and int parameters are equivalent.",
    "difficulty": "Medium",
    "topic": "Function Overloading"
},
{
    "id": "cpp-130",
    "question": "What is the output: void func(int x) { cout << \"int\"; } void func(double x) { cout << \"double\"; } func(5);",
    "options": [
        "int",
        "double",
        "Error - ambiguous",
        "Both"
    ],
    "answer": 0,
    "explanation": "The compiler chooses the best match. func(int) is an exact match for argument 5, while func(double) would require a conversion.",
    "difficulty": "Medium",
    "topic": "Function Overloading"
},
{
    "id": "cpp-131",
    "question": "What is the output: void func(int x = 10) { cout << x; } int main() { func(); func(20); }",
    "options": [
        "10 20",
        "20 20",
        "10 10",
        "Error"
    ],
    "answer": 0,
    "explanation": "func() uses the default value 10. func(20) uses the provided argument 20. Output is '10 20'.",
    "difficulty": "Medium",
    "topic": "Default Arguments"
},
{
    "id": "cpp-132",
    "question": "What is wrong with: void func(int a, int b = 10, int c);",
    "options": [
        "Nothing",
        "Parameters after default parameters must also have defaults",
        "Too many parameters",
        "b cannot have default value"
    ],
    "answer": 1,
    "explanation": "Once a parameter has a default value, all subsequent parameters must also have defaults. c must have a default value.",
    "difficulty": "Medium",
    "topic": "Default Arguments"
},
{
    "id": "cpp-133",
    "question": "What is the output: int fact(int n) { if(n <= 1) return 1; return n * fact(n-1); } cout << fact(5);",
    "options": [
        "24",
        "120",
        "60",
        "5"
    ],
    "answer": 1,
    "explanation": "factorial(5) = 5 * 4 * 3 * 2 * 1 = 120. The function recursively calculates n * factorial(n-1) until n <= 1.",
    "difficulty": "Medium",
    "topic": "Recursion"
},
{
    "id": "cpp-134",
    "question": "What happens if recursion has no base case?",
    "options": [
        "Returns 0",
        "Infinite recursion leading to stack overflow",
        "Compiler error",
        "Returns garbage"
    ],
    "answer": 1,
    "explanation": "Without a base case, the function calls itself infinitely. Each call adds to the call stack until memory is exhausted, causing stack overflow.",
    "difficulty": "Medium",
    "topic": "Recursion"
},
{
    "id": "cpp-135",
    "question": "What is the output: int x; void func() { static int y = 0; y++; cout << y; } int main() { func(); func(); }",
    "options": [
        "0 1",
        "1 1",
        "1 2",
        "Error"
    ],
    "answer": 2,
    "explanation": "static y is initialized only once and retains its value. First call prints 1 (y becomes 1), second call prints 2 (y becomes 2).",
    "difficulty": "Medium",
    "topic": "Storage Classes"
},
{
    "id": "cpp-136",
    "question": "What is the output: int a = 10; { int a = 20; cout << a; } cout << a;",
    "options": [
        "10 20",
        "20 20",
        "20 10",
        "10 10"
    ],
    "answer": 2,
    "explanation": "Inner block declares a new 'a' that shadows the outer 'a'. Inside block: prints 20. Outside block: prints the outer a (10).",
    "difficulty": "Medium",
    "topic": "Storage Classes"
},
{
    "id": "cpp-137",
    "question": "What is the output: extern int x; cout << x;",
    "options": [
        "0",
        "Error - undefined reference",
        "Random value",
        "NULL"
    ],
    "answer": 1,
    "explanation": "extern declares x but doesn't define it. If x is not defined elsewhere in the program, linking fails with undefined reference error.",
    "difficulty": "Medium",
    "topic": "Storage Classes"
},
{
    "id": "cpp-138",
    "question": "What is the difference between 'int *p[5]' and 'int (*p)[5]'?",
    "options": [
        "Same thing",
        "Array of 5 pointers vs pointer to array of 5 ints",
        "Pointer to 5 elements vs array of pointers",
        "Both are invalid"
    ],
    "answer": 1,
    "explanation": "int *p[5] is an array of 5 int pointers. int (*p)[5] is a pointer to an array of 5 ints. Operator precedence of [] over * causes the difference.",
    "difficulty": "Medium",
    "topic": "Pointers"
},
{
    "id": "cpp-139",
    "question": "What is the output: int arr[] = {10, 20, 30}; int *p = arr; cout << p[1];",
    "options": [
        "10",
        "20",
        "30",
        "Error"
    ],
    "answer": 1,
    "explanation": "Pointer p behaves like an array. p[1] is equivalent to *(p + 1), which is arr[1] = 20.",
    "difficulty": "Medium",
    "topic": "Pointers"
},
{
    "id": "cpp-140",
    "question": "What is the output: const int x = 10; int *p = &x;",
    "options": [
        "Valid",
        "Error - cannot initialize int* with const int*",
        "Valid but dangerous",
        "Undefined behavior"
    ],
    "answer": 1,
    "explanation": "A non-const pointer cannot point to a const object. This would allow modifying x through p, violating const. Should use const int* p.",
    "difficulty": "Medium",
    "topic": "Const Correctness"
},
{
    "id": "cpp-141",
    "question": "What is the output: int x = 10; const int *p = &x; *p = 20; cout << x;",
    "options": [
        "10",
        "20",
        "Error - cannot modify through const pointer",
        "Undefined behavior"
    ],
    "answer": 2,
    "explanation": "const int* means the pointed-to value cannot be modified through this pointer. *p = 20 is a compiler error.",
    "difficulty": "Medium",
    "topic": "Const Correctness"
},
{
    "id": "cpp-142",
    "question": "What is the output: int x = 10, y = 20; const int *p = &x; p = &y; cout << *p;",
    "options": [
        "10",
        "20",
        "Error",
        "Undefined"
    ],
    "answer": 1,
    "explanation": "const int* allows changing what the pointer points to, just not the value at that address. p can point to y, and *p will be 20.",
    "difficulty": "Medium",
    "topic": "Const Correctness"
},
{
    "id": "cpp-143",
    "question": "What is the output: int x = 10; int *const p = &x; p = nullptr;",
    "options": [
        "Valid",
        "Error - cannot change const pointer",
        "Valid but dangerous",
        "Warning only"
    ],
    "answer": 1,
    "explanation": "int *const p means the pointer itself is const and cannot be reassigned. p = nullptr is a compiler error, but *p = 20 would be valid.",
    "difficulty": "Medium",
    "topic": "Const Correctness"
},
{
    "id": "cpp-144",
    "question": "What is the output: int arr[2][3] = {{1,2,3},{4,5,6}}; cout << *(*(arr+1)+2);",
    "options": [
        "3",
        "4",
        "5",
        "6"
    ],
    "answer": 3,
    "explanation": "arr+1 points to the second row. *(arr+1) gives the second row. +2 moves to the third column. Final dereference gives 6.",
    "difficulty": "Medium",
    "topic": "Arrays"
},
{
    "id": "cpp-145",
    "question": "What is the output: char s1[] = \"abc\"; char s2[] = \"abc\"; cout << (s1 == s2);",
    "options": [
        "1",
        "0",
        "Error",
        "true"
    ],
    "answer": 1,
    "explanation": "s1 and s2 are different arrays at different memory addresses. Comparing them with == compares addresses, not contents. Use strcmp() for content comparison.",
    "difficulty": "Medium",
    "topic": "Character Arrays"
},
{
    "id": "cpp-146",
    "question": "What is the output: string s1 = \"abc\"; string s2 = \"abc\"; cout << (s1 == s2);",
    "options": [
        "1",
        "0",
        "Error",
        "Memory address"
    ],
    "answer": 0,
    "explanation": "std::string overloads == to compare contents. Since both strings contain 'abc', the comparison returns true (1).",
    "difficulty": "Medium",
    "topic": "Strings"
},
{
    "id": "cpp-147",
    "question": "What is the output: struct Point { int x, y; } p1 = {10, 20}, p2; p2 = p1; cout << p2.x;",
    "options": [
        "10",
        "20",
        "Error",
        "0"
    ],
    "answer": 0,
    "explanation": "C++ allows direct assignment of structs. All members are copied. p2.x receives the value of p1.x, which is 10.",
    "difficulty": "Medium",
    "topic": "Structures"
},
{
    "id": "cpp-148",
    "question": "What is the size of: struct { char c; int i; } ;",
    "options": [
        "5",
        "8",
        "6",
        "4"
    ],
    "answer": 1,
    "explanation": "Due to memory alignment (padding), the char takes 1 byte, then 3 bytes padding, then int takes 4 bytes. Total: 8 bytes.",
    "difficulty": "Medium",
    "topic": "Structures"
},
{
    "id": "cpp-149",
    "question": "What is the output: union Data { int i; float f; }; Data d; d.i = 10; cout << d.f;",
    "options": [
        "10",
        "1.4e-44",
        "0",
        "Error"
    ],
    "answer": 1,
    "explanation": "In a union, all members share the same memory. Setting d.i = 10 writes the integer representation. Reading d.f interprets those bytes as float.",
    "difficulty": "Medium",
    "topic": "Union"
},
{
    "id": "cpp-150",
    "question": "What is the output: enum Color { RED, GREEN, BLUE }; cout << BLUE;",
    "options": [
        "BLUE",
        "2",
        "3",
        "Error"
    ],
    "answer": 1,
    "explanation": "By default, enum values start at 0 and increment. RED=0, GREEN=1, BLUE=2. cout prints the integer value 2.",
    "difficulty": "Medium",
    "topic": "Enum"
},
{
    "id": "cpp-151",
    "question": "What is the output: class Test { public: int x; }; Test t; cout << t.x;",
    "options": [
        "0",
        "Garbage value",
        "Error",
        "1"
    ],
    "answer": 1,
    "explanation": "For primitive types in a class/struct, members are not automatically initialized. x contains whatever value was at that memory location (garbage).",
    "difficulty": "Medium",
    "topic": "Classes"
},
{
    "id": "cpp-152",
    "question": "What is the output: class Test { int x; public: void setX(int val) { x = val; } }; int main() { Test t; t.x = 10; }",
    "options": [
        "Compiles successfully",
        "Error - x is private",
        "Error - t is not initialized",
        "Outputs 10"
    ],
    "answer": 1,
    "explanation": "x is private by default in a class. Accessing t.x = 10 from main() results in a compilation error because main cannot access private members.",
    "difficulty": "Medium",
    "topic": "Access Specifiers"
},
{
    "id": "cpp-153",
    "question": "What is the output: class Test { public: Test() { cout << \"C\"; } ~Test() { cout << \"D\"; } }; void func() { Test t; } int main() { func(); }",
    "options": [
        "C",
        "D",
        "CD",
        "DC"
    ],
    "answer": 2,
    "explanation": "Constructor is called when t is created (prints C). When func() returns, t goes out of scope and destructor is called (prints D).",
    "difficulty": "Medium",
    "topic": "Object Lifetime"
},
{
    "id": "cpp-154",
    "question": "What is the output: class Test { public: Test(int x = 0) { cout << x; } }; Test t1, t2(5);",
    "options": [
        "05",
        "50",
        "5",
        "00"
    ],
    "answer": 0,
    "explanation": "t1 uses default argument (prints 0), t2 passes 5 (prints 5). Output is '05'.",
    "difficulty": "Medium",
    "topic": "Parameterized Constructor"
},
{
    "id": "cpp-155",
    "question": "What is a copy constructor used for?",
    "options": [
        "Copying files",
        "Initializing an object from another object of same class",
        "Copying memory addresses",
        "Deleting objects"
    ],
    "answer": 1,
    "explanation": "A copy constructor creates a new object as a copy of an existing object. It's called when: passing object by value, returning object by value, or initializing with another object.",
    "difficulty": "Medium",
    "topic": "Copy Constructor"
},
{
    "id": "cpp-156",
    "question": "What is the signature of a copy constructor?",
    "options": [
        "ClassName(ClassName obj)",
        "ClassName(ClassName& obj)",
        "ClassName(const ClassName& obj)",
        "ClassName(const ClassName obj)"
    ],
    "answer": 2,
    "explanation": "Standard copy constructor takes a const reference to avoid modification of the source object and prevent infinite recursion (pass by value would call itself).",
    "difficulty": "Medium",
    "topic": "Copy Constructor"
},
{
    "id": "cpp-157",
    "question": "What happens if a class with pointer members uses the default copy constructor?",
    "options": [
        "Deep copy is performed",
        "Shallow copy is performed - both objects point to same memory",
        "Compilation error",
        "Runtime error"
    ],
    "answer": 1,
    "explanation": "Default copy constructor performs shallow copy (member-wise copy). For pointers, only the address is copied, causing both objects to point to the same memory.",
    "difficulty": "Medium",
    "topic": "Copy Constructor"
},
{
    "id": "cpp-158",
    "question": "What is the output: class Base { public: void display() { cout << \"Base\"; } }; class Derived : public Base { public: void display() { cout << \"Derived\"; } }; Base b; Derived d; b.display(); d.display();",
    "options": [
        "Base Derived",
        "Base Base",
        "Derived Derived",
        "Derived Base"
    ],
    "answer": 0,
    "explanation": "Without virtual keyword, function binding is static (based on pointer/reference type). b.display() calls Base::display(), d.display() calls Derived::display().",
    "difficulty": "Medium",
    "topic": "Function Overriding"
},
{
    "id": "cpp-159",
    "question": "What is the output: class Base { public: virtual void show() { cout << \"B\"; } }; class Derived : public Base { public: void show() { cout << \"D\"; } }; Base *b = new Derived(); b->show();",
    "options": [
        "B",
        "D",
        "BD",
        "Error"
    ],
    "answer": 1,
    "explanation": "virtual keyword enables dynamic binding. Even though b is Base*, it points to Derived object, so Derived::show() is called.",
    "difficulty": "Medium",
    "topic": "Virtual Functions"
},
{
    "id": "cpp-160",
    "question": "What is a vtable?",
    "options": [
        "A virtual table for storing data",
        "A table of function pointers for virtual functions",
        "A variable table",
        "A type of container"
    ],
    "answer": 1,
    "explanation": "vtable (virtual table) is an array of function pointers used to implement virtual functions. Each class with virtual functions has its own vtable.",
    "difficulty": "Medium",
    "topic": "Virtual Functions"
},
{
    "id": "cpp-161",
    "question": "What is the output: class Base { public: virtual void func() = 0; }; Base b;",
    "options": [
        "Valid declaration",
        "Error - cannot instantiate abstract class",
        "Valid but cannot call func()",
        "Warning only"
    ],
    "answer": 1,
    "explanation": "Base has a pure virtual function (= 0), making it abstract. Abstract classes cannot be instantiated directly.",
    "difficulty": "Medium",
    "topic": "Abstract Classes"
},
{
    "id": "cpp-162",
    "question": "What is the output: class A { public: int x; }; class B : public A { public: int y; }; cout << sizeof(B);",
    "options": [
        "4",
        "8",
        "12",
        "16"
    ],
    "answer": 1,
    "explanation": "B contains x from A and its own y, each typically 4 bytes. Total is 8 bytes. (Actual size may vary due to alignment).",
    "difficulty": "Medium",
    "topic": "Single Inheritance"
},
{
    "id": "cpp-163",
    "question": "What is the order of constructor calls in inheritance?",
    "options": [
        "Derived first, then Base",
        "Base first, then Derived",
        "Both simultaneously",
        "Random order"
    ],
    "answer": 1,
    "explanation": "Base class constructor is always called before Derived class constructor. This ensures base class parts are properly initialized before derived class uses them.",
    "difficulty": "Medium",
    "topic": "Inheritance"
},
{
    "id": "cpp-164",
    "question": "What is the order of destructor calls in inheritance?",
    "options": [
        "Derived first, then Base",
        "Base first, then Derived",
        "Both simultaneously",
        "Reverse of construction"
    ],
    "answer": 3,
    "explanation": "Destructors are called in reverse order of construction: Derived destructor first, then Base destructor. This ensures derived cleanup happens before base cleanup.",
    "difficulty": "Medium",
    "topic": "Inheritance"
},
{
    "id": "cpp-165",
    "question": "What is the output: class A { public: A() { cout << \"A\"; } }; class B : public A { public: B() { cout << \"B\"; } }; class C : public B { public: C() { cout << \"C\"; } }; C c;",
    "options": [
        "ABC",
        "CBA",
        "ACB",
        "BAC"
    ],
    "answer": 0,
    "explanation": "In multilevel inheritance, constructors are called from base to derived: A() then B() then C(). Output is 'ABC'.",
    "difficulty": "Medium",
    "topic": "Multilevel Inheritance"
},
{
    "id": "cpp-166",
    "question": "What is the problem with multiple inheritance?",
    "options": [
        "No problems",
        "Diamond problem - ambiguity when two base classes inherit from same class",
        "Slow execution",
        "Extra memory usage"
    ],
    "answer": 1,
    "explanation": "Diamond problem occurs when a class inherits from two classes that both inherit from a common base. The derived class has two copies of the base class.",
    "difficulty": "Medium",
    "topic": "Multiple Inheritance"
},
{
    "id": "cpp-167",
    "question": "How do you resolve the diamond problem?",
    "options": [
        "Use single inheritance only",
        "Use virtual inheritance",
        "Use templates",
        "Use interfaces only"
    ],
    "answer": 1,
    "explanation": "Virtual inheritance ensures only one instance of the base class exists. Syntax: class B : virtual public A { }; This creates a shared base class subobject.",
    "difficulty": "Medium",
    "topic": "Hybrid Inheritance"
},
{
    "id": "cpp-168",
    "question": "What is the output: class A { public: int x = 10; }; class B : public A { public: int x = 20; }; B b; cout << b.x;",
    "options": [
        "10",
        "20",
        "Error - ambiguous",
        "0"
    ],
    "answer": 1,
    "explanation": "Derived class x hides base class x. b.x refers to B::x (20). To access A's x from B, use b.A::x.",
    "difficulty": "Medium",
    "topic": "Hierarchical Inheritance"
},
{
    "id": "cpp-169",
    "question": "What is the output: class A { public: int x = 10; }; class B : public A { public: int x = 20; void show() { cout << x << A::x; } }; B b; b.show();",
    "options": [
        "1010",
        "2010",
        "1020",
        "2020"
    ],
    "answer": 1,
    "explanation": "Inside B, x refers to B::x (20). A::x explicitly accesses A's x (10). Output is '2010'.",
    "difficulty": "Medium",
    "topic": "Hierarchical Inheritance"
},
{
    "id": "cpp-170",
    "question": "What is the output: template<typename T> T max(T a, T b) { return (a > b) ? a : b; } cout << max(3, 7);",
    "options": [
        "3",
        "7",
        "Error",
        "true"
    ],
    "answer": 1,
    "explanation": "Template function is instantiated with T=int. max(3,7) returns 7 since 7 > 3.",
    "difficulty": "Medium",
    "topic": "Function Templates"
},
{
    "id": "cpp-171",
    "question": "What is the output: template<typename T> T max(T a, T b) { return (a > b) ? a : b; } cout << max(3.5, 2);",
    "options": [
        "3.5",
        "2",
        "3",
        "Error - template argument deduction failed"
    ],
    "answer": 3,
    "explanation": "Template argument deduction fails because T can't be deduced - arguments have different types (double and int). Must use explicit: max<double>(3.5, 2).",
    "difficulty": "Medium",
    "topic": "Function Templates"
},
{
    "id": "cpp-172",
    "question": "What is the output: template<typename T> class Stack { T arr[100]; int top; public: Stack() : top(-1) {} }; Stack<int> s; cout << sizeof(s);",
    "options": [
        "400",
        "404",
        "100",
        "Compiler error"
    ],
    "answer": 1,
    "explanation": "Stack<int> has arr[100] (400 bytes for 100 ints) plus top (4 bytes), totaling approximately 404 bytes (may vary with alignment).",
    "difficulty": "Medium",
    "topic": "Class Templates"
},
{
    "id": "cpp-173",
    "question": "What is the output: try { throw 10; } catch(int e) { cout << e; } catch(double e) { cout << e; }",
    "options": [
        "10",
        "10.0",
        "Error",
        "Caught both"
    ],
    "answer": 0,
    "explanation": "throw 10 throws an int. The first matching catch(int) handles it and prints 10. The double catch is never reached.",
    "difficulty": "Medium",
    "topic": "Exception Handling"
},
{
    "id": "cpp-174",
    "question": "What is the output: try { throw 'A'; } catch(int e) { cout << \"int\"; } catch(...) { cout << \"...\"; }",
    "options": [
        "int",
        "...",
        "A",
        "Error"
    ],
    "answer": 1,
    "explanation": "'A' is a char, not int. The int catch doesn't match. catch(...) catches any exception type, so '...' is printed.",
    "difficulty": "Medium",
    "topic": "Exception Handling"
},
{
    "id": "cpp-175",
    "question": "What does the noexcept specifier indicate?",
    "options": [
        "Function must throw",
        "Function promises not to throw exceptions",
        "Function catches all exceptions",
        "Function is deprecated"
    ],
    "answer": 1,
    "explanation": "noexcept (C++11) indicates a function won't throw exceptions. If it does, std::terminate() is called. Helps with optimization and exception safety.",
    "difficulty": "Medium",
    "topic": "Exception Handling"
},
{
    "id": "cpp-176",
    "question": "What is the output: vector<int> v = {5, 3, 1, 4, 2}; sort(v.begin(), v.end()); for(int x : v) cout << x;",
    "options": [
        "53142",
        "12345",
        "24135",
        "54321"
    ],
    "answer": 1,
    "explanation": "sort() sorts in ascending order by default. The vector becomes {1, 2, 3, 4, 5}.",
    "difficulty": "Medium",
    "topic": "sort"
},
{
    "id": "cpp-177",
    "question": "What is the output: vector<int> v = {1, 2, 3}; v.push_back(4); cout << v.size() << v.capacity();",
    "options": [
        "4 4",
        "4 6",
        "3 4",
        "4 3"
    ],
    "answer": 1,
    "explanation": "size() returns 4 (number of elements). capacity() returns at least 6 because vectors typically double capacity when growing. Exact capacity varies by implementation.",
    "difficulty": "Medium",
    "topic": "vector"
},
{
    "id": "cpp-178",
    "question": "What is the output: vector<int> v = {1, 2, 3}; v.pop_back(); cout << v.size();",
    "options": [
        "0",
        "2",
        "3",
        "1"
    ],
    "answer": 1,
    "explanation": "pop_back() removes the last element. Size becomes 2, containing {1, 2}.",
    "difficulty": "Medium",
    "topic": "vector"
},
{
    "id": "cpp-179",
    "question": "What is the output: map<string, int> m; m[\"a\"] = 1; m[\"b\"] = 2; cout << m.size();",
    "options": [
        "0",
        "1",
        "2",
        "3"
    ],
    "answer": 2,
    "explanation": "Two elements are inserted with keys 'a' and 'b'. The map size is 2.",
    "difficulty": "Medium",
    "topic": "map"
},
{
    "id": "cpp-180",
    "question": "What is the output: set<int> s = {5, 2, 8, 2, 5}; cout << s.size();",
    "options": [
        "5",
        "4",
        "3",
        "2"
    ],
    "answer": 2,
    "explanation": "set only stores unique elements. {5, 2, 8, 2, 5} becomes {2, 5, 8}. Size is 3.",
    "difficulty": "Medium",
    "topic": "set"
},
{
    "id": "cpp-181",
    "question": "What is the output: set<int> s = {5, 2, 8}; for(auto x : s) cout << x;",
    "options": [
        "528",
        "285",
        "582",
        "258"
    ],
    "answer": 1,
    "explanation": "set stores elements in sorted order (ascending). Output is 2, 5, 8 printed as '285'.",
    "difficulty": "Medium",
    "topic": "set"
},
{
    "id": "cpp-182",
    "question": "What is the difference between set and multiset?",
    "options": [
        "No difference",
        "set allows duplicates, multiset doesn't",
        "set stores unique elements, multiset allows duplicates",
        "set is faster"
    ],
    "answer": 2,
    "explanation": "set stores only unique keys, while multiset allows multiple elements with the same value. Both are sorted containers.",
    "difficulty": "Medium",
    "topic": "multiset"
},
{
    "id": "cpp-183",
    "question": "What is the output: unordered_map<int, string> m; m[1] = \"one\"; m[2] = \"two\"; cout << m[1];",
    "options": [
        "1",
        "one",
        "Error",
        "1: one"
    ],
    "answer": 1,
    "explanation": "m[1] returns the value associated with key 1, which is 'one'. unordered_map provides O(1) average lookup.",
    "difficulty": "Medium",
    "topic": "unordered_map"
},
{
    "id": "cpp-184",
    "question": "What is the time complexity of unordered_map operations?",
    "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
    ],
    "answer": 0,
    "explanation": "unordered_map uses hash table, providing average O(1) time for insert, delete, and lookup. Worst case is O(n) due to hash collisions.",
    "difficulty": "Medium",
    "topic": "unordered_map"
},
{
    "id": "cpp-185",
    "question": "What is the output: stack<int> s; s.push(1); s.push(2); s.push(3); cout << s.top();",
    "options": [
        "1",
        "2",
        "3",
        "Error"
    ],
    "answer": 2,
    "explanation": "stack follows LIFO. After pushing 1, 2, 3, the top is 3. top() returns the top element without removing it.",
    "difficulty": "Medium",
    "topic": "stack"
},
{
    "id": "cpp-186",
    "question": "What is the output: queue<int> q; q.push(1); q.push(2); q.push(3); q.pop(); cout << q.front();",
    "options": [
        "1",
        "2",
        "3",
        "Error"
    ],
    "answer": 1,
    "explanation": "queue follows FIFO. After push 1,2,3, front is 1. pop() removes 1, making front become 2.",
    "difficulty": "Medium",
    "topic": "queue"
},
{
    "id": "cpp-187",
    "question": "What is the output: priority_queue<int> pq; pq.push(10); pq.push(30); pq.push(20); cout << pq.top();",
    "options": [
        "10",
        "20",
        "30",
        "Error"
    ],
    "answer": 2,
    "explanation": "priority_queue is a max-heap by default. top() returns the largest element, which is 30.",
    "difficulty": "Medium",
    "topic": "priority_queue"
},
{
    "id": "cpp-188",
    "question": "How to create a min-heap using priority_queue?",
    "options": [
        "priority_queue<int, vector<int>, greater<int>>",
        "priority_queue<int, min>",
        "min_priority_queue<int>",
        "priority_queue<int>::min"
    ],
    "answer": 0,
    "explanation": "Use priority_queue<int, vector<int>, greater<int>> for min-heap. The third parameter is the comparator, and greater<int> makes it a min-heap.",
    "difficulty": "Medium",
    "topic": "priority_queue"
},
{
    "id": "cpp-189",
    "question": "What is the output: deque<int> d = {1, 2, 3}; d.push_front(0); d.push_back(4); cout << d.front() << d.back();",
    "options": [
        "04",
        "14",
        "13",
        "34"
    ],
    "answer": 0,
    "explanation": "push_front(0) adds 0 at beginning, push_back(4) adds 4 at end. deque: {0,1,2,3,4}. front()=0, back()=4.",
    "difficulty": "Medium",
    "topic": "deque"
},
{
    "id": "cpp-190",
    "question": "What is the output: list<int> l = {1, 2, 3}; auto it = l.begin(); ++it; l.insert(it, 10); for(int x : l) cout << x;",
    "options": [
        "11023",
        "12103",
        "10123",
        "12310"
    ],
    "answer": 0,
    "explanation": "After ++it, it points to position after 1. insert(it, 10) inserts 10 at that position. List becomes {1, 10, 2, 3}.",
    "difficulty": "Medium",
    "topic": "list"
},
{
    "id": "cpp-191",
    "question": "What is the output: vector<int> v = {1, 2, 3, 4, 5}; auto it = find(v.begin(), v.end(), 3); cout << (it != v.end());",
    "options": [
        "0",
        "1",
        "3",
        "Error"
    ],
    "answer": 1,
    "explanation": "find() returns iterator to the element if found, or end() if not. Since 3 exists, it != v.end() is true (1).",
    "difficulty": "Medium",
    "topic": "find"
},
{
    "id": "cpp-192",
    "question": "What is the output: vector<int> v = {1, 2, 3, 4, 5}; cout << binary_search(v.begin(), v.end(), 4);",
    "options": [
        "0",
        "1",
        "4",
        "Index of 4"
    ],
    "answer": 1,
    "explanation": "binary_search returns true (1) if element is found, false (0) if not. Since 4 is in the sorted vector, it returns 1.",
    "difficulty": "Medium",
    "topic": "binary_search"
},
{
    "id": "cpp-193",
    "question": "What is the output: int arr[] = {3, 1, 4, 1, 5}; sort(arr, arr+5); cout << arr[2];",
    "options": [
        "3",
        "1",
        "4",
        "5"
    ],
    "answer": 0,
    "explanation": "After sort: {1, 1, 3, 4, 5}. arr[2] is 3.",
    "difficulty": "Medium",
    "topic": "sort"
},
{
    "id": "cpp-194",
    "question": "What is the output: auto add = [](int a, int b) { return a + b; }; cout << add(3, 4);",
    "options": [
        "7",
        "34",
        "Error",
        "12"
    ],
    "answer": 0,
    "explanation": "Lambda expression creates an anonymous function. add(3,4) calls the lambda with parameters 3 and 4, returning 7.",
    "difficulty": "Medium",
    "topic": "lambda"
},
{
    "id": "cpp-195",
    "question": "What is the output: int x = 10; auto f = [x]() { return x; }; x = 20; cout << f();",
    "options": [
        "10",
        "20",
        "Error",
        "30"
    ],
    "answer": 0,
    "explanation": "[x] captures x by value at the time of lambda creation. Changes to x afterwards don't affect the captured value. f() returns 10.",
    "difficulty": "Medium",
    "topic": "lambda"
},
{
    "id": "cpp-196",
    "question": "What is the output: int x = 10; auto f = [&x]() { x = 20; }; f(); cout << x;",
    "options": [
        "10",
        "20",
        "Error",
        "Undefined"
    ],
    "answer": 1,
    "explanation": "[&x] captures x by reference. Changes inside lambda affect the original variable. After f(), x becomes 20.",
    "difficulty": "Medium",
    "topic": "lambda"
},
{
    "id": "cpp-197",
    "question": "What does make_shared do?",
    "options": [
        "Creates a shared array",
        "Creates a shared_ptr and allocates object in single operation",
        "Shares a pointer",
        "Makes a pointer shared"
    ],
    "answer": 1,
    "explanation": "make_shared<T>(args) creates a shared_ptr and allocates the object in a single allocation, which is more efficient than separate new and shared_ptr creation.",
    "difficulty": "Medium",
    "topic": "shared_ptr"
},
{
    "id": "cpp-198",
    "question": "What is the output: auto p = make_shared<int>(10); cout << *p; auto q = p; cout << *q;",
    "options": [
        "10",
        "1010",
        "Error",
        "20"
    ],
    "answer": 1,
    "explanation": "shared_ptr allows sharing ownership. q = p makes both point to same object with value 10. Both dereferences give 10.",
    "difficulty": "Medium",
    "topic": "shared_ptr"
},
{
    "id": "cpp-199",
    "question": "What happens when you copy a unique_ptr?",
    "options": [
        "Both point to same object",
        "Compile error",
        "Deep copy is made",
        "Reference count increases"
    ],
    "answer": 1,
    "explanation": "unique_ptr cannot be copied - it maintains exclusive ownership. Copying would violate this. It can only be moved.",
    "difficulty": "Medium",
    "topic": "unique_ptr"
},
{
    "id": "cpp-200",
    "question": "What is the use of weak_ptr?",
    "options": [
        "To replace unique_ptr",
        "To break circular references with shared_ptr",
        "To create null pointers",
        "To delete pointers"
    ],
    "answer": 1,
    "explanation": "weak_ptr holds a non-owning reference to an object managed by shared_ptr. It doesn't increase reference count, breaking circular reference cycles.",
    "difficulty": "Medium",
    "topic": "weak_ptr"
},
{
    "id": "cpp-201",
    "question": "What is the output: ofstream file(\"test.txt\"); file << \"Hello\"; file.close(); ifstream in(\"test.txt\"); string s; in >> s; cout << s;",
    "options": [
        "Hello",
        "test.txt",
        "Error",
        "Empty"
    ],
    "answer": 0,
    "explanation": "ofstream writes 'Hello' to test.txt. ifstream reads from the file. in >> s reads the first word 'Hello'.",
    "difficulty": "Medium",
    "topic": "File Handling"
},
{
    "id": "cpp-202",
    "question": "What is the output: class A { public: int x; A(int x) : x(x) {} }; A a(5); cout << a.x;",
    "options": [
        "5",
        "0",
        "Error",
        "Garbage"
    ],
    "answer": 0,
    "explanation": "Constructor uses member initializer list (x(x)) to initialize member x with parameter x. a.x is initialized to 5.",
    "difficulty": "Medium",
    "topic": "Constructors"
},
{
    "id": "cpp-203",
    "question": "What is the output: class Test { static int count; public: Test() { count++; } static void show() { cout << count; } }; int Test::count = 0; Test t1, t2, t3; Test::show();",
    "options": [
        "0",
        "1",
        "3",
        "Error"
    ],
    "answer": 2,
    "explanation": "count is static, shared by all objects. Each constructor increments it. After creating t1, t2, t3, count is 3.",
    "difficulty": "Medium",
    "topic": "Static Members"
},
{
    "id": "cpp-204",
    "question": "What is the output: class Test { public: static void func() { cout << \"static\"; } }; Test::func();",
    "options": [
        "static",
        "Error - need object",
        "Nothing",
        "Runtime error"
    ],
    "answer": 0,
    "explanation": "Static member functions can be called without an object using the class name. Test::func() is valid and prints 'static'.",
    "difficulty": "Medium",
    "topic": "Static Functions"
},
{
    "id": "cpp-205",
    "question": "What is the output: class Test { int x; public: void setX(int x) { this->x = x; } void show() { cout << x; } }; Test t; t.setX(10); t.show();",
    "options": [
        "0",
        "10",
        "Garbage",
        "Error"
    ],
    "answer": 1,
    "explanation": "this->x refers to the member variable, x (without this) refers to the parameter. setX(10) sets member x to 10.",
    "difficulty": "Medium",
    "topic": "this Pointer"
},
{
    "id": "cpp-206",
    "question": "What is the output: class Test { public: Test& operator=(const Test& other) { cout << \"assigned\"; return *this; } }; Test a, b; a = b;",
    "options": [
        "assigned",
        "Error",
        "Nothing",
        "Both a and b"
    ],
    "answer": 0,
    "explanation": "a = b calls the overloaded assignment operator. It prints 'assigned' and returns *this (the current object by reference).",
    "difficulty": "Medium",
    "topic": "Operator Overloading"
},
{
    "id": "cpp-207",
    "question": "What is the output: class Int { int val; public: Int(int v = 0) : val(v) {} Int operator+(const Int& other) { return Int(val + other.val); } }; Int a(5), b(3); Int c = a + b;",
    "options": [
        "c.val = 8",
        "c.val = 53",
        "Error",
        "c.val = 2"
    ],
    "answer": 0,
    "explanation": "operator+ is overloaded to add Int objects. a + b creates a new Int with val = 5 + 3 = 8.",
    "difficulty": "Medium",
    "topic": "Operator Overloading"
},
{
    "id": "cpp-208",
    "question": "Which operators must be overloaded as member functions?",
    "options": [
        "+, -, *",
        "=, [], ->, ()",
        "==, !=",
        "<<, >>"
    ],
    "answer": 1,
    "explanation": "Assignment (=), subscript ([]), arrow (->), and function call (()) operators must be overloaded as member functions because they require the object on the left.",
    "difficulty": "Medium",
    "topic": "Operator Overloading"
},
{
    "id": "cpp-209",
    "question": "What is the output: cout.operator<<(\"Hello\");",
    "options": [
        "Hello",
        "Error",
        "Memory address",
        "Nothing"
    ],
    "answer": 0,
    "explanation": "cout << \"Hello\" is actually calling cout.operator<<(\"Hello\"). This shows that << is an overloaded operator for ostream.",
    "difficulty": "Medium",
    "topic": "Operator Overloading"
},
{
    "id": "cpp-210",
    "question": "What is the output: dynamic_cast<Base*>(derivedPtr); where Base has virtual functions and derivedPtr actually points to Derived?",
    "options": [
        "Returns nullptr",
        "Returns valid pointer to Base subobject",
        "Compiler error",
        "Runtime error"
    ],
    "answer": 1,
    "explanation": "dynamic_cast safely downcasts when the cast is valid. Since the object is actually a Derived, it returns a valid pointer to the Base subobject.",
    "difficulty": "Medium",
    "topic": "Type Casting"
},
{
    "id": "cpp-211",
    "question": "What is the output: int x = 5; cout << reinterpret_cast<int*>(&x);",
    "options": [
        "5",
        "Memory address",
        "Error",
        "0"
    ],
    "answer": 1,
    "explanation": "reinterpret_cast treats the address of x as an int* and outputs that address. reinterpret_cast is used for low-level reinterpreting of bit patterns.",
    "difficulty": "Medium",
    "topic": "Type Casting"
},
{
    "id": "cpp-212",
    "question": "What does const_cast remove?",
    "options": [
        "Virtual functions",
        "const or volatile qualifiers",
        "Static members",
        "Templates"
    ],
    "answer": 1,
    "explanation": "const_cast adds or removes const/volatile qualifiers. Useful for passing const objects to functions that don't declare parameters as const.",
    "difficulty": "Medium",
    "topic": "Type Casting"
},
{
    "id": "cpp-213",
    "question": "What is the output: int x = -1; unsigned int y = x; cout << y;",
    "options": [
        "-1",
        "1",
        "4294967295",
        "Error"
    ],
    "answer": 2,
    "explanation": "Converting negative int to unsigned gives the two's complement representation. -1 becomes the maximum unsigned value (2^32 - 1 = 4294967295 on 32-bit systems).",
    "difficulty": "Medium",
    "topic": "Type Casting"
},
{
    "id": "cpp-214",
    "question": "What is the output: int arr[] = {1, 2, 3, 4, 5}; int *p = arr; cout << *(p++);",
    "options": [
        "1",
        "2",
        "3",
        "Error"
    ],
    "answer": 0,
    "explanation": "p++ is post-increment. First *p is evaluated (arr[0]=1), then p is incremented. Output is 1.",
    "difficulty": "Medium",
    "topic": "Pointers"
},
{
    "id": "cpp-215",
    "question": "What is the output: int arr[] = {1, 2, 3, 4, 5}; int *p = arr; cout << *(++p);",
    "options": [
        "1",
        "2",
        "3",
        "Error"
    ],
    "answer": 1,
    "explanation": "++p is pre-increment. p is incremented first (now points to arr[1]), then *p is evaluated. Output is 2.",
    "difficulty": "Medium",
    "topic": "Pointers"
},
{
    "id": "cpp-216",
    "question": "What is the output: int *p = new int[5]; delete p;",
    "options": [
        "Correct",
        "Undefined behavior - should use delete[]",
        "Memory leak",
        "Error"
    ],
    "answer": 1,
    "explanation": "Array allocated with new[] must be deleted with delete[]. Using delete instead of delete[] causes undefined behavior - only first element is properly destroyed.",
    "difficulty": "Medium",
    "topic": "Dynamic Memory"
},
{
    "id": "cpp-217",
    "question": "What is the output: string s = \"Hello World\"; cout << s.substr(6, 5);",
    "options": [
        "World",
        "Hello",
        " World",
        "W"
    ],
    "answer": 0,
    "explanation": "substr(start_pos, length) returns substring. substr(6, 5) starts at index 6 ('W') and takes 5 characters: 'World'.",
    "difficulty": "Medium",
    "topic": "Strings"
},
{
    "id": "cpp-218",
    "question": "What is the output: string s = \"Hello\"; s.insert(2, \"XY\"); cout << s;",
    "options": [
        "HeXYllo",
        "XYHello",
        "HXeYllo",
        "HelXYlo"
    ],
    "answer": 0,
    "explanation": "insert(position, str) inserts string at the given position. Position 2 is after 'e'. 'XY' is inserted: 'He' + 'XY' + 'llo' = 'HeXYllo'.",
    "difficulty": "Medium",
    "topic": "Strings"
},
{
    "id": "cpp-219",
    "question": "What is the output: string s = \"Hello World\"; cout << s.find(\"World\");",
    "options": [
        "5",
        "6",
        "-1",
        "10"
    ],
    "answer": 1,
    "explanation": "find() returns the starting position of the substring. 'World' starts at index 6 (0-based: H=0, e=1, l=2, l=3, o=4, space=5, W=6).",
    "difficulty": "Medium",
    "topic": "Strings"
},
{
    "id": "cpp-220",
    "question": "What is the output: string s = \"Hello\"; cout << s.find(\"XYZ\");",
    "options": [
        "-1",
        "npos",
        "A very large number",
        "Error"
    ],
    "answer": 2,
    "explanation": "find() returns string::npos when not found. npos is typically the maximum value of size_t (very large number), not -1 (though it's often -1 when cast).",
    "difficulty": "Medium",
    "topic": "Strings"
},
{
    "id": "cpp-221",
    "question": "What is the output: pair<int, string> p = make_pair(1, \"One\"); cout << p.first << p.second;",
    "options": [
        "1 One",
        "One 1",
        "1One",
        "Error"
    ],
    "answer": 2,
    "explanation": "p.first is 1, p.second is 'One'. Without spaces in output statement, they print as '1One'.",
    "difficulty": "Medium",
    "topic": "pair"
},
{
    "id": "cpp-222",
    "question": "What is the output: vector<int> v1 = {1, 2, 3}; vector<int> v2 = v1; v1[0] = 10; cout << v2[0];",
    "options": [
        "10",
        "1",
        "Error",
        "Undefined"
    ],
    "answer": 1,
    "explanation": "v2 is a copy of v1 (deep copy). Changing v1 doesn't affect v2. v2[0] remains 1.",
    "difficulty": "Medium",
    "topic": "vector"
},
{
    "id": "cpp-223",
    "question": "What is the output: vector<int> v = {1, 2, 3}; for(auto it = v.rbegin(); it != v.rend(); ++it) cout << *it;",
    "options": [
        "123",
        "321",
        "213",
        "Error"
    ],
    "answer": 1,
    "explanation": "rbegin() returns reverse iterator starting from end. rend() is reverse end (before first element). Output is 3, 2, 1.",
    "difficulty": "Medium",
    "topic": "iterator"
},
{
    "id": "cpp-224",
    "question": "What is the output: #define SQUARE(x) x*x cout << SQUARE(5);",
    "options": [
        "25",
        "Error",
        "5",
        "Undefined"
    ],
    "answer": 0,
    "explanation": "Macro SQUARE(5) expands to 5*5, which equals 25. However, macros have issues: SQUARE(2+3) would expand to 2+3*2+3 = 11, not 25.",
    "difficulty": "Medium",
    "topic": "Macros"
},
{
    "id": "cpp-225",
    "question": "What is the output: #define SQUARE(x) x*x cout << SQUARE(2+3);",
    "options": [
        "25",
        "11",
        "Error",
        "6"
    ],
    "answer": 1,
    "explanation": "Macro expansion: SQUARE(2+3) becomes 2+3*2+3. Due to operator precedence, multiplication happens first: 2+6+3 = 11. Use (x)*(x) for correct behavior.",
    "difficulty": "Medium",
    "topic": "Macros"
},
{
    "id": "cpp-226",
    "question": "What is an rvalue?",
    "options": [
        "A variable with a name",
        "A temporary value that cannot be assigned to",
        "A reference",
        "A const variable"
    ],
    "answer": 1,
    "explanation": "An rvalue is a temporary value (like literals, results of expressions) that doesn't persist beyond the expression. You can't take its address or assign to it.",
    "difficulty": "Medium",
    "topic": "Rvalue References"
},
{
    "id": "cpp-227",
    "question": "What is move semantics used for?",
    "options": [
        "Moving files",
        "Efficiently transferring resources from temporary objects",
        "Moving pointers",
        "Function parameters"
    ],
    "answer": 1,
    "explanation": "Move semantics allow efficient transfer of resources (like dynamically allocated memory) from temporary objects instead of expensive deep copies.",
    "difficulty": "Medium",
    "topic": "Move Semantics"
},
{
    "id": "cpp-228",
    "question": "What is the syntax for an rvalue reference?",
    "options": [
        "int& x",
        "int&& x",
        "int* x",
        "int x&&"
    ],
    "answer": 1,
    "explanation": "int&& denotes an rvalue reference. It can bind to temporary values (rvalues) and is used for move semantics and perfect forwarding.",
    "difficulty": "Medium",
    "topic": "Rvalue References"
},
{
    "id": "cpp-229",
    "question": "What does std::move do?",
    "options": [
        "Moves data to another location",
        "Casts an object to an rvalue reference",
        "Deletes an object",
        "Creates a copy"
    ],
    "answer": 1,
    "explanation": "std::move doesn't actually move anything - it casts its argument to an rvalue reference, enabling move constructor/move assignment to be called.",
    "difficulty": "Medium",
    "topic": "Move Semantics"
},
{
    "id": "cpp-230",
    "question": "What is the output: string a = \"Hello\"; string b = move(a); cout << a << b;",
    "options": [
        "Hello Hello",
        "Hello",
        " Hello",
        "Error"
    ],
    "answer": 2,
    "explanation": "move(a) casts a to rvalue. b's move constructor steals a's resources. After move, a is in a valid but unspecified state (often empty).",
    "difficulty": "Medium",
    "topic": "Move Semantics"
},
{
    "id": "cpp-231",
    "question": "What is the output: namespace A { int x = 10; } namespace B { int x = 20; } using namespace A; using namespace B; cout << x;",
    "options": [
        "10",
        "20",
        "Error - ambiguous",
        "0"
    ],
    "answer": 2,
    "explanation": "Both namespaces are imported with using directive. x is present in both, causing ambiguity. Must use A::x or B::x to resolve.",
    "difficulty": "Medium",
    "topic": "Namespaces"
},
{
    "id": "cpp-232",
    "question": "What is the output: namespace A { namespace B { int x = 10; } } cout << A::B::x;",
    "options": [
        "10",
        "Error",
        "0",
        "AB::x"
    ],
    "answer": 0,
    "explanation": "Nested namespaces are accessed with multiple scope resolution operators. A::B::x accesses x inside B inside A.",
    "difficulty": "Medium",
    "topic": "Namespaces"
},
{
    "id": "cpp-233",
    "question": "What is the output: int count = 0; for(int i = 0; i < 5; ++i) for(int j = 0; j < i; ++j) count++; cout << count;",
    "options": [
        "5",
        "10",
        "15",
        "25"
    ],
    "answer": 1,
    "explanation": "For each i from 0 to 4, inner loop runs i times. Total iterations: 0+1+2+3+4 = 10.",
    "difficulty": "Medium",
    "topic": "Complexity Based Questions"
},
{
    "id": "cpp-234",
    "question": "What is the time complexity of binary search on a sorted array of n elements?",
    "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
    ],
    "answer": 1,
    "explanation": "Binary search halves the search space with each comparison. After k comparisons, n/2^k elements remain. When k = log₂n, only 1 element remains. Time complexity is O(log n).",
    "difficulty": "Medium",
    "topic": "Complexity Based Questions"
},
{
    "id": "cpp-235",
    "question": "What is the time complexity of accessing an element in a vector by index?",
    "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
    ],
    "answer": 0,
    "explanation": "Vector stores elements contiguously in memory. Accessing by index is direct memory access with offset calculation: O(1).",
    "difficulty": "Medium",
    "topic": "Complexity Based Questions"
},
{
    "id": "cpp-236",
    "question": "What is the time complexity of inserting at the beginning of a vector?",
    "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
    ],
    "answer": 2,
    "explanation": "Inserting at the beginning requires shifting all existing elements one position to make room. With n elements, this takes O(n) time.",
    "difficulty": "Medium",
    "topic": "Complexity Based Questions"
},
{
    "id": "cpp-237",
    "question": "What is the time complexity of push_back in vector (amortized)?",
    "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n²)"
    ],
    "answer": 0,
    "explanation": "When capacity is available, push_back is O(1). When reallocation is needed, it's O(n) but happens rarely. Amortized (averaged over many operations) is O(1).",
    "difficulty": "Medium",
    "topic": "Complexity Based Questions"
},
{
    "id": "cpp-238",
    "question": "What is the output: for(int i = 0; i < 5; i++) {} cout << i;",
    "options": [
        "5",
        "4",
        "Error - i is out of scope",
        "0"
    ],
    "answer": 2,
    "explanation": "In C++, the loop variable i is scoped to the for statement. After the loop, i is out of scope and cannot be accessed.",
    "difficulty": "Medium",
    "topic": "Control Statements"
},
{
    "id": "cpp-239",
    "question": "What is the output: int i; for(i = 0; i < 5; i++) {} cout << i;",
    "options": [
        "5",
        "4",
        "Error",
        "0"
    ],
    "answer": 0,
    "explanation": "i is declared outside the loop, so it remains in scope. After the loop (when i becomes 5 and condition fails), i equals 5.",
    "difficulty": "Medium",
    "topic": "Control Statements"
},
{
    "id": "cpp-240",
    "question": "What is the output: switch(2) { case 1: cout << \"1\"; case 2: cout << \"2\"; case 3: cout << \"3\"; }",
    "options": [
        "2",
        "1 2 3",
        "2 3",
        "Error"
    ],
    "answer": 2,
    "explanation": "Without break statements, fall-through occurs. After matching case 2, execution continues to case 3. Output: '23'.",
    "difficulty": "Medium",
    "topic": "switch"
},
{
    "id": "cpp-241",
    "question": "What is the output: class A { public: virtual void f() { cout << \"A\"; } }; class B : public A { public: void f() { cout << \"B\"; } }; class C : public B { public: void f() { cout << \"C\"; } }; A *a = new C(); a->f();",
    "options": [
        "A",
        "B",
        "C",
        "AB"
    ],
    "answer": 2,
    "explanation": "With virtual f(), dynamic binding occurs. Even though pointer is A*, the actual object is C. Virtual function call resolves to the most derived override: C::f().",
    "difficulty": "Hard",
    "topic": "Virtual Functions"
},
{
    "id": "cpp-242",
    "question": "What is the output: class A { public: void f() { cout << \"A\"; g(); } virtual void g() { cout << \"G\"; } }; class B : public A { public: virtual void g() { cout << \"GB\"; } }; A *a = new B(); a->f();",
    "options": [
        "AG",
        "AGB",
        "A",
        "Error"
    ],
    "answer": 1,
    "explanation": "f() is not virtual, so A::f() is called. Inside f(), g() is virtual, so B::g() is called on the actual B object. Output: 'AGB'.",
    "difficulty": "Hard",
    "topic": "Virtual Functions"
},
{
    "id": "cpp-243",
    "question": "What is the output: class Base { public: virtual ~Base() { cout << \"B\"; } }; class Derived : public Base { public: ~Derived() { cout << \"D\"; } }; Base *b = new Derived(); delete b;",
    "options": [
        "DB",
        "BD",
        "D",
        "B"
    ],
    "answer": 0,
    "explanation": "Virtual destructor ensures Derived destructor is called first, then Base. Output: 'DB'. Without virtual, only Base destructor would be called (memory leak).",
    "difficulty": "Hard",
    "topic": "Virtual Functions"
},
{
    "id": "cpp-244",
    "question": "What happens if you delete a derived object through a base pointer without virtual destructor?",
    "options": [
        "Both destructors are called",
        "Only base destructor is called - undefined behavior",
        "Only derived destructor is called",
        "Compiler error"
    ],
    "answer": 1,
    "explanation": "Without virtual destructor, only Base destructor is called through static binding. Derived destructor is not called, leading to resource leaks and undefined behavior.",
    "difficulty": "Hard",
    "topic": "Virtual Functions"
},
{
    "id": "cpp-245",
    "question": "What is the output: class A { int x; public: A(int x) : x(x) {} }; class B : virtual public A { public: B(int x) : A(x) {} }; class C : virtual public A { public: C(int x) : A(x) {} }; class D : public B, public C { public: D(int x) : A(x), B(x), C(x) {} };",
    "options": [
        "Valid - no diamond problem",
        "Error - multiple A constructors",
        "Error - virtual inheritance not allowed here",
        "Undefined behavior"
    ],
    "answer": 0,
    "explanation": "Virtual inheritance ensures single A subobject. D directly calls A's constructor. B and C don't need to call A's constructor in virtual inheritance.",
    "difficulty": "Hard",
    "topic": "Hybrid Inheritance"
},
{
    "id": "cpp-246",
    "question": "What is the output: template<typename T> void func(T t) { cout << \"T\"; } template<> void func<int>(int t) { cout << \"int\"; } func(3.14); func(5);",
    "options": [
        "T int",
        "int T",
        "TT",
        "int int"
    ],
    "answer": 0,
    "explanation": "func(3.14) uses generic template (T). func(5) matches the explicit specialization for int. Output: 'T int'.",
    "difficulty": "Hard",
    "topic": "Templates"
},
{
    "id": "cpp-247",
    "question": "What is the output: template<typename T, typename U> auto add(T a, U b) -> decltype(a + b) { return a + b; } cout << add(1, 2.5);",
    "options": [
        "3",
        "3.5",
        "Error",
        "4"
    ],
    "answer": 1,
    "explanation": "Trailing return type uses decltype to deduce return type. With int and double, decltype(1 + 2.5) is double. Return value is 3.5.",
    "difficulty": "Hard",
    "topic": "Templates"
},
{
    "id": "cpp-248",
    "question": "What is the output: template<int N> struct Factorial { static const int value = N * Factorial<N-1>::value; }; template<> struct Factorial<0> { static const int value = 1; }; cout << Factorial<5>::value;",
    "options": [
        "5",
        "24",
        "120",
        "Error"
    ],
    "answer": 2,
    "explanation": "Template metaprogramming computes factorial at compile time. Factorial<5> = 5 * Factorial<4>::value = 5 * 4 * 3 * 2 * 1 = 120.",
    "difficulty": "Hard",
    "topic": "Templates"
},
{
    "id": "cpp-249",
    "question": "What is variadic template used for?",
    "options": [
        "Single parameter templates",
        "Templates that accept variable number of arguments",
        "Templates with no parameters",
        "Templates that vary at runtime"
    ],
    "answer": 1,
    "explanation": "Variadic templates accept zero or more template arguments. Syntax: template<typename... Args> allows Args to represent any number of types.",
    "difficulty": "Hard",
    "topic": "Templates"
},
{
    "id": "cpp-250",
    "question": "What is the output: class Test { int *ptr; public: Test(int val) { ptr = new int(val); } ~Test() { delete ptr; } Test(const Test& other) : ptr(new int(*other.ptr)) {} }; void func(Test t) {} Test obj(5); func(obj);",
    "options": [
        "Memory leak",
        "Double free",
        "Valid - custom copy constructor prevents double free",
        "Error"
    ],
    "answer": 2,
    "explanation": "Custom copy constructor performs deep copy. func(obj) copies obj with new allocation. When func returns, its copy is destroyed safely. No double free.",
    "difficulty": "Hard",
    "topic": "Copy Constructor"
},
{
    "id": "cpp-251",
    "question": "What is the Rule of Three?",
    "options": [
        "Class needs at most three methods",
        "If you define any of destructor, copy constructor, or copy assignment, define all three",
        "Three inheritance levels maximum",
        "Three constructors minimum"
    ],
    "answer": 1,
    "explanation": "Rule of Three states: if a class needs a custom destructor, copy constructor, or copy assignment operator, it probably needs all three for proper resource management.",
    "difficulty": "Hard",
    "topic": "Memory Management"
},
{
    "id": "cpp-252",
    "question": "What is the Rule of Five in C++11?",
    "options": [
        "Same as Rule of Three with move semantics",
        "Five constructors required",
        "Maximum of five member variables",
        "Five levels of inheritance"
    ],
    "answer": 0,
    "explanation": "Rule of Five extends Rule of Three: destructor, copy constructor, copy assignment, move constructor, move assignment. All five for proper resource management with move semantics.",
    "difficulty": "Hard",
    "topic": "Memory Management"
},
{
    "id": "cpp-253",
    "question": "What is the output: class Test { int *ptr; public: Test(int val) { ptr = new int(val); } Test(Test&& other) noexcept : ptr(other.ptr) { other.ptr = nullptr; } }; Test a(5); Test b = move(a);",
    "options": [
        "Both have valid pointers to different objects",
        "b has pointer, a.ptr is nullptr",
        "Both have nullptr",
        "Memory leak"
    ],
    "answer": 1,
    "explanation": "Move constructor steals the resource from other. b gets a's pointer. a.ptr is set to nullptr to prevent double deletion. Efficient resource transfer.",
    "difficulty": "Hard",
    "topic": "Move Semantics"
},
{
    "id": "cpp-254",
    "question": "What is perfect forwarding?",
    "options": [
        "Forwarding emails in C++",
        "Preserving value category (lvalue/rvalue) when forwarding arguments",
        "Moving all arguments",
        "Using forward references"
    ],
    "answer": 1,
    "explanation": "Perfect forwarding uses forwarding references (T&&) with std::forward to preserve whether an argument was an lvalue or rvalue, forwarding it optimally.",
    "difficulty": "Hard",
    "topic": "Move Semantics"
},
{
    "id": "cpp-255",
    "question": "What is the output: template<typename T> void wrapper(T&& arg) { func(forward<T>(arg)); } void func(int& x) { cout << \"lvalue\"; } void func(int&& x) { cout << \"rvalue\"; } int a = 5; wrapper(a); wrapper(10);",
    "options": [
        "lvalue rvalue",
        "rvalue lvalue",
        "lvalue lvalue",
        "rvalue rvalue"
    ],
    "answer": 0,
    "explanation": "wrapper(a) passes lvalue, forward preserves it -> func(int&) called. wrapper(10) passes rvalue, forward preserves it -> func(int&&) called. Perfect forwarding works!",
    "difficulty": "Hard",
    "topic": "Move Semantics"
},
{
    "id": "cpp-256",
    "question": "What is RAII?",
    "options": [
        "Resource Allocation Is Initialization",
        "Resource Acquisition Is Initialization",
        "Random Access Is Important",
        "Runtime Array Is Initialized"
    ],
    "answer": 1,
    "explanation": "RAII (Resource Acquisition Is Initialization) binds resource lifetime to object lifetime. Resources acquired in constructor, released in destructor automatically.",
    "difficulty": "Hard",
    "topic": "Memory Management"
},
{
    "id": "cpp-257",
    "question": "What is the output: { unique_ptr<int> p1 = make_unique<int>(10); unique_ptr<int> p2 = move(p1); }",
    "options": [
        "Memory leak",
        "Both deleted properly",
        "Double free",
        "Error"
    ],
    "answer": 1,
    "explanation": "After move, p1 is nullptr, p2 owns the memory. When scope ends, only p2's destructor runs, deleting the memory. No leak, no double free.",
    "difficulty": "Hard",
    "topic": "unique_ptr"
},
{
    "id": "cpp-258",
    "question": "What is a memory pool?",
    "options": [
        "A swimming pool for computers",
        "A pre-allocated block of memory for efficient allocation",
        "A type of garbage collector",
        "A cache memory"
    ],
    "answer": 1,
    "explanation": "Memory pool pre-allocates a large block of memory and manages smaller allocations within it. Faster than general allocation, reduces fragmentation.",
    "difficulty": "Hard",
    "topic": "Memory Management"
},
{
    "id": "cpp-259",
    "question": "What is the output: class Base { public: void f(int) { cout << \"int\"; } }; class Derived : public Base { public: void f(double) { cout << \"double\"; } }; Derived d; d.f(5);",
    "options": [
        "int",
        "double",
        "Error - ambiguous",
        "Both"
    ],
    "answer": 1,
    "explanation": "Derived::f hides Base::f (name hiding). d.f(5) calls Derived::f(double) after implicit conversion from int to double. Output: 'double'.",
    "difficulty": "Hard",
    "topic": "Function Overriding"
},
{
    "id": "cpp-260",
    "question": "How to access Base::f in the previous question?",
    "options": [
        "d.Base::f(5)",
        "d.f<int>(5)",
        "Base::d.f(5)",
        "Cannot be accessed"
    ],
    "answer": 0,
    "explanation": "Use scope resolution: d.Base::f(5) explicitly calls Base's version, bypassing name hiding.",
    "difficulty": "Hard",
    "topic": "Function Overriding"
},
{
    "id": "cpp-261",
    "question": "What is the output: class A { public: A() { cout << \"A\"; throw 1; } }; class B : public A { public: B() { cout << \"B\"; } }; try { B b; } catch(...) { cout << \"C\"; }",
    "options": [
        "ABC",
        "AB",
        "AC",
        "C"
    ],
    "answer": 2,
    "explanation": "A() constructor throws, printing 'A'. B() never completes. Exception caught, printing 'C'. Output: 'AC'. B's destructor not called (object not fully constructed).",
    "difficulty": "Hard",
    "topic": "Exception Handling"
},
{
    "id": "cpp-262",
    "question": "What is exception safety guarantee?",
    "options": [
        "Exceptions are always caught",
        "A function's behavior when exceptions occur",
        "No exceptions can be thrown",
        "Exceptions are disabled"
    ],
    "answer": 1,
    "explanation": "Exception safety describes how operations behave when exceptions occur. Levels: no-throw, strong (rollback), basic (valid but unspecified state).",
    "difficulty": "Hard",
    "topic": "Exception Handling"
},
{
    "id": "cpp-263",
    "question": "What is the strong exception guarantee?",
    "options": [
        "Function never throws",
        "If operation fails, state is rolled back to before the operation",
        "If operation fails, object is in valid but unspecified state",
        "Exceptions are caught internally"
    ],
    "answer": 1,
    "explanation": "Strong guarantee: if operation fails, it has no effect - state is exactly as before. Achieved through copy-and-swap or careful ordering of operations.",
    "difficulty": "Hard",
    "topic": "Exception Handling"
},
{
    "id": "cpp-264",
    "question": "What is the output: int* createArray() { int arr[3] = {1, 2, 3}; return arr; } int* p = createArray(); cout << p[0];",
    "options": [
        "1",
        "Garbage value",
        "Error at compile time",
        "Undefined behavior"
    ],
    "answer": 3,
    "explanation": "Returning address of local array is undefined behavior. arr is destroyed when function returns, but p points to that memory. Classic dangling pointer bug.",
    "difficulty": "Hard",
    "topic": "Memory Management"
},
{
    "id": "cpp-265",
    "question": "What is the output: class Singleton { static Singleton* instance; Singleton() {} public: static Singleton* getInstance() { if(!instance) instance = new Singleton(); return instance; } };",
    "options": [
        "Correct singleton pattern",
        "Not thread-safe singleton",
        "Compile error",
        "Memory leak"
    ],
    "answer": 1,
    "explanation": "This classic singleton is not thread-safe. Two threads could both see instance as null and create two instances. Use std::call_once or Meyers' singleton (local static).",
    "difficulty": "Hard",
    "topic": "Static Members"
},
{
    "id": "cpp-266",
    "question": "What is thread-safe singleton in C++11?",
    "options": [
        "Using mutex in getInstance()",
        "Meyers' singleton: static Singleton& getInstance() { static Singleton instance; return instance; }",
        "Double-checked locking",
        "Both B and C"
    ],
    "answer": 1,
    "explanation": "Meyers' singleton uses local static variable, guaranteed thread-safe in C++11+. Initialization is atomic; multiple threads won't create separate instances.",
    "difficulty": "Hard",
    "topic": "Static Members"
},
{
    "id": "cpp-267",
    "question": "What is the output: class Counter { mutable int count; public: int getCount() const { count++; return count; } }; Counter c; cout << c.getCount() << c.getCount();",
    "options": [
        "12",
        "11",
        "Error - cannot modify in const function",
        "00"
    ],
    "answer": 0,
    "explanation": "mutable allows modification even in const member functions. First call increments count to 1, second to 2. Output: '12'.",
    "difficulty": "Hard",
    "topic": "Const Correctness"
},
{
    "id": "cpp-268",
    "question": "What is the output: int x = 10; decltype(x) y = 20; decltype(x + 1.5) z = 2.5; cout << sizeof(x) << sizeof(z);",
    "options": [
        "4 4",
        "4 8",
        "8 8",
        "Error"
    ],
    "answer": 1,
    "explanation": "decltype(x) is int (4 bytes). decltype(x + 1.5) is double (8 bytes) because int + double promotes to double.",
    "difficulty": "Hard",
    "topic": "auto"
},
{
    "id": "cpp-269",
    "question": "What is SFINAE?",
    "options": [
        "Substitution Failure Is Not An Error",
        "Single Function In Namespace",
        "Standard Format For Initialization",
        "Static Function In Abstract class"
    ],
    "answer": 0,
    "explanation": "SFINAE: During template argument substitution, if substitution fails (invalid type), it's not an error - compiler tries other overloads. Used for template metaprogramming.",
    "difficulty": "Hard",
    "topic": "Templates"
},
{
    "id": "cpp-270",
    "question": "What is the output: template<typename T, typename = void> struct has_type : false_type {}; template<typename T> struct has_type<T, void_t<typename T::value_type>> : true_type {};",
    "options": [
        "Type trait to check if T has value_type member",
        "Error",
        "Always returns true",
        "Always returns false"
    ],
    "answer": 0,
    "explanation": "This is a SFINAE-based type trait. If T has value_type, partial specialization matches (true). Otherwise, primary template is used (false). Detects member types.",
    "difficulty": "Hard",
    "topic": "Templates"
},
{
    "id": "cpp-271",
    "question": "What is the time complexity of std::sort?",
    "options": [
        "O(n)",
        "O(n log n)",
        "O(n²)",
        "O(log n)"
    ],
    "answer": 1,
    "explanation": "std::sort typically uses Introsort (quicksort + heapsort + insertion sort for small arrays). Worst case is O(n log n), meeting the standard requirement.",
    "difficulty": "Hard",
    "topic": "Complexity Based Questions"
},
{
    "id": "cpp-272",
    "question": "What is the time complexity of std::list::sort?",
    "options": [
        "O(n)",
        "O(n log n)",
        "O(n²)",
        "O(log n)"
    ],
    "answer": 1,
    "explanation": "std::list::sort uses merge sort (suitable for linked lists with bidirectional iterators). Time complexity is O(n log n) with O(1) extra space.",
    "difficulty": "Hard",
    "topic": "Complexity Based Questions"
},
{
    "id": "cpp-273",
    "question": "What is the output: int arr[] = {1, 2, 3}; vector<int> v(arr, arr + 3); v.push_back(4); cout << v[3];",
    "options": [
        "3",
        "4",
        "Error",
        "1"
    ],
    "answer": 1,
    "explanation": "Vector is constructed from array {1,2,3}. push_back(4) adds 4 at end. v[3] is 4.",
    "difficulty": "Hard",
    "topic": "vector"
},
{
    "id": "cpp-274",
    "question": "What is the output: map<string, int> m; m[\"a\"]++; m[\"a\"]++; cout << m[\"a\"];",
    "options": [
        "0",
        "1",
        "2",
        "Error"
    ],
    "answer": 2,
    "explanation": "m[\"a\"] inserts with default value 0 if not exists, then increments. After two increments, m[\"a\"] is 2.",
    "difficulty": "Hard",
    "topic": "map"
},
{
    "id": "cpp-275",
    "question": "What is the output: int* p = new int[10]; cout << p[10];",
    "options": [
        "0",
        "10",
        "Garbage value (undefined behavior)",
        "Error at compile time"
    ],
    "answer": 2,
    "explanation": "p[10] is out of bounds (valid indices 0-9). No bounds checking in C++. Reading out of bounds is undefined behavior, likely returning garbage.",
    "difficulty": "Hard",
    "topic": "Dynamic Memory"
},
{
    "id": "cpp-276",
    "question": "What is the output: class A { public: virtual void f() final; }; class B : public A { public: void f() {} };",
    "options": [
        "Valid code",
        "Error - cannot override final function",
        "Warning only",
        "Runs but undefined behavior"
    ],
    "answer": 1,
    "explanation": "final keyword prevents overriding. B::f() attempts to override A::f(), causing compilation error.",
    "difficulty": "Hard",
    "topic": "Function Overriding"
},
{
    "id": "cpp-277",
    "question": "What is the output: class final A {}; class B : public A {};",
    "options": [
        "Valid code",
        "Error - cannot inherit from final class",
        "Warning only",
        "B is implicitly final"
    ],
    "answer": 1,
    "explanation": "Marking a class as final prevents inheritance. B cannot derive from final class A. Compilation error.",
    "difficulty": "Hard",
    "topic": "Inheritance"
},
{
    "id": "cpp-278",
    "question": "What is the output: class Base { public: void f(); }; void Base::f() { cout << \"Base\"; } class Derived : public Base { public: void f(int); }; Derived d; d.f();",
    "options": [
        "Base",
        "Error - name hiding, f() not accessible",
        "Derived's f(int) called with default",
        "Both printed"
    ],
    "answer": 1,
    "explanation": "Derived::f(int) hides all Base::f overloads. d.f() tries to call Derived::f with no args, which doesn't exist. Error. Use d.Base::f() to call base version.",
    "difficulty": "Hard",
    "topic": "Function Overriding"
},
{
    "id": "cpp-279",
    "question": "What is covariant return type?",
    "options": [
        "Return type that changes based on arguments",
        "Overriding function can return derived type if base returns pointer/reference to base",
        "Return type that matches argument type",
        "A const return type"
    ],
    "answer": 1,
    "explanation": "Covariant return: if Base::f() returns Base*, Derived::f() override can return Derived*. This maintains type safety while allowing more specific return types.",
    "difficulty": "Hard",
    "topic": "Function Overriding"
},
{
    "id": "cpp-280",
    "question": "What is the output: class Base { public: Base& operator=(const Base&); }; class Derived : public Base { int x; public: Derived& operator=(const Derived& other) { Base::operator=(other); x = other.x; return *this; } };",
    "options": [
        "Correct assignment operator implementation",
        "Error - cannot call Base::operator=",
        "Error - invalid syntax",
        "Will cause infinite recursion"
    ],
    "answer": 0,
    "explanation": "This is correct pattern for derived class assignment. Explicitly calls base class assignment to handle base members, then handles derived members. Returns *this for chaining.",
    "difficulty": "Hard",
    "topic": "Operator Overloading"
},
{
    "id": "cpp-281",
    "question": "What is the output: struct Empty {}; cout << sizeof(Empty);",
    "options": [
        "0",
        "1",
        "4",
        "Compiler error"
    ],
    "answer": 1,
    "explanation": "Empty class/struct has size 1 byte to ensure unique addresses for different objects. This is required by the standard.",
    "difficulty": "Hard",
    "topic": "Structures"
},
{
    "id": "cpp-282",
    "question": "What is the output: struct Empty {}; struct Derived : Empty { int x; }; cout << sizeof(Derived);",
    "options": [
        "4",
        "5",
        "8",
        "1"
    ],
    "answer": 2,
    "explanation": "Due to alignment, Empty base often contributes to padding. With int (4 bytes) and alignment requirements, sizeof(Derived) is typically 4 or 8 bytes (implementation dependent).",
    "difficulty": "Hard",
    "topic": "Structures"
},
{
    "id": "cpp-283",
    "question": "What is the output: struct A { char a; }; struct B { char b; }; struct C : A, B {}; cout << sizeof(C);",
    "options": [
        "1",
        "2",
        "4",
        "8"
    ],
    "answer": 1,
    "explanation": "C contains char a from A and char b from B. Empty base optimization doesn't apply since they have members. Two chars: 2 bytes.",
    "difficulty": "Hard",
    "topic": "Multiple Inheritance"
},
{
    "id": "cpp-284",
    "question": "What is EBO (Empty Base Optimization)?",
    "options": [
        "Eliminates empty base classes",
        "Empty base class subobject can have zero size",
        "Eliminates all base classes",
        "Removes empty methods"
    ],
    "answer": 1,
    "explanation": "EBO allows empty base class subobjects to have zero size when used as base. Reduces memory overhead. STL uses this with allocator and iterator base classes.",
    "difficulty": "Hard",
    "topic": "Multiple Inheritance"
},
{
    "id": "cpp-285",
    "question": "What is the output: class A { int x; }; class B : virtual public A {}; class C : virtual public A {}; class D : public B, public C {}; cout << sizeof(D);",
    "options": [
        "4",
        "8",
        "12",
        "16"
    ],
    "answer": 3,
    "explanation": "With virtual inheritance, D has one A subobject. But each class with virtual base needs a vptr to locate the virtual base. Multiple pointers increase size significantly.",
    "difficulty": "Hard",
    "topic": "Hybrid Inheritance"
},
{
    "id": "cpp-286",
    "question": "What is the output: template<bool B, typename T = void> struct enable_if {}; template<typename T> struct enable_if<true, T> { using type = T; }; typename enable_if<true, int>::type x = 5; cout << x;",
    "options": [
        "5",
        "Error",
        "0",
        "true"
    ],
    "answer": 0,
    "explanation": "enable_if<true, int>::type is int (from partial specialization). enable_if<false> has no 'type' member. Used for SFINAE-based overload resolution.",
    "difficulty": "Hard",
    "topic": "Templates"
},
{
    "id": "cpp-287",
    "question": "What is the output: auto lambda = [](auto x) { return x * 2; }; cout << lambda(5) << lambda(3.5);",
    "options": [
        "10 7",
        "10 7.0",
        "Error",
        "7 7"
    ],
    "answer": 0,
    "explanation": "Generic lambda with auto parameter. lambda(5) deduces int, returns 10. lambda(3.5) deduces double, returns 7 (may display as 7.0 depending on format).",
    "difficulty": "Hard",
    "topic": "lambda"
},
{
    "id": "cpp-288",
    "question": "What is the output: int x = 10; auto f = [&x](auto&& param) { x = 20; return param; }; cout << f(5) << x;",
    "options": [
        "5 20",
        "5 10",
        "20 20",
        "Error"
    ],
    "answer": 0,
    "explanation": "x captured by reference. f(5) passes rvalue 5 (forwarding reference). Inside lambda, x is set to 20. Returns param (5). Output: '5 20'.",
    "difficulty": "Hard",
    "topic": "lambda"
},
{
    "id": "cpp-289",
    "question": "What is the output: struct Test { int a; Test(int a) : a(a) {} }; vector<Test> v; v.reserve(5); for(int i = 0; i < 5; i++) v.emplace_back(i); cout << v[3].a;",
    "options": [
        "3",
        "4",
        "Error",
        "Garbage"
    ],
    "answer": 0,
    "explanation": "emplace_back constructs Test in-place with argument i. v[3].a is 3. More efficient than push_back for complex types.",
    "difficulty": "Hard",
    "topic": "vector"
},
{
    "id": "cpp-290",
    "question": "What is the difference between push_back and emplace_back?",
    "options": [
        "No difference",
        "emplace_back constructs in-place, push_back may copy/move",
        "push_back is faster",
        "emplace_back cannot take arguments"
    ],
    "answer": 1,
    "explanation": "emplace_back forwards arguments to construct object directly in vector's storage. push_back creates temporary then moves/copies. emplace_back avoids extra move/copy.",
    "difficulty": "Hard",
    "topic": "vector"
},
{
    "id": "cpp-291",
    "question": "What is the output: shared_ptr<int> sp = make_shared<int>(10); weak_ptr<int> wp = sp; cout << wp.use_count(); sp.reset(); cout << wp.use_count();",
    "options": [
        "1 0",
        "2 1",
        "1 1",
        "Error"
    ],
    "answer": 0,
    "explanation": "weak_ptr doesn't increase use_count. Before reset: count is 1 (from sp). After sp.reset(): count is 0 (sp released). wp is now expired.",
    "id": "cpp-291",
    "question": "What is the output: shared_ptr<int> sp = make_shared<int>(10); weak_ptr<int> wp = sp; cout << wp.use_count(); sp.reset(); cout << wp.expired();",
    "options": [
        "1 0",
        "1 1",
        "0 1",
        "Error"
    ],
    "answer": 1,
    "explanation": "use_count() returns 1 (from sp). weak_ptr doesn't increment it. After sp.reset(), shared count becomes 0. wp.expired() returns true (1) since object is destroyed.",
    "difficulty": "Hard",
    "topic": "weak_ptr"
},
{
    "id": "cpp-292",
    "question": "What is the output: class A { public: ~A() { cout << \"A\"; } }; class B { public: ~B() { cout << \"B\"; } }; try { A* a = new A(); B b; throw 1; delete a; } catch(int) { cout << \"C\"; }",
    "options": [
        "BAC",
        "ABC",
        "ACB",
        "BCA"
    ],
    "answer": 0,
    "explanation": "throw triggers stack unwinding. Local b's destructor runs (B). a is not deleted (memory leak). Exception caught (C). a's destructor never called. Output: 'BAC'.",
    "difficulty": "Hard",
    "topic": "Exception Handling"
},
{
    "id": "cpp-293",
    "question": "What is the output: auto f = [](auto... args) { return (args + ...); }; cout << f(1, 2, 3, 4, 5);",
    "options": [
        "15",
        "Error",
        "5",
        "12345"
    ],
    "answer": 0,
    "explanation": "C++17 fold expression: (args + ...) expands to ((((arg1 + arg2) + arg3) + arg4) + arg5). Result: 1+2+3+4+5 = 15.",
    "difficulty": "Hard",
    "topic": "lambda"
},
{
    "id": "cpp-294",
    "question": "What is the output: int x = 10; int& r = x; int&& rr = 5; int& r2 = rr; int&& rr2 = r;",
    "options": [
        "Valid",
        "Error - cannot bind rvalue ref to lvalue",
        "Warning",
        "Undefined behavior"
    ],
    "answer": 1,
    "explanation": "rr2 = r is error. r is an lvalue (even though rr is rvalue reference, rr itself is lvalue). Rvalue references can only bind to rvalues.",
    "difficulty": "Hard",
    "topic": "Rvalue References"
},
{
    "id": "cpp-295",
    "question": "What is the output: constexpr int square(int x) { return x * x; } int arr[square(5)]; cout << sizeof(arr);",
    "options": [
        "5",
        "20",
        "25",
        "Error - VLA not allowed"
    ],
    "answer": 1,
    "explanation": "constexpr allows compile-time evaluation. square(5) is evaluated at compile time to 25. arr[25] is valid (not VLA). sizeof(arr) = 25 * 4 = 100 bytes. Wait, arr has 25 ints. sizeof(arr) would be 100, but that's not an option. Let me reconsider. Actually with square(5)=25, arr is int[25]. But wait, that's not matching options. Let me recalculate: square(5) = 25. sizeof(int[25]) = 100 bytes. Hmm, but that's not in options. Maybe I should reconsider the question. Let me change to constexpr square(2) = 4, then sizeof(int[4]) = 16. Not in options either. Let me keep 25 and change sizeof to 25*sizeof(int). Actually let me just say 20 as answer with the explanation noting 25 elements times 4 bytes... wait no. Let me change the question.",
    "options": [
        "25 elements",
        "100 bytes",
        "5 ints",
        "Error"
    ],
    "answer": 1,
    "explanation": "constexpr allows compile-time evaluation. square(5) evaluates to 25 at compile time. arr is int[25]. sizeof(arr) = 25 * sizeof(int) = 100 bytes.",
    "difficulty": "Hard",
    "topic": "Preprocessor Directives"
},
{
    "id": "cpp-296",
    "question": "What is the output: int&& foo() { return 5; } int x = foo();",
    "options": [
        "Valid - x is 5",
        "Warning - returning reference to temporary",
        "Error",
        "x is dangling reference"
    ],
    "answer": 0,
    "explanation": "Returning rvalue reference from temporary (5) works. x receives the value 5. However, this pattern is unusual and potentially confusing.",
    "difficulty": "Hard",
    "topic": "Rvalue References"
},
{
    "id": "cpp-297",
    "question": "What is the output: class A { public: A() { cout << \"A\"; } A(const A&) { cout << \"Ac\"; } }; class B { A a; public: B(const B& other) : a(other.a) {} }; B b1; B b2 = b1;",
    "options": [
        "AAc",
        "AAAc",
        "A",
        "Error"
    ],
    "answer": 0,
    "explanation": "b1: A constructed (A). b2 = b1: copy constructor called, a(other.a) copies a using A's copy constructor (Ac). Output: 'AAc'.",
    "difficulty": "Hard",
    "topic": "Copy Constructor"
},
{
    "id": "cpp-298",
    "question": "What is the output: class X { public: X() { throw 1; } }; class Y { X x; public: Y() try : x() { cout << \"Y\"; } catch(int) { cout << \"C\"; throw; } }; try { Y y; } catch(...) { cout << \"M\"; }",
    "options": [
        "CM",
        "YC",
        "CYM",
        "Error"
    ],
    "answer": 0,
    "explanation": "Function-try-block catches exceptions from member initialization. X() throws, caught by Y's try-catch (C), rethrown, caught by main's catch (M). Y body never executes.",
    "difficulty": "Hard",
    "topic": "Exception Handling"
},
{
    "id": "cpp-299",
    "question": "What is placement new used for?",
    "options": [
        "Allocating memory on heap",
        "Constructing object at specific memory location",
        "Placing objects in array",
        "Moving objects"
    ],
    "answer": 1,
    "explanation": "Placement new: new(ptr) Type(args) constructs object at address ptr without allocating memory. Useful for custom allocators, memory pools, and embedded systems.",
    "difficulty": "Hard",
    "topic": "Dynamic Memory"
},
{
    "id": "cpp-300",
    "question": "What is the output: char buffer[sizeof(string)]; string* p = new(buffer) string(\"Hello\"); cout << *p; p->~string();",
    "options": [
        "Hello",
        "Error",
        "Memory address",
        "Undefined behavior"
    ],
    "answer": 0,
    "explanation": "Placement new constructs string at buffer. Object works normally. Must explicitly call destructor (no delete for placement new). Output: 'Hello'.",
    "difficulty": "Hard",
    "topic": "Dynamic Memory"
}
]