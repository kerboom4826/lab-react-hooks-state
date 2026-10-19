import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <button type="button" onClick={toggleTheme}>
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
