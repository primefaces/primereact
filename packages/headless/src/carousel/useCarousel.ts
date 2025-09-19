import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useCarousel.props';

type CarouselAnimation = {
    start: () => void;
    stop: () => void;
    reset: () => void;
};

function useCarouselAnimation(update: () => void, render: (alpha: number) => void): CarouselAnimation {
    const frameId = React.useRef(0);
    const lastTimeStamp = React.useRef<number | null>(null);
    const accTime = React.useRef(0);
    const fixedStep = 1000 / 60;

    const animate = (timeStamp: number) => {
        if (!frameId.current) return;

        if (!lastTimeStamp.current) {
            lastTimeStamp.current = timeStamp;
            update();
            update();
        }

        const timeElapsed = timeStamp - lastTimeStamp.current;

        lastTimeStamp.current = timeStamp;
        accTime.current += timeElapsed;

        while (accTime.current >= fixedStep) {
            update();
            accTime.current -= fixedStep;
        }

        const alpha = accTime.current / fixedStep;

        render(alpha);

        if (frameId.current) frameId.current = requestAnimationFrame(animate);
    };

    const start = () => {
        if (!frameId.current) frameId.current = requestAnimationFrame(animate);
    };

    const stop = () => {
        cancelAnimationFrame(frameId.current);
        frameId.current = 0;
        lastTimeStamp.current = null;
        accTime.current = 0;
    };

    function reset(): void {
        lastTimeStamp.current = null;
        accTime.current = 0;
    }

    React.useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                reset();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    React.useEffect(() => {
        return () => stop();
    }, []);

    return { start, stop, reset };
}

const DAMPENING_FACTOR = 0.5;

const applyDampening = (delta: number) => {
    const distance = Math.abs(delta);

    const threshold = 20;

    if (distance <= threshold) {
        return delta;
    }

    const overflow = distance - threshold;

    const maxStretch = 80 / DAMPENING_FACTOR;

    const dampened = threshold + (maxStretch * overflow) / (overflow + maxStretch);

    return Math.sign(delta) * dampened;
};

type SwipeDirection = 1 | -1 | 0;
type LoopPoint = { index: number; loopPoint: number; target: () => number };

