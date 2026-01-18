// Python Quiz Questions - Extracted from Ahmed Eid (ALFANAN) PDF
// MADE BY ALF: AHMED EID | NOTE: ALF = ALFANAN

export interface Question {
  id: number;
  question: string;
  type: "mcq" | "complete" | "definition" | "truefalse";
  choices: string[];
  correctAnswer: number;
  explanation: string;
  code?: string;
}

export const quizQuestions: Question[] = [
  // MCQ Questions
  {
    id: 1,
    question: "When should you use a for loop instead of a while loop?",
    type: "mcq",
    choices: [
      "When you know the number of iterations in advance",
      "When the condition is unknown",
      "When you need an infinite loop",
      "When the loop depends on user input"
    ],
    correctAnswer: 0,
    explanation: "A for loop is ideal when iterating over a sequence or when you know exactly how many times to repeat an action.",
    code: "for i in range(5):\n    print(i)"
  },
  {
    id: 2,
    question: "What is an Exception in Python?",
    type: "definition",
    choices: [
      "An error that occurs during program execution",
      "A type of variable",
      "A function parameter",
      "A loop control statement"
    ],
    correctAnswer: 0,
    explanation: "An exception is an error that occurs during program execution, disrupting the normal flow. Examples: ZeroDivisionError, ValueError, TypeError, IndexError."
  },
  {
    id: 3,
    question: "Compare between dictionary and set in Python. Which statement is correct?",
    type: "mcq",
    choices: [
      "Dictionary stores key-value pairs, Set stores unique elements",
      "Both store key-value pairs",
      "Set is ordered, Dictionary is unordered",
      "Dictionary allows duplicates, Set doesn't"
    ],
    correctAnswer: 0,
    explanation: "Dictionary stores key-value pairs using {}. Set stores unique, unordered elements using {}. Use when you need unique values without duplicates."
  },
  {
    id: 4,
    question: "What does OOP (Object Oriented Programming) mean?",
    type: "mcq",
    choices: [
      "A way to write faster code",
      "A programming paradigm based on objects and classes",
      "A Python library for graphics",
      "A method to optimize loops"
    ],
    correctAnswer: 1,
    explanation: "OOP is a programming approach that organizes code into objects that contain both data (attributes) and functions (methods)."
  },
  {
    id: 5,
    question: "What is the difference between break and continue?",
    type: "mcq",
    choices: [
      "break exits the loop, continue skips to next iteration",
      "break skips one iteration, continue exits the loop",
      "They do exactly the same thing",
      "break is for while, continue is for for loops"
    ],
    correctAnswer: 0,
    explanation: "break terminates the entire loop, while continue only skips the current iteration and moves to the next one."
  },
  {
    id: 6,
    question: "What is the purpose of Indentation in Python?",
    type: "mcq",
    choices: [
      "To make code look pretty only",
      "To define code blocks and structure",
      "To add comments to code",
      "To improve code performance"
    ],
    correctAnswer: 1,
    explanation: "In Python, indentation is syntactically required to define the scope of loops, functions, classes, and conditionals."
  },
  {
    id: 7,
    question: "Which statement is TRUE about Python data structures?",
    type: "mcq",
    choices: [
      "Tuples are mutable and lists are immutable",
      "Sets allow duplicate values",
      "Dictionary keys must be unique",
      "Lists cannot be nested"
    ],
    correctAnswer: 2,
    explanation: "In a dictionary, each key must be unique. If you try to use the same key twice, the second value will overwrite the first."
  },
  {
    id: 8,
    question: "What will be the output?\n\nnumbers = [1, 3, 5, 7, 9]\nnumbers.append(11)\nnumbers.remove(3)\nprint(numbers)",
    type: "mcq",
    choices: [
      "[1, 5, 7, 9, 11]",
      "[1, 3, 5, 7, 9, 11]",
      "[5, 7, 9, 11]",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "append(11) adds 11 to the end, remove(3) removes the first occurrence of 3."
  },
  {
    id: 9,
    question: "What is the output?\n\ndays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']\nprint(days[2])",
    type: "mcq",
    choices: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday"
    ],
    correctAnswer: 2,
    explanation: "Index 2 is the third element (indexing starts at 0)."
  },
  {
    id: 10,
    question: "What is the output?\n\nA = {1, 2, 3, 4}\nB = {3, 4, 5, 6}\nprint(A | B)",
    type: "mcq",
    choices: [
      "{1, 2, 3, 4, 5, 6}",
      "{3, 4}",
      "{1, 2}",
      "{5, 6}"
    ],
    correctAnswer: 0,
    explanation: "The | operator performs union of sets, combining all unique elements from both sets."
  },
  {
    id: 11,
    question: "What is the output?\n\ndef my_function(*args):\n    print(args[0])\nmy_function('Emil', 'Tobias', 'Linus')",
    type: "mcq",
    choices: [
      "Emil",
      "Tobias",
      "Linus",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "*args creates a tuple of all passed arguments. args[0] is the first element."
  },
  {
    id: 12,
    question: "What is the output?\n\ndef factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n - 1)\nprint(factorial(3))",
    type: "mcq",
    choices: [
      "3",
      "6",
      "1",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "3 * 2 * 1 = 6. This is a recursive function calculating factorial."
  },
  {
    id: 13,
    question: "What is the output?\n\nfor x in range(3, 10, 2):\n    print(x)",
    type: "mcq",
    choices: [
      "3 5 7",
      "3 5 7 9",
      "3 4 5 6 7 8 9",
      "4 6 8 10"
    ],
    correctAnswer: 1,
    explanation: "range(3, 10, 2) starts at 3, goes up to (not including) 10, stepping by 2."
  },
  {
    id: 14,
    question: "What is the output?\n\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)",
    type: "mcq",
    choices: [
      "0 1 2",
      "0 1 2 3 4",
      "0 1 2 3",
      "4 3 2 1 0"
    ],
    correctAnswer: 0,
    explanation: "break exits the loop when i equals 3, so only 0, 1, 2 are printed."
  },
  {
    id: 15,
    question: "What is the output?\n\nstudents = ['Ali', 'Omar', 'Hoda', 'Sara', 'Khaled']\nprint(students[-1])",
    type: "mcq",
    choices: [
      "Ali",
      "Sara",
      "Khaled",
      "Error"
    ],
    correctAnswer: 2,
    explanation: "Negative index -1 refers to the last element of the list."
  },
  {
    id: 16,
    question: "What is the output?\n\nfrom math import sqrt\nprint(sqrt(16))",
    type: "mcq",
    choices: [
      "4.0",
      "4",
      "16",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "sqrt() returns a float. The square root of 16 is 4.0."
  },
  {
    id: 17,
    question: "What is the output?\n\ntry:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')",
    type: "mcq",
    choices: [
      "0",
      "Cannot divide by zero",
      "Error",
      "1"
    ],
    correctAnswer: 1,
    explanation: "The except block catches the ZeroDivisionError and prints the message."
  },
  {
    id: 18,
    question: "What is the output?\n\nstudents = ['Ali', 'Omar', 'Hoda', 'Sara']\nprint(students[1:3])",
    type: "mcq",
    choices: [
      "['Ali', 'Omar']",
      "['Omar', 'Hoda']",
      "['Omar', 'Hoda', 'Sara']",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "Slicing [1:3] gets elements from index 1 up to (not including) index 3."
  },
  {
    id: 19,
    question: "What is the output?\n\ndef myfunc():\n    return lambda a: a * 2\ndoubler = myfunc()\nprint(doubler(11))",
    type: "mcq",
    choices: [
      "11",
      "22",
      "Error",
      "None"
    ],
    correctAnswer: 1,
    explanation: "The lambda function doubles its input. 11 * 2 = 22."
  },
  {
    id: 20,
    question: "What is the primary role of an operating system?",
    type: "mcq",
    choices: [
      "To perform computations directly",
      "Interface between user and computer hardware",
      "To store data permanently",
      "To compile programming languages"
    ],
    correctAnswer: 1,
    explanation: "The operating system acts as an interface between the user and hardware."
  },
  {
    id: 21,
    question: "An algorithm must include which of the following?",
    type: "mcq",
    choices: [
      "Only the set of outputs",
      "A sequence of operations that will produce the output",
      "Complex and ambiguous steps",
      "Partial specification of the problem"
    ],
    correctAnswer: 1,
    explanation: "Algorithms require a sequence of simple, precise operations."
  },
  {
    id: 22,
    question: "Which is an advantage of compilation over interpretation?",
    type: "mcq",
    choices: [
      "Better diagnostics for errors",
      "Better performance",
      "More flexibility at runtime",
      "Supports code modification on the fly"
    ],
    correctAnswer: 1,
    explanation: "Compilation provides better performance as decisions are made at compile time."
  },
  {
    id: 23,
    question: "What is a byte composed of?",
    type: "mcq",
    choices: [
      "4 bits",
      "8 bits",
      "1024 bits",
      "2 bits"
    ],
    correctAnswer: 1,
    explanation: "A byte is 8 bits, which is the standard storage for one character."
  },
  {
    id: 24,
    question: "What does the assignment operation do?",
    type: "mcq",
    choices: [
      "Adds two values",
      "Changes the value in a variable",
      "Compares two values",
      "Multiplies values"
    ],
    correctAnswer: 1,
    explanation: "Assignment changes the value stored in a variable, like counter = counter + 1."
  },
  {
    id: 25,
    question: "Else executes when:",
    type: "mcq",
    choices: [
      "Condition is true",
      "Condition is false",
      "Program ends",
      "Always"
    ],
    correctAnswer: 1,
    explanation: "The else block executes when the if condition is false."
  },
  {
    id: 26,
    question: "Keyword to check another condition if first is false:",
    type: "mcq",
    choices: [
      "elseif",
      "elif",
      "else if",
      "check"
    ],
    correctAnswer: 1,
    explanation: "In Python, elif is used to check another condition if the first is false."
  },
  {
    id: 27,
    question: "What happens if indentation is incorrect in an if block?",
    type: "mcq",
    choices: [
      "Runs normally",
      "Error occurs",
      "Ignores it",
      "Output is 0"
    ],
    correctAnswer: 1,
    explanation: "Python raises an IndentationError when indentation is incorrect."
  },
  {
    id: 28,
    question: "Which keyword is used inside loops to skip to next iteration?",
    type: "mcq",
    choices: [
      "break",
      "continue",
      "pass",
      "skip"
    ],
    correctAnswer: 1,
    explanation: "continue skips the current iteration and moves to the next one."
  },
  {
    id: 29,
    question: "Which keyword exits a loop entirely?",
    type: "mcq",
    choices: [
      "continue",
      "break",
      "pass",
      "exit"
    ],
    correctAnswer: 1,
    explanation: "break terminates the loop completely and continues with code after the loop."
  },
  {
    id: 30,
    question: "Is a tuple mutable?",
    type: "truefalse",
    choices: [
      "Yes, tuples can be modified",
      "No, tuples are immutable",
      "Only if they contain lists",
      "Depends on the content"
    ],
    correctAnswer: 1,
    explanation: "Tuples are immutable - they cannot be changed after creation."
  },
  // Complete Questions
  {
    id: 31,
    question: "Complete: if x > 0: print('Positive') elif x < 0: print('Negative') else: print('___')",
    type: "complete",
    choices: ["Zero", "Nothing", "Null", "Empty"],
    correctAnswer: 0,
    explanation: "When x is neither positive nor negative, it must be zero."
  },
  {
    id: 32,
    question: "Complete for even/odd: if num % 2 == 0: print('Even') else: print('___')",
    type: "complete",
    choices: ["Odd", "Even", "Zero", "None"],
    correctAnswer: 0,
    explanation: "If a number is not even (divisible by 2), it is odd."
  },
  {
    id: 33,
    question: "Complete: for i in ___(5): print(i)",
    type: "complete",
    choices: ["range", "list", "loop", "iterate"],
    correctAnswer: 0,
    explanation: "range() is the function used to generate a sequence of numbers for iteration."
  },
  {
    id: 34,
    question: "Complete: First element of fruits list: fruits[___]",
    type: "complete",
    choices: ["0", "1", "-1", "first"],
    correctAnswer: 0,
    explanation: "In Python, indexing starts at 0. The first element is at index 0."
  },
  {
    id: 35,
    question: "Complete: Last element of fruits list: fruits[___]",
    type: "complete",
    choices: ["-1", "0", "last", "-0"],
    correctAnswer: 0,
    explanation: "Negative index -1 refers to the last element in Python."
  },
  {
    id: 36,
    question: "Complete: To convert string to integer: x = ___('123')",
    type: "complete",
    choices: ["int", "str", "float", "number"],
    correctAnswer: 0,
    explanation: "int() converts a string or float to an integer."
  },
  {
    id: 37,
    question: "Complete: To convert integer to string: s = ___(456)",
    type: "complete",
    choices: ["str", "int", "string", "text"],
    correctAnswer: 0,
    explanation: "str() converts any value to a string."
  },
  {
    id: 38,
    question: "Complete: To handle exceptions: ___: result = 10/0 except:",
    type: "complete",
    choices: ["try", "catch", "handle", "error"],
    correctAnswer: 0,
    explanation: "try block is used to wrap code that might raise an exception."
  },
  {
    id: 39,
    question: "Complete: To import a module: ___ math",
    type: "complete",
    choices: ["import", "include", "require", "use"],
    correctAnswer: 0,
    explanation: "import is the keyword used to include modules in Python."
  },
  {
    id: 40,
    question: "Complete: Logical operator for 'and': a ___ b",
    type: "complete",
    choices: ["and", "&&", "&", "AND"],
    correctAnswer: 0,
    explanation: "Python uses the word 'and' as the logical AND operator."
  },
  {
    id: 41,
    question: "Complete: If function has no return, it returns ___",
    type: "complete",
    choices: ["None", "0", "null", "undefined"],
    correctAnswer: 0,
    explanation: "Functions without an explicit return statement return None."
  },
  {
    id: 42,
    question: "Complete: To override a method: def greet(___):",
    type: "complete",
    choices: ["self", "this", "me", "object"],
    correctAnswer: 0,
    explanation: "self is used as the first parameter in methods to refer to the instance."
  },
  {
    id: 43,
    question: "Complete: To get user input: name = ___()",
    type: "complete",
    choices: ["input", "read", "get", "scan"],
    correctAnswer: 0,
    explanation: "input() function is used to get user input from the console."
  },
  {
    id: 44,
    question: "Complete: To get current year: datetime.datetime.now().___",
    type: "complete",
    choices: ["year", "getYear", "currentYear", "y"],
    correctAnswer: 0,
    explanation: "The year attribute returns the current year from a datetime object."
  },
  {
    id: 45,
    question: "Complete: Create alias: import mymodule as ___",
    type: "complete",
    choices: ["mx", "mymod", "m", "module"],
    correctAnswer: 0,
    explanation: "You can create any short alias for a module using 'as' keyword."
  },
  {
    id: 46,
    question: "Complete: To print union of sets A and B: print(A.___(B))",
    type: "complete",
    choices: ["union", "merge", "join", "combine"],
    correctAnswer: 0,
    explanation: "The union() method returns a set containing all elements from both sets."
  },
  {
    id: 47,
    question: "Complete: To print intersection: print(A.___(B))",
    type: "complete",
    choices: ["intersection", "common", "shared", "both"],
    correctAnswer: 0,
    explanation: "intersection() returns elements that exist in both sets."
  },
  {
    id: 48,
    question: "Complete: To print difference: print(A.___(B))",
    type: "complete",
    choices: ["difference", "minus", "subtract", "diff"],
    correctAnswer: 0,
    explanation: "difference() returns elements in A that are not in B."
  },
  {
    id: 49,
    question: "Complete: The keyword elif means ___",
    type: "complete",
    choices: ["else if", "else", "if else", "otherwise if"],
    correctAnswer: 0,
    explanation: "elif is short for 'else if' - checks another condition if previous was false."
  },
  {
    id: 50,
    question: "Complete: Nested if means if inside ___",
    type: "complete",
    choices: ["if", "else", "loop", "function"],
    correctAnswer: 0,
    explanation: "Nested if is when you have an if statement inside another if statement."
  },
  // Definition Questions
  {
    id: 51,
    question: "Define: What is an algorithm?",
    type: "definition",
    choices: [
      "A sequence of steps for computation",
      "A programming language",
      "A type of computer",
      "A data structure"
    ],
    correctAnswer: 0,
    explanation: "An algorithm is a sequence of steps carried out during a computation, with inputs, problem specification, outputs, and simple precise steps."
  },
  {
    id: 52,
    question: "Define: What is a programming language?",
    type: "definition",
    choices: [
      "A set of rules and symbols to communicate with computer",
      "A natural language",
      "A type of hardware",
      "An operating system"
    ],
    correctAnswer: 0,
    explanation: "A programming language is a set of rules, symbols, and characters that allows the user to communicate with the computer."
  },
  {
    id: 53,
    question: "Define: What is an IDE?",
    type: "definition",
    choices: [
      "A tool for developing code like Spyder, PyCharm, VS Code",
      "A programming language",
      "An operating system",
      "A web browser"
    ],
    correctAnswer: 0,
    explanation: "IDE (Integrated Development Environment) is a tool for developing code, like Spyder, Jupyter, PyCharm, VS Code."
  },
  {
    id: 54,
    question: "Define: What is the difference between compilation and interpretation?",
    type: "definition",
    choices: [
      "Compilation translates before running; interpretation executes line by line",
      "They are the same",
      "Compilation is slower",
      "Interpretation is only for Python"
    ],
    correctAnswer: 0,
    explanation: "Compilation translates code before running (better performance); interpretation executes line by line (more flexible)."
  },
  {
    id: 55,
    question: "Define a list in Python.",
    type: "definition",
    choices: [
      "A mutable, ordered collection of elements",
      "An immutable sequence",
      "A key-value store",
      "A unique set of values"
    ],
    correctAnswer: 0,
    explanation: "A list is a mutable, ordered collection of elements that can be of different types."
  },
  {
    id: 56,
    question: "Define a tuple in Python.",
    type: "definition",
    choices: [
      "An immutable, ordered collection of elements",
      "A mutable list",
      "A dictionary",
      "A function"
    ],
    correctAnswer: 0,
    explanation: "A tuple is an immutable, ordered collection of elements that can be of different types."
  },
  {
    id: 57,
    question: "Define a set in Python.",
    type: "definition",
    choices: [
      "An unordered, mutable collection of unique elements",
      "An ordered list",
      "A key-value pair collection",
      "A type of loop"
    ],
    correctAnswer: 0,
    explanation: "A set is an unordered, mutable collection of unique, immutable elements."
  },
  {
    id: 58,
    question: "What is the difference between list and tuple?",
    type: "definition",
    choices: [
      "List is mutable, tuple is immutable; list uses [], tuple uses ()",
      "They are the same",
      "Tuple is faster to modify",
      "List cannot store numbers"
    ],
    correctAnswer: 0,
    explanation: "List is mutable and uses [], tuple is immutable and uses ()."
  },
  {
    id: 59,
    question: "What is the difference between set and list?",
    type: "definition",
    choices: [
      "Set is unordered with no duplicates; list is ordered with duplicates allowed",
      "They are identical",
      "Set is faster for all operations",
      "List cannot be modified"
    ],
    correctAnswer: 0,
    explanation: "Set is unordered, no duplicates, no index; list is ordered, allows duplicates, indexed."
  },
  {
    id: 60,
    question: "Define unpacking in tuple.",
    type: "definition",
    choices: [
      "Assigning tuple elements to variables",
      "Adding elements to tuple",
      "Converting tuple to list",
      "Removing duplicates"
    ],
    correctAnswer: 0,
    explanation: "Unpacking assigns tuple elements to variables, e.g., x, y = tup."
  },
  {
    id: 61,
    question: "What is a module in Python?",
    type: "definition",
    choices: [
      "A file containing functions and variables",
      "A type of loop",
      "A data structure",
      "An error type"
    ],
    correctAnswer: 0,
    explanation: "A module is a file containing a set of functions and variables that you can include in your application."
  },
  {
    id: 62,
    question: "What is exception handling in Python?",
    type: "definition",
    choices: [
      "A mechanism to handle runtime errors using try/except",
      "A type of loop",
      "A data structure",
      "A way to define functions"
    ],
    correctAnswer: 0,
    explanation: "Exception handling uses try, except, else, and finally blocks to handle runtime errors, allowing the program to continue instead of crashing."
  },
  {
    id: 63,
    question: "What is the range() function?",
    type: "definition",
    choices: [
      "Generates a sequence of numbers",
      "Creates a list",
      "Defines a function",
      "Handles exceptions"
    ],
    correctAnswer: 0,
    explanation: "The range() function generates a sequence of numbers. Example: for i in range(5)."
  },
  {
    id: 64,
    question: "What is the finally block?",
    type: "definition",
    choices: [
      "Executes regardless of whether an exception occurred",
      "Only runs if there's an error",
      "Defines a function",
      "Ends the program"
    ],
    correctAnswer: 0,
    explanation: "The finally block executes regardless of whether an exception occurred, useful for cleanup code."
  },
  {
    id: 65,
    question: "What is the Python interpreter?",
    type: "definition",
    choices: [
      "The program that runs Python code",
      "A text editor",
      "A type of variable",
      "A debugging tool"
    ],
    correctAnswer: 0,
    explanation: "The Python interpreter is the program that reads and executes Python code."
  },
  {
    id: 66,
    question: "Explain the difference between = and == in Python.",
    type: "definition",
    choices: [
      "= assigns a value; == compares equality",
      "They are the same",
      "== assigns a value; = compares",
      "Both are for comparison"
    ],
    correctAnswer: 0,
    explanation: "= is the assignment operator; == is the equality comparison operator."
  },
  {
    id: 67,
    question: "What is string slicing?",
    type: "definition",
    choices: [
      "Extracting a portion of a string using indices",
      "Splitting a string by delimiter",
      "Joining two strings",
      "Converting string to list"
    ],
    correctAnswer: 0,
    explanation: "String slicing extracts a portion of a string using [start:end] notation."
  },
  {
    id: 68,
    question: "What is a nested loop?",
    type: "definition",
    choices: [
      "A loop inside another loop",
      "A loop that never ends",
      "A loop without a condition",
      "A loop that runs once"
    ],
    correctAnswer: 0,
    explanation: "A nested loop is a loop inside another loop."
  },
  {
    id: 69,
    question: "What is the purpose of the else clause in a loop?",
    type: "definition",
    choices: [
      "Executes when loop ends normally (without break)",
      "Handles errors",
      "Skips iterations",
      "Ends the loop early"
    ],
    correctAnswer: 0,
    explanation: "The else clause in a loop executes when the loop completes normally without hitting a break."
  },
  {
    id: 70,
    question: "Explain truthy/falsy values.",
    type: "definition",
    choices: [
      "Values evaluated as True/False in conditions",
      "Boolean variables only",
      "String values",
      "Numeric comparisons"
    ],
    correctAnswer: 0,
    explanation: "Truthy/falsy values are non-boolean values that evaluate as True/False in conditions. Example: 0 is falsy, 1 is truthy."
  },
  {
    id: 71,
    question: "Explain the difference between append and insert.",
    type: "definition",
    choices: [
      "append adds at end; insert adds at specific index",
      "They are the same",
      "insert adds at end",
      "append adds at beginning"
    ],
    correctAnswer: 0,
    explanation: "append() adds an element at the end; insert() adds at a specific index."
  },
  {
    id: 72,
    question: "Define Class and Object in Python.",
    type: "definition",
    choices: [
      "Class is a blueprint; Object is an instance of a class",
      "They are the same thing",
      "Object is a template",
      "Class cannot be created"
    ],
    correctAnswer: 0,
    explanation: "Class is a blueprint/template defining structure and behavior; Object is a specific instance created from the class."
  },
  {
    id: 73,
    question: "Define Exception in Python.",
    type: "definition",
    choices: [
      "A runtime error that occurs when Python cannot execute a statement",
      "A type of variable",
      "A loop keyword",
      "A function parameter"
    ],
    correctAnswer: 0,
    explanation: "An exception is a runtime error that occurs when Python cannot execute a statement."
  },
  {
    id: 74,
    question: "Define when to use try.",
    type: "definition",
    choices: [
      "To test a block of code for errors",
      "To define a function",
      "To create a loop",
      "To import a module"
    ],
    correctAnswer: 0,
    explanation: "Use try to test a block of code for errors that might occur during execution."
  },
  {
    id: 75,
    question: "Define meaning of except and finally.",
    type: "definition",
    choices: [
      "except handles errors; finally executes regardless",
      "Both handle errors",
      "They are optional",
      "finally runs first"
    ],
    correctAnswer: 0,
    explanation: "except handles the error if one occurs; finally executes regardless of whether an error occurred."
  },
  // More MCQ Questions
  {
    id: 76,
    question: "What is the correct syntax for an if statement in Python?",
    type: "mcq",
    choices: [
      "if (x > 5)",
      "if x > 5:",
      "if x > 5 then",
      "if x > 5 {"
    ],
    correctAnswer: 1,
    explanation: "Python uses no parentheses and ends with a colon. Proper syntax: if x > 5:"
  },
  {
    id: 77,
    question: "What does pass do?",
    type: "mcq",
    choices: [
      "Exits the loop",
      "Skips to next iteration",
      "Does nothing; acts as a placeholder",
      "Raises an error"
    ],
    correctAnswer: 2,
    explanation: "pass is a null operation; it does nothing and acts as a placeholder."
  },
  {
    id: 78,
    question: "In nested if, inner if executes when outer condition is:",
    type: "mcq",
    choices: [
      "false",
      "true",
      "undefined",
      "always"
    ],
    correctAnswer: 1,
    explanation: "The inner if only executes when the outer condition evaluates to true."
  },
  {
    id: 79,
    question: "What is returned by: def myfunc(): x = 300 (no return statement)?",
    type: "mcq",
    choices: [
      "300",
      "None",
      "0",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "Functions without an explicit return statement return None."
  },
  {
    id: 80,
    question: "What is negative indexing in Python?",
    type: "mcq",
    choices: [
      "Indexing that starts from the end",
      "Indexing with negative numbers as values",
      "Invalid indexing",
      "Indexing in reverse order"
    ],
    correctAnswer: 0,
    explanation: "Negative indexing starts from the end: -1 is last, -2 is second to last, etc."
  },
  {
    id: 81,
    question: "Which interpretation supports late binding?",
    type: "mcq",
    choices: [
      "Interpretation",
      "Compilation",
      "Both",
      "Neither"
    ],
    correctAnswer: 0,
    explanation: "Interpretation supports delaying decisions until runtime (late binding)."
  },
  {
    id: 82,
    question: "What is the output of: print(type(5.0))?",
    type: "mcq",
    choices: [
      "<class 'int'>",
      "<class 'float'>",
      "<class 'str'>",
      "5.0"
    ],
    correctAnswer: 1,
    explanation: "5.0 is a floating-point number, so its type is float."
  },
  {
    id: 83,
    question: "Which of these is NOT a Python data type?",
    type: "mcq",
    choices: [
      "list",
      "tuple",
      "array",
      "set"
    ],
    correctAnswer: 2,
    explanation: "array is not a built-in Python data type. Lists, tuples, and sets are."
  },
  {
    id: 84,
    question: "What does len() function return?",
    type: "mcq",
    choices: [
      "The number of elements",
      "The last element",
      "The first element",
      "The sum of elements"
    ],
    correctAnswer: 0,
    explanation: "len() returns the number of items in an object (list, string, tuple, etc.)."
  },
  {
    id: 85,
    question: "What is the output of: print('Hello'[1])?",
    type: "mcq",
    choices: [
      "H",
      "e",
      "l",
      "o"
    ],
    correctAnswer: 1,
    explanation: "Index 1 returns the second character. 'Hello'[1] is 'e'."
  },
  {
    id: 86,
    question: "Which method adds an element at a specific position in a list?",
    type: "mcq",
    choices: [
      "append()",
      "insert()",
      "add()",
      "extend()"
    ],
    correctAnswer: 1,
    explanation: "insert(index, element) adds an element at the specified position."
  },
  {
    id: 87,
    question: "What is the output of: print(10 % 3)?",
    type: "mcq",
    choices: [
      "1",
      "3",
      "10",
      "3.33"
    ],
    correctAnswer: 0,
    explanation: "% is the modulo operator. 10 % 3 = 1 (remainder of 10 ÷ 3)."
  },
  {
    id: 88,
    question: "What is the output of: print(2 ** 3)?",
    type: "mcq",
    choices: [
      "6",
      "8",
      "5",
      "23"
    ],
    correctAnswer: 1,
    explanation: "** is the exponentiation operator. 2 ** 3 = 2³ = 8."
  },
  {
    id: 89,
    question: "What is the output of: print(10 // 3)?",
    type: "mcq",
    choices: [
      "3",
      "3.33",
      "1",
      "10"
    ],
    correctAnswer: 0,
    explanation: "// is floor division. 10 // 3 = 3 (discards the remainder)."
  },
  {
    id: 90,
    question: "Which operator is used for string concatenation?",
    type: "mcq",
    choices: [
      "+",
      "&",
      ".",
      ","
    ],
    correctAnswer: 0,
    explanation: "The + operator concatenates strings in Python. 'Hello' + 'World' = 'HelloWorld'."
  },
  {
    id: 91,
    question: "What is the output of: print(bool(0))?",
    type: "mcq",
    choices: [
      "True",
      "False",
      "0",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "0 is a falsy value in Python. bool(0) returns False."
  },
  {
    id: 92,
    question: "What is the output of: print(bool([]))?",
    type: "mcq",
    choices: [
      "True",
      "False",
      "[]",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "An empty list is falsy. bool([]) returns False."
  },
  {
    id: 93,
    question: "What is the output of: print(bool('hello'))?",
    type: "mcq",
    choices: [
      "True",
      "False",
      "hello",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "A non-empty string is truthy. bool('hello') returns True."
  },
  {
    id: 94,
    question: "What does the pop() method do on a list?",
    type: "mcq",
    choices: [
      "Removes and returns the last element",
      "Adds an element",
      "Sorts the list",
      "Clears the list"
    ],
    correctAnswer: 0,
    explanation: "pop() removes and returns the last element (or element at specified index)."
  },
  {
    id: 95,
    question: "What does the clear() method do?",
    type: "mcq",
    choices: [
      "Removes all elements from the list",
      "Removes the first element",
      "Removes the last element",
      "Sorts the list"
    ],
    correctAnswer: 0,
    explanation: "clear() removes all elements from the list, making it empty."
  },
  {
    id: 96,
    question: "What is the output of: print('python'.upper())?",
    type: "mcq",
    choices: [
      "Python",
      "PYTHON",
      "python",
      "pYTHON"
    ],
    correctAnswer: 1,
    explanation: "upper() converts all characters to uppercase."
  },
  {
    id: 97,
    question: "What is the output of: print('PYTHON'.lower())?",
    type: "mcq",
    choices: [
      "Python",
      "PYTHON",
      "python",
      "pYTHON"
    ],
    correctAnswer: 2,
    explanation: "lower() converts all characters to lowercase."
  },
  {
    id: 98,
    question: "What is the output of: print('hello world'.title())?",
    type: "mcq",
    choices: [
      "Hello World",
      "HELLO WORLD",
      "hello world",
      "Hello world"
    ],
    correctAnswer: 0,
    explanation: "title() capitalizes the first letter of each word."
  },
  {
    id: 99,
    question: "What is the output of: print('hello'.replace('l', 'x'))?",
    type: "mcq",
    choices: [
      "hexxo",
      "hexlo",
      "hello",
      "xello"
    ],
    correctAnswer: 0,
    explanation: "replace() replaces all occurrences of 'l' with 'x'."
  },
  {
    id: 100,
    question: "What is the output of: print('hello world'.split())?",
    type: "mcq",
    choices: [
      "['hello', 'world']",
      "'hello world'",
      "['h', 'e', 'l', 'l', 'o']",
      "Error"
    ],
    correctAnswer: 0,
    explanation: "split() splits a string by whitespace into a list of words."
  }
];

// Shuffle function for randomizing questions
export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
