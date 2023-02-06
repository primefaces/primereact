import { ObjectUtils } from '../utils/Utils';

export const AvatarGroupBase = {
    defaultProps: {
        __TYPE: 'AvatarGroup',
        style: null,
        className: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, AvatarGroupBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, AvatarGroupBase.defaultProps)
};
