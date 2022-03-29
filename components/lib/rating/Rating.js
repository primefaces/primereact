import React, { forwardRef, memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { tip } from '../tooltip/Tooltip';
import { classNames } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const Rating = memo(forwardRef((props, ref) => {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);
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

    useEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.update({ content: props.tooltip, ...(props.tooltipOptions || {}) });
        }
        else if (props.tooltip) {
            tooltipRef.current = tip({
                target: elementRef.current,
                content: props.tooltip,
                options: props.tooltipOptions
            });
        }
    }, [props.tooltip, props.tooltipOptions]);

    useUnmountEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }
    });

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

    const className = classNames('p-rating', {
        'p-disabled': props.disabled,
        'p-rating-readonly': props.readOnly
    }, props.className);
    const cancelIcon = createCancelIcon();
    const stars = createStars();

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style}>
            {cancelIcon}
            {stars}
        </div>
    )
}));

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

Rating.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.number,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    stars: PropTypes.number,
    cancel: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    onChange: PropTypes.func
}
