import { createTransition } from './createTransition';
import type { MotionOptions } from './types';
import { getMotionOptions } from './utils';

export function createMotion(element?: HTMLElement, options?: MotionOptions) {
    const opts = getMotionOptions(options);

    if (opts.type === 'transition') {
        return createTransition(element, opts);
    } else if (opts.type === 'animation') {
        // eslint-disable-next-line no-console
        console.warn('Animation type is not yet implemented.');

        return null;
    } else {
        throw new Error(`Unknown motion type: ${opts.type}`);
    }
}
