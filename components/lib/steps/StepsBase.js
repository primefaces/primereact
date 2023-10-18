import { ComponentBase } from '../componentbase/ComponentBase';

export const StepsBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Steps',
        id: null,
        model: null,
        activeIndex: 0,
        readOnly: true,
        style: null,
        className: null,
        onSelect: null,
        children: undefined
    }
});
