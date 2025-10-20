import './TaskItem.css'

// Grandchild component that receives props from TaskList
function TaskItem({ task, onToggleComplete, onDeleteTask }) {
  // Event handler: Checkbox toggle
  const handleToggle = () => {
    onToggleComplete(task.id)
  }

  // Event handler: Delete button click
  const handleDelete = () => {
    onDeleteTask(task.id)
  }

  // Determine priority badge color
  const getPriorityClass = () => {
    return `priority-badge priority-${task.priority}`
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        
        <span className={`task-text ${task.completed ? 'line-through' : ''}`}>
          {task.text}
        </span>
        
        <span className={getPriorityClass()}>
          {task.priority}
        </span>
      </div>
      
      <button 
        className="delete-button"
        onClick={handleDelete}
        aria-label="Delete task"
      >
        🗑️
      </button>
    </div>
  )
}

export default TaskItem

