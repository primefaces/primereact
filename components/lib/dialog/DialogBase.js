import { ComponentBase } from '../componentbase/ComponentBase';

export const DialogBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Dialog',
        appendTo: null,
        ariaCloseIconLabel: null,
        baseZIndex: 0,
        blockScroll: false,
        breakpoints: null,
        className: null,
        closable: true,
        closeIcon: null,
        closeOnEscape: true,
        contentClassName: null,
        contentStyle: null,
        dismissableMask: false,
        draggable: true,
        focusOnShow: true,
        footer: null,
        header: null,
        headerClassName: null,
        headerStyle: null,
        icons: null,
        id: null,
        keepInViewport: true,
        maskClassName: null,
        maskStyle: null,
        maximizable: false,
        maximizeIcon: null,
        maximized: false,
        minX: 0,
        minY: 0,
        minimizeIcon: null,
        modal: true,
        onClick: null,
        onDrag: null,
        onDragEnd: null,
        onDragStart: null,
        onHide: null,
        onMaskClick: null,
        onMaximize: null,
        onResize: null,
        onResizeEnd: null,
        onResizeStart: null,
        onShow: null,
        position: 'center',
        resizable: true,
        rtl: false,
        showHeader: true,
        style: null,
        transitionOptions: null,
        visible: false,
        children: undefined
    }
});
