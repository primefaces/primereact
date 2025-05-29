import * as React from 'react';
import { createTransition, type TransitionOptions } from './api/createTransition';

type MotionProps = TransitionOptions & {
    in: boolean;
    children: React.ReactNode;
    mountOnEnter?: boolean;
    unmountOnLeave?: boolean;
};

function usePrevious<T>(value: T) {
    const ref = React.useRef<T>(value);

    React.useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export function Motion({ in: inProp, children, mountOnEnter = true, unmountOnLeave = true, ...transitionOptions }: MotionProps) {
    const [rendered, setRendered] = React.useState(() => inProp || !mountOnEnter);
    const elementRef = React.useRef<HTMLDivElement>(null);
    const transitionRef = React.useRef<ReturnType<typeof createTransition> | null>(null);
    const prevIn = usePrevious(inProp);

    React.useEffect(() => {
        if (inProp && !rendered) setRendered(true);
    }, [inProp, rendered, mountOnEnter]);

    React.useLayoutEffect(() => {
        const el = elementRef.current;

        if (!el) return;

        let cancelled = false;

        el.style.display = '';

        if (!rendered) {
            return;
        }

        const transition = createTransition(el, transitionOptions);

        transitionRef.current = transition;
        transition.update?.(transitionOptions);

        if (inProp) {
            transition.enter?.();
        } else {
            transition.leave?.().then(() => {
                if (cancelled || inProp) return;

                if (unmountOnLeave) {
                    el.style.display = 'none';
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            if (!cancelled) setRendered(false);
                        });
                    });
                } else {
                    el.style.display = 'none';
                }
            });
        }

        return () => {
            cancelled = true;
            transition.cancel?.();
        };
    }, [inProp, rendered, transitionOptions, unmountOnLeave, prevIn]);

    if (!rendered) return null;

    return <div ref={elementRef}>{children}</div>;
}
