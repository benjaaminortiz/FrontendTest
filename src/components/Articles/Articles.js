import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import "./Articles.css";
import {Link} from 'react-router-dom'


const Articles = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   async function fetchData() {
      await axios
        .get("http://servicepad-post-api.herokuapp.com/articles/")
        .then((res) => setPosts(res.data.data));
    }
    fetchData();
  }, []);

  const sortedArticles = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
    <div className="articles-section">
      <h1>Lastest Articles</h1>
      <Link to='/create' ><button className='gradient'>Add New Article</button></Link>
      </div>
      <div className="articles">
        {sortedArticles.slice(0, 4).map((post) => {
          const { author, content, image_url, title } = post;
          return (
            <Article
              author={author}
              content={content}
              image={image_url}
              title={title}
            />
          );
        })}
</div>
    </div>
  );
};

export default Articles;
