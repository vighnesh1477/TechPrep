export default [
    {
        id: "c-1",
        question: "Which of the following is NOT a feature of the C programming language?",
        options: [
            "Middle-level language",
            "Platform-independent bytecode execution",
            "Structured programming support",
            "Low-level memory access via pointers"
        ],
        answer: 1,
        explanation: "C compiles to native machine code, not platform-independent bytecode. Java uses bytecode execution, not C.",
        difficulty: "Easy",
        topic: "Features of C"
    },
    {
        id: "c-2",
        question: "Who designed the C programming language?",
        options: [
            "Bjarne Stroustrup",
            "Dennis Ritchie",
            "Ken Thompson",
            "Brian Kernighan"
        ],
        answer: 1,
        explanation: "Dennis Ritchie created C at Bell Labs in 1972. Bjarne Stroustrup created C++.",
        difficulty: "Easy",
        topic: "History of C"
    },
    {
        id: "c-3",
        question: "C was originally developed to reimplement which operating system?",
        options: [
            "MS-DOS",
            "Unix",
            "Windows NT",
            "Linux"
        ],
        answer: 1,
        explanation: "C was created to rewrite the Unix kernel. Earlier, Unix was written in assembly and B language.",
        difficulty: "Easy",
        topic: "History of C"
    },
    {
        id: "c-4",
        question: "Which standard introduced the `inline` keyword and variable-length arrays to C?",
        options: [
            "C89/C90",
            "C99",
            "C11",
            "C17"
        ],
        answer: 1,
        explanation: "C99 introduced inline functions, VLAs, `restrict` keyword, single-line comments (//), and new headers like stdbool.h.",
        difficulty: "Easy",
        topic: "History of C"
    },
    {
        id: "c-5",
        question: "Which of the following best describes why C is called a 'middle-level' language?",
        options: [
            "It runs between the operating system and hardware",
            "It combines high-level constructs with low-level memory access",
            "It was designed as a bridge between Fortran and COBOL",
            "It requires a middle-tier runtime environment"
        ],
        answer: 1,
        explanation: "C provides high-level abstractions like functions and structured programming while allowing direct memory manipulation via pointers.",
        difficulty: "Easy",
        topic: "Features of C"
    },
    {
        id: "c-6",
        question: "Which of the following is NOT a valid C standard?",
        options: [
            "C89",
            "C99",
            "C09",
            "C11"
        ],
        answer: 2,
        explanation: "There is no C09 standard. The sequence is C89/C90, C99, C11, C17, C23.",
        difficulty: "Easy",
        topic: "History of C"
    },
    {
        id: "c-7",
        question: "In a typical C compilation pipeline, what does the preprocessor do?",
        options: [
            "Converts assembly to machine code",
            "Resolves macros, includes headers, and processes conditional directives",
            "Optimizes the intermediate representation",
            "Links object files into an executable"
        ],
        answer: 1,
        explanation: "The preprocessor handles #include, #define, #ifdef/#endif, and other directives before actual compilation begins.",
        difficulty: "Easy",
        topic: "Compilation Process"
    },
    {
        id: "c-8",
        question: "What is the correct order of stages in C compilation?",
        options: [
            "Compiler → Assembler → Preprocessor → Linker",
            "Preprocessor → Compiler → Assembler → Linker",
            "Assembler → Preprocessor → Compiler → Linker",
            "Preprocessor → Linker → Compiler → Assembler"
        ],
        answer: 1,
        explanation: "Source code first goes through the preprocessor, then the compiler generates assembly, the assembler creates object files, and the linker produces the final executable.",
        difficulty: "Easy",
        topic: "Compilation Process"
    },
    {
        id: "c-9",
        question: "Which GCC flag is used to stop compilation after the preprocessing stage?",
        options: [
            "-c",
            "-S",
            "-E",
            "-o"
        ],
        answer: 2,
        explanation: "gcc -E outputs only the preprocessed source. -S stops after compilation to assembly, -c stops after assembly to object files.",
        difficulty: "Easy",
        topic: "Compilation Process"
    },
    {
        id: "c-10",
        question: "Which file extension is typically used for C header files?",
        options: [
            ".c",
            ".h",
            ".cpp",
            ".o"
        ],
        answer: 1,
        explanation: ".h is the conventional extension for C header files. .c is for source, .o for object files.",
        difficulty: "Easy",
        topic: "Header Files"
    },
    {
        id: "c-11",
        question: "What does the #include directive do during preprocessing?",
        options: [
            "Links the header file at runtime",
            "Copies the contents of the header file into the source file",
            "Compiles the header file separately",
            "Creates a symbol table from the header"
        ],
        answer: 1,
        explanation: "#include is a preprocessor directive that textually replaces the directive with the entire contents of the specified file.",
        difficulty: "Easy",
        topic: "Preprocessor"
    },
    {
        id: "c-12",
        question: "What is the difference between #include <stdio.h> and #include \"myfile.h\"?",
        options: [
            "No difference; both are identical",
            "<> searches standard include paths first; \"\" searches the current directory first",
            "<> is for C++ headers; \"\" is for C headers",
            "<> includes at runtime; \"\" includes at compile time"
        ],
        answer: 1,
        explanation: "Angle brackets search system/include directories first. Double quotes search the current source directory first, then fall back to system paths.",
        difficulty: "Easy",
        topic: "Preprocessor"
    },
    {
        id: "c-13",
        question: "Which of the following is a preprocessor directive?",
        options: [
            "define",
            "#define",
            "define()",
            "preprocess"
        ],
        answer: 1,
        explanation: "Preprocessor directives in C always begin with #. #define is used to create macros.",
        difficulty: "Easy",
        topic: "Preprocessor"
    },
    {
        id: "c-14",
        question: "Which of the following is NOT a valid C token?",
        options: [
            "Keyword",
            "Identifier",
            "Preprocessor directive",
            "String literal"
        ],
        answer: 2,
        explanation: "C tokens are keywords, identifiers, constants, string literals, operators, and punctuators. Preprocessor directives are handled before tokenization of the main translation unit.",
        difficulty: "Easy",
        topic: "Tokens"
    },
    {
        id: "c-15",
        question: "Which of the following is a valid C identifier?",
        options: [
            "2ndValue",
            "my-var",
            "_count",
            "int"
        ],
        answer: 2,
        explanation: "Identifiers can start with a letter or underscore, followed by letters, digits, or underscores. They cannot start with a digit or be a keyword.",
        difficulty: "Easy",
        topic: "Identifiers"
    },
    {
        id: "c-16",
        question: "How many keywords are there in the C99 standard?",
        options: [
            "27",
            "32",
            "37",
            "44"
        ],
        answer: 2,
        explanation: "C99 has 37 keywords. C89 had 32, and C11 added 5 more (including _Alignas, _Alignof, _Atomic, _Generic, _Static_assert, _Thread_local), bringing C11 to 44.",
        difficulty: "Easy",
        topic: "Keywords"
    },
    {
        id: "c-17",
        question: "Which of the following is NOT a C keyword?",
        options: [
            "sizeof",
            "typedef",
            "string",
            "volatile"
        ],
        answer: 2,
        explanation: "string is not a C keyword. It may be a typedef or struct tag in some libraries, but it is not a language keyword.",
        difficulty: "Easy",
        topic: "Keywords"
    },
    {
        id: "c-18",
        question: "What is the default value of a local int variable in C?",
        options: [
            "0",
            "1",
            "Garbage value",
            "NULL"
        ],
        answer: 2,
        explanation: "Local (auto) variables are not initialized by default in C. Their value is whatever happens to be in that memory location (indeterminate value).",
        difficulty: "Easy",
        topic: "Variables"
    },
    {
        id: "c-19",
        question: "Which of the following correctly declares an integer constant in C?",
        options: [
            "const int MAX = 100;",
            "#define MAX 100",
            "enum { MAX = 100 };",
            "All of the above"
        ],
        answer: 3,
        explanation: "All three methods create a constant: const-qualified variable, preprocessor macro, and enumeration constant.",
        difficulty: "Easy",
        topic: "Constants"
    },
    {
        id: "c-20",
        question: "What is the size of a char data type in C?",
        options: [
            "1 byte",
            "2 bytes",
            "4 bytes",
            "Implementation-defined"
        ],
        answer: 0,
        explanation: "By definition in the C standard, sizeof(char) is always exactly 1 byte. CHAR_BIT (from limits.h) defines bits per byte, which is at least 8.",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "c-21",
        question: "What is the output of sizeof('a') on a 64-bit system where char is 1 byte and int is 4 bytes?",
        options: [
            "1",
            "2",
            "4",
            "8"
        ],
        answer: 2,
        explanation: "Character constants like 'a' have type int in C, not char. So sizeof('a') equals sizeof(int), which is typically 4 bytes.",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "c-22",
        question: "Which data type is guaranteed to be the largest in C?",
        options: [
            "long int",
            "long long int",
            "unsigned long int",
            "size_t"
        ],
        answer: 1,
        explanation: "long long int is guaranteed to be at least 64 bits and at least as large as long int, which is at least as large as int.",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "c-23",
        question: "What is the range of an unsigned 8-bit integer?",
        options: [
            "-128 to 127",
            "0 to 255",
            "-127 to 128",
            "0 to 256"
        ],
        answer: 1,
        explanation: "An unsigned 8-bit integer can represent 2^8 = 256 values, from 0 to 255.",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "c-24",
        question: "Which header file provides the INT_MAX constant?",
        options: [
            "stdio.h",
            "stdlib.h",
            "limits.h",
            "math.h"
        ],
        answer: 2,
        explanation: "limits.h defines integer type limits like INT_MAX, INT_MIN, UINT_MAX, LONG_MAX, etc.",
        difficulty: "Easy",
        topic: "Header Files"
    },
    {
        id: "c-25",
        question: "What does the 'unsigned' modifier do to an integer type?",
        options: [
            "Makes it negative only",
            "Removes the sign bit, doubling the positive range",
            "Makes it a floating-point type",
            "Has no effect on the range"
        ],
        answer: 1,
        explanation: "unsigned removes the sign bit, using all bits for magnitude. For a 32-bit type, signed range is -2^31 to 2^31-1, while unsigned is 0 to 2^32-1.",
        difficulty: "Easy",
        topic: "Type Modifiers"
    },
    {
        id: "c-26",
        question: "What is the purpose of the 'short' type modifier?",
        options: [
            "Makes the variable a 16-bit integer on all platforms",
            "Requests a smaller integer size than int, but at least 16 bits",
            "Makes the variable a boolean type",
            "Reduces the precision of float"
        ],
        answer: 1,
        explanation: "short int is guaranteed to be at least 16 bits but may be the same size as int on some platforms. It requests a smaller size but doesn't guarantee a specific size.",
        difficulty: "Easy",
        topic: "Type Modifiers"
    },
    {
        id: "c-27",
        question: "Which storage class makes a variable persist across function calls but limits its scope to the function?",
        options: [
            "auto",
            "register",
            "static",
            "extern"
        ],
        answer: 2,
        explanation: "A static local variable is initialized once and retains its value between function calls, but is only visible within the function where it's declared.",
        difficulty: "Easy",
        topic: "Storage Classes"
    },
    {
        id: "c-28",
        question: "What is the default storage class of a local variable in C?",
        options: [
            "static",
            "extern",
            "auto",
            "register"
        ],
        answer: 2,
        explanation: "Local variables are auto by default. They are allocated on the stack when the function is entered and deallocated when it exits.",
        difficulty: "Easy",
        topic: "Storage Classes"
    },
    {
        id: "c-29",
        question: "Which storage class is used to declare a variable that is defined in another file?",
        options: [
            "auto",
            "static",
            "register",
            "extern"
        ],
        answer: 3,
        explanation: "extern declares a variable without defining it, indicating that the variable is defined elsewhere (typically in another translation unit).",
        difficulty: "Easy",
        topic: "Storage Classes"
    },
    {
        id: "c-30",
        question: "What is the result of 10 % 3 in C?",
        options: [
            "3",
            "1",
            "0",
            "3.33"
        ],
        answer: 1,
        explanation: "The % operator is the modulo operator. 10 divided by 3 gives a quotient of 3 and a remainder of 1.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "c-31",
        question: "What does the ++ operator do when used as a prefix (++x)?",
        options: [
            "Returns x, then increments x",
            "Increments x, then returns the new value",
            "Doubles the value of x",
            "Sets x to 1"
        ],
        answer: 1,
        explanation: "Prefix ++ increments the operand first and then returns the incremented value. Postfix x++ returns the value first, then increments.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "c-32",
        question: "Which operator has the highest precedence among the following?",
        options: [
            "*",
            "+",
            "==",
            "&&"
        ],
        answer: 0,
        explanation: "Multiplication (*) has higher precedence than addition (+), which is higher than equality (==), which is higher than logical AND (&&).",
        difficulty: "Easy",
        topic: "Operator Precedence"
    },
    {
        id: "c-33",
        question: "What is the value of x after: int x = 5; x += 3 * 2;?",
        options: [
            "16",
            "11",
            "30",
            "10"
        ],
        answer: 1,
        explanation: "Multiplication has higher precedence than +=. So 3*2=6, then x += 6, giving x = 5+6 = 11.",
        difficulty: "Easy",
        topic: "Operator Precedence"
    },
    {
        id: "c-34",
        question: "Which of the following is the correct way to check if x is equal to 10?",
        options: [
            "if (x = 10)",
            "if (x == 10)",
            "if (x === 10)",
            "if x equals 10"
        ],
        answer: 1,
        explanation: "== is the equality operator in C. = is assignment. C has no === operator. The last option is not valid C syntax.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "c-35",
        question: "What does the logical NOT operator (!) return when applied to a non-zero value?",
        options: [
            "The same non-zero value",
            "0",
            "1",
            "-1"
        ],
        answer: 2,
        explanation: "In C, ! applied to any non-zero value returns 0 (false), and !0 returns 1 (true). The result type is int.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "c-36",
        question: "What is the output of printf(\"%d\", 5 / 2);?",
        options: [
            "2.5",
            "2",
            "3",
            "Compilation error"
        ],
        answer: 1,
        explanation: "Integer division in C truncates toward zero. 5/2 = 2 (the fractional part .5 is discarded).",
        difficulty: "Easy",
        topic: "Expressions"
    },
    {
        id: "c-37",
        question: "Which format specifier is used to print a long double value?",
        options: [
            "%f",
            "%lf",
            "%Lf",
            "%ld"
        ],
        answer: 2,
        explanation: "%Lf is for long double. %f is for double (and float due to default promotion), %lf in printf is technically undefined behavior but often works. %ld is for long int.",
        difficulty: "Easy",
        topic: "printf"
    },
    {
        id: "c-38",
        question: "What is the purpose of the & operator in scanf(\"%d\", &x);?",
        options: [
            "Bitwise AND",
            "Logical AND",
            "Passes the address of x so scanf can modify it",
            "Dereferences x"
        ],
        answer: 2,
        explanation: "In scanf, &x gives the address of variable x so that scanf can write the input value directly into that memory location.",
        difficulty: "Easy",
        topic: "scanf"
    },
    {
        id: "c-39",
        question: "What happens if you use scanf(\"%d\", x); instead of scanf(\"%d\", &x); where x is an int?",
        options: [
            "Works correctly",
            "Compilation error",
            "Undefined behavior — scanf treats x's value as an address",
            "x is set to 0"
        ],
        answer: 2,
        explanation: "Without &, scanf interprets the garbage value in x as a memory address and tries to write there, causing undefined behavior, often a segmentation fault.",
        difficulty: "Easy",
        topic: "scanf"
    },
    {
        id: "c-40",
        question: "What is the output of printf(\"%5d\", 42);?",
        options: [
            "42",
            "%5d42",
            "   42",
            "42   "
        ],
        answer: 2,
        explanation: "%5d right-justifies the integer in a field width of 5 characters, padding with spaces on the left: \"   42\".",
        difficulty: "Easy",
        topic: "printf"
    },
    {
        id: "c-41",
        question: "Which of the following correctly reads a string with spaces using scanf?",
        options: [
            "scanf(\"%s\", str);",
            "scanf(\"%c\", str);",
            "scanf(\"%[^\\n]s\", str);",
            "scanf(\"%d\", str);"
        ],
        answer: 2,
        explanation: "%[^\\n] reads all characters until a newline is encountered. Regular %s stops at whitespace. This is a common interview trick.",
        difficulty: "Easy",
        topic: "scanf"
    },
    {
        id: "c-42",
        question: "What is the output of the following code?\nint x = 0;\nif (x)\n    printf(\"True\");\nelse\n    printf(\"False\");",
        options: [
            "True",
            "False",
            "Compilation error",
            "Runtime error"
        ],
        answer: 1,
        explanation: "In C, 0 is treated as false in conditional expressions. Any non-zero value is true. Since x is 0, the else branch executes.",
        difficulty: "Easy",
        topic: "if"
    },
    {
        id: "c-43",
        question: "What is the output of: switch(2) { case 1: printf(\"A\"); case 2: printf(\"B\"); case 3: printf(\"C\"); default: printf(\"D\"); }?",
        options: [
            "B",
            "BCD",
            "B",
            "D"
        ],
        answer: 1,
        explanation: "Without break statements, execution falls through from the matching case to all subsequent cases and default, printing \"BCD\".",
        difficulty: "Easy",
        topic: "switch"
    },
    {
        id: "c-44",
        question: "Can a switch statement have a default case that is NOT the last case?",
        options: [
            "No, default must always be last",
            "Yes, but it requires a break",
            "Yes, default can appear anywhere; fall-through still applies",
            "Yes, but only in C99 and later"
        ],
        answer: 2,
        explanation: "The default case can appear anywhere in a switch statement. If placed in the middle without a break, execution falls through to subsequent cases.",
        difficulty: "Easy",
        topic: "switch"
    },
    {
        id: "c-45",
        question: "What is the output of: for(int i=0; i<5; i++); printf(\"%d\", i); assuming C99 or later?",
        options: [
            "01234",
            "5",
            "Compilation error",
            "Infinite loop"
        ],
        answer: 1,
        explanation: "The for loop has an empty body (just a semicolon). After the loop, i equals 5 (the first value that fails i<5), so printf prints 5.",
        difficulty: "Easy",
        topic: "for"
    },
    {
        id: "c-46",
        question: "How many times does the loop execute? int i = 5; while(i > 0) { i--; }",
        options: [
            "4",
            "5",
            "6",
            "Infinite"
        ],
        answer: 1,
        explanation: "i starts at 5, the loop runs while i>0. It executes for i=5,4,3,2,1 — that's 5 times. When i becomes 0, the condition fails.",
        difficulty: "Easy",
        topic: "while"
    },
    {
        id: "c-47",
        question: "What is the difference between while and do-while loops?",
        options: [
            "No difference",
            "do-while executes at least once; while may execute zero times",
            "while executes at least once; do-while may execute zero times",
            "do-while is only for arrays"
        ],
        answer: 1,
        explanation: "do-while checks the condition after the loop body, guaranteeing at least one execution. while checks before, possibly executing zero times.",
        difficulty: "Easy",
        topic: "do-while"
    },
    {
        id: "c-48",
        question: "What does the break statement do inside a loop?",
        options: [
            "Pauses the loop for one iteration",
            "Exits the innermost enclosing loop or switch",
            "Skips to the next iteration",
            "Terminates the program"
        ],
        answer: 1,
        explanation: "break immediately exits the innermost enclosing for, while, do-while, or switch statement. It does not affect outer loops.",
        difficulty: "Easy",
        topic: "break"
    },
    {
        id: "c-49",
        question: "What does the continue statement do inside a for loop?",
        options: [
            "Exits the loop",
            "Skips the rest of the loop body and jumps to the increment expression",
            "Restarts the loop from iteration 0",
            "Pauses execution for 1 second"
        ],
        answer: 1,
        explanation: "In a for loop, continue skips remaining statements in the body and jumps to the increment expression (i++), then re-evaluates the condition.",
        difficulty: "Easy",
        topic: "continue"
    },
    {
        id: "c-50",
        question: "What is the output of: int i; for(i=0; i<3; i++) { if(i==1) continue; printf(\"%d \", i); }?",
        options: [
            "0 1 2",
            "0 2",
            "0 1",
            "2"
        ],
        answer: 1,
        explanation: "When i==1, continue skips the printf. So only i=0 and i=2 are printed, giving \"0 2 \".",
        difficulty: "Easy",
        topic: "continue"
    },
    {
        id: "c-51",
        question: "What is the purpose of a function prototype in C?",
        options: [
            "Defines the function body",
            "Declares the function's return type, name, and parameters before use",
            "Allocates memory for the function",
            "Links the function to the operating system"
        ],
        answer: 1,
        explanation: "A function prototype (declaration) tells the compiler about a function's return type and parameter types before it's called, enabling type checking.",
        difficulty: "Easy",
        topic: "Function Prototypes"
    },
    {
        id: "c-52",
        question: "What is the default return type of a function in C if no type is specified?",
        options: [
            "void",
            "int",
            "char",
            "Compilation error in C99 and later"
        ],
        answer: 3,
        explanation: "In C89, omitting the return type defaults to int. In C99 and later, it's a compilation error — you must explicitly specify the return type.",
        difficulty: "Easy",
        topic: "Functions"
    },
    {
        id: "c-53",
        question: "What is recursion in C?",
        options: [
            "A loop that runs backwards",
            "A function calling itself directly or indirectly",
            "A function that returns a pointer",
            "A function with no return statement"
        ],
        answer: 1,
        explanation: "Recursion occurs when a function calls itself. Every recursive function needs a base case to terminate, otherwise it leads to infinite recursion and stack overflow.",
        difficulty: "Easy",
        topic: "Recursion"
    },
    {
        id: "c-54",
        question: "What happens if a recursive function has no base case?",
        options: [
            "Returns 0 automatically",
            "Loops forever without using stack",
            "Causes stack overflow due to infinite recursion",
            "Compiler detects and prevents it"
        ],
        answer: 2,
        explanation: "Without a base case, the function calls itself indefinitely. Each call pushes a new stack frame, eventually exhausting stack space and causing a stack overflow/crash.",
        difficulty: "Easy",
        topic: "Recursion"
    },
    {
        id: "c-55",
        question: "In call by value, what is passed to the function?",
        options: [
            "The address of the actual argument",
            "A copy of the actual argument's value",
            "A reference to the actual argument",
            "The pointer to the function itself"
        ],
        answer: 1,
        explanation: "Call by value copies the argument's value into the function's parameter. Changes to the parameter inside the function do not affect the original variable.",
        difficulty: "Easy",
        topic: "Call by Value"
    },
    {
        id: "c-56",
        question: "How can you modify a variable in the calling function from within a called function?",
        options: [
            "By declaring it as global",
            "By passing a pointer to the variable",
            "By using a larger data type",
            "By returning a new value and reassigning"
        ],
        answer: 1,
        explanation: "Passing a pointer (simulated call by reference) allows the called function to dereference the pointer and modify the original variable.",
        difficulty: "Easy",
        topic: "Call by Reference"
    },
    {
        id: "c-57",
        question: "What is the output of: int a[5] = {1, 2, 3}; printf(\"%d\", a[4]);?",
        options: [
            "3",
            "0",
            "Garbage value",
            "Compilation error"
        ],
        answer: 1,
        explanation: "When an array is partially initialized, remaining elements are automatically set to 0. So a[3]=0 and a[4]=0.",
        difficulty: "Easy",
        topic: "1D Arrays"
    },
    {
        id: "c-58",
        question: "What is the correct way to declare an array of 10 integers?",
        options: [
            "int array(10);",
            "int array[10];",
            "array int[10];",
            "int[10] array;"
        ],
        answer: 1,
        explanation: "In C, arrays are declared as type name[size]. int array[10] declares an array of 10 integers with indices 0 through 9.",
        difficulty: "Easy",
        topic: "1D Arrays"
    },
    {
        id: "c-59",
        question: "What is the index of the last element in an array declared as int arr[100];?",
        options: [
            "100",
            "99",
            "1",
            "0"
        ],
        answer: 1,
        explanation: "C arrays are zero-indexed. For an array of size 100, valid indices are 0 to 99.",
        difficulty: "Easy",
        topic: "1D Arrays"
    },
    {
        id: "c-60",
        question: "How do you access the element in row 2, column 3 of a 2D array arr?",
        options: [
            "arr[2,3]",
            "arr[2][3]",
            "arr(2)(3)",
            "arr[3][2]"
        ],
        answer: 1,
        explanation: "C uses zero-based indexing with separate bracket pairs for each dimension. arr[2][3] accesses row 2 (third row), column 3 (fourth column).",
        difficulty: "Easy",
        topic: "2D Arrays"
    },
    {
        id: "c-61",
        question: "What is the value of sizeof(arr) where arr is declared as int arr[10]; on a system where int is 4 bytes?",
        options: [
            "4",
            "10",
            "40",
            "8"
        ],
        answer: 2,
        explanation: "sizeof(arr) returns the total size of the array in bytes: 10 elements × 4 bytes each = 40 bytes.",
        difficulty: "Easy",
        topic: "1D Arrays"
    },
    {
        id: "c-62",
        question: "Which of the following correctly initializes a string in C?",
        options: [
            "char str[] = \"Hello\";",
            "char str[5] = \"Hello\";",
            "char str = \"Hello\";",
            "string str = \"Hello\";"
        ],
        answer: 0,
        explanation: "char str[] = \"Hello\" creates a 6-element array (5 chars + null terminator). Option B is wrong because \"Hello\" needs 6 bytes, not 5.",
        difficulty: "Easy",
        topic: "Strings"
    },
    {
        id: "c-63",
        question: "What is the null character in C?",
        options: [
            "'0'",
            "'\\\\0'",
            "'\\0'",
            "NULL"
        ],
        answer: 2,
        explanation: "'\\0' is the null character (ASCII 0) that terminates C strings. '0' is the digit zero (ASCII 48). NULL is a null pointer macro.",
        difficulty: "Easy",
        topic: "Strings"
    },
    {
        id: "c-64",
        question: "What does strlen(\"hello\") return?",
        options: [
            "5",
            "6",
            "4",
            "Undefined"
        ],
        answer: 0,
        explanation: "strlen returns the number of characters before the null terminator. \"hello\" has 5 characters, so strlen returns 5.",
        difficulty: "Easy",
        topic: "String Library Functions"
    },
    {
        id: "c-65",
        question: "What is the difference between strlen() and sizeof() for a string char str[] = \"test\";?",
        options: [
            "Both return 4",
            "strlen returns 4, sizeof returns 5",
            "strlen returns 5, sizeof returns 4",
            "Both return 5"
        ],
        answer: 1,
        explanation: "strlen counts characters before \\0, returning 4. sizeof returns the total array size including \\0, returning 5.",
        difficulty: "Easy",
        topic: "Strings"
    },
    {
        id: "c-66",
        question: "Which function is used to concatenate two strings in C?",
        options: [
            "strcpy",
            "strcat",
            "strcmp",
            "strncpy"
        ],
        answer: 1,
        explanation: "strcat(dest, src) appends a copy of src to the end of dest. The destination must have enough space for both strings plus the null terminator.",
        difficulty: "Easy",
        topic: "String Library Functions"
    },
    {
        id: "c-67",
        question: "What is a pointer in C?",
        options: [
            "A variable that stores a float value",
            "A variable that stores the memory address of another variable",
            "A reference type like in C++",
            "A type of array"
        ],
        answer: 1,
        explanation: "A pointer is a variable whose value is the memory address of another variable. Pointers are fundamental to C's low-level memory access capabilities.",
        difficulty: "Easy",
        topic: "Pointers"
    },
    {
        id: "c-68",
        question: "What operator is used to get the address of a variable?",
        options: [
            "*",
            "&",
            "->",
            "%"
        ],
        answer: 1,
        explanation: "The address-of operator & returns the memory address of its operand. For example, &x gives the address of variable x.",
        difficulty: "Easy",
        topic: "Pointers"
    },
    {
        id: "c-69",
        question: "What operator is used to dereference a pointer?",
        options: [
            "&",
            "->",
            "*",
            "#"
        ],
        answer: 2,
        explanation: "The dereference operator * accesses the value at the address stored in a pointer. If p points to x, then *p gives the value of x.",
        difficulty: "Easy",
        topic: "Pointers"
    },
    {
        id: "c-70",
        question: "What is the size of a pointer on a 64-bit system?",
        options: [
            "4 bytes",
            "8 bytes",
            "16 bytes",
            "Depends on the data type it points to"
        ],
        answer: 1,
        explanation: "On a 64-bit system, pointers are 8 bytes regardless of the pointed-to type. Pointer size depends on the architecture, not the data type.",
        difficulty: "Easy",
        topic: "Pointers"
    },
    {
        id: "c-71",
        question: "What is NULL in C?",
        options: [
            "0",
            "(void *)0",
            "A macro defined as a null pointer constant",
            "All of the above describe common implementations"
        ],
        answer: 3,
        explanation: "NULL is typically defined as ((void *)0) or simply 0. The C standard defines it as a null pointer constant. All descriptions are valid for common implementations.",
        difficulty: "Easy",
        topic: "NULL Pointer"
    },
    {
        id: "c-72",
        question: "What does malloc() return on failure?",
        options: [
            "0",
            "NULL",
            "-1",
            "A garbage pointer"
        ],
        answer: 1,
        explanation: "malloc returns NULL if it cannot allocate the requested memory. It's critical to check for NULL before using the returned pointer.",
        difficulty: "Easy",
        topic: "malloc"
    },
    {
        id: "c-73",
        question: "What is the difference between malloc and calloc?",
        options: [
            "malloc takes one argument; calloc takes two",
            "calloc initializes memory to zero; malloc does not",
            "Both A and B",
            "No difference"
        ],
        answer: 2,
        explanation: "malloc(size) allocates uninitialized memory. calloc(num, size) allocates num elements of given size and initializes all bytes to zero.",
        difficulty: "Easy",
        topic: "Dynamic Memory Allocation"
    },
    {
        id: "c-74",
        question: "Which header file is required for malloc and free?",
        options: [
            "stdio.h",
            "string.h",
            "stdlib.h",
            "memory.h"
        ],
        answer: 2,
        explanation: "stdlib.h declares malloc, calloc, realloc, and free. It also declares exit(), atoi(), and other utility functions.",
        difficulty: "Easy",
        topic: "Dynamic Memory Allocation"
    },
    {
        id: "c-75",
        question: "What happens if you free a pointer and then access it?",
        options: [
            "The value is automatically 0",
            "Compilation error",
            "Undefined behavior — dangling pointer",
            "The program terminates gracefully"
        ],
        answer: 2,
        explanation: "After free(), the memory may be reused by a subsequent allocation. Accessing freed memory is undefined behavior — this is called a dangling pointer.",
        difficulty: "Easy",
        topic: "Dangling Pointer"
    },
    {
        id: "c-76",
        question: "How do you access a member of a structure using a pointer?",
        options: [
            "ptr.member",
            "ptr->member",
            "*ptr.member",
            "ptr(*member)"
        ],
        answer: 1,
        explanation: "The -> operator dereferences the pointer and accesses the member in one step. ptr->member is equivalent to (*ptr).member.",
        difficulty: "Easy",
        topic: "Pointers to Structures"
    },
    {
        id: "c-77",
        question: "What is the output of: struct Point { int x; int y; }; printf(\"%lu\", sizeof(struct Point)); assuming int is 4 bytes?",
        options: [
            "4",
            "8",
            "6",
            "Undefined"
        ],
        answer: 1,
        explanation: "The struct has two int members (4 bytes each), totaling 8 bytes. No padding is needed here since both members have the same alignment requirement.",
        difficulty: "Easy",
        topic: "Structures"
    },
    {
        id: "c-78",
        question: "What is a union in C?",
        options: [
            "A collection of different data types stored at different memory locations",
            "A collection of different data types sharing the same memory location",
            "A type of structure with public members",
            "A way to combine two integers"
        ],
        answer: 1,
        explanation: "A union stores different data types at the same memory address. The size of a union is the size of its largest member, and only one member can be active at a time.",
        difficulty: "Easy",
        topic: "Unions"
    },
    {
        id: "c-79",
        question: "What is the size of: union Data { int i; float f; char c; }; assuming int=4, float=4, char=1?",
        options: [
            "9 bytes",
            "4 bytes",
            "5 bytes",
            "12 bytes"
        ],
        answer: 1,
        explanation: "A union's size equals the size of its largest member. Here, both int and float are 4 bytes (the largest), so the union is 4 bytes.",
        difficulty: "Easy",
        topic: "Unions"
    },
    {
        id: "c-80",
        question: "What does the typedef keyword do?",
        options: [
            "Defines a new variable",
            "Creates an alias for an existing data type",
            "Declares a function",
            "Allocates memory"
        ],
        answer: 1,
        explanation: "typedef creates a new name (alias) for an existing type. For example, typedef unsigned long uint64; makes uint64 an alias for unsigned long.",
        difficulty: "Easy",
        topic: "typedef"
    },
    {
        id: "c-81",
        question: "Which of the following correctly uses typedef for a struct?",
        options: [
            "typedef struct { int x; } Point;",
            "typedef struct Point { int x; };",
            "struct typedef { int x; } Point;",
            "typedef { struct int x; } Point;"
        ],
        answer: 0,
        explanation: "typedef struct { int x; } Point; creates an anonymous struct and aliases it as Point. This allows declaring variables as Point p; without the struct keyword.",
        difficulty: "Easy",
        topic: "typedef"
    },
    {
        id: "c-82",
        question: "Which function opens a file for reading in text mode?",
        options: [
            "fopen(\"file.txt\", \"r\");",
            "fopen(\"file.txt\", \"rb\");",
            "fopen(\"file.txt\", \"w\");",
            "open(\"file.txt\", READ);"
        ],
        answer: 0,
        explanation: "fopen with \"r\" mode opens a file for reading in text mode. \"rb\" is for binary reading, \"w\" is for writing.",
        difficulty: "Easy",
        topic: "fopen"
    },
    {
        id: "c-83",
        question: "What does fclose() do?",
        options: [
            "Deletes the file",
            "Flushes buffers and releases the file pointer resource",
            "Moves the file pointer to the beginning",
            "Copies the file"
        ],
        answer: 1,
        explanation: "fclose flushes any unwritten data, deallocates the FILE buffer, and closes the file descriptor. Always close files to prevent resource leaks.",
        difficulty: "Easy",
        topic: "fclose"
    },
    {
        id: "c-84",
        question: "Which function reads a line from a file safely?",
        options: [
            "fscanf(fp, \"%s\", buffer);",
            "fgets(buffer, size, fp);",
            "fread(buffer, 1, size, fp);",
            "getc(fp);"
        ],
        answer: 1,
        explanation: "fgets reads up to size-1 characters and appends a null terminator. It stops at newline or EOF, making it safer than fscanf for line reading.",
        difficulty: "Easy",
        topic: "fgets"
    },
    {
        id: "c-85",
        question: "What is the purpose of errno in C?",
        options: [
            "Counts the number of errors",
            "Stores error codes set by library functions on failure",
            "Is always 0 on success",
            "Both B and C"
        ],
        answer: 3,
        explanation: "errno is set by library functions to indicate error types. It is only meaningful after a function reports failure and is not automatically reset to 0 on success.",
        difficulty: "Easy",
        topic: "Error Handling"
    },
    {
        id: "c-86",
        question: "What does the %p format specifier print?",
        options: [
            "A percentage sign",
            "A pointer's address in an implementation-defined format",
            "A page number",
            "A process ID"
        ],
        answer: 1,
        explanation: "%p prints a pointer value (memory address) in an implementation-defined format, typically in hexadecimal with a 0x prefix.",
        difficulty: "Easy",
        topic: "printf"
    },
    {
        id: "c-87",
        question: "What is the value of EOF?",
        options: [
            "0",
            "-1",
            "255",
            "It is implementation-defined but always negative"
        ],
        answer: 3,
        explanation: "EOF is defined in stdio.h as a negative integer constant, typically -1. It is distinct from any valid character value to signal end-of-file.",
        difficulty: "Easy",
        topic: "Input & Output"
    },
    {
        id: "c-88",
        question: "Which of the following is a correct way to pass command line arguments?",
        options: [
            "int main()",
            "int main(int argc)",
            "int main(int argc, char *argv[])",
            "int main(char argv)"
        ],
        answer: 2,
        explanation: "argc holds the count of arguments (including program name), and argv is an array of strings. This is the standard signature for command-line argument processing.",
        difficulty: "Easy",
        topic: "Command Line Arguments"
    },
    {
        id: "c-89",
        question: "What does argv[0] typically contain?",
        options: [
            "The first command line argument",
            "The name of the program",
            "NULL",
            "The number of arguments"
        ],
        answer: 1,
        explanation: "argv[0] is the program name as it was invoked. argv[1] through argv[argc-1] are the actual command-line arguments.",
        difficulty: "Easy",
        topic: "Command Line Arguments"
    },
    {
        id: "c-90",
        question: "What does the goto statement do?",
        options: [
            "Exits the program",
            "Jumps to a labeled statement within the same function",
            "Calls another function",
            "Returns to the previous function"
        ],
        answer: 1,
        explanation: "goto transfers control to a labeled statement within the same function. Its use is generally discouraged (except for error cleanup) as it makes code hard to follow.",
        difficulty: "Easy",
        topic: "goto"
    },
    {
        id: "c-91",
        question: "Which bitwise operator is used to set a specific bit to 1?",
        options: [
            "& (AND)",
            "| (OR)",
            "^ (XOR)",
            "~ (NOT)"
        ],
        answer: 1,
        explanation: "OR (|) with a 1 sets the bit to 1 regardless of its current value. AND clears bits, XOR toggles bits, NOT inverts all bits.",
        difficulty: "Easy",
        topic: "Bitwise Operators"
    },
    {
        id: "c-92",
        question: "What is the result of 5 & 3?",
        options: [
            "7",
            "1",
            "6",
            "2"
        ],
        answer: 1,
        explanation: "5 = 101, 3 = 011. Bitwise AND: 101 & 011 = 001 = 1.",
        difficulty: "Easy",
        topic: "Bitwise Operators"
    },
    {
        id: "c-93",
        question: "What is the result of 5 | 3?",
        options: [
            "1",
            "2",
            "7",
            "8"
        ],
        answer: 2,
        explanation: "5 = 101, 3 = 011. Bitwise OR: 101 | 011 = 111 = 7.",
        difficulty: "Easy",
        topic: "Bitwise Operators"
    },
    {
        id: "c-94",
        question: "What is the result of ~0 (bitwise NOT of zero) for a 32-bit int?",
        options: [
            "1",
            "-1",
            "0xFFFFFFFF",
            "Both B and C are correct representations"
        ],
        answer: 3,
        explanation: "~0 inverts all 32 bits to 1s, giving 0xFFFFFFFF. In two's complement, this represents -1 for a signed int. Both descriptions are correct.",
        difficulty: "Easy",
        topic: "Bitwise Operators"
    },
    {
        id: "c-95",
        question: "Which of the following is NOT a valid way to initialize a pointer?",
        options: [
            "int *p = NULL;",
            "int *p = &x;",
            "int *p = 0;",
            "int *p = 1;"
        ],
        answer: 3,
        explanation: "Initializing a pointer to 1 is technically valid C but assigns an invalid address (0x1), making it a wild pointer. It won't cause a compile error but is dangerous.",
        difficulty: "Easy",
        topic: "Pointers"
    },
    {
        id: "c-96",
        question: "What is an enumeration in C?",
        options: [
            "A collection of floating-point constants",
            "A user-defined data type consisting of named integer constants",
            "A type of array",
            "A way to enumerate array elements"
        ],
        answer: 1,
        explanation: "enum creates a type with named integer constants. By default, the first constant is 0 and each subsequent one increments by 1.",
        difficulty: "Easy",
        topic: "Enumerations"
    },
    {
        id: "c-97",
        question: "What is the output of: enum Color { RED, GREEN, BLUE }; printf(\"%d\", GREEN);?",
        options: [
            "GREEN",
            "1",
            "2",
            "Compilation error"
        ],
        answer: 1,
        explanation: "Enumeration constants are integers. RED=0, GREEN=1, BLUE=2 by default. printf with %d prints the integer value 1.",
        difficulty: "Easy",
        topic: "Enumerations"
    },
    {
        id: "c-98",
        question: "What is the output of: int x = 10; int y = (x++, x+1); printf(\"%d\", y);?",
        options: [
            "10",
            "11",
            "12",
            "Undefined behavior"
        ],
        answer: 2,
        explanation: "The comma operator evaluates left to right. x++ makes x=11 (post-increment), then x+1 = 12. The result of the comma expression is the rightmost value, 12.",
        difficulty: "Easy",
        topic: "Expressions"
    },
    {
        id: "c-99",
        question: "What does the sizeof operator return?",
        options: [
            "Number of elements",
            "Size in bits",
            "Size in bytes (as size_t)",
            "Size in kilobytes"
        ],
        answer: 2,
        explanation: "sizeof returns the size of its operand in bytes, with type size_t (an unsigned integer type defined in stddef.h).",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "c-100",
        question: "What is the output of: int a = 10, b = 20; a = a ^ b; b = a ^ b; a = a ^ b; printf(\"%d %d\", a, b);?",
        options: [
            "10 20",
            "20 10",
            "0 0",
            "30 30"
        ],
        answer: 1,
        explanation: "This is the XOR swap algorithm. After the three XOR operations, a and b are swapped without a temporary variable: a=20, b=10.",
        difficulty: "Easy",
        topic: "Bitwise Operators"
    },
    {
        id: "c-101",
        question: "What is the output of: printf(\"%d\", 1 < 2 < 3);?",
        options: [
            "1",
            "0",
            "3",
            "Compilation error"
        ],
        answer: 0,
        explanation: "Evaluated left-to-right: (1 < 2) is true (1), then (1 < 3) is true (1). The result is 1, not 3. This is a common interview trick question.",
        difficulty: "Medium",
        topic: "Operator Precedence"
    },
    {
        id: "c-102",
        question: "What is the output of: printf(\"%d\", 3 > 2 > 1);?",
        options: [
            "1",
            "0",
            "3",
            "2"
        ],
        answer: 1,
        explanation: "(3 > 2) gives 1 (true), then (1 > 1) gives 0 (false). Relational operators associate left-to-right, unlike mathematical notation.",
        difficulty: "Medium",
        topic: "Operator Precedence"
    },
    {
        id: "c-103",
        question: "What is the output of: int i = 1; i = i++ + ++i; printf(\"%d\", i);?",
        options: [
            "4",
            "3",
            "5",
            "Undefined behavior"
        ],
        answer: 3,
        explanation: "Modifying i twice between sequence points (i++ and ++i in the same expression) is undefined behavior per the C standard.",
        difficulty: "Medium",
        topic: "Undefined Behavior"
    },
    {
        id: "c-104",
        question: "What is the output of: char c = 'A'; printf(\"%d %c\", c, c);?",
        options: [
            "A A",
            "65 65",
            "65 A",
            "Compilation error"
        ],
        answer: 2,
        explanation: "With %d, the char is promoted to int and prints its ASCII value (65). With %c, it prints the character 'A'.",
        difficulty: "Easy",
        topic: "printf"
    },
    {
        id: "c-105",
        question: "Which of the following is true about the ternary operator?",
        options: [
            "It requires four operands",
            "It cannot be nested",
            "It is the only operator that takes three operands",
            "It always returns a boolean"
        ],
        answer: 2,
        explanation: "The ternary operator (?:) is C's only operator that takes three operands: condition ? expr1 : expr2. It can be nested, though readability suffers.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "c-106",
        question: "What is the output of: int x = 5; printf(\"%d %d %d\", x, x<<1, x>>1);?",
        options: [
            "5 10 2",
            "5 10 3",
            "5 25 2",
            "5 10 1"
        ],
        answer: 0,
        explanation: "x<<1 (left shift by 1) multiplies by 2: 5×2=10. x>>1 (right shift by 1) divides by 2 (floor): 5/2=2.",
        difficulty: "Easy",
        topic: "Bitwise Operators"
    },
    {
        id: "c-107",
        question: "What is the output of: int arr[] = {10, 20, 30, 40}; printf(\"%d\", *arr);?",
        options: [
            "Address of arr[0]",
            "10",
            "Compilation error",
            "Segmentation fault"
        ],
        answer: 1,
        explanation: "arr decays to a pointer to its first element. *arr dereferences it, giving the value of arr[0], which is 10.",
        difficulty: "Easy",
        topic: "Pointers & Arrays"
    },
    {
        id: "c-108",
        question: "What is the output of: int arr[] = {1, 2, 3}; printf(\"%d\", *(arr + 2));?",
        options: [
            "1",
            "2",
            "3",
            "Address of arr[2]"
        ],
        answer: 2,
        explanation: "arr+2 points to arr[2]. Dereferencing with * gives the value 3. This is equivalent to arr[2].",
        difficulty: "Easy",
        topic: "Pointer Arithmetic"
    },
    {
        id: "c-109",
        question: "What is a dangling pointer?",
        options: [
            "A pointer that was never initialized",
            "A pointer pointing to memory that has been freed or deallocated",
            "A pointer to NULL",
            "A pointer that points to a const variable"
        ],
        answer: 1,
        explanation: "A dangling pointer points to memory that has been freed or is out of scope. Dereferencing it leads to undefined behavior.",
        difficulty: "Easy",
        topic: "Dangling Pointer"
    },
    {
        id: "c-110",
        question: "What is a memory leak in C?",
        options: [
            "Accessing memory out of bounds",
            "Allocating memory with malloc but never freeing it",
            "Using a pointer after it's freed",
            "Stack overflow"
        ],
        answer: 1,
        explanation: "A memory leak occurs when dynamically allocated memory is no longer reachable (no pointer references it) but hasn't been freed, making it unavailable for reuse.",
        difficulty: "Easy",
        topic: "Memory Leak"
    },
    {
        id: "c-111",
        question: "What is the output of: int *p; printf(\"%d\", *p);?",
        options: [
            "0",
            "NULL",
            "Undefined behavior",
            "Compilation error"
        ],
        answer: 2,
        explanation: "p is an uninitialized (wild) pointer. Dereferencing it is undefined behavior — it could print garbage, crash, or anything else.",
        difficulty: "Easy",
        topic: "Wild Pointer"
    },
    {
        id: "c-112",
        question: "Which of the following is true about static global variables?",
        options: [
            "They are stored on the heap",
            "They have internal linkage — visible only within the translation unit",
            "They are reinitialized every time the function is called",
            "They cannot be initialized"
        ],
        answer: 1,
        explanation: "A static global variable has internal linkage, meaning it cannot be accessed from other translation units (files) via extern. It's stored in the data/BSS segment.",
        difficulty: "Easy",
        topic: "Static Variables"
    },
    {
        id: "c-113",
        question: "What is the output of: int x = -1; if (x > 0U) printf(\"Yes\"); else printf(\"No\");?",
        options: [
            "Yes",
            "No",
            "Compilation error",
            "Undefined behavior"
        ],
        answer: 0,
        explanation: "When comparing signed int with unsigned int, the signed value is implicitly converted to unsigned. -1 becomes UINT_MAX (a very large positive number), so the condition is true.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "c-114",
        question: "What is the output of: unsigned int a = 1; signed int b = -1; if (a > b) printf(\"a > b\"); else printf(\"a <= b\");?",
        options: [
            "a > b",
            "a <= b",
            "Compilation error",
            "Undefined behavior"
        ],
        answer: 1,
        explanation: "In the comparison, b (-1) is converted to unsigned, becoming UINT_MAX. So a (1) < UINT_MAX, printing \"a <= b\". This is a common implicit conversion trap.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "c-115",
        question: "What does the volatile keyword do?",
        options: [
            "Makes a variable constant",
            "Prevents the compiler from optimizing accesses to the variable",
            "Makes a variable global",
            "Allocates the variable on the heap"
        ],
        answer: 1,
        explanation: "volatile tells the compiler that the variable's value may change at any time (e.g., memory-mapped I/O, signal handlers), so it must not cache or reorder accesses.",
        difficulty: "Medium",
        topic: "volatile"
    },
    {
        id: "c-116",
        question: "In which scenario is volatile most commonly used in embedded systems?",
        options: [
            "For loop counter variables",
            "For memory-mapped hardware registers",
            "For function parameters",
            "For string constants"
        ],
        answer: 1,
        explanation: "Hardware registers can change value without CPU intervention (e.g., status register updated by hardware). volatile ensures the compiler reads the actual register each time.",
        difficulty: "Medium",
        topic: "Embedded C Concepts"
    },
    {
        id: "c-117",
        question: "What is the output of: int a = 5; int b = a++ + ++a; printf(\"%d\", b);?",
        options: [
            "11",
            "12",
            "13",
            "Undefined behavior"
        ],
        answer: 3,
        explanation: "Both a++ and ++a modify a in the same expression without a sequence point between them. This is undefined behavior in C.",
        difficulty: "Medium",
        topic: "Undefined Behavior"
    },
    {
        id: "c-118",
        question: "What is the output of: int arr[5]; printf(\"%d %d\", sizeof(arr), sizeof(arr+0));?",
        options: [
            "20 20",
            "20 8",
            "20 4",
            "Compilation error"
        ],
        answer: 1,
        explanation: "sizeof(arr) gives the full array size (5×4=20 bytes). arr+0 decays to a pointer, so sizeof(arr+0) gives the pointer size (8 bytes on 64-bit).",
        difficulty: "Medium",
        topic: "Pointers & Arrays"
    },
    {
        id: "c-119",
        question: "What is the output of: int a[3][3] = {{1,2,3},{4,5,6},{7,8,9}}; printf(\"%d\", *(*(a+1)+2));?",
        options: [
            "3",
            "5",
            "6",
            "9"
        ],
        answer: 2,
        explanation: "a+1 points to row 1. *(a+1) is the address of a[1][0]. *(a+1)+2 points to a[1][2]. Dereferencing gives a[1][2] = 6.",
        difficulty: "Medium",
        topic: "Multi-dimensional Arrays"
    },
    {
        id: "c-120",
        question: "What is the output of: char *s = \"hello\"; s[0] = 'H'; printf(\"%s\", s);?",
        options: [
            "Hello",
            "hello",
            "Segmentation fault",
            "Compilation error"
        ],
        answer: 2,
        explanation: "String literals are stored in read-only memory. Modifying them causes undefined behavior, typically a segmentation fault.",
        difficulty: "Medium",
        topic: "Character Arrays"
    },
    {
        id: "c-121",
        question: "What is the correct way to make a modifiable copy of a string literal?",
        options: [
            "char *s = \"hello\"; s[0] = 'H';",
            "char s[] = \"hello\"; s[0] = 'H';",
            "const char *s = \"hello\"; s[0] = 'H';",
            "char *s = malloc(\"hello\"); s[0] = 'H';"
        ],
        answer: 1,
        explanation: "char s[] = \"hello\" creates an array on the stack initialized with a copy of the literal. This array is modifiable. String literals themselves are read-only.",
        difficulty: "Medium",
        topic: "Character Arrays"
    },
    {
        id: "c-122",
        question: "What is the output of: char str1[] = \"abc\"; char str2[] = \"abc\"; printf(\"%d\", str1 == str2);?",
        options: [
            "1",
            "0",
            "Compilation error",
            "Undefined"
        ],
        answer: 1,
        explanation: "str1 and str2 are separate arrays. When used in an expression, they decay to pointers to their first elements. These are different addresses, so == returns 0.",
        difficulty: "Medium",
        topic: "Strings"
    },
    {
        id: "c-123",
        question: "What is the output of: char *s1 = \"abc\"; char *s2 = \"abc\"; printf(\"%d\", s1 == s2);?",
        options: [
            "Always 0",
            "Always 1",
            "Implementation-defined (may be 0 or 1)",
            "Compilation error"
        ],
        answer: 2,
        explanation: "The compiler may or may not merge identical string literals. If merged, s1 and s2 point to the same address (1). If not, different addresses (0). This is implementation-defined.",
        difficulty: "Medium",
        topic: "Strings"
    },
    {
        id: "c-124",
        question: "What does the const qualifier mean when applied to a pointer: const int *p;?",
        options: [
            "The pointer itself is constant",
            "The value pointed to is constant (read-only through this pointer)",
            "Both the pointer and the value are constant",
            "The pointer cannot be dereferenced"
        ],
        answer: 1,
        explanation: "const int *p means p points to a const int — you cannot modify *p through p. But p itself can be changed to point elsewhere. Contrast with int * const p.",
        difficulty: "Medium",
        topic: "const"
    },
    {
        id: "c-125",
        question: "What does int * const p mean?",
        options: [
            "The value pointed to is constant",
            "The pointer itself is constant (cannot point to a different address)",
            "Both the pointer and value are constant",
            "p is a constant integer"
        ],
        answer: 1,
        explanation: "int * const p means p is a constant pointer to int. You can modify *p, but you cannot change where p points. const is to the right of *.",
        difficulty: "Medium",
        topic: "const"
    },
    {
        id: "c-126",
        question: "What does const int * const p mean?",
        options: [
            "Only the pointer is constant",
            "Only the value is constant",
            "Both the pointer and the pointed value are constant",
            "Neither is constant"
        ],
        answer: 2,
        explanation: "The first const makes the pointed-to value read-only. The second const (after *) makes the pointer itself immutable. Neither *p nor p can be modified.",
        difficulty: "Medium",
        topic: "const"
    },
    {
        id: "c-127",
        question: "What is the output of: int x = 10; const int *p = &x; *p = 20; printf(\"%d\", x);?",
        options: [
            "10",
            "20",
            "Compilation error",
            "Undefined behavior"
        ],
        answer: 2,
        explanation: "p is a pointer to const int. Attempting to modify *p is a compilation error. The const qualifier prevents writes through this pointer.",
        difficulty: "Medium",
        topic: "const"
    },
    {
        id: "c-128",
        question: "What is the output of: int x = 10; int * const p = &x; x = 20; printf(\"%d %d\", x, *p);?",
        options: [
            "10 10",
            "20 20",
            "20 10",
            "Compilation error"
        ],
        answer: 1,
        explanation: "int * const p means the pointer is constant, not the value. x can still be modified directly, and *p reflects the change since p points to x.",
        difficulty: "Medium",
        topic: "const"
    },
    {
        id: "c-129",
        question: "What is structure padding?",
        options: [
            "Adding extra bytes to align struct members to memory boundaries",
            "Adding extra elements to the struct",
            "Compressing struct members",
            "Aligning the struct on the stack"
        ],
        answer: 0,
        explanation: "Compilers insert padding bytes between struct members (and at the end) to satisfy alignment requirements, improving access speed at the cost of increased size.",
        difficulty: "Medium",
        topic: "Structures"
    },
    {
        id: "c-130",
        question: "What is the size of: struct S { char c; int i; char d; }; on a 32-bit system with 4-byte int alignment?",
        options: [
            "6 bytes",
            "8 bytes",
            "12 bytes",
            "16 bytes"
        ],
        answer: 2,
        explanation: "Layout: c(1) + 3 padding + i(4) + d(1) + 3 padding = 12 bytes. Padding after c aligns i to a 4-byte boundary; trailing padding aligns the struct for array access.",
        difficulty: "Medium",
        topic: "Structures"
    },
    {
        id: "c-131",
        question: "How can you minimize structure padding?",
        options: [
            "Use #pragma pack(1)",
            "Sort members by decreasing size",
            "Both A and B are valid approaches",
            "Padding cannot be minimized"
        ],
        answer: 2,
        explanation: "#pragma pack(1) removes all padding. Reordering members by decreasing size (largest first) can also reduce padding. Both are valid but have trade-offs: packing may slow access.",
        difficulty: "Medium",
        topic: "Structures"
    },
    {
        id: "c-132",
        question: "What is the output of: struct S { int a; char b; }; struct S s = {.b = 'X', .a = 42}; printf(\"%d %c\", s.a, s.b);?",
        options: [
            "0 X",
            "42 X",
            "Compilation error",
            "Undefined"
        ],
        answer: 1,
        explanation: "C99 designated initializers allow initializing members in any order. .b='X' and .a=42 correctly set the members regardless of declaration order.",
        difficulty: "Medium",
        topic: "Structures"
    },
    {
        id: "c-133",
        question: "Can you assign one struct to another directly in C?",
        options: [
            "No, you must copy member by member",
            "Yes, struct assignment copies all members",
            "Only if they have the same member names",
            "Only with memcpy"
        ],
        answer: 1,
        explanation: "C allows direct struct assignment (s1 = s2;), which copies all members. This is a member-wise copy, equivalent to memcpy for simple structs.",
        difficulty: "Medium",
        topic: "Structures"
    },
    {
        id: "c-134",
        question: "What is the output of: union U { int i; float f; }; union U u; u.i = 10; printf(\"%f\", u.f);?",
        options: [
            "10.0",
            "10.000000",
            "A garbage/undefined float value",
            "0.0"
        ],
        answer: 2,
        explanation: "Since union members share memory, writing to u.i and reading u.f reinterprets the int's bit pattern as a float. The result is not 10.0 but an implementation-specific value.",
        difficulty: "Medium",
        topic: "Unions"
    },
    {
        id: "c-135",
        question: "What is a common use case for unions in systems programming?",
        options: [
            "Storing multiple values simultaneously",
            "Type punning — interpreting the same bytes as different types",
            "Creating linked lists",
            "Defining class hierarchies"
        ],
        answer: 1,
        explanation: "Unions are commonly used for type punning (e.g., accessing individual bytes of a float) and in tagged unions where a discriminator field indicates which member is active.",
        difficulty: "Medium",
        topic: "Unions"
    },
    {
        id: "c-136",
        question: "What is the output of: int *p = malloc(sizeof(int) * 5); free(p); free(p);?",
        options: [
            "No problem",
            "Double free — undefined behavior",
            "Compilation error",
            "The second free is silently ignored"
        ],
        answer: 1,
        explanation: "Calling free() twice on the same pointer is a double free, which is undefined behavior. It can corrupt the heap allocator's internal data structures.",
        difficulty: "Medium",
        topic: "Memory Management"
    },
    {
        id: "c-137",
        question: "What does realloc(ptr, new_size) do when new_size is larger than the original allocation?",
        options: [
            "Always extends in place",
            "May allocate new memory, copy old data, and free the old block",
            "Always returns NULL",
            "Truncates the data"
        ],
        answer: 1,
        explanation: "realloc may extend the block in place if possible. If not, it allocates a new block, copies the old data (up to the smaller of old/new size), frees the old block, and returns the new pointer.",
        difficulty: "Medium",
        topic: "realloc"
    },
    {
        id: "c-138",
        question: "Why should you not assign the result of realloc directly back to the original pointer?",
        options: [
            "It causes a compilation error",
            "If realloc fails and returns NULL, the original pointer is lost causing a memory leak",
            "realloc always succeeds",
            "It creates a dangling pointer"
        ],
        answer: 1,
        explanation: "If realloc fails, it returns NULL but does not free the original block. Doing ptr = realloc(ptr, size); loses the original pointer, leaking memory. Use a temporary variable.",
        difficulty: "Medium",
        topic: "realloc"
    },
    {
        id: "c-139",
        question: "What is the output of: int *p = (int *)malloc(0); if (p == NULL) printf(\"NULL\"); else printf(\"Not NULL\");?",
        options: [
            "Always \"NULL\"",
            "Always \"Not NULL\"",
            "Implementation-defined — malloc(0) may return NULL or a unique pointer",
            "Compilation error"
        ],
        answer: 2,
        explanation: "The C standard says malloc(0) may return NULL or a unique non-NULL pointer that cannot be dereferenced. The behavior is implementation-defined.",
        difficulty: "Medium",
        topic: "malloc"
    },
    {
        id: "c-140",
        question: "What is the output of: int a = 0x11223344; char *p = (char *)&a; printf(\"%x\", *p); on a little-endian system?",
        options: [
            "11",
            "44",
            "1122",
            "3344"
        ],
        answer: 1,
        explanation: "On a little-endian system, the least significant byte (0x44) is stored at the lowest address. So *(char *)&a gives 0x44.",
        difficulty: "Medium",
        topic: "Endianess"
    },
    {
        id: "c-141",
        question: "What is the output of: int a = 0x11223344; char *p = (char *)&a; printf(\"%x\", *p); on a big-endian system?",
        options: [
            "11",
            "44",
            "1122",
            "3344"
        ],
        answer: 0,
        explanation: "On a big-endian system, the most significant byte (0x11) is stored at the lowest address. So *(char *)&a gives 0x11.",
        difficulty: "Medium",
        topic: "Endianess"
    },
    {
        id: "c-142",
        question: "Which of the following correctly detects the system's endianness at runtime?",
        options: [
            "Check sizeof(int)",
            "Use a union of int and char, store 1, check the char member",
            "Check if the system is 64-bit",
            "Use the endian.h header only"
        ],
        answer: 1,
        explanation: "Store 1 in an int via a union, then check the first byte as char. If it's 1, the system is little-endian; if 0, it's big-endian.",
        difficulty: "Medium",
        topic: "Endianess"
    },
    {
        id: "c-143",
        question: "What is a function pointer?",
        options: [
            "A pointer that points to the first line of a function's code",
            "A variable that stores the address of a function",
            "A function that returns a pointer",
            "A pointer to a function's return value"
        ],
        answer: 1,
        explanation: "A function pointer stores the address of a function, allowing the function to be called indirectly. It's the basis for callbacks and dynamic dispatch in C.",
        difficulty: "Medium",
        topic: "Function Pointers"
    },
    {
        id: "c-144",
        question: "What is the correct declaration of a pointer to a function that takes two ints and returns an int?",
        options: [
            "int *func(int, int);",
            "int (*func)(int, int);",
            "int (*func)(int, int)();",
            "int *func(int, int)();"
        ],
        answer: 1,
        explanation: "int (*func)(int, int) declares func as a pointer to a function taking two int parameters and returning int. Parentheses around *func are essential.",
        difficulty: "Medium",
        topic: "Function Pointers"
    },
    {
        id: "c-145",
        question: "What is the output of: void f(int **p) { *p = (int *)malloc(sizeof(int)); **p = 42; } int main() { int *q = NULL; f(&q); printf(\"%d\", *q); return 0; }?",
        options: [
            "0",
            "42",
            "Segmentation fault",
            "Compilation error"
        ],
        answer: 1,
        explanation: "f receives a pointer to q. It allocates memory, assigns the address to *p (which is q), then writes 42 to **p. Back in main, *q correctly reads 42.",
        difficulty: "Medium",
        topic: "Pointer to Pointer"
    },
    {
        id: "c-146",
        question: "What is the output of: int a[3] = {1, 2, 3}; int *p = a; int *q = p + 3; printf(\"%d\", q - p);?",
        options: [
            "12",
            "3",
            "Undefined behavior",
            "Compilation error"
        ],
        answer: 1,
        explanation: "Pointer subtraction gives the number of elements between the two pointers, not the byte difference. q-p = 3, even though the byte difference is 12.",
        difficulty: "Medium",
        topic: "Pointer Arithmetic"
    },
    {
        id: "c-147",
        question: "What is the output of: int arr[] = {10, 20, 30}; int *p = arr; printf(\"%d\", *p++); printf(\" %d\", *p);?",
        options: [
            "10 10",
            "10 20",
            "20 20",
            "11 12"
        ],
        answer: 1,
        explanation: "*p++ dereferences p (gets 10) then increments p. The second printf prints *p which now points to arr[1] = 20.",
        difficulty: "Medium",
        topic: "Pointer Arithmetic"
    },
    {
        id: "c-148",
        question: "What is the output of: int arr[] = {10, 20, 30}; int *p = arr; printf(\"%d\", *++p);?",
        options: [
            "10",
            "20",
            "11",
            "Compilation error"
        ],
        answer: 1,
        explanation: "++p increments p first (now pointing to arr[1]), then * dereferences it, giving 20. This differs from *p++ which dereferences first.",
        difficulty: "Medium",
        topic: "Pointer Arithmetic"
    },
    {
        id: "c-149",
        question: "What is the output of: int a = 5; int b = a >> 31; printf(\"%d\", b); assuming int is 32-bit?",
        options: [
            "5",
            "0",
            "-1",
            "1"
        ],
        answer: 1,
        explanation: "5 in binary is 0x00000005. Right-shifting by 31 gives 0x00000000 = 0. For negative numbers, right shift of a signed negative is implementation-defined but typically arithmetic (fills with 1s).",
        difficulty: "Medium",
        topic: "Bit Manipulation"
    },
    {
        id: "c-150",
        question: "How do you check if bit 3 (0-indexed) of an integer x is set?",
        options: [
            "x & 3",
            "x & (1 << 3)",
            "x | (1 << 3)",
            "x >> 3"
        ],
        answer: 1,
        explanation: "1 << 3 creates a mask with only bit 3 set (0x08). x & (1<<3) is non-zero if bit 3 is set, zero if not.",
        difficulty: "Medium",
        topic: "Bit Manipulation"
    },
    {
        id: "c-151",
        question: "How do you toggle bit 5 of an integer x?",
        options: [
            "x = x & (1 << 5)",
            "x = x | (1 << 5)",
            "x = x ^ (1 << 5)",
            "x = x ~ (1 << 5)"
        ],
        answer: 2,
        explanation: "XOR with a mask toggles (flips) the bits where the mask is 1. x ^ (1<<5) flips bit 5: if it was 0 it becomes 1, if 1 it becomes 0.",
        difficulty: "Medium",
        topic: "Bit Manipulation"
    },
    {
        id: "c-152",
        question: "How do you clear (set to 0) bit 2 of an integer x?",
        options: [
            "x = x | (1 << 2)",
            "x = x & ~(1 << 2)",
            "x = x ^ (1 << 2)",
            "x = x >> 2"
        ],
        answer: 1,
        explanation: "~(1<<2) creates a mask with all bits set except bit 2. ANDing with this mask preserves all other bits but clears bit 2.",
        difficulty: "Medium",
        topic: "Bit Manipulation"
    },
    {
        id: "c-153",
        question: "What is the output of: int x = 0xFF; x = x & 0x0F; printf(\"%x\", x);?",
        options: [
            "FF",
            "F0",
            "0F",
            "00"
        ],
        answer: 2,
        explanation: "0xFF & 0x0F = 0x0F. The AND operation keeps only the lower 4 bits (nibble) and clears the upper 4 bits.",
        difficulty: "Medium",
        topic: "Bit Manipulation"
    },
    {
        id: "c-154",
        question: "What is the output of: printf(\"%d\", (int)3.14);?",
        options: [
            "3.14",
            "3",
            "4",
            "0"
        ],
        answer: 1,
        explanation: "Casting a double to int truncates toward zero. (int)3.14 gives 3, not 3.14 or 4. This is truncation, not rounding.",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "c-155",
        question: "What is the output of: int i; for(i = 0; i++ < 3; ); printf(\"%d\", i);?",
        options: [
            "2",
            "3",
            "4",
            "0"
        ],
        answer: 2,
        explanation: "The condition i++ < 3 uses post-increment: compare then increment. Loop runs for i=0(true),1(true),2(true),3(false). After exit, i=4.",
        difficulty: "Medium",
        topic: "for"
    },
    {
        id: "c-156",
        question: "What is the output of: int x = 1; if (x = 0) printf(\"Zero\"); else printf(\"Non-zero\");?",
        options: [
            "Zero",
            "Non-zero",
            "Compilation error",
            "Undefined behavior"
        ],
        answer: 1,
        explanation: "x = 0 is assignment (not comparison). It assigns 0 to x and evaluates to 0 (false), so the else branch executes. This is a common bug disguised as == vs = confusion.",
        difficulty: "Medium",
        topic: "if"
    },
    {
        id: "c-157",
        question: "What is the output of: int x = 5; printf(\"%d %d %d\", x, x = x + 1, x);?",
        options: [
            "5 6 6",
            "6 6 6",
            "5 6 5",
            "Undefined behavior"
        ],
        answer: 3,
        explanation: "The order of evaluation of function arguments is unspecified in C. x is modified (x = x+1) and read (x) without a sequence point, making this undefined behavior.",
        difficulty: "Medium",
        topic: "Undefined Behavior"
    },
    {
        id: "c-158",
        question: "What is the output of: int a[] = {1, 2, 3, 4, 5}; int *p = &a[2]; printf(\"%d %d\", p[-1], p[1]);?",
        options: [
            "1 3",
            "2 4",
            "3 3",
            "Compilation error"
        ],
        answer: 1,
        explanation: "p points to a[2]. p[-1] is equivalent to *(p-1) = a[1] = 2. p[1] is *(p+1) = a[3] = 4. Negative indices are valid in pointer arithmetic.",
        difficulty: "Medium",
        topic: "Pointer Arithmetic"
    },
    {
        id: "c-159",
        question: "What is the output of: void foo(int arr[10]) { printf(\"%lu\", sizeof(arr)); } int main() { int a[10]; foo(a); } on a 64-bit system?",
        options: [
            "40",
            "8",
            "10",
            "4"
        ],
        answer: 1,
        explanation: "When an array is passed to a function, it decays to a pointer. The parameter int arr[10] is treated as int *arr. sizeof(arr) inside foo gives the pointer size (8 bytes on 64-bit).",
        difficulty: "Medium",
        topic: "Arrays"
    },
    {
        id: "c-160",
        question: "What is the output of: int arr[2][3] = {{1,2,3},{4,5,6}}; printf(\"%d\", arr[1][2] + arr[0][0]);?",
        options: [
            "5",
            "7",
            "10",
            "11"
        ],
        answer: 1,
        explanation: "arr[1][2] = 6, arr[0][0] = 1. 6 + 1 = 7.",
        difficulty: "Easy",
        topic: "2D Arrays"
    },
    {
        id: "c-161",
        question: "How many bytes does: struct { char a; char b; int c; } require on a 32-bit system with natural alignment?",
        options: [
            "6",
            "8",
            "12",
            "4"
        ],
        answer: 1,
        explanation: "a(1) + b(1) + 2 padding + c(4) = 8 bytes. The two chars are packed together, then 2 bytes of padding aligns c to a 4-byte boundary.",
        difficulty: "Medium",
        topic: "Structures"
    },
    {
        id: "c-162",
        question: "What is the output of: #define SQUARE(x) x*x printf(\"%d\", SQUARE(3+2));?",
        options: [
            "25",
            "11",
            "13",
            "Compilation error"
        ],
        answer: 1,
        explanation: "Macros are text substitution. SQUARE(3+2) expands to 3+2*3+2 = 3+6+2 = 11, not (3+2)*(3+2) = 25. Always parenthesize macro parameters: (x)*(x).",
        difficulty: "Medium",
        topic: "Macros"
    },
    {
        id: "c-163",
        question: "What is the output of: #define MAX(a,b) ((a)>(b)?(a):(b)) printf(\"%d\", MAX(3, MAX(2, 1)));?",
        options: [
            "1",
            "2",
            "3",
            "Compilation error"
        ],
        answer: 2,
        explanation: "Inner MAX(2,1) = 3 (actually expands correctly with parentheses). Then MAX(3, 3) = 3. The parentheses in the macro definition prevent expansion issues.",
        difficulty: "Medium",
        topic: "Macros"
    },
    {
        id: "c-164",
        question: "What is the output of: #define ADD(a, b) a + b printf(\"%d\", ADD(1, 2) * ADD(3, 4));?",
        options: [
            "21",
            "15",
            "13",
            "11"
        ],
        answer: 2,
        explanation: "Expands to: 1 + 2 * 3 + 4 = 1 + 6 + 4 = 11. Due to operator precedence, multiplication happens before addition. Wrapping the macro in parentheses: ((a) + (b)) would give (1+2)*(3+4) = 21.",
        difficulty: "Medium",
        topic: "Macros"
    },
    {
        id: "c-165",
        question: "What is the advantage of inline functions over macros?",
        options: [
            "Inline functions are always faster",
            "Inline functions have type checking and don't have double-evaluation issues",
            "Inline functions can access global variables",
            "Macros cannot take arguments"
        ],
        answer: 1,
        explanation: "Inline functions are type-safe, evaluate arguments exactly once (no double-evaluation bug), and can be debugged. Macros are text substitution with no type safety.",
        difficulty: "Medium",
        topic: "Inline Functions"
    },
    {
        id: "c-166",
        question: "What is the output of: #if 0 printf(\"Hello\"); #endif printf(\"World\");?",
        options: [
            "HelloWorld",
            "Hello",
            "World",
            "Compilation error"
        ],
        answer: 2,
        explanation: "#if 0 ... #endif is a conditional compilation block that excludes the enclosed code. Only \"World\" is compiled and printed.",
        difficulty: "Medium",
        topic: "Conditional Compilation"
    },
    {
        id: "c-167",
        question: "What does #ifdef DEBUG do?",
        options: [
            "Defines DEBUG if it's not already defined",
            "Includes the following code only if DEBUG is defined as a macro",
            "Sets DEBUG to 1",
            "Checks if DEBUG equals 0"
        ],
        answer: 1,
        explanation: "#ifdef DEBUG checks if DEBUG is defined (regardless of its value). If defined, the code until #endif is included. Commonly used for debug builds.",
        difficulty: "Medium",
        topic: "Conditional Compilation"
    },
    {
        id: "c-168",
        question: "What is the output of: #define X 5 #undef X #ifdef X printf(\"Yes\"); #else printf(\"No\"); #endif?",
        options: [
            "Yes",
            "No",
            "Compilation error",
            "5"
        ],
        answer: 1,
        explanation: "#undef X removes the definition of X. The subsequent #ifdef X fails since X is no longer defined, so \"No\" is printed.",
        difficulty: "Medium",
        topic: "Conditional Compilation"
    },
    {
        id: "c-169",
        question: "What is the output of: int x = 10; printf(\"%d\", x++ + ++x);?",
        options: [
            "21",
            "22",
            "23",
            "Undefined behavior"
        ],
        answer: 3,
        explanation: "x++ modifies x and ++x also modifies x in the same expression without a sequence point between them. This is undefined behavior.",
        difficulty: "Medium",
        topic: "Undefined Behavior"
    },
    {
        id: "c-170",
        question: "What is the output of: char s1[20] = \"Hello\"; char s2[20] = \"World\"; strcat(s1, s2); printf(\"%s %lu\", s1, strlen(s1));?",
        options: [
            "HelloWorld 10",
            "Hello World 10",
            "HelloWorld 5",
            "HelloWorld 11"
        ],
        answer: 0,
        explanation: "strcat appends \"World\" to \"Hello\", giving \"HelloWorld\". strlen returns 10 (no space — strcat doesn't add one).",
        difficulty: "Easy",
        topic: "String Library Functions"
    },
    {
        id: "c-171",
        question: "What is the output of: int x = -1; unsigned int y = 1; printf(\"%lu\", x + y); assuming 32-bit int?",
        options: [
            "0",
            "4294967296",
            "4294967295",
            "1"
        ],
        answer: 0,
        explanation: "When mixing signed and unsigned, the signed value is converted to unsigned. -1 becomes 4294967295 (UINT_MAX). 4294967295 + 1 = 0 (wraps around due to unsigned overflow).",
        difficulty: "Medium",
        topic: "Data Types"
    },
    {
        id: "c-172",
        question: "What is the output of: int arr[] = {1, 2, 3, 4, 5}; int *p = arr + 4; printf(\"%ld\", (long)(p - arr));?",
        options: [
            "16",
            "4",
            "8",
            "20"
        ],
        answer: 1,
        explanation: "Pointer subtraction yields the number of elements between pointers, not bytes. p - arr = 4 (four int elements apart), not 16 bytes.",
        difficulty: "Medium",
        topic: "Pointer Arithmetic"
    },
    {
        id: "c-173",
        question: "What is the output of: void swap(int *a, int *b) { int *temp = a; a = b; b = temp; } int x=1, y=2; swap(&x, &y); printf(\"%d %d\", x, y);?",
        options: [
            "2 1",
            "1 2",
            "0 0",
            "Undefined behavior"
        ],
        answer: 1,
        explanation: "The function swaps the local pointer copies, not the values they point to. The original x and y remain unchanged. To swap values, dereference: int temp = *a; *a = *b; *b = temp;",
        difficulty: "Medium",
        topic: "Call by Reference"
    },
    {
        id: "c-174",
        question: "What is the output of: int factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); } printf(\"%d\", factorial(5));?",
        options: [
            "25",
            "120",
            "60",
            "24"
        ],
        answer: 1,
        explanation: "5! = 5 × 4 × 3 × 2 × 1 = 120. The base case returns 1 when n <= 1.",
        difficulty: "Easy",
        topic: "Recursion"
    },
    {
        id: "c-175",
        question: "What is the time complexity of the recursive Fibonacci function fib(n) that calls fib(n-1) + fib(n-2)?",
        options: [
            "O(n)",
            "O(n²)",
            "O(2^n)",
            "O(log n)"
        ],
        answer: 2,
        explanation: "The naive recursive Fibonacci makes 2^n - 1 calls total. It has exponential time complexity because it recomputes the same subproblems repeatedly.",
        difficulty: "Medium",
        topic: "Time Complexity"
    },
    {
        id: "c-176",
        question: "What is a tail recursive function?",
        options: [
            "A function that recurses on the last element of an array",
            "A recursive call that is the last operation in the function",
            "A function that only recurses once",
            "A function with no base case"
        ],
        answer: 1,
        explanation: "In tail recursion, the recursive call is the very last operation. Compilers can optimize tail recursion into a loop, reusing the same stack frame (tail call optimization).",
        difficulty: "Medium",
        topic: "Recursion"
    },
    {
        id: "c-177",
        question: "What is the output of: int f(int n) { if (n == 0) return 0; return 1 + f(n / 10); } printf(\"%d\", f(12345));?",
        options: [
            "12345",
            "5",
            "15",
            "0"
        ],
        answer: 1,
        explanation: "This function counts the digits of a number by dividing by 10 until 0. 12345 has 5 digits, so it returns 5.",
        difficulty: "Medium",
        topic: "Recursion"
    },
    {
        id: "c-178",
        question: "What is the maximum number of recursive calls for a function with one recursive call per invocation before stack overflow on a typical system?",
        options: [
            "Unlimited",
            "Depends on stack size and frame size per call",
            "Always exactly 1000",
            "Always 65536"
        ],
        answer: 1,
        explanation: "The maximum recursion depth depends on the available stack space (typically 1-8 MB) divided by the size of each stack frame. Larger local variables mean fewer possible calls.",
        difficulty: "Medium",
        topic: "Recursion"
    },
    {
        id: "c-179",
        question: "What is the output of: int x = 5; printf(\"%d\", x << -1);?",
        options: [
            "10",
            "2",
            "0",
            "Undefined behavior"
        ],
        answer: 3,
        explanation: "Shifting by a negative amount is undefined behavior in C. The shift count must be non-negative and less than the width of the type.",
        difficulty: "Medium",
        topic: "Undefined Behavior"
    },
    {
        id: "c-180",
        question: "What is the output of: int x = 5; printf(\"%d\", x << 32); assuming int is 32-bit?",
        options: [
            "0",
            "5",
            "Undefined behavior",
            "2147483648"
        ],
        answer: 2,
        explanation: "Shifting a 32-bit int by 32 or more is undefined behavior. The shift count must be less than the bit width of the type (0 to 31 for 32-bit int).",
        difficulty: "Medium",
        topic: "Undefined Behavior"
    },
    {
        id: "c-181",
        question: "What is the output of: int arr[5] = {1, 2, 3, 4, 5}; int *p = &arr[4]; printf(\"%d %d\", *p, *(arr + 4));?",
        options: [
            "5 5",
            "5 0",
            "Address Address",
            "Compilation error"
        ],
        answer: 0,
        explanation: "Both *p and *(arr+4) refer to arr[4] = 5. &arr[4] and arr+4 are equivalent expressions pointing to the same element.",
        difficulty: "Easy",
        topic: "Pointers & Arrays"
    },
    {
        id: "c-182",
        question: "What is the output of: int a[5] = {1,2,3,4,5}; printf(\"%d %d\", *(a + 1), *(1 + a));?",
        options: [
            "2 Compilation error",
            "2 2",
            "1 1",
            "3 3"
        ],
        answer: 1,
        explanation: "Due to commutativity of addition, *(a+1) and *(1+a) are identical. Both equal a[1] = 2. This is why a[1] is equivalent to 1[a].",
        difficulty: "Medium",
        topic: "Pointers & Arrays"
    },
    {
        id: "c-183",
        question: "What is the output of: int a[5]; printf(\"%d %d\", a[5], 5[a]);?",
        options: [
            "0 0",
            "Garbage Garbage",
            "Undefined behavior for both",
            "Compilation error"
        ],
        answer: 2,
        explanation: "a[5] accesses one past the last element, which is undefined behavior. 5[a] is the same as a[5], also undefined behavior.",
        difficulty: "Medium",
        topic: "Pointers & Arrays"
    },
    {
        id: "c-184",
        question: "What is the output of: int a[] = {10, 20, 30}; int *p = a; printf(\"%d\", -1[p]);?",
        options: [
            "-20",
            "20",
            "Undefined behavior",
            "Compilation error"
        ],
        answer: 1,
        explanation: "1[p] is equivalent to p[1] = a[1] = 20. The unary minus applies to the result: -20... wait, actually -1[p] is -(1[p]) = -20. But that's not an option... Let me re-examine: actually the answer should be -20. Let me correct: the options need fixing. Actually with the given options, this reveals the answer is -20, but since it's not listed, let me reconsider. Actually, -1[p] could be parsed as (-1)[p] = p[-1] = a[-1] which is UB. In practice, due to operator precedence, unary - binds tighter, so -1[p] = -(1[p]) = -(20) = -20. But -20 isn't an option. The most correct given options is actually a trick — it's -20 but since that's not there... I'll set the answer to show the actual behavior.",
        options: [
            "-20",
            "20",
            "Undefined behavior — p[-1] access",
            "Compilation error"
        ],
        answer: 0,
        explanation: "Unary minus has higher precedence than subscript. -1[p] = -(1[p]) = -(p[1]) = -20. If it were (-1)[p], that would be p[-1], which is undefined behavior.",
        difficulty: "Medium",
        topic: "Pointers & Arrays"
    },
    {
        id: "c-185",
        question: "What is the output of: int x = 0; for (int i = 0, j = 0; i < 3, j < 2; i++, j++) x++; printf(\"%d\", x);?",
        options: [
            "2",
            "3",
            "0",
            "Infinite loop"
        ],
        answer: 0,
        explanation: "The comma operator in the condition evaluates both, but only the rightmost (j < 2) determines the loop. The loop runs for j=0,1 — that's 2 iterations.",
        difficulty: "Medium",
        topic: "for"
    },
    {
        id: "c-186",
        question: "What is the output of: int i = 0; for (; i < 5; ) { if (i == 3) break; i++; } printf(\"%d\", i);?",
        options: [
            "3",
            "4",
            "5",
            "2"
        ],
        answer: 0,
        explanation: "When i reaches 3, break exits the loop immediately. i is still 3 because break happens before i++ in that iteration.",
        difficulty: "Medium",
        topic: "break"
    },
    {
        id: "c-187",
        question: "What is the output of: int i; for (i = 0; i < 5; i++) { if (i % 2 == 0) continue; printf(\"%d \", i); }?",
        options: [
            "0 1 2 3 4",
            "1 3",
            "0 2 4",
            "1 3 5"
        ],
        answer: 1,
        explanation: "continue skips even values (0, 2, 4). Only odd values (1, 3) are printed.",
        difficulty: "Easy",
        topic: "continue"
    },
    {
        id: "c-188",
        question: "What is the output of: int i = 5; do { printf(\"%d \", i--); } while (i > 0);?",
        options: [
            "5 4 3 2 1",
            "4 3 2 1 0",
            "5 4 3 2 1 0",
            "5 4 3 2"
        ],
        answer: 0,
        explanation: "do-while prints i then decrements. Sequence: print 5 (i→4), print 4 (i→3), print 3 (i→2), print 2 (i→1), print 1 (i→0). Then i>0 is false, loop ends.",
        difficulty: "Medium",
        topic: "do-while"
    },
    {
        id: "c-189",
        question: "What is the output of: enum { A, B = 5, C, D } e; printf(\"%d %d\", C, D);?",
        options: [
            "6 7",
            "2 3",
            "5 6",
            "1 2"
        ],
        answer: 0,
        explanation: "A=0, B=5 (explicitly set), C=6 (B+1), D=7 (C+1). Unspecified enum constants continue from the previous value.",
        difficulty: "Medium",
        topic: "Enumerations"
    },
    {
        id: "c-190",
        question: "Can enums in C have negative values?",
        options: [
            "No, enums are always non-negative",
            "Yes, enum constants can be any int value",
            "Only in C99 and later",
            "Only if the underlying type is signed char"
        ],
        answer: 1,
        explanation: "Enum constants are of type int and can have any valid int value, including negatives: enum { MIN = -100, MAX = 100 };",
        difficulty: "Medium",
        topic: "Enumerations"
    },
    {
        id: "c-191",
        question: "What is a bit field in a struct?",
        options: [
            "A field that stores a single bit",
            "A member that uses a specified number of bits instead of a full type",
            "A pointer to a bit in memory",
            "A boolean field"
        ],
        answer: 1,
        explanation: "Bit fields specify the exact number of bits a member uses, allowing compact packing of small values. Example: unsigned int flag : 1; uses just 1 bit.",
        difficulty: "Medium",
        topic: "Bit Fields"
    },
    {
        id: "c-192",
        question: "What is the output of: struct { unsigned int a : 1; unsigned int b : 2; } s; s.a = 1; s.b = 3; printf(\"%d %d\", s.a, s.b);?",
        options: [
            "1 3",
            "1 1",
            "0 3",
            "Compilation error"
        ],
        answer: 0,
        explanation: "a is a 1-bit field (can hold 0 or 1). b is a 2-bit field (can hold 0-3). 1 fits in 1 bit, 3 fits in 2 bits. Output: 1 3.",
        difficulty: "Medium",
        topic: "Bit Fields"
    },
    {
        id: "c-193",
        question: "What happens if you assign 3 to a 2-bit unsigned bit field?",
        options: [
            "Compilation error",
            "3 is stored correctly since 2 bits can hold 0-3",
            "Only 2 is stored (truncated)",
            "Undefined behavior"
        ],
        answer: 1,
        explanation: "A 2-bit unsigned field can hold values 0 to 3 (2^2 - 1 = 3). Assigning 3 fits perfectly and is stored correctly.",
        difficulty: "Medium",
        topic: "Bit Fields"
    },
    {
        id: "c-194",
        question: "What is the output of: struct { unsigned int a : 1; } s; s.a = 2; printf(\"%d\", s.a);?",
        options: [
            "2",
            "1",
            "0",
            "Implementation-defined"
        ],
        answer: 3,
        explanation: "A 1-bit unsigned field can only hold 0 or 1. Assigning 2 (binary 10) to a 1-bit field is implementation-defined per the C standard.",
        difficulty: "Hard",
        topic: "Bit Fields"
    },
    {
        id: "c-195",
        question: "What is the output of: FILE *fp = fopen(\"test.txt\", \"r\"); if (fp == NULL) { perror(\"Error\"); return 1; } fclose(fp); assuming test.txt does not exist?",
        options: [
            "Nothing is printed",
            "Error: No such file or directory",
            "Segmentation fault",
            "Error: NULL pointer"
        ],
        answer: 1,
        explanation: "fopen returns NULL when the file doesn't exist. perror prints \"Error: \" followed by the system error message (e.g., \"No such file or directory\").",
        difficulty: "Medium",
        topic: "Error Handling"
    },
    {
        id: "c-196",
        question: "What is the difference between fgets and gets?",
        options: [
            "No difference",
            "fgets takes a size parameter preventing buffer overflow; gets does not",
            "gets is faster",
            "fgets only reads binary files"
        ],
        answer: 1,
        explanation: "fgets(buffer, size, stream) reads at most size-1 characters, preventing overflow. gets() has no size limit and was removed in C11 because it's inherently unsafe.",
        difficulty: "Medium",
        topic: "File Handling"
    },
    {
        id: "c-197",
        question: "What does fread return on success?",
        options: [
            "The number of bytes read",
            "The number of objects read",
            "0 always",
            "A pointer to the buffer"
        ],
        answer: 1,
        explanation: "fread(buffer, size, count, stream) returns the number of complete objects (size × count) successfully read, which may be less than count on error or EOF.",
        difficulty: "Medium",
        topic: "fread"
    },
    {
        id: "c-198",
        question: "What is the output of: int a = 10; void *p = &a; printf(\"%d\", *(int *)p);?",
        options: [
            "The address of a",
            "10",
            "Compilation error",
            "Segmentation fault"
        ],
        answer: 1,
        explanation: "void* is a generic pointer that can hold any address. It must be cast to the appropriate type before dereferencing. *(int *)p correctly reads the int value 10.",
        difficulty: "Medium",
        topic: "Pointers"
    },
    {
        id: "c-199",
        question: "Can you perform pointer arithmetic on a void pointer?",
        options: [
            "Yes, freely",
            "No, void* cannot be dereferenced or used in arithmetic without casting",
            "Only addition, not subtraction",
            "Only in C99"
        ],
        answer: 1,
        explanation: "void* cannot be dereferenced or used in arithmetic because the compiler doesn't know the size of the pointed-to object. Cast to a specific type first.",
        difficulty: "Medium",
        topic: "Pointers"
    },
    {
        id: "c-200",
        question: "What is the output of: int a = 10; double b = 20.5; void *p = &b; printf(\"%f\", *(double *)p);?",
        options: [
            "10.000000",
            "20.500000",
            "Compilation error",
            "Undefined behavior"
        ],
        answer: 1,
        explanation: "p points to b (a double). Casting to double* and dereferencing correctly reads 20.500000. The cast must match the actual type of the pointed-to object.",
        difficulty: "Medium",
        topic: "Pointers"
    },
    {
        id: "c-201",
        question: "What is the C memory layout from lowest to highest address (typical)?",
        options: [
            "Heap → Stack → Data → Text",
            "Text → Data → BSS → Heap → Stack",
            "Stack → Heap → Data → Text",
            "Text → Stack → Heap → Data"
        ],
        answer: 1,
        explanation: "Typical layout: Text (code) at low addresses, followed by initialized data, BSS (uninitialized), then heap (grows up), and stack (grows down) at high addresses.",
        difficulty: "Medium",
        topic: "Memory Layout"
    },
    {
        id: "c-202",
        question: "Where are global variables stored in C?",
        options: [
            "Stack",
            "Heap",
            "Data segment (initialized) or BSS segment (uninitialized)",
            "Code segment"
        ],
        answer: 2,
        explanation: "Initialized globals go in the data segment. Uninitialized (or zero-initialized) globals go in the BSS segment. Both persist for the program's lifetime.",
        difficulty: "Medium",
        topic: "Data Segment"
    },
    {
        id: "c-203",
        question: "Where are local variables stored in C?",
        options: [
            "Heap",
            "Data segment",
            "Stack",
            "BSS"
        ],
        answer: 2,
        explanation: "Local (auto) variables are allocated on the stack when a function is entered and deallocated when it returns. This includes function parameters.",
        difficulty: "Easy",
        topic: "Stack"
    },
    {
        id: "c-204",
        question: "What is the BSS segment?",
        options: [
            "Segment for binary source code",
            "Segment for uninitialized global and static variables",
            "Segment for BIOS routines",
            "Segment for buffered I/O"
        ],
        answer: 1,
        explanation: "BSS (Block Started by Symbol) stores uninitialized global and static variables. It's typically zeroed at program start and doesn't occupy space in the executable file.",
        difficulty: "Medium",
        topic: "BSS"
    },
    {
        id: "c-205",
        question: "Why does the BSS segment not increase the executable file size significantly?",
        options: [
            "BSS is compressed",
            "BSS variables are stored on the stack at runtime",
            "The loader simply records the size and zero-fills at runtime, no actual data in the file",
            "BSS is always empty"
        ],
        answer: 2,
        explanation: "The executable only stores the BSS segment's start address and size. The OS loader allocates and zero-fills this memory at load time, so no actual bytes are in the file.",
        difficulty: "Medium",
        topic: "BSS"
    },
    {
        id: "c-206",
        question: "What is the output of: int *p = (int *)malloc(sizeof(int) * 3); for (int i = 0; i < 3; i++) p[i] = i + 1; free(p + 1);?",
        options: [
            "Frees the second element only",
            "Undefined behavior — must free the exact pointer returned by malloc",
            "Frees all three elements",
            "No effect"
        ],
        answer: 1,
        explanation: "free() must receive the exact pointer returned by malloc/calloc/realloc. Passing p+1 is undefined behavior — it corrupts the heap allocator's metadata.",
        difficulty: "Medium",
        topic: "Memory Management"
    },
    {
        id: "c-207",
        question: "What is a buffer overflow?",
        options: [
            "Writing more data to a buffer than it can hold",
            "Reading past the end of a file",
            "Allocating too much memory",
            "The stack growing into the heap"
        ],
        answer: 0,
        explanation: "A buffer overflow occurs when data written to a buffer exceeds its bounds, corrupting adjacent memory. This is a common vulnerability exploitable for code execution.",
        difficulty: "Medium",
        topic: "Buffer Overflow"
    },
    {
        id: "c-208",
        question: "Which function is most commonly associated with buffer overflow vulnerabilities?",
        options: [
            "fgets",
            "gets",
            "fgets_s",
            "read"
        ],
        answer: 1,
        explanation: "gets() reads until newline without any size limit, making it trivially exploitable for buffer overflows. It was removed from C11 for this reason.",
        difficulty: "Medium",
        topic: "Buffer Overflow"
    },
    {
        id: "c-209",
        question: "What is the output of: char buf[5]; strcpy(buf, \"Hello World\"); printf(\"%s\", buf);?",
        options: [
            "Hello",
            "Hello World",
            "Undefined behavior — buffer overflow",
            "Compilation error"
        ],
        answer: 2,
        explanation: "\"Hello World\" is 12 bytes (including \\0) but buf is only 5 bytes. strcpy copies all bytes, overflowing the buffer — undefined behavior, potentially crashing or corrupting data.",
        difficulty: "Medium",
        topic: "Buffer Overflow"
    },
    {
        id: "c-210",
        question: "What causes a segmentation fault?",
        options: [
            "Syntax error in the code",
            "Accessing memory that the program is not allowed to access",
            "Dividing by zero",
            "Stack overflow only"
        ],
        answer: 1,
        explanation: "A segfault occurs when the program tries to access memory it doesn't have permission for — dereferencing NULL, accessing freed memory, or accessing out-of-bounds addresses.",
        difficulty: "Medium",
        topic: "Segmentation Fault"
    },
    {
        id: "c-211",
        question: "What is the output of: int *p = NULL; *p = 42;?",
        options: [
            "Sets the value at address 0 to 42",
            "Segmentation fault",
            "Compilation error",
            "p becomes 42"
        ],
        answer: 1,
        explanation: "NULL typically maps to address 0, which is not accessible in user space. Dereferencing a NULL pointer causes a segmentation fault.",
        difficulty: "Easy",
        topic: "NULL Pointer"
    },
    {
        id: "c-212",
        question: "What is the restrict keyword used for in C99?",
        options: [
            "To restrict access to a variable",
            "To tell the compiler that a pointer is the only way to access the pointed-to object",
            "To make a variable read-only",
            "To restrict a variable to file scope"
        ],
        answer: 1,
        explanation: "restrict tells the compiler that for the lifetime of the pointer, no other pointer will access the same object. This enables optimizations like vectorization.",
        difficulty: "Medium",
        topic: "restrict"
    },
    {
        id: "c-213",
        question: "Where is restrict most commonly used?",
        options: [
            "In struct definitions",
            "In function parameters, especially for memcpy-like functions",
            "In global variable declarations",
            "In enum definitions"
        ],
        answer: 1,
        explanation: "restrict is primarily used in function parameters. For example: void my_memcpy(void *restrict dst, const void *restrict src, size_t n); tells the compiler dst and src don't overlap.",
        difficulty: "Medium",
        topic: "restrict"
    },
    {
        id: "c-214",
        question: "What is the output of: int x = 10; int y = (x++, x + 5); printf(\"%d %d\", x, y);?",
        options: [
            "10 15",
            "11 15",
            "11 16",
            "10 16"
        ],
        answer: 1,
        explanation: "The comma operator: x++ increments x to 11, then x + 5 = 16... wait. After x++, x is 11. Then x+5 = 16. Actually let me recalculate: x starts at 10, x++ makes x=11 (post-increment returns 10 but x is now 11), then x+5 = 11+5 = 16. So x=11, y=16.",
        options: [
            "10 15",
            "11 16",
            "11 15",
            "10 16"
        ],
        answer: 1,
        explanation: "The comma operator evaluates left to right. x++ sets x to 11. Then x+5 = 11+5 = 16. y gets the rightmost value: 16.",
        difficulty: "Medium",
        topic: "Expressions"
    },
    {
        id: "c-215",
        question: "What is the output of: int arr[3][2] = {{1,2},{3,4},{5,6}}; int (*p)[2] = arr; printf(\"%d\", p[2][1]);?",
        options: [
            "4",
            "5",
            "6",
            "Compilation error"
        ],
        answer: 2,
        explanation: "p is a pointer to an array of 2 ints. p[2] is the third row {5,6}. p[2][1] = 6. This is equivalent to arr[2][1].",
        difficulty: "Medium",
        topic: "Pointers & Arrays"
    },
    {
        id: "c-216",
        question: "What is the difference between int *p[3] and int (*p)[3]?",
        options: [
            "Both are the same",
            "int *p[3] is an array of 3 pointers; int (*p)[3] is a pointer to an array of 3 ints",
            "int *p[3] is a pointer to 3 ints; int (*p)[3] is an array of 3 pointers",
            "Both are pointers"
        ],
        answer: 1,
        explanation: "[] binds tighter than *. int *p[3] → array of 3 int pointers. int (*p)[3] → pointer to an array of 3 ints. This is a classic interview distinction.",
        difficulty: "Medium",
        topic: "Pointers & Arrays"
    },
    {
        id: "c-217",
        question: "What is the output of: int *arr[3]; int a = 1, b = 2, c = 3; arr[0] = &a; arr[1] = &b; arr[2] = &c; printf(\"%d\", *arr[1]);?",
        options: [
            "1",
            "2",
            "Address of b",
            "Compilation error"
        ],
        answer: 1,
        explanation: "arr is an array of 3 int pointers. arr[1] = &b, so *arr[1] = b = 2.",
        difficulty: "Medium",
        topic: "Arrays"
    },
    {
        id: "c-218",
        question: "What is the output of: char *names[] = {\"Alice\", \"Bob\", \"Charlie\"}; printf(\"%c\", names[1][0]);?",
        options: [
            "A",
            "B",
            "C",
            "Alice"
        ],
        answer: 1,
        explanation: "names is an array of char pointers. names[1] = \"Bob\". names[1][0] = 'B'. This is pointer + array subscript notation for 2D string access.",
        difficulty: "Medium",
        topic: "Arrays"
    },
    {
        id: "c-219",
        question: "What is the time complexity of accessing arr[i] in a 1D array?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n²)"
        ],
        answer: 2,
        explanation: "Array access is O(1) — it's a direct computation: base_address + i * element_size. No searching or iteration needed.",
        difficulty: "Easy",
        topic: "1D Arrays"
    },
    {
        id: "c-220",
        question: "What is the time complexity of linear search on an unsorted array of n elements?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answer: 2,
        explanation: "Linear search examines each element until the target is found, requiring up to n comparisons in the worst case — O(n).",
        difficulty: "Easy",
        topic: "Searching Basics"
    },
    {
        id: "c-221",
        question: "What is the time complexity of binary search on a sorted array?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n log n)"
        ],
        answer: 1,
        explanation: "Binary search halves the search space each step: n → n/2 → n/4 → ... → 1, taking log₂(n) steps — O(log n).",
        difficulty: "Easy",
        topic: "Searching Basics"
    },
    {
        id: "c-222",
        question: "What is the time complexity of bubble sort in the worst case?",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(n³)"
        ],
        answer: 2,
        explanation: "Bubble sort makes n-1 passes, each pass comparing up to n elements: (n-1) + (n-2) + ... + 1 = n(n-1)/2 = O(n²) in the worst case.",
        difficulty: "Easy",
        topic: "Sorting Basics"
    },
    {
        id: "c-223",
        question: "What is the best-case time complexity of bubble sort with an early-exit optimization?",
        options: [
            "O(n²)",
            "O(n log n)",
            "O(n)",
            "O(1)"
        ],
        answer: 2,
        explanation: "With a flag that checks if any swaps occurred, an already-sorted array makes one pass with no swaps, giving O(n) best case.",
        difficulty: "Medium",
        topic: "Sorting Basics"
    },
    {
        id: "c-224",
        question: "What is a linked list node in C typically defined as?",
        options: [
            "A struct with only data fields",
            "A struct with data and a pointer to the same struct type",
            "An array of structs",
            "A union of data and pointer"
        ],
        answer: 1,
        explanation: "A linked list node contains data and a self-referential pointer: struct Node { int data; struct Node *next; }; This allows chaining nodes together.",
        difficulty: "Easy",
        topic: "Linked Lists"
    },
    {
        id: "c-225",
        question: "What is the time complexity of inserting at the head of a singly linked list?",
        options: [
            "O(n)",
            "O(log n)",
            "O(1)",
            "O(n²)"
        ],
        answer: 2,
        explanation: "Inserting at the head requires only creating a new node, setting its next to the current head, and updating the head pointer — all O(1).",
        difficulty: "Easy",
        topic: "Linked Lists"
    },
    {
        id: "c-226",
        question: "What is the time complexity of deleting the last node of a singly linked list?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answer: 2,
        explanation: "To delete the last node, you must traverse the entire list to find the second-to-last node (to update its next pointer) — O(n).",
        difficulty: "Medium",
        topic: "Linked Lists"
    },
    {
        id: "c-227",
        question: "What advantage does a doubly linked list have over a singly linked list?",
        options: [
            "Uses less memory",
            "Can traverse in both directions and delete a node given a pointer to it in O(1)",
            "Faster search",
            "Automatic sorting"
        ],
        answer: 1,
        explanation: "A doubly linked list has prev and next pointers, enabling bidirectional traversal and O(1) deletion when you have a pointer to the node (no need to find the predecessor).",
        difficulty: "Medium",
        topic: "Linked Lists"
    },
    {
        id: "c-228",
        question: "What is the output of: typedef int (*CMP)(const void *, const void *); CMP compare;?",
        options: [
            "Compilation error — CMP is not a type",
            "compare is a function pointer that can point to a comparison function",
            "compare is an integer",
            "compare is a function"
        ],
        answer: 1,
        explanation: "CMP is a typedef for a function pointer type taking two const void* parameters and returning int. compare is a variable of this type, compatible with qsort's comparator.",
        difficulty: "Medium",
        topic: "typedef"
    },
    {
        id: "c-229",
        question: "What is the correct way to call qsort to sort an integer array?",
        options: [
            "qsort(arr, n, sizeof(int), compare);",
            "qsort(arr, sizeof(int), n, compare);",
            "qsort(n, arr, sizeof(int), compare);",
            "qsort(arr, n, compare, sizeof(int));"
        ],
        answer: 0,
        explanation: "qsort signature: void qsort(void *base, size_t nmemb, size_t size, int (*compar)(const void *, const void *)). The order is: array, count, element size, comparator.",
        difficulty: "Medium",
        topic: "Sorting Basics"
    },
    {
        id: "c-230",
        question: "What should a comparison function for qsort return when the first argument is greater than the second?",
        options: [
            "0",
            "Negative value",
            "Positive value",
            "1 exactly"
        ],
        answer: 2,
        explanation: "qsort comparator returns negative if a < b, zero if a == b, positive if a > b. It doesn't have to be exactly -1/0/1, just any negative/zero/positive value.",
        difficulty: "Medium",
        topic: "Sorting Basics"
    },
    {
        id: "c-231",
        question: "What is the output of: int x = 5; float f = 3.14f; printf(\"%d\", x + f);?",
        options: [
            "8",
            "8.14",
            "8 (with possible truncation warning)",
            "Compilation error"
        ],
        answer: 2,
        explanation: "x + f promotes x to float, giving 8.14f. But %d expects int, causing undefined behavior. Most compilers warn about the type mismatch. The output is unpredictable.",
        difficulty: "Medium",
        topic: "printf"
    },
    {
        id: "c-232",
        question: "What is the output of: printf(\"%d %d %d\", sizeof(char), sizeof(short), sizeof(int)); on a typical 32-bit system?",
        options: [
            "1 2 4",
            "1 4 4",
            "1 2 2",
            "1 1 4"
        ],
        answer: 0,
        explanation: "On a typical 32-bit system: char=1 byte, short=2 bytes, int=4 bytes. These are minimum sizes guaranteed by the standard (short≥2, int≥2, but typically 4).",
        difficulty: "Easy",
        topic: "Data Types"
    }
]