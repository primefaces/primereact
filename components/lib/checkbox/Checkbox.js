import * as React from 'react';
import { useUpdateEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';

export const Checkbox = React.memo(
    React.forwardRef((props, ref) => {
        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);

        const onClick = (event) => {
            if (!props.disabled && !props.readOnly && props.onChange) {
                const checked = isChecked();
                const checkboxClicked = event.target instanceof HTMLDivElement || event.target instanceof HTMLSpanElement;
                const isInputToggled = event.target === inputRef.current;
                const isCheckboxToggled = checkboxClicked && event.target.checked !== checked;

                if (isInputToggled || isCheckboxToggled) {
                    const value = checked ? props.falseValue : props.trueValue;

                    props.onChange({
                        originalEvent: event,
                        value: props.value,
                        checked: value,
                        stopPropagation: () => {},
                        preventDefault: () => {},
                        target: {
                            type: 'checkbox',
                            name: props.name,
                            id: props.id,
                            value: props.value,
                            checked: value
                        }
                    });
                }

                DomHandler.focus(inputRef.current);
                event.preventDefault();
            }
        };

        const onFocus = () => {
            setFocusedState(true);
        };

        const onBlur = () => {
            setFocusedState(false);
        };

        const onKeyDown = (event) => {
            if (event.code === 'Space') {
                onClick(event);
            }
        };

        const isChecked = () => {
            return props.checked === props.trueValue;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        useUpdateEffect(() => {
            inputRef.current.checked = isChecked();
        }, [props.checked, props.trueValue]);

        const checked = isChecked();
        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = ObjectUtils.findDiffKeys(props, Checkbox.defaultProps);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const className = classNames(
            'p-checkbox p-component',
            {
                'p-checkbox-checked': checked,
                'p-checkbox-disabled': props.disabled,
                'p-checkbox-focused': focusedState
            },
            props.className
        );
        const boxClass = classNames('p-checkbox-box', {
            'p-highlight': checked,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        });
        const icon = IconUtils.getJSXIcon(checked ? props.icon : '', { className: 'p-checkbox-icon p-c' }, { props, checked });

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick} onContextMenu={props.onContextMenu} onMouseDown={props.onMouseDown}>
                    <div className="p-hidden-accessible">
                        <input
                            ref={inputRef}
                            type="checkbox"
                            id={props.inputId}
                            name={props.name}
                            tabIndex={props.tabIndex}
                            defaultChecked={checked}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onKeyDown={onKeyDown}
                            disabled={props.disabled}
                            readOnly={props.readOnly}
                            required={props.required}
                            {...ariaProps}
                        />
                    </div>
                    <div className={boxClass}>{icon}</div>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
    __TYPE: 'Checkbox',
    id: null,
    inputRef: null,
    inputId: null,
    value: null,
    name: null,
    checked: false,
    trueValue: true,
    falseValue: false,
    style: null,
    className: null,
    disabled: false,
    required: false,
    readOnly: false,
    tabIndex: null,
    icon: 'pi pi-check',
    tooltip: null,
    tooltipOptions: null,
    onChange: null,
    onMouseDown: null,
    onContextMenu: null
};
