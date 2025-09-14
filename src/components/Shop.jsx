import React from 'react'
import list from '../list'
import Card from './Card'

const Shop = () => {
  return (
    <section>
        {list.map((item) => {
            return <Card key={item.id} item={item} />
            
        })}
    </section>
  )
}

export default Shop
