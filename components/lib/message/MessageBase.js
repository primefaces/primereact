import { ComponentBase } from '../componentbase/ComponentBase';

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
    }
});
