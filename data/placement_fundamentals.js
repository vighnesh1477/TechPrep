// Placement Fundamentals Questions
export default [
{
    "id": "pf-1",
    "question": "What does the command 'git init' do?",
    "options": [
        "Initializes a new Git repository in the current directory",
        "Installs Git on the system",
        "Creates a new branch called init",
        "Downloads a remote repository"
    ],
    "answer": 0,
    "explanation": "git init creates a new .git subdirectory in the current folder, initializing it as a Git repository where version tracking can begin.",
    "difficulty": "Easy",
    "topic": "Git"
},
{
    "id": "pf-2",
    "question": "Which Git command stages all modified and new files for the next commit?",
    "options": [
        "git add .",
        "git commit -a",
        "git stage all",
        "git push --all"
    ],
    "answer": 0,
    "explanation": "git add . stages all changes in the current directory and subdirectories, preparing them for inclusion in the next commit.",
    "difficulty": "Easy",
    "topic": "Git"
},
{
    "id": "pf-3",
    "question": "What information does 'git status' display?",
    "options": [
        "Branch name, staged changes, unstaged changes, and untracked files",
        "Only the list of committed files",
        "Remote repository URL and credentials",
        "Git configuration settings"
    ],
    "answer": 0,
    "explanation": "git status shows the current branch, files staged for commit, modified but unstaged files, and untracked files in the working directory.",
    "difficulty": "Easy",
    "topic": "Git"
},
{
    "id": "pf-4",
    "question": "Which command creates a new commit with the message 'Initial commit'?",
    "options": [
        "git commit -m 'Initial commit'",
        "git save 'Initial commit'",
        "git push -m 'Initial commit'",
        "git record 'Initial commit'"
    ],
    "answer": 0,
    "explanation": "git commit -m followed by a message string creates a new commit with the provided message, recording the currently staged changes.",
    "difficulty": "Easy",
    "topic": "Git"
},
{
    "id": "pf-5",
    "question": "What does 'git log' display?",
    "options": [
        "A chronological list of commits in the current branch",
        "A log of all file modifications since the last commit",
        "System-level Git operation logs",
        "Remote repository access logs"
    ],
    "answer": 0,
    "explanation": "git log displays commit history in reverse chronological order, showing commit hashes, author, date, and commit messages.",
    "difficulty": "Easy",
    "topic": "Git"
},
{
    "id": "pf-6",
    "question": "What is GitHub?",
    "options": [
        "A cloud-based platform for hosting and collaborating on Git repositories",
        "A local Git client application",
        "A Git alternative version control system",
        "A command-line tool for Git operations"
    ],
    "answer": 0,
    "explanation": "GitHub is a web-based platform that provides hosting for Git repositories, along with features for collaboration, code review, and project management.",
    "difficulty": "Easy",
    "topic": "GitHub"
},
{
    "id": "pf-7",
    "question": "What is a repository on GitHub?",
    "options": [
        "A project folder hosted on GitHub that contains all files and revision history",
        "A single file stored on GitHub servers",
        "A backup of the local filesystem",
        "A database of user credentials"
    ],
    "answer": 0,
    "explanation": "A GitHub repository is a cloud-hosted project containing all files, folders, and the complete Git revision history for that project.",
    "difficulty": "Easy",
    "topic": "GitHub"
},
{
    "id": "pf-8",
    "question": "How do you download a remote GitHub repository to your local machine?",
    "options": [
        "git clone followed by the repository URL",
        "git download followed by the repository URL",
        "git copy followed by the repository URL",
        "git pull followed by the repository URL"
    ],
    "answer": 0,
    "explanation": "git clone creates a full local copy of a remote repository, including all branches, commit history, and tracked files.",
    "difficulty": "Easy",
    "topic": "GitHub"
},
{
    "id": "pf-9",
    "question": "What is GitLab primarily used for?",
    "options": [
        "Source code management, CI/CD, and DevOps lifecycle management",
        "Only for hosting static websites",
        "Only for managing database schemas",
        "Only for project documentation"
    ],
    "answer": 0,
    "explanation": "GitLab is a comprehensive DevOps platform that provides source code management, built-in CI/CD pipelines, issue tracking, and container registry.",
    "difficulty": "Easy",
    "topic": "GitLab"
},
{
    "id": "pf-10",
    "question": "Which feature distinguishes GitLab from GitHub?",
    "options": [
        "Built-in CI/CD pipelines without requiring external integrations",
        "GitLab does not support pull requests",
        "GitLab only supports private repositories",
        "GitLab does not support Git"
    ],
    "answer": 0,
    "explanation": "GitLab includes built-in CI/CD through .gitlab-ci.yml configuration files, whereas GitHub historically required GitHub Actions or external tools for CI/CD.",
    "difficulty": "Easy",
    "topic": "GitLab"
},
{
    "id": "pf-11",
    "question": "What is version control?",
    "options": [
        "A system that records changes to files over time so you can recall specific versions later",
        "A method for encrypting source code files",
        "A tool for compressing large files",
        "A technique for formatting code automatically"
    ],
    "answer": 0,
    "explanation": "Version control is a system that tracks and manages changes to files, allowing developers to revert to previous states, compare changes, and collaborate effectively.",
    "difficulty": "Easy",
    "topic": "Version Control"
},
{
    "id": "pf-12",
    "question": "Which of the following is a distributed version control system?",
    "options": [
        "Git",
        "SVN",
        "CVS",
        "Perforce"
    ],
    "answer": 0,
    "explanation": "Git is a distributed version control system where every developer has a full copy of the repository, unlike centralized systems like SVN and CVS.",
    "difficulty": "Easy",
    "topic": "Version Control"
},
{
    "id": "pf-13",
    "question": "What is a commit in Git?",
    "options": [
        "A snapshot of the staged changes at a point in time with a unique identifier",
        "A command to upload files to a server",
        "A temporary save that is automatically deleted after 24 hours",
        "A copy of the entire repository sent to all collaborators"
    ],
    "answer": 0,
    "explanation": "A commit is a permanent snapshot of staged changes, identified by a unique SHA-1 hash, that records the state of the project at that moment.",
    "difficulty": "Easy",
    "topic": "Commit"
},
{
    "id": "pf-14",
    "question": "What does the '-m' flag do in 'git commit -m \"message\"'?",
    "options": [
        "Specifies the commit message directly from the command line",
        "Marks the commit as a merge commit",
        "Modifies the last commit",
        "Mutes Git output for this operation"
    ],
    "answer": 0,
    "explanation": "The -m flag allows you to provide the commit message inline on the command line, avoiding opening a text editor for message entry.",
    "difficulty": "Easy",
    "topic": "Commit"
},
{
    "id": "pf-15",
    "question": "Which command creates a new branch named 'feature-login'?",
    "options": [
        "git branch feature-login",
        "git new branch feature-login",
        "git create branch feature-login",
        "git add branch feature-login"
    ],
    "answer": 0,
    "explanation": "git branch followed by a name creates a new branch pointing to the current commit without switching to it.",
    "difficulty": "Easy",
    "topic": "Branching"
},
{
    "id": "pf-16",
    "question": "How do you switch to an existing branch named 'develop'?",
    "options": [
        "git checkout develop",
        "git switch-to develop",
        "git go develop",
        "git move develop"
    ],
    "answer": 0,
    "explanation": "git checkout followed by the branch name switches the working directory to that branch. Modern Git also supports 'git switch develop'.",
    "difficulty": "Easy",
    "topic": "Branching"
},
{
    "id": "pf-17",
    "question": "What is the default branch name when initializing a new Git repository?",
    "options": [
        "main or master depending on Git version and configuration",
        "develop",
        "trunk",
        "default"
    ],
    "answer": 0,
    "explanation": "The default branch is 'master' in older Git versions. Newer Git versions and platforms like GitHub default to 'main' for inclusive naming.",
    "difficulty": "Easy",
    "topic": "Branching"
},
{
    "id": "pf-18",
    "question": "What does 'git merge feature-branch' do when executed on the main branch?",
    "options": [
        "Integrates the changes from feature-branch into the current main branch",
        "Deletes the feature-branch",
        "Copies the main branch into feature-branch",
        "Creates a new repository with both branches merged"
    ],
    "answer": 0,
    "explanation": "git merge combines the changes from the specified branch into the currently checked-out branch, creating a merge commit if needed.",
    "difficulty": "Easy",
    "topic": "Merge"
},
{
    "id": "pf-19",
    "question": "What is a fast-forward merge?",
    "options": [
        "A merge where the current branch pointer simply moves forward because no divergent commits exist",
        "A merge that skips conflict resolution automatically",
        "A merge that deletes the source branch",
        "A merge that only works with remote branches"
    ],
    "answer": 0,
    "explanation": "A fast-forward merge occurs when the target branch has no new commits since the branch point, so Git simply moves the branch pointer forward.",
    "difficulty": "Easy",
    "topic": "Merge"
},
{
    "id": "pf-20",
    "question": "What does 'git clone https://github.com/user/repo.git' do?",
    "options": [
        "Creates a full local copy of the remote repository with complete history",
        "Creates a read-only snapshot of the repository",
        "Downloads only the latest commit of the repository",
        "Creates a shallow fork of the repository"
    ],
    "answer": 0,
    "explanation": "git clone creates a complete local copy including all commit history, branches, and the remote connection configuration.",
    "difficulty": "Easy",
    "topic": "Clone"
},
{
    "id": "pf-21",
    "question": "What is a fork in GitHub?",
    "options": [
        "A personal copy of another user's repository that you can modify independently",
        "A branch created from the main branch",
        "A merged copy of two repositories",
        "A deleted repository that can be restored"
    ],
    "answer": 0,
    "explanation": "A fork creates a personal copy of someone else's repository under your GitHub account, allowing you to make changes without affecting the original.",
    "difficulty": "Easy",
    "topic": "Fork"
},
{
    "id": "pf-22",
    "question": "What is a pull request?",
    "options": [
        "A request to merge changes from one branch into another, typically for code review",
        "A request to download files from a remote server",
        "A command to pull the latest changes from all branches",
        "A request to delete a branch after merging"
    ],
    "answer": 0,
    "explanation": "A pull request proposes changes from a source branch to a target branch, enabling team discussion, code review, and then merging.",
    "difficulty": "Easy",
    "topic": "Pull Request"
},
{
    "id": "pf-23",
    "question": "Who typically reviews a pull request in a team workflow?",
    "options": [
        "Team members other than the author who have expertise in the changed code",
        "Only the project manager",
        "Only automated tools",
        "The original author of the code"
    ],
    "answer": 0,
    "explanation": "Pull requests are typically reviewed by one or more team members who examine the code for correctness, style, and potential issues before approval.",
    "difficulty": "Easy",
    "topic": "Pull Request"
},
{
    "id": "pf-24",
    "question": "Which HTML5 element is used to define a set of navigation links?",
    "options": [
        "<nav>",
        "<navigation>",
        "<links>",
        "<menu>"
    ],
    "answer": 0,
    "explanation": "The <nav> element represents a section of a page that contains navigation links to other pages or sections within the same page.",
    "difficulty": "Easy",
    "topic": "HTML5"
},
{
    "id": "pf-25",
    "question": "What does the <article> element represent in HTML5?",
    "options": [
        "A self-contained composition that could be independently distributed or reused",
        "An image with a caption",
        "A sidebar section of the page",
        "A footer with copyright information"
    ],
    "answer": 0,
    "explanation": "The <article> element represents a complete, self-contained piece of content such as a blog post, news article, or forum post.",
    "difficulty": "Easy",
    "topic": "HTML5"
},
{
    "id": "pf-26",
    "question": "Which of the following is a valid HTML5 input type?",
    "options": [
        "type=\"email\"",
        "type=\"mail\"",
        "type=\"address\"",
        "type=\"phone\""
    ],
    "answer": 0,
    "explanation": "The 'email' input type is a valid HTML5 input that provides built-in email validation and a suitable keyboard on mobile devices.",
    "difficulty": "Easy",
    "topic": "HTML5"
},
{
    "id": "pf-27",
    "question": "What is the purpose of the <canvas> element in HTML5?",
    "options": [
        "To provide a drawable surface for rendering graphics via JavaScript",
        "To display external images only",
        "To create a frame for embedded web pages",
        "To format text in a drawing-like layout"
    ],
    "answer": 0,
    "explanation": "The <canvas> element provides a bitmap drawing surface that can be manipulated with JavaScript to render graphics, animations, and visualizations.",
    "difficulty": "Easy",
    "topic": "HTML5"
},
{
    "id": "pf-28",
    "question": "What is semantic HTML?",
    "options": [
        "HTML that uses meaningful elements like <header>, <main>, and <footer> to describe content",
        "HTML that uses only div and span elements",
        "HTML that includes inline CSS styles",
        "HTML that uses comments to describe every element"
    ],
    "answer": 0,
    "explanation": "Semantic HTML uses elements that clearly describe their meaning to both browsers and developers, improving accessibility, SEO, and code maintainability.",
    "difficulty": "Easy",
    "topic": "Semantic HTML"
},
{
    "id": "pf-29",
    "question": "Which HTML5 element is most appropriate for the primary content of a page?",
    "options": [
        "<main>",
        "<div id=\"content\">",
        "<section>",
        "<body>"
    ],
    "answer": 0,
    "explanation": "The <main> element represents the dominant content of the <body>. There should be only one <main> element per page, excluding nested documents.",
    "difficulty": "Easy",
    "topic": "Semantic HTML"
},
{
    "id": "pf-30",
    "question": "Which HTML attribute is essential for accessibility when using images?",
    "options": [
        "alt",
        "title",
        "src",
        "name"
    ],
    "answer": 0,
    "explanation": "The alt attribute provides alternative text for images, which is read by screen readers and displayed when the image fails to load, making content accessible.",
    "difficulty": "Easy",
    "topic": "Accessibility"
},
{
    "id": "pf-31",
    "question": "Which CSS property is used to change the text color of an element?",
    "options": [
        "color",
        "text-color",
        "font-color",
        "foreground"
    ],
    "answer": 0,
    "explanation": "The 'color' property sets the foreground color of an element's text content. There is no 'text-color' or 'font-color' property in CSS.",
    "difficulty": "Easy",
    "topic": "CSS3"
},
{
    "id": "pf-32",
    "question": "Which CSS property creates rounded corners on an element?",
    "options": [
        "border-radius",
        "corner-radius",
        "round-corners",
        "border-round"
    ],
    "answer": 0,
    "explanation": "border-radius sets the rounding of the outside border corners of an element. Values can be specified in px, %, or other length units.",
    "difficulty": "Easy",
    "topic": "CSS3"
},
{
    "id": "pf-33",
    "question": "What does 'position: absolute' do in CSS?",
    "options": [
        "Positions the element relative to its nearest positioned ancestor",
        "Positions the element relative to the viewport",
        "Removes the element from the document flow and fixes it during scroll",
        "Positions the element in its normal flow position"
    ],
    "answer": 0,
    "explanation": "An absolutely positioned element is removed from normal flow and positioned relative to its nearest ancestor with a position value other than static.",
    "difficulty": "Easy",
    "topic": "CSS3"
},
{
    "id": "pf-34",
    "question": "Which CSS property adds a shadow effect to an element?",
    "options": [
        "box-shadow",
        "element-shadow",
        "drop-shadow",
        "css-shadow"
    ],
    "answer": 0,
    "explanation": "box-shadow adds one or more shadows to an element's box. It accepts values for horizontal offset, vertical offset, blur radius, spread radius, and color.",
    "difficulty": "Easy",
    "topic": "CSS3"
},
{
    "id": "pf-35",
    "question": "What is the default main axis direction in CSS Flexbox?",
    "options": [
        "Horizontal (left to right)",
        "Vertical (top to bottom)",
        "Diagonal",
        "Right to left"
    ],
    "answer": 0,
    "explanation": "The default flex-direction is 'row', which makes the main axis horizontal and items are laid out from left to right.",
    "difficulty": "Easy",
    "topic": "Flexbox"
},
{
    "id": "pf-36",
    "question": "Which Flexbox property centers items both horizontally and vertically in a container?",
    "options": [
        "justify-content: center and align-items: center",
        "text-align: center and vertical-align: middle",
        "display: center and position: center",
        "flex-center: both"
    ],
    "answer": 0,
    "explanation": "Combining justify-content: center (main axis) with align-items: center (cross axis) perfectly centers flex items in both directions.",
    "difficulty": "Easy",
    "topic": "Flexbox"
},
{
    "id": "pf-37",
    "question": "What layout does 'grid-template-columns: 1fr 1fr' create?",
    "options": [
        "Two equal-width columns",
        "Two rows with flexible height",
        "One column split into two sections",
        "A single column with double spacing"
    ],
    "answer": 0,
    "explanation": "The fr unit distributes available space proportionally. '1fr 1fr' creates two columns that each take an equal fraction of the available space.",
    "difficulty": "Easy",
    "topic": "Grid"
},
{
    "id": "pf-38",
    "question": "Which CSS Grid property defines the gap between grid rows and columns?",
    "options": [
        "gap",
        "spacing",
        "margin-grid",
        "grid-distance"
    ],
    "answer": 0,
    "explanation": "The 'gap' property (shorthand for row-gap and column-gap) sets the spacing between grid rows and columns.",
    "difficulty": "Easy",
    "topic": "Grid"
},
{
    "id": "pf-39",
    "question": "What is responsive design?",
    "options": [
        "A design approach that makes web pages render well on various devices and screen sizes",
        "A design that only works on desktop browsers",
        "A technique to automatically resize images",
        "A method to speed up page loading on mobile devices only"
    ],
    "answer": 0,
    "explanation": "Responsive design uses flexible layouts, images, and CSS media queries to ensure a website adapts to different screen sizes and devices.",
    "difficulty": "Easy",
    "topic": "Responsive Design"
},
{
    "id": "pf-40",
    "question": "Which meta tag is essential for responsive web design?",
    "options": [
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "<meta name=\"responsive\" content=\"true\">",
        "<meta name=\"mobile\" content=\"yes\">",
        "<meta name=\"screen\" content=\"adapt\">"
    ],
    "answer": 0,
    "explanation": "The viewport meta tag controls the layout viewport dimensions and scaling on mobile browsers, which is essential for responsive design to work correctly.",
    "difficulty": "Easy",
    "topic": "Responsive Design"
},
{
    "id": "pf-41",
    "question": "What does '@media (max-width: 768px)' signify in CSS?",
    "options": [
        "Styles inside this block apply when the viewport width is 768px or less",
        "Styles inside this block apply when the viewport width is exactly 768px",
        "Styles inside this block apply only on desktop screens",
        "Styles inside this block are disabled on mobile devices"
    ],
    "answer": 0,
    "explanation": "The max-width query applies the enclosed styles when the viewport width is at or below the specified value, commonly used for mobile-first or tablet breakpoints.",
    "difficulty": "Easy",
    "topic": "Media Queries"
},
{
    "id": "pf-42",
    "question": "What is Bootstrap?",
    "options": [
        "A popular CSS framework for building responsive, mobile-first websites",
        "A JavaScript testing framework",
        "A backend web framework for Node.js",
        "A database management tool"
    ],
    "answer": 0,
    "explanation": "Bootstrap is a free, open-source CSS framework that provides pre-built responsive grid systems, components, and utilities for rapid front-end development.",
    "difficulty": "Easy",
    "topic": "Bootstrap"
},
{
    "id": "pf-43",
    "question": "Which Bootstrap class creates a responsive fixed-width container?",
    "options": [
        "container",
        "wrapper",
        "box",
        "frame"
    ],
    "answer": 0,
    "explanation": "The 'container' class in Bootstrap creates a responsive fixed-width container that changes width at predefined breakpoints.",
    "difficulty": "Easy",
    "topic": "Bootstrap"
},
{
    "id": "pf-44",
    "question": "What is Tailwind CSS?",
    "options": [
        "A utility-first CSS framework that provides low-level utility classes for building custom designs",
        "A component-based UI library like Bootstrap",
        "A CSS preprocessor like SASS",
        "A JavaScript animation library"
    ],
    "answer": 0,
    "explanation": "Tailwind CSS provides single-purpose utility classes (like 'p-4', 'text-center', 'flex') that you compose directly in HTML to build custom designs without writing custom CSS.",
    "difficulty": "Easy",
    "topic": "Tailwind CSS"
},
{
    "id": "pf-45",
    "question": "How does Tailwind CSS primarily differ from Bootstrap?",
    "options": [
        "Tailwind uses utility classes for styling directly in HTML rather than pre-built components",
        "Tailwind does not support responsive design",
        "Tailwind requires JavaScript to function",
        "Tailwind is only for backend developers"
    ],
    "answer": 0,
    "explanation": "Unlike Bootstrap's pre-built components (buttons, cards, navbars), Tailwind provides atomic utility classes that developers combine to create custom designs.",
    "difficulty": "Easy",
    "topic": "Tailwind CSS"
},
{
    "id": "pf-46",
    "question": "What does the 'let' keyword declare in JavaScript?",
    "options": [
        "A block-scoped variable that can be reassigned",
        "A global variable that cannot be changed",
        "A constant value",
        "A function-scoped variable only"
    ],
    "answer": 0,
    "explanation": "let declares a block-scoped variable that can be reassigned. Unlike var, it is not hoisted to the function scope and has a temporal dead zone.",
    "difficulty": "Easy",
    "topic": "JavaScript ES6+"
},
{
    "id": "pf-47",
    "question": "What is a template literal in JavaScript?",
    "options": [
        "A string enclosed in backticks that supports embedded expressions",
        "A string created using single quotes only",
        "A special type of regular expression",
        "A method for formatting numbers"
    ],
    "answer": 0,
    "explanation": "Template literals use backticks (` `) and allow embedded expressions via ${}, multi-line strings, and string interpolation without concatenation.",
    "difficulty": "Easy",
    "topic": "JavaScript ES6+"
},
{
    "id": "pf-48",
    "question": "What does the spread operator (...) do when used with an array?",
    "options": [
        "Expands an iterable into individual elements",
        "Removes duplicate elements from an array",
        "Sorts the array in ascending order",
        "Converts the array into a string"
    ],
    "answer": 0,
    "explanation": "The spread operator expands an array (or other iterable) into individual elements, useful for copying arrays, merging arrays, or passing elements as function arguments.",
    "difficulty": "Easy",
    "topic": "JavaScript ES6+"
},
{
    "id": "pf-49",
    "question": "What is an arrow function in JavaScript?",
    "options": [
        "A concise function syntax using => that does not bind its own 'this' context",
        "A function that automatically returns an arrow symbol",
        "A function that can only be used with arrays",
        "A deprecated function syntax from ES5"
    ],
    "answer": 0,
    "explanation": "Arrow functions (=>) provide a shorter syntax and lexically bind the 'this' value from the enclosing scope, unlike regular functions that have their own 'this'.",
    "difficulty": "Easy",
    "topic": "JavaScript ES6+"
},
{
    "id": "pf-50",
    "question": "What does 'const' declare in JavaScript?",
    "options": [
        "A block-scoped variable that cannot be reassigned after initialization",
        "A constant that is truly immutable in all cases",
        "A global configuration variable",
        "A variable that can only hold primitive values"
    ],
    "answer": 0,
    "explanation": "const declares a block-scoped variable that cannot be reassigned, but if the value is an object or array, its contents can still be modified.",
    "difficulty": "Easy",
    "topic": "JavaScript ES6+"
},
{
    "id": "pf-51",
    "question": "What is destructuring assignment in JavaScript?",
    "options": [
        "A syntax that extracts values from arrays or properties from objects into distinct variables",
        "A method for deleting object properties",
        "A way to destroy variables to free memory",
        "A technique for encrypting data structures"
    ],
    "answer": 0,
    "explanation": "Destructuring allows you to unpack values from arrays or properties from objects into variables using a concise syntax, making code more readable.",
    "difficulty": "Easy",
    "topic": "JavaScript ES6+"
},
{
    "id": "pf-52",
    "question": "What does Array.map() return?",
    "options": [
        "A new array with each element transformed by the callback function",
        "The original array modified in place",
        "A boolean indicating if all elements pass a test",
        "The first element that matches a condition"
    ],
    "answer": 0,
    "explanation": "Array.map() creates and returns a new array populated with the results of calling a provided function on every element in the calling array.",
    "difficulty": "Easy",
    "topic": "JavaScript ES6+"
},
{
    "id": "pf-53",
    "question": "What is the DOM in web development?",
    "options": [
        "A programming interface that represents the HTML document as a tree of objects",
        "A database for storing web page data",
        "A server-side rendering engine",
        "A CSS preprocessing tool"
    ],
    "answer": 0,
    "explanation": "The Document Object Model (DOM) is a tree-structured representation of an HTML document that allows JavaScript to access, modify, and manipulate page elements.",
    "difficulty": "Easy",
    "topic": "DOM"
},
{
    "id": "pf-54",
    "question": "Which DOM method selects an element by its ID attribute?",
    "options": [
        "document.getElementById()",
        "document.getElementByIds()",
        "document.querySelectorId()",
        "document.findId()"
    ],
    "answer": 0,
    "explanation": "document.getElementById() returns the first element that matches the specified ID. Since IDs are unique, it returns a single element or null if not found.",
    "difficulty": "Easy",
    "topic": "DOM"
},
{
    "id": "pf-55",
    "question": "What does 'document.createElement('div')' do?",
    "options": [
        "Creates a new div element in memory that is not yet added to the document",
        "Creates and immediately appends a div to the body",
        "Replaces the existing body content with a div",
        "Creates a div with default styling"
    ],
    "answer": 0,
    "explanation": "createElement creates a new DOM element in memory. To make it visible, you must append it to an existing element using appendChild() or similar methods.",
    "difficulty": "Easy",
    "topic": "DOM"
},
{
    "id": "pf-56",
    "question": "What is an event listener in JavaScript?",
    "options": [
        "A function that waits for and responds to a specific event on an element",
        "A tool that logs all user actions to the console",
        "A method that prevents events from occurring",
        "A built-in browser debugger for events"
    ],
    "answer": 0,
    "explanation": "An event listener attaches a callback function to an element that executes when a specific event (like click, hover, or keypress) occurs on that element.",
    "difficulty": "Easy",
    "topic": "Events"
},
{
    "id": "pf-57",
    "question": "Which method prevents the default browser behavior for an event?",
    "options": [
        "event.preventDefault()",
        "event.stopDefault()",
        "event.cancel()",
        "event.disable()"
    ],
    "answer": 0,
    "explanation": "event.preventDefault() stops the browser's default action for the event, such as preventing a form submission or stopping a link from navigating.",
    "difficulty": "Easy",
    "topic": "Events"
},
{
    "id": "pf-58",
    "question": "What is JSON?",
    "options": [
        "A lightweight data-interchange format using human-readable text to store and transmit data objects",
        "A programming language for database queries",
        "A markup language similar to HTML",
        "A compression algorithm for web data"
    ],
    "answer": 0,
    "explanation": "JSON (JavaScript Object Notation) is a text format for structuring data as key-value pairs and arrays, widely used for API communication and configuration.",
    "difficulty": "Easy",
    "topic": "JSON"
},
{
    "id": "pf-59",
    "question": "Which JavaScript method converts a JavaScript object into a JSON string?",
    "options": [
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.serialize()",
        "JSON.toString()"
    ],
    "answer": 0,
    "explanation": "JSON.stringify() converts a JavaScript value (object, array, etc.) to a JSON string, optionally using a replacer function or space argument for formatting.",
    "difficulty": "Easy",
    "topic": "JSON"
},
{
    "id": "pf-60",
    "question": "What does localStorage store in a web browser?",
    "options": [
        "Key-value pairs that persist even after the browser is closed",
        "Data that is automatically sent to the server",
        "Temporary session data cleared on tab close",
        "Only string representations of objects"
    ],
    "answer": 0,
    "explanation": "localStorage stores data with no expiration time. The data persists across browser sessions and is only removed when explicitly cleared by the user or code.",
    "difficulty": "Easy",
    "topic": "Local Storage"
},
{
    "id": "pf-61",
    "question": "When is sessionStorage data cleared?",
    "options": [
        "When the browser tab or window is closed",
        "When the user navigates to a different page",
        "After 24 hours automatically",
        "When the browser is updated"
    ],
    "answer": 0,
    "explanation": "sessionStorage data is available only within the page session and is cleared when the tab or window is closed, unlike localStorage which persists.",
    "difficulty": "Easy",
    "topic": "Session Storage"
},
{
    "id": "pf-62",
    "question": "What is an HTTP request?",
    "options": [
        "A message sent by a client to a server requesting a specific action or resource",
        "A server-initiated message to push data to clients",
        "An internal browser communication mechanism",
        "A database query executed through a web interface"
    ],
    "answer": 0,
    "explanation": "An HTTP request is a client-to-server message consisting of a method (GET, POST, etc.), headers, and optionally a body, requesting a specific resource or action.",
    "difficulty": "Easy",
    "topic": "HTTP"
},
{
    "id": "pf-63",
    "question": "Which HTTP method is used to retrieve data from a server?",
    "options": [
        "GET",
        "POST",
        "DELETE",
        "PATCH"
    ],
    "answer": 0,
    "explanation": "GET requests data from a specified resource. It should only retrieve data and not have any other effect, making it safe and idempotent.",
    "difficulty": "Easy",
    "topic": "HTTP"
},
{
    "id": "pf-64",
    "question": "What HTTP status code indicates a successful request?",
    "options": [
        "200",
        "301",
        "404",
        "500"
    ],
    "answer": 0,
    "explanation": "HTTP 200 OK indicates that the request has succeeded. The meaning of the success depends on the HTTP method used in the request.",
    "difficulty": "Easy",
    "topic": "HTTP"
},
{
    "id": "pf-65",
    "question": "Why is HTTPS more secure than HTTP?",
    "options": [
        "HTTPS encrypts data between the client and server using TLS/SSL",
        "HTTPS uses a different port number which is inherently secure",
        "HTTPS prevents all types of cyber attacks",
        "HTTPS does not transmit data over the network"
    ],
    "answer": 0,
    "explanation": "HTTPS uses TLS/SSL encryption to secure data in transit between the client and server, preventing eavesdropping, tampering, and impersonation.",
    "difficulty": "Easy",
    "topic": "HTTPS"
},
{
    "id": "pf-66",
    "question": "What does DNS resolve?",
    "options": [
        "Domain names to IP addresses",
        "IP addresses to MAC addresses",
        "URLs to file paths",
        "Hostnames to database records"
    ],
    "answer": 0,
    "explanation": "DNS (Domain Name System) translates human-readable domain names like example.com into machine-readable IP addresses like 93.184.216.34.",
    "difficulty": "Easy",
    "topic": "DNS"
},
{
    "id": "pf-67",
    "question": "What is a DNS A record?",
    "options": [
        "A record that maps a domain name to an IPv4 address",
        "A record that maps a domain name to an IPv6 address",
        "A record that identifies the mail server for a domain",
        "A record that aliases one domain to another"
    ],
    "answer": 0,
    "explanation": "An A (Address) record maps a domain name to its corresponding IPv4 address. AAAA records serve the same purpose for IPv6 addresses.",
    "difficulty": "Easy",
    "topic": "DNS"
},
{
    "id": "pf-68",
    "question": "What is TCP?",
    "options": [
        "A connection-oriented protocol that ensures reliable, ordered data delivery",
        "A connectionless protocol for fast data transmission",
        "A security protocol for encrypting web traffic",
        "A routing protocol used between routers"
    ],
    "answer": 0,
    "explanation": "TCP (Transmission Control Protocol) establishes a connection before data transfer, ensures packets arrive in order, and retransmits lost packets for reliability.",
    "difficulty": "Easy",
    "topic": "TCP/IP Basics"
},
{
    "id": "pf-69",
    "question": "What is the key difference between TCP and UDP?",
    "options": [
        "TCP guarantees reliable delivery while UDP is faster but does not guarantee delivery",
        "TCP is only used for web traffic while UDP is only for video",
        "TCP is newer than UDP",
        "TCP uses less bandwidth than UDP"
    ],
    "answer": 0,
    "explanation": "TCP provides reliable, ordered delivery with error checking and flow control. UDP is faster and simpler but does not guarantee delivery, order, or error checking.",
    "difficulty": "Easy",
    "topic": "TCP/IP Basics"
},
{
    "id": "pf-70",
    "question": "What is Node.js?",
    "options": [
        "A JavaScript runtime built on Chrome's V8 engine for server-side development",
        "A frontend JavaScript framework for building UIs",
        "A web browser optimized for JavaScript",
        "A JavaScript compiler that converts JS to machine code"
    ],
    "answer": 0,
    "explanation": "Node.js is a server-side JavaScript runtime built on V8 that enables JavaScript execution outside the browser, with non-blocking I/O for building scalable applications.",
    "difficulty": "Easy",
    "topic": "Node.js Basics"
},
{
    "id": "pf-71",
    "question": "What is the event loop in Node.js?",
    "options": [
        "A mechanism that handles asynchronous callbacks by continuously checking the call stack and task queue",
        "A loop that repeats code execution a fixed number of times",
        "A debugging tool for tracking function calls",
        "A plugin system for extending Node.js functionality"
    ],
    "answer": 0,
    "explanation": "The event loop is the core of Node.js async behavior. It continuously checks if the call stack is empty and pushes callbacks from the task queue for execution.",
    "difficulty": "Easy",
    "topic": "Node.js Basics"
},
{
    "id": "pf-72",
    "question": "Which built-in Node.js module handles file system operations?",
    "options": [
        "fs",
        "file",
        "io",
        "path"
    ],
    "answer": 0,
    "explanation": "The 'fs' module provides methods for interacting with the file system, including reading, writing, updating, and deleting files and directories.",
    "difficulty": "Easy",
    "topic": "Node.js Basics"
},
{
    "id": "pf-73",
    "question": "What is Express.js?",
    "options": [
        "A minimal and flexible Node.js web application framework",
        "A database ORM for Node.js",
        "A CSS preprocessor for server-side rendering",
        "A testing framework for Node.js applications"
    ],
    "answer": 0,
    "explanation": "Express.js is a minimal, unopinionated web framework for Node.js that provides robust features for web and mobile applications, including routing and middleware.",
    "difficulty": "Easy",
    "topic": "Express.js Basics"
},
{
    "id": "pf-74",
    "question": "What does 'app.get(\"/users\", callback)' do in Express?",
    "options": [
        "Defines a route handler for GET requests to the /users endpoint",
        "Retrieves user data from a database",
        "Creates a new user resource",
        "Sends a GET request to an external API"
    ],
    "answer": 0,
    "explanation": "app.get() registers a route handler that listens for HTTP GET requests to the specified path ('/users') and executes the callback function when matched.",
    "difficulty": "Easy",
    "topic": "Express.js Basics"
},
{
    "id": "pf-75",
    "question": "Which method starts an Express server to listen on a specific port?",
    "options": [
        "app.listen()",
        "app.start()",
        "app.run()",
        "app.serve()"
    ],
    "answer": 0,
    "explanation": "app.listen() binds and listens for connections on the specified host and port, effectively starting the Express application server.",
    "difficulty": "Easy",
    "topic": "Express.js Basics"
},
{
    "id": "pf-76",
    "question": "What is NPM?",
    "options": [
        "The default package manager for Node.js that installs and manages dependencies",
        "A Node.js performance monitoring tool",
        "A build tool for compiling Node.js applications",
        "A Node.js testing framework"
    ],
    "answer": 0,
    "explanation": "NPM (Node Package Manager) is the default package manager for Node.js, used to install, share, and manage dependencies listed in package.json.",
    "difficulty": "Easy",
    "topic": "NPM"
},
{
    "id": "pf-77",
    "question": "What does 'npm install' do?",
    "options": [
        "Installs all dependencies listed in package.json into the node_modules folder",
        "Creates a new Node.js project",
        "Publishes the package to the NPM registry",
        "Updates all packages to their latest versions"
    ],
    "answer": 0,
    "explanation": "npm install reads the package.json file and downloads all listed dependencies into the node_modules directory, also generating or updating package-lock.json.",
    "difficulty": "Easy",
    "topic": "NPM"
},
{
    "id": "pf-78",
    "question": "What is Yarn?",
    "options": [
        "An alternative package manager for JavaScript projects that offers faster installs and determinism",
        "A JavaScript framework for building UIs",
        "A CSS-in-JS library",
        "A Node.js logging tool"
    ],
    "answer": 0,
    "explanation": "Yarn is a package manager created by Facebook that offers faster dependency installation, deterministic installs via lockfiles, and improved security features.",
    "difficulty": "Easy",
    "topic": "Yarn"
},
{
    "id": "pf-79",
    "question": "What are environment variables in software development?",
    "options": [
        "External configuration values set outside the application code that control behavior across environments",
        "Variables defined inside the application source code",
        "JavaScript variables declared with 'var'",
        "Hard-coded configuration constants"
    ],
    "answer": 0,
    "explanation": "Environment variables are key-value pairs external to the code, used to configure settings like database URLs, API keys, and ports differently across dev, staging, and production.",
    "difficulty": "Easy",
    "topic": "Environment Variables"
},
{
    "id": "pf-80",
    "question": "What does MVC stand for?",
    "options": [
        "Model-View-Controller",
        "Main-View-Component",
        "Model-View-Connection",
        "Module-Variable-Class"
    ],
    "answer": 0,
    "explanation": "MVC is an architectural pattern that separates an application into three components: Model (data), View (presentation), and Controller (business logic and input handling).",
    "difficulty": "Easy",
    "topic": "MVC Architecture"
},
{
    "id": "pf-81",
    "question": "Which component in MVC is responsible for managing the application data?",
    "options": [
        "Model",
        "View",
        "Controller",
        "Router"
    ],
    "answer": 0,
    "explanation": "The Model represents the application's data and business logic. It handles data retrieval, storage, and validation independently of the user interface.",
    "difficulty": "Easy",
    "topic": "MVC Architecture"
},
{
    "id": "pf-82",
    "question": "What is a REST API?",
    "options": [
        "An architectural style for designing networked applications using HTTP methods and stateless communication",
        "A specific programming language for building APIs",
        "A proprietary protocol developed by Microsoft",
        "A database query language for web applications"
    ],
    "answer": 0,
    "explanation": "REST (Representational State Transfer) is an architectural style that uses standard HTTP methods, stateless communication, and resource-based URLs for web services.",
    "difficulty": "Easy",
    "topic": "REST API"
},
{
    "id": "pf-83",
    "question": "Which HTTP method is typically used to create a new resource in a REST API?",
    "options": [
        "POST",
        "GET",
        "PUT",
        "DELETE"
    ],
    "answer": 0,
    "explanation": "POST is the standard method for creating new resources in REST. The server assigns a new URI to the created resource and typically returns a 201 Created status.",
    "difficulty": "Easy",
    "topic": "REST API"
},
{
    "id": "pf-84",
    "question": "What makes an API endpoint RESTful?",
    "options": [
        "It uses standard HTTP methods, is stateless, and uses resource-based URLs",
        "It returns data in XML format only",
        "It requires session-based authentication",
        "It uses WebSocket connections"
    ],
    "answer": 0,
    "explanation": "A RESTful endpoint follows REST principles: resource-based URLs, standard HTTP methods for operations, stateless requests, and standard status codes.",
    "difficulty": "Easy",
    "topic": "REST API"
},
{
    "id": "pf-85",
    "question": "What does CRUD stand for?",
    "options": [
        "Create, Read, Update, Delete",
        "Connect, Run, Use, Deploy",
        "Create, Render, Upload, Download",
        "Compile, Run, Unit-test, Debug"
    ],
    "answer": 0,
    "explanation": "CRUD represents the four basic operations of persistent storage: Create (POST), Read (GET), Update (PUT/PATCH), and Delete (DELETE) in the context of REST APIs.",
    "difficulty": "Easy",
    "topic": "CRUD"
},
{
    "id": "pf-86",
    "question": "What is middleware in Express.js?",
    "options": [
        "Functions that execute during the request-response cycle and can access and modify request and response objects",
        "Database connectors used by Express",
        "Client-side JavaScript libraries",
        "HTML templates used for rendering"
    ],
    "answer": 0,
    "explanation": "Middleware functions have access to req, res, and next. They can execute code, modify request/response objects, end the cycle, or call next() to pass control.",
    "difficulty": "Easy",
    "topic": "Middleware"
},
{
    "id": "pf-87",
    "question": "What is Agile methodology?",
    "options": [
        "An iterative approach to software development that emphasizes flexibility, collaboration, and customer feedback",
        "A strict sequential software development process",
        "A documentation-heavy development approach",
        "A hardware development methodology"
    ],
    "answer": 0,
    "explanation": "Agile is an iterative software development methodology that delivers work in small increments, welcomes changing requirements, and prioritizes customer collaboration.",
    "difficulty": "Easy",
    "topic": "Agile"
},
{
    "id": "pf-88",
    "question": "What is a Sprint in Scrum?",
    "options": [
        "A time-boxed period (typically 1-4 weeks) during which a specific set of work must be completed",
        "A quick meeting held daily to discuss progress",
        "A race condition in concurrent programming",
        "A fast deployment pipeline for code changes"
    ],
    "answer": 0,
    "explanation": "A Sprint is a fixed time period in Scrum where the team works to complete a set of user stories from the product backlog, resulting in a potentially shippable increment.",
    "difficulty": "Easy",
    "topic": "Scrum"
},
{
    "id": "pf-89",
    "question": "What causes a merge conflict in Git?",
    "options": [
        "Changes in the same part of a file in both branches that cannot be automatically merged",
        "Using different branch names for the same feature",
        "Merging more than two branches at once",
        "Having uncommitted changes before merging"
    ],
    "answer": 0,
    "explanation": "Merge conflicts occur when Git cannot automatically reconcile changes made to the same lines or regions of a file in different branches, requiring manual resolution.",
    "difficulty": "Medium",
    "topic": "Merge Conflict"
},
{
    "id": "pf-90",
    "question": "What do conflict markers in a Git merge conflict look like?",
    "options": [
        "<<<<<<<, =======, and >>>>>>> separators in the file content",
        "Red underlines in the Git terminal output",
        "Error codes prefixed with CONFLICT_",
        "XML tags like <conflict> and </conflict>"
    ],
    "answer": 0,
    "explanation": "Git inserts conflict markers directly into the file: <<<<<<< HEAD for the current branch, ======= as a separator, and >>>>>>> branch-name for the incoming changes.",
    "difficulty": "Medium",
    "topic": "Merge Conflict"
},
{
    "id": "pf-91",
    "question": "What does 'git rebase main' do when executed on a feature branch?",
    "options": [
        "Reapplies feature branch commits on top of the latest main branch commits",
        "Moves the main branch to match the feature branch",
        "Deletes the main branch and replaces it with the feature branch",
        "Creates a new branch with a merged history"
    ],
    "answer": 0,
    "explanation": "Rebase takes the commits from the current branch and replays them onto the tip of the specified branch, creating a linear commit history.",
    "difficulty": "Medium",
    "topic": "Rebase"
},
{
    "id": "pf-92",
    "question": "What is the primary difference between git merge and git rebase?",
    "options": [
        "Merge creates a merge commit preserving branch history, while rebase replays commits for a linear history",
        "Merge is faster than rebase in all cases",
        "Rebase works with remote branches while merge only works locally",
        "There is no difference; they are aliases"
    ],
    "answer": 0,
    "explanation": "Merge preserves the complete branch history with a merge commit. Rebase rewrites commit history by replaying commits, producing a cleaner, linear timeline.",
    "difficulty": "Medium",
    "topic": "Rebase"
},
{
    "id": "pf-93",
    "question": "When should you avoid using git rebase?",
    "options": [
        "When working on shared branches that other team members have based their work on",
        "When working alone on a local feature branch",
        "When you want to keep a clean commit history",
        "When merging a feature branch into main"
    ],
    "answer": 0,
    "explanation": "Rebasing shared branches rewrites commit history, causing divergent histories for other developers. The golden rule is to never rebase commits that have been pushed to a shared branch.",
    "difficulty": "Medium",
    "topic": "Rebase"
},
{
    "id": "pf-94",
    "question": "What does 'git cherry-pick abc123' do?",
    "options": [
        "Applies the changes from commit abc123 to the current branch as a new commit",
        "Deletes the commit abc123 from the repository",
        "Copies the entire branch containing commit abc123",
        "Moves commit abc123 to a different branch permanently"
    ],
    "answer": 0,
    "explanation": "cherry-pick takes the changes introduced by a specific commit and applies them to the current branch, creating a new commit with the same changes but a different hash.",
    "difficulty": "Medium",
    "topic": "Cherry Pick"
},
{
    "id": "pf-95",
    "question": "In which scenario is cherry-pick most useful?",
    "options": [
        "Applying a critical bug fix from one branch to another without merging the entire branch",
        "Creating a new feature branch from scratch",
        "Resolving complex merge conflicts",
        "Deleting unwanted commits from history"
    ],
    "answer": 0,
    "explanation": "Cherry-pick is ideal when you need to selectively apply a specific commit (like a hotfix) to another branch without bringing in all other commits from the source branch.",
    "difficulty": "Medium",
    "topic": "Cherry Pick"
},
{
    "id": "pf-96",
    "question": "What must be true before creating a pull request?",
    "options": [
        "Your branch must have commits that differ from the target branch",
        "The target branch must be deleted",
        "All tests must pass on all branches",
        "You must be the repository owner"
    ],
    "answer": 0,
    "explanation": "A pull request requires that your source branch has diverged from the target branch with new commits. Without differences, there is nothing to merge.",
    "difficulty": "Medium",
    "topic": "Pull Request"
},
{
    "id": "pf-97",
    "question": "What is a draft pull request?",
    "options": [
        "A pull request marked as work-in-progress that cannot be merged until converted to ready",
        "A pull request that has been rejected by reviewers",
        "A pull request that only contains documentation changes",
        "A pull request created from a deleted branch"
    ],
    "answer": 0,
    "explanation": "A draft PR indicates the work is still in progress. It signals to reviewers that the code is not yet ready for final review and prevents accidental merging.",
    "difficulty": "Medium",
    "topic": "Pull Request"
},
{
    "id": "pf-98",
    "question": "What does CI/CD stand for?",
    "options": [
        "Continuous Integration and Continuous Delivery (or Deployment)",
        "Centralized Integration and Centralized Deployment",
        "Code Integration and Code Distribution",
        "Continuous Inspection and Continuous Debugging"
    ],
    "answer": 0,
    "explanation": "CI/CD combines Continuous Integration (automatically building and testing code changes) with Continuous Delivery/Deployment (automatically releasing validated changes).",
    "difficulty": "Medium",
    "topic": "CI/CD"
},
{
    "id": "pf-99",
    "question": "What is the difference between Continuous Delivery and Continuous Deployment?",
    "options": [
        "Delivery requires manual approval before release; Deployment automatically releases every change that passes all stages",
        "Delivery is for frontend code; Deployment is for backend code",
        "Delivery uses Docker; Deployment uses VMs",
        "There is no difference between the two terms"
    ],
    "answer": 0,
    "explanation": "Continuous Delivery ensures code is always ready to deploy but requires a manual approval step. Continuous Deployment goes further by automatically deploying every change that passes all checks.",
    "difficulty": "Medium",
    "topic": "CI/CD"
},
{
    "id": "pf-100",
    "question": "Which of the following is a CI/CD tool?",
    "options": [
        "Jenkins",
        "Docker",
        "Redis",
        "Nginx"
    ],
    "answer": 0,
    "explanation": "Jenkins is a widely-used open-source automation server that provides hundreds of plugins to support building, deploying, and automating CI/CD pipelines.",
    "difficulty": "Medium",
    "topic": "CI/CD"
},
{
    "id": "pf-101",
    "question": "What can trigger a GitHub Actions workflow?",
    "options": [
        "Events like push, pull request, scheduled cron, or manual dispatch",
        "Only manual clicks on the GitHub website",
        "Only commits to the main branch",
        "Only when a new repository is created"
    ],
    "answer": 0,
    "explanation": "GitHub Actions workflows can be triggered by a wide variety of events including push, pull_request, schedule, workflow_dispatch, issues, and many more.",
    "difficulty": "Medium",
    "topic": "GitHub Actions"
},
{
    "id": "pf-102",
    "question": "What is a GitHub Actions runner?",
    "options": [
        "A server that executes the jobs defined in a workflow",
        "A CLI tool for creating workflows",
        "A code review bot",
        "A Git merge automation tool"
    ],
    "answer": 0,
    "explanation": "A runner is the server that runs your GitHub Actions workflows. GitHub provides hosted runners (Ubuntu, Windows, macOS) or you can use self-hosted runners.",
    "difficulty": "Medium",
    "topic": "GitHub Actions"
},
{
    "id": "pf-103",
    "question": "Where are GitHub Actions workflow files stored in a repository?",
    "options": [
        "In the .github/workflows directory at the repository root",
        "In the .ci/config directory",
        "In the root directory with a .action extension",
        "In the Jenkinsfile at the repository root"
    ],
    "answer": 0,
    "explanation": "GitHub Actions workflows are defined in YAML files stored in the .github/workflows/ directory. Each file defines one or more jobs with steps to execute.",
    "difficulty": "Medium",
    "topic": "GitHub Actions"
},
{
    "id": "pf-104",
    "question": "What is a Jenkins pipeline?",
    "options": [
        "A suite of plugins that supports implementing and integrating continuous delivery pipelines",
        "A single Jenkins plugin for building Docker images",
        "A scripting language specific to Jenkins",
        "A monitoring dashboard for Jenkins servers"
    ],
    "answer": 0,
    "explanation": "A Jenkins Pipeline is a collection of jobs (or stages) that are chained together in a sequence, defined in a Jenkinsfile using Declarative or Scripted Pipeline syntax.",
    "difficulty": "Medium",
    "topic": "Jenkins"
},
{
    "id": "pf-105",
    "question": "What is a Jenkinsfile?",
    "options": [
        "A text file that defines a Jenkins pipeline as code, checked into source control",
        "A configuration file for the Jenkins server itself",
        "A log file that records all Jenkins build outputs",
        "A binary file used by Jenkins for caching"
    ],
    "answer": 0,
    "explanation": "A Jenkinsfile defines the entire build pipeline as code, enabling version control, code review, and audit trails for the pipeline definition itself.",
    "difficulty": "Medium",
    "topic": "Jenkins"
},
{
    "id": "pf-106",
    "question": "What is a Docker image?",
    "options": [
        "A read-only template with instructions for creating a Docker container",
        "A running instance of an application",
        "A Docker daemon configuration file",
        "A virtual machine snapshot"
    ],
    "answer": 0,
    "explanation": "A Docker image is a lightweight, stand-alone, executable package that includes everything needed to run a piece of software, including code, runtime, and libraries.",
    "difficulty": "Medium",
    "topic": "Docker"
},
{
    "id": "pf-107",
    "question": "What is a Docker container?",
    "options": [
        "A runnable instance of a Docker image with its own filesystem, network, and isolated processes",
        "A Docker image stored in a registry",
        "A virtual machine running Docker",
        "A Docker configuration file"
    ],
    "answer": 0,
    "explanation": "A container is a running instance of an image. It has its own isolated filesystem, network stack, and process tree, sharing the host kernel for efficiency.",
    "difficulty": "Medium",
    "topic": "Docker"
},
{
    "id": "pf-108",
    "question": "What is a Dockerfile?",
    "options": [
        "A text file containing instructions to build a Docker image",
        "A configuration file for the Docker daemon",
        "A log file recording all Docker operations",
        "A file listing all available Docker images"
    ],
    "answer": 0,
    "explanation": "A Dockerfile contains a series of instructions (FROM, RUN, COPY, CMD, etc.) that Docker uses to automatically build an image step by step.",
    "difficulty": "Medium",
    "topic": "Docker"
},
{
    "id": "pf-109",
    "question": "What does 'docker build -t myapp:v1 .' do?",
    "options": [
        "Builds an image named myapp with tag v1 from the Dockerfile in the current directory",
        "Runs a container named myapp with version v1",
        "Pushes the image myapp:v1 to Docker Hub",
        "Deletes the image myapp:v1 from local storage"
    ],
    "answer": 0,
    "explanation": "The -t flag tags the image with a name and version. The '.' specifies the build context as the current directory where the Dockerfile should be found.",
    "difficulty": "Medium",
    "topic": "Docker"
},
{
    "id": "pf-110",
    "question": "What does 'docker run -d -p 3000:3000 myapp' do?",
    "options": [
        "Runs myapp in detached mode, mapping container port 3000 to host port 3000",
        "Runs myapp in debug mode with port forwarding disabled",
        "Deletes the myapp container and releases port 3000",
        "Builds myapp with port 3000 exposed"
    ],
    "answer": 0,
    "explanation": "-d runs the container in detached mode (background), -p maps the host port 3000 to the container port 3000, allowing external access to the service.",
    "difficulty": "Medium",
    "topic": "Docker"
},
{
    "id": "pf-111",
    "question": "What is the fundamental difference between a Docker image and a container?",
    "options": [
        "An image is a static template; a container is a running instance of that image",
        "An image runs on the host; a container runs inside a VM",
        "An image is temporary; a container is permanent",
        "There is no difference; the terms are interchangeable"
    ],
    "answer": 0,
    "explanation": "An image is an immutable, read-only template. When you run docker run, Docker creates a writable container layer on top of the image, making it a live, running instance.",
    "difficulty": "Medium",
    "topic": "Docker"
},
{
    "id": "pf-112",
    "question": "What is a base image in Docker?",
    "options": [
        "A foundational image from which other images are built, typically an OS or runtime",
        "The first image ever created in Docker",
        "An image that cannot be modified or extended",
        "A pre-built production-ready application image"
    ],
    "answer": 0,
    "explanation": "A base image (specified with FROM) is the starting point for building custom images. Examples include ubuntu:20.04, node:18-alpine, or python:3.11-slim.",
    "difficulty": "Medium",
    "topic": "Docker"
},
{
    "id": "pf-113",
    "question": "What is Docker Compose used for?",
    "options": [
        "Defining and running multi-container Docker applications using a YAML configuration file",
        "Compressing Docker images for faster transfer",
        "Compiling Dockerfiles into binary images",
        "Managing Docker daemon configuration"
    ],
    "answer": 0,
    "explanation": "Docker Compose uses a docker-compose.yml file to define services, networks, and volumes for multi-container applications, then starts them all with a single command.",
    "difficulty": "Medium",
    "topic": "Docker Compose"
},
{
    "id": "pf-114",
    "question": "What file format does Docker Compose use for configuration?",
    "options": [
        "YAML (docker-compose.yml)",
        "JSON (docker-compose.json)",
        "XML (docker-compose.xml)",
        "TOML (docker-compose.toml)"
    ],
    "answer": 0,
    "explanation": "Docker Compose uses YAML format in a file typically named docker-compose.yml to define services, networks, volumes, and their configurations.",
    "difficulty": "Medium",
    "topic": "Docker Compose"
},
{
    "id": "pf-115",
    "question": "What does 'docker-compose up -d' do?",
    "options": [
        "Creates and starts all services defined in the Compose file in detached mode",
        "Deletes all containers and their volumes",
        "Updates Docker Compose to the latest version",
        "Stops all running containers"
    ],
    "answer": 0,
    "explanation": "docker-compose up reads the compose file, creates containers for all defined services, connects them to the specified networks, and -d runs them in the background.",
    "difficulty": "Medium",
    "topic": "Docker Compose"
},
{
    "id": "pf-116",
    "question": "Can a Docker container exist without a Docker image?",
    "options": [
        "No, every container is created from an image",
        "Yes, containers can be created from scratch without any image",
        "Yes, but only on Linux hosts",
        "Yes, containers and images are completely independent"
    ],
    "answer": 0,
    "explanation": "Every Docker container is created from a Docker image. The image provides the filesystem layers, environment settings, and entrypoint that the container uses.",
    "difficulty": "Medium",
    "topic": "Containers"
},
{
    "id": "pf-117",
    "question": "How does containerization differ from virtualization?",
    "options": [
        "Containers share the host OS kernel while VMs include a full guest OS",
        "Containers are slower than VMs because they share resources",
        "VMs are more lightweight than containers",
        "There is no difference; they are the same technology"
    ],
    "answer": 0,
    "explanation": "Containers share the host kernel and are lightweight. VMs include a complete guest operating system with its own kernel, making them heavier and more resource-intensive.",
    "difficulty": "Medium",
    "topic": "Containers"
},
{
    "id": "pf-118",
    "question": "What is a Docker volume?",
    "options": [
        "A mechanism for persisting data generated by and used by Docker containers",
        "A compressed archive of a Docker image",
        "A network connection between containers",
        "A CPU resource allocation unit"
    ],
    "answer": 0,
    "explanation": "Volumes are the preferred mechanism for persisting data in Docker. They are managed by Docker and exist independently of the container lifecycle.",
    "difficulty": "Medium",
    "topic": "Volumes"
},
{
    "id": "pf-119",
    "question": "Why are Docker volumes preferred over bind mounts for production?",
    "options": [
        "Volumes are managed by Docker, work on all platforms, and are more portable",
        "Bind mounts are faster than volumes",
        "Volumes cannot be backed up while bind mounts can",
        "Bind mounts provide better security isolation"
    ],
    "answer": 0,
    "explanation": "Volumes are managed by Docker, work consistently across operating systems, support volume drivers for remote storage, and are easier to back up and migrate than bind mounts.",
    "difficulty": "Medium",
    "topic": "Volumes"
},
{
    "id": "pf-120",
    "question": "What is the default Docker network mode when you run a container?",
    "options": [
        "Bridge network that provides isolated network connectivity with NAT",
        "Host network that shares the host's network stack directly",
        "None network that disables all networking",
        "Overlay network for multi-host communication"
    ],
    "answer": 0,
    "explanation": "The default bridge network connects containers to the same virtual network, allowing inter-container communication via IP addresses or container names with DNS resolution.",
    "difficulty": "Medium",
    "topic": "Networking"
},
{
    "id": "pf-121",
    "question": "What is Kubernetes?",
    "options": [
        "An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications",
        "A Docker alternative for running containers",
        "A cloud provider's proprietary container service",
        "A container registry for storing images"
    ],
    "answer": 0,
    "explanation": "Kubernetes (K8s) automates the deployment, scaling, and management of containerized applications across clusters of machines, handling scheduling, load balancing, and self-healing.",
    "difficulty": "Medium",
    "topic": "Kubernetes Basics"
},
{
    "id": "pf-122",
    "question": "What primary problem does Kubernetes solve?",
    "options": [
        "Managing large numbers of containers across multiple hosts at scale",
        "Building Docker images more efficiently",
        "Writing containerized applications",
        "Replacing virtual machines entirely"
    ],
    "answer": 0,
    "explanation": "Kubernetes solves the operational complexity of running containers at scale by providing automated deployment, scaling, load balancing, self-healing, and service discovery.",
    "difficulty": "Medium",
    "topic": "Kubernetes Basics"
},
{
    "id": "pf-123",
    "question": "What is a Kubernetes cluster?",
    "options": [
        "A set of nodes (machines) that run containerized applications managed by Kubernetes",
        "A single powerful server running all containers",
        "A group of Docker images bundled together",
        "A Kubernetes plugin ecosystem"
    ],
    "answer": 0,
    "explanation": "A Kubernetes cluster consists of a control plane (managing the cluster) and worker nodes (running containers), providing a unified platform for container orchestration.",
    "difficulty": "Medium",
    "topic": "Kubernetes Basics"
},
{
    "id": "pf-124",
    "question": "What is a node in Kubernetes?",
    "options": [
        "A worker machine (physical or virtual) in the cluster that runs pods",
        "A container running inside a pod",
        "A configuration file for Kubernetes",
        "A network endpoint in the cluster"
    ],
    "answer": 0,
    "explanation": "A node is a worker machine in Kubernetes. Each node runs the kubelet (communicates with control plane), a container runtime (like Docker), and kube-proxy (network proxy).",
    "difficulty": "Medium",
    "topic": "Kubernetes Basics"
},
{
    "id": "pf-125",
    "question": "What components make up the Kubernetes control plane?",
    "options": [
        "kube-apiserver, etcd, scheduler, and controller manager",
        "kubelet, kube-proxy, and container runtime",
        "Docker daemon, containerd, and runc",
        "Ingress controller, CoreDNS, and Calico"
    ],
    "answer": 0,
    "explanation": "The control plane consists of the API server (entry point), etcd (data store), scheduler (assigns pods to nodes), and controller manager (maintains desired state).",
    "difficulty": "Medium",
    "topic": "Kubernetes Basics"
},
{
    "id": "pf-126",
    "question": "What is a pod in Kubernetes?",
    "options": [
        "The smallest deployable unit in Kubernetes, containing one or more containers with shared network and storage",
        "A single container running in Kubernetes",
        "A group of nodes working together",
        "A configuration template for deployments"
    ],
    "answer": 0,
    "explanation": "A pod is the smallest execution unit in Kubernetes. It encapsulates one or more containers that share the same network namespace, storage, and specifications.",
    "difficulty": "Medium",
    "topic": "Pods"
},
{
    "id": "pf-127",
    "question": "Can a pod contain multiple containers?",
    "options": [
        "Yes, and they share the same network namespace and storage volumes",
        "No, each pod can only contain exactly one container",
        "Yes, but each container gets its own isolated network",
        "Yes, but only if they are different Docker images"
    ],
    "answer": 0,
    "explanation": "A pod can contain multiple containers (sidecar pattern) that share the same IP address and port space, can communicate via localhost, and share mounted volumes.",
    "difficulty": "Medium",
    "topic": "Pods"
},
{
    "id": "pf-128",
    "question": "What is a Kubernetes Deployment?",
    "options": [
        "A resource that manages a replicated set of pods and provides declarative updates",
        "A one-time task that runs to completion",
        "A storage class for persistent data",
        "A network policy for pod communication"
    ],
    "answer": 0,
    "explanation": "A Deployment manages ReplicaSets and pods, providing declarative updates, rollbacks, scaling, and ensuring the desired number of pod replicas are running.",
    "difficulty": "Medium",
    "topic": "Deployment"
},
{
    "id": "pf-129",
    "question": "What happens during a Kubernetes rolling update?",
    "options": [
        "New pods are gradually created while old pods are terminated, ensuring zero downtime",
        "All old pods are terminated simultaneously before new pods start",
        "The entire cluster is restarted with the new version",
        "Only the pod configuration is updated without restarting"
    ],
    "answer": 0,
    "explanation": "Rolling updates gradually replace old pod instances with new ones based on the maxSurge and maxUnavailable settings, maintaining application availability throughout.",
    "difficulty": "Medium",
    "topic": "Deployment"
},
{
    "id": "pf-130",
    "question": "What is a Kubernetes Service?",
    "options": [
        "An abstraction that provides a stable network endpoint to access a set of pods",
        "A background worker process in the cluster",
        "A monitoring agent deployed on each node",
        "A plugin for external cloud services"
    ],
    "answer": 0,
    "explanation": "A Service provides a stable IP address and DNS name for a group of pods, handling load balancing and service discovery even as pods are created and destroyed.",
    "difficulty": "Medium",
    "topic": "Services"
},
{
    "id": "pf-131",
    "question": "What is the difference between ClusterIP and NodePort service types?",
    "options": [
        "ClusterIP is accessible only within the cluster; NodePort exposes the service on each node's IP at a static port",
        "ClusterIP is for external access; NodePort is for internal access",
        "ClusterIP uses TCP; NodePort uses UDP",
        "There is no functional difference"
    ],
    "answer": 0,
    "explanation": "ClusterIP assigns an internal IP reachable only within the cluster. NodePort opens a specific port on every node, allowing external traffic to reach the service.",
    "difficulty": "Medium",
    "topic": "Services"
},
{
    "id": "pf-132",
    "question": "What is an Ingress resource in Kubernetes?",
    "options": [
        "An API object that manages external access to services, typically via HTTP/HTTPS routing rules",
        "A security policy for restricting pod network traffic",
        "A storage backend for persistent volumes",
        "A method for importing external configurations"
    ],
    "answer": 0,
    "explanation": "Ingress provides HTTP and HTTPS routing from outside the cluster to services within the cluster, supporting features like virtual hosts, TLS termination, and path-based routing.",
    "difficulty": "Medium",
    "topic": "Ingress"
},
{
    "id": "pf-133",
    "question": "What is Helm in the Kubernetes ecosystem?",
    "options": [
        "A package manager for Kubernetes that simplifies deploying and managing applications",
        "A Kubernetes monitoring tool",
        "A container registry specifically for Kubernetes",
        "A CLI tool for building Docker images"
    ],
    "answer": 0,
    "explanation": "Helm is the package manager for Kubernetes, using charts (pre-configured Kubernetes resource templates) to define, install, and upgrade complex Kubernetes applications.",
    "difficulty": "Medium",
    "topic": "Helm Basics"
},
{
    "id": "pf-134",
    "question": "What is cloud computing?",
    "options": [
        "The on-demand delivery of computing services over the internet including servers, storage, databases, and software",
        "A weather simulation technology",
        "Computing done exclusively on mobile devices",
        "A peer-to-peer file sharing network"
    ],
    "answer": 0,
    "explanation": "Cloud computing provides scalable computing resources over the internet on a pay-as-you-go model, eliminating the need for upfront infrastructure investment.",
    "difficulty": "Medium",
    "topic": "Cloud Computing"
},
{
    "id": "pf-135",
    "question": "What is IaaS in cloud computing?",
    "options": [
        "Infrastructure as a Service - providing virtualized computing resources over the internet",
        "Internet as a Service - providing internet connectivity",
        "Integration as a Service - providing API integration tools",
        "Intelligence as a Service - providing AI capabilities"
    ],
    "answer": 0,
    "explanation": "IaaS provides fundamental computing resources like virtual machines, storage, and networking. Users manage the OS, runtime, and applications while the provider manages the hardware.",
    "difficulty": "Medium",
    "topic": "Cloud Computing"
},
{
    "id": "pf-136",
    "question": "What is SaaS in cloud computing?",
    "options": [
        "Software as a Service - cloud-hosted applications accessed via web browser",
        "Storage as a Service - cloud-based file storage",
        "Security as a Service - cloud-based security tools",
        "Scaling as a Service - automatic resource scaling"
    ],
    "answer": 0,
    "explanation": "SaaS delivers fully functional applications over the internet. Users access the software through a web browser without managing any underlying infrastructure or platform.",
    "difficulty": "Medium",
    "topic": "Cloud Computing"
},
{
    "id": "pf-137",
    "question": "What is Amazon Web Services (AWS)?",
    "options": [
        "A comprehensive cloud computing platform offering over 200 services from data centers globally",
        "An open-source cloud platform maintained by a community",
        "A single service for hosting static websites",
        "A web hosting provider for small businesses only"
    ],
    "answer": 0,
    "explanation": "AWS is the world's most comprehensive cloud platform, offering computing, storage, databases, machine learning, analytics, and many more services from global data centers.",
    "difficulty": "Medium",
    "topic": "AWS Basics"
},
{
    "id": "pf-138",
    "question": "What is the AWS Management Console?",
    "options": [
        "A web-based interface for accessing and managing AWS services",
        "A CLI tool for AWS operations",
        "An IDE plugin for AWS development",
        "A mobile app for monitoring AWS resources"
    ],
    "answer": 0,
    "explanation": "The AWS Management Console is a browser-based GUI that allows users to access, manage, and monitor all AWS services without using command-line tools or APIs.",
    "difficulty": "Medium",
    "topic": "AWS Basics"
},
{
    "id": "pf-139",
    "question": "What is an AWS Region?",
    "options": [
        "A geographical area where AWS has multiple data centers (Availability Zones)",
        "A single data center within AWS",
        "A pricing tier for AWS services",
        "A specific AWS service category"
    ],
    "answer": 0,
    "explanation": "An AWS Region is a physical geographical location consisting of multiple isolated Availability Zones. Each Region is fully independent and provides low-latency access to nearby users.",
    "difficulty": "Medium",
    "topic": "AWS Basics"
},
{
    "id": "pf-140",
    "question": "What is an AWS Availability Zone (AZ)?",
    "options": [
        "An isolated location within an AWS Region consisting of one or more data centers",
        "A security zone in the AWS network",
        "A pricing zone with different service costs",
        "A geographic region spanning multiple countries"
    ],
    "answer": 0,
    "explanation": "An AZ is one or more discrete data centers with redundant power, networking, and connectivity within a Region. Multiple AZs provide high availability and fault tolerance.",
    "difficulty": "Medium",
    "topic": "AWS Basics"
},
{
    "id": "pf-141",
    "question": "What does the AWS Free Tier offer?",
    "options": [
        "Limited free usage of certain AWS services for 12 months after account creation",
        "Unlimited free access to all AWS services permanently",
        "Free access only to S3 storage",
        "A one-time free credit for any AWS service"
    ],
    "answer": 0,
    "explanation": "The AWS Free Tier includes a 12-month free tier with specific service limits (like 750 hours of EC2), an always-free tier (like Lambda), and short-term trials.",
    "difficulty": "Medium",
    "topic": "AWS Basics"
},
{
    "id": "pf-142",
    "question": "What is Microsoft Azure?",
    "options": [
        "A cloud computing platform by Microsoft offering a wide range of integrated cloud services",
        "A Microsoft office productivity suite",
        "A Windows-specific server operating system",
        "A programming language developed by Microsoft"
    ],
    "answer": 0,
    "explanation": "Azure is Microsoft's cloud computing platform, offering over 200 products and cloud services including compute, storage, databases, AI, and enterprise integration.",
    "difficulty": "Medium",
    "topic": "Azure Basics"
},
{
    "id": "pf-143",
    "question": "What is an Azure Resource Group?",
    "options": [
        "A logical container that holds related Azure resources for management and deployment",
        "A physical data center grouping in Azure",
        "A security boundary for network isolation",
        "A billing category for cost allocation only"
    ],
    "answer": 0,
    "explanation": "A Resource Group is a logical container that groups related Azure resources together. It is the scope for role-based access control, locks, and deployment templates.",
    "difficulty": "Medium",
    "topic": "Azure Basics"
},
{
    "id": "pf-144",
    "question": "What is Azure App Service?",
    "options": [
        "A fully managed platform for building, deploying, and scaling web apps and APIs",
        "A desktop application development framework",
        "A service for managing on-premises applications",
        "An Azure-specific programming language"
    ],
    "answer": 0,
    "explanation": "Azure App Service is a PaaS offering that enables developers to build and deploy web apps, mobile backends, and RESTful APIs without managing infrastructure.",
    "difficulty": "Medium",
    "topic": "Azure Basics"
},
{
    "id": "pf-145",
    "question": "What is Google Cloud Platform (GCP)?",
    "options": [
        "Google's suite of cloud computing services running on the same infrastructure that Google uses internally",
        "A cloud service only for Google applications",
        "A free cloud platform for academic research",
        "An open-source cloud operating system"
    ],
    "answer": 0,
    "explanation": "GCP offers computing, data storage, data analytics, and machine learning services built on the same infrastructure that powers Google products like Search and YouTube.",
    "difficulty": "Medium",
    "topic": "Google Cloud Basics"
},
{
    "id": "pf-146",
    "question": "What is GCP Compute Engine?",
    "options": [
        "An IaaS service providing virtual machines on Google's infrastructure",
        "A serverless computing platform",
        "A container orchestration service",
        "A function-as-a-service platform"
    ],
    "answer": 0,
    "explanation": "Compute Engine provides virtual machines (VMs) running on Google's global infrastructure, offering customizable machine types, preemptible VMs, and custom machine types.",
    "difficulty": "Medium",
    "topic": "Google Cloud Basics"
},
{
    "id": "pf-147",
    "question": "What is GCP Cloud Storage?",
    "options": [
        "A highly durable and scalable object storage service for unstructured data",
        "A relational database service",
        "A block storage service for VMs",
        "A file synchronization service for desktop"
    ],
    "answer": 0,
    "explanation": "GCP Cloud Storage is an object storage service that stores data as objects in buckets, offering different storage classes (Standard, Nearline, Coldline, Archive) based on access patterns.",
    "difficulty": "Medium",
    "topic": "Google Cloud Basics"
},
{
    "id": "pf-148",
    "question": "What is Amazon EC2?",
    "options": [
        "A web service that provides resizable compute capacity in the cloud as virtual machines",
        "A database service for running SQL queries",
        "A content delivery network for static files",
        "An email service for sending notifications"
    ],
    "answer": 0,
    "explanation": "Amazon EC2 (Elastic Compute Cloud) provides scalable virtual servers (instances) where users can configure security, networking, and storage for their applications.",
    "difficulty": "Medium",
    "topic": "EC2"
},
{
    "id": "pf-149",
    "question": "What is Amazon S3?",
    "options": [
        "An object storage service offering high scalability, durability, and availability",
        "A relational database service",
        "A serverless compute service",
        "A DNS management service"
    ],
    "answer": 0,
    "explanation": "Amazon S3 (Simple Storage Service) stores data as objects in buckets. It offers 99.999999999% durability, virtually unlimited capacity, and various storage classes.",
    "difficulty": "Medium",
    "topic": "S3"
},
{
    "id": "pf-150",
    "question": "What is AWS IAM?",
    "options": [
        "A service that securely controls access to AWS services and resources through users, groups, roles, and policies",
        "An identity provider for social media login",
        "A monitoring service for tracking user activity",
        "A database for storing user credentials"
    ],
    "answer": 0,
    "explanation": "AWS IAM (Identity and Access Management) enables you to manage access to AWS services and resources securely through users, groups, roles, and permission policies.",
    "difficulty": "Medium",
    "topic": "IAM"
},
{
    "id": "pf-151",
    "question": "What is AWS Lambda?",
    "options": [
        "A serverless compute service that runs code in response to events without managing servers",
        "A database trigger service",
        "A container orchestration platform",
        "A machine learning model deployment service"
    ],
    "answer": 0,
    "explanation": "AWS Lambda runs your code in response to events (HTTP requests, S3 uploads, scheduled times) and automatically scales, charging only for the compute time consumed.",
    "difficulty": "Medium",
    "topic": "Lambda"
},
{
    "id": "pf-152",
    "question": "What is the primary function of a load balancer?",
    "options": [
        "Distributes incoming network traffic across multiple servers to ensure no single server is overwhelmed",
        "Encrypts all network traffic passing through it",
        "Blocks malicious traffic from reaching servers",
        "Compresses network data for faster transmission"
    ],
    "answer": 0,
    "explanation": "A load balancer distributes incoming requests across multiple backend servers, improving availability, reliability, and response times by preventing any single server from being overloaded.",
    "difficulty": "Medium",
    "topic": "Load Balancer"
},
{
    "id": "pf-153",
    "question": "What is auto scaling in cloud computing?",
    "options": [
        "Automatically adjusting the number of compute resources based on demand to maintain performance and cost efficiency",
        "Manually increasing server size during peak hours",
        "Scaling storage capacity based on file count",
        "Upgrading software versions automatically"
    ],
    "answer": 0,
    "explanation": "Auto scaling dynamically adds or removes compute resources (like EC2 instances) based on defined conditions such as CPU utilization, memory usage, or custom metrics.",
    "difficulty": "Medium",
    "topic": "Auto Scaling"
},
{
    "id": "pf-154",
    "question": "What is a Content Delivery Network (CDN)?",
    "options": [
        "A distributed network of servers that delivers web content to users based on their geographic location",
        "A single server that caches all web content globally",
        "A database replication service for faster queries",
        "A network protocol for faster data transfer"
    ],
    "answer": 0,
    "explanation": "A CDN caches content at edge servers worldwide, serving requests from the nearest location to the user, reducing latency, bandwidth usage, and server load.",
    "difficulty": "Medium",
    "topic": "CDN"
},
{
    "id": "pf-155",
    "question": "What is a virtual machine?",
    "options": [
        "A software-based emulation of a physical computer that runs its own operating system",
        "A physical server partitioned into containers",
        "A remote desktop connection to a server",
        "A backup copy of a physical machine"
    ],
    "answer": 0,
    "explanation": "A VM is a virtual computer created by a hypervisor that runs its own guest OS, has allocated CPU, memory, and storage, and behaves like a physical machine.",
    "difficulty": "Medium",
    "topic": "Virtual Machines"
},
{
    "id": "pf-156",
    "question": "What is serverless computing?",
    "options": [
        "A cloud execution model where the provider dynamically manages server allocation and developers only write and deploy code",
        "Computing without any servers involved in the process",
        "A peer-to-peer computing model without central servers",
        "Running applications directly on bare metal hardware"
    ],
    "answer": 0,
    "explanation": "Serverless computing abstracts server management entirely. Developers write functions that execute in response to events, and the cloud provider handles all infrastructure, scaling, and maintenance.",
    "difficulty": "Medium",
    "topic": "Serverless"
},
{
    "id": "pf-157",
    "question": "What is the microservices architecture pattern?",
    "options": [
        "An approach where an application is built as a collection of small, independent, loosely coupled services",
        "A design pattern for writing small functions",
        "A method for splitting a single file into smaller files",
        "A technique for minifying code for production"
    ],
    "answer": 0,
    "explanation": "Microservices architecture decomposes an application into small, independently deployable services, each running its own process and communicating via lightweight mechanisms.",
    "difficulty": "Medium",
    "topic": "Microservices"
},
{
    "id": "pf-158",
    "question": "What is a key benefit of microservices over monolithic architecture?",
    "options": [
        "Each service can be developed, deployed, and scaled independently",
        "Microservices always perform faster than monoliths",
        "Microservices require no networking between components",
        "Microservices eliminate the need for databases"
    ],
    "answer": 0,
    "explanation": "Independent deployability and scalability are the primary benefits. Teams can update, scale, and deploy individual services without affecting the entire application.",
    "difficulty": "Medium",
    "topic": "Microservices"
},
{
    "id": "pf-159",
    "question": "What challenge does microservices architecture primarily introduce?",
    "options": [
        "Increased complexity in distributed system management including networking, data consistency, and debugging",
        "Slower development cycles due to smaller team sizes",
        "Inability to use modern programming languages",
        "Reduced application performance for all use cases"
    ],
    "answer": 0,
    "explanation": "Microservices introduce distributed system challenges: inter-service communication, data consistency across services, distributed tracing, deployment orchestration, and network latency.",
    "difficulty": "Medium",
    "topic": "Microservices"
},
{
    "id": "pf-160",
    "question": "Which is a REST API best practice for resource naming?",
    "options": [
        "Use nouns instead of verbs in URL paths (e.g., /users instead of /getUsers)",
        "Use verbs in URL paths to describe actions",
        "Include file extensions in URLs like /users.json",
        "Use camelCase for URL segments"
    ],
    "answer": 0,
    "explanation": "RESTful URLs should use nouns to represent resources and rely on HTTP methods (GET, POST, PUT, DELETE) to define actions. Verbs in URLs break REST conventions.",
    "difficulty": "Medium",
    "topic": "REST API"
},
{
    "id": "pf-161",
    "question": "What is HATEOAS in the context of REST APIs?",
    "options": [
        "Hypermedia as the Engine of Application State - including related resource links in API responses",
        "A security protocol for REST APIs",
        "A caching mechanism for API responses",
        "A method for versioning REST APIs"
    ],
    "answer": 0,
    "explanation": "HATEOAS is a REST constraint where API responses include hypermedia links to related resources, allowing clients to discover available actions dynamically without prior knowledge.",
    "difficulty": "Medium",
    "topic": "REST API"
},
{
    "id": "pf-162",
    "question": "What HTTP status code should a PUT request return after successfully updating a resource?",
    "options": [
        "200 OK or 204 No Content",
        "201 Created",
        "301 Moved Permanently",
        "202 Accepted"
    ],
    "answer": 0,
    "explanation": "PUT typically returns 200 OK with the updated resource in the response body, or 204 No Content if no response body is sent. 201 is reserved for resource creation (POST).",
    "difficulty": "Medium",
    "topic": "REST API"
},
{
    "id": "pf-163",
    "question": "What is GraphQL?",
    "options": [
        "A query language for APIs that allows clients to request exactly the data they need",
        "A graph database query language only",
        "A replacement for SQL in all applications",
        "A protocol for real-time data streaming"
    ],
    "answer": 0,
    "explanation": "GraphQL is a query language and runtime for APIs that lets clients specify exactly what data they need, reducing over-fetching and under-fetching compared to REST.",
    "difficulty": "Medium",
    "topic": "GraphQL Basics"
},
{
    "id": "pf-164",
    "question": "What is a GraphQL schema?",
    "options": [
        "A definition of the types, queries, and mutations available in a GraphQL API",
        "A database schema that GraphQL connects to",
        "A configuration file for the GraphQL server",
        "A validation rule set for incoming queries"
    ],
    "answer": 0,
    "explanation": "A GraphQL schema defines the type system, available queries (data fetching), mutations (data modification), and subscriptions (real-time updates) for the API.",
    "difficulty": "Medium",
    "topic": "GraphQL Basics"
},
{
    "id": "pf-165",
    "question": "What problem does GraphQL primarily solve compared to REST?",
    "options": [
        "Eliminates over-fetching and under-fetching of data by letting clients specify exact data requirements",
        "Provides better security than REST APIs",
        "Replaces the need for any backend server",
        "Eliminates the need for API versioning"
    ],
    "answer": 0,
    "explanation": "In REST, endpoints return fixed data structures, often leading to over-fetching or requiring multiple requests. GraphQL lets clients request exactly the fields they need in a single query.",
    "difficulty": "Medium",
    "topic": "GraphQL Basics"
},
{
    "id": "pf-166",
    "question": "What is an API Gateway?",
    "options": [
        "A single entry point that routes requests to appropriate microservices and handles cross-cutting concerns",
        "A replacement for all backend services",
        "A database proxy for microservices",
        "A frontend routing library"
    ],
    "answer": 0,
    "explanation": "An API Gateway acts as a reverse proxy, routing requests to appropriate services while handling authentication, rate limiting, logging, and response transformation.",
    "difficulty": "Medium",
    "topic": "API Gateway"
},
{
    "id": "pf-167",
    "question": "What is rate limiting in the context of an API Gateway?",
    "options": [
        "Controlling the number of requests a client can make within a time period to prevent abuse",
        "Limiting the size of API response payloads",
        "Restricting the number of API endpoints available",
        "Reducing the speed of API response delivery"
    ],
    "answer": 0,
    "explanation": "Rate limiting restricts the number of API calls a client can make in a given timeframe, protecting backend services from overload, abuse, and denial-of-service attacks.",
    "difficulty": "Medium",
    "topic": "API Gateway"
},
{
    "id": "pf-168",
    "question": "What is authentication in web security?",
    "options": [
        "The process of verifying the identity of a user or system",
        "The process of determining what actions a user can perform",
        "The process of encrypting data in transit",
        "The process of backing up user data"
    ],
    "answer": 0,
    "explanation": "Authentication verifies who a user claims to be (identity verification), typically through credentials like passwords, tokens, or biometrics.",
    "difficulty": "Medium",
    "topic": "Authentication"
},
{
    "id": "pf-169",
    "question": "What is the key difference between authentication and authorization?",
    "options": [
        "Authentication verifies identity; authorization determines what actions an authenticated user can perform",
        "Authentication is for users; authorization is for systems only",
        "Authentication is optional; authorization is always required",
        "They are the same concept with different names"
    ],
    "answer": 0,
    "explanation": "Authentication answers 'Who are you?' (identity verification). Authorization answers 'What are you allowed to do?' (permission check). Both are essential but distinct security concepts.",
    "difficulty": "Medium",
    "topic": "Authorization"
},
{
    "id": "pf-170",
    "question": "What is role-based access control (RBAC)?",
    "options": [
        "An authorization model that assigns permissions to roles, and roles to users",
        "A method for encrypting user roles",
        "A authentication mechanism using role-based passwords",
        "A database design pattern for user management"
    ],
    "answer": 0,
    "explanation": "RBAC assigns permissions to predefined roles (admin, editor, viewer), and users are assigned to roles. This simplifies permission management compared to assigning permissions to individual users.",
    "difficulty": "Medium",
    "topic": "Authorization"
},
{
    "id": "pf-171",
    "question": "What is a JSON Web Token (JWT)?",
    "options": [
        "A compact, URL-safe token format for securely transmitting information between parties as a JSON object",
        "A Java-based web token format",
        "A database token for JSON storage",
        "A JavaScript widget for web authentication"
    ],
    "answer": 0,
    "explanation": "JWT is an open standard (RFC 7519) that defines a compact, self-contained token format for securely transmitting claims between a client and server, commonly used for authentication.",
    "difficulty": "Medium",
    "topic": "JWT"
},
{
    "id": "pf-172",
    "question": "What are the three parts of a JWT?",
    "options": [
        "Header, Payload, and Signature",
        "Username, Password, and Token",
        "Key, Value, and Expiry",
        "Request, Response, and Session"
    ],
    "answer": 0,
    "explanation": "A JWT consists of three Base64URL-encoded parts separated by dots: Header (algorithm and token type), Payload (claims/data), and Signature (verification of integrity).",
    "difficulty": "Medium",
    "topic": "JWT"
},
{
    "id": "pf-173",
    "question": "What is OAuth 2.0?",
    "options": [
        "An authorization framework that enables third-party applications to obtain limited access to user accounts",
        "An authentication protocol for verifying user identities",
        "A data encryption standard for API communication",
        "A session management protocol"
    ],
    "answer": 0,
    "explanation": "OAuth 2.0 is an authorization framework that allows users to grant third-party applications limited access to their resources without sharing their credentials (like passwords).",
    "difficulty": "Medium",
    "topic": "OAuth"
},
{
    "id": "pf-174",
    "question": "Which OAuth 2.0 grant type is most suitable for a single-page application?",
    "options": [
        "Authorization Code with PKCE",
        "Client Credentials",
        "Resource Owner Password Credentials",
        "Device Authorization Grant"
    ],
    "answer": 0,
    "explanation": "Authorization Code with PKCE (Proof Key for Code Exchange) is recommended for SPAs because it prevents authorization code interception attacks that are possible in browser-based apps.",
    "difficulty": "Medium",
    "topic": "OAuth"
},
{
    "id": "pf-175",
    "question": "What are HTTP cookies used for?",
    "options": [
        "Storing small pieces of data sent by the server and stored on the client browser",
        "Storing large files on the server",
        "Encrypting HTTP request headers",
        "Compressing HTTP response bodies"
    ],
    "answer": 0,
    "explanation": "Cookies are small text files stored by the browser, sent with every HTTP request to the same domain, commonly used for session management, personalization, and tracking.",
    "difficulty": "Medium",
    "topic": "Cookies"
},
{
    "id": "pf-176",
    "question": "How do server-side sessions typically work?",
    "options": [
        "The server stores session data and sends a session ID via cookie to identify the client on subsequent requests",
        "All session data is stored in the client browser",
        "Sessions use JWT tokens stored in local storage",
        "Session data is embedded in every URL parameter"
    ],
    "answer": 0,
    "explanation": "Server-side sessions store data on the server and use a cookie containing a session ID to associate subsequent requests with the stored session data.",
    "difficulty": "Medium",
    "topic": "Sessions"
},
{
    "id": "pf-177",
    "question": "What is caching in the context of web applications?",
    "options": [
        "Storing frequently accessed data in a fast-access layer to reduce response times and database load",
        "Deleting old data to free up memory",
        "Compressing data for faster network transfer",
        "Encrypting data for secure storage"
    ],
    "answer": 0,
    "explanation": "Caching stores copies of frequently accessed data in a fast storage layer (memory, CDN, browser), reducing latency, database load, and bandwidth consumption.",
    "difficulty": "Medium",
    "topic": "Caching"
},
{
    "id": "pf-178",
    "question": "What is Redis?",
    "options": [
        "An in-memory data structure store used as a database, cache, and message broker",
        "A relational database management system",
        "A file storage system for large objects",
        "A graph database for social networks"
    ],
    "answer": 0,
    "explanation": "Redis is an open-source, in-memory data structure store supporting strings, hashes, lists, sets, and sorted sets, commonly used for caching, session storage, and real-time analytics.",
    "difficulty": "Medium",
    "topic": "Redis Basics"
},
{
    "id": "pf-179",
    "question": "Which data structures does Redis natively support?",
    "options": [
        "Strings, Hashes, Lists, Sets, and Sorted Sets",
        "Tables, Rows, and Columns only",
        "Documents and Collections only",
        "Nodes and Edges only"
    ],
    "answer": 0,
    "explanation": "Redis supports five fundamental data structures: Strings (binary-safe), Hashes (field-value pairs), Lists (linked lists), Sets (unique elements), and Sorted Sets (ordered unique elements).",
    "difficulty": "Medium",
    "topic": "Redis Basics"
},
{
    "id": "pf-180",
    "question": "What is RabbitMQ?",
    "options": [
        "A message broker that uses the AMQP protocol for asynchronous communication between services",
        "A relational database for storing messages",
        "A real-time video streaming service",
        "A load balancer for HTTP traffic"
    ],
    "answer": 0,
    "explanation": "RabbitMQ is a message broker that implements AMQP, enabling applications to communicate asynchronously by publishing messages to exchanges that route them to queues.",
    "difficulty": "Medium",
    "topic": "RabbitMQ Basics"
},
{
    "id": "pf-181",
    "question": "What is Apache Kafka?",
    "options": [
        "A distributed event streaming platform for high-throughput, fault-tolerant real-time data pipelines",
        "A message queue similar to RabbitMQ with identical architecture",
        "A database optimized for time-series data",
        "A monitoring tool for distributed systems"
    ],
    "answer": 0,
    "explanation": "Kafka is a distributed event streaming platform that handles high-volume real-time data feeds, providing durability through replicated log storage and supporting stream processing.",
    "difficulty": "Medium",
    "topic": "Kafka Basics"
},
{
    "id": "pf-182",
    "question": "What is a Kafka topic?",
    "options": [
        "A category or feed name to which records (messages) are published and subscribed",
        "A database table that stores Kafka messages",
        "A network connection between Kafka brokers",
        "A configuration file for Kafka settings"
    ],
    "answer": 0,
    "explanation": "A topic is a logical channel for organizing messages. Producers write records to topics, and consumers subscribe to topics to read records. Topics are partitioned for scalability.",
    "difficulty": "Medium",
    "topic": "Kafka Basics"
},
{
    "id": "pf-183",
    "question": "What is the primary purpose of a message queue?",
    "options": [
        "Decoupling senders and receivers by asynchronously buffering messages between them",
        "Synchronously transmitting messages between services",
        "Storing messages permanently like a database",
        "Encrypting messages before transmission"
    ],
    "answer": 0,
    "explanation": "Message queues enable asynchronous communication by temporarily storing messages between producer and consumer, allowing systems to operate independently and handle varying processing speeds.",
    "difficulty": "Medium",
    "topic": "Message Queue"
},
{
    "id": "pf-184",
    "question": "What are WebSockets used for?",
    "options": [
        "Establishing persistent, full-duplex communication channels between client and server over a single TCP connection",
        "Making one-time HTTP requests to the server",
        "Streaming video content from a CDN",
        "Encrypting REST API communications"
    ],
    "answer": 0,
    "explanation": "WebSockets provide a persistent, bidirectional communication channel between client and server, enabling real-time data transfer without the overhead of repeated HTTP connections.",
    "difficulty": "Medium",
    "topic": "WebSockets"
},
{
    "id": "pf-185",
    "question": "What is a Promise in JavaScript?",
    "options": [
        "An object representing the eventual completion or failure of an asynchronous operation",
        "A guarantee that a function will execute synchronously",
        "A type of variable declaration",
        "A method for error handling in synchronous code"
    ],
    "answer": 0,
    "explanation": "A Promise represents a value that may be available now, in the future, or never. It allows handling asynchronous results with .then() for success and .catch() for errors.",
    "difficulty": "Medium",
    "topic": "Promises"
},
{
    "id": "pf-186",
    "question": "What are the three states of a JavaScript Promise?",
    "options": [
        "Pending, Fulfilled, and Rejected",
        "Start, Running, and Stopped",
        "Open, Closed, and Error",
        "Waiting, Processing, and Complete"
    ],
    "answer": 0,
    "explanation": "A Promise starts in Pending state, transitions to Fulfilled when the operation succeeds, or to Rejected when it fails. Once settled, the state cannot change again.",
    "difficulty": "Medium",
    "topic": "Promises"
},
{
    "id": "pf-187",
    "question": "What does Promise.all() do when one of the promises rejects?",
    "options": [
        "It immediately rejects with the reason of the first rejected promise",
        "It waits for all promises to settle before rejecting",
        "It ignores the rejection and returns fulfilled results",
        "It retries the rejected promise automatically"
    ],
    "answer": 0,
    "explanation": "Promise.all() fails fast - if any promise rejects, it immediately returns a rejected promise with the rejection reason, without waiting for other promises to settle.",
    "difficulty": "Medium",
    "topic": "Promises"
},
{
    "id": "pf-188",
    "question": "What does the 'async' keyword do to a function?",
    "options": [
        "Makes the function return a Promise and allows use of 'await' inside it",
        "Makes the function execute in a separate thread",
        "Makes the function run immediately without waiting",
        "Makes the function synchronous"
    ],
    "answer": 0,
    "explanation": "The async keyword automatically wraps the function's return value in a Promise and enables the use of await inside the function to pause execution until a Promise settles.",
    "difficulty": "Medium",
    "topic": "Async Await"
},
{
    "id": "pf-189",
    "question": "How do you handle errors in an async/await function?",
    "options": [
        "Using try/catch blocks around await expressions",
        "Using .catch() on the async function",
        "Using if/else statements checking for null",
        "Errors cannot be handled in async/await"
    ],
    "answer": 0,
    "explanation": "Since await unwraps a Promise, rejected promises throw errors that can be caught using standard try/catch blocks, providing synchronous-looking error handling.",
    "difficulty": "Medium",
    "topic": "Async Await"
},
{
    "id": "pf-190",
    "question": "What is AJAX?",
    "options": [
        "A technique for making asynchronous HTTP requests from the browser without reloading the page",
        "A programming language for web development",
        "A server-side rendering technology",
        "A CSS animation technique"
    ],
    "answer": 0,
    "explanation": "AJAX (Asynchronous JavaScript and XML) enables web pages to send and receive data from a server asynchronously, updating parts of the page without a full reload.",
    "difficulty": "Medium",
    "topic": "AJAX"
},
{
    "id": "pf-191",
    "question": "What is the Fetch API?",
    "options": [
        "A modern JavaScript interface for making HTTP requests that returns Promises",
        "A server-side Node.js HTTP module",
        "A jQuery method for AJAX requests",
        "A deprecated browser API replaced by XMLHttpRequest"
    ],
    "answer": 0,
    "explanation": "The Fetch API provides a modern, Promise-based interface for making HTTP requests, replacing XMLHttpRequest with a cleaner syntax and better support for streaming.",
    "difficulty": "Medium",
    "topic": "Fetch API"
},
{
    "id": "pf-192",
    "question": "What is TypeScript?",
    "options": [
        "A typed superset of JavaScript that compiles to plain JavaScript",
        "A completely new programming language unrelated to JavaScript",
        "A JavaScript framework for building UIs",
        "A JavaScript minification tool"
    ],
    "answer": 0,
    "explanation": "TypeScript adds static type checking, interfaces, generics, and other features to JavaScript. It compiles down to standard JavaScript that runs in any browser or Node.js environment.",
    "difficulty": "Medium",
    "topic": "TypeScript Basics"
},
{
    "id": "pf-193",
    "question": "What does the following TypeScript code define: 'let name: string = \"Alice\";'?",
    "options": [
        "A variable 'name' that can only hold string values",
        "A variable 'name' that can hold any type of value",
        "A constant named 'string' with value 'Alice'",
        "A function that returns a string"
    ],
    "answer": 0,
    "explanation": "The ': string' type annotation tells TypeScript that the variable 'name' can only hold string values. Assigning any other type would cause a compile-time error.",
    "difficulty": "Medium",
    "topic": "TypeScript Basics"
},
{
    "id": "pf-194",
    "question": "What is an interface in TypeScript?",
    "options": [
        "A contract that defines the shape of an object, specifying property names and their types",
        "A class that cannot be instantiated",
        "A method for importing modules",
        "A type of loop construct"
    ],
    "answer": 0,
    "explanation": "An interface defines the structure an object must follow, specifying required and optional properties and their types. It is used for type checking without generating runtime code.",
    "difficulty": "Medium",
    "topic": "TypeScript Basics"
},
{
    "id": "pf-195",
    "question": "What is a key difference between TypeScript 'interface' and 'type'?",
    "options": [
        "Interfaces can be extended and merged; types are more flexible with unions, intersections, and mappings",
        "Types can be extended but interfaces cannot",
        "There is no difference; they are completely interchangeable",
        "Interfaces are for objects; types are for functions only"
    ],
    "answer": 0,
    "explanation": "Interfaces support declaration merging and extension. Types support unions, intersections, conditional types, and mapped types. The choice depends on the use case and team conventions.",
    "difficulty": "Medium",
    "topic": "TypeScript Basics"
},
{
    "id": "pf-196",
    "question": "What is React?",
    "options": [
        "A JavaScript library for building user interfaces through composable components",
        "A full-stack web framework with backend capabilities",
        "A CSS framework for responsive design",
        "A build tool for JavaScript projects"
    ],
    "answer": 0,
    "explanation": "React is a declarative, component-based UI library maintained by Meta. It uses a virtual DOM for efficient rendering and supports one-way data flow for predictable state management.",
    "difficulty": "Medium",
    "topic": "React Basics"
},
{
    "id": "pf-197",
    "question": "What is a React component?",
    "options": [
        "A reusable piece of UI that accepts props and returns JSX describing what should appear on screen",
        "A CSS class that styles a section of the page",
        "A backend route handler",
        "A database model definition"
    ],
    "answer": 0,
    "explanation": "React components are the building blocks of a React application. They accept input data (props) and return React elements (JSX) describing the UI they represent.",
    "difficulty": "Medium",
    "topic": "React Basics"
},
{
    "id": "pf-198",
    "question": "What is JSX in React?",
    "options": [
        "A syntax extension that allows writing HTML-like code within JavaScript",
        "A template engine similar to Handlebars",
        "A CSS preprocessor",
        "A JavaScript testing framework"
    ],
    "answer": 0,
    "explanation": "JSX is a syntax extension for JavaScript that looks like HTML but compiles to React.createElement() calls. It enables writing UI structure alongside JavaScript logic.",
    "difficulty": "Medium",
    "topic": "React Basics"
},
{
    "id": "pf-199",
    "question": "What is Angular?",
    "options": [
        "A full-featured TypeScript-based framework for building large-scale single-page applications",
        "A JavaScript library for DOM manipulation",
        "A CSS framework for responsive layouts",
        "A Node.js backend framework"
    ],
    "answer": 0,
    "explanation": "Angular is a comprehensive framework by Google that provides built-in solutions for routing, forms, HTTP, dependency injection, and testing, all written in TypeScript.",
    "difficulty": "Medium",
    "topic": "Angular Basics"
},
{
    "id": "pf-200",
    "question": "What is Vue.js?",
    "options": [
        "A progressive JavaScript framework for building user interfaces with an approachable ecosystem",
        "A backend framework for Node.js",
        "A mobile app development framework",
        "A static site generator"
    ],
    "answer": 0,
    "explanation": "Vue.js is a progressive framework that can be incrementally adopted. It offers a reactive data binding system, component-based architecture, and an ecosystem of supporting libraries.",
    "difficulty": "Medium",
    "topic": "Vue Basics"
},
{
    "id": "pf-201",
    "question": "How do you recover from a bad rebase that has not been pushed?",
    "options": [
        "Use git reflog to find the pre-rebase commit and reset to it",
        "Delete the repository and re-clone it",
        "Use git revert to undo the rebase",
        "Use git clean to remove all uncommitted changes"
    ],
    "answer": 0,
    "explanation": "git reflog shows a log of all HEAD movements, including rebase operations. You can find the commit hash before the rebase and use git reset --hard to restore that state.",
    "difficulty": "Hard",
    "topic": "Rebase"
},
{
    "id": "pf-202",
    "question": "What does 'git reflog' show that 'git log' does not?",
    "options": [
        "All HEAD movements including resets, checkouts, merges, and rebases, including commits no longer on any branch",
        "Only the commit messages of the current branch",
        "Only remote branch history",
        "Only deleted file history"
    ],
    "answer": 0,
    "explanation": "reflog records every position HEAD has pointed to, even for orphaned commits that are no longer reachable from any branch, making it a safety net for recovering lost work.",
    "difficulty": "Hard",
    "topic": "Git"
},
{
    "id": "pf-203",
    "question": "What is the primary benefit of multi-stage Docker builds?",
    "options": [
        "Reducing final image size by separating build dependencies from runtime requirements",
        "Building multiple images from a single Dockerfile for different platforms",
        "Running multiple containers simultaneously from one build",
        "Enabling parallel build processes across different machines"
    ],
    "answer": 0,
    "explanation": "Multi-stage builds use multiple FROM statements. Build stages can include compilers and tools, while the final stage copies only the built artifacts, drastically reducing image size.",
    "difficulty": "Hard",
    "topic": "Docker"
},
{
    "id": "pf-204",
    "question": "Which strategy most effectively reduces Docker image size?",
    "options": [
        "Using Alpine-based images, multi-stage builds, and combining RUN commands with && to minimize layers",
        "Using the latest tag for all base images",
        "Installing all possible packages upfront for convenience",
        "Using COPY instead of ADD for all files"
    ],
    "answer": 0,
    "explanation": "Combining Alpine bases (small footprint), multi-stage builds (exclude build tools), and minimizing layers (fewer RUN instructions) collectively produce the smallest possible images.",
    "difficulty": "Hard",
    "topic": "Docker"
},
{
    "id": "pf-205",
    "question": "How does Docker layer caching work during image builds?",
    "options": [
        "Each instruction creates a cached layer; if an instruction and its inputs are unchanged, the cached layer is reused",
        "Docker caches only the final image, not intermediate layers",
        "Caching only works for COPY instructions",
        "Layers are cached based on the total build time, not content"
    ],
    "answer": 0,
    "explanation": "Docker caches each layer created by a Dockerfile instruction. If the instruction and its context haven't changed, Docker reuses the cached layer, skipping execution for faster builds.",
    "difficulty": "Hard",
    "topic": "Docker"
},
{
    "id": "pf-206",
    "question": "How does the Kubernetes scheduler decide which node to place a pod on?",
    "options": [
        "It evaluates filtering (resource requirements, node selectors, taints) then scoring (resource utilization, affinity rules) to rank nodes",
        "It always places pods on the node with the most available CPU",
        "It randomly selects a node from the available pool",
        "It places all pods on the first available node"
    ],
    "answer": 0,
    "explanation": "The scheduler first filters out nodes that cannot run the pod (insufficient resources, taint/toleration mismatches), then scores remaining nodes using predicates and priorities.",
    "difficulty": "Hard",
    "topic": "Kubernetes Basics"
},
{
    "id": "pf-207",
    "question": "What is the relationship between a Deployment and a ReplicaSet in Kubernetes?",
    "options": [
        "A Deployment manages a ReplicaSet, which in turn manages the pods. The Deployment controls ReplicaSet lifecycle for rolling updates and rollbacks",
        "A ReplicaSet manages a Deployment",
        "They are independent resources with no relationship",
        "A Deployment replaces a ReplicaSet entirely"
    ],
    "answer": 0,
    "explanation": "When you create a Deployment, it creates a ReplicaSet that maintains the desired pod count. During updates, the Deployment creates a new ReplicaSet and gradually shifts traffic.",
    "difficulty": "Hard",
    "topic": "Deployment"
},
{
    "id": "pf-208",
    "question": "What is a DaemonSet in Kubernetes?",
    "options": [
        "A resource that ensures a copy of a pod runs on every eligible node in the cluster",
        "A set of pods that run only on the master node",
        "A one-time job that runs to completion on a single node",
        "A backup mechanism for pod configurations"
    ],
    "answer": 0,
    "explanation": "DaemonSets ensure that a specific pod runs on all (or selected) nodes, commonly used for log collectors (Fluentd), monitoring agents (Prometheus node exporter), and network plugins.",
    "difficulty": "Hard",
    "topic": "Deployment"
},
{
    "id": "pf-209",
    "question": "How do Kubernetes NetworkPolicies enhance cluster security?",
    "options": [
        "They control traffic flow at the pod or namespace level by specifying allowed ingress and egress rules",
        "They encrypt all network traffic between pods automatically",
        "They replace the need for a firewall",
        "They only control external traffic entering the cluster"
    ],
    "answer": 0,
    "explanation": "NetworkPolicies are namespace-scoped resources that specify how pods can communicate with each other and with network endpoints, enforcing microsegmentation at the L3/L4 layer.",
    "difficulty": "Hard",
    "topic": "Networking"
},
{
    "id": "pf-210",
    "question": "What is a multi-AZ deployment and why is it important?",
    "options": [
        "Distributing resources across multiple Availability Zones to provide high availability and fault tolerance",
        "Deploying the same application in multiple cloud providers",
        "Running multiple instances of an app on a single server",
        "Using multiple DNS zones for load balancing"
    ],
    "answer": 0,
    "explanation": "Multi-AZ deployments spread resources across physically separate data centers within a region, ensuring that a failure in one AZ does not affect the entire application.",
    "difficulty": "Hard",
    "topic": "AWS Basics"
},
{
    "id": "pf-211",
    "question": "How would you design a fault-tolerant cloud architecture?",
    "options": [
        "Use multi-AZ deployment, auto scaling, load balancers, health checks, and automated failover mechanisms",
        "Use a single large instance with maximum resources",
        "Rely solely on data backups for recovery",
        "Deploy everything in one region and one AZ for simplicity"
    ],
    "answer": 0,
    "explanation": "Fault tolerance requires redundancy at every layer: compute (multi-AZ, auto scaling), network (load balancers, health checks), data (replication, backups), and automated failover.",
    "difficulty": "Hard",
    "topic": "Cloud Computing"
},
{
    "id": "pf-212",
    "question": "What is Infrastructure as Code (IaC)?",
    "options": [
        "Managing and provisioning infrastructure through machine-readable configuration files rather than manual processes",
        "Writing code that runs directly on physical hardware",
        "Using code editors to configure network switches",
        "Converting legacy code to modern programming languages"
    ],
    "answer": 0,
    "explanation": "IaC uses declarative or imperative code (Terraform, CloudFormation, Pulumi) to define infrastructure, enabling version control, reproducibility, and automated provisioning.",
    "difficulty": "Hard",
    "topic": "Cloud Computing"
},
{
    "id": "pf-213",
    "question": "How would you approach designing a URL shortener system?",
    "options": [
        "Use a hash function or counter-based encoding for short codes, a distributed database for storage, and a caching layer for redirects",
        "Store all mappings in a single text file",
        "Use random strings with no collision handling",
        "Only support HTTP and skip analytics"
    ],
    "answer": 0,
    "explanation": "A URL shortener needs efficient encoding (base62), collision handling, a scalable key-value store, caching (Redis) for hot URLs, and analytics tracking for click metrics.",
    "difficulty": "Hard",
    "topic": "System Design Basics"
},
{
    "id": "pf-214",
    "question": "How would you design a real-time chat application at scale?",
    "options": [
        "Use WebSockets for real-time communication, message brokers (Kafka) for persistence, and a NoSQL database for message storage",
        "Use only HTTP polling for message delivery",
        "Store all messages in a single SQL table",
        "Use FTP for message transfer between users"
    ],
    "answer": 0,
    "explanation": "A scalable chat system uses WebSockets for low-latency delivery, message queues for async processing, partitioned storage for messages, and read replicas for message history.",
    "difficulty": "Hard",
    "topic": "System Design Basics"
},
{
    "id": "pf-215",
    "question": "What is the key difference between horizontal and vertical scaling?",
    "options": [
        "Horizontal scaling adds more machines to handle load; vertical scaling adds more resources (CPU, RAM) to an existing machine",
        "Horizontal scaling is always cheaper than vertical scaling",
        "Vertical scaling is more reliable than horizontal scaling",
        "There is no practical difference between the two"
    ],
    "answer": 0,
    "explanation": "Horizontal scaling (scale-out) distributes load across multiple machines and is virtually unlimited. Vertical scaling (scale-up) has hardware limits and often requires downtime.",
    "difficulty": "Hard",
    "topic": "System Design Basics"
},
{
    "id": "pf-216",
    "question": "What is eventual consistency in distributed systems?",
    "options": [
        "A consistency model where, given enough time without new updates, all replicas will converge to the same state",
        "A guarantee that all reads always return the most recent write",
        "A database feature that prevents any data inconsistency",
        "A consistency model only used in single-node systems"
    ],
    "answer": 0,
    "explanation": "Eventual consistency allows temporary inconsistencies between replicas but guarantees that all replicas will eventually converge to the same state, prioritizing availability over immediate consistency.",
    "difficulty": "Hard",
    "topic": "System Design Basics"
},
{
    "id": "pf-217",
    "question": "What is the Single Responsibility Principle (SRP)?",
    "options": [
        "A class or module should have only one reason to change, meaning it should have only one responsibility",
        "A function should contain only one line of code",
        "A project should have only one developer",
        "A class should have only one method"
    ],
    "answer": 0,
    "explanation": "SRP states that a class should have one, and only one, reason to change. This leads to smaller, more focused classes that are easier to understand, test, and maintain.",
    "difficulty": "Hard",
    "topic": "SOLID"
},
{
    "id": "pf-218",
    "question": "What is the Open/Closed Principle (OCP)?",
    "options": [
        "Software entities should be open for extension but closed for modification",
        "All classes should be public and have open access",
        "Code should be open-source and freely modifiable",
        "Files should be opened when read and closed when written"
    ],
    "answer": 0,
    "explanation": "OCP states that you should be able to add new behavior to a module without changing its existing source code, typically achieved through abstraction, interfaces, and polymorphism.",
    "difficulty": "Hard",
    "topic": "SOLID"
},
{
    "id": "pf-219",
    "question": "What is the Dependency Inversion Principle (DIP)?",
    "options": [
        "High-level modules should depend on abstractions, not on concrete implementations",
        "Dependencies should always be installed at the highest version",
        "Low-level modules should not depend on anything",
        "All dependencies should be removed for better performance"
    ],
    "answer": 0,
    "explanation": "DIP requires that high-level policy modules depend on abstractions (interfaces) rather than concrete low-level details, making the system more flexible and testable through dependency injection.",
    "difficulty": "Hard",
    "topic": "SOLID"
},
{
    "id": "pf-220",
    "question": "When should you use the Singleton pattern?",
    "options": [
        "When exactly one instance of a class is needed to coordinate actions across the system, such as a configuration manager or connection pool",
        "When you want to create as many instances as possible efficiently",
        "When you need to restrict a class to having exactly zero instances",
        "When every class in the application needs to be a Singleton"
    ],
    "answer": 0,
    "explanation": "The Singleton pattern ensures a class has only one instance with global access. It is appropriate for shared resources like logging, configuration, and connection pools, but should be used sparingly.",
    "difficulty": "Hard",
    "topic": "Singleton"
},
{
    "id": "pf-221",
    "question": "What problem does the Factory pattern solve?",
    "options": [
        "It encapsulates object creation logic, allowing the client to create objects without specifying their exact classes",
        "It eliminates the need for classes entirely",
        "It automatically generates database schemas",
        "It prevents any object from being created"
    ],
    "answer": 0,
    "explanation": "The Factory pattern delegates object creation to a factory method or class, decoupling client code from concrete class instantiation and enabling flexible object creation based on parameters.",
    "difficulty": "Hard",
    "topic": "Factory"
},
{
    "id": "pf-222",
    "question": "What is the Observer pattern used for?",
    "options": [
        "Establishing a one-to-many dependency so that when one object changes state, all its dependents are notified automatically",
        "Observing CPU usage in production systems",
        "Watching file system changes only",
        "Creating a one-to-one relationship between objects"
    ],
    "answer": 0,
    "explanation": "The Observer pattern (publish-subscribe) defines a subscription mechanism where observers register with a subject and are automatically notified of state changes, used in event systems and reactive programming.",
    "difficulty": "Hard",
    "topic": "Observer"
},
{
    "id": "pf-223",
    "question": "When is the Builder pattern most appropriate?",
    "options": [
        "When constructing a complex object with many optional parameters or configuration steps",
        "When building simple objects with only required fields",
        "When destroying objects to free memory",
        "When compiling source code into binaries"
    ],
    "answer": 0,
    "explanation": "The Builder pattern separates the construction of a complex object from its representation, providing a fluent API for step-by-step construction, especially useful with many optional parameters.",
    "difficulty": "Hard",
    "topic": "Builder"
},
{
    "id": "pf-224",
    "question": "What characterizes event-driven architecture?",
    "options": [
        "Components communicate through asynchronous events, decoupling producers from consumers and enabling reactive systems",
        "All components run synchronously in a fixed order",
        "Events are processed only during scheduled maintenance windows",
        "Only user interface interactions are considered events"
    ],
    "answer": 0,
    "explanation": "Event-driven architecture uses events to trigger communication between decoupled services. Producers emit events without knowing consumers, enabling loose coupling, scalability, and real-time processing.",
    "difficulty": "Hard",
    "topic": "Event Driven Architecture"
},
{
    "id": "pf-225",
    "question": "What is the primary characteristic of layered architecture?",
    "options": [
        "The application is organized into horizontal layers (presentation, business logic, data access) with each layer only communicating with adjacent layers",
        "All components exist in a single flat structure",
        "Layers can communicate with any other layer directly",
        "The architecture only has two layers: frontend and backend"
    ],
    "answer": 0,
    "explanation": "Layered architecture organizes code into horizontal layers with strict separation of concerns. Each layer has a specific responsibility and only depends on the layer directly below it.",
    "difficulty": "Hard",
    "topic": "Layered Architecture"
},
{
    "id": "pf-226",
    "question": "How does MVVM differ from MVC?",
    "options": [
        "MVVM uses data binding to automatically synchronize the View and ViewModel, reducing the need for direct Controller manipulation of the View",
        "MVVM has no Model component",
        "MVVM is only used for mobile applications",
        "MVVM and MVC are identical patterns"
    ],
    "answer": 0,
    "explanation": "MVVM replaces the Controller with a ViewModel that exposes data streams and commands. The View binds to ViewModel properties, automatically updating when the ViewModel changes.",
    "difficulty": "Hard",
    "topic": "MVVM"
},
{
    "id": "pf-227",
    "question": "What is Cross-Site Scripting (XSS) and how do you prevent it?",
    "options": [
        "XSS injects malicious scripts into web pages viewed by other users. Prevention includes output encoding, Content Security Policy, and input validation",
        "XSS is a server-side vulnerability fixed by changing passwords",
        "XSS only affects Internet Explorer browsers",
        "XSS is prevented by using HTTPS only"
    ],
    "answer": 0,
    "explanation": "XSS attacks inject malicious JavaScript into web pages. Defense-in-depth includes: encoding output based on context, implementing CSP headers, validating input, and using framework auto-escaping.",
    "difficulty": "Hard",
    "topic": "XSS"
},
{
    "id": "pf-228",
    "question": "What is CSRF and what is the most effective defense?",
    "options": [
        "CSRF tricks authenticated users into submitting unwanted requests. Anti-CSRF tokens in forms are the primary defense",
        "CSRF is a database attack prevented by SQL sanitization",
        "CSRF only affects REST APIs using GET requests",
        "CSRF is prevented by using long session timeouts"
    ],
    "answer": 0,
    "explanation": "CSRF (Cross-Site Request Forgery) exploits the trust a site has in a user's browser. Anti-CSRF tokens (unique per session/form) verify that requests originate from the legitimate application.",
    "difficulty": "Hard",
    "topic": "CSRF"
},
{
    "id": "pf-229",
    "question": "What is SQL injection and how do you prevent it?",
    "options": [
        "SQL injection inserts malicious SQL through user input. Prevention uses parameterized queries, ORMs, and input validation",
        "SQL injection is a network-level attack blocked by firewalls",
        "SQL injection only affects NoSQL databases",
        "SQL injection is prevented by encrypting the database"
    ],
    "answer": 0,
    "explanation": "SQL injection exploits unsanitized input concatenated into SQL queries. Parameterized queries (prepared statements) separate SQL logic from data, making injection impossible.",
    "difficulty": "Hard",
    "topic": "SQL Injection"
},
{
    "id": "pf-230",
    "question": "What is the fundamental difference between encryption and hashing?",
    "options": [
        "Encryption is reversible with a key; hashing is a one-way function that produces a fixed-size output",
        "Encryption is faster than hashing for all data sizes",
        "Hashing is reversible with a key; encryption is one-way",
        "They are identical operations with different names"
    ],
    "answer": 0,
    "explanation": "Encryption transforms data using a key and can be reversed with the correct key (symmetric or asymmetric). Hashing produces a fixed-size digest that cannot be reversed to recover the original data.",
    "difficulty": "Hard",
    "topic": "Encryption"
},
{
    "id": "pf-231",
    "question": "Which vulnerability tops the OWASP Top 10 list?",
    "options": [
        "Broken Access Control - allowing users to act outside their intended permissions",
        "SQL Injection - the most common web vulnerability",
        "Cross-Site Scripting - the most dangerous attack",
        "Outdated Components - using libraries with known vulnerabilities"
    ],
    "answer": 0,
    "explanation": "In the 2021 OWASP Top 10, Broken Access Control moved to the top position, reflecting that improper authorization and access control failures are the most critical web application security risk.",
    "difficulty": "Hard",
    "topic": "OWASP Top 10"
},
{
    "id": "pf-232",
    "question": "How does a web application firewall (WAF) protect applications?",
    "options": [
        "It filters, monitors, and blocks HTTP traffic to and from a web application based on a set of rules detecting common attack patterns",
        "It encrypts all database queries automatically",
        "It replaces the need for application-level security",
        "It only blocks traffic from specific geographic regions"
    ],
    "answer": 0,
    "explanation": "A WAF operates at Layer 7, inspecting HTTP/HTTPS traffic against rule sets that detect SQL injection, XSS, CSRF, and other OWASP vulnerabilities, blocking malicious requests before they reach the application.",
    "difficulty": "Hard",
    "topic": "Firewalls"
},
{
    "id": "pf-233",
    "question": "What is the crontab format for scheduling a task to run every day at 2:30 AM?",
    "options": [
        "30 2 * * *",
        "* * 30 2 *",
        "2 30 * * *",
        "0 2 30 * *"
    ],
    "answer": 0,
    "explanation": "Crontab format is: minute hour day-of-month month day-of-week. '30 2 * * *' means minute 30, hour 2, every day, every month, every day of week.",
    "difficulty": "Hard",
    "topic": "Cron Jobs"
},
{
    "id": "pf-234",
    "question": "How do you find and terminate a process running on a specific port in Linux?",
    "options": [
        "Use 'lsof -i :<port>' to find the PID, then 'kill -9 <PID>' to terminate it",
        "Use 'netstat -p' to automatically kill the process",
        "Use 'rm -rf /port/<port>' to remove the port",
        "Use 'shutdown -p <port>' to close the port"
    ],
    "answer": 0,
    "explanation": "lsof -i :<port> lists processes using that port with their PIDs. kill -9 sends SIGKILL to forcefully terminate the process. Alternatively, fuser -k <port>/tcp kills the process directly.",
    "difficulty": "Hard",
    "topic": "Process Management"
},
{
    "id": "pf-235",
    "question": "What are the core phases of the DevOps lifecycle?",
    "options": [
        "Plan, Code, Build, Test, Release, Deploy, Operate, Monitor",
        "Design, Develop, Debug, Deploy",
        "Requirements, Analysis, Design, Implementation, Testing",
        "Init, Build, Run, Stop, Destroy"
    ],
    "answer": 0,
    "explanation": "The DevOps infinity loop represents continuous processes: Plan (Agile), Code (version control), Build (compilation), Test (automation), Release (versioning), Deploy (CI/CD), Operate (management), Monitor (observability).",
    "difficulty": "Hard",
    "topic": "DevOps Basics"
},
{
    "id": "pf-236",
    "question": "How does Terraform differ from CloudFormation for Infrastructure as Code?",
    "options": [
        "Terraform is cloud-agnostic and supports multiple providers; CloudFormation is AWS-specific",
        "Terraform only works with AWS; CloudFormation works with all clouds",
        "CloudFormation is open-source; Terraform is proprietary",
        "They have identical functionality with different syntax"
    ],
    "answer": 0,
    "explanation": "Terraform uses provider plugins to manage infrastructure across AWS, Azure, GCP, and hundreds of other services. CloudFormation is native to AWS and only manages AWS resources.",
    "difficulty": "Hard",
    "topic": "DevOps Basics"
},
{
    "id": "pf-237",
    "question": "What is blue-green deployment and what problem does it solve?",
    "options": [
        "Running two identical production environments (blue and green), switching traffic between them to enable zero-downtime deployments",
        "Using blue and green color coding for log levels",
        "Deploying to two different cloud providers simultaneously",
        "Running two versions of the database in parallel"
    ],
    "answer": 0,
    "explanation": "Blue-green deployment maintains two identical environments. The new version deploys to the idle environment, then traffic is switched, enabling instant rollback by switching back if issues arise.",
    "difficulty": "Hard",
    "topic": "DevOps Basics"
},
{
    "id": "pf-238",
    "question": "Which strategies are most effective for optimizing web page performance?",
    "options": [
        "Minimizing HTTP requests, enabling compression, lazy loading, code splitting, and optimizing critical rendering path",
        "Increasing server RAM and CPU only",
        "Using only inline CSS and JavaScript",
        "Disabling all images and animations"
    ],
    "answer": 0,
    "explanation": "Performance optimization involves multiple strategies: reducing payload size (minification, compression), reducing requests (bundling, inlining), optimizing loading (lazy loading, preload), and improving rendering efficiency.",
    "difficulty": "Hard",
    "topic": "Performance Optimization"
},
{
    "id": "pf-239",
    "question": "What is code splitting in the context of frontend performance?",
    "options": [
        "Breaking a large JavaScript bundle into smaller chunks that are loaded on demand, reducing initial page load time",
        "Splitting a single JavaScript file into multiple files manually",
        "Using multiple script tags instead of one",
        "Dividing code between frontend and backend"
    ],
    "answer": 0,
    "explanation": "Code splitting creates smaller bundles loaded only when needed (route-based or component-based), significantly reducing the initial JavaScript payload and improving Time to Interactive.",
    "difficulty": "Hard",
    "topic": "Performance Optimization"
},
{
    "id": "pf-240",
    "question": "What is Prometheus in the context of monitoring?",
    "options": [
        "An open-source monitoring and alerting toolkit that collects metrics via a pull model and stores them in a time-series database",
        "A log aggregation service for application logs",
        "A distributed tracing system for microservices",
        "A real-time user analytics platform"
    ],
    "answer": 0,
    "explanation": "Prometheus scrapes metric endpoints from instrumented applications, stores time-series data with labels, and supports PromQL for powerful querying, alerting rules, and integration with Grafana for visualization.",
    "difficulty": "Hard",
    "topic": "Prometheus Basics"
},
// Placement Fundamentals Questions

{
    "id": "pf-241",
    "question": "What role does Grafana play in a monitoring stack?",
    "options": [
        "A visualization and dashboarding platform that connects to data sources like Prometheus to display metrics in real-time graphs and panels",
        "A metrics collection agent installed on each server",
        "An alerting system that sends SMS notifications directly to hardware",
        "A log storage and search engine for unstructured text data"
    ],
    "answer": 0,
    "explanation": "Grafana connects to various data sources (Prometheus, InfluxDB, Elasticsearch) to create interactive, customizable dashboards that visualize time-series metrics for infrastructure and application monitoring.",
    "difficulty": "Hard",
    "topic": "Grafana Basics"
},
{
    "id": "pf-242",
    "question": "What is the primary purpose of distributed tracing in a microservices architecture?",
    "options": [
        "Tracking a single request as it traverses multiple services to identify latency bottlenecks and failure points",
        "Monitoring the CPU usage of individual microservice containers",
        "Counting the total number of HTTP requests across all services",
        "Encrypting communication channels between microservices"
    ],
    "answer": 0,
    "explanation": "Distributed tracing (e.g., Jaeger, Zipkin) assigns a unique trace ID to a request and propagates it across service boundaries, allowing developers to visualize the complete request path and pinpoint performance issues.",
    "difficulty": "Hard",
    "topic": "Monitoring"
},
{
    "id": "pf-243",
    "question": "How does structured logging improve application debugging over plain text logs?",
    "options": [
        "It outputs logs in a machine-readable format (like JSON) making them easily searchable, filterable, and aggregatable by log management tools",
        "It reduces the total size of log files by compressing text",
        "It automatically translates log messages into multiple languages",
        "It prevents sensitive data from being written to log files"
    ],
    "answer": 0,
    "explanation": "Structured logging attaches key-value pairs and consistent schemas to log entries (e.g., JSON format). This allows log aggregation tools like ELK stack or Splunk to reliably parse, index, and query logs at scale.",
    "difficulty": "Hard",
    "topic": "Logging"
},
{
    "id": "pf-244",
    "question": "In a highly concurrent Node.js application, what is a common cause of memory leaks and how can it be identified?",
    "options": [
        "Unclosed event listeners or global variable references retaining objects; identified using heap snapshots and the Chrome DevTools Memory profiler",
        "Using too many async/await statements simultaneously",
        "Creating too many HTTP routes in Express.js",
        "Storing configuration in environment variables instead of a database"
    ],
    "answer": 0,
    "explanation": "Memory leaks in Node.js often occur when callbacks or event listeners are not removed, preventing garbage collection. Heap snapshots taken over time can show growing object retention that indicates a leak.",
    "difficulty": "Hard",
    "topic": "Debugging"
},
{
    "id": "pf-245",
    "question": "What is the difference between static analysis and dynamic analysis in code quality?",
    "options": [
        "Static analysis examines source code without executing it; dynamic analysis evaluates the program while it is running",
        "Static analysis is done by humans; dynamic analysis is done by machines",
        "Static analysis only checks for syntax errors; dynamic analysis checks for business logic",
        "There is no difference; both terms refer to running unit tests"
    ],
    "answer": 0,
    "explanation": "Static analysis (e.g., ESLint, SonarQube) inspects code for vulnerabilities, style violations, and bugs without running it. Dynamic analysis (e.g., profiling, fuzz testing) observes behavior during execution to find runtime issues.",
    "difficulty": "Hard",
    "topic": "Static Analysis"
},
{
    "id": "pf-246",
    "question": "During a code review, you notice a developer has pushed the AWS secret key directly into a Git repository. What is the immediate correct action?",
    "options": [
        "Revoke/rotate the compromised key immediately, remove it from the codebase, and use git filter-branch or BFG to purge history",
        "Simply delete the file in the next commit and inform the team",
        "Add the file to .gitignore so it is not tracked in future commits",
        "Encrypt the key in the current file and push a new commit"
    ],
    "answer": 0,
    "explanation": "A pushed secret is compromised regardless of deletion, as it remains in Git history. The key must be rotated immediately, and tools like BFG Repo-Cleaner or git filter-repo must rewrite history to completely remove it.",
    "difficulty": "Hard",
    "topic": "Security Basics"
},
{
    "id": "pf-247",
    "question": "You are designing an API that aggregates data from three downstream microservices. The third service is slow and occasionally times out. What pattern best prevents this from blocking the entire API response?",
    "options": [
        "Implement the Circuit Breaker pattern with a fallback response for the slow service, and consider making that specific call asynchronous",
        "Increase the HTTP timeout for the entire API gateway to 5 minutes",
        "Synchronously retry the failing service 10 times before responding",
        "Return a 500 Internal Server Error to the client immediately when the third service fails"
    ],
    "answer": 0,
    "explanation": "The Circuit Breaker pattern (e.g., Hystrix, Resilience4j) prevents cascading failures by stopping calls to a failing service after a threshold, returning a cached fallback or default value instead of hanging or crashing.",
    "difficulty": "Hard",
    "topic": "Design Patterns"
},
{
    "id": "pf-248",
    "question": "What is the primary risk of using the latest tag for base images in a production Dockerfile?",
    "options": [
        "The 'latest' tag is a floating reference that can resolve to a completely different image version upon rebuilds, causing unpredictable and potentially breaking deployments",
        "It makes the Docker image file size significantly larger",
        "It prevents the image from being pushed to a private registry",
        "It automatically deletes older versions of the image from the host"
    ],
    "answer": 0,
    "explanation": "The 'latest' tag is mutable and points to whatever the most recent build is. A rebuild months later might pull a new major version with breaking changes. Production Dockerfiles should pin to specific digest hashes or version tags.",
    "difficulty": "Hard",
    "topic": "Docker"
},
{
    "id": "pf-249",
    "question": "In a monolithic architecture being migrated to microservices, what is the most critical database challenge to address?",
    "options": [
        "Transitioning from a single shared database to database-per-service, which requires defining clear bounded contexts and handling distributed data consistency",
        "Migrating from SQL to NoSQL for all services regardless of their data access patterns",
        "Keeping the single database but accessing it through multiple microservices for simplicity",
        "Creating a single massive database schema that accommodates all microservices"
    ],
    "answer": 0,
    "explanation": "The database is often the hardest part of decomposing a monolith. Shared databases create tight coupling. Implementing the database-per-service pattern requires establishing boundaries and using patterns like Saga for distributed transactions.",
    "difficulty": "Hard",
    "topic": "Architecture Basics"
},
{
    "id": "pf-250",
    "question": "A critical production service is experiencing intermittent 5xx errors that cannot be reproduced in the staging environment. Which systematic debugging approach should you take first?",
    "options": [
        "Analyze production logs and distributed traces to identify patterns, correlate the errors with specific deployment states, load levels, or dependent service anomalies",
        "Rewrite the service from scratch using a different programming language",
        "Assume the staging environment is correct and add extensive logging to production without analyzing existing data",
        "Shut down the service and redeploy the previous week's version without investigation"
    ],
    "answer": 0,
    "explanation": "Systematic debugging starts with gathering observability data (logs, metrics, traces) from the exact failure environment. Correlating 5xx errors with deployment timestamps, traffic spikes, or downstream latency reveals the root cause without guessing.",
    "difficulty": "Hard",
    "topic": "Debugging"
},


    {
        id: "pf-251",
        question: "In Git, what does the reflog record that the regular log does not?",
        options: [
            "Commit messages of all branches",
            "Every state change to HEAD, including resets and rebases",
            "Only the commit hashes of merged branches",
            "The diff of each commit"
        ],
        answer: 1,
        explanation: "The reflog records every movement of HEAD, including operations like git reset, git rebase, and git checkout that would otherwise be invisible in the standard commit log.",
        difficulty: "Medium",
        topic: "Advanced Git"
    },
    {
        id: "pf-252",
        question: "What is the primary difference between git merge --no-ff and a regular git merge when the feature branch has no divergence from main?",
        options: [
            "git merge --no-ff fails because there is nothing to merge",
            "git merge --no-ff creates a merge commit even when a fast-forward is possible",
            "git merge --no-ff deletes the feature branch automatically",
            "git merge --no-ff performs a rebase before merging"
        ],
        answer: 1,
        explanation: "The --no-ff flag forces Git to create a merge commit even when a fast-forward merge would be possible, preserving the branch topology and making it clear that a feature was developed as a separate branch.",
        difficulty: "Medium",
        topic: "Advanced Git"
    },
    {
        id: "pf-253",
        question: "When using git stash, which command allows you to stash the current state including untracked files?",
        options: [
            "git stash --all",
            "git stash -u",
            "git stash --include-untracked",
            "Both git stash -u and git stash --include-untracked"
        ],
        answer: 3,
        explanation: "Both -u and --include-untracked are equivalent flags that tell git stash to also stash untracked files. The --all flag goes further by also stashing ignored files.",
        difficulty: "Medium",
        topic: "Advanced Git"
    },
    {
        id: "pf-254",
        question: "In a monorepo with multiple subdirectories, how do you run git log showing only changes affecting the 'src/api/' directory?",
        options: [
            "git log --path src/api/",
            "git log src/api/",
            "git log -- src/api/",
            "git log --filter=src/api/"
        ],
        answer: 2,
        explanation: "The -- separator tells Git that what follows are pathspec arguments, not branch names or options. git log -- src/api/ filters the log to show only commits that modified files under src/api/.",
        difficulty: "Hard",
        topic: "Advanced Git"
    },
    {
        id: "pf-255",
        question: "What does git worktree add ../hotfix-dir hotfix-branch accomplish?",
        options: [
            "Creates a new branch called hotfix-branch in the ../hotfix-dir directory",
            "Checks out hotfix-branch into a separate working directory at ../hotfix-dir linked to the same repository",
            "Copies the entire repository to ../hotfix-dir and switches to hotfix-branch",
            "Creates a symlink from ../hotfix-dir to the current .git folder"
        ],
        answer: 1,
        explanation: "git worktree add creates an additional working tree associated with the same repository. This allows you to have multiple branches checked out simultaneously in different directories without cloning the repo again.",
        difficulty: "Hard",
        topic: "Advanced Git"
    },
    {
        id: "pf-256",
        question: "What is the effect of setting diff.external to a custom tool in Git configuration?",
        options: [
            "Git uses the external tool for all diff operations instead of the built-in diff algorithm",
            "Git passes diff output to the external tool as a post-processing step",
            "Git uses the external tool to display diffs instead of the default pager",
            "Git disables its internal diff and relies entirely on the external tool for comparison"
        ],
        answer: 0,
        explanation: "Setting diff.external to a custom program tells Git to use that program instead of its built-in diff for displaying differences. The external program receives the old and new file paths as arguments.",
        difficulty: "Hard",
        topic: "Advanced Git"
    },
    {
        id: "pf-257",
        question: "How does git describe determine the version string for a commit?",
        options: [
            "It reads the VERSION file from the repository root",
            "It finds the most recent tag reachable from the commit and appends the number of additional commits and an abbreviated SHA",
            "It counts total commits from the first commit and formats as v0.x.y",
            "It uses the branch name combined with the latest tag"
        ],
        answer: 1,
        explanation: "git describe finds the nearest ancestor tag that is reachable from the given commit, then appends the number of commits since that tag and an abbreviated object name of the commit itself (e.g., v1.2.3-14-gabc1234).",
        difficulty: "Hard",
        topic: "Advanced Git"
    },
    {
        id: "pf-258",
        question: "What happens when you run git update-ref -d HEAD in a bare repository?",
        options: [
            "The HEAD file is deleted and the repository becomes unusable",
            "The HEAD symbolic reference is deleted, making the repository detached with no current branch",
            "The command fails because HEAD cannot be deleted in a bare repository",
            "Only the branch reference is deleted while HEAD remains pointing to it"
        ],
        answer: 1,
        explanation: "git update-ref -d HEAD deletes the HEAD reference. In a bare repository, this leaves it in a state where there is no current branch, which can be recovered by re-pointing HEAD to a branch reference.",
        difficulty: "Hard",
        topic: "Advanced Git"
    },
    {
        id: "pf-259",
        question: "Which Git command shows the commit that introduced a specific line in a file?",
        options: [
            "git log -L :line_number:filename",
            "git blame filename | grep 'line_number'",
            "git annotate --line-number filename",
            "git show --origin filename:line_number"
        ],
        answer: 0,
        explanation: "git log -L :start,end:filename (or -L :funcname:filename) shows the evolution of a range of lines, including which commit introduced each change. This is more powerful than git blame as it shows the full history of specific lines.",
        difficulty: "Hard",
        topic: "Advanced Git"
    },
    {
        id: "pf-260",
        question: "When using git submodule update --remote, what specifically changes?",
        options: [
            "The submodule's remote URL is updated to the latest from .gitmodules",
            "Each submodule is checked out to the latest commit on its default branch from the remote",
            "The .gitmodules file is fetched from the remote and merged",
            "Submodule configurations are synced with the parent repository's remote"
        ],
        answer: 1,
        explanation: "git submodule update --remote fetches the latest changes from each submodule's remote and checks out the latest commit on the submodule's default branch (or the branch specified in .gitmodules), rather than the commit recorded in the parent repository.",
        difficulty: "Medium",
        topic: "Advanced Git"
    },
    {
        id: "pf-261",
        question: "In Git internals, what object type is stored when you create a lightweight tag?",
        options: [
            "A tag object pointing to a commit object",
            "No new object is created; only a reference in .git/refs/tags/ is added",
            "A blob object containing the tag name",
            "A tree object mapping the tag name to a commit"
        ],
        answer: 1,
        explanation: "A lightweight tag simply creates a reference pointer directly to a commit SHA in .git/refs/tags/. No new Git object is created in the object store. Annotated tags, by contrast, create a tag object with metadata.",
        difficulty: "Medium",
        topic: "Git Internals"
    },
    {
        id: "pf-262",
        question: "What is the structure of a Git tree object?",
        options: [
            "An ordered list of (mode, filename, SHA-1) entries representing files and subdirectories",
            "A key-value store mapping file paths to blob SHAs",
            "A nested JSON structure representing the directory hierarchy",
            "A flat array of blob SHAs with an index mapping to filenames"
        ],
        answer: 0,
        explanation: "A tree object contains an ordered list of entries, each with a file mode (permissions/type), a filename, and a SHA-1 reference to either a blob (for files) or another tree object (for subdirectories).",
        difficulty: "Hard",
        topic: "Git Internals"
    },
    {
        id: "pf-263",
        question: "How does Git compute the SHA-1 hash for a commit object?",
        options: [
            "SHA-1 of the concatenated file diffs in the commit",
            "SHA-1 of a string containing 'commit' + size + null byte + tree SHA + parent SHA(s) + author + committer + message",
            "SHA-1 of the tree object's hash combined with the timestamp",
            "SHA-1 of the commit message alone"
        ],
        answer: 1,
        explanation: "Git prefixes the commit content with 'commit ' followed by the byte length, a null byte, then the tree SHA, parent SHA(s), author info, committer info, and commit message. The SHA-1 of this entire string becomes the commit hash.",
        difficulty: "Hard",
        topic: "Git Internals"
    },
    {
        id: "pf-264",
        question: "What does the 'pack' file format in Git's .git/objects/pack/ directory achieve?",
        options: [
            "It encrypts Git objects for secure transmission",
            "It compresses multiple objects using delta compression to reduce storage and improve network transfer",
            "It creates a backup copy of all loose objects",
            "It packages objects by their creation timestamp for faster log traversal"
        ],
        answer: 1,
        explanation: "Pack files store multiple Git objects in a single file using both zlib compression and delta compression (storing objects as differences from other objects). This dramatically reduces repository size, especially after garbage collection.",
        difficulty: "Medium",
        topic: "Git Internals"
    },
    {
        id: "pf-265",
        question: "In the Git index (staging area), how are file entries stored?",
        options: [
            "As full file contents mapped to filenames",
            "As (ctime, mtime, dev, ino, mode, uid, gid, size, SHA-1, flags, pathname) tuples",
            "As references to tree objects in the object store",
            "As diffs between the working directory and HEAD"
        ],
        answer: 1,
        explanation: "Each entry in the Git index stores stat information (ctime, mtime, device, inode), file mode, UID, GID, file size, the SHA-1 of the blob object, stage flags (for merge conflict resolution), and the pathname.",
        difficulty: "Hard",
        topic: "Git Internals"
    },
    {
        id: "pf-266",
        question: "What is the purpose of the .git/info/packs file?",
        options: [
            "It lists all pack files that exist in the repository along with their SHA-1 checksums",
            "It stores the pack configuration settings",
            "It maps loose objects to their pack file locations",
            "It contains the public key used to verify pack file integrity"
        ],
        answer: 0,
        explanation: "The packs file lists each pack file in .git/objects/pack/ along with its corresponding .idx file and the pack's SHA-1 checksum. This helps Git quickly discover available pack files without listing the directory.",
        difficulty: "Hard",
        topic: "Git Internals"
    },
    {
        id: "pf-267",
        question: "When Git performs a shallow clone with --depth=1, what is missing compared to a full clone?",
        options: [
            "The working directory files are incomplete",
            "The .git directory lacks all commit objects except the latest, and no parent pointers exist for the fetched commits",
            "Only the main branch is cloned; other branches are excluded",
            "The blob and tree objects are replaced with placeholders"
        ],
        answer: 1,
        explanation: "A shallow clone fetches only the specified number of commits (depth=1 means just the tip). The fetched commits have no parent pointers, so history cannot be traversed beyond the shallow boundary. Blob and tree objects for those commits are present.",
        difficulty: "Medium",
        topic: "Git Internals"
    },
    {
        id: "pf-268",
        question: "What mechanism does Git use to detect if a file in the working directory has been modified without computing a full SHA-1 hash?",
        options: [
            "It compares the file modification timestamp with the index entry's mtime",
            "It uses a combination of stat information (mtime, ctime, size, ino) from the index entry to assume unchanged, then verifies with SHA-1 only if stats differ",
            "It stores a CRC32 checksum in the index for quick comparison",
            "It relies on the operating system's file change notification system"
        ],
        answer: 1,
        explanation: "Git first compares stat information stored in the index (mtime, ctime, dev, ino, size) with the current file stats. If they match, Git assumes the file is unchanged (racy-git protection notwithstanding). Only if stats differ does Git compute the full SHA-1 hash.",
        difficulty: "Hard",
        topic: "Git Internals"
    },
    {
        id: "pf-269",
        question: "During an interactive rebase, what does the 'edit' command allow you to do that 'reword' does not?",
        options: [
            "Edit the commit message and the commit's file changes",
            "Pause the rebase to amend the commit with both message changes and additional file modifications",
            "Edit the commit's parent reference",
            "Change the branch that the commit belongs to"
        ],
        answer: 1,
        explanation: "The 'edit' command stops the rebase at that commit, allowing you to amend it (changing both files and message) before continuing. 'reword' only lets you change the commit message without stopping for file modifications.",
        difficulty: "Medium",
        topic: "Git Rebase"
    },
    {
        id: "pf-270",
        question: "What is a critical risk of rebasing a branch that has already been pushed and shared with other developers?",
        options: [
            "The branch becomes read-only after rebasing",
            "The rebased commits get new SHAs, causing divergence from other developers' copies and potential lost work on merge",
            "Git automatically force-pushes the rebased branch, overwriting the remote",
            "The rebase operation fails with a conflict that cannot be resolved"
        ],
        answer: 1,
        explanation: "Rebasing rewrites commit history, generating new SHA-1 hashes. If others based work on the original commits, their branches will diverge from the rebased version, leading to duplicate commits and potential confusion or lost work.",
        difficulty: "Medium",
        topic: "Git Rebase"
    },
    {
        id: "pf-271",
        question: "How does git rebase --onto A B C differ from git rebase A when on branch C?",
        options: [
            "They are functionally identical",
            "git rebase --onto A B C rebases only commits unique to C that are after B onto A, skipping commits already in B's history",
            "git rebase --onto A B C only changes the base of branch B, leaving C unchanged",
            "git rebase --onto performs a merge instead of a rebase"
        ],
        answer: 1,
        explanation: "The --onto flag specifies the new base (A), the starting point (B), and the branch to rebase (C). It takes only the commits in C that are after B and reapplies them onto A. This is useful for pruning unwanted commits from the rebase.",
        difficulty: "Hard",
        topic: "Git Rebase"
    },
    {
        id: "pf-272",
        question: "During a rebase, if a conflict occurs on the 3rd of 5 commits, what happens after you resolve the conflict and run git rebase --continue?",
        options: [
            "Git applies the remaining 2 commits and finishes the rebase",
            "Git re-applies the 3rd commit with your resolution, then continues with commits 4 and 5",
            "Git restarts the entire rebase from the first commit",
            "Git skips the 3rd commit and proceeds to the 4th"
        ],
        answer: 1,
        explanation: "After resolving a conflict during rebase and running --continue, Git finalizes the current commit with your resolution and then proceeds to apply the remaining commits (4th and 5th in this case) one by one.",
        difficulty: "Medium",
        topic: "Git Rebase"
    },
    {
        id: "pf-273",
        question: "What does git rebase -x 'npm test' do during an interactive rebase?",
        options: [
            "Runs npm test once after all commits have been rebased",
            "Executes npm test after each commit is applied, pausing if the command fails",
            "Runs npm test before starting the rebase to verify the initial state",
            "Adds a new commit after each rebased commit containing the test results"
        ],
        answer: 1,
        explanation: "The -x or --exec flag runs the specified command after each commit is successfully applied during the rebase. If the command exits with a non-zero status, the rebase pauses, allowing you to fix the issue before continuing.",
        difficulty: "Hard",
        topic: "Interactive Rebase"
    },
    {
        id: "pf-274",
        question: "In an interactive rebase todo list, what happens if you change 'pick' to 'break' for a commit?",
        options: [
            "The commit is split into individual file changes",
            "The rebase pauses after the previous commit, before applying the 'break' commit, allowing you to run arbitrary commands",
            "The commit is removed from the rebase entirely",
            "The rebase is immediately aborted"
        ],
        answer: 1,
        explanation: "The 'break' command pauses the rebase at that point, giving you a shell to run arbitrary commands, inspect the state, or make changes before continuing. It does not affect the commit itself; it just inserts a pause point.",
        difficulty: "Hard",
        topic: "Interactive Rebase"
    },
    {
        id: "pf-275",
        question: "What is the effect of using 'fixup' instead of 'squash' in an interactive rebase?",
        options: [
            "fixup merges the commit into the previous one but discards the fixup commit's message, using only the previous commit's message",
            "fixup creates a merge commit that combines both changes",
            "fixup reverses the changes of the specified commit",
            "fixup moves the commit to the end of the rebase list"
        ],
        answer: 0,
        explanation: "fixup combines a commit with the previous one (like squash) but automatically discards the fixup commit's message. This is useful for minor fixes that don't need their own commit message, without triggering the message editor.",
        difficulty: "Medium",
        topic: "Interactive Rebase"
    },
    {
        id: "pf-276",
        question: "When running git rebase with autosquash enabled, what pattern in a commit message triggers automatic squashing?",
        options: [
            "fixup! <original commit message> or squash! <original commit message>",
            "[squash] <original commit message>",
            "merge: <original commit message>",
            "rebase: squash <original commit message>"
        ],
        answer: 0,
        explanation: "With --autosquash (or configured via rebase.autoSquash), commits whose messages start with 'fixup! ' or 'squash! ' followed by an existing commit's message are automatically moved after that commit and marked as fixup or squash in the todo list.",
        difficulty: "Medium",
        topic: "Interactive Rebase"
    },
    {
        id: "pf-277",
        question: "What is the key difference between git cherry-pick and git cherry-pick -x <commit>?",
        options: [
            "-x includes the original commit's author date instead of the current date",
            "-x appends a line to the cherry-picked commit's message with the original commit's SHA for traceability",
            "-x cherry-picks the commit and all its ancestors",
            "-x creates a merge commit instead of a regular commit"
        ],
        answer: 1,
        explanation: "The -x flag appends '(cherry picked from commit <sha>)' to the commit message of the cherry-picked commit. This creates an explicit traceable link back to the original commit, which is useful for tracking where changes originated.",
        difficulty: "Medium",
        topic: "Cherry Pick"
    },
    {
        id: "pf-278",
        question: "When cherry-picking a merge commit, what additional information must you provide and why?",
        options: [
            "The --no-commit flag, because merge commits cannot be committed directly",
            "The -m flag with a parent number (usually 1), because Git needs to know which parent's history to consider as the mainline",
            "The --strategy flag to specify the merge strategy used originally",
            "The -s flag to specify the signature algorithm for the new commit"
        ],
        answer: 1,
        explanation: "A merge commit has multiple parents. When cherry-picking, Git needs to know which parent represents the mainline branch. The -m 1 flag specifies parent 1 (typically the branch you were on when you merged), determining which diff to apply.",
        difficulty: "Hard",
        topic: "Cherry Pick"
    },
    {
        id: "pf-279",
        question: "What is the recommended approach to squash multiple commits into one before pushing a feature branch?",
        options: [
            "Delete the branch and recreate it with a single commit",
            "Use git reset --soft to the base commit, then create a new single commit",
            "Use git merge --squash from the feature branch into itself",
            "Manually copy all changes to a new branch and commit once"
        ],
        answer: 1,
        explanation: "git reset --soft <base-commit> moves the branch pointer back while keeping all changes staged. You can then create a single new commit encompassing all the work, which is a clean and safe way to squash commits.",
        difficulty: "Medium",
        topic: "Squash"
    },
    {
        id: "pf-280",
        question: "Which Git hook runs after a commit is made but before the commit message is finalized?",
        options: [
            "post-commit",
            "prepare-commit-msg",
            "commit-msg",
            "pre-commit"
        ],
        answer: 1,
        explanation: "The prepare-commit-msg hook runs after the commit message template is prepared but before the editor is opened (or before the message is finalized with -m). It can modify the default message, add issue numbers, or enforce message templates.",
        difficulty: "Medium",
        topic: "Git Hooks"
    },
    {
        id: "pf-281",
        question: "What is the purpose of the pre-receive hook in a Git remote repository?",
        options: [
            "It runs before each file is received during a push",
            "It runs once per push operation, receiving all updated refs on stdin, and can reject the entire push",
            "It runs after the push is complete to notify external systems",
            "It validates the SSH key of the pushing user"
        ],
        answer: 1,
        explanation: "The pre-receive hook runs once per push, receiving a list of all ref updates (old SHA, new SHA, ref name) on stdin. It can inspect all changes and either allow or reject the entire push atomically. This is different from update hooks which run per-ref.",
        difficulty: "Hard",
        topic: "Git Hooks"
    },
    {
        id: "pf-282",
        question: "When using git bisect to find a bug, what does git bisect bad <commit> signify?",
        options: [
            "The commit is malformed and should be deleted",
            "The specified commit contains the bug being investigated",
            "The commit has bad merge conflicts",
            "The commit fails the test suite"
        ],
        answer: 1,
        explanation: "In git bisect, you mark a commit as 'bad' if it contains the bug, and a commit as 'good' if it does not. Git then performs a binary search through the commit history, checking out the midpoint commit for you to test.",
        difficulty: "Easy",
        topic: "Git Bisect"
    },
    {
        id: "pf-283",
        question: "How can you automate git bisect so it runs without manual intervention?",
        options: [
            "git bisect --auto-run 'npm test'",
            "git bisect run 'npm test'",
            "git bisect automated 'npm test'",
            "git bisect --script 'npm test'"
        ],
        answer: 1,
        explanation: "git bisect run <command> automatically checks out each commit in the bisection range, runs the specified command, and marks the commit as good (exit code 0) or bad (non-zero exit code) based on the result, continuing until the first bad commit is found.",
        difficulty: "Medium",
        topic: "Git Bisect"
    },
    {
        id: "pf-284",
        question: "What is the difference between a lightweight tag and an annotated tag in terms of GPG signing?",
        options: [
            "Both can be signed equally using git tag -s",
            "Only annotated tags can be GPG signed because lightweight tags have no tag object to attach the signature to",
            "Lightweight tags are signed by default, while annotated tags require explicit signing",
            "GPG signing works on lightweight tags by signing the reference file directly"
        ],
        answer: 1,
        explanation: "Annotated tags create a tag object in the object database that can hold metadata including a GPG signature. Lightweight tags are just pointer references with no associated object, so they cannot carry a GPG signature.",
        difficulty: "Medium",
        topic: "Git Tags"
    },
    {
        id: "pf-285",
        question: "In a semantic versioning scheme with Git tags, what does the pre-release identifier in 'v2.1.0-rc.1' indicate?",
        options: [
            "The first commit of version 2.1.0",
            "A release candidate build preceding the final v2.1.0 release",
            "A hotfix applied after v2.1.0 was released",
            "The first backward-incompatible change for version 2.1.0"
        ],
        answer: 1,
        explanation: "In semantic versioning, the suffix '-rc.1' denotes a release candidate, indicating this version is a candidate for the final 2.1.0 release but may still have issues. Pre-release versions have lower precedence than the associated normal version.",
        difficulty: "Easy",
        topic: "Release Management"
    },
    {
        id: "pf-286",
        question: "What is the purpose of a 'release branch' in the GitFlow model compared to a 'hotfix branch'?",
        options: [
            "They serve the same purpose and are interchangeable",
            "A release branch is created from develop to stabilize for release, while a hotfix branch is created from main to fix critical issues in production",
            "A release branch is for minor fixes, while a hotfix branch is for major features",
            "A release branch merges into develop only, while a hotfix branch merges into main only"
        ],
        answer: 1,
        explanation: "In GitFlow, release branches are cut from develop for release stabilization (bug fixes, version bumping, documentation). Hotfix branches are cut from main (production) to address critical issues and are merged back into both main and develop.",
        difficulty: "Medium",
        topic: "Release Management"
    },
    {
        id: "pf-287",
        question: "In GitHub Actions, what is the difference between github.event_name and github.workflow?",
        options: [
            "github.event_name is the trigger type (push, pull_request), github.workflow is the name defined in the workflow file",
            "github.event_name is the user who triggered the workflow, github.workflow is the branch name",
            "Both refer to the same value but from different contexts",
            "github.event_name is the workflow file name, github.workflow is the schedule expression"
        ],
        answer: 0,
        explanation: "github.event_name contains the name of the event that triggered the workflow (e.g., 'push', 'pull_request', 'schedule'). github.workflow contains the name property defined at the top of the workflow YAML file.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "pf-288",
        question: "How do you ensure a GitHub Actions job runs only when a pull request targets the main branch?",
        options: [
            "if: github.base_ref == 'main'",
            "if: github.event.pull_request.base.ref == 'main'",
            "if: github.ref == 'refs/heads/main'",
            "if: github.head_ref == 'main'"
        ],
        answer: 1,
        explanation: "github.event.pull_request.base.ref contains the name of the branch the pull request is targeting. github.head_ref is the source branch, and github.ref would be 'refs/pull/<number>/merge' in a PR context, not the target branch.",
        difficulty: "Hard",
        topic: "GitHub Actions"
    },
    {
        id: "pf-289",
        question: "What is the purpose of the ACTIONS_ALLOW_UNSECURE_COMMANDS environment variable in GitHub Actions?",
        options: [
            "It allows running workflows from untrusted forks in public repositories",
            "It enables the deprecated set-env and add-path commands that write directly to the runner environment",
            "It permits execution of shell commands without sandboxing",
            "It allows workflows to access secrets from untrusted repositories"
        ],
        answer: 1,
        explanation: "This environment variable re-enables the old ::set-env and ::add-path workflow commands that were disabled due to a script injection vulnerability. It should only be used as a temporary migration measure, not as a permanent solution.",
        difficulty: "Hard",
        topic: "GitHub Actions"
    },
    {
        id: "pf-290",
        question: "In GitHub Actions, what does concurrency: group: ci-${{ github.ref }} achieve?",
        options: [
            "It runs all CI workflows concurrently regardless of branch",
            "It cancels in-progress runs in the same group when a new run is triggered on the same Git reference",
            "It limits the number of concurrent jobs to the number of CPU cores",
            "It ensures that only one workflow can run across the entire organization at a time"
        ],
        answer: 1,
        explanation: "The concurrency key groups workflow runs by the Git reference. When a new run is triggered on the same branch/PR, any in-progress run in the same group is cancelled (by default). This prevents duplicate CI runs on the same branch.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "pf-291",
        question: "What is a reusable workflow in GitHub Actions and how is it invoked?",
        options: [
            "A workflow that uses only built-in actions without third-party dependencies, invoked with 'uses: reusable'",
            "A workflow defined with 'workflow_call' trigger, invoked from another workflow using 'uses: ./.github/workflows/reusable.yml'",
            "A workflow template from the GitHub Marketplace, invoked with 'template: workflow-name'",
            "A workflow that caches all dependencies for reuse, invoked with 'uses: cached'"
        ],
        answer: 1,
        explanation: "Reusable workflows are defined with 'on: workflow_call' trigger and can accept inputs and secrets. Other workflows invoke them using the 'uses' key with the path to the reusable workflow file, enabling DRY principles across CI/CD pipelines.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "pf-292",
        question: "In a CI/CD pipeline, what is the primary purpose of a 'canary deployment' stage?",
        options: [
            "To deploy the application to a separate testing environment before production",
            "To route a small percentage of production traffic to the new version to detect issues before full rollout",
            "To create a backup of the current production deployment",
            "To deploy the application to multiple regions simultaneously"
        ],
        answer: 1,
        explanation: "Canary deployment gradually shifts a small fraction of production traffic (e.g., 1-5%) to the new version. Monitoring detects regressions early, and if issues arise, traffic is routed back to the stable version without affecting most users.",
        difficulty: "Medium",
        topic: "Advanced CI/CD"
    },
    {
        id: "pf-293",
        question: "What is the key advantage of using trunk-based development over feature branches in a CI/CD context?",
        options: [
            "It eliminates the need for code reviews",
            "It enables continuous integration by integrating small changes frequently to the main branch, reducing merge conflicts and enabling faster feedback",
            "It allows developers to work offline without a central repository",
            "It removes the need for automated testing"
        ],
        answer: 1,
        explanation: "Trunk-based development encourages small, frequent commits to the main branch (trunk), supported by feature flags for incomplete features. This minimizes merge conflicts, ensures the main branch is always deployable, and provides rapid CI feedback.",
        difficulty: "Medium",
        topic: "Advanced CI/CD"
    },
    {
        id: "pf-294",
        question: "In a blue-green deployment strategy, what is the role of the 'blue' environment after a successful switch to 'green'?",
        options: [
            "It is immediately destroyed to save costs",
            "It serves as the standby environment for the next deployment and as an instant rollback target if issues are detected in green",
            "It continues serving half the production traffic permanently",
            "It is converted to a staging environment for manual testing"
        ],
        answer: 1,
        explanation: "After switching traffic from blue to green, the blue environment stays active as a hot standby. If the green deployment shows issues, traffic can be instantly switched back to blue. For the next deployment, blue becomes the target for the new version.",
        difficulty: "Medium",
        topic: "Advanced CI/CD"
    },
    {
        id: "pf-295",
        question: "What is a 'deployment plateau' in the context of continuous delivery metrics?",
        options: [
            "A period where no new features are being developed",
            "The time between when a deployment is ready and when it actually reaches production due to manual gates or approvals",
            "The maximum number of deployments the infrastructure can handle per hour",
            "A stable state where the deployment success rate reaches 100%"
        ],
        answer: 1,
        explanation: "A deployment plateau represents the lag between a deployment being technically ready and it actually reaching production. This often indicates manual bottlenecks, approval processes, or organizational constraints that limit the benefits of CI/CD automation.",
        difficulty: "Hard",
        topic: "Advanced CI/CD"
    },
    {
        id: "pf-296",
        question: "In CI/CD, what does 'shift-left' security testing mean?",
        options: [
            "Moving security testing tools to the left side of the monitoring dashboard",
            "Integrating security testing (SAST, DAST, dependency scanning) early in the development pipeline rather than only in post-deployment stages",
            "Prioritizing security vulnerabilities based on their position in the codebase",
            "Shifting security responsibility entirely to the development team"
        ],
        answer: 1,
        explanation: "Shift-left security means moving security practices earlier in the software development lifecycle. Instead of testing security only before release, security scanning, code analysis, and dependency checks run during commit, build, and PR stages.",
        difficulty: "Easy",
        topic: "Advanced CI/CD"
    },
    {
        id: "pf-297",
        question: "In a Jenkins declarative pipeline, what does the 'agent none' directive at the top level achieve?",
        options: [
            "It disables the Jenkins agent entirely, preventing any pipeline execution",
            "It allocates no agent at the pipeline level, requiring each stage to specify its own agent",
            "It uses the default agent but with no environment variables",
            "It runs the pipeline directly on the Jenkins controller without any agent"
        ],
        answer: 1,
        explanation: "When 'agent none' is specified at the top level, no agent is allocated globally. Each stage must then specify its own 'agent' directive, allowing different stages to run on different agents (e.g., build on Linux, test on Windows).",
        difficulty: "Medium",
        topic: "Jenkins Pipelines"
    },
    {
        id: "pf-298",
        question: "What is the purpose of the 'post' section in a Jenkins declarative pipeline with 'always' condition?",
        options: [
            "It runs only when the pipeline succeeds",
            "It runs after every pipeline execution regardless of result, useful for cleanup and notification",
            "It runs only before the pipeline starts",
            "It runs only when the pipeline is manually aborted"
        ],
        answer: 1,
        explanation: "The 'post' block with 'always' condition executes after the pipeline completes, regardless of success, failure, or abort. This is ideal for cleanup tasks (deleting temporary resources), sending notifications, or publishing reports.",
        difficulty: "Easy",
        topic: "Jenkins Pipelines"
    },
    {
        id: "pf-299",
        question: "In Jenkins, what is the key difference between a 'label' agent and a 'docker' agent?",
        options: [
            "A label agent runs on any available node; a docker agent runs inside a specified Docker container on a node",
            "A label agent is for Linux only; a docker agent is for Windows only",
            "A label agent uses physical machines; a docker agent uses virtual machines",
            "There is no difference; they are aliases"
        ],
        answer: 0,
        explanation: "An agent with 'label' selects a Jenkins node matching the specified label. A 'docker' agent launches a specified Docker container on a node (possibly selected by label) and runs the pipeline steps inside that container, providing build isolation.",
        difficulty: "Medium",
        topic: "Jenkins Pipelines"
    },
    {
        id: "pf-300",
        question: "In GitLab CI, what does the 'needs' keyword enable in a pipeline definition?",
        options: [
            "It specifies the Docker image needed for the job",
            "It creates a directed acyclic graph (DAG) for jobs, allowing them to run as soon as their dependencies are met without waiting for previous stages to complete",
            "It declares the environment variables needed by the job",
            "It lists the artifacts needed from previous jobs"
        ],
        answer: 1,
        explanation: "The 'needs' keyword enables DAG mode, where jobs can start as soon as all jobs they depend on complete, rather than waiting for the entire previous stage to finish. This can significantly reduce total pipeline execution time.",
        difficulty: "Hard",
        topic: "GitLab CI"
    },
    {
        id: "pf-301",
        question: "In GitLab CI, what is the effect of setting 'interruptible: true' on a job?",
        options: [
            "The job can be manually paused and resumed later",
            "If a newer commit triggers a new pipeline on the same branch, this job can be cancelled to save resources",
            "The job will retry automatically if interrupted by network failure",
            "The job can be split across multiple runners"
        ],
        answer: 1,
        explanation: "When a job is marked interruptible and a newer pipeline runs on the same branch, GitLab can cancel the interruptible job from the older pipeline. This prevents wasting CI resources on outdated changes when new commits are pushed quickly.",
        difficulty: "Medium",
        topic: "GitLab CI"
    },
    {
        id: "pf-302",
        question: "In Azure DevOps, what is the difference between a 'build' pipeline and a 'release' pipeline?",
        options: [
            "Build pipelines compile code; release pipelines only deploy binaries",
            "Build pipelines produce artifacts (compiled code, Docker images); release pipelines define the deployment process across environments with approvals and gates",
            "Build pipelines run on Linux agents; release pipelines run on Windows agents",
            "There is no difference in Azure DevOps; they are the same concept"
        ],
        answer: 1,
        explanation: "Build pipelines (now called 'pipelines' in YAML) focus on building, testing, and publishing artifacts. Release pipelines (classic) or deployment stages (YAML) handle deploying those artifacts across environments with environment-specific variables, approvals, and gates.",
        difficulty: "Medium",
        topic: "Azure DevOps"
    },
    {
        id: "pf-303",
        question: "What is the purpose of Azure DevOps 'environment approval gates'?",
        options: [
            "They require code reviewers to approve before building",
            "They are automated checks (like API calls, security scans, or external system validations) that must pass before a deployment can proceed to an environment",
            "They limit the number of deployments per environment per day",
            "They require the project admin to approve every pipeline run"
        ],
        answer: 1,
        explanation: "Deployment gates are automated evaluations that run before or after a deployment to an environment. They can call external APIs, check security scan results, query monitoring systems, or evaluate business conditions to automatically approve or reject a deployment.",
        difficulty: "Hard",
        topic: "Azure DevOps"
    },
    {
        id: "pf-304",
        question: "In Azure DevOps YAML pipelines, what does 'strategy: canary' in a deployment job configure?",
        options: [
            "It deploys to a canary environment that mirrors production exactly",
            "It incrementally rolls out changes by deploying to increasing percentages of infrastructure and running health checks between increments",
            "It creates a canary branch in the repository for testing",
            "It deploys the previous version alongside the new version permanently"
        ],
        answer: 1,
        explanation: "The canary strategy in Azure DevOps deploys changes incrementally (e.g., 10%, then 25%, then 50%) with health checks and route traffic progressively. If health checks fail at any increment, the deployment automatically rolls back.",
        difficulty: "Hard",
        topic: "Azure DevOps"
    },
    {
        id: "pf-305",
        question: "What does the Dockerfile instruction 'COPY --chown=1000:1000 src/ /app/' accomplish that 'COPY src/ /app/' does not?",
        options: [
            "It compresses the files during copy",
            "It sets the ownership of the copied files to user ID 1000 and group ID 1000, regardless of the host's file ownership",
            "It changes the permissions of the source files on the host",
            "It copies files only if they are owned by UID 1000 on the host"
        ],
        answer: 1,
        explanation: "The --chown flag changes the ownership of the copied files inside the container to the specified user and group IDs. This is useful for ensuring the application files are owned by the correct non-root user in the container.",
        difficulty: "Medium",
        topic: "Docker Advanced"
    },
    {
        id: "pf-306",
        question: "What is the difference between CMD and ENTRYPOINT when both are specified in a Dockerfile?",
        options: [
            "ENTRYPOINT is ignored when CMD is present",
            "CMD provides default arguments to the ENTRYPOINT executable; if the user provides arguments at docker run, they replace CMD but not ENTRYPOINT",
            "Both are concatenated and executed as a single command",
            "CMD runs before ENTRYPOINT as a setup step"
        ],
        answer: 1,
        explanation: "When both are specified, ENTRYPOINT defines the executable and CMD provides default arguments. Running 'docker run <image> arg1' replaces CMD's defaults with arg1 but keeps ENTRYPOINT. This makes the container behave like an executable with overridable defaults.",
        difficulty: "Medium",
        topic: "Docker Advanced"
    },
    {
        id: "pf-307",
        question: "What is the effect of the Dockerfile instruction 'HEALTHCHECK --interval=30s --retries=3 CMD curl -f http://localhost/ || exit 1'?",
        options: [
            "It runs curl once during build to verify the application starts",
            "The Docker daemon periodically checks container health every 30 seconds, marking it unhealthy if curl fails 3 consecutive times",
            "It configures the application's internal health monitoring system",
            "It sends health check results to the Docker registry"
        ],
        answer: 1,
        explanation: "The HEALTHCHECK instruction tells Docker to run the specified command every 30 seconds. If the command fails (non-zero exit), Docker increments a failure counter. After 3 consecutive failures, the container's health status changes to 'unhealthy'.",
        difficulty: "Medium",
        topic: "Docker Advanced"
    },
    {
        id: "pf-308",
        question: "In Docker, what does the 'oci-compat' runtime specification relate to?",
        options: [
            "A Docker plugin system for cloud provider compatibility",
            "The Open Container Initiative runtime specification that ensures containers can run across different container runtimes (runc, containerd, Kata) that implement the OCI standard",
            "A compatibility layer for running Windows containers on Linux",
            "A Docker feature for running legacy application containers"
        ],
        answer: 1,
        explanation: "The OCI (Open Container Initiative) defines standards for container image formats and runtimes. Docker's containerd and runc implement these standards, ensuring that containers built with Docker can run on any OCI-compliant runtime.",
        difficulty: "Hard",
        topic: "Docker Advanced"
    },
    {
        id: "pf-309",
        question: "What is the purpose of the .dockerignore file compared to .gitignore?",
        options: [
            "They serve the same purpose and can be used interchangeably",
            ".dockerignore excludes files from the Docker build context sent to the daemon, reducing build time and preventing sensitive files from being included in images",
            ".dockerignore excludes files from the running container",
            ".dockerignore is automatically generated from .gitignore"
        ],
        answer: 1,
        explanation: "While .gitignore prevents files from being tracked by Git, .dockerignore prevents files from being included in the Docker build context. This reduces context size (faster builds) and prevents secrets, .git directories, or node_modules from reaching the image.",
        difficulty: "Easy",
        topic: "Docker Advanced"
    },
    {
        id: "pf-310",
        question: "What does 'docker build --target=builder -t myapp .' accomplish in a multi-stage Dockerfile?",
        options: [
            "It builds all stages and tags the final stage as 'myapp'",
            "It builds only up to the stage named 'builder' and tags that intermediate stage as 'myapp'",
            "It sets the build target platform to builder architecture",
            "It creates a build cache named 'builder' for future builds"
        ],
        answer: 1,
        explanation: "The --target flag stops the build at the specified named stage. This is useful when you want to run a specific stage (like a test stage) or produce an intermediate artifact without building the final production image.",
        difficulty: "Hard",
        topic: "Docker Advanced"
    },
    {
        id: "pf-311",
        question: "What is a Docker scratch image and when would you use it?",
        options: [
            "An image that contains only the Docker CLI for debugging",
            "An empty image with no filesystem layers, used as the base for statically compiled binaries to achieve minimal image size",
            "A temporary image used during docker build that is automatically deleted",
            "An image that mounts the host's root filesystem"
        ],
        answer: 1,
        explanation: "The 'scratch' image is Docker's empty image - it has no files, no libraries, no shell. It's used as a base for statically compiled Go or Rust binaries, resulting in images that are only a few MB, minimizing attack surface and image size.",
        difficulty: "Medium",
        topic: "Docker Advanced"
    },
    {
        id: "pf-312",
        question: "What does 'docker system prune -a --volumes' remove?",
        options: [
            "Only stopped containers and unused networks",
            "All stopped containers, unused images (not just dangling), unused networks, and all unused volumes",
            "All containers, images, volumes, and the Docker daemon configuration",
            "Only the build cache and dangling images"
        ],
        answer: 1,
        explanation: "The -a flag removes all unused images (not just dangling ones), --volumes removes all unused volumes, and the default behavior removes stopped containers and unused networks. This is a thorough cleanup but removes data that might be needed.",
        difficulty: "Medium",
        topic: "Docker Advanced"
    },
    {
        id: "pf-313",
        question: "In Docker, what is the significance of the 'init' process (PID 1) in a container?",
        options: [
            "It is the Docker daemon process managing the container",
            "It is the first process started by the container, responsible for reaping zombie processes and handling signals; without a proper init, orphaned processes accumulate",
            "It is a mandatory health check process required by Docker",
            "It is the process that handles network namespace setup"
        ],
        answer: 1,
        explanation: "PID 1 in Linux has special responsibilities: it must reap zombie processes (children whose parents died) and handle signals properly. Many applications don't handle these PID 1 duties, so Docker's --init flag or a dedicated init process (like tini) is recommended.",
        difficulty: "Hard",
        topic: "Docker Advanced"
    },
    {
        id: "pf-314",
        question: "What does the Docker buildkit cache mount 'RUN --mount=type=cache,target=/root/.npm npm install' achieve?",
        options: [
            "It caches the npm binary inside the image",
            "It mounts a persistent cache directory at /root/.npm that persists across Docker builds but is not included in the final image layer",
            "It downloads npm packages to the host machine's cache",
            "It creates a Docker volume named .npm for runtime use"
        ],
        answer: 1,
        explanation: "BuildKit cache mounts provide a cache directory that persists across builds without adding to the image layers. For npm install, this means downloaded packages are cached between builds, dramatically speeding up rebuilds without bloating the image.",
        difficulty: "Hard",
        topic: "Docker Advanced"
    },
    {
        id: "pf-315",
        question: "In Docker networking, what is the difference between the 'bridge' and 'host' network drivers?",
        options: [
            "Bridge is for Windows containers; host is for Linux containers",
            "Bridge creates an isolated network with its own IP range and NAT for container communication; host removes network isolation, sharing the host's network stack directly",
            "Bridge is slower than host because it uses software routing",
            "Host networking is deprecated in favor of bridge networking"
        ],
        answer: 1,
        explanation: "The bridge driver creates a virtual network with its own subnet, DNS, and NAT to the host. Containers get isolated IP addresses. The host driver shares the host's network namespace, so the container uses the host's network interfaces directly with no isolation.",
        difficulty: "Medium",
        topic: "Docker Networking"
    },
    {
        id: "pf-316",
        question: "How does Docker's embedded DNS resolve container names within a custom bridge network?",
        options: [
            "It uses the host's /etc/resolv.conf for all DNS queries",
            "It maintains an internal DNS server that maps container names to their container network IP addresses, allowing containers to reach each other by name",
            "It uses mDNS (Multicast DNS) for service discovery",
            "It modifies the host's /etc/hosts file with container entries"
        ],
        answer: 1,
        explanation: "Docker runs an embedded DNS server (127.0.0.11) inside each container on custom bridge networks. When a container queries another container's name, the embedded DNS returns the container's IP on that network. This works only on custom networks, not the default bridge.",
        difficulty: "Hard",
        topic: "Docker Networking"
    },
    {
        id: "pf-317",
        question: "What is a Docker MACVLAN network and what is its primary use case?",
        options: [
            "A network that assigns virtual MAC addresses to containers for VPN connectivity",
            "A network driver that assigns each container a real MAC address from the physical network, allowing containers to appear as physical devices on the network with their own IPs",
            "A network that filters traffic based on MAC address rules",
            "A network used exclusively for Docker Swarm overlay communication"
        ],
        answer: 1,
        explanation: "MACVLAN gives each container a unique MAC address on the physical network, making them appear as independent devices. This is useful when containers need direct access to the physical network (e.g., for DHCP, legacy protocols) without NAT translation.",
        difficulty: "Hard",
        topic: "Docker Networking"
    },
    {
        id: "pf-318",
        question: "What happens to a Docker container's overlay filesystem when you bind-mount a host directory to a container path?",
        options: [
            "The bind mount is layered on top of the overlay filesystem",
            "The bind mount completely overrides the container path at that location; the image's content at that path is inaccessible",
            "The overlay filesystem merges with the bind mount directory",
            "The bind mount is stored as a separate layer in the overlay filesystem"
        ],
        answer: 1,
        explanation: "A bind mount replaces the container's filesystem at the specified mount point entirely. The image content at that path is hidden (not deleted) and the host directory's contents are directly accessible. This is why bind mounts are fast - no copying occurs.",
        difficulty: "Medium",
        topic: "Docker Volumes"
    },
    {
        id: "pf-319",
        question: "What is the difference between a Docker named volume and a bind mount in terms of data initialization?",
        options: [
            "Both behave identically regarding data initialization",
            "If a named volume is empty when mounted to a non-empty container path, Docker copies the container path's content from the image into the volume; bind mounts do not perform this copy",
            "Bind mounts copy image data to the host; named volumes do not",
            "Neither performs any initialization; the mount point starts empty"
        ],
        answer: 1,
        explanation: "When a named volume is mounted to a container path that has content in the image and the volume is empty, Docker copies the image content into the volume on first use. Bind mounts skip this step, meaning the host directory's content takes precedence immediately.",
        difficulty: "Hard",
        topic: "Docker Volumes"
    },
    {
        id: "pf-320",
        question: "What is a Docker tmpfs mount and when should it be used?",
        options: [
            "A persistent volume stored in /tmp on the host",
            "A non-persistent mount that stores data in the container's memory (RAM) only, useful for sensitive data that should never be written to disk",
            "A temporary symlink from the container to the host's /tmp directory",
            "A mount type used for building Docker images with temporary files"
        ],
        answer: 1,
        explanation: "tmpfs mounts store data only in the container's RAM (tmpfs filesystem). They are never written to disk, making them ideal for sensitive temporary data (encryption keys, session data) that should be destroyed when the container stops.",
        difficulty: "Medium",
        topic: "Docker Volumes"
    },
    {
        id: "pf-321",
        question: "What does the Docker Security option '--security-opt=no-new-privileges:true' prevent?",
        options: [
            "It prevents the container from creating new user accounts",
            "It prevents processes in the container from gaining additional privileges through setuid/setgid bits or file capability changes",
            "It prevents the container from mounting new filesystems",
            "It prevents the container from accessing new network ports"
        ],
        answer: 1,
        explanation: "The no-new-privileges flag prevents the container's processes from gaining new Linux capabilities through setuid binaries, capability bounding set changes, or other mechanisms. This is a critical security control that limits privilege escalation paths inside containers.",
        difficulty: "Hard",
        topic: "Docker Security"
    },
    {
        id: "pf-322",
        question: "In Docker, what is the principle of least privilege applied to container capabilities?",
        options: [
            "Running all containers as the root user but limiting network access",
            "Dropping all Linux capabilities with --cap-drop=ALL and then adding back only the specific capabilities the application needs with --cap-add",
            "Using read-only filesystems for all containers",
            "Restricting the number of containers that can run simultaneously"
        ],
        answer: 1,
        explanation: "By default, Docker grants containers many Linux capabilities even when running as non-root. The least privilege approach drops all capabilities (--cap-drop=ALL) and explicitly adds only those truly needed (e.g., --cap-add=NET_BIND_SERVICE for binding to ports below 1024).",
        difficulty: "Hard",
        topic: "Docker Security"
    },
    {
        id: "pf-323",
        question: "What is Docker's rootless mode and what security benefit does it provide?",
        options: [
            "Running containers without a filesystem root directory",
            "Running the Docker daemon and containers without root privileges on the host, using user namespaces to map container root to a non-root host user",
            "Removing the root user from inside all containers",
            "A mode where containers cannot access files owned by root on the host"
        ],
        answer: 1,
        explanation: "Rootless mode runs the Docker daemon as a non-root user using user namespaces. Even if a container escapes, the attacker only has the privileges of the unprivileged host user, not root. This significantly reduces the impact of container breakout vulnerabilities.",
        difficulty: "Hard",
        topic: "Docker Security"
    },
    {
        id: "pf-324",
        question: "What does a Docker image manifest list (also called a 'fat manifest') enable?",
        options: [
            "A single image tag that points to multiple application versions simultaneously",
            "A single image tag that supports multiple CPU architectures (amd64, arm64, etc.) by referencing architecture-specific image manifests",
            "A manifest that lists all layers across all versions of an image",
            "A security manifest that lists all vulnerabilities found in the image"
        ],
        answer: 1,
        explanation: "A manifest list is a higher-level manifest that points to architecture-specific image manifests. When you 'docker pull' an image with a manifest list, Docker automatically selects the correct variant for your platform, enabling seamless multi-architecture support.",
        difficulty: "Medium",
        topic: "Docker Advanced"
    },
    {
        id: "pf-325",
        question: "In a Docker multi-stage build, what happens to the build cache from a previous stage when referenced in a later stage with 'COPY --from=builder'?",
        options: [
            "The entire previous stage's filesystem is copied into the new stage",
            "Only the specific files specified in the COPY command are extracted from the previous stage's build cache; the rest of the stage is discarded",
            "A symlink is created to the previous stage's files",
            "The previous stage is re-run to extract the files"
        ],
        answer: 1,
        explanation: "COPY --from=builder copies only the specified files from the named stage's filesystem into the current stage. The previous stage's layers are not included in the final image. This is how multi-stage builds achieve small final images while using large build environments.",
        difficulty: "Medium",
        topic: "Docker Multi-stage Builds"
    },
    {
        id: "pf-326",
        question: "What is a key advantage of using a multi-stage build over a single-stage build with manual cleanup?",
        options: [
            "Multi-stage builds are always faster than single-stage builds",
            "Multi-stage builds produce smaller images without requiring RUN rm -rf commands that still add to the image's layer history",
            "Multi-stage builds do not require a Dockerfile",
            "Multi-stage builds automatically handle security scanning"
        ],
        answer: 1,
        explanation: "In a single-stage build, even if you delete files in a later RUN command, they still exist in previous layers and contribute to image size. Multi-stage builds start fresh for the final stage, so only the explicitly copied files are included, with no hidden layer bloat.",
        difficulty: "Medium",
        topic: "Docker Multi-stage Builds"
    },
    {
        id: "pf-327",
        question: "In Docker Compose, what does the 'depends_on' directive with 'condition: service_healthy' ensure?",
        options: [
            "The dependent service starts only after the depended-on service's container is created",
            "The dependent service waits until the depended-on service passes its Docker HEALTHCHECK before starting",
            "The dependent service is restarted if the depended-on service fails",
            "The dependent service receives the depended-on service's health status as an environment variable"
        ],
        answer: 1,
        explanation: "With 'condition: service_healthy', Compose waits for the depended-on service to reach a 'healthy' status (as determined by its HEALTHCHECK) before starting the dependent service. This is more reliable than just waiting for the container to start.",
        difficulty: "Medium",
        topic: "Docker Compose"
    },
    {
        id: "pf-328",
        question: "What is the purpose of the 'deploy.resources.limits' section in a Docker Compose service definition?",
        options: [
            "It limits the number of replicas for the service in Docker Swarm mode",
            "It defines CPU and memory resource constraints (e.g., cpus: '0.5', memory: 512M) that the container cannot exceed",
            "It limits the number of concurrent connections to the service",
            "It sets the maximum number of environment variables the service can have"
        ],
        answer: 1,
        explanation: "The deploy.resources.limits section defines hard limits on container resources. 'cpus: 0.5' limits to 50% of a CPU core, and 'memory: 512M' limits to 512MB of RAM. If a container exceeds these, it will be throttled (CPU) or killed (memory, OOM).",
        difficulty: "Medium",
        topic: "Docker Compose"
    },
    {
        id: "pf-329",
        question: "In Docker Compose, what does 'restart: unless-stopped' differ from 'restart: always'?",
        options: [
            "They are identical",
            "unless-stopped restarts the container unless it was explicitly stopped with 'docker compose stop'; always restarts it even if manually stopped (e.g., after daemon restart)",
            "unless-stopped only restarts on crash, not on daemon restart",
            "always restarts with a delay; unless-stopped restarts immediately"
        ],
        answer: 1,
        explanation: "With 'restart: always', if you stop a container with 'docker compose stop' and then restart the Docker daemon, the container will be started again. With 'unless-stopped', the container remembers it was manually stopped and won't auto-start after daemon restart.",
        difficulty: "Hard",
        topic: "Docker Compose"
    },
    {
        id: "pf-330",
        question: "What is a container best practice regarding the order of instructions in a Dockerfile for build cache efficiency?",
        options: [
            "Order instructions alphabetically for readability",
            "Place frequently changing instructions (like COPY source code) at the end and rarely changing instructions (like apt-get install) at the beginning",
            "Place all COPY instructions before all RUN instructions",
            "Order instructions by the size of files they affect, largest first"
        ],
        answer: 1,
        explanation: "Docker caches each layer sequentially. If an early layer changes, all subsequent layers are rebuilt. By placing rarely changing steps (base packages, dependencies) first and frequently changing steps (application code) last, you maximize cache hits and minimize rebuild time.",
        difficulty: "Easy",
        topic: "Container Best Practices"
    },
    {
        id: "pf-331",
        question: "Why is it a container best practice to combine multiple RUN commands into a single RUN with '&&' instead of separate RUN instructions?",
        options: [
            "It makes the Dockerfile shorter and easier to read",
            "Each RUN creates a new layer; combining them reduces the number of layers, decreasing image size and avoiding intermediate layer overhead",
            "Docker cannot cache separate RUN commands",
            "Separate RUN commands run in different shells and cannot share environment variables"
        ],
        answer: 1,
        explanation: "Each RUN instruction creates a new filesystem layer. Combining commands with && and cleaning up in the same layer (e.g., 'apt-get install && rm -rf /var/lib/apt/lists/*') prevents the intermediate package manager cache from being permanently stored in a separate layer.",
        difficulty: "Medium",
        topic: "Container Best Practices"
    },
    {
        id: "pf-332",
        question: "What is the recommended approach for handling secrets in Docker containers without using Docker Secrets or Kubernetes Secrets?",
        options: [
            "Encode secrets as base64 in environment variables",
            "Pass secrets at runtime via environment variables or tmpfs mounts, never bake them into the image, and use a secret management tool (Vault, AWS Secrets Manager) for distribution",
            "Store secrets in a config file within the image and set file permissions to 600",
            "Hardcode secrets in the application code and rely on image access controls"
        ],
        answer: 1,
        explanation: "Secrets should never be in the image (they persist in layers even if deleted). Best practice is to inject secrets at runtime via environment variables (acceptable for dev) or tmpfs mounts (better, not written to disk), ideally fetched from a dedicated secret management system.",
        difficulty: "Hard",
        topic: "Container Best Practices"
    },
    {
        id: "pf-333",
        question: "In Kubernetes, what is the fundamental difference between a Pod and a Container?",
        options: [
            "A Pod is a larger container with more resources allocated",
            "A Pod is the smallest deployable unit that can contain one or more containers sharing the same network namespace, storage, and lifecycle",
            "A Pod runs on a node; a container runs inside a Pod; they are the same thing at different abstraction levels",
            "Containers are deprecated in favor of Pods in recent Kubernetes versions"
        ],
        answer: 1,
        explanation: "A Pod is Kubernetes' atomic scheduling unit. It encapsulates one or more containers that share the same network IP, port space, and can share storage volumes. Containers within a Pod can communicate via localhost and are always co-located on the same node.",
        difficulty: "Easy",
        topic: "Pods"
    },
    {
        id: "pf-334",
        question: "What is the purpose of an init container in a Kubernetes Pod?",
        options: [
            "It initializes the Kubernetes API server connection for the Pod",
            "It runs to completion before any main containers start, used for setup tasks like waiting for a service, cloning a repo, or initializing configuration files",
            "It provides health checking for the main containers",
            "It starts first and continues running alongside main containers as a sidecar"
        ],
        answer: 1,
        explanation: "Init containers run sequentially to completion before main containers start. They are ideal for setup tasks: waiting for dependencies (databases, APIs), generating config files, registering the Pod with a service discovery system, or migrating databases.",
        difficulty: "Medium",
        topic: "Pods"
    },
    {
        id: "pf-335",
        question: "How does Kubernetes handle a Pod when its node becomes unreachable (NotReady) due to a network partition?",
        options: [
            "The Pod is immediately deleted and rescheduled",
            "After a configurable grace period (default 40 seconds for pod-eviction-timeout), the Pod is evicted from the unreachable node and rescheduled, but only if it is managed by a controller (Deployment, StatefulSet, etc.)",
            "The Pod continues running on the unreachable node and automatically reconnects when the network is restored",
            "Kubernetes creates a mirror Pod on a healthy node while waiting for the original to recover"
        ],
        answer: 1,
        explanation: "When a node becomes unreachable, the controller manager waits for the pod-eviction-timeout (default 40s) before evicting Pods. Eviction only happens for Pods managed by controllers, which then create replacement Pods on healthy nodes. Static Pods are not evicted.",
        difficulty: "Hard",
        topic: "Pods"
    },
    {
        id: "pf-336",
        question: "What is the difference between a Pod's 'restartPolicy: OnFailure' and 'restartPolicy: Always'?",
        options: [
            "OnFailure restarts only on non-zero exit codes; Always restarts regardless of exit code (including successful completion)",
            "OnFailure restarts a fixed number of times; Always restarts indefinitely",
            "OnFailure is for single-container Pods; Always is for multi-container Pods",
            "There is no difference in Kubernetes v1.25+"
        ],
        answer: 0,
        explanation: "With OnFailure, the container is only restarted if it exits with a non-zero status (failure). With Always, the container is restarted even if it exits successfully (exit code 0), which is why Always is the default for Deployments (to keep Pods running continuously).",
        difficulty: "Medium",
        topic: "Pods"
    },
    {
        id: "pf-337",
        question: "In Kubernetes, what happens to a ReplicaSet if you manually scale it while a Deployment manages it?",
        options: [
            "The ReplicaSet scale change persists permanently",
            "The Deployment controller will reconcile the ReplicaSet back to the Deployment's desired replica count, overwriting the manual change",
            "The ReplicaSet is deleted and recreated by the Deployment",
            "The Deployment enters a degraded state and stops managing the ReplicaSet"
        ],
        answer: 1,
        explanation: "The Deployment controller continuously reconciles the desired state. If you manually scale a ReplicaSet that's managed by a Deployment, the Deployment controller detects the drift and rescales the ReplicaSet back to match the Deployment's spec within the next reconciliation loop.",
        difficulty: "Medium",
        topic: "ReplicaSets"
    },
    {
        id: "pf-338",
        question: "During a Kubernetes Deployment rolling update, what does the 'maxSurge' parameter control?",
        options: [
            "The maximum number of requests per second the new Pods can receive",
            "The maximum number of Pods that can be created above the desired replica count during the update",
            "The maximum time (in seconds) allowed for the update to complete",
            "The maximum number of old Pods that can be terminated simultaneously"
        ],
        answer: 1,
        explanation: "maxSurge defines the maximum number of extra Pods that can exist above the desired count during a rolling update. For example, with replicas: 10 and maxSurge: 3, Kubernetes can create up to 13 Pods total during the update, then scale down the old ones.",
        difficulty: "Medium",
        topic: "Deployments"
    },
    {
        id: "pf-339",
        question: "What triggers a Kubernetes Deployment to create a new ReplicaSet during a rolling update?",
        options: [
            "Any change to the Deployment's metadata",
            "A change in the Pod template spec (.spec.template), since the ReplicaSet's hash is computed from the template",
            "A change in the Deployment's replica count",
            "A change in the Deployment's strategy configuration"
        ],
        answer: 1,
        explanation: "Kubernetes computes a hash of the Pod template spec and appends it to the ReplicaSet name. Only changes to .spec.template trigger a new ReplicaSet. Changes to replicas, strategy, or selector do not cause a new rollout because they don't affect the Pods themselves.",
        difficulty: "Hard",
        topic: "Deployments"
    },
    {
        id: "pf-340",
        question: "What is the effect of setting 'revisionHistoryLimit: 0' on a Kubernetes Deployment?",
        options: [
            "The Deployment cannot be rolled back under any circumstances",
            "No old ReplicaSets are retained after a successful rollout, meaning rollback is impossible but storage is saved",
            "The Deployment keeps only the current revision and deletes all previous Pods immediately",
            "The Deployment's revision history is stored externally instead of in etcd"
        ],
        answer: 1,
        explanation: "revisionHistoryLimit controls how many old ReplicaSets are retained. Setting it to 0 means all old ReplicaSets are deleted immediately after a successful rollout. This saves etcd storage but makes 'kubectl rollout undo' impossible.",
        difficulty: "Hard",
        topic: "Deployments"
    },
    {
        id: "pf-341",
        question: "In a Kubernetes Deployment with 'progressDeadlineSeconds: 600', what happens if a rollout doesn't complete within 600 seconds?",
        options: [
            "The Deployment is automatically rolled back to the previous version",
            "The Deployment is marked as 'Progressing' with a timeout warning but continues",
            "The Deployment status is marked as 'ProgressDeadlineExceeded' and the rollout is not marked as successful, triggering any configured alerts",
            "All new Pods are deleted and the old ReplicaSet is restored automatically"
        ],
        answer: 2,
        explanation: "When the progress deadline is exceeded, the Deployment's condition changes to ProgressDeadlineExceeded with status False. The rollout continues in the background but is marked as failed from a status perspective. Automatic rollback only happens if 'rollbackTo' is explicitly configured.",
        difficulty: "Hard",
        topic: "Deployments"
    },
    {
        id: "pf-342",
        question: "What is a Kubernetes Deployment's 'paused' state used for?",
        options: [
            "To stop all Pods in the Deployment temporarily",
            "To pause a rolling update, allowing you to make multiple template changes before resuming so only one rollout occurs",
            "To prevent the Deployment from being deleted",
            "To pause traffic to the Deployment's Pods"
        ],
        answer: 1,
        explanation: "Pausing a Deployment freezes the rollout process. You can then make multiple changes to the Pod template. When you resume, all changes are applied in a single rollout. Without pausing, each template change would trigger a separate rolling update.",
        difficulty: "Medium",
        topic: "Deployments"
    },
    {
        id: "pf-343",
        question: "What is the primary use case for a Kubernetes DaemonSet?",
        options: [
            "Running a single instance of a Pod per namespace",
            "Ensuring a copy of a Pod runs on every node (or selected nodes) in the cluster, such as log collectors, monitoring agents, or network plugins",
            "Running a batch job once on any available node",
            "Maintaining a fixed number of Pods across the cluster like a ReplicaSet"
        ],
        answer: 1,
        explanation: "DaemonSets ensure that all (or specific) nodes run a copy of a Pod. As nodes are added to the cluster, new Pods are automatically added. As nodes are removed, those Pods are garbage collected. Common uses include Fluentd, Prometheus Node Exporter, and Calico.",
        difficulty: "Easy",
        topic: "DaemonSets"
    },
    {
        id: "pf-344",
        question: "How does a DaemonSet handle node taints when scheduling Pods?",
        options: [
            "DaemonSet Pods ignore all taints by default",
            "DaemonSet Pods respect taints unless the DaemonSet has .spec.template.spec.tolerations configured to tolerate specific taints",
            "DaemonSet Pods are scheduled on tainted nodes only if no untainted nodes are available",
            "DaemonSets cannot run on nodes with any taints"
        ],
        answer: 1,
        explanation: "DaemonSet Pods follow the same scheduling rules as other Pods regarding taints. If a node has taints (like master nodes with node-role.kubernetes.io/control-plane), the DaemonSet's Pod template must include tolerations for those taints to be scheduled there.",
        difficulty: "Medium",
        topic: "DaemonSets"
    },
    {
        id: "pf-345",
        question: "What is the key difference between a StatefulSet and a Deployment regarding Pod identity?",
        options: [
            "StatefulSet Pods have no identity; Deployment Pods do",
            "StatefulSet Pods have sticky identities with predictable names, stable network identities, and stable persistent storage; Deployment Pods have ephemeral identities",
            "Deployment Pods maintain identity across restarts; StatefulSet Pods do not",
            "Both provide identical identity guarantees"
        ],
        answer: 1,
        explanation: "StatefulSet Pods get ordered, predictable names (web-0, web-1, web-2) and stable DNS identities. Each Pod gets a persistent volume that follows it across rescheduling. Deployment Pods get random names and lose their identity on replacement.",
        difficulty: "Medium",
        topic: "StatefulSets"
    },
    {
        id: "pf-346",
        question: "In a StatefulSet with 3 replicas (web-0, web-1, web-2), what is the correct ordering for a scale-down to 1 replica?",
        options: [
            "All Pods are terminated simultaneously",
            "Pods are terminated in reverse ordinal order: web-2, then web-1; web-0 remains",
            "Pods are terminated in creation order: web-0, then web-1; web-2 remains",
            "A random Pod is selected for termination"
        ],
        answer: 1,
        explanation: "StatefulSets scale down in reverse ordinal order (highest to lowest). This ensures that the highest-numbered Pod (which may depend on lower-numbered Pods in distributed systems like databases) is removed first, maintaining data integrity.",
        difficulty: "Medium",
        topic: "StatefulSets"
    },
    {
        id: "pf-347",
        question: "What is the 'volumeClaimTemplates' field in a StatefulSet spec used for?",
        options: [
            "It defines PVC templates that are pre-created before any Pods start",
            "It defines PersistentVolumeClaim templates that are automatically provisioned for each Pod in the StatefulSet, with each Pod getting its own unique PVC",
            "It shares a single PVC across all Pods in the StatefulSet",
            "It templates the volume configuration for the hostPath volumes"
        ],
        answer: 1,
        explanation: "volumeClaimTemplates automatically create a PVC for each Pod when the Pod is created. The PVC name follows the pattern <pvc-name>-<pod-name> (e.g., data-web-0). When the Pod is rescheduled, it reattaches to the same PVC, maintaining data persistence.",
        difficulty: "Hard",
        topic: "StatefulSets"
    },
    {
        id: "pf-348",
        question: "What is the '.spec.serviceName' field in a StatefulSet and why is it required?",
        options: [
            "It specifies the external load balancer for the StatefulSet",
            "It references a Headless Service that provides the network identity for the StatefulSet's Pods, enabling stable DNS records for each Pod",
            "It names the internal Kubernetes service used for Pod-to-Pod communication",
            "It is optional and only used for ServiceAccount configuration"
        ],
        answer: 1,
        explanation: "The serviceName must reference a headless Service (clusterIP: None). This Service creates DNS records for each Pod (web-0.web-service.default.svc.cluster.local), giving each Pod a stable network identity that persists across rescheduling.",
        difficulty: "Hard",
        topic: "StatefulSets"
    },
    {
        id: "pf-349",
        question: "What is the difference between a Kubernetes ClusterIP Service and a Headless Service?",
        options: [
            "A ClusterIP Service has no IP address; a Headless Service has one",
            "A ClusterIP Service provides a single virtual IP that load-balances to Pods; a Headless Service (clusterIP: None) returns individual Pod IPs via DNS, allowing direct Pod addressing",
            "A Headless Service only works with StatefulSets; ClusterIP works with all controllers",
            "There is no functional difference"
        ],
        answer: 1,
        explanation: "A ClusterIP Service gets a virtual IP and proxies requests to backend Pods with load balancing. A Headless Service (clusterIP: None) doesn't assign a virtual IP; instead, DNS queries return the individual IPs of all backend Pods, enabling direct Pod communication.",
        difficulty: "Medium",
        topic: "Services"
    },
    {
        id: "pf-350",
        question: "In a Kubernetes Service with 'externalTrafficPolicy: Local', what changes compared to the default 'Cluster' policy?",
        options: [
            "The Service only accepts traffic from within the same node",
            "The Service routes traffic only to Pods on the node that received the request, preserving the client's source IP but potentially causing uneven load distribution",
            "The Service uses local DNS resolution instead of cluster DNS",
            "The Service is only accessible from the node's localhost"
        ],
        answer: 1,
        explanation: "With 'Local' policy, traffic received on a node is only forwarded to Pods on that same node. This preserves the client's real source IP (useful for audit/logging) but can cause imbalanced distribution if Pods aren't evenly spread across nodes.",
        difficulty: "Hard",
        topic: "Services"
    },
    {
        id: "pf-351",
        question: "What is the purpose of a Kubernetes Service's 'sessionAffinity: ClientIP' setting?",
        options: [
            "It binds a client's session to a specific node",
            "It ensures requests from the same client IP are consistently routed to the same Pod for the duration of the session (controlled by sessionAffinityConfig.clientIP.timeoutSeconds)",
            "It creates a persistent TCP connection between the client and the Service",
            "It limits the number of concurrent sessions per client IP"
        ],
        answer: 1,
        explanation: "ClientIP session affinity uses a simple hash of the client IP to consistently route to the same backend Pod. This is useful for stateful applications that don't support shared sessions. The timeout (default 10800s/3h) determines how long the affinity lasts.",
        difficulty: "Medium",
        topic: "Services"
    },
    {
        id: "pf-352",
        question: "When should you use a Kubernetes Service of type 'NodePort' versus 'LoadBalancer'?",
        options: [
            "NodePort is for internal services; LoadBalancer is for external services",
            "NodePort exposes the service on a static port (30000-32767) on each node's IP; LoadBalancer provisions a cloud provider's external load balancer that routes to the NodePort",
            "NodePort is deprecated; LoadBalancer should always be used instead",
            "They are identical; LoadBalancer is just an alias for NodePort"
        ],
        answer: 1,
        explanation: "NodePort opens a specific port on every node. LoadBalancer builds on NodePort by additionally provisioning a cloud load balancer (AWS ELB, GCP LB) that distributes traffic to the nodes' NodePorts. LoadBalancer is the standard way to expose services externally in cloud environments.",
        difficulty: "Medium",
        topic: "Services"
    },
    {
        id: "pf-353",
        question: "In Kubernetes Ingress, what is the role of the 'pathType: Prefix' vs 'pathType: Exact'?",
        options: [
            "Prefix matches the URL prefix and routes to the backend; Exact requires the full URL path to match precisely",
            "Prefix is faster than Exact in routing decisions",
            "Prefix only matches the first segment of the path; Exact matches the entire domain",
            "There is no difference in Ingress routing behavior"
        ],
        answer: 0,
        explanation: "With pathType: Prefix and path: '/api', requests to '/api', '/api/users', and '/api/v1/items' all match. With pathType: Exact and path: '/api', only exactly '/api' matches. Prefix is the most common type for API routing.",
        difficulty: "Medium",
        topic: "Ingress"
    },
    {
        id: "pf-354",
        question: "What is required for a Kubernetes Ingress resource to function in a cluster?",
        options: [
            "Only the Ingress resource definition is needed; Kubernetes handles routing natively",
            "An Ingress Controller (like nginx-ingress, Traefik, or AWS ALB Ingress Controller) must be deployed to actually implement the routing rules defined in Ingress resources",
            "A LoadBalancer Service pointing to the API server",
            "The kube-proxy component must be configured in IPVS mode"
        ],
        answer: 1,
        explanation: "Ingress resources are just configuration objects. An Ingress Controller is a separate deployment (usually a reverse proxy like NGINX) that watches for Ingress resources and configures itself accordingly. Without a controller, Ingress resources have no effect.",
        difficulty: "Easy",
        topic: "Ingress"
    },
    {
        id: "pf-355",
        question: "How do Kubernetes Namespaces provide resource isolation?",
        options: [
            "Namespaces provide complete network isolation between namespaces by default",
            "Namespaces provide logical isolation for resources (names must be unique within a namespace), and when combined with ResourceQuotas and NetworkPolicies, can enforce resource and network isolation",
            "Namespaces create separate etcd instances for each namespace",
            "Namespaces run Pods in separate container runtimes"
        ],
        answer: 1,
        explanation: "By default, namespaces only provide name scoping. To achieve actual isolation, you need ResourceQuotas (limit CPU/memory per namespace), LimitRanges (set default/limits per Pod), NetworkPolicies (control network traffic between namespaces), and RBAC (restrict access per namespace).",
        difficulty: "Medium",
        topic: "Namespaces"
    },
    {
        id: "pf-356",
        question: "Which Kubernetes resources are NOT scoped to a namespace (cluster-scoped)?",
        options: [
            "Deployments, Services, ConfigMaps",
            "Nodes, PersistentVolumes, Namespace, ClusterRole, StorageClass",
            "Pods, ReplicaSets, StatefulSets",
            "Secrets, ServiceAccounts, Roles"
        ],
        answer: 1,
        explanation: "Nodes, PersistentVolumes, Namespaces, ClusterRoles, ClusterRoleBindings, StorageClasses, and CustomResourceDefinitions are cluster-scoped - they exist outside any namespace. Most workload resources (Pods, Deployments, Services) are namespace-scoped.",
        difficulty: "Hard",
        topic: "Namespaces"
    },
    {
        id: "pf-357",
        question: "What is the key difference between a ConfigMap and a Secret in terms of how they are stored in etcd?",
        options: [
            "They are stored identically; the only difference is naming convention",
            "ConfigMaps are stored as plain text in etcd; Secrets are stored in base64-encoded form (not encrypted by default, but can be encrypted with EncryptionConfiguration)",
            "Secrets are encrypted at rest by default without additional configuration",
            "ConfigMaps are stored in a separate etcd instance from Secrets"
        ],
        answer: 1,
        explanation: "By default, Secrets are only base64-encoded in etcd, not encrypted. Anyone with etcd access can decode them. To encrypt Secrets at rest, you must configure the EncryptionConfiguration API server flag. ConfigMaps are always stored as plain text.",
        difficulty: "Hard",
        topic: "Secrets"
    },
    {
        id: "pf-358",
        question: "How can you consume a ConfigMap as environment variables in a Pod without mounting it as a volume?",
        options: [
            "It is not possible; ConfigMaps must be mounted as volumes",
            "Use envFrom with a ConfigMapRef to inject all key-value pairs as environment variables, or use individual env entries with valueFrom.configMapKeyRef",
            "Reference the ConfigMap directly in the container's command using ${configmap.key} syntax",
            "Set the ConfigMap name in the Pod's metadata labels"
        ],
        answer: 1,
        explanation: "envFrom.configMapRef injects all keys from a ConfigMap as environment variables. For selective injection, use env with valueFrom.configMapKeyRef specifying the key name. Both methods avoid volume mounting while making ConfigMap data available as env vars.",
        difficulty: "Medium",
        topic: "ConfigMaps"
    },
    {
        id: "pf-359",
        question: "What happens when you update a ConfigMap that is consumed by a running Pod via a volume mount?",
        options: [
            "The Pod is automatically restarted to pick up the new values",
            "The updated values are reflected in the mounted files with some delay (kubelet sync period, default 1 minute), but environment variables are NOT updated",
            "The changes are never reflected until the Pod is deleted and recreated",
            "The ConfigMap update is blocked until all consuming Pods are restarted"
        ],
        answer: 1,
        explanation: "When a ConfigMap is updated, kubelet periodically syncs (default every 60 seconds) and updates the mounted files. However, environment variables derived from ConfigMaps are set at Pod start time and do NOT update automatically - the Pod must be restarted.",
        difficulty: "Hard",
        topic: "ConfigMaps"
    },
    {
        id: "pf-360",
        question: "In Kubernetes, what is an 'immutable' ConfigMap or Secret and what advantage does it provide?",
        options: [
            "It cannot be deleted from the cluster",
            "Once created, its data cannot be changed; this allows the kubelet to skip periodic watches for changes, reducing API server load in large clusters",
            "It is replicated across multiple namespaces automatically",
            "It is stored in a read-only etcd bucket"
        ],
        answer: 1,
        explanation: "Setting immutable: true on a ConfigMap or Secret tells Kubernetes that its data will never change. The kubelet can then skip watching for updates and skip periodic syncs for volume-mounted configs, significantly reducing API server load in clusters with many ConfigMaps.",
        difficulty: "Hard",
        topic: "ConfigMaps"
    },
    {
        id: "pf-361",
        question: "What is the 'imagePullSecrets' field in a Pod spec used for?",
        options: [
            "It stores the Docker credentials used to push images to a registry",
            "It references Secrets containing registry authentication credentials, allowing the kubelet to pull images from private container registries",
            "It configures the image pull policy for the Pod",
            "It specifies which Secrets should be injected as environment variables when pulling images"
        ],
        answer: 1,
        explanation: "imagePullSecrets references Secrets of type kubernetes.io/dockerconfigjson that contain Docker registry credentials. The kubelet uses these credentials to authenticate with private registries (Docker Hub, ECR, GCR, etc.) when pulling the Pod's container images.",
        difficulty: "Medium",
        topic: "Secrets"
    },
    {
        id: "pf-362",
        question: "How does a Kubernetes Secret of type 'kubernetes.io/tls' differ from an opaque Secret?",
        options: [
            "It automatically encrypts data using TLS",
            "It has required keys 'tls.crt' and 'tls.key' and is commonly used with Ingress resources for TLS termination",
            "It can only be used with Services of type LoadBalancer",
            "It stores the TLS certificate in the Pod's filesystem automatically"
        ],
        answer: 1,
        explanation: "A TLS-typed Secret requires two keys: tls.crt (the certificate chain) and tls.key (the private key). This type is semantically recognized by Ingress controllers and other components that need TLS certificates, making it clear what the Secret contains.",
        difficulty: "Medium",
        topic: "Secrets"
    },
    {
        id: "pf-363",
        question: "What is the difference between a PersistentVolume (PV) and a PersistentVolumeClaim (PVC) in Kubernetes?",
        options: [
            "PVs are requested by users; PVCs are provisioned by administrators",
            "A PV is a cluster-level resource representing actual storage (NFS, EBS, etc.); a PVC is a user's request for storage that binds to a matching PV",
            "PVs are ephemeral; PVCs are persistent",
            "PVs and PVCs are the same resource with different names"
        ],
        answer: 1,
        explanation: "PVs are provisioned by administrators (or dynamically by StorageClasses) and represent real storage backends. PVCs are namespace-scoped requests for storage with specific requirements (size, access mode). A PVC binds to a PV that satisfies its requirements.",
        difficulty: "Medium",
        topic: "Persistent Volumes"
    },
    {
        id: "pf-364",
        question: "What does the 'Reclaim Policy' on a PersistentVolume determine?",
        options: [
            "How often the PV's storage is garbage collected",
            "What happens to the underlying storage when the PVC is deleted: Retain (keep data), Delete (remove storage), or Recycle (deprecated - scrub data for reuse)",
            "Which users can reclaim access to a released PV",
            "How much of the PV's space can be reclaimed by the filesystem"
        ],
        answer: 1,
        explanation: "The reclaim policy controls post-deletion behavior. 'Retain' keeps the PV and data after PVC deletion (manual cleanup needed). 'Delete' automatically deletes the underlying cloud resource (EBS volume, etc.). 'Recycle' ran rm -rf but is deprecated.",
        difficulty: "Medium",
        topic: "Persistent Volumes"
    },
    {
        id: "pf-365",
        question: "What is a StorageClass in Kubernetes and how does it enable dynamic provisioning?",
        options: [
            "A StorageClass defines the filesystem type for all PVs in the cluster",
            "A StorageClass defines the type of storage (e.g., SSD, HDD) and a provisioner plugin; when a PVC requests this StorageClass, the provisioner automatically creates a matching PV",
            "A StorageClass is a backup schedule for PersistentVolumes",
            "A StorageClass limits the total storage available in a namespace"
        ],
        answer: 1,
        explanation: "StorageClasses abstract storage types with parameters (disk type, IOPS, replication). When a PVC specifies a StorageClass, the associated provisioner (like aws-ebs, gce-pd, or a CSI driver) automatically creates a PV, eliminating manual PV provisioning.",
        difficulty: "Hard",
        topic: "Persistent Volumes"
    },
    {
        id: "pf-366",
        question: "In Kubernetes Horizontal Pod Autoscaler (HPA), what metric types can trigger scaling?",
        options: [
            "Only CPU utilization",
            "CPU utilization, memory utilization, and custom metrics (from Prometheus, etc.) or external metrics (like queue depth from CloudWatch)",
            "Only metrics exposed by the kubelet",
            "Only container restart count metrics"
        ],
        answer: 1,
        explanation: "HPA supports resource metrics (CPU, memory from Metrics Server), custom metrics (application-specific from Prometheus Adapter or similar), and external metrics (cloud provider metrics like SQS queue depth). This enables sophisticated auto-scaling strategies.",
        difficulty: "Hard",
        topic: "Autoscaling"
    },
    {
        id: "pf-367",
        question: "How does the HPA algorithm calculate the desired replica count from a target CPU utilization of 80% when current utilization is 160% with 4 replicas?",
        options: [
            "It adds 4 more replicas (doubling) for a total of 8",
            "desiredReplicas = ceil(currentReplicas * (currentMetricValue / targetMetricValue)) = ceil(4 * (160/80)) = ceil(8) = 8 replicas",
            "It sets replicas to the maximum allowed in the HPA spec",
            "It gradually adds one replica at a time until utilization drops below 80%"
        ],
        answer: 1,
        explanation: "HPA uses the formula: desiredReplicas = ceil(currentReplicas * (currentValue / targetValue)). With 4 replicas at 160% utilization targeting 80%, the calculation is ceil(4 * 2.0) = 8 replicas. The stabilization window prevents flapping by not scaling too frequently.",
        difficulty: "Hard",
        topic: "Autoscaling"
    },
    {
        id: "pf-368",
        question: "What is the Cluster Autoscaler in Kubernetes and how does it differ from HPA?",
        options: [
            "Cluster Autoscaler scales Pods; HPA scales nodes",
            "Cluster Autoscaler adds or removes nodes from the cluster when Pods are in Pending state (due to insufficient resources) or when nodes are underutilized; HPA scales the number of Pod replicas based on metrics",
            "Cluster Autoscaler is a cloud-provider-specific replacement for HPA",
            "They are the same component with different names"
        ],
        answer: 1,
        explanation: "HPA scales Pods horizontally (more/fewer replicas). Cluster Autoscaler scales the infrastructure (more/fewer nodes). They work together: HPA may create more Pods, and if no node has enough capacity, Cluster Autoscaler provisions new nodes to schedule them.",
        difficulty: "Medium",
        topic: "Autoscaling"
    },
    {
        id: "pf-369",
        question: "What is a Helm Chart in Kubernetes?",
        options: [
            "A visualization tool for monitoring Kubernetes resources",
            "A packaged collection of templated Kubernetes manifest files along with values configuration, enabling parameterized and repeatable application deployments",
            "A type of PersistentVolume for database storage",
            "A Kubernetes admission controller that validates resource definitions"
        ],
        answer: 1,
        explanation: "Helm Charts package Kubernetes YAML manifests with Go templates and default values. Users override values via values.yaml or --set flags. This enables deploying complex applications (like Prometheus with multiple Deployments, Services, ConfigMaps) with a single command.",
        difficulty: "Easy",
        topic: "Helm"
    },
    {
        id: "pf-370",
        question: "In Helm, what is the difference between 'helm install' and 'helm upgrade --install'?",
        options: [
            "They are identical",
            "helm install creates a new release and fails if it already exists; helm upgrade --install creates the release if it doesn't exist or upgrades it if it does (idempotent)",
            "helm install only works with local charts; helm upgrade --install works with remote repositories",
            "helm install uses default values; helm upgrade --install always prompts for values"
        ],
        answer: 1,
        explanation: "helm upgrade --install (or helm install with --atomic) is idempotent - it installs if the release doesn't exist and upgrades if it does. This is preferred in CI/CD pipelines because the same command works for both first-time deployments and subsequent updates.",
        difficulty: "Medium",
        topic: "Helm"
    },
    {
        id: "pf-371",
        question: "In AWS, what is the difference between an EC2 instance's 'Security Group' and 'Network ACL'?",
        options: [
            "They are the same thing with different names",
            "Security Groups are stateful, instance-level firewalls that evaluate all rules; Network ACLs are stateless, subnet-level firewalls that evaluate rules in order (numbered) with separate inbound and outbound rules",
            "Security Groups operate at the VPC level; Network ACLs operate at the instance level",
            "Network ACLs are stateful; Security Groups are stateless"
        ],
        answer: 1,
        explanation: "Security Groups are stateful (return traffic is automatically allowed) and attached to instances. NACLs are stateless (return traffic must be explicitly allowed), attached to subnets, have numbered rules evaluated in order, and have separate inbound/outbound rule sets.",
        difficulty: "Medium",
        topic: "AWS EC2"
    },
    {
        id: "pf-372",
        question: "What is an EC2 Placement Group of type 'Spread' used for?",
        options: [
            "Spreading network traffic across multiple AZs for load balancing",
            "Placing instances on distinct underlying hardware to minimize correlated failures, critical for applications needing maximum isolation",
            "Spreading a single instance's CPU across multiple physical cores",
            "Distributing AMI copies across regions"
        ],
        answer: 1,
        explanation: "Spread placement groups place each instance on different physical hardware within an AZ (or across AZs). This maximizes isolation - if one host fails, only one instance is affected. Ideal for distributed systems like Hadoop, Cassandra, or Elasticsearch nodes.",
        difficulty: "Hard",
        topic: "AWS EC2"
    },
    {
        id: "pf-373",
        question: "In AWS S3, what is the difference between 'Standard' and 'Intelligent-Tiering' storage classes?",
        options: [
            "Standard is for small objects; Intelligent-Tiering is for large objects",
            "Standard stores all objects at standard pricing; Intelligent-Tiering automatically moves objects between access tiers (frequent, infrequent, archive) based on access patterns to optimize costs",
            "Intelligent-Tiering is deprecated in favor of Standard",
            "Standard provides better durability than Intelligent-Tiering"
        ],
        answer: 1,
        explanation: "Intelligent-Tiering monitors access patterns and automatically moves objects between tiers (with 30-90 day minimum stay in infrequent/archive tiers). There's a small monthly monitoring fee per object but no retrieval fees for frequent/infrequent tiers, optimizing cost with no manual management.",
        difficulty: "Medium",
        topic: "AWS S3"
    },
    {
        id: "pf-374",
        question: "What is S3 Object Lock and what does the 'Governance' mode allow that 'Compliance' mode does not?",
        options: [
            "Governance mode prevents all deletions; Compliance mode allows some",
            "Governance mode allows privileged users (with s3:BypassGovernanceRetention) to delete or modify locked objects; Compliance mode prevents any user, including the root account, from deleting objects until the retention period expires",
            "Governance mode locks objects for a fixed period; Compliance mode allows custom retention periods",
            "Both modes are identical; the difference is only in pricing"
        ],
        answer: 1,
        explanation: "Compliance mode provides absolute immutability - no one can delete or overwrite the object until retention expires, meeting regulatory requirements (SEC 17a-4, HIPAA). Governance mode allows authorized users with bypass permissions to manage locked objects for operational flexibility.",
        difficulty: "Hard",
        topic: "AWS S3"
    },
    {
        id: "pf-375",
        question: "In AWS IAM, what does the 'Principal' element in a resource-based policy specify?",
        options: [
            "The AWS resource the policy applies to",
            "The entity (user, role, account, or service) that is allowed or denied access by the policy statement",
            "The IAM group that created the policy",
            "The maximum duration for which the policy is valid"
        ],
        answer: 1,
        explanation: "The Principal element identifies who the policy statement applies to. In bucket policies, it specifies which AWS accounts, users, roles, or services can perform the actions on the resource. In identity-based policies, the principal is implicit (the attached identity).",
        difficulty: "Medium",
        topic: "IAM"
    },
    {
        id: "pf-376",
        question: "What is an IAM Role's 'Trust Policy' (assume role policy) and how does it differ from the role's 'Permission Policy'?",
        options: [
            "They are the same policy evaluated differently",
            "The Trust Policy defines WHO can assume the role (principal, conditions); the Permission Policy defines WHAT the assumed role can do (actions, resources)",
            "The Trust Policy defines what the role can do; the Permission Policy defines who can trust it",
            "The Trust Policy is required; the Permission Policy is optional"
        ],
        answer: 1,
        explanation: "The trust policy (attached to the role as AssumeRolePolicyDocument) controls which principals can call sts:AssumeRole and under what conditions. The permission policy (attached via IAM policies) controls what actions the role can perform once assumed. They serve distinct purposes.",
        difficulty: "Medium",
        topic: "IAM"
    },
    {
        id: "pf-377",
        question: "How does AWS CloudFront's 'signed URLs' differ from 'signed cookies' for content restriction?",
        options: [
            "Signed URLs are more secure than signed cookies",
            "Signed URLs restrict access to a single specific URL with an expiration time; signed cookies grant access to multiple files (e.g., all files in a path) based on cookie values set in the client",
            "Signed cookies work only with HTTPS; signed URLs work with both HTTP and HTTPS",
            "Signed URLs are for video; signed cookies are for images"
        ],
        answer: 1,
        explanation: "Signed URLs embed access restrictions (expiration, IP, date) in the URL itself, protecting a single file. Signed cookies set browser cookies that grant access to multiple files matching path patterns, making them better for restricting access to entire directories or media playlists.",
        difficulty: "Hard",
        topic: "CloudFront"
    },
    {
        id: "pf-378",
        question: "What is the purpose of CloudFront's 'Origin Access Control' (OAC) compared to 'Origin Access Identity' (OAI)?",
        options: [
            "OAC and OAI serve the same purpose; OAC is just a newer name",
            "OAC supports all AWS services (S3, ALB, MediaStore) and uses AWS SigV4 for authentication; OAI only supports S3 and uses CloudFront-specific mechanisms. OAI is considered a legacy feature.",
            "OAC is for HTTP origins; OAI is for S3 origins only",
            "OAC provides faster cache invalidation than OAI"
        ],
        answer: 1,
        explanation: "OAC is the modern replacement for OAI, supporting S3 and non-S3 origins (ALB, MediaStore) with stronger security (SigV4 signing). OAI only works with S3 origins and uses a less robust authentication mechanism. AWS recommends OAC for new implementations.",
        difficulty: "Hard",
        topic: "CloudFront"
    },
    {
        id: "pf-379",
        question: "In AWS Lambda, what triggers a 'Cold Start' and what factors affect its duration?",
        options: [
            "A cold start occurs when the Lambda function has an error; duration depends on error type",
            "A cold start occurs when Lambda must provision a new execution environment (container); duration depends on runtime (Java/Node.js), package size, initialization code, and VPC configuration",
            "A cold start occurs when the function exceeds its memory limit; duration depends on memory size",
            "A cold start occurs only on the first invocation ever; subsequent invocations never cold start"
        ],
        answer: 1,
        explanation: "Cold starts happen when Lambda needs to create a new execution environment: download code, set up the runtime, run initialization code (outside handler), and connect to VPC resources (elastic network interface creation adds significant latency). Larger packages and JVM-based runtimes have longer cold starts.",
        difficulty: "Hard",
        topic: "Lambda"
    },
    {
        id: "pf-380",
        question: "What is AWS Lambda Provisioned Concurrency and when should it be used?",
        options: [
            "It increases the maximum number of concurrent Lambda executions",
            "It pre-initializes a specified number of execution environments, eliminating cold starts for those concurrent executions, used for latency-sensitive applications",
            "It provisions dedicated EC2 instances for Lambda functions",
            "It reserves concurrency to ensure other functions don't consume all available capacity"
        ],
        answer: 1,
        explanation: "Provisioned Concurrency keeps a specified number of environments initialized and ready. When a request arrives, it's handled immediately without cold start latency. This is critical for real-time APIs, interactive applications, and any function where latency directly impacts user experience.",
        difficulty: "Medium",
        topic: "Lambda"
    },
    {
        id: "pf-381",
        question: "In AWS RDS, what is the difference between Multi-AZ and Read Replicas?",
        options: [
            "They are the same feature with different names",
            "Multi-AZ provides automatic failover for high availability with a synchronous standby in another AZ; Read Replicas provide read scaling with asynchronous replication that can be in the same or different AZ/region",
            "Multi-AZ is for read scaling; Read Replicas are for high availability",
            "Multi-AZ uses asynchronous replication; Read Replicas use synchronous replication"
        ],
        answer: 1,
        explanation: "Multi-AZ creates a synchronous standby replica for automatic failover (typically 30-120 seconds) - it's not for read access. Read Replicas use asynchronous replication, serve read traffic to reduce load on the primary, and can be promoted to standalone DBs if needed.",
        difficulty: "Medium",
        topic: "RDS"
    },
    {
        id: "pf-382",
        question: "What is an AWS RDS Proxy and what problem does it solve?",
        options: [
            "It caches query results to reduce database load",
            "It manages database connections by pooling and multiplexing them, reducing connection overhead and preventing connection exhaustion with serverless applications like Lambda",
            "It acts as a read replica for RDS instances",
            "It encrypts database connections at the network level"
        ],
        answer: 1,
        explanation: "RDS Proxy maintains a pool of database connections and multiplexes application connections over them. This is crucial for Lambda and other serverless workloads that open many short-lived connections, which would otherwise overwhelm the database with connection overhead.",
        difficulty: "Hard",
        topic: "RDS"
    },
    {
        id: "pf-383",
        question: "In AWS VPC, what is the purpose of a 'NAT Gateway' compared to an 'Internet Gateway'?",
        options: [
            "A NAT Gateway provides internet access to the VPC; an Internet Gateway provides private connectivity between VPCs",
            "An Internet Gateway allows resources in public subnets to communicate with the internet; a NAT Gateway allows resources in private subnets to reach the internet for outbound connections while preventing inbound connections",
            "A NAT Gateway is free; an Internet Gateway has an hourly cost",
            "They are functionally identical"
        ],
        answer: 1,
        explanation: "Internet Gateways provide bidirectional internet access for public subnets (resources with public IPs). NAT Gateways provide outbound-only internet access for private subnets - instances without public IPs can initiate connections to the internet but cannot receive inbound connections.",
        difficulty: "Medium",
        topic: "VPC"
    },
    {
        id: "pf-384",
        question: "What is VPC 'Flow Logs' and what type of information do they capture?",
        options: [
            "They log all API calls made to the VPC",
            "They capture information about IP traffic going to and from network interfaces in the VPC: source/destination IP, ports, protocol, packets, bytes, action (accept/reject), and can be sent to CloudWatch Logs or S3",
            "They log DNS queries within the VPC",
            "They capture the full packet payload for security analysis"
        ],
        answer: 1,
        explanation: "VPC Flow Logs record metadata about network traffic (not packet contents) at the VPC, subnet, or ENI level. Each log entry includes source/destination IPs, ports, protocol, packets, bytes, start time, and whether the traffic was accepted or rejected by security groups/NACLs.",
        difficulty: "Medium",
        topic: "VPC"
    },
    {
        id: "pf-385",
        question: "How does an Application Load Balancer (ALB) differ from a Network Load Balancer (NLB) in AWS?",
        options: [
            "ALB operates at Layer 4; NLB operates at Layer 7",
            "ALB operates at Layer 7 (HTTP/HTTPS) with content-based routing, path-based routing, and TLS termination; NLB operates at Layer 4 (TCP/UDP) with ultra-low latency and ability to handle millions of connections per second",
            "ALB is for internal use only; NLB is for external use only",
            "NLB supports path-based routing; ALB does not"
        ],
        answer: 1,
        explanation: "ALB provides HTTP/HTTPS-aware features: path-based routing, host-based routing, header-based routing, TLS termination, and WebSocket support. NLB provides raw TCP/UDP forwarding with minimal latency, preserving source IP, and handling extreme throughput (millions of RPS).",
        difficulty: "Medium",
        topic: "Elastic Load Balancer"
    },
    {
        id: "pf-386",
        question: "What is the purpose of AWS Auto Scaling 'target tracking' scaling policy compared to 'step scaling'?",
        options: [
            "Target tracking requires manual metric configuration; step scaling is automatic",
            "Target tracking automatically adjusts capacity to keep a specified metric (like CPU at 40%) at the target value; step scaling adjusts based on predefined alarm thresholds with specific scaling adjustments per breach",
            "Step scaling is more modern and recommended over target tracking",
            "Target tracking only works with NLB; step scaling works with ALB"
        ],
        answer: 1,
        explanation: "Target tracking is simpler and more adaptive - you set a target (e.g., 40% CPU) and ASG automatically adjusts. Step scaling gives fine-grained control with specific scaling actions at different alarm thresholds (e.g., +2 instances at 60% CPU, +5 instances at 80% CPU).",
        difficulty: "Hard",
        topic: "Auto Scaling"
    },
    {
        id: "pf-387",
        question: "In Azure, what is the difference between an 'App Service Plan' and an 'App Service'?",
        options: [
            "They are the same resource",
            "An App Service Plan defines the compute resources (VM size, number of instances, pricing tier); an App Service (web app) runs on a plan and consumes its resources",
            "An App Service Plan is for web apps; an App Service is for APIs",
            "An App Service Plan is free; an App Service has a per-request cost"
        ],
        answer: 1,
        explanation: "The App Service Plan is the underlying compute infrastructure (like a server farm) with a specific tier and size. Multiple App Services (web apps, API apps, mobile backends) can run on the same plan, sharing its resources and cost.",
        difficulty: "Easy",
        topic: "Azure Basics"
    },
    {
        id: "pf-388",
        question: "What is Google Cloud Platform's 'Cloud Run' service and how does it differ from 'Cloud Functions'?",
        options: [
            "Cloud Run is for Python; Cloud Functions is for JavaScript",
            "Cloud Run runs containerized applications (any language) with HTTP/gRPC endpoints and configurable concurrency; Cloud Functions is event-driven, single-function execution triggered by events (HTTP, Pub/Sub, Storage)",
            "Cloud Functions can run any container; Cloud Run requires specific runtimes",
            "They are identical services with different branding"
        ],
        answer: 1,
        explanation: "Cloud Run runs any stateless container with request-driven scaling, supporting long-running processes and concurrent requests. Cloud Functions executes individual functions in response to events with shorter timeouts, simpler deployment, and is more suitable for event-processing pipelines.",
        difficulty: "Medium",
        topic: "Google Cloud Platform"
    },
    {
        id: "pf-389",
        question: "In GCP, what is the role of 'Cloud Armor'?",
        options: [
            "It provides VM disk encryption at rest",
            "It is a DDoS protection and web application firewall (WAF) service that protects load-balanced applications by filtering malicious traffic based on IP allowlists/denylists, geo-blocking, and OWASP rule sets",
            "It manages IAM policies for GCP resources",
            "It provides container image scanning for vulnerabilities"
        ],
        answer: 1,
        explanation: "Cloud Armor integrates with GCP's External HTTP(S) Load Balancer to provide DDoS protection and WAF capabilities. It can block traffic by IP, geography, or pattern (SQL injection, XSS), and supports preconfigured WAF rules based on OWASP Top 10 vulnerabilities.",
        difficulty: "Medium",
        topic: "Google Cloud Platform"
    },
    {
        id: "pf-390",
        question: "What is the 'event-driven' architecture pattern in serverless computing?",
        options: [
            "An architecture where servers are started and stopped based on a schedule",
            "An architecture where system components communicate by producing and consuming events, with serverless functions triggered by events (queue messages, file uploads, HTTP requests) rather than running continuously",
            "An architecture that uses only event sourcing for data storage",
            "An architecture where all user interactions are logged as events"
        ],
        answer: 1,
        explanation: "Event-driven architecture decouples producers and consumers through events. In serverless, this maps naturally: S3 puts trigger Lambda, SQS messages trigger functions, SNS topics fan out to multiple subscribers. Functions run only when events occur, optimizing cost and scalability.",
        difficulty: "Medium",
        topic: "Serverless"
    },
    {
        id: "pf-391",
        question: "What is a 'cold start' mitigation strategy for serverless functions beyond provisioned concurrency?",
        options: [
            "Increasing the function's memory allocation (which also increases CPU) to speed up initialization",
            "Keeping functions warm by scheduling periodic invocations (ping) at intervals shorter than the idle timeout, though this adds cost",
            "Using only Node.js runtime which has no cold starts",
            "Setting a lower timeout value to force faster initialization"
        ],
        answer: 1,
        explanation: "Scheduled pinging (e.g., EventBridge rule invoking the function every 5 minutes) keeps the execution environment warm. This trades cost (paying for the ping invocations) for reduced latency. Combined with keeping the deployment package small and minimizing init code, it reduces cold start impact.",
        difficulty: "Hard",
        topic: "Serverless"
    },
    {
        id: "pf-392",
        question: "In cloud security, what is the 'principle of least privilege' applied to IAM roles in a serverless architecture?",
        options: [
            "Give each Lambda function full admin access to simplify debugging",
            "Grant each function only the specific permissions needed for its task (e.g., read from one S3 bucket, write to one DynamoDB table) rather than broad permissions",
            "Use the same IAM role for all functions to reduce management overhead",
            "Grant permissions based on the developer's role, not the function's needs"
        ],
        answer: 1,
        explanation: "In serverless, each function should have a tightly scoped IAM role. A function processing S3 events only needs s3:GetObject for that specific bucket. If compromised, the blast radius is limited to that function's permissions. Broad permissions amplify the impact of any security breach.",
        difficulty: "Medium",
        topic: "Cloud Security"
    },
    {
        id: "pf-393",
        question: "What is a 'shared responsibility model' in cloud security?",
        options: [
            "The cloud provider is responsible for all security concerns",
            "The customer is responsible for all security concerns",
            "The cloud provider secures the infrastructure (physical servers, networking, hypervisor); the customer secures what they deploy (data encryption, access management, application security, network configuration)",
            "Security responsibilities alternate between provider and customer monthly"
        ],
        answer: 2,
        explanation: "In the shared responsibility model, AWS/Azure/GCP secure the cloud itself (data centers, hardware, managed services' underlying infrastructure). Customers are responsible for security IN the cloud: their data, access controls, network configuration, patching of guest OS, and application security.",
        difficulty: "Easy",
        topic: "Cloud Security"
    },
    {
        id: "pf-394",
        question: "What is cloud architecture's 'well-architected framework' pillars in AWS?",
        options: [
            "Cost, Performance, Security, Reliability",
            "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
            "Scalability, Availability, Durability, Performance",
            "Design, Develop, Deploy, Monitor"
        ],
        answer: 1,
        explanation: "The AWS Well-Architected Framework has six pillars: Operational Excellence (run & monitor), Security (protect data), Reliability (recover from failures), Performance Efficiency (use resources efficiently), Cost Optimization (eliminate waste), and Sustainability (minimize environmental impact).",
        difficulty: "Easy",
        topic: "Cloud Architecture"
    },
    {
        id: "pf-395",
        question: "In cloud architecture, what is the 'strangler fig pattern' for migrating a monolith to the cloud?",
        options: [
            "Replacing the entire monolith with cloud services in one migration",
            "Gradually replacing parts of the monolith with cloud-native services by routing specific functionality to new implementations while keeping the rest unchanged, until the monolith is fully replaced",
            "Wrapping the monolith in a container and deploying it to the cloud as-is",
            "Duplicating the monolith in the cloud and switching traffic at the DNS level"
        ],
        answer: 1,
        explanation: "The strangler fig pattern (named after trees that gradually envelop others) incrementally replaces monolith components. An API gateway routes requests: new features go to cloud-native services, existing features still hit the monolith. Over time, the monolith is 'strangled' out of existence.",
        difficulty: "Medium",
        topic: "Cloud Architecture"
    },
    {
        id: "pf-396",
        question: "What is the output of the following JavaScript code?\n\nfunction createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}\nconst counter = createCounter();\ncounter.increment();\ncounter.increment();\nconsole.log(counter.getCount());",
        options: [
            "0",
            "1",
            "2",
            "undefined"
        ],
        answer: 2,
        explanation: "The createCounter function creates a closure over the 'count' variable. Each call to increment() increments the closed-over count variable. After two increments, count is 2, which getCount() returns. The closure maintains the state across calls.",
        difficulty: "Easy",
        topic: "JavaScript Closures"
    },
    {
        id: "pf-397",
        question: "What is a common memory leak scenario involving closures in JavaScript?",
        options: [
            "Creating too many functions in a single scope",
            "A closure retaining a reference to a large object (like a DOM node or large array) that is no longer needed, preventing garbage collection",
            "Using arrow functions instead of regular functions",
            "Returning a function from another function"
        ],
        answer: 1,
        explanation: "If a closure captures a reference to a large object (DOM element, cache, etc.) and the closure itself is stored long-term (event listener, timer, global variable), the large object cannot be garbage collected even if it's no longer needed in the application logic.",
        difficulty: "Hard",
        topic: "JavaScript Closures"
    },
    {
        id: "pf-398",
        question: "What will be logged and why?\n\nconsole.log(a);\nvar a = 10;\nconsole.log(a);\nlet b = 20;\nconsole.log(b);",
        options: [
            "undefined, 10, 20 - var is hoisted with undefined, let is not hoisted",
            "undefined, 10, ReferenceError - var is hoisted and initialized to undefined; let is hoisted but not initialized, causing a TDZ error",
            "ReferenceError, 10, 20 - var is not hoisted",
            "undefined, 10, undefined - both var and let are hoisted with undefined"
        ],
        answer: 1,
        explanation: "var declarations are hoisted and initialized to undefined. let declarations are hoisted but placed in the Temporal Dead Zone (TDZ) until the declaration is reached. Accessing a let/const variable before its declaration results in a ReferenceError.",
        difficulty: "Medium",
        topic: "Hoisting"
    },
    {
        id: "pf-399",
        question: "What is the output of this code?\n\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}",
        options: [
            "0, 1, 2",
            "3, 3, 3",
            "undefined, undefined, undefined",
            "0, 0, 0"
        ],
        answer: 1,
        explanation: "var is function-scoped, so there's only one 'i' variable shared by all three setTimeout callbacks. By the time the callbacks execute (after the loop completes), 'i' has been incremented to 3. All three callbacks log 3. Using 'let' instead would create a new binding per iteration, logging 0, 1, 2.",
        difficulty: "Medium",
        topic: "Hoisting"
    },
    {
        id: "pf-400",
        question: "In the JavaScript event loop, what is the difference between the microtask queue and the macrotask queue?",
        options: [
            "Microtasks handle DOM events; macrotasks handle network requests",
            "Microtasks (Promise callbacks, queueMicrotask, MutationObserver) run after each macrotask and before the next macrotask; macrotasks (setTimeout, setInterval, I/O) run one per event loop iteration",
            "Macrotasks have higher priority than microtasks",
            "There is no difference; they are the same queue"
        ],
        answer: 1,
        explanation: "After a macrotask completes, the event loop drains the entire microtask queue before processing the next macrotask. This means Promise .then() callbacks always execute before the next setTimeout, even if the setTimeout was registered first. This ordering is crucial for predictable async behavior.",
        difficulty: "Hard",
        topic: "Event Loop"
    },
    {
        id: "pf-401",
        question: "What is the output order of this code?\n\nconsole.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');",
        options: [
            "1, 2, 3, 4",
            "1, 4, 3, 2",
            "1, 4, 2, 3",
            "1, 3, 4, 2"
        ],
        answer: 1,
        explanation: "Synchronous code runs first: '1', '4'. Then the microtask queue is drained: Promise callback logs '3'. Then the macrotask queue: setTimeout callback logs '2'. Order: 1, 4, 3, 2. This demonstrates microtask priority over macrotasks.",
        difficulty: "Medium",
        topic: "Event Loop"
    },
    {
        id: "pf-402",
        question: "What does 'requestAnimationFrame' have in common with the event loop, and how does it differ from setTimeout?",
        options: [
            "requestAnimationFrame runs in the microtask queue like Promises",
            "requestAnimationFrame callbacks run before the browser's next repaint (typically 60fps), synchronized with the display refresh rate; setTimeout has a minimum 4ms delay and is not synchronized with rendering",
            "requestAnimationFrame and setTimeout are identical in timing behavior",
            "requestAnimationFrame runs after all macrotasks and microtasks"
        ],
        answer: 1,
        explanation: "requestAnimationFrame schedules callbacks before the next paint, typically at 60fps (16.67ms intervals), making it ideal for animations. setTimeout has a minimum ~4ms delay (clamped by browsers), can drift, and is not synced with the display refresh cycle, causing janky animations.",
        difficulty: "Hard",
        topic: "Event Loop"
    },
    {
        id: "pf-403",
        question: "In JavaScript's prototype chain, what does 'Object.create(null)' create and how does it differ from '{}'?",
        options: [
            "Both create identical objects",
            "Object.create(null) creates an object with no prototype (prototype is null), so it has no inherited properties like toString or hasOwnProperty; {} creates an object inheriting from Object.prototype",
            "Object.create(null) creates a frozen object",
            "Object.create(null) is syntactic sugar for new Object(null)"
        ],
        answer: 1,
        explanation: "Object.create(null) creates a 'pure' dictionary object with no prototype chain. This means no inherited properties (toString, valueOf, hasOwnProperty) and no risk of prototype pollution. It's useful for safe key-value maps where property names might conflict with Object.prototype methods.",
        difficulty: "Medium",
        topic: "Prototype"
    },
    {
        id: "pf-404",
        question: "What is the output of: console.log(typeof null, null instanceof Object);",
        options: [
            "\"null\" true",
            "\"object\" false",
            "\"null\" false",
            "\"object\" true"
        ],
        answer: 1,
        explanation: "typeof null returns 'object' due to a historical bug in JavaScript's initial implementation where the type tag for null was the same as for objects. However, null instanceof Object is false because null is a primitive, not an instance of the Object constructor.",
        difficulty: "Medium",
        topic: "Prototype"
    },
    {
        id: "pf-405",
        question: "How does prototype lookup work when accessing 'obj.toString()' if 'obj' is a plain object?",
        options: [
            "JavaScript searches for toString in obj, then in Object.getPrototypeOf(Object.getPrototypeOf(obj)), and so on until null is reached",
            "JavaScript checks obj's own properties, then Object.prototype (found there), then null (end of chain) - toString is found on Object.prototype",
            "JavaScript directly calls the built-in toString without prototype lookup",
            "JavaScript searches the global scope for a toString function"
        ],
        answer: 1,
        explanation: "The prototype chain for {} is: obj -> Object.prototype -> null. When accessing obj.toString, JavaScript first checks obj's own properties (not found), then Object.prototype (found - it's a method on Object.prototype). The lookup stops at the first match, and 'this' is bound to obj.",
        difficulty: "Hard",
        topic: "Prototype"
    },
    {
        id: "pf-406",
        question: "What is the difference between Promise.all and Promise.allSettled?",
        options: [
            "They are identical",
            "Promise.all rejects immediately if any promise rejects; Promise.allSettled waits for all promises to settle (resolve or reject) and returns an array of {status, value/reason} objects",
            "Promise.allSettled rejects immediately on first rejection",
            "Promise.all returns results in random order; Promise.allSettled preserves order"
        ],
        answer: 1,
        explanation: "Promise.all fails fast - one rejection rejects the entire set. Promise.allSettled never rejects; it always resolves with an array showing each promise's outcome. Use allSettled when you need results from all promises regardless of individual failures.",
        difficulty: "Medium",
        topic: "Promises"
    },
    {
        id: "pf-407",
        question: "What is the output of this code?\n\nasync function foo() {\n  return 42;\n}\nfoo().then(val => console.log(val));\nconsole.log('after');",
        options: [
            "42, after",
            "after, 42",
            "42",
            "after"
        ],
        answer: 1,
        explanation: "async functions always return a Promise. The return value 42 is wrapped in Promise.resolve(42). The .then callback is a microtask scheduled for after the current synchronous code completes. So 'after' logs first (synchronous), then 42 (microtask).",
        difficulty: "Medium",
        topic: "Async Await"
    },
    {
        id: "pf-408",
        question: "What happens when an error is thrown inside an async function without a try-catch?",
        options: [
            "The error is silently swallowed",
            "The async function returns a rejected Promise with the thrown error as the rejection reason",
            "The error crashes the Node.js process immediately",
            "The error is thrown synchronously at the call site"
        ],
        answer: 1,
        explanation: "Async functions automatically catch synchronous errors and wrap them in a rejected Promise. Throwing inside an async function (or an unhandled await rejection) results in a rejected Promise, not a synchronous exception. Without a .catch() or try-catch, this becomes an unhandled promise rejection.",
        difficulty: "Hard",
        topic: "Async Await"
    },
    {
        id: "pf-409",
        question: "What is the behavior of 'await' when used with a non-Promise value?",
        options: [
            "It throws a TypeError",
            "It wraps the value in Promise.resolve(value) and then unwraps it, effectively passing the value through unchanged",
            "It returns undefined",
            "It blocks the thread until the value is available"
        ],
        answer: 1,
        explanation: "await converts its operand to a Promise using Promise.resolve(). For a non-Promise value like 42, Promise.resolve(42) resolves immediately, so await 42 simply returns 42. This allows writing 'await' uniformly without checking if the value is a Promise first.",
        difficulty: "Medium",
        topic: "Async Await"
    },
    {
        id: "pf-410",
        question: "What is a potential issue with using 'for...of' with async/await compared to Promise.all for concurrent operations?",
        options: [
            "for...of is faster than Promise.all",
            "for...of with await processes items sequentially (one at a time), while Promise.all processes them concurrently, making for...of significantly slower for independent async operations",
            "for...of cannot be used with async functions",
            "Promise.all processes items sequentially while for...of processes them concurrently"
        ],
        answer: 1,
        explanation: "Using 'for (const item of items) { await process(item); }' processes each item one at a time. Promise.all(items.map(process)) starts all operations concurrently. For I/O-bound operations (API calls, DB queries), the concurrent approach can be dramatically faster.",
        difficulty: "Hard",
        topic: "Async Programming"
    },
    {
        id: "pf-411",
        question: "In ES Modules, what is the difference between 'import { foo }' and 'import * as mod'?",
        options: [
            "They are identical in behavior",
            "import { foo } imports a specific named binding (live binding); import * as mod imports all named exports as a module namespace object with all exports as properties",
            "import { foo } creates a copy of foo; import * as mod creates a reference",
            "import * as mod only imports default exports"
        ],
        answer: 1,
        explanation: "Named imports ({ foo }) create live bindings to the exported variable. The namespace import (* as mod) creates a module namespace object where each export is a property. Both provide live bindings - if the exporting module changes the value, the importing module sees the update.",
        difficulty: "Medium",
        topic: "Modules"
    },
    {
        id: "pf-412",
        question: "What is a key characteristic of ES Module imports that differs from CommonJS require()?",
        options: [
            "ES modules can only import JSON files",
            "ES module imports are hoisted and executed in a single pass (static analysis possible); CommonJS require() is evaluated at runtime and can be conditional",
            "CommonJS imports are hoisted; ES module imports are not",
            "ES modules cannot import from CommonJS modules"
        ],
        answer: 1,
        explanation: "ES module imports are statically analyzed at parse time, enabling tree-shaking, cyclic dependency handling, and ahead-of-time compilation. require() is a function call evaluated at runtime, meaning imports can be conditional (if (x) require('y')), which prevents static analysis.",
        difficulty: "Hard",
        topic: "Modules"
    },
    {
        id: "pf-413",
        question: "What is the purpose of the 'sideEffects: false' field in package.json?",
        options: [
            "It prevents the package from having any side effects at runtime",
            "It tells bundlers (Webpack, Rollup) that the package's modules have no side effects when imported, enabling tree-shaking to safely remove unused exports even if they are imported",
            "It disables all console.log statements in the package",
            "It makes the package compatible with CommonJS only"
        ],
        answer: 1,
        explanation: "Without sideEffects: false, bundlers must assume that any imported module could have side effects (modifying globals, registering handlers) and cannot remove unused imports. With this flag, bundlers can safely tree-shake unused exports, significantly reducing bundle size.",
        difficulty: "Hard",
        topic: "Modules"
    },
    {
        id: "pf-414",
        question: "In Webpack, what is the difference between 'code splitting' and 'tree shaking'?",
        options: [
            "They are the same optimization technique",
            "Code splitting breaks the bundle into smaller chunks loaded on demand; tree shaking removes unused exports from modules that are imported",
            "Tree shaking splits code; code splitting removes dead code",
            "Code splitting is for CSS; tree shaking is for JavaScript"
        ],
        answer: 1,
        explanation: "Code splitting creates multiple bundles (e.g., dynamic import(), vendor chunk) for on-demand loading, reducing initial load time. Tree shaking analyzes the import/export graph and removes exported functions that are never imported, reducing total bundle size. They are complementary optimizations.",
        difficulty: "Medium",
        topic: "Webpack Basics"
    },
    {
        id: "pf-415",
        question: "What is Webpack's 'module federation' feature designed for?",
        options: [
            "Federating module downloads across multiple CDNs",
            "Allowing separate JavaScript applications to dynamically share code (modules) at runtime, even across different builds and deployments, enabling micro-frontend architectures",
            "Federating Webpack configurations across monorepo packages",
            "Sharing node_modules between multiple Webpack processes"
        ],
        answer: 1,
        explanation: "Module Federation (Webpack 5) enables a JavaScript application to dynamically load code from another application at runtime. This is the foundation for micro-frontends: Team A's app can consume a component from Team B's independently deployed app without build-time coupling.",
        difficulty: "Hard",
        topic: "Webpack Basics"
    },
    {
        id: "pf-416",
        question: "Why is Vite significantly faster than Webpack for development server startup?",
        options: [
            "Vite uses a faster programming language than Webpack",
            "Vite serves source files as native ES modules using the browser's ES module loader, only transforming files on demand when requested; Webpack bundles all modules before serving",
            "Vite skips type checking during development",
            "Vite uses a smaller configuration file"
        ],
        answer: 1,
        explanation: "Vite leverages native ES modules in the browser, serving source files directly without bundling. When the browser requests a module, Vite transforms it on-the-fly and serves it. Webpack must build the entire dependency graph and bundle everything before the dev server can respond.",
        difficulty: "Medium",
        topic: "Vite Basics"
    },
    {
        id: "pf-417",
        question: "What is React.lazy() used for and what must accompany it?",
        options: [
            "It delays the rendering of a component; it must be used with useCallback",
            "It enables dynamic import of a component as a separate chunk; it must be used within a React.Suspense boundary with a fallback",
            "It makes a component render asynchronously; it must be used with useMemo",
            "It lazy-loads CSS for a component; it must be used with useEffect"
        ],
        answer: 1,
        explanation: "React.lazy() takes a function that returns a dynamic import (import('./Component')) and returns a lazy-loaded component. It must be wrapped in <React.Suspense fallback={<Loading />}> because the component may not be loaded yet when first rendered, triggering the suspense boundary.",
        difficulty: "Medium",
        topic: "Lazy Loading"
    },
    {
        id: "pf-418",
        question: "What is the Critical Rendering Path and how does it relate to frontend performance?",
        options: [
            "The path data takes from the server to the browser",
            "The sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on screen: DOM construction, CSSOM construction, render tree, layout, paint. Optimizing this path reduces time to first paint.",
            "The order in which JavaScript files should be loaded",
            "The network path with the lowest latency for asset delivery"
        ],
        answer: 1,
        explanation: "The Critical Rendering Path involves building the DOM from HTML, building the CSSOM from CSS, combining them into a render tree, computing layout (geometry), and painting pixels. Blocking resources (render-blocking CSS, parser-blocking JS) delay this path, increasing Time to First Paint.",
        difficulty: "Hard",
        topic: "Performance Optimization"
    },
    {
        id: "pf-419",
        question: "What is 'layout thrashing' in frontend performance and how do you mitigate it?",
        options: [
            "When the CSS layout algorithm crashes due to invalid styles",
            "When JavaScript repeatedly reads layout properties (offsetWidth, getBoundingClientRect) and writes layout-affecting properties (width, top) in a loop, forcing the browser to recalculate layout multiple times per frame",
            "When CSS Grid and Flexbox conflict causing visual glitches",
            "When the browser switches between different layout engines"
        ],
        answer: 1,
        explanation: "Reading a layout property forces the browser to synchronously calculate layout. Writing a layout property invalidates the current layout. Alternating reads and writes in a loop forces recalculation each time. Mitigation: batch reads, then batch writes, or use requestAnimationFrame.",
        difficulty: "Hard",
        topic: "Performance Optimization"
    },
    {
        id: "pf-420",
        question: "What does the 'will-change' CSS property do and what is the risk of overusing it?",
        options: [
            "It changes the element's z-index automatically",
            "It hints to the browser that an element will be animated, allowing the browser to optimize by promoting the element to its own compositor layer; overuse consumes excessive GPU memory",
            "It enables CSS transitions without specifying the transition property",
            "It changes the element's display property for better performance"
        ],
        answer: 1,
        explanation: "will-change: transform, opacity tells the browser to prepare for animations by creating a dedicated compositor layer. This avoids paint-time cost but each layer consumes GPU memory. Overusing it (e.g., on hundreds of elements) can cause more harm than good due to memory pressure.",
        difficulty: "Hard",
        topic: "Performance Optimization"
    },
    {
        id: "pf-421",
        question: "What is the difference between 'defer' and 'async' attributes on a script tag?",
        options: [
            "Both are identical and load scripts asynchronously",
            "defer downloads the script in parallel and executes it after HTML parsing is complete, preserving order; async downloads in parallel and executes as soon as available, potentially out of order",
            "async executes after parsing; defer executes during parsing",
            "defer is for CSS files; async is for JavaScript files"
        ],
        answer: 1,
        explanation: "defer scripts execute in order after DOMContentLoaded, making them safe for scripts that depend on the DOM. async scripts execute as soon as they download, regardless of order or DOM readiness, suitable for independent scripts like analytics that don't need the DOM.",
        difficulty: "Medium",
        topic: "Performance Optimization"
    },
    {
        id: "pf-422",
        question: "What is the output when this React component renders?\n\nfunction App() {\n  const [count, setCount] = useState(0);\n  console.log('render');\n  useEffect(() => {\n    console.log('effect');\n  }, []);\n  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;\n}",
        options: [
            "On first render: 'render', 'effect'. On click: 'render'",
            "On first render: 'render', 'effect'. On click: 'render', 'effect'",
            "On first render: 'effect', 'render'. On click: 'render'",
            "On first render: 'render'. On click: 'render', 'effect'"
        ],
        answer: 0,
        explanation: "On initial render, the component function runs (logs 'render'), then React commits to DOM, then runs useEffect (logs 'effect'). On click, setCount triggers a re-render (logs 'render'), but useEffect has an empty dependency array [], so it does NOT run again.",
        difficulty: "Medium",
        topic: "React Hooks"
    },
    {
        id: "pf-423",
        question: "What is a stale closure in React and when does it occur with useState?",
        options: [
            "When a closure captures an old state value because the component has re-rendered but the closure references the state from a previous render cycle",
            "When useState returns undefined",
            "When the component unmounts before state updates complete",
            "When multiple useState calls conflict with each other"
        ],
        answer: 0,
        explanation: "A stale closure occurs when a function (event handler, effect) captures state from a previous render. For example, an effect with setInterval captures 'count' from render 1, but even after count changes in render 2, the interval callback still sees render 1's count value.",
        difficulty: "Hard",
        topic: "React Hooks"
    },
    {
        id: "pf-424",
        question: "Why does React's useEffect with an empty dependency array still capture stale props in certain scenarios?",
        options: [
            "Because React does not support empty dependency arrays",
            "Because the effect closure captures props from the render in which it was created; if the effect doesn't re-run (empty deps), it holds the initial props even after re-renders with new props",
            "Because props are immutable and cannot be updated",
            "Because useEffect runs before props are passed to the component"
        ],
        answer: 1,
        explanation: "Each render creates a new closure. An effect with [] runs only once (first render), capturing first-render props. If props change in subsequent renders but the effect doesn't re-run, the effect's closure still references the original props. The fix is to include props in the dependency array.",
        difficulty: "Hard",
        topic: "React Hooks"
    },
    {
        id: "pf-425",
        question: "What is the purpose of the useCallback hook and when is it actually beneficial?",
        options: [
            "It should be used on every function to improve performance",
            "It memoizes a function reference across re-renders, beneficial when the function is passed as a prop to a child component wrapped in React.memo to prevent unnecessary child re-renders",
            "It makes function execution faster",
            "It replaces the need for the useEffect hook"
        ],
        answer: 1,
        explanation: "useCallback returns the same function reference if dependencies haven't changed. This matters when passing callbacks to memoized children (React.memo) - a new function reference would cause the child to re-render even if its other props haven't changed. Overusing it adds overhead without benefit.",
        difficulty: "Hard",
        topic: "React Hooks"
    },
    {
        id: "pf-426",
        question: "What problem does the useRef hook solve that useState cannot?",
        options: [
            "Storing values that persist across re-renders without causing re-renders when updated, and holding mutable values accessible in any closure without stale closure issues",
            "Storing values that trigger re-renders more efficiently than useState",
            "Storing only DOM element references",
            "Storing values that are shared across components without Context"
        ],
        answer: 0,
        explanation: "useRef holds a mutable .current value that persists across renders but doesn't trigger re-renders when changed. Unlike state, updating a ref is synchronous and doesn't create stale closure issues because the same object reference is maintained across renders.",
        difficulty: "Medium",
        topic: "React Hooks"
    },
    {
        id: "pf-427",
        question: "In React, what is the difference between a controlled component and an uncontrolled component?",
        options: [
            "Controlled components are class components; uncontrolled are functional components",
            "In controlled components, form data is handled by React state (value + onChange); in uncontrolled components, form data is handled by the DOM itself (using refs to access values)",
            "Controlled components can be validated; uncontrolled cannot",
            "Uncontrolled components are deprecated in React 18+"
        ],
        answer: 1,
        explanation: "Controlled components bind input value to state, making React the single source of truth. Every change goes through setState. Uncontrolled components let the DOM manage the value, and you read it via ref when needed (e.g., on submit). Controlled is preferred for validation and predictability.",
        difficulty: "Medium",
        topic: "React Fundamentals"
    },
    {
        id: "pf-428",
        question: "How does React's Virtual DOM diffing algorithm (Reconciliation) determine what changed between renders?",
        options: [
            "It performs a deep comparison of the entire virtual DOM tree",
            "It uses a heuristic O(n) algorithm: compares elements at the same position in the tree, uses keys to match list children, and assumes the tree changes at the root and moves down without crossing sibling branches",
            "It generates a hash of each component and compares hashes",
            "It uses the browser's DOM diffing API"
        ],
        answer: 1,
        explanation: "React's reconciliation uses two assumptions: elements of different types produce different trees (replace entire subtree), and keys identify which child elements are stable across renders. This enables O(n) comparison instead of O(n³) full tree diffing, trading accuracy for performance.",
        difficulty: "Hard",
        topic: "Virtual DOM"
    },
    {
        id: "pf-429",
        question: "Why is using array index as a React list key problematic when items can be reordered or deleted?",
        options: [
            "Array indices are not unique within a list",
            "When items are reordered or deleted, indices shift, causing React to incorrectly match components and potentially reuse state/DOM from the wrong item, leading to visual bugs and stale data",
            "React does not accept numbers as keys",
            "Array index keys cause memory leaks"
        ],
        answer: 1,
        explanation: "If you delete item at index 1, item at index 2 becomes index 1. React thinks the component at index 1 didn't change (same key) and reuses its state/DOM, but it's now showing different data. Stable, unique keys (like IDs) ensure correct component matching.",
        difficulty: "Medium",
        topic: "React Fundamentals"
    },
    {
        id: "pf-430",
        question: "What is React's 'batching' behavior and how does React 18's automatic batching differ from React 17?",
        options: [
            "React 17 batched all state updates; React 18 does not",
            "React 17 only batched updates inside React event handlers; React 18 batches all state updates regardless of context (event handlers, promises, timeouts, native event handlers) using createRoot",
            "React 18 batches only inside useEffect; React 17 batched everywhere",
            "There is no difference in batching between versions"
        ],
        answer: 1,
        explanation: "In React 17, only updates inside React event handlers were batched. Updates in setTimeout, promises, or native DOM handlers triggered separate re-renders. React 18's automatic batching (with createRoot) batches all updates in all contexts, reducing unnecessary re-renders.",
        difficulty: "Hard",
        topic: "React Fundamentals"
    },
    {
        id: "pf-431",
        question: "What is React StrictMode's purpose in development and why might it cause effects to run twice?",
        options: [
            "It prevents runtime errors by adding type checking",
            "It intentionally double-invokes certain lifecycle methods and effects in development to help find side effects that aren't properly cleaned up, simulating mount-unmount-remount cycles",
            "It runs effects twice in production for reliability",
            "It enforces strict TypeScript typing"
        ],
        answer: 1,
        explanation: "StrictMode in development mounts, unmounts, and remounts components to surface issues with impure rendering, missing cleanup in effects, or deprecated APIs. This is development-only behavior - effects run once in production. If your cleanup function is missing, double-invocation will reveal the bug.",
        difficulty: "Hard",
        topic: "React Fundamentals"
    },
    {
        id: "pf-432",
        question: "What is a common issue with using React Context for global state management at scale?",
        options: [
            "Context cannot store objects or arrays",
            "Any context value change causes all consumers to re-render, even if they only use a small part of the context value, leading to performance issues with large state objects",
            "Context values cannot be updated after initialization",
            "Context only works with class components"
        ],
        answer: 1,
        explanation: "React Context doesn't do granular subscription - when a context value changes, every component that calls useContext for that context re-renders, even if it only reads one field. For large state objects with frequent updates, this causes excessive re-renders. Solutions include splitting contexts or using external state libraries.",
        difficulty: "Hard",
        topic: "Context API"
    },
    {
        id: "pf-433",
        question: "How can you prevent unnecessary re-renders when using React Context with a complex state object?",
        options: [
            "Use React.memo on every consumer component",
            "Split the context into multiple smaller contexts by domain (e.g., ThemeContext, AuthContext, CartContext) so that changes to one domain don't re-render consumers of other domains",
            "Store the state in localStorage instead of Context",
            "Use shouldComponentUpdate in functional components"
        ],
        answer: 1,
        explanation: "Splitting contexts by concern means updating the cart doesn't re-render components that only consume the theme. Each context has its own provider and consumers, providing natural segmentation. This is a practical alternative to complex state libraries for medium-sized applications.",
        difficulty: "Medium",
        topic: "Context API"
    },
    {
        id: "pf-434",
        question: "In Redux (or similar state managers), what is the 'selector' pattern and why is memoized selection important?",
        options: [
            "Selectors are functions that dispatch actions; memoization prevents duplicate dispatches",
            "Selectors are functions that extract specific data from the state store; memoized selectors (like with reselect) cache results and only recompute when their input selectors change, preventing expensive recalculations on every state update",
            "Selectors are CSS selectors used in React Redux for styling",
            "Selectors are middleware that filter actions before they reach the reducer"
        ],
        answer: 1,
        explanation: "A selector like selectVisibleTodos(state) derives data from the store. Without memoization, it recalculates on every state change (even unrelated ones). With reselect, it caches the result and only recalculates when its specific inputs (filtered todos, visibility filter) actually change.",
        difficulty: "Hard",
        topic: "State Management"
    },
    {
        id: "pf-435",
        question: "What is the difference between Redux's useReducer and React's built-in useReducer?",
        options: [
            "They are the same hook",
            "React's useReducer is a built-in hook for local component state with a reducer pattern; Redux's useSelector/useDispatch connect to a global Redux store. React's useReducer manages state within a single component tree.",
            "Redux's useReducer is more performant than React's",
            "React's useReducer cannot handle complex state logic"
        ],
        answer: 1,
        explanation: "React's useReducer manages local state within a component, similar to useState but for complex state logic. Redux provides a global store accessible by any component via useSelector/useDispatch. They can coexist: useReducer for local UI state, Redux for shared application state.",
        difficulty: "Medium",
        topic: "State Management"
    },
    {
        id: "pf-436",
        question: "What is a Cross-Site Scripting (XSS) attack in the context of a React application?",
        options: [
            "An attack that steals CSS stylesheets",
            "An attack where malicious scripts are injected into web pages viewed by other users, potentially stealing cookies, session tokens, or redirecting users",
            "An attack that exploits React's virtual DOM algorithm",
            "An attack that breaks React's component lifecycle"
        ],
        answer: 1,
        explanation: "XSS attacks inject malicious JavaScript into web pages. In React, the built-in JSX escaping prevents most XSS (React auto-escapes values in JSX). However, using dangerouslySetInnerHTML, dynamically generating href attributes, or improperly handling user input can create XSS vulnerabilities.",
        difficulty: "Medium",
        topic: "Frontend Security"
    },
    {
        id: "pf-437",
        question: "How can a React application be vulnerable to XSS despite JSX's built-in escaping?",
        options: [
            "JSX escaping can be bypassed with Unicode characters",
            "Using dangerouslySetInnerHTML with unsanitized user content, constructing URLs with user input in href/src attributes (javascript: protocol), or storing user input in state that is later rendered unsafely",
            "React's escaping only works with string literals, not variables",
            "XSS is impossible in React applications"
        ],
        answer: 1,
        explanation: "dangerouslySetInnerHTML bypasses JSX escaping entirely. User-controlled URLs can contain 'javascript:' protocol handlers. Even stored XSS is possible if user input is saved to a database and later rendered with dangerouslySetInnerHTML. Always sanitize HTML (DOMPurify) and validate URLs.",
        difficulty: "Hard",
        topic: "Frontend Security"
    },
    {
        id: "pf-438",
        "question": "What is Content Security Policy (CSP) and how does it mitigate XSS attacks?",
        options: [
            "CSP encrypts all content served by the web server",
            "CSP is an HTTP header that specifies which sources (scripts, styles, images) are allowed to load, preventing execution of injected inline scripts or scripts from unapproved domains",
            "CSP is a browser extension that blocks malicious websites",
            "CSP replaces the need for input validation"
        ],
        answer: 1,
        explanation: "A CSP header like 'Content-Security-Policy: script-src 'self'' restricts script execution to the same origin only. Inline scripts (<script>alert(1)</script>) and scripts from unauthorized domains are blocked. This provides a defense-in-depth layer against XSS even if input validation fails.",
        difficulty: "Medium",
        topic: "Frontend Security"
    },
    {
        id: "pf-439",
        question: "What is a 'Subresource Integrity' (SRI) check and when is it used?",
        options: [
            "It validates the integrity of API responses",
            "It is a security feature that allows browsers to verify that fetched resources (from CDNs) have not been tampered with by checking a cryptographic hash specified in the script/link tag's integrity attribute",
            "It checks the integrity of user-uploaded files",
            "It validates React component prop types at runtime"
        ],
        answer: 1,
        explanation: "SRI adds a hash to external resource tags: <script src='https://cdn.com/lib.js' integrity='sha384-abc123'>. If the CDN is compromised and the file is modified, the hash won't match and the browser refuses to execute it. This protects against supply chain attacks via compromised CDNs.",
        difficulty: "Hard",
        topic: "Frontend Security"
    },
    {
        id: "pf-440",
        question: "In Node.js, what is the difference between 'process.nextTick' and 'setImmediate'?",
        options: [
            "They are identical in behavior",
            "process.nextTick fires at the end of the current operation before the event loop continues to the next phase; setImmediate fires in the check phase of the next event loop iteration",
            "setImmediate has higher priority than process.nextTick",
            "process.nextTick is deprecated; setImmediate replaces it"
        ],
        answer: 1,
        explanation: "process.nextTick callbacks execute before the event loop moves to the next phase, even before I/O callbacks. setImmediate callbacks execute in the check phase. nextTick can starve I/O if used recursively because it always takes priority over the next event loop phase.",
        difficulty: "Hard",
        topic: "Node.js"
    },
    {
        id: "pf-441",
        question: "What is the 'cluster' module in Node.js used for?",
        options: [
            "Clustering database connections for connection pooling",
            "Creating multiple worker processes that share the same server port, enabling Node.js to utilize multiple CPU cores since Node.js is single-threaded by default",
            "Grouping related microservices together",
            "Managing multiple Node.js versions on the same machine"
        ],
        answer: 1,
        explanation: "Node.js runs in a single thread. The cluster module forks multiple worker processes (one per CPU core) that all listen on the same port. The master process distributes incoming connections among workers, enabling multi-core utilization without external process managers.",
        difficulty: "Medium",
        topic: "Node.js"
    },
    {
        id: "pf-442",
        question: "What is a streaming response in Node.js and what advantage does it provide over buffering?",
        options: [
            "Streaming is faster because it uses UDP instead of TCP",
            "Streaming processes data chunk by chunk as it arrives, reducing memory usage for large responses (files, API responses) and providing faster time-to-first-byte for the client",
            "Streaming compresses data more efficiently than buffering",
            "Streaming is only useful for video content"
        ],
        answer: 1,
        explanation: "Instead of loading an entire file or query result into memory before sending (buffering), streams pipe data in chunks. A 1GB file can be streamed using minimal memory (e.g., 64KB chunks). The client starts receiving data immediately, and the server never holds the entire payload in RAM.",
        difficulty: "Medium",
        topic: "Node.js"
    },
    {
        id: "pf-443",
        question: "In Express.js, what is the difference between 'app.use()' and 'app.get()'?",
        options: [
            "app.use() is for middleware; app.get() is for routes - but app.use() can also match routes and will match any HTTP method, while app.get() only matches GET requests",
            "app.use() only works for GET requests; app.get() works for all methods",
            "app.get() runs before app.use() in the middleware chain",
            "There is no difference; they are aliases"
        ],
        answer: 0,
        explanation: "app.use() adds middleware that runs for all HTTP methods and matches the path as a prefix. app.get() adds a route handler that only matches GET requests and requires an exact path match (unless using wildcards). app.use('/api', handler) matches /api, /api/users, etc.",
        difficulty: "Medium",
        topic: "Express.js"
    },
    {
        id: "pf-444",
        question: "What is the Express.js 'error-handling middleware' signature requirement and where must it be placed?",
        options: [
            "It has the same signature as regular middleware (req, res, next) and can be placed anywhere",
            "It must have four parameters (err, req, res, next) and must be defined after all other middleware/routes, as Express only calls it when an error is passed to next(err)",
            "It must return a Promise with the error",
            "It uses the app.error() method instead of app.use()"
        ],
        answer: 1,
        explanation: "Express identifies error-handling middleware by its four-parameter signature (err, req, res, next). If you define it with only three parameters, Express treats it as regular middleware. It must be after all routes because errors from those routes flow to it via next(err).",
        difficulty: "Medium",
        topic: "Express.js"
    },
    {
        id: "pf-445",
        question: "In a REST API, what is the correct HTTP status code for a resource that was previously deleted and the client is trying to access it?",
        options: [
            "400 Bad Request",
            "404 Not Found - the resource no longer exists at this URI",
            "410 Gone - the resource existed but has been permanently removed and is no longer available",
            "403 Forbidden"
        ],
        answer: 2,
        explanation: "While 404 indicates the resource was not found (it may never have existed), 410 Gone specifically indicates that the resource existed but has been deliberately removed and is no longer available. It tells the client they should not expect the resource to become available again at this URI.",
        difficulty: "Hard",
        topic: "REST APIs"
    },
    {
        id: "pf-446",
        question: "What is the 'HATEOAS' constraint in REST and why is it rarely implemented in practice?",
        options: [
            "It requires all responses to be in HTML format",
            "HATEOAS (Hypermedia as the Engine of Application State) requires responses to include hyperlinks to related actions, allowing clients to discover API capabilities dynamically; it's rarely implemented because it adds complexity and most clients prefer pre-configured endpoints",
            "It requires all APIs to use WebSockets",
            "It is a security constraint that limits API access to authenticated users"
        ],
        answer: 1,
        explanation: "HATEOAS means a response for an order might include links like { 'cancel': '/orders/123/cancel', 'pay': '/orders/123/pay' }. The client discovers actions from the response rather than hardcoding URLs. Most APIs skip this because it adds response payload size and client complexity.",
        difficulty: "Hard",
        topic: "REST APIs"
    },
    {
        id: "pf-447",
        question: "What is the difference between GraphQL's query, mutation, and subscription?",
        options: [
            "Query is for reading, mutation is for deleting, subscription is for creating",
            "Query reads data (like GET), mutation writes/modifies data (like POST/PUT/DELETE), and subscription maintains a real-time connection for pushed data updates (like WebSocket)",
            "They are all identical; the naming is just convention",
            "Query is synchronous; mutation and subscription are asynchronous"
        ],
        answer: 1,
        explanation: "Queries fetch data without side effects. Mutations modify server state and return results. Subscriptions establish a WebSocket connection where the server pushes updates to the client when subscribed data changes. This maps to read, write, and real-time notification patterns.",
        difficulty: "Easy",
        topic: "GraphQL Basics"
    },
    {
        id: "pf-448",
        question: "What is the 'N+1 query problem' in GraphQL and how do you solve it?",
        options: [
            "When N clients make 1 query each, overloading the server",
            "When resolving a list of N items, each item's resolver makes a separate database query (1 query for the list + N queries for items), solved by DataLoader which batches and caches requests",
            "When the GraphQL schema has N+1 types defined",
            "When a query has N+1 fields selected"
        ],
        answer: 1,
        explanation: "Querying a list of 100 authors, each with a books resolver that queries the DB separately, means 101 queries. DataLoader batches all book queries into a single 'WHERE author_id IN (...)' query, reducing 101 queries to 2. It also caches results within a single request.",
        difficulty: "Hard",
        topic: "GraphQL Basics"
    },
    {
        id: "pf-449",
        question: "What is API versioning via 'URL path' (/v1/users) versus 'header' (Accept: application/vnd.api.v1+json)?",
        options: [
            "URL path versioning is always better",
            "URL path is explicit and cacheable but pollutes the URL space; header versioning keeps URLs clean but is less discoverable, harder to test in browsers, and may not be cached by proxies",
            "Header versioning is deprecated by REST standards",
            "Both approaches are functionally identical with no trade-offs"
        ],
        answer: 1,
        explanation: "URL versioning (/v1/) is the most common because it's visible, easy to test (just change the URL), and HTTP caches can differentiate versions. Header versioning keeps URLs clean but requires custom Accept headers, making API exploration harder. Major companies use both approaches.",
        difficulty: "Medium",
        topic: "API Versioning"
    },
    {
        id: "pf-450",
        question: "What is the structure of a JSON Web Token (JWT) and which part contains the claims?",
        options: [
            "Header.Payload.Signature - the Payload contains the claims (user data, expiration, issuer)",
            "Signature.Header.Payload - the Header contains the claims",
            "Key.Value.Signature - the Value contains the claims",
            "Prefix.Claims.Suffix - the Prefix contains the claims"
        ],
        answer: 0,
        explanation: "A JWT has three Base64URL-encoded parts separated by dots: Header (algorithm and token type), Payload (claims like sub, exp, iat, iss, and custom claims), and Signature (HMAC or RSA signature over header.payload). Only the payload contains the actual data/claims.",
        difficulty: "Easy",
        topic: "JWT"
    },
    {
        id: "pf-451",
        question: "What security risk does JWT pose if the payload contains sensitive data like a password?",
        options: [
            "The password is encrypted and safe in the payload",
            "JWT payloads are Base64-encoded, NOT encrypted; anyone who intercepts the token can decode the payload and read sensitive data, even if they can't modify it (due to the signature)",
            "JWT automatically strips sensitive fields from the payload",
            "The signature protects the payload from being read"
        ],
        answer: 1,
        explanation: "Base64URL encoding is NOT encryption - it's easily reversible by anyone. The JWT signature only prevents tampering (modification), not reading. Sensitive data (passwords, SSNs, credit cards) should never be in the JWT payload. Store only non-sensitive identifiers and reference sensitive data server-side.",
        difficulty: "Medium",
        topic: "JWT"
    },
    {
        id: "pf-452",
        question: "In OAuth 2.0, what is the 'authorization code' flow and why is it the recommended flow for web applications?",
        options: [
            "The client sends credentials directly to the authorization server",
            "The client redirects the user to the authorization server, receives an authorization code, then exchanges it server-to-server for tokens, keeping the tokens off the client-side and providing the highest security",
            "The authorization code IS the access token, used directly for API calls",
            "It is the simplest flow with no redirects required"
        ],
        answer: 1,
        explanation: "In the authorization code flow: (1) user is redirected to auth server, (2) user authenticates and authorizes, (3) auth server redirects back with a code, (4) backend exchanges code for tokens via server-to-server call. The token never passes through the browser, preventing token theft via XSS.",
        difficulty: "Medium",
        topic: "OAuth 2.0"
    },
    {
        id: "pf-453",
        question: "What is the OAuth 2.0 'PKCE' extension and when is it required?",
        options: [
            "It encrypts the authorization code during transmission",
            "PKCE (Proof Key for Code Exchange) adds a code_verifier/code_challenge to prevent authorization code interception attacks, required for public clients (SPAs, mobile apps) that cannot securely store a client secret",
            "It replaces the need for client secrets in all OAuth flows",
            "It is a deprecated OAuth 1.0 feature"
        ],
        answer: 1,
        explanation: "Public clients (SPAs, mobile apps) embed the client secret in source code, making it not actually secret. PKCE generates a random code_verifier, sends its hash (code_challenge) in the auth request, and sends the plain code_verifier in the token request. An interceptor can't exchange the code without the verifier.",
        difficulty: "Hard",
        topic: "OAuth 2.0"
    },
    {
        "id": "pf-454",
        "topic": "Git Basics",
        "difficulty": "Easy",
        "question": "What does Git primarily track in a project?",
        "options": [
            "File permissions only",
            "Changes to file content",
            "Disk space usage",
            "Network traffic"
        ],
        "answer": 1,
        "explanation": "Git is a distributed version control system that tracks changes to file content over time, enabling collaboration and history tracking."
    },
    {
        "id": "pf-455",
        "topic": "Git Basics",
        "difficulty": "Easy",
        "question": "What type of version control system is Git?",
        "options": [
            "Centralized",
            "Distributed",
            "Local-only",
            "Client-server"
        ],
        "answer": 1,
        "explanation": "Git is a distributed version control system where every developer has a full copy of the repository, including its complete history."
    },
    {
        "id": "pf-456",
        "topic": "Git Installation",
        "difficulty": "Easy",
        "question": "Which command verifies that Git is installed and shows its version?",
        "options": [
            "git --check",
            "git --version",
            "git --verify",
            "git --info"
        ],
        "answer": 1,
        "explanation": "Running git --version displays the installed Git version number, confirming that Git is properly installed on the system."
    },
    {
        "id": "pf-457",
        "topic": "Git Installation",
        "difficulty": "Easy",
        "question": "On Ubuntu, which command installs Git using the package manager?",
        "options": [
            "yum install git",
            "apt-get install git",
            "brew install git",
            "dnf install git"
        ],
        "answer": 1,
        "explanation": "On Ubuntu and other Debian-based systems, apt-get install git is the standard command to install Git using the APT package manager."
    },
    {
        "id": "pf-458",
        "topic": "Repository Initialization",
        "difficulty": "Easy",
        "question": "What command initializes a new Git repository in the current directory?",
        "options": [
            "git start",
            "git init",
            "git create",
            "git new"
        ],
        "answer": 1,
        "explanation": "git init creates a new .git subdirectory in the current folder, which contains all the necessary metadata for the repository."
    },
    {
        "id": "pf-459",
        "topic": "Repository Initialization",
        "difficulty": "Easy",
        "question": "What hidden directory is created when you run git init?",
        "options": [
            ".gitconfig",
            ".git",
            ".gitrepo",
            ".gitdata"
        ],
        "answer": 1,
        "explanation": "git init creates a .git directory that stores all version control metadata, including objects, refs, and configuration files."
    },
    {
        "id": "pf-460",
        "topic": "Git Config",
        "difficulty": "Easy",
        "question": "Which command sets your name globally for all Git repositories?",
        "options": [
            "git config --global user.name \"Your Name\"",
            "git set --global user.name \"Your Name\"",
            "git config --local user.name \"Your Name\"",
            "git config user.name \"Your Name\""
        ],
        "answer": 0,
        "explanation": "The --global flag sets the configuration at the user level, applying the name to all repositories on the system unless overridden locally."
    },
    {
        "id": "pf-461",
        "topic": "Git Config",
        "difficulty": "Easy",
        "question": "Where are global Git configuration settings stored?",
        "options": [
            ".git/config in each repository",
            "~/.gitconfig",
            "/etc/gitconfig",
            "~/.git/config"
        ],
        "answer": 1,
        "explanation": "Global Git settings are stored in the ~/.gitconfig file in the user's home directory, applying across all repositories for that user."
    },
    {
        "id": "pf-462",
        "topic": "Git Config",
        "difficulty": "Easy",
        "question": "Which command displays all your current Git configuration settings?",
        "options": [
            "git config --show",
            "git config --list",
            "git config --display",
            "git config --all"
        ],
        "answer": 1,
        "explanation": "git config --list prints all Git configuration values from all config files (system, global, and local) in a consolidated view."
    },
    {
        "id": "pf-463",
        "topic": "Working Tree",
        "difficulty": "Easy",
        "question": "What is the working tree in Git?",
        "options": [
            "The .git directory",
            "The directory containing your actual project files",
            "The remote repository",
            "The staging area"
        ],
        "answer": 1,
        "explanation": "The working tree is the directory on your filesystem where you can see and edit your project files, separate from the .git metadata."
    },
    {
        "id": "pf-464",
        "topic": "Working Tree",
        "difficulty": "Easy",
        "question": "What does a clean working tree mean?",
        "options": [
            "All files are deleted",
            "No uncommitted changes exist in the working directory",
            "The .git folder is empty",
            "The remote is up to date"
        ],
        "answer": 1,
        "explanation": "A clean working tree indicates there are no modified, staged, or untracked files, meaning the working directory matches the last commit."
    },
    {
        "id": "pf-465",
        "topic": "Staging Area",
        "difficulty": "Easy",
        "question": "What command stages a single file for the next commit?",
        "options": [
            "git add --file myfile.txt",
            "git stage myfile.txt",
            "git add myfile.txt",
            "git prepare myfile.txt"
        ],
        "answer": 2,
        "explanation": "git add myfile.txt moves the specified file from the working tree to the staging area, preparing it for inclusion in the next commit."
    },
    {
        "id": "pf-466",
        "topic": "Staging Area",
        "difficulty": "Easy",
        "question": "What does the staging area represent in Git?",
        "options": [
            "The final commit history",
            "A snapshot of changes to be included in the next commit",
            "A backup of the working tree",
            "The remote repository state"
        ],
        "answer": 1,
        "explanation": "The staging area (also called the index) holds a snapshot of changes that will be included in the next commit, giving you control over what gets committed."
    },
    {
        "id": "pf-467",
        "topic": "Staging Area",
        "difficulty": "Easy",
        "question": "Which command stages all changes in the current directory for commit?",
        "options": [
            "git add .",
            "git add --all",
            "git stage --all",
            "git commit --all"
        ],
        "answer": 0,
        "explanation": "git add . stages all new, modified, and deleted files in the current directory and its subdirectories for the next commit."
    },
    {
        "id": "pf-468",
        "topic": "Commits",
        "difficulty": "Easy",
        "question": "What command creates a commit with the staged changes?",
        "options": [
            "git save -m \"message\"",
            "git commit -m \"message\"",
            "git push -m \"message\"",
            "git store -m \"message\""
        ],
        "answer": 1,
        "explanation": "git commit -m creates a new commit with a message, permanently recording the staged snapshot in the repository history."
    },
    {
        "id": "pf-469",
        "topic": "Commits",
        "difficulty": "Easy",
        "question": "What is a commit hash in Git?",
        "options": [
            "A random number assigned to each file",
            "A SHA-1 hash uniquely identifying a commit object",
            "An encrypted password for the repository",
            "A timestamp of when the commit was made"
        ],
        "answer": 1,
        "explanation": "Each commit is identified by a 40-character SHA-1 hash, which is uniquely generated from the commit's contents, metadata, and parent references."
    },
    {
        "id": "pf-470",
        "topic": "Commits",
        "difficulty": "Easy",
        "question": "What does the -m flag do in a git commit command?",
        "options": [
            "Marks the commit as minor",
            "Specifies the commit message directly on the command line",
            "Merges the commit with the previous one",
            "Moves the commit to a different branch"
        ],
        "answer": 1,
        "explanation": "The -m flag allows you to provide the commit message inline, avoiding the opening of a text editor for message entry."
    },
    {
        "id": "pf-471",
        "topic": "Commits",
        "difficulty": "Easy",
        "question": "What happens if you try to commit without staging any changes?",
        "options": [
            "Git creates an empty commit automatically",
            "Git throws an error saying nothing to commit",
            "Git stages all files and then commits",
            "Git deletes the current branch"
        ],
        "answer": 1,
        "explanation": "If no changes are staged, Git displays an error message indicating there is nothing to commit, unless you use the --allow-empty flag."
    },
    {
        "id": "pf-472",
        "topic": "Commit History",
        "difficulty": "Easy",
        "question": "What does git show display by default?",
        "options": [
            "The entire commit history",
            "The most recent commit's details and diff",
            "Only the commit messages",
            "The branch structure"
        ],
        "answer": 1,
        "explanation": "Without arguments, git show displays information about the most recent commit, including the commit metadata and the diff it introduced."
    },
    {
        "id": "pf-473",
        "topic": "Git Log",
        "difficulty": "Easy",
        "question": "What does git log display?",
        "options": [
            "Error messages from Git operations",
            "The commit history of the current branch",
            "A list of all files in the repository",
            "Remote repository URLs"
        ],
        "answer": 1,
        "explanation": "git log shows the commit history in reverse chronological order, including commit hashes, author information, dates, and commit messages."
    },
    {
        "id": "pf-474",
        "topic": "Git Log",
        "difficulty": "Easy",
        "question": "Which flag limits git log output to a specific number of commits?",
        "options": [
            "-n",
            "-l",
            "-c",
            "-max"
        ],
        "answer": 0,
        "explanation": "git log -n <number> or git log -<number> limits the output to the specified number of most recent commits."
    },
    {
        "id": "pf-475",
        "topic": "Git Log",
        "difficulty": "Easy",
        "question": "What does git log --oneline display?",
        "options": [
            "Only the first line of each commit message",
            "A shortened single-line format with commit hash and message",
            "Only the commit hashes without messages",
            "The log in a single column"
        ],
        "answer": 1,
        "explanation": "git log --oneline shows each commit on a single line with an abbreviated hash and the full commit message, making the log more compact."
    },
    {
        "id": "pf-476",
        "topic": "Git Diff",
        "difficulty": "Easy",
        "question": "What does git diff show by default?",
        "options": [
            "Differences between staging area and the last commit",
            "Differences between the working tree and the staging area",
            "Differences between two branches",
            "Differences between local and remote"
        ],
        "answer": 1,
        "explanation": "Without arguments, git diff shows the changes in the working tree that have not yet been staged, comparing the working directory to the staging area."
    },
    {
        "id": "pf-477",
        "topic": "Git Diff",
        "difficulty": "Easy",
        "question": "Which command shows changes that are staged but not yet committed?",
        "options": [
            "git diff --staged",
            "git diff --cached",
            "git diff --commit",
            "Both A and B"
        ],
        "answer": 3,
        "explanation": "Both --staged and --cached are equivalent flags that show the differences between the staging area and the most recent commit."
    },
    {
        "id": "pf-478",
        "topic": "Git Status",
        "difficulty": "Easy",
        "question": "What information does git status provide?",
        "options": [
            "Only the current branch name",
            "The state of the working tree and staging area",
            "Only untracked files",
            "Only remote repository status"
        ],
        "answer": 1,
        "explanation": "git status shows the branch name, whether it is in sync with remote, and which files are modified, staged, or untracked."
    },
    {
        "id": "pf-479",
        "topic": "Git Status",
        "difficulty": "Easy",
        "question": "What does 'Untracked files' mean in git status output?",
        "options": [
            "Files that have been deleted",
            "Files that Git is not currently tracking in version control",
            "Files that have been modified",
            "Files that are in the staging area"
        ],
        "answer": 1,
        "explanation": "Untracked files are those that exist in the working directory but have never been added to Git's version control tracking."
    },
    {
        "id": "pf-480",
        "topic": "Git Status",
        "difficulty": "Easy",
        "question": "Which flag makes git status output more concise?",
        "options": [
            "-s",
            "-c",
            "-q",
            "-b"
        ],
        "answer": 0,
        "explanation": "git status -s or --short gives a compact output using two-character status codes (like M for modified, A for added, ?? for untracked) instead of full descriptions."
    },
    {
        "id": "pf-481",
        "topic": "Branches",
        "difficulty": "Easy",
        "question": "What is a branch in Git?",
        "options": [
            "A copy of the entire repository",
            "A lightweight movable pointer to a commit",
            "A separate folder in the filesystem",
            "A backup of the working tree"
        ],
        "answer": 1,
        "explanation": "In Git, a branch is simply a lightweight pointer to a commit, making branch creation and switching extremely fast operations."
    },
    {
        "id": "pf-482",
        "topic": "Branches",
        "difficulty": "Easy",
        "question": "Which command lists all local branches?",
        "options": [
            "git branches",
            "git branch",
            "git show-branches",
            "git list-branches"
        ],
        "answer": 1,
        "explanation": "git branch without any flags lists all local branches in the repository, marking the current branch with an asterisk."
    },
    {
        "id": "pf-483",
        "topic": "Branches",
        "difficulty": "Easy",
        "question": "What is the default branch name in newly created Git repositories?",
        "options": [
            "master",
            "main",
            "It depends on the Git configuration",
            "default"
        ],
        "answer": 2,
        "explanation": "The default branch name depends on the Git version and configuration. Older versions default to 'master', while newer ones may use 'main' based on init.defaultBranch setting."
    },
    {
        "id": "pf-484",
        "topic": "Branch Creation",
        "difficulty": "Easy",
        "question": "Which command creates a new branch without switching to it?",
        "options": [
            "git new-branch feature",
            "git branch feature",
            "git create-branch feature",
            "git switch --create-only feature"
        ],
        "answer": 1,
        "explanation": "git branch <name> creates a new branch pointing to the current commit but does not switch your working tree to that branch."
    },
    {
        "id": "pf-485",
        "topic": "Branch Creation",
        "difficulty": "Easy",
        "question": "Which command creates and switches to a new branch in one step?",
        "options": [
            "git branch -s feature",
            "git checkout -b feature",
            "git switch -n feature",
            "git create -b feature"
        ],
        "answer": 1,
        "explanation": "git checkout -b <name> creates a new branch and immediately switches to it, combining branch creation and switching in a single command."
    },
    {
        "id": "pf-486",
        "topic": "Branch Switching",
        "difficulty": "Easy",
        "question": "What is the recommended modern command to switch branches?",
        "options": [
            "git change feature",
            "git switch feature",
            "git go feature",
            "git move feature"
        ],
        "answer": 1,
        "explanation": "git switch is the modern command introduced in Git 2.23 specifically for switching branches, making the intent clearer than the older git checkout."
    },
    {
        "id": "pf-487",
        "topic": "Branch Switching",
        "difficulty": "Easy",
        "question": "What happens if you switch branches with uncommitted changes?",
        "options": [
            "Git always discards the changes",
            "Git may prevent switching if changes would be overwritten",
            "Git automatically commits the changes",
            "Git moves the changes to the new branch automatically"
        ],
        "answer": 1,
        "explanation": "Git will refuse to switch branches if uncommitted changes would be overwritten by the switch, unless the changes are stashed or committed first."
    },
    {
        "id": "pf-488",
        "topic": "Merge",
        "difficulty": "Easy",
        "question": "Which command merges a specified branch into the current branch?",
        "options": [
            "git merge from feature",
            "git merge feature",
            "git combine feature",
            "git join feature"
        ],
        "answer": 1,
        "explanation": "git merge <branch> takes the specified branch's commits and integrates them into the current branch, creating a merge commit if needed."
    },
    {
        "id": "pf-489",
        "topic": "Merge",
        "difficulty": "Easy",
        "question": "What is a merge commit?",
        "options": [
            "A commit that deletes a branch",
            "A commit with two or more parent commits that combines branch histories",
            "A regular commit on the target branch",
            "A commit that reverts a previous merge"
        ],
        "answer": 1,
        "explanation": "A merge commit has multiple parent commits, representing the point where two separate branch histories were joined together."
    },
    {
        "id": "pf-490",
        "topic": "Fast Forward Merge",
        "difficulty": "Easy",
        "question": "When does a fast-forward merge occur?",
        "options": [
            "When the target branch has commits not in the current branch",
            "When the current branch has no new commits since the branch diverged",
            "When both branches have new commits",
            "When a merge conflict is detected"
        ],
        "answer": 1,
        "explanation": "A fast-forward merge happens when the current branch has no new commits since the divergence point, so Git simply moves the branch pointer forward."
    },
    {
        "id": "pf-491",
        "topic": "Fast Forward Merge",
        "difficulty": "Easy",
        "question": "Which flag prevents a fast-forward merge and forces a merge commit?",
        "options": [
            "--no-ff",
            "--force-merge",
            "--commit-merge",
            "--no-fast"
        ],
        "answer": 0,
        "explanation": "git merge --no-ff creates a merge commit even when a fast-forward is possible, preserving the branch history and making it clear a merge occurred."
    },
    {
        "id": "pf-492",
        "topic": "HEAD",
        "difficulty": "Easy",
        "question": "What does HEAD represent in Git?",
        "options": [
            "The first commit in the repository",
            "A pointer to the current branch reference or commit",
            "The main branch",
            "The remote repository"
        ],
        "answer": 1,
        "explanation": "HEAD is a symbolic reference pointing to the current branch or commit you are working on, indicating where your working tree is based."
    },
    {
        "id": "pf-493",
        "topic": "HEAD",
        "difficulty": "Easy",
        "question": "What does HEAD~2 refer to?",
        "options": [
            "The second branch in the repository",
            "The commit two parents before the current commit",
            "The second file in the staging area",
            "Two commits ahead of HEAD"
        ],
        "answer": 1,
        "explanation": "HEAD~2 is a shorthand for the commit that is two generations before the current commit, following the first parent of each commit."
    },
    {
        "id": "pf-494",
        "topic": "Checkout",
        "difficulty": "Easy",
        "question": "What does git checkout <commit-hash> do?",
        "options": [
            "Deletes the commit",
            "Puts you in a detached HEAD state at that commit",
            "Merges the commit into the current branch",
            "Creates a new branch from that commit"
        ],
        "answer": 1,
        "explanation": "Checking out a specific commit hash puts Git in a detached HEAD state, where HEAD points directly to a commit rather than a branch reference."
    },
    {
        "id": "pf-495",
        "topic": "Checkout",
        "difficulty": "Easy",
        "question": "Which command discards uncommitted changes in a specific file?",
        "options": [
            "git checkout -- file.txt",
            "git restore file.txt",
            "Both A and B",
            "git reset file.txt"
        ],
        "answer": 2,
        "explanation": "Both git checkout -- file.txt (traditional) and git restore file.txt (modern) discard uncommitted working tree changes for the specified file."
    },
    {
        "id": "pf-496",
        "topic": "Checkout",
        "difficulty": "Easy",
        "question": "What does git checkout - do?",
        "options": [
            "Deletes the current branch",
            "Switches to the previous branch",
            "Creates a new branch",
            "Checks out all files"
        ],
        "answer": 1,
        "explanation": "git checkout - switches to the branch you were on previously, acting as a quick toggle between two branches."
    },
    {
        "id": "pf-497",
        "topic": "Tags",
        "difficulty": "Easy",
        "question": "What is the purpose of a tag in Git?",
        "options": [
            "To create a new branch",
            "To mark a specific commit as important, like a release version",
            "To delete old commits",
            "To merge branches"
        ],
        "answer": 1,
        "explanation": "Tags are used to mark specific commits as significant, typically for release versions (e.g., v1.0.0), making them easy to reference later."
    },
    {
        "id": "pf-498",
        "topic": "Tags",
        "difficulty": "Easy",
        "question": "What is the difference between lightweight and annotated tags?",
        "options": [
            "Lightweight tags store more metadata",
            "Annotated tags include author, date, and message; lightweight tags are just a pointer",
            "There is no difference",
            "Lightweight tags can be pushed but annotated tags cannot"
        ],
        "answer": 1,
        "explanation": "Annotated tags (created with -a) store extra metadata like tagger name, email, date, and message, while lightweight tags are simply named pointers to a commit."
    },
    {
        "id": "pf-499",
        "topic": "Remote Repository",
        "difficulty": "Easy",
        "question": "What is a remote in Git?",
        "options": [
            "A local backup directory",
            "A reference to another copy of the repository, typically on a server",
            "A separate branch",
            "A configuration file"
        ],
        "answer": 1,
        "explanation": "A remote is a bookmark pointing to another version of the same repository, usually hosted on a server like GitHub, GitLab, or Bitbucket."
    },
    {
        "id": "pf-500",
        "topic": "Remote Repository",
        "difficulty": "Easy",
        "question": "Which command lists all configured remotes?",
        "options": [
            "git remote list",
            "git remote -v",
            "git remotes",
            "git show-remotes"
        ],
        "answer": 1,
        "explanation": "git remote -v displays all configured remote repositories along with their fetch and push URLs, giving a complete view of remote connections."
    },
    {
        "id": "pf-501",
        "topic": "Origin",
        "difficulty": "Easy",
        "question": "What is 'origin' in Git?",
        "options": [
            "The default branch name",
            "The default name Git gives to the primary remote repository",
            "The first commit in a repository",
            "A special Git configuration file"
        ],
        "answer": 1,
        "explanation": "Origin is the conventional default name assigned by Git to the primary remote repository when you clone or add a remote to your local repository."
    },
    {
        "id": "pf-502",
        "topic": "Fetch",
        "difficulty": "Easy",
        "question": "What does git fetch do?",
        "options": [
            "Downloads remote changes and merges them automatically",
            "Downloads remote changes without merging into local branches",
            "Uploads local changes to the remote",
            "Deletes remote branches"
        ],
        "answer": 1,
        "explanation": "git fetch downloads objects and refs from a remote repository but does not modify your working tree or merge changes into your current branch."
    },
    {
        "id": "pf-503",
        "topic": "Pull",
        "difficulty": "Easy",
        "question": "What is git pull equivalent to?",
        "options": [
            "git fetch followed by git merge",
            "git fetch followed by git rebase",
            "git push followed by git fetch",
            "git clone followed by git merge"
        ],
        "answer": 0,
        "explanation": "By default, git pull is equivalent to git fetch followed by git merge, integrating remote changes into the current branch."
    },
    {
        "id": "pf-504",
        "topic": "Pull",
        "difficulty": "Easy",
        "question": "Which flag makes git pull use rebase instead of merge?",
        "options": [
            "--merge",
            "--rebase",
            "--no-merge",
            "--fast-forward"
        ],
        "answer": 1,
        "explanation": "git pull --rebase fetches remote changes and then rebases your local commits on top of the fetched changes instead of creating a merge commit."
    },
    {
        "id": "pf-505",
        "topic": "Push",
        "difficulty": "Easy",
        "question": "What does git push do?",
        "options": [
            "Downloads changes from the remote",
            "Uploads local branch commits to a remote repository",
            "Creates a new local branch",
            "Deletes the remote repository"
        ],
        "answer": 1,
        "explanation": "git push transfers local branch commits to a remote repository, updating the remote refs so others can see your changes."
    },
    {
        "id": "pf-506",
        "topic": "Push",
        "difficulty": "Easy",
        "question": "What does git push -u origin main do?",
        "options": [
            "Pushes and then deletes the local branch",
            "Pushes and sets the upstream tracking reference",
            "Pushes and undoes the last commit",
            "Pushes and creates a new remote"
        ],
        "answer": 1,
        "explanation": "The -u (or --set-upstream) flag pushes the branch and sets the upstream tracking reference, so future git pull/push commands work without specifying the remote and branch."
    },
    {
        "id": "pf-507",
        "topic": "Clone",
        "difficulty": "Easy",
        "question": "What does git clone create?",
        "options": [
            "Only the working directory files",
            "A full copy of the repository including history and remotes",
            "A shallow copy without history",
            "Only the main branch"
        ],
        "answer": 1,
        "explanation": "git clone creates a complete copy of the remote repository, including all commit history, branches, and the remote configuration, in a new directory."
    }
];
