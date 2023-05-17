import * as React from 'react';
import { BanIcon } from '../icons/ban';
import { StarIcon } from '../icons/star';
import { StarFillIcon } from '../icons/starfill';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, IconUtils, ObjectUtils } from '../utils/Utils';
import { RatingBase } from './RatingBase';

export const Rating = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = RatingBase.getProps(inProps);

        const elementRef = React.useRef(null);
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
                const icon = active ? { type: props.onIcon || <StarFillIcon className={iconClassName} /> } : { type: props.offIcon || <StarIcon className={iconClassName} /> };
                const content = IconUtils.getJSXIcon(icon.type, { className: iconClassName, ...icon.props }, { props });

                return (
                    <div key={value} className={className} tabIndex={tabIndex} onClick={(e) => rate(e, value)} onKeyDown={(e) => onStarKeyDown(e, value)}>
                        {content}
                    </div>
                );
            });
        };

        const createCancelIcon = () => {
            if (props.cancel) {
                const iconClassName = 'p-rating-icon p-rating-cancel';
                const icon = props.cancelIcon || <BanIcon className={iconClassName} />;
                const content = IconUtils.getJSXIcon(icon, { className: { iconClassName }, ...props.cancelIconProps }, { props });

                return (
                    <div className="p-rating-item p-rating-cancel-item" onClick={clear} tabIndex={tabIndex} onKeyDown={onCancelKeyDown}>
                        {content}
                    </div>
                );
            }

            return null;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = RatingBase.getOtherProps(props);
        const className = classNames(
            'p-rating',
            {
                'p-disabled': props.disabled,
                'p-readonly': props.readOnly
            },
            props.className
        );
        const cancelIcon = createCancelIcon();
        const icons = createIcons();

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                    {cancelIcon}
                    {icons}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

Rating.displayName = 'Rating';
