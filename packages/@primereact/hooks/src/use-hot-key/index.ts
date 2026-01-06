import * as React from 'react';

export type UseHotKeyTarget = Document | HTMLElement | null | undefined;

export interface UseHotKeyOptions {
    /**
     * Target to listen on. Defaults to `document` when available.
     */
    target?: UseHotKeyTarget;
    /**
     * Keyboard event type.
     * @default 'keydown'
     */
    event?: 'keydown' | 'keyup' | 'keypress';
    /**
     * Enables or disables the listener.
     * @default true
     */
    when?: boolean;
}

/**
 * Runs the provided handler when any of the given keys is pressed.
 *
 * @param keys A single key or an array of keys to listen for (e.g. 'k' or 'ctrl+k').
 * @param handler Callback fired when a matching key event occurs.
 * @param options Optional configuration for target, event type, and enable flag.
 */
export function useHotKey(keys: string | string[], handler: (event: KeyboardEvent) => void, options: UseHotKeyOptions = {}) {
    const { target, event = 'keydown', when = true } = options;
    const handlerRef = React.useRef(handler);

    const normalizeKey = (key: string) => {
        const lower = key.toLowerCase();

        if (lower === 'space' || lower === 'spacebar') return ' ';

        return lower;
    };

    const parseKeySpec = (spec: string) => {
        const parts = spec
            .split('+')
            .map((p) => p.trim().toLowerCase())
            .filter(Boolean);

        let key: string | undefined;
        const required = {
            ctrl: false,
            meta: false,
            alt: false,
            shift: false
        };

        parts.forEach((part) => {
            switch (part) {
                case 'ctrl':
                case 'control':
                    required.ctrl = true;
                    break;
                case 'meta':
                case 'cmd':
                case 'command':
                    required.meta = true;
                    break;
                case 'alt':
                case 'option':
                    required.alt = true;
                    break;
                case 'shift':
                    required.shift = true;
                    break;
                default:
                    key = normalizeKey(part);
            }
        });

        return { key, required };
    };

    const matches = (spec: ReturnType<typeof parseKeySpec>, event: KeyboardEvent) => {
        if (!spec.key) return false;

        const { required } = spec;

        if (required.ctrl !== event.ctrlKey || required.meta !== event.metaKey || required.alt !== event.altKey || required.shift !== event.shiftKey) {
            return false;
        }

        return normalizeKey(event.key) === spec.key;
    };

    React.useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    React.useEffect(() => {
        if (!when) {
            return;
        }

        const targetElement: UseHotKeyTarget = target ?? (typeof document !== 'undefined' ? document : null);

        if (!targetElement) {
            return;
        }

        const keySpecs = (Array.isArray(keys) ? keys : [keys]).map(parseKeySpec);

        const listener: EventListener = (event) => {
            const keyboardEvent = event as KeyboardEvent;

            if (keySpecs.some((spec) => matches(spec, keyboardEvent))) {
                handlerRef.current?.(keyboardEvent);
            }
        };

        targetElement.addEventListener(event, listener);

        return () => {
            targetElement.removeEventListener(event, listener);
        };
    }, [event, keys, target, when]);
}
