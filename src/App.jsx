import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleAddToCart = productName => {
    setCart(previousCart => [...previousCart, productName])
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(previousMode => !previousMode)}
      />

      <div className="filter-row">
        <label htmlFor="category-filter">Filter by Category: </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={event => setSelectedCategory(event.target.value)}
        >
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart items={cart} />
    </div>
  )
}

export default App
