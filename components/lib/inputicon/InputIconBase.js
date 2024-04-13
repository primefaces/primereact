import { ComponentBase } from '../componentbase/ComponentBase';

const classes = {
    root: 'p-input-icon'
};

export const InputIconBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'InputIcon',
        __parentMetadata: null,
        className: null
    },

    css: {
        classes
    }
});
