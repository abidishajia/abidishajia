import React, { Component } from 'react';
import styled from 'styled-components';


class Blog extends Component {

    render() { 
        const {title, org, link,} = this.props.article;
        //console.log(this.props.article.title)
        return ( 
            <BlogWrapper className="col-sm-12 col-md-12">
                <div className="card">
                    <div className="img-container p-5">
                       <p>{title}  - {org}</p>
                       <span> <a href={link} target="_blank" rel="noopener noreferrer">View Article </a> </span>
                    </div>
                </div>
            </BlogWrapper>
         );
    }
}
 
export default Blog;


const BlogWrapper = styled.div`
.card{
    border-color: var(--mainSeaGreen);
    transition: all 0.3s linear;
    margin-bottom: 20px;
    height: 150px;
}

.card-footer{
    background: var(--mainSeaGreen);
    border-top: transparent;
    transition: all 0.3s linear;
}

&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.4);
        box-shadow: 2px 2px 2px 5px 0 rgba(0,0,0,0.2);
        transform: scale(1.05); 

    }
    .card-footer{
        background: rgb(23, 112, 100);
    }
}
.project-title{
    font-family:  cursive;
    font-weight: bold;
    color: #eecc3a;
    text-transform: uppercase;
}

i{
    color: var(--mainDark);
    font-size: 1.2rem;
}

p, span a{
    font-family: 'Caveat';
    font-size: 1.4rem;
}
`
