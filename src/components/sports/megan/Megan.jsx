import React, { useState, useEffect } from "react";
import { fetchRedditSportsMegan } from "../../../api/api";
import "./style.css";
import { Box } from "@mui/material";

const Megan = () => {
    const [homePosts, setHomePosts] = useState([]);

    useEffect(() => {
        fetchRedditSportsMegan().then((data) => {
            // Her bir öğenin içinden sadece orijinal resmi seçme
            const filteredPosts = data.data.children.map((post) => ({
                ...post,
                data: {
                    ...post.data,
                    thumbnail: post.data.url, // orijinal image url'si
                },
            }));
            setHomePosts(filteredPosts);
        });
    }, []);

    return (
        <Box className="container" maxWidth={{xs: "70%", sm: "700px" }}>
            <h2>Megan Anderson
            </h2> <p className="header-text">MMA</p>
            <div className="line"></div>
            <ul className="post-list">
                {homePosts.map((post) => (
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
                            </div>
                            <div className="button-sub">
                                <span className="like">Like {post.data.score}</span>
                            </div>
                            <span >Ratio {post.data.upvote_ratio}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </Box>
    );
};

export default Megan;
