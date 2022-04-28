import * as React from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Chips = React.memo(React.forwardRef((props, ref) => {
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
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: values
                }
            });
        }
    }

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
    }

    const onWrapperClick = () => {
        inputRef.current.focus();
    }

    const onKeyDown = (event) => {
        const inputValue = event.target.value;
        const values = props.value || [];

        switch (event.which) {
            //backspace
            case 8:
                if (inputRef.current.value.length === 0 && values.length > 0) {
                    removeItem(event, values.length - 1);
                }
                break;

            //enter
            case 13:
                if (inputValue && inputValue.trim().length && (!props.max || props.max > values.length)) {
                    addItem(event, inputValue, true);
                }
                break;

            default:
                if (isMaxedOut()) {
                    event.preventDefault();
                }
                else if (props.separator === ',' && event.which === 188) {
                    addItem(event, inputValue, true);
                }
                break;
        }
    }

    const updateInput = (event, items, preventDefault) => {
        if (props.onChange) {
            props.onChange({
                originalEvent: event,
                value: items,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: items
                }
            });
        }

        inputRef.current.value = '';
        preventDefault && event.preventDefault();
    }

    const onPaste = (event) => {
        if (props.separator) {
            let pastedData = (event.clipboardData || window['clipboardData']).getData('Text');

            if (pastedData) {
                let values = props.value || [];
                let pastedValues = pastedData.split(props.separator);
                pastedValues = pastedValues.filter(val => ((props.allowDuplicate || values.indexOf(val) === -1) && val.trim().length));
                values = [...values, ...pastedValues];

                updateInput(event, values, true);
            }
        }
    }

    const onFocus = (event) => {
        setFocusedState(true);
        props.onFocus && props.onFocus(event);
    }

    const onBlur = (event) => {
        setFocusedState(false);
        props.onBlur && props.onBlur(event);
    }

    const isMaxedOut = () => {
        return props.max && props.value && props.max === props.value.length;
    }

    const isFilled = React.useMemo(() => {
        return (props.value && props.value.length) || (inputRef.current && inputRef.current.value && inputRef.current.value.length);
    }, [props.value]);

    const isRemovable = (value, index) => {
        return ObjectUtils.getPropValue(props.removable, { value, index, props });
    }

    React.useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    const createRemoveIcon = (value, index) => {
        if (!props.disabled && !props.readOnly && isRemovable(value, index)) {
            return <span className="p-chips-token-icon pi pi-times-circle" onClick={(event) => removeItem(event, index)}></span>
        }

        return null;
    }

    const createItem = (value, index) => {
        const content = props.itemTemplate ? props.itemTemplate(value) : value;
        const label = <span className="p-chips-token-label">{content}</span>;
        const icon = createRemoveIcon(value, index);

        return (
            <li key={index} className="p-chips-token p-highlight">
                {label}
                {icon}
            </li>
        )
    }

    const createInput = () => {
        return (
            <li className="p-chips-input-token">
                <input ref={inputRef} id={props.inputId} placeholder={props.placeholder} type="text" name={props.name} disabled={props.disabled || isMaxedOut()}
                    onKeyDown={onKeyDown} onPaste={onPaste} onFocus={onFocus} onBlur={onBlur} aria-labelledby={props.ariaLabelledBy}
                    readOnly={props.readOnly} />
            </li>
        )
    }

    const createItems = () => {
        return props.value ? props.value.map(createItem) : null;
    }

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
        )
    }

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, Chips.defaultProps);
    const className = classNames('p-chips p-component p-inputwrapper', {
        'p-inputwrapper-filled': isFilled,
        'p-inputwrapper-focus': focusedState
    }, props.className);
    const list = createList();

    return (
        <>
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                {list}
            </div>
            {hasTooltip && <Tooltip target={inputRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

Chips.displayName = 'Chips';
Chips.defaultProps = {
    __TYPE: 'Chips',
    id: null,
    inputRef: null,
    inputId: null,
    name: null,
    placeholder: null,
    value: null,
    max: null,
    disabled: null,
    readOnly: false,
    removable: true,
    style: null,
    className: null,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    separator: null,
    allowDuplicate: true,
    itemTemplate: null,
    onAdd: null,
    onRemove: null,
    onChange: null,
    onFocus: null,
    onBlur: null
}
