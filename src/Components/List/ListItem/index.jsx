import React from 'react'
import './index.css'

function ListItem({name, image, price, description}) {
  return (
    <div className='listItem__container'>
        <img src={image} alt="" />
        <div className='listItem__info'>
          <div>
            <span>{name}</span>
            <span>UYU {price}</span>
          </div>
          <p>{description}</p>
        </div>

    </div>
  )
}

export default ListItem