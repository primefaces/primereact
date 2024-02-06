import React from 'react';

const TemplateLicense = ({ license }) => {
    return (
        <div className="template-license-wrapper">
            <div className="template-license">
                <div className="template-license-cards">
                    {license.licenseDetails.map(({ title, price, included }, i) => (
                        <div key={i} className="template-license-card">
                            <span>{title}</span>
                            <h2>{price}</h2>
                            <div className="template-license-card-included">
                                {included.map((txt, j) => (
                                    <p key={j}>{txt}</p>
                                ))}
                            </div>
                            <a href="https://www.primefaces.org/layouts/licenses" target="_blank">
                                <button>License Details</button>
                            </a>
                        </div>
                    ))}
                </div>
                <p className="template-license-description">{license.description}</p>
                <p className="template-license-visit">
                    Visit the 
                    <a href={license.documentLink} target="_blank">
                        official documentation
                    </a>
                     for more information.
                </p>
            </div>
        </div>
    );
};

export default TemplateLicense;
