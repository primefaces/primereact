import { ComponentBase } from '../componentbase/ComponentBase';

export const PanelMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Panel',
        id: null,
        model: null,
        style: null,
        submenuIcon: null,
        className: null,
        multiple: false,
        transitionOptions: null,
        children: undefined
    }
});
