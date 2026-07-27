// Python Programming Questions
[
{
    id: "python-1",
    question: "Who is the creator of the Python programming language?",
    options: [
        "James Gosling",
        "Guido van Rossum",
        "Bjarne Stroustrup",
        "Dennis Ritchie"
    ],
    answer: 1,
    explanation: "Python was created by Guido van Rossum and first released in 1991.",
    difficulty: "Easy",
    topic: "History of Python"
},
{
    id: "python-2",
    question: "Which of the following is a key feature of Python?",
    options: [
        "Platform-dependent",
        "Compiled language",
        "Dynamically typed",
        "Strictly static scoped"
    ],
    answer: 2,
    explanation: "Python is dynamically typed, meaning variable types are determined at runtime and do not require explicit declaration.",
    difficulty: "Easy",
    topic: "Features of Python"
},
{
    id: "python-3",
    question: "What is the official body that governs the Python language's evolution?",
    options: [
        "W3C",
        "Python Steering Council",
        "IEEE",
        "ISO"
    ],
    answer: 1,
    explanation: "The Python Steering Council, elected by the core developers, guides the language's development following PEP 13.",
    difficulty: "Medium",
    topic: "Introduction to Python"
},
{
    id: "python-4",
    question: "Which Python version introduced f-strings?",
    options: [
        "Python 2.7",
        "Python 3.4",
        "Python 3.6",
        "Python 3.10"
    ],
    answer: 2,
    explanation: "F-strings (formatted string literals) were introduced in Python 3.6 via PEP 498.",
    difficulty: "Easy",
    topic: "Python Versions"
},
{
    id: "python-5",
    question: "What does the Python interpreter do?",
    options: [
        "Compiles Python code directly to machine code",
        "Translates Python code to bytecode and executes it",
        "Converts Python code to C++ code before execution",
        "Executes Python code without any translation"
    ],
    answer: 1,
    explanation: "The Python interpreter compiles source code into bytecode (`.pyc` files), which is then executed by the Python Virtual Machine (PVM).",
    difficulty: "Easy",
    topic: "Python Interpreter"
},
{
    id: "python-6",
    question: "Which of the following is NOT a valid Python identifier?",
    options: [
        "_var1",
        "my_var",
        "1st_variable",
        "VAR_1"
    ],
    answer: 2,
    explanation: "Identifiers cannot start with a digit. `1st_variable` is invalid because it begins with '1'.",
    difficulty: "Easy",
    topic: "Identifiers"
},
{
    id: "python-7",
    question: "How many keywords are there in Python 3.x (as of recent versions)?",
    options: [
        "33",
        "35",
        "37",
        "30"
    ],
    answer: 1,
    explanation: "Python 3.x currently has 35 reserved keywords (e.g., `False`, `None`, `True`, `match`, `case`).",
    difficulty: "Medium",
    topic: "Keywords"
},
{
    id: "python-8",
    question: "Which statement is used to write a single-line comment in Python?",
    options: [
        "/* */",
        "//",
        "#",
        "--"
    ],
    answer: 2,
    explanation: "In Python, the hash symbol `#` is used to denote a single-line comment.",
    difficulty: "Easy",
    topic: "Comments"
},
{
    id: "python-9",
    question: "What happens if indentation is inconsistent in a Python block?",
    options: [
        "A warning is issued",
        "It runs normally",
        "An IndentationError is raised",
        "It defaults to 4 spaces"
    ],
    answer: 2,
    explanation: "Python uses indentation to define blocks. Inconsistent indentation raises an `IndentationError`.",
    difficulty: "Easy",
    topic: "Indentation"
},
{
    id: "python-10",
    question: "Which data type is used to store an immutable sequence of characters in Python?",
    options: [
        "List",
        "Tuple",
        "String",
        "Array"
    ],
    answer: 2,
    explanation: "Strings in Python are sequences of Unicode characters and are immutable.",
    difficulty: "Easy",
    topic: "Data Types"
},
{
    id: "python-11",
    question: "What is the output of `type(10)` in Python 3?",
    options: [
        "<class 'int'>",
        "<type 'int'>",
        "int",
        "Integer"
    ],
    answer: 0,
    explanation: "In Python 3, the `type()` function returns the class of the object, formatted as `<class 'int'>`.",
    difficulty: "Easy",
    topic: "Data Types"
},
{
    id: "python-12",
    question: "Which function is used to convert a string containing a float into a float data type?",
    options: [
        "int()",
        "float()",
        "str()",
        "double()"
    ],
    answer: 1,
    explanation: "The `float()` function converts a string or integer to a floating-point number.",
    difficulty: "Easy",
    topic: "Type Conversion"
},
{
    id: "python-13",
    question: "What is the result of `int('0x1a', 16)`?",
    options: [
        "Error",
        "26",
        "1a",
        "16"
    ],
    answer: 1,
    explanation: "The `int(string, base)` function parses the string as a hexadecimal number (base 16), converting '0x1a' to 26.",
    difficulty: "Medium",
    topic: "Type Conversion"
},
{
    id: "python-14",
    question: "Which function is used to receive input from the user in Python 3?",
    options: [
        "input()",
        "raw_input()",
        "scanf()",
        "cin()"
    ],
    answer: 0,
    explanation: "In Python 3, `input()` is used to take user input. `raw_input()` was used in Python 2.",
    difficulty: "Easy",
    topic: "Input"
},
{
    id: "python-15",
    question: "What does the `sep` parameter do in the `print()` function?",
    options: [
        "Specifies the string to print at the end",
        "Specifies the separator string between multiple objects",
        "Defines the encoding of the output",
        "Separates the output into different files"
    ],
    answer: 1,
    explanation: "The `sep` parameter in `print()` defines the string inserted between multiple objects being printed (default is a space).",
    difficulty: "Easy",
    topic: "Output"
},
{
    id: "python-16",
    question: "What is the output of `print(1, 2, 3, sep='-')`?",
    options: [
        "1 2 3",
        "1-2-3",
        "123-",
        "Error"
    ],
    answer: 1,
    explanation: "The `sep='-'` argument replaces the default space separator with a hyphen, resulting in '1-2-3'.",
    difficulty: "Easy",
    topic: "Output"
},
{
    id: "python-17",
    question: "Which operator is used for floor division in Python?",
    options: [
        "/",
        "//",
        "%",
        "**"
    ],
    answer: 1,
    explanation: "The `//` operator performs floor division, dividing two numbers and rounding down to the nearest integer.",
    difficulty: "Easy",
    topic: "Operators"
},
{
    id: "python-18",
    question: "What is the output of `5 % 2`?",
    options: [
        "2.5",
        "2",
        "1",
        "0"
    ],
    answer: 2,
    explanation: "The `%` (modulo) operator returns the remainder of the division of 5 by 2, which is 1.",
    difficulty: "Easy",
    topic: "Operators"
},
{
    id: "python-19",
    question: "Evaluate the expression: `2 ** 3 ** 2`",
    options: [
        "64",
        "512",
        "36",
        "81"
    ],
    answer: 1,
    explanation: "Exponentiation operators are evaluated right-to-left. So, `3 ** 2` is 9, and then `2 ** 9` is 512.",
    difficulty: "Medium",
    topic: "Operator Precedence"
},
{
    id: "python-20",
    question: "Which operator has the highest precedence in Python?",
    options: [
        "Addition (+)",
        "Exponentiation (**)",
        "Multiplication (*)",
        "Parentheses ()"
    ],
    answer: 3,
    explanation: "Parentheses `()` always have the highest precedence, forcing the evaluation of the expression they enclose first.",
    difficulty: "Easy",
    topic: "Operator Precedence"
},
{
    id: "python-21",
    question: "What is the result of `bool(0)`?",
    options: [
        "True",
        "False",
        "None",
        "Error"
    ],
    answer: 1,
    explanation: "In Python, the integer 0 is considered falsy. Therefore, `bool(0)` evaluates to `False`.",
    difficulty: "Easy",
    topic: "Operators"
},
{
    id: "python-22",
    question: "What is the output of `not (True and False)`?",
    options: [
        "True",
        "False",
        "None",
        "SyntaxError"
    ],
    answer: 0,
    explanation: "`True and False` evaluates to `False`. The `not` operator then negates it, resulting in `True`.",
    difficulty: "Easy",
    topic: "Operators"
},
{
    id: "python-23",
    question: "Which statement is used to handle multiple conditions in Python?",
    options: [
        "else if",
        "elif",
        "elseif",
        "else when"
    ],
    answer: 1,
    explanation: "`elif` (short for else if) is used in Python to check multiple expressions for True and execute a block of code as soon as one evaluates to True.",
    difficulty: "Easy",
    topic: "elif"
},
{
    id: "python-24",
    question: "What will be the output of the following code?\n```python\nx = 10\nif x > 5:\n    print('A')\nelif x > 8:\n    print('B')\nelse:\n    print('C')\n```",
    options: [
        "A",
        "B",
        "C",
        "A\nB"
    ],
    answer: 0,
    explanation: "Since `x > 5` is the first condition evaluated and it is True, 'A' is printed. The `elif` block is skipped even though `x > 8` is also True.",
    difficulty: "Easy",
    topic: "if else"
},
{
    id: "python-25",
    question: "In a nested if statement, how does the `elif` associate with `if`?",
    options: [
        "It associates with the outermost if",
        "It associates with the nearest if that hasn't been associated with an elif yet",
        "It associates with the last if in the file",
        "It stands alone"
    ],
    answer: 1,
    explanation: "`elif` binds to the closest preceding `if` statement that does not already have an `elif` or `else` attached to it at the same indentation level.",
    difficulty: "Medium",
    topic: "nested if"
},
{
    id: "python-26",
    question: "What is the use of the `pass` statement in Python?",
    options: [
        "To skip an iteration in a loop",
        "To exit a function",
        "To act as a null operation/placeholder",
        "To pass arguments to a function"
    ],
    answer: 2,
    explanation: "`pass` is a null operation. It is used when a statement is syntactically required but no code needs to be executed.",
    difficulty: "Easy",
    topic: "pass"
},
{
    id: "python-27",
    question: "Which loop is generally used to iterate over a sequence (like a list or string)?",
    options: [
        "while",
        "do-while",
        "for",
        "foreach"
    ],
    answer: 2,
    explanation: "The `for` loop in Python is designed to iterate over the items of any sequence (list, string, tuple) or other iterable.",
    difficulty: "Easy",
    topic: "for Loop"
},
{
    id: "python-28",
    question: "What is the output of `for i in range(3): print(i, end=' ')`?",
    options: [
        "0 1 2 ",
        "1 2 3 ",
        "0 1 2 3 ",
        "1 2 "
    ],
    answer: 0,
    explanation: "`range(3)` generates numbers from 0 up to, but not including, 3. The `end=' '` prevents newlines after each print.",
    difficulty: "Easy",
    topic: "range()"
},
{
    id: "python-29",
    question: "How can you iterate over a list while keeping track of both the index and the value?",
    options: [
        "Using a while loop with a counter",
        "Using the `enumerate()` function",
        "Using the `index()` method",
        "Using the `zip()` function with range()"
    ],
    answer: 1,
    explanation: "The `enumerate()` function adds a counter to an iterable and returns it in the form of an enumerate object yielding pairs of (index, value).",
    difficulty: "Easy",
    topic: "enumerate()"
},
{
    id: "python-30",
    question: "What does the `break` statement do inside a loop?",
    options: [
        "Skips the current iteration",
        "Terminates the loop entirely",
        "Restarts the loop",
        "Does nothing"
    ],
    answer: 1,
    explanation: "The `break` statement immediately terminates the innermost enclosing loop, and control flows to the statement following the loop.",
    difficulty: "Easy",
    topic: "break"
},
{
    id: "python-31",
    question: "What is the output of the following code?\n```python\nfor i in range(5):\n    if i == 3:\n        continue\n    print(i, end=' ')\n```",
    options: [
        "0 1 2 4 ",
        "0 1 2 3 4 ",
        "0 1 2 ",
        "0 1 2 3 "
    ],
    answer: 0,
    explanation: "The `continue` statement skips the rest of the loop body when `i == 3`. Thus, 3 is not printed, but 4 is.",
    difficulty: "Easy",
    topic: "continue"
},
{
    id: "python-32",
    question: "What happens if the `else` clause of a `while` loop executes?",
    options: [
        "It executes when the loop condition becomes False",
        "It executes when the loop is terminated by a `break`",
        "It always executes",
        "It executes only if the loop runs zero times"
    ],
    answer: 0,
    explanation: "The `else` clause of a loop executes when the loop condition becomes false, but NOT if the loop is terminated by a `break` statement.",
    difficulty: "Medium",
    topic: "while Loop"
},
{
    id: "python-33",
    question: "In Python, how are function arguments passed?",
    options: [
        "Pass by value",
        "Pass by reference",
        "Pass by object reference",
        "Pass by pointer"
    ],
    answer: 2,
    explanation: "Python uses pass by object reference. If the object is mutable, the function can modify it; if immutable, it cannot.",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "python-34",
    question: "What is the output of the following code?\n```python\ndef add(a, b=5):\n    return a + b\nprint(add(3))\n```",
    options: [
        "3",
        "5",
        "8",
        "TypeError"
    ],
    answer: 2,
    explanation: "The parameter `b` has a default value of 5. Calling `add(3)` passes 3 to `a`, and `b` takes its default value, resulting in 3 + 5 = 8.",
    difficulty: "Easy",
    topic: "Default Arguments"
},
{
    id: "python-35",
    question: "Which syntax is correct for variable length keyword arguments in a function?",
    options: [
        "*args",
        "**kwargs",
        "&kwargs",
        "...kwargs"
    ],
    answer: 1,
    explanation: "`**kwargs` allows a function to accept an arbitrary number of keyword arguments, packed into a dictionary.",
    difficulty: "Easy",
    topic: "Variable Length Arguments"
},
{
    id: "python-36",
    question: "What is the output of `print(type(lambda x: x + 1))`?",
    options: [
        "<class 'lambda'>",
        "<class 'function'>",
        "<class 'method'>",
        "SyntaxError"
    ],
    answer: 1,
    explanation: "Lambda expressions create anonymous functions. The type of a lambda function in Python is `<class 'function'>`.",
    difficulty: "Medium",
    topic: "Lambda Functions"
},
{
    id: "python-37",
    question: "What is recursion in Python?",
    options: [
        "A function that calls another function",
        "A function that calls itself",
        "A loop that runs infinitely",
        "A module importing itself"
    ],
    answer: 1,
    explanation: "Recursion is a programming technique where a function calls itself directly or indirectly to solve a smaller instance of the same problem.",
    difficulty: "Easy",
    topic: "Recursion"
},
{
    id: "python-38",
    question: "What is the maximum recursion depth in Python by default?",
    options: [
        "500",
        "100",
        "1000",
        "Unlimited"
    ],
    answer: 2,
    explanation: "Python's default recursion limit is 1000. It can be checked using `sys.getrecursionlimit()` and changed using `sys.setrecursionlimit()`.",
    difficulty: "Medium",
    topic: "Recursion"
},
{
    id: "python-39",
    question: "What does the `global` keyword do inside a function?",
    options: [
        "Creates a new local variable",
        "Declares that a variable refers to a previously defined global variable",
        "Deletes a global variable",
        "Imports a module globally"
    ],
    answer: 1,
    explanation: "The `global` keyword allows a function to modify a variable that resides in the global scope, rather than creating a local variable with the same name.",
    difficulty: "Medium",
    topic: "Global Variables"
},
{
    id: "python-40",
    question: "What is the LEGB rule in Python?",
    options: [
        "A rule for variable naming",
        "The order of scope resolution: Local, Enclosing, Global, Built-in",
        "The order of operator precedence",
        "A memory management algorithm"
    ],
    answer: 1,
    explanation: "LEGB stands for Local, Enclosing function, Global, and Built-in scopes. It defines the order in which Python searches for variable names.",
    difficulty: "Medium",
    topic: "Scope"
},
{
    id: "python-41",
    question: "What is the output of the following code?\n```python\nx = 'global'\ndef foo():\n    x = 'local'\nfoo()\nprint(x)\n```",
    options: [
        "local",
        "global",
        "None",
        "UnboundLocalError"
    ],
    answer: 1,
    explanation: "The `x` inside `foo` is a local variable because it is assigned a value. It does not modify the global `x`. The `print` statement outputs the global `x`.",
    difficulty: "Medium",
    topic: "Local Variables"
},
{
    id: "python-42",
    question: "Which of the following is a built-in Python module?",
    options: [
        "numpy",
        "pandas",
        "math",
        "django"
    ],
    answer: 2,
    explanation: "`math` is a standard built-in Python module. `numpy`, `pandas`, and `django` are third-party libraries that need to be installed via pip.",
    difficulty: "Easy",
    topic: "Modules"
},
{
    id: "python-43",
    question: "What is the correct way to import only the `sqrt` function from the `math` module?",
    options: [
        "import math.sqrt",
        "from math import sqrt",
        "include math.sqrt",
        "import sqrt from math"
    ],
    answer: 1,
    explanation: "The `from ... import ...` syntax allows you to import specific attributes or functions from a module directly into the current namespace.",
    difficulty: "Easy",
    topic: "Import Statement"
},
{
    id: "python-44",
    question: "What does `import *` do?",
    options: [
        "Imports all modules in the system",
        "Imports all functions from a module into the current namespace",
        "Imports only built-in functions",
        "Causes a SyntaxError"
    ],
    answer: 1,
    explanation: "`from module import *` imports all public names (those not starting with an underscore) from the specified module into the current namespace.",
    difficulty: "Easy",
    topic: "Import Statement"
},
{
    id: "python-45",
    question: "What is a package in Python?",
    options: [
        "A single Python file",
        "A collection of modules in a directory with an `__init__.py` file",
        "A compiled C extension",
        "A type of function"
    ],
    answer: 1,
    explanation: "A package is a way of structuring Python's module namespace by using dotted module names. It is essentially a directory containing an `__init__.py` file.",
    difficulty: "Medium",
    topic: "Packages"
},
{
    id: "python-46",
    question: "Which function from the `random` module returns a random floating-point number between 0.0 and 1.0?",
    options: [
        "random.randint(0, 1)",
        "random.random()",
        "random.uniform(0, 1)",
        "random.rand()"
    ],
    answer: 1,
    explanation: "`random.random()` returns the next random floating point number in the range [0.0, 1.0).",
    difficulty: "Easy",
    topic: "Random Module"
},
{
    id: "python-47",
    question: "How do you get the current date and time in Python using the `datetime` module?",
    options: [
        "datetime.now()",
        "datetime.current()",
        "datetime.today()",
        "Both A and C are correct"
    ],
    answer: 3,
    explanation: "Both `datetime.now()` and `datetime.today()` return the current local date and time. They are functionally equivalent.",
    difficulty: "Medium",
    topic: "Datetime Module"
},
{
    id: "python-48",
    question: "Which data structure from the `collections` module is a dict subclass that remembers the order entries were added?",
    options: [
        "defaultdict",
        "OrderedDict",
        "Counter",
        "namedtuple"
    ],
    answer: 1,
    explanation: "`OrderedDict` maintains the insertion order of keys. (Note: Since Python 3.7, built-in dicts also maintain insertion order, but `OrderedDict` provides additional methods).",
    difficulty: "Medium",
    topic: "Collections Module"
},
{
    id: "python-49",
    question: "What is the output of `math.floor(-3.2)`?",
    options: [
        "-3",
        "-4",
        "-3.0",
        "-4.0"
    ],
    answer: 1,
    explanation: "`math.floor()` returns the largest integer less than or equal to the argument. For -3.2, the largest integer less than it is -4.",
    difficulty: "Medium",
    topic: "Math Module"
},
{
    id: "python-50",
    question: "In Python, strings are:",
    options: [
        "Mutable and ordered",
        "Immutable and ordered",
        "Mutable and unordered",
        "Immutable and unordered"
    ],
    answer: 1,
    explanation: "Strings in Python are sequences of characters, making them ordered, but they are immutable, meaning they cannot be changed in place after creation.",
    difficulty: "Easy",
    topic: "Strings"
},
{
    id: "python-51",
    question: "What does the `strip()` method do?",
    options: [
        "Removes all whitespace from the string",
        "Removes leading and trailing whitespace",
        "Converts the string to lowercase",
        "Splits the string by whitespace"
    ],
    answer: 1,
    explanation: "`strip()` returns a copy of the string with the leading and trailing characters removed (whitespace by default).",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-52",
    question: "What is the output of `'Hello'[1:4]`?",
    options: [
        "Hel",
        "ell",
        "ello",
        "llo"
    ],
    answer: 1,
    explanation: "String slicing is start-index inclusive and end-index exclusive. `'Hello'[1:4]` extracts characters at index 1, 2, and 3, which are 'e', 'l', 'l'.",
    difficulty: "Easy",
    topic: "Strings"
},
{
    id: "python-53",
    question: "Which method is used to find the highest index of a substring in a string?",
    options: [
        "find()",
        "index()",
        "rfind()",
        "search()"
    ],
    answer: 2,
    explanation: "`rfind()` returns the highest index in the string where the substring is found. `find()` and `index()` return the lowest index.",
    difficulty: "Medium",
    topic: "String Methods"
},
{
    id: "python-54",
    question: "What is the output of `'{:.2f}'.format(3.14159)`?",
    options: [
        "3.14",
        "3.141",
        "3.14159",
        "3.15"
    ],
    answer: 0,
    explanation: "`:.2f` formats the floating-point number to 2 decimal places, rounding the rest. 3.14159 becomes 3.14.",
    difficulty: "Medium",
    topic: "Formatting"
},
{
    id: "python-55",
    question: "What is the result of `'Hello ' * 3`?",
    options: [
        "Hello Hello Hello",
        "HelloHelloHello",
        "Hello Hello Hello ",
        "Error"
    ],
    answer: 1,
    explanation: "Multiplying a string by an integer `n` concatenates `n` copies of the string. Since 'Hello ' has a space, it becomes 'HelloHelloHello '. Wait, let me correct: 'Hello ' * 3 -> 'Hello Hello Hello '. I will adjust the options.",
    options: [
        "Hello Hello Hello",
        "HelloHelloHello",
        "Hello Hello Hello ",
        "Error"
    ],
    answer: 2,
    explanation: "The string 'Hello ' contains a trailing space. Multiplying it by 3 results in 'Hello Hello Hello '.",
    difficulty: "Easy",
    topic: "Strings"
},
{
    id: "python-56",
    question: "Which of the following is TRUE about Python lists?",
    options: [
        "They are immutable",
        "They can hold elements of different data types",
        "They cannot be nested",
        "They do not allow duplicate elements"
    ],
    answer: 1,
    explanation: "Python lists are mutable, can contain elements of mixed data types, can be nested (e.g., list of lists), and allow duplicates.",
    difficulty: "Easy",
    topic: "Lists"
},
{
    id: "python-57",
    question: "What is the output of `len([1, [2, 3], 4])`?",
    options: [
        "4",
        "3",
        "2",
        "Error"
    ],
    answer: 1,
    explanation: "`len()` returns the number of top-level items in the list. The list has 3 elements: the integer 1, the nested list [2, 3], and the integer 4.",
    difficulty: "Easy",
    topic: "Lists"
},
{
    id: "python-58",
    question: "Which method adds an element to the end of a list?",
    options: [
        "insert()",
        "append()",
        "add()",
        "push()"
    ],
    answer: 1,
    explanation: "The `append()` method adds a single item to the end of the list.",
    difficulty: "Easy",
    topic: "List Methods"
},
{
    id: "python-59",
    question: "What is the difference between `append()` and `extend()`?",
    options: [
        "There is no difference",
        "`append()` adds its argument as a single element, `extend()` iterates over its argument adding each element",
        "`extend()` adds its argument as a single element, `append()` iterates over its argument",
        "`append()` can only add strings, `extend()` can add any type"
    ],
    answer: 1,
    explanation: "`list.append(x)` adds `x` as one item. `list.extend(iterable)` appends each item from the iterable to the list.",
    difficulty: "Medium",
    topic: "List Methods"
},
{
    id: "python-60",
    question: "What does `list.pop(0)` do?",
    options: [
        "Removes and returns the last element",
        "Removes and returns the first element",
        "Removes the first element but does not return it",
        "Raises an IndexError if the list is empty"
    ],
    answer: 1,
    explanation: "`pop(index)` removes and returns the item at the given index. `pop(0)` removes and returns the first element.",
    difficulty: "Medium",
    topic: "List Methods"
},
{
    id: "python-61",
    question: "What is the output of `[1, 2, 3] + [4, 5]`?",
    options: [
        "[1, 2, 3, 4, 5]",
        "[5, 7, 3]",
        "[[1, 2, 3], [4, 5]]",
        "TypeError"
    ],
    answer: 0,
    explanation: "The `+` operator concatenates two lists, creating a new list containing all elements from both lists in order.",
    difficulty: "Easy",
    topic: "Lists"
},
{
    id: "python-62",
    question: "Which statement about tuples is correct?",
    options: [
        "Tuples are mutable",
        "Tuples cannot contain lists",
        "Tuples are immutable sequences",
        "Tuples use square brackets"
    ],
    answer: 2,
    explanation: "Tuples are immutable sequences, typically used to store collections of heterogeneous data. They are defined using parentheses.",
    difficulty: "Easy",
    topic: "Tuples"
},
{
    id: "python-63",
    question: "How do you create a tuple with a single element?",
    options: [
        "t = (1,)",
        "t = (1)",
        "t = tuple(1)",
        "t = [1]"
    ],
    answer: 0,
    explanation: "To create a single-element tuple, you must include a trailing comma: `(1,)`. Without it, `(1)` is just an integer in parentheses.",
    difficulty: "Easy",
    topic: "Tuples"
},
{
    id: "python-64",
    question: "Can a tuple be used as a dictionary key?",
    options: [
        "Yes, always",
        "No, never",
        "Yes, but only if all its elements are also immutable",
        "Yes, but only if it has less than 5 elements"
    ],
    answer: 2,
    explanation: "Dictionary keys must be hashable. A tuple can be a key only if all of its elements are also hashable (immutable).",
    difficulty: "Medium",
    topic: "Tuples"
},
{
    id: "python-65",
    question: "Which of the following is TRUE about Python sets?",
    options: [
        "They are ordered",
        "They allow duplicate elements",
        "They are mutable and unordered",
        "They can be accessed by index"
    ],
    answer: 2,
    explanation: "Sets are unordered collections of unique elements. They are mutable (you can add/remove elements) but do not support indexing.",
    difficulty: "Easy",
    topic: "Sets"
},
{
    id: "python-66",
    question: "What is the output of `len({1, 2, 2, 3, 3, 3})`?",
    options: [
        "6",
        "3",
        "1",
        "0"
    ],
    answer: 1,
    explanation: "Sets automatically remove duplicate elements. The set becomes `{1, 2, 3}`, so its length is 3.",
    difficulty: "Easy",
    topic: "Sets"
},
{
    id: "python-67",
    question: "Which method is used to find the intersection of two sets, `A` and `B`?",
    options: [
        "A.union(B)",
        "A.difference(B)",
        "A.intersection(B)",
        "A.symmetric_difference(B)"
    ],
    answer: 2,
    explanation: "`A.intersection(B)` or `A & B` returns a set containing elements that are common to both sets.",
    difficulty: "Easy",
    topic: "Sets"
},
{
    id: "python-68",
    question: "What does `frozenset()` do?",
    options: [
        "Deletes a set",
        "Creates an immutable set",
        "Freezes the Python interpreter",
        "Converts a list to a tuple"
    ],
    answer: 1,
    explanation: "`frozenset()` creates an immutable set. Since it's immutable, it can be used as a dictionary key or as an element of another set.",
    difficulty: "Medium",
    topic: "Sets"
},
{
    id: "python-69",
    question: "Which data structure is best suited for storing key-value pairs?",
    options: [
        "List",
        "Tuple",
        "Set",
        "Dictionary"
    ],
    answer: 3,
    explanation: "Dictionaries (`dict`) are designed to store data in key-value pairs, allowing fast lookups, insertions, and deletions by key.",
    difficulty: "Easy",
    topic: "Dictionaries"
},
{
    id: "python-70",
    question: "What happens if you try to access a dictionary using a key that does not exist?",
    options: [
        "It returns None",
        "It returns an empty string",
        "It raises a KeyError",
        "It adds the key with a None value"
    ],
    answer: 2,
    explanation: "Accessing a non-existent key directly using square bracket notation (e.g., `my_dict['missing']`) raises a `KeyError`.",
    difficulty: "Easy",
    topic: "Dictionaries"
},
{
    id: "python-71",
    question: "Which method safely gets a value from a dictionary without raising an error if the key is missing?",
    options: [
        "get()",
        "fetch()",
        "find()",
        "retrieve()"
    ],
    answer: 0,
    explanation: "`dict.get(key, default)` returns the value for `key` if it exists, otherwise it returns the `default` value (None if not provided).",
    difficulty: "Easy",
    topic: "Dictionary Methods"
},
{
    id: "python-72",
    question: "What does the `items()` method return when called on a dictionary?",
    options: [
        "A list of keys",
        "A list of values",
        "A view object displaying key-value tuples",
        "A string representation"
    ],
    answer: 2,
    explanation: "`dict.items()` returns a dictionary view object that displays a list of a dictionary's key-value tuple pairs.",
    difficulty: "Medium",
    topic: "Dictionary Methods"
},
{
    id: "python-73",
    question: "How do you delete a key-value pair from a dictionary?",
    options: [
        "del dict[key]",
        "dict.remove(key)",
        "dict.delete(key)",
        "dict.pop(key) is the only way"
    ],
    answer: 0,
    explanation: "The `del` statement removes the key-value pair. `dict.pop(key)` also removes it and returns the value, but `del` is the standard deletion syntax.",
    difficulty: "Medium",
    topic: "Dictionary Methods"
},
{
    id: "python-74",
    question: "What is the syntax for a list comprehension that creates a list of squares for numbers 0 to 4?",
    options: [
        "[x^2 for x in range(5)]",
        "[x**2 for x in range(5)]",
        "list(map(square, range(5)))",
        "[x*2 for x in range(4)]"
    ],
    answer: 1,
    explanation: "`[x**2 for x in range(5)]` correctly uses the exponentiation operator `**` to generate squares for 0, 1, 2, 3, and 4.",
    difficulty: "Easy",
    topic: "List Comprehension"
},
{
    id: "python-75",
    question: "What is the output of `[x for x in range(10) if x % 2 == 0]`?",
    options: [
        "[1, 3, 5, 7, 9]",
        "[0, 2, 4, 6, 8]",
        "[2, 4, 6, 8, 10]",
        "[]"
    ],
    answer: 1,
    explanation: "The comprehension iterates from 0 to 9, filtering and keeping only even numbers (`x % 2 == 0`).",
    difficulty: "Easy",
    topic: "List Comprehension"
},
{
    id: "python-76",
    question: "Which of the following is a valid dictionary comprehension?",
    options: [
        "{x: x**2 for x in range(5)}",
        "{x**2 for x in range(5)}",
        "{x, x**2 for x in range(5)}",
        "[x: x**2 for x in range(5)]"
    ],
    answer: 0,
    explanation: "Dictionary comprehensions use curly braces `{}` and a `key: value` expression. `{x: x**2 for x in range(5)}` is the correct syntax.",
    difficulty: "Medium",
    topic: "Dictionary Comprehension"
},
{
    id: "python-77",
    question: "What is the result of `{x for x in 'hello'}`?",
    options: [
        "{'h', 'e', 'l', 'o'}",
        "['h', 'e', 'l', 'l', 'o']",
        "{'h', 'e', 'l', 'l', 'o'}",
        "{'hello'}"
    ],
    answer: 0,
    explanation: "This is a set comprehension. It iterates over the string 'hello', adding each character to a set. Since sets do not allow duplicates, the second 'l' is ignored.",
    difficulty: "Medium",
    topic: "Set Comprehension"
},
{
    id: "python-78",
    question: "Which function is used to open a file in Python?",
    options: [
        "open()",
        "file()",
        "fopen()",
        "read()"
    ],
    answer: 0,
    explanation: "The built-in `open()` function is used to open a file and returns a file object.",
    difficulty: "Easy",
    topic: "File Handling"
},
{
    id: "python-79",
    question: "What mode is used to append data to the end of a file without truncating it?",
    options: [
        "'w'",
        "'a'",
        "'r+'",
        "'w+'"
    ],
    answer: 1,
    explanation: "The `'a'` (append) mode opens the file for writing. If the file exists, data is added to the end; otherwise, a new file is created.",
    difficulty: "Easy",
    topic: "File Handling"
},
{
    id: "python-80",
    question: "What is the primary benefit of using the `with` statement for file handling?",
    options: [
        "It makes the code run faster",
        "It automatically handles closing the file, even if exceptions occur",
        "It allows reading multiple files at once",
        "It compresses the file automatically"
    ],
    answer: 1,
    explanation: "The `with` statement acts as a context manager, guaranteeing that the file's `close()` method is called when the block is exited, preventing resource leaks.",
    difficulty: "Easy",
    topic: "with Statement"
},
{
    id: "python-81",
    question: "What does the `readline()` method do?",
    options: [
        "Reads the entire file",
        "Reads a single line from the file",
        "Reads all lines into a list",
        "Reads a specific number of characters"
    ],
    answer: 1,
    explanation: "`readline()` reads exactly one line from the file, including the trailing newline character.",
    difficulty: "Easy",
    topic: "File Handling"
},
{
    id: "python-82",
    question: "Which module is used to work with CSV files in Python?",
    options: [
        "csv",
        "pandas",
        "flatfile",
        "excel"
    ],
    answer: 0,
    explanation: "The built-in `csv` module provides functionality to both read from and write to CSV files.",
    difficulty: "Easy",
    topic: "CSV Basics"
},
{
    id: "python-83",
    question: "What does `json.loads()` do?",
    options: [
        "Converts a Python object to a JSON string",
        "Parses a JSON string into a Python dictionary",
        "Loads JSON from a file",
        "Deletes a JSON object"
    ],
    answer: 1,
    explanation: "`json.loads()` (load string) takes a JSON formatted string and returns a Python object (usually a dict or list).",
    difficulty: "Medium",
    topic: "JSON Basics"
},
{
    id: "python-84",
    question: "What does `json.dumps()` do?",
    options: [
        "Converts a Python object to a JSON string",
        "Parses a JSON string into a Python dictionary",
        "Writes JSON directly to a file",
        "Reads JSON from a URL"
    ],
    answer: 0,
    explanation: "`json.dumps()` (dump string) serializes a Python object (like a dict) into a JSON formatted string.",
    difficulty: "Medium",
    topic: "JSON Basics"
},
{
    id: "python-85",
    question: "Which block of code is ALWAYS executed in an exception handling structure, regardless of whether an exception occurred?",
    options: [
        "try",
        "except",
        "else",
        "finally"
    ],
    answer: 3,
    explanation: "The `finally` block executes no matter what, whether an exception was raised, handled, or no exception occurred at all. It is typically used for cleanup actions.",
    difficulty: "Easy",
    topic: "finally"
},
{
    id: "python-86",
    question: "What is the base class for all built-in exceptions in Python?",
    options: [
        "Error",
        "BaseException",
        "Exception",
        "Throwable"
    ],
    answer: 1,
    explanation: "`BaseException` is the base class for all built-in exceptions. `Exception` inherits from it and is the base class for all non-system-exiting exceptions.",
    difficulty: "Medium",
    topic: "Exception Handling"
},
{
    id: "python-87",
    question: "What happens if an exception is raised in the `finally` block?",
    options: [
        "It is ignored",
        "It replaces any exception raised in the try block",
        "It is caught by the preceding except block",
        "The program terminates immediately"
    ],
    answer: 1,
    explanation: "If an exception is raised in `finally`, it will be the exception propagated to the caller, overriding any exception that was being handled from the `try` block.",
    difficulty: "Hard",
    topic: "finally"
},
{
    id: "python-88",
    question: "How do you raise a custom exception manually?",
    options: [
        "throw Exception('message')",
        "raise Exception('message')",
        "error Exception('message')",
        "catch Exception('message')"
    ],
    answer: 1,
    explanation: "The `raise` keyword is used to trigger an exception manually. You can raise built-in exceptions or custom exception classes.",
    difficulty: "Easy",
    topic: "raise"
},
{
    id: "python-89",
    question: "What is the correct way to define a custom exception class?",
    options: [
        "class MyError(Exception): pass",
        "def MyError(): pass",
        "class MyError(Error): pass",
        "exception MyError:"
    ],
    answer: 0,
    explanation: "Custom exceptions should inherit from the `Exception` class (or a subclass of it). The `pass` statement is used if no custom behavior is needed.",
    difficulty: "Medium",
    topic: "Custom Exceptions"
},
{
    id: "python-90",
    question: "What is the output of the following code?\n```python\ntry:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('A')\nexcept:\n    print('B')\n```",
    options: [
        "A",
        "B",
        "A\nB",
        "Error"
    ],
    answer: 0,
    explanation: "The `ZeroDivisionError` is caught by the specific `except ZeroDivisionError:` block, printing 'A'. The generic `except:` block is skipped.",
    difficulty: "Easy",
    topic: "try"
},
{
    id: "python-91",
    question: "In Python OOP, what is a class?",
    options: [
        "An instance of an object",
        "A blueprint or template for creating objects",
        "A function that returns an object",
        "A variable that holds data"
    ],
    answer: 1,
    explanation: "A class is a code template used to create objects. It defines a set of attributes and methods that will characterize any object instantiated from it.",
    difficulty: "Easy",
    topic: "Class"
},
{
    id: "python-92",
    question: "What does the `__init__` method do in a Python class?",
    options: [
        "Destroys the object",
        "Initializes the object's state (constructor)",
        "Imports modules for the class",
        "Inherits from another class"
    ],
    answer: 1,
    explanation: "`__init__` is the constructor method in Python. It is automatically called when a new object is created to initialize its attributes.",
    difficulty: "Easy",
    topic: "Constructor"
},
{
    id: "python-93",
    question: "What is `self` in a Python class?",
    options: [
        "A reserved keyword",
        "A reference to the current instance of the class",
        "A reference to the class itself",
        "A built-in function"
    ],
    answer: 1,
    explanation: "`self` refers to the current instance of the class. It is used to access variables and methods associated with that specific instance. (It is a convention, not a keyword).",
    difficulty: "Easy",
    topic: "self"
},
{
    id: "python-94",
    question: "What is the output of the following code?\n```python\nclass Dog:\n    species = 'Canine'\n    def __init__(self, name):\n        self.name = name\n\ndog1 = Dog('Buddy')\nprint(dog1.species)\n```",
    options: [
        "Error",
        "None",
        "Canine",
        "Buddy"
    ],
    answer: 2,
    explanation: "`species` is a class attribute. It is shared by all instances. `dog1` can access it via `dog1.species`.",
    difficulty: "Easy",
    topic: "Object"
},
{
    id: "python-95",
    question: "Which OOP concept allows a class to inherit attributes and methods from another class?",
    options: [
        "Polymorphism",
        "Encapsulation",
        "Abstraction",
        "Inheritance"
    ],
    answer: 3,
    explanation: "Inheritance allows a child class (subclass) to derive properties and behaviors from a parent class (superclass), promoting code reusability.",
    difficulty: "Easy",
    topic: "Inheritance"
},
{
    id: "python-96",
    question: "How do you call the parent class's constructor from a child class in Python 3?",
    options: [
        "super().__init__()",
        "parent.__init__()",
        "ParentClass.super()",
        "this.__init__()"
    ],
    answer: 0,
    explanation: "In Python 3, `super()` returns a proxy object that delegates method calls to a parent or sibling class. `super().__init__()` is the standard way to call the parent constructor.",
    difficulty: "Easy",
    topic: "Inheritance"
},
{
    id: "python-97",
    question: "What is multiple inheritance?",
    options: [
        "A class inheriting from multiple classes",
        "Multiple classes inheriting from a single class",
        "A class inheriting from itself",
        "A method having multiple definitions"
    ],
    answer: 0,
    explanation: "Multiple inheritance is a feature where a class can inherit attributes and methods from more than one parent class (e.g., `class C(A, B):`).",
    difficulty: "Easy",
    topic: "Multiple Inheritance"
},
{
    id: "python-98",
    question: "What is Method Resolution Order (MRO) in Python?",
    options: [
        "The order in which methods are defined in a file",
        "The order in which base classes are searched when executing a method",
        "The order in which exceptions are caught",
        "The order in which modules are imported"
    ],
    answer: 1,
    explanation: "MRO is the order in which Python looks for a method in a hierarchy of classes, especially in the context of multiple inheritance. It uses the C3 linearization algorithm.",
    difficulty: "Medium",
    topic: "Multiple Inheritance"
},
{
    id: "python-99",
    question: "What is method overriding in Python?",
    options: [
        "Defining a method in a subclass with the same name as in the parent class",
        "Deleting a method from the parent class",
        "Calling a method multiple times",
        "Overloading a method with different arguments"
    ],
    answer: 0,
    explanation: "Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its parent class.",
    difficulty: "Easy",
    topic: "Method Overriding"
},
{
    id: "python-100",
    question: "Does Python support true method overloading (multiple methods with the same name but different arguments)?",
    options: [
        "Yes, natively",
        "No, the last defined method overwrites the previous ones",
        "Yes, but only for built-in classes",
        "Yes, using the `@overload` decorator at runtime"
    ],
    answer: 1,
    explanation: "Python does not support method overloading in the traditional sense. If you define multiple methods with the same name, the last definition overwrites the previous ones.",
    difficulty: "Medium",
    topic: "Method Overloading (Concept)"
},
{
    id: "python-101",
    question: "Which OOP principle bundles data and the methods that operate on that data into a single unit, hiding the internal state?",
    options: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction"
    ],
    answer: 2,
    explanation: "Encapsulation is the bundling of data (attributes) and methods within a class, restricting direct access to some of the object's components (usually using underscores).",
    difficulty: "Easy",
    topic: "Encapsulation"
},
{
    id: "python-102",
    question: "What does a single leading underscore (e.g., `_var`) indicate in Python?",
    options: [
        "A private variable that cannot be accessed outside the class",
        "A protected variable (internal use, convention only)",
        "A static variable",
        "A constant"
    ],
    answer: 1,
    explanation: "A single leading underscore is a convention indicating that a variable or method is intended for internal use. It does not enforce strict access control but signals to developers to avoid using it.",
    difficulty: "Medium",
    topic: "Encapsulation"
},
{
    id: "python-103",
    question: "What is name mangling in Python?",
    options: [
        "Renaming variables to shorter names",
        "A mechanism where identifiers with double leading underscores (e.g., `__var`) are textually replaced with `_classname__var`",
        "A way to delete variables from memory",
        "A string formatting technique"
    ],
    answer: 1,
    explanation: "Name mangling is triggered by double leading underscores. It helps prevent name clashes in inheritance by rewriting the attribute name to include the class name.",
    difficulty: "Hard",
    topic: "Encapsulation"
},
{
    id: "python-104",
    question: "What is abstraction in OOP?",
    options: [
        "Hiding complex implementation details and showing only essential features",
        "Combining data and methods",
        "Inheriting from multiple classes",
        "Overriding methods"
    ],
    answer: 0,
    explanation: "Abstraction involves hiding the background details or implementation and exposing only the necessary features to the user, often achieved via abstract classes and interfaces.",
    difficulty: "Easy",
    topic: "Abstraction"
},
{
    id: "python-105",
    question: "Which module is used to create abstract base classes in Python?",
    options: [
        "abc",
        "abstract",
        "interface",
        "base"
    ],
    answer: 0,
    explanation: "The `abc` (Abstract Base Classes) module provides the infrastructure for defining abstract base classes, using the `@abstractmethod` decorator.",
    difficulty: "Medium",
    topic: "Abstraction"
},
{
    id: "python-106",
    question: "What happens if you try to instantiate a class that contains an abstract method without implementing it?",
    options: [
        "The abstract method is set to None",
        "It raises a TypeError",
        "It runs normally but crashes when the method is called",
        "It automatically implements the method"
    ],
    answer: 1,
    explanation: "Classes containing abstract methods that are not overridden cannot be instantiated. Python raises a `TypeError` immediately.",
    difficulty: "Medium",
    topic: "Abstraction"
},
{
    id: "python-107",
    question: "What is polymorphism in Python?",
    options: [
        "Having multiple classes",
        "The ability of different classes to respond to the same method call in their own way",
        "Hiding data from the user",
        "Combining two classes into one"
    ],
    answer: 1,
    explanation: "Polymorphism allows objects of different classes to be treated as objects of a common superclass, with each class providing its own specific implementation of a shared method.",
    difficulty: "Easy",
    topic: "Polymorphism"
},
{
    id: "python-108",
    question: "What are Magic Methods (Dunder Methods) in Python?",
    options: [
        "Methods that perform magic tricks",
        "Special methods with double underscores (e.g., `__init__`, `__str__`) that override built-in behavior",
        "Private methods that cannot be called",
        "Methods imported from external libraries"
    ],
    answer: 1,
    explanation: "Dunder (double underscore) methods allow classes to integrate with Python's built-in operations (like `+`, `str()`, `len()`) by overriding specific protocols.",
    difficulty: "Medium",
    topic: "Magic Methods"
},
{
    id: "python-109",
    question: "Which magic method is called when you use `str(obj)` or `print(obj)`?",
    options: [
        "__repr__",
        "__str__",
        "__print__",
        "__format__"
    ],
    answer: 1,
    explanation: "The `__str__` method should return a string that is nicely printable for the end-user. If not defined, Python falls back to `__repr__`.",
    difficulty: "Medium",
    topic: "Magic Methods"
},
{
    id: "python-110",
    question: "Which magic method overloads the `+` operator?",
    options: [
        "__add__",
        "__plus__",
        "__sum__",
        "__concat__"
    ],
    answer: 0,
    explanation: "The `__add__(self, other)` method is called to implement the behavior of the addition operator `+`.",
    difficulty: "Easy",
    topic: "Magic Methods"
},
{
    id: "python-111",
    question: "What is an iterator in Python?",
    options: [
        "A data structure that stores elements",
        "An object that implements `__iter__()` and `__next__()` to iterate over data",
        "A loop construct",
        "A type of function"
    ],
    answer: 1,
    explanation: "An iterator is an object which implements the iterator protocol, consisting of the `__iter__()` method (returning the iterator object itself) and the `__next__()` method (returning the next item).",
    difficulty: "Medium",
    topic: "Iterators"
},
{
    id: "python-112",
    question: "What happens when a Python iterator runs out of items and `__next__()` is called again?",
    options: [
        "It returns None",
        "It returns an empty string",
        "It raises a StopIteration exception",
        "It loops back to the first item"
    ],
    answer: 2,
    explanation: "Once an iterator is exhausted, subsequent calls to `__next__()` must raise a `StopIteration` exception to signal the end of the iteration.",
    difficulty: "Medium",
    topic: "Iterators"
},
{
    id: "python-113",
    question: "What makes an object iterable?",
    options: [
        "It has a `__next__()` method",
        "It has an `__iter__()` method that returns an iterator",
        "It is a list or tuple",
        "It is stored in memory"
    ],
    answer: 1,
    explanation: "An object is iterable if it implements the `__iter__()` method, which must return an iterator object.",
    difficulty: "Medium",
    topic: "Iterable"
},
{
    id: "python-114",
    question: "What is a generator in Python?",
    options: [
        "A function that returns a list",
        "A function that uses `yield` to produce a sequence of values lazily",
        "A type of loop",
        "A module that generates random numbers"
    ],
    answer: 1,
    explanation: "A generator is a special type of function that uses the `yield` keyword to return values one at a time, suspending its state between yields to produce a sequence lazily.",
    difficulty: "Medium",
    topic: "Generators"
},
{
    id: "python-115",
    question: "What is the primary advantage of using generators?",
    options: [
        "They run faster than lists",
        "They consume less memory because they yield items one by one instead of storing the entire sequence in memory",
        "They can only be used with strings",
        "They allow parallel processing"
    ],
    answer: 1,
    explanation: "Generators are memory-efficient because they generate items on the fly and do not store the entire sequence in memory, making them ideal for large datasets.",
    difficulty: "Easy",
    topic: "Generators"
},
{
    id: "python-116",
    question: "What is the output of the following code?\n```python\ndef gen():\n    yield 1\n    yield 2\n    yield 3\n\ng = gen()\nprint(next(g))\nprint(next(g))\n```",
    options: [
        "1\n2",
        "1\n1",
        "1\n2\n3",
        "Error"
    ],
    answer: 0,
    explanation: "`next(g)` resumes the generator function, executing until it hits the next `yield`. The first call yields 1, the second yields 2.",
    difficulty: "Medium",
    topic: "yield"
},
{
    id: "python-117",
    question: "What is a generator expression?",
    options: [
        "A string that evaluates to a generator",
        "A syntax similar to list comprehension but using parentheses `()` that creates a generator",
        "A function without a return statement",
        "A lambda function"
    ],
    answer: 1,
    explanation: "A generator expression is a high-performance, memory-efficient generalization of list comprehensions and generators, created by using parentheses (e.g., `(x**2 for x in range(10))`).",
    difficulty: "Medium",
    topic: "Generators"
},
{
    id: "python-118",
    question: "What is a decorator in Python?",
    options: [
        "A design pattern for adding UI elements",
        "A function that takes another function and extends its behavior without explicitly modifying it",
        "A special type of class attribute",
        "A way to declare global variables"
    ],
    answer: 1,
    explanation: "Decorators are a powerful tool that allows you to wrap a function or class method to extend its behavior, commonly used for logging, access control, or caching.",
    difficulty: "Medium",
    topic: "Decorators"
},
{
    id: "python-119",
    question: "Which symbol is used to apply a decorator to a function?",
    options: [
        "&",
        "#",
        "@",
        "$"
    ],
    answer: 2,
    explanation: "The `@` symbol is placed before the function definition to apply a decorator, e.g., `@my_decorator`.",
    difficulty: "Easy",
    topic: "Decorators"
},
{
    id: "python-120",
    question: "What is a closure in Python?",
    options: [
        "A way to close a file",
        "A nested function that remembers the variables from its enclosing scope even after the outer function has finished executing",
        "A method that deletes an object",
        "An empty function"
    ],
    answer: 1,
    explanation: "A closure occurs when a nested function references a value in its enclosing scope. The closure 'closes over' those free variables, keeping them alive.",
    difficulty: "Medium",
    topic: "Closures"
},
{
    id: "python-121",
    question: "What is the output of the following code?\n```python\ndef outer():\n    x = 10\n    def inner():\n        return x\n    return inner\n\nf = outer()\nprint(f())\n```",
    options: [
        "Error",
        "None",
        "10",
        "undefined"
    ],
    answer: 2,
    explanation: "`inner` is a closure. Even though `outer()` has finished executing, `inner` remembers the value of `x` from its enclosing scope. Calling `f()` returns 10.",
    difficulty: "Medium",
    topic: "Closures"
},
{
    id: "python-122",
    question: "What does the `map()` function do?",
    options: [
        "Filters elements from a list",
        "Applies a given function to all items in an iterable and returns an iterator",
        "Sorts the elements of a list",
        "Finds the maximum value in an iterable"
    ],
    answer: 1,
    explanation: "`map(function, iterable)` executes the specified function for each item in the iterable and yields the results.",
    difficulty: "Easy",
    topic: "Map"
},
{
    id: "python-123",
    question: "What is the output of `list(map(lambda x: x*2, [1, 2, 3]))`?",
    options: [
        "[1, 2, 3]",
        "[2, 4, 6]",
        "[3, 6, 9]",
        "Error"
    ],
    answer: 1,
    explanation: "The lambda function multiplies each element by 2. `map` applies this to the list `[1, 2, 3]`, resulting in `[2, 4, 6]`.",
    difficulty: "Easy",
    topic: "Map"
},
{
    id: "python-124",
    question: "What does the `filter()` function do?",
    options: [
        "Applies a function to all elements",
        "Removes duplicates from a list",
        "Constructs an iterator from elements of an iterable for which a function returns true",
        "Sorts elements based on a condition"
    ],
    answer: 2,
    explanation: "`filter(function, iterable)` yields only those items of the iterable for which `function(item)` returns `True`.",
    difficulty: "Easy",
    topic: "Filter"
},
{
    id: "python-125",
    question: "What is required to use the `reduce()` function in Python 3?",
    options: [
        "Nothing, it's built-in",
        "Importing it from the `functools` module",
        "Importing it from the `itertools` module",
        "Importing it from the `operator` module"
    ],
    answer: 1,
    explanation: "In Python 3, `reduce()` is no longer a built-in function and must be imported from the `functools` module.",
    difficulty: "Medium",
    topic: "Reduce"
},
{
    id: "python-126",
    question: "What does `reduce(lambda x, y: x + y, [1, 2, 3, 4])` return?",
    options: [
        "10",
        "[1, 2, 3, 4]",
        "4",
        "TypeError"
    ],
    answer: 0,
    explanation: "`reduce` applies the function cumulatively: `(((1+2)+3)+4) = 10`. It reduces the list to a single value.",
    difficulty: "Medium",
    topic: "Reduce"
},
{
    id: "python-127",
    question: "What does the `zip()` function do?",
    options: [
        "Compresses a file",
        "Returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument iterables",
        "Merges two lists into one flat list",
        "Unzips a compressed file"
    ],
    answer: 1,
    explanation: "`zip()` aggregates elements from multiple iterables. It stops when the shortest iterable is exhausted.",
    difficulty: "Easy",
    topic: "zip()"
},
{
    id: "python-128",
    question: "What is the output of `list(zip([1, 2], ['a', 'b', 'c']))`?",
    options: [
        "[(1, 'a'), (2, 'b'), (None, 'c')]",
        "[(1, 'a'), (2, 'b')]",
        "[(1, 'a', 2, 'b', 3, 'c')]",
        "Error"
    ],
    answer: 1,
    explanation: "`zip()` stops at the shortest iterable. Since the list of integers has only 2 elements, it creates only 2 tuples.",
    difficulty: "Medium",
    topic: "zip()"
},
{
    id: "python-129",
    question: "What is the output of `bool([])` and `bool([False])`?",
    options: [
        "False, False",
        "True, True",
        "False, True",
        "True, False"
    ],
    answer: 2,
    explanation: "An empty list `[]` is falsy (`False`), but a non-empty list `[False]` is truthy (`True`) because it contains one element, regardless of the element's value.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-130",
    question: "What is the difference between `==` and `is`?",
    options: [
        "`==` checks identity, `is` checks equality",
        "`==` checks value equality, `is` checks object identity (memory address)",
        "There is no difference",
        "`is` is used for strings, `==` is used for numbers"
    ],
    answer: 1,
    explanation: "`==` compares the values of the objects, while `is` checks if two variables point to the exact same object in memory.",
    difficulty: "Easy",
    topic: "Operators"
},
{
    id: "python-131",
    question: "What is the output of `[] is []`?",
    options: [
        "True",
        "False",
        "None",
        "SyntaxError"
    ],
    answer: 1,
    explanation: "Each time `[]` is evaluated, a new list object is created in memory. Since they are two distinct objects, `is` evaluates to `False`.",
    difficulty: "Medium",
    topic: "Operators"
},
{
    id: "python-132",
    question: "What is the output of `type([]) == list` and `isinstance([], list)`?",
    options: [
        "False, True",
        "True, False",
        "True, True",
        "False, False"
    ],
    answer: 2,
    explanation: "Both evaluate to `True`. However, `isinstance()` is generally preferred in OOP because it also returns `True` for subclasses of `list`, whereas `type() ==` does not.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-133",
    question: "What does `id()` return?",
    options: [
        "The name of the object",
        "The type of the object",
        "The unique integer identity (memory address) of the object",
        "The value of the object"
    ],
    answer: 2,
    explanation: "`id()` returns the identity of an object, which is an integer guaranteed to be unique and constant for the object during its lifetime.",
    difficulty: "Easy",
    topic: "Memory Management"
},
{
    id: "python-134",
    question: "How does Python manage memory?",
    options: [
        "Manual memory management using `malloc` and `free`",
        "Automatic garbage collection via reference counting and a cyclic garbage collector",
        "It does not manage memory",
        "Using a fixed memory block for all variables"
    ],
    answer: 1,
    explanation: "Python primarily uses reference counting to track objects. When an object's reference count drops to zero, it is deallocated. A cyclic garbage collector handles reference cycles.",
    difficulty: "Medium",
    topic: "Garbage Collection"
},
{
    id: "python-135",
    question: "Which of the following is a mutable data type?",
    options: [
        "int",
        "str",
        "tuple",
        "list"
    ],
    answer: 3,
    explanation: "Lists are mutable, meaning their elements can be changed in place. Integers, strings, and tuples are immutable.",
    difficulty: "Easy",
    topic: "Mutable Objects"
},
{
    id: "python-136",
    question: "What is the output of the following code?\n```python\ndef add_item(lst, item):\n    lst.append(item)\n\nmy_list = [1, 2]\nadd_item(my_list, 3)\nprint(my_list)\n```",
    options: [
        "[1, 2]",
        "[1, 2, 3]",
        "[3]",
        "Error"
    ],
    answer: 1,
    explanation: "Because lists are mutable and passed by object reference, the function modifies the original list in place.",
    difficulty: "Easy",
    topic: "Mutable Objects"
},
{
    id: "python-137",
    question: "What does `import copy; copy.copy(obj)` do?",
    options: [
        "Creates a deep copy of the object",
        "Creates a shallow copy of the object",
        "Deletes the object",
        "Raises an error"
    ],
    answer: 1,
    explanation: "`copy.copy()` creates a new compound object and then inserts references into it to the objects found in the original (shallow copy).",
    difficulty: "Medium",
    topic: "Shallow Copy"
},
{
    id: "python-138",
    question: "What is the difference between shallow copy and deep copy?",
    options: [
        "There is no difference",
        "Shallow copy creates references to nested objects; deep copy recursively copies all nested objects",
        "Deep copy only copies the first level",
        "Shallow copy is slower than deep copy"
    ],
    answer: 1,
    explanation: "A shallow copy constructs a new compound object but populates it with references to the objects found in the original. A deep copy recursively copies all objects, creating entirely new nested objects.",
    difficulty: "Medium",
    topic: "Deep Copy"
},
{
    id: "python-139",
    question: "What is the output of the following code?\n```python\nimport copy\na = [[1, 2], [3, 4]]\nb = copy.copy(a)\nb[0][0] = 99\nprint(a[0][0])\n```",
    options: [
        "1",
        "99",
        "Error",
        "None"
    ],
    answer: 1,
    explanation: "This is a shallow copy. `b` contains references to the same inner lists as `a`. Modifying `b[0][0]` also modifies `a[0][0]`.",
    difficulty: "Hard",
    topic: "Shallow Copy"
},
{
    id: "python-140",
    question: "What is the purpose of a virtual environment in Python?",
    options: [
        "To run Python faster",
        "To create an isolated environment for a project, managing its own dependencies independently",
        "To emulate a different operating system",
        "To compile Python to C code"
    ],
    answer: 1,
    explanation: "Virtual environments (like `venv`) keep dependencies required by different projects separate, preventing version conflicts between project requirements.",
    difficulty: "Easy",
    topic: "Virtual Environment"
},
{
    id: "python-141",
    question: "Which command creates a virtual environment using the built-in `venv` module?",
    options: [
        "python -m venv myenv",
        "pip install venv",
        "virtualenv myenv",
        "python --create-env myenv"
    ],
    answer: 0,
    explanation: "`python -m venv myenv` invokes the `venv` module to create a directory called `myenv` containing the virtual environment.",
    difficulty: "Easy",
    topic: "Virtual Environment"
},
{
    id: "python-142",
    question: "What is `pip`?",
    options: [
        "A Python compiler",
        "The package installer for Python",
        "A Python debugger",
        "A Python linter"
    ],
    answer: 1,
    explanation: "`pip` is the standard package installer for Python, used to install and manage software packages found in the Python Package Index (PyPI).",
    difficulty: "Easy",
    topic: "pip"
},
{
    id: "python-143",
    question: "Which command upgrades an installed package using pip?",
    options: [
        "pip install package --new",
        "pip update package",
        "pip install --upgrade package",
        "pip upgrade package"
    ],
    answer: 2,
    explanation: "The correct syntax to upgrade a package to the latest version is `pip install --upgrade <package_name>` (or `-U` for short).",
    difficulty: "Easy",
    topic: "pip"
},
{
    id: "python-144",
    question: "What is PEP 8?",
    options: [
        "A Python package",
        "Python's official style guide",
        "A Python compiler optimization",
        "A built-in module"
    ],
    answer: 1,
    explanation: "PEP 8 is the Python Enhancement Proposal that provides the official style guide and coding conventions for writing clean, readable Python code.",
    difficulty: "Easy",
    topic: "PEP8"
},
{
    id: "python-145",
    question: "According to PEP 8, how should variables be named?",
    options: [
        "camelCase",
        "PascalCase",
        "snake_case",
        "UPPER_CASE"
    ],
    answer: 2,
    explanation: "PEP 8 recommends `snake_case` for variable and function names (e.g., `my_variable`). `PascalCase` is for classes, and `UPPER_CASE` is for constants.",
    difficulty: "Easy",
    topic: "PEP8"
},
{
    id: "python-146",
    question: "What is Type Hinting in Python?",
    options: [
        "A way to force static typing",
        "Syntax for declaring the expected types of variables and function signatures",
        "A way to convert types faster",
        "A module for type checking"
    ],
    answer: 1,
    explanation: "Type hinting (PEP 484) allows you to annotate variables and function parameters/returns with expected types (e.g., `def add(a: int, b: int) -> int:`). Python does not enforce them at runtime.",
    difficulty: "Medium",
    topic: "Type Hinting"
},
{
    id: "python-147",
    question: "Which module is used to store type hints at runtime?",
    options: [
        "typing",
        "types",
        "typehints",
        "annotations"
    ],
    answer: 0,
    explanation: "The `typing` module provides support for type hints, including generic types, special forms, and type aliases.",
    difficulty: "Medium",
    topic: "Type Hinting"
},
{
    id: "python-148",
    question: "What is the main benefit of using `dataclasses`?",
    options: [
        "Faster execution speed",
        "Automatic generation of `__init__`, `__repr__`, and `__eq__` methods for classes that primarily store state",
        "Built-in database integration",
        "Automatic UI generation"
    ],
    answer: 1,
    explanation: "Introduced in Python 3.7, the `@dataclass` decorator automatically writes boilerplate methods like `__init__` and `__repr__` based on class attributes, reducing code.",
    difficulty: "Medium",
    topic: "Dataclasses"
},
{
    id: "python-149",
    question: "What is a Context Manager in Python?",
    options: [
        "A variable manager",
        "An object that defines the runtime context to be established when executing a `with` statement",
        "A memory management tool",
        "A loop controller"
    ],
    answer: 1,
    explanation: "A context manager is an object that implements `__enter__()` and `__exit__()` methods, allowing allocation and release of resources precisely when needed (e.g., file handling).",
    difficulty: "Medium",
    topic: "Context Managers"
},
{
    id: "python-150",
    question: "Which decorator from the `contextlib` module can turn a generator function into a context manager?",
    options: [
        "@contextmanager",
        "@generator_context",
        "@with_context",
        "@resource_manager"
    ],
    answer: 0,
    explanation: "The `@contextmanager` decorator allows a simple generator function (yielding exactly once) to be used as a factory for a context manager.",
    difficulty: "Hard",
    topic: "Context Managers"
},
{
    id: "python-151",
    question: "What is the Global Interpreter Lock (GIL)?",
    options: [
        "A lock that prevents multiple Python files from running at once",
        "A mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes simultaneously",
        "A security mechanism that locks Python scripts",
        "A lock used by the OS to manage Python processes"
    ],
    answer: 1,
    explanation: "The GIL is a mutex used by CPython that allows only one thread to execute Python bytecode at a time, making multi-threading ineffective for CPU-bound tasks in CPython.",
    difficulty: "Medium",
    topic: "Threading Basics"
},
{
    id: "python-152",
    question: "Because of the GIL, which type of tasks can benefit from Python's `threading` module?",
    options: [
        "CPU-bound tasks (like mathematical computations)",
        "I/O-bound tasks (like network requests or file reading)",
        "Memory-intensive tasks",
        "Neither, threading is useless in Python"
    ],
    answer: 1,
    explanation: "During I/O operations, the GIL is released. Therefore, `threading` is highly effective for I/O-bound tasks, allowing other threads to run while one waits for I/O.",
    difficulty: "Medium",
    topic: "Threading Basics"
},
{
    id: "python-153",
    question: "Which module is recommended for CPU-bound tasks to bypass the GIL?",
    options: [
        "threading",
        "asyncio",
        "multiprocessing",
        "subprocess"
    ],
    answer: 2,
    explanation: "The `multiprocessing` module creates separate OS processes, each with its own Python interpreter and memory space, thus bypassing the GIL.",
    difficulty: "Medium",
    topic: "Multiprocessing Basics"
},
{
    id: "python-154",
    question: "What is `asyncio` used for?",
    options: [
        "Synchronous programming",
        "Writing concurrent code using the async/await syntax, primarily for I/O-bound tasks",
        "Multi-processing",
        "Compiling Python to C"
    ],
    answer: 1,
    explanation: "`asyncio` is a library to write concurrent code using the `async`/`await` syntax. It uses a single-threaded event loop to handle asynchronous I/O operations efficiently.",
    difficulty: "Medium",
    topic: "Asyncio Basics"
},
{
    id: "python-155",
    question: "What keyword is used to define an asynchronous function (coroutine) in Python?",
    options: [
        "async",
        "await",
        "defer",
        "yield"
    ],
    answer: 0,
    explanation: "The `async def` syntax is used to define a coroutine function. `await` is used inside it to wait for an asynchronous operation to complete.",
    difficulty: "Easy",
    topic: "Asyncio Basics"
},
{
    id: "python-156",
    question: "What is NumPy primarily used for?",
    options: [
        "Web development",
        "Scientific computing and working with large, multi-dimensional arrays and matrices",
        "Database management",
        "Natural language processing"
    ],
    answer: 1,
    explanation: "NumPy (Numerical Python) is the fundamental package for numerical computation in Python, providing powerful N-dimensional array objects.",
    difficulty: "Easy",
    topic: "NumPy Basics (Concept)"
},
{
    id: "python-157",
    question: "What is a Pandas DataFrame?",
    options: [
        "A 1D array",
        "A 2D labeled data structure with columns of potentially different types",
        "A database connection",
        "A type of graph"
    ],
    answer: 1,
    explanation: "A DataFrame is a 2D mutable tabular data structure in Pandas, similar to a spreadsheet or SQL table, with labeled axes (rows and columns).",
    difficulty: "Easy",
    topic: "Pandas Basics (Concept)"
},
{
    id: "python-158",
    question: "In an interview, how should you explain Python's memory management?",
    options: [
        "Python uses manual memory management like C",
        "Python uses a private heap containing all objects and data structures, managed by the Python memory manager internally",
        "Python does not manage memory",
        "Python relies entirely on the operating system's garbage collector"
    ],
    answer: 1,
    explanation: "Python manages memory via a private heap. The Python memory manager handles allocation/deallocation internally, while the developer doesn't manually allocate memory.",
    difficulty: "Hard",
    topic: "Python Interview Questions"
},
{
    id: "python-159",
    question: "What are `*args` and `**kwargs` used for in an interview context?",
    options: [
        "To declare global variables",
        "To pass a variable number of positional and keyword arguments to a function",
        "To import modules dynamically",
        "To catch all exceptions"
    ],
    answer: 1,
    explanation: "They allow functions to accept an arbitrary number of arguments, making functions more flexible. `*args` packs positional arguments into a tuple, `**kwargs` into a dictionary.",
    difficulty: "Medium",
    topic: "Python Interview Questions"
},
{
    id: "python-160",
    question: "Which of the following is a Pythonic way to swap two variables?",
    options: [
        "temp = a; a = b; b = temp",
        "a, b = b, a",
        "a = b; b = a",
        "swap(a, b)"
    ],
    answer: 1,
    explanation: "Python supports tuple packing and unpacking, allowing elegant swapping `a, b = b, a` without needing a temporary variable.",
    difficulty: "Easy",
    topic: "Variables"
},
{
    id: "python-161",
    question: "What is the output of `print(0.1 + 0.2 == 0.3)`?",
    options: [
        "True",
        "False",
        "Error",
        "None"
    ],
    answer: 1,
    explanation: "Due to floating-point representation issues (IEEE 754), `0.1 + 0.2` results in `0.30000000000000004`, which is not exactly equal to `0.3`.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-162",
    question: "How can you accurately compare floating-point numbers in Python?",
    options: [
        "Using `==`",
        "Using the `math.isclose()` function",
        "Converting them to strings",
        "Using the `is` operator"
    ],
    answer: 1,
    explanation: "`math.isclose(a, b)` determines if two floats are close in value, accounting for floating-point precision errors.",
    difficulty: "Medium",
    topic: "Math Module"
},
{
    id: "python-163",
    question: "What is the output of `print('Py' 'thon')`?",
    options: [
        "Py thon",
        "Python",
        "Error",
        "('Py', 'thon')"
    ],
    answer: 1,
    explanation: "Adjacent string literals are automatically concatenated by the Python parser at compile time.",
    difficulty: "Easy",
    topic: "Strings"
},
{
    id: "python-164",
    question: "What does the `in` operator do when used with a dictionary?",
    options: [
        "Checks if a value is in the dictionary",
        "Checks if a key is in the dictionary",
        "Checks if a key-value pair is in the dictionary",
        "Adds a key to the dictionary"
    ],
    answer: 1,
    explanation: "By default, the `in` operator checks for the presence of keys in a dictionary, not values.",
    difficulty: "Easy",
    topic: "Dictionaries"
},
{
    id: "python-165",
    question: "What is the output of `set('abracadabra')`?",
    options: [
        "{'a', 'b', 'r', 'c', 'd'}",
        "['a', 'b', 'r', 'a', 'c', 'a', 'd', 'a', 'b', 'r', 'a']",
        "{'a', 'b', 'r', 'a', 'c', 'a', 'd', 'a', 'b', 'r', 'a'}",
        "Error"
    ],
    answer: 0,
    explanation: "Passing a string to `set()` creates a set of its unique characters. Duplicates are removed, resulting in {'a', 'b', 'r', 'c', 'd'}.",
    difficulty: "Easy",
    topic: "Sets"
},
{
    id: "python-166",
    question: "What is the time complexity of checking if an item exists in a Python set?",
    options: [
        "O(n)",
        "O(1) on average",
        "O(log n)",
        "O(n^2)"
    ],
    answer: 1,
    explanation: "Sets are implemented using hash tables. Looking up an item (checking membership) takes average O(1) time complexity.",
    difficulty: "Medium",
    topic: "Sets"
},
{
    id: "python-167",
    question: "What is the time complexity of inserting an element at the beginning of a Python list?",
    options: [
        "O(1)",
        "O(n)",
        "O(log n)",
        "O(n^2)"
    ],
    answer: 1,
    explanation: "Lists are implemented as dynamic arrays. Inserting at the beginning (`insert(0, val)`) requires shifting all existing elements by one position, which is O(n).",
    difficulty: "Medium",
    topic: "Lists"
},
{
    id: "python-168",
    question: "Which data structure should you use for a FIFO (First-In-First-Out) queue?",
    options: [
        "List",
        "collections.deque",
        "Tuple",
        "String"
    ],
    answer: 1,
    explanation: "`collections.deque` (double-ended queue) provides O(1) time complexity for append and pop operations from both ends, making it ideal for queues.",
    difficulty: "Medium",
    topic: "Collections Module"
},
{
    id: "python-169",
    question: "What does the `__slots__` attribute do in a class?",
    options: [
        "Creates methods automatically",
        "Declares a fixed set of attributes, saving memory by preventing the creation of a `__dict__`",
        "Makes the class immutable",
        "Defines abstract methods"
    ],
    answer: 1,
    explanation: "`__slots__` is a class variable that explicitly lists instance attributes. It prevents the dynamic creation of `__dict__`, significantly reducing memory usage for instances.",
    difficulty: "Hard",
    topic: "OOP Questions"
},
{
    id: "python-170",
    question: "What is the output of the following code?\n```python\ntry:\n    raise ValueError('A')\nexcept ValueError as e:\n    raise TypeError('B') from e\n```",
    options: [
        "Raises TypeError('B')",
        "Raises ValueError('A')",
        "Raises TypeError('B') and displays ValueError('A') as the cause",
        "SyntaxError"
    ],
    answer: 2,
    explanation: "The `raise ... from ...` syntax chains exceptions. It raises the new `TypeError` but explicitly sets the original `ValueError` as its `__cause__`.",
    difficulty: "Hard",
    topic: "Exception Handling"
},
{
    id: "python-171",
    question: "What does the `else` block in a `try-except` statement do?",
    options: [
        "Executes if no exception was raised in the `try` block",
        "Executes if an exception was raised",
        "Always executes",
        "Executes only if `finally` fails"
    ],
    answer: 0,
    explanation: "The `else` clause runs only if the `try` block completes without raising any exceptions. It is useful for code that should only run if the `try` succeeded.",
    difficulty: "Medium",
    topic: "try"
},
{
    id: "python-172",
    question: "What is the output of `int('1010', 2)`?",
    options: [
        "1010",
        "10",
        "5",
        "2"
    ],
    answer: 1,
    explanation: "The second argument specifies the base. `int('1010', 2)` parses the binary string '1010' into its decimal equivalent, which is 10.",
    difficulty: "Medium",
    topic: "Type Conversion"
},
{
    id: "python-173",
    question: "Which method is used to remove all elements from a list?",
    options: [
        "delete()",
        "remove()",
        "clear()",
        "purge()"
    ],
    answer: 2,
    explanation: "The `clear()` method removes all items from the list, leaving it empty. `remove()` only removes the first occurrence of a specific value.",
    difficulty: "Easy",
    topic: "List Methods"
},
{
    id: "python-174",
    question: "What is the output of `[1, 2, 3].index(2)`?",
    options: [
        "1",
        "2",
        "3",
        "ValueError"
    ],
    answer: 0,
    explanation: "The `index()` method returns the index of the first occurrence of the value. '2' is at index 1.",
    difficulty: "Easy",
    topic: "List Methods"
},
{
    id: "python-175",
    question: "What does `dict.fromkeys(['a', 'b', 'c'], 0)` return?",
    options: [
        "{'a': 0, 'b': 0, 'c': 0}",
        "['a': 0, 'b': 0, 'c': 0]",
        "{'a', 'b', 'c'}: 0",
        "Error"
    ],
    answer: 0,
    explanation: "`dict.fromkeys(iterable, value)` creates a new dictionary with keys from the iterable and all values set to the specified value (0 in this case).",
    difficulty: "Medium",
    topic: "Dictionary Methods"
},
{
    id: "python-176",
    question: "What is the output of `round(2.675, 2)`?",
    options: [
        "2.67",
        "2.68",
        "2.675",
        "Error"
    ],
    answer: 1,
    explanation: "Due to the floating-point representation of 2.675, it is actually stored as a value slightly less than 2.675. Python's round function rounds it to the nearest even number in ambiguous cases (banker's rounding), but in this specific IEEE 754 case, it becomes 2.68.",
    difficulty: "Hard",
    topic: "Output-Based Questions"
},
{
    id: "python-177",
    question: "What is the output of `print(f'{10:05d}')`?",
    options: [
        "'10:05d'",
        "00010",
        "10000",
        "10"
    ],
    answer: 1,
    explanation: "`:05d` formats the integer with zero-padding to a total width of 5 characters. So, 10 becomes '00010'.",
    difficulty: "Medium",
    topic: "Formatting"
},
{
    id: "python-178",
    question: "What does the `__name__` variable equal when a Python script is run directly?",
    options: [
        "'main'",
        "'__main__'",
        "The filename",
        "None"
    ],
    answer: 1,
    explanation: "When a Python file is executed as the main program, Python sets the special `__name__` variable to `'__main__'`.",
    difficulty: "Easy",
    topic: "Introduction to Python"
},
{
    id: "python-179",
    question: "What is the purpose of the `if __name__ == '__main__':` idiom?",
    options: [
        "To define the main class",
        "To prevent code from running if the script is imported as a module",
        "To speed up script execution",
        "To declare global variables"
    ],
    answer: 1,
    explanation: "This check ensures that the code block inside it only runs when the script is executed directly, not when it is imported by another script.",
    difficulty: "Medium",
    topic: "Introduction to Python"
},
{
    id: "python-180",
    question: "Which of the following is a correct way to handle multiple exceptions in a single `except` block?",
    options: [
        "except (ValueError, TypeError):",
        "except ValueError, TypeError:",
        "except [ValueError, TypeError]:",
        "except {ValueError, TypeError}:"
    ],
    answer: 0,
    explanation: "To catch multiple exceptions, you pass them as a tuple to the `except` clause: `except (Exception1, Exception2):`.",
    difficulty: "Easy",
    topic: "except"
},
{
    id: "python-181",
    question: "What is the output of `True + True`?",
    options: [
        "True",
        "2",
        "1",
        "Error"
    ],
    answer: 1,
    explanation: "In Python, `bool` is a subclass of `int`. `True` evaluates to 1 and `False` to 0. `True + True` is 1 + 1 = 2.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-182",
    question: "What is the output of `False == 0` and `True == 1`?",
    options: [
        "False, False",
        "True, True",
        "True, False",
        "Error"
    ],
    answer: 1,
    explanation: "Since `bool` is a subclass of `int`, `False` equals `0` and `True` equals `1`. Both comparisons evaluate to `True`.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-183",
    question: "What is a docstring in Python?",
    options: [
        "A comment at the end of a line",
        "A string literal that occurs as the first statement in a module, function, class, or method to document it",
        "A type of error message",
        "A variable name"
    ],
    answer: 1,
    explanation: "Docstrings are encapsulated in triple quotes (`'''` or `"""`) and are accessible via the `__doc__` attribute. They are used for documentation.",
    difficulty: "Easy",
    topic: "Comments"
},
{
    id: "python-184",
    question: "What does the `assert` statement do?",
    options: [
        "Assigns a value to a variable",
        "Tests if a condition is true; raises an AssertionError if it is false",
        "Catches an exception",
        "Imports a module"
    ],
    answer: 1,
    explanation: "`assert expression, message` is used for debugging. If the expression is false, it raises an `AssertionError` (optionally with the provided message).",
    difficulty: "Easy",
    topic: "Exception Handling"
},
{
    id: "python-185",
    question: "What is the output of `divmod(10, 3)`?",
    options: [
        "[3, 1]",
        "(3, 1)",
        "3.33",
        "Error"
    ],
    answer: 1,
    explanation: "`divmod(a, b)` returns a tuple containing the quotient `(a // b)` and the remainder `(a % b)`. For 10 and 3, it returns `(3, 1)`.",
    difficulty: "Easy",
    topic: "Operators"
},
{
    id: "python-186",
    question: "Which function returns the ASCII value of a character?",
    options: [
        "chr()",
        "ascii()",
        "ord()",
        "val()"
    ],
    answer: 2,
    explanation: "`ord()` takes a single character (a string of length 1) and returns its corresponding integer Unicode/ASCII code point.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-187",
    question: "Which function does the opposite of `ord()`?",
    options: [
        "ord()",
        "chr()",
        "str()",
        "int()"
    ],
    answer: 1,
    explanation: "`chr()` takes an integer (Unicode code point) and returns the corresponding character string.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-188",
    question: "What is the output of `'hello'.startswith('hell')`?",
    options: [
        "True",
        "False",
        "None",
        "Error"
    ],
    answer: 0,
    explanation: "The `startswith()` method returns `True` if the string starts with the specified prefix.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-189",
    question: "What does the `split()` method do by default if no separator is specified?",
    options: [
        "Splits the string by commas",
        "Splits the string by any whitespace",
        "Returns an error",
        "Splits the string into individual characters"
    ],
    answer: 1,
    explanation: "If no separator is passed, `split()` splits the string at any sequence of whitespace (spaces, tabs, newlines) and discards empty strings.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-190",
    question: "What is the output of `'_'.join(['a', 'b', 'c'])`?",
    options: [
        "['a', 'b', 'c']",
        "'a_b_c'",
        "'abc_'",
        "Error"
    ],
    answer: 1,
    explanation: "The `join()` method is called on the separator string (`'_'`) and takes an iterable of strings, concatenating them with the separator in between.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-191",
    question: "What is the output of `len('Hello\\nWorld')`?",
    options: [
        "10",
        "11",
        "12",
        "5"
    ],
    answer: 1,
    explanation: "`\\n` is a single escape character representing a newline. The string has 'H', 'e', 'l', 'l', 'o', '\\n', 'W', 'o', 'r', 'l', 'd' = 11 characters.",
    difficulty: "Medium",
    topic: "Strings"
},
{
    id: "python-192",
    question: "What is the output of `2 ** 100`?",
    options: [
        "1.2676506002282294e+30",
        "1267650600228229401496703205376",
        "OverflowError",
        "SyntaxError"
    ],
    answer: 1,
    explanation: "Python integers have arbitrary precision. It can calculate and store extremely large numbers exactly without overflowing.",
    difficulty: "Easy",
    topic: "Data Types"
},
{
    id: "python-193",
    question: "What is the output of `1 << 2`?",
    options: [
        "2",
        "4",
        "8",
        "1"
    ],
    answer: 1,
    explanation: "`<<` is the left shift bitwise operator. `1 << 2` shifts the bits of 1 two places to the left (equivalent to 1 * 2^2), which is 4.",
    difficulty: "Medium",
    topic: "Operators"
},
{
    id: "python-194",
    question: "What is the output of `5 & 3`?",
    options: [
        "7",
        "2",
        "1",
        "8"
    ],
    answer: 2,
    explanation: "`&` is the bitwise AND operator. 5 in binary is `101`, and 3 is `011`. The AND operation results in `001`, which is 1.",
    difficulty: "Medium",
    topic: "Operators"
},
{
    id: "python-195",
    question: "What does the `~` operator do?",
    options: [
        "Bitwise AND",
        "Bitwise OR",
        "Bitwise NOT (inverts all bits)",
        "Bitwise XOR"
    ],
    answer: 2,
    explanation: "The `~` operator is the bitwise NOT operator. It inverts all the bits of the number (equivalent to `-x - 1`).",
    difficulty: "Medium",
    topic: "Operators"
},
{
    id: "python-196",
    question: "What is the output of `isinstance(True, int)`?",
    options: [
        "True",
        "False",
        "None",
        "Error"
    ],
    answer: 0,
    explanation: "`True` is a boolean value. Since `bool` is a subclass of `int` in Python, `True` is considered an instance of `int`.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-197",
    question: "What is the output of `type([]) is list`?",
    options: [
        "True",
        "False",
        "None",
        "TypeError"
    ],
    answer: 0,
    explanation: "`type([])` returns `<class 'list'>`. The `is` operator checks if this is the exact same object as the built-in `list` class, which it is.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-198",
    question: "What is the output of `list(range(0, 10, 3))`?",
    options: [
        "[0, 3, 6, 9]",
        "[0, 3, 6]",
        "[3, 6, 9]",
        "[1, 4, 7]"
    ],
    answer: 0,
    explanation: "`range(start, stop, step)` generates numbers from `start` up to, but not including, `stop`, incrementing by `step`. 0, 3, 6, 9 are generated.",
    difficulty: "Easy",
    topic: "range()"
},
{
    id: "python-199",
    question: "What is the output of `sum([1, 2, 3], 10)`?",
    options: [
        "6",
        "16",
        "10",
        "Error"
    ],
    answer: 1,
    explanation: "The second argument to `sum()` is an optional 'start' value. It adds the elements of the iterable to this start value: 10 + 1 + 2 + 3 = 16.",
    difficulty: "Medium",
    topic: "Lists"
},
{
    id: "python-200",
    question: "What is the output of `sorted([3, 1, 2], reverse=True)`?",
    options: [
        "[1, 2, 3]",
        "[3, 2, 1]",
        "(3, 2, 1)",
        "None"
    ],
    answer: 1,
    explanation: "`sorted()` returns a new sorted list. Setting `reverse=True` sorts the list in descending order.",
    difficulty: "Easy",
    topic: "Lists"
},
{
    id: "python-201",
    question: "What is the difference between `sort()` and `sorted()`?",
    options: [
        "`sort()` is a built-in function, `sorted()` is a method",
        "`sort()` modifies the list in place and returns None, `sorted()` returns a new list",
        "`sorted()` modifies the list in place, `sort()` returns a new list",
        "There is no difference"
    ],
    answer: 1,
    explanation: "`list.sort()` sorts the list in place (modifying the original) and returns `None`. `sorted(iterable)` creates and returns a new sorted list, leaving the original unchanged.",
    difficulty: "Medium",
    topic: "List Methods"
},
{
    id: "python-202",
    question: "What is the output of `min(['apple', 'banana', 'cherry'])`?",
    options: [
        "apple",
        "cherry",
        "Error",
        "None"
    ],
    answer: 0,
    explanation: "When applied to strings, `min()` returns the string that comes first lexicographically (alphabetically). 'a' comes before 'b' and 'c'.",
    difficulty: "Easy",
    topic: "Strings"
},
{
    id: "python-203",
    question: "What does the `any()` function do?",
    options: [
        "Returns True if all elements are true",
        "Returns True if any element in the iterable is true",
        "Returns the first true element",
        "Checks if an element exists"
    ],
    answer: 1,
    explanation: "`any()` returns `True` if at least one element in the iterable is truthy. If the iterable is empty, it returns `False`.",
    difficulty: "Easy",
    topic: "Functions"
},
{
    id: "python-204",
    question: "What is the output of `all([1, 0, 2])`?",
    options: [
        "True",
        "False",
        "1",
        "0"
    ],
    answer: 1,
    explanation: "`all()` returns `True` only if all elements in the iterable are truthy. Since `0` is falsy, it returns `False`.",
    difficulty: "Easy",
    topic: "Functions"
},
{
    id: "python-205",
    question: "What is the output of `reversed([1, 2, 3])`?",
    options: [
        "[3, 2, 1]",
        "(3, 2, 1)",
        "<list_reverseiterator object>",
        "Error"
    ],
    answer: 2,
    explanation: "`reversed()` returns a reverse iterator, not a list. To get a list, you must wrap it in `list()`: `list(reversed([1, 2, 3]))`.",
    difficulty: "Medium",
    topic: "Lists"
},
{
    id: "python-206",
    question: "What is the output of `slice(1, 4, 2)` when applied to `'Python'`?",
    options: [
        "'yt'",
        "'yh'",
        "'Pt'",
        "'Po'"
    ],
    answer: 0,
    explanation: "`slice(1, 4, 2)` means start at index 1, stop before index 4, step by 2. For 'Python' (P=0, y=1, t=2, h=3, o=4, n=5), it picks index 1 ('y') and index 3 ('h'). Wait, 1+2 = 3, which is < 4, so it yields 'y' and 'h'. 'yh'. Let me correct the options.",
    options: [
        "yt",
        "yh",
        "Pt",
        "Po"
    ],
    answer: 1,
    explanation: "`slice(1, 4, 2)` starts at index 1 ('y'), stops before index 4, stepping by 2. The next index is 1 + 2 = 3 ('h'). 3 + 2 = 5, which is not < 4. The result is 'yh'.",
    difficulty: "Hard",
    topic: "Strings"
},
{
    id: "python-207",
    question: "What does `*` do when used as an unpacking operator in a function call?",
    options: [
        "Multiplies the arguments",
        "Unpacks an iterable into positional arguments",
        "Unpacks a dictionary into keyword arguments",
        "Catches all exceptions"
    ],
    answer: 1,
    explanation: "`*iterable` unpacks the elements of a list or tuple into separate positional arguments when calling a function.",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "python-208",
    question: "What does `**` do when used as an unpacking operator in a function call?",
    options: [
        "Raises a number to a power",
        "Unpacks a dictionary into keyword arguments",
        "Unpacks a list into positional arguments",
        "Creates a deep copy"
    ],
    answer: 1,
    explanation: "`**dict` unpacks a dictionary, passing its key-value pairs as keyword arguments to a function.",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "python-209",
    question: "What is the output of `{'a': 1, 'b': 2} == {'b': 2, 'a': 1}`?",
    options: [
        "False",
        "True",
        "Error",
        "None"
    ],
    answer: 1,
    explanation: "Dictionaries are order-agnostic in equality comparisons (in modern Python). As long as the keys and values match, they are considered equal.",
    difficulty: "Easy",
    topic: "Dictionaries"
},
{
    id: "python-210",
    question: "What is the output of `{'a': 1, 'b': 2} is {'b': 2, 'a': 1}`?",
    options: [
        "False",
        "True",
        "Error",
        "None"
    ],
    answer: 0,
    explanation: "The `is` operator checks for object identity. Since two separate dict literals are created in memory, they are not the same object, so `is` evaluates to `False`.",
    difficulty: "Medium",
    topic: "Dictionaries"
},
{
    id: "python-211",
    question: "What does the `collections.Counter` do?",
    options: [
        "Counts the number of methods in a class",
        "Counts the occurrences of elements in an iterable",
        "Counts the number of lines in a file",
        "Counts CPU cycles"
    ],
    answer: 1,
    explanation: "`Counter` is a dict subclass for counting hashable objects. It creates a dictionary where elements are keys and their counts are values.",
    difficulty: "Medium",
    topic: "Collections Module"
},
{
    id: "python-212",
    question: "What is the output of `Counter('abracadabra').most_common(2)`?",
    options: [
        "[('a', 5), ('b', 2)]",
        "[('a', 5), ('r', 2)]",
        "['a', 'b']",
        "Error"
    ],
    answer: 0,
    explanation: "`most_common(n)` returns a list of the `n` most common elements and their counts. 'a' appears 5 times, 'b' appears 2 times.",
    difficulty: "Medium",
    topic: "Collections Module"
},
{
    id: "python-213",
    question: "What is a `namedtuple`?",
    options: [
        "A tuple with a name",
        "A factory function that creates tuple subclasses with named fields",
        "A dictionary with tuple values",
        "A class with only `__init__`"
    ],
    answer: 1,
    explanation: "`namedtuple` returns a new tuple subclass. The new subclass assigns names to each positional element, making the code more readable than standard tuples.",
    difficulty: "Medium",
    topic: "Collections Module"
},
{
    id: "python-214",
    question: "What is the output of `int('0b101', 2)`?",
    options: [
        "Error",
        "5",
        "101",
        "2"
    ],
    answer: 1,
    explanation: "The `int()` function can parse strings representing numbers in different bases. '0b101' is the binary prefix for 5.",
    difficulty: "Medium",
    topic: "Type Conversion"
},
{
    id: "python-215",
    question: "What is the output of `float('inf') > 1000`?",
    options: [
        "False",
        "True",
        "Error",
        "None"
    ],
    answer: 1,
    explanation: "`float('inf')` represents positive infinity, which is mathematically greater than any finite number.",
    difficulty: "Easy",
    topic: "Data Types"
},
{
    id: "python-216",
    question: "What is the output of `float('nan') == float('nan')`?",
    options: [
        "True",
        "False",
        "Error",
        "None"
    ],
    answer: 1,
    explanation: "According to the IEEE 754 standard, NaN (Not a Number) is not equal to anything, not even itself.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-217",
    question: "How do you check if a value is NaN?",
    options: [
        "x == NaN",
        "x is NaN",
        "math.isnan(x)",
        "x == float('nan')"
    ],
    answer: 2,
    explanation: "Because `NaN != NaN`, you must use the `math.isnan(x)` function to reliably check if a value is NaN.",
    difficulty: "Medium",
    topic: "Math Module"
},
{
    id: "python-218",
    question: "What is the output of `chr(65)`?",
    options: [
        "'a'",
        "'A'",
        "65",
        "Error"
    ],
    answer: 1,
    explanation: "`chr(65)` returns the Unicode character for the integer 65, which is the uppercase letter 'A'.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-219",
    question: "What is the output of `'Hello'.encode('utf-8')`?",
    options: [
        "A string",
        "A bytes object",
        "An integer",
        "Error"
    ],
    answer: 1,
    explanation: "The `encode()` method converts a string into a bytes object using the specified encoding (UTF-8 by default).",
    difficulty: "Medium",
    topic: "Strings"
},
{
    id: "python-220",
    question: "What is the output of `b'Hello'.decode('utf-8')`?",
    options: [
        "A bytes object",
        "A string",
        "An integer",
        "Error"
    ],
    answer: 1,
    explanation: "The `decode()` method converts a bytes object back into a string using the specified encoding.",
    difficulty: "Medium",
    topic: "Strings"
},
{
    id: "python-221",
    question: "What does the `@staticmethod` decorator do?",
    options: [
        "Passes the class as the first argument",
        "Passes the instance as the first argument",
        "Defines a method that does not receive an implicit first argument (self or cls)",
        "Makes the method private"
    ],
    answer: 2,
    explanation: "A static method is bound to the class rather than an instance. It behaves like a regular function placed inside a class namespace for organizational purposes.",
    difficulty: "Medium",
    topic: "OOP Questions"
},
{
    id: "python-222",
    question: "What does the `@classmethod` decorator do?",
    options: [
        "Passes the instance (self) as the first argument",
        "Passes the class (cls) as the first argument",
        "Creates a static method",
        "Deletes a class method"
    ],
    answer: 1,
    explanation: "A class method receives the class itself as its first argument (conventionally named `cls`), rather than the instance.",
    difficulty: "Medium",
    topic: "OOP Questions"
},
{
    id: "python-223",
    question: "What is the output of `type(lambda: None)`?",
    options: [
        "<class 'lambda'>",
        "<class 'function'>",
        "<class 'method'>",
        "NoneType"
    ],
    answer: 1,
    explanation: "Lambda expressions are just syntactic sugar for defining simple functions. Their type is `<class 'function'>`.",
    difficulty: "Medium",
    topic: "Lambda Functions"
},
{
    id: "python-224",
    question: "What is the output of `(lambda x: x * x)(5)`?",
    options: [
        "10",
        "25",
        "5",
        "Error"
    ],
    answer: 1,
    explanation: "This demonstrates immediately invoking a lambda function (IIFE). The lambda takes `x` and returns `x*x`. Passing 5 yields 25.",
    difficulty: "Easy",
    topic: "Lambda Functions"
},
{
    id: "python-225",
    question: "What is the output of `list(filter(lambda x: x > 3, [1, 2, 3, 4, 5]))`?",
    options: [
        "[1, 2, 3]",
        "[4, 5]",
        "[False, False, False, True, True]",
        "Error"
    ],
    answer: 1,
    explanation: "`filter()` applies the lambda to each element, keeping only those where the condition `x > 3` is true. This results in `[4, 5]`.",
    difficulty: "Easy",
    topic: "Filter"
},
{
    id: "python-226",
    question: "What is the output of `['a', 'b', 'c'][:2]`?",
    options: [
        "['a', 'b']",
        "['b', 'c']",
        "['c']",
        "['a', 'b', 'c']"
    ],
    answer: 0,
    explanation: "Slicing `[:2]` selects elements from the beginning up to, but not including, index 2.",
    difficulty: "Easy",
    topic: "Lists"
},
{
    id: "python-227",
    question: "What is the output of `['a', 'b', 'c'][::-1]`?",
    options: [
        "['a', 'b', 'c']",
        "['c', 'b', 'a']",
        "[]",
        "Error"
    ],
    answer: 1,
    explanation: "The slice `[::-1]` is a common Pythonic idiom to reverse a sequence. It starts at the end and steps backward.",
    difficulty: "Easy",
    topic: "Lists"
},
{
    id: "python-228",
    question: "What is the output of `(1, 2, 3) + (4,)`?",
    options: [
        "(1, 2, 3, 4)",
        "(1, 2, 3, 4,)",
        "Error",
        "[1, 2, 3, 4]"
    ],
    answer: 0,
    explanation: "Tuples can be concatenated using the `+` operator. Note that `(4,)` is required to create a single-element tuple; `(4)` is just an integer.",
    difficulty: "Easy",
    topic: "Tuples"
},
{
    id: "python-229",
    question: "What is the output of `a, b, *c = [1, 2, 3, 4, 5]`?",
    options: [
        "a=1, b=2, c=[3, 4, 5]",
        "a=1, b=2, c=(3, 4, 5)",
        "a=[1], b=[2], c=[3, 4, 5]",
        "Error"
    ],
    answer: 0,
    explanation: "The `*` operator in assignment unpacking captures the remaining elements into a list. `a` gets 1, `b` gets 2, and `c` gets the list `[3, 4, 5]`.",
    difficulty: "Medium",
    topic: "Variables"
},
{
    id: "python-230",
    question: "What is the output of `a, *b, c = [1, 2, 3, 4, 5]`?",
    options: [
        "a=1, b=[2, 3, 4], c=5",
        "a=1, b=2, c=[3, 4, 5]",
        "a=[1], b=[2, 3, 4], c=5",
        "Error"
    ],
    answer: 0,
    explanation: "`a` takes the first element, `c` takes the last, and `*b` captures everything in between as a list.",
    difficulty: "Medium",
    topic: "Variables"
},
{
    id: "python-231",
    question: "What is the output of `hex(255)`?",
    options: [
        "'0xff'",
        "'0x255'",
        "'ff'",
        "255"
    ],
    answer: 0,
    explanation: "`hex()` converts an integer to a lowercase hexadecimal string prefixed with '0x'.",
    difficulty: "Easy",
    topic: "Type Conversion"
},
{
    id: "python-232",
    question: "What is the output of `bin(10)`?",
    options: [
        "'0b1010'",
        "'0b10'",
        "'1010'",
        "10"
    ],
    answer: 0,
    explanation: "`bin()` converts an integer to a binary string prefixed with '0b'.",
    difficulty: "Easy",
    topic: "Type Conversion"
},
{
    id: "python-233",
    question: "What does the `yield from` statement do?",
    options: [
        "Yields a single value from a generator",
        "Delegates to a sub-generator, yielding all its values",
        "Pauses the generator indefinitely",
        "Closes a generator"
    ],
    answer: 1,
    explanation: "`yield from` is used to delegate to another generator or iterable. It yields all values from the sub-generator before continuing.",
    difficulty: "Hard",
    topic: "yield"
},
{
    id: "python-234",
    question: "What is the output of `print('a' in {'a': 1})`?",
    options: [
        "True",
        "False",
        "1",
        "Error"
    ],
    answer: 0,
    explanation: "When used with a dictionary, the `in` operator checks for the presence of keys, not values. 'a' is a key, so it returns `True`.",
    difficulty: "Easy",
    topic: "Dictionaries"
},
{
    id: "python-235",
    question: "What is the output of `print(1 in {'a': 1})`?",
    options: [
        "True",
        "False",
        "1",
        "Error"
    ],
    answer: 1,
    explanation: "Since `in` checks keys by default, it looks for the key `1`. The only key is `'a'`, so it returns `False`.",
    difficulty: "Easy",
    topic: "Dictionaries"
},
{
    id: "python-236",
    question: "How do you check if a value exists in a dictionary's values?",
    options: [
        "1 in my_dict",
        "1 in my_dict.values()",
        "my_dict.contains(1)",
        "my_dict.exists(1)"
    ],
    answer: 1,
    explanation: "You must explicitly check the `dict.values()` view to see if a specific value exists in the dictionary.",
    difficulty: "Easy",
    topic: "Dictionary Methods"
},
{
    id: "python-237",
    question: "What is the output of `{i: i**2 for i in range(1, 4)}`?",
    options: [
        "{1: 1, 2: 4, 3: 9}",
        "{0: 0, 1: 1, 2: 4, 3: 9}",
        "[1, 4, 9]",
        "{1: 1, 4: 2, 9: 3}"
    ],
    answer: 0,
    explanation: "This dictionary comprehension iterates from 1 to 3, using the number as the key and its square as the value.",
    difficulty: "Medium",
    topic: "Dictionary Comprehension"
},
{
    id: "python-238",
    question: "What is the output of `list(range(5, 0, -1))`?",
    options: [
        "[5, 4, 3, 2, 1]",
        "[5, 4, 3, 2, 1, 0]",
        "[1, 2, 3, 4, 5]",
        "[]"
    ],
    answer: 0,
    explanation: "`range(5, 0, -1)` starts at 5, stops before 0, and steps backward by 1.",
    difficulty: "Easy",
    topic: "range()"
},
{
    id: "python-239",
    question: "What is the output of `for i in []: pass\nelse: print('Done')`?",
    options: [
        "Done",
        "Nothing",
        "Error",
        "Infinite loop"
    ],
    answer: 0,
    explanation: "The `else` clause of a `for` loop executes if the loop completes normally (i.e., without hitting a `break`). An empty list means the loop finishes immediately, triggering `else`.",
    difficulty: "Medium",
    topic: "for Loop"
},
{
    id: "python-240",
    question: "What is the output of the following?\n```python\nfor i in range(3):\n    if i == 2:\n        break\nelse:\n    print('Done')\n```",
    options: [
        "Done",
        "2",
        "Nothing",
        "Error"
    ],
    answer: 2,
    explanation: "Because the loop is terminated by a `break` statement when `i == 2`, the `else` block is skipped, and nothing is printed.",
    difficulty: "Medium",
    topic: "for Loop"
},
{
    id: "python-241",
    question: "What is the output of `abs(-5.5)`?",
    options: [
        "-5.5",
        "5.5",
        "5",
        "-5"
    ],
    answer: 1,
    explanation: "The `abs()` function returns the absolute (non-negative) value of the argument. For -5.5, it returns 5.5.",
    difficulty: "Easy",
    topic: "Math Module"
},
{
    id: "python-242",
    question: "What is the output of `pow(2, 3, 3)`?",
    options: [
        "8",
        "2",
        "3",
        "Error"
    ],
    answer: 1,
    explanation: "`pow(x, y, z)` is more efficient than `(x ** y) % z`. It calculates 2^3 = 8, and then 8 % 3 = 2.",
    difficulty: "Medium",
    topic: "Math Module"
},
{
    id: "python-243",
    question: "What does `eval('2 + 3 * 4')` return?",
    options: [
        "'2 + 3 * 4'",
        "20",
        "14",
        "Error"
    ],
    answer: 2,
    explanation: "`eval()` parses the string argument as a Python expression and evaluates it, following standard operator precedence (3*4=12, 2+12=14).",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "python-244",
    question: "Why is using `eval()` considered dangerous?",
    options: [
        "It is very slow",
        "It can execute arbitrary code, posing a security risk if used on untrusted input",
        "It only works with integers",
        "It consumes too much memory"
    ],
    answer: 1,
    explanation: "`eval()` can execute any valid Python expression. If used on user-supplied input, an attacker could inject malicious code to delete files or steal data.",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "python-245",
    question: "What is the safer alternative to `eval()` for evaluating literal expressions?",
    options: [
        "exec()",
        "ast.literal_eval()",
        "compile()",
        "parse()"
    ],
    answer: 1,
    explanation: "`ast.literal_eval()` safely evaluates strings containing Python literals (strings, bytes, numbers, tuples, lists, dicts, sets, booleans, None) without executing arbitrary code.",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "python-246",
    question: "What is the output of `exec('print(5)')`?",
    options: [
        "'print(5)'",
        "5",
        "None",
        "Error"
    ],
    answer: 1,
    explanation: "`exec()` executes dynamically created Python code (statements). It prints 5 and returns `None`.",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "python-247",
    question: "What is the difference between `==` and `is` for two strings?",
    options: [
        "`is` checks if they have the same length",
        "`==` checks value equality, `is` checks if they are the exact same object in memory",
        "`is` checks if they are both strings",
        "There is no difference"
    ],
    answer: 1,
    explanation: "While `==` compares the contents of the strings, `is` checks if they point to the exact same memory location (identity). Due to string interning, small strings might be `is` equal, but it's not guaranteed.",
    difficulty: "Medium",
    topic: "Strings"
},
{
    id: "python-248",
    question: "What is the output of `s = 'hello'; s.upper().islower()`?",
    options: [
        "True",
        "False",
        "Error",
        "None"
    ],
    answer: 1,
    explanation: "`s.upper()` returns 'HELLO'. The `islower()` method checks if all cased characters are lowercase. Since 'HELLO' is uppercase, it returns `False`.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-249",
    question: "What does the `replace()` method do?",
    options: [
        "Deletes a substring",
        "Replaces all occurrences of a substring with another substring",
        "Replaces only the first occurrence",
        "Adds a substring"
    ],
    answer: 1,
    explanation: "`str.replace(old, new)` returns a copy of the string with all occurrences of substring `old` replaced by `new`.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-250",
    question: "How do you replace only the first two occurrences of a substring?",
    options: [
        "replace('a', 'b', 2)",
        "replace('a', 'b', count=2)",
        "replace('a', 'b', limit=2)",
        "replace('a', 'b')[0:2]"
    ],
    answer: 0,
    explanation: "The `replace()` method accepts an optional third argument `count` to limit the number of replacements.",
    difficulty: "Medium",
    topic: "String Methods"
},
{
    id: "python-251",
    question: "What is the output of `'123'.isdigit()`?",
    options: [
        "True",
        "False",
        "None",
        "Error"
    ],
    answer: 0,
    explanation: "`isdigit()` returns `True` if all characters in the string are digits and there is at least one character.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-252",
    question: "What is the output of `'123.45'.isdigit()`?",
    options: [
        "True",
        "False",
        "None",
        "Error"
    ],
    answer: 1,
    explanation: "`isdigit()` returns `False` if the string contains a period (`.`). It only returns `True` for strictly integer characters (0-9).",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-253",
    question: "What does `isalpha()` check for?",
    options: [
        "If all characters are alphanumeric",
        "If all characters are alphabetic",
        "If the string is in alphabetical order",
        "If the first character is alphabetic"
    ],
    answer: 1,
    explanation: "`isalpha()` returns `True` if all characters in the string are alphabetic (a-z, A-Z) and there is at least one character.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-254",
    question: "What is the output of `'hello world'.title()`?",
    options: [
        "HELLO WORLD",
        "hello world",
        "Hello World",
        "Hello world"
    ],
    answer: 2,
    explanation: "`title()` returns a titlecased version of the string where words start with an uppercase character and the remaining characters are lowercase.",
    difficulty: "Easy",
    topic: "String Methods"
},
{
    id: "python-255",
    question: "What is the output of `'{0} {1} {0}'.format('hello', 'world')`?",
    options: [
        "hello world hello",
        "hello world world",
        "0 1 0",
        "Error"
    ],
    answer: 0,
    explanation: "You can reuse positional arguments by specifying their index multiple times in the format string.",
    difficulty: "Medium",
    topic: "Formatting"
},
{
    id: "python-256",
    question: "What is the output of `'%d %.2f' % (5, 3.14159)`?",
    options: [
        "5 3.14",
        "5.00 3.14",
        "5 3.14159",
        "Error"
    ],
    answer: 0,
    explanation: "This is old-style string formatting. `%d` formats the integer 5. `%.2f` formats the float to 2 decimal places (3.14).",
    difficulty: "Medium",
    topic: "Formatting"
},
{
    id: "python-257",
    question: "What is the output of `[x**2 for x in range(5) if x % 2 == 0]`?",
    options: [
        "[0, 4, 16]",
        "[4, 16]",
        "[0, 1, 4, 9, 16]",
        "[1, 9]"
    ],
    answer: 0,
    explanation: "The comprehension filters even numbers (0, 2, 4) and squares them, resulting in [0, 4, 16].",
    difficulty: "Easy",
    topic: "List Comprehension"
},
{
    id: "python-258",
    question: "What is the output of `[[i for i in range(3)] for j in range(2)]`?",
    options: [
        "[0, 1, 2, 0, 1, 2]",
        "[[0, 1, 2], [0, 1, 2]]",
        "[[0, 0], [1, 1], [2, 2]]",
        "Error"
    ],
    answer: 1,
    explanation: "This is a nested list comprehension. The outer loop runs twice, and each time the inner loop generates `[0, 1, 2]`.",
    difficulty: "Medium",
    topic: "List Comprehension"
},
{
    id: "python-259",
    question: "What is the output of `[i * j for i in range(3) for j in range(2)]`?",
    options: [
        "[0, 0, 0, 1, 0, 2]",
        "[0, 0, 1, 2, 0, 2]",
        "[0, 1, 0, 2, 0, 3]",
        "Error"
    ],
    answer: 0,
    explanation: "This is equivalent to nested for loops: for each `i` in [0, 1, 2], it iterates `j` in [0, 1]. Yields: 0*0, 0*1, 1*0, 1*1, 2*0, 2*1.",
    difficulty: "Hard",
    topic: "List Comprehension"
},
{
    id: "python-260",
    question: "What is the output of `list(map(str, [1, 2, 3]))`?",
    options: [
        "[1, 2, 3]",
        "['1', '2', '3']",
        "Error",
        "[str, str, str]"
    ],
    answer: 1,
    explanation: "`map(str, ...)` applies the `str` constructor to each integer, converting them into strings.",
    difficulty: "Easy",
    topic: "Map"
},
{
    id: "python-261",
    question: "What is the output of `list(map(lambda x, y: x + y, [1, 2], [3, 4]))`?",
    options: [
        "[4, 6]",
        "[1, 2, 3, 4]",
        "Error",
        "[13, 24]"
    ],
    answer: 0,
    explanation: "When multiple iterables are passed to `map()`, the function takes one item from each iterable. 1+3=4, 2+4=6.",
    difficulty: "Medium",
    topic: "Map"
},
{
    id: "python-262",
    question: "What is the output of `list(filter(None, [0, 1, '', 'Hello', False, None]))`?",
    options: [
        "[0, False, None]",
        "[1, 'Hello']",
        "[0, 1, '', 'Hello', False, None]",
        "[]"
    ],
    answer: 1,
    explanation: "If the function argument to `filter()` is `None`, it filters out all elements that are falsy (0, '', False, None).",
    difficulty: "Medium",
    topic: "Filter"
},
{
    id: "python-263",
    question: "What is the output of `reduce(lambda x, y: x if x > y else y, [5, 2, 8, 1])`?",
    options: [
        "5",
        "2",
        "8",
        "1"
    ],
    answer: 2,
    explanation: "This `reduce` function compares elements pairwise and keeps the larger one. It effectively finds the maximum value in the list, which is 8.",
    difficulty: "Hard",
    topic: "Reduce"
},
{
    id: "python-264",
    question: "What is the output of `dict(zip(['a', 'b'], [1, 2]))`?",
    options: [
        "{'a': 1, 'b': 2}",
        "{'1': 'a', '2': 'b'}",
        "[('a', 1), ('b', 2)]",
        "Error"
    ],
    answer: 0,
    explanation: "`zip` pairs the elements into tuples `('a', 1)` and `('b', 2)`. Passing these tuples to `dict()` creates a dictionary using them as key-value pairs.",
    difficulty: "Medium",
    topic: "zip()"
},
{
    id: "python-265",
    question: "What is the output of `list(enumerate(['a', 'b', 'c'], start=1))`?",
    options: [
        "[(0, 'a'), (1, 'b'), (2, 'c')]",
        "[(1, 'a'), (2, 'b'), (3, 'c')]",
        "[1, 2, 3]",
        "Error"
    ],
    answer: 1,
    explanation: "`enumerate` takes an optional `start` parameter to specify the starting index for the counter.",
    difficulty: "Easy",
    topic: "enumerate()"
},
{
    id: "python-266",
    question: "What is a property decorator used for in a class?",
    options: [
        "To create a class variable",
        "To make a method behave like an attribute (getter)",
        "To delete a method",
        "To make a method private"
    ],
    answer: 1,
    explanation: "The `@property` decorator allows you to define a method that can be accessed like an attribute, providing a clean way to implement getters (and setters via `.setter`).",
    difficulty: "Medium",
    topic: "OOP Questions"
},
{
    id: "python-267",
    question: "What is the output of the following?\n```python\nclass A:\n    def __init__(self):\n        self.__x = 10\n\na = A()\nprint(a.__x)\n```",
    options: [
        "10",
        "None",
        "AttributeError",
        "10 (with a warning)"
    ],
    answer: 2,
    explanation: "The double underscore triggers name mangling. The attribute is renamed to `_A__x`. Accessing `a.__x` directly raises an `AttributeError`.",
    difficulty: "Hard",
    topic: "Encapsulation"
},
{
    id: "python-268",
    question: "How do you access the mangled attribute `__x` from outside the class `A`?",
    options: [
        "a.__x",
        "a._A__x",
        "a.x",
        "A.__x"
    ],
    answer: 1,
    explanation: "Name mangling changes `__x` to `_ClassName__x`. Therefore, it must be accessed using its mangled name `a._A__x`.",
    difficulty: "Hard",
    topic: "Encapsulation"
},
{
    id: "python-269",
    question: "What is the output of `type(None)`?",
    options: [
        "<class 'None'>",
        "<class 'NoneType'>",
        "<class 'null'>",
        "None"
    ],
    answer: 1,
    explanation: "`None` is an object of the `NoneType` class in Python.",
    difficulty: "Easy",
    topic: "Data Types"
},
{
    id: "python-270",
    question: "What is the output of `bool('False')`?",
    options: [
        "True",
        "False",
        "None",
        "Error"
    ],
    answer: 0,
    explanation: "The string `'False'` is a non-empty string. In Python, all non-empty strings are truthy, regardless of their content.",
    difficulty: "Medium",
    topic: "Data Types"
},
{
    id: "python-271",
    question: "What does the `del` statement do?",
    options: [
        "Deletes a file",
        "Deletes a variable or an item from a mutable sequence",
        "Deletes a class method",
        "Deletes a module"
    ],
    answer: 1,
    explanation: "`del` removes a variable from the namespace or an item at a specific index/key from a list or dictionary.",
    difficulty: "Easy",
    topic: "Variables"
},
{
    id: "python-272",
    question: "What happens if you use `del` on a variable?",
    options: [
        "It sets the variable to 0",
        "It sets the variable to None",
        "It removes the binding of the variable name from the local or global namespace",
        "It deletes the object from memory immediately"
    ],
    answer: 2,
    explanation: "`del` removes the reference to the object. If no other references exist, the garbage collector may later delete the object, but `del` itself just removes the name binding.",
    difficulty: "Medium",
    topic: "Memory Management"
},
{
    id: "python-273",
    question: "What is the output of `a = [1, 2, 3]; del a[1]; print(a)`?",
    options: [
        "[1, 3]",
        "[1, 2]",
        "[2, 3]",
        "Error"
    ],
    answer: 0,
    explanation: "`del a[1]` removes the element at index 1 (which is 2) from the list in place.",
    difficulty: "Easy",
    topic: "Lists"
},
{
    id: "python-274",
    question: "What is the output of `a = [1, 2, 3]; b = a[:]; b.append(4); print(a)`?",
    options: [
        "[1, 2, 3, 4]",
        "[1, 2, 3]",
        "Error",
        "[]"
    ],
    answer: 1,
    explanation: "`a[:]` creates a shallow copy of the list `a`. Modifying `b` does not affect the original list `a`.",
    difficulty: "Easy",
    topic: "Shallow Copy"
},
{
    id: "python-275",
    question: "What is the output of `a = [[1, 2]]; b = a[:]; b[0].append(3); print(a)`?",
    options: [
        "[[1, 2]]",
        "[[1, 2, 3]]",
        "Error",
        "[]"
    ],
    answer: 1,
    explanation: "`a[:]` is a shallow copy. The inner list `[1, 2]` is copied by reference. Appending to `b[0]` also modifies `a[0]`.",
    difficulty: "Hard",
    topic: "Shallow Copy"
},
{
    id: "python-276",
    question: "How do you create a deep copy of a list?",
    options: [
        "list.copy()",
        "list[:]",
        "copy.deepcopy(list)",
        "dict(list)"
    ],
    answer: 2,
    explanation: "`copy.deepcopy()` constructs a new compound object and then recursively inserts copies of the objects found in the original.",
    difficulty: "Easy",
    topic: "Deep Copy"
},
{
    id: "python-277",
    question: "What is the output of `import sys; print(sys.argv[0])` when running `python script.py`?",
    options: [
        "python",
        "script.py",
        "sys",
        "[]"
    ],
    answer: 1,
    explanation: "`sys.argv` is a list containing command-line arguments. `sys.argv[0]` is always the name of the script being executed.",
    difficulty: "Medium",
    topic: "Modules"
},
{
    id: "python-278",
    question: "What is the output of `max({1: 'a', 3: 'b', 2: 'c'})`?",
    options: [
        "'c'",
        "3",
        "Error",
        "(3, 'b')"
    ],
    answer: 1,
    explanation: "When applied to a dictionary, `max()` iterates over and compares the keys, returning the maximum key (which is 3).",
    difficulty: "Medium",
    topic: "Dictionaries"
},
{
    id: "python-279",
    question: "What is the output of `min('abc', 'xyz', key=len)`?",
    options: [
        "'abc'",
        "'xyz'",
        "Error",
        "3"
    ],
    answer: 0,
    explanation: "The `key=len` argument tells `min()` to compare the items based on their length. Both have length 3, so it returns the first one encountered ('abc').",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "python-280",
    question: "What is the `__call__` magic method used for?",
    options: [
        "To call a parent class constructor",
        "To make an instance of a class callable like a function",
        "To delete an instance",
        "To initialize an instance"
    ],
    answer: 1,
    explanation: "Implementing `__call__` allows an object's instance to be called as a function using parentheses, e.g., `obj()`.",
    difficulty: "Hard",
    topic: "Magic Methods"
},
{
    id: "python-281",
    question: "What is the output of the following?\n```python\nclass Multiplier:\n    def __init__(self, factor):\n        self.factor = factor\n    def __call__(self, x):\n        return x * self.factor\n\ndouble = Multiplier(2)\nprint(double(5))\n```",
    options: [
        "10",
        "25",
        "7",
        "Error"
    ],
    answer: 0,
    explanation: "Because `__call__` is defined, `double(5)` invokes the `__call__` method, returning `5 * 2 = 10`.",
    difficulty: "Hard",
    topic: "Magic Methods"
},
{
    id: "python-282",
    question: "What does the `__getitem__` method do?",
    options: [
        "Deletes an item",
        "Sets an item",
        "Allows an object to support indexing (e.g., `obj[key]`)",
        "Initializes an object"
    ],
    answer: 2,
    explanation: "`__getitem__(self, key)` is called when `obj[key]` is used, allowing custom classes to behave like lists or dictionaries.",
    difficulty: "Hard",
    topic: "Magic Methods"
},
{
    id: "python-283",
    question: "What is a metaclass in Python?",
    options: [
        "A class inside another class",
        "A class whose instances are classes",
        "A superclass for all exceptions",
        "A class that cannot be instantiated"
    ],
    answer: 1,
    explanation: "A metaclass is the 'class of a class'. It defines how a class behaves, controlling its creation and initialization (just as a class controls an instance).",
    difficulty: "Hard",
    topic: "OOP Questions"
},
{
    id: "python-284",
    question: "What is the default metaclass in Python?",
    options: [
        "object",
        "type",
        "class",
        "meta"
    ],
    answer: 1,
    explanation: "The built-in `type` is the default metaclass in Python. When you define a class, `type` is used to instantiate it.",
    difficulty: "Hard",
    topic: "OOP Questions"
},
{
    id: "python-285",
    question: "What is a descriptor in Python?",
    options: [
        "A variable that describes a class",
        "An object attribute with binding behavior, defined by methods like `__get__`, `__set__`, or `__delete__`",
        "A type of iterator",
        "A documentation string"
    ],
    answer: 1,
    explanation: "Descriptors are objects that implement at least one of `__get__`, `__set__`, or `__delete__`. They allow you to customize attribute access (properties are a simple implementation of descriptors).",
    difficulty: "Hard",
    topic: "OOP Questions"
},
{
    id: "python-286",
    question: "What is the output of `print('%.3e' % 1234.56)`?",
    options: [
        "1234.560",
        "1.235e+03",
        "1.234e+03",
        "Error"
    ],
    answer: 1,
    explanation: "`%.3e` formats the number in scientific notation with 3 decimal places. 1234.56 becomes 1.23456 * 10^3, which rounds to 1.235e+03.",
    difficulty: "Hard",
    topic: "Formatting"
},
{
    id: "python-287",
    question: "What is the output of `'{:>10}'.format('test')`?",
    options: [
        "'test      '",
        "'      test'",
        "'test'",
        "'    test  '"
    ],
    answer: 0,
    explanation: "`>10` right-aligns the string in a field of width 10 characters, padding with spaces on the left.",
    difficulty: "Medium",
    topic: "Formatting"
},
{
    id: "python-288",
    question: "What is the output of `'{:*^10}'.format('mid')`?",
    options: [
        "***mid****",
        "**mid*****",
        "****mid***",
        "***mid***"
    ],
    answer: 0,
    explanation: "`*^10` centers the string in a field of width 10, using `*` as the fill character. 'mid' is 3 chars. 7 spaces needed. 4 on left, 3 on right: `***mid****`.",
    difficulty: "Hard",
    topic: "Formatting"
},
{
    id: "python-289",
    question: "What is the `__iter__` method supposed to return?",
    options: [
        "The next item",
        "An iterator object (usually self)",
        "A list of items",
        "None"
    ],
    answer: 1,
    explanation: "The `__iter__` method must return an iterator object. For an iterable class, it typically returns `self` if the class also implements `__next__`.",
    difficulty: "Medium",
    topic: "Iterators"
},
{
    id: "python-290",
    question: "What is the output of the following?\n```python\ndef my_gen():\n    yield 1\n    return 'End'\n\ng = my_gen()\nnext(g)\ntry:\n    next(g)\nexcept StopIteration as e:\n    print(e.value)\n```",
    options: [
        "1",
        "End",
        "None",
        "Error"
    ],
    answer: 1,
    explanation: "When a generator executes a `return` statement, it raises a `StopIteration` exception. The return value is stored in the `value` attribute of the exception.",
    difficulty: "Hard",
    topic: "yield"
},
{
    id: "python-291",
    question: "What is a coroutine in the context of `asyncio`?",
    options: [
        "A normal function",
        "A function that can pause its execution to allow other code to run, defined with `async def`",
        "A thread",
        "A process"
    ],
    answer: 1,
    explanation: "A coroutine is a specialized version of a generator function defined with `async def`. It can suspend execution using `await` to yield control back to the event loop.",
    difficulty: "Medium",
    topic: "Asyncio Basics"
},
{
    id: "python-292",
    question: "What does the `await` keyword do?",
    options: [
        "Waits for a thread to finish",
        "Pauses the coroutine until the awaited awaitable (like a future or task) completes",
        "Stops the program",
        "Creates a new thread"
    ],
    answer: 1,
    explanation: "`await` suspends the execution of the enclosing coroutine, allowing the event loop to run other tasks until the awaited object is done.",
    difficulty: "Medium",
    topic: "Asyncio Basics"
},
{
    id: "python-293",
    question: "What is the `ThreadPoolExecutor` used for?",
    options: [
        "Executing asynchronous code",
        "Managing a pool of threads to run calls asynchronously",
        "Managing a pool of processes",
        "Scheduling tasks to run at specific times"
    ],
    answer: 1,
    explanation: "`concurrent.futures.ThreadPoolExecutor` provides a high-level interface for asynchronously executing callables using threads.",
    difficulty: "Medium",
    topic: "Threading Basics"
},
{
    id: "python-294",
    question: "What does the `__dict__` attribute of an object contain?",
    options: [
        "The class methods",
        "A dictionary mapping the object's writable attributes to their values",
        "The source code of the object",
        "The module name"
    ],
    answer: 1,
    explanation: "`__dict__` is used to store an object's writable attributes. It is a dictionary where keys are attribute names and values are their corresponding values.",
    difficulty: "Medium",
    topic: "Object"
},
{
    id: "python-295",
    question: "What is the output of `type(object())`?",
    options: [
        "<class 'type'>",
        "<class 'object'>",
        "<class 'NoneType'>",
        "Error"
    ],
    answer: 1,
    explanation: "`object()` creates a new featureless object, which is the base class for all Python classes. Its type is `<class 'object'>`.",
    difficulty: "Medium",
    topic: "OOP Questions"
},
{
    id: "python-296",
    question: "What is the output of `isinstance(object, type)` and `isinstance(type, object)`?",
    options: [
        "False, False",
        "True, True",
        "True, False",
        "False, True"
    ],
    answer: 1,
    explanation: "This is a unique Python circular relationship. `type` is a subclass of `object` (so `isinstance(type, object)` is True), and `object` is an instance of `type` (so `isinstance(object, type)` is True).",
    difficulty: "Hard",
    topic: "OOP Questions"
},
{
    id: "python-297",
    question: "What is monkey patching in Python?",
    options: [
        "A way to patch Python bugs",
        "Dynamically modifying a class or module at runtime",
        "A design pattern for OOP",
        "A way to write unit tests"
    ],
    answer: 1,
    explanation: "Monkey patching refers to dynamically changing the behavior of a module, class, or function at runtime, usually by replacing an attribute with a new implementation.",
    difficulty: "Hard",
    topic: "Advanced Python Questions"
},
{
    id: "python-298",
    question: "What is the output of `print(f'{{Hello}}')`?",
    options: [
        "Error",
        "{Hello}",
        "Hello",
        "'{{Hello}}'"
    ],
    answer: 1,
    explanation: "To include literal curly braces in an f-string, you must double them. `{{` evaluates to `{` and `}}` evaluates to `}`.",
    difficulty: "Medium",
    topic: "Formatting"
},
{
    id: "python-299",
    question: "In a scenario where you need to read a 10GB file line by line without loading it entirely into memory, what is the best approach?",
    options: [
        "file.read()",
        "file.readlines()",
        "Iterating over the file object directly (e.g., `for line in file:`)",
        "json.load(file)"
    ],
    answer: 2,
    explanation: "Iterating over a file object (`for line in file:`) uses buffered I/O and reads one line at a time into memory, making it highly memory-efficient for large files.",
    difficulty: "Medium",
    topic: "Scenario-Based Questions"
},
{
    id: "python-300",
    question: "You are debugging a memory leak in a long-running Python application. Which tool is best suited to find out where objects are being retained in memory?",
    options: [
        "pip",
        "tracemalloc",
        "random",
        "unittest"
    ],
    answer: 1,
    explanation: "`tracemalloc` is a debug tool that traces memory blocks allocated by Python. It is specifically designed to track memory allocations and help identify memory leaks.",
    difficulty: "Hard",
    topic: "Scenario-Based Questions"
}
]