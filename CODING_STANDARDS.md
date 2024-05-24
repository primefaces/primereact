# Coding Standards

## Declaration Rules

### Using Explanatory Names for Variables

    // Bad
    let x = 10; // What does "x" represent?

    // Good
    let numberOfUsers = 10; // Clearly states what the variable represents

    // Bad
    let y = true; // What does "y" represent?

    // Good
    let isLoggedIn = true; // Clearly states the user's login status

### Using Verbs for Boolean Variables

    // Bad
    let loggedIn = false;
    let userAccess = true;

    // Good
    let isLoggedIn = false;
    let canAccess = true;
    let isActive = true;
    let hasPermission = false;

### Declarations on Top

    function exampleFunction() {
        let x; // Declare variable at the top
        let y; // Declare variable at the top

        // Function body
        // Code that uses variables x and y
    }

### One Declaration per Line

    \\Bad
    let x,y,z;

    \\Good
    let x;
    let y;
    let z;

### Initialize Variables

    let hasBorder = false;
    let repeatedTimes = 0;
    let images = [];

### Declare Arrays with Const

    \\Bad
    let images = ['img1', 'img2', 'img3'];
    images = 3; \\Converted images to number

    \\Good
    const images = ['img1', 'img2', 'img3'];

### End Switch Case's with Defaults

    switch (new Date().getDay()) {
    	case  0:
    		day = "Sunday";
    		break;
    	case  1:
    		day = "Monday";
    		break;
    	default:
    		day = "Unknown";
    }

### Avoid Number, String, and Boolean as Objects

Always treat numbers, strings, or booleans as primitive values. Not as objects.
Declaring these types as objects, slows down execution speed, and produces nasty side effects:

    // Example
    let x = "John";
    let y = new String("John");
    (x === y) // is false because x is a string and y is an object.

    // Bad
    const num = new  Number(10);
    const str = new  String("Hello");
    const bool = new  Boolean(true);

    // Good
    const num = 10;
    const str = "Hello";
    const bool = true;

## Spacing

-   Indentation with tabs.
-   No whitespace at the end of line or on blank lines.
-   Lines should usually be no longer than 80 characters, and should not exceed 120 (counting tabs as 4 spaces).
-   No filler spaces in empty constructs (e.g., {}, [], fn()).
-   There should be a new line at the end of each file.
-   All function bodies are indented by one tab, even if the entire file is wrapped in a closure.

## Ordering

Ensuring that each function is defined before it is used is a good practice for code readability and maintainability.

    // Define functions before they are used
    function validateUserData(userData) {
        // Logic to validate user data
    }

    function sanitizeUserData(userData) {
        validateUserData()
    }

    function saveUserData(userData) {
        sanitizeUserData()
    }

### Imports order

1.  React import
2.  Library imports (Alphabetical order)
3.  Absolute imports from the project (Alphabetical order)
4.  Relative imports (Alphabetical order)
5.  Import \* as
6.  Import \<some file>.\<some extension>

### Array and Object Declarations

    // Preferred
    var obj = {
    	ready: 9,
    	when: 4,
    	'you are': 15,
    };

    var arr = [
    	9,
    	4,
    	15,
    ];

    // Acceptable for small objects and arrays
    var obj = { ready: 9, when: 4, 'you are': 15 };
    var arr = [ 9, 4, 15 ];

## Semicolons

Use them. Never rely on Automatic Semicolon Insertion (ASI).

## Equality

### Use === Comparison

    0 == ""; // true
    1 == "1"; // true
    1 == true; // true

    0 === ""; // false
    1 === "1"; // false
    1 === true; // false

## React

### Breakdown Components

Breaking down components refers to decomposing complex systems or functionalities into smaller, more manageable parts or components. This practice helps improve code organization, readability, and maintainability.

    // Bad
    function processUserData(userData) {
        // Complex logic to process user data
    }

    // Good
    function validateUserData(userData) {
        // Logic to validate user data
    }

    function sanitizeUserData(userData) {
        // Logic to sanitize user data
    }

    function saveUserData(userData) {
        // Logic to save user data
    }

### Use Functional Components

Using functional components instead of class components whenever possible is wise because functional components are easier to read and write. Functional components are generally faster and more efficient than class components because they don't require a constructor or lifecycle methods.

    // Good:
    const MyComponent = () => {
        return (
            <div>
                {/* JSX */}
            </div>
        );
    };

### Avoid Using Inline Styles

Avoiding inline styles is a best practice in web development because it promotes separation of concerns, improves maintainability, and makes it easier to manage styles across an application. Instead of applying styles directly in HTML elements, it's recommended to use external stylesheets or CSS-in-JS solutions.

    // Bad:
    const MyComponent = () => {
        return (
            <div style={{ color: 'red', fontSize: '16px' }}>
                {/* Content */}
            </div>
        );
    };
    // Good:
    import './MyComponent.css';

    const MyComponent = () => {
    return (
            <div className="my-component">
                {/* Content */}
            </div>
        );
    };

### Passing Objects Instead of Multiple Props

Especially when there are more than **4 props**, can enhance code readability and maintainability.

    //Bad
    const updateTodo = (id, name, completed, date, user) => {
    	 //...
    }

    // Good
    const todoItem = {
    	id: 1,
    	name: "Morning Task",
    	completed: false,
    	date: new Date(),
    	user: "Optimus"
    }

    const updateTodo = (todoItem) => {
    	//...
    }

### Avoid default export

Using named exports provides better **clarity** when importing components, making the codebase more organized and easier to navigate.

-   Named imports work well with tree shaking.
-   Refactoring becomes easier.
-   Easier to identify and understand the dependencies of a module.

## Utils

### Avoid Using eval()

The `eval()` function is used to run text as code. In almost all cases, it should not be necessary to use it.

Because it allows arbitrary code to be run, it also represents a security problem.
