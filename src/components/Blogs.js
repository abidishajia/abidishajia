import React from 'react';
import { Consumer } from '../context'
import Blog from './Blog';
import '../styles/Blog.css';


const Blogs = () => {
    return (
        <div className="blogsWrapper">
            <h3>Blogs</h3>

            <ul className="row">
                <Consumer>
                    {(value) => {
                        return value.articles.map(article => {
                            return <Blog key={article.title} article={article} />
                        })
                    }}
                </Consumer>
            </ul>
        </div>

    );
}

export default Blogs;