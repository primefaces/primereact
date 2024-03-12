import React from 'react';

const TemplateRelated = ({ relatedData }) => {
    return (
        <div className="template-related-wrapper">
            <div className="template-related">
                <h2 className="template-related-title">Related Layouts</h2>
                <div className="template-related-slide">
                    {relatedData.map((data, i) => (
                        <a href={data.href} target="_blank" key={i} className="template-related-slide-card">
                            <img src={data.src} alt={'Related Image ' + i} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TemplateRelated;
