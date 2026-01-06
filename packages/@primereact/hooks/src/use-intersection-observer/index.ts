import * as React from 'react';

export interface UseIntersectionObserverOptions extends IntersectionObserverInit {
    /**
     * Skip creating the IntersectionObserver
     * @default false
     */
    disabled?: boolean;
    /**
     * Callback function that will be called when intersection changes
     */
    onIntersect?: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void;
    /**
     * If the IntersectionObserver API isn't available, set this fallback behavior
     */
    fallback?: () => void;
}

export interface UseIntersectionObserverResult {
    /** The current intersection entries */
    entries: IntersectionObserverEntry[];
    /** Whether any of the observed elements are intersecting */
    isIntersecting: boolean;
    /** Function to start observing an element */
    observe: (element: Element) => void;
    /** Function to stop observing an element */
    unobserve: (element: Element) => void;
    /** Function to stop observing all elements */
    disconnect: () => void;
    /** The IntersectionObserver instance */
    observer: IntersectionObserver | null;
}

/**
 * Low-level hook for IntersectionObserver API.
 * Provides direct access to observe/unobserve methods and entries.
 *
 * @param options - Configuration options for the IntersectionObserver
 * @returns Object containing observer methods and current entries
 *
 * @example
 * ```tsx
 * const Component = () => {
 *     const ref = useRef(null);
 *     const { observe, isIntersecting, entries } = useIntersectionObserver({
 *         threshold: 0.5,
 *         onIntersect: (entries) => {
 *             console.log('Intersection changed:', entries);
 *         }
 *     });
 *
 *     useEffect(() => {
 *         if (ref.current) {
 *             observe(ref.current);
 *         }
 *     }, [observe]);
 *
 *     return <div ref={ref}>Content</div>;
 * };
 * ```
 */

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}): UseIntersectionObserverResult {
    const { disabled = false, onIntersect, fallback, ...observerOptions } = options;

    const [entries, setEntries] = React.useState<IntersectionObserverEntry[]>([]);
    const observerRef = React.useRef<IntersectionObserver | null>(null);
    const elementsRef = React.useRef<Set<Element>>(new Set());

    const callbackRef = React.useRef(onIntersect);

    React.useEffect(() => {
        callbackRef.current = onIntersect;
    }, [onIntersect]);

    const isIntersecting = React.useMemo(() => {
        return entries.some((entry) => entry.isIntersecting);
    }, [entries]);

    React.useEffect(() => {
        if (disabled) {
            return;
        }

        if (typeof window.IntersectionObserver === 'undefined') {
            if (fallback) {
                fallback();
            }

            return;
        }

        observerRef.current = new IntersectionObserver((observerEntries, observer) => {
            setEntries(observerEntries);

            if (callbackRef.current) {
                callbackRef.current(observerEntries, observer);
            }
        }, observerOptions);

        elementsRef.current.forEach((element) => {
            if (observerRef.current) {
                observerRef.current.observe(element);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, [disabled, fallback, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold]);

    const observe = React.useCallback((element: Element) => {
        if (!element) return;

        elementsRef.current.add(element);

        if (observerRef.current) {
            observerRef.current.observe(element);
        }
    }, []);

    const unobserve = React.useCallback((element: Element) => {
        if (!element) return;

        elementsRef.current.delete(element);

        if (observerRef.current) {
            observerRef.current.unobserve(element);
        }

        setEntries((prev) => prev.filter((entry) => entry.target !== element));
    }, []);

    const disconnect = React.useCallback(() => {
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        elementsRef.current.clear();
        setEntries([]);
    }, []);

    return {
        entries,
        isIntersecting,
        observe,
        unobserve,
        disconnect,
        observer: observerRef.current
    };
}
