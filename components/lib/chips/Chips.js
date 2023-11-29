import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMountEffect } from '../hooks/Hooks';
import { TimesCircleIcon } from '../icons/timescircle';
import { KeyFilter } from '../keyfilter/KeyFilter';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, classNames, useMergeProps } from '../utils/Utils';
import { ChipsBase } from './ChipsBase';

export const Chips = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ChipsBase.getProps(inProps, context);
        const [focusedState, setFocusedState] = React.useState(false);

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

        useMountEffect(() => {
            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }
        });

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
                    key: index,
                    className: cx('token'),
                    'data-p-highlight': true
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
                    className: cx('container', { focusedState }),
                    onClick: (e) => onWrapperClick(e),
                    'data-p-disabled': props.disabled,
                    'data-p-focus': focusedState
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
                className: classNames(props.className, cx('root', { isFilled, focusedState })),
                style: props.style
            },
            ptm('root')
        );

        return (
            <>
                <div {...rootProps}>{list}</div>
                {hasTooltip && <Tooltip target={inputRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

Chips.displayName = 'Chips';
