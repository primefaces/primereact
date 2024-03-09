import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-message-wrapper {
        display: flex;
        align-items: center;
    }

    .p-message-icon {
        flex-shrink: 0;
    }
    
    .p-message-close {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .p-message-close.p-link {
        margin-left: auto;
        overflow: hidden;
        position: relative;
    }
    
    .p-message-enter {
        opacity: 0;
    }
    
    .p-message-enter-active {
        opacity: 1;
        transition: opacity .3s;
    }
    
    .p-message-exit {
        opacity: 1;
        max-height: 1000px;
    }
    
    .p-message-exit-active {
        opacity: 0;
        max-height: 0;
        margin: 0;
        overflow: hidden;
        transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .3s;
    }
    
    .p-message-exit-active .p-message-close {
        display: none;
    }
}
`;

const classes = {
    uimessage: {
        root: ({ severity }) =>
            classNames('p-message p-component', {
                [`p-message-${severity}`]: severity
            }),
        wrapper: 'p-message-wrapper',
        detail: 'p-message-detail',
        summary: 'p-message-summary',
        icon: 'p-message-icon',
        buttonicon: 'p-message-close-icon',
        button: 'p-message-close p-link',
        transition: 'p-message'
    }
};

export const MessagesBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Messages',
        __parentMetadata: null,
        id: null,
        className: null,
        style: null,
        transitionOptions: null,
        onRemove: null,
        onClick: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
