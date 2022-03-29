import React, { forwardRef, memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { tip } from '../tooltip/Tooltip';
import { Ripple } from '../ripple/Ripple';
import { classNames, IconUtils } from '../utils/Utils';
import { useUnmountEffect } from '../hooks/Hooks';

export const ToggleButton = memo(forwardRef((props, ref) => {
    const elementRef = useRef(null);
    const tooltipRef = useRef(null);
    const hasLabel = props.onLabel && props.onLabel.length > 0 && props.offLabel && props.offLabel.length > 0;
    const hasIcon = props.onIcon && props.onIcon.length > 0 && props.offIcon && props.offIcon.length > 0;
    const label = hasLabel ? (props.checked ? props.onLabel : props.offLabel) : '&nbsp;';
    const icon = props.checked ? props.onIcon : props.offIcon

    const toggle = (e) => {
        if (!props.disabled && props.onChange) {
            props.onChange({
                originalEvent: e,
                value: !props.checked,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: !props.checked,
                }
            })
        }
    }

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            toggle(event);
            event.preventDefault();
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

    const createIcon = () => {
        if (hasIcon) {
            const iconClassName = classNames('p-button-icon p-c', {
                'p-button-icon-left': props.iconPos === 'left' && label,
                'p-button-icon-right': props.iconPos === 'right' && label
            });

            return IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });
        }

        return null;
    }

    const tabIndex = !props.disabled && props.tabIndex;
    const className = classNames('p-button p-togglebutton p-component', {
        'p-button-icon-only': hasIcon && !hasLabel,
        'p-highlight': props.checked,
        'p-disabled': props.disabled
    }, props.className);
    const iconElement = createIcon();

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style}
            onClick={toggle} onFocus={props.onFocus} onBlur={props.onBlur} onKeyDown={onKeyDown}
            tabIndex={tabIndex} aria-labelledby={props.ariaLabelledBy}>
            {iconElement}
            <span className="p-button-label">{label}</span>
            <Ripple />
        </div>
    )
}));

ToggleButton.defaultProps = {
    __TYPE: 'ToggleButton',
    id: null,
    onIcon: null,
    offIcon: null,
    onLabel: 'Yes',
    offLabel: 'No',
    iconPos: 'left',
    style: null,
    className: null,
    checked: false,
    tabIndex: 0,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    onChange: null,
    onFocus: null,
    onBlur: null
}

ToggleButton.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    onIcon: PropTypes.any,
    offIcon: PropTypes.any,
    onLabel: PropTypes.string,
    offLabel: PropTypes.string,
    iconPos: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    checked: PropTypes.bool,
    tabIndex: PropTypes.number,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    ariaLabelledBy: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
}
