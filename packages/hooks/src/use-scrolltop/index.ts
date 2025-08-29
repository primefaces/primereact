import { getWindowScrollTop } from '@primeuix/utils';
import * as React from 'react';

/**
 * The options for the `useScrollTop` hook.
 */
export interface UseScrollTopOptions {
    /**
     * Reference to the target element.
     * @default window
     */
    target?: Window | Element | null;
    /**
     * Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
     * @default 400
     */
    threshold?: number;
    /**
     * Defines the scrolling behaviour, 'smooth' adds an animation and 'auto' scrolls with a jump.
     * @default smooth
     */
    behavior?: ScrollBehavior;
}

/**
 * The exposes for the `useScrollTop` hook.
 */
export interface UseScrollTopExposes {
    /**
     * Current visible state as a boolean.
     * @default false
     */
    visible: boolean;
    /**
     * Scrolls the target element to the top.
     */
    scrollToTop: () => void;
}

/**
 * useScrollTop hook is used to enter input in a certain format such as numeric, date, currency, email and phone.
 *
 * @param {UseScrollTopOptions} options - The options for the scroll top behavior.
 * @returns {UseScrollTopExposes} - The exposed methods for the scroll top behavior.
 *
 * @example
 * ```tsx
 * const { scrollToTop, visible } = useScrollTop({
 *    target: elementRef.current,
 *    threshold: 400,
 *    behavior: 'smooth'
 * });
 *
 * return (
 *    <div ref={elementRef}>
 *        {visible && (
 *            <Button onClick={scrollToTop}>
 *                 <i className="pi pi-arrow-up" />
 *            </Button>
 *         )}
 *    </div>
 * );
 */
export function useScrollTop(options?: UseScrollTopOptions): UseScrollTopExposes {
    const { target = typeof window !== 'undefined' ? window : null, threshold = 400, behavior = 'smooth' } = options || {};
    const [visible, setVisible] = React.useState(false);

    const scrollToTop = () => {
        target?.scroll({
            top: 0,
            behavior: behavior
        });
    };

    React.useEffect(() => {
        if (!target) return;

        const checkVisibility = (scrollY: number) => {
            if (scrollY > threshold) setVisible(true);
            else setVisible(false);
        };

        const onScroll = () => {
            const scrollY = target === window ? getWindowScrollTop() : (target as Element).scrollTop;

            checkVisibility(scrollY);
        };

        target.addEventListener('scroll', onScroll);

        return () => {
            target.removeEventListener('scroll', onScroll);
        };
    }, [target, threshold]);

    return {
        //state
        visible,
        //methods
        scrollToTop
    };
}
