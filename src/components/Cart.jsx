import React from 'react'

const Cart = ({ items = [] }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          items.map((item, index) => (
            <li key={`${item}-${index}`}>{item} is in your cart.</li>
          ))
        )}
      </ul>
      {items.length > 0 && <p>Cart total: {items.length}</p>}
    </div>
  )
}

export default Cart
