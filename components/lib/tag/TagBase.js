import { ComponentBase } from '../componentbase/ComponentBase';

export const TagBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Tag',
        value: null,
        severity: null,
        rounded: false,
        icon: null,
        style: null,
        className: null,
        children: undefined
    }
});
