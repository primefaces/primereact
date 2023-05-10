import { ComponentBase } from '../componentbase/ComponentBase';

export const OverlayPanelBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'OverlayPanel',
        id: null,
        dismissable: true,
        showCloseIcon: false,
        closeIcon: null,
        style: null,
        className: null,
        appendTo: null,
        breakpoints: null,
        ariaCloseLabel: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    }
});
