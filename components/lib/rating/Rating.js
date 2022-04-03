import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Rating = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const enabled = !props.disabled && !props.readOnly;
    const tabIndex = enabled ? 0 : null;

    const rate = (event, i) => {
        if (enabled && props.onChange) {
            props.onChange({
                originalEvent: event,
                value: i,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: i
                }
            });
        }

        event.preventDefault();
    }

    const clear = (event) => {
        if (enabled && props.onChange) {
            props.onChange({
                originalEvent: event,
                value: null,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: null
                }
            });
        }

        event.preventDefault();
    }

    const onStarKeyDown = (event, value) => {
        if (event.key === 'Enter') {
            rate(event, value);
        }
    }

    const onCancelKeyDown = (event) => {
        if (event.key === 'Enter') {
            clear(event);
        }
    }

    const createStars = () => {
        return Array.from({ length: props.stars }, (_, i) => i + 1).map((value) => {
            const iconClassName = classNames('p-rating-icon', {
                'pi pi-star': (!props.value || value > props.value),
                'pi pi-star-fill': (value <= props.value)
            });

            return (
                <span className={iconClassName} onClick={(e) => rate(e, value)} key={value} tabIndex={tabIndex} onKeyDown={(e) => onStarKeyDown(e, value)}></span>
            )
        });
    }

    const createCancelIcon = () => {
        if (props.cancel) {
            return <span className="p-rating-icon p-rating-cancel pi pi-ban" onClick={clear} tabIndex={tabIndex} onKeyDown={onCancelKeyDown}></span>
        }

        return null;
    }

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, Rating.defaultProps);
    const className = classNames('p-rating', {
        'p-disabled': props.disabled,
        'p-readonly': props.readOnly
    }, props.className);
    const cancelIcon = createCancelIcon();
    const stars = createStars();

    return (
        <>
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                {cancelIcon}
                {stars}
            </div>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

Rating.displayName = 'Rating';
Rating.defaultProps = {
    __TYPE: 'Rating',
    id: null,
    value: null,
    disabled: false,
    readOnly: false,
    stars: 5,
    cancel: true,
    style: null,
    className: null,
    tooltip: null,
    tooltipOptions: null,
    onChange: null
}
