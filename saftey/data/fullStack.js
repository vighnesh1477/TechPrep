// Full Stack Development Questions

[
{
    id: "fs-1",
    question: "What does DNS primarily resolve?",
    options: [
        "IP addresses to MAC addresses",
        "Domain names to IP addresses",
        "MAC addresses to domain names",
        "IP addresses to domain names"
    ],
    answer: 1,
    explanation: "The Domain Name System (DNS) translates human-readable domain names into machine-readable IP addresses.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-2",
    question: "Which HTTP method is idempotent and used to update an existing resource?",
    options: [
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
    ],
    answer: 1,
    explanation: "PUT is idempotent, meaning multiple identical requests have the same effect as a single request, making it ideal for full updates.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-3",
    question: "What is the primary purpose of a CDN?",
    options: [
        "To host databases globally",
        "To cache and serve static assets from edge locations",
        "To route internal microservices traffic",
        "To compile frontend code on the fly"
    ],
    answer: 1,
    explanation: "A Content Delivery Network (CDN) caches assets like images, CSS, and JS at edge servers globally to reduce latency.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-4",
    question: "Which HTML5 element is used to define navigation links?",
    options: [
        "<navigation>",
        "<nav>",
        "<menu>",
        "<links>"
    ],
    answer: 1,
    explanation: "The <nav> element represents a section of a page that links to other pages or parts within the page.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-5",
    question: "In CSS, what does 'box-sizing: border-box' do?",
    options: [
        "Includes padding and border in the element's total width and height",
        "Excludes padding from the width but includes border",
        "Removes the border from the element",
        "Sets the margin to zero"
    ],
    answer: 0,
    explanation: "border-box forces the browser to include padding and border in the specified width and height, simplifying layout calculations.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-6",
    question: "What is the output of 'typeof null' in JavaScript?",
    options: [
        "'null'",
        "'undefined'",
        "'object'",
        "'boolean'"
    ],
    answer: 2,
    explanation: "This is a well-known historical bug in JavaScript. typeof null returns 'object'.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-7",
    question: "In React, what hook is used to manage local component state?",
    options: [
        "useEffect",
        "useState",
        "useContext",
        "useReducer"
    ],
    answer: 1,
    explanation: "useState is the fundamental React hook for adding state to functional components.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-8",
    question: "Which CSS layout system is best suited for two-dimensional layouts?",
    options: [
        "Flexbox",
        "CSS Grid",
        "Float",
        "Inline-block"
    ],
    answer: 1,
    explanation: "CSS Grid is designed specifically for two-dimensional layouts (rows and columns), whereas Flexbox is primarily one-dimensional.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-9",
    question: "What does the 'defer' attribute do on a script tag?",
    options: [
        "Downloads the script asynchronously and executes it immediately",
        "Delays script download until the page is fully rendered",
        "Downloads the script in parallel and executes it after HTML parsing is complete",
        "Prevents the script from running if the page takes too long to load"
    ],
    answer: 2,
    explanation: "The defer attribute ensures the script is fetched in parallel with HTML parsing and executed only after the parser is finished.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-10",
    question: "Which HTTP status code indicates a resource was not modified since the last request?",
    options: [
        "200",
        "301",
        "304",
        "404"
    ],
    answer: 2,
    explanation: "HTTP 304 Not Modified indicates that the cached version of a resource is still valid, saving bandwidth.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-11",
    question: "What is the purpose of the 'alt' attribute in an <img> tag?",
    options: [
        "To display a tooltip on hover",
        "To provide alternative text for screen readers and if the image fails to load",
        "To link the image to another page",
        "To set the image border"
    ],
    answer: 1,
    explanation: "The alt attribute provides accessible alternative text for visually impaired users and acts as a fallback if the image cannot be rendered.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-12",
    question: "How does the 'this' keyword behave inside an arrow function?",
    options: [
        "It refers to the object that called the function",
        "It refers to the global window object",
        "It lexically inherits 'this' from the enclosing scope",
        "It is undefined by default"
    ],
    answer: 2,
    explanation: "Arrow functions do not have their own 'this' context; they inherit it from the parent execution context lexically.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-13",
    question: "Which React hook is used to perform side effects in a functional component?",
    options: [
        "useMemo",
        "useCallback",
        "useEffect",
        "useRef"
    ],
    answer: 2,
    explanation: "useEffect is designed to handle side effects such as data fetching, subscriptions, or manually changing the DOM.",
    difficulty: "Easy",
    topic: "Frontend"
},
{
    id: "fs-14",
    question: "What does CORS stand for?",
    options: [
        "Cross-Origin Request System",
        "Cross-Origin Resource Sharing",
        "Central Origin Resource Sharing",
        "Cross-Object Request Service"
    ],
    answer: 1,
    explanation: "CORS (Cross-Origin Resource Sharing) is a security feature that allows or restricts cross-origin web requests.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-15",
    question: "What is the difference between localStorage and sessionStorage?",
    options: [
        "localStorage has a 1MB limit, sessionStorage has 5MB",
        "localStorage persists until explicitly cleared, sessionStorage is cleared when the tab closes",
        "sessionStorage is accessible across tabs, localStorage is not",
        "localStorage can only store strings, sessionStorage can store objects"
    ],
    answer: 1,
    explanation: "Data in localStorage persists even after the browser window is closed, while sessionStorage data is cleared when the tab is closed.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-16",
    question: "In CSS, what is the specificity order from lowest to highest?",
    options: [
        "Class, Element, ID, Inline",
        "Element, Class, ID, Inline",
        "ID, Class, Element, Inline",
        "Inline, ID, Class, Element"
    ],
    answer: 1,
    explanation: "CSS specificity ranks Element selectors lowest, followed by Class selectors, ID selectors, and finally Inline styles as the highest.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-17",
    question: "What is a closure in JavaScript?",
    options: [
        "A way to close a browser tab programmatically",
        "A function that has access to variables in its outer (enclosing) lexical scope",
        "A method to encapsulate private variables in a class",
        "A syntax used to import modules"
    ],
    answer: 1,
    explanation: "A closure is formed when a function retains access to variables from its parent scope even after the parent function has returned.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-18",
    question: "Why might you use useCallback in React?",
    options: [
        "To memoize a value so it is not recalculated on every render",
        "To memoize a function reference so it remains stable across renders",
        "To replace the need for useState",
        "To handle asynchronous API calls"
    ],
    answer: 1,
    explanation: "useCallback returns a memoized callback function, preventing unnecessary re-renders of child components that receive the function as a prop.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-19",
    question: "What is the event loop in JavaScript?",
    options: [
        "A loop that iterates over arrays asynchronously",
        "A mechanism that handles asynchronous callbacks by checking the call stack and task queue",
        "A syntax for creating infinite loops without crashing the browser",
        "A debugging tool used in Chrome DevTools"
    ],
    answer: 1,
    explanation: "The event loop continuously checks if the call stack is empty and pushes the first callback from the task queue onto the stack for execution.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-20",
    question: "Which ARIA attribute indicates that an element is currently being processed or loading?",
    options: [
        "aria-hidden='true'",
        "aria-busy='true'",
        "aria-disabled='true'",
        "aria-expanded='true'"
    ],
    answer: 1,
    explanation: "aria-busy='true' indicates to screen readers that an element and its contents are currently being updated or loaded.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-21",
    question: "What is the purpose of a Service Worker?",
    options: [
        "To execute server-side logic in the browser",
        "To intercept network requests, enable offline caching, and support push notifications",
        "To render WebGL graphics faster",
        "To manage CSS transitions and animations"
    ],
    answer: 1,
    explanation: "Service workers act as a proxy between the web app and the network, enabling features like offline functionality and background sync.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-22",
    question: "How does CSS Grid's 'fr' unit work?",
    options: [
        "It represents a fraction of the remaining space in the grid container",
        "It stands for 'frame rate' and adjusts based on display refresh rate",
        "It sets a fixed pixel size relative to the font size",
        "It divides the grid into equal percentages of the viewport width"
    ],
    answer: 0,
    explanation: "The 'fr' unit represents a fraction of the available space in the grid container after fixed sizes and gaps have been calculated.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-23",
    question: "What is the difference between == and === in JavaScript?",
    options: [
        "== checks value only, === checks value and type",
        "== checks type only, === checks value and type",
        "== is used for strings, === is used for numbers",
        "There is no difference in modern JavaScript engines"
    ],
    answer: 0,
    explanation: "The equality operator (==) performs type coercion before comparing, while the strict equality operator (===) compares both value and type without coercion.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-24",
    question: "What causes the React error 'Too many re-renders'?",
    options: [
        "Using useState more than 10 times in a component",
        "Calling a setState function directly inside the render cycle without a condition",
        "Passing an object as a prop without memoizing it",
        "Using useEffect without a dependency array"
    ],
    answer: 1,
    explanation: "Calling setState unconditionally during rendering triggers another render, which calls setState again, creating an infinite loop.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-25",
    question: "What does the 'sandbox' attribute on an <iframe> do?",
    options: [
        "Speeds up iframe loading by isolating it from the DOM",
        "Applies extra restrictions to the iframe's content, preventing it from running scripts or submitting forms",
        "Hides the iframe from screen readers",
        "Allows the iframe to bypass CORS policies"
    ],
    answer: 1,
    explanation: "The sandbox attribute applies restrictions such as preventing form submission, script execution, and same-origin access to increase security.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-26",
    question: "In CSS, what does 'position: sticky' do?",
    options: [
        "Fixes the element relative to the viewport regardless of scroll",
        "Toggles between relative and fixed positioning based on the user's scroll position",
        "Removes the element from the normal document flow entirely",
        "Positions the element relative to its closest positioned ancestor"
    ],
    answer: 1,
    explanation: "Sticky positioning toggles the element between relative and fixed, depending on the scroll position relative to its containing block.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-27",
    question: "What is the main benefit of using React.lazy()?",
    options: [
        "It reduces the size of the React library itself",
        "It allows components to be loaded dynamically, reducing the initial bundle size",
        "It automatically optimizes CSS-in-JS libraries",
        "It prevents unnecessary API calls in useEffect"
    ],
    answer: 1,
    explanation: "React.lazy enables code splitting by loading components only when they are first rendered, significantly improving initial load time.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-28",
    question: "What is the purpose of the 'key' prop in React lists?",
    options: [
        "To encrypt list items for security",
        "To help React identify which items have changed, been added, or been removed",
        "To style list items dynamically",
        "To set the unique ID attribute in the DOM"
    ],
    answer: 1,
    explanation: "Keys help React's reconciliation algorithm efficiently update the UI by matching old and new virtual DOM tree nodes.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-29",
    question: "How does variable hoisting work with 'let' and 'const'?",
    options: [
        "They are hoisted to the top and initialized with undefined",
        "They are hoisted to the top but are not initialized, resulting in a TDZ (Temporal Dead Zone) error if accessed early",
        "They are not hoisted at all",
        "They are hoisted and initialized with null"
    ],
    answer: 1,
    explanation: "let and const are hoisted but enter a Temporal Dead Zone until their declaration is evaluated, throwing a ReferenceError if accessed beforehand.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-30",
    question: "What is a Shadow DOM?",
    options: [
        "A dark theme implementation in CSS",
        "A hidden DOM tree attached to an element that encapsulates its styles and markup",
        "A backup of the main DOM used for rollback",
        "A way to render components on the server"
    ],
    answer: 1,
    explanation: "Shadow DOM provides encapsulation by hiding the internal structure and styles of a web component from the main document DOM.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-31",
    question: "What is the critical rendering path?",
    options: [
        "The sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on the screen",
        "The fastest network route between client and server",
        "The order in which React components render",
        "The process of minifying JavaScript files"
    ],
    answer: 0,
    explanation: "The critical rendering path involves parsing HTML to build the DOM, parsing CSS to build the CSSOM, combining them into the render tree, and computing layout and paint.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-32",
    question: "Why does mutating state directly in React cause bugs?",
    options: [
        "JavaScript throws an error when objects are mutated",
        "React relies on object reference equality to determine if state has changed; direct mutations do not trigger re-renders",
        "Direct mutation deletes the component's virtual DOM",
        "It causes memory leaks in the React fiber tree"
    ],
    answer: 1,
    explanation: "React uses referential equality checks (===). If you mutate an object, the reference remains the same, so React assumes nothing changed and skips the re-render.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-33",
    question: "What is the difference between microtasks and macrotasks in the event loop?",
    options: [
        "Macrotasks handle promises, microtasks handle setTimeout",
        "Microtasks (like promises) execute before the next macrotask (like setTimeout) and before rendering",
        "Microtasks run in a separate thread from macrotasks",
        "There is no difference; they are executed in the order they are pushed to the queue"
    ],
    answer: 1,
    explanation: "The event loop processes all microtasks (e.g., Promise callbacks) completely before moving on to the next macrotask (e.g., setTimeout, I/O).",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-34",
    question: "How does Babel transpile async/await?",
    options: [
        "Into Promise chains using .then() and generators wrapped in a helper function",
        "Directly into callback functions",
        "Into Web Workers",
        "It does not transpile async/await; it is natively supported everywhere"
    ],
    answer: 0,
    explanation: "Babel transforms async functions into a state machine using generators, wrapped by a regenerator-runtime helper that yields promises.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-35",
    question: "What is a render blocker in web performance optimization?",
    options: [
        "A CSS file that prevents the browser from parsing HTML",
        "Any resource that must be downloaded and processed before the browser can paint the first pixel (First Contentful Paint)",
        "A JavaScript syntax error that stops execution",
        "An image that is too large to fit in the viewport"
    ],
    answer: 1,
    explanation: "Render-blocking resources (like synchronous JS or external CSS in the <head>) delay the browser's ability to render content to the screen.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-36",
    question: "What is the purpose of the 'useImperativeHandle' hook?",
    options: [
        "To force a component to re-render",
        "To expose specific values or methods from a child component to its parent via a ref",
        "To handle imperative DOM mutations outside of React's lifecycle",
        "To replace useEffect for data fetching"
    ],
    answer: 1,
    explanation: "useImperativeHandle customizes the instance value that is exposed to parent components when using ref, allowing controlled access to child internals.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-37",
    question: "In CSS, how does 'will-change' improve performance, and what is its danger?",
    options: [
        "It preloads fonts; danger is increased bandwidth usage",
        "It hints to the browser to optimize for an upcoming change (e.g., creating a separate compositor layer); danger is excessive memory usage if overused",
        "It automatically applies GPU acceleration to all elements; danger is visual glitching",
        "It defers paint calculations; danger is layout thrashing"
    ],
    answer: 1,
    explanation: "will-change promotes an element to its own GPU layer for smoother animations. Overusing it consumes massive amounts of RAM and can actually degrade performance.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-38",
    question: "What is the behavior of a Promise.race() if an empty iterable is passed?",
    options: [
        "It returns a resolved promise with undefined",
        "It returns a rejected promise with a TypeError",
        "It hangs indefinitely (returns a pending promise)",
        "It throws a synchronous SyntaxError"
    ],
    answer: 2,
    explanation: "Because there are no promises in the iterable to resolve or reject, Promise.race() remains in a pending state forever.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-39",
    question: "How does Server-Side Rendering (SSR) with Next.js handle hydration mismatches?",
    options: [
        "It automatically reconciles the DOM without warnings",
        "It throws a hydration error because the server-rendered HTML does not match the client-generated virtual DOM",
        "It falls back to Client-Side Rendering silently",
        "It re-fetches the data on the client to fix the mismatch"
    ],
    answer: 1,
    explanation: "If the server HTML differs from what React expects on the client (e.g., due to dates or random values), React will throw a hydration mismatch warning/error.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-40",
    question: "What is the core concept behind CSS containment ('contain' property)?",
    options: [
        "It prevents CSS from leaking into global scope like Shadow DOM",
        "It isolates a subtree of the DOM so that its internal changes do not affect the rest of the page's layout or paint",
        "It contains text overflow using ellipses",
        "It restricts the scope of CSS variables"
    ],
    answer: 1,
    explanation: "The 'contain' property allows the browser to isolate a section of the DOM, knowing that changes inside it won't affect the outside layout, drastically improving rendering performance.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-41",
    question: "What is the difference between a controlled and an uncontrolled component in React?",
    options: [
        "Controlled components use useRef, uncontrolled use useState",
        "Controlled components have their state managed by React via props, uncontrolled components manage their own state internally in the DOM",
        "Controlled components are class-based, uncontrolled are functional",
        "Uncontrolled components are deprecated in modern React"
    ],
    answer: 1,
    explanation: "In controlled components, form data is handled by React state. In uncontrolled components, form data is handled by the DOM itself, often accessed via refs.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-42",
    question: "Which meta tag is used to prevent a browser from translating a webpage?",
    options: [
        "<meta name='translate' content='false'>",
        "<meta name='google' content='notranslate'>",
        "<meta http-equiv='translate' content='off'>",
        "<meta charset='no-translate'>"
    ],
    answer: 1,
    explanation: "The <meta name='google' content='notranslate'> tag instructs Google Translate and other translation tools not to translate the page.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-43",
    question: "What does the CSS property 'content-visibility: auto' do?",
    options: [
        "Hides overflow content automatically",
        "Skips rendering of off-screen elements, significantly improving initial page load performance",
        "Loads images only when they enter the viewport",
        "Automatically optimizes CSS specificity"
    ],
    answer: 1,
    explanation: "content-visibility: auto allows the browser to skip rendering off-screen content, reducing initial render time, while still keeping the element's size in the layout.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-44",
    question: "Why is it generally discouraged to use the .index of an array map as a React key?",
    options: [
        "It causes TypeScript compilation errors",
        "It degrades performance by forcing React to use string coercion",
        "If the array is reordered, inserted into, or deleted from, it can lead to incorrect component state and UI bugs",
        "React does not accept numbers as keys"
    ],
    answer: 2,
    explanation: "Using array indices as keys can cause React to incorrectly reuse and mutate components when the list changes, leading to broken UIs and lost internal state.",
    difficulty: "Medium",
    topic: "Frontend"
},
{
    id: "fs-45",
    question: "What is the fundamental difference between Web Workers and Service Workers?",
    options: [
        "Web Workers have access to the DOM, Service Workers do not",
        "Service Workers can intercept network requests and act as a proxy, while Web Workers are strictly for heavy CPU computations in the background",
        "Web Workers persist across page reloads, Service Workers do not",
        "Service Workers require HTTPS only for localhost, Web Workers do not"
    ],
    answer: 1,
    explanation: "While both run in the background, Service Workers act as a network proxy enabling offline capabilities, whereas Web Workers are purely for offloading CPU-intensive tasks.",
    difficulty: "Hard",
    topic: "Frontend"
},
{
    id: "fs-46",
    question: "What is the primary role of Node.js?",
    options: [
        "To execute JavaScript on the client browser",
        "To provide a runtime environment for executing JavaScript on the server side",
        "To compile JavaScript into C++ code",
        "To manage database schemas"
    ],
    answer: 1,
    explanation: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JS code outside of a web browser, typically on servers.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-47",
    question: "In Express.js, what does middleware do?",
    options: [
        "Connects the frontend directly to the database",
        "Intercepts requests and responses, executing code before reaching the final route handler",
        "Compiles SCSS into CSS",
        "Serves static files exclusively"
    ],
    answer: 1,
    explanation: "Middleware functions have access to the request object, response object, and the next function in the cycle, allowing them to modify requests or end cycles early.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-48",
    question: "What does MVC stand for in software architecture?",
    options: [
        "Main View Controller",
        "Model View Controller",
        "Model Variable Component",
        "Module View Context"
    ],
    answer: 1,
    explanation: "MVC is an architectural pattern that separates an application into Model (data), View (UI), and Controller (handles input and updates).",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-49",
    question: "Which Node.js module is used to handle file system operations?",
    options: [
        "path",
        "fs",
        "stream",
        "os"
    ],
    answer: 1,
    explanation: "The 'fs' (file system) module provides methods for interacting with the file system, such as reading, writing, and deleting files.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-50",
    question: "How do you parse a JSON string into a JavaScript object in Node.js?",
    options: [
        "JSON.stringify()",
        "JSON.parse()",
        "JSON.convert()",
        "Object.fromJSON()"
    ],
    answer: 1,
    explanation: "JSON.parse() takes a JSON string and transforms it into a usable JavaScript object.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-51",
    question: "What is the purpose of the 'next' function in Express middleware?",
    options: [
        "To redirect the user to the next page",
        "To pass control to the next middleware function in the stack",
        "To fetch the next chunk of data from the database",
        "To close the server connection"
    ],
    answer: 1,
    explanation: "Calling next() passes the request to the subsequent middleware or route handler. If omitted, the request will hang.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-52",
    question: "Which environment variable is standard for defining the port in a Node/Express app?",
    options: [
        "NODE_PORT",
        "PORT",
        "APP_PORT",
        "SERVER_PORT"
    ],
    answer: 1,
    explanation: "While any variable name can be used, 'PORT' is the widely adopted standard, especially in PaaS environments like Heroku.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-53",
    question: "What is a RESTful API?",
    options: [
        "An API that uses WebSockets for communication",
        "An API that adheres to the constraints of Representational State Transfer, using standard HTTP methods",
        "An API that only returns XML data",
        "An API restricted to frontend frameworks"
    ],
    answer: 1,
    explanation: "A RESTful API follows REST principles, utilizing standard HTTP methods (GET, POST, PUT, DELETE) on resources identified by URLs.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-54",
    question: "In Node.js, what type of operations are non-blocking by default?",
    options: [
        "File system reads and writes",
        "Network requests and I/O operations",
        "CPU-intensive mathematical calculations",
        "Synchronous loops"
    ],
    answer: 1,
    explanation: "Node.js's event loop handles network and I/O operations asynchronously and non-blocking by default, offloading them to the system kernel.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-55",
    question: "What does the 'dotenv' package do in a Node.js application?",
    options: [
        "Cleans up environment variables",
        "Loads environment variables from a .env file into process.env",
        "Encrypts environment variables for production",
        "Creates a default configuration file"
    ],
    answer: 1,
    explanation: "dotenv reads a .env file in the root directory and loads its key-value pairs into the Node.js process.env object.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-56",
    question: "What is the difference between PUT and PATCH?",
    options: [
        "PUT creates a resource, PATCH deletes it",
        "PUT replaces the entire resource, PATCH applies partial modifications",
        "PATCH is idempotent, PUT is not",
        "PUT is secure, PATCH is unsecure"
    ],
    answer: 1,
    explanation: "PUT requires the client to send the entire updated resource, while PATCH sends only the fields that need to be changed.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-57",
    question: "Why should you avoid using synchronous methods (like readFileSync) in a Node.js production server?",
    options: [
        "They consume more memory",
        "They block the single main thread, preventing other requests from being processed",
        "They are deprecated in Node 18+",
        "They cannot handle JSON data"
    ],
    answer: 1,
    explanation: "Node.js runs on a single thread. Synchronous operations block this thread, freezing the entire application for all other users during the operation.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-58",
    question: "What is an Error Boundary in React?",
    options: [
        "A try-catch block in a standard JavaScript function",
        "A React component that catches JavaScript errors anywhere in its child component tree and logs them",
        "A middleware that catches 500 errors from the backend",
        "A testing utility to catch failing unit tests"
    ],
    answer: 1,
    explanation: "Error boundaries are React components that use static getDerivedStateFromError() or componentDidCatch() to catch errors during rendering, lifecycle methods, and constructors.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-59",
    question: "How does the Node.js cluster module improve performance?",
    options: [
        "By running different microservices in one file",
        "By creating multiple child processes (workers) that share the same server port, utilizing multi-core CPUs",
        "By caching database queries in memory",
        "By load balancing traffic to external APIs"
    ],
    answer: 1,
    explanation: "The cluster module allows you to fork multiple worker processes, effectively bypassing the single-threaded limitation of Node.js by utilizing multiple CPU cores.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-60",
    question: "What is the purpose of the 'helmet' package in Express?",
    options: [
        "To handle server crashes gracefully",
        "To set various HTTP response headers to secure the app against well-known web vulnerabilities",
        "To optimize image delivery",
        "To manage CORS policies exclusively"
    ],
    answer: 1,
    explanation: "Helmet helps secure Express apps by setting headers like X-Frame-Options, X-XSS-Protection, and Content-Security-Policy.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-61",
    question: "What is rate limiting in the context of a backend API?",
    options: [
        "Limiting the size of a database query result",
        "Restricting the number of requests a user can make in a given time frame to prevent abuse",
        "Reducing the bandwidth used by API responses",
        "Limiting the number of concurrent database connections"
    ],
    answer: 1,
    explanation: "Rate limiting protects against brute-force attacks and DDoS by capping how often an IP or user can hit an endpoint within a specific window.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-62",
    question: "In an MVC architecture, where should business logic ideally reside?",
    options: [
        "In the Controller",
        "In the Model / Services layer",
        "In the View",
        "In the Routes"
    ],
    answer: 1,
    explanation: "Controllers should be thin, handling HTTP requests/responses. Business logic should be abstracted into the Model or a dedicated Services layer to promote reusability.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-63",
    question: "What is a stream in Node.js?",
    options: [
        "A type of database connection",
        "A way to process data piece by piece without loading the entire dataset into memory",
        "A real-time communication protocol like WebSockets",
        "A logging mechanism"
    ],
    answer: 1,
    explanation: "Streams allow you to read or write data incrementally (e.g., reading a large file or video), which drastically reduces memory consumption.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-64",
    question: "What is the N+1 query problem?",
    options: [
        "Making 1 query to fetch a list, and then N additional queries to fetch related data for each item",
        "Writing N+1 lines of SQL code for a single operation",
        "Using 1 database instead of N databases",
        "A syntax error in ORM query building"
    ],
    answer: 0,
    explanation: "The N+1 problem occurs when an ORM executes one query to fetch records, and then N queries to fetch associations, leading to severe performance degradation.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-65",
    question: "How does Socket.IO differ from raw WebSockets?",
    options: [
        "Socket.IO uses HTTP/2, WebSockets use HTTP/1.1",
        "Socket.IO provides fallbacks (like long polling), automatic reconnection, and rooms/broadcasting, whereas raw WebSockets do not",
        "Socket.IO is strictly server-side, WebSockets are client-side",
        "There is no difference; Socket.IO is just a library for WebSockets"
    ],
    answer: 1,
    explanation: "Socket.IO is a wrapper around WebSockets that adds features like auto-reconnect, multiplexing, and fallback transports for older browsers.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-66",
    question: "What is the purpose of the 'compression' middleware in Express?",
    options: [
        "To minify JavaScript code",
        "To compress response bodies using gzip or deflate, reducing payload size",
        "To compress images on the fly",
        "To encrypt response payloads"
    ],
    answer: 1,
    explanation: "The compression middleware compresses HTTP responses sent from the server, significantly improving web application performance by reducing bandwidth.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-67",
    question: "What is an Event Emitter in Node.js?",
    options: [
        "A DOM element that fires click events",
        "A module that facilitates communication between objects using the observer pattern",
        "A tool to emit log files to the console",
        "A way to trigger HTTP requests"
    ],
    answer: 1,
    explanation: "The EventEmitter class in Node.js allows objects to emit named events and attach listener functions, implementing the observer pattern.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-68",
    question: "Why is it bad practice to store large objects in Express session memory (e.g., express-session with default MemoryStore)?",
    options: [
        "It makes the session cookie too large",
        "It can lead to memory leaks and slow down the server since all session data is stored in the single Node.js process memory",
        "It prevents the session from being encrypted",
        "It causes CORS errors"
    ],
    answer: 1,
    explanation: "MemoryStore is not designed for production. Storing large objects consumes RAM quickly, leading to memory leaks and garbage collection pauses.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-69",
    question: "What is a Process Manager like PM2 used for in Node.js?",
    options: [
        "To compile TypeScript to JavaScript",
        "To keep applications alive forever, reload them without downtime, and manage clustering/logging",
        "To manage NPM packages",
        "To handle database migrations"
    ],
    answer: 1,
    explanation: "PM2 is a production process manager that handles load balancing, zero-downtime reloads, and application monitoring.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-70",
    question: "What does the 'req.params' object contain in Express?",
    options: [
        "Query string parameters (e.g., ?name=john)",
        "URL path parameters defined with a colon (e.g., /users/:id)",
        "Parsed POST request body data",
        "HTTP request headers"
    ],
    answer: 1,
    explanation: "req.params stores named route parameters captured in the URL path (like the 'id' in '/users/:id').",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-71",
    question: "What is the difference between process.env and a config file?",
    options: [
        "process.env is synchronous, config files are asynchronous",
        "process.env stores environment-specific variables that change between deployments, while config files store static application defaults",
        "Config files are secure, process.env is not",
        "There is no difference"
    ],
    answer: 1,
    explanation: "Environment variables are ideal for secrets, ports, and deployment-specific configs, whereas config files usually hold non-sensitive default structures (e.g., feature flags).",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-72",
    question: "How do you handle unhandled promise rejections in a Node.js application to prevent crashes?",
    options: [
        "By wrapping every async function in a try-catch",
        "By attaching a listener to the 'unhandledRejection' event on the process object",
        "By setting a global variable to ignore errors",
        "By using the 'sync' versions of all Node.js methods"
    ],
    answer: 1,
    explanation: "The process.on('unhandledRejection', callback) listener catches promises that reject without a .catch(), preventing the Node.js process from terminating abruptly.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-73",
    question: "What is a memory leak in Node.js, and how does it typically manifest?",
    options: [
        "When a variable is declared but never assigned a value",
        "When the garbage collector fails to reclaim memory because objects are unintentionally kept in scope (e.g., forgotten timers or global closures), causing RSS to grow continuously",
        "When the application runs out of disk space",
        "When database queries return too much data"
    ],
    answer: 1,
    explanation: "Memory leaks occur when references to objects are retained in closures, global variables, or event listeners, preventing the V8 garbage collector from freeing that memory.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-74",
    question: "What is the difference between 'child_process.exec' and 'child_process.spawn'?",
    options: [
        "exec is for Node scripts, spawn is for shell scripts",
        "exec spawns a shell and buffers the output, whereas spawn streams the output without a shell by default",
        "spawn is deprecated in favor of exec",
        "exec runs synchronously, spawn runs asynchronously"
    ],
    answer: 1,
    explanation: "exec creates a shell and buffers the entire output (good for small data), while spawn launches a process directly and streams data (ideal for large data volumes).",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-75",
    question: "Why might you choose a message queue (like RabbitMQ or Redis Pub/Sub) in a microservices architecture?",
    options: [
        "To replace the need for a database",
        "To decouple services, enable asynchronous processing, and handle spikes in traffic by buffering messages",
        "To speed up HTTP requests",
        "To automatically scale the frontend"
    ],
    answer: 1,
    explanation: "Message queues allow services to communicate without being tightly coupled, improving resilience and enabling asynchronous background jobs.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-76",
    question: "What is the V8 engine's concept of 'Stop-The-World'?",
    options: [
        "When the server shuts down due to an unhandled error",
        "When the JavaScript execution is paused completely so the garbage collector can reclaim memory",
        "When an infinite loop blocks the event loop",
        "When network traffic is halted by a firewall"
    ],
    answer: 1,
    explanation: "During certain garbage collection phases (like mark-sweep-compact), V8 must pause JavaScript execution to safely clean up memory, known as 'Stop-The-World'.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-77",
    question: "In a distributed system, what is the CAP theorem?",
    options: [
        "A rule stating APIs must have Create, Add, and Put methods",
        "A theorem stating a distributed system can only provide two of three guarantees: Consistency, Availability, and Partition Tolerance",
        "A method for capping API rate limits",
        "A testing strategy for backend systems"
    ],
    answer: 1,
    explanation: "The CAP theorem dictates that in the presence of a network partition, a distributed database must choose between Consistency and Availability.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-78",
    question: "How does the 'module.exports' vs 'exports' object work in CommonJS?",
    options: [
        "They are exactly the same and completely interchangeable",
        "module.exports is the actual object returned by require(), while exports is just a reference to it that can be reassigned",
        "exports is used for ES6 modules, module.exports for CommonJS",
        "module.exports exports functions, exports exports objects"
    ],
    answer: 1,
    explanation: "Initially, exports points to module.exports. If you reassign exports (e.g., exports = { ... }), the link breaks. You must mutate exports or use module.exports directly.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-79",
    question: "What is the primary security risk of using 'eval()' in a Node.js backend?",
    options: [
        "It slows down the CPU",
        "It allows execution of arbitrary malicious code if the input is not strictly sanitized",
        "It leaks memory",
        "It blocks the event loop"
    ],
    answer: 1,
    explanation: "eval() executes a string as JavaScript code. If user input reaches eval(), an attacker can inject and execute malicious scripts on the server.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-80",
    question: "What is an Outbox Pattern in microservices?",
    options: [
        "A way to send emails from a backend",
        "A pattern to safely update a database and publish an event to a message broker in a single transaction, avoiding distributed transactions",
        "A UI pattern for displaying error messages",
        "A way to organize CSS in micro-frontends"
    ],
    answer: 1,
    explanation: "The Outbox pattern writes the event to a database 'outbox' table within the same transaction as the business data, and a separate process polls the outbox to publish events.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-81",
    question: "What is a Long Polling technique?",
    options: [
        "Sending a request and immediately closing the connection",
        "The server holds the request open until new data is available or a timeout occurs, after which the client immediately reconnects",
        "Using WebSockets to keep a connection open permanently",
        "Polling the server every 5 seconds"
    ],
    answer: 1,
    explanation: "Long polling reduces latency compared to short polling by having the server wait to respond until it has data, creating a near real-time connection over HTTP.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-82",
    question: "What is a Circuit Breaker pattern used for?",
    options: [
        "To physically protect server hardware from power surges",
        "To prevent cascading failures by detecting failures and stopping requests to a failing downstream service for a cooldown period",
        "To break out of infinite loops in JavaScript",
        "To terminate idle database connections"
    ],
    answer: 1,
    explanation: "A circuit breaker monitors calls to a service. If failures reach a threshold, it 'trips', immediately rejecting requests for a set time to allow the failing service to recover.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-83",
    question: "What is the role of a reverse proxy like Nginx in a Node.js architecture?",
    options: [
        "To proxy requests from the backend to the frontend",
        "To sit in front of Node.js, handling SSL termination, load balancing, compression, and serving static files",
        "To translate JavaScript to machine code",
        "To replace the need for a firewall"
    ],
    answer: 1,
    explanation: "Nginx is optimized to handle concurrent connections, SSL, and static assets, offloading this work from the Node.js process to improve performance.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-84",
    question: "How do you securely handle file uploads in Express?",
    options: [
        "Save files directly to the root directory using the default name",
        "Use a library like Multer, validate file MIME types, limit file size, and store files in a safe directory or cloud storage",
        "Store file data as base64 strings in the database",
        "Accept all file types and scan them after saving"
    ],
    answer: 1,
    explanation: "Multer handles multipart/form-data. Security requires restricting file size, validating extensions/MIME types, and using random file names to prevent overwrites and path traversals.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-85",
    question: "What does 'event-driven programming' mean in the context of Node.js?",
    options: [
        "Writing code that responds to user interface clicks",
        "Writing code that executes functions in response to asynchronous events like I/O completion or timers, using an event loop",
        "Using event emitters exclusively for all function calls",
        "Writing code that triggers events on the database"
    ],
    answer: 1,
    explanation: "Node.js operates on an event-driven architecture where the main thread listens for events and triggers callback functions when those events occur, avoiding blocking.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-86",
    question: "What is the difference between SQL and NoSQL databases?",
    options: [
        "SQL databases store JSON, NoSQL stores tables",
        "SQL databases are relational and use structured schemas with tables, while NoSQL databases are non-relational and handle unstructured/semi-structured data flexibly",
        "NoSQL databases do not support indexing",
        "SQL databases cannot scale horizontally"
    ],
    answer: 1,
    explanation: "SQL (like PostgreSQL) relies on rigid schemas and relationships. NoSQL (like MongoDB) uses document, key-value, or graph models for flexible, high-scale data.",
    difficulty: "Easy",
    topic: "Backend"
},
{
    id: "fs-87",
    question: "What is dependency injection?",
    options: [
        "Injecting CSS directly into JavaScript",
        "A design pattern where a component receives its dependencies from an external source rather than creating them internally",
        "Using NPM to install packages",
        "Importing modules using 'require'"
    ],
    answer: 1,
    explanation: "Dependency Injection (DI) promotes loose coupling by passing required services into a class/function, making the code more testable and modular.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-88",
    question: "What is a Zombie process in Unix/Linux when running Node.js?",
    options: [
        "A process that consumes 100% CPU",
        "A child process that has completed execution but still has an entry in the process table because its parent has not called wait() on it",
        "An infinitely looping Node.js script",
        "A process that has lost its network connection"
    ],
    answer: 1,
    explanation: "Zombies occur when child processes exit but the parent fails to read their exit status. In Node.js, listening for the 'close' or 'exit' event on spawned processes prevents this.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-89",
    question: "How does JWT (JSON Web Token) statelessness work?",
    options: [
        "The server stores the token in a database",
        "The token contains all necessary claims and is cryptographically signed, allowing the server to verify it without storing session state",
        "The token is stored only in the browser's memory",
        "The token changes state on every request"
    ],
    answer: 1,
    explanation: "Because the JWT holds the authenticated user's data (payload) and is signed by a secret/key, the server doesn't need to look up the session in a database.",
    difficulty: "Medium",
    topic: "Backend"
},
{
    id: "fs-90",
    question: "What is a Worker Thread in Node.js?",
    options: [
        "Another name for an Event Emitter",
        "A separate V8 execution thread that runs in parallel, used for CPU-intensive tasks to avoid blocking the main event loop",
        "A thread created by the cluster module",
        "A background thread used exclusively for I/O operations"
    ],
    answer: 1,
    explanation: "Unlike the cluster module (which creates separate processes), the worker_threads module enables true parallel execution of JavaScript code within the same process for heavy CPU tasks.",
    difficulty: "Hard",
    topic: "Backend"
},
{
    id: "fs-91",
    question: "What is a Primary Key in a database?",
    options: [
        "A key used to encrypt the database",
        "A unique identifier for each row in a table",
        "A foreign key linking to another table",
        "An index used to speed up queries"
    ],
    answer: 1,
    explanation: "A Primary Key uniquely identifies each record in a relational database table. It cannot contain NULL values and must be unique.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-92",
    question: "Which SQL clause is used to filter aggregated results?",
    options: [
        "WHERE",
        "HAVING",
        "FILTER",
        "GROUP BY"
    ],
    answer: 1,
    explanation: "HAVING is used to filter records after they have been grouped by GROUP BY, whereas WHERE filters rows before aggregation.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-93",
    question: "In MongoDB, what is a Collection equivalent to in a relational database?",
    options: [
        "A row",
        "A table",
        "A column",
        "A database"
    ],
    answer: 1,
    explanation: "In MongoDB, a Collection is a group of documents, which is conceptually similar to a Table in an SQL database.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-94",
    question: "What is the main use case for Redis?",
    options: [
        "Permanent complex relational data storage",
        "In-memory data structure store used as a database, cache, and message broker",
        "Storing large video files",
        "Executing SQL queries"
    ],
    answer: 1,
    explanation: "Redis stores data in RAM, making it exceptionally fast for caching frequently accessed data, managing sessions, or implementing rate limiters.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-95",
    question: "What does an ORM (Object-Relational Mapper) do?",
    options: [
        "Maps HTTP routes to database tables",
        "Creates a visual diagram of the database",
        "Allows developers to interact with a database using object-oriented code instead of raw SQL queries",
        "Optimizes database indexes automatically"
    ],
    answer: 2,
    explanation: "ORMs like Prisma or Sequelize abstract SQL into code (e.g., models and classes), allowing developers to query databases using their preferred programming language.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-96",
    question: "What is a Foreign Key?",
    options: [
        "A key used to access a database from a foreign country",
        "A column in one table that references the Primary Key of another table to establish a relationship",
        "A backup key for the primary key",
        "An encrypted column in the database"
    ],
    answer: 1,
    explanation: "Foreign keys enforce referential integrity by ensuring that the value exists in the referenced table's primary key column.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-97",
    question: "What is database normalization?",
    options: [
        "Converting a NoSQL database to SQL",
        "The process of organizing data to reduce redundancy and improve data integrity",
        "Backing up a database to a normalized file format",
        "Scaling a database horizontally"
    ],
    answer: 1,
    explanation: "Normalization involves dividing large tables into smaller ones and linking them via relationships to minimize data duplication and dependency.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-98",
    question: "What is the difference between a LEFT JOIN and an INNER JOIN?",
    options: [
        "LEFT JOIN returns only matching rows, INNER JOIN returns all rows",
        "INNER JOIN returns only matching rows from both tables, LEFT JOIN returns all rows from the left table and matched rows from the right",
        "They are exactly the same",
        "LEFT JOIN is faster than INNER JOIN"
    ],
    answer: 1,
    explanation: "An INNER JOIN excludes rows that don't have a match in both tables, while a LEFT JOIN includes all rows from the left table, filling with NULLs if no match exists on the right.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-99",
    question: "In MongoDB, what is the purpose of an Index?",
    options: [
        "To automatically increment an ID field",
        "To speed up query performance by allowing the database to find documents without scanning the entire collection",
        "To encrypt sensitive fields",
        "To link two collections together"
    ],
    answer: 1,
    explanation: "Indexes hold a small portion of the data set in an easy-to-traverse form, drastically reducing the number of documents MongoDB must scan during a query.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-100",
    question: "What is an ACID property in databases?",
    options: [
        "A tool for database encryption",
        "A set of properties: Atomicity, Consistency, Isolation, Durability that guarantee reliable database transactions",
        "A query language for NoSQL",
        "A method for database sharding"
    ],
    answer: 1,
    explanation: "ACID properties ensure that database transactions are processed reliably. For example, Atomicity guarantees that a transaction is either fully completed or fully rolled back.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-101",
    question: "What is a database Transaction?",
    options: [
        "The act of paying for a database service",
        "A sequence of operations performed as a single logical unit of work, which can be committed or rolled back",
        "A query that transfers data between two databases",
        "An auto-incrementing ID"
    ],
    answer: 1,
    explanation: "Transactions group multiple database operations into one unit. If one operation fails, the entire transaction is rolled back, maintaining data integrity.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-102",
    question: "What is the N+1 problem in ORMs and how do you solve it?",
    options: [
        "Executing N queries instead of 1; solved by using eager loading (e.g., .populate() in Mongoose or include in Sequelize)",
        "Making 1 query that returns N+1 rows; solved by pagination",
        "A memory leak; solved by restarting the server",
        "A syntax error; solved by using raw SQL"
    ],
    answer: 0,
    explanation: "The N+1 problem occurs when fetching related data in a loop. Eager loading fetches all related data in a single query using JOINs, solving the performance issue.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-103",
    question: "What is a Composite Index?",
    options: [
        "An index that compresses data",
        "An index on two or more columns of a table",
        "An index used across multiple databases",
        "A combination of a Primary Key and Foreign Key"
    ],
    answer: 1,
    explanation: "A composite index uses multiple columns to define the index. It is highly effective when queries frequently filter or sort by the exact combination of those columns.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-104",
    question: "What is the difference between MongoDB's 'insertOne' and 'insertMany'?",
    options: [
        "insertOne is synchronous, insertMany is asynchronous",
        "insertOne inserts a single document, insertMany takes an array of documents and performs a bulk insert",
        "insertMany automatically creates a new collection",
        "There is no difference; they are aliases"
    ],
    answer: 1,
    explanation: "insertMany is optimized for inserting multiple documents at once, reducing network round trips compared to calling insertOne in a loop.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-105",
    question: "In SQL, what is a Deadlock?",
    options: [
        "A query that takes too long to execute",
        "A situation where two or more transactions are mutually waiting for each other to release locks, resulting in neither proceeding",
        "When a database runs out of connections",
        "When a table is deleted while being read"
    ],
    answer: 1,
    explanation: "Deadlocks occur when Transaction A locks Resource 1 and needs Resource 2, while Transaction B locks Resource 2 and needs Resource 1. The DBMS usually kills one to resolve it.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-106",
    question: "What is a Database Migration?",
    options: [
        "Moving a database from one server to another",
        "A version-controlled set of scripts used to alter the database schema over time",
        "The process of converting SQL to NoSQL",
        "Backing up a database to the cloud"
    ],
    answer: 1,
    explanation: "Migrations (using tools like Prisma Migrate or Knex) allow developers to track and apply incremental schema changes in a predictable, reversible way.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-107",
    question: "What is a View in SQL?",
    options: [
        "A visual representation of the database schema",
        "A virtual table based on the result-set of an SQL statement",
        "A specific user's permissions on a table",
        "A backup copy of a table"
    ],
    answer: 1,
    explanation: "A View contains rows and columns just like a real table, but the data is dynamically retrieved from underlying tables when the view is queried.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-108",
    question: "What is the difference between 'npm install' and 'npm ci'?",
    options: [
        "npm install updates packages, npm ci removes them",
        "npm ci installs versions strictly from package-lock.json, deleting and reinstalling node_modules, making it faster and more reliable for CI/CD",
        "npm ci is just an alias for npm install",
        "npm install installs dev dependencies, npm ci does not"
    ],
    answer: 1,
    explanation: "npm ci (Clean Install) ignores package.json versions, uses the exact lockfile, and skips resolution, providing consistent builds in automated pipelines.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-109",
    question: "What is a Stored Procedure?",
    options: [
        "A way to store large files in the database",
        "A prepared SQL code that you can save and reuse multiple times",
        "A temporary table",
        "An index stored on disk"
    ],
    answer: 1,
    explanation: "Stored procedures encapsulate SQL logic on the database server, reducing network traffic and improving performance for complex, repeated operations.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-110",
    question: "In PostgreSQL, what is the difference between VARCHAR and TEXT?",
    options: [
        "VARCHAR is faster than TEXT",
        "TEXT does not allow spaces",
        "In modern PostgreSQL, there is no performance difference; VARCHAR(n) enforces a length limit, TEXT does not",
        "VARCHAR is for numbers, TEXT is for strings"
    ],
    answer: 2,
    explanation: "PostgreSQL implements both identically under the hood. The only difference is that VARCHAR(n) will throw an error if the string exceeds n characters.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-111",
    question: "What is Sharding in database architecture?",
    options: [
        "Storing backup data in multiple formats",
        "Distributing data across multiple machines to horizontally scale read/write operations",
        "Deleting old data to free up space",
        "Encrypting data at rest"
    ],
    answer: 1,
    explanation: "Sharding splits a large database into smaller, faster, easily managed parts (shards) spread across multiple servers, overcoming single-server hardware limits.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-112",
    question: "What is an Index-Only Scan?",
    options: [
        "Scanning the database without using an index",
        "A query execution plan where all required columns are present in the index itself, so the database doesn't need to read the actual table data",
        "A way to scan indexes in parallel",
        "A backup strategy for indexes"
    ],
    answer: 1,
    explanation: "Index-only scans drastically improve performance because reading the index (which is usually cached in RAM) is much faster than reading table rows from disk.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-113",
    question: "What is eventual consistency in NoSQL databases?",
    options: [
        "Data is never consistent",
        "Given enough time with no new writes, all replicas will eventually converge to the same data state",
        "Data is consistent only during read operations",
        "The database guarantees ACID properties"
    ],
    answer: 1,
    explanation: "In distributed NoSQL systems, writes might propagate to replicas asynchronously. Eventual consistency guarantees that eventually, all nodes will hold the latest data.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-114",
    question: "What is a Covering Index?",
    options: [
        "An index that covers all tables in a database",
        "An index that includes all the columns required by a specific query, eliminating the need to access the base table",
        "A backup index used when the primary index fails",
        "An index applied automatically by the ORM"
    ],
    answer: 1,
    explanation: "A covering index satisfies a query entirely by itself. The database engine retrieves the result directly from the index without performing a lookup on the data page.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-115",
    question: "How does Prisma handle migrations differently from traditional ORMs like Sequelize?",
    options: [
        "Prisma does not support migrations",
        "Prisma uses a declarative schema file and generates SQL migrations based on schema diffs, rather than writing manual migration scripts",
        "Prisma only supports NoSQL migrations",
        "Sequelize automatically applies migrations on every app start"
    ],
    answer: 1,
    explanation: "Prisma's migration engine compares the desired schema (schema.prisma) to the current database state and generates the exact SQL needed to transition between them.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-116",
    question: "What is a Write-Ahead Log (WAL) in databases like PostgreSQL?",
    options: [
        "A log of all read queries",
        "A log where changes are written before they are applied to the actual data files, ensuring durability and crash recovery",
        "A backup file stored on an external drive",
        "A log used exclusively for indexing"
    ],
    answer: 1,
    explanation: "WAL ensures that no data modifications are written to disk before the associated log record is safely on disk, allowing the database to recover from crashes by replaying the log.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-117",
    question: "What is the difference between a Clustered and a Non-Clustered Index?",
    options: [
        "Clustered indexes are faster for reads, non-clustered are faster for writes",
        "A clustered index sorts and stores the data rows physically in order, while a non-clustered index creates a separate structure pointing to the data rows",
        "A table can have multiple clustered indexes but only one non-clustered index",
        "Non-clustered indexes do not use B-trees"
    ],
    answer: 1,
    explanation: "Because a clustered index dictates the physical order of data, a table can only have one. Non-clustered indexes are separate structures that point back to the clustered index or heap.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-118",
    question: "What is an Isolation Level in SQL transactions?",
    options: [
        "A way to isolate a database from the network",
        "The degree to which a transaction must be isolated from modifications made by concurrent transactions",
        "A firewall rule for the database",
        "A method to encrypt transaction data"
    ],
    answer: 1,
    explanation: "Isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) balance between data integrity and concurrent performance by controlling lock behavior.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-119",
    question: "What is a Phantom Read in database transactions?",
    options: [
        "Reading a row that was deleted by another transaction",
        "A transaction re-executes a query returning a set of rows that satisfies a search condition and finds that the set of rows has changed due to another recently-committed transaction",
        "Reading data from a non-existent table",
        "When the database connection drops during a read"
    ],
    answer: 1,
    explanation: "Phantom reads occur when new rows are inserted into or deleted from a range by another transaction, causing the same range query to return different rows.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-120",
    question: "How does MongoDB's $lookup aggregation stage work?",
    options: [
        "It looks up a value in a configuration file",
        "It performs a left outer join to an unsharded collection in the same database to filter documents from the input documents",
        "It looks up an index for a specific query",
        "It fetches data from a REST API"
    ],
    answer: 1,
    explanation: "$lookup allows MongoDB to perform joins between collections, similar to SQL JOINs, by matching a local field to a foreign field in another collection.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-121",
    question: "What is Connection Pooling in a database context?",
    options: [
        "Combining multiple databases into one",
        "Maintaining a cache of active database connections so connections can be reused, reducing the overhead of establishing new connections",
        "Pooling data from multiple tables into a single view",
        "A load balancing technique for databases"
    ],
    answer: 1,
    explanation: "Creating a new database connection is expensive. Connection pooling keeps a set of connections open so threads can check one out, use it, and return it.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-122",
    question: "What is a B-Tree data structure used for in databases?",
    options: [
        "Storing JSON documents",
        "Implementing indexes to allow efficient searching, insertion, and deletion in logarithmic time",
        "Managing user connections",
        "Handling database replication"
    ],
    answer: 1,
    explanation: "B-Trees keep data sorted and allow searches, sequential access, insertions, and deletions in O(log n) time, making them ideal for database indexes.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-123",
    question: "What is a CQRS pattern?",
    options: [
        "Creating Queries Really Quick and Safe",
        "Command Query Responsibility Segregation: separating read and write operations into different models to optimize performance and scalability",
        "A SQL query optimization technique",
        "A way to cache read queries"
    ],
    answer: 1,
    explanation: "CQRS separates the data store into a 'write' side (commands) and a 'read' side (queries), allowing each to be scaled and optimized independently.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-124",
    question: "What is the purpose of the 'EXPLAIN' keyword in SQL?",
    options: [
        "To add comments to a query",
        "To display the execution plan chosen by the query optimizer for a specific statement",
        "To export query results to a file",
        "To delete a query from history"
    ],
    answer: 1,
    explanation: "EXPLAIN shows how the database engine will execute a query (e.g., whether it uses an index, a full table scan, or joins), helping developers identify performance bottlenecks.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-125",
    question: "What is Data Denormalization?",
    options: [
        "Restoring a database to its original state",
        "Intentionally adding redundant data to one or more tables to improve read performance at the cost of write complexity",
        "Deleting unused columns from a table",
        "Converting a database from SQL to NoSQL"
    ],
    answer: 1,
    explanation: "While normalization reduces redundancy, denormalization purposely adds it back (e.g., caching a count in a parent table) to avoid expensive JOINs during read-heavy operations.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-126",
    question: "In Redis, what is the difference between RDB and AOF persistence?",
    options: [
        "RDB is for text, AOF is for binary data",
        "RDB takes point-in-time snapshots of the dataset, while AOF logs every write operation received by the server",
        "AOF is faster than RDB",
        "RDB is deprecated in modern Redis"
    ],
    answer: 1,
    explanation: "RDB creates compact, time-stamped binary files, great for backups. AOF provides better durability by logging all write commands sequentially.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-127",
    question: "What is Optimistic Locking?",
    options: [
        "Assuming no conflicts will happen and verifying before commit using a version number or timestamp",
        "Locking the database row for the entire duration of the transaction",
        "Using only READ locks",
        "Locking the entire table during writes"
    ],
    explanation: "Optimistic locking doesn't physically lock rows. Instead, it checks a 'version' column on update; if the version changed since reading, the update is rejected.",
    difficulty: "Hard",
    topic: "Databases",
    answer: 0
},
{
    id: "fs-128",
    question: "What is a Materialized View?",
    options: [
        "A view that can be edited by users",
        "A database object that contains the results of a query and stores them physically, unlike a standard view which computes results on the fly",
        "A 3D representation of database schemas",
        "A view that automatically optimizes indexes"
    ],
    answer: 1,
    explanation: "Materialized views cache the result of a complex, expensive query to disk, allowing instant reads. They must be refreshed when the underlying data changes.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-129",
    question: "What is a Blob storage type used for in databases?",
    options: [
        "Storing small strings",
        "Storing large binary data such as images, audio, or video files",
        "Storing boolean values",
        "Storing arrays of numbers"
    ],
    answer: 1,
    explanation: "Binary Large Object (BLOB) is a data type used to hold variable amounts of binary data, typically unstructured files like media.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-130",
    question: "What is a Patricia Trie in the context of database indexing?",
    options: [
        "A type of B-Tree used for spatial data",
        "A compressed trie where nodes with only one child are merged with their parent, used for fast IP routing and prefix searches",
        "An encryption algorithm for database passwords",
        "A method for replicating data across regions"
    ],
    answer: 1,
    explanation: "Patricia Tries reduce the space overhead of standard tries by eliminating nodes with a single child, making them highly efficient for string and prefix matching.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-131",
    question: "What is a Tuple in a relational database?",
    options: [
        "A connection string",
        "A single row or record in a table",
        "A data type for storing arrays",
        "A foreign key reference"
    ],
    answer: 1,
    explanation: "In relational database theory, a tuple represents a single, unordered set of attribute values, which maps to a single row in a database table.",
    difficulty: "Easy",
    topic: "Databases"
},
{
    id: "fs-132",
    question: "Why might you use SQLite over PostgreSQL?",
    options: [
        "For high-concurrency distributed web applications",
        "For embedded, local, or lightweight applications where a separate server process is unnecessary",
        "Because SQLite supports more data types than PostgreSQL",
        "Because SQLite is faster for complex JOINs"
    ],
    answer: 1,
    explanation: "SQLite is serverless and reads/writes directly to local files, making it perfect for mobile apps, testing, or edge devices, not heavy concurrent web traffic.",
    difficulty: "Medium",
    topic: "Databases"
},
{
    id: "fs-133",
    question: "What is a Change Data Capture (CDC) system?",
    options: [
        "A system that tracks user UI interactions",
        "A set of design patterns used to determine and track data that has changed so that action can be taken using the changed data",
        "A version control system for SQL scripts",
        "A security system that prevents unauthorized data modifications"
    ],
    answer: 1,
    explanation: "CDC identifies and captures changes made to data in a database (inserts, updates, deletes) in real-time, often to replicate data to another system.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-134",
    question: "What is a Join Decomposition?",
    options: [
        "Breaking down a complex query into multiple smaller queries",
        "The reverse of a join, where a table is split into multiple tables to eliminate redundancy and ensure lossless joins",
        "Dropping foreign key constraints",
        "Splitting a large index into smaller indexes"
    ],
    answer: 1,
    explanation: "Join decomposition is a normalization technique where a table is divided into two or more tables such that they can be rejoined without losing any information.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-135",
    question: "What is Multi-Version Concurrency Control (MVCC)?",
    options: [
        "A way to run multiple database versions simultaneously",
        "A concurrency control method where the database keeps multiple versions of a row so readers don't block writers and vice versa",
        "A tool for managing database schemas",
        "A type of database replication"
    ],
    answer: 1,
    explanation: "MVCC allows PostgreSQL and other databases to achieve high concurrency by giving each transaction a snapshot of the data, preventing read/write locks from blocking each other.",
    difficulty: "Hard",
    topic: "Databases"
},
{
    id: "fs-136",
    question: "What does CRUD stand for?",
    options: [
        "Create, Read, Update, Delete",
        "Create, Render, Upload, Download",
        "Connect, Route, Update, Deploy",
        "Compile, Run, Unit test, Debug"
    ],
    answer: 0,
    explanation: "CRUD represents the four basic operations of persistent storage: Create, Read, Update, and Delete.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-137",
    question: "Which HTTP status code indicates that a new resource was successfully created?",
    options: [
        "200 OK",
        "201 Created",
        "204 No Content",
        "301 Moved Permanently"
    ],
    answer: 1,
    explanation: "201 Created is returned by a REST API when a POST request successfully results in the creation of a new resource.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-138",
    question: "What is the purpose of API versioning (e.g., /api/v1/users)?",
    options: [
        "To speed up API responses",
        "To allow backward-compatible changes and graceful deprecation of older endpoints",
        "To encrypt the API traffic",
        "To bypass rate limiting"
    ],
    answer: 1,
    explanation: "Versioning allows developers to introduce breaking changes or new features without disrupting existing clients who are still using the older version.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-139",
    question: "What is pagination in an API context?",
    options: [
        "Dividing a web page into multiple sections",
        "Splitting a large dataset into smaller, manageable chunks (pages) to improve performance and reduce payload size",
        "Caching API responses",
        "Sorting API results alphabetically"
    ],
    answer: 1,
    explanation: "Pagination (via limit/offset or cursors) prevents the server from sending massive amounts of data at once, which would crash the client or slow down the database.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-140",
    question: "What is the main advantage of GraphQL over REST?",
    options: [
        "GraphQL uses less bandwidth automatically",
        "Clients can request exactly the data they need in a single query, preventing over-fetching and under-fetching of data",
        "GraphQL does not require a backend server",
        "GraphQL is faster because it uses binary protocols"
    ],
    answer: 1,
    explanation: "REST endpoints return fixed data structures. GraphQL allows the client to specify the exact shape of the data needed, solving the over/under-fetching problem.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-141",
    question: "What is an API Gateway?",
    options: [
        "A web browser extension for testing APIs",
        "A single entry point for multiple microservices that handles routing, composition, and cross-cutting concerns like auth",
        "A database for storing API keys",
        "A tool to generate API documentation"
    ],
    answer: 1,
    explanation: "An API Gateway acts as a reverse proxy, routing requests to the appropriate internal microservice while handling authentication, rate limiting, and logging centrally.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-142",
    question: "What is the difference between query parameters and path parameters?",
    options: [
        "Query parameters are used for POST, path parameters for GET",
        "Path parameters identify specific resources (e.g., /users/:id), while query parameters filter or sort resources (e.g., /users?role=admin)",
        "There is no difference; they are interchangeable",
        "Query parameters are more secure than path parameters"
    ],
    answer: 1,
    explanation: "Path parameters are part of the URL path used for resource identification, whereas query parameters are appended after '?' used for filtering, sorting, and pagination.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-143",
    question: "What does HATEOAS stand for in REST architecture?",
    options: [
        "Hypermedia As The Engine Of Application State",
        "HTTP API Transfer Engine Of Application State",
        "Hyperlink Assisted Transfer Engine Of API Systems",
        "High Availability Transfer Endpoint Of Application Services"
    ],
    answer: 0,
    explanation: "HATEOAS is a REST constraint where API responses include hyperlinks to related actions, allowing clients to dynamically navigate the API without hardcoding URLs.",
    difficulty: "Hard",
    topic: "APIs"
},
{
    id: "fs-144",
    question: "What is a WebSocket?",
    options: [
        "A secure version of HTTP",
        "A communication protocol providing full-duplex communication channels over a single TCP connection",
        "A type of REST API endpoint",
        "A database connection protocol"
    ],
    answer: 1,
    explanation: "Unlike HTTP's request-response cycle, WebSockets keep the connection open, allowing the server and client to push messages to each other at any time.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-145",
    question: "What is the purpose of the 'Accept' header in an HTTP request?",
    options: [
        "To accept cookies from the server",
        "To tell the server which content types the client can understand (e.g., application/json)",
        "To accept the terms of service",
        "To authorize the request"
    ],
    answer: 1,
    explanation: "The Accept header informs the server about the media types the client can process, allowing the server to return data in the appropriate format.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-146",
    question: "What is Cursor-based pagination?",
    options: [
        "Using page numbers (e.g., ?page=2)",
        "Using a unique, opaque token (cursor) pointing to a specific item in the dataset, which prevents issues when data is inserted or deleted",
        "Scrolling infinitely without an API",
        "Using SQL OFFSET commands"
    ],
    answer: 1,
    explanation: "Cursor pagination uses a pointer (like an ID or encoded string) to fetch items after that point. It is more reliable than offset pagination for continuously changing data.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-147",
    question: "What is an Idempotent HTTP method?",
    options: [
        "A method that requires authentication",
        "A method where making the same request multiple times has the same effect on the server state as making it once",
        "A method that returns a 204 status code",
        "A method that caches the response automatically"
    ],
    answer: 1,
    explanation: "Idempotency ensures that accidental duplicate requests (e.g., due to network retries) do not cause unintended side effects, like creating multiple records.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-148",
    question: "What is the N+1 problem in the context of GraphQL?",
    options: [
        "Sending 1 query that returns N+1 errors",
        "When a query requests a list of items and fields on those items, the resolver executes N+1 database calls (1 for the list, N for the nested fields)",
        "When the GraphQL schema has N+1 types",
        "A syntax error in nested GraphQL queries"
    ],
    answer: 1,
    explanation: "GraphQL's N+1 issue occurs when nested resolvers naively fetch data. Tools like DataLoader solve this by batching and caching database requests.",
    difficulty: "Hard",
    topic: "APIs"
},
{
    id: "fs-149",
    question: "What is the role of a Schema in GraphQL?",
    options: [
        "To encrypt GraphQL queries",
        "To define the types, queries, and mutations available in the GraphQL API, serving as a contract between client and server",
        "To store the GraphQL database",
        "To handle authentication"
    ],
    answer: 1,
    explanation: "The GraphQL schema describes the complete shape of the data that can be queried and mutated, ensuring type safety and self-documentation.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-150",
    question: "What is API Caching?",
    options: [
        "Storing API documentation locally",
        "Temporarily storing API responses to serve subsequent identical requests faster, reducing server load and latency",
        "Caching database queries only",
        "Saving API keys in local storage"
    ],
    answer: 1,
    explanation: "Caching (via HTTP headers like Cache-Control or tools like Redis) prevents the server from doing redundant processing for requests it has recently handled.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-151",
    question: "What does the HTTP 429 status code mean?",
    options: [
        "Unauthorized",
        "Not Found",
        "Too Many Requests",
        "Internal Server Error"
    ],
    answer: 2,
    explanation: "429 Too Many Requests is returned when a user has sent too many requests in a given amount of time, typically triggering rate limiting.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-152",
    question: "What is OpenAPI (Swagger) used for?",
    options: [
        "Writing backend code faster",
        "Defining a standard, machine-readable format for describing RESTful APIs, enabling automatic documentation generation and client SDK creation",
        "Testing UI components",
        "Managing database migrations"
    ],
    answer: 1,
    explanation: "OpenAPI provides a formal specification that allows both humans and machines to discover and understand the capabilities of a service without accessing source code.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-153",
    question: "What is a Resolver in GraphQL?",
    options: [
        "A tool to resolve merge conflicts in Git",
        "A function responsible for fetching the data for a specific field in a GraphQL schema",
        "A DNS resolver for API domains",
        "A middleware that handles GraphQL errors"
    ],
    answer: 1,
    explanation: "Resolvers dictate how the data for a specific field is fetched. They can fetch data from a database, another API, or compute it on the fly.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-154",
    question: "What is the difference between a Mutation and a Query in GraphQL?",
    options: [
        "Queries are faster than Mutations",
        "Queries are used to fetch data (read), while Mutations are used to modify data (write)",
        "Mutations are synchronous, Queries are asynchronous",
        "Queries require authentication, Mutations do not"
    ],
    answer: 1,
    explanation: "In GraphQL, the conceptual separation is clear: Queries read data without side effects, whereas Mutations modify server-side data and return a result.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-155",
    question: "What is a Webhook?",
    options: [
        "A specific type of GraphQL query",
        "An HTTP callback triggered by an event in a third-party service, pushing data to your application instead of your app polling for it",
        "A security hook for APIs",
        "A tool to intercept WebSocket connections"
    ],
    answer: 1,
    explanation: "Webhooks are user-defined HTTP callbacks. When an event occurs (e.g., a payment succeeds), the source system makes an HTTP request to the URL configured for the webhook.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-156",
    question: "What is Throttling in API design?",
    options: [
        "Deleting old API versions",
        "Limiting the rate of API calls a user can make, but allowing bursts up to a certain limit before delaying subsequent requests",
        "Increasing the bandwidth of the API",
        "Caching API responses on the client"
    ],
    answer: 1,
    explanation: "Unlike hard rate limiting (which drops requests), throttling queues excess requests and processes them after a delay, smoothing out traffic spikes.",
    difficulty: "Hard",
    topic: "APIs"
},
{
    id: "fs-157",
    question: "Why might you choose gRPC over REST?",
    options: [
        "gRPC uses JSON, which is faster than XML",
        "gRPC uses HTTP/2 and Protocol Buffers, offering highly efficient binary serialization, strict contracts, and bi-directional streaming",
        "gRPC does not require a server",
        "gRPC is easier to debug in a web browser"
    ],
    answer: 1,
    explanation: "gRPC is ideal for internal microservice communication where performance and strict typing are critical, though it lacks the browser-friendliness of REST.",
    difficulty: "Hard",
    topic: "APIs"
},
{
    id: "fs-158",
    question: "What is the purpose of the 'ETag' HTTP header?",
    options: [
        "To specify the content type",
        "To provide a unique identifier for a specific version of a resource, used for caching and conditional requests",
        "To encrypt the response body",
        "To track API users"
    ],
    answer: 1,
    explanation: "The ETag (Entity Tag) allows caches to be validated. If the ETag hasn't changed, the server can return a 304 Not Modified, saving bandwidth.",
    difficulty: "Hard",
    topic: "APIs"
},
{
    id: "fs-159",
    question: "What is a GraphQL Fragment?",
    options: [
        "A broken part of a GraphQL query",
        "A reusable piece of a query that allows you to construct complex queries by composing smaller, modular units",
        "A way to paginate GraphQL queries",
        "An error handling mechanism in GraphQL"
    ],
    answer: 1,
    explanation: "Fragments let you define sets of fields that can be included in multiple queries or mutations, promoting reusability and reducing duplication in client code.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-160",
    question: "What does Bearer authentication mean in an API context?",
    options: [
        "The client bears the SSL certificate",
        "A security scheme where a token (like a JWT) is sent in the Authorization header, and anyone possessing the token is granted access",
        "A method where the API bears the cost of authentication",
        "Using basic username/password auth"
    ],
    answer: 1,
    explanation: "The 'Bearer' authentication scheme indicates that the token included in the 'Authorization: Bearer <token>' header grants access to the holder of the token.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-161",
    question: "What is an API Sandbox?",
    options: [
        "A secure environment for running untrusted frontend code",
        "A mock or isolated testing environment where developers can experiment with API calls without affecting live data or systems",
        "A database backup for APIs",
        "A type of API gateway"
    ],
    answer: 1,
    explanation: "Sandboxes provide a safe, simulated environment for developers to learn and test an API using fake data or mock responses before going to production.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-162",
    question: "What is the primary difference between SSE (Server-Sent Events) and WebSockets?",
    options: [
        "SSE is faster than WebSockets",
        "SSE is unidirectional (server to client) over HTTP, while WebSockets are bidirectional over a persistent TCP connection",
        "WebSockets do not work in browsers",
        "SSE requires a special protocol, WebSockets use HTTP"
    ],
    answer: 1,
    explanation: "SSE is ideal for pushing updates like notifications from server to client. WebSockets are needed when the client must send frequent messages back to the server.",
    difficulty: "Medium",
    topic: "APIs"
},
{
    id: "fs-163",
    question: "What is API Polling?",
    options: [
        "Voting on API features",
        "The client repeatedly making HTTP requests to the server at fixed intervals to check for new data",
        "The server pushing data to the client every second",
        "A load testing technique"
    ],
    answer: 1,
    explanation: "Polling is a simple but inefficient way to get real-time updates, as it wastes resources by making requests even when no new data is available.",
    difficulty: "Easy",
    topic: "APIs"
},
{
    id: "fs-164",
    question: "What is a GraphQL Subscription?",
    options: [
        "A paid tier for a GraphQL API",
        "A real-time connection to the server that maintains an active stream of data whenever a specific event occurs",
        "A way to subscribe to an email newsletter via API",
        "A one-time query that saves the result"
    ],
    answer: 1,
    explanation: "Subscriptions use WebSockets to maintain a persistent connection, allowing the server to push data to the client automatically when events (e.g., 'newMessage') occur.",
    difficulty: "Hard",
    topic: "APIs"
},
{
    id: "fs-165",
    question: "How do you handle partial failures in a bulk API endpoint?",
    options: [
        "Return a 500 error and fail the entire batch",
        "Return a 207 Multi-Status response, detailing the success or failure of each individual item in the batch",
        "Retry the batch automatically until it succeeds",
        "Ignore the failed items and return 200 OK"
    ],
    answer: 1,
    explanation: "HTTP 207 allows the server to return an array of statuses corresponding to each item in the batch, letting the client know exactly which succeeded and which failed.",
    difficulty: "Hard",
    topic: "APIs"
},
{
    id: "fs-166",
    question: "What is Git primarily used for?",
    options: [
        "Hosting websites",
        "Distributed version control to track changes in source code",
        "Running automated tests",
        "Managing database connections"
    ],
    answer: 1,
    explanation: "Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-167",
    question: "What does the 'git rebase' command do?",
    options: [
        "Deletes a branch",
        "Moves or combines a sequence of commits to a new base commit, creating a linear project history",
        "Copies a commit from one branch to another",
        "Reverts the last commit"
    ],
    answer: 1,
    explanation: "Rebase rewrites commit history by taking commits that diverged and reapplying them on top of another base, keeping the history clean and linear.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-168",
    question: "What is a Docker Image?",
    options: [
        "A running instance of a container",
        "A read-only template containing the application code, libraries, and dependencies needed to create a container",
        "A virtual machine",
        "A Docker configuration file"
    ],
    answer: 1,
    explanation: "An image is a static blueprint. When you run an image, it becomes an active container with a writable layer on top of the read-only image layers.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-169",
    question: "What is the difference between a Docker container and a Virtual Machine?",
    options: [
        "They are the same thing",
        "Containers share the host OS kernel and are lightweight, while VMs include a full guest OS, making them heavier and slower to boot",
        "VMs are more secure than containers",
        "Containers cannot run Linux, VMs can"
    ],
    answer: 1,
    explanation: "Containers virtualize the software layer above the OS, making them extremely fast and efficient compared to VMs, which must virtualize the entire hardware stack.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-170",
    question: "What is CI/CD?",
    options: [
        "Continuous Integration / Continuous Deployment",
        "Centralized Infrastructure / Continuous Delivery",
        "Code Integration / Code Distribution",
        "Container Isolation / Container Deployment"
    ],
    answer: 0,
    explanation: "CI/CD is the practice of automatically building, testing, and deploying code changes, ensuring rapid and reliable software delivery.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-171",
    question: "In a Dockerfile, what is the purpose of a multi-stage build?",
    options: [
        "To run multiple containers simultaneously",
        "To use multiple 'FROM' statements to create intermediate build stages, discarding unnecessary tools in the final image to reduce size",
        "To deploy to multiple environments at once",
        "To build for multiple operating systems"
    ],
    answer: 1,
    explanation: "Multi-stage builds allow you to compile code in a large build environment, then copy only the compiled artifacts into a tiny production image like Alpine or scratch.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-172",
    question: "What is a Kubernetes Pod?",
    options: [
        "A group of Docker images",
        "The smallest deployable computing unit in Kubernetes, which encapsulates one or more application containers",
        "A Kubernetes node",
        "A storage volume"
    ],
    answer: 1,
    explanation: "A Pod represents a single instance of a running process in your cluster. Containers in the same Pod share the same network IP and storage.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-173",
    question: "What does a Docker Volume do?",
    options: [
        "Increases the CPU limit of a container",
        "Persists data generated by and used by Docker containers, surviving even if the container is deleted",
        "Compresses Docker images",
        "Connects multiple containers over a network"
    ],
    answer: 1,
    explanation: "Because container filesystems are ephemeral, Volumes provide a mechanism to persist data independently of the container's lifecycle.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-174",
    question: "What is a Kubernetes Service?",
    options: [
        "A microservice architecture pattern",
        "An abstraction that defines a logical set of Pods and a policy to access them, providing a stable IP and DNS name",
        "A Kubernetes master node",
        "A billing model for cloud providers"
    ],
    answer: 1,
    explanation: "Since Pods are ephemeral and their IPs change, a Service provides a stable endpoint (ClusterIP, LoadBalancer, or NodePort) to route traffic to healthy Pods.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-175",
    question: "What is the function of NGINX in a typical web architecture?",
    options: [
        "Executing Node.js code",
        "Acting as a reverse proxy, load balancer, and static file server",
        "Compiling SASS to CSS",
        "Managing PostgreSQL databases"
    ],
    answer: 1,
    explanation: "NGINX is highly efficient at handling concurrent connections, serving static files, and distributing traffic across multiple backend application servers.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-176",
    question: "What is Git Cherry-pick used for?",
    options: [
        "Picking the best branch to merge",
        "Applying the changes introduced by some existing commits to another branch, without merging the entire branch",
        "Deleting unwanted commits",
        "Resolving merge conflicts"
    ],
    answer: 1,
    explanation: "Cherry-pick is useful when you want to move a specific bug fix or feature commit from one branch to another without bringing over the rest of the branch's history.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-177",
    question: "What is a Docker Compose file used for?",
    options: [
        "Building a single Docker image",
        "Defining and running multi-container Docker applications, allowing you to configure services, networks, and volumes in a single YAML file",
        "Compressing Docker images for sharing",
        "Managing Kubernetes clusters"
    ],
    answer: 1,
    explanation: "Docker Compose simplifies local development by allowing you to spin up an entire stack (e.g., app, database, cache) with a single 'docker-compose up' command.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-178",
    question: "What is a Kubernetes Deployment?",
    options: [
        "The process of buying cloud infrastructure",
        "A controller that provides declarative updates for Pods and ReplicaSets, managing rollouts and rollbacks",
        "A way to deploy code directly to bare metal",
        "A Docker image registry"
    ],
    answer: 1,
    explanation: "Deployments manage the lifecycle of Pods, ensuring the desired number of replicas are running and handling zero-downtime rolling updates to new versions.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-179",
    question: "What is a Load Balancer?",
    options: [
        "A tool that balances code quality",
        "A device or software that distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed",
        "A way to balance memory usage in a database",
        "A Git strategy for balancing branches"
    ],
    answer: 1,
    explanation: "Load balancers improve application availability and responsiveness by routing client requests to the server with the most available capacity.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-180",
    question: "What is a Git Merge Conflict?",
    options: [
        "When two developers write the exact same code",
        "When changes from different branches overlap in a way that Git cannot automatically reconcile, requiring manual resolution",
        "When a branch is deleted while being merged",
        "When Git runs out of memory"
    ],
    answer: 1,
    explanation: "Merge conflicts happen when two branches modify the same line of code. Git pauses the merge and adds conflict markers, requiring a developer to choose the correct code.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-181",
    question: "What is the difference between 'git pull' and 'git fetch'?",
    options: [
        "git pull downloads data, git fetch uploads data",
        "git fetch downloads changes but does not update the working directory, while git pull downloads and automatically merges into the current branch",
        "git pull is safe, git fetch is dangerous",
        "There is no difference"
    ],
    answer: 1,
    explanation: "git fetch gives you a view of what changed without altering your local files, whereas git pull performs a fetch followed by an automatic merge or rebase.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-182",
    question: "What is an Ingress in Kubernetes?",
    options: [
        "A way to get into the Kubernetes cluster physically",
        "An API object that manages external access to the services in a cluster, typically providing HTTP routing and SSL termination",
        "A database connection protocol",
        "A type of Pod"
    ],
    answer: 1,
    explanation: "While a Service routes internal traffic, an Ingress acts as the entry point for external HTTP/HTTPS traffic, routing it to the correct Services based on host or path.",
    difficulty: "Hard",
    topic: "DevOps"
},
{
    id: "fs-183",
    question: "What is a Docker Network used for?",
    options: [
        "Connecting Docker to the internet",
        "Isolating containers so they can communicate with each other securely without exposing ports to the host machine",
        "Downloading Docker images faster",
        "Limiting the CPU usage of containers"
    ],
    answer: 1,
    explanation: "Docker networks allow containers to discover each other by name (e.g., 'db' container) and communicate securely over isolated virtual networks.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-184",
    question: "What is a Liveness Probe in Kubernetes?",
    options: [
        "A security probe to detect intrusions",
        "A check that determines if a container is still running and healthy; if it fails, Kubernetes restarts the container",
        "A probe that checks if a container is ready to receive traffic",
        "A tool to monitor CPU usage"
    ],
    answer: 1,
    explanation: "Liveness probes handle deadlocks or infinite loops. If the probe fails (e.g., an HTTP endpoint returns 500), the container is killed and restarted.",
    difficulty: "Hard",
    topic: "DevOps"
},
{
    id: "fs-185",
    question: "What is Infrastructure as Code (IaC)?",
    options: [
        "Writing backend APIs in C++",
        "Managing and provisioning infrastructure through machine-readable configuration files rather than manual processes",
        "Using code editors to write infrastructure documentation",
        "Converting physical servers to virtual machines"
    ],
    answer: 1,
    explanation: "IaC tools like Terraform allow you to define clouds, networks, and servers in code, ensuring environments are reproducible, version-controlled, and easily scalable.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-186",
    question: "Why should you avoid storing secrets in plain text in Dockerfiles?",
    options: [
        "It makes the Docker image larger",
        "Secrets get baked into the image layer, and anyone with access to the image can extract them",
        "Docker cannot read environment variables",
        "It prevents the container from starting"
    ],
    answer: 1,
    explanation: "Docker images are often shared via registries. Environment variables set via ENV in a Dockerfile are visible in plain text to anyone pulling the image.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-187",
    question: "What is a Kubernetes ConfigMap used for?",
    options: [
        "Storing encrypted passwords",
        "Storing non-confidential configuration data (like URLs or feature flags) separately from container images",
        "Mapping external IPs to internal Pods",
        "Configuring the Kubernetes master node"
    ],
    answer: 1,
    explanation: "ConfigMaps decouple environment-specific configuration from container images, allowing the same image to be used across dev, staging, and prod with different configs.",
    difficulty: "Hard",
    topic: "DevOps"
},
{
    id: "fs-188",
    question: "What is a Git Hook?",
    options: [
        "A way to hook into a remote server via SSH",
        "Scripts that Git executes automatically before or after events such as commit, push, or receive",
        "A graphical interface for Git",
        "A method to merge branches automatically"
    ],
    answer: 1,
    explanation: "Hooks (like pre-commit or husky) allow you to automate tasks like running linters or tests before a commit is allowed, enforcing code quality.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-189",
    question: "What is a DaemonSet in Kubernetes?",
    options: [
        "A set of environment variables",
        "Ensures that a copy of a Pod runs on all (or some) Nodes in the cluster, typically used for logging or monitoring agents",
        "A security policy for Pods",
        "A way to schedule one-off batch jobs"
    ],
    answer: 1,
    explanation: "As nodes are added to the cluster, a DaemonSet automatically adds the required Pods to them, making it perfect for cluster-wide services like Fluentd or Datadog agents.",
    difficulty: "Hard",
    topic: "DevOps"
},
{
    id: "fs-190",
    question: "What is the primary benefit of a Reverse Proxy?",
    options: [
        "It forwards requests from the internal network to the internet",
        "It sits in front of web servers, handling SSL termination, caching, and routing requests to the appropriate backend server",
        "It reverses the direction of network traffic",
        "It blocks all incoming traffic"
    ],
    answer: 1,
    explanation: "A reverse proxy acts as a gateway, abstracting the backend servers from the client, improving security, load balancing, and caching.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-191",
    question: "What is Helm in the Kubernetes ecosystem?",
    options: [
        "A Kubernetes dashboard",
        "A package manager for Kubernetes that simplifies deploying applications by packaging all necessary YAML files into a single 'Chart'",
        "A tool to monitor cluster health",
        "A security scanner for containers"
    ],
    answer: 1,
    explanation: "Helm charts are templated YAML files that allow you to define, install, and upgrade complex Kubernetes applications easily with a single command.",
    difficulty: "Hard",
    topic: "DevOps"
},
{
    id: "fs-192",
    question: "What is a Canary Deployment?",
    options: [
        "Deploying an app to a bird-named server",
        "A deployment strategy where a new version is released to a small subset of users first to test for stability before a full rollout",
        "A backup deployment kept in case the main one fails",
        "Deploying only the frontend without the backend"
    ],
    answer: 1,
    explanation: "Canary deployments reduce the blast radius of a faulty release by routing a small percentage of traffic to the new version and monitoring for errors.",
    difficulty: "Hard",
    topic: "DevOps"
},
{
    id: "fs-193",
    question: "What does the 'docker rmi' command do?",
    options: [
        "Removes a running container",
        "Removes one or more Docker images",
        "Restarts the Docker daemon",
        "Rebuilds an image"
    ],
    answer: 1,
    explanation: "The 'rmi' (remove image) command deletes an image from your local Docker host. You must stop and remove containers using the image before deleting it.",
    difficulty: "Easy",
    topic: "DevOps"
},
{
    id: "fs-194",
    question: "What is a Readiness Probe in Kubernetes?",
    options: [
        "A check to see if the node is ready",
        "A check that determines if a container is ready to accept network traffic; if it fails, the Pod is removed from Service load balancers",
        "A probe that checks if the Docker image is downloaded",
        "A security check before allowing SSH access"
    ],
    answer: 1,
    explanation: "Readiness probes ensure that traffic is only routed to Pods that are fully initialized and ready to handle requests, preventing user errors during startup.",
    difficulty: "Hard",
    topic: "DevOps"
},
{
    id: "fs-195",
    question: "What is the 'git stash' command used for?",
    options: [
        "Permanently deleting uncommitted changes",
        "Temporarily shelving modified, tracked files so you can switch branches without committing incomplete work",
        "Hiding a file from Git tracking",
        "Merging a branch without committing"
    ],
    answer: 1,
    explanation: "git stash saves your dirty working directory and index, reverting you to a clean state, allowing you to pull, branch, or merge before popping the stash back.",
    difficulty: "Medium",
    topic: "DevOps"
},
{
    id: "fs-196",
    question: "What is Microsoft Azure App Service?",
    options: [
        "A virtual machine hosting service",
        "A fully managed PaaS for building, deploying, and scaling web apps, APIs, and backend logic without managing infrastructure",
        "A database service",
        "A CI/CD pipeline tool"
    ],
    answer: 1,
    explanation: "Azure App Service abstracts server management, providing built-in auto-scaling, SSL, and deployment slots for web applications.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-197",
    question: "What is AWS S3 primarily used for?",
    options: [
        "Running serverless functions",
        "Object storage to store and retrieve any amount of data from anywhere on the web",
        "Relational database management",
        "Hosting Docker containers"
    ],
    answer: 1,
    explanation: "Amazon S3 (Simple Storage Service) is highly durable, scalable object storage used for assets, backups, and static website hosting.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-198",
    question: "What is a Serverless Function (e.g., Azure Functions, AWS Lambda)?",
    options: [
        "A function that runs without a programming language",
        "A stateless compute service that runs code in response to events without the need to provision or manage servers",
        "A frontend JavaScript function",
        "A database stored procedure"
    ],
    answer: 1,
    explanation: "Serverless functions abstract infrastructure entirely. You pay only for the compute time consumed during execution, scaling automatically from zero to massive traffic.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-199",
    question: "What is Vercel primarily used for?",
    options: [
        "Hosting Python machine learning models",
        "A cloud platform for frontend frameworks and static sites, offering seamless Git integration and global edge network deployment",
        "Managing relational databases",
        "Running Windows virtual machines"
    ],
    answer: 1,
    explanation: "Vercel is optimized for modern web frameworks (Next.js, React), providing instant previews, edge functions, and zero-config deployments.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-200",
    question: "What is the main benefit of using a CDN like Azure CDN or AWS CloudFront?",
    options: [
        "It reduces the cost of computing",
        "It caches content at edge locations globally, drastically reducing latency for users by serving data from a location geographically close to them",
        "It automatically writes backend APIs",
        "It provides a database for user sessions"
    ],
    answer: 1,
    explanation: "CDNs reduce the physical distance data must travel, preventing bottlenecks at the origin server and improving load times for static and dynamic content.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-201",
    question: "What is AWS IAM used for?",
    options: [
        "Managing EC2 instances",
        "Securely controlling access to AWS services and resources using users, groups, roles, and policies",
        "Managing database migrations",
        "Storing application secrets"
    ],
    answer: 1,
    explanation: "Identity and Access Management (IAM) ensures that only authorized entities (users or services) can interact with your AWS resources, following the principle of least privilege.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-202",
    question: "What is the difference between Azure Blob Storage and Azure File Storage?",
    options: [
        "Blob Storage is for text, File Storage is for images",
        "Blob Storage stores unstructured object data (like files/media), while File Storage manages fully managed file shares accessible via SMB protocol",
        "File Storage is cheaper than Blob Storage",
        "There is no difference; they are aliases"
    ],
    answer: 1,
    explanation: "Blob storage is optimized for massive scale and streaming (CDN integration). File storage is meant for legacy applications that need standard file system access (SMB/NFS).",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-203",
    question: "What is an AWS EC2 Instance?",
    options: [
        "A serverless database",
        "A virtual server in the AWS cloud providing scalable compute capacity",
        "A container orchestration service",
        "A content delivery network"
    ],
    answer: 1,
    explanation: "EC2 (Elastic Compute Cloud) provides resizable virtual machines (instances) where you have full control over the operating system and networking.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-204",
    question: "What is Firebase primarily used for?",
    options: [
        "Hosting Java backend applications",
        "A Google-backed BaaS (Backend as a Service) offering real-time databases, authentication, and hosting for web and mobile apps",
        "A CI/CD pipeline tool",
        "An infrastructure as code tool"
    ],
    answer: 1,
    explanation: "Firebase allows frontend developers to build full-stack applications rapidly by providing ready-to-use backend services via SDKs, eliminating the need to write backend code.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-205",
    question: "What is the purpose of Azure Key Vault?",
    options: [
        "Storing source code",
        "Securely storing and managing secrets, encryption keys, and certificates, allowing applications to access them without hardcoding",
        "Managing virtual networks",
        "Storing Docker images"
    ],
    answer: 1,
    explanation: "Key Vault centralizes secret management, allowing applications to fetch passwords or API keys at runtime, drastically improving security and rotation capabilities.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-206",
    question: "What is Google Cloud Run?",
    options: [
        "A managed Kubernetes service",
        "A serverless platform that runs stateless containers via web requests or events, automatically scaling from zero",
        "A virtual machine service",
        "A serverless SQL database"
    ],
    answer: 1,
    explanation: "Cloud Run bridges the gap between serverless and containers. You bring your Docker container, and Google scales it to zero when there's no traffic.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-207",
    question: "What is an AWS RDS?",
    options: [
        "A NoSQL database service",
        "A managed relational database service supporting multiple engines like PostgreSQL, MySQL, and SQL Server",
        "A routing service",
        "A data streaming service"
    ],
    answer: 1,
    explanation: "Amazon RDS handles time-consuming database administration tasks like provisioning, backups, patching, and scaling, so you can focus on your application.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-208",
    question: "What is Azure Active Directory (Entra ID) used for?",
    options: [
        "Hosting active web pages",
        "Identity and access management, enabling single sign-on (SSO) and multi-factor authentication for cloud and on-premises apps",
        "Managing Azure virtual machines",
        "Storing relational data"
    ],
    answer: 1,
    explanation: "Entra ID (formerly Azure AD) is an enterprise identity service that allows employees to log into applications using their corporate credentials securely.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-209",
    question: "What is the advantage of using AWS Lambda over EC2?",
    options: [
        "Lambda is always faster than EC2",
        "Lambda is event-driven and eliminates the need to provision or manage servers, billing only for actual execution time",
        "Lambda supports more programming languages",
        "Lambda provides a persistent file system"
    ],
    answer: 1,
    explanation: "Lambda is ideal for intermittent workloads. Unlike EC2, which runs continuously and bills by the hour, Lambda scales instantly and bills by the millisecond.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-210",
    question: "What is a Cloud Provider Availability Zone?",
    options: [
        "A specific pricing tier",
        "An isolated location within a region, designed to be insulated from failures in other zones, allowing for high-availability deployments",
        "A user account segment",
        "A type of virtual network"
    ],
    answer: 1,
    explanation: "Regions consist of multiple, physically separated Availability Zones. Deploying across zones ensures that if one data center goes down, your application remains online.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-211",
    question: "What is Azure API Management?",
    options: [
        "A tool to write APIs",
        "A service that allows organizations to publish, secure, transform, maintain, and monitor APIs at scale",
        "A database for API logs",
        "A replacement for Azure Functions"
    ],
    answer: 1,
    explanation: "API Management acts as a gateway for APIs, providing developer portals, rate limiting, caching, and policy-based transformations without modifying backend code.",
    difficulty: "Hard",
    topic: "Cloud"
},
{
    id: "fs-212",
    question: "What is the difference between AWS EKS and ECS?",
    options: [
        "ECS is older and deprecated",
        "ECS is AWS's proprietary container orchestration service, while EKS is a managed Kubernetes service",
        "EKS uses Docker, ECS uses VMs",
        "ECS is for serverless, EKS is for VMs"
    ],
    answer: 1,
    explanation: "ECS is deeply integrated with AWS and uses its own scheduling logic. EKS runs standard Kubernetes, making it portable but requiring more configuration.",
    difficulty: "Hard",
    topic: "Cloud"
},
{
    id: "fs-213",
    question: "What is Azure Monitor used for?",
    options: [
        "Monitoring employee screen time",
        "Collecting, analyzing, and acting on telemetry data from cloud and on-premises environments, including logs and metrics",
        "Writing Azure functions",
        "Managing Azure costs"
    ],
    answer: 1,
    explanation: "Azure Monitor provides a unified platform for logging, metrics, and distributed tracing, helping developers understand how applications are performing and quickly diagnose issues.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-214",
    question: "What is a Cold Start in Serverless Computing?",
    options: [
        "When a server crashes due to cold temperatures",
        "The latency incurred when a serverless function is invoked after being idle, requiring the cloud provider to provision a new container instance",
        "When a database connection drops",
        "When a CDN cache expires"
    ],
    answer: 1,
    explanation: "Cold starts happen because serverless platforms destroy idle containers to save resources. The next request must wait for the environment to be downloaded and initialized.",
    difficulty: "Hard",
    topic: "Cloud"
},
{
    id: "fs-215",
    question: "What is Infrastructure as a Service (IaaS)?",
    options: [
        "Software provided over the internet, like email",
        "Cloud computing where providers supply virtualized computing resources over the internet (e.g., VMs, storage, networks)",
        "A fully managed platform for deploying code",
        "A specific type of database"
    ],
    answer: 1,
    explanation: "IaaS (like AWS EC2 or Azure VMs) gives you the most control over the infrastructure, requiring you to manage the OS, runtime, and applications.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-216",
    question: "What is an AWS CloudFront Origin?",
    options: [
        "The country where the CDN was created",
        "The origin server or location where CloudFront fetches the content when it is not cached at the edge",
        "The first user to request a file",
        "The DNS server for the CDN"
    ],
    answer: 1,
    explanation: "When a user requests content not in the edge cache, CloudFront routes the request to the Origin (e.g., an S3 bucket or an Application Load Balancer) to fetch it.",
    difficulty: "Hard",
    topic: "Cloud"
},
{
    id: "fs-217",
    question: "What is the purpose of a VPC (Virtual Private Cloud)?",
    options: [
        "To provide a public website builder",
        "To create a logically isolated network segment in the cloud where you can launch resources in a secure, private environment",
        "To compress cloud data",
        "To automatically scale applications"
    ],
    answer: 1,
    explanation: "A VPC allows you to define your own IP ranges, subnets, route tables, and network gateways, giving you complete control over your cloud networking environment.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-218",
    question: "What is Supabase?",
    options: [
        "An AWS monitoring tool",
        "An open-source Firebase alternative providing a Postgres database, authentication, instant APIs, and real-time subscriptions",
        "A static site hosting platform",
        "A CI/CD tool"
    ],
    answer: 1,
    explanation: "Supabase leverages PostgreSQL instead of NoSQL, giving developers the power of a relational database combined with the developer experience of Firebase.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-219",
    question: "What is Netlify primarily known for?",
    options: [
        "Running heavy machine learning models",
        "Continuous deployment of static websites and frontend frameworks, with built-in serverless functions and form handling",
        "Hosting Java enterprise applications",
        "Managing Kubernetes clusters"
    ],
    answer: 1,
    explanation: "Netlify excels at the JAMstack architecture, automatically building and deploying static sites directly from Git repositories with global edge routing.",
    difficulty: "Easy",
    topic: "Cloud"
},
{
    id: "fs-220",
    question: "What is a Cloud Armor or WAF on GCP/AWS?",
    options: [
        "A service to create virtual machines",
        "A Web Application Firewall that protects web applications from malicious attacks like SQLi and XSS by filtering HTTP traffic",
        "A tool to manage container images",
        "A database encryption service"
    ],
    answer: 1,
    explanation: "WAFs inspect incoming HTTP/HTTPS traffic and block requests that match malicious patterns, providing an additional security layer in front of your application.",
    difficulty: "Hard",
    topic: "Cloud"
},
{
    id: "fs-221",
    question: "What is an AWS Elastic Beanstalk?",
    options: [
        "A NoSQL database",
        "An easy-to-use service for deploying and scaling web applications and services, automatically handling the underlying infrastructure (EC2, RDS, Load Balancers)",
        "A message queue service",
        "A serverless function"
    ],
    answer: 1,
    explanation: "Elastic Beanstalk abstracts infrastructure. You upload code, and it automatically provisions the load balancer, auto-scaling group, and EC2 instances required to run it.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-222",
    question: "What is the difference between PaaS and SaaS?",
    options: [
        "PaaS is for databases, SaaS is for frontend",
        "PaaS provides a platform to build, run, and manage applications without maintaining infrastructure, while SaaS provides ready-to-use software accessed via the browser",
        "SaaS requires coding, PaaS does not",
        "There is no difference"
    ],
    answer: 1,
    explanation: "PaaS (like Heroku) gives developers a framework to build apps. SaaS (like Gmail or Salesforce) is the final software product delivered to end-users.",
    difficulty: "Medium",
    topic: "Cloud"
},
{
    id: "fs-223",
    question: "What is an Azure Container Registry (ACR)?",
    options: [
        "A registry for managing domain names",
        "A private, managed Docker container registry used to store, manage, and deploy container images for Azure deployments",
        "A database for container logs",
        "A service to run containers"
    ],
    answer: 1,
    explanation: "ACR allows you to build, store, secure, scan, and manage container images and artifacts, integrating natively with Azure Kubernetes Service (AKS).",
    difficulty: "Hard",
    topic: "Cloud"
},
{
    id: "fs-224",
    question: "What is a StatefulSet in Kubernetes vs a Deployment?",
    options: [
        "StatefulSets are faster",
        "Deployments are for stateless apps (Pods are interchangeable), while StatefulSets are for stateful apps requiring stable network identity and persistent storage",
        "StatefulSets do not support auto-scaling",
        "Deployments cannot have persistent volumes"
    ],
    answer: 1,
    explanation: "StatefulSets guarantee the ordering and uniqueness of Pods (e.g., database-0, database-1) and bind specific persistent volumes to specific Pods, essential for databases.",
    difficulty: "Hard",
    topic: "Cloud"
},
{
    id: "fs-225",
    question: "What is Cloud Bursting?",
    options: [
        "When a cloud server crashes",
        "A configuration where an application runs in a private cloud or data center and 'bursts' into a public cloud to handle spikes in demand",
        "A network attack on cloud providers",
        "Transferring data between two different cloud providers"
    ],
    answer: 1,
    explanation: "Cloud bursting allows organizations to leverage the scalability of the public cloud only when on-premises infrastructure reaches maximum capacity.",
    difficulty: "Hard",
    topic: "Cloud"
},
{
    id: "fs-226",
    question: "What is Unit Testing?",
    options: [
        "Testing the entire application end-to-end",
        "Testing individual components or functions in isolation to ensure they work correctly as intended",
        "Testing the integration between frontend and backend",
        "Testing server load and performance"
    ],
    answer: 1,
    explanation: "Unit tests focus on the smallest testable parts of an application, like a single function, mocking all external dependencies to isolate the logic.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-227",
    question: "In Jest, what does the 'describe' block do?",
    options: [
        "It runs a single test case",
        "It groups related test cases together into a test suite for better organization and readability",
        "It mocks a module",
        "It sets up the test environment"
    ],
    answer: 1,
    explanation: "describe('ComponentName', () => {...}) creates a block that groups several related 'it' or 'test' blocks, making test output easier to read.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-228",
    question: "What is the difference between 'it' and 'test' in Jest?",
    options: [
        "'it' is for async tests, 'test' is for sync tests",
        "'test' is only available in Mocha",
        "There is no functional difference; they are aliases for the same test case function",
        "'it' runs before 'test'"
    ],
    answer: 2,
    explanation: "Jest provides both 'it' and 'test' as aliases to define individual test cases. Developers can choose the one that makes the test read more naturally.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-229",
    question: "What is End-to-End (E2E) Testing?",
    options: [
        "Testing individual React components",
        "Testing the complete workflow of an application from start to finish in a browser, simulating real user behavior",
        "Testing database queries only",
        "Testing API endpoints in isolation"
    ],
    answer: 1,
    explanation: "E2E tests (using tools like Cypress or Playwright) interact with the app exactly as a user would, verifying that all integrated pieces work together correctly.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-230",
    question: "What is a Mock in testing?",
    options: [
        "A fake version of a real object that simulates its behavior, used to isolate the code under test from external dependencies",
        "A real database connection used in tests",
        "A syntax error injected to test error handling",
        "A type of test runner"
    ],
    answer: 0,
    explanation: "Mocks replace complex real-world dependencies (like a payment gateway or a database) with controlled fakes, ensuring tests are fast and deterministic.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-231",
    question: "What is Code Coverage?",
    options: [
        "A metric showing how much of the source code is executed during testing",
        "A tool to hide code from competitors",
        "The percentage of developers writing tests",
        "The number of bugs found per line of code"
    ],
    answer: 0,
    explanation: "Code coverage (e.g., line, branch, function coverage) identifies untested parts of the codebase, helping developers know where more tests might be needed.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-232",
    question: "Why is React Testing Library preferred over Enzyme?",
    options: [
        "It is faster to write",
        "It tests components the way users interact with them (by text, role) rather than testing internal implementation details (like state)",
        "It does not require Jest",
        "It can test CSS styles"
    ],
    answer: 1,
    explanation: "React Testing Library encourages refactoring-safe tests by querying the DOM like a user would, avoiding brittle tests that break when internal component logic changes.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-233",
    question: "What is the purpose of 'beforeEach' in a testing framework?",
    options: [
        "To run a test only once before all other tests",
        "To execute a setup function before every single test case in a describe block to ensure a clean state",
        "To clean up the database after tests",
        "To skip failing tests"
    ],
    answer: 1,
    explanation: "beforeEach prevents test pollution by resetting mocks, clearing DOM elements, or reinitializing variables before each individual test runs.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-234",
    question: "What is Cypress primarily used for?",
    options: [
        "Unit testing Node.js backends",
        "End-to-end testing of web applications directly in the browser",
        "Load testing APIs",
        "Mobile app testing"
    ],
    answer: 1,
    explanation: "Cypress runs inside the browser, giving it native access to the DOM and network, making it incredibly fast and reliable for E2E frontend testing.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-235",
    question: "What is a Snapshot Test?",
    options: [
        "A backup of the database",
        "A test that captures the rendered output of a component and compares it to a previously saved reference image/string to detect unexpected changes",
        "A performance test that measures render time",
        "A test that checks if a file exists"
    ],
    answer: 1,
    explanation: "Snapshot tests are useful for ensuring UI does not change unexpectedly. If the output differs from the saved snapshot, the test fails, and the developer must intentionally update it.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-236",
    question: "What is Integration Testing?",
    options: [
        "Testing individual functions",
        "Testing how different modules or services work together, often involving databases, APIs, and external services",
        "Testing the deployment pipeline",
        "Testing user acceptance criteria"
    ],
    answer: 1,
    explanation: "Integration tests verify that the interactions between various parts of the system (e.g., a controller talking to a database) work as expected.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-237",
    question: "In Playwright, what is a benefit over Cypress?",
    options: [
        "Playwright only supports Chrome",
        "Playwright supports multiple browser engines (Chromium, Firefox, WebKit) and handles multiple tabs/windows natively",
        "Playwright does not require installation",
        "Playwright is written in Python"
    ],
    answer: 1,
    explanation: "Playwright's cross-browser support and native multi-tab/window capabilities make it ideal for comprehensive E2E testing across all major browsers.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-238",
    question: "What does the 'jest.fn()' function do?",
    options: [
        "Creates a new file for testing",
        "Creates a mock function that tracks calls, arguments, and return values, allowing you to assert how it was used",
        "Runs a test asynchronously",
        "Imports a Node module"
    ],
    answer: 1,
    explanation: "jest.fn() is the foundation of mocking in Jest. It replaces actual function implementations with spies that record how they were called.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-239",
    question: "What is a Flaky Test?",
    options: [
        "A test that takes too long to run",
        "A test that passes or fails non-deterministically without any code changes, often due to timing issues, network latency, or shared state",
        "A test that tests error handling",
        "A test written in a different programming language"
    ],
    answer: 1,
    explanation: "Flaky tests undermine trust in the CI/CD pipeline. They often occur when tests rely on shared state, exact timings, or external services.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-240",
    question: "How do you test an async function in Jest?",
    options: [
        "By using the 'sync' keyword",
        "By returning the promise from the test function, or by using 'async/await' inside the test",
        "By using 'jest.sync()'",
        "Async functions cannot be tested in Jest"
    ],
    answer: 1,
    explanation: "Jest automatically waits for a returned Promise to resolve. Using 'async/await' makes the test code read like synchronous code while handling the asynchronous execution.",
    difficulty: "Easy",
    topic: "Testing"
},
{
    id: "fs-241",
    question: "What is the difference between 'jest.mock' and 'jest.spyOn'?",
    options: [
        "They are exactly the same",
        "jest.mock replaces the entire module with a mock, while jest.spyOn wraps an existing method to track calls but preserves the original implementation by default",
        "jest.spyOn is used for functions, jest.mock is used for variables",
        "jest.mock is deprecated"
    ],
    answer: 1,
    explanation: "spyOn is less destructive, allowing you to listen in on a method without completely breaking its default behavior unless you explicitly override it.",
    difficulty: "Hard",
    topic: "Testing"
},
{
    id: "fs-242",
    question: "What is a Test Double?",
    options: [
        "Running a test twice to ensure accuracy",
        "A generic term for any object that stands in for a real object during testing (e.g., Mocks, Stubs, Fakes)",
        "A test that validates database schemas",
        "A duplicate test file"
    ],
    answer: 1,
    explanation: "Gerard Meszaros coined the term 'Test Double' (like a stunt double) to categorize all fakes, mocks, stubs, and spies used in testing.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-243",
    question: "What is a Stub in testing?",
    options: [
        "A test that is incomplete",
        "A test double that provides predefined (canned) answers to calls made during the test, usually not caring about how many times it was called",
        "A type of database used only for testing",
        "A fake web server"
    ],
    answer: 1,
    explanation: "Stubs force a specific code path (e.g., forcing an error condition) by returning hardcoded values, without the assertion capabilities of a mock.",
    difficulty: "Hard",
    topic: "Testing"
},
{
    id: "fs-244",
    question: "Why should you avoid hitting real databases in unit tests?",
    options: [
        "Databases are too fast",
        "It makes tests slow, non-deterministic (due to state changes), and dependent on external infrastructure, breaking the isolation principle",
        "Databases cannot be accessed from test files",
        "It is technically impossible"
    ],
    answer: 1,
    explanation: "Unit tests must be fast and predictable. Hitting a real database introduces network latency and state pollution, which belongs in integration tests.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-245",
    question: "What is Visual Regression Testing?",
    options: [
        "Testing if a user can see the screen",
        "Comparing screenshots of a UI before and after a code change to detect unintended visual bugs",
        "Testing color contrast for accessibility",
        "Testing if images load correctly"
    ],
    answer: 1,
    explanation: "Tools like Percy or Chromatic take baseline screenshots. If a pull request changes pixels unexpectedly, the test fails, preventing visual bugs from reaching production.",
    difficulty: "Hard",
    topic: "Testing"
},
{
    id: "fs-246",
    question: "What is Mutation Testing?",
    options: [
        "Testing how a codebase handles mutations from hackers",
        "A testing technique where small changes (mutations) are intentionally introduced into the code to see if the existing tests can detect them",
        "A way to mutate test files",
        "Testing genetic algorithms"
    ],
    answer: 1,
    explanation: "If a test suite passes even after the code is mutated (e.g., changing > to >=), it indicates the test suite is weak and lacks sufficient assertions.",
    difficulty: "Hard",
    topic: "Testing"
},
{
    id: "fs-247",
    question: "In Cypress, how do you intercept an HTTP request?",
    options: [
        "cy.wait()",
        "cy.intercept()",
        "cy.request()",
        "cy.mock()"
    ],
    answer: 1,
    explanation: "cy.intercept() allows you to spy on, stub, or modify network requests, enabling you to test how the UI behaves with different API responses without hitting the real backend.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-248",
    question: "What is a Smoke Test?",
    options: [
        "Testing the application under heavy server load",
        "A preliminary test run to verify that the most critical functions of a software application work, before proceeding to more rigorous testing",
        "A test that checks for memory leaks",
        "A security test for vulnerabilities"
    ],
    answer: 1,
    explanation: "Derived from hardware testing, a software smoke test ensures the build is stable enough for further testing (e.g., 'Does the app even load?').",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-249",
    question: "What is Contract Testing in microservices?",
    options: [
        "Testing the legal terms of an API",
        "Testing that the consumer and provider of an API agree on the expected shape of the data, ensuring they can communicate without breaking changes",
        "Testing the deployment scripts",
        "Testing the database schema"
    ],
    answer: 1,
    explanation: "Tools like Pact verify that a microservice (consumer) expects the exact same data format that the other microservice (provider) actually sends.",
    difficulty: "Hard",
    topic: "Testing"
},
{
    id: "fs-250",
    question: "What is the purpose of 'jest.clearAllMocks()'?",
    options: [
        "To delete all test files",
        "To clear all mocked function calls, instances, contexts, and results without restoring the original implementation",
        "To remove Jest from the project",
        "To stop all running tests"
    ],
    answer: 1,
    explanation: "clearAllMocks() resets the state of mocks (e.g., how many times they were called) but keeps the mock implementation, unlike restoreAllMocks().",
    difficulty: "Hard",
    topic: "Testing"
},
{
    id: "fs-251",
    question: "What is a boundary value in testing?",
    options: [
        "The maximum number of tests allowed in a suite",
        "A value at the edge of an equivalence class, where errors are most likely to occur (e.g., testing 0, 1, and Max-1, Max for an array limit)",
        "A value outside the allowed range",
        "The limit of code coverage"
    ],
    answer: 1,
    explanation: "Boundary value analysis is a technique where you test the extreme edges of input ranges, as off-by-one errors are extremely common in software development.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-252",
    question: "What is a Fake in testing terminology?",
    options: [
        "A test that is intentionally wrong",
        "An implementation that takes a shortcut but has a working, production-like behavior (e.g., an in-memory database)",
        "A fake user account",
        "A mock that always returns false"
    ],
    answer: 1,
    explanation: "Unlike stubs or mocks, Fakes actually have working implementations. For example, using an in-memory array instead of a real SQL database for testing.",
    difficulty: "Hard",
    topic: "Testing"
},
{
    id: "fs-253",
    question: "What is Performance Testing?",
    options: [
        "Testing how fast a developer writes code",
        "Evaluating a system's responsiveness, stability, speed, and reliability under a particular workload",
        "Testing the UI design for performance",
        "Checking the performance of the CI pipeline"
    ],
    answer: 1,
    explanation: "Performance testing (including load and stress testing) ensures the application can handle expected traffic spikes without degrading the user experience.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-254",
    question: "How does Vitest differ from Jest?",
    options: [
        "Vitest is written in Python",
        "Vitest is a modern test runner built natively for Vite, offering faster execution via native ES modules and out-of-the-box ESM support",
        "Vitest does not support React",
        "Vitest requires a complex configuration file"
    ],
    answer: 1,
    explanation: "Vitest leverages Vite's transform pipeline, making it significantly faster than Jest for modern JavaScript projects using ES Modules and TypeScript.",
    difficulty: "Hard",
    topic: "Testing"
},
{
    id: "fs-255",
    question: "What is Acceptance Testing?",
    options: [
        "Testing if the code compiles",
        "A formal test conducted to determine if a system satisfies acceptance criteria, usually defined by the customer or product owner",
        "Testing if developers accept the code",
        "A test run only in the development environment"
    ],
    answer: 1,
    explanation: "Acceptance testing (often UAT - User Acceptance Testing) is the final phase of testing where the business validates that the software meets their requirements.",
    difficulty: "Medium",
    topic: "Testing"
},
{
    id: "fs-256",
    question: "What is Cross-Site Scripting (XSS)?",
    options: [
        "An attack where malicious scripts are injected into trusted websites, executing in the victim's browser",
        "An attack that steals passwords directly from the server",
        "A method to crash the database",
        "A type of DDoS attack"
    ],
    answer: 0,
    explanation: "XSS occurs when an attacker injects malicious JavaScript into a web page viewed by other users, allowing them to steal session tokens or manipulate the DOM.",
    difficulty: "Easy",
    topic: "Security"
},
{
    id: "fs-257",
    question: "What is a SQL Injection attack?",
    options: [
        "Injecting JavaScript into a SQL database",
        "Inserting malicious SQL statements into an entry field to manipulate or destroy the database",
        "A network attack on the SQL port",
        "Overloading the SQL server with queries"
    ],
    answer: 1,
    explanation: "SQL Injection exploits poor input validation to execute arbitrary SQL commands, potentially bypassing authentication, deleting data, or exfiltrating records.",
    difficulty: "Easy",
    topic: "Security"
},
{
    id: "fs-258",
    question: "What is the purpose of the 'Content-Security-Policy' (CSP) header?",
    options: [
        "To speed up page loading",
        "To prevent XSS by specifying which sources of content (scripts, images, styles) are allowed to be loaded by the browser",
        "To compress the response body",
        "To authenticate API requests"
    ],
    answer: 1,
    explanation: "CSP is a defense-in-depth mechanism. If an attacker injects a script, the browser will block it if the script's source is not whitelisted in the CSP header.",
    difficulty: "Medium",
    topic: "Security"
},
{
    id: "fs-259",
    question: "What is Cross-Site Request Forgery (CSRF)?",
    options: [
        "Stealing a user's password",
        "Tricking an authenticated user into executing unwanted actions on a web application where they are currently authenticated",
        "A brute-force attack on a login form",
        "An attack that alters DNS records"
    ],
    answer: 1,
    explanation: "CSRF exploits the trust a site has in a user's browser. If a user is logged into their bank and visits a malicious site, that site can submit a form to the bank on their behalf.",
    difficulty: "Medium",
    topic: "Security"
},
{
    id: "fs-260",
    question: "How do you prevent CSRF attacks?",
    options: [
        "Using HTTPS only",
        "Using anti-CSRF tokens that are validated on the server for every state-changing request",
        "Encrypting the database",
        "Using POST requests instead of GET"
    ],
    answer: 1,
    explanation: "CSRF tokens are random, unique strings tied to a user's session. The server verifies this token on submission; an attacker's site cannot know or send this token.",
    difficulty: "Medium",
    topic: "Security"
},
{
    id: "fs-261",
    question: "What is the OWASP Top 10?",
    options: [
        "A list of the top 10 programming languages",
        "A standard awareness document representing a broad consensus about the most critical security risks to web applications",
        "A list of the top 10 cloud providers",
        "A cybersecurity certification"
    ],
    answer: 1,
    explanation: "OWASP (Open Web Application Security Project) regularly updates this list to help developers secure their apps against the most prevalent vulnerabilities like Injection and Broken Access Control.",
    difficulty: "Easy",
    topic: "Security"
},
{
    id: "fs-262",
    question: "What is the difference between Hashing and Encryption?",
    options: [
        "They are the same thing",
        "Hashing is a one-way function to verify integrity (e.g., passwords), while encryption is a two-way function to secure data that must be decrypted later",
        "Encryption is faster than hashing",
        "Hashing is used for data at rest, encryption for data in transit"
    ],
    answer: 1,
    explanation: "You cannot reverse a hash to get the original data. Encryption uses keys to scramble data that can be decrypted back to its original form using the correct key.",
    difficulty: "Medium",
    topic: "Security"
},
{
    id: "fs-263",
    question: "What is a NoSQL Injection?",
    options: [
        "Injecting SQL syntax into a NoSQL database",
        "Attacking a NoSQL database (like MongoDB) by manipulating query objects based on user input (e.g., passing { $gt: '' } to bypass login)",
        "Deleting the NoSQL database",
        "A network attack targeting NoSQL ports"
    ],
    answer: 1,
    explanation: "If user input is directly passed into a MongoDB query object, attackers can inject operators like $ne (not equal) or $regex to bypass authentication or extract data.",
    difficulty: "Hard",
    topic: "Security"
},
{
    id: "fs-264",
    question: "What is a Secure Cookie?",
    options: [
        "A cookie that is encrypted",
        "A cookie sent only over HTTPS, ensuring it cannot be intercepted in plain text over an unencrypted HTTP connection",
        "A cookie that expires immediately",
        "A cookie that cannot be deleted"
    ],
    answer: 1,
    explanation: "Setting the 'Secure' flag prevents the browser from transmitting the cookie over insecure HTTP, protecting it from man-in-the-middle attacks.",
    difficulty: "Medium",
    topic: "Security"
},
{
    id: "fs-265",
    question: "What is the principle of Least Privilege?",
    options: [
        "Giving all users admin access to prevent permission errors",
        "Providing users and services with only the minimum access rights necessary to perform their tasks",
        "Limiting the number of API calls a user can make",
        "Restricting access to the database only"
    ],
    answer: 1,
    explanation: "Least privilege limits the blast radius of a compromised account or service. If a read-only service is hacked, the attacker cannot delete data.",
    difficulty: "Medium",
    topic: "Security"
},
{
    id: "fs-266",
    question: "Why should you never commit secrets (like API keys) to Git?",
    options: [
        "It makes the repository too large",
        "Git history is permanent, and once pushed, the secret is exposed even if deleted in the next commit, requiring secret rotation and history rewriting",
        "It breaks the CI/CD pipeline",
        "Git cannot encrypt files"
    ],
    answer: 1,
    explanation: "Simply deleting a file in a new commit does not remove it from Git history. Anyone with access to the repo can retrieve the secret, making it a massive security risk.",
    difficulty: "Easy",
    topic: "Security"
},
{
    id: "fs-267",
    question: "What is an HTTP Strict Transport Security (HSTS) header?",
    options: [
        "A header that compresses HTTP traffic",
        "A header that forces browsers to only connect via HTTPS, preventing protocol downgrade attacks and cookie hijacking",
        "A header that limits HTTP request sizes",
        "A header used for basic authentication"
    ],
    answer: 1,
    explanation: "HSTS tells the browser to never load the site via HTTP, even if the user types http://, protecting them from SSL stripping attacks.",
    difficulty: "Hard",
    topic: "Security"
},
{
    id: "fs-268",
    question: "What is a Man-in-the-Middle (MitM) attack?",
    options: [
        "When two hackers attack each other",
        "When an attacker secretly intercepts and possibly alters the communication between two parties who believe they are directly communicating",
        "An attack that happens inside a corporate network",
        "A physical attack on server cables"
    ],
    answer: 1,
    explanation: "MitM attacks often occur on unsecured public Wi-Fi, allowing the attacker to eavesdrop or modify traffic between the user and the server.",
    difficulty: "Easy",
    topic: "Security"
}
]