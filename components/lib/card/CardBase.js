import { ObjectUtils } from '../utils/Utils';

export const CardBase = {
    defaultProps: {
        __TYPE: 'Card',
        id: null,
        header: null,
        footer: null,
        title: null,
        subTitle: null,
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, CardBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, CardBase.defaultProps)
};
