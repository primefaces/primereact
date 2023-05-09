import { ComponentBase } from '../componentbase/ComponentBase';

export const DividerBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Divider',
        align: null,
        layout: 'horizontal',
        type: 'solid',
        style: null,
        className: null,
        children: undefined
    }
});
