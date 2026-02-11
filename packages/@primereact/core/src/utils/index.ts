export * from './combinedRefs';
export * from './ConnectedOverlayScrollHandler';
export * from './createContext';
export * from './styleRegistry';

const REACT_ELEMENT = Symbol.for('react.element');
const REACT_TRANSITIONAL_ELEMENT = Symbol.for('react.transitional.element');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isValidElement(obj: any): obj is React.ReactElement {
    return typeof obj === 'object' && obj !== null && (obj.$$typeof === REACT_ELEMENT || obj.$$typeof === REACT_TRANSITIONAL_ELEMENT);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isElementOfType(obj: any, name: string): boolean {
    if (typeof obj !== 'object' || obj === null) return false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const displayName = (obj as any).displayName || (obj.type as any)?.displayName || (obj.type as any)?.name;

    return displayName === name || displayName?.includes(`PrimeReact.${name}`) || displayName?.includes(`PrimeReact.UI${name}`);
}

// @todo - move to @primeuix/utils
export function isCssSupported(property: keyof CSSStyleDeclaration | string, value: string): boolean;

export function isCssSupported(condition: string): boolean;

export function isCssSupported(input: keyof CSSStyleDeclaration | string, value?: string): boolean {
    if (typeof CSS === 'undefined' || !CSS.supports) {
        return false;
    }

    if (value !== undefined) {
        const prop = input.toString().replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

        return CSS.supports(prop, value);
    }

    return CSS.supports(input.toString());
}
