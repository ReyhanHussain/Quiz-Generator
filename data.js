export const data = {
  topicName: "React",
  difficultyLevel: "Medium",
  time: 15,
  timeRemaining: "12:45",
  quizType: "mcq",
  questionNoNow: 3,
  totalQuestions: 30,
  questionPercentage: 10,
  score: 2,
  isFinished: false,

  questions: [
    {
      id: 1,
      questionTitle: "What is the primary purpose of React Hooks?",
      options: [
        { key: "a", text: "Directly manipulate the browser DOM" },
        { key: "b", text: "Use state and lifecycle features in function components" },
        { key: "c", text: "Compile JSX into standard JavaScript" },
        { key: "d", text: "Replace CSS stylesheets" }
      ],
      correctAnswer: "b",
      userAnswer: "b",
      isAnswered: true,
      hint: "Hooks allow function components to use features such as state and effects.",
      shortType: null
    },

    {
      id: 2,
      questionTitle: "Which hook should you use to handle data fetching or subscriptions?",
      options: [
        { key: "a", text: "useState" },
        { key: "b", text: "useContext" },
        { key: "c", text: "useEffect" },
        { key: "d", text: "useReducer" }
      ],
      correctAnswer: "c",
      userAnswer: "c",
      isAnswered: true,
      hint: "Think about side effects outside the immediate render flow.",
      shortType: null
    },

    {
      id: 3,
      questionTitle: "What is the primary function of the Virtual DOM?",
      options: [
        { key: "a", text: "Bypass JavaScript security checks" },
        { key: "b", text: "Minimize direct DOM manipulations through reconciliation" },
        { key: "c", text: "Store browser cookies persistently" },
        { key: "d", text: "Handle HTTP request routing" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "React calculates changes before updating the real DOM.",
      shortType: null
    },

    {
      id: 4,
      questionTitle: "Why are unique key props required when rendering dynamic lists?",
      options: [
        { key: "a", text: "To satisfy HTML5 requirements" },
        { key: "b", text: "To help React identify which items changed, moved, or were deleted" },
        { key: "c", text: "To automatically sort arrays" },
        { key: "d", text: "To apply CSS classes" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "Keys help React keep track of individual elements.",
      shortType: null
    },

    {
      id: 5,
      questionTitle: "What value does useRef preserve across component renders?",
      options: [
        { key: "a", text: "A mutable .current property that does not trigger re-renders" },
        { key: "b", text: "An immutable Redux state slice" },
        { key: "c", text: "A cached JSX tree" },
        { key: "d", text: "A promise handler" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "useRef returns an object containing a current property.",
      shortType: null
    },

    {
      id: 6,
      questionTitle: "When is useCallback useful?",
      options: [
        { key: "a", text: "Whenever you create a function" },
        { key: "b", text: "When you need to memoize a function reference" },
        { key: "c", text: "To make asynchronous functions synchronous" },
        { key: "d", text: "Only inside error boundaries" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "Think about preventing unnecessary function recreation.",
      shortType: null
    },

    {
      id: 7,
      questionTitle: "Why can a functional state updater be useful?",
      options: [
        { key: "a", text: "It makes updates synchronous" },
        { key: "b", text: "It lets you calculate new state from the previous state" },
        { key: "c", text: "It saves state to localStorage" },
        { key: "d", text: "It prevents all re-renders" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "Useful when the next state depends on the previous state.",
      shortType: null
    },

    {
      id: 8,
      questionTitle: "What is an Error Boundary in React?",
      options: [
        { key: "a", text: "A try/catch around JSX" },
        { key: "b", text: "A component that catches errors in its child component tree" },
        { key: "c", text: "A network timeout handler" },
        { key: "d", text: "A React linter rule" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "Error boundaries can display fallback UI when rendering errors occur.",
      shortType: null
    },

    {
      id: 9,
      questionTitle: "What does an empty dependency array in useEffect mean?",
      options: [
        { key: "a", text: "The effect runs after every render" },
        { key: "b", text: "The effect has no reactive dependencies" },
        { key: "c", text: "The effect never runs" },
        { key: "d", text: "The effect only runs before unmounting" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "There are no values listed that cause the effect to re-run.",
      shortType: null
    },

    {
      id: 10,
      questionTitle: "What is the primary benefit of React Context?",
      options: [
        { key: "a", text: "It makes every component render faster" },
        { key: "b", text: "It allows data to be shared without passing props through every level" },
        { key: "c", text: "It automatically caches API responses" },
        { key: "d", text: "It removes the need for testing" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "It can help avoid prop drilling.",
      shortType: null
    },

    {
      id: 11,
      questionTitle: "What is a React component?",
      options: [
        { key: "a", text: "A reusable piece of UI" },
        { key: "b", text: "A database" },
        { key: "c", text: "A CSS property" },
        { key: "d", text: "A server" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "Components are the building blocks of React interfaces.",
      shortType: null
    },

    {
      id: 12,
      questionTitle: "Which hook is used to create state in a function component?",
      options: [
        { key: "a", text: "useEffect" },
        { key: "b", text: "useState" },
        { key: "c", text: "useRef" },
        { key: "d", text: "useMemo" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "It returns a state value and a function to update it.",
      shortType: null
    },

    {
      id: 13,
      questionTitle: "What is JSX?",
      options: [
        { key: "a", text: "A database query language" },
        { key: "b", text: "A syntax extension for JavaScript" },
        { key: "c", text: "A CSS framework" },
        { key: "d", text: "A backend language" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "It allows you to write HTML-like syntax in JavaScript.",
      shortType: null
    },

    {
      id: 14,
      questionTitle: "How do you pass data from a parent component to a child?",
      options: [
        { key: "a", text: "Using props" },
        { key: "b", text: "Using CSS" },
        { key: "c", text: "Using HTML attributes only" },
        { key: "d", text: "Using localStorage" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "The parent provides values through component attributes.",
      shortType: null
    },

    {
      id: 15,
      questionTitle: "What happens when React state changes?",
      options: [
        { key: "a", text: "The browser completely reloads" },
        { key: "b", text: "React schedules a re-render" },
        { key: "c", text: "The component is permanently deleted" },
        { key: "d", text: "The JavaScript engine restarts" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "State changes cause React to render the component again.",
      shortType: null
    },

    {
      id: 16,
      questionTitle: "What is prop drilling?",
      options: [
        { key: "a", text: "Passing props through components that do not need them" },
        { key: "b", text: "Deleting props" },
        { key: "c", text: "Changing CSS props" },
        { key: "d", text: "Passing state to the browser" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "It happens when data is passed through multiple intermediate components.",
      shortType: null
    },

    {
      id: 17,
      questionTitle: "What does React.memo do?",
      options: [
        { key: "a", text: "Memoizes a component to potentially skip unnecessary re-renders" },
        { key: "b", text: "Stores data permanently" },
        { key: "c", text: "Creates a database" },
        { key: "d", text: "Changes component state" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "It can prevent rendering when props have not changed.",
      shortType: null
    },

    {
      id: 18,
      questionTitle: "Which hook is useful for memoizing a calculated value?",
      options: [
        { key: "a", text: "useRef" },
        { key: "b", text: "useMemo" },
        { key: "c", text: "useEffect" },
        { key: "d", text: "useContext" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "It caches the result of a calculation between renders.",
      shortType: null
    },

    {
      id: 19,
      questionTitle: "What is the purpose of useReducer?",
      options: [
        { key: "a", text: "Manage complex state logic using a reducer function" },
        { key: "b", text: "Create CSS animations" },
        { key: "c", text: "Fetch images only" },
        { key: "d", text: "Manipulate the DOM directly" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "It is an alternative to useState for certain state-management patterns.",
      shortType: null
    },

    {
      id: 20,
      questionTitle: "What does lifting state up mean?",
      options: [
        { key: "a", text: "Moving shared state to a common parent" },
        { key: "b", text: "Deleting state" },
        { key: "c", text: "Moving state into CSS" },
        { key: "d", text: "Saving state to a server" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "Move the state to the closest common ancestor of the components that need it.",
      shortType: null
    },

    {
      id: 21,
      questionTitle: "What does the children prop represent?",
      options: [
        { key: "a", text: "The elements placed inside a component's opening and closing tags" },
        { key: "b", text: "All child components in the application" },
        { key: "c", text: "The component's state" },
        { key: "d", text: "The component's CSS" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "Think about nested JSX.",
      shortType: null
    },

    {
      id: 22,
      questionTitle: "Why should React state usually be treated as immutable?",
      options: [
        { key: "a", text: "To help React detect changes and maintain predictable updates" },
        { key: "b", text: "Because JavaScript cannot modify objects" },
        { key: "c", text: "Because arrays cannot be changed" },
        { key: "d", text: "To prevent JavaScript from running" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "Create a new object or array instead of directly mutating existing state.",
      shortType: null
    },

    {
      id: 23,
      questionTitle: "What is conditional rendering?",
      options: [
        { key: "a", text: "Rendering UI based on a condition" },
        { key: "b", text: "Rendering CSS only" },
        { key: "c", text: "Rendering every component twice" },
        { key: "d", text: "Rendering only on the server" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "You can use if statements, ternaries, or logical operators.",
      shortType: null
    },

    {
      id: 24,
      questionTitle: "Which JavaScript method is commonly used to render a list in React?",
      options: [
        { key: "a", text: "filter()" },
        { key: "b", text: "map()" },
        { key: "c", text: "reduce()" },
        { key: "d", text: "sort()" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "It transforms every item in an array into something else.",
      shortType: null
    },

    {
      id: 25,
      questionTitle: "What is a controlled input in React?",
      options: [
        { key: "a", text: "An input whose value is controlled by React state" },
        { key: "b", text: "An input controlled by CSS" },
        { key: "c", text: "An input that cannot be edited" },
        { key: "d", text: "An input controlled by the database" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "The input value usually comes from state and changes through an event handler.",
      shortType: null
    },

    {
      id: 26,
      questionTitle: "Which event is commonly used to detect changes in an input?",
      options: [
        { key: "a", text: "onClick" },
        { key: "b", text: "onChange" },
        { key: "c", text: "onLoad" },
        { key: "d", text: "onRender" }
      ],
      correctAnswer: "b",
      userAnswer: null,
      isAnswered: false,
      hint: "React provides an event specifically for changes to form elements.",
      shortType: null
    },

    {
      id: 27,
      questionTitle: "What is the purpose of a cleanup function in useEffect?",
      options: [
        { key: "a", text: "Clean up subscriptions, timers, or other resources" },
        { key: "b", text: "Delete the React application" },
        { key: "c", text: "Clear all component state" },
        { key: "d", text: "Remove CSS files" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "Cleanup helps prevent unwanted effects from continuing.",
      shortType: null
    },

    {
      id: 28,
      questionTitle: "What is reconciliation in React?",
      options: [
        { key: "a", text: "The process React uses to determine what needs to change in the UI" },
        { key: "b", text: "Connecting React to a database" },
        { key: "c", text: "Compiling CSS" },
        { key: "d", text: "Sending HTTP requests" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "React compares the new rendered output with the previous one.",
      shortType: null
    },

    {
      id: 29,
      questionTitle: "What is the purpose of useContext?",
      options: [
        { key: "a", text: "Read values from a React Context" },
        { key: "b", text: "Create database tables" },
        { key: "c", text: "Fetch data automatically" },
        { key: "d", text: "Create CSS variables" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "It allows a component to consume context without manually passing props.",
      shortType: null
    },

    {
      id: 30,
      questionTitle: "What is the main advantage of reusable React components?",
      options: [
        { key: "a", text: "They allow UI logic and structure to be reused" },
        { key: "b", text: "They remove the need for JavaScript" },
        { key: "c", text: "They automatically create APIs" },
        { key: "d", text: "They prevent all bugs" }
      ],
      correctAnswer: "a",
      userAnswer: null,
      isAnswered: false,
      hint: "Components let you build an interface from reusable pieces.",
      shortType: null
    }
  ]
};