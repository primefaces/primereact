import { ObjectUtils } from '../utils/Utils';

export const ToastBase = {
    defaultProps: {
        __TYPE: 'Toast',
        id: null,
        className: null,
        style: null,
        baseZIndex: 0,
        position: 'top-right',
        transitionOptions: null,
        appendTo: 'self',
        onClick: null,
        onRemove: null,
        onShow: null,
        onHide: null,
        onMouseEnter: null,
        onMouseLeave: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ToastBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ToastBase.defaultProps)
};
