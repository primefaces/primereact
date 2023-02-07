import { useTimeout } from './useTimeout';

export const useDebounced = (value, delay) => {
    const [inputValue, setInputValue] = React.useState(value);
    const [debouncedValue, setDebouncedValue] = React.useState(value);
    const timeout = useTimeout(
        () => {
            setDebouncedValue(inputValue);
        },
        delay,
        inputValue !== debouncedValue
    );

    return [inputValue, debouncedValue, setInputValue];
};
