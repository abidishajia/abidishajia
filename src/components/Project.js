import React from 'react';
import '../styles/Project.css';


const Project = (props) => {
    const { title, description, link, tags, type } = props.project;
    return (
        <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
                <div className="card-header">
                    {title}
                </div>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <p>
                        {tags.includes('React') ? <i className="fab fa-react" /> : ""}

                        {tags.includes('JS') ? <i className="fab fa-js" /> : ""}

                        {tags.includes('Python') ? <i className="fab fa-python"></i> : ""}

                        {tags.includes('SQLAlchemy') ? <i className="fas fa-database"></i> : ""}
                    </p>
                    <a href={link} className="btn btn-primary-outline">
                        {type === 'live' ? 'View' : 'View Code'}
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Project;
