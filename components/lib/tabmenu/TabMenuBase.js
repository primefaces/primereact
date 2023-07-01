import { ComponentBase } from '../componentbase/ComponentBase';

export const TabMenuBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'TabMenu',
        id: null,
        model: null,
        activeIndex: 0,
        style: null,
        className: null,
        onTabChange: null,
        children: undefined
    }
});
