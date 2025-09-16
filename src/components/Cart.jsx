import React, { useState } from 'react'
import '../styles/Cart.css'

const Cart = ({cart, setCart}) => {
  const [price, setPrice] = useState(0);

  
  return (
    <div>
      {cart?.map((item)=> (
        <div className='cart-box'  key={item.id}>
          <div className='cart-img'>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>Price:- {item.price}</p>
          </div>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
          <div>
            <button>Remove</button>
          </div>
          <div>
            <b>Total Price of your Cart is:- {price}</b>
          </div>
          <div>
            <button>Check Out</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Cart

