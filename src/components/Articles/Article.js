import React from 'react'
import './Articles.css'

const Article = ({author, content, image, title}) => {
  return (
    <div className='article'>
        <div className='article-img'>
        <img src={image} alt={image}/>
        </div>
        <div className='article-content'>
            <span>By {author}</span>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Article