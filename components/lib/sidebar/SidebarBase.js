import { ComponentBase } from '../componentbase/ComponentBase';

export const SidebarBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Sidebar',
        id: null,
        style: null,
        className: null,
        maskStyle: null,
        maskClassName: null,
        visible: false,
        position: 'left',
        fullScreen: false,
        blockScroll: false,
        baseZIndex: 0,
        dismissable: true,
        showCloseIcon: true,
        closeIcon: null,
        ariaCloseLabel: null,
        closeOnEscape: true,
        icons: null,
        modal: true,
        appendTo: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    }
});
