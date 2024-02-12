import * as React from 'react';
import { PrimeReactContext, ariaLabel } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { CheckIcon } from '../icons/check';
import { TimesIcon } from '../icons/times';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { TriStateCheckboxBase } from './TriStateCheckboxBase';

export const TriStateCheckbox = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = TriStateCheckboxBase.getProps(inProps, context);

        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);

        const { ptm, cx, isUnstyled } = TriStateCheckboxBase.setMetaData({
            props,
            state: {
                focused: focusedState
            }
        });

        useHandleStyle(TriStateCheckboxBase.css.styles, isUnstyled, { name: 'tristatecheckbox' });

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
            if (e.code === 'Enter' || e.code === 'Space') {
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
        const checkIconProps = mergeProps(
            {
                className: cx('checkIcon')
            },
            ptm('checkIcon')
        );
        const uncheckIconProps = mergeProps(
            {
                className: cx('checkIcon')
            },
            ptm('uncheckIcon')
        );

        let icon;

        if (props.value === false) {
            icon = props.uncheckIcon || <TimesIcon {...uncheckIconProps} />;
        } else if (props.value === true) {
            icon = props.checkIcon || <CheckIcon {...checkIconProps} />;
        }

        const checkIcon = IconUtils.getJSXIcon(icon, { ...checkIconProps }, { props });

        const ariaValueLabel = props.value ? ariaLabel('trueLabel') : props.value === false ? ariaLabel('falseLabel') : ariaLabel('nullLabel');
        const ariaChecked = props.value ? 'true' : 'false';

        const checkboxProps = mergeProps(
            {
                className: cx('checkbox', { focusedState }),
                tabIndex: props.disabled ? '-1' : props.tabIndex,
                onFocus: onFocus,
                onBlur: onBlur,
                onKeyDown: onKeyDown,
                role: 'checkbox',
                'aria-checked': ariaChecked,
                ...ariaProps
            },
            ptm('checkbox')
        );

        const srOnlyAriaProps = mergeProps(
            {
                className: 'p-sr-only p-hidden-accessible',
                'aria-live': 'polite'
            },
            ptm('srOnlyAria')
        );

        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root')),
                style: props.style,
                onClick: onClick,
                'data-p-disabled': props.disabled
            },
            TriStateCheckboxBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <div id={props.id} ref={elementRef} {...rootProps}>
                    <div {...checkboxProps}>{checkIcon}</div>
                    {focusedState && <span {...srOnlyAriaProps}>{ariaValueLabel}</span>}
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

TriStateCheckbox.displayName = 'TriStateCheckbox';
