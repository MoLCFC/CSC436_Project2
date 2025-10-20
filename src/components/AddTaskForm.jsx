import { useState } from 'react'
import './AddTaskForm.css'

// Child component that receives props from parent
function AddTaskForm({ onAddTask }) {
  // Local state management for form inputs
  const [taskText, setTaskText] = useState('')
  const [priority, setPriority] = useState('medium')

  // Event handler: Form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (taskText.trim() === '') {
      alert('Please enter a task!')
      return
    }

    // Call parent's function passed via props
    onAddTask(taskText, priority)
    
    // Reset form
    setTaskText('')
    setPriority('medium')
  }

  // Event handler: Input change
  const handleInputChange = (e) => {
    setTaskText(e.target.value)
  }

  // Event handler: Priority change
  const handlePriorityChange = (e) => {
    setPriority(e.target.value)
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="task-input"
          placeholder="Add a new task..."
          value={taskText}
          onChange={handleInputChange}
        />
        
        <select 
          className="priority-select"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        
        <button type="submit" className="add-button">
          Add Task
        </button>
      </div>
    </form>
  )
}

export default AddTaskForm

