/* eslint-disable */
import * as React from 'react';
import { useEventListener } from './useEventListener';

/**
 * Hook to wrap around useState that stores the value in the browser local/session storage.
 *
 * @param {any} initialValue the initial value to store
 * @param {string} key the key to store the value in local/session storage
 * @param {string} storage either 'local' or 'session' for what type of storage
 * @returns a stateful value, and a function to update it.
 */
export const useStorage = (initialValue, key, storage = 'local') => {
    // Since the local storage API isn't available in server-rendering environments,
    // we check that typeof window !== 'undefined' to make SSR and SSG work properly.
    const storageAvailable = typeof window !== 'undefined';

    // subscribe to window storage event so changes in one tab to a stored value
    // are properly reflected in all tabs
    const [bindWindowStorageListener, unbindWindowStorageListener] = useEventListener({
        target: 'window',
        type: 'storage',
        listener: (event) => {
            const area = storage === 'local' ? window.localStorage : window.sessionStorage;
            if (event.storageArea === area && event.key === key) {
                const newValue = event.newValue ? JSON.parse(event.newValue) : undefined;
                setStoredValue(newValue);
            }
        }
    });

    const [storedValue, setStoredValue] = React.useState(initialValue);

    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (storageAvailable) {
                const serializedValue = JSON.stringify(valueToStore);
                storage === 'local' ? window.localStorage.setItem(key, serializedValue) : window.sessionStorage.setItem(key, serializedValue);
            }
        } catch (error) {
            throw new Error(`PrimeReact useStorage: Failed to serialize the value at key: ${key}`);
        }
    };

    React.useEffect(() => {
        if (!storageAvailable) {
            setStoredValue(initialValue);
        }
        try {
            const item = storage === 'local' ? window.localStorage.getItem(key) : window.sessionStorage.getItem(key);
            setStoredValue(item ? JSON.parse(item) : initialValue);
        } catch (error) {
            // If error also return initialValue
            setStoredValue(initialValue);
        }

        bindWindowStorageListener();
        return () => unbindWindowStorageListener();
    }, []);

    return [storedValue, setValue];
};

/**
 * Hook to wrap around useState that stores the value in the browser local storage.
 *
 * @param {any} initialValue the initial value to store
 * @param {string} key the key to store the value in local storage
 * @returns a stateful value, and a function to update it.
 */
export const useLocalStorage = (initialValue, key) => {
    return useStorage(initialValue, key, 'local');
};

/**
 * Hook to wrap around useState that stores the value in the browser session storage.
 *
 * @param {any} initialValue the initial value to store
 * @param {string} key the key to store the value in session storage
 * @returns a stateful value, and a function to update it.
 */
export const useSessionStorage = (initialValue, key) => {
    return useStorage(initialValue, key, 'session');
};
/* eslint-enable */
