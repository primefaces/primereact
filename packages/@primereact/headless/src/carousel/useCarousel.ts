import { withHeadless } from '@primereact/core/headless';
import * as React from 'react';
import { defaultProps } from './useCarousel.props';

const ITEM_SELECTOR = '[data-item]';

function areSetsEqual<T>(a: Set<T>, b: Set<T>) {
    if (a.size !== b.size) return false;

    for (const value of a) {
        if (!b.has(value)) return false;
    }

    return true;
}

export const useCarousel = withHeadless({
    name: 'useCarousel',
    defaultProps,
    setup({ props }) {
        const [swiping, setSwiping] = React.useState(false);
        const [isNextDisabled, setIsNextDisabled] = React.useState(false);
        const [isPrevDisabled, setIsPrevDisabled] = React.useState(false);
        const [snapPoints, setSnapPoints] = React.useState<Set<number>>(new Set());
        const [pageState, setPageState] = React.useState(props.page ?? props.defaultPage ?? 0);

        const contentRef = React.useRef<HTMLDivElement>(null);
        const snapPointsRef = React.useRef<Set<number>>(new Set());
        const scrollSnapsRef = React.useRef<number[]>([]);
        const initialPageAppliedRef = React.useRef(false);

        const mutationObserverRef = React.useRef<MutationObserver>(null);
        const intersectionObserverRef = React.useRef<IntersectionObserver>(null);
        const resizeObserverRef = React.useRef<ResizeObserver>(null);
        const scrollTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
        const wheelTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

        const swipeStartPointRef = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
        const isRealSwipeRef = React.useRef(false);

        function computeSnapPoints() {
            const content = contentRef.current;

            if (!content) return [];

            const isHorizontal = props.orientation !== 'vertical';
            const trackSize = isHorizontal ? content.clientWidth : content.clientHeight;
            const maxOffset = Math.max(0, isHorizontal ? content.scrollWidth - trackSize : content.scrollHeight - trackSize);
            const snaps: number[] = [];

            scrollSnapsRef.current = [];

            content.querySelectorAll<HTMLElement>(ITEM_SELECTOR).forEach((item) => {
                const offset = isHorizontal ? item.offsetLeft : item.offsetTop;
                const size = isHorizontal ? item.clientWidth : item.clientHeight;

                let snapPoint = offset;

                if (props.align === 'center') {
                    snapPoint = offset - (trackSize - size) / 2;
                } else if (props.align === 'end') {
                    snapPoint = offset - (trackSize - size);
                }

                const clamped = Math.max(0, Math.min(snapPoint, maxOffset));

                scrollSnapsRef.current.push(clamped);

                snaps.push(clamped);
            });

            const newSnapPoints = new Set(snaps.map(Number));

            if (areSetsEqual(snapPoints, newSnapPoints)) return;

            snapPointsRef.current = newSnapPoints;
            setSnapPoints(newSnapPoints);
        }

        function setPage(page: number) {
            if (!props.loop) {
                const size = snapPointsRef.current.size || snapPoints.size;
                let isNextDisabled = false;
                let isPrevDisabled = false;

                if (page === 0) {
                    isPrevDisabled = true;
                }

                if (page === size - 1) {
                    isNextDisabled = true;
                }

                setIsNextDisabled(isNextDisabled);
                setIsPrevDisabled(isPrevDisabled);
            }

            setPageState(page);

            props.onPageChange?.({ value: page });
            props.onSlideChange?.({ value: page });
        }

        function setToClosest() {
            const content = contentRef.current;

            const points = snapPointsRef.current;

            if (!content || points.size === 0) return;

            const scrollPos = props.orientation === 'horizontal' ? content.scrollLeft : content.scrollTop;

            const closestSnapPoint = Array.from(points).reduce((closest, point) => {
                return Math.abs(point - scrollPos) < Math.abs(closest - scrollPos) ? point : closest;
            }, Infinity);

            const index = Array.from(points).indexOf(closestSnapPoint);

            setPage(index);

            return index;
        }

        function scrollToPage(page?: number, instant = false) {
            const points = snapPointsRef.current;

            if (points.size === 0) return;

            const target = page ?? pageState;
            const clampedPage = props.loop ? (target + points.size) % points.size : Math.max(0, Math.min(target, points.size - 1));

            setPage(clampedPage);
            scrollTo(Array.from(points)[clampedPage], instant);
        }

        function next() {
            scrollToPage(pageState + 1);
        }

        function prev() {
            scrollToPage(pageState - 1);
        }

        function scrollTo(snapPoint: number, instant = false) {
            const content = contentRef.current;

            if (!content) return;

            content.scrollTo({
                [props.orientation === 'horizontal' ? 'left' : 'top']: snapPoint,
                behavior: instant ? 'instant' : 'smooth'
            });
        }

        function scrollToSlide(slide: number) {
            const points = snapPointsRef.current;
            const snaps = scrollSnapsRef.current;

            if (points.size === 0 || snaps.length === 0) return;

            const clampedSlide = Math.max(0, Math.min(slide, snaps.length - 1));

            const snap = snaps[clampedSlide];

            scrollTo(snap);

            const page = Array.from(points).indexOf(snap);

            setPage(page);
        }

        React.useLayoutEffect(() => {
            const content = contentRef.current;

            if (!content) return;

            resizeObserverRef.current = new ResizeObserver(() => {
                computeSnapPoints();
                const closest = setToClosest();

                scrollToPage(closest ?? pageState, true);
            });

            resizeObserverRef.current.observe(content);
            content.querySelectorAll<HTMLElement>(ITEM_SELECTOR).forEach((item) => resizeObserverRef.current?.observe(item));

            computeSnapPoints();

            return () => {
                resizeObserverRef.current?.disconnect();
                resizeObserverRef.current = null;
            };
        }, []);

        React.useLayoutEffect(() => {
            if (initialPageAppliedRef.current) return;

            const size = snapPointsRef.current.size || snapPoints.size;

            if (size === 0) return;

            initialPageAppliedRef.current = true;
            scrollToPage(props.defaultPage ?? 0, true);
        }, [snapPoints, props.page, props.defaultPage]);

        React.useEffect(() => {
            if (props.page === undefined || props.page === null || props.slide !== undefined || props.slide !== null) return;

            if (snapPointsRef.current.size === 0 && snapPoints.size === 0) return;

            scrollToPage(props.page);
        }, [props.page, snapPoints]);

        React.useEffect(() => {
            if (props.slide === undefined || props.slide === null) return;

            if (snapPointsRef.current.size === 0 && snapPoints.size === 0) return;

            scrollToSlide(props.slide);
        }, [props.slide]);

        React.useEffect(() => {
            const content = contentRef.current;

            if (!content) return;

            mutationObserverRef.current = new MutationObserver((mutations) => {
                mutations.forEach(() => {
                    computeSnapPoints();
                    requestAnimationFrame(() => {
                        const closest = setToClosest();

                        scrollToPage(closest ?? pageState, true);
                    });
                });
            });

            mutationObserverRef.current.observe(content, { childList: true, subtree: true });

            return () => {
                mutationObserverRef.current?.disconnect();
                mutationObserverRef.current = null;
            };
        }, []);

        React.useEffect(() => {
            const content = contentRef.current;

            if (!content) return;

            intersectionObserverRef.current = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) entry.target.setAttribute('data-inview', 'true');
                        else entry.target.setAttribute('data-inview', 'false');
                    });
                },
                {
                    root: contentRef.current,
                    threshold: 0.6
                }
            );

            content.querySelectorAll<HTMLElement>(ITEM_SELECTOR).forEach((item) => intersectionObserverRef.current?.observe(item));

            return () => {
                intersectionObserverRef.current?.disconnect();
                intersectionObserverRef.current = null;
            };
        }, []);

        React.useEffect(() => {
            const content = contentRef.current;

            if (!content) return;

            const onScroll = () => {
                if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

                scrollTimeoutRef.current = setTimeout(() => {
                    setToClosest();
                }, 80);
            };

            onScroll();

            content.addEventListener('scroll', onScroll, { passive: true });

            return () => {
                if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

                scrollTimeoutRef.current = null;

                content.removeEventListener('scroll', onScroll);
            };
        }, []);

        function onContentPointerDown(e: React.PointerEvent<HTMLDivElement>) {
            if (e.button !== 0) return;

            if (e.pointerType === 'touch') return;

            setSwiping(true);
            swipeStartPointRef.current = { x: e.clientX, y: e.clientY };
            isRealSwipeRef.current = false;
        }

        function onContentPointerMove(e: React.PointerEvent<HTMLDivElement>) {
            const content = contentRef.current;

            if (!swiping || !content || e.pointerType === 'touch') return;

            const deltaX = e.clientX - swipeStartPointRef.current.x;
            const deltaY = e.clientY - swipeStartPointRef.current.y;
            const distance = Math.abs(deltaX) + Math.abs(deltaY);

            if (distance < 6) return;

            if ((window.getSelection()?.toString().length ?? 0) > 0) return;

            e.currentTarget.setPointerCapture(e.pointerId);

            content.style.userSelect = 'none';
            isRealSwipeRef.current = true;
            content.style.scrollSnapType = 'none';
            content.scrollBy({
                left: -e.movementX,
                top: -e.movementY,
                behavior: 'instant'
            });

            e.preventDefault();
        }

        function onContentPointerUp(e: React.PointerEvent<HTMLDivElement>) {
            setSwiping(false);
            e.currentTarget.releasePointerCapture(e.pointerId);

            if (!isRealSwipeRef.current) return;

            const content = contentRef.current;

            if (!content) return;

            content.style.userSelect = '';

            const scrollPos = props.orientation === 'horizontal' ? content.scrollLeft : content.scrollTop;
            const snapPoints = snapPointsRef.current;

            const closestSnapPoint = Array.from(snapPoints).reduce((closest, point) => {
                return Math.abs(point - scrollPos) < Math.abs(closest - scrollPos) ? point : closest;
            }, Infinity);

            const index = Array.from(snapPoints).indexOf(closestSnapPoint);

            requestAnimationFrame(() => {
                if (closestSnapPoint !== undefined) scrollToPage(index);

                requestAnimationFrame(() => {
                    content.style.scrollSnapType = resolveSnapType();
                });
            });
        }

        function onContentWheel(e: React.WheelEvent<HTMLDivElement>) {
            if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);

            wheelTimeoutRef.current = setTimeout(() => {
                const primaryDelta = props.orientation === 'horizontal' ? e.deltaX || e.deltaY : e.deltaY || e.deltaX;

                if (primaryDelta > 0 && isNextDisabled) {
                    return;
                }

                if (primaryDelta < 0 && isPrevDisabled) {
                    return;
                }

                setToClosest();
            }, 80);
        }

        const resolveSnapType = () => {
            const axis = props.orientation === 'vertical' ? 'y' : 'x';

            return `${axis} ${props.snapType ?? 'mandatory'}`;
        };

        const contentStyles = {
            position: 'relative',
            scrollSnapType: resolveSnapType(),
            overflowX: props.orientation === 'vertical' ? '' : 'scroll',
            overflowY: props.orientation === 'horizontal' ? '' : 'scroll',
            scrollbarWidth: 'none',
            overscrollBehaviorX: props.orientation === 'vertical' ? '' : 'contain',
            overscrollBehaviorY: props.orientation === 'horizontal' ? '' : 'contain',
            display: 'flex',
            flexDirection: props.orientation === 'horizontal' ? '' : 'column',
            '--spacing-items': props.spacing + 'px',
            gap: props.spacing + 'px'
        } as React.CSSProperties;

        const slidesPerPage = props.slidesPerPage && props.slidesPerPage > 0 ? props.slidesPerPage : 1;
        const basis = props.autoSize ? 'auto' : `calc(100% /${slidesPerPage} - var(--spacing-items) * (${slidesPerPage} - 1) / ${slidesPerPage})`;

        const itemStyles = {
            scrollSnapAlign: props.align,
            flexGrow: 0,
            flexShrink: 0,
            minWidth: 0,
            flexBasis: basis
        } as React.CSSProperties;

        const state = {
            swiping,
            isNextDisabled,
            isPrevDisabled,
            snapPoints,
            page: pageState
        };

        return {
            state,
            contentStyles,
            itemStyles,
            contentRef,
            onContentPointerDown,
            onContentPointerMove,
            onContentPointerUp,
            onContentWheel,
            next,
            prev,
            scrollToPage,
            scrollTo,
            scrollToSlide,
            setToClosest
        };
    }
});
