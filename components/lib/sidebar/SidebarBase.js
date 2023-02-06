import { ObjectUtils } from '../utils/Utils';

export const SidebarBase = {
    defaultProps: {
        __TYPE: 'Sidebar',
        id: null,
        style: null,
        className: null,
        maskStyle: null,
        maskClassName: null,
        visible: false,
        position: 'left',
        fullScreen: false,
        blockScroll: false,
        baseZIndex: 0,
        dismissable: true,
        showCloseIcon: true,
        ariaCloseLabel: null,
        closeOnEscape: true,
        icons: null,
        modal: true,
        appendTo: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, SidebarBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, SidebarBase.defaultProps)
};
