import * as React from 'react';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { ToggleButtonBase } from './ToggleButtonBase';

export const ToggleButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ToggleButtonBase.getProps(inProps);

        const elementRef = React.useRef(null);
        const hasLabel = props.onLabel && props.onLabel.length > 0 && props.offLabel && props.offLabel.length > 0;
        const hasIcon = props.onIcon && props.onIcon.length > 0 && props.offIcon && props.offIcon.length > 0;
        const label = hasLabel ? (props.checked ? props.onLabel : props.offLabel) : '&nbsp;';
        const icon = props.checked ? props.onIcon : props.offIcon;

        const toggle = (e) => {
            if (!props.disabled && props.onChange) {
                props.onChange({
                    originalEvent: e,
                    value: !props.checked,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value: !props.checked
                    }
                });
            }
        };

        const onKeyDown = (event) => {
            if (event.keyCode === 32) {
                toggle(event);
                event.preventDefault();
            }
        };

        const createIcon = () => {
            if (hasIcon) {
                const iconClassName = classNames('p-button-icon p-c', {
                    'p-button-icon-left': props.iconPos === 'left' && label,
                    'p-button-icon-right': props.iconPos === 'right' && label
                });

                return IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });
            }

            return null;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focusFirstElement(elementRef.current),
            getElement: () => elementRef.current
        }));

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const tabIndex = props.disabled ? -1 : props.tabIndex;
        const otherProps = ToggleButtonBase.getOtherProps(props);
        const className = classNames(
            'p-button p-togglebutton p-component',
            {
                'p-button-icon-only': hasIcon && !hasLabel,
                'p-highlight': props.checked,
                'p-disabled': props.disabled
            },
            props.className
        );
        const iconElement = createIcon();

        return (
            <>
                <div
                    ref={elementRef}
                    id={props.id}
                    className={className}
                    style={props.style}
                    {...otherProps}
                    onClick={toggle}
                    onFocus={props.onFocus}
                    onBlur={props.onBlur}
                    onKeyDown={onKeyDown}
                    tabIndex={tabIndex}
                    role="button"
                    aria-pressed={props.checked}
                >
                    {iconElement}
                    <span className="p-button-label">{label}</span>
                    <Ripple />
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

ToggleButton.displayName = 'ToggleButton';
