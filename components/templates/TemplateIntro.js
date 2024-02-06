import React from 'react';

const TemplateIntro = ({ title, description, imageURL }) => {
    return (
        <div className="template-intro">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="template-intro-image">
                <img src={imageURL} alt="Template Hero Image" />
            </div>
        </div>
    );
};

export default TemplateIntro;
