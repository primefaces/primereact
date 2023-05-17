import { ComponentBase } from '../componentbase/ComponentBase';

export const ProgressSpinnerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ProgressSpinner',
        id: null,
        style: null,
        className: null,
        strokeWidth: '2',
        fill: 'none',
        animationDuration: '2s',
        children: undefined
    }
});
