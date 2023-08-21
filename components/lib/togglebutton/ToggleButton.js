import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useMountEffect } from '../hooks/Hooks';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, IconUtils, mergeProps, ObjectUtils } from '../utils/Utils';
import { ToggleButtonBase } from './ToggleButtonBase';

export const ToggleButton = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = ToggleButtonBase.getProps(inProps, context);

        const elementRef = React.useRef(null);
        const { ptm } = ToggleButtonBase.setMetaData({
            props
        });
        const hasLabel = props.onLabel && props.onLabel.length > 0 && props.offLabel && props.offLabel.length > 0;
        const hasIcon = props.onIcon && props.offIcon;
        const label = hasLabel ? (props.checked ? props.onLabel : props.offLabel) : '&nbsp;';
        const icon = props.checked ? props.onIcon : props.offIcon;

        const toggle = (e) => {
            if (!props.disabled && props.onChange) {
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

        const createIcon = () => {
            if (hasIcon) {
                const iconClassName = classNames('p-button-icon p-c', {
                    'p-button-icon-left': props.iconPos === 'left' && label,
                    'p-button-icon-right': props.iconPos === 'right' && label
                });

                const iconProps = mergeProps(
                    {
                        className: iconClassName
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

        const labelProps = mergeProps(
            {
                className: 'p-button-label'
            },
            ptm('label')
        );

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: className,
                style: props.style,
                onClick: toggle,
                onFocus: props.onFocus,
                onBlur: props.onBlur,
                onKeyDown: onKeyDown,
                tabIndex: tabIndex,
                role: 'button',
                'aria-pressed': props.checked
            },
            ToggleButtonBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <>
                <div {...rootProps}>
                    {iconElement}
                    <span {...labelProps}>{label}</span>
                    <Ripple />
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

ToggleButton.displayName = 'ToggleButton';
