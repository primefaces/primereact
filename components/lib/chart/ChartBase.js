import { ComponentBase } from '../componentbase/ComponentBase';

export const ChartBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Chart',
        id: null,
        type: null,
        data: null,
        options: null,
        plugins: null,
        width: null,
        height: null,
        style: null,
        className: null,
        children: undefined
    }
});
