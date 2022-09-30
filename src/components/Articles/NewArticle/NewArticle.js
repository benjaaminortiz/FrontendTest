import React, { useState } from "react";
import axios from "axios";
import "./NewArticle.css";
import {useParams} from 'react-router-dom'

const NewArticle = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

 const {id} = useParams();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: id ? "put":"post",
      url: id ? `https://servicepad-post-api.herokuapp.com/articles/${id}` : "https://servicepad-post-api.herokuapp.com/articles/",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        author: author,
        content: content,
        title: title,
      },
    })
      .then((res) =>  id ? alert('Updating', res) : alert('Creating', res)) 
      .catch((err) => console.log(err));
  }; 

 
  return (
    
    <div className="new-article-section">
      
      <div className="na-text">
        <h1>{id  ? 'Edit Article' : 'Add New Blog Article'}</h1>
        <h5>{id ?  'Edit an existing blog article to feature in the Easybank homepage.' : 'Publish a new blog article to feature in the Easybank homepage.'}</h5>
      </div>
      <div className="form-container">
        <form>
          <div>
            <span>Author</span>
            <input
              value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Blog title</span>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <span>Blog Content</span>
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          <button onClick={handleSubmit} className="gradient submit-btn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewArticle;
