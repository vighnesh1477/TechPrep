// Object-Oriented Programming (OOP) Questions

[
{
    id: "oops-1",
    question: "Which programming paradigm organizes software design around data, or objects, rather than functions and logic?",
    options: [
        "Procedural Programming",
        "Functional Programming",
        "Object-Oriented Programming",
        "Logic Programming"
    ],
    answer: 2,
    explanation: "OOP organizes software design around data or objects rather than functions and logic. It models real-world entities as objects with attributes and behaviors.",
    difficulty: "Easy",
    topic: "Programming Paradigms"
},
{
    id: "oops-2",
    question: "In procedural programming, the primary focus is on:",
    options: [
        "Objects and their interactions",
        "Functions and the sequence of their execution",
        "Class hierarchies and inheritance",
        "Data abstraction and encapsulation"
    ],
    answer: 1,
    explanation: "Procedural programming focuses on functions (procedures) and the sequence in which they are executed, with data being passed between functions.",
    difficulty: "Easy",
    topic: "Procedural Programming"
},
{
    id: "oops-3",
    question: "Which of the following is NOT a core principle of Object-Oriented Programming?",
    options: [
        "Encapsulation",
        "Inheritance",
        "Polymorphism",
        "Recursion"
    ],
    answer: 3,
    explanation: "Recursion is a programming technique where a function calls itself. The four core OOP principles are Encapsulation, Inheritance, Polymorphism, and Abstraction.",
    difficulty: "Easy",
    topic: "Features of OOP"
},
{
    id: "oops-4",
    question: "What is the primary advantage of Object-Oriented Programming over procedural programming?",
    options: [
        "Faster execution speed",
        "Better code reusability and maintainability",
        "Lower memory consumption",
        "Simpler syntax"
    ],
    answer: 1,
    explanation: "OOP provides better code reusability through inheritance and better maintainability through encapsulation and modularity, making it superior for large-scale applications.",
    difficulty: "Easy",
    topic: "Advantages of OOP"
},
{
    id: "oops-5",
    question: "A class is best described as:",
    options: [
        "An instance of an object",
        "A blueprint or template for creating objects",
        "A variable that holds data",
        "A function that performs operations"
    ],
    answer: 1,
    explanation: "A class is a blueprint or template that defines the structure (attributes) and behavior (methods) that its objects will have. It is not an instance itself.",
    difficulty: "Easy",
    topic: "Class"
},
{
    id: "oops-6",
    question: "An object is:",
    options: [
        "A template for creating classes",
        "A collection of functions only",
        "An instance of a class with its own state and behavior",
        "A primitive data type"
    ],
    answer: 2,
    explanation: "An object is a concrete instance of a class. It has its own state (attribute values) and can perform behaviors defined by the class methods.",
    difficulty: "Easy",
    topic: "Object"
},
{
    id: "oops-7",
    question: "What are attributes in OOP?",
    options: [
        "Functions defined inside a class",
        "Variables that hold the state of an object",
        "Constructors of a class",
        "Access specifiers"
    ],
    answer: 1,
    explanation: "Attributes (also called fields or data members) are variables that hold the state or data of an object. They define the properties of the object.",
    difficulty: "Easy",
    topic: "Attributes"
},
{
    id: "oops-8",
    question: "Methods in OOP are:",
    options: [
        "Variables declared inside a class",
        "Functions defined inside a class that operate on objects",
        "Constructors used to create objects",
        "Templates for creating classes"
    ],
    answer: 1,
    explanation: "Methods are functions defined inside a class that define the behavior of objects. They operate on the object's attributes and can interact with other objects.",
    difficulty: "Easy",
    topic: "Methods"
},
{
    id: "oops-9",
    question: "What is a constructor?",
    options: [
        "A method used to destroy an object",
        "A special method invoked automatically when an object is created",
        "A method that converts one data type to another",
        "A static method of a class"
    ],
    answer: 1,
    explanation: "A constructor is a special method that is automatically invoked when an object is created. It initializes the object's attributes and sets up its initial state.",
    difficulty: "Easy",
    topic: "Constructor"
},
{
    id: "oops-10",
    question: "A default constructor is one that:",
    options: [
        "Takes no parameters",
        "Takes all parameters as default values",
        "Is always provided by the compiler",
        "Both A and C"
    ],
    answer: 3,
    explanation: "A default constructor takes no parameters and is automatically provided by the compiler if no constructor is explicitly defined by the programmer.",
    difficulty: "Easy",
    topic: "Default Constructor"
},
{
    id: "oops-11",
    question: "What is the purpose of a parameterized constructor?",
    options: [
        "To destroy an object with specific parameters",
        "To initialize an object with user-provided values at creation time",
        "To create a copy of an existing object",
        "To define static members of a class"
    ],
    answer: 1,
    explanation: "A parameterized constructor accepts parameters to initialize an object's attributes with specific values provided at the time of object creation.",
    difficulty: "Easy",
    topic: "Parameterized Constructor"
},
{
    id: "oops-12",
    question: "The 'this' keyword in OOP refers to:",
    options: [
        "The class itself",
        "The current object that is invoking the method or constructor",
        "The parent class of the current object",
        "A static reference to all objects"
    ],
    answer: 1,
    explanation: "The 'this' keyword is a reference to the current object — the instance on which the method or constructor is being invoked. It helps distinguish between instance variables and parameters with the same name.",
    difficulty: "Easy",
    topic: "this Keyword"
},
{
    id: "oops-13",
    question: "Static members of a class belong to:",
    options: [
        "Each individual object",
        "The class itself, shared among all objects",
        "Only the first object created",
        "The constructor of the class"
    ],
    answer: 1,
    explanation: "Static members (variables and methods) belong to the class itself rather than to any specific object. They are shared among all instances of the class.",
    difficulty: "Easy",
    topic: "Static Members"
},
{
    id: "oops-14",
    question: "Which access specifier allows a member to be accessed from any other class?",
    options: [
        "private",
        "protected",
        "public",
        "default"
    ],
    answer: 2,
    explanation: "The 'public' access specifier makes a member accessible from any other class, regardless of the package or inheritance relationship.",
    difficulty: "Easy",
    topic: "public"
},
{
    id: "oops-15",
    question: "Which access specifier restricts a member to be accessible only within its own class?",
    options: [
        "public",
        "protected",
        "default",
        "private"
    ],
    answer: 3,
    explanation: "The 'private' access specifier is the most restrictive. A private member can only be accessed within the class in which it is declared, not even by subclasses.",
    difficulty: "Easy",
    topic: "private"
},
{
    id: "oops-16",
    question: "Encapsulation in OOP means:",
    options: [
        "Combining data and methods into a single unit and restricting direct access to internal details",
        "Inheriting properties from a parent class",
        "Allowing a method to take multiple forms",
        "Hiding the implementation of a class from other classes"
    ],
    answer: 0,
    explanation: "Encapsulation is the bundling of data (attributes) and methods that operate on that data into a single unit (class), while restricting direct access to some of the object's components.",
    difficulty: "Easy",
    topic: "Encapsulation"
},
{
    id: "oops-17",
    question: "Data hiding is achieved in OOP by:",
    options: [
        "Making all members public",
        "Using access specifiers (especially private) to restrict direct access to data",
        "Removing all methods from a class",
        "Using only static variables"
    ],
    answer: 1,
    explanation: "Data hiding is achieved by declaring data members as private and providing public getter and setter methods to access them, preventing unauthorized or inconsistent access.",
    difficulty: "Easy",
    topic: "Data Hiding"
},
{
    id: "oops-18",
    question: "Abstraction in OOP refers to:",
    options: [
        "Showing only the essential features and hiding the background details",
        "Combining two classes into one",
        "Creating multiple objects from a class",
        "Overriding methods in a subclass"
    ],
    answer: 0,
    explanation: "Abstraction is the concept of showing only the essential features of an object while hiding the unnecessary implementation details from the user.",
    difficulty: "Easy",
    topic: "Abstraction"
},
{
    id: "oops-19",
    question: "Which of the following is an example of abstraction in real life?",
    options: [
        "A car's steering wheel (you know how to steer but not the internal mechanism)",
        "A variable storing a number",
        "A loop iterating 10 times",
        "A function returning a value"
    ],
    answer: 0,
    explanation: "A car's steering wheel is a real-world abstraction: the driver knows how to use it to steer, but the complex internal mechanisms (gears, linkages) are hidden.",
    difficulty: "Easy",
    topic: "Abstraction"
},
{
    id: "oops-20",
    question: "Inheritance allows a class to:",
    options: [
        "Hide its data from other classes",
        "Acquire the properties and behaviors of another class",
        "Create multiple objects simultaneously",
        "Prevent method overriding"
    ],
    answer: 1,
    explanation: "Inheritance is a mechanism where a child class (subclass) acquires the properties (attributes) and behaviors (methods) of a parent class (superclass), promoting code reusability.",
    difficulty: "Easy",
    topic: "Inheritance"
},
{
    id: "oops-21",
    question: "In single inheritance, a subclass inherits from:",
    options: [
        "Multiple parent classes",
        "Exactly one parent class",
        "No parent class",
        "Itself"
    ],
    answer: 1,
    explanation: "In single inheritance, a subclass inherits from exactly one parent class. This creates a simple linear hierarchy.",
    difficulty: "Easy",
    topic: "Single Inheritance"
},
{
    id: "oops-22",
    question: "Multilevel inheritance involves:",
    options: [
        "One class inheriting from multiple classes",
        "A chain of inheritance where class B inherits from A, and C inherits from B",
        "Multiple classes inheriting from a single class",
        "A class inheriting from itself"
    ],
    answer: 1,
    explanation: "Multilevel inheritance creates a chain where a class inherits from a derived class, forming a multi-level hierarchy (e.g., Grandparent → Parent → Child).",
    difficulty: "Easy",
    topic: "Multilevel Inheritance"
},
{
    id: "oops-23",
    question: "Hierarchical inheritance occurs when:",
    options: [
        "One parent class is inherited by multiple child classes",
        "One child class inherits from multiple parent classes",
        "Classes are arranged in a linear chain",
        "A class inherits from a grandparent class directly"
    ],
    answer: 0,
    explanation: "In hierarchical inheritance, multiple child classes inherit from a single parent class, forming a tree-like structure.",
    difficulty: "Easy",
    topic: "Hierarchical Inheritance"
},
{
    id: "oops-24",
    question: "Polymorphism in OOP means:",
    options: [
        "Hiding data from the user",
        "The ability of an entity to take multiple forms",
        "Creating objects from a class",
        "Combining data and methods"
    ],
    answer: 1,
    explanation: "Polymorphism means 'many forms.' It allows an entity (method, operator, or object) to exhibit different behaviors in different contexts.",
    difficulty: "Easy",
    topic: "Polymorphism"
},
{
    id: "oops-25",
    question: "Method overloading is an example of:",
    options: [
        "Run-time polymorphism",
        "Compile-time polymorphism",
        "Inheritance",
        "Encapsulation"
    ],
    answer: 1,
    explanation: "Method overloading is compile-time (static) polymorphism because the compiler determines which method to call based on the method signature at compile time.",
    difficulty: "Easy",
    topic: "Method Overloading"
},
{
    id: "oops-26",
    question: "Method overriding is an example of:",
    options: [
        "Compile-time polymorphism",
        "Run-time polymorphism",
        "Data hiding",
        "Abstraction"
    ],
    answer: 1,
    explanation: "Method overriding is run-time (dynamic) polymorphism because the actual method to be executed is determined at runtime based on the object's actual type.",
    difficulty: "Easy",
    topic: "Method Overriding"
},
{
    id: "oops-27",
    question: "For method overloading, which of the following must differ?",
    options: [
        "Only the return type",
        "Only the access modifier",
        "The method signature (number or type of parameters)",
        "Only the method name"
    ],
    answer: 2,
    explanation: "Method overloading requires methods to have the same name but a different signature — meaning the number, type, or order of parameters must differ. Return type alone cannot differentiate overloaded methods.",
    difficulty: "Easy",
    topic: "Method Overloading"
},
{
    id: "oops-28",
    question: "An abstract class is one that:",
    options: [
        "Cannot have any methods",
        "Cannot be instantiated and may contain abstract methods",
        "Must have all methods implemented",
        "Cannot be inherited"
    ],
    answer: 1,
    explanation: "An abstract class cannot be instantiated directly. It may contain abstract methods (without implementation) and is designed to be extended by subclasses that provide concrete implementations.",
    difficulty: "Easy",
    topic: "Abstract Class"
},
{
    id: "oops-29",
    question: "An interface in OOP is:",
    options: [
        "A class with a constructor",
        "A blueprint of a class that specifies method signatures without implementation",
        "A concrete class with all methods defined",
        "A type of variable"
    ],
    answer: 1,
    explanation: "An interface is a contract that specifies method signatures (and possibly constants) without providing implementation. Classes that implement the interface must provide concrete implementations for all its methods.",
    difficulty: "Easy",
    topic: "Interface"
},
{
    id: "oops-30",
    question: "Which relationship represents a 'has-a' relationship in OOP?",
    options: [
        "Inheritance",
        "Composition",
        "Polymorphism",
        "Abstraction"
    ],
    answer: 1,
    explanation: "Composition represents a 'has-a' relationship where one class contains an object of another class. For example, a Car 'has a' Engine.",
    difficulty: "Easy",
    topic: "Composition"
},
{
    id: "oops-31",
    question: "Which relationship represents an 'is-a' relationship in OOP?",
    options: [
        "Composition",
        "Aggregation",
        "Inheritance",
        "Dependency"
    ],
    answer: 2,
    explanation: "Inheritance represents an 'is-a' relationship. For example, a Dog 'is a' Animal. This is the fundamental relationship modeled by inheritance.",
    difficulty: "Easy",
    topic: "Inheritance"
},
{
    id: "oops-32",
    question: "What is the difference between association and aggregation?",
    options: [
        "Association is a 'has-a' relationship; aggregation is an 'is-a' relationship",
        "Association is any relationship between objects; aggregation is a specialized 'has-a' with a whole-part relationship",
        "There is no difference",
        "Aggregation is stronger than composition"
    ],
    answer: 1,
    explanation: "Association is a general relationship between objects. Aggregation is a specialized form of association representing a whole-part relationship where parts can exist independently of the whole.",
    difficulty: "Easy",
    topic: "Association"
},
{
    id: "oops-33",
    question: "Coupling in OOP refers to:",
    options: [
        "How closely related the responsibilities of a single module are",
        "The degree of interdependence between modules or classes",
        "The number of methods in a class",
        "The number of attributes in an object"
    ],
    answer: 1,
    explanation: "Coupling measures the degree of interdependence between modules or classes. Low coupling is desirable as it makes the system more maintainable and modular.",
    difficulty: "Easy",
    topic: "Coupling"
},
{
    id: "oops-34",
    question: "Cohesion in OOP refers to:",
    options: [
        "The degree to which elements of a module belong together and serve a single purpose",
        "The interdependence between different modules",
        "The number of classes in a package",
        "The depth of inheritance hierarchy"
    ],
    answer: 0,
    explanation: "Cohesion measures how focused a module or class is on a single responsibility. High cohesion is desirable as it makes the code easier to understand and maintain.",
    difficulty: "Easy",
    topic: "Cohesion"
},
{
    id: "oops-35",
    question: "Which of the following is true about good OOP design?",
    options: [
        "High coupling and low cohesion are preferred",
        "Low coupling and high cohesion are preferred",
        "High coupling and high cohesion are preferred",
        "Low coupling and low cohesion are preferred"
    ],
    answer: 1,
    explanation: "Good OOP design aims for low coupling (modules are independent) and high cohesion (each module has a focused, single responsibility), making the system more maintainable and scalable.",
    difficulty: "Easy",
    topic: "Coupling"
},
{
    id: "oops-36",
    question: "The Single Responsibility Principle states that:",
    options: [
        "A class should have only one method",
        "A class should have only one reason to change",
        "A class should inherit from only one parent",
        "A class should create only one object"
    ],
    answer: 1,
    explanation: "The Single Responsibility Principle (SRP) states that a class should have only one reason to change, meaning it should have a single, well-defined responsibility.",
    difficulty: "Easy",
    topic: "Single Responsibility Principle"
},
{
    id: "oops-37",
    question: "The Open-Closed Principle states that:",
    options: [
        "Classes should be open for modification but closed for extension",
        "Classes should be open for extension but closed for modification",
        "All classes should be abstract",
        "All methods should be public"
    ],
    answer: 1,
    explanation: "The Open-Closed Principle (OCP) states that software entities should be open for extension (you can add new functionality) but closed for modification (you shouldn't change existing code).",
    difficulty: "Easy",
    topic: "Open Closed Principle"
},
{
    id: "oops-38",
    question: "The Liskov Substitution Principle requires that:",
    options: [
        "A subclass must add new methods to the parent class",
        "Objects of a superclass should be replaceable with objects of a subclass without altering program correctness",
        "A subclass must override all parent methods",
        "A subclass cannot have additional attributes"
    ],
    answer: 1,
    explanation: "The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of a subclass without breaking the program's correctness.",
    difficulty: "Easy",
    topic: "Liskov Substitution Principle"
},
{
    id: "oops-39",
    question: "The Interface Segregation Principle states that:",
    options: [
        "A class should implement only one interface",
        "Clients should not be forced to depend on methods they do not use; prefer many small, specific interfaces",
        "Interfaces should have no methods",
        "All interfaces should be combined into one large interface"
    ],
    answer: 1,
    explanation: "The Interface Segregation Principle (ISP) states that no client should be forced to depend on methods it doesn't use. It's better to have many small, focused interfaces than one large, general-purpose interface.",
    difficulty: "Easy",
    topic: "Interface Segregation Principle"
},
{
    id: "oops-40",
    question: "The Dependency Inversion Principle states that:",
    options: [
        "High-level modules should depend on low-level modules directly",
        "High-level modules should not depend on low-level modules; both should depend on abstractions",
        "Low-level modules should not exist",
        "Dependencies should always be concrete classes"
    ],
    answer: 1,
    explanation: "The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces or abstract classes).",
    difficulty: "Easy",
    topic: "Dependency Inversion Principle"
},
{
    id: "oops-41",
    question: "A destructor is used to:",
    options: [
        "Initialize an object",
        "Release resources and clean up when an object is destroyed",
        "Create a copy of an object",
        "Override a method"
    ],
    answer: 1,
    explanation: "A destructor is a special method called automatically when an object goes out of scope or is explicitly deleted. It is used to release resources like memory, file handles, or database connections.",
    difficulty: "Easy",
    topic: "Destructor"
},
{
    id: "oops-42",
    question: "Where are object references typically stored in memory?",
    options: [
        "Heap",
        "Stack",
        "Code segment",
        "Data segment"
    ],
    answer: 1,
    explanation: "Object references (variables holding the address of objects) are typically stored on the stack, while the actual objects themselves are allocated on the heap.",
    difficulty: "Easy",
    topic: "Stack vs Heap"
},
{
    id: "oops-43",
    question: "Where are actual objects typically allocated in memory?",
    options: [
        "Stack",
        "Heap",
        "Register",
        "Cache"
    ],
    answer: 1,
    explanation: "Actual objects are typically allocated on the heap because their size may not be known at compile time and they need to persist beyond the scope of a single function call.",
    difficulty: "Easy",
    topic: "Stack vs Heap"
},
{
    id: "oops-44",
    question: "What is garbage collection in the context of OOP?",
    options: [
        "A manual process of deleting objects",
        "An automatic process of reclaiming memory occupied by objects that are no longer in use",
        "A method to compress object data",
        "A technique to create multiple objects"
    ],
    answer: 1,
    explanation: "Garbage collection is an automatic memory management process that identifies and reclaims memory occupied by objects that are no longer referenced by the program, preventing memory leaks.",
    difficulty: "Easy",
    topic: "Garbage Collection (Concept)"
},
{
    id: "oops-45",
    question: "What is the object lifecycle in OOP?",
    options: [
        "Only creation of an object",
        "Creation, usage, and destruction of an object",
        "Only destruction of an object",
        "Compilation of a class"
    ],
    answer: 1,
    explanation: "The object lifecycle consists of three phases: creation (allocation and initialization via constructor), usage (interacting with the object), and destruction (cleanup via destructor or garbage collection).",
    difficulty: "Easy",
    topic: "Object Lifecycle"
},
{
    id: "oops-46",
    question: "Message passing in OOP refers to:",
    options: [
        "Sending emails between objects",
        "The process of invoking a method on an object (sending a message to the object to perform an action)",
        "Passing parameters to a constructor only",
        "Inheriting methods from a parent class"
    ],
    answer: 1,
    explanation: "Message passing in OOP means invoking a method on an object. When object A calls a method on object B, we say A is sending a message to B requesting it to perform an action.",
    difficulty: "Easy",
    topic: "Message Passing"
},
{
    id: "oops-47",
    question: "A shallow copy of an object:",
    options: [
        "Creates a completely independent duplicate with all nested objects also copied",
        "Copies the object's primitive fields but shares references to nested objects",
        "Does not copy any fields",
        "Only copies static members"
    ],
    answer: 1,
    explanation: "A shallow copy duplicates the object's primitive fields but copies references to nested objects. This means changes to nested objects in the copy affect the original and vice versa.",
    difficulty: "Easy",
    topic: "Shallow Copy"
},
{
    id: "oops-48",
    question: "A deep copy of an object:",
    options: [
        "Copies only primitive fields",
        "Shares references to nested objects with the original",
        "Creates a completely independent duplicate where nested objects are also duplicated",
        "Only copies the object's class name"
    ],
    answer: 2,
    explanation: "A deep copy creates a fully independent duplicate of an object, including all nested objects. Changes to the deep copy do not affect the original object in any way.",
    difficulty: "Easy",
    topic: "Deep Copy"
},
{
    id: "oops-49",
    question: "An immutable object is one that:",
    options: [
        "Cannot be created",
        "Cannot be modified after it is created",
        "Has no methods",
        "Has no attributes"
    ],
    answer: 1,
    explanation: "An immutable object's state cannot be modified after it is created. Any operation that appears to modify it actually returns a new object with the modified state (e.g., String in Java).",
    difficulty: "Easy",
    topic: "Immutability"
},
{
    id: "oops-50",
    question: "Which of the following is a characteristic of an immutable class?",
    options: [
        "All methods are public",
        "The class has a public setter for every attribute",
        "The class is declared final, fields are private and final, and there are no setters",
        "The class has no constructors"
    ],
    answer: 2,
    explanation: "An immutable class is typically declared final, has private final fields, no setter methods, and provides no way to modify its state after construction.",
    difficulty: "Easy",
    topic: "Immutability"
},
{
    id: "oops-51",
    question: "The Singleton design pattern ensures that:",
    options: [
        "A class can have exactly two instances",
        "A class has only one instance and provides a global point of access to it",
        "Objects cannot be created from a class",
        "All methods are static"
    ],
    answer: 1,
    explanation: "The Singleton pattern restricts a class to having only one instance and provides a global access point to that instance. It is used when exactly one object is needed to coordinate actions across a system.",
    difficulty: "Easy",
    topic: "Singleton"
},
{
    id: "oops-52",
    question: "The Factory design pattern is used to:",
    options: [
        "Destroy objects when they are no longer needed",
        "Create objects without exposing the instantiation logic to the client",
        "Ensure only one object exists",
        "Copy existing objects"
    ],
    answer: 1,
    explanation: "The Factory pattern provides an interface for creating objects without specifying their exact classes. It encapsulates object creation logic, making the system more flexible and decoupled.",
    difficulty: "Easy",
    topic: "Factory"
},
{
    id: "oops-53",
    question: "The Observer design pattern is used to:",
    options: [
        "Create a single object",
        "Define a one-to-many dependency so that when one object changes state, all its dependents are notified",
        "Build complex objects step by step",
        "Separate data from presentation"
    ],
    answer: 1,
    explanation: "The Observer pattern defines a one-to-many relationship: when one object (subject) changes state, all registered observers are automatically notified and updated.",
    difficulty: "Easy",
    topic: "Observer"
},
{
    id: "oops-54",
    question: "The Builder design pattern is used to:",
    options: [
        "Create objects without specifying their classes",
        "Construct a complex object step by step, allowing different representations",
        "Ensure a class has only one instance",
        "Notify dependent objects of state changes"
    ],
    answer: 1,
    explanation: "The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different representations.",
    difficulty: "Easy",
    topic: "Builder"
},
{
    id: "oops-55",
    question: "The MVC (Model-View-Controller) pattern separates an application into:",
    options: [
        "Database, Server, and Client",
        "Data (Model), Presentation (View), and Logic (Controller)",
        "Input, Processing, and Output",
        "Class, Object, and Method"
    ],
    answer: 1,
    explanation: "MVC separates an application into three components: Model (data and business logic), View (presentation/UI), and Controller (handles input and updates model/view).",
    difficulty: "Easy",
    topic: "MVC"
},
{
    id: "oops-56",
    question: "What is a final class in OOP?",
    options: [
        "A class that has no methods",
        "A class that cannot be inherited (subclassed)",
        "A class that is the last in a chain of inheritance",
        "A class with only a destructor"
    ],
    answer: 1,
    explanation: "A final class (in Java-like languages) cannot be subclassed. It prevents inheritance to maintain the integrity of the class's implementation.",
    difficulty: "Easy",
    topic: "Final Class"
},
{
    id: "oops-57",
    question: "What is a final method?",
    options: [
        "A method that is called last in execution",
        "A method that cannot be overridden by subclasses",
        "A method with no return type",
        "A method that destroys an object"
    ],
    answer: 1,
    explanation: "A final method cannot be overridden by any subclass. This is used when the method's implementation should remain unchanged in the inheritance hierarchy.",
    difficulty: "Easy",
    topic: "Final Method"
},
{
    id: "oops-58",
    question: "What is a final variable?",
    options: [
        "A variable that is destroyed first",
        "A variable whose value cannot be changed once assigned (constant)",
        "A variable that is always public",
        "A variable that has no type"
    ],
    answer: 1,
    explanation: "A final variable can only be assigned once. After initialization, its value cannot be changed, making it effectively a constant.",
    difficulty: "Easy",
    topic: "Final Variable"
},
{
    id: "oops-59",
    question: "A nested class is a class that:",
    options: [
        "Is defined inside another class",
        "Inherits from multiple classes",
        "Has no parent class",
        "Is defined without any methods"
    ],
    answer: 0,
    explanation: "A nested class (or inner class) is a class defined inside another class. It can access the members of its enclosing class and is used to logically group related classes.",
    difficulty: "Easy",
    topic: "Nested Classes"
},
{
    id: "oops-60",
    question: "An anonymous class is one that:",
    options: [
        "Has no name and is instantiated at the point of declaration",
        "Has no methods",
        "Cannot be instantiated",
        "Has no attributes"
    ],
    answer: 0,
    explanation: "An anonymous class is a class without a name that is declared and instantiated in a single expression. It is typically used for one-time implementations of interfaces or abstract classes.",
    difficulty: "Easy",
    topic: "Anonymous Classes"
},
{
    id: "oops-61",
    question: "The toString() method in the Object class is used to:",
    options: [
        "Compare two objects for equality",
        "Return a string representation of the object",
        "Calculate the hash code of the object",
        "Create a copy of the object"
    ],
    answer: 1,
    explanation: "The toString() method returns a string representation of the object. By default, it returns the class name followed by '@' and the hash code in hexadecimal, but it is commonly overridden.",
    difficulty: "Easy",
    topic: "toString()"
},
{
    id: "oops-62",
    question: "The equals() method in the Object class is used to:",
    options: [
        "Check if two references point to the same object by default",
        "Assign one object to another",
        "Delete an object",
        "Clone an object"
    ],
    answer: 0,
    explanation: "The default equals() method in the Object class checks reference equality (whether two references point to the same object). It is typically overridden to compare the actual content of objects.",
    difficulty: "Easy",
    topic: "equals()"
},
{
    id: "oops-63",
    question: "The hashCode() method returns:",
    options: [
        "The memory address of the object",
        "An integer value used for efficient storage in hash-based collections",
        "The number of methods in the object",
        "The number of attributes in the object"
    ],
    answer: 1,
    explanation: "hashCode() returns an integer value that helps in efficiently storing and retrieving objects in hash-based collections like HashMap and HashSet. It should be consistent with equals().",
    difficulty: "Easy",
    topic: "hashCode()"
},
{
    id: "oops-64",
    question: "The clone() method is used to:",
    options: [
        "Delete an object",
        "Create and return a copy of an object",
        "Compare two objects",
        "Serialize an object"
    ],
    answer: 1,
    explanation: "The clone() method creates and returns a copy of an object. By default, it performs a shallow copy, but it can be overridden to perform a deep copy.",
    difficulty: "Easy",
    topic: "Clone()"
},
{
    id: "oops-65",
    question: "What is a package or namespace in OOP?",
    options: [
        "A type of class",
        "A way to group related classes and interfaces to organize code and prevent naming conflicts",
        "A method for creating objects",
        "An access specifier"
    ],
    answer: 1,
    explanation: "Packages (Java) or namespaces (C++) group related classes, interfaces, and sub-packages together. They help organize code, prevent naming conflicts, and provide access control.",
    difficulty: "Easy",
    topic: "Packages"
},
{
    id: "oops-66",
    question: "What is an abstract method?",
    options: [
        "A method with a body but no name",
        "A method declared without an implementation (no body) that must be overridden by subclasses",
        "A static method with no parameters",
        "A private method"
    ],
    answer: 1,
    explanation: "An abstract method is declared without a body (just the signature) in an abstract class or interface. Subclasses must provide a concrete implementation for it.",
    difficulty: "Easy",
    topic: "Abstract Methods"
},
{
    id: "oops-67",
    question: "What is a virtual function?",
    options: [
        "A function that exists only in virtual memory",
        "A function declared in a base class that can be overridden in derived classes to achieve runtime polymorphism",
        "A function that cannot be called",
        "A static function"
    ],
    answer: 1,
    explanation: "A virtual function is declared in a base class using the 'virtual' keyword (C++) and is intended to be overridden in derived classes. It enables runtime polymorphism through dynamic dispatch.",
    difficulty: "Easy",
    topic: "Virtual Functions"
},
{
    id: "oops-68",
    question: "A pure virtual function is one that:",
    options: [
        "Has a default implementation in the base class",
        "Is declared with no implementation (= 0 in C++) and makes the class abstract",
        "Can only be called from a static context",
        "Cannot be overridden"
    ],
    answer: 1,
    explanation: "A pure virtual function (declared with '= 0' in C++) has no implementation in the base class and makes the class abstract. Derived classes must provide an implementation.",
    difficulty: "Easy",
    topic: "Pure Virtual Functions"
},
{
    id: "oops-69",
    question: "Exception handling in OOP involves:",
    options: [
        "Ignoring all runtime errors",
        "Using try-catch-finally blocks to gracefully handle runtime errors without crashing",
        "Only using if-else statements for error checking",
        "Terminating the program immediately on any error"
    ],
    answer: 1,
    explanation: "Exception handling in OOP uses try-catch-finally blocks to detect, handle, and recover from runtime errors gracefully, improving program robustness without abrupt termination.",
    difficulty: "Easy",
    topic: "Exception Handling (OOP Perspective)"
},
{
    id: "oops-70",
    question: "Which OOP concept is demonstrated when a user interacts with a mobile phone's touchscreen without knowing the internal circuitry?",
    options: [
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Coupling"
    ],
    answer: 2,
    explanation: "This is an example of abstraction. The user knows how to use the touchscreen (interface) but doesn't need to know the internal circuitry and signal processing (implementation details).",
    difficulty: "Easy",
    topic: "Abstraction"
},
{
    id: "oops-71",
    question: "Which OOP concept is demonstrated when a 'Vehicle' class is a parent of 'Car', 'Bike', and 'Truck' classes?",
    options: [
        "Encapsulation",
        "Hierarchical Inheritance",
        "Polymorphism",
        "Composition"
    ],
    answer: 1,
    explanation: "This is hierarchical inheritance where multiple child classes (Car, Bike, Truck) inherit from a single parent class (Vehicle), forming a tree-like hierarchy.",
    difficulty: "Easy",
    topic: "Hierarchical Inheritance"
},
{
    id: "oops-72",
    question: "A student management system has a Student class with private attributes and public getter/setter methods. Which OOP concept is used?",
    options: [
        "Inheritance",
        "Encapsulation",
        "Polymorphism",
        "Abstraction"
    ],
    answer: 1,
    explanation: "Making attributes private and providing public getter/setter methods is encapsulation. It protects the internal data from unauthorized access while providing a controlled interface.",
    difficulty: "Easy",
    topic: "Encapsulation"
},
{
    id: "oops-73",
    question: "In a drawing application, a Shape class has a draw() method, and Circle, Rectangle, and Triangle override draw() differently. Which concept is demonstrated?",
    options: [
        "Encapsulation",
        "Method Overriding (Runtime Polymorphism)",
        "Method Overloading",
        "Data Hiding"
    ],
    answer: 1,
    explanation: "Each subclass overrides the draw() method with its own implementation. At runtime, the correct draw() method is called based on the actual object type — this is runtime polymorphism through method overriding.",
    difficulty: "Easy",
    topic: "Method Overriding"
},
{
    id: "oops-74",
    question: "Which of the following best describes the 'protected' access specifier?",
    options: [
        "Accessible from any class",
        "Accessible only within its own class",
        "Accessible within its own class and by subclasses",
        "Accessible only within the same package"
    ],
    answer: 2,
    explanation: "The 'protected' access specifier allows members to be accessed within their own class and by subclasses (even in different packages), but not by unrelated classes.",
    difficulty: "Easy",
    topic: "protected"
},
{
    id: "oops-75",
    question: "The 'default' access specifier (no modifier) in Java allows access:",
    options: [
        "From any class in any package",
        "Only within the same class",
        "Only within the same package",
        "Only within subclasses"
    ],
    answer: 2,
    explanation: "When no access specifier is used (default/package-private), the member is accessible only within classes in the same package. It is not accessible from other packages, even by subclasses.",
    difficulty: "Easy",
    topic: "default"
},
{
    id: "oops-76",
    question: "What is multiple inheritance?",
    options: [
        "A class inheriting from one parent class multiple times",
        "A class inheriting from more than one parent class simultaneously",
        "Multiple classes inheriting from one parent class",
        "A chain of classes inheriting from each other"
    ],
    answer: 1,
    explanation: "Multiple inheritance occurs when a class inherits from more than one parent class simultaneously. It is supported in C++ but not directly in Java (which uses interfaces instead).",
    difficulty: "Easy",
    topic: "Multiple Inheritance"
},
{
    id: "oops-77",
    question: "Why does Java not support multiple inheritance with classes?",
    options: [
        "Because it is not useful",
        "Because of the diamond problem (ambiguity when two parent classes have the same method)",
        "Because Java does not support inheritance at all",
        "Because it would make compilation slower"
    ],
    answer: 1,
    explanation: "Java avoids multiple inheritance with classes due to the diamond problem: if two parent classes define the same method, it creates ambiguity about which version the child class should inherit.",
    difficulty: "Easy",
    topic: "Multiple Inheritance"
},
{
    id: "oops-78",
    question: "Hybrid inheritance is a combination of:",
    options: [
        "Only single and multilevel inheritance",
        "Two or more types of inheritance (e.g., hierarchical and multilevel)",
        "Only multiple inheritance",
        "Only hierarchical inheritance"
    ],
    answer: 1,
    explanation: "Hybrid inheritance combines two or more types of inheritance. For example, a mix of multilevel and hierarchical inheritance in a single class hierarchy.",
    difficulty: "Easy",
    topic: "Hybrid Inheritance"
},
{
    id: "oops-79",
    question: "Which of the following is true about a copy constructor?",
    options: [
        "It takes no arguments",
        "It takes an object of the same class as a parameter and creates a new object as a copy",
        "It is used only for static objects",
        "It cannot be defined by the programmer"
    ],
    answer: 1,
    explanation: "A copy constructor takes an object of the same class as a parameter and initializes a new object as a copy of the passed object. It is used to create duplicates of existing objects.",
    difficulty: "Easy",
    topic: "Copy Constructor (Concept)"
},
{
    id: "oops-80",
    question: "What is a friend function?",
    options: [
        "A function that is a member of a class",
        "A non-member function that is granted access to the private and protected members of a class",
        "A static function of a class",
        "A virtual function"
    ],
    answer: 1,
    explanation: "A friend function (C++) is not a member of a class but is granted access to its private and protected members. It is declared with the 'friend' keyword inside the class.",
    difficulty: "Easy",
    topic: "Friend Function"
},
{
    id: "oops-81",
    question: "What is a friend class?",
    options: [
        "A class that inherits from another class",
        "A class whose all member functions are granted access to the private and protected members of another class",
        "A class that is defined inside another class",
        "A class with only static members"
    ],
    answer: 1,
    explanation: "A friend class is a class whose all member functions have access to the private and protected members of the class that declares it as a friend.",
    difficulty: "Easy",
    topic: "Friend Class"
},
{
    id: "oops-82",
    question: "Dependency between two classes means:",
    options: [
        "One class is a subtype of another",
        "One class uses another class temporarily, typically as a method parameter or local variable",
        "One class contains an object of another class permanently",
        "Two classes share the same static members"
    ],
    answer: 1,
    explanation: "Dependency is the weakest relationship where one class temporarily uses another, such as when a class is passed as a method parameter or used as a local variable. Changes to the dependent class may affect the other.",
    difficulty: "Easy",
    topic: "Dependency"
},
{
    id: "oops-83",
    question: "Aggregation differs from composition because:",
    options: [
        "Aggregation is stronger than composition",
        "In aggregation, the part can exist independently of the whole; in composition, it cannot",
        "Composition allows multiple parts; aggregation does not",
        "There is no difference"
    ],
    answer: 1,
    explanation: "In aggregation (weak 'has-a'), the part can exist independently of the whole (e.g., a Department and a Teacher). In composition (strong 'has-a'), the part cannot exist without the whole (e.g., a House and a Room).",
    difficulty: "Easy",
    topic: "Aggregation"
},
{
    id: "oops-84",
    question: "Early binding (static binding) means:",
    options: [
        "The method to be called is determined at runtime",
        "The method to be called is determined at compile time",
        "The object is created at compile time",
        "The class is loaded at compile time"
    ],
    answer: 1,
    explanation: "Early binding (static binding) resolves the method call at compile time. It is used for static, private, and final methods, as well as overloaded methods, where the target method is known during compilation.",
    difficulty: "Easy",
    topic: "Early Binding"
},
{
    id: "oops-85",
    question: "Late binding (dynamic binding) means:",
    options: [
        "The method to be called is determined at compile time",
        "The method to be called is determined at runtime based on the actual object type",
        "The object is destroyed at runtime",
        "The class is compiled at runtime"
    ],
    answer: 1,
    explanation: "Late binding (dynamic binding) resolves the method call at runtime based on the actual type of the object, not the reference type. This is how overridden methods achieve runtime polymorphism.",
    difficulty: "Easy",
    topic: "Late Binding"
},
{
    id: "oops-86",
    question: "Dynamic binding is essential for:",
    options: [
        "Method overloading",
        "Method overriding and runtime polymorphism",
        "Encapsulation",
        "Data hiding"
    ],
    answer: 1,
    explanation: "Dynamic binding is essential for method overriding and runtime polymorphism because the actual method to execute is determined at runtime based on the object's actual type, not the reference type.",
    difficulty: "Easy",
    topic: "Dynamic Binding"
},
{
    id: "oops-87",
    question: "What is an inner class?",
    options: [
        "A class defined inside a method",
        "A non-static class defined inside another class, having access to the enclosing class's members",
        "A class that inherits from itself",
        "A class with no name"
    ],
    answer: 1,
    explanation: "An inner class is a non-static nested class defined inside another class. It has access to all members (including private) of its enclosing class and holds a reference to the enclosing instance.",
    difficulty: "Easy",
    topic: "Inner Classes"
},
{
    id: "oops-88",
    question: "Static methods can access:",
    options: [
        "Instance variables directly",
        "Other static methods and static variables directly",
        "The 'this' keyword",
        "Instance methods directly"
    ],
    answer: 1,
    explanation: "Static methods belong to the class, not to any instance. They can directly access other static methods and static variables, but cannot directly access instance members or use 'this'.",
    difficulty: "Easy",
    topic: "Static Methods"
},
{
    id: "oops-89",
    question: "Static variables are shared among:",
    options: [
        "No objects",
        "Only the first object created",
        "All objects of the class",
        "Only the last object created"
    ],
    answer: 2,
    explanation: "Static variables are shared among all instances of the class. There is only one copy of a static variable, regardless of how many objects are created from the class.",
    difficulty: "Easy",
    topic: "Static Variables"
},
{
    id: "oops-90",
    question: "Which of the following is NOT a benefit of OOP?",
    options: [
        "Code reusability through inheritance",
        "Data security through encapsulation",
        "Faster compilation compared to procedural programming",
        "Modularity through classes and objects"
    ],
    answer: 2,
    explanation: "OOP does not necessarily guarantee faster compilation. In fact, OOP code can sometimes be slower to compile due to features like inheritance, polymorphism, and dynamic binding. The main benefits are reusability, security, and modularity.",
    difficulty: "Easy",
    topic: "Advantages of OOP"
},
{
    id: "oops-91",
    question: "In a library management system, a 'Book' class has attributes like title, author, and ISBN, and methods like borrow() and returnBook(). This is an example of:",
    options: [
        "Procedural programming",
        "Object-Oriented Programming",
        "Assembly language programming",
        "Functional programming"
    ],
    answer: 1,
    explanation: "Modeling a real-world entity (Book) with its attributes (title, author, ISBN) and behaviors (borrow, returnBook) as a class is a classic example of OOP.",
    difficulty: "Easy",
    topic: "Real-world OOP Scenarios"
},
{
    id: "oops-92",
    question: "In an e-commerce system, an 'Order' class contains a list of 'Product' objects. This relationship is:",
    options: [
        "Inheritance",
        "Composition",
        "Abstraction",
        "Polymorphism"
    ],
    answer: 1,
    explanation: "An Order contains Products, and typically Products cannot exist meaningfully in the context of an Order without the Order. This is a composition relationship (strong has-a).",
    difficulty: "Easy",
    topic: "Composition"
},
{
    id: "oops-93",
    question: "Which of the following real-world scenarios best represents inheritance?",
    options: [
        "A car has an engine",
        "A student enrolls in a course",
        "A savings account is a type of bank account",
        "A teacher teaches a subject"
    ],
    answer: 2,
    explanation: "A savings account being a type of bank account represents an 'is-a' relationship, which is inheritance. The SavingsAccount class would inherit from the BankAccount class.",
    difficulty: "Easy",
    topic: "Inheritance"
},
{
    id: "oops-94",
    question: "A 'Calculator' class with methods add(int, int), add(float, float), and add(int, int, int) demonstrates:",
    options: [
        "Method overriding",
        "Method overloading",
        "Inheritance",
        "Encapsulation"
    ],
    answer: 1,
    explanation: "Having multiple methods with the same name but different parameter lists (different number or types of parameters) is method overloading, which is compile-time polymorphism.",
    difficulty: "Easy",
    topic: "Method Overloading"
},
{
    id: "oops-95",
    question: "Compile-time polymorphism is also known as:",
    options: [
        "Dynamic polymorphism",
        "Static polymorphism",
        "Runtime polymorphism",
        "Late binding"
    ],
    answer: 1,
    explanation: "Compile-time polymorphism is also called static polymorphism because the method to be called is resolved at compile time. Method overloading and operator overloading are examples.",
    difficulty: "Easy",
    topic: "Compile-Time Polymorphism"
},
{
    id: "oops-96",
    question: "Run-time polymorphism is also known as:",
    options: [
        "Static polymorphism",
        "Early binding",
        "Dynamic polymorphism",
        "Compile-time polymorphism"
    ],
    answer: 2,
    explanation: "Run-time polymorphism is also called dynamic polymorphism because the method to be executed is determined at runtime. Method overriding with virtual functions is the primary example.",
    difficulty: "Easy",
    topic: "Run-Time Polymorphism"
},
{
    id: "oops-97",
    question: "Which keyword is used in Java to refer to the immediate parent class constructor?",
    options: [
        "this",
        "super",
        "parent",
        "base"
    ],
    answer: 1,
    explanation: "The 'super' keyword in Java is used to refer to the immediate parent class's constructor or members. 'super()' calls the parent constructor, and 'super.method()' calls a parent method.",
    difficulty: "Easy",
    topic: "Constructor"
},
{
    id: "oops-98",
    question: "Which keyword is used in Java to prevent a class from being inherited?",
    options: [
        "static",
        "abstract",
        "final",
        "sealed"
    ],
    answer: 2,
    explanation: "The 'final' keyword in Java prevents a class from being inherited. When applied to a class, no subclass can extend it.",
    difficulty: "Easy",
    topic: "Final Class"
},
{
    id: "oops-99",
    question: "What happens if you try to instantiate an abstract class directly?",
    options: [
        "The object is created but cannot call methods",
        "A compilation error occurs",
        "A runtime error occurs",
        "The object is created successfully"
    ],
    answer: 1,
    explanation: "An abstract class cannot be instantiated directly. Attempting to do so results in a compilation error. You must create an instance of a concrete subclass instead.",
    difficulty: "Easy",
    topic: "Abstract Class"
},
{
    id: "oops-100",
    question: "Can an interface have a constructor?",
    options: [
        "Yes, it can have multiple constructors",
        "Yes, but only a default constructor",
        "No, interfaces cannot have constructors",
        "Yes, but only parameterized constructors"
    ],
    answer: 2,
    explanation: "Interfaces cannot have constructors because they cannot be instantiated directly and they don't have instance state that needs initialization. Only classes can have constructors.",
    difficulty: "Easy",
    topic: "Interface"
},
{
    id: "oops-101",
    question: "What is the purpose of a getter method?",
    options: [
        "To modify a private attribute",
        "To read the value of a private attribute",
        "To delete an object",
        "To create a new object"
    ],
    answer: 1,
    explanation: "A getter method (accessor) provides read-only access to a private attribute. It returns the value of the attribute without allowing direct modification from outside the class.",
    difficulty: "Easy",
    topic: "Encapsulation"
},
{
    id: "oops-102",
    question: "What is the purpose of a setter method?",
    options: [
        "To read the value of a private attribute",
        "To modify the value of a private attribute with controlled access",
        "To create a copy of the object",
        "To compare two objects"
    ],
    answer: 1,
    explanation: "A setter method (mutator) provides controlled write access to a private attribute. It can include validation logic before modifying the value, maintaining data integrity.",
    difficulty: "Easy",
    topic: "Encapsulation"
},
{
    id: "oops-103",
    question: "Which of the following is a real-world example of encapsulation?",
    options: [
        "A cat is an animal",
        "An ATM machine hides the internal processing and only exposes a user interface",
        "A student can be a boy or girl",
        "A vehicle can be a car or bike"
    ],
    answer: 1,
    explanation: "An ATM machine encapsulates the banking logic and database operations internally, exposing only a simple user interface (buttons and screen) to the user, who doesn't see the underlying complexity.",
    difficulty: "Easy",
    topic: "Encapsulation"
},
{
    id: "oops-104",
    question: "Object creation in OOP typically involves two steps:",
    options: [
        "Compilation and execution",
        "Memory allocation and initialization (construction)",
        "Linking and loading",
        "Parsing and tokenizing"
    ],
    answer: 1,
    explanation: "Object creation involves two steps: memory allocation (reserving space on the heap for the object) and initialization (setting initial values via the constructor).",
    difficulty: "Easy",
    topic: "Object Creation"
},
{
    id: "oops-105",
    question: "In OOP, what does the term 'instance' refer to?",
    options: [
        "The class definition itself",
        "A concrete realization of a class (an object)",
        "A method of a class",
        "A static variable"
    ],
    answer: 1,
    explanation: "An instance is a concrete realization of a class — in other words, an object. When you create an object from a class, you are creating an instance of that class.",
    difficulty: "Easy",
    topic: "Object"
},
{
    id: "oops-106",
    question: "What is the output of the following code?\n\nclass Test {\n    int x = 10;\n    void display() {\n        int x = 20;\n        System.out.println(x);\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.display();\n    }\n}",
    options: [
        "10",
        "20",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "The local variable x (value 20) inside the display() method shadows the instance variable x (value 10). The println(x) prints the local variable's value, which is 20.",
    difficulty: "Medium",
    topic: "this Keyword"
},
{
    id: "oops-107",
    question: "What is the output of the following code?\n\nclass Test {\n    int x = 10;\n    void display() {\n        int x = 20;\n        System.out.println(this.x);\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.display();\n    }\n}",
    options: [
        "10",
        "20",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "Using 'this.x' explicitly refers to the instance variable x (value 10), bypassing the local variable x (value 20). The 'this' keyword disambiguates between instance and local variables.",
    difficulty: "Medium",
    topic: "this Keyword"
},
{
    id: "oops-108",
    question: "What is the output of the following code?\n\nclass Animal {\n    void sound() {\n        System.out.println(\"Animal sound\");\n    }\n}\nclass Dog extends Animal {\n    void sound() {\n        System.out.println(\"Bark\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        a.sound();\n    }\n}",
    options: [
        "Animal sound",
        "Bark",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "This demonstrates runtime polymorphism. Although the reference type is Animal, the actual object is a Dog. The JVM calls Dog's sound() method at runtime (dynamic dispatch).",
    difficulty: "Medium",
    topic: "Run-Time Polymorphism"
},
{
    id: "oops-109",
    question: "What is the output of the following code?\n\nclass Base {\n    static void show() {\n        System.out.println(\"Base show\");\n    }\n}\nclass Derived extends Base {\n    static void show() {\n        System.out.println(\"Derived show\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Base b = new Derived();\n        b.show();\n    }\n}",
    options: [
        "Base show",
        "Derived show",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "Static methods are bound at compile time (early binding), not at runtime. Even though the object is a Derived instance, the reference type Base determines which static show() is called. This is method hiding, not overriding.",
    difficulty: "Medium",
    topic: "Static Methods"
},
{
    id: "oops-110",
    question: "What is the output of the following code?\n\nclass Parent {\n    public void display() {\n        System.out.println(\"Parent\");\n    }\n}\nclass Child extends Parent {\n    private void display() {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.display();\n    }\n}",
    options: [
        "Parent",
        "Child",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "This causes a compilation error because when overriding a method, the access specifier cannot be more restrictive. The parent's display() is public, but the child's is private, which is not allowed.",
    difficulty: "Medium",
    topic: "Method Overriding"
},
{
    id: "oops-111",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s1 = \"Hello\";\n        String s2 = \"Hello\";\n        String s3 = new String(\"Hello\");\n        System.out.println(s1 == s2);\n        System.out.println(s1 == s3);\n    }\n}",
    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 1,
    explanation: "s1 and s2 point to the same string pool object, so s1 == s2 is true. s3 is created with 'new', so it references a different heap object, making s1 == s3 false even though the content is the same.",
    difficulty: "Medium",
    topic: "Object Creation"
},
{
    id: "oops-112",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Integer a = 100;\n        Integer b = 100;\n        Integer c = 200;\n        Integer d = 200;\n        System.out.println(a == b);\n        System.out.println(c == d);\n    }\n}",
    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 1,
    explanation: "Integer caches values between -128 and 127. So a and b reference the same cached object (true). Values 200 are outside this range, so c and d reference different objects (false).",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-113",
    question: "What is the output of the following code?\n\nclass A {\n    A() {\n        System.out.print(\"A \");\n    }\n}\nclass B extends A {\n    B() {\n        System.out.print(\"B \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        B b = new B();\n    }\n}",
    options: [
        "A B",
        "B A",
        "A",
        "B"
    ],
    answer: 0,
    explanation: "When creating a B object, the parent constructor A() is called implicitly first (prints 'A '), then B()'s body executes (prints 'B '). Parent constructors always execute before child constructors.",
    difficulty: "Medium",
    topic: "Constructor"
},
{
    id: "oops-114",
    question: "What is the output of the following code?\n\nclass A {\n    A(int x) {\n        System.out.print(\"A \");\n    }\n}\nclass B extends A {\n    B() {\n        System.out.print(\"B \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        B b = new B();\n    }\n}",
    options: [
        "A B",
        "B A",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "This causes a compilation error because class A has no default constructor (only a parameterized one). Class B's constructor implicitly calls super(), but A doesn't have a no-arg constructor.",
    difficulty: "Medium",
    topic: "Constructor"
},
{
    id: "oops-115",
    question: "What is the output of the following code?\n\nclass Test {\n    static int count = 0;\n    int id;\n    Test() {\n        count++;\n        id = count;\n    }\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        Test t2 = new Test();\n        Test t3 = new Test();\n        System.out.println(t1.id + \" \" + t2.id + \" \" + t3.id);\n    }\n}",
    options: [
        "1 1 1",
        "1 2 3",
        "3 3 3",
        "0 0 0"
    ],
    answer: 1,
    explanation: "The static variable 'count' is shared across all instances and incremented each time a new Test object is created. So t1.id=1, t2.id=2, t3.id=3.",
    difficulty: "Medium",
    topic: "Static Variables"
},
{
    id: "oops-116",
    question: "What is the output of the following code?\n\nclass Animal {\n    Animal() {\n        System.out.print(\"Animal \");\n    }\n}\nclass Dog extends Animal {\n    Dog() {\n        super();\n        System.out.print(\"Dog \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Dog d = new Dog();\n    }\n}",
    options: [
        "Dog Animal",
        "Animal Dog",
        "Animal",
        "Compilation error"
    ],
    answer: 1,
    explanation: "super() explicitly calls the parent constructor, which runs first (prints 'Animal '), then the child constructor body executes (prints 'Dog '). This is the same as implicit super() call behavior.",
    difficulty: "Medium",
    topic: "Constructor"
},
{
    id: "oops-117",
    question: "What is the output of the following code?\n\nclass Test {\n    void show(int a) {\n        System.out.println(\"int\");\n    }\n    void show(long a) {\n        System.out.println(\"long\");\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.show(10);\n    }\n}",
    options: [
        "int",
        "long",
        "Compilation error",
        "Ambiguous method call error"
    ],
    answer: 0,
    explanation: "When calling show(10), the literal 10 is an int. The compiler chooses the most specific matching method. Since there's an exact match with show(int), it is chosen over show(long) which would require widening.",
    difficulty: "Medium",
    topic: "Method Overloading"
},
{
    id: "oops-118",
    question: "What is the output of the following code?\n\nclass Test {\n    void show(float a) {\n        System.out.println(\"float\");\n    }\n    void show(double a) {\n        System.out.println(\"double\");\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.show(10.5);\n    }\n}",
    options: [
        "float",
        "double",
        "Compilation error",
        "Ambiguous method call error"
    ],
    answer: 1,
    explanation: "The literal 10.5 is a double in Java. Since there's an exact match with show(double), it is chosen. If show(double) were absent, it would widen to float, but here no widening is needed.",
    difficulty: "Medium",
    topic: "Method Overloading"
},
{
    id: "oops-119",
    question: "What is the output of the following code?\n\nclass Parent {\n    void display() {\n        System.out.println(\"Parent display\");\n    }\n}\nclass Child extends Parent {\n    @Override\n    void display() {\n        super.display();\n        System.out.println(\"Child display\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Child c = new Child();\n        c.display();\n    }\n}",
    options: [
        "Parent display",
        "Child display",
        "Parent display\\nChild display",
        "Compilation error"
    ],
    answer: 2,
    explanation: "super.display() calls the parent's display() first (prints 'Parent display'), then the child's display() continues (prints 'Child display'). Both lines are printed in order.",
    difficulty: "Medium",
    topic: "Method Overriding"
},
{
    id: "oops-120",
    question: "What is the output of the following code?\n\nclass Test {\n    private int x = 10;\n    class Inner {\n        void display() {\n            System.out.println(x);\n        }\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        Test.Inner inner = t.new Inner();\n        inner.display();\n    }\n}",
    options: [
        "10",
        "0",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "The inner class can access the private member x of its enclosing class. An inner class instance is created using 't.new Inner()' and can read the enclosing object's private field x (value 10).",
    difficulty: "Medium",
    topic: "Inner Classes"
},
{
    id: "oops-121",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Object obj = new String(\"Hello\");\n        if (obj instanceof String) {\n            String s = (String) obj;\n            System.out.println(s.length());\n        }\n    }\n}",
    options: [
        "5",
        "Hello",
        "Compilation error",
        "ClassCastException"
    ],
    answer: 0,
    explanation: "The instanceof check confirms that obj is a String. After safe downcasting, s.length() returns 5, which is the length of 'Hello'. This demonstrates safe type casting with instanceof.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-122",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s1 = new String(\"Test\");\n        String s2 = new String(\"Test\");\n        System.out.println(s1.equals(s2));\n        System.out.println(s1 == s2);\n    }\n}",
    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 1,
    explanation: "s1.equals(s2) is true because String's equals() compares the actual content. s1 == s2 is false because 'new' creates separate objects on the heap with different references.",
    difficulty: "Medium",
    topic: "equals()"
},
{
    id: "oops-123",
    question: "What is the output of the following code?\n\nclass Student {\n    String name;\n    int rollNo;\n    Student(String name, int rollNo) {\n        this.name = name;\n        this.rollNo = rollNo;\n    }\n    public boolean equals(Object obj) {\n        if (this == obj) return true;\n        if (obj == null || getClass() != obj.getClass()) return false;\n        Student s = (Student) obj;\n        return rollNo == s.rollNo;\n    }\n    public int hashCode() {\n        return rollNo;\n    }\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Alice\", 101);\n        Student s2 = new Student(\"Bob\", 101);\n        System.out.println(s1.equals(s2));\n    }\n}",
    options: [
        "true",
        "false",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "The overridden equals() method compares only rollNo. Since both students have rollNo 101, s1.equals(s2) returns true even though their names differ. This shows custom equality logic.",
    difficulty: "Medium",
    topic: "equals()"
},
{
    id: "oops-124",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Integer a = 50;\n        Integer b = 50;\n        System.out.println(a == b);\n        System.out.println(a.equals(b));\n    }\n}",
    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 0,
    explanation: "Since 50 is within the Integer cache range (-128 to 127), a and b reference the same cached object, so a == b is true. a.equals(b) compares values and is also true.",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-125",
    question: "What is the output of the following code?\n\nclass A {\n    int i = 10;\n    A() {\n        print();\n    }\n    void print() {\n        System.out.println(i);\n    }\n}\nclass B extends A {\n    int i = 20;\n    B() {\n        super();\n        print();\n    }\n    void print() {\n        System.out.println(i);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        B b = new B();\n    }\n}",
    options: [
        "10 20",
        "0 20",
        "0 0",
        "10 10"
    ],
    answer: 1,
    explanation: "When A's constructor calls print(), B's overridden print() runs. At that point, B's i is not yet initialized (default 0). After B's initialization completes, i=20, so the second print() outputs 20.",
    difficulty: "Medium",
    topic: "Constructor"
},
{
    id: "oops-126",
    question: "What is the output of the following code?\n\nclass Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Singleton s1 = Singleton.getInstance();\n        Singleton s2 = Singleton.getInstance();\n        System.out.println(s1 == s2);\n    }\n}",
    options: [
        "true",
        "false",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "The Singleton pattern ensures only one instance exists. Both s1 and s2 get the same instance (created on the first call), so s1 == s2 is true — they reference the same object.",
    difficulty: "Medium",
    topic: "Singleton"
},
{
    id: "oops-127",
    question: "What is the output of the following code?\n\nclass Shape {\n    final void draw() {\n        System.out.println(\"Drawing shape\");\n    }\n}\nclass Circle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n}",
    options: [
        "Compilation error",
        "Drawing shape\\nDrawing circle",
        "Drawing circle",
        "Runtime error"
    ],
    answer: 0,
    explanation: "This causes a compilation error because a final method cannot be overridden. The draw() method in Shape is marked final, so Circle cannot provide its own implementation.",
    difficulty: "Medium",
    topic: "Final Method"
},
{
    id: "oops-128",
    question: "What is the output of the following code?\n\nfinal class MathUtil {\n    static int add(int a, int b) {\n        return a + b;\n    }\n}\nclass AdvancedMath extends MathUtil {\n    static int multiply(int a, int b) {\n        return a * b;\n    }\n}",
    options: [
        "Compilation error",
        "No output (compiles successfully)",
        "Runtime error",
        "0"
    ],
    answer: 0,
    explanation: "This causes a compilation error because MathUtil is declared final, meaning it cannot be extended. AdvancedMath tries to inherit from MathUtil, which is not allowed.",
    difficulty: "Medium",
    topic: "Final Class"
},
{
    id: "oops-129",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        final int[] arr = {1, 2, 3};\n        arr[0] = 10;\n        System.out.println(arr[0]);\n    }\n}",
    options: [
        "1",
        "10",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "Making an array reference final prevents reassigning the reference to a different array, but it does not prevent modifying the contents of the array. So arr[0] = 10 is valid and prints 10.",
    difficulty: "Medium",
    topic: "Final Variable"
},
{
    id: "oops-130",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        final int[] arr = {1, 2, 3};\n        arr = new int[]{4, 5, 6};\n        System.out.println(arr[0]);\n    }\n}",
    options: [
        "4",
        "1",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "This causes a compilation error because arr is declared final, meaning the reference cannot be reassigned to point to a new array. The final keyword prevents reassignment of the reference itself.",
    difficulty: "Medium",
    topic: "Final Variable"
},
{
    id: "oops-131",
    question: "What is the output of the following code?\n\ninterface Drawable {\n    void draw();\n}\ninterface Colorable {\n    void color();\n}\nclass Circle implements Drawable, Colorable {\n    public void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n    public void color() {\n        System.out.println(\"Coloring circle\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Circle c = new Circle();\n        c.draw();\n        c.color();\n    }\n}",
    options: [
        "Drawing circle\\nColoring circle",
        "Compilation error",
        "Drawing circle",
        "Coloring circle"
    ],
    answer: 0,
    explanation: "A class can implement multiple interfaces. Circle implements both Drawable and Colorable, providing implementations for both draw() and color(). Both methods execute correctly.",
    difficulty: "Medium",
    topic: "Interface"
},
{
    id: "oops-132",
    question: "What is the output of the following code?\n\ninterface A {\n    default void show() {\n        System.out.println(\"A\");\n    }\n}\ninterface B {\n    default void show() {\n        System.out.println(\"B\");\n    }\n}\nclass C implements A, B {\n}",
    options: [
        "A",
        "B",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "This causes a compilation error due to diamond problem with default methods. Both interfaces A and B provide a default implementation of show(), and the class C doesn't resolve the conflict by overriding it.",
    difficulty: "Medium",
    topic: "Interface"
},
{
    id: "oops-133",
    question: "What is the output of the following code?\n\ninterface A {\n    default void show() {\n        System.out.println(\"A\");\n    }\n}\ninterface B extends A {\n    default void show() {\n        System.out.println(\"B\");\n    }\n}\nclass C implements B {\n    public static void main(String[] args) {\n        new C().show();\n    }\n}",
    options: [
        "A",
        "B",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "Since B extends A and overrides show(), the most specific default method is B's show(). Class C inherits B's version, so 'B' is printed. No conflict exists because B's show() overrides A's.",
    difficulty: "Medium",
    topic: "Interface"
},
{
    id: "oops-134",
    question: "What is the output of the following code?\n\nabstract class Shape {\n    abstract void draw();\n    void display() {\n        System.out.println(\"This is a shape\");\n    }\n}\nclass Rectangle extends Shape {\n    void draw() {\n        System.out.println(\"Drawing rectangle\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Shape s = new Rectangle();\n        s.draw();\n        s.display();\n    }\n}",
    options: [
        "Drawing rectangle\\nThis is a shape",
        "Compilation error",
        "This is a shape\\nDrawing rectangle",
        "Runtime error"
    ],
    answer: 0,
    explanation: "Rectangle provides the concrete implementation of the abstract draw() method. The display() method is inherited from Shape. Both methods are called on the Shape reference pointing to a Rectangle object.",
    difficulty: "Medium",
    topic: "Abstract Class"
},
{
    id: "oops-135",
    question: "What is the output of the following code?\n\nabstract class Animal {\n    Animal() {\n        System.out.println(\"Animal created\");\n    }\n    abstract void sound();\n}\nclass Cat extends Animal {\n    Cat() {\n        super();\n        System.out.println(\"Cat created\");\n    }\n    void sound() {\n        System.out.println(\"Meow\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Cat();\n        a.sound();\n    }\n}",
    options: [
        "Animal created\\nCat created\\nMeow",
        "Cat created\\nAnimal created\\nMeow",
        "Meow\\nAnimal created\\nCat created",
        "Compilation error"
    ],
    answer: 0,
    explanation: "The parent constructor runs first ('Animal created'), then the child constructor ('Cat created'), and finally sound() is called on the Cat object ('Meow'). This demonstrates constructor chaining with abstract classes.",
    difficulty: "Medium",
    topic: "Abstract Class"
},
{
    id: "oops-136",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Object[] arr = new Object[3];\n        arr[0] = \"Hello\";\n        arr[1] = 42;\n        arr[2] = 3.14;\n        for (Object o : arr) {\n            System.out.print(o.getClass().getSimpleName() + \" \");\n        }\n    }\n}",
    options: [
        "String Integer Double ",
        "Object Object Object ",
        "String int double ",
        "Compilation error"
    ],
    answer: 0,
    explanation: "Since Object is the superclass of all classes in Java, the array can hold any type. getClass().getSimpleName() returns the actual runtime class name: String, Integer (autoboxed from int), and Double (autoboxed from double).",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-137",
    question: "What is the output of the following code?\n\nclass Person implements Cloneable {\n    String name;\n    Person(String name) { this.name = name; }\n    protected Object clone() throws CloneNotSupportedException {\n        return super.clone();\n    }\n}\npublic class Test {\n    public static void main(String[] args) throws Exception {\n        Person p1 = new Person(\"Alice\");\n        Person p2 = (Person) p1.clone();\n        System.out.println(p1 == p2);\n        System.out.println(p1.name == p2.name);\n    }\n}",
    options: [
        "false true",
        "true true",
        "false false",
        "true false"
    ],
    answer: 0,
    explanation: "clone() creates a new object, so p1 == p2 is false. But since String is immutable and 'Alice' is a string literal, both p1.name and p2.name reference the same string pool object, so p1.name == p2.name is true.",
    difficulty: "Medium",
    topic: "Clone()"
},
{
    id: "oops-138",
    question: "What is the output of the following code?\n\nclass Address {\n    String city;\n    Address(String city) { this.city = city; }\n}\nclass Person implements Cloneable {\n    String name;\n    Address address;\n    Person(String name, Address address) {\n        this.name = name;\n        this.address = address;\n    }\n    protected Object clone() throws CloneNotSupportedException {\n        return super.clone();\n    }\n}\npublic class Test {\n    public static void main(String[] args) throws Exception {\n        Address addr = new Address(\"NYC\");\n        Person p1 = new Person(\"Alice\", addr);\n        Person p2 = (Person) p1.clone();\n        p2.address.city = \"LA\";\n        System.out.println(p1.address.city);\n    }\n}",
    options: [
        "NYC",
        "LA",
        "null",
        "Compilation error"
    ],
    answer: 1,
    explanation: "This demonstrates a shallow copy. The clone() creates a new Person object, but the address field is copied by reference. Changing p2.address.city also affects p1 because both share the same Address object.",
    difficulty: "Medium",
    topic: "Shallow Copy"
},
{
    id: "oops-139",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        s.toUpperCase();\n        System.out.println(s);\n    }\n}",
    options: [
        "HELLO",
        "Hello",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "Strings are immutable in Java. toUpperCase() returns a new String object in uppercase but doesn't modify the original. Since the return value is not stored, s remains 'Hello'.",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-140",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s = \"Hello\";\n        s = s.toUpperCase();\n        System.out.println(s);\n    }\n}",
    options: [
        "HELLO",
        "Hello",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "Here the return value of toUpperCase() is assigned back to s. Since Strings are immutable, s now references the new 'HELLO' string object. The original 'Hello' string is unchanged but no longer referenced by s.",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-141",
    question: "In a company's HR system, employees are categorized as FullTime, PartTime, and Contract. All share common attributes like name and employeeId, but have different salary calculation methods. Which OOP concept is most suitable?",
    options: [
        "Encapsulation only",
        "Inheritance with method overriding",
        "Composition only",
        "Data hiding only"
    ],
    answer: 1,
    explanation: "Creating a base Employee class with common attributes and an abstract calculateSalary() method, then having FullTime, PartTime, and Contract override it with their own logic, uses inheritance and polymorphism effectively.",
    difficulty: "Medium",
    topic: "Scenario-Based Questions"
},
{
    id: "oops-142",
    question: "A banking application requires that account balance should never be modified directly. All changes must go through deposit() and withdraw() methods which also log transactions. Which OOP concept ensures this?",
    options: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction"
    ],
    answer: 2,
    explanation: "Encapsulation ensures the balance is private and can only be modified through controlled public methods (deposit/withdraw) that include validation and logging, preventing unauthorized direct modifications.",
    difficulty: "Medium",
    topic: "Scenario-Based Questions"
},
{
    id: "oops-143",
    question: "A UI framework provides a Button component. Different themes (DarkTheme, LightTheme) should change how the button looks without modifying the Button class. Which principle should be followed?",
    options: [
        "Single Responsibility Principle",
        "Open-Closed Principle",
        "Liskov Substitution Principle",
        "Interface Segregation Principle"
    ],
    answer: 1,
    explanation: "The Open-Closed Principle states that the Button class should be open for extension (supporting new themes) but closed for modification. This can be achieved by having themes implement a common interface that Button uses.",
    difficulty: "Medium",
    topic: "Open Closed Principle"
},
{
    id: "oops-144",
    question: "A notification system sends alerts via Email, SMS, and Push. When a new channel like Slack is added, existing code should not need changes. Which design pattern is most appropriate?",
    options: [
        "Singleton",
        "Observer",
        "Factory",
        "Builder"
    ],
    answer: 1,
    explanation: "The Observer pattern allows adding new notification channels (observers) without modifying the existing notification system (subject). Each channel registers as an observer and gets notified when an event occurs.",
    difficulty: "Medium",
    topic: "Scenario-Based Questions"
},
{
    id: "oops-145",
    question: "A document processing system needs to create different types of documents (PDF, Word, HTML) based on user input without exposing the creation logic. Which pattern should be used?",
    options: [
        "Observer",
        "Factory Method",
        "Singleton",
        "MVC"
    ],
    answer: 1,
    explanation: "The Factory Method pattern encapsulates object creation logic. A DocumentFactory can create the appropriate document type based on input without the client needing to know the specific class to instantiate.",
    difficulty: "Medium",
    topic: "Scenario-Based Questions"
},
{
    id: "oops-146",
    question: "In a game, a Character class has Weapon as a field. A character can change weapons during gameplay. What type of relationship exists between Character and Weapon?",
    options: [
        "Composition",
        "Aggregation",
        "Inheritance",
        "Abstraction"
    ],
    answer: 1,
    explanation: "This is aggregation (weak has-a). A Weapon can exist independently of a Character. The character can change or lose a weapon, and the weapon can be assigned to another character. Unlike composition, the part has an independent lifecycle.",
    difficulty: "Medium",
    topic: "Aggregation"
},
{
    id: "oops-147",
    question: "In the same game, a Character has a Heart (health system) that cannot exist without the character. What type of relationship is this?",
    options: [
        "Aggregation",
        "Composition",
        "Association",
        "Dependency"
    ],
    answer: 1,
    explanation: "This is composition (strong has-a). The Heart (health system) cannot exist without the Character. If the character is destroyed, the heart is also destroyed. The part's lifecycle depends entirely on the whole.",
    difficulty: "Medium",
    topic: "Composition"
},
{
    id: "oops-148",
    question: "A shape-drawing application has a Shape interface with a draw() method. Circle, Rectangle, and Triangle implement it. The drawing engine works with Shape references. Which SOLID principle is demonstrated?",
    options: [
        "Single Responsibility Principle",
        "Dependency Inversion Principle",
        "Interface Segregation Principle",
        "Open-Closed Principle"
    ],
    answer: 1,
    explanation: "The drawing engine depends on the Shape abstraction (interface), not on concrete classes. This is the Dependency Inversion Principle — high-level modules depend on abstractions, not on low-level implementations.",
    difficulty: "Medium",
    topic: "Dependency Inversion Principle"
},
{
    id: "oops-149",
    question: "A Printer interface has print(), scan(), and fax() methods. A SimplePrinter class only supports printing but is forced to implement scan() and fax() with empty bodies. Which principle is violated?",
    options: [
        "Single Responsibility Principle",
        "Open-Closed Principle",
        "Interface Segregation Principle",
        "Liskov Substitution Principle"
    ],
    answer: 2,
    explanation: "The Interface Segregation Principle is violated because SimplePrinter is forced to depend on methods (scan, fax) it doesn't use. The interface should be split into smaller, specific interfaces (Printable, Scannable, Faxable).",
    difficulty: "Medium",
    topic: "Interface Segregation Principle"
},
{
    id: "oops-150",
    question: "A Bird class has a fly() method. A Penguin class extends Bird but cannot fly. The Penguin class throws an exception in fly(). Which SOLID principle is violated?",
    options: [
        "Interface Segregation Principle",
        "Liskov Substitution Principle",
        "Single Responsibility Principle",
        "Dependency Inversion Principle"
    ],
    answer: 1,
    explanation: "The Liskov Substitution Principle is violated because a Penguin cannot be substituted for a Bird without breaking program behavior (fly() throws an exception). The hierarchy should be redesigned, perhaps with a FlyingBird subclass.",
    difficulty: "Medium",
    topic: "Liskov Substitution Principle"
},
{
    id: "oops-151",
    question: "An Employee class handles employee data storage, salary calculation, report generation, and email notifications. Which SOLID principle is violated?",
    options: [
        "Open-Closed Principle",
        "Liskov Substitution Principle",
        "Single Responsibility Principle",
        "Interface Segregation Principle"
    ],
    answer: 2,
    explanation: "The Single Responsibility Principle is violated because the Employee class has multiple reasons to change: data storage changes, salary rules change, report format changes, or email service changes. Each responsibility should be in a separate class.",
    difficulty: "Medium",
    topic: "Single Responsibility Principle"
},
{
    id: "oops-152",
    question: "In an interview, you are asked: 'Can an abstract class have a constructor?' What is the correct answer?",
    options: [
        "No, because abstract classes cannot be instantiated",
        "Yes, it can have a constructor that is called when a subclass is instantiated",
        "Yes, but only a default constructor",
        "No, constructors are only allowed in concrete classes"
    ],
    answer: 1,
    explanation: "An abstract class can have constructors (including parameterized ones). Although the abstract class itself cannot be instantiated, its constructor is called when a concrete subclass is instantiated via super().",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-153",
    question: "In an interview, you are asked: 'What is the difference between abstraction and encapsulation?' What is the best answer?",
    options: [
        "They are the same concept with different names",
        "Abstraction hides implementation complexity; encapsulation hides internal data by bundling it with methods that control access",
        "Abstraction is for classes; encapsulation is for methods",
        "Encapsulation is a superset of abstraction"
    ],
    answer: 1,
    explanation: "Abstraction focuses on hiding complexity by showing only essential features (what it does), while encapsulation focuses on hiding internal state by bundling data with methods and restricting access (how it's protected).",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-154",
    question: "In an interview, you are asked: 'When would you use an abstract class versus an interface?' What is the best answer?",
    options: [
        "Always use an interface; abstract classes are obsolete",
        "Use an abstract class when you want to share code among closely related classes; use an interface when you want to define a contract for unrelated classes",
        "Use an abstract class for only one method; use an interface for multiple methods",
        "There is no difference between them"
    ],
    answer: 1,
    explanation: "Abstract classes are best for sharing code among closely related classes (is-a relationship with common state/behavior). Interfaces define contracts that can be implemented by any class, regardless of its position in the hierarchy.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-155",
    question: "In an interview, you are asked: 'What is the diamond problem in OOP?' What is the best answer?",
    options: [
        "A problem where a class has too many methods",
        "An ambiguity that arises in multiple inheritance when two parent classes have a method with the same signature and a child class inherits from both",
        "A problem where objects consume too much memory",
        "A problem with constructor chaining"
    ],
    answer: 1,
    explanation: "The diamond problem occurs in multiple inheritance when class D inherits from both B and C, which both inherit from A. If B and C override the same method from A, it's ambiguous which version D should inherit.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-156",
    question: "In an interview, you are asked: 'Can we override a static method?' What is the correct answer?",
    options: [
        "Yes, using the @Override annotation",
        "No, static methods cannot be overridden; they can only be hidden by declaring a static method with the same signature in the subclass",
        "Yes, but only in the same package",
        "Yes, but only if the parent method is also static"
    ],
    answer: 1,
    explanation: "Static methods belong to the class, not to instances. They cannot be overridden (no runtime polymorphism). What appears like overriding is actually method hiding — the method called depends on the reference type, not the object type.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-157",
    question: "In an interview, you are asked: 'What happens if you don't implement all methods of an interface in a class?'",
    options: [
        "The unimplemented methods are automatically set to return null",
        "The class must be declared abstract, otherwise a compilation error occurs",
        "The class compiles but throws a runtime error when the unimplemented method is called",
        "The compiler provides default empty implementations"
    ],
    answer: 1,
    explanation: "If a class doesn't implement all methods of an interface, it must be declared abstract. A concrete (non-abstract) class must implement every method declared in all interfaces it implements.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-158",
    question: "In an interview, you are asked: 'Is it possible to have an abstract method in a non-abstract class?'",
    options: [
        "Yes, it is allowed",
        "No, if a class has even one abstract method, the class itself must be declared abstract",
        "Yes, but only if the method is protected",
        "Yes, but only if the method is static"
    ],
    answer: 1,
    explanation: "A class with even one abstract method must be declared abstract. This is because an abstract method has no implementation, and a non-abstract class is expected to be instantiable, which would be meaningless with unimplemented methods.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-159",
    question: "In an interview: 'Explain the difference between composition and aggregation.'",
    options: [
        "Composition means 'is-a'; aggregation means 'has-a'",
        "In composition, the part cannot exist without the whole; in aggregation, the part can exist independently",
        "Aggregation is stronger than composition",
        "There is no meaningful difference"
    ],
    answer: 1,
    explanation: "The key difference is lifecycle dependency. In composition, destroying the whole destroys the parts (e.g., House-Room). In aggregation, parts survive the destruction of the whole (e.g., Department-Teacher).",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-160",
    question: "In an interview: 'What is the purpose of the hashCode() and equals() contract?'",
    options: [
        "They are independent methods with no relationship",
        "If two objects are equal according to equals(), they must have the same hashCode(); unequal objects may or may not have the same hashCode()",
        "If two objects have the same hashCode(), they must be equal",
        "equals() and hashCode() must always return the same value"
    ],
    answer: 1,
    explanation: "The contract states that equal objects must have identical hash codes. However, objects with the same hash code need not be equal (hash collisions are allowed). Violating this contract breaks hash-based collections.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-161",
    question: "In an interview: 'What is the difference between tight coupling and loose coupling? Give an OOP example.'",
    options: [
        "Tight coupling means classes share the same package; loose coupling means they are in different packages",
        "Tight coupling: Class A directly creates and uses Class B's concrete implementation. Loose coupling: Class A depends on an interface that Class B implements",
        "There is no difference; both terms mean the same thing",
        "Loose coupling is when classes have more methods; tight coupling is when they have fewer"
    ],
    answer: 1,
    explanation: "Tight coupling means classes are highly dependent on each other's implementations (direct instantiation). Loose coupling is achieved through abstractions (interfaces/abstract classes), allowing easy substitution and testing.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-162",
    question: "In an interview: 'What is covariant return type in method overriding?'",
    options: [
        "The return type must be exactly the same in the overriding method",
        "The overriding method can return a subtype of the return type declared in the overridden method",
        "The return type can be any unrelated type",
        "Covariant return type applies only to primitive types"
    ],
    answer: 1,
    explanation: "Covariant return type allows an overriding method to return a more specific type (subclass) than the return type declared in the parent method. For example, if parent returns Animal, child can return Dog.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-163",
    question: "In an interview: 'Can a constructor be synchronized in Java?'",
    options: [
        "Yes, using the synchronized keyword",
        "No, constructors cannot be synchronized; use synchronized blocks inside the constructor if needed",
        "Yes, but only static constructors",
        "Yes, but only parameterized constructors"
    ],
    answer: 1,
    explanation: "Constructors cannot be marked synchronized in Java because only the thread that creates the object has access to it during construction. If needed, synchronized blocks can be used inside the constructor body.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-164",
    question: "In an interview: 'What is object slicing in C++?'",
    options: [
        "When an object is split into multiple smaller objects",
        "When a derived class object is assigned to a base class object, losing the derived class-specific members",
        "When an object's memory is divided between stack and heap",
        "When a method is split into multiple smaller methods"
    ],
    answer: 1,
    explanation: "Object slicing occurs when a derived class object is assigned to a base class object by value. The derived class-specific members are 'sliced off,' and only the base class portion is copied, losing polymorphic behavior.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-165",
    question: "In an interview: 'What is the purpose of a marker interface?'",
    options: [
        "An interface that contains only abstract methods",
        "An interface with no methods that marks a class as having a certain capability for the JVM or compiler to recognize",
        "An interface that contains only static methods",
        "An interface used only for inheritance"
    ],
    answer: 1,
    explanation: "A marker interface (e.g., Serializable, Cloneable) has no methods. It serves as a metadata marker telling the JVM or framework that the class has a specific capability. Annotation-based markers have largely replaced them.",
    difficulty: "Medium",
    topic: "Interview-Based Questions"
},
{
    id: "oops-166",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        System.out.println(new Integer(10) == new Integer(10));\n        System.out.println(new Integer(10).equals(new Integer(10)));\n    }\n}",
    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 2,
    explanation: "new Integer(10) creates separate objects each time, so == compares references (false). equals() compares the integer values (true). This illustrates the difference between reference and value equality.",
    difficulty: "Medium",
    topic: "equals()"
},
{
    id: "oops-167",
    question: "What is the output of the following code?\n\nclass Base {\n    private void show() {\n        System.out.println(\"Base\");\n    }\n}\nclass Derived extends Base {\n    private void show() {\n        System.out.println(\"Derived\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Base b = new Derived();\n        b.show();\n    }\n}",
    options: [
        "Base",
        "Derived",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because show() is private in Base, so it's not visible in the Test class. Private methods are not inherited and cannot be accessed through a parent reference from outside the class.",
    difficulty: "Medium",
    topic: "Access Specifiers"
},
{
    id: "oops-168",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        class Local {\n            int val = 5;\n            void display() {\n                System.out.println(val);\n            }\n        }\n        Local l = new Local();\n        l.display();\n    }\n}",
    options: [
        "5",
        "0",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "This is a local class defined inside a method. It is valid in Java. The Local class is instantiated within the method, and display() correctly prints the instance variable val (5).",
    difficulty: "Medium",
    topic: "Nested Classes"
},
{
    id: "oops-169",
    question: "What is the output of the following code?\n\ninterface Flyable {\n    void fly();\n}\npublic class Test {\n    public static void main(String[] args) {\n        Flyable f = new Flyable() {\n            public void fly() {\n                System.out.println(\"Flying\");\n            }\n        };\n        f.fly();\n    }\n}",
    options: [
        "Flying",
        "Compilation error",
        "Runtime error",
        "No output"
    ],
    answer: 0,
    explanation: "This creates an anonymous class that implements the Flyable interface. The anonymous class provides the fly() implementation inline. This is a valid and common pattern in Java.",
    difficulty: "Medium",
    topic: "Anonymous Classes"
},
{
    id: "oops-170",
    question: "What is the output of the following code?\n\nclass Outer {\n    private static int x = 10;\n    static class StaticNested {\n        void display() {\n            System.out.println(x);\n        }\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Outer.StaticNested sn = new Outer.StaticNested();\n        sn.display();\n    }\n}",
    options: [
        "10",
        "0",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "A static nested class can access static members of its enclosing class. Since x is static, the StaticNested class can access it. It is instantiated without an Outer instance: new Outer.StaticNested().",
    difficulty: "Medium",
    topic: "Static Members"
},
{
    id: "oops-171",
    question: "What is the output of the following code?\n\nclass Outer {\n    private int x = 10;\n    static class StaticNested {\n        void display() {\n            System.out.println(x);\n        }\n    }\n}",
    options: [
        "10",
        "0",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because a static nested class cannot access non-static (instance) members of its enclosing class. The variable x is not static, so it requires an Outer instance to be accessed.",
    difficulty: "Medium",
    topic: "Static Members"
},
{
    id: "oops-172",
    question: "Which OOP design principle suggests that 'software entities should be open for extension but closed for modification'?",
    options: [
        "Single Responsibility Principle",
        "Liskov Substitution Principle",
        "Open-Closed Principle",
        "Dependency Inversion Principle"
    ],
    answer: 2,
    explanation: "The Open-Closed Principle, coined by Bertrand Meyer, states that modules should be open for extension (new behavior can be added) but closed for modification (existing code should not change), typically achieved through abstraction and polymorphism.",
    difficulty: "Medium",
    topic: "Open Closed Principle"
},
{
    id: "oops-173",
    question: "A class that handles database operations, file I/O, and UI rendering all in one class violates which principle?",
    options: [
        "Open-Closed Principle",
        "Interface Segregation Principle",
        "Single Responsibility Principle",
        "Liskov Substitution Principle"
    ],
    answer: 2,
    explanation: "This class violates SRP because it has three distinct responsibilities that can change independently: database logic, file operations, and UI rendering. Each should be in a separate class.",
    difficulty: "Medium",
    topic: "Single Responsibility Principle"
},
{
    id: "oops-174",
    question: "Which design approach best follows the Dependency Inversion Principle?",
    options: [
        "A class directly instantiates its dependencies using the new keyword",
        "A class depends on interfaces/abstractions that are injected rather than creating concrete implementations",
        "All classes inherit from a single base class",
        "All methods are declared static"
    ],
    answer: 1,
    explanation: "DIP is best followed through Dependency Injection, where a class receives its dependencies (as interfaces) from the outside rather than creating them. This makes the class independent of specific implementations.",
    difficulty: "Medium",
    topic: "Dependency Inversion Principle"
},
{
    id: "oops-175",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s1 = \"Java\";\n        String s2 = \"Java\";\n        String s3 = new String(\"Java\");\n        System.out.println(s1.equals(s2) + \" \" + s1.equals(s3));\n    }\n}",
    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 0,
    explanation: "String's equals() method compares the actual character content. All three strings contain 'Java', so both s1.equals(s2) and s1.equals(s3) return true, regardless of how the strings were created.",
    difficulty: "Medium",
    topic: "equals()"
},
{
    id: "oops-176",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void modify(String s) {\n        s = s + \" World\";\n    }\n    public static void main(String[] args) {\n        String str = \"Hello\";\n        modify(str);\n        System.out.println(str);\n    }\n}",
    options: [
        "Hello World",
        "Hello",
        "World",
        "Compilation error"
    ],
    answer: 1,
    explanation: "Strings are immutable and passed by value (the reference is copied). Inside modify(), s points to a new 'Hello World' string, but the original str reference in main() is unchanged and still points to 'Hello'.",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-177",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void modify(StringBuilder sb) {\n        sb.append(\" World\");\n    }\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder(\"Hello\");\n        modify(sb);\n        System.out.println(sb);\n    }\n}",
    options: [
        "Hello",
        "Hello World",
        "World",
        "Compilation error"
    ],
    answer: 1,
    explanation: "StringBuilder is mutable. The reference copy in modify() points to the same object. When append() is called, it modifies the actual object. So the change is visible in main(), printing 'Hello World'.",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-178",
    question: "What is the output of the following code?\n\nclass Animal {\n    String name = \"Animal\";\n}\nclass Dog extends Animal {\n    String name = \"Dog\";\n}\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        System.out.println(a.name);\n    }\n}",
    options: [
        "Dog",
        "Animal",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "Instance variables are not polymorphic in Java. The variable accessed depends on the reference type (Animal), not the object type (Dog). So a.name prints 'Animal'. Only methods exhibit runtime polymorphism.",
    difficulty: "Medium",
    topic: "Run-Time Polymorphism"
},
{
    id: "oops-179",
    question: "What is the output of the following code?\n\nclass Animal {\n    String getName() { return \"Animal\"; }\n}\nclass Dog extends Animal {\n    String getName() { return \"Dog\"; }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Animal a = new Dog();\n        System.out.println(a.getName());\n    }\n}",
    options: [
        "Animal",
        "Dog",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "Unlike instance variables, methods exhibit runtime polymorphism. Even though the reference type is Animal, the actual object is Dog, so Dog's getName() is called at runtime, printing 'Dog'.",
    difficulty: "Medium",
    topic: "Run-Time Polymorphism"
},
{
    id: "oops-180",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        class Point {\n            int x, y;\n            Point(int x, int y) { this.x = x; this.y = y; }\n            public String toString() {\n                return \"(\" + x + \",\" + y + \")\";\n            }\n        }\n        Point p = new Point(3, 4);\n        System.out.println(p);\n    }\n}",
    options: [
        "Point@hashcode",
        "(3,4)",
        "3 4",
        "Compilation error"
    ],
    answer: 1,
    explanation: "When an object is passed to println(), its toString() method is implicitly called. Since the Point class overrides toString() to return '(3,4)', that string is printed instead of the default Object toString().",
    difficulty: "Medium",
    topic: "toString()"
},
{
    id: "oops-181",
    question: "What is the output of the following code?\n\nclass Parent {\n    void greet() { System.out.print(\"Hello \"); }\n}\nclass Child extends Parent {\n    void greet() { System.out.print(\"Hi \"); }\n    void greet(String name) { System.out.print(\"Hi \" + name); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.greet();\n    }\n}",
    options: [
        "Hello ",
        "Hi ",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "p.greet() calls the no-arg greet() which is overridden in Child. Due to runtime polymorphism, Child's greet() is called, printing 'Hi '. The overloaded greet(String) in Child is not relevant here.",
    difficulty: "Medium",
    topic: "Run-Time Polymorphism"
},
{
    id: "oops-182",
    question: "What is the output of the following code?\n\nclass Parent {\n    void greet(String name) { System.out.print(\"Hello \" + name); }\n}\nclass Child extends Parent {\n    void greet(String name) { System.out.print(\"Hi \" + name); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.greet(\"Alice\");\n    }\n}",
    options: [
        "Hello Alice",
        "Hi Alice",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "The greet(String) method is overridden in Child. Due to runtime polymorphism, when p.greet(\"Alice\") is called, the JVM dispatches to Child's greet method, printing 'Hi Alice'.",
    difficulty: "Medium",
    topic: "Method Overriding"
},
{
    id: "oops-183",
    question: "What is the output of the following code?\n\nclass Parent {\n    void greet(String name) { System.out.print(\"Hello \" + name); }\n}\nclass Child extends Parent {\n    void greet(String name) { System.out.print(\"Hi \" + name); }\n    void greet() { System.out.print(\"Hi\"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.greet();\n    }\n}",
    options: [
        "Hello ",
        "Hi",
        "Hi ",
        "Compilation error"
    ],
    answer: 3,
    explanation: "Compilation error because Parent class doesn't have a no-arg greet() method. The compiler checks method existence based on the reference type (Parent), not the actual object type (Child). The no-arg greet() in Child is not visible through a Parent reference.",
    difficulty: "Medium",
    topic: "Method Overloading"
},
{
    id: "oops-184",
    question: "What is the output of the following code?\n\nclass Test {\n    static class Counter {\n        private static int count = 0;\n        private int id;\n        Counter() {\n            count++;\n            id = count;\n        }\n        int getId() { return id; }\n        static int getCount() { return count; }\n    }\n    public static void main(String[] args) {\n        Counter c1 = new Counter();\n        Counter c2 = new Counter();\n        System.out.println(c1.getId() + \" \" + c2.getId() + \" \" + Counter.getCount());\n    }\n}",
    options: [
        "1 2 2",
        "0 1 2",
        "1 1 2",
        "2 2 2"
    ],
    answer: 0,
    explanation: "The static count is shared and incremented each time: c1 gets id=1 (count becomes 1), c2 gets id=2 (count becomes 2). getCount() returns 2. Output: '1 2 2'.",
    difficulty: "Medium",
    topic: "Static Variables"
},
{
    id: "oops-185",
    question: "What is the output of the following code?\n\nclass Vehicle {\n    protected String type = \"Vehicle\";\n    public String toString() {\n        return type;\n    }\n}\nclass Car extends Vehicle {\n    protected String type = \"Car\";\n}\npublic class Test {\n    public static void main(String[] args) {\n        Vehicle v = new Car();\n        System.out.println(v);\n    }\n}",
    options: [
        "Car",
        "Vehicle",
        "null",
        "Compilation error"
    ],
    answer: 1,
    explanation: "toString() is inherited from Vehicle and accesses Vehicle's type field ('Vehicle'). Even though Car has its own type field, the inherited toString() uses the declaring class's field. Methods are polymorphic, but field access is not.",
    difficulty: "Medium",
    topic: "Run-Time Polymorphism"
},
{
    id: "oops-186",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Object obj = \"Hello\";\n        String s = (String) obj;\n        System.out.println(s.length());\n    }\n}",
    options: [
        "5",
        "Compilation error",
        "ClassCastException",
        "Runtime error"
    ],
    answer: 0,
    explanation: "obj actually references a String 'Hello'. The explicit downcast (String) is valid at runtime because the actual object type is String. s.length() returns 5. This is a safe downcast.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-187",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Object obj = new Integer(42);\n        String s = (String) obj;\n        System.out.println(s);\n    }\n}",
    options: [
        "42",
        "Compilation error",
        "ClassCastException at runtime",
        "null"
    ],
    answer: 2,
    explanation: "This throws a ClassCastException at runtime because obj actually references an Integer, not a String. The compiler allows the cast (since Object can be any type), but the JVM detects the type mismatch at runtime.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-188",
    question: "Which of the following correctly demonstrates the Singleton pattern with thread safety?",
    options: [
        "class Singleton { static Singleton instance; private Singleton(){} static Singleton getInstance(){ if(instance==null) instance=new Singleton(); return instance; } }",
        "class Singleton { static volatile Singleton instance; private Singleton(){} static Singleton getInstance(){ if(instance==null){ synchronized(Singleton.class){ if(instance==null) instance=new Singleton(); } } return instance; } }",
        "class Singleton { static Singleton instance = new Singleton(); private Singleton(){} static Singleton getInstance(){ return new Singleton(); } }",
        "class Singleton { public Singleton(){} static Singleton getInstance(){ return new Singleton(); } }"
    ],
    answer: 1,
    explanation: "The double-checked locking pattern with volatile ensures thread safety. The first check avoids synchronization overhead after initialization, the synchronized block ensures only one thread creates the instance, and volatile prevents partial construction issues.",
    difficulty: "Medium",
    topic: "Singleton"
},
{
    id: "oops-189",
    question: "In a smart home system, devices like Light, Thermostat, and Camera all implement a Device interface with an on() and off() method. A HomeAutomationController manages all devices through Device references. Which OOP concepts are used?",
    options: [
        "Only encapsulation",
        "Inheritance and encapsulation",
        "Interface-based polymorphism and dependency inversion",
        "Only composition"
    ],
    answer: 2,
    explanation: "The Device interface enables polymorphism (different device types handled uniformly). The controller depends on the Device abstraction, not concrete classes, following the Dependency Inversion Principle.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-190",
    question: "Design a payment system that supports CreditCard, PayPal, and UPI payments. New payment methods should be addable without changing the payment processor. Which approach is best?",
    options: [
        "Use if-else chains in the processor for each payment type",
        "Define a PaymentMethod interface with a process() method; each payment type implements it; the processor works with PaymentMethod references",
        "Use a single class with a paymentType field",
        "Make all payment classes inherit from a concrete Payment class with all logic"
    ],
    answer: 1,
    explanation: "Using a PaymentMethod interface with process() allows each payment type to provide its own implementation. The processor works with the interface, following OCP (open for extension, closed for modification) and DIP.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-191",
    question: "An online shopping cart should support different pricing strategies: regular pricing, discount pricing, and festive pricing. Which pattern is most suitable?",
    options: [
        "Singleton",
        "Strategy Pattern (using an interface for pricing strategy)",
        "Observer",
        "Builder"
    ],
    answer: 1,
    explanation: "The Strategy pattern defines a family of algorithms (pricing strategies), encapsulates each one, and makes them interchangeable. A PricingStrategy interface with RegularPricing, DiscountPricing, and FestivePricing implementations is ideal.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-192",
    question: "A logging system needs to support writing to Console, File, and Database. Users should be able to switch the logging target without changing the code that performs logging. Which design principle and pattern combination is best?",
    options: [
        "SRP with Singleton",
        "OCP and DIP with Strategy pattern",
        "ISP with Observer",
        "LSP with Factory"
    ],
    answer: 1,
    explanation: "A LogTarget interface (DIP) with ConsoleLogger, FileLogger, and DatabaseLogger implementations allows switching targets without modifying logging code (OCP). This is the Strategy pattern applied to logging destinations.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-193",
    question: "A report generation system creates PDF, Excel, and HTML reports. Each report has a header, body, and footer, but the format differs. Which approach best follows OOP principles?",
    options: [
        "One class with a reportType field and switch statements for each section",
        "A Report interface with generateHeader(), generateBody(), generateFooter() methods, implemented by PDFReport, ExcelReport, and HTMLReport",
        "A single class with three large if-else blocks",
        "Copy-paste the report generation code for each format"
    ],
    answer: 1,
    explanation: "Using a Report interface with format-specific implementations follows OCP (new formats added without changing existing code), SRP (each class handles one format), and LSP (all reports are substitutable through the interface).",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-194",
    question: "A car manufacturing system has Engine, Wheel, and Seat components that are assembled into a Car. The Car cannot exist without these parts. Which relationship best models this?",
    options: [
        "Aggregation",
        "Association",
        "Composition",
        "Dependency"
    ],
    answer: 2,
    explanation: "Composition is the strongest 'has-a' relationship where parts cannot exist without the whole. A Car is composed of Engine, Wheels, and Seats — if the Car is destroyed, these parts are meaningless without it.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-195",
    question: "A university has Departments, and each Department has Professors. A Professor can exist independently and may move to a different Department. Which relationship best models this?",
    options: [
        "Composition",
        "Aggregation",
        "Inheritance",
        "Abstraction"
    ],
    answer: 1,
    explanation: "Aggregation is appropriate because a Professor has an independent lifecycle. If a Department is dissolved, Professors can be reassigned to other departments. The part (Professor) can exist without the whole (Department).",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-196",
    question: "A text editor supports multiple plugins (SpellCheck, WordCount, AutoSave). Each plugin observes document changes and reacts. The editor should work with any plugin without knowing its specific type. Which pattern and principle apply?",
    options: [
        "Factory pattern and SRP",
        "Observer pattern and DIP",
        "Singleton pattern and OCP",
        "Builder pattern and ISP"
    ],
    answer: 1,
    explanation: "The Observer pattern lets plugins subscribe to document changes. The editor depends on a Plugin/Observer abstraction (DIP), not concrete plugin types, allowing any plugin to be added without modifying the editor.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-197",
    question: "A computer configuration system allows users to choose CPU, RAM, Storage, and GPU to build a custom PC. The construction process is complex with many optional components. Which pattern is most suitable?",
    options: [
        "Singleton",
        "Factory",
        "Builder",
        "Observer"
    ],
    answer: 2,
    explanation: "The Builder pattern is ideal for constructing complex objects step by step. A ComputerBuilder provides methods like withCPU(), withRAM(), withStorage(), and build() to create a Computer with the desired configuration.",
    difficulty: "Medium",
    topic: "Builder"
},
{
    id: "oops-198",
    question: "Which of the following is a disadvantage of OOP compared to procedural programming?",
    options: [
        "OOP code is harder to read",
        "OOP programs generally have larger memory footprint and can be slower due to polymorphism overhead",
        "OOP doesn't support modularity",
        "OOP cannot handle real-world problems"
    ],
    answer: 1,
    explanation: "OOP programs typically consume more memory (due to objects, vtables, etc.) and can have performance overhead from dynamic dispatch (polymorphism), extra layers of abstraction, and garbage collection compared to lean procedural code.",
    difficulty: "Medium",
    topic: "Advantages of OOP"
},
{
    id: "oops-199",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Integer a = 127;\n        Integer b = 127;\n        Integer c = 128;\n        Integer d = 128;\n        System.out.println((a == b) + \" \" + (c == d));\n    }\n}",
    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 1,
    explanation: "Integer caches values from -128 to 127. a and b (127) are within range and reference the same cached object (true). c and d (128) are outside the cache range, so separate objects are created (false).",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-200",
    question: "What is the output of the following code?\n\nclass A {\n    public void method(Object o) {\n        System.out.println(\"Object\");\n    }\n    public void method(String s) {\n        System.out.println(\"String\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A a = new A();\n        a.method(null);\n    }\n}",
    options: [
        "Object",
        "String",
        "Compilation error",
        "NullPointerException"
    ],
    answer: 1,
    explanation: "When null is passed, the compiler chooses the most specific method. String is more specific than Object (String extends Object), so method(String) is called, printing 'String'.",
    difficulty: "Medium",
    topic: "Method Overloading"
},
{
    id: "oops-201",
    question: "What is the output of the following code?\n\nclass A {\n    public void method(StringBuffer sb) {\n        System.out.println(\"StringBuffer\");\n    }\n    public void method(StringBuilder sb) {\n        System.out.println(\"StringBuilder\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        A a = new A();\n        a.method(null);\n    }\n}",
    options: [
        "StringBuffer",
        "StringBuilder",
        "Compilation error",
        "NullPointerException"
    ],
    answer: 2,
    explanation: "Compilation error because null can be passed to both method(StringBuffer) and method(StringBuilder), and neither is more specific than the other (they are sibling classes). The call is ambiguous.",
    difficulty: "Medium",
    topic: "Method Overloading"
},
{
    id: "oops-202",
    question: "What is the output of the following code?\n\nclass Test {\n    int a;\n    public static void main(String[] args) {\n        Test t = new Test();\n        System.out.println(t.a);\n    }\n}",
    options: [
        "0",
        "null",
        "Compilation error",
        "Undefined"
    ],
    answer: 0,
    explanation: "Instance variables are automatically initialized to default values. For int, the default value is 0. So t.a prints 0. This is different from local variables, which are not automatically initialized.",
    difficulty: "Medium",
    topic: "Attributes"
},
{
    id: "oops-203",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        int a;\n        System.out.println(a);\n    }\n}",
    options: [
        "0",
        "null",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because local variables are not automatically initialized. Unlike instance variables, a local variable must be explicitly assigned a value before it is used.",
    difficulty: "Medium",
    topic: "Attributes"
},
{
    id: "oops-204",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        boolean b = true;\n        if (b) {\n            int x = 10;\n        }\n        System.out.println(x);\n    }\n}",
    options: [
        "10",
        "0",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because x is declared inside the if block and is not accessible outside it. The scope of x is limited to the if block, and it cannot be used in the println statement outside that block.",
    difficulty: "Medium",
    topic: "Object Lifecycle"
},
{
    id: "oops-205",
    question: "What is the output of the following code?\n\nclass Parent {\n    void show() {\n        System.out.print(\"Parent \");\n    }\n}\nclass Child extends Parent {\n    void show() {\n        System.out.print(\"Child \");\n        super.show();\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.show();\n    }\n}",
    options: [
        "Parent Child",
        "Child Parent",
        "Parent",
        "Child"
    ],
    answer: 1,
    explanation: "Due to runtime polymorphism, Child's show() is called first (prints 'Child '), then super.show() calls Parent's show() (prints 'Parent '). Output is 'Child Parent'.",
    difficulty: "Medium",
    topic: "Method Overriding"
},
{
    id: "oops-206",
    question: "What is the output of the following code?\n\nclass Test {\n    void display(int... args) {\n        System.out.println(\"varargs\");\n    }\n    void display(int a, int b) {\n        System.out.println(\"two ints\");\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.display(1, 2);\n    }\n}",
    options: [
        "varargs",
        "two ints",
        "Compilation error",
        "Ambiguous method call"
    ],
    answer: 1,
    explanation: "When both varargs and a specific overloaded method match, the compiler prefers the more specific method. display(int, int) is more specific than display(int...), so it is chosen.",
    difficulty: "Medium",
    topic: "Method Overloading"
},
{
    id: "oops-207",
    question: "What is the output of the following code?\n\nclass Test {\n    void display(int... args) {\n        System.out.println(\"varargs\");\n    }\n    void display(long a, long b) {\n        System.out.println(\"two longs\");\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.display(1, 2);\n    }\n}",
    options: [
        "varargs",
        "two longs",
        "Compilation error",
        "Ambiguous method call"
    ],
    answer: 2,
    explanation: "Compilation error because the call display(1, 2) is ambiguous. It can match varargs (after widening int to int in the array) or two longs (after widening int to long). Neither is more specific than the other.",
    difficulty: "Medium",
    topic: "Method Overloading"
},
{
    id: "oops-208",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s1 = \"Hello\";\n        String s2 = \"Hel\" + \"lo\";\n        String s3 = \"Hel\" + new String(\"lo\");\n        System.out.println((s1 == s2) + \" \" + (s1 == s3));\n    }\n}",
    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 1,
    explanation: "s2 is computed at compile time as a constant expression 'Hello', so it references the same string pool object as s1 (true). s3 uses 'new String' at runtime, so it creates a new object (false).",
    difficulty: "Medium",
    topic: "Object Creation"
},
{
    id: "oops-209",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s1 = \"Hello\";\n        String s2 = s1.intern();\n        String s3 = new String(\"Hello\").intern();\n        System.out.println((s1 == s2) + \" \" + (s1 == s3));\n    }",

    options: [
        "true true",
        "true false",
        "false true",
        "false false"
    ],
    answer: 0,
    explanation: "intern() returns a reference from the string pool. s1 is already in the pool, so s2 gets the same reference (true). s3's intern() also returns the pool reference for 'Hello' (true). Both comparisons are true.",
    difficulty: "Medium",
    topic: "Object Creation"
},
{
    id: "oops-210",
    question: "What is the output of the following code?\n\nclass GrandParent {\n    void show() { System.out.print(\"GP \"); }\n}\nclass Parent extends GrandParent {\n    void show() { System.out.print(\"P \"); }\n}\nclass Child extends Parent {\n    void show() { System.out.print(\"C \"); }\n}\npublic class Test {\n    public static void main(String[] args) {\n        GrandParent gp = new Child();\n        gp.show();\n    }\n}",
    options: [
        "GP",
        "P",
        "C",
        "GP P C"
    ],
    answer: 2,
    explanation: "This demonstrates multilevel inheritance with runtime polymorphism. The reference is GrandParent but the object is Child. At runtime, the JVM calls the most derived class's show() method, which is Child's, printing 'C'.",
    difficulty: "Medium",
    topic: "Multilevel Inheritance"
},
{
    id: "oops-211",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Double d1 = 100.0;\n        Double d2 = 100.0;\n        System.out.println(d1 == d2);\n    }\n}",
    options: [
        "true",
        "false",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "Unlike Integer which caches values -128 to 127, Double does not cache any values. Each new Double(100.0) or autoboxing of 100.0 creates a new object, so d1 and d2 reference different objects.",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-212",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Boolean b1 = true;\n        Boolean b2 = true;\n        System.out.println(b1 == b2);\n    }\n}",
    options: [
        "true",
        "false",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "Boolean caches the two values true and false. So autoboxing true always returns the same cached Boolean object. Therefore b1 == b2 is true as they reference the same object.",
    difficulty: "Medium",
    topic: "Immutability"
},
{
    id: "oops-213",
    question: "Which of the following statements about interfaces in Java 8+ is FALSE?",
    options: [
        "Interfaces can have default methods with implementation",
        "Interfaces can have static methods with implementation",
        "Interfaces can have instance variables (non-static, non-final)",
        "Interfaces can have abstract methods"
    ],
    answer: 2,
    explanation: "Interfaces cannot have instance variables. All variables declared in an interface are implicitly public, static, and final (constants). Since Java 8, interfaces can have default and static methods with implementations, but not instance state.",
    difficulty: "Medium",
    topic: "Interface"
},
{
    id: "oops-214",
    question: "What is the output of the following code?\n\ninterface Logger {\n    default void log(String msg) {\n        System.out.println(\"Default: \" + msg);\n    }\n}\nclass AppLogger implements Logger {\n    public void log(String msg) {\n        System.out.println(\"App: \" + msg);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Logger l = new AppLogger();\n        l.log(\"Test\");\n    }\n}",
    options: [
        "Default: Test",
        "App: Test",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "AppLogger overrides the default log() method. When l.log(\"Test\") is called, the overridden version in AppLogger is used (runtime polymorphism), printing 'App: Test'.",
    difficulty: "Medium",
    topic: "Interface"
},
{
    id: "oops-215",
    question: "What is the output of the following code?\n\ninterface Logger {\n    static void info(String msg) {\n        System.out.println(\"Info: \" + msg);\n    }\n}\npublic class Test implements Logger {\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.info(\"Hello\");\n    }\n}",
    options: [
        "Info: Hello",
        "Compilation error",
        "Runtime error",
        "No output"
    ],
    answer: 1,
    explanation: "Compilation error because static interface methods are not inherited by implementing classes. They must be called using the interface name: Logger.info(\"Hello\"). They belong to the interface itself, not to implementing classes.",
    difficulty: "Medium",
    topic: "Interface"
},
{
    id: "oops-216",
    question: "In OOP, what does 'programming to an interface' mean?",
    options: [
        "Only using Java interfaces and never using abstract classes",
        "Depending on abstractions (interfaces or abstract classes) rather than concrete implementations",
        "Creating only interface files without any implementation classes",
        "Using only public methods in a class"
    ],
    answer: 1,
    explanation: "Programming to an interface means writing code that depends on abstractions (interfaces or abstract classes) rather than concrete classes. This reduces coupling, makes code more testable, and allows easy substitution of implementations.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-217",
    question: "A class has 15 methods, 3 of which are public and the rest are private helper methods used only by the public methods. What can you say about this class's cohesion?",
    options: [
        "Low cohesion — too many methods",
        "High cohesion — all methods serve the class's single responsibility",
        "No cohesion — methods are unrelated",
        "Medium cohesion — some methods are unnecessary"
    ],
    answer: 1,
    explanation: "Having many private helper methods that support a few public methods actually indicates high cohesion. All methods work together to fulfill the class's responsibility. The private methods are implementation details supporting the public interface.",
    difficulty: "Medium",
    topic: "Cohesion"
},
{
    id: "oops-218",
    question: "Class A directly creates Class B objects using 'new' inside its methods. Class C uses an interface that B implements, receiving the implementation through its constructor. Which has lower coupling?",
    options: [
        "Class A has lower coupling",
        "Class C has lower coupling",
        "Both have the same coupling",
        "Coupling cannot be determined from this information"
    ],
    answer: 1,
    explanation: "Class C has lower coupling because it depends on an abstraction (interface), not a concrete class. Class A is tightly coupled to Class B's specific implementation. Class C can work with any class that implements the interface.",
    difficulty: "Medium",
    topic: "Coupling"
},
{
    id: "oops-219",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Object[] arr = new String[3];\n        arr[0] = 10;\n    }\n}",
    options: [
        "10",
        "null",
        "Compilation error",
        "ArrayStoreException at runtime"
    ],
    answer: 3,
    explanation: "This throws ArrayStoreException at runtime. Although the array reference is of type Object[], the actual array is a String[]. Storing an Integer (10 autoboxed) into a String array is detected at runtime and throws ArrayStoreException.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-220",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Object[] arr = new Object[3];\n        arr[0] = \"Hello\";\n        arr[1] = 42;\n        arr[2] = true;\n        for (Object o : arr) {\n            System.out.print(o + \" \");\n        }\n    }\n}",
    options: [
        "Hello 42 true ",
        "Compilation error",
        "Runtime error",
        "Hello 42 True "
    ],
    answer: 0,
    explanation: "An Object[] can hold any type. String 'Hello', autoboxed Integer 42, and autoboxed Boolean true are all stored. When printed, each calls toString(), producing 'Hello 42 true '.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-221",
    question: "What is the output of the following code?\n\nclass Parent {\n    final int x = 10;\n}\nclass Child extends Parent {\n    int x = 20;\n    public static void main(String[] args) {\n        Child c = new Child();\n        System.out.println(c.x);\n        System.out.println(((Parent)c).x);\n    }\n}",
    options: [
        "20 10",
        "10 20",
        "20 20",
        "Compilation error"
    ],
    answer: 0,
    explanation: "Fields are not polymorphic. c.x accesses Child's x (20). ((Parent)c).x accesses Parent's x (10) based on the reference type. The final keyword on Parent's x doesn't prevent Child from declaring its own x — it only prevents reassignment of Parent's x.",
    difficulty: "Medium",
    topic: "Final Variable"
},
{
    id: "oops-222",
    question: "What is the output of the following code?\n\nclass Parent {\n    final int x;\n    Parent() {\n        x = 10;\n    }\n}\nclass Child extends Parent {\n    int x = 20;\n    public static void main(String[] args) {\n        Child c = new Child();\n        System.out.println(c.x + \" \" + ((Parent)c).x);\n    }\n}",
    options: [
        "20 10",
        "10 20",
        "Compilation error",
        "Runtime error"
    ],
    answer: 0,
    explanation: "Child's x is 20, Parent's final x is initialized to 10 in Parent's constructor. Field access depends on reference type: c.x gives 20 (Child's x), ((Parent)c).x gives 10 (Parent's x).",
    difficulty: "Medium",
    topic: "Final Variable"
},
{
    id: "oops-223",
    question: "What is the output of the following code?\n\nclass Test {\n    final int x;\n    Test() {}\n    public static void main(String[] args) {\n        Test t = new Test();\n        System.out.println(t.x);\n    }\n}",
    options: [
        "0",
        "null",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because the final instance variable x is not initialized in the constructor. A blank final variable must be definitely assigned in every constructor, or at declaration.",
    difficulty: "Medium",
    topic: "Final Variable"
},
{
    id: "oops-224",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        final int x;\n        x = 10;\n        x = 20;\n        System.out.println(x);\n    }\n}",
    options: [
        "20",
        "10",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because a final variable can only be assigned once. After x = 10, the second assignment x = 20 is illegal. The final keyword ensures the variable is assigned exactly once.",
    difficulty: "Medium",
    topic: "Final Variable"
},
{
    id: "oops-225",
    question: "When designing a class hierarchy for vehicles where some vehicles are electric and some are fuel-based, and both types can be cars or bikes, which inheritance design is most appropriate?",
    options: [
        "Single level: Vehicle → ElectricVehicle, FuelVehicle, Car, Bike",
        "Multilevel: Vehicle → Car → ElectricCar",
        "Hybrid: Vehicle at top, then type-based (Electric/Fuel) and form-based (Car/Bike) as parallel hierarchies or using composition for the power source",
        "One flat class Vehicle with boolean flags for each type"
    ],
    answer: 2,
    explanation: "A hybrid approach using composition for power source (PowerSource interface with Electric/Fuel implementations) and inheritance for form (Car/Bike extending Vehicle) avoids the combinatorial explosion of classes and follows OCP and SRP.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-226",
    question: "A class Employee has methods calculateSalary(), generateReport(), sendEmail(), and validateData(). According to SOLID principles, how should this be refactored?",
    options: [
        "Keep it as is — one class is simpler",
        "Split into SalaryCalculator, ReportGenerator, EmailService, and DataValidator classes, with Employee composing them",
        "Only split sendEmail() into a separate class",
        "Make all methods static"
    ],
    answer: 1,
    explanation: "SRP states each class should have one reason to change. These four responsibilities can change independently. Employee should compose specialized classes rather than handling all responsibilities itself.",
    difficulty: "Medium",
    topic: "Single Responsibility Principle"
},
{
    id: "oops-227",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        System.out.println(new Object().toString());\n    }\n}",
    options: [
        "Object",
        "null",
        "A string like 'java.lang.Object@hashcode'",
        "Compilation error"
    ],
    answer: 2,
    explanation: "The default Object.toString() returns 'className@hashCodeInHex'. For example: 'java.lang.Object@15db9742'. The exact hash code varies, but the format is always class name followed by @ and hexadecimal hash code.",
    difficulty: "Medium",
    topic: "toString()"
},
{
    id: "oops-228",
    question: "What is the output of the following code?\n\nclass Test {\n    public String toString() {\n        return \"Custom\";\n    }\n    public static void main(String[] args) {\n        Test t = new Test();\n        System.out.println(t);\n        System.out.println(t.toString());\n    }\n}",
    options: [
        "java.lang.Object@hashcode\\nCustom",
        "Custom\\nCustom",
        "Custom\\njava.lang.Object@hashcode",
        "Compilation error"
    ],
    answer: 1,
    explanation: "Both println(t) and t.toString() call the overridden toString() method, which returns 'Custom'. println() implicitly calls toString() on any object passed to it.",
    difficulty: "Medium",
    topic: "toString()"
},
{
    id: "oops-229",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s = null;\n        System.out.println(String.valueOf(s));\n        System.out.println(s.toString());\n    }\n}",
    options: [
        "null\\nnull",
        "null\\nNullPointerException",
        "NullPointerException\\nNullPointerException",
        "Compilation error"
    ],
    answer: 1,
    explanation: "String.valueOf(null) safely returns the string 'null'. However, s.toString() throws NullPointerException because s is null and you cannot call a method on a null reference.",
    difficulty: "Medium",
    topic: "toString()"
},
{
    id: "oops-230",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        System.out.println(null + \" is null\");\n    }\n}",
    options: [
        "is null",
        "null is null",
        "NullPointerException",
        "Compilation error"
    ],
    answer: 1,
    explanation: "When null is used in string concatenation with '+', Java converts null to the string 'null'. So 'null' + ' is null' results in 'null is null'. This is a special case of string concatenation.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-231",
    question: "What is the output of the following code?\n\nclass Base {\n    private void method() { System.out.println(\"Base\"); }\n    public static void main(String[] args) {\n        new Derived().method();\n    }\n}\nclass Derived extends Base {\n    void method() { System.out.println(\"Derived\"); }\n}",
    options: [
        "Base",
        "Derived",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because Base's method() is private, so it's not visible in main(). Private methods are not inherited. Derived's method() is a different method (package-private), not an override. The call in main() cannot resolve to either.",
    difficulty: "Medium",
    topic: "Access Specifiers"
},
{
    id: "oops-232",
    question: "What is the output of the following code?\n\nclass Test {\n    private static void display() {\n        System.out.println(\"Private static\");\n    }\n    public static void main(String[] args) {\n        display();\n    }\n}",
    options: [
        "Private static",
        "Compilation error",
        "Runtime error",
        "No output"
    ],
    answer: 0,
    explanation: "A private static method can be called from within the same class. The main() method is in the same class (Test), so it can access the private static display() method without any issues.",
    difficulty: "Medium",
    topic: "Access Specifiers"
},
{
    id: "oops-233",
    question: "What is the output of the following code?\n\nclass Outer {\n    private void secret() { System.out.println(\"Secret\"); }\n    class Inner {\n        void reveal() { secret(); }\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Outer().new Inner().reveal();\n    }\n}",
    options: [
        "Secret",
        "Compilation error",
        "Runtime error",
        "No output"
    ],
    answer: 0,
    explanation: "An inner class can access private members of its enclosing class. The Inner class's reveal() method can call Outer's private secret() method. The object creation chain new Outer().new Inner().reveal() is valid.",
    difficulty: "Medium",
    topic: "Inner Classes"
},
{
    id: "oops-234",
    question: "What is the output of the following code?\n\nclass Outer {\n    static void show() { System.out.println(\"Outer static\"); }\n    class Inner {\n        static void show() { System.out.println(\"Inner static\"); }\n    }\n}",
    options: [
        "Outer static",
        "Inner static",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because a non-static inner class cannot have static methods (or static fields). Only static nested classes can declare static members. Inner classes are associated with an instance of the enclosing class.",
    difficulty: "Medium",
    topic: "Inner Classes"
},
{
    id: "oops-235",
    question: "What is the output of the following code?\n\nclass Outer {\n    static class Nested {\n        static void show() { System.out.println(\"Nested static\"); }\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Outer.Nested.show();\n    }\n}",
    options: [
        "Nested static",
        "Compilation error",
        "Runtime error",
        "No output"
    ],
    answer: 0,
    explanation: "A static nested class can have static methods. The method is called using the class name without needing an instance: Outer.Nested.show(). This is valid and prints 'Nested static'.",
    difficulty: "Medium",
    topic: "Nested Classes"
},
{
    id: "oops-236",
    question: "What is the role of a virtual function table (vtable) in OOP?",
    options: [
        "It stores all static variables of a class",
        "It is a table of function pointers used to support runtime polymorphism by mapping virtual method calls to their correct implementations",
        "It stores all objects created from a class",
        "It is used for garbage collection"
    ],
    answer: 1,
    explanation: "A vtable is a data structure used by compilers (especially C++) to support dynamic dispatch. Each class with virtual functions has a vtable containing pointers to its virtual function implementations, enabling correct method resolution at runtime.",
    difficulty: "Medium",
    topic: "Virtual Functions"
},
{
    id: "oops-237",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        Class c = \"Hello\".getClass();\n        System.out.println(c.getName());\n        System.out.println(c.getSuperclass().getName());\n    }\n}",
    options: [
        "Hello\\nObject",
        "java.lang.String\\njava.lang.Object",
        "String\\nObject",
        "Compilation error"
    ],
    answer: 1,
    explanation: "getClass() returns the Class object for String. getName() returns the fully qualified name 'java.lang.String'. getSuperclass() returns Object's Class, and its getName() returns 'java.lang.Object'.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-238",
    question: "In a plugin architecture for an IDE, plugins must implement a Plugin interface. The IDE loads plugins at runtime without knowing their specific types. Which OOP concepts enable this?",
    options: [
        "Only encapsulation",
        "Interface-based polymorphism and dynamic loading (reflection)",
        "Only inheritance",
        "Only method overloading"
    ],
    answer: 1,
    explanation: "The Plugin interface defines the contract. The IDE works with Plugin references (polymorphism). Reflection enables dynamic loading of plugin classes at runtime without compile-time dependencies on specific plugin types.",
    difficulty: "Medium",
    topic: "OOP Design Questions"
},
{
    id: "oops-239",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        System.out.println(new Integer(10) instanceof Integer);\n        System.out.println(new Integer(10) instanceof Number);\n        System.out.println(new Integer(10) instanceof Object);\n    }\n}",
    options: [
        "true true true",
        "true true false",
        "true false true",
        "false true true"
    ],
    answer: 0,
    explanation: "Integer IS an Integer (true), Integer extends Number so IS a Number (true), and Number extends Object so IS an Object (true). instanceof returns true for the actual type and all its supertypes.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-240",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        System.out.println(null instanceof String);\n        System.out.println(null instanceof Object);\n    }\n}",
    options: [
        "true true",
        "false false",
        "true false",
        "false true"
    ],
    answer: 1,
    explanation: "null instanceof any reference type always returns false. This is a special rule in Java: since null is not an instance of any type, instanceof safely returns false without throwing a NullPointerException.",
    difficulty: "Medium",
    topic: "Object Class"
},
{
    id: "oops-241",
    question: "What is the output of the following code?\n\nclass A {\n    static {\n        System.out.print(\"A static \");\n    }\n    {\n        System.out.print(\"A instance \");\n    }\n    A() {\n        System.out.print(\"A constructor \");\n    }\n}\nclass B extends A {\n    static {\n        System.out.print(\"B static \");\n    }\n    {\n        System.out.print(\"B instance \");\n    }\n    B() {\n        System.out.print(\"B constructor \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new B();\n    }\n}",
    options: [
        "A static B static A instance A constructor B instance B constructor ",
        "A static A instance A constructor B static B instance B constructor ",
        "B static A static A instance A constructor B instance B constructor ",
        "A static B static B instance B constructor A instance A constructor "
    ],
    answer: 0,
    explanation: "Order: (1) Parent static block, (2) Child static block (static blocks run once, top-down), (3) Parent instance block + constructor, (4) Child instance block + constructor. This is the full initialization order in Java.",
    difficulty: "Hard",
    topic: "Object Lifecycle"
},
{
    id: "oops-242",
    question: "What is the output of the following code?\n\nclass A {\n    static {\n        System.out.print(\"A \");\n    }\n}\nclass B extends A {\n    static {\n        System.out.print(\"B \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        System.out.print(\"Main \");\n        new B();\n        new B();\n    }\n}",
    options: [
        "Main A B A B",
        "A B Main A B",
        "Main A B B",
        "A B Main B"
    ],
    answer: 0,
    explanation: "Static blocks run only once when the class is first loaded. 'Main' prints first. On 'new B()', A's static block loads A (prints 'A'), then B's static block loads B (prints 'B'). The second 'new B()' doesn't re-trigger static blocks.",
    difficulty: "Hard",
    topic: "Static Members"
},
{
    id: "oops-243",
    question: "What is the output of the following code?\n\nclass Parent {\n    int x = 10;\n    Parent() {\n        System.out.print(x + \" \");\n        method();\n    }\n    void method() {\n        System.out.print(\"Parent method \" + x + \" \");\n    }\n}\nclass Child extends Parent {\n    int x = 20;\n    Child() {\n        System.out.print(x + \" \");\n    }\n    void method() {\n        System.out.print(\"Child method \" + x + \" \");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        new Child();\n    }\n}",
    options: [
        "10 Child method 0 20 ",
        "10 Parent method 10 20 ",
        "0 Child method 0 20 ",
        "20 Child method 20 20 "
    ],
    answer: 0,
    explanation: "Parent constructor: x=10 (Parent's x), method() calls Child's overridden method (dynamic dispatch), but Child's x is not yet initialized (default 0). After Parent constructor, Child's x is set to 20. Output: '10 Child method 0 20 '.",
    difficulty: "Hard",
    topic: "Constructor"
},
{
    id: "oops-244",
    question: "What is the output of the following code?\n\nclass Test {\n    public static void main(String[] args) {\n        String s1 = \"a\";\n        String s2 = s1 + \"b\";\n        String s3 = \"a\" + \"b\";\n        String s4 = s1 + \"b\";\n        System.out.println((s2 == s3) + \" \" + (s2 == s4));\n    }\n}",
    options: [
        "true true",
        "true false",
        "false false",
        "false true"
    ],
    answer: 2,
    explanation: "s3 is a compile-time constant ('ab' in pool). s2 and s4 are runtime concatenations creating new String objects on the heap. Neither s2 nor s4 is in the pool, and they are different objects, so both comparisons are false.",
    difficulty: "Hard",
    topic: "Object Creation"
},
{
    id: "oops-245",
    question: "What is the output of the following code?\n\nclass Parent {\n    void method() {\n        System.out.println(\"Parent\");\n    }\n}\nclass Child extends Parent {\n    @Override\n    void method() throws RuntimeException {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.method();\n    }\n}",
    options: [
        "Parent",
        "Child",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "An overriding method can throw unchecked exceptions (RuntimeException) even if the parent method doesn't declare any. This is valid because unchecked exceptions don't need to be declared or caught.",
    difficulty: "Hard",
    topic: "Method Overriding"
},
{
    id: "oops-246",
    question: "What is the output of the following code?\n\nclass Parent {\n    void method() throws Exception {\n        System.out.println(\"Parent\");\n    }\n}\nclass Child extends Parent {\n    @Override\n    void method() {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.method();\n    }\n}",
    options: [
        "Parent",
        "Child",
        "Compilation error",
        "Runtime error"
    ],
    answer: 1,
    explanation: "An overriding method can choose to throw fewer or no exceptions compared to the parent method. Child's method() throws no exceptions, which is valid since it's a subset of Parent's exception declaration.",
    difficulty: "Hard",
    topic: "Method Overriding"
},
{
    id: "oops-247",
    question: "What is the output of the following code?\n\nclass Parent {\n    void method() {\n        System.out.println(\"Parent\");\n    }\n}\nclass Child extends Parent {\n    @Override\n    void method() throws Exception {\n        System.out.println(\"Child\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Parent p = new Child();\n        p.method();\n    }\n}",
    options: [
        "Parent",
        "Child",
        "Compilation error",
        "Runtime error"
    ],
    answer: 2,
    explanation: "Compilation error because the overriding method throws a checked Exception (which is broader than the parent's no-exception declaration). An overriding method can only throw the same or narrower checked exceptions than the parent.",
    difficulty: "Hard",
    topic: "Method Overriding"
}
]