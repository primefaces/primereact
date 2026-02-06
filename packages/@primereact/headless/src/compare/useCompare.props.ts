import { defaultProps as defaultSliderProps } from '@primereact/headless/slider';
import type { useCompareProps } from '@primereact/types/shared/compare';

export const defaultProps: useCompareProps = {
    ...defaultSliderProps,
    defaultValue: 50,
    slideOnHover: false
};
