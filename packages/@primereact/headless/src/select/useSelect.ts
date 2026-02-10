import { withHeadless } from '@primereact/core/headless';
import { useListbox } from '@primereact/headless/listbox';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { usePresence } from '@primereact/hooks/use-presence';
import type { useListboxValueChangeEvent } from '@primereact/types/shared/listbox';
import { focus, getFirstFocusableElement, getFocusableElements, getOuterWidth, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useSelect.props';

export const useSelect = withHeadless({
    name: 'useSelect',
    defaultProps,
    setup({ props, id, elementRef }) {
        const onListboxValueChange = React.useRef<((event: useListboxValueChangeEvent) => void) | null>(null);
        const listbox = useListbox({
            value: props.value,
            defaultValue: props.defaultValue,
            options: props.options,
            optionKey: props.optionKey,
            optionLabel: props.optionLabel,
            optionValue: props.optionValue,
            optionDisabled: props.optionDisabled,
            optionGroupLabel: props.optionGroupLabel,
            optionGroupChildren: props.optionGroupChildren,
            disabled: props.disabled,
            locale: props.locale,
            autoOptionFocus: props.autoOptionFocus,
            selectOnFocus: props.selectOnFocus,
            focusOnHover: props.focusOnHover,
            multiple: props.multiple,
            metaKeySelection: false,
            onValueChange: (event: useListboxValueChangeEvent) => onListboxValueChange.current?.(event)
        });

        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });

        const [openState, setOpenState] = useControlledState({
            value: props.open,
            defaultValue: props.defaultOpen ?? false,
            onChange: props.onOpenChange
        });

        const presence = usePresence(!!openState);

        const focusOnShow = React.useRef<boolean>(false);
        const [focusedState, setFocusedState] = React.useState(false);

        const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
        const [positionerEl, setPositionerEl] = React.useState<HTMLDivElement | null>(null);

        const triggerRef = React.useRef<HTMLElement | null>(null);
        const anchorRef = React.useRef<HTMLElement>(null);
        const positionerRef = React.useRef<HTMLDivElement>(null);

        const setAnchorRef = React.useCallback((node: HTMLElement | null) => {
            anchorRef.current = node;
            triggerRef.current = node;
            setAnchorEl(node);
        }, []);

        const setPositionerRef = React.useCallback((node: HTMLDivElement | null) => {
            positionerRef.current = node;
            setPositionerEl(node);
        }, []);

        const state = {
            value: valueState,
            opened: openState,
            focused: focusedState,
            focusedOptionIndex: listbox.state.focusedOptionIndex,
            anchorEl,
            positionerEl
        };

        const show = () => {
            setOpenState([true, { value: true }]);
        };

        const hide = () => {
            setOpenState([false, { value: false }]);
            listbox.changeFocusedOptionIndex(new Event('blur') as unknown as React.KeyboardEvent, -1);
        };

        const toggle = () => {
            if (openState) {
                hide();
            } else {
                show();
            }
        };

        const onContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
            const positionerElement = positionerRef.current;

            if (positionerElement?.contains(event.target as Node)) {
                return;
            }

            if (!props.disabled) {
                toggle();
            }
        };

        const onFocus = () => {
            setFocusedState(true);
        };

        const onBlur = () => {
            listbox.onListBlur();

            setFocusedState(false);
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event);

                    break;

                case 'ArrowUp':
                    onArrowUpKey(event);

                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    onEnterKey(event);
                    break;

                case 'Home':
                case 'End':
                case 'PageUp':
                case 'PageDown':
                    if (openState) {
                        listbox.onListKeyDown(event);
                    }

                    break;

                case 'Escape':
                    if (openState) {
                        hide();
                    }

                    break;

                case 'Tab':
                    onTabKey(event);

                    break;

                case 'ArrowLeft':
                case 'ArrowRight':
                case 'ShiftLeft':
                case 'ShiftRight':
                    //NOOP
                    break;

                default:
                    if (openState) {
                        listbox.onListKeyDown(event);
                    }

                    break;
            }
        };

        const onArrowDownKey = (event: React.KeyboardEvent<HTMLElement>) => {
            if (!openState) {
                focusOnShow.current = true;
                show();
            } else {
                listbox.onArrowDownKey(event);
            }

            event.preventDefault();
        };

        const onArrowUpKey = (event: React.KeyboardEvent<HTMLElement>) => {
            if (!openState) {
                focusOnShow.current = true;
                show();
            } else {
                if (event.altKey) {
                    const focusedOptionIndex = listbox.state.focusedOptionIndex;

                    if (focusedOptionIndex !== -1) {
                        onOptionSelect({
                            originalEvent: event,
                            value: listbox.getOptions()[focusedOptionIndex]
                        });
                    }

                    hide();
                } else {
                    listbox.onArrowUpKey(event);
                }
            }

            event.preventDefault();
        };

        const onEnterKey = (event: React.KeyboardEvent<HTMLElement>) => {
            if (!openState) {
                onArrowDownKey(event);
            } else {
                const focusedOptionIndex = listbox.state.focusedOptionIndex;

                if (focusedOptionIndex !== -1) {
                    listbox.onEnterKey(event);

                    if (!props.multiple) {
                        const focusedOption = listbox.getOptions()[focusedOptionIndex];
                        const selected = listbox.isSelected(focusedOption);

                        if (selected) {
                            onOptionSelect({
                                originalEvent: event,
                                value: null
                            });
                        } else {
                            onOptionSelect({
                                originalEvent: event,
                                value: listbox.getOptionValue(focusedOption)
                            });
                        }

                        hide();
                    }
                }
            }

            event.preventDefault();
        };

        const onTabKey = (event: React.KeyboardEvent<HTMLElement>) => {
            if (openState) {
                if (hasFocusableElements()) {
                    const firstFocusable = getFirstFocusableElement(positionerRef.current!, ':not([data-p-hidden-focusable="true"])');

                    if (firstFocusable) {
                        focus(firstFocusable as HTMLElement);
                        event.preventDefault();
                    }
                } else {
                    hide();
                }
            }
        };

        const onFilterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            switch (event.code) {
                case 'Tab':
                    if (triggerRef.current) {
                        focus(triggerRef.current);
                    }

                    event.preventDefault();
                    event.stopPropagation();
                    break;

                case 'Escape':
                    hide();

                    if (triggerRef.current) {
                        focus(triggerRef.current);
                    }

                    event.preventDefault();
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    if (listbox.state.focusedOptionIndex !== -1) {
                        listbox.onEnterKey(event);

                        const selectedOption = listbox.getOptions()[listbox.state.focusedOptionIndex];

                        if (selectedOption) {
                            onOptionSelect({
                                originalEvent: event,
                                value: listbox.getOptionValue(selectedOption)
                            });
                        }
                    }

                    break;

                case 'ArrowDown':
                case 'ArrowUp':
                case 'Home':
                case 'End':
                case 'PageUp':
                case 'PageDown':
                    onKeyDown(event);
                    break;

                default:
                    break;
            }
        };

        const onClearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            event.stopPropagation();

            const emptyValue = props.multiple ? [] : null;

            setValueState([
                emptyValue,
                {
                    originalEvent: event,
                    value: emptyValue,
                    option: null
                }
            ]);

            listbox.updateModel(event, emptyValue);

            if (openState) {
                hide();
            }
        };

        const onOptionSelect = (event: { originalEvent: React.SyntheticEvent; value: unknown }) => {
            const selectedValue = event.value;

            // Skip if value (that coming from listbox) is null (happens when clicking already selected option in listbox toggle mode)
            if (selectedValue === null) {
                hide();

                if (triggerRef.current) {
                    focus(triggerRef.current);
                }

                return;
            }

            const option = listbox.getOptions().find((opt: unknown) => {
                const optValue = listbox.getOptionValue(opt);

                return listbox.isEquals(optValue, selectedValue);
            });

            setValueState([
                selectedValue,
                {
                    originalEvent: event.originalEvent,
                    value: selectedValue,
                    option
                }
            ]);

            hide();

            if (triggerRef.current) {
                focus(triggerRef.current);
            }
        };

        // Connect listbox onValueChange to select
        onListboxValueChange.current = (event: useListboxValueChangeEvent) => {
            if (props.multiple) {
                setValueState([
                    event.value,
                    {
                        originalEvent: event.originalEvent,
                        value: event.value
                    }
                ]);
            } else {
                onOptionSelect(event);
            }
        };

        const getFocusedOptionId = () => {
            return listbox.getFocusedOptionId();
        };

        const getSelectedOptionLabel = () => {
            if (!hasValue()) {
                return null;
            }

            if (props.multiple && Array.isArray(valueState)) {
                return valueState
                    .map((val: unknown) => {
                        const opt = listbox.getOptions().find((o: unknown) => listbox.isEquals(listbox.getOptionValue(o), val));

                        return opt ? listbox.getOptionLabel(opt) : null;
                    })
                    .filter(Boolean);
            }

            const selectedOption = listbox.getOptions().find((opt: unknown) => {
                const optValue = listbox.getOptionValue(opt);

                return listbox.isEquals(optValue, valueState);
            });

            return selectedOption ? listbox.getOptionLabel(selectedOption) : null;
        };

        const hasValue = () => {
            if (props.multiple) {
                return Array.isArray(valueState) && valueState.length > 0;
            }

            return isNotEmpty(valueState);
        };

        const hasFocusableElements = () => {
            if (!positionerRef.current) {
                return false;
            }

            return getFocusableElements(positionerRef.current, ':not([data-p-hidden-focusable="true"])').length > 0;
        };

        const [bindLabelClick] = useEventListener({
            target: () => document.querySelector(`label[for="${id}"]`) as HTMLElement,
            type: 'click',
            listener: () => {
                if (triggerRef.current) {
                    focus(triggerRef.current as HTMLElement);
                }
            }
        });

        const [bindOutsideClickListener, unbindOutsideClickListener] = useEventListener({
            type: 'click',
            listener: (event: Event) => {
                const positionerElement = positionerRef.current;
                const anchorElement = anchorRef.current;

                if (openState && positionerElement && !positionerElement.contains(event.target as Node) && anchorElement && !anchorElement.contains(event.target as Node)) {
                    hide();
                }
            }
        });

        const [bindResizeListener, unbindResizeListener] = useEventListener({
            target: 'window',
            type: 'resize',
            listener: () => {
                if (openState) {
                    hide();
                }
            }
        });

        React.useEffect(() => {
            bindLabelClick();
        }, [id]);

        React.useEffect(() => {
            if (openState) {
                bindOutsideClickListener();
                bindResizeListener();
            } else {
                unbindOutsideClickListener();
                unbindResizeListener();
            }
        }, [openState, bindOutsideClickListener, unbindOutsideClickListener, bindResizeListener, unbindResizeListener]);

        React.useEffect(() => {
            if (openState && positionerEl) {
                if (elementRef?.current) {
                    positionerEl.style.width = getOuterWidth(elementRef.current) + 'px';
                }

                if (focusOnShow.current) {
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            if (isNotEmpty(valueState)) {
                                const focusedOptionIndex = listbox.state.focusedOptionIndex;
                                const indexToFocus = focusedOptionIndex !== -1 ? focusedOptionIndex : listbox.findFirstFocusedOptionIndex();

                                listbox.changeFocusedOptionIndex(new Event('focus') as unknown as React.KeyboardEvent, indexToFocus);
                            }

                            focusOnShow.current = false;
                        });
                    });
                }
            }
        }, [openState, positionerEl]);

        return {
            state,
            listbox,
            presence,
            // refs
            triggerRef,
            setAnchorRef,
            setPositionerRef,
            // methods
            onContainerClick,
            onFocus,
            onBlur,
            onKeyDown,
            onFilterKeyDown,
            onClearClick,
            onOptionSelect,
            getFocusedOptionId,
            getSelectedOptionLabel,
            hasValue,
            show,
            hide,
            toggle
        };
    }
});
