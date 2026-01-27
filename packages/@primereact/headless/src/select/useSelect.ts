import { withHeadless } from '@primereact/core/headless';
import { useListbox } from '@primereact/headless/listbox';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import type { useListboxValueChangeEvent } from '@primereact/types/shared/listbox';
import { focus, getFirstFocusableElement, getFocusableElements, getOuterWidth, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useSelect.props';

export const useSelect = withHeadless({
    name: 'useSelect',
    defaultProps,
    setup({ props, elementRef }) {
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
            multiple: false,
            metaKeySelection: false,
            onValueChange: (event: useListboxValueChangeEvent) => onListboxValueChange.current?.(event)
        });

        const triggerRef = React.useRef<HTMLElement | null>(null);
        const portalRef = React.useRef<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>(null);
        const overlayRef = React.useRef<HTMLDivElement | null>(null);
        const focusOnShow = React.useRef<boolean>(false);

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
        const [focusedState, setFocusedState] = React.useState(false);

        const state = {
            value: valueState,
            opened: openState,
            focused: focusedState,
            focusedOptionIndex: listbox.state.focusedOptionIndex
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
            // Ignore clicks from inside the portal (React Portal event bubbling)
            const portalElement = portalRef.current?.containerRef?.current?.elementRef?.current;
            const target = event.target as Element;

            if (portalElement?.contains(event.target as Node) || target.getAttribute?.('data-pc-name') === 'selectclearicon' || target.closest?.('[data-pc-name="selectclearicon"]')) {
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
                }

                hide();
            }

            event.preventDefault();
        };

        const onTabKey = (event: React.KeyboardEvent<HTMLElement>) => {
            if (openState) {
                if (hasFocusableElements()) {
                    const firstFocusable = getFirstFocusableElement(overlayRef.current!, ':not([data-p-hidden-focusable="true"])');

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
            setValueState([
                null,
                {
                    originalEvent: event,
                    value: null,
                    option: null
                }
            ]);

            listbox.updateModel(event, null);

            if (openState) {
                hide();
            }
        };

        const onOverlayEnter = () => {
            if (portalRef?.current?.containerRef?.current?.elementRef?.current) {
                const element = portalRef.current.containerRef.current.elementRef.current;

                if (elementRef?.current) {
                    element.style.minWidth = getOuterWidth(elementRef.current) + 'px';
                }
            }
        };

        const onOverlayAfterEnter = () => {
            if (focusOnShow.current) {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        if (isNotEmpty(state.value)) {
                            const focusedOptionIndex = listbox.state.focusedOptionIndex;
                            const indexToFocus = focusedOptionIndex !== -1 ? focusedOptionIndex : listbox.findFirstFocusedOptionIndex();

                            listbox.changeFocusedOptionIndex(new Event('focus') as unknown as React.KeyboardEvent, indexToFocus);
                        }

                        focusOnShow.current = false;
                    });
                });
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

        // Connect listbox onValueChange to onOptionSelect
        onListboxValueChange.current = onOptionSelect;

        const changeVisibleState = (isVisible: boolean) => {
            setOpenState([isVisible, { value: isVisible }]);
        };

        const getFocusedOptionId = () => {
            return listbox.getFocusedOptionId();
        };

        const getSelectedOptionLabel = () => {
            if (hasValue()) {
                const selectedOption = listbox.getOptions().find((opt: unknown) => {
                    const optValue = listbox.getOptionValue(opt);

                    return listbox.isEquals(optValue, valueState);
                });

                return selectedOption ? listbox.getOptionLabel(selectedOption) : null;
            }

            return null;
        };

        const hasValue = () => {
            return isNotEmpty(valueState);
        };

        const hasFocusableElements = () => {
            if (!overlayRef.current) {
                return false;
            }

            return getFocusableElements(overlayRef.current, ':not([data-p-hidden-focusable="true"])').length > 0;
        };

        return {
            state,
            listbox,
            // refs
            triggerRef,
            portalRef,
            overlayRef,
            // methods
            onContainerClick,
            onFocus,
            onBlur,
            onKeyDown,
            onFilterKeyDown,
            onClearClick,
            onOverlayEnter,
            onOverlayAfterEnter,
            onOptionSelect,
            changeVisibleState,
            getFocusedOptionId,
            getSelectedOptionLabel,
            hasValue,
            show,
            hide,
            toggle
        };
    }
});
