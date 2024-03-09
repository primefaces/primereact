import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

export const MessageBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Message',
        id: null,
        className: null,
        style: null,
        text: null,
        icon: null,
        severity: 'info',
        content: null,
        children: undefined
    },
    css: {
        classes: {
            root: ({ props }) =>
                classNames('p-inline-message p-component', {
                    'p-inline-message-info': props.severity === 'info',
                    'p-inline-message-warn': props.severity === 'warn',
                    'p-inline-message-error': props.severity === 'error',
                    'p-inline-message-success': props.severity === 'success',
                    'p-inline-message-icon-only': !props.text
                }),
            icon: 'p-inline-message-icon',
            text: 'p-inline-message-text'
        },
        styles: `
        @layer primereact {
            .p-inline-message {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                vertical-align: top;
            }

            .p-inline-message-icon {
                flex-shrink: 0;
            }
            
            .p-inline-message-icon-only .p-inline-message-text {
                visibility: hidden;
                width: 0;
            }
            
            .p-fluid .p-inline-message {
                display: flex;
            }        
        }
        `
    }
});
