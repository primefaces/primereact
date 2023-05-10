import { ComponentBase } from '../componentbase/ComponentBase';

export const CardBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Card',
        id: null,
        header: null,
        footer: null,
        title: null,
        subTitle: null,
        style: null,
        className: null,
        children: undefined
    }
});
