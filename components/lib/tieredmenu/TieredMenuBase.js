import { ComponentBase } from '../componentbase/ComponentBase';

export const TieredMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TieredMenu',
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
        breakpoint: undefined,
        scrollHeight: '400px',
        appendTo: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        submenuIcon: null,
        children: undefined
    }
});
