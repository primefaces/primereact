import { ComponentBase } from '../componentbase/ComponentBase';

export const TimelineBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Timeline',
        align: 'left',
        className: null,
        content: null,
        dataKey: null,
        layout: 'vertical',
        marker: null,
        opposite: null,
        value: null,
        children: undefined
    }
});
