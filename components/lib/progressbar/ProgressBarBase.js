import { ComponentBase } from '../componentbase/ComponentBase';

export const ProgressBarBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ProgressBar',
        id: null,
        value: null,
        showValue: true,
        unit: '%',
        style: null,
        className: null,
        mode: 'determinate',
        displayValueTemplate: null,
        color: null,
        children: undefined
    }
});
