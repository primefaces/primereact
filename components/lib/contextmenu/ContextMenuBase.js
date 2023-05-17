import { ComponentBase } from '../componentbase/ComponentBase';

export const ContextMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ContextMenu',
        id: null,
        model: null,
        style: null,
        className: null,
        global: false,
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
