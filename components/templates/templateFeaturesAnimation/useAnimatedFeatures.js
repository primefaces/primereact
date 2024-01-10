// useAnimatedFeatures.js
import { useEffect, useState } from 'react';
import useVisible from './useVisible';

const useAnimatedFeatures = (animationRef, arrayLength, seconds = 5000) => {
    const [selectedID, setSelectedID] = useState(1);
    const [intervalIds, setIntervalIds] = useState([]);
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
        createInterval();
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
    }, [isVisible]);

    return { selectedID, handleClick };
};

export default useAnimatedFeatures;
