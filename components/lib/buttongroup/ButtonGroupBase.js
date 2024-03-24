import { ComponentBase } from '../componentbase/ComponentBase';

const classes = {
    root: 'p-button-group p-component'
};

export const ButtonGroupBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ButtonGroup',
        children: undefined
    },
    css: {
        classes
    }
});
