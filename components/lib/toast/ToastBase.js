import { ComponentBase } from '../componentbase/ComponentBase';

export const ToastBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Toast',
        id: null,
        className: null,
        style: null,
        baseZIndex: 0,
        position: 'top-right',
        transitionOptions: null,
        appendTo: 'self',
        onClick: null,
        onRemove: null,
        onShow: null,
        onHide: null,
        onMouseEnter: null,
        onMouseLeave: null,
        children: undefined
    }
});
