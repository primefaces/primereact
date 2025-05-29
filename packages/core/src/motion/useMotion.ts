import * as React from 'react';
import { createMotion, MotionInstance, type MotionOptions } from './api/index';

export function useMotion<T extends HTMLElement = HTMLElement>(options?: MotionOptions) {
    const ref = React.useRef<T>(null);
    const motion = React.useRef<MotionInstance | null>(null);

    React.useEffect(() => {
        if (ref.current) {
            motion.current = createMotion(ref.current, options);
        }
    }, [options, ref.current]);

    return {
        ref,
        enter: () => motion.current?.enter(),
        leave: () => motion.current?.leave(),
        cancel: () => motion.current?.cancel(),
        update: (newOptions: MotionOptions) => {
            motion.current?.update(newOptions);
        }
    };
}
