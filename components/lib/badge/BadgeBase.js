import { ComponentBase } from '../componentbase/ComponentBase';

export const BadgeBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Badge',
        value: null,
        severity: null,
        size: null,
        style: null,
        className: null,
        children: undefined
    }
});
