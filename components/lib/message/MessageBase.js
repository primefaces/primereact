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
            root: ({ props: { severity } }) =>
                classNames('p-inline-message p-component', {
                    [`p-inline-message-${severity}`]: severity
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
