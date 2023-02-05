import { ObjectUtils } from '../utils/Utils';

export const OverlayPanelBase = {
    defaultProps: {
        __TYPE: 'OverlayPanel',
        id: null,
        dismissable: true,
        showCloseIcon: false,
        style: null,
        className: null,
        appendTo: null,
        breakpoints: null,
        ariaCloseLabel: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, OverlayPanelBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, OverlayPanelBase.defaultProps)
};
