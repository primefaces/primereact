import { ObjectUtils } from '../utils/Utils';

export const MegaMenuBase = {
    defaultProps: {
        __TYPE: 'MegaMenu',
        id: null,
        model: null,
        style: null,
        className: null,
        orientation: 'horizontal',
        breakpoint: undefined,
        scrollHeight: '400px',
        start: null,
        end: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, MegaMenuBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, MegaMenuBase.defaultProps)
};
