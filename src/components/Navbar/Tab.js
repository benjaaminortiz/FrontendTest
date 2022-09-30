import React from 'react'
import './Navbar.css'
const Tab = ({content}) => {
  return (
    <div className='tabs'>
      {content}
     <div className='indicator'></div>
     </div>
  )
}

export default Tab