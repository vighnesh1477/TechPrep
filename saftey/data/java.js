// Java Programming Questions

[
    {
        id: "java-1",
        question: "Who is known as the creator of the Java programming language?",
        options: [
            "James Gosling",
            "Dennis Ritchie",
            "Guido van Rossum",
            "Bjarne Stroustrup"
        ],
        answer: 0,
        explanation: "James Gosling developed Java at Sun Microsystems in the early 1990s.",
        difficulty: "Easy",
        topic: "History of Java"
    },
    {
        id: "java-2",
        question: "Which of the following is a key feature of Java?",
        options: [
            "Pointer arithmetic",
            "Platform dependency",
            "Automatic memory management (Garbage Collection)",
            "Multiple inheritance of classes"
        ],
        answer: 2,
        explanation: "Java handles memory allocation and deallocation automatically via Garbage Collection, eliminating the need for manual memory management like `free()` or `delete`.",
        difficulty: "Easy",
        topic: "Features of Java"
    },
    {
        id: "java-3",
        question: "What does JVM stand for?",
        options: [
            "Java Variable Machine",
            "Java Virtual Machine",
            "Java Visual Machine",
            "Java Verified Machine"
        ],
        answer: 1,
        explanation: "JVM stands for Java Virtual Machine. It is an abstract machine that provides a runtime environment to execute Java bytecode.",
        difficulty: "Easy",
        topic: "JVM"
    },
    {
        id: "java-4",
        question: "What is the extension of a compiled Java source file?",
        options: [
            ".java",
            ".class",
            ".exe",
            ".jar"
        ],
        answer: 1,
        explanation: "The Java compiler (`javac`) translates `.java` source files into `.class` files containing bytecode.",
        difficulty: "Easy",
        topic: "Compilation Process"
    },
    {
        id: "java-5",
        question: "Which component of Java contains the standard libraries and core classes?",
        options: [
            "JVM",
            "JRE",
            "JDK",
            "JIT"
        ],
        answer: 1,
        explanation: "The Java Runtime Environment (JRE) includes the JVM, core libraries, and other components required to run Java applications.",
        difficulty: "Easy",
        topic: "JRE"
    },
    {
        id: "java-6",
        question: "Which data type is used to store a single 16-bit Unicode character?",
        options: [
            "byte",
            "short",
            "char",
            "String"
        ],
        answer: 2,
        explanation: "The `char` data type in Java is a single 16-bit Unicode character.",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "java-7",
        question: "What is the default value of a boolean variable in Java?",
        options: [
            "true",
            "false",
            "null",
            "0"
        ],
        answer: 1,
        explanation: "In Java, local variables must be initialized before use, but instance boolean variables default to `false`.",
        difficulty: "Easy",
        topic: "Variables"
    },
    {
        id: "java-8",
        question: "Which keyword is used to declare a constant in Java?",
        options: [
            "const",
            "constant",
            "final",
            "define"
        ],
        answer: 2,
        explanation: "The `final` keyword is used in Java to declare constants. Once assigned, a final variable's value cannot be changed. Java does not have a `const` keyword for variables.",
        difficulty: "Easy",
        topic: "Constants"
    },
    {
        id: "java-9",
        question: "What is the output of `System.out.println(10 + 20 + \"Java\");`?",
        options: [
            "1020Java",
            "30Java",
            "Java1020",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "Expressions are evaluated left to right. 10+20 is 30 (int addition). Then 30 + \"Java\" results in string concatenation, producing \"30Java\".",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "java-10",
        question: "Which loop is guaranteed to execute at least once?",
        options: [
            "for",
            "while",
            "do-while",
            "enhanced for"
        ],
        answer: 2,
        explanation: "The `do-while` loop evaluates its condition at the bottom of the loop, ensuring the loop body executes at least one time.",
        difficulty: "Easy",
        topic: "do while"
    },
    {
        id: "java-11",
        question: "What is the default value of an object reference variable in Java?",
        options: [
            "0",
            "false",
            "null",
            "Depends on the JVM"
        ],
        answer: 2,
        explanation: "All object reference variables (instance or static) default to `null` if not explicitly initialized.",
        difficulty: "Easy",
        topic: "Variables"
    },
    {
        id: "java-12",
        question: "Which of these is NOT a valid access modifier in Java?",
        options: [
            "public",
            "private",
            "protected",
            "internal"
        ],
        answer: 3,
        explanation: "Java has four access modifiers: public, private, protected, and default (package-private). `internal` is an access modifier in C#, not Java.",
        difficulty: "Easy",
        topic: "Access Modifiers"
    },
    {
        id: "java-13",
        question: "Can a constructor be final in Java?",
        options: [
            "Yes",
            "No",
            "Only static constructors can be final",
            "Only private constructors can be final"
        ],
        answer: 1,
        explanation: "Constructors cannot be final because they are never inherited and are only invoked by the JVM during object creation.",
        difficulty: "Easy",
        topic: "Constructors"
    },
    {
        id: "java-14",
        question: "What is the purpose of the `this` keyword?",
        options: [
            "To refer to the current class's parent",
            "To refer to the current object",
            "To call a static method",
            "To create a new instance"
        ],
        answer: 1,
        explanation: "The `this` keyword is a reference variable that refers to the current object within an instance method or constructor.",
        difficulty: "Easy",
        topic: "this Keyword"
    },
    {
        id: "java-15",
        question: "Which keyword is used to refer to the immediate parent class object?",
        options: [
            "this",
            "super",
            "parent",
            "base"
        ],
        answer: 1,
        explanation: "The `super` keyword in Java is used to refer to the immediate parent class instance variables, methods, and constructor.",
        difficulty: "Easy",
        topic: "super Keyword"
    },
    {
        id: "java-16",
        question: "What is method overloading?",
        options: [
            "Having multiple methods with the same name but different parameters in the same class",
            "Redefining a parent class method in a subclass",
            "Having two classes with the same method name",
            "Overriding a static method"
        ],
        answer: 0,
        explanation: "Method overloading (Compile-time polymorphism) occurs when a class has multiple methods with the same name but different parameter lists (type or number of parameters).",
        difficulty: "Easy",
        topic: "Method Overloading"
    },
    {
        id: "java-17",
        question: "Which of the following is used to handle exceptions in Java?",
        options: [
            "try-catch",
            "do-while",
            "if-else",
            "for-each"
        ],
        answer: 0,
        explanation: "The `try` block is used to wrap risky code, and the `catch` block is used to handle the specific exceptions that might occur.",
        difficulty: "Easy",
        topic: "try"
    },
    {
        id: "java-18",
        question: "Is Java a purely object-oriented programming language?",
        options: [
            "Yes",
            "No, because it uses primitive data types",
            "No, because it does not support inheritance",
            "Yes, because everything is an object"
        ],
        answer: 1,
        explanation: "Java is not considered purely object-oriented because it relies on primitive data types (like int, char, boolean) which are not objects.",
        difficulty: "Easy",
        topic: "Features of Java"
    },
    {
        id: "java-19",
        question: "What does the `static` keyword mean when applied to a variable?",
        options: [
            "The variable cannot be changed",
            "The variable belongs to the class, not to any specific instance",
            "The variable is stored in the stack",
            "The variable is private"
        ],
        answer: 1,
        explanation: "A `static` variable is shared among all instances of a class. There is only one copy of a static variable per class, loaded into memory when the class is loaded.",
        difficulty: "Easy",
        topic: "Static Keyword"
    },
    {
        id: "java-20",
        question: "Which class is the root of the class hierarchy in Java?",
        options: [
            "Main",
            "Object",
            "Class",
            "Root"
        ],
        answer: 1,
        explanation: "Every class in Java inherits from the `java.lang.Object` class either directly or indirectly.",
        difficulty: "Easy",
        topic: "Object Class"
    },
    {
        id: "java-21",
        question: "What is the size of an `int` data type in Java?",
        options: [
            "16 bits",
            "32 bits",
            "64 bits",
            "Compiler dependent"
        ],
        answer: 1,
        explanation: "In Java, the size of primitive data types is fixed across all platforms. An `int` is always 32 bits (4 bytes).",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "java-22",
        question: "Which operator is used for bitwise exclusive OR?",
        options: [
            "&",
            "|",
            "^",
            "!"
        ],
        answer: 2,
        explanation: "The `^` operator performs a bitwise XOR operation. It returns 1 if the corresponding bits are different, and 0 if they are the same.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "java-23",
        question: "What happens if you try to access an array element with an index equal to the array's length?",
        options: [
            "Returns 0",
            "Returns null",
            "Throws ArrayIndexOutOfBoundsException",
            "Compiles successfully but does nothing at runtime"
        ],
        answer: 2,
        explanation: "Array indices in Java are zero-based. Attempting to access `array[array.length]` exceeds the valid bounds (0 to length-1) and throws an `ArrayIndexOutOfBoundsException`.",
        difficulty: "Easy",
        topic: "Arrays"
    },
    {
        id: "java-24",
        question: "Which of the following is a marker interface?",
        options: [
            "Runnable",
            "Serializable",
            "Comparable",
            "Iterator"
        ],
        answer: 1,
        explanation: "A marker interface is an empty interface with no methods or fields. `Serializable` is a marker interface used to indicate that a class can be serialized.",
        difficulty: "Easy",
        topic: "Interface"
    },
    {
        id: "java-25",
        question: "Which string class is mutable in Java?",
        options: [
            "String",
            "StringBuffer",
            "Both String and StringBuffer",
            "Neither"
        ],
        answer: 1,
        explanation: "`StringBuffer` is mutable, meaning its value can be changed after it is created. The `String` class is immutable.",
        difficulty: "Easy",
        topic: "StringBuffer"
    },
    {
        id: "java-26",
        question: "What is the output of `\"Hello\".length();`?",
        options: [
            "4",
            "5",
            "6",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "The `length()` method of the String class returns the number of characters in the string. \"Hello\" has 5 characters.",
        difficulty: "Easy",
        topic: "String"
    },
    {
        id: "java-27",
        question: "What does the `break` statement do in a loop?",
        options: [
            "Skips the current iteration",
            "Terminates the loop entirely",
            "Pauses the loop for 1 second",
            "Restarts the loop from the beginning"
        ],
        answer: 1,
        explanation: "The `break` statement immediately terminates the innermost loop or switch statement, transferring control to the statement immediately following it.",
        difficulty: "Easy",
        topic: "break"
    },
    {
        id: "java-28",
        question: "Which of these collections allows duplicate elements?",
        options: [
            "Set",
            "HashSet",
            "List",
            "Map"
        ],
        answer: 2,
        explanation: "A `List` is an ordered collection that allows duplicate elements. `Set` and `Map` do not allow duplicate keys.",
        difficulty: "Easy",
        topic: "ArrayList"
    },
    {
        id: "java-29",
        question: "What is Autoboxing?",
        options: [
            "Converting an object to a primitive type",
            "Converting a primitive type to its corresponding wrapper class object",
            "Boxing an object into an array",
            "Creating a new instance of the Object class"
        ],
        answer: 1,
        explanation: "Autoboxing is the automatic conversion that the Java compiler makes between the primitive types and their corresponding object wrapper classes (e.g., int to Integer).",
        difficulty: "Easy",
        topic: "Autoboxing"
    },
    {
        id: "java-30",
        question: "Which keyword prevents a class from being inherited?",
        options: [
            "static",
            "final",
            "abstract",
            "private"
        ],
        answer: 1,
        explanation: "Declaring a class as `final` prevents it from being subclassed. String, Integer, and other wrapper classes are final.",
        difficulty: "Easy",
        topic: "Final Keyword"
    },
    {
        id: "java-31",
        question: "What is an abstract class?",
        options: [
            "A class that cannot be instantiated",
            "A class with no methods",
            "A class that implements only interfaces",
            "A class that is final"
        ],
        answer: 0,
        explanation: "An abstract class cannot be instantiated directly. It is designed to be subclassed, and it may contain both abstract and concrete methods.",
        difficulty: "Easy",
        topic: "Abstract Class"
    },
    {
        id: "java-32",
        question: "Which package is automatically imported into every Java program?",
        options: [
            "java.util",
            "java.io",
            "java.lang",
            "java.net"
        ],
        answer: 2,
        explanation: "The `java.lang` package is imported by default into every Java class. It contains fundamental classes like String, System, Object, and wrapper classes.",
        difficulty: "Easy",
        topic: "Import"
    },
    {
        id: "java-33",
        question: "What is the return type of a constructor?",
        options: [
            "void",
            "int",
            "The class type",
            "A constructor does not have a return type"
        ],
        answer: 3,
        explanation: "Constructors do not have a return type, not even `void`. Their sole purpose is to initialize the object's state.",
        difficulty: "Easy",
        topic: "Constructors"
    },
    {
        id: "java-34",
        question: "What is the default access modifier for a class member if none is specified?",
        options: [
            "public",
            "private",
            "protected",
            "default (package-private)"
        ],
        answer: 3,
        explanation: "If no access modifier is specified, the member is accessible only within its own package. This is known as default or package-private access.",
        difficulty: "Easy",
        topic: "Access Modifiers"
    },
    {
        id: "java-35",
        question: "Which of the following is true about the `finally` block?",
        options: [
            "It is executed only if an exception occurs",
            "It is executed only if no exception occurs",
            "It is always executed regardless of whether an exception occurs or is caught",
            "It is executed before the try block"
        ],
        answer: 2,
        explanation: "The `finally` block executes regardless of whether an exception is thrown or caught, typically used for cleanup operations like closing resources.",
        difficulty: "Easy",
        topic: "finally"
    },
    {
        id: "java-36",
        question: "What is the parent class of all exceptions?",
        options: [
            "Error",
            "RuntimeException",
            "Throwable",
            "Exception"
        ],
        answer: 2,
        explanation: "The `Throwable` class is the superclass of all errors and exceptions in the Java language. Only objects that are instances of this class can be thrown or caught.",
        difficulty: "Easy",
        topic: "Exception Handling"
    },
    {
        id: "java-37",
        question: "Which exception is thrown when a null object is referenced?",
        options: [
            "ArrayIndexOutOfBoundsException",
            "NullPointerException",
            "ClassCastException",
            "IllegalArgumentException"
        ],
        answer: 1,
        explanation: "`NullPointerException` is thrown when an application attempts to use a reference that has the `null` value.",
        difficulty: "Easy",
        topic: "Unchecked Exception"
    },
    {
        id: "java-38",
        question: "How do you create a thread in Java?",
        options: [
            "By creating an instance of the Thread class or implementing the Runnable interface",
            "By calling the start() method on a standard object",
            "By using the `thread` keyword",
            "By extending the String class"
        ],
        answer: 0,
        explanation: "In Java, you can define a thread by extending the `Thread` class or by implementing the `Runnable` interface and passing it to a Thread instance.",
        difficulty: "Easy",
        topic: "Thread Class"
    },
    {
        id: "java-39",
        question: "Which method is called to start the execution of a thread?",
        options: [
            "run()",
            "start()",
            "init()",
            "execute()"
        ],
        answer: 1,
        explanation: "The `start()` method creates a new OS thread and calls the `run()` method on that new thread. Calling `run()` directly executes it on the current thread.",
        difficulty: "Easy",
        topic: "Thread Lifecycle"
    },
    {
        id: "java-40",
        question: "What does the `volatile` keyword do?",
        options: [
            "Makes a variable constant",
            "Ensures that changes to a variable are immediately visible to other threads",
            "Prevents a variable from being garbage collected",
            "Allows a variable to be accessed from static methods only"
        ],
        answer: 1,
        explanation: "The `volatile` keyword ensures that reads and writes to a variable are directly from/to main memory, ensuring visibility of updates across multiple threads.",
        difficulty: "Easy",
        topic: "volatile"
    },
    {
        id: "java-41",
        question: "Which of these is a functional interface provided in Java 8?",
        options: [
            "Serializable",
            "Runnable",
            "Cloneable",
            "Comparable"
        ],
        answer: 1,
        explanation: "A functional interface has exactly one abstract method. `Runnable` has a single abstract method `run()`, making it a functional interface.",
        difficulty: "Easy",
        topic: "Functional Interfaces"
    },
    {
        id: "java-42",
        question: "What is the correct syntax for a lambda expression in Java?",
        options: [
            "(a, b) -> a + b",
            "(a, b) => a + b",
            "lambda(a, b) { return a + b; }",
            "def(a, b) = a + b"
        ],
        answer: 0,
        explanation: "Java lambda expressions use the arrow operator `->`. The left side contains parameters, and the right side contains the expression or body.",
        difficulty: "Easy",
        topic: "Lambda Expressions"
    },
    {
        id: "java-43",
        question: "Which class is used to read text from a character stream efficiently?",
        options: [
            "FileInputStream",
            "BufferedReader",
            "DataInputStream",
            "ObjectInputStream"
        ],
        answer: 1,
        explanation: "`BufferedReader` reads text from a character-input stream, buffering characters so as to provide for the efficient reading of characters, arrays, and lines.",
        difficulty: "Easy",
        topic: "File Handling"
    },
    {
        id: "java-44",
        question: "What is Serialization in Java?",
        options: [
            "Converting an object into a byte stream",
            "Converting a byte stream into an object",
            "Destroying an object",
            "Compiling a Java file"
        ],
        answer: 0,
        explanation: "Serialization is the process of converting an object's state into a byte stream so it can be saved to a file, sent over a network, or stored in a database.",
        difficulty: "Easy",
        topic: "Serialization"
    },
    {
        id: "java-45",
        question: "Which memory area is used for thread execution in Java?",
        options: [
            "Heap",
            "Stack",
            "Method Area",
            "Native Method Stack"
        ],
        answer: 1,
        explanation: "Each thread has its own Java Stack, which contains frames. A frame stores local variables, partial results, and is used for method invocation and return.",
        difficulty: "Easy",
        topic: "Stack Memory"
    },
    {
        id: "java-46",
        question: "What is the output of `System.out.println(10 * 20 + \"Java\" + 30 * 40);`?",
        options: [
            "200Java1200",
            "10200Java3040",
            "200Java3040",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "Multiplication has higher precedence than string concatenation. 10*20 = 200, 30*40 = 1200. The expression evaluates as (200) + \"Java\" + (1200) -> \"200Java1200\".",
        difficulty: "Easy",
        topic: "Operator Precedence"
    },
    {
        id: "java-47",
        question: "Which wrapper class is used for the primitive type `char`?",
        options: [
            "Char",
            "Character",
            "String",
            "Text"
        ],
        answer: 1,
        explanation: "The `Character` class wraps a value of the primitive type `char` in an object. An object of type `Character` contains a single field whose type is `char`.",
        difficulty: "Easy",
        topic: "Wrapper Classes"
    },
    {
        id: "java-48",
        question: "What is the purpose of the `instanceof` operator?",
        options: [
            "To compare two objects for equality",
            "To check if an object is an instance of a specific class or interface",
            "To cast an object to a different type",
            "To create a new instance of a class"
        ],
        answer: 1,
        explanation: "The `instanceof` operator tests whether the object on its left-hand side is an instance of the class or interface on its right-hand side.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "java-49",
        question: "Which collection class allows you to retrieve elements in the order they were inserted?",
        options: [
            "HashSet",
            "HashMap",
            "LinkedHashMap",
            "TreeMap"
        ],
        answer: 2,
        explanation: "`LinkedHashMap` maintains a doubly-linked list running through all its entries, allowing iteration in insertion-order.",
        difficulty: "Easy",
        topic: "LinkedHashMap"
    },
    {
        id: "java-50",
        question: "What is the default initial capacity of an ArrayList?",
        options: [
            "8",
            "10",
            "16",
            "0"
        ],
        answer: 1,
        explanation: "When an ArrayList is created using the no-argument constructor, it is initialized with a default capacity of 10.",
        difficulty: "Easy",
        topic: "ArrayList"
    },
    {
        id: "java-51",
        question: "Which of the following is an unchecked exception?",
        options: [
            "IOException",
            "SQLException",
            "ArithmeticException",
            "ClassNotFoundException"
        ],
        answer: 2,
        explanation: "`ArithmeticException` is a subclass of `RuntimeException`. Unchecked exceptions do not need to be declared in a method's `throws` clause.",
        difficulty: "Easy",
        topic: "Unchecked Exception"
    },
    {
        id: "java-52",
        question: "What is the output of `Integer.parseInt(\"101\", 2);`?",
        options: [
            "101",
            "3",
            "5",
            "NumberFormatException"
        ],
        answer: 2,
        explanation: "The second argument `2` specifies the radix (binary). The binary string \"101\" converts to the decimal integer 5 (1*4 + 0*2 + 1*1 = 5).",
        difficulty: "Easy",
        topic: "Wrapper Classes"
    },
    {
        id: "java-53",
        question: "What does the `continue` statement do in a loop?",
        options: [
            "Terminates the loop",
            "Skips the current iteration and jumps to the next one",
            "Restarts the loop from the beginning",
            "Exits the program"
        ],
        answer: 1,
        explanation: "The `continue` statement skips the remaining code in the current loop iteration and proceeds to the next iteration.",
        difficulty: "Easy",
        topic: "continue"
    },
    {
        id: "java-54",
        question: "Which of these is NOT a primitive data type in Java?",
        options: [
            "boolean",
            "int",
            "float",
            "String"
        ],
        answer: 3,
        explanation: "`String` is a class in Java, not a primitive type. The eight primitive types are byte, short, int, long, float, double, char, and boolean.",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "java-55",
        question: "Can an interface have static methods in Java?",
        options: [
            "No, never",
            "Yes, since Java 8",
            "Yes, since Java 5",
            "Only if the interface is marked as static"
        ],
        answer: 1,
        explanation: "Starting with Java 8, interfaces can contain static methods with implementations. These methods are not inherited by implementing classes.",
        difficulty: "Easy",
        topic: "Interface"
    },
    {
        id: "java-56",
        question: "What is the default value of a local variable inside a method?",
        options: [
            "0",
            "null",
            "false",
            "There is no default value; it must be initialized before use"
        ],
        answer: 3,
        explanation: "Local variables in Java do not have a default value. The compiler will throw an error if you attempt to use a local variable before it has been initialized.",
        difficulty: "Easy",
        topic: "Variables"
    },
    {
        id: "java-57",
        question: "Which keyword is used to inherit a class in Java?",
        options: [
            "inherits",
            "implements",
            "extends",
            "super"
        ],
        answer: 2,
        explanation: "The `extends` keyword is used to derive a class from a parent class. `implements` is used for interfaces.",
        difficulty: "Easy",
        topic: "Inheritance"
    },
    {
        id: "java-58",
        question: "What is a package in Java?",
        options: [
            "A type of class",
            "A namespace that organizes a set of related classes and interfaces",
            "A compressed Java file",
            "A library written in C++"
        ],
        answer: 1,
        explanation: "A Java package is a mechanism for grouping related types (classes, interfaces, enumerations, and annotations) into a namespace.",
        difficulty: "Easy",
        topic: "Packages"
    },
    {
        id: "java-59",
        question: "Which method must be overridden when implementing the `Comparable` interface?",
        options: [
            "equals()",
            "hashCode()",
            "compareTo()",
            "compare()"
        ],
        answer: 2,
        explanation: "The `Comparable` interface has a single method, `compareTo(T o)`, which is used to define the natural ordering of the object.",
        difficulty: "Easy",
        topic: "Comparable"
    },
    {
        id: "java-60",
        question: "What is the output of `System.out.println(1 + 2 + \"3\" + 4 + 5);`?",
        options: [
            "15",
            "12345",
            "3345",
            "339"
        ],
        answer: 2,
        explanation: "Evaluated left to right: 1+2 = 3. 3 + \"3\" = \"33\". \"33\" + 4 = \"334\". \"334\" + 5 = \"3345\".",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "java-61",
        question: "What does JDK stand for?",
        options: [
            "Java Development Kit",
            "Java Deployment Kit",
            "Java Design Kit",
            "Java Debugger Kit"
        ],
        answer: 0,
        explanation: "JDK stands for Java Development Kit. It contains JRE, development tools (like compiler and debugger), and the Java class library.",
        difficulty: "Easy",
        topic: "JDK"
    },
    {
        id: "java-62",
        question: "Which of the following is true about the `String` class in Java?",
        options: [
            "It is mutable",
            "It is final and immutable",
            "It can be inherited",
            "It is a primitive type"
        ],
        answer: 1,
        explanation: "The `String` class is declared as `final`, meaning it cannot be subclassed, and its objects are immutable (their state cannot be changed after creation).",
        difficulty: "Easy",
        topic: "String"
    },
    {
        id: "java-63",
        question: "Which loop is best suited for iterating over an array or collection when you do not need the indices?",
        options: [
            "for loop",
            "while loop",
            "Enhanced for loop (for-each)",
            "do-while loop"
        ],
        answer: 2,
        explanation: "The enhanced `for` loop (introduced in Java 5) provides a concise way to iterate over arrays and collections without dealing with indexes or iterators explicitly.",
        difficulty: "Easy",
        topic: "Enhanced For Loop"
    },
    {
        id: "java-64",
        question: "What is encapsulation in Java?",
        options: [
            "Combining data and methods into a single class and hiding implementation details",
            "Inheriting properties from a parent class",
            "Having multiple methods with the same name",
            "Converting a primitive to an object"
        ],
        answer: 0,
        explanation: "Encapsulation is the mechanism of wrapping the data (variables) and code (methods) together as a single unit and hiding the internal details from the outside world, usually via private variables and public getters/setters.",
        difficulty: "Easy",
        topic: "Encapsulation"
    },
    {
        id: "java-65",
        question: "What is the output of `\"javac\".substring(2, 4);`?",
        options: [
            "va",
            "vac",
            "av",
            "ac"
        ],
        answer: 0,
        explanation: "The `substring(beginIndex, endIndex)` method returns a string from `beginIndex` to `endIndex - 1`. Indices 2 and 3 are 'v' and 'a'.",
        difficulty: "Easy",
        topic: "String"
    },
    {
        id: "java-66",
        question: "Which of the following is a valid declaration of a char variable?",
        options: [
            "char ch = 'a';",
            "char ch = \"a\";",
            "char ch = 65.5;",
            "char ch = a;"
        ],
        answer: 0,
        explanation: "A char must be enclosed in single quotes. Double quotes denote a String. 65.5 is a double, not a valid char literal. 'a' without quotes is an identifier.",
        difficulty: "Easy",
        topic: "Data Types"
    },
    {
        id: "java-67",
        question: "Which collection implements a Last-In-First-Out (LIFO) data structure?",
        options: [
            "Queue",
            "LinkedList",
            "Stack",
            "ArrayList"
        ],
        answer: 2,
        explanation: "A `Stack` is a LIFO data structure where elements are pushed onto the top and popped from the top.",
        difficulty: "Easy",
        topic: "Stack"
    },
    {
        id: "java-68",
        question: "Can you override a static method in Java?",
        options: [
            "Yes",
            "No, it is called method hiding, not overriding",
            "Only if the parent method is also static",
            "Yes, but only in the same package"
        ],
        answer: 1,
        explanation: "Static methods belong to the class, not the instance. If a subclass defines a static method with the same signature as a parent static method, it hides the parent method (method hiding), but does not override it polymorphically.",
        difficulty: "Easy",
        topic: "Method Overriding"
    },
    {
        id: "java-69",
        question: "Which keyword is used to explicitly throw an exception?",
        options: [
            "throws",
            "throw",
            "catch",
            "finally"
        ],
        answer: 1,
        explanation: "The `throw` keyword is used to explicitly throw a single exception. `throws` is used in the method signature to declare exceptions.",
        difficulty: "Easy",
        topic: "throw"
    },
    {
        id: "java-70",
        question: "Which of these interfaces does not allow duplicate elements?",
        options: [
            "List",
            "Set",
            "Collection",
            "Queue"
        ],
        answer: 1,
        explanation: "A `Set` is a collection that cannot contain duplicate elements. `List` and `Queue` can contain duplicates.",
        difficulty: "Easy",
        topic: "HashSet"
    },
    {
        id: "java-71",
        question: "What is the output of `System.out.println(Math.round(3.5));`?",
        options: [
            "3",
            "4",
            "3.5",
            "3.0"
        ],
        answer: 1,
        explanation: "`Math.round(double)` adds 0.5 and returns the closest `long`. 3.5 + 0.5 = 4.0, so it returns 4.",
        difficulty: "Easy",
        topic: "Expressions"
    },
    {
        id: "java-72",
        question: "What is the difference between `==` and `.equals()`?",
        options: [
            "No difference",
            "`==` compares references, `.equals()` compares object content",
            "`==` compares content, `.equals()` compares references",
            "`.equals()` can only be used on Strings"
        ],
        answer: 1,
        explanation: "The `==` operator checks if two references point to the exact same object in memory. The `.equals()` method is meant to compare the logical content or value of objects.",
        difficulty: "Easy",
        topic: "equals()"
    },
    {
        id: "java-73",
        question: "Which of the following is NOT a valid Java identifier?",
        options: [
            "_var",
            "$money",
            "2ndPlace",
            "myVariable"
        ],
        answer: 2,
        explanation: "Java identifiers cannot start with a digit. They must start with a letter, underscore (_), or dollar sign ($).",
        difficulty: "Easy",
        topic: "Variables"
    },
    {
        id: "java-74",
        question: "What is method overriding?",
        options: [
            "Defining multiple methods with the same name in the same class",
            "Redefining a superclass method in a subclass with the same signature",
            "Calling a superclass constructor from a subclass",
            "Hiding a static method in a subclass"
        ],
        answer: 1,
        explanation: "Method overriding (Runtime polymorphism) occurs when a subclass provides a specific implementation for a method already defined in its superclass.",
        difficulty: "Easy",
        topic: "Method Overriding"
    },
    {
        id: "java-75",
        question: "Which block is used to execute code regardless of exception occurrence?",
        options: [
            "try",
            "catch",
            "finally",
            "throw"
        ],
        answer: 2,
        explanation: "The `finally` block always executes (unless the JVM exits or the thread is interrupted), making it ideal for resource cleanup like closing files or database connections.",
        difficulty: "Easy",
        topic: "finally"
    },
    {
        id: "java-76",
        question: "Which Java feature allows writing functional-style code with concise expressions?",
        options: [
            "Abstract classes",
            "Lambda expressions",
            "Constructors",
            "Annotations"
        ],
        answer: 1,
        explanation: "Lambda expressions, introduced in Java 8, allow you to treat functionality as a method argument or code as data, enabling functional programming constructs.",
        difficulty: "Easy",
        topic: "Lambda Expressions"
    },
    {
        id: "java-77",
        question: "What is the output of `\"Hello\".equals(\"hello\");`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 1,
        explanation: "The `.equals()` method performs a case-sensitive comparison. 'H' and 'h' have different ASCII values, so it returns false.",
        difficulty: "Easy",
        topic: "String"
    },
    {
        id: "java-78",
        question: "Which data structure is used for First-In-First-Out (FIFO) processing?",
        options: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        answer: 1,
        explanation: "A `Queue` is a FIFO data structure where elements are added to the rear and removed from the front.",
        difficulty: "Easy",
        topic: "Queue"
    },
    {
        id: "java-79",
        question: "What does the `transient` keyword do?",
        options: [
            "Makes a variable thread-safe",
            "Prevents a variable from being serialized",
            "Makes a variable constant",
            "Allows a variable to be accessed from another class"
        ],
        answer: 1,
        explanation: "The `transient` keyword tells the Java serialization process to skip (ignore) that particular variable when serializing the object.",
        difficulty: "Easy",
        topic: "Serialization"
    },
    {
        id: "java-80",
        question: "Which of the following is used to invoke a superclass constructor?",
        options: [
            "this()",
            "super()",
            "parent()",
            "base()"
        ],
        answer: 1,
        explanation: "The `super()` call is used in a subclass constructor to explicitly invoke the constructor of its immediate parent class.",
        difficulty: "Easy",
        topic: "Constructors"
    },
    {
        id: "java-81",
        question: "What is the output of `System.out.println(\"Java\" instanceof String);`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "RuntimeException"
        ],
        answer: 0,
        explanation: "The literal \"Java\" is an instance of the `String` class, so the `instanceof` operator returns `true`.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "java-82",
        question: "Which of these is a checked exception?",
        options: [
            "NullPointerException",
            "ArrayIndexOutOfBoundsException",
            "FileNotFoundException",
            "ArithmeticException"
        ],
        answer: 2,
        explanation: "`FileNotFoundException` is a checked exception (subclass of `IOException`) that must be either caught or declared in the `throws` clause. The others are unchecked (subclasses of `RuntimeException`).",
        difficulty: "Easy",
        topic: "Checked Exception"
    },
    {
        id: "java-83",
        question: "What is the default value of a `long` variable in Java?",
        options: [
            "0",
            "0.0",
            "0L",
            "null"
        ],
        answer: 0,
        explanation: "The default value for any numeric primitive type (byte, short, int, long, float, double) in Java is 0 (or 0.0 for floating-point types).",
        difficulty: "Easy",
        topic: "Variables"
    },
    {
        id: "java-84",
        question: "Which of these collections sorts elements in natural ascending order?",
        options: [
            "HashSet",
            "LinkedHashSet",
            "TreeSet",
            "ArrayList"
        ],
        answer: 2,
        explanation: "`TreeSet` implements the `SortedSet` interface and uses a TreeMap internally, storing elements in a Red-Black tree sorted by their natural ordering or a custom Comparator.",
        difficulty: "Easy",
        topic: "TreeSet"
    },
    {
        id: "java-85",
        question: "What is polymorphism in Java?",
        options: [
            "Hiding data from other classes",
            "The ability of an object to take on many forms",
            "Combining data and methods in a class",
            "Inheriting properties from multiple classes"
        ],
        answer: 1,
        explanation: "Polymorphism allows a single action to be performed in different ways, typically via method overloading (compile-time) and method overriding (runtime).",
        difficulty: "Easy",
        topic: "Polymorphism"
    },
    {
        id: "java-86",
        question: "Which method returns a string representation of an object?",
        options: [
            "getString()",
            "toString()",
            "print()",
            "clone()"
        ],
        answer: 1,
        explanation: "The `toString()` method in the `Object` class returns a string consisting of the class name, an `@` symbol, and the object's hash code in hexadecimal. It is commonly overridden to provide a meaningful string representation.",
        difficulty: "Easy",
        topic: "toString()"
    },
    {
        id: "java-87",
        question: "What is the output of `System.out.println(10 % 3);`?",
        options: [
            "3",
            "1",
            "0",
            "3.33"
        ],
        answer: 1,
        explanation: "The `%` is the modulo (remainder) operator. 10 divided by 3 is 3 with a remainder of 1.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "java-88",
        question: "Which of the following is true about an abstract method?",
        options: [
            "It has a body defined in the abstract class",
            "It must be implemented by the first concrete subclass",
            "It can be declared as final",
            "It can be static"
        ],
        answer: 1,
        explanation: "An abstract method has no body (just a signature) and must be overridden and implemented by any concrete (non-abstract) subclass.",
        difficulty: "Easy",
        topic: "Abstract Class"
    },
    {
        id: "java-89",
        question: "Which Java concept allows a class to inherit methods and fields from another class?",
        options: [
            "Encapsulation",
            "Abstraction",
            "Inheritance",
            "Polymorphism"
        ],
        answer: 2,
        explanation: "Inheritance is a mechanism where a new class (subclass) acquires the properties (fields and methods) of an existing class (superclass).",
        difficulty: "Easy",
        topic: "Inheritance"
    },
    {
        id: "java-90",
        question: "What is an Enum in Java?",
        options: [
            "A type of exception",
            "A special data type that enables a variable to be a set of predefined constants",
            "A collection of strings",
            "An interface with only static methods"
        ],
        answer: 1,
        explanation: "An `enum` (enumeration) is a special class representing a fixed set of constants (e.g., days of the week, directions). It provides type safety.",
        difficulty: "Easy",
        topic: "Enums"
    },
    {
        id: "java-91",
        question: "What does the `final` keyword mean when applied to a method?",
        options: [
            "The method cannot be called",
            "The method cannot be overridden in a subclass",
            "The method must return a constant value",
            "The method is static"
        ],
        answer: 1,
        explanation: "A `final` method cannot be overridden by any subclass. This is used to prevent unexpected behavior from altering a critical method's implementation.",
        difficulty: "Easy",
        topic: "Final Keyword"
    },
    {
        id: "java-92",
        question: "Which of the following is used to handle multiple exceptions in a single catch block (Java 7+)?",
        options: [
            "try (Exception1 | Exception2 e)",
            "catch (Exception1 | Exception2 e)",
            "catch (Exception1, Exception2 e)",
            "multi-catch (Exception1, Exception2 e)"
        ],
        answer: 1,
        explanation: "Java 7 introduced multi-catch, where a single `catch` block can handle multiple exceptions separated by the pipe `|` character. The exception variable `e` is implicitly final.",
        difficulty: "Easy",
        topic: "catch"
    },
    {
        id: "java-93",
        question: "Which of the following is a valid main method signature?",
        options: [
            "public static void main(String args)",
            "static public void main(String[] args)",
            "public void main(String[] args)",
            "public static int main(String[] args)"
        ],
        answer: 1,
        explanation: "The standard main method must be `public static void main(String[] args)`. The order of `public` and `static` can be swapped, and `String args[]` is also valid, but the return type must be `void` and it must accept a String array.",
        difficulty: "Easy",
        topic: "Introduction to Java"
    },
    {
        id: "java-94",
        question: "What is the output of `System.out.println(\"Hello\" + 1 + 2 + 3);`?",
        options: [
            "Hello6",
            "Hello123",
            "Hello 1 2 3",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "String concatenation evaluates left-to-right. \"Hello\" + 1 becomes \"Hello1\". \"Hello1\" + 2 becomes \"Hello12\". \"Hello12\" + 3 becomes \"Hello123\".",
        difficulty: "Easy",
        topic: "String"
    },
    {
        id: "java-95",
        question: "Which collection class allows duplicate keys?",
        options: [
            "HashMap",
            "Hashtable",
            "None, Maps do not allow duplicate keys",
            "TreeMap"
        ],
        answer: 2,
        explanation: "By definition, all implementations of the `Map` interface (like HashMap, TreeMap) cannot have duplicate keys. If a duplicate key is inserted, the new value replaces the old one.",
        difficulty: "Easy",
        topic: "HashMap"
    },
    {
        id: "java-96",
        question: "What is an anonymous class in Java?",
        options: [
            "A class without any name",
            "A class that has no methods",
            "A class defined inside a method without a name",
            "A private class"
        ],
        answer: 2,
        explanation: "An anonymous class is an inner class declared without a name, typically instantiated and implemented in a single expression, often used for event listeners or implementing interfaces on the fly.",
        difficulty: "Easy",
        topic: "Anonymous Classes"
    },
    {
        id: "java-97",
        question: "Which modifier restricts access to a member to only within its own class?",
        options: [
            "public",
            "protected",
            "default",
            "private"
        ],
        answer: 3,
        explanation: "The `private` access modifier is the most restrictive. A private member cannot be accessed outside the class in which it is declared.",
        difficulty: "Easy",
        topic: "Access Modifiers"
    },
    {
        id: "java-98",
        question: "What does `StringBuilder` offer over `StringBuffer`?",
        options: [
            "Thread safety",
            "Better performance in single-threaded environments",
            "Immutability",
            "More built-in methods"
        ],
        answer: 1,
        explanation: "`StringBuilder` was introduced in Java 5 as a non-thread-safe alternative to `StringBuffer`. Because it lacks synchronization overhead, it is faster in single-threaded scenarios.",
        difficulty: "Easy",
        topic: "StringBuilder"
    },
    {
        id: "java-99",
        question: "What is the difference between `++i` and `i++`?",
        options: [
            "No difference",
            "`++i` is pre-increment (increments first, then uses value), `i++` is post-increment (uses value first, then increments)",
            "`++i` adds 2, `i++` adds 1",
            "`i++` is faster"
        ],
        answer: 1,
        explanation: "Pre-increment (`++i`) increments the variable and returns the new value. Post-increment (`i++`) returns the current value and then increments the variable.",
        difficulty: "Easy",
        topic: "Operators"
    },
    {
        id: "java-100",
        question: "Which exception is thrown when a class is not found at runtime?",
        options: [
            "NoClassDefFoundError",
            "ClassNotFoundException",
            "ClassCastException",
            "InstantiationException"
        ],
        answer: 1,
        explanation: "`ClassNotFoundException` is a checked exception thrown when an application tries to load a class through its string name but no definition for the class could be found.",
        difficulty: "Easy",
        topic: "Checked Exception"
    },
    {
        id: "java-101",
        question: "What is the output of `System.out.println(\"abc\".concat(null));`?",
        options: [
            "abcnull",
            "abc",
            "NullPointerException",
            "Compilation Error"
        ],
        answer: 2,
        explanation: "The `concat()` method throws a `NullPointerException` if the passed string is null. Unlike the `+` operator, it does not convert null to the string \"null\".",
        difficulty: "Easy",
        topic: "String"
    },
    {
        id: "java-102",
        question: "Which Java keyword is used to define a variable that can hold null?",
        options: [
            "nullable",
            "null",
            "No specific keyword, any reference type can hold null",
            "optional"
        ],
        answer: 2,
        explanation: "In Java, any reference type (objects, arrays, Strings) can be assigned the literal `null`. Primitive types cannot hold null.",
        difficulty: "Easy",
        topic: "Variables"
    },
    {
        id: "java-103",
        question: "Which of the following is NOT a feature of Java 8?",
        options: [
            "Lambda Expressions",
            "Stream API",
            "Records",
            "Default methods in interfaces"
        ],
        answer: 2,
        explanation: "Records were introduced in Java 14 as a preview and became standard in Java 16. Lambda expressions, Stream API, and default methods were introduced in Java 8.",
        difficulty: "Easy",
        topic: "Java 8 Features"
    },
    {
        id: "java-104",
        question: "Which class provides methods to perform operations on arrays like sorting and searching?",
        options: [
            "Array",
            "Arrays",
            "Collections",
            "StringUtil"
        ],
        answer: 1,
        explanation: "The `java.util.Arrays` class contains various static methods for sorting and searching arrays, as well as other utilities like converting arrays to lists.",
        difficulty: "Easy",
        topic: "Arrays"
    },
    {
        id: "java-105",
        question: "What is a deadlock in multithreading?",
        options: [
            "A thread that is waiting indefinitely for a lock held by another thread",
            "A thread that has finished execution",
            "A thread that is sleeping",
            "A thread that has been garbage collected"
        ],
        answer: 0,
        explanation: "Deadlock occurs when two or more threads are blocked forever, each waiting on a resource held by the other, preventing either from proceeding.",
        difficulty: "Easy",
        topic: "Deadlock"
    },
    {
        id: "java-106",
        question: "What is the output of `System.out.println(Integer.MAX_VALUE + 1);`?",
        options: [
            "Compilation Error",
            "ArithmeticException",
            "Integer.MIN_VALUE",
            "0"
        ],
        answer: 2,
        explanation: "Integer overflow wraps around silently in Java. Adding 1 to the maximum 32-bit integer value (2147483647) results in the minimum 32-bit integer value (-2147483648).",
        difficulty: "Medium",
        topic: "Wrapper Classes"
    },
    {
        id: "java-107",
        question: "Which of the following is true about the `hashCode()` method?",
        options: [
            "It must return the same value for two objects that are not equal",
            "It must return different values for two objects that are equal",
            "It must return the same integer value consistently for an object if its state doesn't change during execution",
            "It is used to compare objects for equality"
        ],
        answer: 2,
        explanation: "The general contract of `hashCode()` dictates that if an object is called multiple times during an execution, it must consistently return the same integer, provided no information used in `equals()` comparisons changes.",
        difficulty: "Medium",
        topic: "hashCode()"
    },
    {
        id: "java-108",
        question: "What is the output of the following code?\nString s1 = \"Java\";\nString s2 = \"Java\";\nSystem.out.println(s1 == s2);",
        options: [
            "true",
            "false",
            "Compilation Error",
            "RuntimeException"
        ],
        answer: 0,
        explanation: "String literals are interned and stored in the String Pool. Both `s1` and `s2` point to the exact same object in the pool, so `==` returns `true`.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-109",
        question: "What is the output of the following code?\nString s1 = new String(\"Java\");\nString s2 = new String(\"Java\");\nSystem.out.println(s1 == s2);",
        options: [
            "true",
            "false",
            "Compilation Error",
            "RuntimeException"
        ],
        answer: 1,
        explanation: "The `new` keyword forces the creation of a new object in the heap memory. `s1` and `s2` point to two distinct objects, so `==` returns `false`. `.equals()` would return `true`.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-110",
        question: "What is the result of `\"Hello\".intern() == \"Hello\";`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "Depends on JVM"
        ],
        answer: 0,
        explanation: "The literal `\"Hello\"` is already in the String pool. The `intern()` method returns a reference to the pooled string. Thus, both refer to the same pool object.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-111",
        question: "Which interface must be implemented by a class whose instances can be compared to each other for natural ordering?",
        options: [
            "Comparator",
            "Comparable",
            "Runnable",
            "Serializable"
        ],
        answer: 1,
        explanation: "`Comparable` provides a single method, `compareTo()`, allowing an object to compare itself to another object to define its natural ordering.",
        difficulty: "Medium",
        topic: "Comparable"
    },
    {
        id: "java-112",
        question: "What happens when you pass an object reference to a method and modify its state?",
        options: [
            "The original object remains unchanged (pass by value)",
            "The original object's state is changed (pass by reference value)",
            "Compilation Error",
            "The method creates a clone of the object"
        ],
        answer: 1,
        explanation: "Java is strictly pass-by-value. When passing an object, the value of the reference (memory address) is copied. Both the original and copied reference point to the same object, so modifications affect the original object.",
        difficulty: "Medium",
        topic: "Methods"
    },
    {
        id: "java-113",
        question: "Which of the following is true regarding a `default` method in an interface?",
        options: [
            "It must be overridden by the implementing class",
            "It has a body and provides a default implementation",
            "It cannot be called on the implementing class instance",
            "It can only be static"
        ],
        answer: 1,
        explanation: "Introduced in Java 8, default methods allow interfaces to have implemented methods. Implementing classes inherit this implementation but can choose to override it.",
        difficulty: "Medium",
        topic: "Interface"
    },
    {
        id: "java-114",
        question: "What is the output of `System.out.println(0.1 + 0.2 == 0.3);`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "ArithmeticException"
        ],
        answer: 1,
        explanation: "Due to how floating-point numbers are represented in binary (IEEE 754), 0.1 + 0.2 actually results in something like 0.30000000000000004. Therefore, it does not exactly equal 0.3.",
        difficulty: "Medium",
        topic: "Data Types"
    },
    {
        id: "java-115",
        question: "Which collection is best suited for a LIFO stack that is not thread-safe?",
        options: [
            "java.util.Stack",
            "java.util.ArrayDeque",
            "java.util.Vector",
            "java.util.LinkedList"
        ],
        answer: 1,
        explanation: "The Java documentation recommends using `ArrayDeque` over `Stack` for stack operations. `ArrayDeque` is faster and not thread-safe (unlike `Stack`, which extends the legacy synchronized `Vector`).",
        difficulty: "Medium",
        topic: "Deque"
    },
    {
        id: "java-116",
        question: "What is the time complexity of `get(index)` in a `LinkedList`?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "A `LinkedList` does not support random access. To get an element at a specific index, it must traverse the list from the beginning or end, taking O(n) time in the worst case.",
        difficulty: "Medium",
        topic: "LinkedList"
    },
    {
        id: "java-117",
        question: "What is the time complexity of `add(index, element)` in an `ArrayList`?",
        options: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        answer: 2,
        explanation: "Inserting in the middle of an `ArrayList` requires shifting all subsequent elements to the right to make space, which takes O(n) time.",
        difficulty: "Medium",
        topic: "ArrayList"
    },
    {
        id: "java-118",
        question: "Which exception is thrown when you try to add a duplicate element to a `Set`?",
        options: [
            "DuplicateElementException",
            "IllegalArgumentException",
            "It does not throw an exception; it simply ignores the new element and returns false",
            "UnsupportedOperationException"
        ],
        answer: 2,
        explanation: "The `add()` method of a `Set` returns `false` if the set already contains the element. It does not throw an exception.",
        difficulty: "Medium",
        topic: "HashSet"
    },
    {
        id: "java-119",
        question: "What is the contract between `equals()` and `hashCode()`?",
        options: [
            "They must always return the same value",
            "If two objects are equal according to `equals()`, they must have the same `hashCode()`",
            "If two objects have the same `hashCode()`, they must be equal",
            "There is no contract between them"
        ],
        answer: 1,
        explanation: "If `a.equals(b)` is true, then `a.hashCode()` must equal `b.hashCode()`. The reverse is not required (hash collisions are allowed).",
        difficulty: "Medium",
        topic: "Object Class"
    },
    {
        id: "java-120",
        question: "Which keyword prevents a method from being overridden?",
        options: [
            "static",
            "abstract",
            "final",
            "private"
        ],
        answer: 2,
        explanation: "While `private` methods are technically not visible to be overridden, the `final` keyword is explicitly designed to prevent a method from being overridden by subclasses.",
        difficulty: "Medium",
        topic: "Final Keyword"
    },
    {
        id: "java-121",
        question: "What is the output of the following code?\nint x = 5;\nx = x++;\nSystem.out.println(x);",
        options: [
            "5",
            "6",
            "Compilation Error",
            "RuntimeException"
        ],
        answer: 0,
        explanation: "Post-increment `x++` returns the current value of x (5), then increments x to 6. The assignment `x = ` then overwrites the incremented value with the returned value (5).",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-122",
        question: "What is the output of the following code?\nint x = 5;\nx = ++x;\nSystem.out.println(x);",
        options: [
            "5",
            "6",
            "Compilation Error",
            "RuntimeException"
        ],
        answer: 1,
        explanation: "Pre-increment `++x` increments x to 6 first, then returns the new value 6. The assignment `x = ` assigns 6 back to x.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-123",
        question: "Which of the following is true about a `static` nested class?",
        options: [
            "It can access instance variables of the outer class directly",
            "It does not have access to the instance variables of the outer class without an explicit reference",
            "It must be instantiated using the outer class instance",
            "It cannot have static methods"
        ],
        answer: 1,
        explanation: "Unlike inner (non-static nested) classes, a static nested class is not associated with an instance of its outer class. Therefore, it cannot directly access instance members of the outer class.",
        difficulty: "Medium",
        topic: "Static Nested Classes"
    },
    {
        id: "java-124",
        question: "What is the output of `System.out.println(new Integer(10) == new Integer(10));`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "Depends on JVM"
        ],
        answer: 1,
        explanation: "The `new` keyword creates distinct objects in the heap memory. `==` compares references, not values, so it returns `false`. (Note: Integer caching applies to `Integer.valueOf()`, not the `new` constructor).",
        difficulty: "Medium",
        topic: "Wrapper Classes"
    },
    {
        id: "java-125",
        question: "What is the output of `System.out.println(Integer.valueOf(10) == Integer.valueOf(10));`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "Depends on JVM"
        ],
        answer: 0,
        explanation: "`Integer.valueOf()` caches integer values between -128 and 127. Since 10 falls in this range, it returns the same cached object reference for both calls, making `==` return `true`.",
        difficulty: "Medium",
        topic: "Wrapper Classes"
    },
    {
        id: "java-126",
        question: "Which design pattern does the `java.util.Collections.singleton()` method implement?",
        options: [
            "Factory Pattern",
            "Singleton Pattern",
            "Builder Pattern",
            "Prototype Pattern"
        ],
        answer: 1,
        explanation: "`Collections.singleton()` returns an immutable set containing only the specified object. This is an implementation of the Singleton pattern conceptually (one element)",
        difficulty: "Medium",
        topic: "Collections Framework"
    },
    {
        id: "java-127",
        question: "What is the output of `System.out.println(\"Java\".substring(0));`?",
        options: [
            "Empty string",
            "J",
            "Java",
            "StringIndexOutOfBoundsException"
        ],
        answer: 2,
        explanation: "`substring(0)` returns the entire string starting from index 0 to the end of the string.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-128",
        question: "What is the output of `System.out.println(\"Java\".substring(5));`?",
        options: [
            "Empty string",
            "a",
            "StringIndexOutOfBoundsException",
            "null"
        ],
        answer: 0,
        explanation: "If the beginIndex is equal to the length of the string, `substring()` returns an empty string. It only throws an exception if the index is greater than the length.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-129",
        question: "Which of the following is true about the `throws` clause?",
        options: [
            "It is used to throw an exception explicitly",
            "It is used to declare exceptions that a method might throw, passing the responsibility to the caller",
            "It must be used with `try` block",
            "It can only be used with checked exceptions"
        ],
        answer: 1,
        explanation: "The `throws` clause is used in a method signature to indicate that the method might throw one or more exceptions, forcing the caller to handle or declare them. It can be used for both checked and unchecked exceptions.",
        difficulty: "Medium",
        topic: "throws"
    },
    {
        id: "java-130",
        question: "What happens if a `catch` block for a superclass exception is declared before a `catch` block for its subclass exception?",
        options: [
            "Runs fine",
            "Compilation Error",
            "The subclass catch block is ignored",
            "Throws RuntimeException"
        ],
        answer: 1,
        explanation: "In Java, a catch block for a subclass exception must precede a catch block for a superclass exception. Otherwise, the subclass block is unreachable, resulting in a compilation error.",
        difficulty: "Medium",
        topic: "catch"
    },
    {
        id: "java-131",
        question: "Which of the following is an example of method hiding?",
        options: [
            "Overriding an instance method",
            "Declaring a static method in a subclass with the same signature as a static method in the superclass",
            "Overloading a method",
            "Implementing an interface method"
        ],
        answer: 1,
        explanation: "If a subclass defines a static method with the exact same signature as a static method in the superclass, it hides the superclass method. This is known as method hiding, not overriding.",
        difficulty: "Medium",
        topic: "Static Keyword"
    },
    {
        id: "java-132",
        question: "What is the output of `System.out.println(Double.NaN == Double.NaN);`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "ArithmeticException"
        ],
        answer: 1,
        explanation: "NaN (Not a Number) is defined by IEEE 754 such that NaN is not equal to anything, including itself. Use `Double.isNaN()` to check for NaN.",
        difficulty: "Medium",
        topic: "Data Types"
    },
    {
        id: "java-133",
        question: "Which of these collections does NOT allow null elements?",
        options: [
            "ArrayList",
            "LinkedList",
            "HashSet",
            "ConcurrentHashMap"
        ],
        answer: 3,
        explanation: "`ConcurrentHashMap` does not allow null keys or null values to avoid ambiguity in concurrent scenarios (e.g., does `get(key)` returning null mean the key doesn't exist or the value is null?).",
        difficulty: "Medium",
        topic: "HashMap"
    },
    {
        id: "java-134",
        question: "What is the purpose of the `@Override` annotation?",
        options: [
            "To override a variable",
            "To indicate that a method is intended to override a method declared in a superclass or interface",
            "To mark a method as final",
            "To prevent a method from being overloaded"
        ],
        answer: 1,
        explanation: "The `@Override` annotation instructs the compiler to check that the method actually overrides a method from a superclass or implements an interface method, catching typos or signature mismatches at compile time.",
        difficulty: "Medium",
        topic: "Annotations"
    },
    {
        id: "java-135",
        question: "Which of the following is true about a `PriorityQueue` in Java?",
        options: [
            "It orders elements in FIFO order",
            "It orders elements based on their natural ordering or a Comparator provided at construction time",
            "It allows random access to elements",
            "It does not allow duplicate elements"
        ],
        answer: 1,
        explanation: "`PriorityQueue` is a min-heap (by default) that orders elements based on their natural ordering or a custom `Comparator`. It does not guarantee FIFO order, allows duplicates, and does not support random access.",
        difficulty: "Medium",
        topic: "PriorityQueue"
    },
    {
        id: "java-136",
        question: "What is the output of `System.out.println(String.join(\"-\", \"A\", \"B\", \"C\"));`?",
        options: [
            "ABC-",
            "-A-B-C",
            "A-B-C",
            "Compilation Error"
        ],
        answer: 2,
        explanation: "The static `String.join()` method concatenates the provided elements with the specified delimiter in between them.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-137",
        question: "What is a marker interface in Java?",
        options: [
            "An interface with one abstract method",
            "An interface with no methods that indicates a capability to the JVM",
            "An interface used only for serialization",
            "An interface that cannot be implemented"
        ],
        answer: 1,
        explanation: "A marker interface is empty (has no methods or fields). The JVM or compiler uses it to add special behavior, such as `Serializable` (allowing serialization) or `Cloneable` (allowing `Object.clone()`).",
        difficulty: "Medium",
        topic: "Interface"
    },
    {
        id: "java-138",
        question: "Which of the following is a valid way to create a Thread?",
        options: [
            "Thread t = new Thread(new MyRunnable());",
            "Thread t = new Thread(MyRunnable.run());",
            "Thread t = new Thread(MyRunnable);",
            "Thread t = MyRunnable.newThread();"
        ],
        answer: 0,
        explanation: "To create a thread using `Runnable`, you pass an instance of the class implementing `Runnable` to the `Thread` constructor. `MyRunnable.run()` executes the method on the current thread and passes the void result, which is invalid.",
        difficulty: "Medium",
        topic: "Runnable Interface"
    },
    {
        id: "java-139",
        question: "What is the purpose of the `synchronized` keyword?",
        options: [
            "To speed up thread execution",
            "To prevent multiple threads from executing a block or method concurrently on the same object",
            "To kill a thread",
            "To pause a thread"
        ],
        answer: 1,
        explanation: "`synchronized` provides mutual exclusion. Only one thread can acquire the lock for a synchronized block/method at a time, preventing thread interference and memory consistency errors.",
        difficulty: "Medium",
        topic: "Synchronization"
    },
    {
        id: "java-140",
        question: "Which of these is NOT a state in the Thread lifecycle in Java?",
        options: [
            "New",
            "Runnable",
            "Running",
            "Terminated"
        ],
        answer: 2,
        explanation: "According to Java's official documentation, thread states are New, Runnable, Blocked, Waiting, Timed Waiting, and Terminated. 'Running' is often used informally, but the JVM state is 'Runnable' (which encompasses running and ready to run).",
        difficulty: "Medium",
        topic: "Thread Lifecycle"
    },
    {
        id: "java-141",
        question: "What does the `wait()` method do?",
        options: [
            "It terminates the current thread",
            "It causes the current thread to wait until another thread invokes the notify() or notifyAll() method",
            "It puts the thread to sleep for a specific time",
            "It stops the thread indefinitely"
        ],
        answer: 1,
        explanation: "`wait()` is used for inter-thread communication. It releases the lock on the object and causes the thread to wait until another thread signals it using `notify()` or `notifyAll()`.",
        difficulty: "Medium",
        topic: "Synchronization"
    },
    {
        id: "java-142",
        question: "What is the output of `System.out.println(Optional.ofNullable(null).isPresent());`?",
        options: [
            "true",
            "false",
            "NullPointerException",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "`Optional.ofNullable(null)` returns an empty `Optional`. The `isPresent()` method returns `false` for an empty Optional, avoiding a `NullPointerException`.",
        difficulty: "Medium",
        topic: "Optional"
    },
    {
        id: "java-143",
        question: "Which of the following is true about a `try-with-resources` statement?",
        options: [
            "It requires a `finally` block to close resources",
            "It automatically closes resources that implement the AutoCloseable interface",
            "It can only be used with file streams",
            "It was introduced in Java 5"
        ],
        answer: 1,
        explanation: "Introduced in Java 7, try-with-resources ensures that each resource declared in the try block is automatically closed at the end of the statement, provided the resource implements `AutoCloseable` or `Closeable`.",
        difficulty: "Medium",
        topic: "Exception Handling"
    },
    {
        id: "java-144",
        question: "What is the output of `System.out.println(\"Java\".chars().count());`?",
        options: [
            "4",
            "5",
            "Compilation Error",
            "UnsupportedOperationException"
        ],
        answer: 1,
        explanation: "`chars()` returns an `IntStream` of the character values in the string. `count()` is a terminal operation that returns the number of elements, which is 5 for \"Java\".",
        difficulty: "Medium",
        topic: "Streams API"
    },
    {
        id: "java-145",
        question: "Which method in the Stream API is used to combine elements into a single result?",
        options: [
            "map()",
            "filter()",
            "reduce()",
            "collect()"
        ],
        answer: 2,
        explanation: "`reduce()` is a terminal operation that performs a reduction on the elements of the stream, using an accumulator function to combine them into a single summary result (e.g., sum, max).",
        difficulty: "Medium",
        topic: "Streams API"
    },
    {
        id: "java-146",
        question: "What is the difference between `map()` and `flatMap()` in Streams?",
        options: [
            "They are the same",
            "`map()` transforms each element to another object, `flatMap()` transforms each element to a stream and flattens them into a single stream",
            "`flatMap()` is used for primitives only",
            "`map()` can return null, `flatMap()` cannot"
        ],
        answer: 1,
        explanation: "While `map()` applies a function to each element producing a 1:1 mapping, `flatMap()` applies a function that produces a Stream for each element, then flattens all those streams into a single Stream (1:N mapping).",
        difficulty: "Medium",
        topic: "Streams API"
    },
    {
        id: "java-147",
        question: "What is the output of `Arrays.asList(1, 2, 3).set(0, 10);`?",
        options: [
            "UnsupportedOperationException",
            "The list is modified to [10, 2, 3]",
            "Compilation Error",
            "ArrayIndexOutOfBoundsException"
        ],
        answer: 1,
        explanation: "`Arrays.asList()` returns a fixed-size list backed by the original array. While you cannot add or remove elements (`UnsupportedOperationException`), you *can* modify existing elements using `set()`.",
        difficulty: "Medium",
        topic: "Arrays"
    },
    {
        id: "java-148",
        question: "Which class is used to read primitive Java data types from a stream?",
        options: [
            "BufferedReader",
            "DataInputStream",
            "FileReader",
            "ObjectInputStream"
        ],
        answer: 1,
        explanation: "`DataInputStream` allows an application to read primitive Java data types from an underlying input stream in a machine-independent way.",
        difficulty: "Medium",
        topic: "File Handling"
    },
    {
        id: "java-149",
        question: "What is the output of `System.out.println(\"Java\".replace('a', 'A'));`?",
        options: [
            "JAva",
            "JAvA",
            "Java",
            "java"
        ],
        answer: 0,
        explanation: "`replace(char oldChar, char newChar)` replaces all occurrences of the old character with the new character. Only the lowercase 'a' is replaced.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-150",
        question: "What is the output of `System.out.println(\"Java\".replaceAll(\"a\", \"A\"));`?",
        options: [
            "JAva",
            "JAvA",
            "Java",
            "java"
        ],
        answer: 0,
        explanation: "`replaceAll(String regex, String replacement)` takes a regular expression. \"a\" is a regex matching the literal 'a'. It replaces all matches, resulting in \"JAva\".",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-151",
        question: "What is the output of `System.out.println(\"Java\".replaceFirst(\"a\", \"A\"));`?",
        options: [
            "JAva",
            "JAvA",
            "Java",
            "java"
        ],
        answer: 0,
        explanation: "`replaceFirst(String regex, String replacement)` replaces only the first substring that matches the given regular expression. The first 'a' is replaced.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-152",
        question: "Which method reference syntax is used to reference an instance method of a specific object?",
        options: [
            "ClassName::staticMethodName",
            "objectName::instanceMethodName",
            "ClassName::instanceMethodName",
            "ClassName::new"
        ],
        answer: 1,
        explanation: "To reference an instance method of a particular object, you use the syntax `objectName::instanceMethodName`. If it were arbitrary objects of a class, you'd use `ClassName::instanceMethodName`.",
        difficulty: "Medium",
        topic: "Method References"
    },
    {
        id: "java-153",
        question: "Which of the following is true about Generics in Java?",
        options: [
            "Generics exist at runtime (Reification)",
            "Generics are erased during compilation (Type Erasure)",
            "You can create an array of a generic type",
            "Primitive types can be used as generic type parameters"
        ],
        answer: 1,
        explanation: "Java uses Type Erasure. Generic type parameters are removed during compilation and replaced with their bounds or `Object`. This means `List<String>` and `List<Integer>` are both just `List` at runtime.",
        difficulty: "Medium",
        topic: "Generics"
    },
    {
        id: "java-154",
        question: "What is the output of `System.out.println(List.of(1, 2, 3).getClass().getName());`?",
        options: [
            "java.util.ArrayList",
            "java.util.List",
            "java.util.ImmutableCollections$ListN",
            "java.util.LinkedList"
        ],
        answer: 2,
        explanation: "`List.of()` (introduced in Java 9) returns an unmodifiable list. It does not return an `ArrayList` but an internal immutable class from the `java.util.ImmutableCollections` package.",
        difficulty: "Medium",
        topic: "Collections Framework"
    },
    {
        id: "java-155",
        question: "What happens if you try to add an element to a list created with `List.of()`?",
        options: [
            "The element is added",
            "UnsupportedOperationException is thrown",
            "NullPointerException is thrown",
            "The list becomes mutable"
        ],
        answer: 1,
        explanation: "Lists returned by `List.of()` are structurally immutable. Any attempt to modify them (add, set, remove) throws an `UnsupportedOperationException`.",
        difficulty: "Medium",
        topic: "Collections Framework"
    },
    {
        id: "java-156",
        question: "Which of the following is true about the `Iterator` interface?",
        options: [
            "It allows adding elements during iteration",
            "It allows removing elements during iteration safely using its own remove() method",
            "It is faster than a ListIterator",
            "It can only iterate over Lists"
        ],
        answer: 1,
        explanation: "`Iterator` provides a safe `remove()` method that removes the last element returned by the iterator, preventing `ConcurrentModificationException` if used correctly. It cannot add elements.",
        difficulty: "Medium",
        topic: "Iterator"
    },
    {
        id: "java-157",
        question: "Which interface extends `Iterator` to allow bidirectional traversal?",
        options: [
            "Collection",
            "ListIterator",
            "Iterable",
            "Enumeration"
        ],
        answer: 1,
        explanation: "`ListIterator` extends `Iterator` and adds methods to traverse the list in both directions (previous(), next()), modify the list, and get the current index.",
        difficulty: "Medium",
        topic: "ListIterator"
    },
    {
        id: "java-158",
        question: "What is the output of `System.out.println(Math.floor(-3.5));`?",
        options: [
            "-3.0",
            "-4.0",
            "-3",
            "3.0"
        ],
        answer: 1,
        explanation: "`Math.floor()` returns the largest integer value less than or equal to the argument. The largest integer less than -3.5 is -4.0.",
        difficulty: "Medium",
        topic: "Expressions"
    },
    {
        id: "java-159",
        question: "What is the output of `System.out.println(Math.ceil(-3.5));`?",
        options: [
            "-3.0",
            "-4.0",
            "-3",
            "3.0"
        ],
        answer: 0,
        explanation: "`Math.ceil()` returns the smallest integer value greater than or equal to the argument. The smallest integer greater than -3.5 is -3.0.",
        difficulty: "Medium",
        topic: "Expressions"
    },
    {
        id: "java-160",
        question: "What is the result of `\"\".isEmpty() vs \"\".isBlank()` in Java 11+?",
        options: [
            "Both return false",
            "isEmpty() returns true, isBlank() returns false",
            "Both return true",
            "isEmpty() returns false, isBlank() returns true"
        ],
        answer: 2,
        explanation: "For an empty string `\"\"`, both `isEmpty()` (checks if length is 0) and `isBlank()` (checks if the string is empty or contains only whitespace) return `true`.",
        difficulty: "Medium",
        topic: "Java 11 Features"
    },
    {
        id: "java-161",
        question: "What is the result of `\"   \".isBlank()` in Java 11+?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 0,
        explanation: "`isBlank()` returns true if the string is empty or contains only whitespace characters. A string containing only spaces is considered blank.",
        difficulty: "Medium",
        topic: "Java 11 Features"
    },
    {
        id: "java-162",
        question: "Which Java feature allows multiple inheritance of type (interface methods) without ambiguity?",
        options: [
            "Abstract classes",
            "Default methods in interfaces with explicit conflict resolution rules",
            "Static imports",
            "Anonymous classes"
        ],
        answer: 1,
        explanation: "Java 8 allows interfaces to have default methods. If a class implements two interfaces with conflicting default methods, the class must override the method and explicitly resolve the conflict (e.g., `InterfaceName.super.method()`).",
        difficulty: "Medium",
        topic: "Interface"
    },
    {
        id: "java-163",
        question: "What is the output of `System.out.println(Optional.of(\"Java\").orElse(\"Default\"));`?",
        options: [
            "Java",
            "Default",
            "Optional[Java]",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "`Optional.of(\"Java\")` creates an Optional with a present value. `orElse(\"Default\")` returns the value if present, otherwise returns the default. Since it is present, it prints \"Java\".",
        difficulty: "Medium",
        topic: "Optional"
    },
    {
        id: "java-164",
        question: "What is the output of `System.out.println(Optional.empty().orElseGet(() -> \"Default\"));`?",
        options: [
            "empty",
            "Default",
            "null",
            "Optional.empty"
        ],
        answer: 1,
        explanation: "Since the Optional is empty, `orElseGet` executes the provided `Supplier` function and returns its result, which is \"Default\".",
        difficulty: "Medium",
        topic: "Optional"
    },
    {
        id: "java-165",
        question: "What is the difference between `orElse()` and `orElseGet()`?",
        options: [
            "They are identical",
            "`orElse()` takes a default value, `orElseGet()` takes a Supplier that is only invoked if the Optional is empty",
            "`orElseGet()` is faster even if the value is present",
            "`orElse()` throws an exception if the value is absent"
        ],
        answer: 1,
        explanation: "The argument to `orElse()` is always evaluated, even if the Optional has a value. The `Supplier` passed to `orElseGet()` is only called if the Optional is empty, saving resources if the default is expensive to compute.",
        difficulty: "Medium",
        topic: "Optional"
    },
    {
        id: "java-166",
        question: "Which of the following is true about the `CopyOnWriteArrayList`?",
        options: [
            "It is highly efficient for write-heavy operations",
            "It creates a new copy of the underlying array for every write operation, making it ideal for concurrent read-heavy scenarios",
            "It throws ConcurrentModificationException during iteration",
            "It is a synchronized version of LinkedList"
        ],
        answer: 1,
        explanation: "`CopyOnWriteArrayList` achieves thread safety by creating a fresh copy of the underlying array whenever a mutative operation is performed. This allows lock-free, safe iteration but is costly for frequent writes.",
        difficulty: "Medium",
        topic: "Multithreading"
    },
    {
        id: "java-167",
        question: "Which of the following is a functional interface in `java.util.function`?",
        options: [
            "Runnable",
            "Predicate",
            "Serializable",
            "Comparable"
        ],
        answer: 1,
        explanation: "While `Runnable` is a functional interface, it is in `java.lang`. `Predicate<T>` is specifically part of the `java.util.function` package introduced in Java 8 for lambda/target type usage.",
        difficulty: "Medium",
        topic: "Functional Interfaces"
    },
    {
        id: "java-168",
        question: "What is the output of `System.out.println(5 | 3);`?",
        options: [
            "1",
            "2",
            "7",
            "8"
        ],
        answer: 2,
        explanation: "The `|` operator is bitwise OR. 5 in binary is 0101. 3 in binary is 0011. 0101 | 0011 = 0111, which is 7 in decimal.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-169",
        question: "What is the output of `System.out.println(5 & 3);`?",
        options: [
            "1",
            "2",
            "7",
            "8"
        ],
        answer: 0,
        explanation: "The `&` operator is bitwise AND. 5 in binary is 0101. 3 in binary is 0011. 0101 & 0011 = 0001, which is 1 in decimal.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-170",
        question: "What is the output of `System.out.println(5 ^ 3);`?",
        options: [
            "1",
            "2",
            "6",
            "8"
        ],
        answer: 2,
        explanation: "The `^` operator is bitwise XOR. 5 in binary is 0101. 3 in binary is 0011. 0101 ^ 0011 = 0110, which is 6 in decimal.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-171",
        question: "What is the output of `System.out.println(~5);`?",
        options: [
            "-5",
            "-6",
            "6",
            "250"
        ],
        answer: 1,
        explanation: "The `~` operator is bitwise NOT (complement). It inverts all bits. 5 is `...00000101`. Inverting gives `...11111010`. In two's complement representation, this is -6.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-172",
        question: "Which shift operator fills the vacated bits with zeros?",
        options: [
            ">>",
            "<<",
            ">>>",
            "Both << and >>>"
        ],
        answer: 3,
        explanation: "The left shift operator `<<` and the unsigned right shift operator `>>>` always fill vacated bits with zeros. The standard right shift `>>` fills with the sign bit (1 for negative, 0 for positive).",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-173",
        question: "What is the output of `System.out.println(-1 >>> 1);`?",
        options: [
            "0",
            "-1",
            "2147483647 (Integer.MAX_VALUE)",
            "-2147483648"
        ],
        answer: 2,
        explanation: "-1 is represented as all 1s in binary. The unsigned right shift `>>>` shifts in a 0 from the left. This results in `0111...1111`, which is the maximum positive 32-bit integer.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-174",
        question: "What is the output of `System.out.println(-1 >> 1);`?",
        options: [
            "0",
            "-1",
            "2147483647",
            "1073741823"
        ],
        answer: 1,
        explanation: "-1 is all 1s. The signed right shift `>>` shifts in the sign bit (which is 1 for -1). Shifting in 1s from the left leaves the number as all 1s, so it remains -1.",
        difficulty: "Medium",
        topic: "Operators"
    },
    {
        id: "java-175",
        question: "Which of the following is true about recursion?",
        options: [
            "Recursion is always faster than iteration",
            "Recursion uses more stack memory than iteration",
            "Recursion does not require a base case",
            "Iteration is implemented using the call stack"
        ],
        answer: 1,
        explanation: "Each recursive call adds a new frame to the Java call stack, consuming memory. Deep recursion can lead to a `StackOverflowError`. Iteration typically uses only a fixed amount of memory.",
        difficulty: "Medium",
        topic: "Recursion"
    },
    {
        id: "java-176",
        question: "Which Java concept allows a class to be defined inside another class?",
        options: [
            "Polymorphism",
            "Inner classes (Nested classes)",
            "Abstract classes",
            "Anonymous packages"
        ],
        answer: 1,
        explanation: "Java allows defining a class within another class, known as a nested or inner class. It is used to logically group classes and increase encapsulation.",
        difficulty: "Medium",
        topic: "Inner Classes"
    },
    {
        id: "java-177",
        question: "What is the output of `System.out.println(Integer.toBinaryString(10));`?",
        options: [
            "1010",
            "0101",
            "10",
            "0010"
        ],
        answer: 0,
        explanation: "The integer 10 in decimal is represented as 1010 in binary. `toBinaryString` returns the string \"1010\" without leading zeros.",
        difficulty: "Medium",
        topic: "Wrapper Classes"
    },
    {
        id: "java-178",
        question: "Which of the following is NOT a valid method signature for the `main` method?",
        options: [
            "public static void main(String[] args)",
            "public static void main(String... args)",
            "static public void main(String args[])",
            "public void main(String[] args)"
        ],
        answer: 3,
        explanation: "The `main` method must be `static` so the JVM can invoke it without instantiating the class. Omitting `static` makes it an instance method, which will not be recognized as the application entry point.",
        difficulty: "Medium",
        topic: "Introduction to Java"
    },
    {
        id: "java-179",
        question: "What is the output of `System.out.println(\"Hello\".matches(\".*\"));`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "PatternSyntaxException"
        ],
        answer: 0,
        explanation: "The regex `.*` matches zero or more of any character. Since a string can be empty or have characters, it will match any string, returning true.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-180",
        question: "What is the output of `System.out.println(\"Hello\".matches(\"\\d+\"));`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "PatternSyntaxException"
        ],
        answer: 1,
        explanation: "The regex `\\d+` matches one or more digits. Since \"Hello\" contains letters, not digits, the match fails and returns false.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-181",
        question: "What is a `var` in Java (introduced in Java 10)?",
        options: [
            "A new primitive data type",
            "A dynamically typed variable like in JavaScript",
            "Syntax sugar for local variable type inference; the compiler infers the type from the initializer",
            "A keyword used to declare generic types"
        ],
        answer: 2,
        explanation: "`var` is reserved type name, not a keyword. It allows the compiler to infer the type of a local variable from its initializer (e.g., `var list = new ArrayList<String>();`). Java remains statically typed.",
        difficulty: "Medium",
        topic: "Java 11 Features"
    },
    {
        id: "java-182",
        question: "Can `var` be used for instance variables (fields)?",
        options: [
            "Yes",
            "No, it can only be used for local variables with initializers",
            "Only if the field is final",
            "Only in interfaces"
        ],
        answer: 1,
        explanation: "Type inference with `var` is restricted to local variables with initializers. It cannot be used for fields, method parameters, or return types.",
        difficulty: "Medium",
        topic: "Java 11 Features"
    },
    {
        id: "java-183",
        question: "Which of the following is true about the `Comparator` interface?",
        options: [
            "It is a functional interface with a single method `compare(T o1, T o2)`",
            "It is used to define the natural ordering of a class",
            "It is located in the `java.lang` package",
            "It can only compare integers"
        ],
        answer: 0,
        explanation: "`Comparator` is a functional interface in `java.util` used to define a custom ordering. Unlike `Comparable`, it does not require modifying the class being compared.",
        difficulty: "Medium",
        topic: "Comparator"
    },
    {
        id: "java-184",
        question: "What is the output of `System.out.println(Collections.max(List.of(3, 1, 4, 1, 5)));`?",
        options: [
            "1",
            "3",
            "5",
            "Compilation Error"
        ],
        answer: 2,
        explanation: "`Collections.max()` returns the maximum element of the given collection, according to the natural ordering of its elements. The maximum integer in the list is 5.",
        difficulty: "Medium",
        topic: "Collections Framework"
    },
    {
        id: "java-185",
        question: "Which interface must be implemented to make an object eligible for sorting in a `TreeSet` without passing a `Comparator`?",
        options: [
            "Comparator",
            "Serializable",
            "Comparable",
            "Iterable"
        ],
        answer: 2,
        explanation: "If a `TreeSet` is instantiated without a `Comparator`, it uses the natural ordering of its elements. Therefore, the elements must implement the `Comparable` interface.",
        difficulty: "Medium",
        topic: "TreeSet"
    },
    {
        id: "java-186",
        question: "What happens if you insert an object into a `TreeSet` that does not implement `Comparable` and no `Comparator` is provided?",
        options: [
            "It is inserted as null",
            "A ClassCastException is thrown at runtime",
            "Compilation Error",
            "It is inserted but cannot be retrieved"
        ],
        answer: 1,
        explanation: "When the `TreeSet` attempts to compare the element to existing elements to find its position, it will cast the object to `Comparable`. If it doesn't implement it, a `ClassCastException` is thrown.",
        difficulty: "Medium",
        topic: "TreeSet"
    },
    {
        id: "java-187",
        question: "Which exception is thrown when a method is called on an object that does not support the operation?",
        options: [
            "IllegalArgumentException",
            "IllegalStateException",
            "UnsupportedOperationException",
            "NotImplementedException"
        ],
        answer: 2,
        explanation: "`UnsupportedOperationException` is thrown to indicate that the requested operation cannot be performed (e.g., trying to add to an immutable list returned by `List.of()`).",
        difficulty: "Medium",
        topic: "Collections Framework"
    },
    {
        id: "java-188",
        question: "What is the output of `System.out.println(\"Java\".substring(1, 1));`?",
        options: [
            "a",
            "Empty string",
            "StringIndexOutOfBoundsException",
            "J"
        ],
        answer: 1,
        explanation: "`substring(beginIndex, endIndex)` returns the string from beginIndex to endIndex-1. If beginIndex equals endIndex, the range is empty, so it returns an empty string.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-189",
        question: "Which of the following is true about the `yield` keyword in Java?",
        options: [
            "It is used to pause a thread",
            "It is used to return a value from a switch expression",
            "It is used in generators",
            "It is an alternative to the `return` keyword in methods"
        ],
        answer: 1,
        explanation: "Introduced in Java 14, `yield` is used inside a switch expression to return a value from a `case` block, distinguishing it from the `break` statement used to exit a switch statement.",
        difficulty: "Medium",
        topic: "Control Statements"
    },
    {
        id: "java-190",
        question: "What is a `Record` in Java (introduced in Java 14/16)?",
        options: [
            "A special type of Map for database records",
            "A class that is implicitly final, immutable, and automatically generates constructor, getters, equals, hashCode, and toString",
            "A way to log exceptions",
            "A synchronized thread-safe class"
        ],
        answer: 1,
        explanation: "Records are a special kind of class designed to be plain data carriers. They drastically reduce boilerplate code for classes that primarily hold data.",
        difficulty: "Medium",
        topic: "Java 17 Features (Conceptual)"
    },
    {
        id: "java-191",
        question: "Which memory area stores class structures, methods, and constant pools?",
        options: [
            "Heap",
            "Stack",
            "Method Area",
            "Native Method Stack"
        ],
        answer: 2,
        explanation: "The Method Area (part of the heap prior to Java 8, Metaspace in Java 8+) stores per-class structures such as the runtime constant pool, field and method data, and the code for methods and constructors.",
        difficulty: "Medium",
        topic: "Memory Management"
    },
    {
        id: "java-192",
        question: "What is the difference between `Heap` and `Stack` memory?",
        options: [
            "Stack is used for object allocation, Heap is for method execution",
            "Heap is shared across all threads and stores objects, Stack is thread-private and stores local variables and method calls",
            "Stack memory is larger than Heap memory",
            "There is no difference"
        ],
        answer: 1,
        explanation: "Heap memory is used for dynamic memory allocation (objects/arrays) and is shared. Stack memory is used for thread execution, storing primitive locals and object references, and is private to each thread.",
        difficulty: "Medium",
        topic: "Heap Memory"
    },
    {
        id: "java-193",
        question: "What is Garbage Collection in Java?",
        options: [
            "A manual process of deleting objects",
            "An automatic process of destroying unreferenced objects to free up memory",
            "A process that defragments the hard drive",
            "A process that compiles Java code"
        ],
        answer: 1,
        explanation: "The Java Garbage Collector (GC) automatically identifies and destroys objects that are no longer reachable (referenced) by the running application, reclaiming their memory.",
        difficulty: "Medium",
        topic: "Garbage Collection"
    },
    {
        id: "java-194",
        question: "How can you explicitly request garbage collection in Java?",
        options: [
            "System.gc() or Runtime.getRuntime().gc()",
            "delete object;",
            "free(object);",
            "There is no way to request it"
        ],
        answer: 0,
        explanation: "You can suggest to the JVM that garbage collection should run using `System.gc()` or `Runtime.getRuntime().gc()`. However, the JVM is not guaranteed to actually execute it immediately.",
        difficulty: "Medium",
        topic: "Garbage Collection"
    },
    {
        id: "java-195",
        question: "Which of the following makes an object eligible for garbage collection?",
        options: [
            "Setting all its instance variables to null",
            "Reassigning the only reference to the object to point to another object",
            "The object goes out of scope",
            "All of the above"
        ],
        answer: 3,
        explanation: "An object becomes eligible for GC when it is no longer reachable. This happens if references are set to null, the reference is reassigned, or the reference variable goes out of scope.",
        difficulty: "Medium",
        topic: "Garbage Collection"
    },
    {
        id: "java-196",
        question: "What is the purpose of the `finalize()` method?",
        options: [
            "To clean up memory immediately",
            "To be called by the GC just before an object is garbage collected, allowing it to perform cleanup",
            "To finalize a thread",
            "To compile the final version of a class"
        ],
        answer: 1,
        explanation: "`Object.finalize()` is called by the GC on an object when GC determines that there are no more references to the object. It is deprecated in Java 9+ due to unreliability and performance issues.",
        difficulty: "Medium",
        topic: "Garbage Collection"
    },
    {
        id: "java-197",
        question: "What is Reflection in Java?",
        options: [
            "A design pattern",
            "An API used to inspect and dynamically modify the runtime behavior of classes, methods, and fields",
            "A type of exception",
            "A way to create mirror images of objects"
        ],
        answer: 1,
        explanation: "Reflection allows Java code to discover information about the fields, methods, and constructors of loaded classes, and to use reflected fields, methods, and constructors to operate on their underlying counterparts.",
        difficulty: "Medium",
        topic: "Reflection"
    },
    {
        id: "java-198",
        question: "Which class is the entry point for Reflection API?",
        options: [
            "Class",
            "Reflect",
            "Object",
            "Type"
        ],
        answer: 0,
        explanation: "The `java.lang.Class` object is the starting point for reflection. You can get field, method, and constructor information using its methods like `getDeclaredFields()`, `getDeclaredMethods()`, etc.",
        difficulty: "Medium",
        topic: "Reflection"
    },
    {
        id: "java-199",
        question: "What is an Annotation in Java?",
        options: [
            "A comment in the code",
            "Metadata that provides information about the program but does not directly affect the code's operation",
            "A type of exception",
            "A way to import packages"
        ],
        answer: 1,
        explanation: "Annotations are a form of metadata. They can be applied to classes, methods, variables, parameters, and packages to provide information that can be used by the compiler, runtime, or frameworks (like Spring).",
        difficulty: "Medium",
        topic: "Annotations"
    },
    {
        id: "java-200",
        question: "Which of the following is a built-in annotation used to suppress compiler warnings?",
        options: [
            "@Deprecated",
            "@Override",
            "@SuppressWarnings",
            "@FunctionalInterface"
        ],
        answer: 2,
        explanation: "`@SuppressWarnings` instructs the compiler to suppress specific warnings, such as unchecked casts or deprecated API usage, at the annotated element.",
        difficulty: "Medium",
        topic: "Annotations"
    },
    {
        id: "java-201",
        question: "What is the output of `System.out.println(String.format(\"%05d\", 42));`?",
        options: [
            "\"42\"",
            "\"00042\"",
            "\"   42\"",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "The format specifier `%05d` means format an integer with a width of 5, padded with leading zeros. So 42 becomes \"00042\".",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-202",
        question: "Which of these is true about the `switch` statement in modern Java (Java 14+)?",
        options: [
            "It only works with integers and characters",
            "It can use arrow syntax and yield values directly as an expression",
            "It does not require break statements anymore",
            "It can only evaluate primitive types"
        ],
        answer: 1,
        explanation: "Java 14 introduced switch expressions. Using the new arrow `->` syntax, `break` is not needed, and values can be returned using `yield` or directly after the arrow.",
        difficulty: "Medium",
        topic: "switch"
    },
    {
        id: "java-203",
        question: "What is the purpose of the `assert` statement?",
        options: [
            "To handle exceptions",
            "To test assumptions during development, which can be enabled or disabled at runtime",
            "To declare variables",
            "To import static methods"
        ],
        answer: 1,
        explanation: "Assertions are used to verify assumptions in code. They are disabled by default and must be enabled using the `-ea` JVM flag. They should not be used for argument validation in public methods.",
        difficulty: "Medium",
        topic: "Control Statements"
    },
    {
        id: "java-204",
        question: "Which of the following is true about `java.util.Vector`?",
        options: [
            "It is not thread-safe",
            "It is a legacy class that is synchronized (thread-safe) and is similar to ArrayList",
            "It does not implement the List interface",
            "It does not allow duplicates"
        ],
        answer: 1,
        explanation: "`Vector` is a legacy class from Java 1.0. It is synchronized, making it thread-safe but slower than `ArrayList`. It implements `List` and allows duplicates.",
        difficulty: "Medium",
        topic: "Vector"
    },
    {
        id: "java-205",
        question: "Which collection class is designed to be used as a stack but is faster than `java.util.Stack`?",
        options: [
            "ArrayList",
            "ArrayDeque",
            "PriorityQueue",
            "LinkedList"
        ],
        answer: 1,
        explanation: "`ArrayDeque` has no synchronization overhead and provides O(1) performance for push/pop operations, making it preferable to `Stack` (which extends `Vector`) for non-concurrent stack implementations.",
        difficulty: "Medium",
        topic: "Deque"
    },
    {
        id: "java-206",
        question: "What is the output of `System.out.println(new String(\"Java\") == new String(\"Java\").intern());`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 0,
        explanation: "`new String(\"Java\")` creates a new object in the heap. `.intern()` checks the String pool, finds \"Java\" there (or adds it), and returns the pooled reference. `==` compares the heap object with the pooled object? Wait, `new String(\"Java\")` is in heap. `intern()` returns the pool reference. They are different objects, so it returns false! Let me correct this: The question asks about `new String(\"Java\") == new String(\"Java\").intern()`. Left side is heap object. Right side is pool object. The answer is false.",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 1,
        explanation: "`new String(\"Java\")` creates an object in the heap. `.intern()` returns a reference from the String pool. Since the heap object and the pool object are in different memory locations, `==` returns `false`.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-207",
        question: "Which of the following allows a class to inherit methods from multiple interfaces without a compilation error?",
        options: [
            "Abstract classes",
            "Default methods, provided any conflicts are explicitly resolved in the implementing class",
            "Static methods",
            "Private methods"
        ],
        answer: 1,
        explanation: "A class can implement multiple interfaces. If two interfaces provide the same default method signature, the implementing class must override the method and explicitly choose which interface's default method to call (e.g., `InterfaceA.super.method()`).",
        difficulty: "Medium",
        topic: "Interface"
    },
    {
        id: "java-208",
        question: "What is the output of `System.out.println(Long.sum(10L, 20L));`?",
        options: [
            "30",
            "30L",
            "Compilation Error",
            "30.0"
        ],
        answer: 0,
        explanation: "`Long.sum(long a, long b)` returns a primitive `long`. `System.out.println` will print it as `30` (without the 'L' suffix, as 'L' is just a syntax marker for literals).",
        difficulty: "Medium",
        topic: "Wrapper Classes"
    },
    {
        id: "java-209",
        question: "Which of the following is a valid way to write a text file using NIO.2 (Java 7+)?",
        options: [
            "Files.write(path, bytes)",
            "FileWriter.write(path)",
            "OutputStream.write(path)",
            "Reader.write(path)"
        ],
        answer: 0,
        explanation: "The `java.nio.file.Files` class provides utility methods like `write(Path path, byte[] bytes)` or `writeString(Path path, String csq)` to simplify file operations in NIO.2.",
        difficulty: "Medium",
        topic: "File Handling"
    },
    {
        id: "java-210",
        question: "What is the output of `System.out.println(Character.isDigit('9'));`?",
        options: [
            "true",
            "false",
            "9",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "`Character.isDigit(char)` returns true if the specified character is a digit. '9' is a digit.",
        difficulty: "Medium",
        topic: "Wrapper Classes"
    },
    {
        id: "java-211",
        question: "Which design pattern does the Singleton pattern enforce?",
        options: [
            "Creation of multiple instances of a class",
            "Ensuring a class has only one instance and providing a global point of access to it",
            "Defining a family of algorithms",
            "Separating abstraction from implementation"
        ],
        answer: 1,
        explanation: "The Singleton pattern restricts the instantiation of a class to one single instance and provides a global access point to it, often used for configurations or thread pools.",
        difficulty: "Medium",
        topic: "OOP Questions"
    },
    {
        id: "java-212",
        question: "What is the output of `System.out.println(\"abc\".compareTo(\"abd\"));`?",
        options: [
            "1",
            "-1",
            "true",
            "false"
        ],
        answer: 1,
        explanation: "`compareTo()` compares lexicographically. 'c' (99) is less than 'd' (100), so it returns a negative integer (specifically -1). If the first string is greater, it returns positive. If equal, 0.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-213",
        question: "Which of the following is true about `java.lang.Math` class?",
        options: [
            "It is a final class with a private constructor",
            "It can be instantiated",
            "It is an abstract class",
            "It is an interface"
        ],
        answer: 0,
        explanation: "The `Math` class is `final` and has a `private` constructor, preventing inheritance and instantiation. All its methods and fields are `static`.",
        difficulty: "Medium",
        topic: "Classes"
    },
    {
        id: "java-214",
        question: "What is the output of `System.out.println(Boolean.logicalXor(true, false));`?",
        options: [
            "true",
            "false",
            "null",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "`logicalXor` returns true if exactly one of the arguments is true. Since one is true and one is false, it returns true.",
        difficulty: "Medium",
        topic: "Wrapper Classes"
    },
    {
        id: "java-215",
        question: "Which of the following is true about `System.arraycopy()`?",
        options: [
            "It automatically resizes the destination array if it is too small",
            "It throws ArrayIndexOutOfBoundsException if the destination array is too small to hold the copied elements",
            "It creates a new array and returns it",
            "It can only copy Object arrays"
        ],
        answer: 1,
        explanation: "`arraycopy` copies elements from a source array to a destination array. If the destination array is too small, it throws `ArrayIndexOutOfBoundsException`. It does not resize arrays.",
        difficulty: "Medium",
        topic: "Arrays"
    },
    {
        id: "java-216",
        question: "What is the output of `System.out.println(\"Java\".contentEquals(new StringBuffer(\"Java\")));`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "ClassCastException"
        ],
        answer: 0,
        explanation: "`contentEquals()` compares a String with a `CharSequence` (which `StringBuffer` implements). It returns true if they represent the same sequence of characters.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-217",
        question: "Which of the following best describes dynamic binding?",
        options: [
            "Method resolution at compile time based on the reference type",
            "Method resolution at runtime based on the actual object type",
            "Binding a variable to a memory location",
            "Linking Java code to native libraries"
        ],
        answer: 1,
        explanation: "Dynamic binding (late binding) occurs when the JVM determines which overridden method to execute at runtime based on the actual type of the object, not the reference type. This is how polymorphism works.",
        difficulty: "Medium",
        topic: "Dynamic Binding"
    },
    {
        id: "java-218",
        question: "What is the output of `System.out.println(\"Hello\".equalsIgnoreCase(\"HELLO\"));`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 0,
        explanation: "`equalsIgnoreCase()` compares two strings, ignoring case considerations. \"Hello\" and \"HELLO\" are considered equal.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-219",
        question: "Which of the following is NOT a standard JDBC step?",
        options: [
            "Load the driver",
            "Establish a connection",
            "Compile the SQL query using javac",
            "Execute the query"
        ],
        answer: 2,
        explanation: "Standard JDBC steps are: Load driver, Create connection, Create statement, Execute query, Process results, Close resources. SQL is sent as a string to the database; it is not compiled by `javac`.",
        difficulty: "Medium",
        topic: "Basic JDBC Concepts"
    },
    {
        id: "java-220",
        question: "In Spring Framework, what does `@Autowired` do?",
        options: [
            "It creates a new instance of a class",
            "It injects dependencies automatically by type",
            "It exposes a REST endpoint",
            "It handles exceptions"
        ],
        answer: 1,
        explanation: "`@Autowired` is Spring's dependency injection annotation. It instructs the container to resolve and inject collaborating beans (dependencies) automatically, typically by matching data types.",
        difficulty: "Medium",
        topic: "Basic Spring Concepts"
    },
    {
        id: "java-221",
        question: "In a REST API, which HTTP method is typically used to update an existing resource?",
        options: [
            "GET",
            "POST",
            "PUT",
            "DELETE"
        ],
        answer: 2,
        explanation: "In RESTful conventions, `PUT` is used to update an existing resource (or create it if it doesn't exist, depending on implementation). `POST` is typically used to create a new resource.",
        difficulty: "Medium",
        topic: "Basic REST API Concepts"
    },
    {
        id: "java-222",
        question: "What is the purpose of the `pom.xml` file?",
        options: [
            "To write Java code",
            "To configure project dependencies, builds, and metadata in Maven",
            "To execute Java programs",
            "To store database credentials"
        ],
        answer: 1,
        explanation: "`pom.xml` (Project Object Model) is the fundamental unit of work in Maven. It contains information about the project and configuration details used by Maven to build the project (like dependencies).",
        difficulty: "Medium",
        topic: "Basic Maven Concepts"
    },
    {
        id: "java-223",
        question: "Which build tool uses a Groovy or Kotlin DSL for configuration instead of XML?",
        options: [
            "Maven",
            "Ant",
            "Gradle",
            "Make"
        ],
        answer: 2,
        explanation: "Gradle uses a Groovy or Kotlin-based Domain Specific Language (DSL) to declare project configuration, moving away from the verbose XML used by Maven and Ant.",
        difficulty: "Medium",
        topic: "Basic Gradle Concepts"
    },
    {
        id: "java-224",
        question: "What is the output of `System.out.println(\"Java\".stripIndent());`?",
        options: [
            "Compilation Error",
            "It removes common leading whitespace from all lines",
            "It removes all whitespace",
            "It indents the string"
        ],
        answer: 1,
        explanation: "Introduced in Java 13/15, `stripIndent()` is used with text blocks to remove the incidental common whitespace from the beginning of every line in a multi-line string.",
        difficulty: "Medium",
        topic: "Java 11 Features"
    },
    {
        id: "java-225",
        question: "Which of the following is true about the `sealed` keyword (Preview in Java 15, Standard in Java 17)?",
        options: [
            "It prevents a class from being instantiated",
            "It restricts which other classes or interfaces can extend or implement it",
            "It makes all methods final",
            "It prevents reflection"
        ],
        answer: 1,
        explanation: "A `sealed` class restricts its subclasses to a finite set defined using the `permits` clause. This allows the compiler and runtime to exhaustively check pattern matches.",
        difficulty: "Medium",
        topic: "Java 17 Features (Conceptual)"
    },
    {
        id: "java-226",
        question: "What is the output of `System.out.println(\"  Java  \".trim().length());`?",
        options: [
            "9",
            "4",
            "7",
            "5"
        ],
        answer: 1,
        explanation: "`trim()` removes leading and trailing whitespace. \"  Java  \" becomes \"Java\", which has a length of 4.",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-227",
        question: "What is the output of `System.out.println(\"  Java  \".strip().length());`?",
        options: [
            "9",
            "4",
            "7",
            "5"
        ],
        answer: 1,
        explanation: "`strip()` (introduced in Java 11) is similar to `trim()` but uses Unicode character awareness to remove whitespace. For standard spaces, it behaves identically, returning length 4.",
        difficulty: "Medium",
        topic: "Java 11 Features"
    },
    {
        id: "java-228",
        question: "Which collection class is optimized for LIFO stack operations and is not thread-safe?",
        options: [
            "Stack",
            "Vector",
            "ArrayDeque",
            "LinkedList"
        ],
        answer: 2,
        explanation: "The official Java documentation recommends using `ArrayDeque` instead of `Stack` for LIFO operations. `ArrayDeque` is faster because it is not synchronized (unlike `Stack`, which inherits synchronization from `Vector`).",
        difficulty: "Medium",
        topic: "Deque"
    },
    {
        id: "java-229",
        question: "What is the output of `System.out.println(List.of(1, 2, 3).get(3));`?",
        options: [
            "3",
            "null",
            "IndexOutOfBoundsException",
            "ArrayIndexOutOfBoundsException"
        ],
        answer: 2,
        explanation: "The list has 3 elements at indices 0, 1, and 2. Calling `get(3)` is out of bounds. `List` throws `IndexOutOfBoundsException` (specifically `IndexOutOfBoundsException` for lists, unlike arrays which throw `ArrayIndexOutOfBoundsException`).",
        difficulty: "Medium",
        topic: "Collections Framework"
    },
    {
        id: "java-230",
        question: "Which of the following is true about the `Enum` type?",
        options: [
            "It can extend another class",
            "It implicitly extends `java.lang.Enum` and cannot extend another class",
            "It cannot implement interfaces",
            "It cannot have instance variables"
        ],
        answer: 1,
        explanation: "All enums implicitly extend `java.lang.Enum`. Because Java does not support multiple inheritance, an enum cannot extend any other class. However, it can implement multiple interfaces.",
        difficulty: "Medium",
        topic: "Enums"
    },
    {
        id: "java-231",
        question: "What is the output of `System.out.println(Day.MONDAY instanceof Enum);`? (Assuming `enum Day { MONDAY }`)",
        options: [
            "true",
            "false",
            "Compilation Error",
            "Depends on JVM"
        ],
        answer: 0,
        explanation: "All enum types implicitly inherit from `java.lang.Enum`. Therefore, any enum constant is an instance of `Enum`.",
        difficulty: "Medium",
        topic: "Enums"
    },
    {
        id: "java-232",
        question: "Which of these is true about a `HashMap`?",
        options: [
            "It maintains insertion order",
            "It allows one null key and multiple null values",
            "It is synchronized",
            "It sorts its entries by key"
        ],
        answer: 1,
        explanation: "`HashMap` allows one null key and any number of null values. It does not maintain order (use `LinkedHashMap`), is not synchronized (use `ConcurrentHashMap`), and does not sort (use `TreeMap`).",
        difficulty: "Medium",
        topic: "HashMap"
    },
    {
        id: "java-233",
        question: "What is the time complexity of `put()` and `get()` operations in a `HashMap`?",
        options: [
            "O(1) best/average, O(n) worst case",
            "O(log n) best/average, O(n) worst case",
            "O(1) always",
            "O(n) always"
        ],
        answer: 0,
        explanation: "Ideally, hash distribution results in O(1) time complexity. However, if many keys hash to the same bucket (poor hash function or intentional attack), the bucket degrades into a linked list, leading to O(n) time. (Java 8 converts lists to trees for O(log n) worst case).",
        difficulty: "Medium",
        topic: "HashMap"
    },
    {
        id: "java-234",
        question: "What happens internally to a `HashMap` when the number of elements exceeds the product of load factor and current capacity?",
        options: [
            "It throws an exception",
            "It triggers a rehashing process, doubling the capacity and redistributing elements",
            "It deletes the oldest element",
            "It switches to a TreeMap"
        ],
        answer: 1,
        explanation: "When `size > capacity * loadFactor` (default 0.75), the `HashMap` automatically resizes (rehashes). It creates a new array with double the capacity and re-hashes all existing entries into the new array.",
        difficulty: "Medium",
        topic: "HashMap"
    },
    {
        id: "java-235",
        question: "Which of the following is true about `WeakHashMap`?",
        options: [
            "It is synchronized",
            "Its keys are stored using weak references, allowing them to be garbage collected if no strong references exist",
            "It does not allow null keys",
            "It sorts entries by key"
        ],
        answer: 1,
        explanation: "`WeakHashMap` uses weak references for its keys. If the garbage collector determines that a key is only weakly reachable (no strong/soft references elsewhere), the entry will be removed automatically in the next GC cycle.",
        difficulty: "Medium",
        topic: "HashMap"
    },
    {
        id: "java-236",
        question: "What is the output of `System.out.println(String.join(\", \", List.of(\"A\", \"B\", \"C\")));`?",
        options: [
            "A, B, C",
            "[\"A\", \"B\", \"C\"]",
            "A,B,C",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "`String.join(CharSequence delimiter, CharSequence... elements)` concatenates the elements separated by the specified delimiter. The output is exactly \"A, B, C\".",
        difficulty: "Medium",
        topic: "String"
    },
    {
        id: "java-237",
        question: "Which of the following is true about `java.util.Properties`?",
        options: [
            "It extends HashMap",
            "It extends Hashtable and stores key-value pairs as strings, often used for configuration",
            "It is used to read binary files",
            "It does not allow saving to a file"
        ],
        answer: 1,
        explanation: "`Properties` extends `Hashtable<Object, Object>` but enforces that both keys and values are `Strings`. It provides methods like `load()` and `store()` to read/write configuration files.",
        difficulty: "Medium",
        topic: "Collections Framework"
    },
    {
        id: "java-238",
        question: "What is the result of `Optional.ofNullable(null).orElseThrow();`?",
        options: [
            "Returns null",
            "Throws NullPointerException",
            "Returns Optional.empty",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "`orElseThrow()` returns the contained value if present, otherwise throws a `NullPointerException` (no-arg version) or the specified exception.",
        difficulty: "Medium",
        topic: "Optional"
    },
    {
        id: "java-239",
        question: "Which Java 8 feature allows you to treat a sequence of elements as a pipeline of operations?",
        options: [
            "Enums",
            "Reflection",
            "Streams API",
            "Annotations"
        ],
        answer: 2,
        explanation: "The Streams API allows you to process collections of objects in a declarative way, supporting operations like `filter`, `map`, and `reduce` that can be chained together to form a pipeline.",
        difficulty: "Medium",
        topic: "Streams API"
    },
    {
        id: "java-240",
        question: "What is the output of `IntStream.rangeClosed(1, 5).sum();`?",
        options: [
            "10",
            "15",
            "5",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "`rangeClosed(1, 5)` creates a stream of integers from 1 to 5 inclusive. `sum()` is a terminal operation that adds them up: 1+2+3+4+5 = 15.",
        difficulty: "Medium",
        topic: "Streams API"
    },
    {
        id: "java-241",
        question: "What is the output of the following code?\nclass A { static { System.out.print(\"A\"); } }\nclass B extends A { static { System.out.print(\"B\"); } }\npublic class Main { public static void main(String[] args) { System.out.print(\"C\"); } }",
        options: [
            "ABC",
            "CAB",
            "C",
            "ACB"
        ],
        answer: 2,
        explanation: "Static initializers run only when the class is loaded/initialized. Since neither `A` nor `B` is instantiated or actively referenced in `main`, their static blocks do not execute. Only \"C\" is printed.",
        difficulty: "Hard",
        topic: "Static Keyword"
    },
    {
        id: "java-242",
        question: "What is the output of the following code?\nclass A { static { System.out.print(\"A\"); } }\nclass B extends A { static { System.out.print(\"B\"); } }\npublic class Main { public static void main(String[] args) { B b = new B(); } }",
        options: [
            "AB",
            "BA",
            "A",
            "B"
        ],
        answer: 0,
        explanation: "Creating `new B()` requires loading class `B`. Before `B` can be initialized, its superclass `A` must be initialized. Thus, `A`'s static block runs (prints \"A\"), then `B`'s static block runs (prints \"B\").",
        difficulty: "Hard",
        topic: "Static Keyword"
    },
    {
        id: "java-243",
        question: "What is the output of the following code?\nString s1 = \"Java\";\nString s2 = new String(\"Java\");\nSystem.out.println(s1 == s2.intern());",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 0,
        explanation: "`s1` points to the String pool. `s2.intern()` checks the pool, finds \"Java\", and returns the exact same pool reference. Therefore, `s1` and `s2.intern()` point to the same memory location.",
        difficulty: "Hard",
        topic: "String"
    },
    {
        id: "java-244",
        question: "What is the output of `System.out.println(new String(\"Java\") == new String(\"Java\").intern());`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 1,
        explanation: "`new String(\"Java\")` creates an object in the heap. `new String(\"Java\").intern()` returns a reference to the String pool. Since heap and pool are different memory areas, `==` returns `false`.",
        difficulty: "Hard",
        topic: "String"
    },
    {
        id: "java-245",
        question: "Which exception is thrown if you call `wait()` on an object without owning its monitor lock?",
        options: [
            "IllegalArgumentException",
            "IllegalMonitorStateException",
            "InterruptedException",
            "SynchronizationException"
        ],
        answer: 1,
        explanation: "`wait()`, `notify()`, and `notifyAll()` must be called from within a synchronized context (block or method) on the specific object. If not, the JVM throws `IllegalMonitorStateException`.",
        difficulty: "Hard",
        topic: "Synchronization"
    },
    {
        id: "java-246",
        question: "What is the output of `System.out.println(String.class.isPrimitive());`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 1,
        explanation: "`String` is a class, not a primitive type. `isPrimitive()` returns true only for the `Class` objects representing primitives (like `int.class`, `boolean.class`).",
        difficulty: "Hard",
        topic: "Reflection"
    },
    {
        id: "java-247",
        question: "What is the output of `System.out.println(int.class.isPrimitive());`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 0,
        explanation: "`int.class` represents the primitive type `int`. Therefore, `isPrimitive()` returns `true`. Note that `Integer.class` would return `false`.",
        difficulty: "Hard",
        topic: "Reflection"
    },
    {
        id: "java-248",
        question: "Which of the following is true about type erasure and generic methods?",
        options: [
            "Generic type parameters are available at runtime via Reflection",
            "You can create an array of a generic type parameter (e.g., `new T[size]`)",
            "Generic type parameters are replaced by their bounds or Object at compile time",
            "Primitives can be used as generic type parameters"
        ],
        answer: 2,
        explanation: "Java implements Generics via type erasure. All type parameters are replaced by their bound or `Object` at compile time. This means `List<String>` and `List<Integer>` are identical at runtime (`List`).",
        difficulty: "Hard",
        topic: "Generics"
    },
    {
        id: "java-249",
        question: "Why can't you create a generic array like `new List<String>[10]`?",
        options: [
            "It takes too much memory",
            "Because of type erasure, the array would not be type-safe at runtime (can lead to ArrayStoreException)",
            "It is allowed in Java 11+",
            "Arrays do not support objects"
        ],
        answer: 1,
        explanation: "Because of type erasure, a `List<String>[]` becomes `List[]` at runtime. You could then assign a `List<Integer>` to it without the compiler catching it, leading to `ClassCastException` later when accessing elements.",
        difficulty: "Hard",
        topic: "Generics"
    },
    {
        id: "java-250",
        question: "What is the output of `System.out.println(Collections.singleton(null).contains(null));`?",
        options: [
            "true",
            "false",
            "NullPointerException",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "`Collections.singleton(null)` creates an immutable set containing exactly one element: `null`. The `contains(null)` method checks if `null` is in the set, which it is, returning true.",
        difficulty: "Hard",
        topic: "Collections Framework"
    },
    {
        id: "java-251",
        question: "Which of the following happens when a `Thread` throws an uncaught `RuntimeException`?",
        options: [
            "The JVM always terminates immediately",
            "The thread terminates and the JVM invokes the thread's UncaughtExceptionHandler, which defaults to printing the stack trace",
            "The exception is ignored",
            "It is caught by the main thread"
        ],
        answer: 1,
        explanation: "When a thread dies due to an uncaught exception, the JVM queries the thread for its `UncaughtExceptionHandler`. If none is set, it uses the default handler which prints the thread name and stack trace to `System.err`.",
        difficulty: "Hard",
        topic: "Thread Lifecycle"
    },
    {
        id: "java-252",
        question: "What is a `PhantomReference` used for?",
        options: [
            "To prevent an object from being garbage collected",
            "To track when an object is finalized and enqueued, allowing for cleanup of resources outside the Java heap",
            "To access an object after it has been garbage collected",
            "To create strong references to objects"
        ],
        answer: 1,
        explanation: "`PhantomReference` enqueues after the GC determines the object is phantom reachable (finalized). The `get()` method always returns null. It is typically used in conjunction with a `ReferenceQueue` to schedule pre-mortem cleanup actions.",
        difficulty: "Hard",
        topic: "Garbage Collection"
    },
    {
        id: "java-253",
        question: "Which memory area in the JVM stores objects allocated during execution?",
        options: [
            "Stack",
            "Method Area",
            "Heap",
            "Code Cache"
        ],
        answer: 2,
        explanation: "The Java Heap is the runtime data area from which memory for all class instances and arrays is allocated. It is shared among all threads.",
        difficulty: "Hard",
        topic: "Heap Memory"
    },
    {
        id: "java-254",
        question: "What is the Java Memory Model (JMM)?",
        options: [
            "A diagram of RAM and CPU cache",
            "A specification that defines how threads interact through memory, ensuring visibility and ordering of operations across threads",
            "The physical layout of the JVM process",
            "A garbage collection algorithm"
        ],
        answer: 1,
        explanation: "The JMM defines the happens-before relationship, determining when actions of one thread are guaranteed to be visible to another. It abstracts away hardware memory hierarchies (like CPU caches) to define a consistent view for programmers.",
        difficulty: "Hard",
        topic: "Java Memory Model"
    },
    {
        id: "java-255",
        question: "Which of the following correctly describes the behavior of the `volatile` keyword regarding caching?",
        options: [
            "It prevents the JVM from using the Heap",
            "It ensures that reads and writes to the variable go directly to main memory, bypassing CPU caches",
            "It makes the variable thread-safe for compound actions like i++",
            "It locks the variable during read/write"
        ],
        answer: 1,
        explanation: "`volatile` provides visibility, not atomicity. It forces the JVM to write the variable to main memory immediately on write, and read from main memory on read, preventing threads from seeing stale cached values.",
        difficulty: "Hard",
        topic: "volatile"
    },
    {
        id: "java-256",
        question: "Why is `i++` not thread-safe even if `i` is declared as `volatile`?",
        options: [
            "`volatile` does not work on integers",
            "Because `i++` is a compound operation (read-modify-write) that requires synchronization (like `AtomicInteger`) to be atomic",
            "Because `volatile` makes it slower",
            "It is actually thread-safe"
        ],
        answer: 1,
        explanation: "`volatile` only guarantees visibility. `i++` involves reading `i`, incrementing, and writing back. Without synchronization, two threads can read the same value, increment, and write back, losing an update.",
        difficulty: "Hard",
        topic: "volatile"
    },
    {
        id: "java-257",
        question: "What is the output of `System.out.println(Integer.parseInt(\"100\", 8));`?",
        options: [
            "100",
            "64",
            "8",
            "NumberFormatException"
        ],
        answer: 1,
        explanation: "The radix is 8 (octal). The octal string \"100\" is converted to decimal: 1*8^2 + 0*8^1 + 0*8^0 = 64.",
        difficulty: "Hard",
        topic: "Wrapper Classes"
    },
    {
        id: "java-258",
        question: "What is the output of `System.out.println(Integer.parseInt(\"A\", 16));`?",
        options: [
            "A",
            "10",
            "NumberFormatException",
            "11"
        ],
        answer: 1,
        explanation: "The radix is 16 (hexadecimal). The hex character \"A\" represents the decimal value 10.",
        difficulty: "Hard",
        topic: "Wrapper Classes"
    },
    {
        id: "java-259",
        question: "Which of the following is true about the `java.util.concurrent.BlockingQueue` interface?",
        options: [
            "It throws an exception if you try to add to a full queue",
            "It provides methods that wait for the queue to become non-empty when retrieving and non-full when storing",
            "It is identical to `LinkedList`",
            "It does not allow null elements and is unbounded"
        ],
        answer: 1,
        explanation: "`BlockingQueue` is designed for producer-consumer scenarios. Methods like `put(e)` block if the queue is full, and `take()` blocks if the queue is empty. Note: it also does not allow null elements.",
        difficulty: "Hard",
        topic: "Multithreading"
    },
    {
        id: "java-260",
        question: "Which Executor service creates a fixed number of threads and reuses them from a shared unbounded queue?",
        options: [
            "Executors.newCachedThreadPool()",
            "Executors.newFixedThreadPool(n)",
            "Executors.newSingleThreadExecutor()",
            "ForkJoinPool.commonPool()"
        ],
        answer: 1,
        explanation: "`newFixedThreadPool(n)` creates a thread pool that reuses a fixed number of threads operating off a shared unbounded queue. If all threads are active, new tasks wait in the queue.",
        difficulty: "Hard",
        topic: "Executor Framework"
    },
    {
        id: "java-261",
        question: "What is a `CountDownLatch` used for?",
        options: [
            "To count the number of threads created",
            "To allow one or more threads to wait until a set of operations being performed in other threads completes",
            "To lock a thread indefinitely",
            "To implement a custom deadlock"
        ],
        answer: 1,
        explanation: "`CountDownLatch` is a synchronization aid initialized with a count. Threads wait on `await()`, and `countDown()` decrements the count. When it reaches zero, all waiting threads are released.",
        difficulty: "Hard",
        topic: "Multithreading"
    },
    {
        id: "java-262",
        question: "What is the output of `System.out.println(Double.longBitsToDouble(Double.doubleToLongBits(Double.NaN) ^ 1));`?",
        options: [
            "NaN",
            "1.0",
            "A specific valid double number",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "If you XOR the bit representation of NaN with 1, it remains a NaN because NaN is defined as a set of specific bit patterns (exponent all 1s, mantissa non-zero). Any non-zero mantissa is NaN.",
        difficulty: "Hard",
        topic: "Data Types"
    },
    {
        id: "java-263",
        question: "Which of the following is true about `sun.misc.Unsafe`?",
        options: [
            "It is the standard API for thread safety",
            "It provides low-level mechanisms like direct memory access and CAS operations, but is internal and strongly discouraged for standard use",
            "It is used to handle checked exceptions",
            "It is an interface for safe math operations"
        ],
        answer: 1,
        explanation: "`Unsafe` is a heavily restricted internal class used by core libraries (like `java.util.concurrent.atomic`) for direct memory manipulation, CAS (Compare-And-Swap), and bypassing normal JVM safety checks.",
        difficulty: "Hard",
        topic: "JVM & Advanced Java Questions"
    },
    {
        id: "java-264",
        question: "What is the output of `System.out.println(Integer.reverseBytes(0x12345678));`?",
        options: [
            "0x12345678",
            "0x78563412",
            "0x87654321",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "`reverseBytes()` reverses the byte order of the integer. `0x12 0x34 0x56 0x78` becomes `0x78 0x56 0x34 0x12`.",
        difficulty: "Hard",
        topic: "Wrapper Classes"
    },
    {
        id: "java-265",
        question: "Which of the following correctly describes the behavior of a `StampedLock`?",
        options: [
            "It is a reentrant lock",
            "It supports optimistic reading, allowing read locks without blocking writers if no write occurs",
            "It is a replacement for `synchronized` blocks",
            "It only supports exclusive locking"
        ],
        answer: 1,
        explanation: "Introduced in Java 8, `StampedLock` provides an optimistic read mode. It does not block writers, instead returning a 'stamp'. After reading, it validates the stamp to ensure no write occurred, improving performance over `ReentrantReadWriteLock`.",
        difficulty: "Hard",
        topic: "Multithreading"
    },
    {
        id: "java-266",
        question: "What is the output of `System.out.println(Class.forName(\"java.lang.String\").getClassLoader());`?",
        options: [
            "sun.misc.Launcher$AppClassLoader",
            "null",
            "Bootstrap ClassLoader",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "Core Java classes (like `java.lang.String`) are loaded by the Bootstrap ClassLoader, which is implemented in native code and not represented by a Java `ClassLoader` object. Therefore, `getClassLoader()` returns `null`.",
        difficulty: "Hard",
        topic: "Class Loader"
    },
    {
        id: "java-267",
        question: "Which of these is true about Metaspace (introduced in Java 8)?",
        options: [
            "It is part of the Java Heap",
            "It replaces the Permanent Generation (PermGen) and uses native memory",
            "It has a fixed maximum size that cannot be changed",
            "It stores string literals"
        ],
        answer: 1,
        explanation: "Java 8 removed PermGen and introduced Metaspace. Unlike PermGen, Metaspace uses native memory (outside the Java Heap) and can grow dynamically (up to native memory limits), preventing `OutOfMemoryError: PermGen`.",
        difficulty: "Hard",
        topic: "Memory Management"
    },
    {
        id: "java-268",
        question: "What is the output of `System.out.println(\"\".split(\",\").length);`?",
        options: [
            "0",
            "1",
            "ArrayIndexOutOfBoundsException",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "Unlike some other languages, if an empty string is split, Java's `split()` returns an array containing one element: an empty string `\"\"`. Therefore, the length is 1.",
        difficulty: "Hard",
        topic: "String"
    },
    {
        id: "java-269",
        question: "What is the output of `System.out.println(\",\".split(\",\").length);`?",
        options: [
            "0",
            "1",
            "2",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "If a string consists of a single delimiter and nothing else, `split()` returns an empty array (length 0) because there are no tokens between delimiters.",
        difficulty: "Hard",
        topic: "String"
    },
    {
        id: "java-270",
        question: "Which of the following is true about the `ForkJoinPool`?",
        options: [
            "It is designed for tasks that can be broken into smaller subtasks recursively (work-stealing)",
            "It is a thread pool strictly for I/O bound tasks",
            "It is identical to `newFixedThreadPool`",
            "It does not support recursion"
        ],
        answer: 0,
        explanation: "`ForkJoinPool` is designed for divide-and-conquer algorithms. It uses a work-stealing algorithm where idle threads 'steal' subtasks from busy threads, making it highly efficient for parallel processing of recursive tasks.",
        difficulty: "Hard",
        topic: "Executor Framework"
    },
    {
        id: "java-271",
        question: "What happens when you serialize an object that contains a reference to a non-serializable object without marking it `transient`?",
        options: [
            "The non-serializable object is set to null",
            "A `NotSerializableException` is thrown",
            "It serializes successfully",
            "The JVM automatically makes it serializable"
        ],
        answer: 1,
        explanation: "During serialization, if the object graph contains an object that does not implement `Serializable` and is not marked `transient`, a `java.io.NotSerializableException` is thrown.",
        difficulty: "Hard",
        topic: "Serialization"
    },
    {
        id: "java-272",
        question: "What is the role of `serialVersionUID` during deserialization?",
        options: [
            "It encrypts the serialized data",
            "It verifies that the sender and receiver of a serialized object have loaded classes compatible with respect to serialization",
            "It compresses the serialized object",
            "It defines the version of the JVM"
        ],
        answer: 1,
        explanation: "If `serialVersionUID` is not explicitly defined, the JVM calculates one based on class details. If the class is modified, the UID changes, causing `InvalidClassException` during deserialization. Defining it explicitly prevents this.",
        difficulty: "Hard",
        topic: "Serialization"
    },
    {
        id: "java-273",
        question: "What is the output of `System.out.println(Math.abs(Integer.MIN_VALUE));`?",
        options: [
            "2147483647",
            "-2147483648",
            "0",
            "ArithmeticException"
        ],
        answer: 1,
        explanation: "`Integer.MIN_VALUE` is -2147483648. The positive equivalent (2147483648) is too large to fit in a 32-bit signed integer (max is 2147483647). `Math.abs()` simply returns the same negative value due to overflow.",
        difficulty: "Hard",
        topic: "Wrapper Classes"
    },
    {
        id: "java-274",
        question: "Which of the following is true about `java.lang.instrument` package?",
        options: [
            "It is used for playing audio instruments",
            "It provides services to alter classes dynamically at runtime (bytecode instrumentation)",
            "It is used for unit testing",
            "It handles database connections"
        ],
        answer: 1,
        explanation: "The `instrument` package provides the ability to add bytecode to classes at runtime, typically used by profiling tools, APM agents (like New Relic, AppDynamics), and mocking frameworks.",
        difficulty: "Hard",
        topic: "JVM & Advanced Java Questions"
    },
    {
        id: "java-275",
        question: "What is the output of `System.out.println(new Object(){}.getClass().getEnclosingClass());`?",
        options: [
            "null",
            "Object",
            "java.lang.Class",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "`new Object(){}` creates an anonymous inner class. `getEnclosingClass()` returns the class in which this anonymous class was declared. Since it's declared inside the `main` method (or a static context without an enclosing instance), it returns `null`.",
        difficulty: "Hard",
        topic: "Anonymous Classes"
    },
    {
        id: "java-276",
        question: "What is the output of `System.out.println(Float.intBitsToFloat(0x7f800000));`?",
        options: [
            "NaN",
            "Infinity",
            "Max Float Value",
            "1.0"
        ],
        answer: 1,
        explanation: "The bit pattern `0x7f800000` (all 1s in the exponent, 0s in the mantissa) represents positive infinity in the IEEE 754 floating-point standard.",
        difficulty: "Hard",
        topic: "Data Types"
    },
    {
        id: "java-277",
        question: "Which of the following is true about `CyclicBarrier`?",
        options: [
            "It is used once and then discarded",
            "It allows a set of threads to all wait for each other to reach a common barrier point, and can be reused (optionally running a barrier action)",
            "It is a lock for a single thread",
            "It is identical to `CountDownLatch`"
        ],
        answer: 1,
        explanation: "Unlike `CountDownLatch` (which is one-shot), `CyclicBarrier` resets after threads are released, allowing it to be reused. It is useful for scenarios where threads need to synchronize repeatedly in iterations.",
        difficulty: "Hard",
        topic: "Multithreading"
    },
    {
        id: "java-278",
        question: "What is the output of `System.out.println(String.CASE_INSENSITIVE_ORDER.compare(\"a\", \"B\"));`?",
        options: [
            "1",
            "-1",
            "0",
            "Compilation Error"
        ],
        answer: 0,
        explanation: "`String.CASE_INSENSITIVE_ORDER` is a `Comparator` that ignores case. 'a' (ASCII 97) is considered greater than 'B' (ASCII 66) because 'a' comes after 'b' in the alphabet, regardless of case.",
        difficulty: "Hard",
        topic: "Comparator"
    },
    {
        id: "java-279",
        question: "Which of these correctly describes a memory leak in Java?",
        options: [
            "The JVM runs out of heap space because of a logical bug where unreachable objects are unintentionally held by active references",
            "Memory allocated by `malloc` in JNI is not freed",
            "The stack overflows due to deep recursion",
            "Both A and B are correct examples"
        ],
        answer: 3,
        explanation: "Memory leaks in Java typically occur when objects that are no longer needed are still referenced (e.g., in a static `Map` that is never cleared). Additionally, native memory leaks (JNI `malloc` without `free`) are common sources of memory leaks in Java applications.",
        difficulty: "Hard",
        topic: "Memory Management"
    },
    {
        id: "java-280",
        question: "What is the output of `System.out.println(Long.toBinaryString(-1L));`?",
        options: [
            "1",
            "-1",
            "A string of 64 '1's",
            "1111111111111111"
        ],
        answer: 2,
        explanation: "`-1L` is represented in two's complement as all 1s in a 64-bit long. `toBinaryString` returns the binary representation without leading zeros, but since all bits are 1, it prints 64 '1's.",
        difficulty: "Hard",
        topic: "Wrapper Classes"
    },
    {
        id: "java-281",
        question: "Which of the following is a valid use of the `@Target` annotation?",
        options: [
            "@Target({ElementType.FIELD, ElementType.METHOD})",
            "@Target(FIELD, METHOD)",
            "@Target(\"FIELD\")",
            "@Target(ElementType::FIELD)"
        ],
        answer: 0,
        explanation: "`@Target` takes an array of `ElementType` enums. The correct syntax is `@Target({ElementType.FIELD, ElementType.METHOD})` or `@Target(ElementType.FIELD)` for a single value.",
        difficulty: "Hard",
        topic: "Annotations"
    },
    {
        id: "java-282",
        question: "What is the output of `System.out.println(Math.nextUp(1.0f) == 1.0f + Float.MIN_VALUE);`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NaN"
        ],
        answer: 1,
        explanation: "`Float.MIN_VALUE` is the smallest positive value (approx 1.4E-45). Adding it to 1.0f results in a loss of precision, resulting back in 1.0f. `Math.nextUp(1.0f)` returns the next representable float greater than 1.0f (approx 1.0000001), so they are not equal.",
        difficulty: "Hard",
        topic: "Data Types"
    },
    {
        id: "java-283",
        question: "What is a `SoftReference` used for?",
        options: [
            "To prevent an object from being garbage collected under any circumstances",
            "To cache objects that should be kept as long as possible, but can be evicted if the JVM desperately needs memory",
            "To create weak references to static fields",
            "To queue objects before they are garbage collected"
        ],
        answer: 1,
        explanation: "Soft references are garbage collected only when the JVM is running low on memory. They are ideal for memory-sensitive caches.",
        difficulty: "Hard",
        topic: "Garbage Collection"
    },
    {
        id: "java-284",
        question: "Which of the following is true about the `java.util.WeakHashMap`?",
        options: [
            "Values are weakly referenced",
            "Keys are weakly referenced; entries are removed automatically when their keys are no longer strongly referenced",
            "It is a synchronized map",
            "It throws exceptions when keys are garbage collected"
        ],
        answer: 1,
        explanation: "`WeakHashMap` holds weak references to its keys. When a key is no longer referenced outside the map, the garbage collector can reclaim it, and the map entry is automatically removed.",
        difficulty: "Hard",
        topic: "HashMap"
    },
    {
        id: "java-285",
        question: "What is the output of `System.out.println(Runtime.version().feature());` (Java 9+)?",
        options: [
            "The full version string",
            "The major release version number (e.g., 17 for Java 17)",
            "The patch number",
            "Compilation Error"
        ],
        answer: 1,
        explanation: "`Runtime.version().feature()` returns the major version number of the running JDK according to the new version-string scheme introduced in Java 9.",
        difficulty: "Hard",
        topic: "JVM & Advanced Java Questions"
    },
    {
        id: "java-286",
        question: "What is the output of `System.out.println(\"\\u2022\".length());`?",
        options: [
            "1",
            "6",
            "2",
            "0"
        ],
        answer: 0,
        explanation: "`\\u2022` is a Unicode escape sequence representing a single character (the bullet character '•'). The Java compiler processes it before the string is created, resulting in a string of length 1.",
        difficulty: "Hard",
        topic: "String"
    },
    {
        id: "java-287",
        question: "Which of these is true about `ReentrantReadWriteLock`?",
        options: [
            "It allows multiple threads to acquire the write lock simultaneously",
            "It allows multiple threads to acquire the read lock simultaneously, but only one thread can hold the write lock",
            "It does not support downgrading from a write lock to a read lock",
            "Write locks have higher priority than read locks always"
        ],
        answer: 1,
        explanation: "A `ReentrantReadWriteLock` improves concurrency by allowing multiple concurrent readers, but writers are exclusive. It also supports lock downgrading (write to read) but not upgrading (read to write).",
        difficulty: "Hard",
        topic: "Multithreading"
    },
    {
        id: "java-288",
        question: "What is the output of `System.out.println(Integer.bitCount(7));`?",
        options: [
            "3",
            "7",
            "1",
            "2"
        ],
        answer: 0,
        explanation: "`bitCount()` returns the number of one-bits in the two's complement binary representation of the integer. 7 is `111` in binary, which has three 1-bits.",
        difficulty: "Hard",
        topic: "Wrapper Classes"
    },
    {
        id: "java-289",
        question: "Which of the following is true about the `java.lang.Module` system (Java 9+)?",
        options: [
            "It replaces the CLASSPATH completely and is required for all Java applications",
            "It groups packages into modules, defining explicit dependencies and encapsulation via `module-info.java`",
            "It is only used for Java standard libraries",
            "It prevents the use of third-party libraries"
        ],
        answer: 1,
        explanation: "The Java Platform Module System (JPMS) introduces `module-info.java` to declare module dependencies (`requires`) and exported packages (`exports`), enhancing encapsulation and reliability of large systems. The classpath is still supported for non-modular code.",
        difficulty: "Hard",
        topic: "Modules"
    },
    {
        id: "java-290",
        question: "What is the output of `System.out.println(Double.doubleToLongBits(Double.POSITIVE_INFINITY) == Double.doubleToLongBits(Double.MAX_VALUE));`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "ArithmeticException"
        ],
        answer: 1,
        explanation: "`Double.POSITIVE_INFINITY` and `Double.MAX_VALUE` have completely different IEEE 754 bit representations. Infinity has all 1s in the exponent and 0s in the mantissa, while MAX_VALUE has a specific exponent and all 1s in the mantissa.",
        difficulty: "Hard",
        topic: "Data Types"
    },
    {
        id: "java-291",
        question: "What is the output of `System.out.println(new StringBuilder(\"abc\").append(\"def\").delete(2, 4).toString());`?",
        options: [
            "abdef",
            "abef",
            "abcde",
            "abdef"
        ],
        answer: 1,
        explanation: "`append` makes it \"abcdef\". `delete(2, 4)` removes characters from index 2 (inclusive) to 4 (exclusive). Characters 'c' (index 2) and 'd' (index 3) are removed, leaving \"abef\".",
        difficulty: "Hard",
        topic: "StringBuilder"
    },
    {
        id: "java-292",
        question: "Which of the following is true about `CompletableFuture`?",
        options: [
            "It blocks the calling thread until the result is ready",
            "It provides a non-blocking, chainable API for asynchronous programming, supporting combinations and exception handling",
            "It can only be used with the ForkJoinPool",
            "It is a subclass of `Future` that adds no new methods"
        ],
        answer: 1,
        explanation: "`CompletableFuture` implements `Future` and adds an extensive fluent API (like `thenApply`, `thenAccept`, `exceptionally`) to compose asynchronous steps without blocking manually.",
        difficulty: "Hard",
        topic: "Multithreading"
    },
    {
        id: "java-293",
        question: "What is the output of `System.out.println(CharBuffer.wrap(\"Java\").slice().toString());`?",
        options: [
            "Java",
            "java.nio.HeapCharBuffer[pos=0 lim=4 cap=4]",
            "Compilation Error",
            "Empty string"
        ],
        answer: 1,
        explanation: "Calling `toString()` on a `CharBuffer` (and other NIO buffers) does not return the string content. It returns a string summarizing the buffer's state (position, limit, capacity). To get the string, you must use `buffer.toString()` if it's a wrapped string? No, `CharBuffer.toString()` returns the summary. To get content, use `new String(buffer.array())`.",
        difficulty: "Hard",
        topic: "File Handling"
    },
    {
        id: "java-294",
        question: "Which of the following is true about `java.lang.invoke.MethodHandle`?",
        options: [
            "It is a replacement for the Reflection API",
            "It provides a low-level mechanism for dynamic method invocation that can be faster than Reflection, and supports adapter transformations",
            "It is used to handle exceptions",
            "It is a type of lambda expression"
        ],
        answer: 1,
        explanation: "MethodHandles are part of the `java.lang.invoke` package. They are designed to be faster than standard Reflection (the JVM can optimize them aggressively via inlining) and support powerful combinators/adapters.",
        difficulty: "Hard",
        topic: "JVM & Advanced Java Questions"
    },
    {
        id: "java-295",
        question: "What is the output of `System.out.println(\"\\n\".isBlank());`?",
        options: [
            "true",
            "false",
            "Compilation Error",
            "NullPointerException"
        ],
        answer: 0,
        explanation: "`isBlank()` (Java 11+) returns true if the string is empty or contains only whitespace. A newline character `\\n` is considered whitespace.",
        difficulty: "Hard",
        topic: "Java 11 Features"
    },
    {
        id: "java-296",
        question: "Which of these is a valid way to implement a Singleton pattern that is thread-safe without using synchronization?",
        options: [
            "Public static final field initialized at declaration time",
            "Double-checked locking",
            "Initialization-on-demand holder idiom (using a static inner class)",
            "Both A and C are valid thread-safe approaches without synchronization"
        ],
        answer: 3,
        explanation: "The eager initialization (public static final field) is thread-safe because it is initialized during class loading. The Initialization-on-demand holder idiom is thread-safe because the JVM guarantees class initialization happens exactly once. Neither requires the `synchronized` keyword.",
        difficulty: "Hard",
        topic: "OOP Questions"
    }
   ]