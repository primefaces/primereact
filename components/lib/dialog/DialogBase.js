import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    closeButtonIcon: 'p-dialog-header-close-icon',
    closeButton: 'p-dialog-header-icon p-dialog-header-close p-link',
    maximizableIcon: 'p-dialog-header-maximize-icon',
    maximizableButton: 'p-dialog-header-icon p-dialog-header-maximize p-link',
    header: ({ props }) => classNames('p-dialog-header', props.headerClassName),
    headerTitle: 'p-dialog-title',
    headerIcons: 'p-dialog-header-icons',
    content: ({ props }) => classNames('p-dialog-content', props.contentClassName),
    footer: ({ props }) => classNames('p-dialog-footer', props.footerClassName),
    mask: ({ props, maskVisibleState }) => {
        const positions = ['center', 'left', 'right', 'top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right'];
        const pos = positions.find((item) => item === props.position || item.replace('-', '') === props.position);

        return classNames(
            'p-dialog-mask',
            pos ? `p-dialog-${pos}` : '',
            {
                'p-component-overlay p-component-overlay-enter': props.modal,
                'p-dialog-visible': maskVisibleState,
                'p-dialog-draggable': props.draggable,
                'p-dialog-resizable': props.resizable
            },
            props.maskClassName
        );
    },
    root: ({ props, maximized, context }) =>
        classNames('p-dialog p-component', props.className, {
            'p-dialog-rtl': props.rtl,
            'p-dialog-maximized': maximized,
            'p-dialog-default': !maximized,
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    transition: 'p-dialog'
};

const styles = `
@layer primereact {
    .p-dialog-mask {
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-dialog-visible {
        display: flex;
    }
    
    .p-dialog-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-dialog {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        max-height: 90%;
        transform: scale(1);
        position: relative;
    }
    
    .p-dialog-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-dialog-header {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-dialog-footer {
        flex-shrink: 0;
    }
    
    .p-dialog .p-dialog-header-icons {
        display: flex;
        align-items: center;
        align-self: flex-start;
        flex-shrink: 0;
    }
    
    .p-dialog .p-dialog-header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-dialog .p-dialog-title {
        flex-grow: 1;
    }
    
    /* Fluid */
    .p-fluid .p-dialog-footer .p-button {
        width: auto;
    }
    
    /* Animation */
    /* Center */
    .p-dialog-enter {
        opacity: 0;
        transform: scale(0.7);
    }
    
    .p-dialog-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-dialog-enter-done {
        transform: none;
    }
    
    .p-dialog-exit-active {
        opacity: 0;
        transform: scale(0.7);
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Top, Bottom, Left, Right, Top* and Bottom* */
    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-top-left .p-dialog,
    .p-dialog-top-right .p-dialog,
    .p-dialog-bottom-left .p-dialog,
    .p-dialog-bottom-right .p-dialog {
        margin: 0.75em;
    }
    
    .p-dialog-top .p-dialog-enter,
    .p-dialog-top .p-dialog-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-dialog-bottom .p-dialog-enter,
    .p-dialog-bottom .p-dialog-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-dialog-left .p-dialog-enter,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-enter,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-enter,
    .p-dialog-bottom-left .p-dialog-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-dialog-right .p-dialog-enter,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-enter,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-enter,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-dialog-top .p-dialog-enter-active,
    .p-dialog-bottom .p-dialog-enter-active,
    .p-dialog-left .p-dialog-enter-active,
    .p-dialog-top-left .p-dialog-enter-active,
    .p-dialog-bottom-left .p-dialog-enter-active,
    .p-dialog-right .p-dialog-enter-active,
    .p-dialog-top-right .p-dialog-enter-active,
    .p-dialog-bottom-right .p-dialog-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s ease-out;
    }
    
    .p-dialog-top .p-dialog-exit-active,
    .p-dialog-bottom .p-dialog-exit-active,
    .p-dialog-left .p-dialog-exit-active,
    .p-dialog-top-left .p-dialog-exit-active,
    .p-dialog-bottom-left .p-dialog-exit-active,
    .p-dialog-right .p-dialog-exit-active,
    .p-dialog-top-right .p-dialog-exit-active,
    .p-dialog-bottom-right .p-dialog-exit-active {
        transition: all 0.3s ease-out;
    }
    
    /* Maximize */
    .p-dialog-maximized {
        transition: none;
        transform: none;
        margin: 0;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }
    
    .p-dialog-maximized .p-dialog-content {
        flex-grow: 1;
    }
    
    .p-confirm-dialog .p-dialog-content {
        display: flex;
        align-items: center;
    }
    
    /* Resizable */
    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }
    
    .p-dialog-draggable .p-dialog-header {
        cursor: move;
    }        
}
`;

const inlineStyles = {
    mask: ({ props }) => ({
        position: 'fixed',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        display: 'flex',
        justifyContent:
            props.position === 'left' || props.position === 'top-left' || props.position === 'bottom-left' ? 'flex-start' : props.position === 'right' || props.position === 'top-right' || props.position === 'bottom-right' ? 'flex-end' : 'center',
        alignItems:
            props.position === 'top' || props.position === 'top-left' || props.position === 'top-right' ? 'flex-start' : props.position === 'bottom' || props.position === 'bottom-left' || props.position === 'bottom-right' ? 'flex-end' : 'center',
        pointerEvents: !props.modal && 'none',
        ...props.maskStyle
    })
};

export const DialogBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Dialog',
        __parentMetadata: null,
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
        footerClassName: null,
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
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
