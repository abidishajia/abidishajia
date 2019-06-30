import React, { Component } from 'react';
import { Consumer } from '../context'
import styled from 'styled-components'
import Blog from './Blog'


class Blogs extends Component {
    render() {
        console.log()
        return (
            <BlogsWrapper>
                <h3>Blogs</h3>
                <div className="row">
                    <Consumer>
                        {(value) => {
                            return value.articles.map(article => {
                                return <Blog key={article.id} article={article} />
                            })
                        }}
                    </Consumer>
                </div>
            </BlogsWrapper>

        );
    }
}

const BlogsWrapper = styled.div`
    .row{
        margin-top: 70px;
    }

    h3{
        font-family:'Kalam', cursive;
        font-weight:bolder;
        color: var(--mainPink);
        text-transform: uppercase;
        text-align: center;
        margin-top: 20px;
        font-size: 3.4rem;
    }
`



export default Blogs;