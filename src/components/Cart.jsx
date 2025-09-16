import React from 'react'

const Cart = ({cart, setCart}) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => setCart(cart.filter((i) => i.id !== item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Cart
