import { withHeadless } from '@primereact/core/headless';
import type { CarouselInstance } from '@primereact/types/shared/carousel';
import * as React from 'react';
import { defaultProps } from './useGallery.props';

export const useGallery = withHeadless({
    name: 'useGallery',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const { activeIndex: activeIndexProp = 0, onActiveIndexChange = undefined } = props;
        const contentRef = React.useRef<HTMLDivElement>(null);
        const itemsRef = React.useRef<React.RefObject<HTMLDivElement>[]>([]);
        const toolbarRef = React.useRef<HTMLDivElement>(null);
        const thumbnailRef = React.useRef<CarouselInstance | null>(null);
        const prevRef = React.useRef<HTMLButtonElement>(null);
        const nextRef = React.useRef<HTMLButtonElement>(null);
        const [, forceUpdate] = React.useState(0);
        const [activeIndex, setActiveIndex] = React.useState(activeIndexProp);

        const [isFullscreen, setIsFullscreen] = React.useState(false);

        React.useEffect(() => {
            setActiveIndex(activeIndexProp);
        }, [activeIndexProp]);

        const registerItem = (ref: HTMLDivElement | null): number => {
            if (!ref) return -1;

            const existingIndex = itemsRef.current.findIndex((item) => item.current === ref);

            if (existingIndex === -1) {
                itemsRef.current.push({ current: ref });
                forceUpdate((x) => x + 1);

                return itemsRef.current.length - 1;
            }

            return existingIndex;
        };

        const handleNext = () => {
            const newIndex = (activeIndex + 1) % itemsRef.current.length;

            setActiveIndex(newIndex);
            onActiveIndexChange?.({ originalEvent: undefined as unknown as React.SyntheticEvent, value: newIndex });
        };

        const handlePrev = () => {
            const newIndex = (activeIndex - 1 + itemsRef.current.length) % itemsRef.current.length;

            setActiveIndex(newIndex);
            onActiveIndexChange?.({ originalEvent: undefined as unknown as React.SyntheticEvent, value: newIndex });
        };

        const createCustomEvent = (action: string) => () => {
            const activeItem = itemsRef.current[activeIndex]?.current;

            if (activeItem) {
                const event = new CustomEvent('gallery-' + action, {
                    detail: { action: action }
                });

                activeItem.dispatchEvent(event);
            }
        };

        const toggleFullScreen = () => {
            if (!elementRef.current) return;

            if (!isFullscreen) {
                Object.assign(elementRef.current.style, {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100dvw',
                    height: '100dvh',
                    zIndex: '9999'
                });

                document.body.style.overflow = 'hidden';

                setIsFullscreen(true);
            } else {
                Object.assign(elementRef.current.style, {
                    position: 'relative',
                    top: '',
                    left: '',
                    width: '',
                    height: '',
                    zIndex: ''
                });

                document.body.style.overflow = 'auto';

                setIsFullscreen(false);
            }

            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 100);
        };

        const actions = {
            zoomIn: createCustomEvent('zoom-in'),
            zoomOut: createCustomEvent('zoom-out'),
            rotateLeft: createCustomEvent('rotate-left'),
            rotateRight: createCustomEvent('rotate-right'),
            flipX: createCustomEvent('flip-x'),
            flipY: createCustomEvent('flip-y'),
            download: createCustomEvent('download'),
            next: handleNext,
            prev: handlePrev,
            toggleFullScreen: toggleFullScreen
        };

        const handleClickAction = React.useCallback(
            (action?: string) => {
                if (action && actions[action as keyof typeof actions]) {
                    actions[action as keyof typeof actions]();
                }
            },
            [actions]
        );

        const state = {
            isFullscreen,
            activeIndex
        };

        return {
            state,
            registerItem,
            handleNext,
            handlePrev,
            createCustomEvent,
            toggleFullScreen,
            handleClickAction,
            actions,
            contentRef,
            toolbarRef,
            thumbnailRef,
            prevRef,
            nextRef
        };
    }
});
