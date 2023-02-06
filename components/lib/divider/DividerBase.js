import { ObjectUtils } from '../utils/Utils';

export const DividerBase = {
    defaultProps: {
        __TYPE: 'Divider',
        align: null,
        layout: 'horizontal',
        type: 'solid',
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, DividerBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, DividerBase.defaultProps)
};
