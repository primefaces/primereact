import { ObjectUtils } from '../utils/Utils';

export const RippleBase = {
    defaultProps: {
        __TYPE: 'Ripple',
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, RippleBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, RippleBase.defaultProps)
};
