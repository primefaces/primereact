import { ObjectUtils } from '../utils/Utils';

export const ScrollPanelBase = {
    defaultProps: {
        __TYPE: 'ScrollPanel',
        id: null,
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ScrollPanelBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ScrollPanelBase.defaultProps)
};
