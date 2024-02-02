import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    closeButton: 'p-sidebar-close p-sidebar-icon p-link',
    closeIcon: 'p-sidebar-close-icon',
    mask: ({ props, maskVisibleState }) => {
        const positions = ['left', 'right', 'top', 'bottom'];
        const pos = positions.find((item) => item === props.position);

        return classNames(
            'p-sidebar-mask',
            pos && !props.fullScreen ? `p-sidebar-${pos}` : '',
            {
                'p-component-overlay p-component-overlay-enter': props.modal,
                'p-sidebar-mask-scrollblocker': props.blockScroll,
                'p-sidebar-visible': maskVisibleState,
                'p-sidebar-full': props.fullScreen
            },
            props.maskClassName
        );
    },
    header: ({ props }) =>
        classNames('p-sidebar-header', {
            'p-sidebar-custom-header': props.header
        }),
    content: 'p-sidebar-content',
    icons: 'p-sidebar-icons',
    root: ({ props, context }) =>
        classNames('p-sidebar p-component', props.className, {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    transition: 'p-sidebar'
};

const styles = `
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        top: 0px;
        left: 0px;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
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
        justifyContent: props.position === 'left' ? 'flex-start' : props.position === 'right' ? 'flex-end' : 'center',
        alignItems: props.position === 'top' ? 'flex-start' : props.position === 'bottom' ? 'flex-end' : 'center'
    })
};

export const SidebarBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Sidebar',
        appendTo: null,
        ariaCloseLabel: null,
        baseZIndex: 0,
        blockScroll: false,
        children: undefined,
        className: null,
        closeIcon: null,
        closeOnEscape: true,
        content: null,
        dismissable: true,
        fullScreen: false,
        header: null,
        icons: null,
        id: null,
        maskClassName: null,
        maskStyle: null,
        modal: true,
        onHide: null,
        onShow: null,
        position: 'left',
        showCloseIcon: true,
        style: null,
        transitionOptions: null,
        visible: false
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
