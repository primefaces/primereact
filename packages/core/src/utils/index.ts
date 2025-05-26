export * from './combinedRefs';
export * from './createContext';
export * from './styleRegistry';

export function isValidElement(obj: unknown): obj is React.ReactElement {
    return typeof obj === 'object' && obj !== null && ((obj as React.ExoticComponent).$$typeof === Symbol.for('react.transitional.element') || (obj as React.ExoticComponent).$$typeof === Symbol.for('react.element'));
}
