import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import AddTaskForm from './components/AddTaskForm'
import FilterButtons from './components/FilterButtons'

function App() {
  // State management for tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React fundamentals', completed: false, priority: 'high' },
    { id: 2, text: 'Build component-based app', completed: false, priority: 'medium' },
    { id: 3, text: 'Deploy to Netlify', completed: false, priority: 'low' }
  ])
  
  // State for filter (all, active, completed)
  const [filter, setFilter] = useState('all')

  // Event handler: Add new task
  const addTask = (taskText, priority) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
      priority: priority
    }
    setTasks([...tasks, newTask])
  }

  // Event handler: Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Event handler: Toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // Filter tasks based on current filter
  const getFilteredTasks = () => {
    switch(filter) {
      case 'active':
        return tasks.filter(task => !task.completed)
      case 'completed':
        return tasks.filter(task => task.completed)
      default:
        return tasks
    }
  }

  // Calculate statistics
  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.completed).length
  const activeTasks = totalTasks - completedTasks

  return (
    <div className="app">
      <header className="app-header">
        <h1>📋 Task Manager</h1>
        <p className="subtitle">Stay organized and productive</p>
      </header>

      <div className="stats-container">
        <div className="stat-card">
          <span className="stat-number">{totalTasks}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{activeTasks}</span>
          <span className="stat-label">Active</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{completedTasks}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>

      {/* Passing event handler as prop to child component */}
      <AddTaskForm onAddTask={addTask} />

      {/* Passing state and event handler as props */}
      <FilterButtons 
        currentFilter={filter} 
        onFilterChange={setFilter}
        taskCounts={{ all: totalTasks, active: activeTasks, completed: completedTasks }}
      />

      {/* Passing filtered tasks and event handlers as props */}
      <TaskList 
        tasks={getFilteredTasks()} 
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}

export default App
