import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { TimesCircleIcon } from '../icons/timescircle';
import { KeyFilter } from '../keyfilter/KeyFilter';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, classNames } from '../utils/Utils';
import { ChipsBase } from './ChipsBase';

export const Chips = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ChipsBase.getProps(inProps, context);
        const [focusedState, setFocusedState] = React.useState(false);
        const [focusedIndex, setFocusedIndex] = React.useState(null);

        const { ptm, cx, isUnstyled } = ChipsBase.setMetaData({
            props,
            state: {
                focused: focusedState
            }
        });

        useHandleStyle(ChipsBase.css.styles, isUnstyled, { name: 'chips' });

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
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
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

        const onContainerKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowLeft':
                    onArrowLeftKeyOn(event);
                    break;

                case 'ArrowRight':
                    onArrowRightKeyOn(event);
                    break;

                case 'Backspace':
                    onBackspaceKeyOn(event);
                    break;

                default:
                    break;
            }
        };

        const onArrowLeftKeyOn = () => {
            let focusIndex = focusedIndex;

            if (inputRef.current.value.length === 0 && props.value && props.value.length > 0) {
                focusIndex = focusIndex === null ? props.value.length - 1 : focusIndex - 1;
                if (focusIndex < 0) focusIndex = 0;
            }

            setFocusedIndex(focusIndex);
        };

        const onArrowRightKeyOn = () => {
            let focusIndex = focusedIndex;

            if (inputRef.current.value.length === 0 && props.value && props.value.length > 0) {
                if (focusIndex === props.value.length - 1) {
                    focusIndex = null;
                    inputRef.current.focus();
                } else {
                    focusIndex++;
                }
            }

            setFocusedIndex(focusIndex);
        };

        const onBackspaceKeyOn = (event) => {
            if (focusedIndex !== null) {
                removeItem(event, focusedIndex);
            }
        };

        const onKeyDown = (event) => {
            const inputValue = event.target.value;
            const values = props.value || [];

            props.onKeyDown && props.onKeyDown(event);

            if (event.defaultPrevented) {
                return;
            }

            switch (event.code) {
                case 'Backspace':
                    if (inputValue.length === 0 && values.length > 0) {
                        removeItem(event, values.length - 1);
                    }

                    break;

                case 'Enter':
                case 'NumpadEnter':
                    if (inputValue && inputValue.trim().length && (!props.max || props.max > values.length)) {
                        addItem(event, inputValue, true);
                    }

                    break;

                case 'ArrowLeft':
                    if (inputValue.length === 0 && values && values.length > 0) {
                        DomHandler.focus(listRef.current);
                    }

                    break;

                case 'ArrowRight':
                    event.stopPropagation();
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
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
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
                let separator = props.separator.replace('\\n', '\n').replace('\\r', '\r').replace('\\t', '\t');
                let pastedData = (event.clipboardData || window['clipboardData']).getData('Text');

                if (props.keyfilter) {
                    KeyFilter.onPaste(event, props.keyfilter);
                }

                if (pastedData) {
                    let values = props.value || [];
                    let pastedValues = pastedData.split(separator);

                    pastedValues = pastedValues.filter((val) => (props.allowDuplicate || values.indexOf(val) === -1) && val.trim().length);
                    values = [...values, ...pastedValues];

                    updateInput(event, values, true);
                }
            }
        };

        const onContainerFocus = (event) => {
            setFocusedState(true);
        };

        const onContainerBlur = () => {
            setFocusedIndex(-1);
            setFocusedState(false);
        };

        const onFocus = (event) => {
            setFocusedState(true);
            setFocusedIndex(null);
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

        useMountEffect(() => {
            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }
        });

        const focusedOptionId = () => {
            return focusedIndex !== null ? `${props.inputId}_chips_item_${focusedIndex}` : null;
        };

        const createRemoveIcon = (value, index) => {
            const iconProps = mergeProps(
                {
                    className: cx('removeTokenIcon'),
                    onClick: (event) => removeItem(event, index),
                    'aria-hidden': 'true'
                },
                ptm('removeTokenIcon')
            );
            const icon = props.removeIcon || <TimesCircleIcon {...iconProps} />;
            const removeIcon = IconUtils.getJSXIcon(icon, { ...iconProps }, { props });

            if (!props.disabled && !props.readOnly && isRemovable(value, index)) {
                return removeIcon;
            }

            return null;
        };

        const createItem = (value, index) => {
            const content = props.itemTemplate ? props.itemTemplate(value) : value;
            const labelProps = mergeProps(
                {
                    className: cx('label')
                },
                ptm('label')
            );
            const label = <span {...labelProps}>{content}</span>;
            const icon = createRemoveIcon(value, index);
            const tokenProps = mergeProps(
                {
                    key: `${index}_${value}`,
                    id: props.inputId + '_chips_item_' + index,
                    role: 'option',
                    'aria-label': value,
                    className: cx('token', { focusedIndex, index }),
                    'aria-selected': true,
                    'aria-setsize': props.value.length,
                    'aria-posinset': index + 1,
                    'data-p-highlight': true,
                    'data-p-focused': focusedIndex === index
                },
                ptm('token')
            );

            return (
                <li {...tokenProps}>
                    {label}
                    {icon}
                </li>
            );
        };

        const createInput = () => {
            const inputTokenProps = mergeProps(
                {
                    className: cx('inputToken')
                },
                ptm('inputToken')
            );

            const inputProps = mergeProps(
                {
                    id: props.inputId,
                    ref: inputRef,
                    placeholder: props.placeholder,
                    type: 'text',
                    name: props.name,
                    disabled: props.disabled || isMaxedOut(),
                    onKeyDown: (e) => onKeyDown(e),
                    onPaste: (e) => onPaste(e),
                    onFocus: (e) => onFocus(e),
                    onBlur: (e) => onBlur(e),
                    readOnly: props.readOnly,
                    ...ariaProps
                },
                ptm('input')
            );

            return (
                <li {...inputTokenProps}>
                    <input {...inputProps} />
                </li>
            );
        };

        const createItems = () => {
            return props.value ? props.value.map(createItem) : null;
        };

        const createList = () => {
            const items = createItems();
            const input = createInput();
            const containerProps = mergeProps(
                {
                    ref: listRef,
                    className: cx('container', { isFilled }),
                    onClick: (e) => onWrapperClick(e),
                    onKeyDown: (e) => onContainerKeyDown(e),
                    tabIndex: -1,
                    role: 'listbox',
                    'aria-orientation': 'horizontal',
                    'aria-labelledby': props.ariaLabelledby,
                    'aria-label': props.ariaLabel,
                    'aria-activedescendant': focusedState ? focusedOptionId() : undefined,
                    'data-p-disabled': props.disabled,
                    'data-p-focus': focusedState,
                    onFocus: onContainerFocus,
                    onBlur: onContainerBlur
                },
                ptm('container')
            );

            return (
                <ul {...containerProps}>
                    {items}
                    {input}
                </ul>
            );
        };

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = ChipsBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const list = createList();
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                className: classNames(props.className, cx('root', { isFilled, focusedState, disabled: props.disabled })),
                style: props.style
            },
            ptm('root')
        );

        return (
            <>
                <div {...rootProps}>{list}</div>
                {hasTooltip && <Tooltip target={inputRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

Chips.displayName = 'Chips';
