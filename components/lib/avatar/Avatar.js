import * as React from 'react';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { AvatarBase } from './AvatarBase';

export const Avatar = React.forwardRef((inProps, ref) => {
    const props = AvatarBase.getProps(inProps);

    const elementRef = React.useRef(null);
    const [imageFailed, setImageFailed] = React.useState(false);

    const createContent = () => {
        if (props.image && !imageFailed) {
            return <img src={props.image} alt={props.imageAlt} onError={onImageError}></img>;
        } else if (props.label) {
            return <span className="p-avatar-text">{props.label}</span>;
        } else if (props.icon) {
            return IconUtils.getJSXIcon(props.icon, { className: 'p-avatar-icon' }, { props });
        }

        return null;
    };

    const onImageError = (event) => {
        if (props.imageFallback === 'default') {
            if (!props.onImageError) {
                // fallback to label or icon
                setImageFailed(true);
                event.target.src = null;
            }
        } else {
            // try fallback as an image
            event.target.src = props.imageFallback;
        }

        props.onImageError && props.onImageError(event);
    };

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    const otherProps = AvatarBase.getOtherProps(props);
    const containerClassName = classNames(
        'p-avatar p-component',
        {
            'p-avatar-image': props.image !== null && !imageFailed,
            'p-avatar-circle': props.shape === 'circle',
            'p-avatar-lg': props.size === 'large',
            'p-avatar-xl': props.size === 'xlarge',
            'p-avatar-clickable': !!props.onClick
        },
        props.className
    );

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : createContent();

    return (
        <div ref={elementRef} className={containerClassName} style={props.style} {...otherProps}>
            {content}
            {props.children}
        </div>
    );
});

Avatar.displayName = 'Avatar';
