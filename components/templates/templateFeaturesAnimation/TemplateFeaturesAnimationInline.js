import React, { useRef } from 'react';
import useAnimatedFeatures from './useAnimatedFeatures';

const TemplateFeaturesAnimationInline = ({ inlineFeaturesData, parentHandleClick, parentHandleHover, parentID, inlineSeconds = 1000 }) => {
    const animationInlineRef = useRef(null);
    const { selectedID, setHoveredID, handleClick, handleHover } = useAnimatedFeatures(animationInlineRef, inlineFeaturesData.length, inlineSeconds);

    const handleBtnClick = (id) => {
        handleClick(id);
        parentHandleClick(parentID);
    };

    const enterCardArea = (id) => {
        setHoveredID(id);
        handleHover(id, 'onMouseEnter');
        parentHandleHover(parentID, 'onMouseEnter');
    };

    const leaveCardArea = (id) => {
        setHoveredID(null);
        handleHover(id, 'onMouseLeave');
        parentHandleHover(parentID, 'onMouseLeave');
    };

    return (
        <div className="template-features-animation-right-inline" ref={animationInlineRef}>
            <div className="template-features-animation-right-inline-tabs">
                {inlineFeaturesData.map((data, i) => (
                    <button
                        onMouseEnter={() => enterCardArea(data.id)}
                        onMouseLeave={() => leaveCardArea(data.id)}
                        className={`${!!(data.id === selectedID) && 'template-features-animation-right-inline-tabs-btnActive'}`}
                        onClick={() => handleBtnClick(data.id)}
                        key={i}
                    >
                        {data.title}
                    </button>
                ))}
            </div>
            <div className="template-features-animation-right-inline-image">
                <img src={inlineFeaturesData[selectedID - 1].src} alt="Animation Inline Feature Image" />
            </div>
        </div>
    );
};

export default TemplateFeaturesAnimationInline;
