import { ObjectUtils } from '../utils/Utils';

export const TabMenuBase = {
    defaultProps: {
        __TYPE: 'TabMenu',
        id: null,
        model: null,
        activeIndex: 0,
        style: null,
        className: null,
        onTabChange: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, TabMenuBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TabMenuBase.defaultProps)
};
