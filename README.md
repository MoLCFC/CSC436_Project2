# Task Manager - React Fundamentals Project

A modern, responsive task management application built with React to demonstrate component-based architecture, state management, and event handling.

## 🚀 Features

- **Component-Based Architecture**: Modular design with reusable React components
- **State Management**: Dynamic data handling using React's `useState` hook
- **Props**: Efficient data flow between parent and child components
- **Event Handling**: Interactive UI with add, delete, complete, and filter functionality
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Priority Levels**: Organize tasks by high, medium, or low priority
- **Task Filtering**: View all tasks, active tasks, or completed tasks
- **Real-time Statistics**: Track total, active, and completed tasks

## 📋 Project Requirements

This project fulfills the CSC 436 Project 2 requirements:

### ✅ Component-Based Architecture
- Multiple functional components with clear parent-child hierarchy
- `App.jsx` (Parent)
- `AddTaskForm.jsx` (Child)
- `FilterButtons.jsx` (Child)
- `TaskList.jsx` (Child)
- `TaskItem.jsx` (Grandchild)

### ✅ State Management (useState)
- Tasks array management in `App.jsx`
- Filter state management
- Form input state in `AddTaskForm.jsx`
- State changes trigger UI updates

### ✅ Props for Data Passing
- Tasks and handlers passed from parent to children
- Demonstrates data flow through component hierarchy

### ✅ Event Handling
- Form submission for adding tasks
- Button clicks for filtering
- Checkbox toggle for task completion
- Delete button for removing tasks
- Input change handlers

### ✅ JSX Syntax
- All components use JSX for UI structure
- Conditional rendering
- List rendering with `.map()`

## 🛠️ Technologies Used

- React 18
- Vite (Build Tool)
- CSS3
- JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd CSC436_Project2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 🌐 Deployment

This project is deployed on Netlify. To deploy your own version:

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repository to Netlify for automatic deployments

## 📁 Project Structure

```
CSC436_Project2/
├── src/
│   ├── components/
│   │   ├── AddTaskForm.jsx
│   │   ├── AddTaskForm.css
│   │   ├── FilterButtons.jsx
│   │   ├── FilterButtons.css
│   │   ├── TaskList.jsx
│   │   ├── TaskList.css
│   │   ├── TaskItem.jsx
│   │   └── TaskItem.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
└── README.md
```

## 🎯 Key Concepts Demonstrated

### 1. Component Hierarchy
```
App (Parent)
├── AddTaskForm (Child)
├── FilterButtons (Child)
└── TaskList (Child)
    └── TaskItem (Grandchild)
```

### 2. State Management Examples
- Task list state
- Filter state
- Form input state
- Checkbox state

### 3. Props Flow
- Event handlers passed down
- Data passed to children
- Callbacks to update parent state

## 📝 Usage

1. **Add a Task**: Enter task text, select priority, and click "Add Task"
2. **Complete a Task**: Click the checkbox next to a task
3. **Delete a Task**: Click the trash icon on a task
4. **Filter Tasks**: Use the filter buttons to view All, Active, or Completed tasks
5. **View Statistics**: Check the stat cards at the top for task counts

## 🎓 Learning Outcomes

This project demonstrates:
- Building UIs with React's component-based architecture
- Managing state with the `useState` hook
- Passing data between components with props
- Implementing event handlers for user interactions
- Organizing a React project with proper structure
- Deploying a React application to production

## 👨‍💻 Author

Created for CSC 436 - Project 2: React Fundamentals

## 📄 License

This project is created for educational purposes.
