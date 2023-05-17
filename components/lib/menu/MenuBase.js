import { ComponentBase } from '../componentbase/ComponentBase';

export const MenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Menu',
        id: null,
        model: null,
        popup: false,
        popupAlignment: 'left',
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
        appendTo: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    }
});
