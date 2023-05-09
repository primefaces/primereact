import { ObjectUtils } from '../utils/Utils';

export const MenuBase = {
    defaultProps: {
        __TYPE: 'Menu',
        id: null,
        model: null,
        popup: false,
        style: null,
        className: null,
        autoZIndex: true,
        baseZIndex: 0,
        appendTo: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MenuBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MenuBase.defaultProps)
};
