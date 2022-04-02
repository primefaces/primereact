import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';

export const Avatar = React.forwardRef((props, ref) => {

    const createContent = () => {
        if (props.label) {
            return <span className="p-avatar-text">{props.label}</span>
        }
        else if (props.icon) {
            return IconUtils.getJSXIcon(props.icon, { className: 'p-avatar-icon' }, { props });
        }
        else if (props.image) {
            return <img src={props.image} alt={props.imageAlt} onError={props.onImageError}></img>
        }

        return null;
    }

    const otherProps = ObjectUtils.findDiffKeys(props, Avatar.defaultProps);
    const containerClassName = classNames('p-avatar p-component', {
        'p-avatar-image': props.image != null,
        'p-avatar-circle': props.shape === 'circle',
        'p-avatar-lg': props.size === 'large',
        'p-avatar-xl': props.size === 'xlarge',
        'p-avatar-clickable': !!props.onClick
    }, props.className);

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : createContent();

    return (
        <div className={containerClassName} style={props.style} {...otherProps}>
            {content}
            {props.children}
        </div>
    )
});

Avatar.displayName = 'Avatar';
Avatar.defaultProps = {
    __TYPE: 'Avatar',
    label: null,
    icon: null,
    image: null,
    size: 'normal',
    shape: 'square',
    style: null,
    className: null,
    template: null,
    imageAlt: 'avatar',
    onImageError: null
}
