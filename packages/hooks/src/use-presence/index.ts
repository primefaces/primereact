import * as React from 'react';

/**
 * usePresence hook is used to manage the presence of a component.
 *
 * @param open - The open state.
 * @returns An object containing the present, exiting, mounted, and ref states.
 *
 * @example
 * ```tsx
 * const { present, exiting, mounted, ref } = usePresence(true);
 *
 *    return present && (
 *       <div className="card flex justify-center"></div>
 *    );
 */

export function usePresence(open: boolean, fallbackMs: number = 500) {
    const [present, setPresent] = React.useState(open);
    const [exiting, setExiting] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const ref = React.useRef<HTMLElement>(null);
    const cleanupRef = React.useRef<(() => void) | null>(null);
    const rafCleanupRef = React.useRef<(() => void) | null>(null);

    React.useEffect(() => {
        if (cleanupRef.current) {
            cleanupRef.current();
            cleanupRef.current = null;
        }

        if (rafCleanupRef.current) {
            rafCleanupRef.current();
            rafCleanupRef.current = null;
        }

        if (open) {
            setPresent(true);
            setExiting(false);

            const rafs: number[] = [];

            rafs.push(
                requestAnimationFrame(() => {
                    rafs.push(
                        requestAnimationFrame(() => {
                            rafs.push(requestAnimationFrame(() => setMounted(true)));
                        })
                    );
                })
            );

            rafCleanupRef.current = () => {
                rafs.forEach((raf) => cancelAnimationFrame(raf));
                rafs.length = 0;
            };
        } else if (ref.current) {
            setExiting(true);
            setMounted(false);
            const node = ref.current;
            let isHandled = false;

            const handleEnd = () => {
                if (isHandled) return;

                isHandled = true;

                setPresent(false);
                setExiting(false);

                node.removeEventListener('transitionend', handleEnd);
                node.removeEventListener('animationend', handleEnd);

                cleanupRef.current = null;
            };

            node.addEventListener('transitionend', handleEnd, { passive: true });
            node.addEventListener('animationend', handleEnd, { passive: true });

            // const fallbackTimeout = setTimeout(() => {
            //     if (!isHandled) {
            //         handleEnd();
            //     }
            // }, fallbackMs);

            cleanupRef.current = () => {
                // clearTimeout(fallbackTimeout);

                if (!isHandled) {
                    node.removeEventListener('transitionend', handleEnd);
                    node.removeEventListener('animationend', handleEnd);
                }
            };
        } else {
            setMounted(false);
            setPresent(false);
            setExiting(false);
        }
    }, [open, fallbackMs]);

    React.useEffect(() => {
        return () => {
            if (cleanupRef.current) {
                cleanupRef.current();
            }

            if (rafCleanupRef.current) {
                rafCleanupRef.current();
            }
        };
    }, []);

    return { present, exiting, mounted, ref };
}
