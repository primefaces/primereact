import { withHeadless } from '@primereact/core/headless';
import { useGalleryContext } from 'primereact/gallery';
import * as React from 'react';
import { defaultItemProps } from './useGalleryItem.props';

export const useGalleryItem = withHeadless({
    name: 'useGalleryItem',
    defaultProps: defaultItemProps,
    setup: ({ props, elementRef }) => {
        const { normalScale = 1, zoomedScale = 3 } = props;

        const gallery = useGalleryContext();
        const [index, setIndex] = React.useState(-1);
        const [isActive, setIsActive] = React.useState(false);
        const [position, setPosition] = React.useState({ x: 0, y: 0 });
        const [scale, setScale] = React.useState(1);
        const [rotation, setRotation] = React.useState(0);
        const [flip, setFlip] = React.useState({ x: 1, y: 1 });

        const [isDragging, setIsDragging] = React.useState(false);
        const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
        const [hasDragged, setHasDragged] = React.useState(false);

        const pointerDataRef = React.useRef<Map<number, { x: number; y: number }>>(new Map());
        const lastDistanceRef = React.useRef(0);

        const calculateItemSize = React.useCallback(() => {
            if (!gallery?.contentRef.current || !elementRef.current) return;

            const contentRect = gallery?.contentRef.current.getBoundingClientRect();

            const imageElement = elementRef.current.firstElementChild as HTMLImageElement;

            if (!imageElement) return;

            let naturalWidth = imageElement.naturalWidth || imageElement.offsetWidth;
            let naturalHeight = imageElement.naturalHeight || imageElement.offsetHeight;

            if (naturalWidth === 0 || naturalHeight === 0) return;

            const isRotated = Math.abs(rotation) % 180 === 90;

            if (isRotated) {
                [naturalWidth, naturalHeight] = [naturalHeight, naturalWidth];
            }

            const naturalAspectRatio = naturalWidth / naturalHeight;
            const contentAspectRatio = contentRect.width / contentRect.height;

            let targetWidth, targetHeight;

            if (naturalAspectRatio > contentAspectRatio) {
                targetWidth = Math.min(contentRect.width * 0.99, naturalWidth);
                targetHeight = targetWidth / naturalAspectRatio;
            } else {
                targetHeight = Math.min(contentRect.height * 0.99, naturalHeight);
                targetWidth = targetHeight * naturalAspectRatio;
            }

            if (isRotated) {
                imageElement.style.width = `${targetHeight}px`;
                imageElement.style.height = `${targetWidth}px`;
                elementRef.current.style.width = `${targetHeight > 0 ? targetHeight : 'auto'}px`;
                elementRef.current.style.height = `${targetWidth > 0 ? targetWidth : 'auto'}px`;
            } else {
                imageElement.style.width = `${targetWidth}px`;
                imageElement.style.height = `${targetHeight}px`;
                elementRef.current.style.width = `${targetWidth > 0 ? targetWidth : 'auto'}px`;
                elementRef.current.style.height = `${targetHeight > 0 ? targetHeight : 'auto'}px`;
            }

            elementRef.current.style.aspectRatio = `${naturalWidth / naturalHeight}`;
        }, [gallery?.contentRef, rotation]);

        const calculateConstraints = React.useCallback(
            (targetScale?: number) => {
                if (!gallery?.contentRef.current || !elementRef.current) return { minX: 0, maxX: 0, minY: 0, maxY: 0 };

                const contentRect = gallery?.contentRef.current.getBoundingClientRect();
                const scaleToUse = targetScale !== undefined ? targetScale : scale;

                const itemElement = elementRef.current.firstElementChild as HTMLElement;

                if (!itemElement) return { minX: 0, maxX: 0, minY: 0, maxY: 0 };

                let originalWidth = itemElement.offsetWidth;
                let originalHeight = itemElement.offsetHeight;

                const isRotated = Math.abs(rotation) % 180 === 90;

                if (isRotated) {
                    [originalWidth, originalHeight] = [originalHeight, originalWidth];
                }

                const scaledWidth = originalWidth * scaleToUse;
                const scaledHeight = originalHeight * scaleToUse;

                const contentCenterX = contentRect.width / 2;
                const contentCenterY = contentRect.height / 2;

                const halfScaledWidth = scaledWidth / 2;
                const halfScaledHeight = scaledHeight / 2;

                const maxX = halfScaledWidth > contentCenterX ? halfScaledWidth - contentCenterX : 0;
                const minX = halfScaledWidth > contentCenterX ? -(halfScaledWidth - contentCenterX) : 0;

                const maxY = halfScaledHeight > contentCenterY ? halfScaledHeight - contentCenterY : 0;
                const minY = halfScaledHeight > contentCenterY ? -(halfScaledHeight - contentCenterY) : 0;

                return { minX, maxX, minY, maxY };
            },
            [gallery?.contentRef, scale, rotation]
        );

        const zoomIn = React.useCallback(() => {
            setScale(zoomedScale);

            const hiddenStyles = {
                visibility: 'hidden',
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                touchAction: 'none'
            };

            if (gallery?.toolbarRef.current) {
                Object.assign(gallery?.toolbarRef.current.style, hiddenStyles);
            }

            if (gallery?.thumbnailRef.current) {
                // @ts-expect-error - thumbnailRef may not have elementRef property
                Object.assign(gallery?.thumbnailRef.current.elementRef.current.style, hiddenStyles);
            }

            if (gallery?.prevRef.current) {
                Object.assign(gallery.prevRef.current.style, hiddenStyles);
            }

            if (gallery?.nextRef.current) {
                Object.assign(gallery.nextRef.current.style, hiddenStyles);
            }

            if (elementRef.current) {
                elementRef.current.style.cursor = 'zoom-out';
                elementRef.current.style.pointerEvents = 'auto';
            }
        }, [zoomedScale, gallery?.toolbarRef, gallery?.thumbnailRef, gallery?.prevRef, gallery?.nextRef]);

        const zoomOut = React.useCallback(() => {
            setScale(normalScale);
            setPosition({ x: 0, y: 0 });

            const resetStyles = {
                visibility: '',
                opacity: '',
                pointerEvents: '',
                userSelect: '',
                touchAction: ''
            };

            if (gallery?.toolbarRef.current) {
                Object.assign(gallery.toolbarRef.current.style, resetStyles);
            }

            if (gallery?.thumbnailRef.current) {
                // @ts-expect-error - thumbnailRef may not have elementRef property
                Object.assign(gallery.thumbnailRef.current.elementRef.current.style, resetStyles);
            }

            if (gallery?.prevRef.current) {
                Object.assign(gallery.prevRef.current.style, resetStyles);
            }

            if (gallery?.nextRef.current) {
                Object.assign(gallery.nextRef.current.style, resetStyles);
            }

            if (elementRef.current) {
                elementRef.current.style.cursor = 'zoom-in';
                elementRef.current.style.pointerEvents = 'auto';
            }
        }, [normalScale, gallery?.toolbarRef, gallery?.thumbnailRef, gallery?.prevRef, gallery?.nextRef]);

        const rotateLeft = () => {
            if (!elementRef.current) return;

            elementRef.current.style.transition = 'none';
            setRotation((prev) => prev - 90);
            setTimeout(() => {
                if (elementRef.current) {
                    elementRef.current.style.transition = '';
                }
            }, 0);
        };

        const rotateRight = () => {
            if (!elementRef.current) return;

            elementRef.current.style.transition = 'none';
            setRotation((prev) => prev + 90);
            setTimeout(() => {
                if (elementRef.current) {
                    elementRef.current.style.transition = '';
                }
            }, 0);
        };

        const flipX = () => {
            setFlip((prev) => ({ ...prev, x: Math.sign(prev.x) * -1 }));
        };

        const flipY = () => {
            setFlip((prev) => ({ ...prev, y: Math.sign(prev.y) * -1 }));
        };

        const download = () => {
            if (!elementRef.current) return;

            const imageElement = elementRef.current.querySelector('img') as HTMLImageElement;

            if (!imageElement || !imageElement.src) return;

            const link = document.createElement('a');

            link.href = imageElement.src;

            const urlParts = imageElement.src.split('/');
            const filename = urlParts[urlParts.length - 1] || 'image.jpg';

            link.download = filename;
            link.target = '_blank';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        const handleClick = React.useCallback(
            (e: React.MouseEvent) => {
                if (hasDragged) {
                    setHasDragged(false);

                    return;
                }

                if (scale === normalScale) {
                    if (elementRef.current) {
                        const itemRect = elementRef.current.getBoundingClientRect();

                        const itemCenterX = itemRect.width / 2;
                        const itemCenterY = itemRect.height / 2;

                        const clickX = e.clientX - itemRect.left;
                        const clickY = e.clientY - itemRect.top;

                        const offsetX = itemCenterX - clickX;
                        const offsetY = itemCenterY - clickY;

                        const zoomOffsetX = offsetX * (zoomedScale - 1);
                        const zoomOffsetY = offsetY * (zoomedScale - 1);

                        const constraints = calculateConstraints(zoomedScale);
                        const constrainedX = Math.max(constraints.minX, Math.min(constraints.maxX, zoomOffsetX));
                        const constrainedY = Math.max(constraints.minY, Math.min(constraints.maxY, zoomOffsetY));

                        setPosition({ x: constrainedX, y: constrainedY });
                    }

                    zoomIn();
                } else {
                    zoomOut();
                }
            },
            [hasDragged, normalScale, zoomedScale, calculateConstraints, scale, zoomIn, zoomOut]
        );
        const handleDragStart = React.useCallback((e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault();
        }, []);

        const handlePointerDown = React.useCallback(
            (e: React.PointerEvent) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                pointerDataRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

                if (scale > 1) {
                    if (e.pointerType === 'mouse') {
                        setIsDragging(true);
                        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
                        setHasDragged(false);
                    } else if (e.pointerType === 'touch' && pointerDataRef.current.size === 1) {
                        setIsDragging(true);
                        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
                        setHasDragged(false);
                        lastDistanceRef.current = 0;
                    }
                }

                if (e.pointerType === 'touch' && pointerDataRef.current.size === 1) {
                    lastDistanceRef.current = 0;
                }
            },
            [scale, position]
        );

        const handlePointerMove = React.useCallback(
            (e: React.PointerEvent) => {
                if (!pointerDataRef.current.has(e.pointerId) || !elementRef.current) return;

                elementRef.current.style.transition = 'none';

                // Preserve cursor during move
                const currentCursor = elementRef.current.style.cursor;

                if (!currentCursor) {
                    elementRef.current.style.cursor = scale > normalScale ? 'zoom-out' : 'zoom-in';
                }

                pointerDataRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

                const pointers = Array.from(pointerDataRef.current.values());

                if (pointers.length === 2) {
                    const [p1, p2] = pointers;
                    const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);

                    if (lastDistanceRef.current > 0) {
                        const delta = (distance - lastDistanceRef.current) * 0.01;

                        if (Math.abs(delta) > 0.01) {
                            const newScale = scale === normalScale ? zoomedScale : normalScale;

                            const constraints = calculateConstraints(newScale);
                            const constrainedX = Math.max(constraints.minX, Math.min(constraints.maxX, position.x));
                            const constrainedY = Math.max(constraints.minY, Math.min(constraints.maxY, position.y));

                            setPosition({ x: constrainedX, y: constrainedY });

                            setScale(newScale);
                        }
                    }

                    lastDistanceRef.current = distance;
                } else if (pointers.length === 1 && isDragging) {
                    const pointer = pointers[0];
                    const newX = pointer.x - dragStart.x;
                    const newY = pointer.y - dragStart.y;
                    const constraints = calculateConstraints();

                    const computedX = Math.max(constraints.minX, Math.min(constraints.maxX, newX));
                    const computedY = Math.max(constraints.minY, Math.min(constraints.maxY, newY));

                    setPosition({
                        x: computedX,
                        y: computedY
                    });
                    setHasDragged(true);
                }
            },
            [isDragging, dragStart, scale, normalScale, zoomedScale, position, calculateConstraints]
        );

        const handlePointerUp = React.useCallback((e: React.PointerEvent) => {
            if (!elementRef.current) return;

            elementRef.current.style.transition = '';
            // Restore proper cursor after interaction
            elementRef.current.style.cursor = scale > normalScale ? 'zoom-out' : 'zoom-in';
            e.currentTarget.releasePointerCapture(e.pointerId);
            pointerDataRef.current.delete(e.pointerId);

            if (pointerDataRef.current.size < 2) lastDistanceRef.current = 0;

            if (pointerDataRef.current.size === 0) {
                setIsDragging(false);
            }
        }, []);

        React.useEffect(() => {
            if (scale <= 1) {
                setPosition({ x: 0, y: 0 });
            }
        }, [scale]);

        React.useEffect(() => {
            if (gallery?.state.activeIndex === index && document.readyState === 'complete') {
                calculateItemSize();
            }
        }, [gallery?.state.activeIndex, index, calculateItemSize]);

        React.useEffect(() => {
            if (gallery?.state.activeIndex === index) {
                calculateItemSize();
            }
        }, [rotation, calculateItemSize, gallery?.state.activeIndex, index]);

        React.useEffect(() => {
            if (gallery?.state.activeIndex === index && gallery?.state.isFullscreen !== undefined) {
                calculateItemSize();
            }
        }, [gallery?.state.isFullscreen, calculateItemSize, gallery?.state.activeIndex, index]);

        React.useEffect(() => {
            const handleResize = () => {
                if (gallery?.state.activeIndex === index) {
                    calculateItemSize();
                }
            };

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, [gallery?.state.activeIndex, index, calculateItemSize]);

        React.useEffect(() => {
            if (gallery && elementRef.current) {
                const index = gallery.registerItem(elementRef.current as HTMLDivElement);

                setIndex(index);
            }
        }, [gallery]);

        React.useEffect(() => {
            const handleCustomEvent = (e: CustomEvent) => {
                if (e.detail?.action === 'zoom-in') {
                    zoomIn();
                } else if (e.detail?.action === 'zoom-out') {
                    zoomOut();
                } else if (e.detail?.action === 'rotate-left') {
                    rotateLeft();
                } else if (e.detail?.action === 'rotate-right') {
                    rotateRight();
                } else if (e.detail?.action === 'flip-x') {
                    flipX();
                } else if (e.detail?.action === 'flip-y') {
                    flipY();
                } else if (e.detail?.action === 'download') {
                    download();
                }
            };

            const itemElement = elementRef.current;

            if (itemElement) {
                itemElement.addEventListener('gallery-zoom-in', handleCustomEvent as EventListener);
                itemElement.addEventListener('gallery-zoom-out', handleCustomEvent as EventListener);
                itemElement.addEventListener('gallery-rotate-left', handleCustomEvent as EventListener);
                itemElement.addEventListener('gallery-rotate-right', handleCustomEvent as EventListener);
                itemElement.addEventListener('gallery-flip-x', handleCustomEvent as EventListener);
                itemElement.addEventListener('gallery-flip-y', handleCustomEvent as EventListener);
                itemElement.addEventListener('gallery-download', handleCustomEvent as EventListener);
            }

            return () => {
                if (itemElement) {
                    itemElement.removeEventListener('gallery-zoom-in', handleCustomEvent as EventListener);
                    itemElement.removeEventListener('gallery-zoom-out', handleCustomEvent as EventListener);
                    itemElement.removeEventListener('gallery-rotate-left', handleCustomEvent as EventListener);
                    itemElement.removeEventListener('gallery-rotate-right', handleCustomEvent as EventListener);
                    itemElement.removeEventListener('gallery-flip-x', handleCustomEvent as EventListener);
                    itemElement.removeEventListener('gallery-flip-y', handleCustomEvent as EventListener);
                    itemElement.removeEventListener('gallery-download', handleCustomEvent as EventListener);
                }
            };
        }, [normalScale, zoomedScale]);

        React.useEffect(() => {
            if (gallery?.state.activeIndex === index) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }, [gallery?.state.activeIndex, index]);

        const attributes = React.useMemo(() => {
            return {
                'data-active': isActive
            };
        }, [isActive]);

        const CSSVariables = React.useMemo(() => {
            return {
                '--position-x': `${position.x}px`,
                '--position-y': `${position.y}px`,
                '--scale': `${scale}`,
                '--rotation': `${rotation}deg`,
                '--flip-x': flip.x,
                '--flip-y': flip.y
            } as React.CSSProperties;
        }, [position, scale, rotation, flip]);

        const state = {
            index,
            position,
            scale,
            rotation,
            flip,
            isActive,
            dragStart,
            hasDragged
        };

        return {
            state,
            attributes,
            CSSVariables,
            handlePointerUp,
            handlePointerMove,
            handlePointerDown,
            handleClick,
            handleDragStart,
            zoomIn,
            zoomOut,
            rotateLeft,
            rotateRight,
            flipX,
            flipY,
            download,
            calculateConstraints,
            calculateItemSize
        };
    }
});
