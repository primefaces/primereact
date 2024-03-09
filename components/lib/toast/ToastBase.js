import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-toast {
        width: calc(100% - var(--toast-indent, 0px));
        max-width: 25rem;
    }
    
    .p-toast-message-icon {
        flex-shrink: 0;
    }
    
    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
    }
    
    .p-toast-message-text {
        flex: 1 1 auto;
    }
    
    .p-toast-summary {
        overflow-wrap: anywhere;
    }
    
    .p-toast-detail {
        overflow-wrap: anywhere;
    }
    
    .p-toast-top-center {
        transform: translateX(-50%);
    }
    
    .p-toast-bottom-center {
        transform: translateX(-50%);
    }
    
    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }
    
    .p-toast-icon-close {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-toast-icon-close.p-link {
        cursor: pointer;
    }
    
    /* Animations */
    .p-toast-message-enter {
        opacity: 0;
        transform: translateY(50%);
    }
    
    .p-toast-message-enter-active {
        opacity: 1;
        transform: translateY(0);
        transition: transform 0.3s, opacity 0.3s;
    }
    
    .p-toast-message-enter-done {
        transform: none;
    }
    
    .p-toast-message-exit {
        opacity: 1;
        max-height: 1000px;
    }
    
    .p-toast .p-toast-message.p-toast-message-exit-active {
        opacity: 0;
        max-height: 0;
        margin-bottom: 0;
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    }
}
`;

const classes = {
    root: ({ props, context }) =>
        classNames('p-toast p-component p-toast-' + props.position, props.className, {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    message: {
        message: ({ severity }) =>
            classNames('p-toast-message', {
                [`p-toast-message-${severity}`]: severity
            }),
        content: 'p-toast-message-content',
        buttonicon: 'p-toast-icon-close-icon',
        closeButton: 'p-toast-icon-close p-link',
        icon: 'p-toast-message-icon',
        text: 'p-toast-message-text',
        summary: 'p-toast-summary',
        detail: 'p-toast-detail'
    },
    transition: 'p-toast-message'
};

const inlineStyles = {
    root: ({ props }) => ({
        position: 'fixed',
        top: props.position === 'top-right' || props.position === 'top-left' || props.position === 'top-center' ? '20px' : props.position === 'center' ? '50%' : null,
        right: (props.position === 'top-right' || props.position === 'bottom-right') && '20px',
        bottom: (props.position === 'bottom-left' || props.position === 'bottom-right' || props.position === 'bottom-center') && '20px',
        left: props.position === 'top-left' || props.position === 'bottom-left' ? '20px' : props.position === 'center' || props.position === 'top-center' || props.position === 'bottom-center' ? '50%' : null
    })
};

export const ToastBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Toast',
        id: null,
        className: null,
        content: null,
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
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
