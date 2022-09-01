import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';

export const RadioButton = React.memo(
    React.forwardRef((props, ref) => {
        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);

        const select = (e) => {
            inputRef.current.checked = true;
            onClick(e);
        };

        const onClick = (e) => {
            if (!props.disabled && props.onChange) {
                const checked = props.checked;
                const radioClicked = e.target instanceof HTMLDivElement;
                const inputClicked = e.target === inputRef.current;
                const isInputToggled = inputClicked && inputRef.current.checked !== checked;
                const isRadioToggled = radioClicked && inputRef.current.checked === checked;
                if (isInputToggled || isRadioToggled) {
                    const value = !checked;
                    props.onChange({
                        originalEvent: e,
                        value: props.value,
                        checked: value,
                        stopPropagation: () => {},
                        preventDefault: () => {},
                        target: {
                            type: 'radio',
                            name: props.name,
                            id: props.id,
                            value: props.value,
                            checked: value
                        }
                    });
                    inputRef.current.checked = value;
                }

                DomHandler.focus(inputRef.current);
                e.preventDefault();
            }
        };

        const onFocus = () => {
            setFocusedState(true);
        };

        const onBlur = () => {
            setFocusedState(false);
        };

        React.useEffect(() => {
            if (inputRef.current) {
                inputRef.current.checked = props.checked;
            }
        }, [props.checked]);

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        React.useImperativeHandle(ref, () => ({
            props,
            select,
            getElement: () => elementRef.current,
            getInput: () => inputRef.current
        }));

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = ObjectUtils.findDiffKeys(props, RadioButton.defaultProps);
        const className = classNames(
            'p-radiobutton p-component',
            {
                'p-radiobutton-checked': props.checked,
                'p-radiobutton-disabled': props.disabled,
                'p-radiobutton-focused': focusedState
            },
            props.className
        );
        const boxClassName = classNames('p-radiobutton-box', {
            'p-highlight': props.checked,
            'p-disabled': props.disabled,
            'p-focus': focusedState
        });

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick}>
                    <div className="p-hidden-accessible">
                        <input
                            ref={inputRef}
                            id={props.inputId}
                            type="radio"
                            name={props.name}
                            defaultChecked={props.checked}
                            aria-labelledby={props['aria-labelledby']}
                            aria-label={props['aria-label']}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            disabled={props.disabled}
                            required={props.required}
                            tabIndex={props.tabIndex}
                        />
                    </div>
                    <div className={boxClassName}>
                        <div className="p-radiobutton-icon"></div>
                    </div>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

RadioButton.displayName = 'RadioButton';
RadioButton.defaultProps = {
    __TYPE: 'RadioButton',
    id: null,
    inputRef: null,
    inputId: null,
    name: null,
    value: null,
    checked: false,
    style: null,
    className: null,
    disabled: false,
    required: false,
    tabIndex: null,
    tooltip: null,
    tooltipOptions: null,
    'aria-label': null,
    'aria-labelledby': null,
    onChange: null
};
