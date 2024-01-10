import React, { useRef } from 'react';
import useAnimatedFeatures from './useAnimatedFeatures';
import TemplateFeaturesAnimationInline from './TemplateFeaturesAnimationInline';

const TemplateFeaturesAnimation = ({ featuresData, title, animationSeconds = 5000 }) => {
    const animationRef = useRef(null);
    const { selectedID, handleClick } = useAnimatedFeatures(animationRef, featuresData.length, animationSeconds);

    return (
        <div className="template-features-animation-wrapper">
            {!!title && <div className="template-features-animation-title">{title}</div>}
            <div className="template-features-animation" ref={animationRef}>
                <div className="template-features-animation-left">
                    {featuresData.map((data, i) => {
                        const orderNumber = (i + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });

                        return (
                            <div key={i} className={`template-features-animation-left-card ${selectedID === data.id ? 'template-features-animation-left-card-active' : ''}`} onClick={() => handleClick(data.id)}>
                                <div className="template-features-animation-left-card-order">
                                    <div>{orderNumber}</div>
                                    <div>{orderNumber}</div>
                                    <div>{orderNumber}</div>
                                </div>
                                <div className="template-features-animation-left-card-content">
                                    <h5>{data.title}</h5>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="template-features-animation-right">
                    {featuresData[selectedID - 1]?.type === 'inline-animation' ? (
                        <TemplateFeaturesAnimationInline
                            inlineFeaturesData={featuresData[selectedID - 1]?.inlineFeaturesData}
                            parentHandleClick={handleClick}
                            parentID={selectedID}
                            inlineSeconds={animationSeconds / featuresData[selectedID - 1]?.inlineFeaturesData.length}
                        />
                    ) : (
                        <img src={featuresData[selectedID - 1]?.src} alt="Animation Feature Image" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TemplateFeaturesAnimation;
