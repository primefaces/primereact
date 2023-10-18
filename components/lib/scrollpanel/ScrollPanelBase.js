import { ComponentBase } from '../componentbase/ComponentBase';

export const ScrollPanelBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ScrollPanel',
        id: null,
        style: null,
        className: null,
        children: undefined
    }
});
