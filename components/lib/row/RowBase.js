import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';

export const RowBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Row',
        style: null,
        className: null,
        children: undefined
    },
    getCProp: (row, name) => ObjectUtils.getComponentProp(row, name, RowBase.defaultProps)
});
