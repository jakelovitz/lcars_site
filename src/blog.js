import React, { Component, useState, useEffect } from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import { default as Header } from "./Header.js";
import axios from 'axios';

const BlogPosts = () => {
    const [page, setPage] = useState([]);

    useEffect(() => {

        const fetchBlogPosts = async () => {
            try {
                const response = await axios.get('http://jakes-blog.local/wp-json/wp/v2/pages');
                setPage(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching page:', error);
            }
        };

        fetchBlogPosts();
        
    }, []);

    return (
        <div class="col">
        <p>This is a page to try displaying things from WP!!</p>
        {page.map((post) => (
        <div>
            <li key={post.id}>{post.title.rendered}</li>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        ))}
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