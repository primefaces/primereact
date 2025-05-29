import { addClass, removeClass } from '@primeuix/utils';
import type { ClassNames, TransitionInstance, TransitionOptions } from './types';
import { getOptions, resolveClassNames, resolveDuration, shouldSkipMotion } from './utils';

export function createTransition(element: HTMLElement, options?: TransitionOptions): TransitionInstance {
    if (!element) throw new Error('Element is required.');

    const opts: TransitionOptions = {};
    let skipMotion = false;
    let { enterClass, leaveClass } = {} as ClassNames;
    let cancelCurrent: (() => void) | null = null;

    const init = (newOpts?: TransitionOptions) => {
        Object.assign(opts, getOptions(newOpts) as TransitionOptions);
        if (!opts.enter && !opts.leave) throw new Error('Enter or leave must be true.');

        skipMotion = shouldSkipMotion(opts);
        ({ enterClass, leaveClass } = resolveClassNames(opts));
        cancelCurrent = null;
    };

    const clearTransition = (classNames: string | (string | undefined)[] | undefined, listener: (event?: TransitionEvent) => void, timeoutId?: ReturnType<typeof setTimeout>) => {
        removeClass(element, classNames);
        element.removeEventListener('transitionend', listener, true);
        if (timeoutId) clearTimeout(timeoutId);
    };

    const runTransition = async (
        classesFrom: string | string[],
        classesActive: string | string[],
        classesTo: string | string[],
        onBefore?: (el: HTMLElement) => void,
        onStart?: (el: HTMLElement) => void,
        onAfter?: (el: HTMLElement) => void,
        onCancelled?: (el: HTMLElement) => void,
        durationKey: 'enter' | 'leave'
    ): Promise<void> => {
        cancelCurrent?.();

        if (skipMotion) {
            onBefore?.(element);
            onStart?.(element);
            onAfter?.(element);

            return;
        }

        onBefore?.(element);
        addClass(element, [classesFrom, classesActive]);

        //await nextFrameAsync();
        void element.offsetHeight;

        removeClass(element, classesFrom);
        addClass(element, classesTo);
        onStart?.(element);

        return new Promise((resolve) => {
            const duration = resolveDuration(opts.duration, durationKey);
            let timeoutId: ReturnType<typeof setTimeout> | undefined;

            const onEnd = async (event?: TransitionEvent) => {
                if (event && event.target !== element) return;

                resolve();
                cleanup();
                onAfter?.(element);
            };

            const cleanup = () => {
                clearTransition([classesTo, classesActive], onEnd, timeoutId);
                cancelCurrent = null;
            };

            cancelCurrent = () => {
                cleanup();
                onCancelled?.(element);
                resolve();
            };

            element.addEventListener('transitionend', onEnd, { capture: true, once: true });

            if (duration !== null) {
                timeoutId = setTimeout(onEnd, duration + 50);
            }
        });
    };

    const enter = () => runTransition(enterClass.from, enterClass.active, enterClass.to, opts.onBeforeEnter, opts.onEnter, opts.onAfterEnter, opts.onEnterCancelled, 'enter');

    const leave = () => runTransition(leaveClass.from, leaveClass.active, leaveClass.to, opts.onBeforeLeave, opts.onLeave, opts.onAfterLeave, opts.onLeaveCancelled, 'leave');

    const cancel = () => {
        cancelCurrent?.();
        cancelCurrent = null;
    };

    const update = (newOpts: TransitionOptions) => {
        cancel();
        init(newOpts);
    };

    init(options);

    if (opts.appear) enter();

    return { enter, leave, cancel, update };
}
