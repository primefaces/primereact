import { addClass, removeClass } from '@primeuix/utils';
import { MotionClassNamesWithPhase, MotionHooksWithPhase, MotionInstance, MotionOptions, MotionPhase, MotionType } from './types';
import { getMotionHooks, getMotionMetadata, mergeOptions, nextFrame, resolveClassNames, resolveDuration, shouldSkipMotion } from './utils';

export const DEFAULT_MOTION_OPTIONS: MotionOptions = {
    name: 'p',
    safe: true,
    enter: true,
    leave: true
};

export function createMotion(element: Element, options?: MotionOptions): MotionInstance {
    if (!element) throw new Error('Element is required.');

    const opts: MotionOptions = {};
    let skipMotion = false;
    let classNames: MotionClassNamesWithPhase = {} as MotionClassNamesWithPhase;
    let cancelCurrent: (() => void) | null = null;
    let hooks: MotionHooksWithPhase = {};

    const init = (newOpts?: MotionOptions) => {
        Object.assign(opts, mergeOptions(newOpts, DEFAULT_MOTION_OPTIONS));
        if (!opts.enter && !opts.leave) throw new Error('Enter or leave must be true.');

        hooks = getMotionHooks(opts);
        skipMotion = shouldSkipMotion(opts);
        classNames = resolveClassNames(opts);
        cancelCurrent = null;
    };

    const run = async (phase: MotionPhase): Promise<void> => {
        cancelCurrent?.();

        const { onBefore, onStart, onAfter, onCancelled } = hooks[phase] || {};

        if (skipMotion) {
            onBefore?.(element);
            onStart?.(element);
            onAfter?.(element);

            return;
        }

        const { from: fromClass, active: activeClass, to: toClass } = classNames[phase] || {};

        onBefore?.(element);
        addClass(element, [fromClass, activeClass]);

        await nextFrame();
        //void element.offsetHeight; // force reflow

        removeClass(element, fromClass);
        addClass(element, toClass);
        onStart?.(element);

        return new Promise((resolve) => {
            const duration = resolveDuration(opts.duration, phase);

            const cleanup = () => {
                removeClass(element, [toClass, activeClass]);
                cancelCurrent = null;
            };

            const onDone = () => {
                cleanup();
                onAfter?.(element);
                resolve();
            };

            cancelCurrent = () => {
                cleanup();
                onCancelled?.(element);
                resolve();
            };

            whenEnd(element, opts.type, duration, onDone);
        });
    };

    init(options);

    const instance: MotionInstance = {
        enter: () => {
            if (!opts.enter) return Promise.resolve();

            return run('enter');
        },
        leave: () => {
            if (!opts.leave) return Promise.resolve();

            return run('leave');
        },
        cancel: () => {
            cancelCurrent?.();
            cancelCurrent = null;
        },
        update: (newElement?: Element, newOptions?: MotionOptions) => {
            if (!newElement) throw new Error('Element is required.');

            element = newElement as HTMLElement;
            instance.cancel();
            init(newOptions);
        }
    };

    if (opts.appear) instance.enter();

    return instance;
}

let endId = 0;

/**
 * Ported from Vue.js Transition Component;
 * @see https://github.com/vuejs/core/blob/main/packages/runtime-dom/src/components/Transition.ts#L348
 *
 * When the transition is triggered, it waits for the end of the motion (transition or animation)
 * @param element - The element to wait for the motion end.
 * @param expectedType - The expected type of motion (transition or animation).
 * @param explicitTimeout - An optional explicit timeout in milliseconds.
 * @param resolve - A function to call when the motion ends.
 * @returns A timeout ID if an explicit timeout is provided, otherwise undefined.
 */
function whenEnd(element: Element & { _motionEndId?: number }, expectedType: MotionType | undefined, explicitTimeout: number | null, resolve: () => void) {
    const id = (element._motionEndId = ++endId);

    const resolveIfNotStale = () => {
        if (id === element._motionEndId) {
            resolve();
        }
    };

    if (explicitTimeout != null) {
        return setTimeout(resolveIfNotStale, explicitTimeout);
    }

    const { type, timeout, count } = getMotionMetadata(element, expectedType);

    if (!type) {
        resolve();

        return;
    }

    const endEvent = type + 'end';
    let ended = 0;

    const end = () => {
        element.removeEventListener(endEvent, onEnd, true);
        resolveIfNotStale();
    };

    const onEnd = (event: Event) => {
        if (event.target === element && ++ended >= count) {
            end();
        }
    };

    element.addEventListener(endEvent, onEnd, { capture: true, once: true });
    setTimeout(() => {
        if (ended < count) {
            end();
        }
    }, timeout + 1);
}
