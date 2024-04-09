import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { ToggleButtonBase } from './ToggleButtonBase';

export const ToggleButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ToggleButtonBase.getProps(inProps, context);
        const elementRef = React.useRef(null);
        const { ptm, cx, isUnstyled } = ToggleButtonBase.setMetaData({
            props
        });

        useHandleStyle(ToggleButtonBase.css.styles, isUnstyled, { name: 'togglebutton' });

        const hasLabel = props.onLabel && props.onLabel.length > 0 && props.offLabel && props.offLabel.length > 0;
        const hasIcon = props.onIcon && props.offIcon;
        const label = hasLabel ? (props.checked ? props.onLabel : props.offLabel) : '&nbsp;';
        const icon = props.checked ? props.onIcon : props.offIcon;

        const toggle = (e) => {
            if (!props.disabled && props.onChange && !props.readonly) {
                props.onChange({
                    originalEvent: e,
                    value: !props.checked,
                    stopPropagation: () => {
                        e.stopPropagation();
                    },
                    preventDefault: () => {
                        e.preventDefault();
                    },
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

        const onFocus = (event) => {
            props?.onFocus?.(event);
        };

        const onBlur = (event) => {
            props?.onBlur?.(event);
        };

        const createIcon = () => {
            if (hasIcon) {
                const iconProps = mergeProps(
                    {
                        className: cx('icon', { label })
                    },
                    ptm('icon')
                );

                return IconUtils.getJSXIcon(icon, { ...iconProps }, { props });
            }

            return null;
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
        const tabIndex = props.disabled ? -1 : props.tabIndex;
        const iconElement = createIcon();

        const labelProps = mergeProps(
            {
                className: cx('label')
            },
            ptm('label')
        );

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: classNames(props.className, cx('root', { hasIcon, hasLabel })),
                'data-p-highlight': props.checked,
                'data-p-disabled': props.disabled
            },
            ToggleButtonBase.getOtherProps(props),
            ptm('root')
        );

        const inputProps = mergeProps(
            {
                id: props.inputId,
                className: cx('input'),
                style: props.style,
                onChange: toggle,
                onFocus: onFocus,
                onBlur: onBlur,
                onKeyDown: onKeyDown,
                tabIndex: tabIndex,
                role: 'switch',
                type: 'checkbox',
                'aria-pressed': props.checked,
                'aria-invalid': props.invalid,
                disabled: props.disabled,
                readOnly: props.readonly,
                value: props.checked,
                checked: props.checked
            },
            ptm('input')
        );

        const boxProps = mergeProps(
            {
                className: cx('box', { hasIcon, hasLabel })
            },
            ptm('box')
        );

        return (
            <>
                <div {...rootProps}>
                    <input {...inputProps} />
                    <div {...boxProps}>
                        {iconElement}
                        <span {...labelProps}>{label}</span>
                        <Ripple />
                    </div>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

ToggleButton.displayName = 'ToggleButton';
