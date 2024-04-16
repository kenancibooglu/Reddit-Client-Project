import React, { useState, useEffect } from "react";
import { fetchRedditPopular } from "../../api/api";
import "./style.css";
import { Box } from "@mui/material";

const Popular = () => {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    fetchRedditPopular().then((data) => {
      // Her bir öğenin içinden sadece orijinal resmi seçme
      const filteredPosts = data.data.children.map((post) => ({
        ...post,
        data: {
          ...post.data,
          thumbnail: post.data.url, // orijinal image url'si
        },
      }));
      setPopularPosts(filteredPosts);
    });
  }, []);

  return (
    <Box className="container">
      <h2>r/popular Popular</h2>
      <div className="line"></div>
      <ul className="post-list">
        {popularPosts.map((post) => (
          <li key={post.data.id} className="list-item">
            <div className="listDiv">
              <div className="img-wrapper" onClick={() => window.open(post.data.url)}>
                {post.data.author}
                <p>{post.data.title}</p>
                <img
                  src={post.data.thumbnail}
                  onError={(e) => (e.target.style.display = "none")}
                  alt="thumbnail"
                ></img>
                <p>{post.data.selftext}</p>
                <div className="button-sub">
              <span className="like">Like {post.data.score}</span>
              </div>
              <span >Ratio {post.data.upvote_ratio}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Popular;
