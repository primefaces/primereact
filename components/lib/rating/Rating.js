import * as React from 'react';
import { BanIcon } from '../icons/ban';
import { StarIcon } from '../icons/star';
import { StarFillIcon } from '../icons/starfill';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { RatingBase } from './RatingBase';
import { PrimeReactContext } from '../api/Api';

export const Rating = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = RatingBase.getProps(inProps, context);

        const elementRef = React.useRef(null);
        const { ptm } = RatingBase.setMetaData({
            props
        });

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
            if (event.key === 'Enter') {
                rate(event, value);
            }
        };

        const onCancelKeyDown = (event) => {
            if (event.key === 'Enter') {
                clear(event);
            }
        };

        const createIcons = () => {
            return Array.from({ length: props.stars }, (_, i) => i + 1).map((value) => {
                const active = value <= props.value;
                const className = classNames('p-rating-item', { 'p-rating-item-active': active });
                const iconClassName = 'p-rating-icon';
                const onIconProps = mergeProps(
                    {
                        className: iconClassName
                    },
                    getPTOptions(props.value, 'onIcon')
                );
                const offIconProps = mergeProps(
                    {
                        className: iconClassName
                    },
                    getPTOptions(props.value, 'offIcon')
                );
                const icon = active ? { type: props.onIcon || <StarFillIcon {...onIconProps} /> } : { type: props.offIcon || <StarIcon {...offIconProps} /> };
                const content = IconUtils.getJSXIcon(icon.type, active ? { ...onIconProps } : { ...offIconProps }, { props });

                const itemProps = mergeProps(
                    {
                        key: value,
                        className: className,
                        tabIndex: tabIndex,
                        onClick: (e) => rate(e, value),
                        onKeyDown: (e) => onStarKeyDown(e, value)
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
                const iconClassName = 'p-rating-icon p-rating-cancel';
                const cancelIconProps = mergeProps(
                    {
                        className: iconClassName
                    },
                    ptm('cancelIcon')
                );
                const icon = props.cancelIcon || <BanIcon {...cancelIconProps} />;
                const content = IconUtils.getJSXIcon(icon, { ...cancelIconProps, ...props.cancelIconProps }, { props });

                const cancelItemProps = mergeProps(
                    {
                        className: 'p-rating-item p-rating-cancel-item',
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
        const className = classNames(
            'p-rating',
            {
                'p-disabled': props.disabled,
                'p-readonly': props.readOnly
            },
            props.className
        );

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: className,
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
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

Rating.displayName = 'Rating';
