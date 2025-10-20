import TaskItem from './TaskItem'
import './TaskList.css'

// Child component that receives props and passes them down to grandchild
function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  // Conditional rendering based on props
  if (tasks.length === 0) {
    return (
      <div className="task-list empty">
        <p className="empty-message">No tasks to display. Add one above!</p>
      </div>
    )
  }

  return (
    <div className="task-list">
      {/* Map through tasks array and render TaskItem components */}
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList

