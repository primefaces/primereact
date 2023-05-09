import { ComponentBase } from '../componentbase/ComponentBase';

export const ToolbarBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Toolbar',
        id: null,
        style: null,
        className: null,
        left: null,
        right: null,
        start: null,
        center: null,
        end: null,
        children: undefined
    }
});
