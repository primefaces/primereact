import type { useRatingProps } from '@primereact/types/shared/rating';

export const defaultProps: useRatingProps = {
    modelValue: undefined,
    defaultValue: undefined,
    stars: 5,
    disabled: false,
    readOnly: false,
    allowHalf: true,
    onValueChange: undefined
};
