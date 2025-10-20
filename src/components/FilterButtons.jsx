import './FilterButtons.css'

// Child component for filtering tasks
function FilterButtons({ currentFilter, onFilterChange, taskCounts }) {
  // Event handler: Filter button click
  const handleFilterClick = (filterType) => {
    onFilterChange(filterType)
  }

  return (
    <div className="filter-buttons">
      <button
        className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
        onClick={() => handleFilterClick('all')}
      >
        All ({taskCounts.all})
      </button>
      
      <button
        className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
        onClick={() => handleFilterClick('active')}
      >
        Active ({taskCounts.active})
      </button>
      
      <button
        className={`filter-btn ${currentFilter === 'completed' ? 'active' : ''}`}
        onClick={() => handleFilterClick('completed')}
      >
        Completed ({taskCounts.completed})
      </button>
    </div>
  )
}

export default FilterButtons

