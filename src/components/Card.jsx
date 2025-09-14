import React from 'react'
import '../styles/Card.css'

const Card = ({item}) => {
  const {title, author, price, img}=item
  return (
    <div className='cards'>
      <div className='image-box'>
        <img src={img} alt={title} />
      </div>
      <div className='details'>
      <p>{title}</p>
      <p>{author}</p>
      <p>Price:- {price} Rs</p>
      <button>Add to cart</button>

      </div>

    </div>
  )
}

export default Card
