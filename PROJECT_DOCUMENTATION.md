# CSC 436 Project 2 - Documentation

## Project Overview

This Task Manager application demonstrates mastery of React fundamentals through a practical, interactive application. The project showcases component-based architecture, state management, props usage, and event handling.

## Requirements Fulfillment

### 1. Component-Based Architecture ✅

The application is built with **5 reusable functional components** organized in a clear hierarchy:

#### Component Hierarchy:
```
App.jsx (Parent Component)
│
├── AddTaskForm.jsx (Child)
├── FilterButtons.jsx (Child)
└── TaskList.jsx (Child)
    └── TaskItem.jsx (Grandchild)
```

#### Component Responsibilities:

**App.jsx** (Parent)
- Main application component
- Manages global state (tasks array, filter state)
- Coordinates data flow between child components
- Handles business logic (add, delete, toggle tasks)
- Calculates and displays statistics

**AddTaskForm.jsx** (Child)
- Manages local form state (task text, priority)
- Handles form submission event
- Validates user input
- Communicates with parent via callback props

**FilterButtons.jsx** (Child)
- Displays filter options (All, Active, Completed)
- Handles filter change events
- Receives current filter state via props
- Shows task counts for each filter

**TaskList.jsx** (Child)
- Receives filtered tasks array via props
- Renders list of TaskItem components
- Handles conditional rendering (empty state)
- Passes props down to grandchildren

**TaskItem.jsx** (Grandchild)
- Displays individual task details
- Handles checkbox toggle events
- Handles delete button events
- Receives task data and callbacks via props

### 2. JSX Syntax ✅

All components utilize JSX effectively:

- **Embedding Expressions**: `{task.text}`, `{totalTasks}`
- **Conditional Rendering**: 
  ```jsx
  {tasks.length === 0 ? <EmptyState /> : <TaskList />}
  className={`task-item ${task.completed ? 'completed' : ''}`}
  ```
- **List Rendering**: 
  ```jsx
  {tasks.map(task => <TaskItem key={task.id} task={task} />)}
  ```
- **Event Attributes**: `onClick`, `onChange`, `onSubmit`
- **Inline Styles and Dynamic Classes**

### 3. State Management (useState) ✅

Multiple instances of `useState` throughout the application:

#### In App.jsx:
```javascript
// Task list state - manages array of task objects
const [tasks, setTasks] = useState([...])

// Filter state - manages current view
const [filter, setFilter] = useState('all')
```

**State changes trigger UI updates:**
- Adding a task updates the tasks array → UI re-renders with new task
- Toggling completion updates task object → UI shows strikethrough
- Changing filter updates filter state → UI shows filtered tasks
- Deleting a task removes it from array → UI removes the task

#### In AddTaskForm.jsx:
```javascript
// Form input state
const [taskText, setTaskText] = useState('')
const [priority, setPriority] = useState('medium')
```

**Demonstrates controlled components:**
- Input values are controlled by React state
- Every keystroke updates state
- State changes reflect immediately in the input

### 4. Props for Data Passing ✅

Props are used extensively to pass data and functions between components:

#### Parent to Child (App → AddTaskForm):
```jsx
<AddTaskForm onAddTask={addTask} />
```
- Passes function to allow child to communicate back

#### Parent to Child (App → FilterButtons):
```jsx
<FilterButtons 
  currentFilter={filter} 
  onFilterChange={setFilter}
  taskCounts={{ all: totalTasks, active: activeTasks, completed: completedTasks }}
/>
```
- Passes current state
- Passes state setter function
- Passes calculated data

#### Parent to Child (App → TaskList):
```jsx
<TaskList 
  tasks={getFilteredTasks()} 
  onToggleComplete={toggleComplete}
  onDeleteTask={deleteTask}
/>
```
- Passes filtered data array
- Passes multiple event handlers

#### Child to Grandchild (TaskList → TaskItem):
```jsx
<TaskItem
  key={task.id}
  task={task}
  onToggleComplete={onToggleComplete}
  onDeleteTask={onDeleteTask}
/>
```
- Demonstrates props drilling
- Passes individual task object
- Forwards callbacks from parent

### 5. Event Handling ✅

Multiple interactive elements with various event types:

#### Form Events:
```javascript
// Form submission
const handleSubmit = (e) => {
  e.preventDefault()
  // ... validation and processing
}

// Input change
const handleInputChange = (e) => {
  setTaskText(e.target.value)
}

// Select change
const handlePriorityChange = (e) => {
  setPriority(e.target.value)
}
```

