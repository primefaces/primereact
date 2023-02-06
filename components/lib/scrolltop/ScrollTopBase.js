import { ObjectUtils } from '../utils/Utils';

export const ScrollTopBase = {
    defaultProps: {
        __TYPE: 'ScrollTop',
        target: 'window',
        threshold: 400,
        icon: 'pi pi-chevron-up',
        behavior: 'smooth',
        className: null,
        style: null,
        transitionOptions: null,
        onShow: null,
        onHide: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ScrollTopBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ScrollTopBase.defaultProps)
};
