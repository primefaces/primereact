import { ObjectUtils } from '../utils/Utils';

export const TagBase = {
    defaultProps: {
        __TYPE: 'Tag',
        value: null,
        severity: null,
        rounded: false,
        icon: null,
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, TagBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TagBase.defaultProps)
};
