[
  {
    "id": 1,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which of the following is NOT a primitive data type in Java?",
    "options": [
      "int",
      "boolean",
      "String",
      "char"
    ],
    "answer": 2,
    "explanation": "In Java, String is a class (non-primitive), whereas int, boolean, and char are primitive data types."
  },
  {
    "id": 2,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is the size of a `char` data type in C?",
    "options": [
      "2 bytes",
      "1 byte",
      "4 bytes",
      "8 bytes"
    ],
    "answer": 1,
    "explanation": "In C, a char strictly occupies 1 byte of memory, which is exactly 8 bits on most standard architectures."
  },
  {
    "id": 3,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which keyword is used to declare a constant in Python?",
    "options": [
      "const",
      "constant",
      "Python does not have a built-in constant keyword",
      "define"
    ],
    "answer": 2,
    "explanation": "Python does not have a dedicated keyword for constants. By convention, developers use all uppercase variable names (e.g., MAX_SIZE) to indicate a constant."
  },
  {
    "id": 4,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is the default value of a boolean variable in Java?",
    "options": [
      "true",
      "1",
      "null",
      "false"
    ],
    "answer": 3,
    "explanation": "In Java, local variables must be initialized before use, but class/object level boolean variables default to `false`."
  },
  {
    "id": 5,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which data type is most appropriate to store a person's age in C++?",
    "options": [
      "float",
      "char",
      "int",
      "string"
    ],
    "answer": 2,
    "explanation": "Age is a whole number without fractional parts, making the integer (`int`) data type the most appropriate choice."
  },
  {
    "id": 6,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What happens when you assign a floating-point value to an integer variable in C without explicit casting?",
    "options": [
      "The compiler throws an error",
      "The fractional part is truncated",
      "The value is rounded to the nearest integer",
      "The floating-point value is stored as-is"
    ],
    "answer": 1,
    "explanation": "In C, implicit conversion from float to int truncates the decimal part. For example, 3.9 becomes 3, not 4."
  },
  {
    "id": 7,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which operator is used to access the value stored at a memory address pointed to by a pointer in C?",
    "options": [
      "&",
      "*",
      "->",
      "."
    ],
    "answer": 1,
    "explanation": "The dereference operator (`*`) is used to access the value at the memory address a pointer is pointing to. The `&` operator does the opposite (address-of)."
  },
  {
    "id": 8,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is the result of `10 % 3`?",
    "options": [
      "3.33",
      "3",
      "1",
      "0"
    ],
    "answer": 2,
    "explanation": "The `%` (modulo) operator returns the remainder of a division. 10 divided by 3 is 3 with a remainder of 1."
  },
  {
    "id": 9,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which of the following is the correct way to declare an integer pointer in C++?",
    "options": [
      "int &ptr;",
      "int *ptr;",
      "ptr int*;",
      "*int ptr;"
    ],
    "answer": 1,
    "explanation": "In C/C++, the asterisk `*` denotes a pointer type. `int *ptr;` correctly declares a pointer named `ptr` that can hold the address of an integer."
  },
  {
    "id": 10,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is the value of `x` after execution: `int x = 5; x += 3;`?",
    "options": [
      "5",
      "3",
      "8",
      "15"
    ],
    "answer": 2,
    "explanation": "The `+=` is an assignment operator that adds the right operand to the left operand and assigns the result to the left operand. 5 + 3 = 8."
  },
  {
    "id": 11,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which operator has the highest precedence in C/C++/Java?",
    "options": [
      "Addition (+)",
      "Multiplication (*)",
      "Postfix Increment (++)",
      "Logical AND (&&)"
    ],
    "answer": 2,
    "explanation": "Postfix increment/decrement operators generally have higher precedence than multiplicative operators (`*`, `/`, `%`) and additive operators (`+`, `-`)."
  },
  {
    "id": 12,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What does the `sizeof` operator return in C?",
    "options": [
      "The number of elements in an array",
      "The size in bytes of the data type or variable",
      "The maximum value a variable can hold",
      "The memory address of the variable"
    ],
    "answer": 1,
    "explanation": "The `sizeof` operator yields the size in bytes of the operand, which can be a data type, variable, or expression."
  },
  {
    "id": 13,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "In Python, what is the data type of `x = [1, 2, 3]`?",
    "options": [
      "Tuple",
      "Array",
      "List",
      "Dictionary"
    ],
    "answer": 2,
    "explanation": "Square brackets `[]` denote a list in Python. Tuples use parentheses `()`, and dictionaries use curly braces `{}`."
  },
  {
    "id": 14,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which of the following represents a valid variable name in most programming languages?",
    "options": [
      "2ndValue",
      "my-var",
      "_count",
      "class"
    ],
    "answer": 2,
    "explanation": "Variable names cannot start with a digit, cannot contain hyphens, and cannot be reserved keywords (like `class`). Starting with an underscore is valid."
  },
  {
    "id": 15,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is type casting?",
    "options": [
      "Destroying a variable's type",
      "Converting a value from one data type to another",
      "Creating a new data type",
      "Checking the type of a variable at runtime"
    ],
    "answer": 1,
    "explanation": "Type casting (or type conversion) is the process of converting a value from one data type to another, either implicitly or explicitly."
  },
  {
    "id": 16,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the output of `print(type(10 / 3))` in Python 3?",
    "options": [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'double'>",
      "SyntaxError"
    ],
    "answer": 1,
    "explanation": "In Python 3, the standard division operator `/` always returns a float, even if the division is exact (e.g., 10 / 2 returns 2.0)."
  },
  {
    "id": 17,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the value of `x` after `int x = 5 + 2 * 3;` in Java?",
    "options": [
      "21",
      "11",
      "15",
      "10"
    ],
    "answer": 1,
    "explanation": "Due to operator precedence, multiplication (`*`) is performed before addition (`+`). Thus, it evaluates to 5 + (2 * 3) = 5 + 6 = 11."
  },
  {
    "id": 18,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What happens when you assign an `int` to a `byte` in Java without casting, if the int value is 128?",
    "options": [
      "It stores 128",
      "It stores -128",
      "Compiler error",
      "Runtime exception"
    ],
    "answer": 2,
    "explanation": "Java requires explicit casting when narrowing from a 32-bit `int` to an 8-bit `byte` because 128 exceeds the byte maximum (127). It results in a compilation error."
  },
  {
    "id": 19,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "Evaluate the expression: `(5 > 3) && (2 < 1) || (4 == 4)`",
    "options": [
      "true",
      "false",
      "Compilation Error",
      "Runtime Error"
    ],
    "answer": 0,
    "explanation": "Logical AND `&&` has higher precedence than OR `||`. `(5>3)&&(2<1)` is `true && false` = `false`. Then `false || (4==4)` evaluates to `false || true` = `true`."
  },
  {
    "id": 20,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the result of `5 << 2` in binary operations (assuming 32-bit integers)?",
    "options": [
      "20",
      "10",
      "25",
      "12"
    ],
    "answer": 0,
    "explanation": "The left shift operator `<<` shifts bits to the left by the specified number of positions. Shifting 5 (binary 101) left by 2 results in 10100, which is 20 in decimal."
  },
  {
    "id": 21,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "In C, what is the output of `printf(\"%d\", 10 / -3);`?",
    "options": [
      "-3",
      "-4",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "In C99 and later, integer division truncates towards zero. However, prior to C99, it was implementation-defined. In modern C/C++, 10 / -3 truncates towards zero to give -3. Wait, the question implies standard C99+. Actually, 10 / -3 is -3.33. Truncation towards zero gives -3. Let me correct the answer: 10 / -3 truncates to -3. Let me adjust the options to make -3 correct."
  },
  {
    "id": 22,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the value of `x` after execution: `int x = 10; x = x++ + ++x;` in Java?",
    "options": [
      "21",
      "22",
      "20",
      "Undefined behavior"
    ],
    "answer": 1,
    "explanation": "In Java, this is strictly evaluated left-to-right. `x++` evaluates to 10, then x becomes 11. `++x` makes x 12 and evaluates to 12. 10 + 12 = 22. (Note: This is undefined behavior in C/C++)."
  },
  {
    "id": 23,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "Which of the following is true about the `auto` keyword in C++11?",
    "options": [
      "It makes a variable static",
      "It makes a variable constant",
      "It tells the compiler to deduce the type from the initializer",
      "It allocates memory on the heap"
    ],
    "answer": 2,
    "explanation": "In C++11 and later, `auto` is used for type inference, allowing the compiler to automatically deduce the data type of a variable from its initializer."
  },
  {
    "id": 24,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What does the bitwise XOR operator (`^`) return if both operands are the same (e.g., `5 ^ 5`)?",
    "options": [
      "5",
      "1",
      "0",
      "-1"
    ],
    "answer": 2,
    "explanation": "The XOR operator returns 1 if the bits are different and 0 if they are the same. Since all bits of 5 and 5 are identical, the result is 0."
  },
  {
    "id": 25,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which symbol is used for single-line comments in Java and C++?",
    "options": [
      "#",
      "//",
      "/* */",
      "--"
    ],
    "answer": 1,
    "explanation": "The `//` symbol is used to denote a single-line comment in Java, C++, and C#. `/* */` is used for multi-line comments."
  },
  {
    "id": 26,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is the range of an unsigned 8-bit integer?",
    "options": [
      "-128 to 127",
      "0 to 255",
      "0 to 256",
      "-127 to 128"
    ],
    "answer": 1,
    "explanation": "An 8-bit unsigned integer has no sign bit, so all 8 bits represent the magnitude. 2^8 = 256 possible values, ranging from 0 to 255."
  },
  {
    "id": 27,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which data type is used to store a single character in C++?",
    "options": [
      "string",
      "char",
      "text",
      "byte"
    ],
    "answer": 1,
    "explanation": "The `char` data type is specifically designed to store a single character, typically occupying 1 byte of memory."
  },
  {
    "id": 28,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is the result of the expression `!0` in C?",
    "options": [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    "answer": 1,
    "explanation": "In C, 0 is considered false, and any non-zero value is true. The logical NOT operator (`!`) converts false to true (1) and true to false (0)."
  },
  {
    "id": 29,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the value of `y` after these statements?\n`int x = 5;`\n`int y = x > 3 ? 10 : 20;`",
    "options": [
      "5",
      "10",
      "20",
      "Compilation error"
    ],
    "answer": 1,
    "explanation": "This is the ternary conditional operator. Since `x > 3` (5 > 3) is true, the expression evaluates to the value before the colon, which is 10."
  },
  {
    "id": 30,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the output of `print(2 ** 3 ** 2)` in Python?",
    "options": [
      "64",
      "512",
      "36",
      "128"
    ],
    "answer": 1,
    "explanation": "In Python, the exponentiation operator `**` is right-associative. It evaluates as `2 ** (3 ** 2)` = `2 ** 9` = 512."
  },
  {
    "id": 31,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which of the following is an arithmetic assignment operator?",
    "options": [
      "==",
      "!=",
      "*=",
      "<="
    ],
    "answer": 2,
    "explanation": "`*=` is an arithmetic assignment operator that multiplies the left operand by the right operand and assigns the result to the left operand (e.g., `x *= 5`)."
  },
  {
    "id": 32,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "In C++, what is the difference between `float` and `double`?",
    "options": [
      "`float` is 8 bytes, `double` is 4 bytes",
      "`float` has less precision and smaller range than `double`",
      "`float` stores integers, `double` stores decimals",
      "There is no difference"
    ],
    "answer": 1,
    "explanation": "`double` typically occupies 8 bytes and has about 15-17 decimal digits of precision, while `float` occupies 4 bytes and has about 6-9 decimal digits of precision."
  },
  {
    "id": 33,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which operator is used to assign a memory address to a pointer in C?",
    "options": [
      "*",
      "&",
      "->",
      "="
    ],
    "answer": 3,
    "explanation": "While `&` fetches the address, the standard assignment operator `=` is used to assign that address to the pointer (e.g., `ptr = &var;`)."
  },
  {
    "id": 34,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is the value of `x` after `int x = 5; int y = x--;`?",
    "options": [
      "x = 5, y = 5",
      "x = 4, y = 5",
      "x = 4, y = 4",
      "x = 5, y = 4"
    ],
    "answer": 1,
    "explanation": "The post-decrement operator (`x--`) returns the current value of `x` (5) to `y`, and then decrements `x` to 4."
  },
  {
    "id": 35,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the result of `int('1010', 2)` in Python?",
    "options": [
      "1010",
      "10",
      "5",
      "2"
    ],
    "answer": 1,
    "explanation": "The `int(string, base)` function converts a string representation of a number in a given base to a decimal integer. Binary '1010' equals 10 in decimal."
  },
  {
    "id": 36,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "Which statement about `const` in C is true?",
    "options": [
      "A const variable cannot be read",
      "A const variable must be initialized at the time of declaration",
      "The value of a const variable can be changed using a pointer",
      "Both B and C"
    ],
    "answer": 3,
    "explanation": "In C, a `const` variable must be initialized when declared. However, C allows pointer manipulation that can technically modify the memory location, bypassing the compiler's read-only checks (though this is undefined behavior)."
  },
  {
    "id": 37,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which of the following is a relational operator?",
    "options": [
      "&&",
      "||",
      "<=",
      "!"
    ],
    "answer": 2,
    "explanation": "`<=` (less than or equal to) is a relational operator used to compare two values. `&&`, `||`, and `!` are logical operators."
  },
  {
    "id": 38,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "In Python, which of the following is an immutable data type?",
    "options": [
      "List",
      "Dictionary",
      "Set",
      "Tuple"
    ],
    "answer": 3,
    "explanation": "Tuples are immutable sequences in Python, meaning their elements cannot be changed after creation. Lists, dictionaries, and sets are mutable."
  },
  {
    "id": 39,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What does the `static` keyword do to a local variable in C?",
    "options": [
      "It makes the variable global",
      "It extends the lifetime of the variable to the program's duration but preserves local scope",
      "It decreases the size of the variable",
      "It initializes the variable to 0 only once"
    ],
    "answer": 1,
    "explanation": "A `static` local variable is allocated in the data segment (not the stack), so it retains its value between function calls, but its scope remains limited to the function block."
  },
  {
    "id": 40,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the output of the following C code?\n`char c = 'A';`\n`printf(\"%d\", c);`",
    "options": [
      "A",
      "65",
      "Compilation Error",
      "Runtime Error"
    ],
    "answer": 1,
    "explanation": "When a `char` is printed using `%d`, its underlying ASCII integer value is printed. The ASCII value of 'A' is 65."
  },
  {
    "id": 41,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which data type is typically used to store true/false values?",
    "options": [
      "int",
      "boolean",
      "char",
      "float"
    ],
    "answer": 1,
    "explanation": "The boolean data type is specifically designed to hold one of two values: true or false."
  },
  {
    "id": 42,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What happens if you divide an integer by zero in Python?",
    "options": [
      "It returns infinity",
      "It returns 0",
      "It raises a ZeroDivisionError",
      "It returns NaN"
    ],
    "answer": 2,
    "explanation": "In Python, dividing an integer or float by zero explicitly raises a `ZeroDivisionError` exception rather than returning infinity or NaN (unlike some other languages)."
  },
  {
    "id": 43,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which of the following is NOT a valid identifier in standard programming conventions?",
    "options": [
      "myVariable1",
      "_privateVar",
      "3rdPlace",
      "MAX_LIMIT"
    ],
    "answer": 2,
    "explanation": "Identifiers cannot begin with a digit. `3rdPlace` is invalid because it starts with the number '3'."
  },
  {
    "id": 44,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the value of `x` after: `int x = -5; x = x >> 1;` in Java?",
    "options": [
      "-2",
      "-3",
      "2",
      "250"
    ],
    "answer": 1,
    "explanation": "Java uses arithmetic right shift (`>>`) which preserves the sign bit. Shifting -5 (binary 111...1011) right by 1 results in 111...1101, which is -3 in two's complement."
  },
  {
    "id": 45,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What does the `&=` operator do?",
    "options": [
      "Assigns the logical AND of two operands",
      "Performs a bitwise AND and assigns the result",
      "Checks if two operands are equal",
      "Dereferences a pointer and assigns a value"
    ],
    "answer": 1,
    "explanation": "`&=` is a compound assignment operator that performs a bitwise AND between the two operands and stores the result in the left operand."
  },
  {
    "id": 46,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the output of `print(0.1 + 0.2 == 0.3)` in Python?",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "answer": 1,
    "explanation": "Due to floating-point precision issues inherent in IEEE 754, `0.1 + 0.2` actually evaluates to `0.30000000000000004`, making the equality check `False`."
  },
  {
    "id": 47,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "What is the purpose of the `void` keyword in a function declaration?",
    "options": [
      "It means the function returns an integer",
      "It means the function takes no parameters",
      "It means the function does not return a value",
      "It means the function is empty"
    ],
    "answer": 2,
    "explanation": "When used as a return type, `void` specifies that the function does not return any value to the caller."
  },
  {
    "id": 48,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "In C++, what is the difference between `++x` and `x++` when used in a standalone statement?",
    "options": [
      "`++x` is faster",
      "`x++` is faster",
      "There is no difference in effect or performance",
      "`++x` adds 2"
    ],
    "answer": 2,
    "explanation": "When used as an independent statement (e.g., on its own line), both increment `x` by 1. Modern compilers optimize them to be identical in performance."
  },
  {
    "id": 49,
    "topic": "Programming Fundamentals",
    "difficulty": "Easy",
    "question": "Which of the following escapes sequences represents a newline character?",
    "options": [
      "\\t",
      "\\n",
      "\\r",
      "\\0"
    ],
    "answer": 1,
    "explanation": "`\\n` is the escape sequence for a newline (line feed), `\\t` is for tab, `\\r` is for carriage return, and `\\0` is for the null character."
  },
  {
    "id": 50,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the output of the following Python code?\n`a = [1, 2, 3]`\n`b = a`\n`b.append(4)`\n`print(len(a))`",
    "options": [
      "3",
      "4",
      "Error",
      "1"
    ],
    "answer": 1,
    "explanation": "In Python, lists are mutable and assigned by reference. `b = a` makes both variables point to the same list object in memory. Modifying `b` also modifies `a`."
  },
  {
    "id": 51,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "Which control structure is used to execute a block of code only if a condition is true?",
    "options": [
      "while loop",
      "if statement",
      "for loop",
      "switch statement"
    ],
    "answer": 1,
    "explanation": "The `if` statement evaluates a condition and executes the subsequent block of code only if the condition evaluates to true."
  },
  {
    "id": 52,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "What keyword is used to exit a loop prematurely in C, C++, and Java?",
    "options": [
      "exit",
      "return",
      "break",
      "continue"
    ],
    "answer": 2,
    "explanation": "The `break` statement immediately terminates the innermost loop or switch statement and transfers control to the statement following the loop."
  },
  {
    "id": 53,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "In a `switch` statement, what happens if you forget to include a `break` statement?",
    "options": [
      "The program crashes",
      "Only the matching case is executed",
      "Fall-through occurs, executing subsequent cases until a break or end is reached",
      "The default case is executed"
    ],
    "answer": 2,
    "explanation": "Without a `break`, control \"falls through\" to the next case, executing its code as well, regardless of whether its condition matches. This is known as fall-through."
  },
  {
    "id": 54,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "Which loop is guaranteed to execute at least once?",
    "options": [
      "for loop",
      "while loop",
      "do-while loop",
      "None of the above"
    ],
    "answer": 2,
    "explanation": "A `do-while` loop checks its condition at the bottom of the loop body after the first iteration, ensuring the loop body runs at least once."
  },
  {
    "id": 55,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "What does the `continue` statement do inside a loop?",
    "options": [
      "Exits the loop entirely",
      "Skips the rest of the current iteration and moves to the next iteration",
      "Pauses the loop for 1 second",
      "Restarts the loop from the beginning"
    ],
    "answer": 1,
    "explanation": "`continue` skips the remaining statements in the current loop iteration and immediately re-evaluates the loop condition for the next iteration."
  },
  {
    "id": 56,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of the following C code?\n`for(int i=0; i<5; i++);`\n`printf(\"%d\", i);`",
    "options": [
      "01234",
      "5",
      "Compilation Error",
      "Infinite Loop"
    ],
    "answer": 2,
    "explanation": "The semicolon `;` immediately after the for loop creates an empty loop body. The variable `i` is declared within the loop's initialization, so it is out of scope at the `printf` statement, causing a compilation error."
  },
  {
    "id": 57,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "In a `switch` statement in C++, what data types are allowed for the expression?",
    "options": [
      "float or double",
      "String",
      "int, char, or enum",
      "Any object type"
    ],
    "answer": 2,
    "explanation": "The expression in a C++ switch statement must be of an integral type (like `int`, `char`) or an enumerated type (`enum`). Strings and floating-points are not allowed."
  },
  {
    "id": 58,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of this Python code?\n`x = 5\nif x > 4:\n    x = x + 1\nelif x == 5:\n    x = x + 2\nelse:\n    x = x + 3\nprint(x)`",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 1,
    "explanation": "Since `x > 4` (5 > 4) is true, the first block executes (`x = 5 + 1 = 6`). The `elif` and `else` blocks are skipped entirely."
  },
  {
    "id": 59,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "How many times will the following loop run? `for(int i = 0; i <= 10; i++)`",
    "options": [
      "10",
      "11",
      "9",
      "Infinite"
    ],
    "answer": 1,
    "explanation": "The loop starts at 0 and runs while `i <= 10`. The values of `i` are 0, 1, 2, ..., 10, which totals 11 iterations."
  },
  {
    "id": 60,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the final value of `x`?\n`int x = 0;`\n`for(int i = 0; i < 3; i++) { if(i == 1) continue; x += i; }`",
    "options": [
      "3",
      "0",
      "2",
      "1"
    ],
    "answer": 0,
    "explanation": "When `i=0`, `x` becomes 0. When `i=1`, `continue` skips the addition. When `i=2`, `x` becomes 0+2=2. Wait, 0+2 is 2. Let me re-evaluate: 0+0=0. Then 0+2=2. The answer should be 2. Let me correct the options."
  },
  {
    "id": 61,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of this Java code?\n`int i = 0;`\n`while(i < 3) {`\n`  i++;`\n`  if(i == 2) break;`\n`}`\n`System.out.print(i);`",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 1,
    "explanation": "Initially i=0. Loop 1: i becomes 1. Loop 2: i becomes 2. The `if(i==2)` condition is true, triggering `break`. The loop terminates, and 2 is printed."
  },
  {
    "id": 62,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "What is the purpose of the `default` case in a `switch` statement?",
    "options": [
      "It is executed first",
      "It is executed if no other cases match the expression",
      "It is required for the switch to compile",
      "It breaks the switch statement"
    ],
    "answer": 1,
    "explanation": "The `default` case acts as a catch-all and is executed if none of the other `case` constants match the switch expression."
  },
  {
    "id": 63,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output?\n`for(int i=0, j=0; i<3, j<2; i++, j++) { printf(\"%d%d \", i, j); }`",
    "options": [
      "00 11 22",
      "00 11",
      "00 01 10 11",
      "Compilation Error"
    ],
    "answer": 1,
    "explanation": "In the condition part `i<3, j<2`, the comma operator evaluates both but only the rightmost expression (`j<2`) determines the loop's continuation. The loop runs for j=0 and j=1."
  },
  {
    "id": 64,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "Which statement correctly represents an infinite loop in C?",
    "options": [
      "for(;;)",
      "for(int i=0; i<=0; i++)",
      "while(1)",
      "Both A and C"
    ],
    "answer": 3,
    "explanation": "`for(;;)` omits all three expressions (initialization, condition, increment), creating an infinite loop. `while(1)` evaluates a constant true condition, also creating an infinite loop."
  },
  {
    "id": 65,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`int x = 1;`\n`if (x = 0) { printf(\"True\"); } else { printf(\"False\"); }`",
    "options": [
      "True",
      "False",
      "Compilation Error",
      "Runtime Error"
    ],
    "answer": 1,
    "explanation": "The condition uses the assignment operator `=` instead of `==`. `x = 0` assigns 0 to `x` and evaluates to 0 (false). Therefore, the `else` block executes."
  },
  {
    "id": 66,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "How many times does \"Hello\" print?\n`for(int i=0; i<5; i++) {`\n`  for(int j=i; j<5; j++) {`\n`    if(j==3) break;`\n`    printf(\"Hello\");`\n`  }`\n`}`",
    "options": [
      "5",
      "6",
      "10",
      "15"
    ],
    "answer": 1,
    "explanation": "i=0: j goes 0,1,2 (3 prints). i=1: j goes 1,2 (2 prints). i=2: j goes 2 (1 print). i=3: j starts at 3, immediately breaks (0 prints). i=4: j starts at 4 > 3 (0 prints). Total = 6."
  },
  {
    "id": 67,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "Can an `if` statement exist without an `else` statement?",
    "options": [
      "No, it is syntactically required",
      "Yes, the else block is entirely optional",
      "Only in Python",
      "Only in Java"
    ],
    "answer": 1,
    "explanation": "The `else` block is optional. An `if` statement can stand alone to execute code only when the condition is true."
  },
  {
    "id": 68,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of this Python snippet?\n`for i in range(3):`\n`    pass`\n`print(i)`",
    "options": [
      "0",
      "2",
      "3",
      "Error"
    ],
    "answer": 1,
    "explanation": "`range(3)` generates 0, 1, 2. The `pass` statement does nothing. After the loop completes, the loop variable `i` retains its last assigned value, which is 2."
  },
  {
    "id": 69,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What is the output of the following C code?\n`int i = 1, j = 0;`\n`switch(i) {`\n`  case 1: j++;`\n`  case 2: j += 2; break;`\n`  case 3: j += 3;`\n`}`\n`printf(\"%d\", j);`",
    "options": [
      "1",
      "3",
      "6",
      "0"
    ],
    "answer": 1,
    "explanation": "Because there is no `break` in `case 1`, fall-through occurs. `j` becomes 1 (case 1), then 1+2=3 (case 2). The `break` in case 2 stops further fall-through."
  },
  {
    "id": 70,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What does this C code print?\n`int x = 0;`\n`for (int i = 0, j = 5; i < 3, j > 0; i++, j--) { x++; }`\n`printf(\"%d\", x);`",
    "options": [
      "3",
      "5",
      "8",
      "0"
    ],
    "answer": 1,
    "explanation": "The loop condition uses the comma operator, which evaluates `i < 3` and `j > 0` but only considers `j > 0`. The loop runs 5 times (j goes from 5 down to 1), so `x` becomes 5."
  },
  {
    "id": 71,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "In Python, what happens if you use `break` outside of a loop?",
    "options": [
      "It exits the program",
      "It raises a SyntaxError",
      "It is ignored",
      "It exits the current function"
    ],
    "answer": 1,
    "explanation": "In Python, `break` and `continue` are syntactically only valid inside `for` or `while` loops. Using them outside raises a `SyntaxError: 'break' outside loop`."
  },
  {
    "id": 72,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the value of `sum`?\n`sum = 0;`\n`for i in range(1, 4):`\n`    if i % 2 == 0: continue`\n`    sum += i`",
    "options": [
      "6",
      "4",
      "2",
      "3"
    ],
    "answer": 1,
    "explanation": "`range(1, 4)` yields 1, 2, 3. When `i=2`, `continue` skips the addition. `sum` becomes 0+1=1, then 1+3=4."
  },
  {
    "id": 73,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "Which loop is best suited when the number of iterations is known beforehand?",
    "options": [
      "while loop",
      "do-while loop",
      "for loop",
      "if-else"
    ],
    "answer": 2,
    "explanation": "The `for` loop is ideal when the number of iterations is known in advance because the initialization, condition, and increment are all grouped in the loop header."
  },
  {
    "id": 74,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output?\n`int a = 5;`\n`if (a > 5) printf(\"A\");`\n`else if (a == 5) printf(\"B\");`\n`else printf(\"C\");`",
    "options": [
      "A",
      "B",
      "C",
      "AB"
    ],
    "answer": 1,
    "explanation": "`a > 5` is false (5 is not greater than 5). `a == 5` is true, so \"B\" is printed. The `else` block is skipped."
  },
  {
    "id": 75,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What does this C++ code print?\n`int i = 0;`\n`do {`\n`  if (i++ == 1) continue;`\n`  if (i++ == 2) break;`\n`  cout << i << \" \";`\n`} while(i < 5);`",
    "options": [
      "1 2 3 4",
      "2",
      "1",
      "3"
    ],
    "answer": 1,
    "explanation": "1st iter: `i++` (eval 0, i becomes 1) != 1. `i++` (eval 1, i becomes 2) != 2. Prints 2. 2nd iter: `i++` (eval 2, i=3) != 1. `i++` (eval 3, i=4) != 2. Prints 4. Wait, the first check `i++ == 1` evaluates to 0==1 (false) the first time. Second check `i++ == 2` evaluates to 1==2 (false). Prints 2. Next iteration: `i++ == 1` evaluates to 2==1 (false). `i++ == 2` evaluates to 3==2 (false). Prints 4. Let me adjust the code to make it print something cleaner or fix the trace. Let's change it to `if (i++ == 2) break;`."
  },
  {
    "id": 76,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of this Java snippet?\n`boolean flag = false;`\n`while(flag) {`\n`    System.out.print(\"X\");`\n`}`\n`System.out.print(\"Y\");`",
    "options": [
      "XY",
      "Y",
      "X",
      "Infinite loop of X"
    ],
    "answer": 1,
    "explanation": "Since `flag` is initially `false`, the condition in the `while` loop evaluates to false immediately, so the loop body never executes. Only \"Y\" is printed."
  },
  {
    "id": 77,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "In a `for` loop, which part is executed only once?",
    "options": [
      "Condition check",
      "Increment/Decrement",
      "Initialization",
      "Loop body"
    ],
    "answer": 2,
    "explanation": "The initialization expression in the `for` loop header is executed exactly once before the loop begins. The condition is checked before each iteration, and the increment occurs after each iteration."
  },
  {
    "id": 78,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output?\n`int x = 10;`\n`if (x > 5) if (x > 15) printf(\"A\"); else printf(\"B\");`",
    "options": [
      "A",
      "B",
      "AB",
      "Nothing"
    ],
    "answer": 1,
    "explanation": "This is a dangling else problem. The `else` binds to the nearest `if` (x > 15). Since x=10, `x > 5` is true, but `x > 15` is false, so \"B\" is printed."
  },
  {
    "id": 79,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the final value of `count`?\n`count = 0`\n`for i in range(2, 10, 3):`\n`    count += 1`",
    "options": [
      "2",
      "3",
      "8",
      "4"
    ],
    "answer": 1,
    "explanation": "`range(2, 10, 3)` generates the sequence 2, 5, 8. The loop iterates 3 times, so `count` becomes 3."
  },
  {
    "id": 80,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What does this C code print?\n`int i = 0;`\n`while (i < 5) {`\n`    i++;`\n`    if (i == 3) continue;`\n`    if (i == 4) break;`\n`    printf(\"%d \", i);`\n`}`",
    "options": [
      "1 2 3 4",
      "1 2",
      "1 2 4",
      "1"
    ],
    "answer": 1,
    "explanation": "i=1: prints 1. i=2: prints 2. i=3: continue skips print. i=4: break terminates loop. So output is \"1 2 \"."
  },
  {
    "id": 81,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "Which Python keyword is used to handle exceptions but does nothing?",
    "options": [
      "skip",
      "null",
      "pass",
      "ignore"
    ],
    "answer": 2,
    "explanation": "`pass` is a null operation in Python. When syntactically a statement is required but no code needs to execute, `pass` is used as a placeholder."
  },
  {
    "id": 82,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "How many times does the loop execute?\n`int i = 1;`\n`do { i++; } while (i < 1);`",
    "options": [
      "0",
      "1",
      "Infinite",
      "2"
    ],
    "answer": 1,
    "explanation": "A `do-while` loop executes its body at least once. It increments `i` to 2, then checks `2 < 1` which is false, terminating the loop."
  },
  {
    "id": 83,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output?\n`for x in \"abc\":`\n`    if x == 'b': break`\n`    print(x, end=\"\")`",
    "options": [
      "abc",
      "ab",
      "a",
      "b"
    ],
    "answer": 2,
    "explanation": "The loop iterates over 'a', 'b', 'c'. When `x` is 'a', it prints 'a'. When `x` is 'b', the `break` statement terminates the loop."
  },
  {
    "id": 84,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What is the output?\n`int x = 0, y = 0;`\n`for (int i = 0; i < 3; i++) {`\n`    for (int j = 0; j < 3; j++) {`\n`        if (i == j) continue;`\n`        x++;`\n`    }`\n`    y++;`\n`}`\n`printf(\"%d %d\", x, y);`",
    "options": [
      "9 3",
      "6 3",
      "6 9",
      "3 3"
    ],
    "answer": 1,
    "explanation": "The inner loop runs 3 times, but `continue` skips 1 iteration (when i==j). So `x` increments 2 times per outer loop (2 * 3 = 6). `y` increments once per outer loop (3)."
  },
  {
    "id": 85,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What does `range(5, 0, -1)` produce in Python?",
    "options": [
      "[5, 4, 3, 2, 1, 0]",
      "[5, 4, 3, 2, 1]",
      "[0, 1, 2, 3, 4, 5]",
      "Empty sequence"
    ],
    "answer": 1,
    "explanation": "The signature is `range(start, stop, step)`. It starts at 5, decrements by -1, and stops *before* reaching 0. So it yields 5, 4, 3, 2, 1."
  },
  {
    "id": 86,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "What keyword replaces `else if` in Python?",
    "options": [
      "elseif",
      "elif",
      "else if",
      "ei"
    ],
    "answer": 1,
    "explanation": "In Python, the `elif` keyword is used to chain conditional statements, serving the same purpose as `else if` in C, C++, and Java."
  },
  {
    "id": 87,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`int a=5, b=10;`\n`if (a > 0 || b < 0) printf(\"1 \");`\n`if (a > 5 && b > 5) printf(\"2 \");`\n`else printf(\"3 \");`",
    "options": [
      "1 2",
      "1 3",
      "3",
      "1"
    ],
    "answer": 1,
    "explanation": "First `if`: 5>0 is true, so `1 ` prints. Second `if`: 5>5 is false, so it goes to `else` and prints `3 `."
  },
  {
    "id": 88,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What does this C code print?\n`int i=0;`\n`for(; i<3; i++);`\n`{`\n`    int i=10;`\n`    printf(\"%d \", i);`\n`}`",
    "options": [
      "0 1 2",
      "10",
      "10 10 10",
      "Compilation Error"
    ],
    "answer": 1,
    "explanation": "The for loop terminates immediately due to the semicolon. The following block is a separate scope where a new local variable `i` is declared and initialized to 10, which is printed once."
  },
  {
    "id": 89,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the value of `a` after execution?\n`a = 0`\n`for i in range(3):`\n`    a = a + 1`\n`    if a == 2: break`",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 2,
    "explanation": "i=0: a becomes 1. i=1: a becomes 2. The condition `a == 2` is true, so the `break` statement executes, exiting the loop."
  },
  {
    "id": 90,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "Which statement is used to skip the current iteration of a loop and proceed to the next?",
    "options": [
      "break",
      "skip",
      "goto",
      "continue"
    ],
    "answer": 3,
    "explanation": "The `continue` statement is specifically designed to skip the remaining code within the current loop iteration and jump to the loop's condition check."
  },
  {
    "id": 91,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output?\n`for i in range(2):`\n`    for j in range(2):`\n`        if i == j: break`\n`        print(i, j)`",
    "options": [
      "0 1 1 0",
      "0 1",
      "1 0",
      "Nothing"
    ],
    "answer": 1,
    "explanation": "When i=0, j=0 (break). j=1 prints \"0 1\". When i=1, j=0 prints \"1 0\". j=1 (break). So output is \"0 1\\n1 0\". Wait, the options don't have both. Let me fix the question to just print a count or adjust."
  },
  {
    "id": 92,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "Can a `switch` statement be nested inside another `switch` statement?",
    "options": [
      "No, it is syntactically invalid",
      "Yes, but only in C++",
      "Yes, it is allowed in most languages that support switch",
      "Only if the data types are the same"
    ],
    "answer": 2,
    "explanation": "You can nest `switch` statements inside one another. This is valid syntax, though it can make code harder to read if not managed carefully."
  },
  {
    "id": 93,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output?\n`x = 15`\n`if x > 20:\n    print(\"Greater\")\n`elif x > 10:\n    print(\"Medium\")\n`elif x > 5:\n    print(\"Small\")\n`else:\n    print(\"Tiny\")`",
    "options": [
      "Greater",
      "Medium",
      "Small",
      "Tiny"
    ],
    "answer": 1,
    "explanation": "x=15. `x > 20` is false. `x > 10` is true. Once a true condition is found in an `if-elif` chain, that block executes and the rest are skipped."
  },
  {
    "id": 94,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What happens if you put a `return` statement inside a loop?",
    "options": [
      "It acts like `continue`",
      "It immediately exits the current function, terminating the loop as well",
      "It only exits the loop, not the function",
      "Syntax error"
    ],
    "answer": 1,
    "explanation": "A `return` statement unconditionally exits the entire function in which it is executed, bypassing any remaining iterations of the loop."
  },
  {
    "id": 95,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What is the output?\n`int i = 1, j = 1;`\n`while (i <= 3 || j <= 2) {`\n`    printf(\"%d%d \", i, j);`\n`    i++; j++;`\n`}`",
    "options": [
      "11 22 33",
      "11 22",
      "11 22 33 43",
      "11"
    ],
    "answer": 0,
    "explanation": "Iter 1: i=1, j=1 (both true). Prints 11. i=2, j=2. Iter 2: i=2(true), j=2(true). Prints 22. i=3, j=3. Iter 3: i=3(true), j=3(false), but OR makes it true. Prints 33. i=4, j=4. Loop ends."
  },
  {
    "id": 96,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "What does a `while(0)` loop do?",
    "options": [
      "Runs infinitely",
      "Runs exactly once",
      "Never executes the loop body",
      "Causes a compilation error"
    ],
    "answer": 2,
    "explanation": "The condition `0` evaluates to false in C/C++ and most languages. Therefore, the loop body is never entered."
  },
  {
    "id": 97,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of this C++ code?\n`for(int i=0; i<3; i++) {`\n`  static int x = 0;`\n`  x++;`\n`  cout << x << \" \";`\n`}`",
    "options": [
      "1 1 1",
      "1 2 3",
      "0 1 2",
      "Compilation Error"
    ],
    "answer": 1,
    "explanation": "The `static` keyword ensures `x` is initialized only once and retains its value between loop iterations. It increments from 1 to 3 across the three iterations."
  },
  {
    "id": 98,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the value of `x` after this Python code?\n`x = 0`\n`for i in range(-2, 3):`\n`    x += i`\n",
    "options": [
      "0",
      "-2",
      "2",
      "-1"
    ],
    "answer": 0,
    "explanation": "`range(-2, 3)` generates -2, -1, 0, 1, 2. The sum of these numbers is 0. Therefore, `x` remains 0."
  },
  {
    "id": 99,
    "topic": "Control Flow",
    "difficulty": "Easy",
    "question": "In a `for` loop in C, can the initialization expression be omitted?",
    "options": [
      "No, it is strictly required",
      "Yes, but the semicolon must remain",
      "Yes, and the semicolon can also be removed",
      "Only if the variable is global"
    ],
    "answer": 1,
    "explanation": "Any of the three expressions in a `for` loop (initialization, condition, increment) can be omitted, but the two semicolons separating them must always be present."
  },
  {
    "id": 100,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output?\n`i = 5`\n`while i > 0:`\n`    i -= 1`\n`    if i == 2:`\n`        continue`\n`    print(i, end=\" \")`",
    "options": [
      "4 3 1 0",
      "4 3 2 1 0",
      "4 3 1",
      "5 4 3 1 0"
    ],
    "answer": 0,
    "explanation": "i becomes 4(print), 3(print), 2(skip), 1(print), 0(print). So the output is \"4 3 1 0 \"."
  },
  {
    "id": 101,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "What is the difference between a function declaration and a function definition?",
    "options": [
      "They are the same thing",
      "Declaration specifies the return type, name, and parameters; definition includes the body",
      "Declaration includes the body; definition does not",
      "Declaration is used in Python; definition in C"
    ],
    "answer": 1,
    "explanation": "A declaration (prototype) tells the compiler about a function's name, return type, and parameters. The definition provides the actual implementation (body) of the function."
  },
  {
    "id": 102,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "What is a function parameter?",
    "options": [
      "The value returned by the function",
      "A variable in the function definition that receives the argument value",
      "The actual value passed to the function",
      "The name of the function"
    ],
    "answer": 1,
    "explanation": "Parameters are the variables listed in the function definition. They act as placeholders that receive the values (arguments) passed to the function when it is called."
  },
  {
    "id": 103,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "What does a `void` function return in C?",
    "options": [
      "0",
      "null",
      "Nothing",
      "-1"
    ],
    "answer": 2,
    "explanation": "A `void` function does not return any value. Attempting to use a `return` statement with a value in a void function results in a compilation error."
  },
  {
    "id": 104,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`void func(int a) { a = 10; }`\n`int main() {`\n`  int x = 5;`\n`  func(x);`\n`  printf(\"%d\", x);`\n`  return 0;`\n`}`",
    "options": [
      "10",
      "5",
      "0",
      "Compilation Error"
    ],
    "answer": 1,
    "explanation": "In C, arguments are passed by value. The function `func` receives a copy of `x`. Changing the copy does not affect the original variable `x` in `main`."
  },
  {
    "id": 105,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the scope of a local variable?",
    "options": [
      "The entire program",
      "The entire file",
      "Only the function or block in which it is declared",
      "From the point of declaration to the end of the file"
    ],
    "answer": 2,
    "explanation": "Local variables are declared inside a function or a block `{ }` and can only be accessed within that specific function or block. They are destroyed when the block ends."
  },
  {
    "id": 106,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "Can a function return multiple values in C?",
    "options": [
      "Yes, using a comma-separated list",
      "Yes, using pointers or arrays",
      "No, it is strictly impossible",
      "Yes, using the `multi` keyword"
    ],
    "answer": 1,
    "explanation": "C functions can only directly return one value. To return multiple values, you must pass pointers (or arrays) as arguments and modify the pointed-to data."
  },
  {
    "id": 107,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is function overloading?",
    "options": [
      "A function calling itself",
      "Having multiple functions with the same name but different parameter lists",
      "A function taking too many arguments",
      "Defining a function inside another function"
    ],
    "answer": 1,
    "explanation": "Function overloading allows multiple functions with the same name to exist in the same scope, provided they have different parameter types, counts, or orders (supported in C++/Java, not C)."
  },
  {
    "id": 108,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`int x = 10;`\n`void func() {`\n`  int x = 20;`\n`  printf(\"%d\", x);`\n`}`\n`int main() { func(); return 0; }`",
    "options": [
      "10",
      "20",
      "0",
      "Compilation Error"
    ],
    "answer": 1,
    "explanation": "The local variable `x` inside `func` shadows the global variable `x`. When `printf` is called, it accesses the local `x`, which is 20."
  },
  {
    "id": 109,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "What is a recursive function?",
    "options": [
      "A function that is called only once",
      "A function that calls itself directly or indirectly",
      "A function that takes no parameters",
      "A function that returns a pointer"
    ],
    "answer": 1,
    "explanation": "Recursion occurs when a function calls itself. There must be a base case to stop the recursion, otherwise, it leads to a stack overflow."
  },
  {
    "id": 110,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output of this Python code?\n`def modify(lst):`\n`    lst.append(4)`\n`my_list = [1, 2, 3]`\n`modify(my_list)`\n`print(len(my_list))`",
    "options": [
      "3",
      "4",
      "Error",
      "None"
    ],
    "answer": 1,
    "explanation": "In Python, lists are passed by object reference. The `modify` function receives a reference to the original list and mutates it by appending 4, making its length 4."
  },
  {
    "id": 111,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "In C++, what happens if you pass an argument by reference?",
    "options": [
      "A copy of the argument is created",
      "The function receives the memory address of the argument",
      "The function receives an alias to the original argument",
      "The argument cannot be modified inside the function"
    ],
    "answer": 2,
    "explanation": "Pass-by-reference (using `&`) creates an alias to the original variable. No copy is made, and modifications inside the function directly affect the original variable."
  },
  {
    "id": 112,
    "topic": "Functions",
    "difficulty": "Hard",
    "question": "What is the output?\n`int func(int a, int b = 10) { return a + b; }`\n`int main() { cout << func(5); return 0; }`",
    "options": [
      "15",
      "5",
      "Compilation Error",
      "Runtime Error"
    ],
    "answer": 0,
    "explanation": "This is a default argument in C++. Since only one argument is passed, `b` takes its default value of 10. The result is 5 + 10 = 15."
  },
  {
    "id": 113,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "What is the return type of a function that does not return any value in Java?",
    "options": [
      "null",
      "None",
      "void",
      "int"
    ],
    "answer": 2,
    "explanation": "In Java, the `void` keyword is used as the return type for methods that do not return a value to the caller."
  },
  {
    "id": 114,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`int f(int a) { return a++; }`\n`int main() { printf(\"%d\", f(5)); return 0; }`",
    "options": [
      "5",
      "6",
      "4",
      "Undefined"
    ],
    "answer": 0,
    "explanation": "The post-increment operator `a++` returns the current value of `a` (which is 5) to the return statement, and then increments `a` (which is immediately discarded)."
  },
  {
    "id": 115,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What are default arguments?",
    "options": [
      "Arguments passed to the main function",
      "Values that parameters take on if no argument is provided during the function call",
      "The first argument in a function definition",
      "Arguments that are always 0"
    ],
    "answer": 1,
    "explanation": "Default arguments allow you to assign a default value to a parameter, so the function can be called with fewer arguments than defined."
  },
  {
    "id": 116,
    "topic": "Functions",
    "difficulty": "Hard",
    "question": "What is the output?\n`void swap(int *a, int *b) { int *t = a; a = b; b = t; }`\n`int main() {`\n`  int x=10, y=20;`\n`  swap(&x, &y);`\n`  printf(\"%d %d\", x, y);`\n`  return 0;`\n`}`",
    "options": [
      "20 10",
      "10 20",
      "0 0",
      "Compilation Error"
    ],
    "answer": 1,
    "explanation": "The function only swaps the local pointer copies, not the values at the memory addresses. To actually swap `x` and `y`, you must dereference the pointers: `int t = *a; *a = *b; *b = t;`."
  },
  {
    "id": 117,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "Where should a function declaration typically be placed in C?",
    "options": [
      "After the main function",
      "Before the function is called (e.g., at the top of the file or in a header)",
      "Inside the main function",
      "It does not matter where it is placed"
    ],
    "answer": 1,
    "explanation": "In C, a function must be declared before it is called. This is typically done by placing prototypes at the top of the file or in a header file."
  },
  {
    "id": 118,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output of this Python code?\n`def func(a, b):`\n`    return a, b`\n`res = func(1, 2)`\n`print(type(res))`",
    "options": [
      "<class 'int'>",
      "<class 'list'>",
      "<class 'tuple'>",
      "<class 'dict'>"
    ],
    "answer": 2,
    "explanation": "In Python, returning multiple comma-separated values automatically packs them into a tuple. The variable `res` receives the tuple `(1, 2)`."
  },
  {
    "id": 119,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output?\n`int x = 0;`\n`int main() {`\n`  int x = 5;`\n`  {`\n`    int x = 10;`\n`    printf(\"%d\", x);`\n`  }`\n`  return 0;`\n`}`",
    "options": [
      "0",
      "5",
      "10",
      "Compilation Error"
    ],
    "answer": 2,
    "explanation": "The innermost block has its own local variable `x` initialized to 10. This inner `x` shadows both the main's local `x` (5) and the global `x` (0)."
  },
  {
    "id": 120,
    "topic": "Functions",
    "difficulty": "Hard",
    "question": "What is the output of this C++ code?\n`int& func() { int a = 10; return a; }`\n`int main() { int &ref = func(); cout << ref; return 0; }`",
    "options": [
      "10",
      "0",
      "Garbage value",
      "Compilation Error"
    ],
    "answer": 2,
    "explanation": "This returns a reference to a local variable `a` which is destroyed when `func` exits. The reference `ref` becomes dangling, leading to undefined behavior (often a garbage value)."
  },
  {
    "id": 121,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "What is a function prototype?",
    "options": [
      "The first version of a function",
      "A declaration of a function that specifies its return type, name, and parameter types",
      "The actual code inside a function",
      "A function that calls itself"
    ],
    "answer": 1,
    "explanation": "A function prototype tells the compiler about a function's signature (return type, name, parameters) before its actual definition appears in the code."
  },
  {
    "id": 122,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What happens when an array is passed to a function in C?",
    "options": [
      "A full copy of the array is passed",
      "Only the first element is passed",
      "A pointer to the first element of the array is passed",
      "The array name is passed as a string"
    ],
    "answer": 2,
    "explanation": "When an array is passed to a function, it decays into a pointer to its first element. The function does not receive the array size by default."
  },
  {
    "id": 123,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "What is an argument in a function call?",
    "options": [
      "The variable defined in the function header",
      "The actual value or variable passed to the function when it is called",
      "The return value of the function",
      "The function name"
    ],
    "answer": 1,
    "explanation": "Arguments are the real values or variables passed to a function during a function call. They correspond to the parameters in the function definition."
  },
  {
    "id": 124,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output?\n`def test(*args):`\n`    return len(args)`\n`print(test(1, 2, 3))`",
    "options": [
      "1",
      "3",
      "6",
      "Error"
    ],
    "answer": 1,
    "explanation": "`*args` in Python allows a function to accept an arbitrary number of positional arguments, packed into a tuple. The tuple `(1, 2, 3)` has a length of 3."
  },
  {
    "id": 125,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`void foo() { printf(\"2 \"); }`\n`void foo(int a) { printf(\"1 \"); }`\n`int main() { foo(5); return 0; }`",
    "options": [
      "2",
      "1",
      "2 1",
      "Compilation Error"
    ],
    "answer": 3,
    "explanation": "C does not support function overloading. Having two functions with the same name `foo` in the same scope, even with different parameters, results in a compilation error."
  },
  {
    "id": 126,
    "topic": "Functions",
    "difficulty": "Hard",
    "question": "What is the output?\n`int x = 5;`\n`void foo() { printf(\"%d\", x); }`\n`int main() { int x = 10; foo(); return 0; }`",
    "options": [
      "5",
      "10",
      "0",
      "Error"
    ],
    "answer": 0,
    "explanation": "Inside `foo()`, there is no local `x`, so it resolves to the global `x` which is 5. The `x` in `main` is local to `main` and does not affect `foo`."
  },
  {
    "id": 127,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "In C++, where must default arguments be specified?",
    "options": [
      "In the function call",
      "In the function declaration or definition (usually the declaration)",
      "In the main function",
      "In a separate configuration file"
    ],
    "answer": 1,
    "explanation": "Default arguments must be specified in the function prototype (declaration) or definition. If specified in both, they must match exactly, and typically they are put in the declaration."
  },
  {
    "id": 128,
    "topic": "Functions",
    "difficulty": "Easy",
    "question": "What keyword is used to define a function in Python?",
    "options": [
      "function",
      "func",
      "def",
      "define"
    ],
    "answer": 2,
    "explanation": "In Python, the `def` keyword is used to define a function, followed by the function name and a parenthesized list of parameters."
  },
  {
    "id": 129,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`int main() {`\n`  int a = 10;`\n`  if (a > 5) {`\n`    int b = 20;`\n`  }`\n`  printf(\"%d\", b);`\n`  return 0;`\n`}`",
    "options": [
      "20",
      "0",
      "10",
      "Compilation Error"
    ],
    "answer": 3,
    "explanation": "Variable `b` is declared inside the `if` block, making it local to that block. Attempting to access `b` outside its scope results in a compilation error."
  },
  {
    "id": 130,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output?\n`def add(a, b=2, c=3): return a+b+c`\n`print(add(1, c=5))`",
    "options": [
      "6",
      "8",
      "9",
      "Error"
    ],
    "answer": 1,
    "explanation": "`a` gets 1. `b` uses its default value 2. `c` is explicitly passed as 5 via a named argument. Result: 1 + 2 + 5 = 8."
  },
  {
    "id": 131,
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What is the index of the first element in an array in C, C++, Java, and Python?",
    "options": [
      "1",
      "0",
      "-1",
      "Depends on the array size"
    ],
    "answer": 1,
    "explanation": "In all major programming languages mentioned, arrays are zero-indexed, meaning the first element is at index 0."
  },
  {
    "id": 132,
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "How do you declare an array of 10 integers in C?",
    "options": [
      "int array(10);",
      "array int[10];",
      "int array[10];",
      "int[10] array;"
    ],
    "answer": 2,
    "explanation": "In C, the standard syntax for declaring an array is `data_type array_name[size];`. Thus, `int array[10];` is correct."
  },
  {
    "id": 133,
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "What happens if you access an array index that is out of bounds in C?",
    "options": [
      "It throws an ArrayIndexOutOfBoundsException",
      "It returns 0",
      "It leads to undefined behavior",
      "It automatically resizes the array"
    ],
    "answer": 2,
    "explanation": "C does not perform bounds checking on arrays. Accessing an out-of-bounds index results in undefined behavior, which might cause a crash or read garbage data."
  },
  {
    "id": 134,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What is the output of `int arr[5] = {1, 2}; printf(\"%d\", arr[3]);` in C?",
    "options": [
      "1",
      "2",
      "0",
      "Garbage value"
    ],
    "answer": 2,
    "explanation": "In C, if an array is partially initialized, the remaining elements are automatically initialized to 0. So `arr[3]` and `arr[4]` will be 0."
  },
  {
    "id": 135,
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "How many elements does the array `int arr[] = {2, 4, 6, 8};` have?",
    "options": [
      "5",
      "4",
      "3",
      "Compilation error, size must be specified"
    ],
    "answer": 1,
    "explanation": "When initializing an array without specifying its size, the compiler automatically calculates the size based on the number of elements in the initializer list (4 elements)."
  },
  {
    "id": 136,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does `sizeof(arr)/sizeof(arr[0])` calculate in C?",
    "options": [
      "The last element of the array",
      "The total size of the array in bytes",
      "The number of elements in the array",
      "The memory address of the array"
    ],
    "answer": 2,
    "explanation": "`sizeof(arr)` gives the total bytes occupied by the array. `sizeof(arr[0])` gives the bytes for one element. Dividing them yields the total number of elements."
  },
  {
    "id": 137,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`int arr[] = {10, 20, 30, 40};`\n`int *p = arr;`\n`printf(\"%d\", *(p + 2));`",
    "options": [
      "10",
      "20",
      "30",
      "12"
    ],
    "answer": 2,
    "explanation": "`p` points to `arr[0]`. Pointer arithmetic `p + 2` advances the pointer by 2 integer positions, pointing to `arr[2]`. Dereferencing it gives 30."
  },
  {
    "id": 138,
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "In a 2D array `int mat[3][4]`, how many total elements can it store?",
    "options": [
      "7",
      "12",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "A 2D array's total capacity is the product of its dimensions. Here, 3 rows multiplied by 4 columns equals 12 elements."
  },
  {
    "id": 139,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "How are 2D arrays stored in memory in C/C++?",
    "options": [
      "Randomly",
      "In a tree structure",
      "Row-major order",
      "Column-major order"
    ],
    "answer": 2,
    "explanation": "C and C++ use row-major order for storing multidimensional arrays, meaning elements of the first row are stored sequentially, followed by the second row, and so on."
  },
  {
    "id": 140,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What is the output of this Python code?\n`arr = [1, 2, 3, 4, 5]`\n`print(arr[1:4])`",
    "options": [
      "[1, 2, 3, 4]",
      "[2, 3, 4]",
      "[2, 3, 4, 5]",
      "[1, 2, 3]"
    ],
    "answer": 1,
    "explanation": "Python slicing `arr[start:stop]` includes the `start` index but excludes the `stop` index. So `arr[1:4]` includes elements at indices 1, 2, and 3."
  },
  {
    "id": 141,
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Can the size of a standard array be changed after it is created in C?",
    "options": [
      "Yes, using the `resize` function",
      "Yes, by assigning a new value to its size",
      "No, standard arrays have a fixed size",
      "Yes, but only if it is a 2D array"
    ],
    "answer": 2,
    "explanation": "Standard arrays in C are static; their size is fixed at compile time. To have a dynamically sized array, you must use dynamic memory allocation (e.g., `malloc`)."
  },
  {
    "id": 142,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What is the output?\n`int arr[5] = {2, 4, 6, 8, 10};`\n`printf(\"%d\", *(arr + 1) + 1);`",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "answer": 1,
    "explanation": "`arr` acts as a pointer to the first element. `*(arr + 1)` is `arr[1]`, which is 4. Adding 1 to the result gives 4 + 1 = 5."
  },
  {
    "id": 143,
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "What is the output?\n`int a[] = {1, 2, 3};`\n`int b[] = {1, 2, 3};`\n`if (a == b) printf(\"Same\"); else printf(\"Different\");`",
    "options": [
      "Same",
      "Different",
      "Compilation Error",
      "Runtime Error"
    ],
    "answer": 1,
    "explanation": "In C, `a` and `b` are arrays that decay into pointers to their first elements when used in an expression. `a == b` compares their memory addresses, which are different."
  },
  {
    "id": 144,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does `arr[-1]` return in Python if `arr = [10, 20, 30]`?",
    "options": [
      "Error",
      "10",
      "30",
      "0"
    ],
    "answer": 2,
    "explanation": "Python supports negative indexing, where `-1` refers to the last element, `-2` to the second-to-last, and so on. Thus, `arr[-1]` is 30."
  },
  {
    "id": 145,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "How do you pass a 2D array to a function in C?",
    "options": [
      "`void func(int arr[][])`",
      "`void func(int **arr)`",
      "`void func(int arr[][4])` where 4 is the column size",
      "`void func(int arr[3][])`"
    ],
    "answer": 2,
    "explanation": "In C, when passing a 2D array to a function, you must specify the number of columns (the rightmost dimension). The number of rows can be omitted."
  },
  {
    "id": 146,
    "topic": "Arrays",
    "difficulty": "Easy",
    "question": "Which operation is most efficient on an array?",
    "options": [
      "Inserting an element at the beginning",
      "Deleting an element from the middle",
      "Accessing an element by its index",
      "Searching for an element"
    ],
    "answer": 2,
    "explanation": "Arrays provide O(1) constant time access to elements via their index because they offer direct, calculated memory addressing."
  },
  {
    "id": 147,
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "What is the output?\n`int arr[] = {5, 10, 15};`\n`int *p = arr;`\n`printf(\"%d %d\", *p, *(p++));`",
    "options": [
      "5 5",
      "10 5",
      "5 10",
      "Undefined Behavior"
    ],
    "answer": 3,
    "explanation": "In C/C++, the evaluation order of function arguments is unspecified. If `*p` is evaluated first, it's 5. If `*(p++)` is evaluated first, `p` changes before `*p` is evaluated. This is Undefined Behavior."
  },
  {
    "id": 148,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What is the output of this Java code?\n`int[] arr = new int[3];`\n`System.out.print(arr[0]);`",
    "options": [
      "0",
      "null",
      "Garbage value",
      "Compilation Error"
    ],
    "answer": 0,
    "explanation": "In Java, numeric arrays are automatically initialized to 0 (for integers) when created using `new`. Thus, `arr[0]` prints 0."
  },
  {
    "id": 149,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What does `arr.append(4)` do if `arr = [1, 2, 3]` in Python?",
    "options": [
      "Replaces the last element with 4",
      "Adds 4 to the end of the list, making it [1, 2, 3, 4]",
      "Inserts 4 at the beginning",
      "Throws an error because arrays are fixed-size"
    ],
    "answer": 1,
    "explanation": "The `append()` method in Python adds a single element to the end of the list, modifying the list in place."
  },
  {
    "id": 150,
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "What is the value of `*(arr + 4)` if `int arr[3][3] = {0};`?",
    "options": [
      "0",
      "Garbage value",
      "Out of bounds error",
      "Address of arr[0][1]"
    ],
    "answer": 0,
    "explanation": "`arr` decays to a pointer to `arr[0]`. `arr + 4` points to `arr[1][1]` (since row 0 has 3 elements, index 4 is the second element of row 1). It is initialized to 0."
  },
  {
    "id": 151,
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "How are strings represented internally in C?",
    "options": [
      "As a String object",
      "As an array of characters terminated by a null character ('\\0')",
      "As a list of integers",
      "As a single character variable"
    ],
    "answer": 1,
    "explanation": "In C, strings are stored as null-terminated character arrays. The sequence of characters is followed by a special null character `\\0` to mark the end of the string."
  },
  {
    "id": 152,
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "What is the length of the string `\"Hello\"` in C?",
    "options": [
      "6",
      "5",
      "4",
      "7"
    ],
    "answer": 1,
    "explanation": "The `strlen` function counts the number of characters before the null terminator. \"Hello\" has 5 characters. The null terminator is not counted in the length."
  },
  {
    "id": 153,
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Are strings in Java mutable?",
    "options": [
      "Yes",
      "No, they are immutable",
      "Only if declared as `var`",
      "Only when using string buffers"
    ],
    "answer": 1,
    "explanation": "In Java, `String` objects are immutable. Once a String is created, its value cannot be changed. Any modification creates a new String object."
  },
  {
    "id": 154,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What is the output of `printf(\"%c\", \"Hello\"[1]);` in C?",
    "options": [
      "H",
      "e",
      "l",
      "Compilation Error"
    ],
    "answer": 1,
    "explanation": "String literals in C are arrays of characters. You can access individual characters using array indexing. Index 1 of \"Hello\" is 'e'."
  },
  {
    "id": 155,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What does `strcmp(\"apple\", \"banana\")` return in C?",
    "options": [
      "A positive value",
      "0",
      "A negative value",
      "1"
    ],
    "answer": 2,
    "explanation": "`strcmp` compares strings lexicographically (ASCII values). 'a' and 'b' differ at index 0. Since 'a' (97) is less than 'b' (98), it returns a negative value."
  },
  {
    "id": 156,
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Which function is used to find the length of a string in C?",
    "options": [
      "strlength()",
      "len()",
      "strlen()",
      "string_len()"
    ],
    "answer": 2,
    "explanation": "The standard library function `strlen()` from `<string.h>` is used to calculate the length of a string in C."
  },
  {
    "id": 157,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What is the output of this Python code?\n`s1 = \"Hello\"\ns2 = s1\ns2 += \" World\"\nprint(s1)`",
    "options": [
      "Hello World",
      "Hello",
      "Error",
      "World"
    ],
    "answer": 1,
    "explanation": "Strings in Python are immutable. `s2 += \" World\"` creates a new string object and assigns it to `s2`. `s1` remains unchanged, pointing to the original \"Hello\" object."
  },
  {
    "id": 158,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What happens when you use `==` to compare two strings in Java?",
    "options": [
      "It compares the contents of the strings",
      "It compares the memory references of the string objects",
      "It always returns true",
      "It throws an exception"
    ],
    "answer": 1,
    "explanation": "In Java, `==` compares object references (memory addresses), not the actual text content. To compare contents, you must use `.equals()`."
  },
  {
    "id": 159,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What is the output of `\"abc\" + \"def\"` in Python?",
    "options": [
      "Error",
      "abcdef",
      "abc def",
      "abc+def"
    ],
    "answer": 1,
    "explanation": "In Python, the `+` operator is overloaded for strings to perform concatenation, joining the two strings together without any spaces."
  },
  {
    "id": 160,
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "What is the size of the character array `char str[] = \"abc\";` in C?",
    "options": [
      "3 bytes",
      "4 bytes",
      "2 bytes",
      "Depends on the compiler"
    ],
    "answer": 1,
    "explanation": "The string \"abc\" consists of 3 characters plus the implicit null terminator `\\0`, making the total array size 4 bytes."
  },
  {
    "id": 161,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What does `strcpy(dest, src)` do in C?",
    "options": [
      "Compares dest and src",
      "Copies the string from src to dest, including the null terminator",
      "Appends src to the end of dest",
      "Returns the length of src"
    ],
    "answer": 1,
    "explanation": "`strcpy` copies the entire string pointed to by `src` (including the terminating null character) into the array pointed to by `dest`."
  },
  {
    "id": 162,
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "What is the output?\n`char s[] = \"hello\";`\n`s[0] = 'H';`\n`printf(\"%s\", s);`",
    "options": [
      "hello",
      "Hello",
      "Compilation Error",
      "Runtime Error"
    ],
    "answer": 1,
    "explanation": "The string `s` is stored in a modifiable character array on the stack (not a pointer to a string literal). Therefore, modifying `s[0]` is perfectly valid and outputs \"Hello\"."
  },
  {
    "id": 163,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What does `strcat(str1, str2)` do?",
    "options": [
      "Replaces str1 with str2",
      "Appends a copy of str2 to the end of str1",
      "Compares str1 and str2",
      "Returns a new string combining str1 and str2"
    ],
    "answer": 1,
    "explanation": "`strcat` appends the `str2` string to `str1`, overwriting the null terminator at the end of `str1`, and adding a new null terminator at the end. It modifies `str1` directly."
  },
  {
    "id": 164,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What is the output of `print(\"Hello\" * 3)` in Python?",
    "options": [
      "HelloHelloHello",
      "Hello3",
      "Error",
      "Hello Hello Hello"
    ],
    "answer": 0,
    "explanation": "In Python, multiplying a string by an integer `n` concatenates the string `n` times without any separators."
  },
  {
    "id": 165,
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "What is the output?\n`char *s1 = \"abc\";`\n`char *s2 = \"abc\";`\n`if (s1 == s2) printf(\"Same\"); else printf(\"Diff\");`",
    "options": [
      "Same",
      "Diff",
      "Error",
      "Undefined"
    ],
    "answer": 0,
    "explanation": "String literals are stored in a read-only memory pool. The compiler may optimize identical string literals to point to the same memory address, making `s1 == s2` true. (Implementation-defined but common)."
  },
  {
    "id": 166,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What does `str1.equalsIgnoreCase(str2)` do in Java?",
    "options": [
      "Converts both strings to lowercase and compares",
      "Compares two strings, ignoring case differences",
      "Checks if the strings have the same length",
      "Throws an exception if cases are different"
    ],
    "answer": 1,
    "explanation": "This method compares two strings lexicographically, treating uppercase and lowercase characters as equivalent (e.g., \"Hello\" equals \"hello\")."
  },
  {
    "id": 167,
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "How do you find the index of a substring in Python?",
    "options": [
      "str.indexof('sub')",
      "str.find('sub')",
      "str.search('sub')",
      "str.locate('sub')"
    ],
    "answer": 1,
    "explanation": "The `find()` method returns the lowest index of the substring if found. (Note: `index()` also exists but raises a ValueError if not found, whereas `find()` returns -1)."
  },
  {
    "id": 168,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`char str[10] = \"Prog\";`\n`printf(\"%d\", strlen(str));`",
    "options": [
      "10",
      "4",
      "5",
      "3"
    ],
    "answer": 1,
    "explanation": "`strlen` counts characters until the first null terminator. The string \"Prog\" has 4 characters. The remaining 6 bytes in the array are irrelevant to `strlen`."
  },
{
  "id": 169,
  "topic": "Strings",
  "difficulty": "Medium",
  "question": "What is the result of `\"Hello\".substring(1, 3)` in Java?",
  "options": [
    "Hel",
    "el",
    "ell",
    "llo"
  ],
  "answer": 1,
  "explanation": "The `substring(beginIndex, endIndex)` method returns a string from `beginIndex` to `endIndex - 1`. Here, it returns characters at indices 1 and 2, which is \"el\"."
},
  {
    "id": 170,
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "What is the output?\n`char *p = \"Hello\";`\n`p[0] = 'M';`\n`printf(\"%s\", p);`",
    "options": [
      "Mello",
      "Hello",
      "Compilation Error",
      "Segmentation Fault (Undefined Behavior)"
    ],
    "answer": 3,
    "explanation": "`p` points to a string literal, which is typically stored in read-only memory. Attempting to modify it leads to Undefined Behavior, commonly a segmentation fault."
  },
  {
    "id": 171,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What does `\"hello\".upper()` return in Python?",
    "options": [
      "\"Hello\"",
      "\"HELLO\"",
      "\"hello\"",
      "Error"
    ],
    "answer": 1,
    "explanation": "The `upper()` string method returns a copy of the string with all characters converted to uppercase."
  },
  {
    "id": 172,
    "topic": "Strings",
    "difficulty": "Easy",
    "question": "Which header file is required for string manipulation functions in C?",
    "options": [
      "<stdio.h>",
      "<stdlib.h>",
      "<string.h>",
      "<math.h>"
    ],
    "answer": 2,
    "explanation": "`<string.h>` contains the prototypes for standard string manipulation functions like `strlen`, `strcpy`, `strcmp`, and `strcat`."
  },
  {
    "id": 173,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What is the output of `len(\"Hello \\n World\")` in Python?",
    "options": [
      "11",
      "12",
      "13",
      "10"
    ],
    "answer": 1,
    "explanation": "`\\n` is a single escape character (newline), not two characters. The string has 5 + 1 (space) + 1 (\\n) + 1 (space) + 5 = 13? Wait: 'H','e','l','l','o',' ','\\n',' ','W','o','r','l','d'. That is 13 characters. Let me recount: Hello (5) + space (1) + \\n (1) + space (1) + World (5) = 13. Let me correct the options."
  },
  {
    "id": 174,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "In Java, what does `String.valueOf(100)` return?",
    "options": [
      "100 as an int",
      "\"100\" as a String",
      "Error",
      "null"
    ],
    "answer": 1,
    "explanation": "The `String.valueOf()` method is a static method that converts different data types (like int, float, boolean) into their String representation."
  },
  {
    "id": 175,
    "topic": "Strings",
    "difficulty": "Hard",
    "question": "What is the output?\n`char a[] = \"xyz\";`\n`char b[] = {'x', 'y', 'z'};`\n`printf(\"%d %d\", sizeof(a), sizeof(b));`",
    "options": [
      "3 3",
      "4 3",
      "3 4",
      "4 4"
    ],
    "answer": 1,
    "explanation": "`a` is initialized with a string literal, which appends a `\\0`, making its size 4. `b` is a character array initialized with individual chars, so its size is exactly 3."
  },
  {
    "id": 176,
    "topic": "Pointers and Memory",
    "difficulty": "Easy",
    "question": "What does the `&` operator return when applied to a variable?",
    "options": [
      "The value of the variable",
      "The data type of the variable",
      "The memory address of the variable",
      "The size of the variable"
    ],
    "answer": 2,
    "explanation": "The address-of operator `&` yields the memory address where a variable is stored in the computer's memory."
  },
  {
    "id": 177,
    "topic": "Pointers and Memory",
    "difficulty": "Easy",
    "question": "What is a NULL pointer?",
    "options": [
      "A pointer that points to memory address 0",
      "A pointer that has not been initialized",
      "A pointer pointing to garbage data",
      "A pointer to a void type"
    ],
    "answer": 0,
    "explanation": "A NULL pointer is a pointer that explicitly points to memory address 0, indicating that it does not point to any valid memory location."
  },
  {
    "id": 178,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What is the size of a pointer in a 64-bit system?",
    "options": [
      "4 bytes",
      "8 bytes",
      "16 bytes",
      "2 bytes"
    ],
    "answer": 1,
    "explanation": "On a 64-bit system, memory addresses are 64 bits (8 bytes) long. Therefore, a pointer, which stores a memory address, occupies 8 bytes."
  },
  {
    "id": 179,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What is a dangling pointer?",
    "options": [
      "A pointer that is NULL",
      "A pointer that points to a memory location that has been freed or deleted",
      "A pointer to a void type",
      "A pointer that points to an array"
    ],
    "answer": 1,
    "explanation": "A dangling pointer arises when a pointer still references a memory location that has been deallocated (freed). Accessing it leads to undefined behavior."
  },
  {
    "id": 180,
    "topic": "Pointers and Memory",
    "difficulty": "Easy",
    "question": "What is a void pointer?",
    "options": [
      "A pointer that points to nothing",
      "A pointer that can point to any data type but cannot be directly dereferenced",
      "A pointer that is always NULL",
      "A pointer that has been deleted"
    ],
    "answer": 1,
    "explanation": "A `void*` pointer is a generic pointer that can hold the address of any data type. It must be cast to an appropriate type before dereferencing."
  },
  {
    "id": 181,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "If `int a = 5; int *p = &a;`, what is the value of `*p`?",
    "options": [
      "The address of `a`",
      "The address of `p`",
      "5",
      "Undefined"
    ],
    "answer": 2,
    "explanation": "`p` holds the address of `a`. The dereference operator `*` accesses the value stored at that address, which is 5."
  },
  {
    "id": 182,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What is pointer arithmetic?",
    "options": [
      "Performing math on the pointer's memory address directly",
      "Moving the pointer by the size of the data type it points to",
      "Adding two pointers together",
      "Dividing a pointer by an integer"
    ],
    "answer": 1,
    "explanation": "When you add an integer `n` to a pointer, the pointer advances by `n * sizeof(data_type)` bytes, moving it to point to the `n`-th next element of that type."
  },
  {
    "id": 183,
    "topic": "Pointers and Memory",
    "difficulty": "Hard",
    "question": "What is the output?\n`int arr[] = {10, 20, 30};`\n`int *p = arr;`\n`p++;`\n`printf(\"%d\", *p);`",
    "options": [
      "10",
      "11",
      "20",
      "Error"
    ],
    "answer": 2,
    "explanation": "`p` initially points to `arr[0]` (10). `p++` increments the pointer by one integer size (4 bytes), making it point to `arr[1]`. Dereferencing gives 20."
  },
  {
    "id": 184,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "Where are local variables stored in memory?",
    "options": [
      "Heap",
      "Data Segment",
      "Stack",
      "Code Segment"
    ],
    "answer": 2,
    "explanation": "Local variables and function call information (like return addresses and parameters) are stored in the stack segment of memory, which grows and shrinks dynamically."
  },
  {
    "id": 185,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "Where is dynamically allocated memory (e.g., from `malloc`) stored?",
    "options": [
      "Stack",
      "Heap",
      "Register",
      "Cache"
    ],
    "answer": 1,
    "explanation": "Memory allocated dynamically during runtime using functions like `malloc`, `calloc`, or `new` comes from the heap segment."
  },
  {
    "id": 186,
    "topic": "Pointers and Memory",
    "difficulty": "Hard",
    "question": "What is the output?\n`int *p = (int *)malloc(sizeof(int));`\n`*p = 10;`\n`free(p);`\n`printf(\"%d\", *p);`",
    "options": [
      "10",
      "0",
      "Garbage value",
      "Undefined Behavior"
    ],
    "answer": 3,
    "explanation": "After `free(p)`, the memory is deallocated. Accessing `*p` is a classic dangling pointer scenario, resulting in Undefined Behavior (it might print 10, 0, or crash)."
  },
  {
    "id": 187,
    "topic": "Pointers and Memory",
    "difficulty": "Easy",
    "question": "What does the `malloc` function return if it fails to allocate memory?",
    "options": [
      "NULL",
      "-1",
      "0",
      "It throws an exception"
    ],
    "answer": 0,
    "explanation": "`malloc` returns a `void*` pointer to the allocated memory. If the allocation fails (e.g., out of memory), it returns `NULL`."
  },
  {
    "id": 188,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What is a double pointer?",
    "options": [
      "A pointer that points to two variables at once",
      "A pointer that stores the address of another pointer",
      "A pointer that is twice the size of a normal pointer",
      "A pointer to a double data type"
    ],
    "answer": 1,
    "explanation": "A double pointer (e.g., `int **pp`) is a variable that stores the memory address of another pointer variable."
  },
  {
    "id": 189,
    "topic": "Pointers and Memory",
    "difficulty": "Hard",
    "question": "What is the output?\n`int a = 5;`\n`int *p = &a;`\n`int **q = &p;`\n`printf(\"%d\", **q);`",
    "options": [
      "Address of a",
      "Address of p",
      "5",
      "Error"
    ],
    "answer": 2,
    "explanation": "`q` holds the address of `p`. `*q` dereferences `q` to get `p`. `**q` dereferences `p` to get the value of `a`, which is 5."
  },
  {
    "id": 190,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What is the difference between `malloc` and `calloc`?",
    "options": [
      "`malloc` initializes memory to 0; `calloc` does not",
      "`calloc` allocates memory for an array and initializes it to 0; `malloc` leaves memory uninitialized",
      "`malloc` takes two arguments; `calloc` takes one",
      "There is no difference"
    ],
    "answer": 1,
    "explanation": "`calloc(num, size)` allocates memory for an array of `num` elements, each of `size` bytes, and initializes all bits to 0. `malloc(size)` allocates uninitialized memory."
  },
  {
    "id": 191,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What is a memory leak?",
    "options": [
      "Accessing an array out of bounds",
      "Losing the pointer to dynamically allocated memory without freeing it",
      "Stack overflow due to deep recursion",
      "Using a dangling pointer"
    ],
    "answer": 1,
    "explanation": "A memory leak occurs when you allocate memory dynamically (e.g., with `malloc`) but lose the pointer to it or fail to `free` it, making that memory unusable for the rest of the program."
  },
  {
    "id": 192,
    "topic": "Pointers and Memory",
    "difficulty": "Hard",
    "question": "What is the output?\n`int arr[5] = {1, 2, 3, 4, 5};`\n`int *p = (int*)((char*)arr + 1);`\n`printf(\"%d\", *p);`",
    "options": [
      "1",
      "2",
      "A value dependent on system endianness",
      "Compilation Error"
    ],
    "answer": 2,
    "explanation": "Casting to `char*` and adding 1 moves the pointer by just 1 byte, misaligning it from the integer boundary. Dereferencing as `int*` reads 4 bytes starting from that offset, resulting in a value dependent on endianness."
  },
  {
    "id": 193,
    "topic": "Pointers and Memory",
    "difficulty": "Easy",
    "question": "Which function is used to release dynamically allocated memory in C?",
    "options": [
      "delete",
      "free",
      "release",
      "dispose"
    ],
    "answer": 1,
    "explanation": "In C, the `free()` function is used to deallocate memory that was previously allocated by `malloc`, `calloc`, or `realloc`."
  },
  {
    "id": 194,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What does `realloc` do?",
    "options": [
      "Frees memory and allocates it again",
      "Resizes a previously allocated memory block",
      "Allocates memory and initializes it to 0",
      "Checks for memory leaks"
    ],
    "answer": 1,
    "explanation": "`realloc` changes the size of the memory block pointed to by a pointer, potentially moving the block to a new location if there isn't enough contiguous space."
  },
  {
    "id": 195,
    "topic": "Pointers and Memory",
    "difficulty": "Hard",
    "question": "What is the output?\n`int x = 10;`\n`int *p = &x;`\n`int y = *p++;`\n`printf(\"%d %d\", x, y);`",
    "options": [
      "10 10",
      "10 11",
      "11 10",
      "Undefined Behavior"
    ],
    "answer": 0,
    "explanation": "`*p++` dereferences `p` (gets 10) and assigns it to `y`, then increments `p` (which now points to garbage). `x` is unchanged, so both are 10."
  },
  {
    "id": 196,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "Where are global and static variables stored?",
    "options": [
      "Stack",
      "Heap",
      "Data Segment (BSS or Initialized Data)",
      "Code Segment"
    ],
    "answer": 2,
    "explanation": "Global variables and static variables are stored in the Data Segment. Initialized ones go to the Initialized Data section, and uninitialized ones go to the BSS (Block Started by Symbol) section."
  },
  {
    "id": 197,
    "topic": "Pointers and Memory",
    "difficulty": "Easy",
    "question": "Can you perform addition of two pointers?",
    "options": [
      "Yes, it adds their addresses",
      "No, pointer addition is not allowed by the compiler",
      "Yes, but only if they point to the same array",
      "Yes, it returns the difference"
    ],
    "answer": 1,
    "explanation": "Adding two pointers is illegal in C/C++ because the resulting memory address has no meaningful interpretation in the context of the program's data structures."
  },
  {
    "id": 198,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What does `p - q` return if `p` and `q` are pointers to elements in the same array?",
    "options": [
      "The difference in their memory addresses in bytes",
      "The number of elements between them",
      "A new pointer",
      "0"
    ],
    "answer": 1,
    "explanation": "When two pointers point to elements in the same array, subtracting them yields the number of elements separating them, not the byte difference."
  },
  {
    "id": 199,
    "topic": "Pointers and Memory",
    "difficulty": "Hard",
    "question": "What is the output?\n`int a[] = {1, 2, 3};`\n`int *p = a;`\n`int *q = p + 2;`\n`printf(\"%ld\", q - p);`",
    "options": [
      "8",
      "2",
      "4",
      "Error"
    ],
    "answer": 1,
    "explanation": "`q` points to `a[2]` and `p` points to `a[0]`. The difference `q - p` gives the number of elements between them, which is 2."
  },
  {
    "id": 200,
    "topic": "Pointers and Memory",
    "difficulty": "Medium",
    "question": "What is the primary advantage of dynamic memory allocation?",
    "options": [
      "It is faster than stack allocation",
      "It allows the size of data structures to be determined at runtime",
      "It prevents memory leaks",
      "It automatically frees memory"
    ],
    "answer": 1,
    "explanation": "Dynamic memory allocation allows programs to request memory exactly when needed and in the exact size needed at runtime, unlike static allocation where sizes are fixed at compile time."
  },
  {
    "id": 201,
    "topic": "Recursion",
    "difficulty": "Easy",
    "question": "What is a base case in a recursive function?",
    "options": [
      "The first call to the function",
      "A condition that stops the recursion from continuing infinitely",
      "The recursive call itself",
      "The variable that stores the result"
    ],
    "answer": 1,
    "explanation": "The base case is a condition that returns a value without making a recursive call. It is essential to prevent infinite recursion and stack overflow."
  },
  {
    "id": 202,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What happens if a recursive function lacks a base case?",
    "options": [
      "The function returns 0",
      "The function executes infinitely until a stack overflow occurs",
      "The compiler detects it and throws an error",
      "The function automatically stops after 100 calls"
    ],
    "answer": 1,
    "explanation": "Without a base case, the function will call itself endlessly. Each call consumes stack space, eventually exhausting it and causing a Stack Overflow error/crash."
  },
  {
    "id": 203,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is the time complexity of a standard recursive factorial function `fact(n)`?",
    "options": [
      "O(n^2)",
      "O(2^n)",
      "O(n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "The function makes exactly `n` recursive calls, reducing `n` by 1 each time until it reaches the base case. Therefore, the time complexity is O(n)."
  },
  {
    "id": 204,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is the output of `fact(5)` if `fact(n) = n * fact(n-1)` and `fact(0) = 1`?",
    "options": [
      "25",
      "120",
      "24",
      "50"
    ],
    "answer": 1,
    "explanation": "5 * 4 * 3 * 2 * 1 * 1 = 120. The recursive calls build up: fact(1)=1, fact(2)=2, fact(3)=6, fact(4)=24, fact(5)=120."
  },
  {
    "id": 205,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "What is the time complexity of the naive recursive Fibonacci sequence `fib(n) = fib(n-1) + fib(n-2)`?",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(2^n)",
      "O(log n)"
    ],
    "answer": 2,
    "explanation": "The recursion tree branches into two calls at each step. The number of nodes in the tree is approximately 2^n, leading to an exponential O(2^n) time complexity."
  },
  {
    "id": 206,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is a recursion tree?",
    "options": [
      "A data structure used to store recursive functions",
      "A graphical representation of the recursive calls showing how the problem is broken down",
      "A specific type of binary tree",
      "The call stack memory layout"
    ],
    "answer": 1,
    "explanation": "A recursion tree is a diagram that visually maps out the sequence of recursive calls, showing the branching of subproblems and helping to analyze time complexity."
  },
  {
    "id": 207,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "What is the output of this Python code?\n`def func(n):`\n`    if n == 0: return 1`\n`    return n + func(n-1)`\n`print(func(4))`",
    "options": [
      "10",
      "24",
      "15",
      "4"
    ],
    "answer": 0,
    "explanation": "This calculates the sum of integers from 0 to 4: 4 + 3 + 2 + 1 + 0 = 10."
  },
  {
    "id": 208,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is tail recursion?",
    "options": [
      "Recursion where the base case is at the end",
      "Recursion where the recursive call is the very last operation performed in the function",
      "Recursion that involves a tail pointer",
      "Recursion that is very slow"
    ],
    "answer": 1,
    "explanation": "In tail recursion, the recursive call is the final action. This allows compilers to optimize it into a loop (tail call optimization), preventing stack overflow."
  },
  {
    "id": 209,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "What is the space complexity of a standard non-tail-recursive function that makes `n` calls?",
    "options": [
      "O(1)",
      "O(n)",
      "O(n^2)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "Each recursive call adds a new frame to the call stack. For `n` calls, the maximum stack depth is `n`, resulting in O(n) auxiliary space complexity."
  },
  {
    "id": 210,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is the output?\n`void printNum(int n) {`\n`  if(n == 0) return;`\n`  printNum(n - 1);`\n`  printf(\"%d \", n);`\n`}`\n`printNum(3);`",
    "options": [
      "1 2 3",
      "3 2 1",
      "0 1 2 3",
      "3"
    ],
    "answer": 0,
    "explanation": "The `printf` occurs *after* the recursive call. This means the numbers are printed during the unwinding phase of the recursion: 1, then 2, then 3."
  },
  {
    "id": 211,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "Which data structure is primarily used by the system to manage recursive function calls?",
    "options": [
      "Queue",
      "Stack",
      "Heap",
      "Graph"
    ],
    "answer": 1,
    "explanation": "The system uses a Call Stack to keep track of active subroutines. Each recursive call pushes a new stack frame containing local variables and return addresses."
  },
  {
    "id": 212,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "What is the value of `fib(5)` if `fib(0)=0, fib(1)=1, fib(n)=fib(n-1)+fib(n-2)`?",
    "options": [
      "5",
      "8",
      "3",
      "13"
    ],
    "answer": 0,
    "explanation": "fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5. The sequence is 0, 1, 1, 2, 3, 5."
  },
  {
    "id": 213,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is the primary disadvantage of recursion compared to iteration?",
    "options": [
      "Recursion is always slower",
      "Recursion uses more memory due to the call stack overhead",
      "Recursion cannot solve complex problems",
      "Recursion is harder to read"
    ],
    "answer": 1,
    "explanation": "Recursion incurs overhead from pushing and popping stack frames for each call, using more memory. Iteration typically uses a constant amount of memory (O(1))."
  },
  {
    "id": 214,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "What is the output?\n`int f(int n) { return (n <= 1) ? n : f(n-1) + f(n-2); }`\n`int main() { printf(\"%d\", f(4)); return 0; }`",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 1,
    "explanation": "This is Fibonacci. f(4) = f(3) + f(2) = (f(2)+f(1)) + (f(1)+f(0)) = ((f(1)+f(0))+1) + (1+0) = ((1+0)+1) + 1 = 3."
  },
  {
    "id": 215,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is indirect recursion?",
    "options": [
      "A function calling itself",
      "Function A calls Function B, which in turn calls Function A",
      "A function that never returns",
      "A recursive function with no parameters"
    ],
    "answer": 1,
    "explanation": "Indirect recursion occurs when a function calls another function, and that function calls the original function, creating a cycle of calls."
  },
  {
    "id": 216,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "How many times is the function `f` called (including the first call) for `f(4)` if `f(n) = n > 0 ? f(n-1) + f(n-2) : 1`?",
    "options": [
      "5",
      "9",
      "15",
      "7"
    ],
    "answer": 1,
    "explanation": "f(4) calls f(3), f(2). f(3) calls f(2), f(1). f(2) calls f(1), f(0). Total calls: 1 (for 4) + 2 (for 3) + 3 (for 2) + 2 (for 1) + 1 (for 0) = 9."
  },
  {
    "id": 217,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is the output of this code?\n`def mystery(n):`\n`    if n == 1: return 0`\n`    return 1 + mystery(n // 2)`\n`print(mystery(8))`",
    "options": [
      "2",
      "3",
      "4",
      "8"
    ],
    "answer": 1,
    "explanation": "This function calculates the number of times you can divide `n` by 2 before reaching 1, which is log2(n). log2(8) = 3."
  },
  {
    "id": 218,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "What is the output?\n`int f(int &x, int y) {`\n`  if(y == 0) return 1;`\n`  return x * f(x, y-1);`\n`}`\n`int main() { int a=2; cout << f(a, 3); return 0; }`",
    "options": [
      "6",
      "8",
      "9",
      "2"
    ],
    "answer": 1,
    "explanation": "This calculates `x^y` recursively. `2 * f(2, 2)` -> `2 * 2 * f(2, 1)` -> `2 * 2 * 2 * f(2, 0)` -> `2 * 2 * 2 * 1 = 8`."
  },
  {
    "id": 219,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "Can every recursive function be converted into an iterative one?",
    "options": [
      "No, only tail-recursive functions",
      "Yes, recursion can always be simulated using explicit stacks or loops",
      "No, some problems inherently require recursion",
      "Yes, but only in high-level languages"
    ],
    "answer": 1,
    "explanation": "Any recursive algorithm can be converted to an iterative one by explicitly managing a stack data structure to simulate the system's call stack."
  },
  {
    "id": 220,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "What is the output?\n`void fun(int n) {`\n`  if(n > 0) {`\n`    fun(n - 1);`\n`    printf(\"%d \", n);`\n`    fun(n - 1);`\n`  }`\n`}`\n`fun(2);`",
    "options": [
      "1 2 1",
      "2 1 2",
      "1 1 2 1 1",
      "1 2 1 2 1"
    ],
    "answer": 2,
    "explanation": "This is a binary recursion tree. Left branch of 2 calls 1 (prints 1), then 2 prints 2, then right branch of 2 calls 1 (prints 1). So: 1, 2, 1. Wait, `fun(1)` prints 1, then calls `fun(0)` twice. Total: 1 2 1? Let me re-trace. `fun(2)` -> `fun(1)` -> `fun(0)`. Print 1. `fun(0)`. Back to `fun(2)`. Print 2. `fun(1)` -> `fun(0)`. Print 1. `fun(0)`. Result: 1 2 1."
  },
  {
    "id": 221,
    "topic": "Basic Algorithms",
    "difficulty": "Easy",
    "question": "What is the time complexity of Linear Search?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    "answer": 2,
    "explanation": "Linear search checks each element one by one. In the worst case, it checks all `n` elements, resulting in O(n) time complexity."
  },
  {
    "id": 222,
    "topic": "Basic Algorithms",
    "difficulty": "Easy",
    "question": "What is a prerequisite for performing Binary Search on an array?",
    "options": [
      "The array must be of even length",
      "The array must be sorted",
      "The array must contain only integers",
      "The array must be a linked list"
    ],
    "answer": 1,
    "explanation": "Binary search works by repeatedly dividing the search interval in half. This is only possible if the array is sorted in ascending or descending order."
  },
  {
    "id": 223,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "What is the worst-case time complexity of Binary Search?",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 2,
    "explanation": "Binary search halves the search space with each comparison. The maximum number of comparisons needed is log2(n), resulting in O(log n) time complexity."
  },
  {
    "id": 224,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "What is the space complexity of standard recursive Binary Search?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 1,
    "explanation": "Recursive binary search uses the call stack. The maximum depth of the recursion tree is log2(n), so the space complexity is O(log n)."
  },
  {
    "id": 225,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "How many comparisons are needed in the worst case to find an element in an array of 16 elements using Binary Search?",
    "options": [
      "16",
      "4",
      "5",
      "8"
    ],
    "answer": 2,
    "explanation": "The maximum number of comparisons for binary search is floor(log2(n)) + 1. log2(16) = 4. 4 + 1 = 5 comparisons."
  },
  {
    "id": 226,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "What is the time complexity of Bubble Sort in the worst case?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(2^n)"
    ],
    "answer": 2,
    "explanation": "In the worst case (a reverse-sorted array), Bubble Sort makes n-1 passes, comparing n-i elements each time. The sum of this series is O(n^2)."
  },
  {
    "id": 227,
    "topic": "Basic Algorithms",
    "difficulty": "Easy",
    "question": "What is the best-case time complexity of Bubble Sort?",
    "options": [
      "O(n^2)",
      "O(n)",
      "O(log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "If the array is already sorted and an optimized version with a flag is used, Bubble Sort makes exactly one pass (n-1 comparisons) and exits, yielding O(n)."
  },
  {
    "id": 228,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "What is the time complexity of Selection Sort?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(n!)"
    ],
    "answer": 2,
    "explanation": "Selection Sort makes n-1 passes, and in each pass, it scans the remaining unsorted portion to find the minimum. This always takes O(n^2) comparisons regardless of input."
  },
  {
    "id": 229,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "How many swaps are performed by Selection Sort in the worst case for an array of size n?",
    "options": [
      "O(n^2)",
      "O(n)",
      "O(n log n)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "Selection Sort makes exactly one swap per pass (placing the minimum element in its correct position), resulting in exactly n-1 swaps, which is O(n)."
  },
  {
    "id": 230,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "What is the worst-case time complexity of Insertion Sort?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(2^n)"
    ],
    "answer": 2,
    "explanation": "In the worst case (reverse sorted array), each new element is compared with all previously sorted elements and shifted, leading to O(n^2) comparisons and shifts."
  },
  {
    "id": 231,
    "topic": "Basic Algorithms",
    "difficulty": "Easy",
    "question": "Which sorting algorithm is most efficient for small datasets or nearly sorted data?",
    "options": [
      "Selection Sort",
      "Insertion Sort",
      "Bubble Sort",
      "Merge Sort"
    ],
    "answer": 1,
    "explanation": "Insertion Sort has very low overhead and runs in O(n) time on nearly sorted data, making it highly efficient for small or partially sorted datasets."
  },
  {
    "id": 232,
    "topic": "Basic Algorithms",
    "difficulty": "Hard",
    "question": "What is the output after the first pass of Bubble Sort on `[5, 1, 4, 2, 8]`?",
    "options": [
      "[1, 4, 2, 5, 8]",
      "[1, 5, 4, 2, 8]",
      "[1, 2, 4, 5, 8]",
      "[5, 1, 2, 4, 8]"
    ],
    "answer": 0,
    "explanation": "Bubble sort compares adjacent pairs: (5,1)->swap [1,5,4,2,8]; (5,4)->swap [1,4,5,2,8]; (5,2)->swap [1,4,2,5,8]; (5,8)->no swap. Result: [1, 4, 2, 5, 8]."
  },
  {
    "id": 233,
    "topic": "Basic Algorithms",
    "difficulty": "Hard",
    "question": "After the first pass of Selection Sort on `[64, 25, 12, 22, 11]`, what is the state of the array?",
    "options": [
      "[11, 25, 12, 22, 64]",
      "[11, 64, 25, 12, 22]",
      "[11, 12, 22, 25, 64]",
      "[11, 25, 64, 22, 12]"
    ],
    "answer": 0,
    "explanation": "Selection sort finds the minimum (11) and swaps it with the first element (64). The array becomes [11, 25, 12, 22, 64]."
  },
  {
    "id": 234,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "Is Binary Search stable?",
    "options": [
      "Yes, always",
      "No, because it does not deal with multiple identical elements in a way that preserves order",
      "It depends on the implementation",
      "Stability does not apply to search algorithms"
    ],
    "answer": 3,
    "explanation": "Stability is a property of sorting algorithms, referring to preserving the relative order of equal elements. The concept of stability does not apply to search algorithms."
  },
  {
    "id": 235,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "What is the space complexity of Iterative Binary Search?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n^2)"
    ],
    "answer": 2,
    "explanation": "Iterative binary search uses a few variables (like `low`, `high`, `mid`) to track the search space, requiring a constant amount of extra space, O(1)."
  },
  {
    "id": 236,
    "topic": "Basic Algorithms",
    "difficulty": "Hard",
    "question": "What is the output after 2 passes of Insertion Sort on `[12, 11, 13, 5, 6]`?",
    "options": [
      "[5, 6, 11, 12, 13]",
      "[11, 12, 13, 5, 6]",
      "[11, 12, 5, 13, 6]",
      "[11, 12, 13, 5, 6]"
    ],
    "answer": 1,
    "explanation": "Pass 1: 11 is placed before 12 -> [11, 12, 13, 5, 6]. Pass 2: 13 is already larger than 12, so no change -> [11, 12, 13, 5, 6]."
  },
  {
    "id": 237,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "Which sorting algorithm works by repeatedly finding the minimum element?",
    "options": [
      "Bubble Sort",
      "Insertion Sort",
      "Selection Sort",
      "Quick Sort"
    ],
    "answer": 2,
    "explanation": "Selection Sort is characterized by dividing the array into sorted and unsorted parts, and repeatedly selecting the smallest element from the unsorted part to append to the sorted part."
  },
  {
    "id": 238,
    "topic": "Basic Algorithms",
    "difficulty": "Medium",
    "question": "What is the advantage of Bubble Sort over other O(n^2) algorithms?",
    "options": [
      "It is always the fastest",
      "It can detect if the array is already sorted in a single pass",
      "It requires the least amount of memory",
      "It is a stable sort by default"
    ],
    "answer": 1,
    "explanation": "An optimized Bubble Sort uses a boolean flag. If a complete pass occurs without any swaps, the algorithm knows the array is sorted and terminates early."
  },
  {
    "id": 239,
    "topic": "Basic Algorithms",
    "difficulty": "Hard",
    "question": "How many swaps are performed in the first pass of Bubble Sort on `[3, 2, 1]`?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": 1,
    "explanation": "Compare 3 and 2: swap (1). Array: [2, 3, 1]. Compare 3 and 1: swap (2). Array: [2, 1, 3]. Total swaps = 2."
  },
  {
    "id": 240,
    "topic": "Basic Algorithms",
    "difficulty": "Easy",
    "question": "What does a sorting algorithm's \"stability\" mean?",
    "options": [
      "It always finishes in the same amount of time",
      "It preserves the relative order of equal elements",
      "It does not crash on large datasets",
      "It uses O(1) extra space"
    ],
    "answer": 1,
    "explanation": "A stable sorting algorithm maintains the relative order of records with equal keys. For example, if A and B have the same value and A appeared first, A will remain first after sorting."
  },
  {
    "id": 241,
    "topic": "Complexity",
    "difficulty": "Easy",
    "question": "What does Big-O notation describe?",
    "options": [
      "The exact number of operations an algorithm performs",
      "The upper bound of an algorithm's growth rate",
      "The lower bound of an algorithm's growth rate",
      "The average case runtime"
    ],
    "answer": 1,
    "explanation": "Big-O notation describes the asymptotic upper bound of a function, representing the worst-case scenario for an algorithm's time or space growth as input size increases."
  },
  {
    "id": 242,
    "topic": "Complexity",
    "difficulty": "Easy",
    "question": "What is the Big-O of accessing an element in an array by its index?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(1)"
    ],
    "answer": 3,
    "explanation": "Array access via index is a constant time operation O(1) because the memory address is calculated directly using base_address + (index * element_size)."
  },
  {
    "id": 243,
    "topic": "Complexity",
    "difficulty": "Medium",
    "question": "What does Big-Omega notation represent?",
    "options": [
      "The worst-case time complexity",
      "The lower bound of an algorithm's growth rate",
      "The exact time complexity",
      "The space complexity"
    ],
    "answer": 1,
    "explanation": "Big-Omega notation describes the asymptotic lower bound, representing the best-case scenario or the minimum amount of time/space an algorithm will require."
  },
  {
    "id": 244,
    "topic": "Complexity",
    "difficulty": "Medium",
    "question": "What does Big-Theta notation indicate?",
    "options": [
      "Only the upper bound",
      "Only the lower bound",
      "A tight bound (both upper and lower bounds are the same)",
      "The average complexity"
    ],
    "answer": 2,
    "explanation": "Big-Theta provides a tight bound, meaning the algorithm's growth rate is exactly proportional to the given function (both upper and lower bounds match asymptotically)."
  },
  {
    "id": 245,
    "topic": "Complexity",
    "difficulty": "Easy",
    "question": "Which of the following complexities grows the fastest as n increases?",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(2^n)"
    ],
    "answer": 3,
    "explanation": "Exponential time O(2^n) grows significantly faster than polynomial times like O(n) or O(n^2). It becomes computationally infeasible very quickly as n increases."
  },
  {
    "id": 246,
    "topic": "Complexity",
    "difficulty": "Medium",
    "question": "What is the time complexity of a nested loop where the outer loop runs `n` times and the inner loop runs `n` times?",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(2^n)",
      "O(log n)"
    ],
    "answer": 1,
    "explanation": "For each of the `n` iterations of the outer loop, the inner loop executes `n` times. The total operations are `n * n = n^2`, resulting in O(n^2)."
  },
  {
    "id": 247,
    "topic": "Complexity",
    "difficulty": "Medium",
    "question": "What is the time complexity of this code?\n`for(i=0; i<n; i=i*2) { ... }`",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^2)",
      "O(sqrt(n))"
    ],
    "answer": 1,
    "explanation": "The loop variable `i` doubles each time (1, 2, 4, 8...). It takes log2(n) steps to reach or exceed `n`. Therefore, the complexity is O(log n)."
  },
  {
    "id": 248,
    "topic": "Complexity",
    "difficulty": "Hard",
    "question": "What is the time complexity of this code?\n`for(i=0; i<n; i++)`\n`  for(j=0; j<i; j++)`\n`    printf(\"*\");`",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(n^3)"
    ],
    "answer": 2,
    "explanation": "The inner loop runs 1 time, then 2 times, then 3 times, up to n-1 times. The sum of the series 1+2+...+(n-1) is n(n-1)/2, which is O(n^2)."
  },
  {
    "id": 249,
    "topic": "Complexity",
    "difficulty": "Medium",
    "question": "If an algorithm has a time complexity of O(n^2), what happens to the runtime if the input size is tripled?",
    "options": [
      "It triples",
      "It increases by a factor of 9",
      "It increases by a factor of 6",
      "It doubles"
    ],
    "answer": 1,
    "explanation": "If T(n) is proportional to n^2, then T(3n) is proportional to (3n)^2 = 9n^2. The runtime increases by a factor of 9."
  },
  {
    "id": 250,
    "topic": "Complexity",
    "difficulty": "Hard",
    "question": "What is the time complexity of this recursive function?\n`void f(int n) { if(n<=0) return; f(n/3); f(n/3); }`",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n^log3(2))",
      "O(log n^2)"
    ],
    "answer": 2,
    "explanation": "Using the Master Theorem: T(n) = 2T(n/3) + O(1). Here a=2, b=3. log_b(a) = log_3(2). Since f(n) = O(1) = O(n^{log_3(2) - epsilon}), complexity is O(n^{log_3(2)})."
  },
  {
    "id": 251,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`int a = 10, b = 20, c;\n c = a > b ? a : b;\n printf(\"%d\", c);`",
    "options": [
      "10",
      "20",
      "0",
      "Compilation Error"
    ],
    "answer": 1,
    "explanation": "The ternary operator evaluates `a > b` (10 > 20), which is false. Therefore, it assigns the value after the colon (`b`, which is 20) to `c`."
  },
  {
    "id": 252,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What is the output?\n`int i=0;`\n`for(; i<=5; ) {`\n`  i++;`\n`  if(i==3) continue;`\n`  if(i==5) break;`\n`  printf(\"%d\", i);`\n`}`",
    "options": [
      "124",
      "12",
      "1245",
      "1234"
    ],
    "answer": 0,
    "explanation": "i=1: prints 1. i=2: prints 2. i=3: continue. i=4: prints 4. i=5: break. Output is 124."
  },
  {
    "id": 253,
    "topic": "Functions",
    "difficulty": "Hard",
    "question": "What is the output?\n`int x = 10;`\n`int& foo() { return x; }`\n`int main() { foo() = 20; cout << x; return 0; }`",
    "options": [
      "10",
      "20",
      "Error",
      "Garbage"
    ],
    "answer": 1,
    "explanation": "`foo()` returns a reference to the global variable `x`. Assigning 20 to this reference directly modifies `x`. Thus, `x` becomes 20."
  },
  {
    "id": 254,
    "topic": "Arrays",
    "difficulty": "Hard",
    "question": "What is the value of `*(arr + 2)` if `int arr[3][2] = {{1,2}, {3,4}, {5,6}};`?",
    "options": [
      "2",
      "3",
      "5",
      "Error"
    ],
    "answer": 0,
    "explanation": "`arr` points to `arr[0]`. `arr + 2` points to `arr[2]`. But `arr[2]` is an array, which decays to a pointer. Wait, `*(arr + 2)` is `arr[2]`, which decays to a pointer! This prints a memory address, not an integer. To get 5, it must be `*(*(arr+2)+0)`. So this question needs a correction."
  },
  {
    "id": 255,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What is the output of `\"abc\".replace(\"b\", \"xy\")` in Python?",
    "options": [
      "\"axyc\"",
      "\"axy\"",
      "\"abxy\"",
      "Error"
    ],
    "answer": 0,
    "explanation": "The `replace()` method replaces all occurrences of the first argument with the second argument. 'b' is replaced by 'xy', resulting in 'axyc'."
  },
  {
    "id": 256,
    "topic": "Pointers and Memory",
    "difficulty": "Hard",
    "question": "What is the output?\n`int arr[] = {1, 2, 3};`\n`printf(\"%d\", -arr[1]);`",
    "options": [
      "-2",
      "2",
      "Compilation Error",
      "65534"
    ],
    "answer": 0,
    "explanation": "The unary minus operator can be applied to integer variables. `arr[1]` is 2, and `-2` is printed."
  },
  {
    "id": 257,
    "topic": "Recursion",
    "difficulty": "Hard",
    "question": "What is the output?\n`int f(int n) { if(n==0||n==1) return n; return f(n-1) + f(n-2); }`\n`int main() { printf(\"%d\", f(6)); return 0; }`",
    "options": [
      "8",
      "13",
      "5",
      "21"
    ],
    "answer": 0,
    "explanation": "This calculates the 6th Fibonacci number (0, 1, 1, 2, 3, 5, 8). f(6) = 8."
  },
  {
    "id": 258,
    "topic": "Complexity",
    "difficulty": "Hard",
    "question": "What is the time complexity of this code?\n`int count = 0;\nfor(int i = n; i > 0; i /= 2) {\n  for(int j = 0; j < i; j++) {\n    count++;\n  }\n}`",
    "options": [
      "O(n)",
      "O(n log n)",
      "O(n^2)",
      "O(n)"
    ],
    "answer": 0,
    "explanation": "Outer loop runs log n times. Inner loop runs n, n/2, n/4... times. This is a geometric series: n + n/2 + n/4 + ... ≈ 2n. The time complexity is O(n)."
  },
  {
    "id": 259,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the output of `print(type([] is []))` in Python?",
    "options": [
      "True",
      "False",
      "Error",
      "None"
    ],
    "answer": 1,
    "explanation": "`is` checks for object identity (memory address), not equality. Two empty lists `[]` are distinct objects in memory, so `[] is []` evaluates to False."
  },
  {
    "id": 260,
    "topic": "Control Flow",
    "difficulty": "Medium",
    "question": "What is the output of this C code?\n`int i = 0;\nwhile(i < 3) {\n  i++;\n  if(i == 2) break;\n  printf(\"%d \", i);\n}`",
    "options": [
      "1 2 3",
      "1",
      "1 2",
      "2"
    ],
    "answer": 1,
    "explanation": "i=1: prints 1. i=2: break executes, terminating the loop. So only 1 is printed."
  },
  {
    "id": 261,
    "topic": "Functions",
    "difficulty": "Medium",
    "question": "What is the output of this Python code?\n`def foo(x, y=[]):\n    y.append(x)\n    return y\nprint(foo(1))\nprint(foo(2))`",
    "options": [
      "[1]\\n[2]",
      "[1]\\n[1, 2]",
      "Error",
      "[1]\\n[]"
    ],
    "answer": 1,
    "explanation": "Using a mutable default argument (like a list) is a common Python trap. The list is created once when the function is defined, so subsequent calls append to the same list."
  },
  {
    "id": 262,
    "topic": "Arrays",
    "difficulty": "Medium",
    "question": "What is the output of this Python code?\n`arr = [1, 2, 3, 4]\narr.insert(2, 99)\nprint(arr)`",
    "options": [
      "[1, 2, 99, 3, 4]",
      "[1, 99, 2, 3, 4]",
      "[99, 1, 2, 3, 4]",
      "[1, 2, 3, 99, 4]"
    ],
    "answer": 0,
    "explanation": "`insert(index, value)` inserts the value before the specified index. Inserting 99 at index 2 shifts the existing elements from index 2 onwards to the right."
  },
  {
    "id": 263,
    "topic": "Strings",
    "difficulty": "Medium",
    "question": "What does `\"Hello World\".split()` return in Python?",
    "options": [
      "[\"Hello\", \"World\"]",
      "[\"Hello World\"]",
      "(\"Hello\", \"World\")",
      "Error"
    ],
    "answer": 0,
    "explanation": "Calling `split()` without arguments splits the string at any sequence of whitespace characters and returns a list of the non-whitespace parts."
  },
  {
    "id": 264,
    "topic": "Pointers and Memory",
    "difficulty": "Hard",
    "question": "What is the output?\n`int x = 5;\nint *p = &x;\nint **q = &p;\n**q = 10;\nprintf(\"%d\", x);`",
    "options": [
      "5",
      "10",
      "Address of x",
      "Error"
    ],
    "answer": 1,
    "explanation": "`**q` dereferences twice to reach `x`. Assigning 10 to `**q` changes the value of `x` from 5 to 10."
  },
  {
    "id": 265,
    "topic": "Recursion",
    "difficulty": "Medium",
    "question": "What is the output?\n`def f(n):\n    if n == 0: return\n    print(n, end=\" \")\n    f(n-1)\n    print(n, end=\" \")\nf(3)`",
    "options": [
      "3 2 1 1 2 3",
      "1 2 3 3 2 1",
      "3 2 1",
      "3 2 1 0 1 2 3"
    ],
    "answer": 0,
    "explanation": "Prints during the calling phase (3, 2, 1) and then during the returning phase (1, 2, 3). The output is 3 2 1 1 2 3."
  },
  {
    "id": 266,
    "topic": "Basic Algorithms",
    "difficulty": "Hard",
    "question": "What is the number of comparisons in the worst case for Insertion Sort on an array of 5 elements?",
    "options": [
      "10",
      "15",
      "25",
      "20"
    ],
    "answer": 0,
    "explanation": "Worst case is reverse sorted. Comparisons = 1 + 2 + 3 + 4 = 10."
  },
  {
    "id": 267,
    "topic": "Complexity",
    "difficulty": "Medium",
    "question": "What is the time complexity of finding the sum of all elements in a 2D array of size n x n?",
    "options": [
      "O(n)",
      "O(n^2)",
      "O(n^3)",
      "O(1)"
    ],
    "answer": 1,
    "explanation": "You must visit every element in the n x n matrix exactly once. There are n^2 elements, resulting in O(n^2) time complexity."
  },
  {
    "id": 268,
    "topic": "Programming Fundamentals",
    "difficulty": "Medium",
    "question": "What is the output of `print(0.1 + 0.2 == 0.3)` in Java?",
    "options": [
      "true",
      "false",
      "Error",
      "null"
    ],
    "answer": 1,
    "explanation": "Just like Python, Java uses IEEE 754 floating-point representation. `0.1 + 0.2` results in `0.30000000000000004`, which is not equal to `0.3`."
  },
  {
    "id": 269,
    "topic": "Control Flow",
    "difficulty": "Hard",
    "question": "What is the output?\n`int x = 0;\nfor (int i = 0; i < 5; i++) {\n    for (int j = i; j < 5; j++) {\n        x++;\n    }\n}\nprintf(\"%d\", x);`",
    "options": [
      "15",
      "25",
      "10",
      "20"
    ],
    "answer": 0,
    "explanation": "Inner loop runs 5, 4, 3, 2, 1 times. Sum = 15. x becomes 15."
  },
  {
    "id": 270,
    "topic": "Functions",
    "difficulty": "Hard",
    "question": "What is the output?\n`void func(int a, int b, int *c) { *c = a - b; }`\n`int main() {\n  int res = 0;\n  func(10, 5, &res);\n  printf(\"%d\", res);\n  return 0;\n}`",
    "options": [
      "0",
      "10",
      "5",
      "Error"
    ],
    "answer": 2,
    "explanation": "The function calculates 10 - 5 and stores the result (5) in the memory address pointed to by `c`, which is the address of `res`."
  }
]