import * as React from 'react';
import { ariaLabel } from '../api/Api';
import { useMountEffect } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { TimesIcon } from '../icons/times';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, IconUtils, ObjectUtils } from '../utils/Utils';
import { TriStateCheckboxBase } from './TriStateCheckboxBase';

export const TriStateCheckbox = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = TriStateCheckboxBase.getProps(inProps);

        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);

        const onClick = (event) => {
            if (!props.disabled && !props.readOnly) {
                toggle(event);
            }
        };

        const toggle = (event) => {
            let newValue;

            if (props.value === null || props.value === undefined) newValue = true;
            else if (props.value === true) newValue = false;
            else if (props.value === false) newValue = null;

            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: newValue,
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: newValue
                    }
                });
            }
        };

        const onFocus = () => {
            setFocusedState(true);
        };

        const onBlur = () => {
            setFocusedState(false);
        };

        const onKeyDown = (e) => {
            if (e.keyCode === 32) {
                toggle(e);
                e.preventDefault();
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focusFirstElement(elementRef.current),
            getElement: () => elementRef.current
        }));

        useMountEffect(() => {
            if (props.autoFocus) {
                DomHandler.focusFirstElement(elementRef.current);
            }
        });

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = TriStateCheckboxBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const className = classNames('p-tristatecheckbox p-checkbox p-component', props.className, { 'p-checkbox-disabled': props.disabled });
        const boxClassName = classNames('p-checkbox-box', {
            'p-highlight': ObjectUtils.isNotEmpty(props.value),
            'p-disabled': props.disabled,
            'p-focus': focusedState
        });
        const iconClassName = 'p-checkbox-icon p-c';
        let icon;

        if (props.value === false) {
            icon = props.uncheckIcon || <TimesIcon className={iconClassName} />;
        } else if (props.value === true) {
            icon = props.checkIcon || <CheckIcon className={iconClassName} />;
        }

        const checkIcon = IconUtils.getJSXIcon(icon, { className: iconClassName }, { props });

        const ariaValueLabel = props.value ? ariaLabel('trueLabel') : props.value === false ? ariaLabel('falseLabel') : ariaLabel('nullLabel');
        const ariaChecked = props.value ? 'true' : 'false';

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick}>
                    <div className={boxClassName} tabIndex={props.tabIndex} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown} role="checkbox" aria-checked={ariaChecked} {...ariaProps}>
                        {checkIcon}
                    </div>
                    {focusedState && (
                        <span className="p-sr-only" aria-live="polite">
                            {ariaValueLabel}
                        </span>
                    )}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

TriStateCheckbox.displayName = 'TriStateCheckbox';
