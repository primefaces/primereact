import { getTargetElement, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';
import { usePrevious } from '../use-previous';

/**
 * The options for the `useEventListener` hook.
 */
export interface UseEventListenerOptions<T = keyof HTMLElementEventMap> {
    /**
     * The target element to bind the event listener to.
     * @default 'document'
     */
    target?: 'document' | 'window' | 'body' | HTMLElement | (() => HTMLElement) | React.Ref<HTMLElement> | string | null;
    /**
     * The event type to listen for.
     */
    type: T | string;
    /**
     * The event listener callback.
     */
    listener: EventListener;
    /**
     * The event listener options
     */
    options?: AddEventListenerOptions | boolean;
    /**
     * A boolean indicating whether the event listener should be active.
     */
    when?: boolean;
}

/**
 * The return type of the `useEventListener` hook.
 * A tuple containing functions;
 * 1. `bind` function is used to bind the event listener.
 * 2. `unbind` function is used to unbind the event listener.
 */
export type UseEventListenerReturnType = [(options?: Partial<Omit<UseEventListenerOptions, 'target'>> & { target?: UseEventListenerOptions['target'] | Document | null }) => void, () => void];

/**
 * Listens for the specified event type on the target element.
 *
 * @param {UseEventListenerOptions} options - The options for the event listener.
 * @returns A tuple containing functions;
 * 1. `bind` function is used to bind the event listener.
 * 2. `unbind` function is used to unbind the event listener.
 *
 * @example
 * ```tsx
 * const Component = () => {
 *     const [bind, unbind] = useEventListener({
 *         target: 'document',
 *         type: 'click',
 *         listener: (event) => {
 *             console.log(event);
 *         },
 *         when: true
 *     });
 *
 *     return <div>Click me</div>;
 * };
 *
 * @example
 * ```tsx
 * const Component = () => {
 *     const [bind, unbind] = useEventListener({
 *         target: () => document.querySelector('.element'),
 *         type: 'mouseover',
 *         listener: (event) => {
 *             console.log(event);
 *         }
 *     });
 *
 *     return <div>MouseOver to `.element`</div>;
 * };
 * ```
 */
export function useEventListener({ target = 'document', type, listener, options, when = true }: UseEventListenerOptions): UseEventListenerReturnType {
    const targetRef = React.useRef<HTMLElement | null>(null);
    const listenerRef = React.useRef<EventListener | null>(null);
    let prevListener = usePrevious(listener);
    let prevOptions = usePrevious(options);

    const bind = (bindOptions: Partial<Omit<UseEventListenerOptions, 'target'>> & { target?: UseEventListenerOptions['target'] | Document | null } = {}) => {
        const { target: bindTarget } = bindOptions;

        if (isNotEmpty(bindTarget)) {
            unbind();

            if (bindOptions.when || when) {
                targetRef.current = getTargetElement(bindTarget);
            }
        }

        if (!listenerRef.current && targetRef.current) {
            listenerRef.current = (event: Event) => listener && listener(event);
            targetRef.current.addEventListener(type, listenerRef.current, options);
        }
    };

    const unbind = () => {
        if (listenerRef.current) {
            targetRef.current.removeEventListener(type, listenerRef.current, options);
            listenerRef.current = null;
        }
    };

    const dispose = () => {
        unbind();
        // Prevent memory leak by releasing
        prevListener = null;
        prevOptions = null;
    };

    const updateTarget = React.useCallback(() => {
        if (when) {
            targetRef.current = getTargetElement(target);
        } else {
            unbind();
            targetRef.current = null;
        }
    }, [target, when]);

    React.useEffect(() => {
        return () => {
            dispose();
        };
    }, []);

    React.useEffect(() => {
        updateTarget();
    }, [updateTarget]);

    React.useEffect(() => {
        const listenerChanged = `${prevListener}` !== `${listener}`;
        const optionsChanged = prevOptions !== options;
        const listenerExists = listenerRef.current;

        if (listenerExists && (listenerChanged || optionsChanged)) {
            unbind();

            if (when) {
                bind();
            }
        } else if (!listenerExists) {
            dispose();
        }
    }, [listener, options, when]);

    return [bind, unbind];
}
