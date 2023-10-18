import * as React from 'react';
import { classNames, IconUtils, ObjectUtils, mergeProps } from '../utils/Utils';
import { AvatarBase } from './AvatarBase';
import { PrimeReactContext } from '../api/Api';

export const Avatar = React.forwardRef((inProps, ref) => {
    const context = React.useContext(PrimeReactContext);
    const props = AvatarBase.getProps(inProps, context);

    const elementRef = React.useRef(null);
    const [imageFailed, setImageFailed] = React.useState(false);

    const { ptm } = AvatarBase.setMetaData({
        props,
        state: {
            imageFailed: imageFailed
        }
    });

    const createContent = () => {
        if (ObjectUtils.isNotEmpty(props.image) && !imageFailed) {
            const imageProps = mergeProps(
                {
                    src: props.image,
                    onError: onImageError
                },
                ptm('image')
            );

            return <img alt={props.imageAlt} {...imageProps}></img>;
        } else if (props.label) {
            const labelProps = mergeProps(
                {
                    className: 'p-avatar-text'
                },
                ptm('label')
            );

            return <span {...labelProps}>{props.label}</span>;
        } else if (props.icon) {
            const iconProps = mergeProps(
                {
                    className: 'p-avatar-icon'
                },
                ptm('icon')
            );

            return IconUtils.getJSXIcon(props.icon, { ...iconProps }, { props });
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

    const containerClassName = classNames(
        'p-avatar p-component',
        {
            'p-avatar-image': ObjectUtils.isNotEmpty(props.image) && !imageFailed,
            'p-avatar-circle': props.shape === 'circle',
            'p-avatar-lg': props.size === 'large',
            'p-avatar-xl': props.size === 'xlarge',
            'p-avatar-clickable': !!props.onClick
        },
        props.className
    );

    const rootProps = mergeProps(
        {
            ref: elementRef,
            style: props.style,
            className: containerClassName
        },
        AvatarBase.getOtherProps(props),
        ptm('root')
    );

    const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : createContent();

    return (
        <div {...rootProps}>
            {content}
            {props.children}
        </div>
    );
});

Avatar.displayName = 'Avatar';
