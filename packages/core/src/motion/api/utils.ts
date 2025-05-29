import type { ClassNames, CommonOptions, MotionOptions, TransitionOptions } from './types';

export const DEFAULT_COMMON_OPTIONS: CommonOptions = {
    name: 'p',
    motionSafe: true,
    enter: true,
    leave: true
};

export const DEFAULT_MOTION_OPTIONS: MotionOptions = {
    type: 'transition',
    ...DEFAULT_COMMON_OPTIONS
};

export function shouldSkipMotion(options: CommonOptions | undefined): boolean {
    if (!options) {
        return false;
    }

    return !!(options.motionSafe && isPrefersReducedMotion());
}

export function getMotionOptions(options: MotionOptions | undefined): MotionOptions {
    return mergeOptions(options, DEFAULT_MOTION_OPTIONS);
}

export function getOptions(options: CommonOptions | undefined): CommonOptions {
    return mergeOptions(options, DEFAULT_COMMON_OPTIONS);
}

export function mergeOptions<T>(inOptions: T | undefined, defaultOptions: T): T {
    if (!inOptions) {
        return defaultOptions;
    }

    return { ...defaultOptions, ...inOptions };
}

export function resolveClassNames(options: CommonOptions | undefined): ClassNames {
    const { name, enterClass, leaveClass } = options || {};

    return {
        enterClass: {
            from: enterClass?.from || `${name}-enter-from`,
            to: enterClass?.to || `${name}-enter-to`,
            active: enterClass?.active || `${name}-enter-active`
        },
        leaveClass: {
            from: leaveClass?.from || `${name}-leave-from`,
            to: leaveClass?.to || `${name}-leave-to`,
            active: leaveClass?.active || `${name}-leave-active`
        }
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
            requestAnimationFrame(resolve);
        });
    });
}

/**
 * Resolves the duration for a given animation phase.
 * @param duration - The duration can be a number or an object with `enter` and `leave` properties.
 * @param phase - The phase of the transition/animation, either 'enter' or 'leave'.
 * @returns The resolved duration in milliseconds or null if not specified.
 */
export function resolveDuration(duration: TransitionOptions['duration'], phase: 'enter' | 'leave'): number | null {
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
