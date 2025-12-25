import * as HeadlessSlider from '@primereact/headless/slider';
import type { SliderRootProps } from '@primereact/types/shared/slider';

export const defaultRootProps: SliderRootProps = {
    ...HeadlessSlider.defaultProps,
    as: 'div',
    disabled: undefined,
    tabIndex: 0
};
