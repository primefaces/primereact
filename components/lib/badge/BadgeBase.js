import { ObjectUtils } from '../utils/Utils';

export const BadgeBase = {
    defaultProps: {
        __TYPE: 'Badge',
        value: null,
        severity: null,
        size: null,
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, BadgeBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, BadgeBase.defaultProps)
};