export const useCarousel = withHeadless({
    name: 'useCarousel',
    defaultProps,
    setup({ props }) {
        const { loop, orientation, align, slide, onSlideChange } = props;
        const [isSwiping, setIsSwiping] = React.useState(false);
        const [activeIndex, setActiveIndex] = React.useState(slide || 0);
        const [slideSizes, setSlideSizes] = React.useState<number[]>([]);
        const [canLoop, setCanLoop] = React.useState<boolean>(loop || false);
        const [snaps, setSnaps] = React.useState<number[]>([]);
        const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
        const [snapPoints, setSnapPoints] = React.useState<number[]>([]);
        const [slidesLength, setSlidesLength] = React.useState<number>(0);
        const [viewSize, setViewSize] = React.useState<number>(0);
        const [prevDisabled, setPrevDisabled] = React.useState<boolean>(false);
        const [nextDisabled, setNextDisabled] = React.useState<boolean>(false);

        const loopPointsRef = React.useRef<LoopPoint[]>([]);
        const swipeDirectionRef = React.useRef<SwipeDirection>(0);
        const prevDeltaRef = React.useRef<number>(0);
        const carouselRef = React.useRef<HTMLDivElement>(null);
        const slideRefs = React.useRef<(HTMLDivElement | null)[]>([]);
        const swipeStartTimeRef = React.useRef<number | null>(null);
        const swipeStartPointerRef = React.useRef<{ x: number; y: number } | null>(null);
        const prevSwipeAmountRef = React.useRef<number>(0);

        const previousPosition = React.useRef(0);
        const position = React.useRef(0);
        const target = React.useRef(0);

        const velocity = 0.09;

        const update = () => {
            previousPosition.current = position.current;

            const delta = target.current - position.current;

            if (Math.abs(delta) < 0.5) {
                position.current = target.current;
                animate.stop();

                return;
            }

            position.current += delta * velocity;
        };

        const render = (alpha: number) => {
            const value = position.current * alpha + previousPosition.current * (1 - alpha);

            if (canLoop) {
                normalizeSwipeAmount(value);
            } else {
                setSwipeAmount(value);
            }
        };

        const animate = useCarouselAnimation(update, render);

        const isVertical = React.useMemo(() => orientation === 'vertical', [orientation]);
        const contentSize = React.useMemo(() => -snaps[snaps.length - 1] + slideSizes[slidesLength - 1], [snaps, slideSizes, slidesLength]);
        const { minOffset, maxOffset } = React.useMemo(() => {
            if (!canLoop) {
                return {
                    minOffset: snaps[snaps.length - 1] + viewSize - slideSizes[slideSizes.length - 1],
                    maxOffset: snaps[0]
                };
            } else {
                return { minOffset: scrollSnaps[scrollSnaps.length - 1] - slideSizes[slideSizes.length - 1], maxOffset: scrollSnaps[0] };
            }
        }, [scrollSnaps, snaps, slideSizes, canLoop, viewSize]);

        const calculateSnaps = React.useCallback(() => {
            if (!slideRefs.current || viewSize === 0 || !carouselRef.current || viewSize === 0 || contentSize === 0) return;

            const container = carouselRef.current;
            const containerRect = container.getBoundingClientRect();
            const containerSize = container[isVertical ? 'offsetHeight' : 'offsetWidth'] || 0;

            const snaps = slideRefs.current.map((slide) => {
                return Math.abs((isVertical ? containerRect.top : containerRect.left) - (slide?.getBoundingClientRect()[isVertical ? 'top' : 'left'] || 0)) * -1;
            });

            const scrollSnaps: number[] = [];

            for (let i = 0; i < slideRefs.current.length; i++) {
                const slide = slideRefs.current[i];

                if (!slide) continue;

                const slideRect = slide.getBoundingClientRect();
                const slideSize = isVertical ? slideRect.height : slideRect.width;
                const startOffset = isVertical ? slideRect.top - containerRect.top : slideRect.left - containerRect.left;

                let offset = 0;

                if (align === 'start') {
                    offset = -startOffset;
                } else if (align === 'center') {
                    offset = -startOffset + (containerSize - slideSize) / 2;
                } else if (align === 'end') {
                    offset = -startOffset + (containerSize - slideSize);
                }

                if (canLoop) {
                    scrollSnaps.push(offset);
                } else {
                    const minClamp = Math.min(0, viewSize - contentSize);
                    const clamped = Math.max(minClamp, Math.min(0, offset));

                    scrollSnaps.push(clamped);
                }
            }

            let lastSnap: number | undefined;

            const snapPoints: number[] = [];

            scrollSnaps.forEach((snap, index) => {
                if (snap !== lastSnap) {
                    snapPoints.push(snap);
                }

                lastSnap = scrollSnaps[index];
            });

            setSnaps(snaps);
            setScrollSnaps(scrollSnaps);
            setSnapPoints(snapPoints);
        }, [isVertical, align, viewSize, canLoop, contentSize]);

        const getSwipeAmount = (): number => {
            if (!carouselRef.current) return 0;

            const value = getComputedStyle(carouselRef.current).getPropertyValue(isVertical ? '--p-swipe-amount-y' : '--p-swipe-amount-x') || '0';

            return parseFloat(value || '0') || 0;
        };

        const setSwipeAmount = (amount: number) => {
            if (!carouselRef.current) return;

            if (amount === undefined) return;

            if (isVertical) {
                carouselRef.current.style.setProperty('--p-swipe-amount-y', `${amount ?? 0}px`);
                carouselRef.current.style.setProperty('--p-swipe-amount-x', `0px`);
            } else {
                carouselRef.current.style.setProperty('--p-swipe-amount-x', `${amount ?? 0}px`);
                carouselRef.current.style.setProperty('--p-swipe-amount-y', `0px`);
            }
        };

        const normalizeSwipeAmount = React.useCallback(
            (amount: number) => {
                if (contentSize === 0 || slidesLength === 0 || !carouselRef.current) return;

                let computedAmount = amount;

                if (!canLoop) {
                    if (computedAmount < minOffset) {
                        computedAmount = minOffset + applyDampening(computedAmount - minOffset);
                    } else if (computedAmount > maxOffset) {
                        computedAmount = maxOffset + applyDampening(computedAmount - maxOffset);
                    }
                } else {
                    while (computedAmount <= minOffset) computedAmount += contentSize;
                    while (computedAmount > maxOffset) computedAmount -= contentSize;

                    if (computedAmount < minOffset) {
                        computedAmount = minOffset + applyDampening(computedAmount - minOffset);
                    } else if (computedAmount > maxOffset) {
                        computedAmount = maxOffset + applyDampening(computedAmount - maxOffset);
                    }
                }

                if (Object.is(computedAmount, -0)) computedAmount = 0;

                setSwipeAmount(computedAmount);
                updateLoopPoints();
            },
            [isVertical, canLoop, contentSize, slidesLength, minOffset, maxOffset]
        );

        const findClosestSnapIndex = (currentOffset: number, snaps: number[], contentSize: number, isLoop: boolean) => {
            let closestIndex = 0;
            let minDistance = Infinity;

            snaps.forEach((snap, index) => {
                if (isLoop) {
                    const distances = [Math.abs(currentOffset - snap), Math.abs(currentOffset - (snap + contentSize)), Math.abs(currentOffset - (snap - contentSize))];
                    const distance = Math.min(...distances);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                } else {
                    const distance = Math.abs(currentOffset - snap);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                }
            });

            return closestIndex;
        };

        const slideTo = (index?: number, offset?: number) => {
            let newIndex: number | undefined = index;

            if (viewSize === 0) return;

            if (!(index === undefined || index < 0 || index >= slidesLength)) {
                newIndex = Math.min(index, scrollSnaps.length - 1);
            } else if (offset !== undefined) {
                newIndex = findClosestSnapIndex(offset, scrollSnaps, contentSize, canLoop);
            } else {
                return;
            }

            const currentOffset = getSwipeAmount();
            let targetOffset = newIndex !== undefined ? scrollSnaps[newIndex] : offset || 0;

            if (canLoop) {
                const loopPoints = loopPointsRef.current;
                const relevantLoopPoint = loopPoints.find((point) => point.index === newIndex);

                if (relevantLoopPoint) {
                    targetOffset -= relevantLoopPoint.target();
                }
            }

            let delta = 0;

            if (canLoop && targetOffset <= maxOffset && targetOffset >= 0 && scrollSnaps[scrollSnaps.length - 1] >= currentOffset) {
                delta = -contentSize - currentOffset + targetOffset;
            } else {
                delta = targetOffset - currentOffset;
            }

            position.current = currentOffset;
            target.current = currentOffset + delta;
            animate.start();

            setActiveIndex(newIndex);

            if (onSlideChange && newIndex !== activeIndex) {
                onSlideChange({ value: newIndex });
            }
        };

        const updateLoopPoints = React.useCallback(() => {
            if (!loop || !slideRefs.current || snaps.length === 0 || slideSizes.length === 0 || scrollSnaps.length === 0 || viewSize === 0 || slidesLength === 0) return;

            const ascItems = Array.from({ length: slidesLength }, (_, index) => index);
            const descItems = Array.from({ length: slidesLength }, (_, index) => slidesLength - 1 - index);
            const tolerance = 0.5;

            function removeSlideSizes(indexes: number[], from: number): number {
                return indexes.reduce((a: number, i) => {
                    return a - slideSizes[i];
                }, from);
            }

            const slidesInGap = (indexes: number[], gap: number) => {
                return indexes.reduce((a: number[], i) => {
                    const remainingGap = removeSlideSizes(a, gap);

                    return remainingGap > 0 ? a.concat([i]) : a;
                }, []);
            };

            function findSlideBounds(offset: number) {
                return snaps.map((snap, index) => ({
                    start: snap - slideSizes[index] + tolerance + offset,
                    end: snap + viewSize - tolerance + offset
                }));
            }

            function findLoopPoints(indexes: number[], offset: number, isEndEdge: boolean) {
                const slideBounds = findSlideBounds(offset);

                return indexes.map((index) => {
                    const initial = isEndEdge ? 0 : -contentSize;
                    const altered = isEndEdge ? contentSize : 0;
                    const boundEdge = isEndEdge ? 'end' : 'start';
                    const loopPoint = slideBounds[index][boundEdge];

                    return {
                        index,
                        loopPoint,
                        target: () => (getSwipeAmount() > loopPoint ? initial : altered)
                    };
                });
            }

            const startPoints = () => {
                const gap = viewSize;
                const indexes = slidesInGap(descItems, gap);

                return findLoopPoints(indexes, contentSize, false);
            };

            const endPoints = () => {
                const gap = viewSize - scrollSnaps[0] - 1;
                const indexes = slidesInGap(ascItems, gap);

                return findLoopPoints(indexes, -contentSize, true);
            };

            const loopPoints: LoopPoint[] = startPoints().concat(endPoints());

            loopPointsRef.current = loopPoints;

            const canLoop = loopPoints.every(({ index }) => {
                const otherIndexes = ascItems.filter((i) => i !== index);

                return removeSlideSizes(otherIndexes, viewSize) <= 0.1;
            });

            setCanLoop(canLoop);

            if (!canLoop) return;

            loopPoints.forEach((loopPoint) => {
                const { target } = loopPoint;
                const shiftLocation = target();

                // if (shiftLocation === swipeAmount[swipeAxis]) return;

                const slide = slideRefs.current[loopPoint.index];

                if (slide) {
                    const transformValue = `translate3d(${isVertical ? '0px' : `${shiftLocation}px`}, ${isVertical ? `${shiftLocation}px` : '0px'}, 0px)`;

                    slide.style.transform = transformValue;
                }
            });
        }, [loop, orientation, snaps, slideSizes, scrollSnaps, slidesLength, viewSize, contentSize, isVertical]);

        const addSlideRef = (el: HTMLDivElement | null) => {
            if (el && !slideRefs.current.includes(el)) {
                slideRefs.current.push(el);
            }
        };

        const handlePrev = () => {
            if (!canLoop && getSwipeAmount() >= maxOffset) return;

            animate.stop();
            const prevIndex = canLoop ? (activeIndex - 1 + scrollSnaps.length) % scrollSnaps.length : Math.max(0, activeIndex - 1);

            slideTo(prevIndex);
        };

        const handleNext = () => {
            if (!canLoop && getSwipeAmount() <= minOffset) return;

            animate.stop();
            const nextIndex = canLoop ? (activeIndex + 1) % scrollSnaps.length : Math.min(scrollSnaps.length - 1, activeIndex + 1);

            slideTo(nextIndex);
        };

        const handlePointerDown = (event: PointerEvent) => {
            if (event.button === 2) return;

            animate.stop();
            (event.target as HTMLElement).setPointerCapture(event.pointerId);

            setIsSwiping(true);

            swipeStartTimeRef.current = new Date().getTime();
            swipeStartPointerRef.current = { x: event.clientX, y: event.clientY };
            prevSwipeAmountRef.current = getSwipeAmount();
        };

        const handlePointerMove = (event: PointerEvent) => {
            if (!isSwiping || !swipeStartPointerRef.current || !swipeStartTimeRef.current || !carouselRef.current) return;

            const delta = isVertical ? event.clientY - swipeStartPointerRef.current.y : event.clientX - swipeStartPointerRef.current.x;

            const prevDelta = prevDeltaRef.current;

            if (delta > prevDelta) {
                swipeDirectionRef.current = 1;
            } else if (delta < prevDelta) {
                swipeDirectionRef.current = -1;
            }

            prevDeltaRef.current = delta;

            const prevSwipeAmount = prevSwipeAmountRef.current;

            const totalOffset = prevSwipeAmount + delta;

            carouselRef.current.style.userSelect = 'none';
            normalizeSwipeAmount(totalOffset);
        };

        const handlePointerUp = (event: PointerEvent) => {
            if (event.target instanceof HTMLElement) {
                event.target.releasePointerCapture(event.pointerId);
            }

            if (!swipeStartPointerRef.current || !swipeStartTimeRef.current || !carouselRef.current) {
                setIsSwiping(false);

                return;
            }

            const elapsed = Date.now() - swipeStartTimeRef.current;
            const distance = getSwipeAmount() - prevSwipeAmountRef.current;
            const velocity = Math.abs(distance / elapsed);

            if (velocity > 0.3 && Math.abs(distance) < 25) {
                slideTo((activeIndex + swipeDirectionRef.current + slidesLength) % slidesLength);
            } else {
                const currentOffset = getSwipeAmount();
                const closestIndex = findClosestSnapIndex(currentOffset, scrollSnaps, contentSize, canLoop);

                slideTo(closestIndex);
            }

            carouselRef.current.style.userSelect = '';
            setIsSwiping(false);
            swipeStartPointerRef.current = null;
            swipeStartTimeRef.current = null;
        };

        const handleClick = (event: MouseEvent) => {
            if (isSwiping) {
                event.preventDefault();
                event.stopPropagation();
            }
        };

        React.useEffect(() => {
            calculateSnaps();
        }, [calculateSnaps]);

        React.useEffect(() => {
            if (scrollSnaps.length === 0 || snapPoints.length === 0 || contentSize === 0) return;

            slideTo(props.slide !== undefined ? props.slide : 0);
        }, [props.slide, scrollSnaps, snapPoints, canLoop, contentSize]);

        React.useEffect(() => {
            if (canLoop) return;

            setPrevDisabled(activeIndex === 0 && !canLoop);
            setNextDisabled(activeIndex === snapPoints.length - 1 && !canLoop);
        }, [activeIndex, canLoop, snapPoints]);

        React.useEffect(() => {
            setSlidesLength(slideRefs.current.length);
        }, []);

        React.useEffect(() => {
            setViewSize(carouselRef.current?.[isVertical ? 'offsetHeight' : 'offsetWidth'] || 0);

            const observer = new ResizeObserver(() => {
                setViewSize(carouselRef.current?.[isVertical ? 'offsetHeight' : 'offsetWidth'] || 0);
            });

            if (carouselRef.current) {
                observer.observe(carouselRef.current);
            }

            return () => {
                observer.disconnect();
            };
        }, [carouselRef]);

        React.useEffect(() => {
            slideRefs.current = [];
        }, []);

        React.useEffect(() => {
            if (!slideRefs.current) return;

            const observer = new ResizeObserver((entries) => {
                entries.forEach((entry) => {
                    const index = slideRefs.current.findIndex((slide) => slide === entry.target);

                    if (index === -1) return;

                    setSlideSizes((prev) => {
                        const newSizes = [...prev];

                        newSizes[index] = entry.contentRect[isVertical ? 'height' : 'width'];

                        return newSizes;
                    });
                });
            });

            slideRefs.current.forEach((slideEl) => {
                if (slideEl) observer.observe(slideEl);
            });

            return () => {
                observer.disconnect();
            };
        }, [isVertical]);

        React.useLayoutEffect(() => {
            if (!slideRefs.current?.length) return;

            setSlideSizes(slideRefs.current.map((el) => (el ? (isVertical ? el.getBoundingClientRect().height : el.getBoundingClientRect().width) : 0)));
        }, [isVertical]);

        const state = {
            isSwiping,
            slideSizes,
            canLoop,
            snaps,
            scrollSnaps,
            activeIndex,
            prevDisabled,
            nextDisabled,
            snapPoints
        };

        return {
            state,
            handlePrev,
            handleNext,
            handlePointerDown,
            handlePointerMove,
            handlePointerUp,
            addSlideRef,
            slideTo,
            handleClick,
            carouselRef
        };
    }
});
