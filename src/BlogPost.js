import React, { Component, useState, useEffect } from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import { Link } from "react-router-dom";
import { default as Header } from "./Header.js";
import axios from 'axios';

const BlogContent = () => {
    const [page, setPage] = useState([]);

    useEffect(() => {

        const fetchBlogContent = async () => {
            try {
                const response = await axios.get('http://jakes-blog.local/wp-json/wp/v2/pages');
                setPage(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching page:', error);
            }
        };

        fetchBlogContent();
        
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

function blogContent() {
    return (
        <div className="content">
            <div className="flexbox">
                <BlogContent />
            </div>
        </div>
    );
}

export default blogContent;