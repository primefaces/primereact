import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { AvatarBase } from './AvatarBase';

export const Avatar = React.forwardRef((inProps, ref) => {
    const mergeProps = useMergeProps();
    const context = React.useContext(PrimeReactContext);
    const props = AvatarBase.getProps(inProps, context);

    const elementRef = React.useRef(null);
    const [imageFailed, setImageFailed] = React.useState(false);
    const [nested, setNested] = React.useState(false);

    const { ptm, cx, isUnstyled } = AvatarBase.setMetaData({
        props,
        state: {
            imageFailed: imageFailed,
            nested
        }
    });

    useHandleStyle(AvatarBase.css.styles, isUnstyled, { name: 'avatar' });

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
                    className: cx('label')
                },
                ptm('label')
            );

            return <span {...labelProps}>{props.label}</span>;
        } else if (props.icon) {
            const iconProps = mergeProps(
                {
                    className: cx('icon')
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

    React.useEffect(() => {
        const nested = DomHandler.isAttributeEquals(elementRef.current.parentElement, 'data-pc-name', 'avatargroup');

        setNested(nested);
    }, []);

    React.useImperativeHandle(ref, () => ({
        props,
        getElement: () => elementRef.current
    }));

    const rootProps = mergeProps(
        {
            ref: elementRef,
            style: props.style,
            className: classNames(props.className, cx('root', { imageFailed }))
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
