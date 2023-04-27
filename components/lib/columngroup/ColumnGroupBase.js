import { ObjectUtils } from '../utils/Utils';

export const ColumnGroupBase = {
    defaultProps: {
        __TYPE: 'ColumnGroup',
        children: undefined
    },
    getCProp: (group, name) => ObjectUtils.getComponentProp(group, name, ColumnGroupBase.defaultProps),
    getCProps: (group) => ObjectUtils.getComponentProps(group, ColumnGroupBase.defaultProps)
};
