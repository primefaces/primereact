import { ObjectUtils } from '../utils/Utils';

export const StyleClassBase = {
    defaultProps: {
        __TYPE: 'StyleClass',
        nodeRef: null,
        selector: null,
        enterClassName: null,
        enterFromClassName: null,
        enterActiveClassName: null,
        enterToClassName: null,
        leaveClassName: null,
        leaveFromClassName: null,
        leaveActiveClassName: null,
        leaveToClassName: null,
        hideOnOutsideClick: false,
        toggleClassName: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, StyleClassBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, StyleClassBase.defaultProps)
};
