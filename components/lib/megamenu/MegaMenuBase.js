import { ComponentBase } from '../componentbase/ComponentBase';

export const MegaMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'MegaMenu',
        id: null,
        model: null,
        style: null,
        className: null,
        orientation: 'horizontal',
        breakpoint: undefined,
        scrollHeight: '400px',
        start: null,
        submenuIcon: null,
        menuIcon: null,
        end: null,
        children: undefined
    }
});
