import type { MotionClassNamesWithPhase, MotionHooksWithPhase, MotionMetadata, MotionOptions, MotionPhase, MotionType } from './types';

export const ANIMATION = 'animation';
export const TRANSITION = 'transition';

export function shouldSkipMotion(options: MotionOptions | undefined): boolean {
    if (!options) {
        return false;
    }

    return !!(options.safe && isPrefersReducedMotion());
}

export function mergeOptions(inOptions: MotionOptions | undefined, defaultOptions: MotionOptions): MotionOptions {
    if (!inOptions) {
        return defaultOptions;
    }

    return {
        ...inOptions,
        ...(Object.entries(defaultOptions).reduce((acc: Record<string, unknown>, [key, value]) => {
            acc[key] = (inOptions as Record<string, unknown>)[key] ?? value;

            return acc;
        }, {}) as MotionOptions)
    };
}

export function resolveClassNames(options: MotionOptions | undefined): MotionClassNamesWithPhase {
    const { name, enterClass, leaveClass } = options || {};

    return {
        enter: {
            from: enterClass?.from || `${name}-enter-from`,
            to: enterClass?.to || `${name}-enter-to`,
            active: enterClass?.active || `${name}-enter-active`
        },
        leave: {
            from: leaveClass?.from || `${name}-leave-from`,
            to: leaveClass?.to || `${name}-leave-to`,
            active: leaveClass?.active || `${name}-leave-active`
        }
    };
}

export function getMotionHooks(options: MotionOptions | undefined): MotionHooksWithPhase {
    return {
        enter: {
            onBefore: options?.onBeforeEnter,
            onStart: options?.onEnter,
            onAfter: options?.onAfterEnter,
            onCancelled: options?.onEnterCancelled
        },
        leave: {
            onBefore: options?.onBeforeLeave,
            onStart: options?.onLeave,
            onAfter: options?.onAfterLeave,
            onCancelled: options?.onLeaveCancelled
        }
    };
}

export function getMotionMetadata(element: Element, expectedType?: MotionMetadata['type']): MotionMetadata {
    const styles = window.getComputedStyle(element);

    const getDelaysAndDurations = (type: MotionType): [number[], number[]] => {
        const delays = styles[`${type}Delay`];
        const durations = styles[`${type}Duration`];

        return [delays.split(', ').map(toMs), durations.split(', ').map(toMs)];
    };

    const [transitionDelays, transitionDurations] = getDelaysAndDurations(TRANSITION);
    const [animationDelays, animationDurations] = getDelaysAndDurations(ANIMATION);

    const transitionTimeout = Math.max(...transitionDurations.map((d, i) => d + transitionDelays[i]));
    const animationTimeout = Math.max(...animationDurations.map((d, i) => d + animationDelays[i]));

    let type: MotionMetadata['type'] = undefined;
    let timeout = 0;
    let count = 0;

    if (expectedType === TRANSITION) {
        if (transitionTimeout > 0) {
            type = TRANSITION;
            timeout = transitionTimeout;
            count = transitionDurations.length;
        }
    } else if (expectedType === ANIMATION) {
        if (animationTimeout > 0) {
            type = ANIMATION;
            timeout = animationTimeout;
            count = animationDurations.length;
        }
    } else {
        timeout = Math.max(transitionTimeout, animationTimeout);
        type = timeout > 0 ? (transitionTimeout > animationTimeout ? TRANSITION : ANIMATION) : undefined;
        count = type ? (type === TRANSITION ? transitionDurations.length : animationDurations.length) : 0;
    }

    return {
        type,
        timeout,
        count
    };
}

/**
 * It is useful for deferring execution until the browser has had a chance to render the next frame.
 * @returns A promise that resolves on the next animation frame.
 *
 * @example
 * ```ts
 * await nextFrame();
 * // Code to run after the next animation frame
 * console.log('This runs after the next frame');
 * ```
 */
export function nextFrame(): Promise<void> {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(resolve as () => void);
        });
    });
}

/**
 * Resolves the duration for a given animation phase.
 * @param duration - The duration can be a number or an object with `enter` and `leave` properties.
 * @param phase - The phase of the transition/animation, either 'enter' or 'leave'.
 * @returns The resolved duration in milliseconds or null if not specified.
 */
export function resolveDuration(duration: MotionOptions['duration'], phase: MotionPhase): number | null {
    if (typeof duration === 'number') {
        return duration;
    } else if (typeof duration === 'object' && duration[phase] != null) {
        return duration[phase];
    }

    return null;
}

/**
 * @todo - Move to primeuix/utils
 */
export function isPrefersReducedMotion(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) {
        return false;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    return mediaQuery.matches;
}

export function toMs(value: string | number): number {
    if (value === 'auto') return 0;

    if (typeof value === 'number') return value;

    return Number(value.replace(/[^\d.]/g, '').replace(',', '.')) * 1000;
}
