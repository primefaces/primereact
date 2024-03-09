import PrimeReact from '../api/Api';
import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-confirm-popup-flipped {
        margin-top: 0;
        margin-bottom: 10px;
    }
    
    .p-confirm-popup:after, .p-confirm-popup:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }
    
    .p-confirm-popup:after {
        border-width: 8px;
        margin-left: -8px;
    }
    
    .p-confirm-popup:before {
        border-width: 10px;
        margin-left: -10px;
    }
    
    .p-confirm-popup-flipped:after, .p-confirm-popup-flipped:before {
        bottom: auto;
        top: 100%;
    }
    
    .p-confirm-popup.p-confirm-popup-flipped:after {
        border-bottom-color: transparent;
    }
    
    .p-confirm-popup.p-confirm-popup-flipped:before {
        border-bottom-color: transparent
    }
    
    .p-confirm-popup .p-confirm-popup-content {
        display: flex;
        align-items: center;
    }
}
`;

const classes = {
    root: ({ context, getPropValue }) =>
        classNames('p-confirm-popup p-component', getPropValue('className'), {
            'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false
        }),
    acceptButton: ({ getPropValue }) => classNames('p-confirm-popup-accept p-button-sm', getPropValue('acceptClassName')),
    rejectButton: ({ getPropValue }) =>
        classNames(
            'p-confirm-popup-reject p-button-sm',
            {
                'p-button-text': !getPropValue('rejectClassName')
            },
            getPropValue('rejectClassName')
        ),
    content: 'p-confirm-popup-content',
    icon: 'p-confirm-popup-icon',
    message: 'p-confirm-popup-message',
    footer: 'p-confirm-popup-footer',
    transition: 'p-connected-overlay'
};

export const ConfirmPopupBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ConfirmPopup',
        accept: null,
        acceptClassName: null,
        acceptIcon: null,
        acceptLabel: null,
        appendTo: null,
        children: undefined,
        className: null,
        closeOnEscape: true,
        defaultFocus: 'accept',
        dismissable: true,
        footer: null,
        icon: null,
        message: null,
        onHide: null,
        onShow: null,
        reject: null,
        rejectClassName: null,
        rejectIcon: null,
        rejectLabel: null,
        style: null,
        tagKey: undefined,
        target: null,
        transitionOptions: null,
        visible: false
    },
    css: {
        classes,
        styles
    }
});
