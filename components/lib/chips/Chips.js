import * as React from 'react';
import { KeyFilter } from '../keyfilter/KeyFilter';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { ChipsBase } from './ChipsBase';

export const Chips = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ChipsBase.getProps(inProps);

        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);
        const listRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);

        const removeItem = (event, index) => {
            if (props.disabled && props.readOnly) {
                return;
            }

            let values = [...props.value];
            const removedItem = values.splice(index, 1);

            if (!isRemovable(removedItem, index)) {
                return;
            }

            if (props.onRemove) {
                props.onRemove({
                    originalEvent: event,
                    value: removedItem
                });
            }

            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: values,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value: values
                    }
                });
            }
        };

        const addItem = (event, item, preventDefault) => {
            if (item && item.trim().length) {
                let values = props.value ? [...props.value] : [];

                if (props.allowDuplicate || values.indexOf(item) === -1) {
                    let allowAddition = true;

                    if (props.onAdd) {
                        allowAddition = props.onAdd({
                            originalEvent: event,
                            value: item
                        });
                    }

                    if (allowAddition !== false) {
                        values.push(item);
                    }
                }

                updateInput(event, values, preventDefault);
            }
        };

        const onWrapperClick = () => {
            DomHandler.focus(inputRef.current);
        };

        const onKeyDown = (event) => {
            const inputValue = event.target.value;
            const values = props.value || [];

            props.onKeyDown && props.onKeyDown(event);

            // do not continue if the user defined keydown wants to prevent
            if (event.defaultPrevented) {
                return;
            }

            switch (event.key) {
                case 'Backspace':
                    if (inputRef.current.value.length === 0 && values.length > 0) {
                        removeItem(event, values.length - 1);
                    }

                    break;

                case 'Enter':
                    if (inputValue && inputValue.trim().length && (!props.max || props.max > values.length)) {
                        addItem(event, inputValue, true);
                    }

                    break;

                default:
                    if (props.keyfilter) {
                        KeyFilter.onKeyPress(event, props.keyfilter);
                    }

                    if (isMaxedOut()) {
                        event.preventDefault();
                    } else if (props.separator === ',') {
                        // GitHub #3885 Android Opera gives strange code 229 for comma
                        if (event.key === props.separator || (DomHandler.isAndroid() && event.which === 229)) {
                            addItem(event, inputValue, true);
                        }
                    }

                    break;
            }
        };

        const updateInput = (event, items, preventDefault) => {
            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value: items,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value: items
                    }
                });
            }

            inputRef.current.value = '';
            preventDefault && event.preventDefault();
        };

        const onPaste = (event) => {
            if (props.separator) {
                let pastedData = (event.clipboardData || window['clipboardData']).getData('Text');

                if (props.keyfilter) {
                    KeyFilter.onPaste(event, props.keyfilter);
                }

                if (pastedData) {
                    let values = props.value || [];
                    let pastedValues = pastedData.split(props.separator);

                    pastedValues = pastedValues.filter((val) => (props.allowDuplicate || values.indexOf(val) === -1) && val.trim().length);
                    values = [...values, ...pastedValues];

                    updateInput(event, values, true);
                }
            }
        };

        const onFocus = (event) => {
            setFocusedState(true);
            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            if (props.addOnBlur) {
                const inputValue = event.target.value;
                const values = props.value || [];

                if (inputValue && inputValue.trim().length && (!props.max || props.max > values.length)) {
                    addItem(event, inputValue, true);
                }
            }

            setFocusedState(false);
            props.onBlur && props.onBlur(event);
        };

        const isMaxedOut = () => {
            return props.max && props.value && props.max === props.value.length;
        };

        const currentValue = inputRef.current && inputRef.current.value;
        const isFilled = React.useMemo(() => ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(currentValue), [props.value, currentValue]);

        const isRemovable = (value, index) => {
            return ObjectUtils.getPropValue(props.removable, { value, index, props });
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

        const createRemoveIcon = (value, index) => {
            if (!props.disabled && !props.readOnly && isRemovable(value, index)) {
                return <span className="p-chips-token-icon pi pi-times-circle" onClick={(event) => removeItem(event, index)}></span>;
            }

            return null;
        };

        const createItem = (value, index) => {
            const content = props.itemTemplate ? props.itemTemplate(value) : value;
            const label = <span className="p-chips-token-label">{content}</span>;
            const icon = createRemoveIcon(value, index);

            return (
                <li key={index} className="p-chips-token p-highlight">
                    {label}
                    {icon}
                </li>
            );
        };

        const createInput = () => {
            return (
                <li className="p-chips-input-token">
                    <input
                        ref={inputRef}
                        id={props.inputId}
                        placeholder={props.placeholder}
                        type="text"
                        name={props.name}
                        disabled={props.disabled || isMaxedOut()}
                        onKeyDown={onKeyDown}
                        onPaste={onPaste}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        readOnly={props.readOnly}
                        {...ariaProps}
                    />
                </li>
            );
        };

        const createItems = () => {
            return props.value ? props.value.map(createItem) : null;
        };

        const createList = () => {
            const className = classNames('p-inputtext p-chips-multiple-container', {
                'p-disabled': props.disabled,
                'p-focus': focusedState
            });
            const items = createItems();
            const input = createInput();

            return (
                <ul ref={listRef} className={className} onClick={onWrapperClick}>
                    {items}
                    {input}
                </ul>
            );
        };

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = ChipsBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const className = classNames(
            'p-chips p-component p-inputwrapper',
            {
                'p-inputwrapper-filled': isFilled,
                'p-inputwrapper-focus': focusedState
            },
            props.className
        );
        const list = createList();

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                    {list}
                </div>
                {hasTooltip && <Tooltip target={inputRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

Chips.displayName = 'Chips';
