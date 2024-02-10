import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { BanIcon } from '../icons/ban';
import { StarIcon } from '../icons/star';
import { StarFillIcon } from '../icons/starfill';
import { Tooltip } from '../tooltip/Tooltip';
import { IconUtils, ObjectUtils } from '../utils/Utils';
import { RatingBase } from './RatingBase';

export const Rating = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = RatingBase.getProps(inProps, context);

        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(-1);
        const [isFocusVisibleItem, setFocusVisibleItem] = React.useState(true);

        const elementRef = React.useRef(null);

        const { ptm, cx, isUnstyled } = RatingBase.setMetaData({
            props
        });

        useHandleStyle(RatingBase.css.styles, isUnstyled, { name: 'rating' });

        const getPTOptions = (value, key) => {
            return ptm(key, {
                context: {
                    active: value <= props.value
                }
            });
        };

        const enabled = !props.disabled && !props.readOnly;
        const tabIndex = enabled ? 0 : null;

        const rate = (event, i) => {
            if (enabled && props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: i,
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: i
                    }
                });
            }

            setFocusedOptionIndex(i);

            event.preventDefault();
        };

        const clear = (event) => {
            if (enabled && props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: null,
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: null
                    }
                });
            }

            event.preventDefault();
        };

        const onStarKeyDown = (event, value) => {
            switch (event.key) {
                case 'Enter':
                case 'Space':
                    rate(event, value);
                    event.preventDefault();
                    break;
                case 'ArrowLeft':
                case 'ArrowUp':
                    event.preventDefault();
                    rate(event, props.value - 1 < 1 ? props.stars : props.value - 1);
                    break;

                case 'ArrowRight':
                case 'ArrowDown':
                    event.preventDefault();
                    rate(event, props.value + 1 > props.stars ? 1 : props.value + 1);
                    break;

                default:
                    break;
            }
        };

        const onFocus = (event, value) => {
            setFocusedOptionIndex(value);
        };

        const onBlur = (event) => {
            setFocusedOptionIndex(-1);
        };

        const onCancelKeyDown = (event) => {
            if (event.key === 'Enter') {
                clear(event);
            }
        };

        const createIcons = () => {
            return Array.from({ length: props.stars }, (_, i) => i + 1).map((value) => {
                const active = value <= props.value;
                const onIconProps = mergeProps(
                    {
                        className: cx('onIcon')
                    },
                    getPTOptions(props.value, 'onIcon')
                );
                const offIconProps = mergeProps(
                    {
                        className: cx('onIcon')
                    },
                    getPTOptions(props.value, 'offIcon')
                );
                const icon = active ? { type: props.onIcon || <StarFillIcon {...onIconProps} /> } : { type: props.offIcon || <StarIcon {...offIconProps} /> };
                const content = IconUtils.getJSXIcon(icon.type, active ? { ...onIconProps } : { ...offIconProps }, { props });

                const itemProps = mergeProps(
                    {
                        key: value,
                        className: cx('item', { active, focusedOptionIndex, isFocusVisibleItem, value }),
                        'data-p-focused': value === focusedOptionIndex,
                        tabIndex: tabIndex,
                        onClick: (e) => rate(e, value),
                        onKeyDown: (e) => onStarKeyDown(e, value),
                        onFocus: (e) => onFocus(e, value),
                        onBlur: (e) => onBlur(e)
                    },
                    getPTOptions(props.value, 'item')
                );

                return (
                    <div key={value} {...itemProps}>
                        {content}
                    </div>
                );
            });
        };

        const createCancelIcon = () => {
            if (props.cancel) {
                const cancelIconProps = mergeProps(
                    {
                        className: cx('cancelIcon')
                    },
                    ptm('cancelIcon')
                );
                const icon = props.cancelIcon || <BanIcon {...cancelIconProps} />;
                const content = IconUtils.getJSXIcon(icon, { ...cancelIconProps, ...props.cancelIconProps }, { props });

                const cancelItemProps = mergeProps(
                    {
                        className: cx('cancelItem'),
                        onClick: clear,
                        tabIndex: tabIndex,
                        onKeyDown: onCancelKeyDown
                    },
                    ptm('cancelItem')
                );

                return <div {...cancelItemProps}>{content}</div>;
            }

            return null;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: cx('root'),
                style: props.style
            },
            RatingBase.getOtherProps(props),
            ptm('root')
        );

        const cancelIcon = createCancelIcon();
        const icons = createIcons();

        return (
            <>
                <div {...rootProps}>
                    {cancelIcon}
                    {icons}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

Rating.displayName = 'Rating';
