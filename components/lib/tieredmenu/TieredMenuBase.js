import { ObjectUtils } from '../utils/Utils';

export const TieredMenuBase = {
    defaultProps: {
        __TYPE: 'TieredMenu',
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
    getProps: (props) => ObjectUtils.getMergedProps(props, TieredMenuBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TieredMenuBase.defaultProps)
};
