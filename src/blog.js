import React, { Component, useState, useEffect } from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import { default as Header } from "./Header.js";
import axios from 'axios';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://jakes-blog.local/wp-json/wp/v2/pages');
                setPosts(response.data);
                // console.log(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();

    }, []);

    return (
        <div class="col">
            <p>This is a page to try displaying things from WP</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title.rendered}</li>
                ))}
            </ul>
        </div>
    );
};

function Content() {
    return (
        <div className="content">
            <div className="flexbox">
                <BlogPosts />
            </div>
        </div>
    );
}

export default Content;