#### Button Click Events:
```javascript
// Filter buttons
onClick={() => handleFilterClick('all')}

// Delete button
onClick={handleDelete}
```

#### Checkbox Events:
```javascript
// Toggle completion
onChange={handleToggle}
```

### 6. Basic UI Elements ✅

Includes various HTML elements styled appropriately:

- **Forms**: `<form>`, `<input>`, `<select>`, `<button>`
- **Lists**: Task list with mapped items
- **Checkboxes**: For task completion
- **Buttons**: Add, Delete, Filter buttons
- **Typography**: Headings, paragraphs, labels
- **Containers**: Divs with semantic class names
- **Icons**: Emoji icons for visual appeal

### 7. Git & GitHub ✅

Repository includes:
- ✅ Initialized Git repository
- ✅ Meaningful commit messages
- ✅ Clear project structure
- ✅ .gitignore file for node_modules
- ✅ Comprehensive README.md
- ✅ Ready to push to GitHub

### 8. Deployment ✅

Project is configured for Netlify deployment:
- ✅ `netlify.toml` configuration file
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ SPA redirect rules configured

## Key React Concepts Demonstrated

### 1. Functional Components
All components are modern functional components using React Hooks.

### 2. Component Composition
Components are composed to create complex UI from simple building blocks.

### 3. Unidirectional Data Flow
Data flows down through props, events flow up through callbacks.

### 4. Lifting State Up
State is managed in the parent component and shared with children.

### 5. Controlled Components
Form inputs are controlled by React state for predictable behavior.

### 6. Conditional Rendering
UI adapts based on state (empty state, completed tasks, active filter).

### 7. List Rendering with Keys
Tasks are rendered efficiently with unique keys for React's reconciliation.

### 8. Event Handling
Multiple event types handled properly (onClick, onChange, onSubmit).

### 9. CSS Modularity
Each component has its own CSS file for maintainability.

### 10. Props Validation Through Usage
Clear prop naming and consistent usage patterns.

## Code Quality Features

### Clean Code Practices:
- ✅ Descriptive variable and function names
- ✅ Consistent code formatting
- ✅ Comments explaining key concepts
- ✅ Separation of concerns
- ✅ DRY principle (Don't Repeat Yourself)

### React Best Practices:
- ✅ Functional components with Hooks
- ✅ Proper key usage in lists
- ✅ Event handler naming conventions (handle*)
- ✅ Component file organization
- ✅ CSS separation per component

### User Experience:
- ✅ Responsive design (mobile-friendly)
- ✅ Visual feedback on interactions
- ✅ Intuitive UI/UX
- ✅ Smooth transitions and hover effects
- ✅ Empty state handling

## Application Features

1. **Add Tasks**: Users can add new tasks with custom text and priority levels
2. **Complete Tasks**: Click checkbox to mark tasks as complete
3. **Delete Tasks**: Remove tasks with the delete button
4. **Filter Tasks**: View all, active, or completed tasks
5. **Priority Levels**: Categorize tasks as high, medium, or low priority
6. **Statistics**: Real-time count of total, active, and completed tasks
7. **Visual Feedback**: Color-coded priorities, strikethrough for completed tasks
8. **Responsive Design**: Works on all device sizes

## Technical Implementation Highlights

### State Management Strategy:
- Single source of truth in parent component
- Derived state (filtered tasks, counts) calculated on demand
- No prop drilling beyond two levels

### Performance Considerations:
- Efficient re-rendering with proper key usage
- Minimal state updates
- Functional state updates for arrays

### Accessibility:
- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard accessible forms

## Deployment Instructions

### Deploy to Netlify:

#### Option 1: Drag & Drop
1. Build the project: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder to the upload area

#### Option 2: GitHub Integration
1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy automatically on git push

## Testing Checklist

- [ ] Application runs without errors
- [ ] Can add new tasks
- [ ] Can toggle task completion
- [ ] Can delete tasks
- [ ] Can filter tasks (All, Active, Completed)
- [ ] Statistics update correctly
- [ ] Form validates empty input
- [ ] Responsive on mobile devices
- [ ] No console errors
- [ ] All components render correctly

## Conclusion

This Task Manager application successfully demonstrates all required React fundamentals:
- Component-based architecture with clear hierarchy
- Effective state management with useState
- Props for parent-child communication
- Multiple event handling implementations
- Clean, maintainable code structure
- Ready for deployment

The project exceeds basic requirements by including:
- Priority levels for tasks
- Filter functionality
- Real-time statistics
- Polished, responsive UI
- Comprehensive documentation

