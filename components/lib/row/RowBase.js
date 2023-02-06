import { ObjectUtils } from '../utils/Utils';

export const RowBase = {
    defaultProps: {
        __TYPE: 'Row',
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, RowBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, RowBase.defaultProps),
    getCProp: (row, name) => ObjectUtils.getComponentProp(row, name, RowBase.defaultProps)
};
