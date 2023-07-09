import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useStyle } from '../hooks/Hooks';
import { TimesCircleIcon } from '../icons/timescircle';
import { IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { ChipBase } from './ChipBase';

export const Chip = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ChipBase.getProps(inProps, context);

        const elementRef = React.useRef(null);
        const [visibleState, setVisibleState] = React.useState(true);

        useStyle(ChipBase.css.styles, { name: 'primereact_chip_style' });

        const { ptm, cx } = ChipBase.setMetaData({
            props
        });

        const onKeyDown = (event) => {
            if (event.keyCode === 13) {
                // enter
                close(event);
            }
        };

        const close = (event) => {
            setVisibleState(false);

            if (props.onRemove) {
                props.onRemove(event);
            }
        };

        const createContent = () => {
            let content = [];

            const removeIconProps = mergeProps(
                {
                    key: 'removeIcon',
                    tabIndex: 0,
                    className: cx('removeIcon'),
                    onClick: close,
                    onKeyDown
                },
                ptm('removeIcon')
            );

            const icon = props.removeIcon || <TimesCircleIcon {...removeIconProps} />;

            if (props.image) {
                const imageProps = mergeProps(
                    {
                        key: 'image',
                        src: props.image,
                        onError: props.onImageError
                    },
                    ptm('image')
                );

                content.push(<img alt={props.imageAlt} {...imageProps}></img>);
            } else if (props.icon) {
                const chipIconProps = mergeProps(
                    {
                        key: 'icon',
                        className: cx('icon')
                    },
                    ptm('icon')
                );

                content.push(IconUtils.getJSXIcon(props.icon, { ...chipIconProps }, { props }));
            }

            if (props.label) {
                const labelProps = mergeProps(
                    {
                        key: 'label',
                        className: cx('label')
                    },
                    ptm('label')
                );

                content.push(<span {...labelProps}>{props.label}</span>);
            }

            if (props.removable) {
                content.push(IconUtils.getJSXIcon(icon, { ...removeIconProps }, { props }));
            }

            return content;
        };

        const createElement = () => {
            const content = props.template ? ObjectUtils.getJSXElement(props.template, props) : createContent();

            const rootProps = mergeProps(
                {
                    ref: elementRef,
                    style: props.style,
                    className: cx('root')
                },
                ChipBase.getOtherProps(props),
                ptm('root')
            );

            return <div {...rootProps}>{content}</div>;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        return visibleState && createElement();
    })
);

Chip.displayName = 'Chip';
