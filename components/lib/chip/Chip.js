import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { TimesCircleIcon } from '../icons/timescircle';
import { classNames, IconUtils, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { ChipBase } from './ChipBase';

export const Chip = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ChipBase.getProps(inProps, context);
        const elementRef = React.useRef(null);
        const [visibleState, setVisibleState] = React.useState(true);
        const { ptm, cx, isUnstyled } = ChipBase.setMetaData({
            props
        });

        useHandleStyle(ChipBase.css.styles, isUnstyled, { name: 'chip' });

        const onKeyDown = (event) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Backspace') {
                close(event);
            }
        };

        const close = (event) => {
            let result = true;

            if (props.onRemove) {
                result = props.onRemove({
                    originalEvent: event,
                    value: props.label || props.image || props.icon
                });
            }

            if (result !== false) {
                setVisibleState(false);
            }
        };

        const createContent = () => {
            let content = [];

            const removeIconProps = mergeProps(
                {
                    role: 'button',
                    tabIndex: 0,
                    className: cx('removeIcon'),
                    onClick: close,
                    onKeyDown
                },
                ptm('removeIcon')
            );

            const icon = props.removeIcon || <TimesCircleIcon {...removeIconProps} key={UniqueComponentId('removeIcon')} />;

            if (props.image) {
                const imageProps = mergeProps(
                    {
                        src: props.image,
                        onError: props.onImageError
                    },
                    ptm('image')
                );

                content.push(<img alt={props.imageAlt} {...imageProps} key={UniqueComponentId('image')} />);
            } else if (props.icon) {
                const chipIconProps = mergeProps(
                    {
                        className: cx('icon')
                    },
                    ptm('icon')
                );

                content.push(IconUtils.getJSXIcon(props.icon, { ...chipIconProps }, { props }));
            }

            if (props.label) {
                const labelProps = mergeProps(
                    {
                        className: cx('label')
                    },
                    ptm('label')
                );

                content.push(
                    <span {...labelProps} key={UniqueComponentId('label')}>
                        {props.label}
                    </span>
                );
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
                    className: classNames(props.className, cx('root')),
                    'aria-label': props.label
                },
                ChipBase.getOtherProps(props),
                ptm('root')
            );

            return (
                <div {...rootProps} key={UniqueComponentId('chip')}>
                    {content}
                </div>
            );
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getVisible: () => visibleState,
            setVisible: (visible) => setVisibleState(visible),
            getElement: () => elementRef.current
        }));

        return visibleState && createElement();
    })
);

Chip.displayName = 'Chip';
