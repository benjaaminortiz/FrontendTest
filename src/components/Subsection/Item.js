import React from 'react'
import './Item.css'

const Item = ({logo, title, description}) => {
  return (
    <div className='item'>
        <div className='orb'>
            <img src={logo} alt={logo} />
        </div>
        <div className='text'>
        <div className='title'>
            <h1>{title}</h1>
        </div>
            <div className='description'>
                <p>{description}</p>
            </div>
        </div>
        
        </div>
  )
}

export default Item