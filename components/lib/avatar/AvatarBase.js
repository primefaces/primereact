import { ComponentBase } from '../componentbase/ComponentBase';
import { ObjectUtils, classNames } from '../utils/Utils';

const classes = {
    root: ({ props, state }) =>
        classNames('p-avatar p-component', {
            'p-avatar-image': ObjectUtils.isNotEmpty(props.image) && !state.imageFailed,
            'p-avatar-circle': props.shape === 'circle',
            'p-avatar-lg': props.size === 'large',
            'p-avatar-xl': props.size === 'xlarge',
            'p-avatar-clickable': !!props.onClick
        }),
    label: 'p-avatar-text',
    icon: 'p-avatar-icon'
};

const styles = `
@layer primereact {
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }
    
    .p-avatar.p-avatar-image {
        background-color: transparent;
    }
    
    .p-avatar.p-avatar-circle {
        border-radius: 50%;
    }
    
    .p-avatar.p-avatar-circle img {
        border-radius: 50%;
    }
    
    .p-avatar .p-avatar-icon {
        font-size: 1rem;
    }
    
    .p-avatar img {
        width: 100%;
        height: 100%;
    }
    
    .p-avatar-clickable {
        cursor: pointer;
    }
}
`;

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
    },
    css: {
        classes,
        styles
    }
});
