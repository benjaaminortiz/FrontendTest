import { useState } from "react";
import axios from "axios";
import React from "react";
import './PreviousArticles.css'
import { Link } from "react-router-dom";
const PreviousArticles = () => {
  const [posts, setPosts] = useState([]);

 async function fetchData() {
   await axios
      .get("http://servicepad-post-api.herokuapp.com/articles/")
      .then((res) => setPosts(res.data.data));
  }

  fetchData();

  const sortedArticles = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="previous">
        <h1>Previous Articles</h1>
        <h5>Review and edit previous blog posts published on to the homepage</h5>
      <table>
        <thead>
        
          <tr className="tags">
            <th>AUTHOR NAME</th>
            <th>TITLE</th>
            <th>CONTENT</th>
            <th>DATE</th>
            <th> </th>
          </tr>
        </thead>
<tbody>
        {posts ? (
          sortedArticles.map((post) => {
            return (
              <tr className="results">
                <th>{post.author}</th>
                <th>{post.title}</th>
                <th>{post.content}</th>
                <th>{post.date}</th>
                <th>
                  <Link to={`edit/${post.id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                </th>
              </tr>
            );
          })
        ) : (
          <h6>loading</h6>
        )} </tbody>
      </table>
    </div>
  );
};

export default PreviousArticles;
