import { createStyles } from '@primereact/styles/utils';
import type { SliderInstance } from '@primereact/types/shared/slider';
import { style } from '@primeuix/styles/slider';

export const styles = createStyles<SliderInstance>({
    name: 'slider',
    style,
    classes: {
        root: ({ props }) => [
            'p-slider p-component',
            {
                'p-disabled': props.disabled,
                'p-slider-horizontal': props.orientation === 'horizontal',
                'p-slider-vertical': props.orientation === 'vertical'
            }
        ],
        range: 'p-slider-range',
        thumb: 'p-slider-handle'
    },
    inlineStyles: {
        range: { position: 'absolute' },
        thumb: { position: 'absolute' }
    }
});
