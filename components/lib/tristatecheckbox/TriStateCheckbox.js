import * as React from 'react';
import { useEffect, useState } from 'react';
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

        const [checkBoxValue, setCheckBoxValue] = useState(null);
        const elementRef = React.useRef(null);

        const { ptm, cx, isUnstyled } = TriStateCheckboxBase.setMetaData({
            props
        });

        useHandleStyle(TriStateCheckboxBase.css.styles, isUnstyled, { name: 'tristatecheckbox' });

        useEffect(() => {
            if ([true, false, null].includes(props.value)) {
                setCheckBoxValue(props.value);
            } else {
                setCheckBoxValue(null);
            }
        }, [props.value]);

        const onChange = (event) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            let newValue;

            if (checkBoxValue === null) {
                newValue = true;
            } else if (checkBoxValue === true) {
                newValue = false;
            } else if (checkBoxValue === false) {
                newValue = null;
            }

            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: newValue,
                    stopPropagation: () => {
                        event?.stopPropagation();
                    },
                    preventDefault: () => {
                        event?.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: newValue
                    }
                });
            }
        };

        const onFocus = (event) => {
            props?.onFocus?.(event);
        };

        const onBlur = (event) => {
            props?.onBlur?.(event);
        };

        const onKeyDown = (e) => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.code === 'Space') {
                onChange(e);
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

        if (checkBoxValue === false) {
            icon = props.uncheckIcon || <TimesIcon {...uncheckIconProps} />;
        } else if (checkBoxValue === true) {
            icon = props.checkIcon || <CheckIcon {...checkIconProps} />;
        }

        const checkIcon = IconUtils.getJSXIcon(icon, { ...checkIconProps }, { props });

        const ariaValueLabel = checkBoxValue ? ariaLabel('trueLabel') : checkBoxValue === false ? ariaLabel('falseLabel') : ariaLabel('nullLabel');
        const ariaChecked = checkBoxValue ? 'true' : 'false';

        const boxProps = mergeProps(
            {
                id: props.id + '_box'
                className: cx('box'),
                tabIndex: props.disabled ? '-1' : props.tabIndex,
                onFocus: onFocus,
                onBlur: onBlur,
                onKeyDown: onKeyDown,
                role: 'checkbox',
                'aria-checked': ariaChecked,
                ...ariaProps
            },
            ptm('box')
        );

        const srOnlyAriaProps = mergeProps(
            {
                className: 'p-hidden-accessible',
                'aria-live': 'polite'
            },
            ptm('srOnlyAria')
        );

        const rootProps = mergeProps(
            {
                className: classNames(props.className, cx('root', { context })),
                style: props.style,
                'data-p-disabled': props.disabled
            },
            TriStateCheckboxBase.getOtherProps(props),
            ptm('root')
        );

        const inputProps = mergeProps(
            {
                id: props.inputId,
                className: cx('input'),
                type: 'checkbox',
                'aria-invalid': props.invalid,
                disabled: props.disabled,
                readOnly: props.readOnly,
                value: checkBoxValue,
                checked: checkBoxValue,
                onChange: onChange
            },
            ptm('input')
        );

        return (
            <>
                <div id={props.id} ref={elementRef} {...rootProps}>
                    <input {...inputProps} />
                    <span {...srOnlyAriaProps}>{ariaValueLabel}</span>
                    <div {...boxProps}>{checkIcon}</div>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

TriStateCheckbox.displayName = 'TriStateCheckbox';
