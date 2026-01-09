export * from './combinedRefs';
export * from './ConnectedOverlayScrollHandler';
export * from './createContext';
export * from './styleRegistry';

export function isValidElement(obj: unknown): obj is React.ReactElement {
    return typeof obj === 'object' && obj !== null && ((obj as React.ExoticComponent).$$typeof === Symbol.for('react.transitional.element') || (obj as React.ExoticComponent).$$typeof === Symbol.for('react.element'));
}

// @todo - move to @primeuix/utils/mergeProps
import { cn, isFunction } from '@primeuix/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _mergeProps({ skipUndefined = false }, ...props: any[]): object | undefined {
    return props?.reduce((merged, ps = {}) => {
        for (const key in ps) {
            const value = ps[key];

            if (skipUndefined && value === undefined) continue;

            if (key === 'style') {
                merged['style'] = { ...merged['style'], ...ps['style'] };
            } else if (key === 'class' || key === 'className') {
                merged[key] = cn(merged[key], ps[key]);
            } else if (isFunction(value)) {
                const fn = merged[key];

                merged[key] = fn
                    ? (...args: unknown[]) => {
                          fn(...args);
                          value(...args);
                      }
                    : value;
            } else {
                merged[key] = value;
            }
        }

        return merged;
    }, {});
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mergeDefaultProps(...props: any[]): object | undefined {
    return _mergeProps({ skipUndefined: true }, ...props);
}
