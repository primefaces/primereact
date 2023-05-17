import { ComponentBase } from '../componentbase/ComponentBase';

export const AvatarBase = ComponentBase.extend({
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
    }
});
