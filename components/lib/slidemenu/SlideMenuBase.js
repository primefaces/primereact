import { ObjectUtils } from '../utils/Utils';

export const SlideMenuBase = {
    defaultProps: {
        __TYPE: 'SlideMenu',
        appendTo: null,
        autoZIndex: true,
        backLabel: 'Back',
        baseZIndex: 0,
        className: null,
        easing: 'ease-out',
        effectDuration: 250,
        id: null,
        menuWidth: 190,
        model: null,
        onHide: null,
        onShow: null,
        onNavigate: null,
        popup: false,
        style: null,
        transitionOptions: null,
        viewportHeight: 175,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, SlideMenuBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, SlideMenuBase.defaultProps)
};
