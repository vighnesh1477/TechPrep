// Database Management System (DBMS) Questions

[
{
    "id": "dbms-1",
    "question": "What does DBMS stand for?",
    "options": [
        "Data Management System",
        "Database Management System",
        "Database Manipulation System",
        "Data Backup Management System"
    ],
    "answer": 1,
    "explanation": "DBMS stands for Database Management System. It is software for storing, retrieving, and managing large amounts of data efficiently.",
    "difficulty": "Easy",
    "topic": "Introduction to DBMS"
},
{
    "id": "dbms-2",
    "question": "Which of the following is an example of a DBMS?",
    "options": [
        "Microsoft Excel",
        "MySQL",
        "Google Drive",
        "Adobe Photoshop"
    ],
    "answer": 1,
    "explanation": "MySQL is a relational database management system (RDBMS). Excel is a spreadsheet application, not a full-fledged DBMS.",
    "difficulty": "Easy",
    "topic": "Introduction to DBMS"
},
{
    "id": "dbms-3",
    "question": "What is the primary difference between Data and Information?",
    "options": [
        "Data is processed; Information is raw.",
        "Data is raw facts; Information is processed data that is meaningful.",
        "There is no difference.",
        "Information is raw facts; Data is processed."
    ],
    "answer": 1,
    "explanation": "Data consists of raw, unorganized facts. Once data is processed, organized, and structured, it becomes meaningful information.",
    "difficulty": "Easy",
    "topic": "Data"
},
{
    "id": "dbms-4",
    "question": "What is Metadata in the context of a database?",
    "options": [
        "The actual data stored in tables.",
        "Data about data, such as table schemas and data types.",
        "A backup of the database.",
        "Deleted records."
    ],
    "answer": 1,
    "explanation": "Metadata is 'data about data'. It describes the properties and characteristics of the actual data, like column names, data types, and constraints.",
    "difficulty": "Easy",
    "topic": "Metadata"
},
{
    "id": "dbms-5",
    "question": "Which database user is responsible for creating tables, views, and schemas?",
    "options": [
        "End User",
        "Database Administrator (DBA)",
        "Application Programmer",
        "Naive User"
    ],
    "answer": 1,
    "explanation": "The Database Administrator (DBA) manages the database structure, creates schemas and tables, and controls access permissions.",
    "difficulty": "Easy",
    "topic": "Database Users"
},
{
    "id": "dbms-6",
    "question": "Which architecture of DBMS describes the separation into Physical, Logical, and View levels?",
    "options": [
        "One-tier architecture",
        "Two-tier architecture",
        "Three-schema architecture",
        "N-tier architecture"
    ],
    "answer": 2,
    "explanation": "The Three-schema architecture (ANSI-SPARC) divides the database system into three levels: Internal (Physical), Conceptual (Logical), and External (View) levels.",
    "difficulty": "Easy",
    "topic": "Three Schema Architecture"
},
{
    "id": "dbms-7",
    "question": "What does Logical Data Independence mean?",
    "options": [
        "The ability to change the physical storage without affecting the conceptual schema.",
        "The ability to change the conceptual schema without affecting the external views.",
        "The ability to change the external views without affecting the conceptual schema.",
        "The ability to change the hardware."
    ],
    "answer": 1,
    "explanation": "Logical data independence means that changes at the conceptual level (e.g., adding a new column) do not require changes to the external views or application programs.",
    "difficulty": "Easy",
    "topic": "Data Independence"
},
{
    "id": "dbms-8",
    "question": "Which of the following is an advantage of using a DBMS over a file system?",
    "options": [
        "Increased data redundancy.",
        "Lack of data integrity.",
        "Centralized data management.",
        "Difficulty in sharing data."
    ],
    "answer": 2,
    "explanation": "A DBMS provides centralized data management, making it easier to manage, share, and secure data compared to scattered file systems.",
    "difficulty": "Easy",
    "topic": "Advantages of DBMS"
},
{
    "id": "dbms-9",
    "question": "Which of the following is a disadvantage of a DBMS?",
    "options": [
        "Data redundancy",
        "Data isolation",
        "High cost and complexity",
        "Lack of security"
    ],
    "answer": 2,
    "explanation": "DBMS software can be expensive to purchase, maintain, and requires specialized hardware and trained personnel, making it complex.",
    "difficulty": "Easy",
    "topic": "Disadvantages of DBMS"
},
{
    "id": "dbms-10",
    "question": "Which language is used to define the structure of a database schema?",
    "options": [
        "DML",
        "DDL",
        "TCL",
        "DCL"
    ],
    "answer": 1,
    "explanation": "Data Definition Language (DDL) is used to define and modify the database structure, including CREATE, ALTER, and DROP statements.",
    "difficulty": "Easy",
    "topic": "DDL"
},
{
    "id": "dbms-11",
    "question": "Which of the following is a DML command?",
    "options": [
        "CREATE",
        "UPDATE",
        "GRANT",
        "COMMIT"
    ],
    "answer": 1,
    "explanation": "Data Manipulation Language (DML) is used to manipulate data within tables. UPDATE is a DML command, whereas CREATE is DDL, GRANT is DCL, and COMMIT is TCL.",
    "difficulty": "Easy",
    "topic": "DML"
},
{
    "id": "dbms-12",
    "question": "Which command is used to give a user specific permissions in a database?",
    "options": [
        "REVOKE",
        "GRANT",
        "ALLOW",
        "PERMIT"
    ],
    "answer": 1,
    "explanation": "The GRANT command is a Data Control Language (DCL) command used to provide specific privileges to database users.",
    "difficulty": "Easy",
    "topic": "DCL"
},
{
    "id": "dbms-13",
    "question": "Which category does the ROLLBACK command fall under?",
    "options": [
        "DDL",
        "DML",
        "DCL",
        "TCL"
    ],
    "answer": 3,
    "explanation": "Transaction Control Language (TCL) manages transactions. ROLLBACK is used to undo transactions that have not been saved.",
    "difficulty": "Easy",
    "topic": "TCL"
},
{
    "id": "dbms-14",
    "question": "In the Hierarchical data model, data is organized as a:",
    "options": [
        "Network",
        "Tree structure",
        "Table",
        "Graph"
    ],
    "answer": 1,
    "explanation": "The Hierarchical model organizes data in a tree-like structure where each record has a single parent, though a parent can have multiple children.",
    "difficulty": "Easy",
    "topic": "Hierarchical Model"
},
{
    "id": "dbms-15",
    "question": "Which data model allows a child record to have multiple parent records?",
    "options": [
        "Hierarchical Model",
        "Relational Model",
        "Network Model",
        "Entity-Relationship Model"
    ],
    "answer": 2,
    "explanation": "The Network model extends the hierarchical model by allowing many-to-many relationships, meaning a child node can have multiple parents.",
    "difficulty": "Easy",
    "topic": "Network Model"
},
{
    "id": "dbms-16",
    "question": "In the Relational Model, data is stored in the form of:",
    "options": [
        "Trees",
        "Graphs",
        "Two-dimensional tables",
        "Hierarchical files"
    ],
    "answer": 2,
    "explanation": "The Relational Model, proposed by E.F. Codd, organizes data into two-dimensional tables consisting of rows (tuples) and columns (attributes).",
    "difficulty": "Easy",
    "topic": "Relational Model"
},
{
    "id": "dbms-17",
    "question": "What does an ER diagram represent?",
    "options": [
        "Physical storage layout",
        "Logical structure of the database",
        "Hardware architecture",
        "Query execution plan"
    ],
    "answer": 1,
    "explanation": "An Entity-Relationship (ER) diagram is a visual representation of the logical structure of a database, showing entities, attributes, and their relationships.",
    "difficulty": "Easy",
    "topic": "Entity Relationship Model"
},
{
    "id": "dbms-18",
    "question": "A real-world object or concept that can be distinctly identified is called a(n):",
    "options": [
        "Attribute",
        "Relationship",
        "Entity",
        "Schema"
    ],
    "answer": 2,
    "explanation": "An entity is a distinct, real-world object or concept (e.g., a student, an employee, a car) that exists independently.",
    "difficulty": "Easy",
    "topic": "Entities"
},
{
    "id": "dbms-19",
    "question": "Which type of attribute can be derived from other attributes in the database?",
    "options": [
        "Simple attribute",
        "Composite attribute",
        "Derived attribute",
        "Multi-valued attribute"
    ],
    "answer": 2,
    "explanation": "A derived attribute's value is calculated or derived from other stored attributes, such as 'Age' derived from 'Date of Birth'.",
    "difficulty": "Easy",
    "topic": "Types of Attributes"
},
{
    "id": "dbms-20",
    "question": "An attribute that can hold multiple values for a single entity is called a:",
    "options": [
        "Composite attribute",
        "Multi-valued attribute",
        "Derived attribute",
        "Complex attribute"
    ],
    "answer": 1,
    "explanation": "A multi-valued attribute can store more than one value for a single entity instance, such as a person having multiple phone numbers.",
    "difficulty": "Easy",
    "topic": "Types of Attributes"
},
{
    "id": "dbms-21",
    "question": "What is the degree of a relationship in an ER model?",
    "options": [
        "The number of entities associated with the relationship.",
        "The number of attributes in the relationship.",
        "The number of tuples in the table.",
        "The number of keys in the relationship."
    ],
    "answer": 0,
    "explanation": "The degree of a relationship refers to the number of participating entities. For example, a binary relationship has a degree of 2.",
    "difficulty": "Easy",
    "topic": "Degree of Relationship"
},
{
    "id": "dbms-22",
    "question": "In a 1:N relationship between Entity A and Entity B:",
    "options": [
        "One instance of A is related to exactly one instance of B.",
        "One instance of A can be related to many instances of B.",
        "Many instances of A are related to many instances of B.",
        "No instances of A can relate to B."
    ],
    "answer": 1,
    "explanation": "A 1:N (One-to-Many) cardinality means a single record in Entity A can be associated with multiple records in Entity B, but not vice versa.",
    "difficulty": "Easy",
    "topic": "Cardinality"
},
{
    "id": "dbms-23",
    "question": "If an entity MUST participate in a relationship, it is called:",
    "options": [
        "Partial participation",
        "Total participation",
        "Optional participation",
        "Weak participation"
    ],
    "answer": 1,
    "explanation": "Total participation means every instance of that entity must participate in at least one instance of the relationship, represented by a double line in ER diagrams.",
    "difficulty": "Easy",
    "topic": "Participation Constraints"
},
{
    "id": "dbms-24",
    "question": "A weak entity does not have its own:",
    "options": [
        "Attributes",
        "Relationships",
        "Primary Key",
        "Foreign Key"
    ],
    "answer": 2,
    "explanation": "A weak entity does not have a sufficient set of attributes to form a primary key on its own and relies on a related strong entity (identifying owner) for its identification.",
    "difficulty": "Easy",
    "topic": "Weak Entity"
},
{
    "id": "dbms-25",
    "question": "A primary key must be:",
    "options": [
        "Null",
        "Unique and Not Null",
        "Numeric only",
        "A composite key"
    ],
    "answer": 1,
    "explanation": "A primary key uniquely identifies each record in a table and must contain unique values. It cannot contain NULL values.",
    "difficulty": "Easy",
    "topic": "Primary Key"
},
{
    "id": "dbms-26",
    "question": "A foreign key in one table references the:",
    "options": [
        "Candidate key in another table",
        "Primary key in another table",
        "Any attribute in the same table",
        "Super key in another table"
    ],
    "answer": 1,
    "explanation": "A foreign key is an attribute or set of attributes in one table that refers to the primary key of another table, establishing a link between them.",
    "difficulty": "Easy",
    "topic": "Foreign Key"
},
{
    "id": "dbms-27",
    "question": "What is a Candidate Key?",
    "options": [
        "A key chosen to be the primary identifier.",
        "A minimal set of attributes that can uniquely identify a tuple.",
        "A key used only for indexing.",
        "A key that contains null values."
    ],
    "answer": 1,
    "explanation": "A candidate key is a minimal superkey—meaning it is a set of attributes that can uniquely identify a tuple, and no proper subset of it can do so.",
    "difficulty": "Easy",
    "topic": "Candidate Key"
},
{
    "id": "dbms-28",
    "question": "An Alternate Key is a:",
    "options": [
        "Primary key",
        "Candidate key that is not chosen as the primary key",
        "Foreign key",
        "Composite key"
    ],
    "answer": 1,
    "explanation": "All candidate keys that are not selected to be the primary key are called alternate keys. They can still uniquely identify tuples.",
    "difficulty": "Easy",
    "topic": "Alternate Key"
},
{
    "id": "dbms-29",
    "question": "A Super Key is any set of attributes that can:",
    "options": [
        "Sort the table.",
        "Uniquely identify a tuple, but may contain redundant attributes.",
        "Create indexes.",
        "Link two tables together."
    ],
    "answer": 1,
    "explanation": "A super key uniquely identifies a database tuple. All candidate keys are super keys, but a super key might contain extra, unnecessary attributes.",
    "difficulty": "Easy",
    "topic": "Super Key"
},
{
    "id": "dbms-30",
    "question": "A key that is artificially generated to uniquely identify a record is called a:",
    "options": [
        "Natural key",
        "Surrogate key",
        "Composite key",
        "Foreign key"
    ],
    "answer": 1,
    "explanation": "A surrogate key is a system-generated unique identifier (like an auto-incremented integer or UUID) that has no business meaning.",
    "difficulty": "Easy",
    "topic": "Surrogate Key"
},
{
    "id": "dbms-31",
    "question": "In relational algebra, which operation is used to select specific rows from a table based on a condition?",
    "options": [
        "Projection",
        "Selection",
        "Cartesian Product",
        "Join"
    ],
    "answer": 1,
    "explanation": "The Selection operation (denoted by sigma, σ) filters rows (tuples) from a relation that satisfy a given condition.",
    "difficulty": "Easy",
    "topic": "Selection"
},
{
    "id": "dbms-32",
    "question": "Which relational algebra operation extracts specific columns from a table?",
    "options": [
        "Selection",
        "Projection",
        "Union",
        "Intersection"
    ],
    "answer": 1,
    "explanation": "The Projection operation (denoted by pi, π) extracts specific attributes (columns) from a relation and eliminates duplicates.",
    "difficulty": "Easy",
    "topic": "Projection"
},
{
    "id": "dbms-33",
    "question": "The Union operation in relational algebra requires the two relations to have the:",
    "options": [
        "Same number of rows",
        "Same number of columns with compatible data types",
        "Same primary key",
        "Same name"
    ],
    "answer": 1,
    "explanation": "For a Union operation to be valid, both relations must be union-compatible, meaning they must have the same number of columns and corresponding columns must have compatible data types.",
    "difficulty": "Easy",
    "topic": "Union"
},
{
    "id": "dbms-34",
    "question": "Which SQL keyword is used to eliminate duplicate rows from the result set?",
    "options": [
        "UNIQUE",
        "DISTINCT",
        "DIFFERENT",
        "SINGLE"
    ],
    "answer": 1,
    "explanation": "The DISTINCT keyword is used in a SELECT statement to return only unique values, eliminating duplicate rows from the result set.",
    "difficulty": "Easy",
    "topic": "DISTINCT"
},
{
    "id": "dbms-35",
    "question": "Which clause is used to filter records after they have been grouped?",
    "options": [
        "WHERE",
        "HAVING",
        "FILTER",
        "GROUP BY"
    ],
    "answer": 1,
    "explanation": "The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions. It filters records after the GROUP BY clause.",
    "difficulty": "Easy",
    "topic": "HAVING"
},
{
    "id": "dbms-36",
    "question": "Which aggregate function counts the number of rows in a table?",
    "options": [
        "SUM()",
        "COUNT()",
        "TOTAL()",
        "AVG()"
    ],
    "answer": 1,
    "explanation": "COUNT() returns the number of rows that match a specified criterion. COUNT(*) counts all rows, while COUNT(column) counts non-null values in that column.",
    "difficulty": "Easy",
    "topic": "COUNT"
},
{
    "id": "dbms-37",
    "question": "What does the AVG() function do?",
    "options": [
        "Finds the highest value",
        "Finds the lowest value",
        "Calculates the average of a set of values",
        "Counts the values"
    ],
    "answer": 2,
    "explanation": "The AVG() function returns the average value of a numeric column. It sums all values and divides by the number of non-null values.",
    "difficulty": "Easy",
    "topic": "AVG"
},
{
    "id": "dbms-38",
    "question": "Which SQL operator is used to search for a specified pattern in a column?",
    "options": [
        "BETWEEN",
        "IN",
        "LIKE",
        "MATCH"
    ],
    "answer": 2,
    "explanation": "The LIKE operator is used in a WHERE clause to search for a specified pattern in a column, often using wildcards like '%' and '_'.",
    "difficulty": "Easy",
    "topic": "LIKE"
},
{
    "id": "dbms-39",
    "question": "In the LIKE operator, what does the underscore '_' wildcard represent?",
    "options": [
        "Zero or more characters",
        "Exactly one character",
        "A space",
        "Any number"
    ],
    "answer": 1,
    "explanation": "The underscore '_' represents a single character. For example, 'A_' would match 'AB', 'AC', but not 'A' or 'ABC'.",
    "difficulty": "Easy",
    "topic": "LIKE"
},
{
    "id": "dbms-40",
    "question": "Which operator selects values within a given range?",
    "options": [
        "IN",
        "RANGE",
        "BETWEEN",
        "WITHIN"
    ],
    "answer": 2,
    "explanation": "The BETWEEN operator selects values within a given inclusive range. For example, `WHERE price BETWEEN 10 AND 20` selects prices from 10 to 20.",
    "difficulty": "Easy",
    "topic": "BETWEEN"
},
{
    "id": "dbms-41",
    "question": "The IN operator allows you to specify multiple values in a WHERE clause. It is functionally equivalent to multiple:",
    "options": [
        "AND conditions",
        "OR conditions",
        "NOT conditions",
        "XOR conditions"
    ],
    "answer": 1,
    "explanation": "`column IN (val1, val2)` is functionally equivalent to `column = val1 OR column = val2`.",
    "difficulty": "Easy",
    "topic": "IN"
},
{
    "id": "dbms-42",
    "question": "How do you check for NULL values in SQL?",
    "options": [
        "WHERE column = NULL",
        "WHERE column == NULL",
        "WHERE column IS NULL",
        "WHERE column EQUALS NULL"
    ],
    "answer": 2,
    "explanation": "You must use the `IS NULL` operator to test for NULL values. Using `= NULL` will not work because NULL is not a value but an unknown state.",
    "difficulty": "Easy",
    "topic": "IS NULL"
},
{
    "id": "dbms-43",
    "question": "Which SQL keyword is used to sort the result-set in ascending or descending order?",
    "options": [
        "SORT BY",
        "ORDER BY",
        "GROUP BY",
        "ARRANGE BY"
    ],
    "answer": 1,
    "explanation": "The ORDER BY clause is used to sort the result set in ascending (ASC, default) or descending (DESC) order based on one or more columns.",
    "difficulty": "Easy",
    "topic": "ORDER BY"
},
{
    "id": "dbms-44",
    "question": "Which type of join returns only the rows where there is a match in both tables?",
    "options": [
        "LEFT JOIN",
        "RIGHT JOIN",
        "INNER JOIN",
        "FULL OUTER JOIN"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only those rows that have matching values in both tables being joined.",
    "difficulty": "Easy",
    "topic": "Inner Join"
},
{
    "id": "dbms-45",
    "question": "A LEFT JOIN returns:",
    "options": [
        "Only matched rows from both tables.",
        "All rows from the left table, and matched rows from the right table.",
        "All rows from the right table, and matched rows from the left table.",
        "All rows from both tables."
    ],
    "answer": 1,
    "explanation": "A LEFT JOIN returns all records from the left table, and the matched records from the right table. If no match is found, NULLs are returned for the right table's columns.",
    "difficulty": "Easy",
    "topic": "Left Join"
},
{
    "id": "dbms-46",
    "question": "What is a Self Join?",
    "options": [
        "A join of a table with itself.",
        "A join that requires no conditions.",
        "A join between two identical tables in different databases.",
        "A join that only returns one row."
    ],
    "answer": 0,
    "explanation": "A self join is a regular join, but the table is joined with itself. It requires using table aliases to differentiate the two instances of the same table.",
    "difficulty": "Easy",
    "topic": "Self Join"
},
{
    "id": "dbms-47",
    "question": "Which SQL command is used to give a temporary name to a table or column in a query?",
    "options": [
        "RENAME",
        "AS",
        "DEFINE",
        "ALIAS"
    ],
    "answer": 1,
    "explanation": "The AS keyword is used to create aliases. While the AS keyword is optional in some SQL dialects, it is standard practice for readability.",
    "difficulty": "Easy",
    "topic": "Aliases"
},
{
    "id": "dbms-48",
    "question": "Which of the following is NOT a standard SQL aggregate function?",
    "options": [
        "MAX()",
        "COUNT()",
        "CONCAT()",
        "MIN()"
    ],
    "answer": 2,
    "explanation": "CONCAT() is a string function used to combine strings. MAX, MIN, and COUNT are aggregate functions that operate on a set of values.",
    "difficulty": "Easy",
    "topic": "Aggregate Functions"
},
{
    "id": "dbms-49",
    "question": "What is a view in SQL?",
    "options": [
        "A physical copy of a table.",
        "A virtual table based on the result-set of an SQL statement.",
        "An index on a table.",
        "A backup of a table."
    ],
    "answer": 1,
    "explanation": "A view is a virtual table whose contents are defined by a query. It does not store data physically (unless materialized), it just presents data from underlying tables.",
    "difficulty": "Easy",
    "topic": "Views"
},
{
    "id": "dbms-50",
    "question": "Which of the following is true about a Clustered Index?",
    "options": [
        "The physical order of rows is the same as the index order.",
        "It creates a separate structure from the data.",
        "A table can have multiple clustered indexes.",
        "It is slower for range queries."
    ],
    "answer": 0,
    "explanation": "A clustered index sorts and stores the data rows in the table based on their key values. There can be only one clustered index per table because the data rows can only be sorted in one order.",
    "difficulty": "Easy",
    "topic": "Clustered Index"
},
{
    "id": "dbms-51",
    "question": "What is 1NF (First Normal Form)?",
    "options": [
        "No partial dependencies.",
        "No transitive dependencies.",
        "Every column must contain atomic (indivisible) values.",
        "No repeating groups and all attributes must depend on the primary key."
    ],
    "answer": 2,
    "explanation": "1NF requires that the domain of each attribute contains only atomic (indivisible) values, and the value of each attribute contains only a single value from that domain.",
    "difficulty": "Easy",
    "topic": "1NF"
},
{
    "id": "dbms-52",
    "question": "A transaction in a database must follow which set of properties?",
    "options": [
        "BASE",
        "ACID",
        "CRUD",
        "SOLID"
    ],
    "answer": 1,
    "explanation": "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties guarantee that database transactions are processed reliably.",
    "difficulty": "Easy",
    "topic": "ACID Properties"
},
{
    "id": "dbms-53",
    "question": "In ACID properties, 'Atomicity' means:",
    "options": [
        "Data is consistent across all nodes.",
        "The transaction is treated as a single, indivisible unit of work.",
        "Transactions are isolated from each other.",
        "Once committed, changes are permanent."
    ],
    "answer": 1,
    "explanation": "Atomicity ensures that a transaction either completes entirely (commits) or fails completely (rolls back), with no intermediate states left in the database.",
    "difficulty": "Easy",
    "topic": "ACID Properties"
},
{
    "id": "dbms-54",
    "question": "Which TCL command saves all changes made during the current transaction?",
    "options": [
        "SAVE",
        "COMMIT",
        "PERSIST",
        "END"
    ],
    "answer": 1,
    "explanation": "The COMMIT command is used to save all changes made by the current transaction, making them permanent in the database.",
    "difficulty": "Easy",
    "topic": "TCL"
},
{
    "id": "dbms-55",
    "question": "What is a deadlock in DBMS?",
    "options": [
        "A transaction that runs indefinitely.",
        "A situation where two or more transactions are waiting for each other to release locks.",
        "A query that takes too long to execute.",
        "A hardware failure during a transaction."
    ],
    "answer": 1,
    "explanation": "A deadlock occurs when two or more processes are mutually blocked because each is holding a resource the other needs, resulting in a permanent wait.",
    "difficulty": "Easy",
    "topic": "Deadlock"
},
{
    "id": "dbms-56",
    "question": "Which of the following is used to uniquely identify a row in a table but allows NULL values?",
    "options": [
        "Primary Key",
        "Unique Key",
        "Foreign Key",
        "Composite Key"
    ],
    "answer": 1,
    "explanation": "A Unique Key ensures that all values in a column are different. Unlike a Primary Key, a Unique Key can accept NULL values (usually one NULL per column in standard SQL).",
    "difficulty": "Easy",
    "topic": "Unique Key"
},
{
    "id": "dbms-57",
    "question": "What is a trigger in SQL?",
    "options": [
        "A stored procedure",
        "A set of actions automatically executed when a specific event occurs",
        "A type of index",
        "A constraint"
    ],
    "answer": 1,
    "explanation": "A trigger is a special type of stored procedure that automatically runs when an INSERT, UPDATE, or DELETE event occurs on a table.",
    "difficulty": "Easy",
    "topic": "Triggers"
},
{
    "id": "dbms-58",
    "question": "Which SQL statement is used to remove all rows from a table without logging the individual row deletions?",
    "options": [
        "DELETE",
        "DROP",
        "TRUNCATE",
        "REMOVE"
    ],
    "answer": 2,
    "explanation": "TRUNCATE TABLE removes all rows from a table quickly by deallocating the data pages, making it faster than DELETE and using less log space.",
    "difficulty": "Easy",
    "topic": "DML"
},
{
    "id": "dbms-59",
    "question": "What is the difference between DELETE and TRUNCATE?",
    "options": [
        "DELETE is DDL, TRUNCATE is DML.",
        "DELETE can be rolled back, TRUNCATE usually cannot.",
        "TRUNCATE fires triggers, DELETE does not.",
        "DELETE removes the table structure."
    ],
    "answer": 1,
    "explanation": "DELETE is a DML operation that logs individual row deletions and can be rolled back. TRUNCATE is a DDL operation that typically cannot be rolled back.",
    "difficulty": "Easy",
    "topic": "DML"
},
{
    "id": "dbms-60",
    "question": "What does the DROP command do?",
    "options": [
        "Removes all rows but keeps the structure.",
        "Removes the table structure and data completely.",
        "Deletes specific rows.",
        "Renames the table."
    ],
    "answer": 1,
    "explanation": "DROP is a DDL command that completely removes the table structure, data, indexes, triggers, and permissions associated with that table.",
    "difficulty": "Easy",
    "topic": "DDL"
},
{
    "id": "dbms-61",
    "question": "A Composite Key is a primary key that consists of:",
    "options": [
        "A single auto-generated number.",
        "Two or more columns combined to uniquely identify a row.",
        "A foreign key from another table.",
        "Only string values."
    ],
    "answer": 1,
    "explanation": "A composite key is a combination of two or more columns in a table that can be used to uniquely identify each row in the table when no single column is unique.",
    "difficulty": "Easy",
    "topic": "Composite Key"
},
{
    "id": "dbms-62",
    "question": "Which constraint ensures that a column cannot have a NULL value?",
    "options": [
        "UNIQUE",
        "NOT NULL",
        "CHECK",
        "DEFAULT"
    ],
    "answer": 1,
    "explanation": "The NOT NULL constraint enforces that a column must always contain a value, meaning you cannot insert or update a record without adding a value to this field.",
    "difficulty": "Easy",
    "topic": "NOT NULL"
},
{
    "id": "dbms-63",
    "question": "The DEFAULT constraint provides a:",
    "options": [
        "Primary key value",
        "Default value when no value is specified",
        "Check condition",
        "Foreign key link"
    ],
    "answer": 1,
    "explanation": "The DEFAULT constraint is used to insert a default value into a column if no specific value is provided during an INSERT operation.",
    "difficulty": "Easy",
    "topic": "DEFAULT"
},
{
    "id": "dbms-64",
    "question": "Which constraint limits the values that can be placed in a column based on a Boolean expression?",
    "options": [
        "UNIQUE",
        "CHECK",
        "DEFAULT",
        "NOT NULL"
    ],
    "answer": 1,
    "explanation": "The CHECK constraint is used to limit the value range that can be placed in a column. If the Boolean expression evaluates to false, the operation is rejected.",
    "difficulty": "Easy",
    "topic": "CHECK"
},
{
    "id": "dbms-65",
    "question": "Referential Integrity ensures that:",
    "options": [
        "All columns have unique values.",
        "A foreign key value must match a primary key in the referenced table or be NULL.",
        "All data types are consistent.",
        "No nulls exist in the database."
    ],
    "answer": 1,
    "explanation": "Referential integrity is a database concept that ensures relationships between tables remain consistent. It prevents actions that would leave orphaned records in the related table.",
    "difficulty": "Easy",
    "topic": "Referential Integrity"
},
{
    "id": "dbms-66",
    "question": "Which command is used to modify an existing table structure?",
    "options": [
        "UPDATE",
        "ALTER",
        "MODIFY",
        "CHANGE"
    ],
    "answer": 1,
    "explanation": "The ALTER command is a DDL statement used to add, modify, or drop columns in an existing table, or add/drop constraints.",
    "difficulty": "Easy",
    "topic": "DDL"
},
{
    "id": "dbms-67",
    "question": "What does the EXISTS operator do in SQL?",
    "options": [
        "Checks if a table exists.",
        "Returns true if the subquery returns at least one row.",
        "Checks if a column exists.",
        "Returns the existence of an index."
    ],
    "answer": 1,
    "explanation": "The EXISTS operator is used to test for the existence of any record in a subquery. It returns TRUE if the subquery returns one or more records.",
    "difficulty": "Easy",
    "topic": "EXISTS"
},
{
    "id": "dbms-68",
    "question": "A query inside another query is known as a:",
    "options": [
        "Outer query",
        "Subquery",
        "Superquery",
        "Meta query"
    ],
    "answer": 1,
    "explanation": "A subquery is a query nested inside another SQL query (such as SELECT, INSERT, UPDATE, or DELETE) or inside another subquery.",
    "difficulty": "Easy",
    "topic": "Subqueries"
},
{
    "id": "dbms-69",
    "question": "What is Physical Data Independence?",
    "options": [
        "Changing the conceptual schema without changing external views.",
        "Changing the physical storage without affecting the conceptual schema.",
        "Changing the external views without changing the physical storage.",
        "Changing the hardware without turning off the system."
    ],
    "answer": 1,
    "explanation": "Physical data independence means that changes to the internal/physical schema (like changing storage devices or indexing) do not affect the conceptual schema.",
    "difficulty": "Easy",
    "topic": "Data Independence"
},
{
    "id": "dbms-70",
    "question": "Which of the following is an example of a NoSQL database?",
    "options": [
        "MySQL",
        "Oracle",
        "MongoDB",
        "PostgreSQL"
    ],
    "answer": 2,
    "explanation": "MongoDB is a document-oriented NoSQL database. MySQL, Oracle, and PostgreSQL are all relational database management systems (RDBMS).",
    "difficulty": "Easy",
    "topic": "NoSQL Basics"
},
{
    "id": "dbms-71",
    "question": "In the CAP theorem, 'C' stands for:",
    "options": [
        "Concurrency",
        "Consistency",
        "Cost",
        "Cache"
    ],
    "answer": 1,
    "explanation": "The CAP theorem states that a distributed database can only provide two of three guarantees: Consistency, Availability, and Partition tolerance.",
    "difficulty": "Easy",
    "topic": "CAP Theorem"
},
{
    "id": "dbms-72",
    "question": "Which type of NoSQL database uses a simple key-value pair structure?",
    "options": [
        "Document Database",
        "Graph Database",
        "Key-Value Database",
        "Column-Family Database"
    ],
    "answer": 2,
    "explanation": "Key-Value databases store data as a collection of key-value pairs, where a key acts as a unique identifier. Examples include Redis and DynamoDB.",
    "difficulty": "Easy",
    "topic": "Key Value Database"
},
{
    "id": "dbms-73",
    "question": "What is Sharding?",
    "options": [
        "Creating backups of a database.",
        "Distributing data across multiple machines to improve performance.",
        "Deleting old data.",
        "Encrypting data."
    ],
    "answer": 1,
    "explanation": "Sharding is a database scaling technique where data is horizontally partitioned and distributed across multiple servers (shards) to manage large datasets and high traffic.",
    "difficulty": "Easy",
    "topic": "Sharding"
},
{
    "id": "dbms-74",
    "question": "Which storage structure organizes data in sorted order and allows efficient searches, insertions, and deletions?",
    "options": [
        "Heap File",
        "B+ Tree",
        "Sequential File",
        "Hash File"
    ],
    "answer": 1,
    "explanation": "A B+ Tree is a balanced tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in O(log n) time.",
    "difficulty": "Easy",
    "topic": "B+ Tree"
},
{
    "id": "dbms-75",
    "question": "A checkpoint in a DBMS is used to:",
    "options": [
        "Stop the database.",
        "Reduce the time needed for recovery by recording a known good state.",
        "Delete all logs.",
        "Backup the entire database to tape."
    ],
    "answer": 1,
    "explanation": "A checkpoint is a point in the transaction log where the DBMS writes all modified data pages from memory to disk, significantly speeding up crash recovery.",
    "difficulty": "Easy",
    "topic": "Checkpoint"
},
{
    "id": "dbms-76",
    "question": "Which file organization inserts new records at the end of the file without any specific order?",
    "options": [
        "Sequential File",
        "Hash File",
        "Heap File",
        "Indexed File"
    ],
    "answer": 2,
    "explanation": "A Heap file (or Pile file) stores records in no particular order. New records are simply appended to the end, making inserts fast but searches slow.",
    "difficulty": "Easy",
    "topic": "Heap File"
},
{
    "id": "dbms-77",
    "question": "What is a Cursor in SQL?",
    "options": [
        "A pointer to the mouse.",
        "A database object used to retrieve and manipulate rows one by one.",
        "A type of index.",
        "A special key."
    ],
    "answer": 1,
    "explanation": "A cursor is a database object that allows you to retrieve rows from a result set one at a time, enabling row-by-row processing in procedural extensions like PL/SQL.",
    "difficulty": "Easy",
    "topic": "Cursors"
},
{
    "id": "dbms-78",
    "question": "Which of the following is true about a Materialized View?",
    "options": [
        "It does not store any data.",
        "It stores the result set of the query physically on disk.",
        "It cannot be refreshed.",
        "It is exactly the same as a standard view."
    ],
    "answer": 1,
    "explanation": "Unlike a standard view, a materialized view physically stores the query result on disk. This improves read performance but requires refreshing when underlying data changes.",
    "difficulty": "Easy",
    "topic": "Materialized Views"
},
{
    "id": "dbms-79",
    "question": "Which of the following is NOT a type of relationship in an ER diagram?",
    "options": [
        "One-to-One",
        "One-to-Many",
        "Many-to-Many",
        "None-to-Many"
    ],
    "answer": 3,
    "explanation": "Standard cardinalities in ER diagrams are One-to-One (1:1), One-to-Many (1:N), and Many-to-Many (M:N). 'None-to-Many' is not a valid relationship type.",
    "difficulty": "Easy",
    "topic": "Cardinality"
},
{
    "id": "dbms-80",
    "question": "What is the main purpose of an Index?",
    "options": [
        "To delete data faster.",
        "To speed up data retrieval.",
        "To enforce foreign keys.",
        "To create backups."
    ],
    "answer": 1,
    "explanation": "An index is a database structure that improves the speed of data retrieval operations on a table at the cost of additional writes and storage space.",
    "difficulty": "Easy",
    "topic": "Indexes"
},
{
    "id": "dbms-81",
    "question": "What is a Tuple in a relational database?",
    "options": [
        "A column",
        "A row",
        "A table",
        "A database"
    ],
    "answer": 1,
    "explanation": "In relational database terminology, a tuple represents a single record or row in a table.",
    "difficulty": "Easy",
    "topic": "Relational Model"
},
{
    "id": "dbms-82",
    "question": "What is an Attribute in a relational database?",
    "options": [
        "A row",
        "A column",
        "A key",
        "A schema"
    ],
    "answer": 1,
    "explanation": "An attribute refers to a column in a table. It represents a specific property or characteristic of the entity represented by the table.",
    "difficulty": "Easy",
    "topic": "Relational Model"
},
{
    "id": "dbms-83",
    "question": "Which of the following is used to store data in a graph database?",
    "options": [
        "Tables",
        "Nodes and Edges",
        "Documents",
        "Key-Value pairs"
    ],
    "answer": 1,
    "explanation": "Graph databases like Neo4j store data as nodes (entities), edges (relationships), and properties (attributes of nodes/edges).",
    "difficulty": "Easy",
    "topic": "Graph Database"
},
{
    "id": "dbms-84",
    "question": "A stored procedure is a set of precompiled SQL statements stored in the:",
    "options": [
        "Client application",
        "Database server",
        "Backup drive",
        "Network router"
    ],
    "answer": 1,
    "explanation": "A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again. It is stored in the database server.",
    "difficulty": "Easy",
    "topic": "Stored Procedures"
},
{
    "id": "dbms-85",
    "question": "What is the difference between a stored procedure and a function?",
    "options": [
        "A function must return a value, a stored procedure may or may not.",
        "A stored procedure must return a value.",
        "There is no difference.",
        "A function cannot have parameters."
    ],
    "answer": 0,
    "explanation": "A function is required to return a value and can be used directly in SQL queries (e.g., in a SELECT list). A stored procedure does not have to return a value.",
    "difficulty": "Easy",
    "topic": "Functions"
},
{
    "id": "dbms-86",
    "question": "Which command is used to remove access privileges from a user?",
    "options": [
        "DENY",
        "REMOVE",
        "REVOKE",
        "DELETE PRIVILEGE"
    ],
    "answer": 2,
    "explanation": "The REVOKE command is used to take back previously granted or denied privileges from a database user or role.",
    "difficulty": "Easy",
    "topic": "REVOKE"
},
{
    "id": "dbms-87",
    "question": "What is Data Partitioning?",
    "options": [
        "Deleting data into smaller chunks.",
        "Dividing a large table into smaller, more manageable pieces.",
        "Encrypting parts of a table.",
        "Moving data to a different database."
    ],
    "answer": 1,
    "explanation": "Data partitioning involves splitting a large database table into smaller, more manageable parts (partitions) to improve query performance and manageability.",
    "difficulty": "Easy",
    "topic": "Partitioning"
},
{
    "id": "dbms-88",
    "question": "Which backup type only backs up the data that has changed since the last full backup?",
    "options": [
        "Full Backup",
        "Differential Backup",
        "Incremental Backup",
        "Log Backup"
    ],
    "answer": 1,
    "explanation": "A differential backup copies all the data that has changed since the last full backup. It is faster than a full backup but slower to restore than an incremental one.",
    "difficulty": "Easy",
    "topic": "Backup"
},
{
    "id": "dbms-89",
    "question": "Database Replication is primarily used for:",
    "options": [
        "Reducing storage space.",
        "Improving data availability and reliability.",
        "Encrypting data.",
        "Normalizing tables."
    ],
    "answer": 1,
    "explanation": "Replication involves copying and maintaining database objects in multiple databases to improve availability, fault tolerance, and to allow load balancing.",
    "difficulty": "Easy",
    "topic": "Replication"
},
{
    "id": "dbms-90",
    "question": "Which SQL command is used to create a new database user?",
    "options": [
        "ADD USER",
        "CREATE USER",
        "INSERT USER",
        "NEW USER"
    ],
    "answer": 1,
    "explanation": "The CREATE USER statement is used to create a new database account/user, allowing them to authenticate and connect to the database.",
    "difficulty": "Easy",
    "topic": "Database Security"
},
{
    "id": "dbms-91",
    "question": "What is a Sequence in a database?",
    "options": [
        "A type of join.",
        "A database object that generates a sequence of unique numbers.",
        "A set of SQL commands.",
        "An ordered list of tables."
    ],
    "answer": 1,
    "explanation": "A sequence is a schema object that generates a series of unique integers, often used to generate primary keys automatically.",
    "difficulty": "Easy",
    "topic": "Sequences"
},
{
    "id": "dbms-92",
    "question": "Which type of join returns all rows from both tables, matching where possible, and NULLs where there is no match?",
    "options": [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL OUTER JOIN"
    ],
    "answer": 3,
    "explanation": "A FULL OUTER JOIN combines the results of both LEFT and RIGHT joins. It returns all rows from both tables, placing NULLs where there is no match.",
    "difficulty": "Easy",
    "topic": "Full Outer Join"
},
{
    "id": "dbms-93",
    "question": "What does a Cross Join produce?",
    "options": [
        "Only matching rows",
        "The Cartesian product of the two tables",
        "Rows with NULLs",
        "A filtered subset"
    ],
    "answer": 1,
    "explanation": "A CROSS JOIN returns the Cartesian product of the two tables, meaning it combines every row from the first table with every row from the second table.",
    "difficulty": "Easy",
    "topic": "Cross Join"
},
{
    "id": "dbms-94",
    "question": "Which of the following represents a Weak Entity in an ER diagram?",
    "options": [
        "A single rectangle",
        "A double rectangle",
        "A diamond",
        "An oval"
    ],
    "answer": 1,
    "explanation": "In an ER diagram, a weak entity is represented by a double rectangle to distinguish it from a strong entity, which is represented by a single rectangle.",
    "difficulty": "Easy",
    "topic": "Weak Entity"
},
{
    "id": "dbms-95",
    "question": "A relationship that links a weak entity to its identifying strong entity is called a(n):",
    "options": [
        "Weak Relationship",
        "Identifying Relationship",
        "Partial Relationship",
        "Total Relationship"
    ],
    "answer": 1,
    "explanation": "An identifying relationship is the relationship between a weak entity set and its owner/strong entity set. It is represented by a double diamond in ER diagrams.",
    "difficulty": "Easy",
    "topic": "Weak Entity"
},
{
    "id": "dbms-96",
    "question": "What does the 'I' in ACID stand for?",
    "options": [
        "Integrity",
        "Isolation",
        "Integration",
        "Implementation"
    ],
    "answer": 1,
    "explanation": "The 'I' in ACID stands for Isolation. It ensures that concurrently executing transactions do not interfere with each other, leaving the database in the same state as if they were executed sequentially.",
    "difficulty": "Easy",
    "topic": "ACID Properties"
},
{
    "id": "dbms-97",
    "question": "What does the 'D' in ACID stand for?",
    "options": [
        "Data",
        "Durability",
        "Deletion",
        "Dependency"
    ],
    "answer": 1,
    "explanation": "The 'D' in ACID stands for Durability. It guarantees that once a transaction is committed, its changes are permanent and will survive system failures.",
    "difficulty": "Easy",
    "topic": "ACID Properties"
},
{
    "id": "dbms-98",
    "question": "Which of the following is a DDL command?",
    "options": [
        "SELECT",
        "INSERT",
        "DROP",
        "UPDATE"
    ],
    "answer": 2,
    "explanation": "DROP is a Data Definition Language (DDL) command used to remove database objects like tables, views, and indexes. SELECT, INSERT, and UPDATE are DML commands.",
    "difficulty": "Easy",
    "topic": "DDL"
},
{
    "id": "dbms-99",
    "question": "Which of the following is NOT a property of a transaction?",
    "options": [
        "Atomicity",
        "Consistency",
        "Availability",
        "Durability"
    ],
    "answer": 2,
    "explanation": "Availability is part of the CAP theorem for distributed systems, not the ACID properties for transactions.",
    "difficulty": "Easy",
    "topic": "ACID Properties"
},
{
    "id": "dbms-100",
    "question": "Which data model is primarily used by MongoDB?",
    "options": [
        "Relational",
        "Key-Value",
        "Document",
        "Graph"
    ],
    "answer": 2,
    "explanation": "MongoDB is a document-oriented NoSQL database. It stores data in flexible, JSON-like documents (BSON) rather than traditional tables and rows.",
    "difficulty": "Easy",
    "topic": "Document Database"
},
{
    "id": "dbms-101",
    "question": "In the Three-Schema Architecture, the External Level describes:",
    "options": [
        "How data is physically stored on disk.",
        "The logical structure of the entire database.",
        "How different users view the data.",
        "The network protocols used."
    ],
    "answer": 2,
    "explanation": "The External Level (View Level) describes the part of the database that is relevant to a particular user, hiding the rest of the database from them.",
    "difficulty": "Medium",
    "topic": "Three Schema Architecture"
},
{
    "id": "dbms-102",
    "question": "A relation schema is a set of:",
    "options": [
        "Records",
        "Attributes and their data types",
        "Foreign keys only",
        "Queries"
    ],
    "answer": 1,
    "explanation": "A relation schema specifies the name of the relation, the names of all its attributes, and the data type and constraints of each attribute.",
    "difficulty": "Medium",
    "topic": "Relational Model"
},
{
    "id": "dbms-103",
    "question": "Which of the following violates 1NF?",
    "options": [
        "A table with no primary key.",
        "A column containing a list of comma-separated values.",
        "A table with a foreign key.",
        "A column containing NULL values."
    ],
    "answer": 1,
    "explanation": "1NF requires atomic values. A column containing a list of comma-separated values (e.g., 'red, blue, green') is non-atomic, thus violating 1NF.",
    "difficulty": "Medium",
    "topic": "1NF"
},
{
    "id": "dbms-104",
    "question": "What is a Partial Dependency?",
    "options": [
        "A non-prime attribute depending on another non-prime attribute.",
        "A non-prime attribute depending on only a part of a composite primary key.",
        "An attribute depending on the entire primary key.",
        "A primary key depending on foreign keys."
    ],
    "answer": 1,
    "explanation": "Partial dependency occurs when a non-prime attribute is functionally dependent on only a portion of a composite candidate key, rather than the whole key.",
    "difficulty": "Medium",
    "topic": "Partial Dependency"
},
{
    "id": "dbms-105",
    "question": "Which normal form eliminates partial dependencies?",
    "options": [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    "answer": 1,
    "explanation": "2NF requires the relation to be in 1NF and ensures that no non-prime attribute is partially dependent on any candidate key. It removes partial dependencies.",
    "difficulty": "Medium",
    "topic": "2NF"
},
{
    "id": "dbms-106",
    "question": "What is a Transitive Dependency?",
    "options": [
        "A -> B and B -> C, therefore A -> C (where A is a key, B is non-prime, C is non-prime).",
        "A -> B and C -> B.",
        "A -> B and B -> A.",
        "A non-prime attribute depending on part of the key."
    ],
    "answer": 0,
    "explanation": "Transitive dependency occurs when a non-prime attribute depends on another non-prime attribute rather than directly on the primary key (A->B->C).",
    "difficulty": "Medium",
    "topic": "Transitive Dependency"
},
{
    "id": "dbms-107",
    "question": "Which normal form eliminates transitive dependencies?",
    "options": [
        "2NF",
        "3NF",
        "BCNF",
        "4NF"
    ],
    "answer": 1,
    "explanation": "3NF requires the relation to be in 2NF and ensures that there is no transitive dependency of non-prime attributes on the primary key.",
    "difficulty": "Medium",
    "topic": "3NF"
},
{
    "id": "dbms-108",
    "question": "A relation is in BCNF if, for every non-trivial functional dependency A -> B:",
    "options": [
        "A is a superkey.",
        "B is a prime attribute.",
        "A is a candidate key.",
        "Both A is a superkey and B is a prime attribute."
    ],
    "answer": 0,
    "explanation": "BCNF (Boyce-Codd Normal Form) is stricter than 3NF. It requires that for every non-trivial dependency A->B, A must be a superkey.",
    "difficulty": "Medium",
    "topic": "BCNF"
},
{
    "id": "dbms-109",
    "question": "Which normal form deals with Multi-valued Dependencies?",
    "options": [
        "3NF",
        "BCNF",
        "4NF",
        "5NF"
    ],
    "answer": 2,
    "explanation": "4NF requires a relation to be in BCNF and contain no multi-valued dependencies. A multi-valued dependency occurs when two attributes in a table independently depend on a third attribute.",
    "difficulty": "Medium",
    "topic": "4NF"
},
{
    "id": "dbms-110",
    "question": "What is Denormalization?",
    "options": [
        "The process of splitting tables to reduce redundancy.",
        "The process of combining tables to improve read performance.",
        "Removing all keys from a table.",
        "Deleting a database."
    ],
    "answer": 1,
    "explanation": "Denormalization is the intentional introduction of redundancy into a table to improve read performance by avoiding expensive joins, at the cost of write performance and data integrity risks.",
    "difficulty": "Medium",
    "topic": "Denormalization"
},
{
    "id": "dbms-111",
    "question": "In relational algebra, what does the Rename operation do?",
    "options": [
        "Changes the data in the table.",
        "Changes the name of the relation or its attributes.",
        "Deletes the relation.",
        "Creates a copy of the relation."
    ],
    "answer": 1,
    "explanation": "The Rename operation (denoted by ρ - rho) is used to give a name to the result of a relational algebra operation or to rename attributes to avoid ambiguity.",
    "difficulty": "Medium",
    "topic": "Relational Algebra"
},
{
    "id": "dbms-112",
    "question": "Which relational algebra operation combines tuples from two relations based on a condition, but does NOT require the relations to be union-compatible?",
    "options": [
        "Union",
        "Intersection",
        "Join",
        "Difference"
    ],
    "answer": 2,
    "explanation": "Join operations (like Theta Join or Natural Join) combine tuples from two relations based on a condition. Union, Intersection, and Difference require union compatibility.",
    "difficulty": "Medium",
    "topic": "Join"
},
{
    "id": "dbms-113",
    "question": "What is a Natural Join?",
    "options": [
        "A join that requires an ON clause.",
        "A join that combines rows based on all columns with the same name in both tables.",
        "A join that returns only NULL values.",
        "A cross join."
    ],
    "answer": 1,
    "explanation": "A Natural Join automatically joins tables based on all columns that have the same name and data type in both tables, eliminating duplicate columns from the result.",
    "difficulty": "Medium",
    "topic": "Natural Join"
},
{
    "id": "dbms-114",
    "question": "A Theta Join is fundamentally a:",
    "options": [
        "Natural Join followed by a Selection",
        "Cartesian Product followed by a Selection",
        "Union followed by a Projection",
        "Intersection followed by a Selection"
    ],
    "answer": 1,
    "explanation": "A Theta Join (R ⋈_θ S) is defined as a Cartesian Product (R × S) followed by a Selection (σ_θ) that filters the combined rows based on the condition θ.",
    "difficulty": "Medium",
    "topic": "Theta Join"
},
{
    "id": "dbms-115",
    "question": "Which of the following is the correct syntax for a Left Outer Join in SQL?",
    "options": [
        "SELECT * FROM A LEFT OUTER JOIN B ON A.id = B.id;",
        "SELECT * FROM A LEFT OUTER B JOIN ON A.id = B.id;",
        "SELECT * FROM A JOIN LEFT OUTER B ON A.id = B.id;",
        "SELECT * FROM A OUTER JOIN B ON A.id = B.id;"
    ],
    "answer": 0,
    "explanation": "The standard syntax for a Left Outer Join is to place LEFT OUTER JOIN (or simply LEFT JOIN) between the table names, followed by the ON clause.",
    "difficulty": "Medium",
    "topic": "Outer Join"
},
{
    "id": "dbms-116",
    "question": "Given tables R(A, B) and S(B, C), what does R NATURAL JOIN S return?",
    "options": [
        "A, B, B, C",
        "A, B, C",
        "A, C",
        "B"
    ],
    "answer": 1,
    "explanation": "A Natural Join on column B matches rows where R.B = S.B. The result contains A, B, and C. The common column B appears only once in the result.",
    "difficulty": "Medium",
    "topic": "Natural Join"
},
{
    "id": "dbms-117",
    "question": "Which of the following relational algebra expressions finds all students who are NOT enrolled in any course? (Student: sid, sname; Enrollment: sid, cid)",
    "options": [
        "Student ⋈ Enrollment",
        "Student - (Student ⋈ Enrollment)",
        "Student ∪ Enrollment",
        "Student × Enrollment"
    ],
    "answer": 1,
    "explanation": "The Set Difference operation (-) subtracts the students who are enrolled (found via Natural Join) from all students, leaving only those not enrolled.",
    "difficulty": "Medium",
    "topic": "Difference"
},
{
    "id": "dbms-118",
    "question": "What is the difference between WHERE and HAVING clauses?",
    "options": [
        "WHERE filters rows before grouping; HAVING filters groups after grouping.",
        "HAVING filters rows before grouping; WHERE filters groups after grouping.",
        "There is no difference.",
        "WHERE can use aggregate functions; HAVING cannot."
    ],
    "answer": 0,
    "explanation": "WHERE is used to filter individual rows before they are grouped by GROUP BY. HAVING is used to filter the groups created by GROUP BY based on aggregate conditions.",
    "difficulty": "Medium",
    "topic": "HAVING"
},
{
    "id": "dbms-119",
    "question": "Which operator returns TRUE if the subquery returns ANY row that satisfies the condition?",
    "options": [
        "ALL",
        "ANY",
        "EXISTS",
        "IN"
    ],
    "answer": 1,
    "explanation": "The ANY operator returns true if any of the subquery values meet the condition. For example, `> ANY (subquery)` is true if the value is greater than at least one value in the subquery.",
    "difficulty": "Medium",
    "topic": "ANY"
},
{
    "id": "dbms-120",
    "question": "Which operator returns TRUE only if the subquery returns ALL rows that satisfy the condition?",
    "options": [
        "ANY",
        "ALL",
        "SOME",
        "EXISTS"
    ],
    "answer": 1,
    "explanation": "The ALL operator returns true if all values returned by the subquery satisfy the condition. For example, `> ALL (subquery)` means the value must be greater than the maximum value in the subquery.",
    "difficulty": "Medium",
    "topic": "ALL"
},
{
    "id": "dbms-121",
    "question": "What will `SELECT COUNT(*) FROM Employees;` return if the Employees table has 5 rows, and one column has NULL values?",
    "options": [
        "4",
        "5",
        "0",
        "NULL"
    ],
    "answer": 1,
    "explanation": "COUNT(*) counts all rows in a table, regardless of NULL values in any columns. It would return 5.",
    "difficulty": "Medium",
    "topic": "COUNT"
},
{
    "id": "dbms-122",
    "question": "What will `SELECT COUNT(ManagerID) FROM Employees;` return if there are 10 employees and 3 of them have NULL in ManagerID?",
    "options": [
        "10",
        "3",
        "7",
        "NULL"
    ],
    "answer": 2,
    "explanation": "COUNT(column_name) only counts rows where the specified column is NOT NULL. Therefore, it counts 10 - 3 = 7 rows.",
    "difficulty": "Medium",
    "topic": "COUNT"
},
{
    "id": "dbms-123",
    "question": "Which SQL clause limits the number of rows returned by a query in standard SQL?",
    "options": [
        "TOP",
        "LIMIT",
        "ROWNUM",
        "FETCH FIRST"
    ],
    "answer": 3,
    "explanation": "While LIMIT, TOP, and ROWNUM are used in specific DBMSs (MySQL, SQL Server, Oracle respectively), the SQL:2008 standard specifies `FETCH FIRST n ROWS ONLY`.",
    "difficulty": "Medium",
    "topic": "LIMIT"
},
{
    "id": "dbms-124",
    "question": "In SQL, the order of execution of clauses is:",
    "options": [
        "SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY",
        "FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY",
        "FROM, SELECT, WHERE, GROUP BY, HAVING, ORDER BY",
        "SELECT, FROM, GROUP BY, WHERE, HAVING, ORDER BY"
    ],
    "answer": 1,
    "explanation": "The logical order of execution is: FROM (get data) -> WHERE (filter rows) -> GROUP BY (group) -> HAVING (filter groups) -> SELECT (choose columns) -> ORDER BY (sort).",
    "difficulty": "Medium",
    "topic": "SQL"
},
{
    "id": "dbms-125",
    "question": "Can you use an aggregate function in a WHERE clause?",
    "options": [
        "Yes, always.",
        "No, you must use HAVING instead.",
        "Only with GROUP BY.",
        "Only with DISTINCT."
    ],
    "answer": 1,
    "explanation": "Aggregate functions cannot be used in the WHERE clause because WHERE filters rows before aggregation. HAVING must be used to filter after aggregation.",
    "difficulty": "Medium",
    "topic": "WHERE"
},
{
    "id": "dbms-126",
    "question": "What does the following query return? `SELECT DISTINCT department FROM Employees;`",
    "options": [
        "All employees and their departments.",
        "A list of all departments, with duplicates removed.",
        "Only the first department.",
        "An error."
    ],
    "answer": 1,
    "explanation": "The DISTINCT keyword eliminates duplicate values. This query returns a list of unique department names present in the Employees table.",
    "difficulty": "Medium",
    "topic": "DISTINCT"
},
{
    "id": "dbms-127",
    "question": "Given `SELECT name FROM Employees WHERE salary > (SELECT AVG(salary) FROM Employees);`, what is the inner query called?",
    "options": [
        "Correlated subquery",
        "Non-correlated subquery",
        "Join query",
        "Aggregate query"
    ],
    "answer": 1,
    "explanation": "It is a non-correlated subquery because it can be evaluated independently of the outer query. It executes once and passes its result to the outer query.",
    "difficulty": "Medium",
    "topic": "Nested Queries"
},
{
    "id": "dbms-128",
    "question": "What is a Correlated Subquery?",
    "options": [
        "A subquery that cannot be executed alone.",
        "A subquery that references a column from the outer query.",
        "A subquery that returns no rows.",
        "A subquery inside a FROM clause."
    ],
    "answer": 1,
    "explanation": "A correlated subquery uses values from the outer query, meaning it cannot be executed independently. It executes once for every row processed by the outer query.",
    "difficulty": "Medium",
    "topic": "Correlated Subqueries"
},
{
    "id": "dbms-129",
    "question": "Which of the following is typically faster: a correlated subquery or an equivalent JOIN?",
    "options": [
        "Correlated subquery",
        "JOIN",
        "They are always exactly the same.",
        "Neither can be compared."
    ],
    "answer": 1,
    "explanation": "JOINs are generally faster than correlated subqueries because a correlated subquery executes once for each row in the outer query, while a JOIN can be optimized by the query optimizer.",
    "difficulty": "Medium",
    "topic": "Correlated Subqueries"
},
{
    "id": "dbms-130",
    "question": "What is the result of `SELECT 10 + NULL;`?",
    "options": [
        "10",
        "NULL",
        "0",
        "Error"
    ],
    "answer": 1,
    "explanation": "Any arithmetic operation with NULL results in NULL because NULL represents an unknown value; adding something to an unknown is still unknown.",
    "difficulty": "Medium",
    "topic": "NULL"
},
{
    "id": "dbms-131",
    "question": "Which clause is used to filter the results of a GROUP BY based on aggregate conditions?",
    "options": [
        "WHERE",
        "HAVING",
        "FILTER",
        "GROUP WHERE"
    ],
    "answer": 1,
    "explanation": "The HAVING clause is used after GROUP BY to filter groups based on aggregate function results, such as `HAVING COUNT(*) > 5`.",
    "difficulty": "Medium",
    "topic": "HAVING"
},
{
    "id": "dbms-132",
    "question": "What does the INTERSECT operation return?",
    "options": [
        "All rows from both tables.",
        "Rows that are common to both SELECT statements.",
        "Rows in the first table not in the second.",
        "The Cartesian product."
    ],
    "answer": 1,
    "explanation": "INTERSECT returns the set intersection of the results of two queries, meaning only rows that appear in both result sets.",
    "difficulty": "Medium",
    "topic": "Intersection"
},
{
    "id": "dbms-133",
    "question": "What does the EXCEPT (or MINUS) operation return?",
    "options": [
        "Rows that are common to both queries.",
        "Rows from the first query that are not present in the second query.",
        "All rows from both queries.",
        "The difference in column counts."
    ],
    "answer": 1,
    "explanation": "EXCEPT returns distinct rows from the left input query that are not returned by the right input query.",
    "difficulty": "Medium",
    "topic": "Difference"
},
{
    "id": "dbms-134",
    "question": "Which of the following is true about a Non-Clustered Index?",
    "options": [
        "It alters the physical order of the table.",
        "A table can have only one Non-Clustered Index.",
        "It creates a separate structure from the data rows.",
        "It is the default index created by a Primary Key."
    ],
    "answer": 2,
    "explanation": "A Non-Clustered Index has a structure separate from the data rows. It contains pointers to the actual data rows. A table can have multiple non-clustered indexes.",
    "difficulty": "Medium",
    "topic": "Non-Clustered Index"
},
{
    "id": "dbms-135",
    "question": "What is a Hash Index?",
    "options": [
        "An index sorted by a tree structure.",
        "An index that uses a hash function to map keys to bucket locations.",
        "An index that only works on strings.",
        "An index used for full-text search."
    ],
    "answer": 1,
    "explanation": "A hash index uses a hash function on the index key to determine the bucket location of the data. It is extremely fast for exact-match lookups (O(1)) but not for range queries.",
    "difficulty": "Medium",
    "topic": "Hash Index"
},
{
    "id": "dbms-136",
    "question": "Why are B+ Trees preferred over Binary Trees for database indexing?",
    "options": [
        "They use less memory.",
        "They have a lower height, resulting in fewer disk I/Os.",
        "They are easier to program.",
        "They only store integers."
    ],
    "answer": 1,
    "explanation": "B+ Trees have a high fan-out (many children per node), which keeps the tree short. This reduces the number of disk I/O operations required to find a record, which is critical for database performance.",
    "difficulty": "Medium",
    "topic": "B+ Tree Index"
},
{
    "id": "dbms-137",
    "question": "In a B+ Tree, where are the actual data records (or pointers to them) stored?",
    "options": [
        "Only in the root node.",
        "Only in the internal nodes.",
        "Only in the leaf nodes.",
        "In all nodes."
    ],
    "answer": 2,
    "explanation": "In a B+ Tree, all internal nodes contain only keys for routing. The actual data pointers or data records are stored strictly in the leaf nodes, which are also linked sequentially.",
    "difficulty": "Medium",
    "topic": "B+ Tree"
},
{
    "id": "dbms-138",
    "question": "What is a Functional Dependency (FD)?",
    "options": [
        "A relationship between two tables.",
        "A constraint where the value of one attribute determines the value of another.",
        "A type of index.",
        "A trigger that fires on update."
    ],
    "answer": 1,
    "explanation": "A functional dependency, written as X -> Y, means that the value of attribute Y is determined by the value of attribute X. If two tuples have the same X, they must have the same Y.",
    "difficulty": "Medium",
    "topic": "Functional Dependency"
},
{
    "id": "dbms-139",
    "question": "What is the Closure of a set of Functional Dependencies (F+)?",
    "options": [
        "The deletion of all FDs.",
        "The set of all FDs that can be inferred from F using Armstrong's Axioms.",
        "The set of all primary keys.",
        "The sum of all attributes."
    ],
    "answer": 1,
    "explanation": "The closure F+ is the complete set of all functional dependencies logically implied by the given set F, derived using Armstrong's Axioms.",
    "difficulty": "Medium",
    "topic": "Functional Dependency"
},
{
    "id": "dbms-140",
    "question": "Which of Armstrong's Axioms states that if X -> Y, then XZ -> YZ?",
    "options": [
        "Reflexivity",
        "Augmentation",
        "Transitivity",
        "Pseudotransitivity"
    ],
    "answer": 1,
    "explanation": "The Augmentation rule states that if X determines Y (X -> Y), then adding the same set of attributes (Z) to both sides results in XZ -> YZ.",
    "difficulty": "Medium",
    "topic": "Functional Dependency"
},
{
    "id": "dbms-141",
    "question": "Which of Armstrong's Axioms states that if X -> Y and Y -> Z, then X -> Z?",
    "options": [
        "Reflexivity",
        "Augmentation",
        "Transitivity",
        "Union"
    ],
    "answer": 2,
    "explanation": "The Transitivity rule states that if X determines Y, and Y determines Z, then X must determine Z.",
    "difficulty": "Medium",
    "topic": "Functional Dependency"
},
{
    "id": "dbms-142",
    "question": "What is a Prime Attribute?",
    "options": [
        "An attribute that is part of any candidate key.",
        "The primary key itself.",
        "An attribute that is always numeric.",
        "An attribute that cannot be NULL."
    ],
    "answer": 0,
    "explanation": "A prime attribute is any attribute that is part of at least one candidate key of the relation. It is not limited to just the primary key.",
    "difficulty": "Medium",
    "topic": "Normalization"
},
{
    "id": "dbms-143",
    "question": "A relation R is in 3NF if for every non-trivial FD X -> Y, at least one of the following is true: X is a superkey, or:",
    "options": [
        "Y is a superkey.",
        "Y is a prime attribute.",
        "X is a prime attribute.",
        "Y is a foreign key."
    ],
    "answer": 1,
    "explanation": "In 3NF, if X is not a superkey, then Y must be a prime attribute (part of a candidate key). This prevents transitive dependencies among non-prime attributes.",
    "difficulty": "Medium",
    "topic": "3NF"
},
{
    "id": "dbms-144",
    "question": "What is the difference between 3NF and BCNF?",
    "options": [
        "BCNF allows transitive dependencies.",
        "In BCNF, if X -> Y, X MUST be a superkey, with no exception for prime attributes.",
        "3NF is stricter than BCNF.",
        "There is no difference."
    ],
    "answer": 1,
    "explanation": "3NF allows Y to be a prime attribute even if X is not a superkey. BCNF strictly requires X to be a superkey for every non-trivial FD X -> Y.",
    "difficulty": "Medium",
    "topic": "BCNF"
},
{
    "id": "dbms-145",
    "question": "Lossless-join decomposition guarantees that:",
    "options": [
        "No data is lost when splitting a table into multiple tables.",
        "Dependencies are preserved.",
        "The schema is in BCNF.",
        "The query runs faster."
    ],
    "answer": 0,
    "explanation": "A lossless-join decomposition ensures that the natural join of the decomposed tables produces exactly the original table without generating any spurious tuples.",
    "difficulty": "Medium",
    "topic": "Normalization"
},
{
    "id": "dbms-146",
    "question": "In transaction states, what happens after the 'Active' state when a transaction issues a COMMIT?",
    "options": [
        "It goes to the Failed state.",
        "It goes to the Partially Committed state.",
        "It goes directly to the Committed state.",
        "It terminates."
    ],
    "answer": 1,
    "explanation": "After issuing a COMMIT, the transaction enters the Partially Committed state while the logs are written to disk. Once successful, it moves to the Committed state.",
    "difficulty": "Medium",
    "topic": "Transactions"
},
{
    "id": "dbms-147",
    "question": "What is a Serial Schedule?",
    "options": [
        "A schedule where transactions execute concurrently.",
        "A schedule where transactions execute one after the other without interleaving.",
        "A schedule that causes a deadlock.",
        "A schedule that violates ACID."
    ],
    "answer": 1,
    "explanation": "A serial schedule is one where transactions are executed strictly sequentially, one completely finishing before the next begins. It is always consistent but slow.",
    "difficulty": "Medium",
    "topic": "Serial Schedule"
},
{
    "id": "dbms-148",
    "question": "What is a Concurrent Schedule?",
    "options": [
        "A schedule where transactions run sequentially.",
        "A schedule where operations from multiple transactions are interleaved.",
        "A schedule that never commits.",
        "A schedule without locks."
    ],
    "answer": 1,
    "explanation": "A concurrent schedule allows operations from different transactions to interleave, improving CPU and disk utilization but risking data inconsistency.",
    "difficulty": "Medium",
    "topic": "Concurrent Schedule"
},
{
    "id": "dbms-149",
    "question": "A schedule is Conflict Serializable if:",
    "options": [
        "It can be transformed into a serial schedule by swapping non-conflicting operations.",
        "It has no conflicts.",
        "All transactions commit at the same time.",
        "It uses two-phase locking."
    ],
    "answer": 0,
    "explanation": "Conflict serializability is determined by checking if a schedule's conflict graph is acyclic. If acyclic, non-conflicting operations can be swapped to form a serial schedule.",
    "difficulty": "Medium",
    "topic": "Conflict Serializability"
},
{
    "id": "dbms-150",
    "question": "What constitutes a conflict between two operations in a schedule?",
    "options": [
        "They belong to different transactions.",
        "They access the same data item and at least one is a write operation.",
        "They are both read operations.",
        "They are both commit operations."
    ],
    "answer": 1,
    "explanation": "Two operations conflict if they belong to different transactions, access the same data item, and at least one of them is a Write operation. Read-Read does not conflict.",
    "difficulty": "Medium",
    "topic": "Conflict Serializability"
},
{
    "id": "dbms-151",
    "question": "What is the purpose of a Precedence (Conflict) Graph?",
    "options": [
        "To optimize SQL queries.",
        "To test for conflict serializability.",
        "To design ER diagrams.",
        "To manage memory."
    ],
    "answer": 1,
    "explanation": "A precedence graph has nodes for transactions and directed edges for conflicts. If the graph contains a cycle, the schedule is NOT conflict serializable.",
    "difficulty": "Medium",
    "topic": "Conflict Serializability"
},
{
    "id": "dbms-152",
    "question": "What is View Serializability?",
    "options": [
        "Checking serializability using a conflict graph.",
        "A schedule is view serializable if its initial read, final write, and update reads match some serial schedule.",
        "A schedule that only uses views.",
        "A schedule that is always serial."
    ],
    "answer": 1,
    "explanation": "View serializability compares the 'view' (what the transactions read and write) of the concurrent schedule to the view of a serial schedule. It is less restrictive than conflict serializability.",
    "difficulty": "medium",
    "topic": "View Serializability"
},
{
    "id": "dbms-153",
    "question": "In Two-Phase Locking (2PL), a transaction cannot request any new locks after it has:",
    "options": [
        "Acquired its first lock.",
        "Released its first lock.",
        "Entered the shrinking phase.",
        "Committed."
    ],
    "answer": 2,
    "explanation": "2PL has a growing phase (acquiring locks) and a shrinking phase (releasing locks). Once a lock is released, the transaction enters the shrinking phase and cannot acquire new locks.",
    "difficulty": "Medium",
    "topic": "Two Phase Locking"
},
{
    "id": "dbms-154",
    "question": "What is Strict Two-Phase Locking (Strict 2PL)?",
    "options": [
        "All locks are acquired at the beginning.",
        "Exclusive locks are held until the transaction commits or aborts.",
        "Only shared locks are used.",
        "Transactions are executed serially."
    ],
    "answer": 1,
    "explanation": "In Strict 2PL, all exclusive (write) locks are held until the transaction completes (commits or rolls back). This prevents cascading rollbacks and dirty reads.",
    "difficulty": "Medium",
    "topic": "Strict 2PL"
},
{
    "id": "dbms-155",
    "question": "What is a Dirty Read?",
    "options": [
        "Reading committed data from another transaction.",
        "Reading uncommitted data that might be rolled back.",
        "Reading data that has been deleted.",
        "Reading from a corrupted disk."
    ],
    "answer": 1,
    "explanation": "A dirty read occurs when a transaction reads data written by an uncommitted transaction. If that transaction rolls back, the read data is invalid ('dirty').",
    "difficulty": "Medium",
    "topic": "Concurrency Control"
},
{
    "id": "dbms-156",
    "question": "What is a Non-Repeatable Read?",
    "options": [
        "Reading the same row twice and getting different values because another transaction modified it.",
        "Reading a row that does not exist.",
        "Reading uncommitted data.",
        "Failing to read a locked row."
    ],
    "answer": 0,
    "explanation": "A non-repeatable read happens when within the same transaction, a row is read twice, but between the reads, another transaction updates or deletes that row.",
    "difficulty": "Medium",
    "topic": "Concurrency Control"
},
{
    "id": "dbms-157",
    "question": "What is a Phantom Read?",
    "options": [
        "Reading a deleted row.",
        "Executing the same query twice and getting different rows because another transaction inserted new rows.",
        "Reading uncommitted data.",
        "A read that times out."
    ],
    "answer": 1,
    "explanation": "A phantom read occurs when a transaction re-executes a query returning a set of rows and finds that another committed transaction has inserted or deleted rows matching the query condition.",
    "difficulty": "Medium",
    "topic": "Concurrency Control"
},
{
    "id": "dbms-158",
    "question": "Which SQL isolation level prevents Dirty Reads but allows Non-Repeatable Reads and Phantom Reads?",
    "options": [
        "READ UNCOMMITTED",
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE"
    ],
    "answer": 1,
    "explanation": "READ COMMITTED ensures a transaction only reads committed data (prevents dirty reads), but other transactions can modify data between reads, allowing non-repeatable and phantom reads.",
    "difficulty": "Medium",
    "topic": "Concurrency Control"
},
{
    "id": "dbms-159",
    "question": "Which SQL isolation level prevents Dirty Reads and Non-Repeatable Reads, but allows Phantom Reads?",
    "options": [
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE",
        "READ UNCOMMITTED"
    ],
    "answer": 1,
    "explanation": "REPEATABLE READ keeps read and write locks until the end of the transaction. It prevents non-repeatable reads but, in standard SQL, does not prevent phantom reads (though some DBMSs like InnoDB do).",
    "difficulty": "Medium",
    "topic": "Concurrency Control"
},
{
    "id": "dbms-160",
    "question": "Which isolation level is the highest and prevents all concurrency anomalies (Dirty, Non-Repeatable, Phantom)?",
    "options": [
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE",
        "SNAPSHOT"
    ],
    "answer": 2,
    "explanation": "SERIALIZABLE isolation level forces transactions to execute as if they were serial, preventing all concurrency anomalies but severely reducing concurrency.",
    "difficulty": "Medium",
    "topic": "Concurrency Control"
},
{
    "id": "dbms-161",
    "question": "What is the Wait-Die scheme for deadlock prevention?",
    "options": [
        "Older transaction waits for younger; younger transaction dies (rolls back) if it requests a lock held by older.",
        "Younger transaction waits for older; older transaction dies if it requests a lock held by younger.",
        "All transactions wait.",
        "All transactions die."
    ],
    "answer": 0,
    "explanation": "In Wait-Die, if an older transaction requests a lock held by a younger one, it waits. If a younger requests a lock held by an older one, the younger one is rolled back (dies). It is non-preemptive.",
    "difficulty": "Medium",
    "topic": "Deadlock Prevention"
},
{
    "id": "dbms-162",
    "question": "What is the Wound-Wait scheme for deadlock prevention?",
    "options": [
        "Older transaction waits for younger; younger dies.",
        "Older transaction wounds (rolls back) younger if it requests a lock held by younger; younger waits for older.",
        "Both transactions wait.",
        "Both transactions are killed."
    ],
    "answer": 1,
    "explanation": "In Wound-Wait, if an older transaction requests a lock held by a younger one, the younger one is rolled back (wounded). If a younger requests from an older, it waits. It is preemptive.",
    "difficulty": "Medium",
    "topic": "Deadlock Prevention"
},
{
    "id": "dbms-163",
    "question": "How is deadlock typically detected in a DBMS?",
    "options": [
        "Checking for infinite loops in code.",
        "Maintaining a Wait-For graph and checking for cycles.",
        "Monitoring CPU usage.",
        "Checking the transaction log."
    ],
    "answer": 1,
    "explanation": "A Wait-For graph has nodes for transactions and edges if one transaction is waiting for a lock held by another. A cycle in this graph indicates a deadlock.",
    "difficulty": "Medium",
    "topic": "Deadlock Detection"
},
{
    "id": "dbms-164",
    "question": "What is the typical victim selection criteria when resolving a deadlock?",
    "options": [
        "The transaction with the highest priority.",
        "The transaction that has made the least progress (fewest changes) or is youngest.",
        "The first transaction that started.",
        "The last transaction that started."
    ],
    "answer": 1,
    "explanation": "Typically, the transaction that is youngest or has done the least amount of work is chosen as the victim to minimize the cost of rolling back.",
    "difficulty": "Medium",
    "topic": "Deadlock Recovery"
},
{
    "id": "dbms-165",
    "question": "What is a Timestamp Ordering Protocol?",
    "options": [
        "Using locks based on the clock time.",
        "Assigning a unique timestamp to each transaction and executing operations in timestamp order.",
        "Ordering transactions by their names.",
        "A backup and recovery technique."
    ],
    "answer": 1,
    "explanation": "Timestamp ordering assigns a unique timestamp to each transaction. If a conflict arises, the transaction with the older timestamp gets priority; the younger one is rolled back.",
    "difficulty": "Medium",
    "topic": "Timestamp Protocol"
},
{
    "id": "dbms-166",
    "question": "In Optimistic Concurrency Control, when are conflicts checked?",
    "options": [
        "Before the transaction starts.",
        "During the read phase.",
        "At the end of the transaction, during the validation phase.",
        "After the commit."
    ],
    "answer": 2,
    "explanation": "Optimistic concurrency control assumes conflicts are rare. Transactions execute freely (read/write phases) and are validated just before commit. If a conflict is found, the transaction is rolled back.",
    "difficulty": "Medium",
    "topic": "Optimistic Concurrency Control"
},
{
    "id": "dbms-167",
    "question": "What is Shadow Paging?",
    "options": [
        "An indexing technique.",
        "A recovery technique where a shadow copy of the page table is maintained.",
        "A locking mechanism.",
        "A query optimization technique."
    ],
    "answer": 1,
    "explanation": "Shadow paging maintains two page tables: a current table and a shadow table. During a transaction, changes go to the current table. On commit, the shadow table is replaced. It avoids logging but causes fragmentation.",
    "difficulty": "Medium",
    "topic": "Shadow Paging"
},
{
    "id": "dbms-168",
    "question": "In log-based recovery, what does a REDO log record indicate?",
    "options": [
        "An operation that needs to be undone.",
        "An operation that needs to be re-applied if it wasn't written to disk before the crash.",
        "A committed transaction.",
        "A rollback operation."
    ],
    "answer": 1,
    "explanation": "REDO logs record changes made by committed transactions. If the system crashes before these changes are flushed to disk, the recovery system uses REDO logs to reapply them.",
    "difficulty": "Medium",
    "topic": "Log Based Recovery"
},
{
    "id": "dbms-169",
    "question": "In log-based recovery, what does an UNDO log record indicate?",
    "options": [
        "An operation that needs to be re-applied.",
        "An operation that needs to be reversed because the transaction was uncommitted at the time of the crash.",
        "A checkpoint.",
        "A commit operation."
    ],
    "answer": 1,
    "explanation": "UNDO logs track changes made by transactions that had not yet committed when the crash occurred. The recovery process uses UNDO logs to reverse these changes to maintain atomicity.",
    "difficulty": "Medium",
    "topic": "Log Based Recovery"
},
{
    "id": "dbms-170",
    "question": "What is the Write-Ahead Logging (WAL) protocol?",
    "options": [
        "Data must be written to disk before the log.",
        "Log records must be written to stable storage before the corresponding data is written to disk.",
        "Only write logs, never data.",
        "Write logs after the transaction commits."
    ],
    "answer": 1,
    "explanation": "WAL ensures that log records are flushed to stable storage before any changes to the data pages are written to disk. This guarantees that changes can be redone or undone after a crash.",
    "difficulty": "Medium",
    "topic": "Log Based Recovery"
},
{
    "id": "dbms-171",
    "question": "What is the ARIES recovery algorithm?",
    "options": [
        "A basic logging method.",
        "Algorithm for Recovery and Isolation Exploiting Semantics; uses WAL, steals buffers, and uses LSNs.",
        "A shadow paging variant.",
        "A deadlock detection algorithm."
    ],
    "answer": 1,
    "explanation": "ARIES is a widely used recovery algorithm. It uses Write-Ahead Logging, allows uncommitted data to be flushed to disk (steal), and uses Log Sequence Numbers (LSN) for recovery.",
    "difficulty": "Medium",
    "topic": "Crash Recovery"
},
{
    "id": "dbms-172",
    "question": "In the ARIES algorithm, what does 'Steal' mean?",
    "options": [
        "Stealing locks from other transactions.",
        "Uncommitted data from a transaction can be written to disk before the transaction commits.",
        "Stealing memory from the OS.",
        "Copying data from one table to another."
    ],
    "answer": 1,
    "explanation": "A 'steal' policy means the buffer manager can write (flush) modified pages from an uncommitted transaction to disk to free up memory space.",
    "difficulty": "Medium",
    "topic": "Crash Recovery"
},
{
    "id": "dbms-173",
    "question": "In the ARIES algorithm, what does 'No-Force' mean?",
    "options": [
        "Forcing a transaction to commit.",
        "A committed transaction does not have to have all its modified pages written to disk immediately.",
        "No locks are forced.",
        "No logs are forced."
    ],
    "answer": 1,
    "explanation": "A 'no-force' policy means that when a transaction commits, the modified pages do not have to be immediately written to disk. They can be written later, relying on REDO logs if a crash occurs.",
    "difficulty": "Medium",
    "topic": "Crash Recovery"
},
{
    "id": "dbms-174",
    "question": "What is Buffer Management in a DBMS?",
    "options": [
        "Managing the SQL buffer.",
        "Managing the allocation of RAM space between disk pages and data requests.",
        "Managing network buffers.",
        "Managing log buffers only."
    ],
    "answer": 1,
    "explanation": "The buffer manager is responsible for fetching pages from disk to RAM (main memory) and deciding which pages to evict back to disk when memory space is needed.",
    "difficulty": "Medium",
    "topic": "Buffer Management"
},
{
    "id": "dbms-175",
    "question": "Which page replacement algorithm replaces the page that has not been used for the longest time?",
    "options": [
        "FIFO",
        "LRU (Least Recently Used)",
        "MRU (Most Recently Used)",
        "LFU (Least Frequently Used)"
    ],
    "answer": 1,
    "explanation": "LRU replaces the page in memory that has not been accessed for the longest period of time. It is a common heuristic for buffer management in DBMS.",
    "difficulty": "Medium",
    "topic": "Buffer Management"
},
{
    "id": "dbms-176",
    "question": "What is Query Processing?",
    "options": [
        "Writing SQL queries.",
        "The sequence of steps involved in executing a query, including parsing, optimization, and execution.",
        "Deleting old queries.",
        "Backing up queries."
    ],
    "answer": 1,
    "explanation": "Query processing translates a declarative SQL query into a sequence of low-level operations. It involves parsing, validation, optimization (choosing the best execution plan), and execution.",
    "difficulty": "Medium",
    "topic": "Query Processing"
},
{
    "id": "dbms-177",
    "question": "What is Query Optimization?",
    "options": [
        "Making queries shorter.",
        "The process of selecting the most efficient execution plan among various alternatives.",
        "Removing redundant columns.",
        "Caching query results."
    ],
    "answer": 1,
    "explanation": "Query optimization evaluates multiple equivalent execution plans (e.g., choosing which index to use, the order of joins) and selects the one with the lowest estimated cost (I/O, CPU).",
    "difficulty": "Medium",
    "topic": "Query Optimization"
},
{
    "id": "dbms-178",
    "question": "What does an Execution Plan show?",
    "options": [
        "The SQL text.",
        "The step-by-step operations the database engine will perform to execute a query.",
        "The backup plan for the database.",
        "The user permissions."
    ],
    "answer": 1,
    "explanation": "An execution plan details the exact sequence of operations (like table scans, index seeks, hash joins, sorts) the DBMS will use to fulfill a query.",
    "difficulty": "Medium",
    "topic": "Execution Plan"
},
{
    "id": "dbms-179",
    "question": "What is the cost of an Index Scan vs. a Full Table Scan for a small table?",
    "options": [
        "Index scan is always faster.",
        "Full table scan might be faster due to the overhead of reading the index and then the data pages.",
        "They are exactly the same.",
        "Index scans are not allowed on small tables."
    ],
    "answer": 1,
    "explanation": "For very small tables, a full table scan might be cheaper because reading the index first and then accessing the data pages (via row pointers) incurs more I/O overhead than just reading the single data page.",
    "difficulty": "Medium",
    "topic": "Query Optimization"
},
{
    "id": "dbms-180",
    "question": "What is Authentication in database security?",
    "options": [
        "Checking what actions a user can perform.",
        "Verifying the identity of a user or process.",
        "Encrypting the database.",
        "Creating backups."
    ],
    "answer": 1,
    "explanation": "Authentication is the process of confirming a user's identity (e.g., via username/password or certificates) before they are allowed access to the database.",
    "difficulty": "Medium",
    "topic": "Authentication"
},
{
    "id": "dbms-181",
    "question": "What is Authorization in database security?",
    "options": [
        "Verifying a user's password.",
        "Determining what privileges a verified user has (what they can do).",
        "Creating a new user.",
        "Connecting to the database."
    ],
    "answer": 1,
    "explanation": "Authorization occurs after authentication. It involves checking the user's permissions (privileges) against the database objects to see if they are allowed to perform the requested action.",
    "difficulty": "Medium",
    "topic": "Authorization"
},
{
    "id": "dbms-182",
    "question": "What is the purpose of a Database Role?",
    "options": [
        "To create a backup.",
        "To group users together to simplify privilege management.",
        "To define a data type.",
        "To create a view."
    ],
    "answer": 1,
    "explanation": "A role acts as a container for privileges. Instead of granting the same set of privileges to multiple users individually, you grant them to a role, and then assign users to that role.",
    "difficulty": "Medium",
    "topic": "Roles"
},
{
    "id": "dbms-183",
    "question": "Given an Employees table (id, name, dept_id, salary), write a query to find the highest salary in each department.",
    "options": [
        "SELECT dept_id, MAX(salary) FROM Employees;",
        "SELECT dept_id, MAX(salary) FROM Employees GROUP BY dept_id;",
        "SELECT dept_id, salary FROM Employees ORDER BY salary DESC;",
        "SELECT dept_id, SUM(salary) FROM Employees GROUP BY dept_id;"
    ],
    "answer": 1,
    "explanation": "The GROUP BY clause groups the rows by department. The MAX() aggregate function then calculates the highest salary within each of those groups.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-184",
    "question": "Given an Orders table (order_id, customer_id, order_date, amount), write a query to find customers who have never placed an order. (Customers table: customer_id, name)",
    "options": [
        "SELECT * FROM Customers WHERE customer_id NOT IN (SELECT customer_id FROM Orders);",
        "SELECT * FROM Customers JOIN Orders ON Customers.customer_id = Orders.customer_id;",
        "SELECT * FROM Customers WHERE customer_id IN (SELECT customer_id FROM Orders);",
        "SELECT * FROM Customers WHERE customer_id != (SELECT customer_id FROM Orders);"
    ],
    "answer": 0,
    "explanation": "The subquery returns all customer_ids that have placed orders. Using NOT IN filters the Customers table to return only those who are not in that list.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-185",
    "question": "Write a query to find the second highest salary from the Employees table.",
    "options": [
        "SELECT MAX(salary) FROM Employees WHERE salary < MAX(salary);",
        "SELECT MAX(salary) FROM Employees WHERE salary < (SELECT MAX(salary) FROM Employees);",
        "SELECT salary FROM Employees ORDER BY salary DESC LIMIT 2;",
        "SELECT DISTINCT salary FROM Employees ORDER BY salary DESC LIMIT 1 OFFSET 1;"
    ],
    "answer": 3,
    "explanation": "`ORDER BY salary DESC` sorts salaries from highest to lowest. `LIMIT 1 OFFSET 1` skips the first row (highest) and returns the second row (second highest). Option B is invalid SQL.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-186",
    "question": "Given table Student(id, name, marks), write a query to find students whose marks are greater than the average marks of all students.",
    "options": [
        "SELECT * FROM Student WHERE marks > AVG(marks);",
        "SELECT * FROM Student HAVING marks > AVG(marks);",
        "SELECT * FROM Student WHERE marks > (SELECT AVG(marks) FROM Student);",
        "SELECT * FROM Student WHERE marks > AVG(marks) GROUP BY id;"
    ],
    "answer": 2,
    "explanation": "Aggregate functions cannot be used in a WHERE clause. You must use a subquery to calculate the average first, then compare the marks in the outer query.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-187",
    "question": "Write a query to copy data from TableA into a new table TableB (which does not exist yet).",
    "options": [
        "INSERT INTO TableB SELECT * FROM TableA;",
        "SELECT * INTO TableB FROM TableA;",
        "UPDATE TableB SELECT * FROM TableA;",
        "COPY TableA TO TableB;"
    ],
    "answer": 1,
    "explanation": "The `SELECT * INTO TableB FROM TableA` statement creates a new table (TableB) with the schema and data from the old table (TableA). (Note: Syntax varies slightly by DBMS, but this is standard T-SQL).",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-188",
    "question": "Given Employee(id, name, mgr_id), write a query to find the names of all employees and their managers.",
    "options": [
        "SELECT e.name, m.name FROM Employee e JOIN Employee m ON e.mgr_id = m.id;",
        "SELECT name, mgr_id FROM Employee;",
        "SELECT e.name, m.name FROM Employee e, Employee m WHERE e.id = m.mgr_id;",
        "SELECT e.name, m.name FROM Employee e LEFT JOIN Employee m ON e.mgr_id = m.id;"
    ],
    "answer": 0,
    "explanation": "This requires a Self Join. We join the Employee table to itself, matching the employee's mgr_id to the manager's id to get both names.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-189",
    "question": "Write a query to find employees who earn more than their direct managers. (Employee: id, name, salary, mgr_id)",
    "options": [
        "SELECT e.name FROM Employee e WHERE e.salary > (SELECT salary FROM Employee WHERE id = e.mgr_id);",
        "SELECT name FROM Employee WHERE salary > mgr_id;",
        "SELECT e.name FROM Employee e JOIN Employee m ON e.salary > m.salary;",
        "SELECT name FROM Employee WHERE salary > MAX(salary);"
    ],
    "answer": 0,
    "explanation": "This is a correlated subquery. For each employee 'e', it retrieves the salary of their specific manager (where id = e.mgr_id) and compares it to the employee's salary.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-190",
    "question": "What is the result of `SELECT CASE WHEN 10 > 5 THEN 'True' ELSE 'False' END AS Result;`?",
    "options": [
        "True",
        "False",
        "10",
        "Error"
    ],
    "answer": 0,
    "explanation": "The CASE statement evaluates the condition `10 > 5`, which is true. It then returns the corresponding 'True' value and aliases the column as 'Result'.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-191",
    "question": "Given a Sales table (product_id, quantity, price), write a query to calculate total revenue per product.",
    "options": [
        "SELECT product_id, SUM(quantity) FROM Sales GROUP BY product_id;",
        "SELECT product_id, SUM(quantity * price) FROM Sales GROUP BY product_id;",
        "SELECT product_id, quantity * price FROM Sales;",
        "SELECT SUM(quantity * price) FROM Sales;"
    ],
    "answer": 1,
    "explanation": "Revenue is calculated by multiplying quantity by price. SUM(quantity * price) calculates the total revenue, and GROUP BY product_id ensures it is calculated per product.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-192",
    "question": "Write a query to find duplicate email addresses in a Users table.",
    "options": [
        "SELECT email FROM Users WHERE COUNT(email) > 1;",
        "SELECT email FROM Users GROUP BY email HAVING COUNT(*) > 1;",
        "SELECT DISTINCT email FROM Users;",
        "SELECT email FROM Users ORDER BY email;"
    ],
    "answer": 1,
    "explanation": "GROUP BY email groups identical emails together. HAVING COUNT(*) > 1 filters these groups to show only those that appear more than once.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-193",
    "question": "What does the following query do? `DELETE FROM Employees WHERE id IN (SELECT id FROM TempEmployees);`",
    "options": [
        "Deletes the TempEmployees table.",
        "Deletes all employees.",
        "Deletes employees from the Employees table who are listed in the TempEmployees table.",
        "Deletes employees who are not in TempEmployees."
    ],
    "answer": 2,
    "explanation": "This is a subquery used with the IN operator in a DELETE statement. It removes rows from Employees where their ID matches an ID found in the TempEmployees table.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-194",
    "question": "How do you find the 3rd highest salary without using LIMIT/OFFSET or TOP?",
    "options": [
        "SELECT salary FROM Employees ORDER BY salary DESC;",
        "SELECT DISTINCT salary FROM Employees e1 WHERE 3 = (SELECT COUNT(DISTINCT salary) FROM Employees e2 WHERE e2.salary >= e1.salary);",
        "SELECT MAX(salary) FROM Employees WHERE salary < MAX(salary);",
        "SELECT salary FROM Employees WHERE ROWNUM = 3;"
    ],
    "answer": 1,
    "explanation": "This correlated subquery counts how many distinct salaries are greater than or equal to the current row's salary. When that count is exactly 3, it is the 3rd highest distinct salary.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-195",
    "question": "Given table Orders(id, cust_id, order_date), find customers who ordered in both January and February 2023.",
    "options": [
        "SELECT cust_id FROM Orders WHERE order_date IN ('2023-01', '2023-02');",
        "SELECT cust_id FROM Orders WHERE MONTH(order_date) IN (1, 2) AND YEAR(order_date) = 2023;",
        "SELECT cust_id FROM Orders WHERE order_date BETWEEN '2023-01-01' AND '2023-02-28';",
        "SELECT cust_id FROM Orders WHERE MONTH(order_date) = 1 INTERSECT SELECT cust_id FROM Orders WHERE MONTH(order_date) = 2 AND YEAR(order_date)=2023;"
    ],
    "answer": 3,
    "explanation": "INTERSECT returns customers present in both result sets (Jan orders AND Feb orders). Option B returns customers who ordered in Jan OR Feb, not necessarily both.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-196",
    "question": "Write a query to list all departments that have NO employees. (Dept: dept_id, name; Emp: emp_id, dept_id)",
    "options": [
        "SELECT name FROM Dept WHERE dept_id NOT IN (SELECT dept_id FROM Emp);",
        "SELECT name FROM Dept WHERE dept_id = (SELECT dept_id FROM Emp);",
        "SELECT name FROM Dept LEFT JOIN Emp ON Dept.dept_id = Emp.dept_id WHERE emp_id IS NOT NULL;",
        "SELECT name FROM Dept JOIN Emp ON Dept.dept_id = Emp.dept_id;"
    ],
    "answer": 0,
    "explanation": "The subquery gets all dept_ids that have employees. NOT IN filters the Dept table to return only those dept_ids that are NOT in that list. (Can also use NOT EXISTS or LEFT JOIN checking for NULL).",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-197",
    "question": "What is the difference between `WHERE EXISTS (SELECT 1 FROM ...)` and `WHERE column IN (SELECT column FROM ...)`?",
    "options": [
        "EXISTS is always slower.",
        "IN is always slower.",
        "EXISTS returns true if the subquery returns any rows, regardless of the selected column; IN compares against specific values.",
        "There is no difference."
    ],
    "answer": 2,
    "explanation": "EXISTS only checks for the presence of rows in the subquery (often stopping at the first match), making it efficient for correlated subqueries. IN must materialize the full list of values to compare.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-198",
    "question": "Given table Student(name, subject, marks), write a query to pivot the table so subjects become columns.",
    "options": [
        "SELECT name, subject, marks FROM Student;",
        "SELECT name, MAX(CASE WHEN subject='Math' THEN marks END) AS Math, MAX(CASE WHEN subject='Science' THEN marks END) AS Science FROM Student GROUP BY name;",
        "SELECT name, SUM(marks) FROM Student GROUP BY name;",
        "PIVOT Student ON subject;"
    ],
    "answer": 1,
    "explanation": "Standard SQL pivoting uses conditional aggregation (CASE statements inside aggregate functions) grouped by the non-pivoted column to transform rows into columns.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-199",
    "question": "What does the COALESCE function do?",
    "options": [
        "Returns the maximum value.",
        "Returns the first non-NULL value in a list of arguments.",
        "Concatenates strings.",
        "Counts NULL values."
    ],
    "answer": 1,
    "explanation": "COALESCE(arg1, arg2, ...) evaluates the arguments in order and returns the value of the first expression that is not NULL.",
    "difficulty": "Medium",
    "topic": "SQL Query Questions"
},
{
    "id": "dbms-200",
    "question": "You are designing an e-commerce database. Which join would you use to list ALL products, even if they have never been sold, along with their sales records if they exist?",
    "options": [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "CROSS JOIN"
    ],
    "answer": 1,
    "explanation": "Since we want ALL products (the left table) regardless of whether there is a matching sale (the right table), a LEFT JOIN is the correct choice. It will return NULLs for the sales columns if no sale exists.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-201",
    "question": "Your bank's database must ensure that an account balance never goes below zero during a withdrawal. This is an example of:",
    "options": [
        "Entity Integrity",
        "Referential Integrity",
        "User-Defined Integrity (CHECK constraint)",
        "Domain Integrity"
    ],
    "answer": 2,
    "explanation": "A CHECK constraint (User-Defined Integrity) is used to enforce business rules, such as `CHECK (balance >= 0)`. Entity and referential integrity handle primary and foreign keys.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-202",
    "question": "A social media app needs to store user posts, comments, and likes. Posts can have many comments and likes. What is the best way to model the 'likes' relationship?",
    "options": [
        "Add an array of user_ids to the Posts table.",
        "Create a separate 'Likes' table with post_id and user_id as a composite primary key.",
        "Add a boolean column 'is_liked' to the Users table.",
        "Store it in a JSON column in the Posts table."
    ],
    "answer": 1,
    "explanation": "Creating a junction table (Likes) with foreign keys to both Posts and Users, and a composite primary key, is the standard relational way to model a many-to-many relationship while enforcing integrity (e.g., one like per user per post).",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-203",
    "question": "An application requires a audit log of every change made to the 'Employees' table (who changed it, when, old value, new value). What is the best mechanism for this?",
    "options": [
        "A CHECK constraint.",
        "A View.",
        "A Trigger.",
        "A Foreign Key."
    ],
    "answer": 2,
    "explanation": "A trigger can be set to fire AFTER UPDATE, INSERT, or DELETE on the Employees table, capturing the old and new values and inserting them into an AuditLog table.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-204",
    "question": "A report needs to run every night at midnight to calculate total daily sales. The query takes 2 hours to run. What is the best solution to prevent this from impacting daytime performance?",
    "options": [
        "Add more indexes.",
        "Use a Materialized View that refreshes at midnight.",
        "Increase the RAM.",
        "Write a stored procedure."
    ],
    "answer": 1,
    "explanation": "A materialized view stores the pre-computed result of the query physically on disk. It can be configured to refresh on a schedule (midnight), meaning daytime reports read from the static, pre-computed data.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-205",
    "question": "You have a table with 100 million rows. Queries filtering by 'status' and 'created_at' are very slow. What is the best action?",
    "options": [
        "Denormalize the table.",
        "Create a Composite Index on (status, created_at).",
        "Delete old rows.",
        "Change the primary key."
    ],
    "answer": 1,
    "explanation": "A composite index on the exact columns used in the WHERE clause allows the database engine to quickly locate the rows without scanning the entire 100 million row table.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-206",
    "question": "In a highly normalized database, generating a report that joins 10 tables is too slow. What is a common strategy to fix this?",
    "options": [
        "Normalize further.",
        "Denormalize specific tables for read-heavy reporting purposes.",
        "Remove all indexes.",
        "Use more triggers."
    ],
    "answer": 1,
    "explanation": "While normalization is good for write operations and integrity, read-heavy reporting often requires denormalization (combining tables or adding redundant columns) to avoid expensive multi-table joins.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-207",
    "question": "A user reports they cannot update a row, getting a 'timeout' error, but they can query it fine. Another user is currently updating the same row but hasn't committed yet. What is happening?",
    "options": [
        "A deadlock.",
        "A blocking lock. The second user holds an exclusive lock on the row.",
        "A phantom read.",
        "A violation of referential integrity."
    ],
    "answer": 1,
    "explanation": "The first user holds an exclusive lock on the row. The second user wants to update the same row and must wait for the lock to be released. If the wait exceeds the timeout threshold, it fails.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-208",
    "question": "You need to assign a unique, sequential invoice number to every new order. The number must not have gaps (e.g., no missing numbers even if a transaction rolls back). What should you use?",
    "options": [
        "An auto-increment column (IDENTITY).",
        "A Sequence with NOCACHE and ORDER.",
        "A random UUID.",
        "A timestamp."
    ],
    "explanation": "Auto-increment columns can have gaps if transactions are rolled back. A Sequence object can be configured to guarantee no gaps (though this severely impacts concurrency), fulfilling the strict business requirement.",
    "options": [
        "An auto-increment column (IDENTITY).",
        "A Sequence with NOCACHE and ORDER.",
        "A random UUID.",
        "A timestamp."
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-209",
    "question": "You are migrating data from an old legacy system. The old system allowed duplicate emails, but your new system requires them to be unique. How do you find the duplicates before migration?",
    "options": [
        "SELECT email FROM Users GROUP BY email;",
        "SELECT email, COUNT(*) FROM Users GROUP BY email HAVING COUNT(*) > 1;",
        "SELECT DISTINCT email FROM Users;",
        "DELETE FROM Users WHERE email IN (SELECT email FROM Users);"
    ],
    "answer": 1,
    "explanation": "Grouping by email and applying the HAVING clause with COUNT(*) > 1 returns only those emails that appear more than once, identifying the data quality issues.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-210",
    "question": "An HR system needs to track the history of an employee's salary changes over time. What is the best design pattern?",
    "options": [
        "Just UPDATE the salary column.",
        "Create an Employee_Salary_History table with effective dates, linked via foreign key.",
        "Store the history as a comma-separated string.",
        "Create a new column for every raise."
    ],
    "answer": 1,
    "explanation": "A history table (Type 2 Slowly Changing Dimension) allows you to keep the current salary in the main table while logging all past salaries with start and end dates in a secondary table.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-211",
    "question": "A query runs fast when searching by `user_id` but slow when searching by `username`. Both columns are unique. What is likely missing?",
    "options": [
        "A foreign key on username.",
        "An index on the username column.",
        "A trigger on username.",
        "A view for usernames."
    ],
    "answer": 1,
    "explanation": "If `user_id` is fast, it likely has an index (probably the primary key). If `username` is slow, it lacks an index, forcing a full table scan to find the unique value.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-212",
    "question": "You have a global application with users in the US, Europe, and Asia. Database latency is high for Asian users because the DB is in the US. What is the best solution?",
    "options": [
        "Normalize the database more.",
        "Implement Database Replication or Sharding with regional nodes.",
        "Add more RAM to the US server.",
        "Use larger data types."
    ],
    "answer": 1,
    "explanation": "Distributing the database via replication (read replicas) or sharding to create nodes closer to the Asian users significantly reduces network latency compared to all users hitting a single US server.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-213",
    "question": "In a table `Orders(OrderID, CustomerID, OrderDate)`, which of the following is a candidate key?",
    "options": [
        "CustomerID",
        "OrderDate",
        "OrderID",
        "OrderDate + CustomerID"
    ],
    "answer": 2,
    "explanation": "A candidate key must uniquely identify a tuple. CustomerID is not unique (one customer can have many orders). OrderDate is not unique. OrderID is unique by definition. OrderDate + CustomerID *might* be unique, but OrderID is guaranteed and minimal.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-214",
    "question": "You need to send a weekly email to customers who have not logged in for 30 days. Which query structure is most appropriate?",
    "options": [
        "SELECT * FROM Customers WHERE last_login > CURRENT_DATE - 30;",
        "SELECT * FROM Customers WHERE last_login < CURRENT_DATE - 30 OR last_login IS NULL;",
        "SELECT * FROM Customers WHERE last_login IS NULL;",
        "UPDATE Customers SET email_sent = 1;"
    ],
    "answer": 1,
    "explanation": "You need customers whose last login was more than 30 days ago (< CURRENT_DATE - 30) AND those who have never logged in (last_login IS NULL).",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-215",
    "question": "A developer writes: `SELECT * FROM Users WHERE YEAR(created_at) = 2023;`. Why is this generally bad for performance?",
    "options": [
        "It returns too many rows.",
        "Applying a function to the column prevents the database from using an index on created_at.",
        "YEAR() is deprecated.",
        "It causes a deadlock."
    ],
    "answer": 1,
    "explanation": "Using a function on a column in the WHERE clause (like YEAR(created_at)) typically renders any index on that column useless, resulting in a full table scan. A better approach is `created_at >= '2023-01-01' AND created_at < '2024-01-01'`.",
    "difficulty": "Medium",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-216",
    "question": "Consider a relation R(A, B, C, D, E) with Functional Dependencies: AB -> C, C -> D, D -> E. What is the candidate key?",
    "options": [
        "A",
        "AB",
        "C",
        "D"
    ],
    "answer": 1,
    "explanation": "To find the closure of AB: AB+ = {A, B}. AB -> C gives {A, B, C}. C -> D gives {A, B, C, D}. D -> E gives {A, B, C, D, E}. Since AB determines all attributes, AB is the candidate key.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-217",
    "question": "Given relation R(A, B, C) with FDs: A -> B, B -> C. Is the relation in 2NF?",
    "options": [
        "Yes",
        "No, because there is a partial dependency.",
        "No, because there is a transitive dependency.",
        "Cannot be determined."
    ],
    "answer": 1,
    "explanation": "The candidate key is A. Since A is a single attribute, there is no partial dependency. Wait, let me re-evaluate. If A is the key, B depends on A (okay), C depends on B. There is no partial dependency. But is it 2NF? Yes, it is in 2NF. However, let's look at the options. Actually, if the key is A, there is no partial dependency. Let's change the question to have a composite key. Let's say R(A, B, C, D) with AB -> C, A -> D. Key is AB. A -> D is a partial dependency. Therefore, not in 2NF.",
    "question": "Given relation R(A, B, C, D) with FDs: AB -> C, A -> D. Is the relation in 2NF?",
    "options": [
        "Yes, it is in 2NF.",
        "No, because D is partially dependent on the candidate key AB.",
        "No, because of a transitive dependency.",
        "Yes, it is in 3NF."
    ],
    "answer": 1,
    "explanation": "The candidate key is AB. A -> D is a partial dependency because D depends on only a part of the candidate key (A), not the whole key AB. Thus, it violates 2NF.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-218",
    "question": "Given relation R(A, B, C) with FDs: A -> B, B -> C. Is the relation in 3NF?",
    "options": [
        "Yes",
        "No, because B -> C is a transitive dependency.",
        "No, because of a partial dependency.",
        "Yes, it is in BCNF."
    ],
    "answer": 1,
    "explanation": "Candidate key is A. A -> B (key -> non-prime, OK). B -> C (non-prime -> non-prime). This is a transitive dependency (A -> B -> C). Thus, it violates 3NF.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-219",
    "question": "Given relation R(A, B, C) with FDs: AB -> C, C -> B. Is this relation in BCNF?",
    "options": [
        "Yes, because AB is a key.",
        "No, because C -> B and C is not a superkey.",
        "Yes, because C is a prime attribute.",
        "No, because of partial dependency."
    ],
    "answer": 1,
    "explanation": "Candidate keys are AB and AC. For the FD C -> B, the determinant C is NOT a superkey (it doesn't determine A). Therefore, it violates BCNF. (Note: It is in 3NF because B is a prime attribute).",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-220",
    "question": "A table has columns: StudentID, CourseID, ProfessorID, ProfessorName. A professor teaches only one course. What is the highest normal form of this table?",
    "options": [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    "answer": 1,
    "explanation": "Assume Key is (StudentID, CourseID). ProfessorName depends on ProfessorID, and ProfessorID depends on CourseID. ProfessorName is partially dependent on the key (depends on CourseID, which is part of the key). So it is in 1NF but not 2NF.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-221",
    "question": "Decompose the previous table into 2NF. (StudentID, CourseID, ProfessorID, ProfessorName) with FDs: StudentID, CourseID -> ProfessorID; CourseID -> ProfessorID, ProfessorName.",
    "options": [
        "R1(StudentID, CourseID, ProfessorID), R2(CourseID, ProfessorName)",
        "R1(StudentID, ProfessorID), R2(CourseID, ProfessorName)",
        "R1(StudentID, CourseID), R2(ProfessorID, ProfessorName)",
        "R1(StudentID, CourseID, ProfessorID), R2(ProfessorID, ProfessorName)"
    ],
    "answer": 0,
    "explanation": "To remove partial dependencies, we separate attributes that depend on the full key (StudentID, CourseID -> ProfessorID) from those that depend on part of the key (CourseID -> ProfessorID, ProfessorName). R1 keeps the link, R2 holds the course-professor details.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-222",
    "question": "What is a Multi-Valued Dependency (MVD)?",
    "options": [
        "X -> Y where Y is a single value.",
        "X ->> Y, meaning if X determines a set of values for Y, it determines a set of values for Z independently.",
        "A dependency between two foreign keys.",
        "A dependency that requires a composite key."
    ],
    "answer": 1,
    "explanation": "An MVD (X ->> Y) occurs in a table with at least three attributes (X, Y, Z) where X determines multiple values for Y, and those Y values are independent of the multiple values Z also determined by X.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-223",
    "question": "Table: Student(SID, Name, Hobby). A student can have multiple hobbies. This table violates which normal form?",
    "options": [
        "1NF (if stored as 'Reading, Swimming')",
        "2NF",
        "3NF",
        "4NF"
    ],
    "answer": 0,
    "explanation": "If hobbies are stored as a comma-separated string ('Reading, Swimming'), it violates 1NF because the attribute is not atomic. If stored as multiple rows, it is in 1NF but has an MVD (SID ->> Hobby), violating 4NF.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-224",
    "question": "In the context of normalization, what does 'Lossless Join' mean?",
    "options": [
        "No rows are lost when deleting.",
        "Joining the decomposed tables yields the exact original table, no spurious tuples.",
        "Foreign keys are preserved.",
        "Primary keys are not changed."
    ],
    "answer": 1,
    "explanation": "Lossless join ensures that the natural join of the decomposed relations produces exactly the original relation, without adding any extraneous (spurious) rows that didn't exist originally.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-225",
    "question": "When decomposing a relation, what does 'Dependency Preservation' ensure?",
    "options": [
        "All data is preserved.",
        "Every functional dependency in the original relation can be checked in at least one of the decomposed relations without joining.",
        "Indexes are preserved.",
        "Views are preserved."
    ],
    "answer": 1,
    "explanation": "Dependency preservation ensures that you do not need to join the decomposed tables back together to verify a functional dependency constraint, making validation efficient.",
    "difficulty": "Medium",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-226",
    "question": "Is it always possible to decompose a relation into BCNF while preserving both lossless join and dependencies?",
    "options": [
        "Yes, always.",
        "No, sometimes you must sacrifice dependency preservation to achieve BCNF.",
        "No, lossless join is not possible in BCNF.",
        "Yes, but only if it is in 3NF first."
    ],
    "answer": 1,
    "explanation": "While 3NF guarantees both lossless join and dependency preservation, BCNF does not. Sometimes, to reach BCNF, you must decompose in a way that breaks some functional dependencies.",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-227",
    "question": "Consider R(A, B, C) with FDs: A -> B, B -> C, C -> A. What are the candidate keys?",
    "options": [
        "Only A",
        "A, B, and C",
        "AB and BC",
        "AC"
    ],
    "answer": 1,
    "explanation": "This is a cyclic dependency. A+ = {A, B, C}. B+ = {B, C, A}. C+ = {C, A, B}. Since A, B, and C all determine all attributes, they are all candidate keys.",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-228",
    "question": "Given the previous relation R(A, B, C) with FDs: A -> B, B -> C, C -> A. Is it in BCNF?",
    "options": [
        "No, because A is not a superkey.",
        "Yes, because every determinant is a candidate key (superkey).",
        "No, because of transitive dependency.",
        "Only in 3NF."
    ],
    "answer": 1,
    "explanation": "The determinants are A, B, and C. Since all three are candidate keys (and therefore superkeys), the relation satisfies the BCNF condition that every determinant must be a superkey.",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-229",
    "question": "A relation is in 5NF (Project-Join Normal Form) if it is in 4NF and cannot be decomposed further into smaller tables without:",
    "options": [
        "Losing data (Lossless join failure).",
        "Losing functional dependencies.",
        "Losing Join Dependencies.",
        "Creating transitive dependencies."
    ],
    "answer": 0,
    "explanation": "5NF states that a relation cannot be non-loss decomposed into smaller relations. If it can be decomposed without losing information, it is not in 5NF. It deals with Join Dependencies (JDs).",
    "difficulty": "Hard",
    "topic": "5NF"
},
{
    "id": "dbms-230",
    "question": "What is the primary risk of over-normalizing a database?",
    "options": [
        "Data redundancy increases.",
        "Update anomalies occur.",
        "Query performance degrades due to excessive joins.",
        "Data types become invalid."
    ],
    "answer": 2,
    "explanation": "Over-normalization splits data into too many small tables. This means even simple queries require complex, multi-table joins, which significantly hurts read performance.",
    "difficulty": "Hard",
    "topic": "Denormalization"
},
{
    "id": "dbms-231",
    "question": "In a relation R(A, B, C, D, E, F), the FDs are AB -> CDEF, A -> F, D -> E. What is the highest normal form of R?",
    "options": [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    "answer": 1,
    "explanation": "Candidate key is AB. A -> F is a partial dependency (A is part of key, F is non-prime). Therefore, it is in 1NF but not 2NF. D -> E is a transitive dependency, meaning it wouldn't be in 3NF either, but it fails at 2NF first.",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-232",
    "question": "For the previous relation R, decompose it into 2NF.",
    "options": [
        "R1(A, F), R2(A, B, C, D, E)",
        "R1(A, B, C, D, E), R2(D, E)",
        "R1(A, B, C, D), R2(A, F), R3(D, E)",
        "R1(A, B, C, D, E, F)"
    ],
    "answer": 2,
    "explanation": "Remove partial dependencies (A->F) and transitive dependencies (D->E). R1 holds the core key relationship (AB->CD), R2 handles A->F, R3 handles D->E. Note: R1 still has issues (D->E), but removing it creates 3NF. To get to 2NF, we only strictly need to remove partial dependencies, but typically we fix transitive ones too. Actually, R1(A,B,C,D) has D->E removed. If we leave D in R1, R1 violates 3NF. Let's assume the question asks for 2NF specifically. R1(AB, C, D), R2(A, F). R1 is 2NF. R3(D, E) would be for 3NF. Let's adjust the correct answer.",
    "question": "For relation R(A, B, C, D, E, F) with FDs AB -> CDEF, A -> F, D -> E, decompose it strictly into 2NF.",
    "options": [
        "R1(A, B, C, D, E), R2(A, F)",
        "R1(A, B, C, D), R2(A, F), R3(D, E)",
        "R1(A, B, C, D, E, F)",
        "R1(A, B, C, E), R2(A, F), R3(D, E)"
    ],
    "answer": 0,
    "explanation": "Strictly 2NF only removes partial dependencies. The partial dependency is A -> F. So we extract R2(A, F). R1(A, B, C, D, E) has no partial dependencies (AB is the key), so it is in 2NF. (It is not in 3NF because D->E is transitive, but the question asks for 2NF).",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-233",
    "question": "Given R(A, B, C) with FDs: A -> B, A -> C. What is the highest normal form?",
    "options": [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    "answer": 3,
    "explanation": "Candidate key is A. A -> B and A -> C are trivial dependencies where the determinant (A) is the superkey. There are no partial or transitive dependencies. It is in BCNF.",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-234",
    "question": "If a relation has only one candidate key and it is a single attribute, the relation is automatically in at least:",
    "options": [
        "1NF",
        "2NF",
        "3NF",
        "4NF"
    ],
    "answer": 1,
    "explanation": "If the candidate key is a single attribute, there can be no partial dependencies (since there is no 'part' of a single attribute key). Therefore, it is automatically in 2NF. It may or may not be in 3NF depending on transitive dependencies.",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-235",
    "question": "You have a table `ProjectEmp(ProjectID, EmpID, EmpName, Role)`. FDs: ProjectID, EmpID -> Role; EmpID -> EmpName. What is the highest normal form?",
    "options": [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    "answer": 0,
    "explanation": "Candidate key is (ProjectID, EmpID). EmpName depends only on EmpID, which is part of the key. This is a partial dependency, meaning the table is only in 1NF.",
    "difficulty": "Hard",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-236",
    "question": "Decompose the previous `ProjectEmp` table into 3NF.",
    "options": [
        "R1(ProjectID, EmpID, Role), R2(EmpID, EmpName)",
        "R1(ProjectID, EmpID, Role, EmpName)",
        "R1(ProjectID, Role), R2(EmpID, EmpName)",
        "R1(ProjectID, EmpID, EmpName), R2(EmpID, Role)"
    ],
    "answer": 0,
    "explanation": "Extract the partial dependency (EmpID -> EmpName) into R2. R1 keeps the full key dependency (ProjectID, EmpID -> Role). Both resulting tables are now in 3NF (and BCNF).",
    "difficulty": "Hard",
    "topic": "Scenario-Based Questions"
},
{
    "id": "dbms-237",
    "question": "In a distributed database, what does the 'A' in CAP theorem stand for?",
    "options": [
        "Atomicity",
        "Availability",
        "Authentication",
        "Aggregation"
    ],
    "answer": 1,
    "explanation": "In the CAP theorem, A stands for Availability—every request receives a (non-error) response, without the guarantee that it contains the most recent write.",
    "difficulty": "Hard",
    "topic": "CAP Theorem"
},
{
    "id": "dbms-238",
    "question": "In the CAP theorem, what does 'P' stand for?",
    "options": [
        "Performance",
        "Partition Tolerance",
        "Persistence",
        "Parallelism"
    ],
    "answer": 1,
    "explanation": "P stands for Partition Tolerance—the system continues to operate despite an arbitrary number of messages being dropped or delayed by the network between nodes.",
    "difficulty": "Hard",
    "topic": "CAP Theorem"
},
{
    "id": "dbms-239",
    "question": "According to the CAP theorem, in the presence of a network partition, a distributed system must choose between:",
    "options": [
        "Atomicity and Durability.",
        "Consistency and Availability.",
        "Reads and Writes.",
        "Normalization and Replication."
    ],
    "answer": 1,
    "explanation": "The theorem states that in a distributed system, since partition tolerance is mandatory in real-world networks, you can only choose either Consistency (C) or Availability (A) during a partition.",
    "difficulty": "Hard",
    "topic": "CAP Theorem"
},
{
    "id": "dbms-240",
    "question": "Which of the following is an example of an AP (Available, Partition Tolerant) system?",
    "options": [
        "Traditional RDBMS (like PostgreSQL)",
        "Apache Cassandra",
        "MongoDB (with strong consistency enabled)",
        "SQLite"
    ],
    "answer": 1,
    "explanation": "Cassandra is designed to be highly available and partition tolerant. It sacrifices strong consistency (eventual consistency) to ensure the system remains available during network partitions.",
    "difficulty": "Hard",
    "topic": "CAP Theorem"
},
{
    "id": "dbms-241",
    "question": "What is the difference between a schedule being 'Conflict Serializable' and 'View Serializable'?",
    "options": [
        "They are exactly the same.",
        "Every conflict serializable schedule is view serializable, but not every view serializable schedule is conflict serializable.",
        "Every view serializable schedule is conflict serializable, but not vice versa.",
        "They are mutually exclusive."
    ],
    "answer": 1,
    "explanation": "Conflict serializability is a stricter subset of view serializability. If a schedule is conflict serializable, it is always view serializable. However, there are view serializable schedules that are not conflict serializable (those with blind writes).",
    "difficulty": "Hard",
    "topic": "Transaction & Concurrency Questions"
},
{
    "id": "dbms-242",
    "question": "Which concurrency control technique does NOT use locking?",
    "options": [
        "Two-Phase Locking",
        "Strict 2PL",
        "Timestamp Ordering",
        "Wait-Die"
    ],
    "answer": 2,
    "explanation": "Timestamp Ordering relies on assigning unique timestamps to transactions and resolving conflicts based on timestamp order, rather than using explicit locks on data items.",
    "difficulty": "Hard",
    "topic": "Transaction & Concurrency Questions"
},
{
    "id": "dbms-243",
    "question": "In Thomas' Write Rule (a variation of Timestamp Ordering), what happens if a transaction tries to write a data item that has already been written by a younger transaction?",
    "options": [
        "The older transaction is rolled back.",
        "The older transaction's write is ignored (skipped), and it is allowed to continue.",
        "The younger transaction is rolled back.",
        "A deadlock occurs."
    ],
    "answer": 1,
    "explanation": "Thomas' Write Rule improves basic Timestamp Ordering by ignoring (rather than aborting) a write operation from an older transaction if a younger transaction has already written the data. This maintains view serializability while reducing aborts.",
    "difficulty": "Hard",
    "topic": "Transaction & Concurrency Questions"
},
{
    "id": "dbms-244",
    "question": "What is a Cascading Rollback?",
    "options": [
        "Rolling back a single transaction.",
        "A situation where rolling back one transaction forces other transactions to be rolled back because they read data written by the first.",
        "Rolling back all transactions in the database.",
        "A backup restoration technique."
    ],
    "answer": 1,
    "explanation": "If Transaction A reads uncommitted data from Transaction B, and B is rolled back, A must also be rolled back to maintain consistency. This chain reaction is a cascading rollback.",
    "difficulty": "Hard",
    "topic": "Transaction & Concurrency Questions"
},
{
    "id": "dbms-245",
    "question": "Which locking protocol prevents cascading rollbacks?",
    "options": [
        "Basic 2PL",
        "Strict 2PL",
        "Conservative 2PL",
        "Both Strict and Conservative 2PL"
    ],
    "answer": 3,
    "explanation": "Strict 2PL holds exclusive locks until commit/abort, and Conservative 2PL acquires all locks before starting. Both prevent other transactions from reading uncommitted data, thus preventing cascading rollbacks.",
    "difficulty": "Hard",
    "topic": "Transaction & Concurrency Questions"
},
{
    "id": "dbms-246",
    "question": "What is a 'Blind Write'?",
    "options": [
        "Writing to a non-existent table.",
        "A write operation (W(Q)) performed by a transaction without first reading (R(Q)) the data item Q.",
        "Writing encrypted data.",
        "Writing without a lock."
    ],
    "answer": 1,
    "explanation": "A blind write occurs when a transaction writes a value to a data item without reading it first. These are significant because they can create conflicts that make a schedule view serializable but NOT conflict serializable.",
    "difficulty": "Hard",
    "topic": "Transaction & Concurrency Questions"
},
{
    "id": "dbms-247",
    "question": "In multiple-granularity locking, what is the purpose of an Intention Lock (IS, IX)?",
    "options": [
        "To lock the actual data rows.",
        "To indicate that a transaction intends to lock a lower-level node in the hierarchy.",
        "To prevent deadlocks.",
        "To encrypt the data."
    ],
    "answer": 1,
    "explanation": "Intention locks are placed on a higher-level node (like a table) to signal that a transaction plans to lock a lower-level node (like a page or row) explicitly later. This improves concurrency by checking compatibility at the top level first.",
    "difficulty": "Hard",
    "topic": "Locking"
},
{
    "id": "dbms-248",
    "question": "Which of the following lock modes is compatible with an Intention Shared (IS) lock?",
    "options": [
        "Exclusive (X)",
        "Intention Exclusive (IX)",
        "Shared (S)",
        "Six (SIX)"
    ],
    "answer": 2,
    "explanation": "IS locks are compatible with Shared (S) locks and other IS locks. They conflict with Exclusive (X), Intention Exclusive (IX), and Shared with Intent Exclusive (SIX) locks.",
    "difficulty": "Hard",
    "topic": "Locking"
},
{
    "id": "dbms-249",
    "question": "What is the 'Multiple Granularity Locking' protocol hierarchy typically from top to bottom?",
    "options": [
        "Row -> Page -> Table -> Database",
        "Database -> Table -> Page -> Row",
        "Table -> Database -> Row -> Page",
        "Page -> Row -> Table -> Database"
    ],
    "answer": 1,
    "explanation": "The hierarchy goes from the coarsest granularity (Database) down to the finest granularity (Row). Locks acquired at a higher level implicitly lock lower levels.",
    "difficulty": "Hard",
    "topic": "Locking"
},
{
    "id": "dbms-250",
    "question": "Why is Strict 2PL generally preferred over Basic 2PL in commercial DBMS?",
    "options": [
        "It requires fewer locks.",
        "It prevents dirty reads and cascading rollbacks, ensuring stricter recoverability.",
        "It is faster.",
        "It allows more concurrency."
    ],
    "answer": 1,
    "explanation": "Basic 2PL can lead to dirty reads and cascading rollbacks because it releases locks before commit. Strict 2PL holds exclusive locks until commit, ensuring strict schedules that are easier to recover.",
    "difficulty": "Hard",
    "topic": "Strict 2PL"
},
{
    "id": "dbms-251",
    "question": "In the context of ARIES recovery, what is the purpose of the Analysis phase?",
    "options": [
        "To redo all committed transactions.",
        "To undo all uncommitted transactions.",
        "To identify dirty pages in the buffer and determine the set of transactions to redo and undo.",
        "To delete the log file."
    ],
    "answer": 2,
    "explanation": "The Analysis phase reads the log from the last checkpoint forward to determine which transactions committed and which did not, establishing the starting point for REDO and UNDO phases.",
    "difficulty": "Hard",
    "topic": "Crash Recovery"
},
{
    "id": "dbms-252",
    "question": "In the ARIES algorithm, what happens during the REDO phase?",
    "options": [
        "It re-applies all logged actions of committed and uncommitted transactions to bring the database to the crash state.",
        "It reverses the actions of uncommitted transactions.",
        "It writes a checkpoint.",
        "It deletes dirty pages."
    ],
    "answer": 0,
    "explanation": "The REDO phase repeats history. It re-applies all actions (from committed AND uncommitted transactions) recorded in the log to ensure the database state matches exactly what it was at the time of the crash.",
    "difficulty": "Hard",
    "topic": "Crash Recovery"
},
{
    "id": "dbms-253",
    "question": "In the ARIES algorithm, what happens during the UNDO phase?",
    "options": [
        "It re-applies committed transactions.",
        "It reverses the effects of all transactions that were not committed at the time of the crash.",
        "It restores the database to the initial state.",
        "It commits all pending transactions."
    ],
    "answer": 1,
    "explanation": "The UNDO phase scans the log backwards and uses compensation log records (CLRs) to reverse the effects of transactions identified as uncommitted during the Analysis phase.",
    "difficulty": "Hard",
    "topic": "Crash Recovery"
},
{
    "id": "dbms-254",
    "question": "What is a 'Fuzzy Checkpoint'?",
    "options": [
        "A checkpoint that writes all data to disk instantly.",
        "A checkpoint where dirty pages are written to disk asynchronously while the system continues to process transactions.",
        "A checkpoint that only saves logs.",
        "A backup of the entire disk."
    ],
    "answer": 1,
    "explanation": "A fuzzy checkpoint does not halt the system. It records the list of dirty pages and allows the buffer manager to write them to disk in the background, minimizing disruption to transaction processing.",
    "difficulty": "Hard",
    "topic": "Checkpoint"
},
{
    "id": "dbms-255",
    "question": "What is the main disadvantage of Shadow Paging compared to WAL?",
    "options": [
        "It requires logging.",
        "It causes data fragmentation and doesn't support concurrent transactions well.",
        "It is slower for reads.",
        "It cannot recover from crashes."
    ],
    "answer": 1,
    "explanation": "Shadow paging copies entire pages, leading to data fragmentation over time. More importantly, it is difficult to implement efficiently for concurrent transactions because they all modify the same shadow page table.",
    "difficulty": "Hard",
    "topic": "Shadow Paging"
},
{
    "id": "dbms-256",
    "question": "A relation R(A, B, C, D) has FDs {AB -> C, BC -> D}. What is the closure of {AB}?",
    "options": [
        "{A, B, C}",
        "{A, B, C, D}",
        "{A, B}",
        "{C, D}"
    ],
    "answer": 1,
    "explanation": "Start with {A, B}. AB -> C adds C. Now we have {A, B, C}. BC -> D adds D. Result is {A, B, C, D}. Since it contains all attributes, AB is a superkey.",
    "difficulty": "Hard",
    "topic": "Functional Dependency"
},
{
    "id": "dbms-257",
    "question": "For relation R(A, B, C, D) with FDs {AB -> C, BC -> D}, what are the candidate keys?",
    "options": [
        "AB",
        "AB and BC",
        "A and B",
        "AC and BD"
    ],
    "answer": 0,
    "explanation": "We found AB+ = {A,B,C,D}. Let's check BC+: {B,C}. BC->D adds D. We have {B,C,D}. We cannot get A. So BC is not a key. Only AB is a candidate key.",
    "difficulty": "Hard",
    "topic": "Functional Dependency"
},
{
    "id": "dbms-258",
    "question": "For the previous relation R(ABCD) with FDs {AB->C, BC->D} and Key AB, what is the highest normal form?",
    "options": [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    "answer": 3,
    "explanation": "Key is AB. FD1: AB->C (Key -> Non-Prime, OK for BCNF). FD2: BC->D. Is BC a superkey? BC+ = {B,C,D}. It does not contain A. Therefore, BC is NOT a superkey. So it is NOT in BCNF. Is it in 3NF? D is non-prime. C is non-prime. So it's not 3NF either. Is it in 2NF? No partial dependencies. So it is in 2NF.",
    "question": "For relation R(A, B, C, D) with FDs {AB -> C, BC -> D} and Key AB, what is the highest normal form?",
    "options": [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    "answer": 1,
    "explanation": "The key is AB. The FD BC -> D is a transitive dependency (AB -> C -> D). Because D is non-prime and C is non-prime, it violates 3NF. There are no partial dependencies, so it is in 2NF.",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-259",
    "question": "Decompose R(ABCD) with FDs {AB->C, BC->D} into BCNF.",
    "options": [
        "R1(BCD), R2(ABC)",
        "R1(BCD), R2(AB)",
        "R1(ABC), R2(CD)",
        "R1(AB), R2(CD)"
    ],
    "answer": 0,
    "explanation": "BC->D violates BCNF. Decompose on BC->D into R1(B, C, D) and R2(A, B, C). Check R2: AB->C holds, AB is key, R2 is BCNF. Check R1: BC->D holds, BC is key, R1 is BCNF. This is lossless but loses the dependency AB->C (not preserved).",
    "difficulty": "Hard",
    "topic": "Normalization Questions"
},
{
    "id": "dbms-260",
    "question": "What is a 'Shared Lock' (S-lock)?",
    "options": [
        "A lock that allows only one transaction to read and write.",
        "A lock that allows multiple transactions to read a data item concurrently, but none can write.",
        "A lock that allows multiple transactions to write.",
        "A lock placed on the entire database."
    ],
    "answer": 1,
    "explanation": "A Shared Lock (Read Lock) indicates that the transaction intends to read the data. Multiple transactions can hold S-locks on the same data item simultaneously, but an Exclusive lock is incompatible.",
    "difficulty": "Hard",
    "topic": "Locking"
},
{
    "id": "dbms-261",
    "question": "What is an 'Exclusive Lock' (X-lock)?",
    "options": [
        "A lock that allows multiple transactions to read.",
        "A lock that allows a transaction to both read and write a data item, excluding all other locks.",
        "A lock that is only used for deletion.",
        "A lock that prevents the transaction from rolling back."
    ],
    "answer": 1,
    "explanation": "An Exclusive Lock (Write Lock) is held when a transaction wants to update data. It is incompatible with both Shared locks and other Exclusive locks, ensuring no other transaction can read or write the item.",
    "difficulty": "Hard",
    "topic": "Locking"
},
{
    "id": "dbms-262",
    "question": "You have a schedule: W1(A), R2(A), W2(A), R1(A). Draw the precedence graph. Is it conflict serializable?",
    "options": [
        "Yes, it is equivalent to serial schedule T1, T2.",
        "No, there is a cycle (T1 -> T2 -> T1).",
        "Yes, it is equivalent to serial schedule T2, T1.",
        "It cannot be determined."
    ],
    "answer": 1,
    "explanation": "W1(A) conflicts with R2(A) -> Edge T1 to T2. R2(A) conflicts with W1(A) is already covered. W2(A) conflicts with R1(A) -> Edge T2 to T1. The graph has a cycle (T1<->T2), so it is NOT conflict serializable.",
    "difficulty": "Hard",
    "topic": "Conflict Serializability"
},
{
    "id": "dbms-263",
    "question": "What is the 'Abort' state in a transaction state diagram?",
    "options": [
        "The state where the transaction is actively executing.",
        "The state after a transaction is rolled back, before it restarts or terminates.",
        "The state where locks are acquired.",
        "The state after a successful commit."
    ],
    "answer": 1,
    "explanation": "Once a transaction is rolled back (due to an error or deadlock), it enters the Aborted state. The DBMS may then restart it or terminate it completely.",
    "difficulty": "Hard",
    "topic": "Transactions"
},
{
    "id": "dbms-264",
    "question": "In query optimization, what is a 'Hash Join' most efficient for?",
    "options": [
        "Joining large, unsorted tables where an equijoin condition exists.",
        "Joining small tables that fit in memory.",
        "Joining tables with range conditions (e.g., >, <).",
        "Joining tables that are already sorted."
    ],
    "answer": 0,
    "explanation": "A hash join builds a hash table of the smaller input on the join key in memory, then probes it with the larger input. It is extremely efficient for large, unsorted equijoins but useless for non-equijoins.",
    "difficulty": "Hard",
    "topic": "Query Optimization"
},
{
    "id": "dbms-265",
    "question": "What is a 'Merge Join' (Sort-Merge Join)?",
    "options": [
        "Joining using a hash table.",
        "Joining two tables that are sorted on the join key by scanning them simultaneously.",
        "Joining by doing a nested loop.",
        "Joining using an index."
    ],
    "answer": 1,
    "explanation": "A merge join requires both inputs to be sorted on the join key. It scans both sorted inputs simultaneously, matching rows with equal keys. It is very fast for large datasets if they are already sorted.",
    "difficulty": "Hard",
    "topic": "Query Optimization"
},
{
    "id": "dbms-266",
    "question": "Which of the following is an advantage of a Column-Family Database (like Cassandra or HBase) over a traditional RDBMS?",
    "options": [
        "Strict ACID compliance.",
        "Complex JOIN operations.",
        "High write throughput and efficient compression of similar data types in a column.",
        "Enforcing complex referential integrity."
    ],
    "answer": 2,
    "explanation": "Column-family stores group related columns together on disk. This allows for extremely fast sequential writes and high data compression ratios because similar data types are stored together.",
    "difficulty": "Hard",
    "topic": "Column Family Database"
},
{
    "id": "dbms-267",
    "question": "In MongoDB, what is a 'Collection' equivalent to in an RDBMS?",
    "options": [
        "A Row",
        "A Table",
        "A Column",
        "A Database"
    ],
    "answer": 1,
    "explanation": "In MongoDB, a Collection is a group of documents, functionally equivalent to a Table in an RDBMS. A Document is equivalent to a Row/Record.",
    "difficulty": "Hard",
    "topic": "MongoDB Basics"
},
{
    "id": "dbms-268",
    "question": "In MongoDB, what is the default primary key field called?",
    "options": [
        "id",
        "_id",
        "ID",
        "primary_key"
    ],
    "answer": 1,
    "explanation": "MongoDB requires every document to have an `_id` field as its primary key. If not provided, MongoDB automatically generates a unique ObjectId for this field.",
    "difficulty": "Hard",
    "topic": "MongoDB Basics"
},
{
    "id": "dbms-269",
    "question": "What is the 'Silent Truncation' problem in SQL Server regarding VARCHAR and NVARCHAR?",
    "options": [
        "Data is deleted without error.",
        "If you insert a string longer than the declared length, it is truncated to fit without raising an error (unless SET ANSI_WARNINGS is ON).",
        "The column type is changed automatically.",
        "The transaction is rolled back."
    ],
    "answer": 1,
    "explanation": "By default in older behaviors, if a string exceeds the length of a VARCHAR column, SQL Server truncates it and inserts the remaining characters without throwing an error, which can cause data loss silently.",
    "difficulty": "Hard",
    "topic": "Advanced DBMS Concepts"
},
{
    "id": "dbms-270",
    "question": "What is a 'Covering Index'?",
    "options": [
        "An index that covers the entire table.",
        "A non-clustered index that contains all the columns required by a specific query, eliminating the need to access the data pages.",
        "An index used for backup.",
        "A clustered index."
    ],
    "answer": 1,
    "explanation": "A covering index includes all columns mentioned in the SELECT, JOIN, and WHERE clauses of a query. The query can be satisfied entirely from the index tree (key + included columns) without doing expensive key lookups to the data pages.",
    "difficulty": "Hard",
    "topic": "Indexes"
},
{
    "id": "dbms-271",
    "question": "What does the 'INCLUDE' clause do when creating a non-clustered index in SQL Server?",
    "options": [
        "Adds columns to the index key.",
        "Adds non-key columns to the leaf level of the index to create a covering index without increasing the key size.",
        "Includes a WHERE clause in the index.",
        "Includes the table in a specific schema."
    ],
    "answer": 1,
    "explanation": "The INCLUDE clause adds non-key columns to the leaf level of a non-clustered index. This creates a covering index, allowing SQL Server to bypass expensive data page lookups and improve query performance without increasing the index key size.",
    "difficulty": "Hard",
    "topic": "Indexes"
}
]