import { ComponentBase } from '../componentbase/ComponentBase';

export const DockBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Dock',
        id: null,
        style: null,
        className: null,
        model: null,
        position: 'bottom',
        magnification: true,
        header: null,
        footer: null,
        children: undefined
    }
});
