// C Programming Questions
[
    {
        "id": "c-1",
        "question": "Who developed the C programming language?",
        "options": [
            "Bill Gates",
            "Dennis Ritchie",
            "Bjarne Stroustrup",
            "James Gosling"
        ],
        "answer": 1,
        "explanation": "The C programming language was developed by Dennis Ritchie at Bell Labs in the early 1970s.",
        "difficulty": "Easy",
        "topic": "History of C"
    },
    {
        "id": "c-2",
        "question": "In which year was the C programming language developed?",
        "options": [
            "1969",
            "1972",
            "1983",
            "1995"
        ],
        "answer": 1,
        "explanation": "C was developed in 1972 by Dennis Ritchie at Bell Labs.",
        "difficulty": "Easy",
        "topic": "History of C"
    },
    {
        "id": "c-3",
        "question": "Which of the following is NOT a valid C token?",
        "options": [
            "Keywords",
            "Identifiers",
            "Constants",
            "Operators",
            "None of the above"
        ],
        "answer": 4,
        "explanation": "In C, tokens are the smallest individual units of a program. The six types of tokens are: keywords, identifiers, constants, string literals, operators, and special symbols. All options except 'None of the above' are valid token types.",
        "difficulty": "Easy",
        "topic": "Tokens"
    },
    {
        "id": "c-4",
        "question": "Which of the following is a valid identifier in C?",
        "options": [
            "123variable",
            "_temp",
            "int",
            "double"
        ],
        "answer": 1,
        "explanation": "Identifiers in C must begin with a letter or underscore, followed by letters, digits, or underscores. '_temp' is valid, '123variable' cannot start with a digit, and 'int'/'double' are keywords.",
        "difficulty": "Easy",
        "topic": "Identifiers"
    },
    {
        "id": "c-5",
        "question": "What is the output of this C code?\n#include <stdio.h>\nint main() {\n    const int x = 5;\n    x = 10;\n    printf(\"%d\", x);\n    return 0;\n}",
        "options": [
            "5",
            "10",
            "Compiler error",
            "Runtime error"
        ],
        "answer": 2,
        "explanation": "The 'const' keyword makes x a read-only variable. Attempting to modify it results in a compiler error.",
        "difficulty": "Medium",
        "topic": "Constants"
    },
    {
        "id": "c-6",
        "question": "What is the size of a char data type in C?",
        "options": [
            "1 bit",
            "1 byte",
            "2 bytes",
            "4 bytes"
        ],
        "answer": 1,
        "explanation": "The char data type in C is guaranteed to be exactly 1 byte in size, which is sufficient to store any character from the basic character set.",
        "difficulty": "Easy",
        "topic": "Data Types"
    },
    {
        "id": "c-7",
        "question": "Which format specifier is used for printing a float value in printf()?",
        "options": [
            "%d",
            "%f",
            "%c",
            "%s"
        ],
        "answer": 1,
        "explanation": "The '%f' format specifier is used for printing float (and double) values in printf(). For scanf(), '%f' is used for float and '%lf' for double.",
        "difficulty": "Easy",
        "topic": "Input/Output"
    },
    {
        "id": "c-8",
        "question": "What is the result of the expression: 7 + 3 * 2 / 2 - 1?",
        "options": [
            "6",
            "8",
            "9",
            "10"
        ],
        "answer": 2,
        "explanation": "Following operator precedence: multiplication and division first (left to right): 3 * 2 = 6, 6 / 2 = 3. Then addition and subtraction: 7 + 3 = 10, 10 - 1 = 9.",
        "difficulty": "Easy",
        "topic": "Operators"
    },
    {
        "id": "c-9",
        "question": "Which of the following statements about C is true?",
        "options": [
            "C is a high-level language only",
            "C is a low-level language only",
            "C is a middle-level language",
            "C is an assembly language"
        ],
        "answer": 2,
        "explanation": "C is considered a middle-level language because it combines features of high-level languages (like structured programming) with low-level capabilities (like direct memory access through pointers).",
        "difficulty": "Easy",
        "topic": "Basics of C"
    },
    {
        "id": "c-10",
        "question": "What does the stdio.h header file provide?",
        "options": [
            "String manipulation functions",
            "Mathematical functions",
            "Standard input and output functions",
            "Memory allocation functions"
        ],
        "answer": 2,
        "explanation": "The stdio.h header file provides declarations for standard input and output functions like printf(), scanf(), fopen(), fclose(), etc.",
        "difficulty": "Easy",
        "topic": "Header Files"
    },
    {
        "id": "c-11",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    int a = 5, b = 2;\n    printf(\"%d\", a / b);\n    return 0;\n}",
        "options": [
            "2",
            "2.5",
            "3",
            "0"
        ],
        "answer": 0,
        "explanation": "Since both a and b are integers, integer division is performed. 5 / 2 = 2 with a remainder of 1, but the fractional part is discarded in integer division.",
        "difficulty": "Easy",
        "topic": "Operators"
    },
    {
        "id": "c-12",
        "question": "Which keyword is used to prevent a variable from being modified?",
        "options": [
            "static",
            "volatile",
            "const",
            "register"
        ],
        "answer": 2,
        "explanation": "The 'const' keyword is used to declare variables whose value cannot be changed after initialization.",
        "difficulty": "Easy",
        "topic": "Keywords"
    },
    {
        "id": "c-13",
        "question": "What is the correct way to initialize a variable at the time of declaration?",
        "options": [
            "int x = 5;",
            "int x; x = 5;",
            "int x := 5;",
            "int x == 5;"
        ],
        "answer": 0,
        "explanation": "In C, variables can be initialized at declaration using the syntax: type variable_name = value;",
        "difficulty": "Easy",
        "topic": "Variables"
    },
    {
        "id": "c-14",
        "question": "What happens if you use an uninitialized variable in C?",
        "options": [
            "It is automatically initialized to 0",
            "It contains garbage value",
            "It causes a compile-time error",
            "It causes a segmentation fault"
        ],
        "answer": 1,
        "explanation": "Using an uninitialized variable in C leads to undefined behavior, as it contains an indeterminate (garbage) value from whatever was previously in that memory location.",
        "difficulty": "Medium",
        "topic": "Variables"
    },
    {
        "id": "c-15",
        "question": "Which of the following is NOT a valid way to comment in C?",
        "options": [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment",
            "/* This is a\n multi-line comment */"
        ],
        "answer": 2,
        "explanation": "C supports single-line comments with // and multi-line comments with /* ... */. The # symbol is used for preprocessor directives, not comments.",
        "difficulty": "Easy",
        "topic": "Basics of C"
    },
    {
        "id": "c-16",
        "question": "What is the value of EOF in C?",
        "options": [
            "0",
            "1",
            "-1",
            "It depends on the system"
        ],
        "answer": 2,
        "explanation": "EOF (End Of File) is a macro defined in stdio.h with a value of -1, used to indicate the end of a file has been reached during input operations.",
        "difficulty": "Medium",
        "topic": "Input/Output"
    },
    {
        "id": "c-17",
        "question": "Which operator has the highest precedence in C?",
        "options": [
            "Logical NOT (!)",
            "Multiplication (*)",
            "Addition (+)",
            "Equality (==)"
        ],
        "answer": 0,
        "explanation": "The logical NOT operator (!) has the highest precedence among the options listed. In general, postfix operators like () [] -> . have the highest precedence, followed by unary operators like ! ~ ++ -- + - * & sizeof.",
        "difficulty": "Medium",
        "topic": "Operators"
    },
    {
        "id": "c-18",
        "question": "What is the purpose of the return statement in C?",
        "options": [
            "To declare a variable",
            "To end the program and return a value to the operating system",
            "To create a loop",
            "To import a header file"
        ],
        "answer": 1,
        "explanation": "The return statement terminates the execution of a function and returns control to the calling function. In main(), it returns an integer status code to the operating system.",
        "difficulty": "Easy",
        "topic": "Functions"
    },
    {
        "id": "c-19",
        "question": "What is the size of an int pointer on a 64-bit system?",
        "options": [
            "2 bytes",
            "4 bytes",
            "8 bytes",
            "It depends on the value it points to"
        ],
        "answer": 2,
        "explanation": "On a 64-bit system, pointers are typically 8 bytes (64 bits) in size, regardless of what type they point to.",
        "difficulty": "Medium",
        "topic": "Pointers"
    },
    {
        "id": "c-20",
        "question": "Which of the following is true about the main() function in C?",
        "options": [
            "It must always return an integer",
            "It can be overloaded",
            "It cannot have parameters",
            "It is executed before any other function"
        ],
        "answer": 0,
        "explanation": "The main() function in C must return an integer value (int main() or void main() is non-standard). It serves as the entry point of the program and can accept command-line arguments.",
        "difficulty": "Easy",
        "topic": "Functions"
    },
    {
        "id": "c-21",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d %d %d\", x, x++, ++x);\n    return 0;\n}",
        "options": [
            "5 5 7",
            "5 6 7",
            "5 6 8",
            "Undefined behavior"
        ],
        "answer": 3,
        "explanation": "This code exhibits undefined behavior due to multiple modifications of the variable 'x' between sequence points. The order of evaluation of function arguments is unspecified, leading to unpredictable results.",
        "difficulty": "Hard",
        "topic": "Operators"
    },
    {
        "id": "c-22",
        "question": "Which header file contains the declaration for the malloc() function?",
        "options": [
            "stdlib.h",
            "stdio.h",
            "string.h",
            "math.h"
        ],
        "answer": 0,
        "explanation": "The malloc() function is declared in stdlib.h (standard library header), which contains functions for memory allocation, process control, and other utilities.",
        "difficulty": "Easy",
        "topic": "Header Files"
    },
    {
        "id": "c-23",
        "question": "What is the correct way to declare a function that takes no parameters and returns an integer?",
        "options": [
            "int func();",
            "int func(void);",
            "int func(null);",
            "function int func();"
        ],
        "answer": 1,
        "explanation": "In C, to explicitly declare a function with no parameters, you should use 'void' in the parameter list: int func(void);. Although int func(); is also valid (due to historical reasons), using void is preferred for clarity.",
        "difficulty": "Easy",
        "topic": "Functions"
    },
    {
        "id": "c-24",
        "question": "What will be the output of the following code?\n#include <stdio.h>\nint main() {\n    char str[] = \"Hello\";\n    printf(\"%zu\", sizeof(str));\n    return 0;\n}",
        "options": [
            "5",
            "6",
            "7",
            "8"
        ],
        "answer": 1,
        "explanation": "The string \"Hello\" contains 5 characters plus a null terminator ('\\0'), making the total size 6 bytes. The sizeof operator includes the null terminator in its calculation.",
        "difficulty": "Medium",
        "topic": "Arrays"
    },
    {
        "id": "c-25",
        "question": "Which loop construct is best suited when the number of iterations is known beforehand?",
        "options": [
            "for loop",
            "while loop",
            "do-while loop",
            "All are equally suitable"
        ],
        "answer": 0,
        "explanation": "The for loop is ideal when the number of iterations is known in advance, as it initialization, condition, and increment/decrement are all in one line, making it clear and concise.",
        "difficulty": "Easy",
        "topic": "Control Structures"
    },
    {
        "id": "c-26",
        "question": "What is the purpose of the break statement in C?",
        "options": [
            "To exit the current loop or switch statement",
            "To skip the current iteration of a loop",
            "To terminate the program",
            "To call a function"
        ],
        "answer": 0,
        "explanation": "The break statement is used to exit from a loop or switch statement immediately, transferring control to the statement following the terminated statement.",
        "difficulty": "Easy",
        "topic": "Control Structures"
    },
    {
        "id": "c-27",
        "question": "What does the continue statement do in a loop?",
        "options": [
            "Terminates the loop immediately",
            "Skips the rest of the current iteration and continues with the next iteration",
            "Resets the loop counter to zero",
            "Causes the program to crash"
        ],
        "answer": 1,
        "explanation": "The continue statement skips the remaining code in the current iteration of a loop and proceeds directly to the next iteration.",
        "difficulty": "Easy",
        "topic": "Control Structures"
    },
    {
        "id": "c-28",
        "question": "Which of the following declarations is correct for a 2D array with 3 rows and 4 columns?",
        "options": [
            "int arr[3][4];",
            "int arr[4][3];",
            "int arr[][] = {3, 4};",
            "int arr[3][4];"
        ],
        "answer": 0,
        "explanation": "In C, a 2D array is declared as type[rows][columns]. For 3 rows and 4 columns, the declaration is int arr[3][4];.",
        "difficulty": "Easy",
        "topic": "Arrays"
    },
    {
        "id": "c-29",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    int arr[5] = {1, 2, 3, 4, 5};\n    printf(\"%d\", arr[5]);\n    return 0;\n}",
        "options": [
            "1",
            "5",
            "0",
            "Undefined behavior"
        ],
        "answer": 3,
        "explanation": "Array indices in C start from 0, so for an array of size 5, valid indices are 0 to 4. Accessing arr[5] is out of bounds and leads to undefined behavior.",
        "difficulty": "Medium",
        "topic": "Arrays"
    },
    {
        "id": "c-30",
        "question": "How do you pass an array to a function in C?",
        "options": [
            "By passing the entire array",
            "By passing a pointer to the first element",
            "By passing each element individually",
            "Arrays cannot be passed to functions"
        ],
        "answer": 1,
        "explanation": "When an array is passed to a function in C, it decays to a pointer to its first element. The function receives the address of the first element, not a copy of the entire array.",
        "difficulty": "Medium",
        "topic": "Arrays"
    },
    {
        "id": "c-31",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    int x = 10;\n    if (x = 5)\n        printf(\"True\");\n    else\n        printf(\"False\");\n    return 0;\n}",
        "options": [
            "True",
            "False",
            "Compiler error",
            "Nothing"
        ],
        "answer": 0,
        "explanation": "In the if condition, 'x = 5' is an assignment operation that assigns 5 to x and returns 5 (which is non-zero, hence true). So 'True' is printed.",
        "difficulty": "Medium",
        "topic": "Control Structures"
    },
    {
        "id": "c-32",
        "question": "Which of the following is the correct way to declare a pointer to a function that takes two integers and returns an integer?",
        "options": [
            "int (*func_ptr)(int, int);",
            "int *func_ptr(int, int);",
            "int (*func_ptr)(int int);",
            "int func_ptr*(int, int);"
        ],
        "answer": 0,
        "explanation": "The correct syntax for a function pointer is: return_type (*pointer_name)(parameter_types). For a function taking two integers and returning an integer: int (*func_ptr)(int, int);",
        "difficulty": "Hard",
        "topic": "Pointers"
    },
    {
        "id": "c-33",
        "question": "What is the size of an empty struct in C?",
        "options": [
            "0 bytes",
            "1 byte",
            "Depends on the compiler",
            "Cannot be defined"
        ],
        "answer": 1,
        "explanation": "According to the C standard, an empty struct must have a size of at least 1 byte to ensure that two different instances have different addresses.",
        "difficulty": "Medium",
        "topic": "Structures"
    },
    {
        "id": "c-34",
        "question": "Which of the following is true about the volatile keyword in C?",
        "options": [
            "It prevents the compiler from optimizing access to the variable",
            "It makes the variable constant",
            "It is used for thread synchronization",
            "It allocates memory in registers"
        ],
        "answer": 0,
        "explanation": "The volatile keyword tells the compiler that a variable's value may change unexpectedly (e.g., due to hardware), preventing the compiler from applying optimizations that assume the value remains constant between accesses.",
        "difficulty": "Medium",
        "topic": "Keywords"
    },
    {
        "id": "c-35",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    printf(\"%d\", sizeof(\"\"));\n    return 0;\n}",
        "options": [
            "0",
            "1",
            "2",
            "Compiler error"
        ],
        "answer": 1,
        "explanation": "The sizeof operator on a string literal includes the null terminator. An empty string \"\" contains just the null terminator, so its size is 1 byte.",
        "difficulty": "Medium",
        "topic": "Strings"
    },
    {
        "id": "c-36",
        "question": "Which of the following is the correct way to initialize all elements of an integer array to zero?",
        "options": [
            "int arr[5] = {0};",
            "int arr[5] = 0;",
            "int arr[5] = (0, 0, 0, 0, 0);",
            "int arr[5];"
        ],
        "answer": 0,
        "explanation": "When initializing an array, if you provide fewer initializers than elements, the remaining elements are automatically initialized to zero. So int arr[5] = {0}; sets the first element to 0 and the rest to 0 as well.",
        "difficulty": "Easy",
        "topic": "Arrays"
    },
    {
        "id": "c-37",
        "question": "What does the following declaration mean: int (*ptr)[10];",
        "options": [
            "Pointer to an array of 10 integers",
            "Array of 10 pointers to integers",
            "Pointer to a pointer to an integer",
            "Function pointer returning an array of 10 integers"
        ],
        "answer": 0,
        "explanation": "The declaration int (*ptr)[10]; means ptr is a pointer to an array of 10 integers. The parentheses are necessary because [] has higher precedence than *.",
        "difficulty": "Hard",
        "topic": "Pointers"
    },
    {
        "id": "c-38",
        "question": "Which of the following is true about recursion in C?",
        "options": [
            "Recursive functions cannot call themselves",
            "Every recursive function must have a base case",
            "Recursion is faster than iteration",
            "Recursive functions do not use the stack"
        ],
        "answer": 1,
        "explanation": "Every recursive function must have a base case (a condition that stops the recursion) to prevent infinite recursion and stack overflow.",
        "difficulty": "Medium",
        "topic": "Functions"
    },
    {
        "id": "c-39",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    int x = 5;\n    #define SQUARE(x) x * x\n    printf(\"%d\", SQUARE(x + 1));\n    return 0;\n}",
        "options": [
            "16",
            "36",
            "7",
            "12"
        ],
        "answer": 1,
        "explanation": "The macro SQUARE(x) expands to x * x. So SQUARE(x + 1) becomes (x + 1) * (x + 1) due to operator precedence in the macro expansion. With x = 5, this is (5 + 1) * (5 + 1) = 6 * 6 = 36.",
        "difficulty": "Hard",
        "topic": "Preprocessor"
    },
    {
        "id": "c-40",
        "question": "Which of the following is the correct way to declare a constant pointer to an integer?",
        "options": [
            "int *const ptr;",
            "const int *ptr;",
            "const int *const ptr;",
            "int const *ptr;"
        ],
        "answer": 0,
        "explanation": "To declare a pointer that is constant (cannot be changed to point elsewhere) but points to modifiable int data: int *const ptr;. The const after the * makes the pointer itself constant.",
        "difficulty": "Medium",
        "topic": "Pointers"
    },
    {
        "id": "c-41",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    char *str = \"Hello\";\n    str[0] = 'h';\n    printf(\"%s\", str);\n    return 0;\n}",
        "options": [
            "hello",
            "Hello",
            "Compiler error",
            "Undefined behavior"
        ],
        "answer": 3,
        "explanation": "String literals in C are stored in read-only memory. Attempting to modify a string literal results in undefined behavior, which may manifest as a runtime error or crash.",
        "difficulty": "Hard",
        "topic": "Strings"
    },
    {
        "id": "c-42",
        "question": "Which of the following statements about the sizeof operator is correct?",
        "options": [
            "sizeof can be used to get the size of a function",
            "sizeof evaluates its argument at runtime",
            "sizeof(char) is always 1 byte",
            "sizeof can be used with the dot operator on structs"
        ],
        "answer": 2,
        "explanation": "The sizeof operator yields the size (in bytes) of its operand. By definition, sizeof(char) is always 1 byte, regardless of the system architecture.",
        "difficulty": "Easy",
        "topic": "Operators"
    },
    {
        "id": "c-43",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    int x = 5;\n    int *ptr = &x;\n    printf(\"%d\", *ptr);\n    return 0;\n}",
        "options": [
            "5",
            "Address of x",
            "0",
            "Garbage value"
        ],
        "answer": 0,
        "explanation": "The pointer ptr stores the address of x. Dereferencing ptr with *ptr gives the value stored at that address, which is 5.",
        "difficulty": "Easy",
        "topic": "Pointers"
    },
    {
        "id": "c-44",
        "question": "What is the purpose of the if statement in C?",
        "options": [
            "To perform arithmetic operations",
            "To control program flow based on conditions",
            "To declare variables",
            "To define functions"
        ],
        "answer": 1,
        "explanation": "The if statement is used to execute a block of code only if a specified condition is true. It controls the flow of execution in a program.",
        "difficulty": "Easy",
        "topic": "Control Structures"
    },
    {
        "id": "c-45",
        "question": "Which of the following is the correct way to declare a pointer to a constant integer?",
        "options": [
            "int *const ptr;",
            "const int *ptr;",
            "const int *const ptr;",
            "int const *ptr;"
        ],
        "answer": 1,
        "explanation": "To declare a pointer to a constant integer (pointer can change, but the value it points to cannot): const int *ptr;. The const before the * makes the pointed-to value constant.",
        "difficulty": "Easy",
        "topic": "Pointers"
    },
    {
        "id": "c-46",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    for (int i = 0; i < 3; i++) {\n        printf(\"%d \", i);\n    }\n    return 0;\n}",
        "options": [
            "0 1 2",
            "1 2 3",
            "0 1 2 3",
            "No output"
        ],
        "answer": 0,
        "explanation": "The for loop initializes i to 0, continues while i < 3, and increments i after each iteration. It prints 0, then 1, then 2.",
        "difficulty": "Easy",
        "topic": "Control Structures"
    },
    {
        "id": "c-47",
        "question": "Which of the following is the correct way to declare a function that modifies its argument?",
        "options": [
            "void func(int x);",
            "void func(int *x);",
            "void func(int &x);",
            "void func(const int x);"
        ],
        "answer": 1,
        "explanation": "To modify an argument inside a function, you need to pass its address using a pointer. Changes made through the pointer will affect the original variable.",
        "difficulty": "Medium",
        "topic": "Functions"
    },
    {
        "id": "c-48",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    int arr[3] = {10, 20, 30};\n    printf(\"%d\", *arr);\n    return 0;\n}",
        "options": [
            "10",
            "20",
            "30",
            "Address of arr[0]"
        ],
        "answer": 0,
        "explanation": "The array name 'arr' decays to a pointer to its first element. Dereferencing it with *arr gives the value of the first element, which is 10.",
        "difficulty": "Easy",
        "topic": "Arrays"
    },
    {
        "id": "c-49",
        "question": "Which keyword is used to exit a function and return control to the caller?",
        "options": [
            "break",
            "continue",
            "return",
            "goto"
        ],
        "answer": 2,
        "explanation": "The return statement is used to exit a function and return control to the calling function. It can also return a value to the caller.",
        "difficulty": "Easy",
        "topic": "Functions"
    },
    {
        "id": "c-50",
        "question": "What is the output of this code?\n#include <stdio.h>\nint main() {\n    printf(\"%d\", printf(\"Hello\"));\n    return 0;\n}",
        "options": [
            "Hello5",
            "Hello6",
            "5Hello",
            "Compiler error"
        ],
        "answer": 1,
        "explanation": "The inner printf(\"Hello\") prints 'Hello' and returns the number of characters printed (5). The outer printf then prints this return value (5), resulting in 'Hello5'.",
        "difficulty": "Medium",
        "topic": "Input/Output"
    }
]