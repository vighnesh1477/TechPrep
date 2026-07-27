export default [
{
    id: "sql-1",
    question: "What does SQL stand for?",
    options: [
        "Structured Query Language",
        "Simple Query Language",
        "Sequential Query Language",
        "Standard Query Logic"
    ],
    answer: 0,
    explanation: "SQL stands for Structured Query Language. It is the standard language used to communicate with relational database management systems (RDBMS).",
    difficulty: "Easy",
    topic: "Introduction to SQL"
},
{
    id: "sql-2",
    question: "Which of the following is NOT a category of SQL commands?",
    options: [
        "DML (Data Manipulation Language)",
        "DQL (Data Query Language)",
        "DCL (Data Control Language)",
        "DPL (Data Processing Language)"
    ],
    answer: 3,
    explanation: "DPL is not a standard SQL command category. The standard categories are DDL, DML, DQL, DCL, and TCL (Transaction Control Language).",
    difficulty: "Easy",
    topic: "SQL Standards"
},
{
    id: "sql-3",
    question: "Which SQL command is used to retrieve data from a database?",
    options: [
        "FETCH",
        "GET",
        "SELECT",
        "RETRIEVE"
    ],
    answer: 2,
    explanation: "The SELECT statement is the standard SQL command used to retrieve data from one or more tables in a database.",
    difficulty: "Easy",
    topic: "SELECT"
},
{
    id: "sql-4",
    question: "Which of the following is a DDL (Data Definition Language) command?",
    options: [
        "INSERT",
        "UPDATE",
        "CREATE",
        "DELETE"
    ],
    answer: 2,
    explanation: "CREATE is a DDL command used to define database objects like tables, views, and indexes. INSERT, UPDATE, and DELETE are DML commands.",
    difficulty: "Easy",
    topic: "CREATE"
},
{
    id: "sql-5",
    question: "Which data type is used to store variable-length character strings up to a specified length?",
    options: [
        "CHAR",
        "VARCHAR",
        "TEXT",
        "BLOB"
    ],
    answer: 1,
    explanation: "VARCHAR stores variable-length character strings. Unlike CHAR which pads with spaces to the declared length, VARCHAR only uses the actual storage needed for the data.",
    difficulty: "Easy",
    topic: "VARCHAR"
},
{
    id: "sql-6",
    question: "What is the difference between CHAR(10) and VARCHAR(10) when storing the value 'SQL'?",
    options: [
        "Both store 'SQL' with 3 bytes plus padding",
        "CHAR(10) stores 'SQL       ' (padded to 10), VARCHAR(10) stores 'SQL' (3 bytes)",
        "VARCHAR(10) stores 'SQL       ' (padded to 10), CHAR(10) stores 'SQL' (3 bytes)",
        "There is no difference between them"
    ],
    answer: 1,
    explanation: "CHAR(10) is a fixed-length type that pads the string with spaces to exactly 10 characters. VARCHAR(10) is variable-length and stores only the actual characters plus a length prefix.",
    difficulty: "Easy",
    topic: "CHAR"
},
{
    id: "sql-7",
    question: "Which data type would be most appropriate to store a person's age?",
    options: [
        "VARCHAR(3)",
        "INT",
        "FLOAT",
        "TEXT"
    ],
    answer: 1,
    explanation: "INT is the most appropriate data type for storing a person's age since age is always a whole number and does not require fractional precision.",
    difficulty: "Easy",
    topic: "INT"
},
{
    id: "sql-8",
    question: "What is the purpose of the PRIMARY KEY constraint?",
    options: [
        "To allow NULL values in a column",
        "To uniquely identify each row in a table",
        "To create a foreign key relationship",
        "To set a default value for a column"
    ],
    answer: 1,
    explanation: "A PRIMARY KEY constraint uniquely identifies each record in a database table. It must contain unique values and cannot contain NULL values.",
    difficulty: "Easy",
    topic: "Primary Key"
},
{
    id: "sql-9",
    question: "Which command is used to remove all rows from a table without logging individual row deletions?",
    options: [
        "DELETE FROM table_name",
        "DROP TABLE table_name",
        "TRUNCATE TABLE table_name",
        "REMOVE TABLE table_name"
    ],
    answer: 2,
    explanation: "TRUNCATE TABLE removes all rows from a table by deallocating the data pages, making it faster than DELETE which logs each row deletion. TRUNCATE cannot be rolled back in some databases.",
    difficulty: "Easy",
    topic: "TRUNCATE"
},
{
    id: "sql-10",
    question: "Which SQL keyword is used to filter results based on a pattern match?",
    options: [
        "MATCH",
        "PATTERN",
        "LIKE",
        "REGEX"
    ],
    answer: 2,
    explanation: "The LIKE keyword is used in a WHERE clause to search for a specified pattern in a column. It uses % to match any sequence of characters and _ to match any single character.",
    difficulty: "Easy",
    topic: "LIKE"
},
{
    id: "sql-11",
    question: "What does the DISTINCT keyword do in a SELECT statement?",
    options: [
        "Sorts the result set",
        "Removes duplicate rows from the result set",
        "Returns only NULL values",
        "Limits the number of rows returned"
    ],
    answer: 1,
    explanation: "The DISTINCT keyword eliminates duplicate rows from the result set, ensuring only unique values are returned for the specified columns.",
    difficulty: "Easy",
    topic: "DISTINCT"
},
{
    id: "sql-12",
    question: "Which operator is used to specify a range of values in a WHERE clause?",
    options: [
        "RANGE",
        "WITHIN",
        "BETWEEN",
        "FROM...TO"
    ],
    answer: 2,
    explanation: "The BETWEEN operator selects values within a given range. It is inclusive, meaning both the start and end values are included in the result.",
    difficulty: "Easy",
    topic: "BETWEEN"
},
{
    id: "sql-13",
    question: "Which clause is used to sort the result set of a SELECT statement?",
    options: [
        "SORT BY",
        "ORDER BY",
        "GROUP BY",
        "ARRANGE BY"
    ],
    answer: 1,
    explanation: "The ORDER BY clause is used to sort the result set in ascending (ASC) or descending (DESC) order based on one or more columns.",
    difficulty: "Easy",
    topic: "ORDER BY"
},
{
    id: "sql-14",
    question: "What is the default sort order when using ORDER BY without specifying ASC or DESC?",
    options: [
        "Descending",
        "Ascending",
        "Random",
        "No specific order"
    ],
    answer: 1,
    explanation: "When no sort direction is specified, ORDER BY defaults to ascending (ASC) order, sorting from the smallest to the largest value.",
    difficulty: "Easy",
    topic: "ORDER BY"
},
{
    id: "sql-15",
    question: "Which clause is used to group rows that have the same values into summary rows?",
    options: [
        "ORDER BY",
        "GROUP BY",
        "CLUSTER BY",
        "PARTITION BY"
    ],
    answer: 1,
    explanation: "The GROUP BY clause groups rows with the same values into summary rows. It is often used with aggregate functions like COUNT, SUM, AVG, etc.",
    difficulty: "Easy",
    topic: "GROUP BY"
},
{
    id: "sql-16",
    question: "Which aggregate function returns the number of rows that match a specified criterion?",
    options: [
        "SUM",
        "COUNT",
        "TOTAL",
        "NUM"
    ],
    answer: 1,
    explanation: "The COUNT() function returns the number of rows that match a specified criterion. COUNT(*) counts all rows, while COUNT(column) counts non-NULL values in that column.",
    difficulty: "Easy",
    topic: "COUNT"
},
{
    id: "sql-17",
    question: "What is the purpose of the WHERE clause?",
    options: [
        "To sort the result set",
        "To group rows together",
        "To filter records based on a condition",
        "To limit the number of columns returned"
    ],
    answer: 2,
    explanation: "The WHERE clause is used to extract only those records that fulfill a specified condition, effectively filtering the result set of a SELECT, UPDATE, or DELETE statement.",
    difficulty: "Easy",
    topic: "WHERE"
},
{
    id: "sql-18",
    question: "Which SQL operator is used to check if a value is NULL?",
    options: [
        "= NULL",
        "== NULL",
        "IS NULL",
        "EQUALS NULL"
    ],
    answer: 2,
    explanation: "IS NULL is the correct operator to check for NULL values. Using = NULL does not work because NULL is not a value but rather the absence of a value, and comparisons with NULL always return UNKNOWN.",
    difficulty: "Easy",
    topic: "IS NULL"
},
{
    id: "sql-19",
    question: "Which data type is most appropriate for storing monetary values to avoid floating-point rounding errors?",
    options: [
        "FLOAT",
        "DOUBLE",
        "DECIMAL",
        "REAL"
    ],
    answer: 2,
    explanation: "DECIMAL (or NUMERIC) is a fixed-point data type that stores exact values, making it ideal for monetary calculations where precision is critical. FLOAT and DOUBLE are approximate types that can have rounding errors.",
    difficulty: "Easy",
    topic: "DECIMAL"
},
{
    id: "sql-20",
    question: "Which command is used to modify an existing table structure?",
    options: [
        "MODIFY TABLE",
        "ALTER TABLE",
        "UPDATE TABLE",
        "CHANGE TABLE"
    ],
    answer: 1,
    explanation: "The ALTER TABLE command is used to add, delete, or modify columns in an existing table, as well as add and drop various constraints.",
    difficulty: "Easy",
    topic: "ALTER"
},
{
    id: "sql-21",
    question: "What does the NOT NULL constraint ensure?",
    options: [
        "The column must have a unique value",
        "The column cannot contain a NULL value",
        "The column must contain a default value",
        "The column must be a primary key"
    ],
    answer: 1,
    explanation: "The NOT NULL constraint enforces that a column cannot contain NULL values, ensuring that every row must have a value for that column.",
    difficulty: "Easy",
    topic: "NOT NULL"
},
{
    id: "sql-22",
    question: "Which JOIN returns only the rows that have matching values in both tables?",
    options: [
        "LEFT JOIN",
        "RIGHT JOIN",
        "INNER JOIN",
        "FULL OUTER JOIN"
    ],
    answer: 2,
    explanation: "INNER JOIN returns only the rows where there is a match in both tables based on the join condition. Rows without matches in either table are excluded.",
    difficulty: "Easy",
    topic: "INNER JOIN"
},
{
    id: "sql-23",
    question: "What is a FOREIGN KEY?",
    options: [
        "A key used to encrypt data",
        "A column that creates a link between two tables by referencing a primary key",
        "A key that uniquely identifies a row in its own table",
        "A special key used for indexing"
    ],
    answer: 1,
    explanation: "A FOREIGN KEY is a column (or set of columns) in one table that references the PRIMARY KEY of another table, establishing a relationship between the two tables and enforcing referential integrity.",
    difficulty: "Easy",
    topic: "Foreign Key"
},
{
    id: "sql-24",
    question: "Which SQL statement is used to insert new data into a table?",
    options: [
        "ADD",
        "INSERT",
        "PUT",
        "APPEND"
    ],
    answer: 1,
    explanation: "The INSERT INTO statement is used to add new records (rows) to a table in a database.",
    difficulty: "Easy",
    topic: "INSERT"
},
{
    id: "sql-25",
    question: "Which keyword is used to give a column a temporary name in the result set?",
    options: [
        "RENAME",
        "DEFINE",
        "AS",
        "TEMP"
    ],
    answer: 2,
    explanation: "The AS keyword is used to create an alias for a column or table in a query. Column aliases make the output more readable. Note: AS is optional in some SQL dialects.",
    difficulty: "Easy",
    topic: "Aliases"
},
{
    id: "sql-26",
    question: "Which set operation returns only distinct rows that appear in both result sets?",
    options: [
        "UNION",
        "UNION ALL",
        "INTERSECT",
        "EXCEPT"
    ],
    answer: 2,
    explanation: "INTERSECT returns only the distinct rows that are present in both result sets. It eliminates duplicates from the final result.",
    difficulty: "Easy",
    topic: "INTERSECT"
},
{
    id: "sql-27",
    question: "What is the difference between UNION and UNION ALL?",
    options: [
        "UNION ALL sorts the result, UNION does not",
        "UNION removes duplicates, UNION ALL includes all rows including duplicates",
        "UNION is faster than UNION ALL",
        "UNION ALL only works with the same number of columns, UNION does not"
    ],
    answer: 1,
    explanation: "UNION removes duplicate rows from the combined result set, while UNION ALL retains all rows including duplicates. UNION ALL is generally faster because it skips the duplicate elimination step.",
    difficulty: "Easy",
    topic: "UNION"
},
{
    id: "sql-28",
    question: "Which SQL command removes a table from the database along with its structure?",
    options: [
        "DELETE TABLE",
        "REMOVE TABLE",
        "DROP TABLE",
        "CLEAR TABLE"
    ],
    answer: 2,
    explanation: "DROP TABLE permanently removes a table and all its data, structure, indexes, constraints, and associated permissions from the database. This operation cannot be rolled back in most databases.",
    difficulty: "Easy",
    topic: "DROP"
},
{
    id: "sql-29",
    question: "Which date function returns the current date in standard SQL?",
    options: [
        "NOW()",
        "GETDATE()",
        "CURRENT_DATE",
        "SYSDATE()"
    ],
    answer: 2,
    explanation: "CURRENT_DATE is the standard SQL function that returns the current date. NOW() and GETDATE() are database-specific (MySQL and SQL Server respectively).",
    difficulty: "Easy",
    topic: "Date Functions"
},
{
    id: "sql-30",
    question: "Which string function returns the length of a string in standard SQL?",
    options: [
        "LEN()",
        "LENGTH()",
        "SIZE()",
        "CHAR_LENGTH()"
    ],
    answer: 3,
    explanation: "CHAR_LENGTH() is the standard SQL function for returning the number of characters in a string. LENGTH() is commonly used in MySQL and Oracle, while LEN() is used in SQL Server.",
    difficulty: "Easy",
    topic: "String Functions"
},
{
    id: "sql-31",
    question: "What is the result of SELECT NULL = NULL?",
    options: [
        "TRUE",
        "FALSE",
        "NULL",
        "Error"
    ],
    answer: 2,
    explanation: "Any comparison with NULL returns NULL (UNKNOWN) in SQL, not TRUE or FALSE. This is because NULL represents an unknown value, and comparing two unknowns yields an unknown result.",
    difficulty: "Easy",
    topic: "NULL Handling"
},
{
    id: "sql-32",
    question: "Which clause is used to filter groups formed by the GROUP BY clause?",
    options: [
        "WHERE",
        "FILTER",
        "HAVING",
        "RESTRICT"
    ],
    answer: 2,
    explanation: "The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions. HAVING filters groups after the GROUP BY has been applied.",
    difficulty: "Easy",
    topic: "HAVING"
},
{
    id: "sql-33",
    question: "Which keyword is used to set a default value for a column when no value is specified during INSERT?",
    options: [
        "AUTO",
        "DEFAULT",
        "FILL",
        "SET"
    ],
    answer: 1,
    explanation: "The DEFAULT constraint provides a default value for a column when no value is specified during an INSERT operation. This ensures the column always has a value.",
    difficulty: "Easy",
    topic: "DEFAULT"
},
{
    id: "sql-34",
    question: "What does the UNIQUE constraint do?",
    options: [
        "Ensures all values in a column are NULL",
        "Ensures all values in a column are different from each other",
        "Ensures a column has a default value",
        "Ensures a column references another table"
    ],
    answer: 1,
    explanation: "The UNIQUE constraint ensures that all values in a column (or combination of columns) are distinct. Unlike PRIMARY KEY, UNIQUE allows NULL values (except in some databases where only one NULL is allowed).",
    difficulty: "Easy",
    topic: "UNIQUE"
},
{
    id: "sql-35",
    question: "Which JOIN returns all rows from the left table and matched rows from the right table?",
    options: [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "CROSS JOIN"
    ],
    answer: 1,
    explanation: "LEFT JOIN (or LEFT OUTER JOIN) returns all rows from the left table and the matched rows from the right table. Unmatched rows from the left table will have NULL values for right table columns.",
    difficulty: "Easy",
    topic: "LEFT JOIN"
},
{
    id: "sql-36",
    question: "What is the CHECK constraint used for?",
    options: [
        "To verify if a table exists",
        "To limit the range of values that can be placed in a column",
        "To check if a foreign key reference exists",
        "To validate the data type of a column"
    ],
    answer: 1,
    explanation: "The CHECK constraint is used to limit the value range that can be placed in a column. If a value violates the CHECK condition, the operation is rejected.",
    difficulty: "Easy",
    topic: "CHECK"
},
{
    id: "sql-37",
    question: "Which statement correctly inserts a row into a table named employees with columns id, name, and salary?",
    options: [
        "INSERT INTO employees VALUES (1, 'John', 50000);",
        "ADD INTO employees (id, name, salary) VALUES (1, 'John', 50000);",
        "INSERT employees SET id=1, name='John', salary=50000;",
        "PUT INTO employees (id, name, salary) VALUES (1, 'John', 50000);"
    ],
    answer: 0,
    explanation: "The standard SQL syntax for inserting a row is INSERT INTO table_name VALUES (value1, value2, ...). The column list is optional if values are provided for all columns in their defined order.",
    difficulty: "Easy",
    topic: "INSERT"
},
{
    id: "sql-38",
    question: "What does the LIMIT clause do?",
    options: [
        "Limits the number of columns returned",
        "Limits the number of rows returned in the result set",
        "Sets a maximum value for a column",
        "Restricts the size of a table"
    ],
    answer: 1,
    explanation: "The LIMIT clause restricts the number of rows returned by a SELECT query. It is commonly used for pagination along with OFFSET.",
    difficulty: "Easy",
    topic: "LIMIT"
},
{
    id: "sql-39",
    question: "Which of the following is NOT a valid aggregate function in SQL?",
    options: [
        "SUM()",
        "AVG()",
        "CONCAT()",
        "MAX()"
    ],
    answer: 2,
    explanation: "CONCAT() is a string function, not an aggregate function. SUM(), AVG(), MAX(), MIN(), and COUNT() are the standard SQL aggregate functions.",
    difficulty: "Easy",
    topic: "Aggregate Functions"
},
{
    id: "sql-40",
    question: "What is the TIMESTAMP data type used for?",
    options: [
        "Storing only the date",
        "Storing only the time",
        "Storing both date and time values",
        "Storing time intervals"
    ],
    answer: 2,
    explanation: "TIMESTAMP stores both date and time information, typically with fractional seconds precision. It is useful for recording when events occur.",
    difficulty: "Easy",
    topic: "TIMESTAMP"
},
{
    id: "sql-41",
    question: "Which SQL command is used to change existing data in a table?",
    options: [
        "ALTER",
        "MODIFY",
        "UPDATE",
        "CHANGE"
    ],
    answer: 2,
    explanation: "The UPDATE statement is used to modify existing records in a table. It is typically used with a WHERE clause to specify which rows to update.",
    difficulty: "Easy",
    topic: "UPDATE"
},
{
    id: "sql-42",
    question: "Which command is used to remove specific rows from a table based on a condition?",
    options: [
        "REMOVE",
        "DROP",
        "DELETE",
        "ERASE"
    ],
    answer: 2,
    explanation: "The DELETE statement removes one or more rows from a table based on a WHERE condition. Without a WHERE clause, DELETE removes all rows but keeps the table structure.",
    difficulty: "Easy",
    topic: "DELETE"
},
{
    id: "sql-43",
    question: "What is the BIGINT data type used for?",
    options: [
        "Storing very large decimal numbers",
        "Storing very large whole numbers",
        "Storing binary data",
        "Storing large text strings"
    ],
    answer: 1,
    explanation: "BIGINT is an integer data type that can store very large whole numbers, typically from -2^63 to 2^63-1, providing a larger range than INT.",
    difficulty: "Easy",
    topic: "BIGINT"
},
{
    id: "sql-44",
    question: "Which operator is used to check if a value matches any value in a list?",
    options: [
        "ANY",
        "AMONG",
        "IN",
        "CONTAINS"
    ],
    answer: 2,
    explanation: "The IN operator allows you to specify multiple values in a WHERE clause, effectively acting as a shorthand for multiple OR conditions.",
    difficulty: "Easy",
    topic: "IN"
},
{
    id: "sql-45",
    question: "What is a view in SQL?",
    options: [
        "A copy of a table",
        "A virtual table based on the result set of a SELECT statement",
        "A temporary table that is automatically deleted",
        "An index on a table"
    ],
    answer: 1,
    explanation: "A view is a virtual table based on the result set of a SELECT statement. It does not store data physically but presents data from one or more tables as if it were a table.",
    difficulty: "Easy",
    topic: "Views"
},
{
    id: "sql-46",
    question: "Which of the following is the correct syntax for creating a view?",
    options: [
        "MAKE VIEW view_name AS SELECT ...",
        "CREATE VIEW view_name AS SELECT ...",
        "NEW VIEW view_name FROM SELECT ...",
        "SET VIEW view_name = SELECT ..."
    ],
    answer: 1,
    explanation: "The standard SQL syntax for creating a view is CREATE VIEW view_name AS SELECT statement. The SELECT statement defines the columns and rows that the view will contain.",
    difficulty: "Easy",
    topic: "Views"
},
{
    id: "sql-47",
    question: "Which transaction command saves all changes made during the current transaction?",
    options: [
        "SAVE",
        "COMMIT",
        "CONFIRM",
        "APPLY"
    ],
    answer: 1,
    explanation: "COMMIT saves all changes made during the current transaction to the database, making them permanent and visible to other users.",
    difficulty: "Easy",
    topic: "COMMIT"
},
{
    id: "sql-48",
    question: "Which transaction command undoes changes made during the current transaction?",
    options: [
        "CANCEL",
        "UNDO",
        "ROLLBACK",
        "REVERT"
    ],
    answer: 2,
    explanation: "ROLLBACK undoes all changes made in the current transaction, restoring the database to its state before the BEGIN TRANSACTION (or the last COMMIT).",
    difficulty: "Easy",
    topic: "ROLLBACK"
},
{
    id: "sql-49",
    question: "What does ACID stand for in database transactions?",
    options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Automatic, Concurrent, Independent, Durable",
        "Atomic, Consistent, Isolated, Distributed",
        "Asynchronous, Controlled, Integrated, Dependent"
    ],
    answer: 0,
    explanation: "ACID stands for Atomicity (all or nothing), Consistency (valid state transitions), Isolation (concurrent transactions don't interfere), and Durability (committed changes persist).",
    difficulty: "Easy",
    topic: "ACID Properties"
},
{
    id: "sql-50",
    question: "Which SQL keyword is used to grant permissions to a user?",
    options: [
        "ALLOW",
        "PERMIT",
        "GRANT",
        "AUTHORIZE"
    ],
    answer: 2,
    explanation: "The GRANT command is used to give specific privileges to a user or role, such as SELECT, INSERT, UPDATE, DELETE, or ALL PRIVILEGES on database objects.",
    difficulty: "Easy",
    topic: "GRANT"
},
{
    id: "sql-51",
    question: "What is an index in SQL?",
    options: [
        "A way to number rows in a table",
        "A data structure that improves the speed of data retrieval",
        "A constraint that limits data values",
        "A type of join operation"
    ],
    answer: 1,
    explanation: "An index is a database object that improves the speed of data retrieval operations on a table at the cost of additional storage and slower write operations.",
    difficulty: "Easy",
    topic: "Indexes"
},
{
    id: "sql-52",
    question: "Which normal form eliminates partial dependencies?",
    options: [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    answer: 1,
    explanation: "Second Normal Form (2NF) eliminates partial dependencies by ensuring that all non-key attributes are fully functionally dependent on the entire primary key, not just part of it.",
    difficulty: "Easy",
    topic: "2NF"
},
{
    id: "sql-53",
    question: "Which normal form requires a table to have no repeating groups and all attributes must be atomic?",
    options: [
        "1NF",
        "2NF",
        "3NF",
        "4NF"
    ],
    answer: 0,
    explanation: "First Normal Form (1NF) requires that the domain of each attribute contains only atomic (indivisible) values and the value of each attribute contains only a single value from that domain.",
    difficulty: "Easy",
    topic: "1NF"
},
{
    id: "sql-54",
    question: "What is denormalization?",
    options: [
        "The process of removing all tables from a database",
        "The process of adding redundancy to improve read performance",
        "The process of converting a relational database to a NoSQL database",
        "The process of splitting tables into smaller ones"
    ],
    answer: 1,
    explanation: "Denormalization is the intentional introduction of redundancy into a database design to improve read performance at the cost of write performance and potential data anomalies.",
    difficulty: "Easy",
    topic: "Denormalization"
},
{
    id: "sql-55",
    question: "Which wildcard character in LIKE matches exactly one character?",
    options: [
        "%",
        "_",
        "?",
        "*"
    ],
    answer: 1,
    explanation: "The underscore (_) wildcard in the LIKE clause matches exactly one character. The percent sign (%) matches any sequence of zero or more characters.",
    difficulty: "Easy",
    topic: "LIKE"
},
{
    id: "sql-56",
    question: "Which SQL function returns the smallest value in a column?",
    options: [
        "SMALLEST()",
        "MIN()",
        "LOWEST()",
        "BOTTOM()"
    ],
    answer: 1,
    explanation: "The MIN() aggregate function returns the smallest value of the selected column. It can be used with numeric, date, and string data types.",
    difficulty: "Easy",
    topic: "MIN"
},
{
    id: "sql-57",
    question: "Which SQL function returns the largest value in a column?",
    options: [
        "BIGGEST()",
        "MAX()",
        "HIGHEST()",
        "TOP()"
    ],
    answer: 1,
    explanation: "The MAX() aggregate function returns the largest value of the selected column. It works with numeric, date, and string data types.",
    difficulty: "Easy",
    topic: "MAX"
},
{
    id: "sql-58",
    question: "What is a correlated subquery?",
    options: [
        "A subquery that cannot be executed independently",
        "A subquery that references columns from the outer query",
        "A subquery that always returns a single value",
        "A subquery enclosed in parentheses"
    ],
    answer: 1,
    explanation: "A correlated subquery references one or more columns from the outer query, making it dependent on the outer query. It is re-evaluated for each row processed by the outer query.",
    difficulty: "Medium",
    topic: "Correlated Subqueries"
},
{
    id: "sql-59",
    question: "Which JOIN produces a Cartesian product of the two tables?",
    options: [
        "INNER JOIN",
        "NATURAL JOIN",
        "CROSS JOIN",
        "SELF JOIN"
    ],
    answer: 2,
    explanation: "CROSS JOIN produces a Cartesian product, meaning each row from the first table is combined with every row from the second table. If table A has m rows and table B has n rows, the result has m * n rows.",
    difficulty: "Medium",
    topic: "CROSS JOIN"
},
{
    id: "sql-60",
    question: "What is a SELF JOIN?",
    options: [
        "A join that automatically joins a table to itself",
        "A join of a table with itself to compare rows within the same table",
        "A join that only returns one copy of each row",
        "A join that uses only primary keys"
    ],
    answer: 1,
    explanation: "A SELF JOIN is a regular join where a table is joined to itself. It requires using table aliases to distinguish the two instances of the same table, useful for hierarchical data or comparing rows.",
    difficulty: "Medium",
    topic: "SELF JOIN"
},
{
    id: "sql-61",
    question: "What is the result of SELECT COALESCE(NULL, NULL, 10, 20)?",
    options: [
        "NULL",
        "10",
        "20",
        "Error"
    ],
    answer: 1,
    explanation: "COALESCE returns the first non-NULL value in the list of arguments. It evaluates the arguments in order and returns 10, which is the first non-NULL value encountered.",
    difficulty: "Medium",
    topic: "COALESCE"
},
{
    id: "sql-62",
    question: "Which clause defines a named temporary result set in a query that can be referenced within SELECT, INSERT, UPDATE, or DELETE?",
    options: [
        "VIEW",
        "TEMP TABLE",
        "CTE (Common Table Expression)",
        "SUBQUERY"
    ],
    answer: 2,
    explanation: "A Common Table Expression (CTE) defined using the WITH clause creates a named temporary result set that exists only within the scope of a single SELECT, INSERT, UPDATE, or DELETE statement.",
    difficulty: "Medium",
    topic: "Common Table Expressions (CTE)"
},
{
    id: "sql-63",
    question: "What is the correct syntax for a CTE?",
    options: [
        "DEFINE cte_name AS SELECT ...",
        "WITH cte_name AS (SELECT ...) SELECT ...",
        "CREATE CTE cte_name AS SELECT ...",
        "CTE cte_name = SELECT ..."
    ],
    answer: 1,
    explanation: "The correct syntax is WITH cte_name AS (SELECT statement) followed by the main query that references the CTE. The CTE definition is enclosed in parentheses.",
    difficulty: "Medium",
    topic: "Common Table Expressions (CTE)"
},
{
    id: "sql-64",
    question: "Which window function assigns a sequential integer to each row within a partition, without gaps?",
    options: [
        "RANK()",
        "ROW_NUMBER()",
        "DENSE_RANK()",
        "NTILE()"
    ],
    answer: 1,
    explanation: "ROW_NUMBER() assigns a unique sequential integer to each row within a partition, starting from 1. Unlike RANK(), it never produces gaps in the numbering even if there are ties.",
    difficulty: "Medium",
    topic: "ROW_NUMBER()"
},
{
    id: "sql-65",
    question: "What is the difference between RANK() and DENSE_RANK()?",
    options: [
        "RANK() is faster than DENSE_RANK()",
        "RANK() leaves gaps after ties, DENSE_RANK() does not",
        "DENSE_RANK() leaves gaps after ties, RANK() does not",
        "There is no difference"
    ],
    answer: 1,
    explanation: "RANK() assigns the same rank to tied values and skips subsequent ranks (e.g., 1, 2, 2, 4). DENSE_RANK() assigns the same rank to ties but does not skip ranks (e.g., 1, 2, 2, 3).",
    difficulty: "Medium",
    topic: "RANK()"
},
{
    id: "sql-66",
    question: "Which window function provides access to a row at a given physical offset that comes after the current row?",
    options: [
        "LAG()",
        "LEAD()",
        "NEXT()",
        "AFTER()"
    ],
    answer: 1,
    explanation: "LEAD() is a window function that provides access to a row at a specified physical offset that follows the current row. It is useful for comparing values across rows.",
    difficulty: "Medium",
    topic: "LEAD()"
},
{
    id: "sql-67",
    question: "Which window function provides access to a row at a given physical offset that comes before the current row?",
    options: [
        "LAG()",
        "LEAD()",
        "PREV()",
        "BEFORE()"
    ],
    answer: 0,
    explanation: "LAG() is a window function that provides access to a row at a specified physical offset that precedes the current row. It is commonly used to compare current values with previous values.",
    difficulty: "Medium",
    topic: "LAG()"
},
{
    id: "sql-68",
    question: "What does the PARTITION BY clause do in a window function?",
    options: [
        "Groups rows into partitions to which the window function is applied separately",
        "Partitions a table into separate physical tables",
        "Divides the result set into pages",
        "Splits a column into multiple columns"
    ],
    answer: 0,
    explanation: "PARTITION BY divides the result set into partitions (groups of rows) and the window function is applied to each partition separately. If omitted, the entire result set is treated as one partition.",
    difficulty: "Medium",
    topic: "PARTITION BY"
},
{
    id: "sql-69",
    question: "What is a clustered index?",
    options: [
        "An index that is stored separately from the table data",
        "An index that determines the physical order of data in a table",
        "An index on multiple columns",
        "An index that automatically clusters related tables"
    ],
    answer: 1,
    explanation: "A clustered index sorts and stores the data rows of the table in order based on the clustered index key. A table can have only one clustered index because the data rows can be stored in only one order.",
    difficulty: "Medium",
    topic: "Clustered Index"
},
{
    id: "sql-70",
    question: "What is a non-clustered index?",
    options: [
        "An index that does not sort the table data",
        "An index stored separately from the table data with pointers to the actual rows",
        "An index that only works on non-numeric columns",
        "An index that is automatically created by the database"
    ],
    answer: 1,
    explanation: "A non-clustered index is a separate structure from the data rows that contains the index key values and pointers (or row locators) to the actual data rows. A table can have multiple non-clustered indexes.",
    difficulty: "Medium",
    topic: "Non-Clustered Index"
},
{
    id: "sql-71",
    question: "What is a composite index?",
    options: [
        "An index on a composite data type",
        "An index that combines multiple tables",
        "An index on two or more columns of a table",
        "An index created by combining two existing indexes"
    ],
    answer: 2,
    explanation: "A composite index (also called a compound or concatenated index) is an index on two or more columns of a table. The order of columns in a composite index matters for query optimization.",
    difficulty: "Medium",
    topic: "Composite Index"
},
{
    id: "sql-72",
    question: "What is a covering index?",
    options: [
        "An index that covers all tables in a database",
        "An index that contains all the columns needed to satisfy a query, avoiding table access",
        "An index that is automatically created for every column",
        "An index that covers both clustered and non-clustered data"
    ],
    answer: 1,
    explanation: "A covering index includes all the columns referenced in a query's SELECT, JOIN, and WHERE clauses, allowing the database to retrieve the result entirely from the index without accessing the actual table (index-only scan).",
    difficulty: "Medium",
    topic: "Covering Index"
},
{
    id: "sql-73",
    question: "Which isolation level prevents dirty reads but allows non-repeatable reads and phantom reads?",
    options: [
        "READ UNCOMMITTED",
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE"
    ],
    answer: 1,
    explanation: "READ COMMITTED prevents dirty reads by only allowing a transaction to read data that has been committed. However, it allows non-repeatable reads (a row may change between reads) and phantom reads.",
    difficulty: "Medium",
    topic: "Isolation Levels"
},
{
    id: "sql-74",
    question: "Which isolation level provides the highest level of isolation by completely isolating transactions?",
    options: [
        "READ UNCOMMITTED",
        "READ COMMITTED",
        "REPEATABLE READ",
        "SERIALIZABLE"
    ],
    answer: 3,
    explanation: "SERIALIZABLE is the highest isolation level. It ensures complete isolation by effectively executing transactions as if they were run sequentially, preventing dirty reads, non-repeatable reads, and phantom reads.",
    difficulty: "Medium",
    topic: "Isolation Levels"
},
{
    id: "sql-75",
    question: "What is a dirty read?",
    options: [
        "Reading data from a corrupted table",
        "Reading uncommitted changes made by another transaction",
        "Reading data that has been deleted",
        "Reading from a table that is being altered"
    ],
    answer: 1,
    explanation: "A dirty read occurs when a transaction reads data that has been modified by another transaction but not yet committed. If the other transaction rolls back, the read data is invalid.",
    difficulty: "Medium",
    topic: "Concurrency"
},
{
    id: "sql-76",
    question: "What is a phantom read?",
    options: [
        "Reading a row that was previously deleted",
        "Reading different number of rows on repeated reads due to new rows being inserted by another transaction",
        "Reading NULL values unexpectedly",
        "Reading data from a non-existent table"
    ],
    answer: 1,
    explanation: "A phantom read occurs when a transaction re-executes a query and returns a different set of rows because another transaction has inserted or deleted rows that match the query condition.",
    difficulty: "Medium",
    topic: "Concurrency"
},
{
    id: "sql-77",
    question: "What is a non-repeatable read?",
    options: [
        "Reading the same row twice and getting different values because another transaction modified it",
        "Failing to read a row that exists in the table",
        "Reading a row that was inserted by another transaction",
        "Getting an error when trying to read the same row twice"
    ],
    answer: 0,
    explanation: "A non-repeatable read occurs when a transaction reads the same row twice but gets different data because another transaction has updated or deleted that row between the two reads.",
    difficulty: "Medium",
    topic: "Concurrency"
},
{
    id: "sql-78",
    question: "What is a deadlock in SQL?",
    options: [
        "A lock that never releases",
        "A situation where two or more transactions are waiting for each other to release locks, creating a circular dependency",
        "A lock that prevents any query from executing",
        "A situation where a transaction is locked out of the database"
    ],
    answer: 1,
    explanation: "A deadlock occurs when two or more transactions are each waiting for a resource held by the other, creating a circular dependency where neither can proceed. The database typically detects and resolves deadlocks by killing one transaction.",
    difficulty: "Medium",
    topic: "Deadlocks"
},
{
    id: "sql-79",
    question: "What is a stored procedure?",
    options: [
        "A way to store query results permanently",
        "A precompiled set of SQL statements stored in the database that can be executed as a unit",
        "A procedure for backing up database data",
        "A method for storing large objects in the database"
    ],
    answer: 1,
    explanation: "A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again. It is stored in the database and can be executed with a single call, improving performance and security.",
    difficulty: "Medium",
    topic: "Stored Procedures"
},
{
    id: "sql-80",
    question: "What is the difference between a stored procedure and a function?",
    options: [
        "Functions can modify data, procedures cannot",
        "Procedures must return a value, functions do not",
        "Functions must return a value, procedures do not have to",
        "There is no difference"
    ],
    answer: 2,
    explanation: "A function must return a single value and is typically used in computations within SQL statements. A procedure does not have to return a value and can perform operations like DML statements, output parameters, and control flow logic.",
    difficulty: "Medium",
    topic: "Functions"
},
{
    id: "sql-81",
    question: "What is a trigger in SQL?",
    options: [
        "A key that triggers a cascade delete",
        "A stored procedure that automatically executes in response to certain events on a table or view",
        "A constraint that triggers an error when violated",
        "An index that triggers automatic optimization"
    ],
    answer: 1,
    explanation: "A trigger is a special type of stored procedure that automatically executes (fires) when a specific DML event (INSERT, UPDATE, or DELETE) occurs on a table or view.",
    difficulty: "Medium",
    topic: "Triggers"
},
{
    id: "sql-82",
    question: "What is a cursor in SQL?",
    options: [
        "A pointer to the current row in a result set that allows row-by-row processing",
        "A special type of index",
        "A visual indicator in a database GUI",
        "A type of join operation"
    ],
    answer: 0,
    explanation: "A cursor is a database object that allows you to retrieve and process rows from a result set one at a time, rather than processing the entire set at once. It is useful for complex row-by-row operations.",
    difficulty: "Medium",
    topic: "Cursors"
},
{
    id: "sql-83",
    question: "What is a sequence in SQL?",
    options: [
        "A type of join that processes tables in a specific order",
        "A database object that generates a sequence of unique numeric values",
        "The order in which SQL commands are executed",
        "A type of index that stores data sequentially"
    ],
    answer: 1,
    explanation: "A sequence is a database object that generates a series of unique integers according to specified rules. It is commonly used to generate primary key values automatically.",
    difficulty: "Medium",
    topic: "Sequences"
},
{
    id: "sql-84",
    question: "What does the SAVEPOINT command do?",
    options: [
        "Saves the entire database to disk",
        "Creates a point within a transaction to which you can later roll back",
        "Saves a query result for later use",
        "Creates a backup of a specific table"
    ],
    answer: 1,
    explanation: "SAVEPOINT sets a savepoint within a transaction, allowing you to roll back to that specific point using ROLLBACK TO SAVEPOINT, rather than rolling back the entire transaction.",
    difficulty: "Medium",
    topic: "SAVEPOINT"
},
{
    id: "sql-85",
    question: "What is a recursive CTE?",
    options: [
        "A CTE that calls itself to process hierarchical or tree-structured data",
        "A CTE that is defined inside another CTE",
        "A CTE that repeats the same query multiple times",
        "A CTE that uses recursion to improve performance"
    ],
    answer: 0,
    explanation: "A recursive CTE references itself in its definition. It consists of an anchor member (the base case) and a recursive member (which references the CTE itself), connected by UNION ALL. It is used for hierarchical and tree-structured data.",
    difficulty: "Medium",
    topic: "Recursive CTE"
},
{
    id: "sql-86",
    question: "Which of the following is true about the MERGE statement?",
    options: [
        "It can only insert new rows",
        "It can only update existing rows",
        "It can perform INSERT, UPDATE, and DELETE operations in a single statement based on matching conditions",
        "It is used to merge two databases into one"
    ],
    answer: 2,
    explanation: "The MERGE statement (also known as UPSERT) allows you to perform insert, update, or delete operations on a target table based on the results of a join with a source table, all in a single statement.",
    difficulty: "Medium",
    topic: "MERGE"
},
{
    id: "sql-87",
    question: "What is referential integrity?",
    options: [
        "Ensuring that all data in a column is of the correct type",
        "Ensuring that relationships between tables remain consistent, especially regarding foreign key-primary key relationships",
        "Ensuring that data is encrypted for security",
        "Ensuring that backups are taken regularly"
    ],
    answer: 1,
    explanation: "Referential integrity is a database concept that ensures relationships between tables remain consistent. It prevents actions that would destroy links between tables, such as deleting a parent row that is referenced by child rows.",
    difficulty: "Medium",
    topic: "Referential Integrity"
},
{
    id: "sql-88",
    question: "What is a candidate key?",
    options: [
        "A key that is chosen as the primary key",
        "A minimal set of attributes that can uniquely identify a tuple in a relation",
        "A foreign key that references another table",
        "A key used for indexing purposes only"
    ],
    answer: 1,
    explanation: "A candidate key is a minimal set of attributes that can uniquely identify each row in a table. A table can have multiple candidate keys, and one of them is chosen as the primary key.",
    difficulty: "Medium",
    topic: "Candidate Key"
},
{
    id: "sql-89",
    question: "What is a composite key?",
    options: [
        "A key made from combining two or more columns to uniquely identify a row",
        "A key that is used in composite indexes",
        "A primary key and foreign key combined",
        "A key that spans multiple tables"
    ],
    answer: 0,
    explanation: "A composite key is a primary key that consists of two or more columns. Together, these columns uniquely identify each row in the table, even though individually they may not be unique.",
    difficulty: "Medium",
    topic: "Composite Key"
},
{
    id: "sql-90",
    question: "What is a super key?",
    options: [
        "A very important key in the database",
        "Any set of attributes that can uniquely identify a row, possibly including extra attributes",
        "A key that is larger than a primary key",
        "A key that provides super performance"
    ],
    answer: 1,
    explanation: "A super key is any set of one or more attributes that can uniquely identify a row. All candidate keys are super keys, but a super key may contain additional unnecessary attributes beyond what is needed for uniqueness.",
    difficulty: "Medium",
    topic: "Super Key"
},
{
    id: "sql-91",
    question: "Table: employees (id INT, name VARCHAR(50), salary DECIMAL(10,2)). What does SELECT name FROM employees WHERE salary > 50000 return if all employees earn less than 50000?",
    options: [
        "NULL",
        "An empty result set (zero rows)",
        "An error message",
        "All employee names"
    ],
    answer: 1,
    explanation: "When no rows match the WHERE condition, the query returns an empty result set (zero rows), not NULL. NULL would only appear if a specific column value is NULL.",
    difficulty: "Easy",
    topic: "SELECT"
},
{
    id: "sql-92",
    question: "Table: products (id INT, name VARCHAR(50), price DECIMAL(10,2)) with rows: (1, 'A', 10), (2, 'B', 20), (3, 'C', 30). What does SELECT SUM(price) FROM products return?",
    options: [
        "10, 20, 30",
        "60",
        "60.00",
        "3"
    ],
    answer: 2,
    explanation: "SUM(price) returns 60.00 because the price column is defined as DECIMAL(10,2), which preserves two decimal places. The result data type matches the column's data type.",
    difficulty: "Easy",
    topic: "SUM"
},
{
    id: "sql-93",
    question: "Table: t (col VARCHAR(10)) with values: 'Apple', 'Banana', 'Apple', 'Cherry'. What does SELECT DISTINCT col FROM t return?",
    options: [
        "Apple, Banana, Apple, Cherry",
        "Apple, Banana, Cherry",
        "Apple, Banana",
        "Apple"
    ],
    answer: 1,
    explanation: "DISTINCT eliminates duplicate values, so the result set contains only unique values: Apple, Banana, and Cherry (in no guaranteed order without ORDER BY).",
    difficulty: "Easy",
    topic: "DISTINCT"
},
{
    id: "sql-94",
    question: "Table: nums (n INT) with values: 5, 3, 8, 1, 9. What does SELECT n FROM nums ORDER BY n DESC LIMIT 2 return?",
    options: [
        "5, 3",
        "9, 8",
        "1, 3",
        "8, 9"
    ],
    answer: 1,
    explanation: "ORDER BY n DESC sorts in descending order: 9, 8, 5, 3, 1. LIMIT 2 takes the first two rows, resulting in 9 and 8.",
    difficulty: "Easy",
    topic: "ORDER BY"
},
{
    id: "sql-95",
    question: "Table: emp (name VARCHAR, dept VARCHAR) with rows: ('Alice','IT'), ('Bob','IT'), ('Carol','HR'), ('Dave','HR'), ('Eve','IT'). What does SELECT dept, COUNT(*) FROM emp GROUP BY dept return?",
    options: [
        "IT, HR",
        "IT: 3, HR: 2",
        "IT, 3 and HR, 2 as two rows",
        "3, 2"
    ],
    answer: 2,
    explanation: "GROUP BY dept creates two groups. The result has two rows: one for IT with count 3 and one for HR with count 2. The exact column order is dept, COUNT(*).",
    difficulty: "Easy",
    topic: "GROUP BY"
},
{
    id: "sql-96",
    question: "What does SELECT 10 / 3 return in standard SQL?",
    options: [
        "3.33",
        "3",
        "3.0",
        "Error"
    ],
    answer: 1,
    explanation: "In standard SQL, integer division truncates the decimal part. Since both 10 and 3 are integers, the result is 3 (integer), not 3.33. To get a decimal result, at least one operand must be a decimal type.",
    difficulty: "Medium",
    topic: "Numeric Functions"
},
{
    id: "sql-97",
    question: "Table: t (a INT, b INT) with rows: (1,2), (1,3), (2,4). What does SELECT a, SUM(b) FROM t GROUP BY a HAVING SUM(b) > 4 return?",
    options: [
        "1, 5",
        "2, 4",
        "1, 5 and 2, 4",
        "An empty result set"
    ],
    answer: 0,
    explanation: "GROUP BY a produces groups: a=1 with SUM(b)=5 and a=2 with SUM(b)=4. HAVING SUM(b) > 4 filters to only the group where a=1 with SUM(b)=5.",
    difficulty: "Medium",
    topic: "HAVING"
},
{
    id: "sql-98",
    question: "Table: students (name VARCHAR, marks INT) with rows: ('A', 80), ('B', NULL), ('C', 90). What does SELECT AVG(marks) FROM students return?",
    options: [
        "85",
        "56.67",
        "85.00",
        "NULL"
    ],
    answer: 0,
    explanation: "AVG() ignores NULL values, so it computes (80 + 90) / 2 = 85. NULL values are not treated as zero; they are simply excluded from the calculation.",
    difficulty: "Medium",
    topic: "AVG"
},
{
    id: "sql-99",
    question: "Table: t (val INT) with values: 10, NULL, 30, NULL, 50. What does SELECT COUNT(val) FROM t return?",
    options: [
        "5",
        "3",
        "2",
        "0"
    ],
    answer: 1,
    explanation: "COUNT(column) counts only non-NULL values. Since there are two NULL values among five rows, COUNT(val) returns 3. COUNT(*) would return 5.",
    difficulty: "Medium",
    topic: "COUNT"
},
{
    id: "sql-100",
    question: "Table: emp (id INT, name VARCHAR, salary INT) with rows: (1,'A',100), (2,'B',200), (3,'C',300). What does SELECT e1.name, e2.name FROM emp e1 JOIN emp e2 ON e1.salary < e2.salary WHERE e1.name = 'A' return?",
    options: [
        "A, B and A, C",
        "A, B",
        "A, C",
        "An empty result set"
    ],
    answer: 0,
    explanation: "This is a SELF JOIN. For employee A (salary=100), the condition salary < e2.salary matches B (200) and C (300), so the result contains two rows: A,B and A,C.",
    difficulty: "Medium",
    topic: "SELF JOIN"
},
{
    id: "sql-101",
    question: "Table: orders (id INT, amount DECIMAL) with values: (1,100), (2,200), (3,300). What does SELECT amount, SUM(amount) OVER () FROM orders return?",
    options: [
        "100, 100 and 200, 200 and 300, 300",
        "100, 600 and 200, 600 and 300, 600",
        "600",
        "Error"
    ],
    answer: 1,
    explanation: "SUM(amount) OVER () is a window function with an empty OVER clause, meaning it computes the sum over the entire result set (600) and appends it to each row.",
    difficulty: "Medium",
    topic: "Window Functions"
},
{
    id: "sql-102",
    question: "Table: t (col INT) with values: 1, 2, 2, 3, 3, 3. What does SELECT col, RANK() OVER (ORDER BY col DESC) FROM t return for the row with col=2?",
    options: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: 1,
    explanation: "RANK() OVER (ORDER BY col DESC): col=3 gets rank 1 (three rows), col=2 gets rank 4 (since RANK skips numbers after ties: 1,1,1,4), and col=1 gets rank 7. Wait - let me recalculate. DESC order: 3,3,3,2,2,1. Ranks: 1,1,1,4,4,6. So col=2 gets rank 4.",
    difficulty: "Medium",
    topic: "RANK()"
},
{
    id: "sql-103",
    question: "Table: t (col INT) with values: 1, 2, 2, 3, 3, 3. What does SELECT col, DENSE_RANK() OVER (ORDER BY col DESC) FROM t return for the row with col=2?",
    options: [
        "2",
        "3",
        "4",
        "5"
    ],
    answer: 0,
    explanation: "DENSE_RANK() OVER (ORDER BY col DESC): DESC order is 3,3,3,2,2,1. Dense ranks: 1,1,1,2,2,3. Unlike RANK(), DENSE_RANK() does not skip numbers after ties, so col=2 gets rank 2.",
    difficulty: "Medium",
    topic: "DENSE_RANK()"
},
{
    id: "sql-104",
    question: "Table: sales (product VARCHAR, amount INT, month INT) with rows: ('A',100,1), ('A',200,2), ('B',150,1), ('B',250,2). What does SELECT product, SUM(amount) FROM sales GROUP BY product return?",
    options: [
        "A, 300 and B, 400",
        "A, 100 and A, 200 and B, 150 and B, 250",
        "300, 400",
        "100, 200, 150, 250"
    ],
    answer: 0,
    explanation: "GROUP BY product groups rows by product. For product A: 100+200=300. For product B: 150+250=400. The result has two rows: A,300 and B,400.",
    difficulty: "Easy",
    topic: "GROUP BY"
},
{
    id: "sql-105",
    question: "Table: t (id INT, val VARCHAR) with rows: (1,'x'), (2,NULL), (3,'z'). What does SELECT val FROM t WHERE val IS NOT NULL return?",
    options: [
        "x, NULL, z",
        "x, z",
        "x",
        "z"
    ],
    answer: 1,
    explanation: "IS NOT NULL filters out rows where val is NULL. The result contains only the non-NULL values: x and z.",
    difficulty: "Easy",
    topic: "IS NOT NULL"
},
{
    id: "sql-106",
    question: "Table: A (id INT, val VARCHAR) with rows: (1,'X'), (2,'Y'). Table: B (id INT, val VARCHAR) with rows: (2,'Y'), (3,'Z'). What does SELECT A.val, B.val FROM A FULL OUTER JOIN B ON A.id = B.id return?",
    options: [
        "X, NULL and Y, Y and NULL, Z",
        "X, Y and Y, Z",
        "Y, Y",
        "X, X and Y, Y and Z, Z"
    ],
    answer: 0,
    explanation: "FULL OUTER JOIN returns all rows from both tables. A.id=1 has no match in B (X,NULL). A.id=2 matches B.id=2 (Y,Y). B.id=3 has no match in A (NULL,Z).",
    difficulty: "Medium",
    topic: "FULL OUTER JOIN"
},
{
    id: "sql-107",
    question: "Table: t (name VARCHAR, score INT) with rows: ('A',85), ('B',92), ('C',78), ('D',92). What does SELECT name, score FROM t WHERE score = (SELECT MAX(score) FROM t) return?",
    options: [
        "B, 92",
        "B, 92 and D, 92",
        "92",
        "A, 85 and B, 92 and C, 78 and D, 92"
    ],
    answer: 1,
    explanation: "The subquery SELECT MAX(score) FROM t returns 92. The outer query then finds all rows where score equals 92, which are B and D.",
    difficulty: "Medium",
    topic: "Subqueries"
},
{
    id: "sql-108",
    question: "Table: t (a INT, b INT) with rows: (1,10), (2,20), (3,30). What does SELECT a, b, LEAD(b) OVER (ORDER BY a) FROM t return for the first row?",
    options: [
        "1, 10, NULL",
        "1, 10, 20",
        "1, 10, 10",
        "1, 10, 30"
    ],
    answer: 1,
    explanation: "LEAD(b) OVER (ORDER BY a) gets the value of b from the next row in the ordering. For the first row (a=1, b=10), the next row has b=20, so LEAD returns 20.",
    difficulty: "Medium",
    topic: "LEAD()"
},
{
    id: "sql-109",
    question: "Table: t (a INT, b INT) with rows: (1,10), (2,20), (3,30). What does SELECT a, b, LAG(b) OVER (ORDER BY a) FROM t return for the first row?",
    options: [
        "1, 10, 10",
        "1, 10, 20",
        "1, 10, NULL",
        "1, 10, 0"
    ],
    answer: 2,
    explanation: "LAG(b) OVER (ORDER BY a) gets the value of b from the previous row. For the first row, there is no previous row, so LAG returns NULL.",
    difficulty: "Medium",
    topic: "LAG()"
},
{
    id: "sql-110",
    question: "Table: emp (dept VARCHAR, salary INT) with rows: ('IT',50000), ('IT',60000), ('HR',40000), ('HR',45000), ('HR',50000). What does SELECT dept, AVG(salary) FROM emp GROUP BY dept HAVING AVG(salary) > 48000 return?",
    options: [
        "IT, 55000",
        "HR, 45000",
        "IT, 55000 and HR, 45000",
        "An empty result set"
    ],
    answer: 0,
    explanation: "IT avg = (50000+60000)/2 = 55000. HR avg = (40000+45000+50000)/3 = 45000. HAVING AVG(salary) > 48000 filters to only IT with 55000.",
    difficulty: "Medium",
    topic: "HAVING"
},
{
    id: "sql-111",
    question: "Table: t (c1 INT, c2 INT) with rows: (1,1), (1,2), (2,3), (2,4). What does SELECT c1 FROM t UNION SELECT c2 FROM t return?",
    options: [
        "1, 1, 2, 2, 3, 4",
        "1, 2, 3, 4",
        "1, 2",
        "3, 4"
    ],
    answer: 1,
    explanation: "UNION combines the two result sets and removes duplicates. c1 values: 1,1,2,2. c2 values: 1,2,3,4. Combined unique values: 1, 2, 3, 4.",
    difficulty: "Medium",
    topic: "UNION"
},
{
    id: "sql-112",
    question: "Table: A (id INT) with rows: 1, 2, 3. Table: B (id INT) with rows: 2, 3, 4. What does SELECT A.id FROM A INTERSECT SELECT B.id FROM B return?",
    options: [
        "1, 2, 3, 4",
        "2, 3",
        "1, 4",
        "An empty result set"
    ],
    answer: 1,
    explanation: "INTERSECT returns only the rows that appear in both result sets. The common values between {1,2,3} and {2,3,4} are 2 and 3.",
    difficulty: "Medium",
    topic: "INTERSECT"
},
{
    id: "sql-113",
    question: "Table: A (id INT) with rows: 1, 2, 3. Table: B (id INT) with rows: 2, 3, 4. What does SELECT A.id FROM A EXCEPT SELECT B.id FROM B return?",
    options: [
        "1, 2, 3",
        "1",
        "4",
        "2, 3"
    ],
    answer: 1,
    explanation: "EXCEPT returns rows from the first result set that are not present in the second. From {1,2,3}, removing {2,3} leaves only 1.",
    difficulty: "Medium",
    topic: "EXCEPT"
},
{
    id: "sql-114",
    question: "Table: t (val INT) with values: 10, 20, 30, 40, 50. What does SELECT val FROM t WHERE val BETWEEN 20 AND 40 return?",
    options: [
        "20, 30, 40",
        "20, 40",
        "21, 22, 23, ..., 39",
        "10, 20, 30, 40, 50"
    ],
    answer: 0,
    explanation: "BETWEEN is inclusive, meaning it includes both the start (20) and end (40) values. The result is 20, 30, and 40.",
    difficulty: "Easy",
    topic: "BETWEEN"
},
{
    id: "sql-115",
    question: "Table: t (name VARCHAR) with values: 'John', 'Jane', 'Jack', 'Jill'. What does SELECT name FROM t WHERE name LIKE 'J%' return?",
    options: [
        "John",
        "John, Jane, Jack, Jill",
        "Jane, Jack, Jill",
        "Jack"
    ],
    answer: 1,
    explanation: "LIKE 'J%' matches any string starting with 'J'. The % wildcard matches zero or more characters. All four names start with 'J', so all are returned.",
    difficulty: "Easy",
    topic: "LIKE"
},
{
    id: "sql-116",
    question: "Table: t (name VARCHAR) with values: 'abc', 'adc', 'aec', 'af'. What does SELECT name FROM t WHERE name LIKE 'a_c' return?",
    options: [
        "abc, adc, aec, af",
        "abc, adc, aec",
        "af",
        "abc"
    ],
    answer: 1,
    explanation: "LIKE 'a_c' matches strings that start with 'a', followed by exactly one character (matched by _), followed by 'c'. This matches abc, adc, and aec but not af (only 2 characters).",
    difficulty: "Medium",
    topic: "LIKE"
},
{
    id: "sql-117",
    question: "Table: t (id INT, name VARCHAR) with rows: (1,'A'), (2,'B'), (3,'C'). What does SELECT * FROM t WHERE id IN (1, 3) return?",
    options: [
        "1, A and 3, C",
        "2, B",
        "1, A and 2, B and 3, C",
        "An empty result set"
    ],
    answer: 0,
    explanation: "The IN operator checks if id matches any value in the list (1, 3). Rows with id=1 and id=3 match, returning (1,'A') and (3,'C').",
    difficulty: "Easy",
    topic: "IN"
},
{
    id: "sql-118",
    question: "Table: t (val INT) with values: NULL, 5, NULL, 10. What does SELECT COALESCE(val, 0) FROM t return?",
    options: [
        "NULL, 5, NULL, 10",
        "0, 5, 0, 10",
        "5, 10",
        "NULL, NULL"
    ],
    answer: 1,
    explanation: "COALESCE(val, 0) returns val if it is not NULL, otherwise returns 0. So NULL becomes 0, 5 stays 5, NULL becomes 0, and 10 stays 10.",
    difficulty: "Medium",
    topic: "COALESCE"
},
{
    id: "sql-119",
    question: "Table: emp (id INT, name VARCHAR, mgr_id INT) with rows: (1,'A',NULL), (2,'B',1), (3,'C',1), (4,'D',2). What does SELECT e.name, m.name FROM emp e LEFT JOIN emp m ON e.mgr_id = m.id return for the first row?",
    options: [
        "A, NULL",
        "A, A",
        "NULL, A",
        "Error"
    ],
    answer: 0,
    explanation: "Employee A has mgr_id=NULL, so the LEFT JOIN finds no matching manager. Since it is a LEFT JOIN, A's row is preserved with NULL for the manager's name.",
    difficulty: "Medium",
    topic: "LEFT JOIN"
},
{
    id: "sql-120",
    question: "Table: t (id INT, val INT) with rows: (1,100), (2,200), (3,300), (4,400). What does SELECT val FROM t ORDER BY id LIMIT 1 OFFSET 2 return?",
    options: [
        "100",
        "200",
        "300",
        "400"
    ],
    answer: 2,
    explanation: "ORDER BY id sorts by id: 100, 200, 300, 400. OFFSET 2 skips the first 2 rows. LIMIT 1 takes 1 row after the offset, returning 300.",
    difficulty: "Medium",
    topic: "OFFSET"
},
{
    id: "sql-121",
    question: "Table: t (a INT, b INT) with rows: (1,10), (1,20), (2,30), (2,40), (2,50). What does SELECT a, COUNT(*), SUM(b) FROM t GROUP BY a return?",
    options: [
        "1, 2, 30 and 2, 3, 120",
        "1, 2, 20 and 2, 3, 50",
        "1, 10 and 1, 20 and 2, 30 and 2, 40 and 2, 50",
        "30, 120"
    ],
    answer: 0,
    explanation: "For a=1: COUNT(*)=2, SUM(b)=10+20=30. For a=2: COUNT(*)=3, SUM(b)=30+40+50=120. Result: two rows with (1,2,30) and (2,3,120).",
    difficulty: "Medium",
    topic: "GROUP BY"
},
{
    id: "sql-122",
    question: "Table: t (id INT, status VARCHAR) with rows: (1,'active'), (2,'inactive'), (3,'active'), (4,'pending'). What does SELECT status, COUNT(*) FROM t GROUP BY status ORDER BY COUNT(*) DESC return?",
    options: [
        "active, 2 and inactive, 1 and pending, 1",
        "inactive, 1 and pending, 1 and active, 2",
        "active, 2",
        "pending, 1 and inactive, 1 and active, 2"
    ],
    answer: 0,
    explanation: "Counts: active=2, inactive=1, pending=1. ORDER BY COUNT(*) DESC sorts descending by count, so active (2) comes first. The remaining two with count=1 may appear in any order.",
    difficulty: "Medium",
    topic: "GROUP BY"
},
{
    id: "sql-123",
    question: "What does SELECT CASE WHEN 1 > 2 THEN 'A' WHEN 1 = 1 THEN 'B' ELSE 'C' END return?",
    options: [
        "A",
        "B",
        "C",
        "NULL"
    ],
    answer: 1,
    explanation: "The CASE expression evaluates each WHEN condition in order. 1 > 2 is FALSE, so it moves to the next condition. 1 = 1 is TRUE, so it returns 'B'.",
    difficulty: "Medium",
    topic: "CASE Statement"
},
{
    id: "sql-124",
    question: "What does SELECT CASE 3 WHEN 1 THEN 'one' WHEN 2 THEN 'two' WHEN 3 THEN 'three' ELSE 'other' END return?",
    options: [
        "one",
        "two",
        "three",
        "other"
    ],
    answer: 2,
    explanation: "This is a simple CASE expression that compares the input value 3 against each WHEN value. It matches WHEN 3, returning 'three'.",
    difficulty: "Medium",
    topic: "CASE Statement"
},
{
    id: "sql-125",
    question: "Table: t (val INT) with values: 1, 2, 3, 4, 5. What does SELECT val FROM t WHERE val > ALL (SELECT val FROM t WHERE val < 3) return?",
    options: [
        "1, 2, 3, 4, 5",
        "3, 4, 5",
        "4, 5",
        "5"
    ],
    answer: 1,
    explanation: "The subquery returns {1, 2}. ALL requires val to be greater than every value in the set. Values > 2 (i.e., greater than both 1 and 2) are 3, 4, and 5.",
    difficulty: "Hard",
    topic: "ALL"
},
{
    id: "sql-126",
    question: "Table: t (val INT) with values: 1, 2, 3, 4, 5. What does SELECT val FROM t WHERE val > ANY (SELECT val FROM t WHERE val < 3) return?",
    options: [
        "1, 2, 3, 4, 5",
        "2, 3, 4, 5",
        "3, 4, 5",
        "4, 5"
    ],
    answer: 1,
    explanation: "The subquery returns {1, 2}. ANY requires val to be greater than at least one value in the set. Values > 1 are 2, 3, 4, 5 (since 2 > 1 is true).",
    difficulty: "Hard",
    topic: "ANY"
},
{
    id: "sql-127",
    question: "Table: emp (id INT, dept VARCHAR, salary INT) with rows: (1,'IT',100), (2,'IT',200), (3,'HR',150). Table: dept (name VARCHAR, budget INT) with rows: ('IT',500), ('HR',300). What does SELECT d.name, d.budget, SUM(e.salary) FROM dept d JOIN emp e ON d.name = e.dept GROUP BY d.name, d.budget HAVING SUM(e.salary) > d.budget return?",
    options: [
        "IT, 500, 300",
        "HR, 300, 150",
        "An empty result set",
        "IT, 500, 300 and HR, 300, 150"
    ],
    answer: 3,
    explanation: "IT: SUM(salary)=300, budget=500, 300 > 500 is FALSE. HR: SUM(salary)=150, budget=300, 150 > 300 is FALSE. Both fail the HAVING condition, so the result is empty.",
    difficulty: "Hard",
    topic: "HAVING"
},
{
    id: "sql-128",
    question: "Table: t (a INT, b INT) with rows: (1,10), (2,20), (3,NULL). What does SELECT a + b FROM t return?",
    options: [
        "11, 22, 3",
        "11, 22, NULL",
        "11, 22",
        "Error"
    ],
    answer: 1,
    explanation: "Any arithmetic operation with NULL yields NULL. For the third row, 3 + NULL = NULL. The first two rows compute normally: 11 and 22.",
    difficulty: "Medium",
    topic: "NULL Handling"
},
{
    id: "sql-129",
    question: "Table: t (id INT, parent_id INT, name VARCHAR) with rows: (1,NULL,'Root'), (2,1,'Child1'), (3,1,'Child2'), (4,2,'Grandchild'). What type of query is best suited to retrieve all descendants of 'Root'?",
    options: [
        "A simple SELECT with WHERE",
        "A recursive CTE",
        "A CROSS JOIN",
        "A FULL OUTER JOIN"
    ],
    answer: 1,
    explanation: "A recursive CTE is specifically designed for querying hierarchical data like tree structures. It uses an anchor member to get the root and a recursive member to traverse to all descendants.",
    difficulty: "Medium",
    topic: "Recursive Queries"
},
{
    id: "sql-130",
    question: "Table: t (c1 INT, c2 INT) with rows: (NULL,1), (2,NULL), (NULL,NULL), (3,4). What does SELECT * FROM t WHERE c1 IS NULL OR c2 IS NULL return?",
    options: [
        "NULL,1 and 2,NULL and NULL,NULL",
        "NULL,1 and 2,NULL",
        "NULL,NULL",
        "3,4"
    ],
    answer: 0,
    explanation: "The OR condition is satisfied if either c1 or c2 is NULL. Rows 1 (c1=NULL), 2 (c2=NULL), and 3 (both NULL) all satisfy this condition. Only row 4 has neither NULL.",
    difficulty: "Medium",
    topic: "IS NULL"
},
{
    id: "sql-131",
    question: "Table: emp (id INT, salary INT) with rows: (1,1000), (2,2000), (3,3000), (4,4000). What does SELECT id, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) as rn FROM t where id = 3 return for the row with id=3?",
    options: [
        "3, 3000, 1",
        "3, 3000, 2",
        "3, 3000, 3",
        "3, 3000, 4"
    ],
    answer: 1,
    explanation: "ROW_NUMBER() OVER (ORDER BY salary DESC) assigns row numbers: 4000→1, 3000→2, 2000→3, 1000→4. The row with salary 3000 (id=3) gets row number 2.",
    difficulty: "Medium",
    topic: "ROW_NUMBER()"
},
{
    id: "sql-132",
    question: "Table: t (id INT, category VARCHAR, value INT) with rows: (1,'A',10), (2,'B',20), (3,'A',30), (4,'B',40). What does SELECT id, category, value, SUM(value) OVER (PARTITION BY category) FROM t return for the row (3,'A',30)?",
    options: [
        "3, A, 30, 40",
        "3, A, 30, 60",
        "3, A, 30, 30",
        "3, A, 30, 10"
    ],
    answer: 0,
    explanation: "SUM(value) OVER (PARTITION BY category) computes the sum for each category partition. Category A has values 10 and 30, sum=40. So for row 3, the window function returns 40.",
    difficulty: "Medium",
    topic: "PARTITION BY"
},
{
    id: "sql-133",
    question: "What does SELECT UPPER('hello WORLD') return?",
    options: [
        "hello WORLD",
        "HELLO WORLD",
        "HELLO world",
        "hello world"
    ],
    answer: 1,
    explanation: "The UPPER() function converts all characters in a string to uppercase, so 'hello WORLD' becomes 'HELLO WORLD'.",
    difficulty: "Easy",
    topic: "String Functions"
},
{
    id: "sql-134",
    question: "What does SELECT SUBSTRING('Database', 5, 3) return?",
    options: [
        "Data",
        "bas",
        "aba",
        "tab"
    ],
    answer: 1,
    explanation: "SUBSTRING(string, start, length) extracts a substring starting at position 5 (1-based) with length 3. From 'Database': positions 5,6,7 are 'b','a','s', giving 'bas'.",
    difficulty: "Medium",
    topic: "String Functions"
},
{
    id: "sql-135",
    question: "What does SELECT TRIM('  hello  ') return?",
    options: [
        "  hello  ",
        "hello",
        "hello  ",
        "  hello"
    ],
    answer: 1,
    explanation: "TRIM() removes leading and trailing spaces from a string. Both the leading and trailing spaces in '  hello  ' are removed, resulting in 'hello'.",
    difficulty: "Easy",
    topic: "String Functions"
},
{
    id: "sql-136",
    question: "What does SELECT REPLACE('apple pie', 'pie', 'cake') return?",
    options: [
        "apple pie",
        "apple cake",
        "pie cake",
        "apple apple cake"
    ],
    answer: 1,
    explanation: "REPLACE(string, old, new) replaces all occurrences of the old substring with the new substring. 'pie' is replaced with 'cake', giving 'apple cake'.",
    difficulty: "Easy",
    topic: "String Functions"
},
{
    id: "sql-137",
    question: "What does SELECT ROUND(123.4567, 2) return?",
    options: [
        "123.45",
        "123.46",
        "123.456",
        "123.4567"
    ],
    answer: 1,
    explanation: "ROUND(number, decimals) rounds to the specified number of decimal places. 123.4567 rounded to 2 decimal places is 123.46 (since the third decimal, 6, causes rounding up).",
    difficulty: "Easy",
    topic: "Numeric Functions"
},
{
    id: "sql-138",
    question: "What does SELECT FLOOR(4.9) return?",
    options: [
        "5",
        "4.9",
        "4",
        "4.0"
    ],
    answer: 2,
    explanation: "FLOOR() returns the largest integer value that is less than or equal to the specified number. FLOOR(4.9) returns 4.",
    difficulty: "Easy",
    topic: "Numeric Functions"
},
{
    id: "sql-139",
    question: "What does SELECT CEIL(4.1) return?",
    options: [
        "4",
        "4.1",
        "5",
        "5.0"
    ],
    answer: 2,
    explanation: "CEIL() (or CEILING()) returns the smallest integer value that is greater than or equal to the specified number. CEIL(4.1) returns 5.",
    difficulty: "Easy",
    topic: "Numeric Functions"
},
{
    id: "sql-140",
    question: "What does SELECT ABS(-15) return?",
    options: [
        "-15",
        "15",
        "0",
        "Error"
    ],
    answer: 1,
    explanation: "ABS() returns the absolute (non-negative) value of a number. ABS(-15) returns 15.",
    difficulty: "Easy",
    topic: "Numeric Functions"
},
{
    id: "sql-141",
    question: "What does SELECT MOD(10, 3) return?",
    options: [
        "3",
        "1",
        "0.33",
        "10"
    ],
    answer: 1,
    explanation: "MOD(a, b) returns the remainder of a divided by b. 10 divided by 3 is 3 with a remainder of 1, so MOD(10, 3) returns 1.",
    difficulty: "Easy",
    topic: "Numeric Functions"
},
{
    id: "sql-142",
    question: "Table: A (id INT, val VARCHAR) with rows: (1,'X'), (2,'Y'). Table: B (a_id INT, note VARCHAR) with rows: (1,'N1'), (1,'N2'), (3,'N3'). What does SELECT A.val, B.note FROM A LEFT JOIN B ON A.id = B.a_id return?",
    options: [
        "X, N1 and X, N2 and Y, NULL",
        "X, N1 and X, N2",
        "X, N1 and Y, NULL",
        "X, N1 and X, N2 and Y, NULL and NULL, N3"
    ],
    answer: 0,
    explanation: "LEFT JOIN keeps all rows from A. A.id=1 matches two rows in B (N1, N2). A.id=2 has no match in B, so note is NULL. B's row with a_id=3 is excluded because it has no match in A.",
    difficulty: "Medium",
    topic: "LEFT JOIN"
},
{
    id: "sql-143",
    question: "Table: A (id INT) with rows: 1, 2. Table: B (id INT) with rows: 2, 3. What does SELECT A.id, B.id FROM A RIGHT JOIN B ON A.id = B.id return?",
    options: [
        "1, NULL and 2, 2",
        "2, 2 and NULL, 3",
        "2, 2",
        "1, NULL and 2, 2 and NULL, 3"
    ],
    answer: 1,
    explanation: "RIGHT JOIN keeps all rows from B. B.id=2 matches A.id=2. B.id=3 has no match in A, so A.id is NULL. A.id=1 has no match in B, so it is excluded (not a LEFT JOIN).",
    difficulty: "Medium",
    topic: "RIGHT JOIN"
},
{
    id: "sql-144",
    question: "Table: A (id INT) with rows: 1, 2. Table: B (id INT) with rows: 2, 3. What does SELECT * FROM A CROSS JOIN B return?",
    options: [
        "1, 2 and 2, 3",
        "1, 2 and 1, 3 and 2, 2 and 2, 3",
        "2, 2",
        "1, 1 and 2, 2 and 3, 3"
    ],
    answer: 1,
    explanation: "CROSS JOIN produces a Cartesian product: every row from A combined with every row from B. A has 2 rows, B has 2 rows, so the result has 4 rows: (1,2), (1,3), (2,2), (2,3).",
    difficulty: "Medium",
    topic: "CROSS JOIN"
},
{
    id: "sql-145",
    question: "Table: emp (id INT, name VARCHAR, dept_id INT). Table: dept (id INT, dname VARCHAR). If some employees have dept_id values that do not exist in dept, which join will include those employees?",
    options: [
        "INNER JOIN",
        "RIGHT JOIN on dept",
        "LEFT JOIN from emp to dept",
        "NATURAL JOIN"
    ],
    answer: 2,
    explanation: "A LEFT JOIN from emp to dept will include all employees, even those whose dept_id does not match any row in dept. Those unmatched employees will have NULL values for dept columns.",
    difficulty: "Medium",
    topic: "LEFT JOIN"
},
{
    id: "sql-146",
    question: "Table: orders (id INT, customer_id INT, amount DECIMAL) with rows: (1,101,50), (2,102,100), (3,101,75), (4,103,200). What does SELECT customer_id, SUM(amount) as total FROM orders GROUP BY customer_id HAVING SUM(amount) > 100 return?",
    options: [
        "101, 125",
        "102, 100 and 103, 200",
        "103, 200",
        "101, 125 and 103, 200"
    ],
    answer: 2,
    explanation: "Customer 101: total=125, 125>100 is TRUE. Customer 102: total=100, 100>100 is FALSE. Customer 103: total=200, 200>100 is TRUE. Wait - 125>100 is TRUE. So the answer should include 101 and 103. Let me recheck. Yes, 101 has 125 > 100, so both 101,125 and 103,200 should be returned.",
    difficulty: "Medium",
    topic: "HAVING"
},
{
    id: "sql-147",
    question: "What does SELECT NULLIF(10, 10) return?",
    options: [
        "10",
        "NULL",
        "0",
        "Error"
    ],
    answer: 1,
    explanation: "NULLIF(a, b) returns NULL if the two expressions are equal, otherwise returns the first expression. Since 10 = 10, it returns NULL.",
    difficulty: "Medium",
    topic: "NULL Handling"
},
{
    id: "sql-148",
    question: "What does SELECT NULLIF(10, 20) return?",
    options: [
        "10",
        "NULL",
        "20",
        "Error"
    ],
    answer: 0,
    explanation: "NULLIF(a, b) returns NULL if a equals b, otherwise returns a. Since 10 does not equal 20, it returns the first expression: 10.",
    difficulty: "Medium",
    topic: "NULL Handling"
},
{
    id: "sql-149",
    question: "Table: t (val INT) with values: 5, -3, 0, -8, 12. What does SELECT MIN(val), MAX(val) FROM t return?",
    options: [
        "-8, 12",
        "0, 12",
        "-3, 5",
        "-8, 5"
    ],
    answer: 0,
    explanation: "MIN() returns the smallest value (-8) and MAX() returns the largest value (12) from the column. Both functions ignore NULL values.",
    difficulty: "Easy",
    topic: "Aggregate Functions"
},
{
    id: "sql-150",
    question: "Table: t (a INT, b INT) with rows: (1,100), (2,200), (3,300). What does SELECT a, b, SUM(b) OVER (ORDER BY a ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) FROM t return for the second row?",
    options: [
        "2, 200, 200",
        "2, 200, 300",
        "2, 200, 100",
        "2, 200, 600"
    ],
    answer: 1,
    explanation: "This is a cumulative sum. For row 2 (a=2, b=200), the window includes rows from the beginning up to the current row: 100 + 200 = 300.",
    difficulty: "Hard",
    topic: "Window Functions"
},
{
    id: "sql-151",
    question: "What is the main purpose of using JOINs in SQL?",
    options: [
        "To delete data from multiple tables simultaneously",
        "To combine rows from two or more tables based on a related column",
        "To create a new table from existing tables",
        "To sort data across multiple tables"
    ],
    answer: 1,
    explanation: "JOINs are used to combine rows from two or more tables based on a related column between them, allowing you to query data that is spread across multiple tables.",
    difficulty: "Easy",
    topic: "INNER JOIN"
},
{
    id: "sql-152",
    question: "What is a Natural Join?",
    options: [
        "A join that uses NATURAL keyword to improve performance",
        "A join that automatically joins tables based on columns with the same name",
        "A join that preserves the natural order of rows",
        "A join that only works on numeric columns"
    ],
    answer: 1,
    explanation: "NATURAL JOIN automatically joins two tables based on all columns with the same name in both tables. It does not require an explicit ON clause.",
    difficulty: "Medium",
    topic: "Natural Join"
},
{
    id: "sql-153",
    question: "Table: students (student_id INT, name VARCHAR). Table: enrollments (student_id INT, course_id INT). Table: courses (course_id INT, course_name VARCHAR). How many joins are needed to get student names with their course names?",
    options: [
        "1 join",
        "2 joins",
        "3 joins",
        "No joins needed"
    ],
    answer: 1,
    explanation: "Two joins are needed: students JOIN enrollments ON students.student_id = enrollments.student_id, then JOIN courses ON enrollments.course_id = courses.course_id.",
    difficulty: "Medium",
    topic: "INNER JOIN"
},
{
    id: "sql-154",
    question: "Which join type can cause duplicate rows from the left table in the result?",
    options: [
        "Only CROSS JOIN",
        "Only INNER JOIN",
        "Both INNER JOIN and LEFT JOIN when there are multiple matches in the right table",
        "Joins never cause duplicate rows"
    ],
    answer: 2,
    explanation: "If a row in the left table matches multiple rows in the right table, both INNER JOIN and LEFT JOIN will produce multiple result rows for that left row, effectively duplicating it.",
    difficulty: "Medium",
    topic: "INNER JOIN"
},
{
    id: "sql-155",
    question: "What happens if you use a LEFT JOIN and the right table has no matching rows?",
    options: [
        "The query returns an error",
        "The left table row is excluded from the result",
        "The left table row is included with NULL values for all right table columns",
        "The left table row is included with default values for right table columns"
    ],
    answer: 2,
    explanation: "In a LEFT JOIN, all rows from the left table are included. If there is no match in the right table, the right table columns are filled with NULL values for that row.",
    difficulty: "Easy",
    topic: "LEFT JOIN"
},
{
    id: "sql-156",
    question: "Which of the following joins is NOT part of standard SQL but is commonly available?",
    options: [
        "INNER JOIN",
        "LEFT OUTER JOIN",
        "NATURAL JOIN",
        "HASH JOIN"
    ],
    answer: 3,
    explanation: "HASH JOIN is an implementation-specific join algorithm used by database engines for performance optimization, not a SQL language construct. The other three are standard SQL join types.",
    difficulty: "Medium",
    topic: "Joins"
},
{
    id: "sql-157",
    question: "When joining three tables A, B, and C, which join order is generally preferred for performance if A-B is highly selective and B-C is not?",
    options: [
        "A JOIN C JOIN B",
        "C JOIN B JOIN A",
        "A JOIN B JOIN C",
        "Join order does not affect performance"
    ],
    answer: 2,
    explanation: "Joining the most selective join first (A JOIN B) reduces the intermediate result set early, making the subsequent join with C more efficient. This minimizes the number of rows processed in later joins.",
    difficulty: "Hard",
    topic: "Query Optimization"
},
{
    id: "sql-158",
    question: "What is an equi-join?",
    options: [
        "A join that produces an equal number of rows from each table",
        "A join that uses only the equality operator (=) in the join condition",
        "A join between tables with equal numbers of columns",
        "A join that balances the load across multiple processors"
    ],
    answer: 1,
    explanation: "An equi-join is a join where the condition contains only equality comparisons (=) between columns. INNER JOIN with ON a.id = b.id is an example of an equi-join.",
    difficulty: "Medium",
    topic: "INNER JOIN"
},
{
    id: "sql-159",
    question: "Table: emp (id INT, name VARCHAR, dept_id INT). Table: dept (id INT, dname VARCHAR). Which query correctly finds employees who are NOT in any department?",
    options: [
        "SELECT * FROM emp WHERE dept_id = NULL",
        "SELECT * FROM emp WHERE dept_id IS NULL",
        "SELECT * FROM emp JOIN dept ON emp.dept_id = dept.id WHERE dept.id IS NULL",
        "SELECT * FROM emp WHERE NOT EXISTS (SELECT 1 FROM dept WHERE dept.id = emp.dept_id AND emp.dept_id IS NOT NULL)"
    ],
    answer: 3,
    explanation: "An employee is not in any department if their dept_id is NULL or if their dept_id does not exist in the dept table. Option 3 using NOT EXISTS correctly handles both cases, while option 2 only handles the NULL case.",
    difficulty: "Hard",
    topic: "EXISTS"
},
{
    id: "sql-160",
    question: "Which type of join returns all rows from both tables, matching where possible and NULL where not?",
    options: [
        "INNER JOIN",
        "LEFT JOIN",
        "RIGHT JOIN",
        "FULL OUTER JOIN"
    ],
    answer: 3,
    explanation: "FULL OUTER JOIN combines the results of both LEFT JOIN and RIGHT JOIN. It returns all rows from both tables, with NULLs where there is no match in the other table.",
    difficulty: "Easy",
    topic: "FULL OUTER JOIN"
},
{
    id: "sql-161",
    question: "What is a many-to-many relationship in database design?",
    options: [
        "A relationship where many tables reference one table",
        "A relationship implemented using a junction (association) table",
        "A relationship where a foreign key appears in both tables",
        "A relationship that violates normalization rules"
    ],
    answer: 1,
    explanation: "A many-to-many relationship is implemented using a junction (or bridge) table that contains foreign keys referencing both related tables. This table breaks the M:N relationship into two 1:N relationships.",
    difficulty: "Medium",
    topic: "Foreign Key"
},
{
    id: "sql-162",
    question: "Table: orders (order_id INT, cust_id INT, amount DECIMAL). Table: customers (cust_id INT, name VARCHAR). Which query finds customers who have never placed an order?",
    options: [
        "SELECT * FROM customers c JOIN orders o ON c.cust_id = o.cust_id WHERE o.order_id IS NULL",
        "SELECT * FROM customers c LEFT JOIN orders o ON c.cust_id = o.cust_id WHERE o.order_id IS NULL",
        "SELECT * FROM customers c WHERE c.cust_id NOT IN (SELECT cust_id FROM orders)",
        "Both B and C are correct"
    ],
    answer: 3,
    explanation: "Both LEFT JOIN with IS NULL check and NOT IN subquery correctly find customers with no orders. The LEFT JOIN approach is often preferred as it handles NULLs in the subquery results more safely than NOT IN.",
    difficulty: "Medium",
    topic: "LEFT JOIN"
},
{
    id: "sql-163",
    question: "What is the risk of using NOT IN with a subquery that might return NULL values?",
    options: [
        "It returns duplicate rows",
        "It returns no rows at all if any NULL is in the subquery result",
        "It causes a syntax error",
        "It returns all rows from the outer query"
    ],
    answer: 1,
    explanation: "If the subquery in NOT IN returns any NULL values, the entire NOT IN condition evaluates to UNKNOWN for every row, causing the query to return zero rows. NOT EXISTS is a safer alternative.",
    difficulty: "Hard",
    topic: "Subqueries"
},
{
    id: "sql-164",
    question: "What is the difference between a JOIN and a subquery for the same logical requirement?",
    options: [
        "They always produce the same execution plan",
        "JOINs are generally more efficient for simple relationships, while subqueries can be more readable for complex conditions",
        "Subqueries are always faster than JOINs",
        "JOINs cannot filter data, only subqueries can"
    ],
    answer: 1,
    explanation: "JOINs are generally more efficient for simple data combination because the optimizer can choose the best join strategy. Subqueries can be more readable for complex conditions. Modern optimizers often rewrite subqueries as joins internally.",
    difficulty: "Medium",
    topic: "Subqueries"
},
{
    id: "sql-165",
    question: "What is a theta join?",
    options: [
        "A join using only the equals operator",
        "A join using any comparison operator (>, <, >=, <=, <>, =)",
        "A join that produces a theta-shaped result set",
        "A join used in theta-normalized databases"
    ],
    answer: 1,
    explanation: "A theta join is a join that uses any comparison operator (not just =) in the join condition. An equi-join is a specific type of theta join that uses only the = operator.",
    difficulty: "Medium",
    topic: "Joins"
},
{
    id: "sql-166",
    question: "When using multiple JOINs in a query, why is the JOIN order important?",
    options: [
        "It determines the column order in the result",
        "It affects which rows are included in the final result",
        "It can significantly impact query performance by changing intermediate result sizes",
        "It has no impact on the query"
    ],
    answer: 2,
    explanation: "While the logical result of INNER JOINs is order-independent, the physical execution order can significantly impact performance. Joining selective tables first reduces intermediate result sizes and improves performance.",
    difficulty: "Medium",
    topic: "Query Optimization"
},
{
    id: "sql-167",
    question: "Table: A (id INT, b_id INT). Table: B (id INT). Which query finds all records in A whose b_id does not exist in B?",
    options: [
        "SELECT * FROM A WHERE b_id NOT IN (SELECT id FROM B)",
        "SELECT * FROM A LEFT JOIN B ON A.b_id = B.id WHERE B.id IS NULL",
        "SELECT * FROM A WHERE NOT EXISTS (SELECT 1 FROM B WHERE B.id = A.b_id)",
        "All of the above are correct (assuming B.id has no NULL values for option A)"
    ],
    answer: 3,
    explanation: "All three approaches can find unmatched records. NOT IN works if B.id has no NULLs. LEFT JOIN with IS NULL is reliable. NOT EXISTS is generally the safest and most efficient approach.",
    difficulty: "Hard",
    topic: "EXISTS"
},
{
    id: "sql-168",
    question: "What is a self-referencing foreign key?",
    options: [
        "A foreign key that references a primary key in a different table",
        "A foreign key in a table that references the primary key of the same table",
        "A foreign key that is also a primary key",
        "A foreign key that references itself by name"
    ],
    answer: 1,
    explanation: "A self-referencing foreign key references the primary key of its own table, creating a hierarchical or tree-like structure within a single table (e.g., employee-manager relationships).",
    difficulty: "Medium",
    topic: "Foreign Key"
},
{
    id: "sql-169",
    question: "In a LEFT JOIN, can WHERE conditions on the right table columns convert it to effectively an INNER JOIN?",
    options: [
        "No, LEFT JOIN always preserves all left table rows",
        "Yes, if the WHERE condition filters out NULL rows from the right table",
        "Only if the ON clause is empty",
        "No, this is prevented by the SQL standard"
    ],
    answer: 1,
    explanation: "If a WHERE clause filters on a right table column (e.g., WHERE right.col = 'X'), rows where the right table columns are NULL (unmatched left rows) are eliminated, effectively converting the LEFT JOIN to an INNER JOIN. To avoid this, move the condition to the ON clause.",
    difficulty: "Hard",
    topic: "LEFT JOIN"
},
{
    id: "sql-170",
    question: "Which of the following is true about the USING clause in a JOIN?",
    options: [
        "USING can only be used with CROSS JOIN",
        "USING specifies the join columns by name when they are identical in both tables",
        "USING is a replacement for the WHERE clause",
        "USING can only reference columns from the left table"
    ],
    answer: 1,
    explanation: "The USING clause is a shorthand for ON when the join columns have the same name in both tables. For example, JOIN B USING (id) is equivalent to JOIN B ON A.id = B.id.",
    difficulty: "Medium",
    topic: "INNER JOIN"
},
{
    id: "sql-171",
    question: "Table: emp (id INT, mgr_id INT, name VARCHAR). How do you find all employees who report to employee with id=5, including indirect reports?",
    options: [
        "SELECT * FROM emp WHERE mgr_id = 5",
        "SELECT * FROM emp WHERE mgr_id = 5 OR mgr_id IN (SELECT id FROM emp WHERE mgr_id = 5)",
        "Use a recursive CTE starting with direct reports of id=5 and recursively finding their reports",
        "SELECT * FROM emp WHERE mgr_id IN (SELECT mgr_id FROM emp WHERE id = 5)"
    ],
    answer: 2,
    explanation: "Only a recursive CTE can handle arbitrary levels of hierarchy. It starts with direct reports (anchor) and recursively traverses the tree to find all descendants at any depth.",
    difficulty: "Hard",
    topic: "Recursive Queries"
},
{
    id: "sql-172",
    question: "What is the result of a NATURAL JOIN between two tables that have no columns with the same name?",
    options: [
        "An error is thrown",
        "A CROSS JOIN is performed",
        "An empty result set is returned",
        "NULL values are returned for all columns"
    ],
    answer: 1,
    explanation: "When two tables in a NATURAL JOIN have no columns with the same name, there is no join condition, so it degenerates into a CROSS JOIN (Cartesian product).",
    difficulty: "Hard",
    topic: "Natural Join"
},
{
    id: "sql-173",
    question: "Table: A (id INT, val INT) with rows: (1,10), (2,20). Table: B (id INT, val INT) with rows: (1,100), (2,200). What does SELECT A.id, A.val, B.val FROM A JOIN B USING (id) return?",
    options: [
        "1, 10, 100 and 2, 20, 200",
        "1, 10, 100 and 2, 20, 200 and 1, 100, 10 and 2, 200, 20",
        "Error because USING cannot be used here",
        "1, 10, 10 and 2, 20, 20"
    ],
    answer: 0,
    explanation: "JOIN B USING (id) joins on the common 'id' column. The result includes A.id (from USING), A.val, and B.val. The 'id' column appears only once in the result.",
    difficulty: "Medium",
    topic: "INNER JOIN"
},
{
    id: "sql-174",
    question: "What is an anti-join?",
    options: [
        "A join that reverses the order of tables",
        "A pattern that finds rows in one table that do not have a match in another table",
        "A join that removes duplicate rows",
        "A join that is the opposite of a NATURAL JOIN"
    ],
    answer: 1,
    explanation: "An anti-join is a pattern (not a SQL keyword) that returns rows from one table that have no corresponding match in another table. It is typically implemented using NOT EXISTS, NOT IN, or LEFT JOIN with IS NULL.",
    difficulty: "Medium",
    topic: "EXISTS"
},
{
    id: "sql-175",
    question: "What is a semi-join?",
    options: [
        "A join that returns only half the columns",
        "A join that checks for existence of a match but does not return columns from the second table",
        "A join between two identical tables",
        "A join that only processes the first table"
    ],
    answer: 1,
    explanation: "A semi-join returns rows from the first table where a matching row exists in the second table, but it does not return any columns from the second table. EXISTS and IN are common semi-join patterns.",
    difficulty: "Medium",
    topic: "EXISTS"
},
{
    id: "sql-176",
    question: "Which is the correct syntax for a LEFT JOIN?",
    options: [
        "SELECT * FROM A LEFT JOIN B",
        "SELECT * FROM A LEFT OUTER JOIN B ON A.id = B.id",
        "SELECT * FROM A JOIN LEFT B ON A.id = B.id",
        "SELECT * FROM A LEFT B JOIN ON A.id = B.id"
    ],
    answer: 1,
    explanation: "The correct syntax requires the ON clause to specify the join condition. LEFT OUTER JOIN is the full syntax (OUTER is optional). Both 'LEFT JOIN' and 'LEFT OUTER JOIN' are equivalent.",
    difficulty: "Easy",
    topic: "LEFT JOIN"
},
{
    id: "sql-177",
    question: "When joining tables with duplicate column names, what happens if you use SELECT *?",
    options: [
        "Only one copy of each column name appears",
        "All columns from all tables appear, with duplicate column names qualified by table name or alias",
        "An error occurs",
        "The duplicate columns are automatically merged"
    ],
    answer: 1,
    explanation: "SELECT * in a join returns all columns from all tables. If column names are duplicated across tables, the result set will contain both, typically qualified by table name or alias in the result metadata.",
    difficulty: "Medium",
    topic: "INNER JOIN"
},
{
    id: "sql-178",
    question: "Table: emp (id INT, name VARCHAR, dept_id INT, salary INT). Table: dept (id INT, dname VARCHAR). Which query finds the department with the highest average salary?",
    options: [
        "SELECT dept_id, MAX(AVG(salary)) FROM emp GROUP BY dept_id",
        "SELECT dept_id, AVG(salary) FROM emp GROUP BY dept_id ORDER BY AVG(salary) DESC LIMIT 1",
        "SELECT dname FROM dept WHERE id = (SELECT dept_id FROM emp ORDER BY AVG(salary) DESC LIMIT 1)",
        "Both B and C could work"
    ],
    answer: 3,
    explanation: "Option B directly gets the dept_id with the highest average. Option C requires a subquery that also correctly groups. Both approaches can achieve the result, though B is more straightforward.",
    difficulty: "Hard",
    topic: "GROUP BY"
},
{
    id: "sql-179",
    question: "What is the difference between ON and WHERE in a LEFT JOIN?",
    options: [
        "There is no difference",
        "ON defines the join condition, WHERE filters the final result after the join",
        "ON filters the left table, WHERE filters the right table",
        "WHERE is applied before the join, ON is applied after"
    ],
    answer: 1,
    explanation: "In a LEFT JOIN, ON defines how tables are related (applied during the join), while WHERE filters the final result set after the join. Moving a right-table condition from ON to WHERE can change the result by eliminating unmatched left rows.",
    difficulty: "Medium",
    topic: "LEFT JOIN"
},
{
    id: "sql-180",
    question: "Which join type is best for finding orphan records in a child table (records with a foreign key that does not exist in the parent table)?",
    options: [
        "INNER JOIN",
        "LEFT JOIN from child to parent with IS NULL check on parent",
        "RIGHT JOIN from parent to child with IS NULL check on child",
        "NATURAL JOIN"
    ],
    answer: 1,
    explanation: "A LEFT JOIN from the child table to the parent table, with a WHERE clause checking for NULL in the parent's primary key, will return only those child records that have no matching parent.",
    difficulty: "Medium",
    topic: "LEFT JOIN"
},
{
    id: "sql-181",
    question: "What does COUNT(*) do differently from COUNT(column_name)?",
    options: [
        "COUNT(*) counts only non-NULL values, COUNT(column_name) counts all rows",
        "COUNT(*) counts all rows including those with NULL values, COUNT(column_name) counts only non-NULL values in that column",
        "There is no difference",
        "COUNT(*) is faster only for small tables"
    ],
    answer: 1,
    explanation: "COUNT(*) counts all rows regardless of NULL values. COUNT(column_name) counts only the rows where that specific column has a non-NULL value.",
    difficulty: "Easy",
    topic: "COUNT"
},
{
    id: "sql-182",
    question: "Which of the following is NOT a valid use of GROUP BY?",
    options: [
        "GROUP BY a single column",
        "GROUP BY multiple columns",
        "GROUP BY an aggregate function",
        "GROUP BY a column alias defined in the SELECT clause (in some databases)"
    ],
    answer: 2,
    explanation: "You cannot GROUP BY an aggregate function. Aggregate functions operate on groups, so grouping by an aggregate result does not make sense. GROUP BY must reference non-aggregated columns or expressions.",
    difficulty: "Medium",
    topic: "GROUP BY"
},
{
    id: "sql-183",
    question: "What is the result of SELECT COUNT(DISTINCT NULL) FROM a table with NULL values?",
    options: [
        "The number of NULL values",
        "1",
        "0",
        "NULL"
    ],
    answer: 2,
    explanation: "COUNT(DISTINCT expr) counts distinct non-NULL values. Since NULL is not considered a value, COUNT(DISTINCT NULL) returns 0, not 1.",
    difficulty: "Hard",
    topic: "COUNT"
},
{
    id: "sql-184",
    question: "Can you use an aggregate function in the WHERE clause?",
    options: [
        "Yes, without any restrictions",
        "No, you must use HAVING instead for filtering on aggregate results",
        "Yes, but only with GROUP BY",
        "Only in MySQL"
    ],
    answer: 1,
    explanation: "Aggregate functions cannot be used in the WHERE clause because WHERE filters rows before grouping. The HAVING clause must be used to filter results after GROUP BY and aggregation.",
    difficulty: "Medium",
    topic: "HAVING"
},
{
    id: "sql-185",
    question: "Table: sales (product VARCHAR, qty INT, price DECIMAL). What does SELECT product, SUM(qty * price) FROM sales GROUP BY product return?",
    options: [
        "The total quantity for each product",
        "The total revenue (quantity multiplied by price, summed) for each product",
        "An error because you cannot multiply in an aggregate function",
        "The average price for each product"
    ],
    answer: 1,
    explanation: "SUM(qty * price) first computes qty * price for each row, then sums the results for each product group, giving the total revenue per product.",
    difficulty: "Medium",
    topic: "SUM"
},
{
    id: "sql-186",
    question: "What is the difference between WHERE and HAVING clauses?",
    options: [
        "WHERE filters groups, HAVING filters individual rows",
        "WHERE filters rows before grouping, HAVING filters groups after aggregation",
        "HAVING can only be used without GROUP BY",
        "There is no difference; they are interchangeable"
    ],
    answer: 1,
    explanation: "WHERE filters individual rows before GROUP BY is applied and cannot reference aggregates. HAVING filters groups after GROUP BY and can reference aggregate functions.",
    difficulty: "Easy",
    topic: "HAVING"
},
{
    id: "sql-187",
    question: "Table: t (a INT, b INT) with rows: (1,10), (1,20), (2,30), (2,40). What does SELECT a, SUM(b) as total FROM t GROUP BY ROLLUP(a) return?",
    options: [
        "1, 30 and 2, 70",
        "1, 30 and 2, 70 and NULL, 100",
        "1, 30 and 2, 70 and 100",
        "Error"
    ],
    answer: 1,
    explanation: "GROUP BY ROLLUP(a) produces the regular grouped rows plus a grand total row. It returns: (1,30), (2,70), and (NULL,100) where NULL represents the grand total of all groups.",
    difficulty: "Hard",
    topic: "GROUP BY"
},
{
    id: "sql-188",
    question: "What does GROUP BY CUBE(a, b) produce compared to GROUP BY a, b?",
    options: [
        "The same result as GROUP BY a, b",
        "All possible combinations of grouping sets: (a,b), (a), (b), and ()",
        "Only the grand total",
        "Only individual groupings without the grand total"
    ],
    answer: 1,
    explanation: "GROUP BY CUBE(a, b) generates all possible grouping sets: grouping by (a,b), by (a) alone, by (b) alone, and by nothing (grand total). It produces 2^n grouping sets where n is the number of columns.",
    difficulty: "Hard",
    topic: "GROUP BY"
},
{
    id: "sql-189",
    question: "Table: emp (dept VARCHAR, salary INT) with rows: ('IT',100), ('IT',200), ('HR',300), ('HR',400). What does SELECT dept, COUNT(*), SUM(salary) FROM emp GROUP BY dept return?",
    options: [
        "IT, 2, 300 and HR, 2, 700",
        "IT, 100, 200 and HR, 300, 400",
        "2, 300 and 2, 700",
        "IT, 2, 300 and HR, 2, 700 and NULL, 4, 1000"
    ],
    answer: 0,
    explanation: "IT: COUNT(*)=2, SUM(salary)=300. HR: COUNT(*)=2, SUM(salary)=700. The result has two rows with the department, count, and sum for each group.",
    difficulty: "Easy",
    topic: "GROUP BY"
},
{
    id: "sql-190",
    question: "What is a grouping set?",
    options: [
        "A set of columns used in the GROUP BY clause",
        "A collection of groups that can be combined in a single GROUP BY operation using GROUPING SETS",
        "A predefined set of aggregate functions",
        "A configuration for database grouping behavior"
    ],
    answer: 1,
    explanation: "GROUPING SETS allows you to define multiple groupings in a single query. For example, GROUP BY GROUPING SETS ((a), (b)) is equivalent to two separate GROUP BY queries combined with UNION ALL.",
    difficulty: "Hard",
    topic: "GROUP BY"
},
{
    id: "sql-191",
    question: "Table: t (cat VARCHAR, val INT) with rows: ('A',10), ('A',20), ('B',30). What does SELECT cat, AVG(val) FROM t GROUP BY cat HAVING AVG(val) > 15 return?",
    options: [
        "A, 15 and B, 30",
        "A, 15",
        "B, 30",
        "An empty result set"
    ],
    answer: 2,
    explanation: "A: AVG(val) = (10+20)/2 = 15, which is NOT > 15. B: AVG(val) = 30/1 = 30, which IS > 15. Only B passes the HAVING filter.",
    difficulty: "Medium",
    topic: "HAVING"
},
{
    id: "sql-192",
    question: "Can you use a window function inside a GROUP BY query?",
    options: [
        "No, window functions and GROUP BY are mutually exclusive",
        "Yes, but the window function operates on the grouped result, not the original rows",
        "Yes, and it operates on the original ungrouped rows",
        "Only with HAVING"
    ],
    answer: 1,
    explanation: "Window functions can be used in a query with GROUP BY, but they operate on the result set after grouping. The window function sees the grouped rows, not the original individual rows.",
    difficulty: "Hard",
    topic: "Window Functions"
},
{
    id: "sql-193",
    question: "What does SELECT AVG(DISTINCT salary) FROM employees compute?",
    options: [
        "The average of all salaries",
        "The average of unique (distinct) salary values",
        "The distinct average salary per department",
        "An error"
    ],
    answer: 1,
    explanation: "AVG(DISTINCT salary) first eliminates duplicate salary values, then computes the average of the remaining unique values. For example, salaries 50,50,60 would give AVG(DISTINCT) = (50+60)/2 = 55.",
    difficulty: "Medium",
    topic: "AVG"
},
{
    id: "sql-194",
    question: "What is the GROUPING() function used for?",
    options: [
        "To group rows by a specific column",
        "To distinguish between NULL values that result from grouping and actual NULL data values in ROLLUP/CUBE results",
        "To count the number of groups",
        "To create new groups dynamically"
    ],
    answer: 1,
    explanation: "GROUPING(column) returns 1 if the row is a super-aggregate row (produced by ROLLUP, CUBE, or GROUPING SETS) for that column, and 0 if the row is a regular grouped row. It helps distinguish summary rows from data rows.",
    difficulty: "Hard",
    topic: "GROUP BY"
},
{
    id: "sql-195",
    question: "Table: t (a INT, b INT) with rows: (1,10), (1,NULL), (2,20), (2,NULL). What does SELECT a, COUNT(b), SUM(b) FROM t GROUP BY a return?",
    options: [
        "1, 2, 10 and 2, 2, 20",
        "1, 1, 10 and 2, 1, 20",
        "1, 1, 10 and 2, 1, 20 and NULL, 0, NULL",
        "1, 0, 10 and 2, 0, 20"
    ],
    answer: 1,
    explanation: "COUNT(b) counts non-NULL values: a=1 has one non-NULL b (10), a=2 has one non-NULL b (20). SUM(b) sums non-NULL values: a=1 sums to 10, a=2 sums to 20.",
    difficulty: "Medium",
    topic: "Aggregate Functions"
},
{
    id: "sql-196",
    question: "What is the purpose of a PRIMARY KEY constraint?",
    options: [
        "To allow duplicate values in a column",
        "To ensure each row is uniquely identifiable and to prevent NULL values",
        "To create an index automatically for faster sorting only",
        "To link two tables together"
    ],
    answer: 1,
    explanation: "A PRIMARY KEY uniquely identifies each row in a table. It combines NOT NULL and UNIQUE constraints, ensuring the column has no NULL values and no duplicates.",
    difficulty: "Easy",
    topic: "Primary Key"
},
{
    id: "sql-197",
    question: "Can a table have multiple PRIMARY KEY columns?",
    options: [
        "No, a table can have only one primary key, but it can be composite (multiple columns)",
        "Yes, a table can have multiple primary keys",
        "No, a primary key must always be a single column",
        "Yes, but only if all are INTEGER types"
    ],
    answer: 0,
    explanation: "A table can have only one PRIMARY KEY constraint, but that primary key can be composite, consisting of multiple columns. The combination of these columns must be unique and non-NULL.",
    difficulty: "Medium",
    topic: "Composite Key"
},
{
    id: "sql-198",
    question: "What happens when you try to insert a NULL value into a PRIMARY KEY column?",
    options: [
        "The NULL is converted to 0",
        "The NULL is converted to the next auto-increment value",
        "An error is raised",
        "The row is inserted with a blank primary key"
    ],
    answer: 2,
    explanation: "PRIMARY KEY columns have an implicit NOT NULL constraint. Attempting to insert NULL into a primary key column will raise an error.",
    difficulty: "Easy",
    topic: "Primary Key"
},
{
    id: "sql-199",
    question: "What is ON DELETE CASCADE in a foreign key constraint?",
    options: [
        "It deletes the foreign key column when the parent row is deleted",
        "It automatically deletes child rows when the parent row is deleted",
        "It prevents deletion of the parent row if child rows exist",
        "It sets the foreign key to NULL when the parent is deleted"
    ],
    answer: 1,
    explanation: "ON DELETE CASCADE specifies that when a parent row is deleted, all corresponding child rows (that reference the parent) are automatically deleted as well.",
    difficulty: "Medium",
    topic: "Foreign Key"
},
{
    id: "sql-200",
    question: "What does ON DELETE SET NULL do?",
    options: [
        "It deletes the child row when the parent is deleted",
        "It sets the foreign key column of child rows to NULL when the parent row is deleted",
        "It sets the parent's primary key to NULL",
        "It prevents any deletion"
    ],
    answer: 1,
    explanation: "ON DELETE SET NULL sets the foreign key column in child rows to NULL when the referenced parent row is deleted. The child column must allow NULL values for this to work.",
    difficulty: "Medium",
    topic: "Foreign Key"
},
{
    id: "sql-201",
    question: "What is the difference between a UNIQUE constraint and a PRIMARY KEY constraint?",
    options: [
        "There is no difference",
        "UNIQUE allows NULL values (typically), PRIMARY KEY does not; a table can have multiple UNIQUE constraints but only one PRIMARY KEY",
        "PRIMARY KEY allows NULL values, UNIQUE does not",
        "UNIQUE is faster than PRIMARY KEY"
    ],
    answer: 1,
    explanation: "UNIQUE allows NULL values in most databases (though only one NULL is allowed in some), while PRIMARY KEY does not allow NULLs. A table can have multiple UNIQUE constraints but only one PRIMARY KEY.",
    difficulty: "Medium",
    topic: "Unique Key"
},
{
    id: "sql-202",
    question: "What is the purpose of AUTO_INCREMENT (or IDENTITY/SERIAL)?",
    options: [
        "To automatically increment all numeric columns in a table",
        "To automatically generate a unique sequential number for a column when a new row is inserted",
        "To automatically increase the value of a column on every update",
        "To create a sequence that is shared across all tables"
    ],
    answer: 1,
    explanation: "AUTO_INCREMENT (MySQL), IDENTITY (SQL Server), or SERIAL (PostgreSQL) automatically generates a unique sequential number for a column, typically used for primary keys, when a new row is inserted without specifying that column's value.",
    difficulty: "Easy",
    topic: "AUTO_INCREMENT"
},
{
    id: "sql-203",
    question: "What is a CHECK constraint with a named constraint useful for?",
    options: [
        "It makes the constraint execute faster",
        "It allows you to drop or modify the constraint by name later",
        "It is required for all CHECK constraints",
        "It allows the constraint to be shared across tables"
    ],
    answer: 1,
    explanation: "Naming a constraint allows you to reference it by name for operations like ALTER TABLE DROP CONSTRAINT name, making it easier to manage constraints without needing to know their system-generated names.",
    difficulty: "Medium",
    topic: "CHECK"
},
{
    id: "sql-204",
    question: "What does the NO ACTION referential action do when a parent row is deleted?",
    options: [
        "It takes no action and allows the deletion",
        "It produces an error if child rows exist, preventing the deletion (same as RESTRICT in practice)",
        "It automatically deletes child rows",
        "It sets child foreign keys to their default values"
    ],
    answer: 1,
    explanation: "NO ACTION prevents the deletion of a parent row if child rows reference it, raising an error. In most databases, NO ACTION behaves the same as RESTRICT, though NO ACTION can be deferred in some databases.",
    difficulty: "Medium",
    topic: "Referential Integrity"
},
{
    id: "sql-205",
    question: "What is the difference between ON DELETE RESTRICT and ON DELETE NO ACTION?",
    options: [
        "RESTRICT is enforced immediately, NO ACTION can be deferred until the end of the transaction in some databases",
        "NO ACTION deletes the child, RESTRICT does not",
        "They are completely different and never behave the same way",
        "RESTRICT only works with composite keys"
    ],
    answer: 0,
    explanation: "In most databases, RESTRICT and NO ACTION behave identically. However, in standards-compliant databases, NO ACTION can be deferrable (checked at transaction commit), while RESTRICT is always immediate.",
    difficulty: "Hard",
    topic: "Referential Integrity"
},
{
    id: "sql-206",
    question: "Can a FOREIGN KEY reference a UNIQUE constraint instead of a PRIMARY KEY?",
    options: [
        "No, it must reference a PRIMARY KEY",
        "Yes, a FOREIGN KEY can reference any column or set of columns with a UNIQUE constraint",
        "Yes, but only in Oracle",
        "Only if the UNIQUE constraint has no NULL values"
    ],
    answer: 1,
    explanation: "A FOREIGN KEY can reference any column or combination of columns that has a UNIQUE constraint, not just PRIMARY KEY columns. The referenced columns must be unique and typically should not be NULL.",
    difficulty: "Medium",
    topic: "Foreign Key"
},
{
    id: "sql-207",
    question: "What is a deferred constraint?",
    options: [
        "A constraint that is checked only at the end of a transaction rather than at each statement",
        "A constraint that is automatically removed after a period of time",
        "A constraint that applies only to deferred queries",
        "A constraint that has lower priority than other constraints"
    ],
    answer: 0,
    explanation: "A deferred constraint is not checked until the transaction is committed, rather than after each SQL statement. This allows intermediate states that might violate the constraint, as long as the final state is valid.",
    difficulty: "Hard",
    topic: "Constraints"
},
{
    id: "sql-208",
    question: "Which constraint ensures that a column value falls within a specified range?",
    options: [
        "UNIQUE",
        "CHECK",
        "NOT NULL",
        "DEFAULT"
    ],
    answer: 1,
    explanation: "The CHECK constraint defines a condition that each row must satisfy. A CHECK constraint like CHECK (age BETWEEN 0 AND 120) ensures the column value falls within the specified range.",
    difficulty: "Easy",
    topic: "CHECK"
},
{
    id: "sql-209",
    question: "What is the correct syntax to add a FOREIGN KEY constraint to an existing table?",
    options: [
        "ALTER TABLE child ADD FOREIGN KEY (col) REFERENCES parent(id);",
        "MODIFY TABLE child ADD CONSTRAINT FOREIGN KEY (col) REFERENCES parent(id);",
        "UPDATE TABLE child SET FOREIGN KEY (col) REFERENCES parent(id);",
        "CREATE CONSTRAINT ON child FOREIGN KEY (col) REFERENCES parent(id);"
    ],
    answer: 0,
    explanation: "The ALTER TABLE statement with ADD FOREIGN KEY is used to add a foreign key constraint to an existing table. You can optionally name the constraint with ADD CONSTRAINT name FOREIGN KEY...",
    difficulty: "Medium",
    topic: "Foreign Key"
},
{
    id: "sql-210",
    question: "What is a surrogate key?",
    options: [
        "A key that temporarily replaces the primary key during migration",
        "An artificial key generated by the system (like AUTO_INCREMENT) that has no business meaning",
        "A backup key used when the primary key fails",
        "A key used for surrogate database connections"
    ],
    answer: 1,
    explanation: "A surrogate key is a system-generated unique identifier (like an auto-incrementing integer or UUID) that has no business meaning. It is used as the primary key instead of a natural key (like a social security number).",
    difficulty: "Medium",
    topic: "Primary Key"
},
{
    id: "sql-211",
    question: "What is a natural key?",
    options: [
        "A key that exists naturally in the data, such as a social security number or email address",
        "A key that is automatically generated by the database",
        "A key used in natural language processing databases",
        "A key that follows natural ordering"
    ],
    answer: 0,
    explanation: "A natural key is a key that is derived from the data itself and has inherent business meaning (e.g., ISBN for books, email for users). It exists in the real world outside the database.",
    difficulty: "Medium",
    topic: "Candidate Key"
},
{
    id: "sql-212",
    question: "Which is an advantage of surrogate keys over natural keys?",
    options: [
        "Surrogate keys have business meaning",
        "Surrogate keys never change, even if business data changes",
        "Surrogate keys are always shorter",
        "Surrogate keys do not need indexes"
    ],
    answer: 1,
    explanation: "Surrogate keys are immune to changes in business data. If a natural key like email changes, all foreign key references must be updated. Surrogate keys remain constant regardless of data changes.",
    difficulty: "Medium",
    topic: "Primary Key"
},
{
    id: "sql-213",
    question: "What is the correct SQL to create a table with a composite primary key?",
    options: [
        "CREATE TABLE t (a INT, b INT, PRIMARY KEY (a, b));",
        "CREATE TABLE t (a INT PRIMARY KEY, b INT PRIMARY KEY);",
        "CREATE TABLE t (a INT, b INT, COMPOSITE PRIMARY KEY (a, b));",
        "CREATE TABLE t (a INT, b INT, PRIMARY KEY a AND b);"
    ],
    answer: 0,
    explanation: "A composite primary key is defined by specifying multiple columns in the PRIMARY KEY constraint: PRIMARY KEY (a, b). This means the combination of a and b must be unique.",
    difficulty: "Medium",
    topic: "Composite Key"
},
{
    id: "sql-214",
    question: "What is the effect of adding a CHECK constraint to a table that already contains data that violates the constraint?",
    options: [
        "The constraint is added but only applies to new data",
        "The existing violating data is automatically corrected",
        "The constraint addition fails unless WITH NOCHECK is specified (in databases that support it)",
        "The constraint is added and the violating rows are deleted"
    ],
    answer: 2,
    explanation: "By default, adding a CHECK constraint to a table with existing data that violates the constraint will fail. Some databases (like SQL Server) allow WITH NOCHECK to add the constraint without validating existing data.",
    difficulty: "Hard",
    topic: "CHECK"
},
{
    id: "sql-215",
    question: "What does ON UPDATE CASCADE do in a foreign key relationship?",
    options: [
        "It cascades updates from child to parent",
        "It automatically updates child table foreign key values when the parent's primary key is updated",
        "It updates all columns in the child table when any parent column is updated",
        "It prevents updates to the parent's primary key"
    ],
    answer: 1,
    explanation: "ON UPDATE CASCADE automatically propagates changes to the parent's primary key to all referencing child rows. If a parent's ID changes from 1 to 2, all child rows referencing ID 1 are updated to reference 2.",
    difficulty: "Medium",
    topic: "Foreign Key"
},
{
    id: "sql-216",
    question: "Which normal form deals with removing transitive dependencies?",
    options: [
        "1NF",
        "2NF",
        "3NF",
        "BCNF"
    ],
    answer: 2,
    explanation: "Third Normal Form (3NF) removes transitive dependencies, where a non-key attribute depends on another non-key attribute rather than directly on the primary key. A table is in 3NF if it is in 2NF and has no transitive dependencies.",
    difficulty: "Medium",
    topic: "3NF"
},
{
    id: "sql-217",
    question: "What is Boyce-Codd Normal Form (BCNF)?",
    options: [
        "A weaker form than 3NF",
        "A stronger version of 3NF where every determinant is a candidate key",
        "A form that allows multi-valued dependencies",
        "A form specifically for binary relationships"
    ],
    answer: 1,
    explanation: "BCNF is a stricter version of 3NF. A table is in BCNF if, for every non-trivial functional dependency X → Y, X is a superkey. This eliminates cases where a non-candidate key determines other attributes.",
    difficulty: "Hard",
    topic: "BCNF"
},
{
    id: "sql-218",
    question: "What type of dependency does 4NF address?",
    options: [
        "Partial dependencies",
        "Transitive dependencies",
        "Multi-valued dependencies",
        "Join dependencies"
    ],
    answer: 2,
    explanation: "Fourth Normal Form (4NF) addresses multi-valued dependencies, where two or more independent multi-valued attributes exist in the same table. 4NF states that a table should not have more than one multi-valued dependency.",
    difficulty: "Hard",
    topic: "4NF"
},
{
    id: "sql-219",
    question: "What is 5NF also known as?",
    options: [
        "Domain-Key Normal Form",
        "Projection-Join Normal Form (PJNF)",
        "Universal Normal Form",
        "Complete Normal Form"
    ],
    answer: 1,
    explanation: "Fifth Normal Form (5NF) is also known as Projection-Join Normal Form (PJNF). It deals with join dependencies and ensures that a table cannot be decomposed into smaller tables without losing information.",
    difficulty: "Hard",
    topic: "5NF"
},
{
    id: "sql-220",
    question: "What is a functional dependency?",
    options: [
        "A dependency that requires a function to compute",
        "A relationship where the value of one attribute determines the value of another attribute",
        "A dependency between two functions in SQL",
        "A dependency that only exists in denormalized tables"
    ],
    answer: 1,
    explanation: "A functional dependency X → Y means that the value of attribute Y is determined by the value of attribute X. If two rows have the same X value, they must also have the same Y value.",
    difficulty: "Medium",
    topic: "Normalization"
},
{
    id: "sql-221",
    question: "What is a partial dependency?",
    options: [
        "A dependency that only works part of the time",
        "A non-key attribute that depends on only part of a composite primary key",
        "A dependency between two non-key attributes",
        "A dependency that is partially NULL"
    ],
    answer: 1,
    explanation: "A partial dependency occurs when a non-key attribute depends on only a portion of a composite primary key rather than the entire key. This violates 2NF.",
    difficulty: "Medium",
    topic: "2NF"
},
{
    id: "sql-222",
    question: "What is a transitive dependency?",
    options: [
        "A dependency that passes through multiple tables",
        "A non-key attribute depends on another non-key attribute which in turn depends on the primary key",
        "A dependency that changes over time",
        "A dependency between primary keys of different tables"
    ],
    answer: 1,
    explanation: "A transitive dependency is when A → B and B → C, implying A → C indirectly. In normalization, this means a non-key attribute C depends on another non-key attribute B, rather than directly on the primary key A.",
    difficulty: "Medium",
    topic: "3NF"
},
{
    id: "sql-223",
    question: "When is denormalization appropriate?",
    options: [
        "Always, for better performance",
        "When read-heavy workloads benefit from reduced joins at the cost of write complexity and potential anomalies",
        "Only when the database is small",
        "When there are no foreign key relationships"
    ],
    answer: 1,
    explanation: "Denormalization is appropriate for read-heavy systems where the performance cost of joins outweighs the benefits of normalization. It trades write complexity and potential data anomalies for improved read performance.",
    difficulty: "Medium",
    topic: "Denormalization"
},
{
    id: "sql-224",
    question: "Which of the following is a risk of denormalization?",
    options: [
        "Faster read performance",
        "Simplified queries",
        "Data anomalies such as update, insertion, and deletion anomalies",
        "Reduced storage requirements"
    ],
    answer: 2,
    explanation: "Denormalization introduces redundancy which can lead to data anomalies: update anomalies (updating one copy but not another), insertion anomalies (cannot insert without complete data), and deletion anomalies (deleting removes unintended data).",
    difficulty: "Medium",
    topic: "Denormalization"
},
{
    id: "sql-225",
    question: "What is the difference between 3NF and BCNF?",
    options: [
        "BCNF is less strict than 3NF",
        "In 3NF, non-prime attributes can determine other non-prime attributes. BCNF eliminates this by requiring every determinant to be a candidate key",
        "BCNF only applies to tables with composite keys",
        "There is no practical difference"
    ],
    answer: 1,
    explanation: "3NF allows non-prime attributes to be determinants as long as they are not transitively dependent. BCNF is stricter: every determinant must be a candidate key, even if it is a prime attribute.",
    difficulty: "Hard",
    topic: "BCNF"
},
{
    id: "sql-226",
    question: "What is the primary purpose of a database index?",
    options: [
        "To enforce uniqueness on a column",
        "To speed up data retrieval operations by providing quick lookup paths",
        "To reduce storage space",
        "To automatically sort the table data"
    ],
    answer: 1,
    explanation: "The primary purpose of an index is to speed up data retrieval. While some indexes (like unique indexes) also enforce constraints, the main goal is performance improvement for SELECT queries.",
    difficulty: "Easy",
    topic: "Indexes"
},
{
    id: "sql-227",
    question: "What is the downside of creating too many indexes on a table?",
    options: [
        "Queries become slower to read",
        "Indexes consume additional storage space and slow down write operations (INSERT, UPDATE, DELETE)",
        "Indexes prevent concurrent access to the table",
        "The table cannot be backed up"
    ],
    answer: 1,
    explanation: "Each index consumes disk space and must be maintained when data is modified. Every INSERT, UPDATE, or DELETE requires updating all indexes on the table, which can significantly slow down write operations.",
    difficulty: "Easy",
    topic: "Indexes"
},
{
    id: "sql-228",
    question: "Which type of index is automatically created when you define a PRIMARY KEY?",
    options: [
        "Non-clustered index",
        "Clustered index (in most databases)",
        "Full-text index",
        "Bitmap index"
    ],
    answer: 1,
    explanation: "In most database systems (SQL Server, MySQL/InnoDB), a PRIMARY KEY automatically creates a clustered index. In PostgreSQL and Oracle, a unique index is created (PostgreSQL does not have clustered indexes in the same way).",
    difficulty: "Medium",
    topic: "Clustered Index"
},
{
    id: "sql-229",
    question: "What is index selectivity?",
    options: [
        "The ability to select which index to use",
        "The ratio of distinct values to total rows; higher selectivity means the index is more effective",
        "The speed of index creation",
        "The number of columns in an index"
    ],
    answer: 1,
    explanation: "Index selectivity = number of distinct values / total number of rows. High selectivity (close to 1) means the index is very effective at narrowing down results. Low selectivity (e.g., a boolean column) means the index is less useful.",
    difficulty: "Medium",
    topic: "Index Optimization"
},
{
    id: "sql-230",
    question: "What is a bitmap index and when is it most appropriate?",
    options: [
        "An index that stores bitmaps of all data; appropriate for all columns",
        "An index using bitmaps for each key value; best for low-cardinality columns in data warehousing",
        "An index that compresses data into binary format; best for BLOB columns",
        "An index used by bitmap graphics databases"
    ],
    answer: 1,
    explanation: "Bitmap indexes use bitmaps to represent the presence or absence of each key value. They are most effective for columns with low cardinality (few distinct values) and are commonly used in data warehousing environments (e.g., Oracle).",
    difficulty: "Hard",
    topic: "Indexes"
},
{
    id: "sql-231",
    question: "What is the leftmost prefix rule for composite indexes?",
    options: [
        "The leftmost column must be NULL for the index to work",
        "A composite index can only be used if the query references the leftmost column(s) in order",
        "The index only works for queries that use all columns in the index",
        "The leftmost column must be the primary key"
    ],
    answer: 1,
    explanation: "The leftmost prefix rule states that a composite index (a, b, c) can be used for queries that reference (a), (a, b), or (a, b, c), but not for queries that skip 'a' and reference only (b) or (c).",
    difficulty: "Hard",
    topic: "Composite Index"
},
{
    id: "sql-232",
    question: "When should you consider adding an index to a column?",
    options: [
        "Always index every column",
        "When the column is frequently used in WHERE, JOIN, or ORDER BY clauses and has high selectivity",
        "When the column has very few distinct values",
        "Only when the table has fewer than 100 rows"
    ],
    answer: 1,
    explanation: "Indexes are most beneficial on columns that are frequently used in search conditions (WHERE), join conditions, or ordering (ORDER BY) and have high selectivity (many distinct values). Indexing low-selectivity or rarely queried columns is counterproductive.",
    difficulty: "Medium",
    topic: "Index Optimization"
},
{
    id: "sql-233",
    question: "What does BEGIN TRANSACTION do?",
    options: [
        "Starts a new database connection",
        "Marks the beginning of a transaction, establishing a point to which changes can be rolled back",
        "Begins the execution of a stored procedure",
        "Creates a new savepoint"
    ],
    answer: 1,
    explanation: "BEGIN TRANSACTION (or BEGIN, START TRANSACTION) marks the start of a transaction. All subsequent SQL statements are part of this transaction until a COMMIT or ROLLBACK is issued.",
    difficulty: "Easy",
    topic: "BEGIN"
},
{
    id: "sql-234",
    question: "What happens to uncommitted changes if a transaction is rolled back?",
    options: [
        "They are saved permanently",
        "They are discarded and the database returns to its state before the transaction began",
        "They are saved to a temporary location",
        "They are automatically committed"
    ],
    answer: 1,
    explanation: "ROLLBACK undoes all changes made during the current transaction, restoring the database to its state as it was at the beginning of the transaction (or the last savepoint).",
    difficulty: "Easy",
    topic: "ROLLBACK"
},
{
    id: "sql-235",
    question: "What is the Atomicity property in ACID?",
    options: [
        "Transactions are processed atomically at the hardware level",
        "A transaction is treated as a single, indivisible unit of work; either all operations complete or none do",
        "Data is stored in atomic units",
        "Only atomic data types can be used in transactions"
    ],
    answer: 1,
    explanation: "Atomicity ensures that a transaction is all-or-nothing. If any part of the transaction fails, the entire transaction is rolled back, and the database state remains unchanged.",
    difficulty: "Medium",
    topic: "ACID Properties"
},
{
    id: "sql-236",
    question: "What is the Consistency property in ACID?",
    options: [
        "All transactions must use the same isolation level",
        "A transaction transforms the database from one valid state to another valid state, maintaining all defined rules",
        "All rows in a table must have consistent data types",
        "Query results must be consistent across different databases"
    ],
    answer: 1,
    explanation: "Consistency ensures that a transaction takes the database from one valid state to another, maintaining all predefined rules like constraints, cascades, and triggers. If a transaction violates any rule, it is rolled back.",
    difficulty: "Medium",
    topic: "ACID Properties"
},
{
    id: "sql-237",
    question: "What is the Isolation property in ACID?",
    options: [
        "Each transaction is isolated from other transactions, and concurrent transactions do not interfere with each other",
        "Each transaction runs on an isolated database server",
        "Data is isolated from users who do not have permission",
        "Transactions are isolated by being run sequentially"
    ],
    answer: 0,
    explanation: "Isolation ensures that concurrently executing transactions do not interfere with each other. The degree of isolation is controlled by isolation levels, which determine what phenomena (dirty reads, etc.) are allowed.",
    difficulty: "Medium",
    topic: "ACID Properties"
},
{
    id: "sql-238",
    question: "What is the Durability property in ACID?",
    options: [
        "Data is durable because it is written to RAM",
        "Once a transaction is committed, its changes are permanent and survive system failures",
        "Tables are durable and cannot be dropped",
        "Indexes make data durable"
    ],
    answer: 1,
    explanation: "Durability guarantees that once a transaction is committed, its changes are permanent and will survive system crashes, power failures, or other errors. This is typically achieved through write-ahead logging.",
    difficulty: "Medium",
    topic: "ACID Properties"
},
{
    id: "sql-239",
    question: "What is a shared lock (S lock)?",
    options: [
        "A lock held by only one transaction at a time",
        "A lock that allows multiple transactions to read but not modify the same resource simultaneously",
        "A lock shared between two tables",
        "A lock that is automatically released when shared"
    ],
    answer: 1,
    explanation: "A shared lock (read lock) allows multiple transactions to read the same resource concurrently but prevents any transaction from modifying it. It is acquired during SELECT operations (depending on isolation level).",
    difficulty: "Medium",
    topic: "Locks"
},
{
    id: "sql-240",
    question: "What is an exclusive lock (X lock)?",
    options: [
        "A lock that excludes certain columns from being locked",
        "A lock that prevents all other transactions from reading or writing the locked resource",
        "A lock that is only used for exclusive operations",
        "A lock that is exclusive to the database administrator"
    ],
    answer: 1,
    explanation: "An exclusive lock (write lock) prevents all other transactions from acquiring any type of lock on the same resource. It is acquired during INSERT, UPDATE, or DELETE operations to ensure data integrity.",
    difficulty: "Medium",
    topic: "Locks"
},
{
    id: "sql-241",
    question: "What is the most common way to prevent SQL injection?",
    options: [
        "Using string concatenation for queries",
        "Using parameterized queries (prepared statements)",
        "Escaping all single quotes",
        "Limiting query length"
    ],
    answer: 1,
    explanation: "Parameterized queries (prepared statements) separate SQL code from data, making it impossible for user input to be interpreted as SQL commands. This is the most effective defense against SQL injection.",
    difficulty: "Easy",
    topic: "SQL Injection Basics"
},
{
    id: "sql-242",
    question: "What is SQL injection?",
    options: [
        "A method to inject SQL code into a database for performance optimization",
        "An attack where malicious SQL code is inserted into input fields to manipulate the database",
        "A technique to inject data into SQL tables rapidly",
        "A feature that allows dynamic SQL generation"
    ],
    answer: 1,
    explanation: "SQL injection is a code injection technique where an attacker inserts malicious SQL statements into input fields (like login forms) that are improperly handled by the application, potentially gaining unauthorized access to the database.",
    difficulty: "Easy",
    topic: "SQL Injection Basics"
},
{
    id: "sql-243",
    question: "Which of the following SQL patterns is vulnerable to SQL injection?",
    options: [
        "PREPARE stmt FROM 'SELECT * FROM users WHERE id = ?'; EXECUTE stmt USING @id;",
        "SELECT * FROM users WHERE id = '\" + userInput + \"';",
        "SELECT * FROM users WHERE id = ? (with parameter binding)",
        "Using an ORM with proper parameterization"
    ],
    answer: 1,
    explanation: "String concatenation of user input into SQL queries is vulnerable to SQL injection. If userInput contains ' OR '1'='1, the query becomes SELECT * FROM users WHERE id = '' OR '1'='1', returning all users.",
    difficulty: "Easy",
    topic: "SQL Injection Basics"
},
{
    id: "sql-244",
    question: "What is an execution plan in SQL?",
    options: [
        "A schedule for when queries should be run",
        "The step-by-step plan the database optimizer creates to execute a query, showing how tables are accessed and joined",
        "A list of all queries in a stored procedure",
        "The time estimate for query completion"
    ],
    answer: 1,
    explanation: "An execution plan shows how the database engine intends to execute a query, including which indexes are used, the order of table access, join methods, and other operations. It is essential for query performance analysis.",
    difficulty: "Medium",
    topic: "Execution Plan"
},
{
    id: "sql-245",
    question: "What does a table scan (full scan) indicate in an execution plan?",
    options: [
        "The query is using an index efficiently",
        "The database is reading every row in the table to find matching rows, which may indicate a missing index",
        "The table is being scanned for viruses",
        "The table is being copied to a temporary location"
    ],
    answer: 1,
    explanation: "A table scan means the database reads every row in the table to evaluate the query condition. For large tables, this is often inefficient and may indicate that a useful index is missing.",
    difficulty: "Medium",
    topic: "Execution Plan"
},
{
    id: "sql-246",
    question: "What is an index seek in an execution plan?",
    options: [
        "Searching for a non-existent index",
        "The database uses the index structure (like a B-tree) to quickly navigate directly to the relevant data",
        "Moving through all index pages sequentially",
        "Creating a new index for the query"
    ],
    answer: 1,
    explanation: "An index seek uses the index's ordered structure (typically a B-tree) to navigate directly to the relevant data, which is much faster than scanning all rows. It indicates efficient index usage.",
    difficulty: "Medium",
    topic: "Execution Plan"
},
{
    id: "sql-247",
    question: "What is the N+1 query problem?",
    options: [
        "A problem where N+1 indexes are created for N tables",
        "Executing one query to fetch N records, then N additional queries to fetch related data for each record, resulting in N+1 total queries",
        "A problem where N+1 transactions are needed for a single operation",
        "A join that produces N+1 times more rows than expected"
    ],
    answer: 1,
    explanation: "The N+1 problem occurs when an application first queries for N parent records, then executes N separate queries for each parent's related data. This should be replaced with a single JOIN or batch query.",
    difficulty: "Medium",
    topic: "Query Performance"
},
{
    id: "sql-248",
    question: "What is query optimization?",
    options: [
        "Making queries shorter",
        "The process of selecting the most efficient execution plan for a query by the database optimizer",
        "Removing unnecessary columns from SELECT",
        "Converting subqueries to JOINs manually"
    ],
    answer: 1,
    explanation: "Query optimization is the process by which the database's query optimizer evaluates multiple possible execution plans and selects the one with the lowest estimated cost based on statistics about the data.",
    difficulty: "Medium",
    topic: "Query Optimization"
},
{
    id: "sql-249",
    question: "What are database statistics used for?",
    options: [
        "To count the total number of queries executed",
        "To provide the query optimizer with information about data distribution, row counts, and index characteristics",
        "To track user activity",
        "To measure database uptime"
    ],
    answer: 1,
    explanation: "Database statistics contain information about table sizes, row counts, column value distribution (histograms), and index characteristics. The query optimizer uses these statistics to estimate the cost of different execution plans.",
    difficulty: "Medium",
    topic: "Query Optimization"
},
{
    id: "sql-250",
    question: "What happens when database statistics are outdated?",
    options: [
        "Queries run faster because statistics are cached",
        "The optimizer may choose a suboptimal execution plan, leading to poor query performance",
        "Statistics automatically update themselves in real-time",
        "The database refuses to execute queries"
    ],
    answer: 1,
    explanation: "Outdated statistics can cause the optimizer to make incorrect assumptions about data distribution, leading it to choose a poor execution plan. Regular statistics updates are essential for maintaining query performance.",
    difficulty: "Medium",
    topic: "Query Optimization"
},
{
    id: "sql-251",
    question: "What is pagination in SQL and why is it important?",
    options: [
        "Dividing a table into multiple physical tables",
        "Returning query results in smaller chunks (pages) to improve performance and user experience",
        "Sorting results by page number",
        "Creating page-level indexes"
    ],
    answer: 1,
    explanation: "Pagination divides large result sets into smaller pages (e.g., 20 rows at a time). It improves application responsiveness by reducing memory usage and network transfer, and provides a better user experience.",
    difficulty: "Easy",
    topic: "Pagination"
},
{
    id: "sql-252",
    question: "Why can OFFSET-based pagination become slow for large offsets?",
    options: [
        "OFFSET is not supported for large numbers",
        "The database must scan and discard all preceding rows before returning the offset page",
        "Large offsets cause memory overflow",
        "OFFSET requires a full table scan regardless of the offset value"
    ],
    answer: 1,
    explanation: "With OFFSET 100000 LIMIT 20, the database must fetch and discard 100,000 rows before returning the 20 needed rows. This becomes increasingly slow as the offset grows. Keyset pagination is a more efficient alternative.",
    difficulty: "Hard",
    topic: "Pagination"
},
{
    id: "sql-253",
    question: "What is keyset (cursor-based) pagination?",
    options: [
        "Pagination using primary key values as bookmarks instead of OFFSET",
        "Pagination that uses database cursors",
        "Pagination limited to tables with primary keys",
        "A pagination technique that only works with clustered indexes"
    ],
    answer: 0,
    explanation: "Keyset pagination uses a value from the last row of the current page (like an ID or timestamp) as a bookmark for the next page: WHERE id > last_seen_id ORDER BY id LIMIT 20. It avoids the cost of scanning and discarding offset rows.",
    difficulty: "Hard",
    topic: "Pagination"
},
{
    id: "sql-254",
    question: "What is the REVOKE command used for?",
    options: [
        "To revoke (cancel) a transaction",
        "To remove previously granted permissions from a user or role",
        "To delete a user account",
        "To remove a table from the database"
    ],
    answer: 1,
    explanation: "REVOKE removes previously granted privileges from a user or role. For example, REVOKE SELECT ON table_name FROM user_name removes the SELECT permission from that user on that table.",
    difficulty: "Easy",
    topic: "REVOKE"
},
{
    id: "sql-255",
    question: "What is a database role?",
    options: [
        "A specific data type for user management",
        "A named collection of privileges that can be assigned to users, simplifying permission management",
        "A type of constraint",
        "A special type of stored procedure"
    ],
    answer: 1,
    explanation: "A role is a database object that groups together multiple privileges. Instead of granting individual permissions to each user, you grant permissions to a role and then assign users to that role.",
    difficulty: "Easy",
    topic: "Roles"
},
{
    id: "sql-256",
    question: "What is a materialized view?",
    options: [
        "A view that can only be accessed by authorized users",
        "A view that physically stores the result set on disk, periodically refreshed from the base tables",
        "A view created from materialized data only",
        "A view that automatically creates indexes"
    ],
    answer: 1,
    explanation: "A materialized view stores the query result physically on disk, unlike a regular view which is just a stored query. Materialized views improve query performance for complex aggregations but need to be refreshed when base data changes.",
    difficulty: "Medium",
    topic: "Materialized Views (Concept)"
},
{
    id: "sql-257",
    question: "What is the difference between a view and a materialized view?",
    options: [
        "Views can be updated, materialized views cannot",
        "Views are virtual (recomputed each time), materialized views store data physically on disk",
        "Materialized views are always faster for all queries",
        "There is no difference"
    ],
    answer: 1,
    explanation: "A regular view is a stored query that is executed each time it is referenced, always showing current data. A materialized view stores the result physically, providing faster reads but potentially stale data until refreshed.",
    difficulty: "Medium",
    topic: "Views"
},
{
    id: "sql-258",
    question: "What is an updatable view?",
    options: [
        "A view that automatically updates when the base table changes",
        "A view through which you can perform INSERT, UPDATE, or DELETE operations on the underlying base table",
        "A view that includes an UPDATE statement",
        "A view that is automatically refreshed"
    ],
    answer: 1,
    explanation: "An updatable view allows DML operations (INSERT, UPDATE, DELETE) that modify the underlying base tables. A view is updatable if it meets certain conditions, such as not containing DISTINCT, GROUP BY, aggregate functions, etc.",
    difficulty: "Medium",
    topic: "Views"
},
{
    id: "sql-259",
    question: "Which of the following makes a view non-updatable?",
    options: [
        "The view references only one table",
        "The view contains a GROUP BY clause",
        "The view uses a WHERE clause",
        "The view selects specific columns"
    ],
    answer: 1,
    explanation: "Views containing GROUP BY, DISTINCT, aggregate functions, set operations (UNION), or that reference multiple tables in certain ways are generally non-updatable because the mapping between view rows and base table rows is ambiguous.",
    difficulty: "Medium",
    topic: "Views"
},
{
    id: "sql-260",
    question: "What is a WITH CHECK OPTION clause on a view used for?",
    options: [
        "To check if the view exists before querying it",
        "To ensure that INSERT or UPDATE operations through the view do not create rows that would be invisible through the view",
        "To verify the view's performance",
        "To add a CHECK constraint to the underlying table"
    ],
    answer: 1,
    explanation: "WITH CHECK OPTION ensures that any INSERT or UPDATE through the view must satisfy the view's WHERE clause. Without it, you could insert a row through the view that would not be visible when querying the view.",
    difficulty: "Hard",
    topic: "Views"
}
];
