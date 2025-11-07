import type { usePasswordProps } from '@primereact/types/shared/password';

export const defaultProps: usePasswordProps = {
    value: undefined,
    defaultValue: undefined,
    onValueChange: undefined,
    strengthOptions: [
        { id: 0, value: 'Too weak', minDiversity: 0, minLength: 2 },
        { id: 1, value: 'Weak', minDiversity: 2, minLength: 4 },
        { id: 2, value: 'Medium', minDiversity: 3, minLength: 8 },
        { id: 3, value: 'Strong', minDiversity: 4, minLength: 12 }
    ],
    appendTo: 'body'
};
