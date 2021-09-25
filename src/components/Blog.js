import React from 'react';
import '../styles/Blog.css';


const Blog = (props) => {

    const { title, org, link, } = props.article;
    return (
        <li className="col-sm-12 col-md-12 blogWrapper">
            <a href={link} target="_blank" rel="noopener noreferrer">
                {title}
            </a> - {org}
        </li>
    );

}

export default Blog;

