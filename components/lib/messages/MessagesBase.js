import { ComponentBase } from '../componentbase/ComponentBase';

export const MessagesBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Messages',
        id: null,
        className: null,
        style: null,
        transitionOptions: null,
        onRemove: null,
        onClick: null,
        children: undefined
    }
});
