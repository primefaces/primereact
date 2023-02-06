import { ObjectUtils } from '../utils/Utils';

export const AvatarBase = {
    defaultProps: {
        __TYPE: 'Avatar',
        className: null,
        icon: null,
        image: null,
        imageAlt: 'avatar',
        imageFallback: 'default',
        label: null,
        onImageError: null,
        shape: 'square',
        size: 'normal',
        style: null,
        template: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, AvatarBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, AvatarBase.defaultProps)
};
