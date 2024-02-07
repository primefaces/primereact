// useAnimatedFeatures.js
import React, { useEffect, useState } from 'react';
import useVisible from './useVisible';

const useAnimatedFeatures = (animationRef, arrayLength, seconds = 10000) => {
    const [selectedID, setSelectedID] = useState(1);
    const [intervalIds, setIntervalIds] = useState([]);
    const [cancelInterval, setCancelInterval] = useState(false);
    const [hoveredID, setHoveredID] = useState(null);
    const isVisible = useVisible(animationRef);

    const clearAllIntervals = () => {
        if (intervalIds.length <= 0) return;
        intervalIds.forEach((intervalId) => window.clearInterval(intervalId));
        setIntervalIds([]);
    };

    const createInterval = () => {
        const interval = setInterval(() => {
            setSelectedID((prev) => (prev === arrayLength ? 1 : prev + 1));
        }, seconds);

        setIntervalIds((prev) => [...prev, interval]);
    };

    const handleClick = (cardId) => {
        clearAllIntervals();
        setSelectedID(cardId);
        setCancelInterval(true);
    };

    const handleHover = (cardId, type) => {
        if (cancelInterval || cardId !== selectedID) return;
        clearAllIntervals();

        if (type === 'onMouseLeave') {
            setSelectedID(cardId);
            createInterval();
        }
    };

    useEffect(() => {
        clearAllIntervals();

        if (isVisible) {
            createInterval();
        } else {
            clearAllIntervals();
            setSelectedID(1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [animationRef, isVisible]);

    useEffect(() => {
        if (!hoveredID) null;
        handleHover(hoveredID, 'onMouseEnter');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedID]);

    return { selectedID, setHoveredID, handleClick, handleHover };
};

export default useAnimatedFeatures;
