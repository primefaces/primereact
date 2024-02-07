import React, { useContext } from 'react';
import AppContentContext from '../layout/appcontentcontext';

const TemplateFeatures = ({ featuresData, displayType }) => {
    const { darkMode } = useContext(AppContentContext);

    const renderHorizontalFeatures = () => {
        return (
            <div className="template-features-horizontal-wrapper">
                <div className="template-features-horizontal">
                    {featuresData.map((data, i) => (
                        <div key={i} className="template-features-horizontal-card">
                            <div className="template-features-horizontal-card-top">
                                <img src={darkMode ? data.darkSrc || data.src : data.src} alt={data.title}></img>
                            </div>
                            <div className="template-features-horizontal-card-bottom">
                                <h5 className="template-features-horizontal-card-bottom-title">{data.title}</h5>
                                <p className="template-features-horizontal-card-bottom-description">{data.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderVerticalFeatures = () => {
        const firstColumnData = featuresData.slice(0, Math.ceil(featuresData.length / 2));
        const secondColumnData = featuresData.slice(Math.ceil(featuresData.length / 2));

        return (
            <div className="template-features-vertical-wrapper">
                <div className="template-features-vertical">
                    {Array(2)
                        .fill(null)
                        .map((_, i) => (
                            <div key={i} className="template-features-vertical-col">
                                {(i === 0 ? firstColumnData : secondColumnData).map((data, j) => (
                                    <div key={j} className={`template-features-vertical-card `}>
                                        <div className="template-features-vertical-card-image">
                                            <img src={darkMode ? data.darkSrc || data.src : data.src} alt={data.title} />
                                        </div>
                                        <h2>{data.title}</h2>
                                        <p>{data.description}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        );
    };

    return <div className="template-features">{displayType === 'vertical' ? renderVerticalFeatures() : renderHorizontalFeatures()}</div>;
};

export default TemplateFeatures;
