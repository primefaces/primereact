import * as React from 'react';
import PrimeReact, { FilterService, PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { TimesIcon } from '../icons/times';
import { TimesCircleIcon } from '../icons/timescircle';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { MultiSelectBase } from './MultiSelectBase';
import { MultiSelectPanel } from './MultiSelectPanel';

export const MultiSelect = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = MultiSelectBase.getProps(inProps, context);

        const [filterState, setFilterState] = React.useState('');
        const [focusedState, setFocusedState] = React.useState(false);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(props.inline);
        const elementRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const labelRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const hasFilter = filterState && filterState.trim().length > 0;
        const empty = ObjectUtils.isEmpty(props.value);
        const equalityKey = props.optionValue ? null : props.dataKey;
        const metaData = {
            props,
            state: {
                filterState: filterState,
                focused: focusedState,
                overlayVisible: overlayVisibleState
            }
        };
        const { ptm, cx, sx, isUnstyled } = MultiSelectBase.setMetaData(metaData);

        useHandleStyle(MultiSelectBase.css.styles, isUnstyled, { name: 'multiselect' });
        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { type, valid }) => {
                if (valid) {
                    if (type === 'outside') {
                        !isClearClicked(event) && !isSelectAllClicked(event) && hide();
                    } else {
                        hide();
                    }
                }
            },
            when: overlayVisibleState
        });

        const onPanelClick = (event) => {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        };

        const allowOptionSelect = () => {
            return !props.selectionLimit || !props.value || (props.value && props.value.length < props.selectionLimit);
        };

        const onOptionSelect = (event) => {
            const { originalEvent, option } = event;

            if (props.disabled || isOptionDisabled(option)) {
                return;
            }

            const optionValue = getOptionValue(option);
            const isUsed = isOptionValueUsed(option);
            const selected = isSelected(option);
            const allowSelect = allowOptionSelect();

            if (selected) {
                updateModel(
                    originalEvent,
                    props.value.filter((val) => !ObjectUtils.equals(isUsed ? val : getOptionValue(val), optionValue, equalityKey)),
                    option
                );
            } else if (allowSelect) {
                updateModel(originalEvent, [...(props.value || []), optionValue], option);
            }
        };

        const onOptionKeyDown = (event) => {
            const originalEvent = event.originalEvent;
            const listItem = originalEvent.currentTarget;

            switch (originalEvent.which) {
                //down
                case 40:
                    const nextItem = findNextItem(listItem);

                    nextItem && nextItem.focus();
                    originalEvent.preventDefault();
                    break;

                //up
                case 38:
                    const prevItem = findPrevItem(listItem);

                    prevItem && prevItem.focus();
                    originalEvent.preventDefault();
                    break;

                //enter and space
                case 13:
                case 32:
                    onOptionSelect(event);
                    originalEvent.preventDefault();
                    break;

                //escape
                case 27:
                    hide();
                    DomHandler.focus(inputRef.current);
                    break;

                default:
                    break;
            }
        };

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (DomHandler.getAttribute(nextItem, 'data-p-disabled') === true || DomHandler.getAttribute(nextItem, 'data-pc-section') === 'itemgroup' ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (DomHandler.getAttribute(prevItem, 'data-p-disabled') === true || DomHandler.getAttribute(prevItem, 'data-pc-section') === 'itemgroup' ? findPrevItem(prevItem) : prevItem) : null;
        };

        const onClick = (event) => {
            if (!props.inline && !props.disabled && !isPanelClicked(event) && DomHandler.getAttribute(event.target, 'data-pc-section') !== 'removetokenicon' && !isClearClicked(event)) {
                overlayVisibleState ? hide() : show();
                DomHandler.focus(inputRef.current);
                event.preventDefault();
            }
        };

        const onKeyDown = (event) => {
            switch (event.which) {
                //down
                case 40:
                    if (props.inline) break;

                    if (!overlayVisibleState && event.altKey) {
                        show();
                        event.preventDefault();
                    }

                    break;

                //space
                case 32:
                    if (props.inline) break;
                    overlayVisibleState ? hide() : show();
                    event.preventDefault();
                    break;

                //escape
                case 27:
                    if (props.inline) break;
                    hide();
                    break;

                //tab
                case 9:
                    if (overlayVisibleState) {
                        const firstFocusableElement = DomHandler.getFirstFocusableElement(overlayRef.current);

                        if (firstFocusableElement) {
                            firstFocusableElement.focus();
                            event.preventDefault();
                        }
                    }

                    break;

                default:
                    break;
            }
        };

        const onSelectAll = (event) => {
            if (props.onSelectAll) {
                props.onSelectAll(event);
            } else {
                let value = null;

                if (event.checked) {
                    value = [];

                    if (visibleOptions) {
                        const selectedOptions = visibleOptions.filter((option) => isOptionDisabled(option) && isSelected(option));

                        value = selectedOptions.map((option) => getOptionValue(option));
                    }
                } else if (visibleOptions) {
                    const options = visibleOptions.filter((option) => !isOptionDisabled(option) || isSelected(option));

                    if (props.optionGroupLabel) {
                        value = [];
                        options.forEach(
                            (optionGroup) =>
                                (value = [
                                    ...value,
                                    ...getOptionGroupChildren(optionGroup)
                                        .filter((option) => !isOptionDisabled(option))
                                        .map((option) => getOptionValue(option))
                                ])
                        );
                    } else {
                        value = options.map((option) => getOptionValue(option));
                    }
                }

                updateModel(event.originalEvent, value, value);
            }
        };

        const updateModel = (event, value, selectedOption) => {
            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value,
                    selectedOption,
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value
                    }
                });
            }
        };

        const onFilterInputChange = (event) => {
            const filter = event.query;

            setFilterState(filter);

            if (props.onFilter) {
                props.onFilter({
                    originalEvent: event,
                    filter
                });
            }
        };

        const resetFilter = () => {
            setFilterState('');
            props.onFilter && props.onFilter({ filter: '' });
        };

        const scrollInView = () => {
            const highlightItem = DomHandler.findSingle(overlayRef.current, 'li.p-highlight');

            if (highlightItem && highlightItem.scrollIntoView) {
                highlightItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }
        };

        const show = () => {
            setOverlayVisibleState(true);
        };

        const hide = () => {
            setOverlayVisibleState(false);
        };

        const onOverlayEnter = (callback) => {
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '0', left: '0' });
            alignOverlay();
            scrollInView();
            callback && callback();
        };

        const onOverlayEntered = (callback) => {
            callback && callback();
            bindOverlayListener();
            props.onShow && props.onShow();
        };

        const onOverlayExit = () => {
            unbindOverlayListener();
        };

        const onOverlayExited = () => {
            if (props.filter && props.resetFilterOnHide) {
                resetFilter();
            }

            ZIndexUtils.clear(overlayRef.current);

            props.onHide && props.onHide();
        };

        const alignOverlay = () => {
            DomHandler.alignOverlay(overlayRef.current, labelRef.current.parentElement, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
        };

        const isClearClicked = (event) => {
            return DomHandler.getAttribute(event.target, 'data-pc-section') === 'clearicon';
        };

        const isSelectAllClicked = (event) => {
            return DomHandler.getAttribute(event.target, 'data-pc-section') === 'headercheckboxcontainer';
        };

        const isPanelClicked = (event) => {
            return overlayRef.current && overlayRef.current.contains(event.target);
        };

        const onCloseClick = (event) => {
            hide();
            DomHandler.focus(inputRef.current);
            event.preventDefault();
            event.stopPropagation();
        };

        const getSelectedOptionIndex = () => {
            if (props.value != null && props.options) {
                if (props.optionGroupLabel) {
                    let groupIndex = 0;
                    const optionIndex = props.options.findIndex((optionGroup, i) => (groupIndex = i) && findOptionIndexInList(props.value, getOptionGroupChildren(optionGroup)) !== -1);

                    return optionIndex !== -1 ? { group: groupIndex, option: optionIndex } : -1;
                } else {
                    return findOptionIndexInList(props.value, props.options);
                }
            }

            return -1;
        };

        const findOptionIndexInList = (value, list) => {
            return list.findIndex((item) => value.some((val) => ObjectUtils.equals(val, getOptionValue(item), equalityKey)));
        };

        const isSelected = (option) => {
            if (props.value) {
                const optionValue = getOptionValue(option);
                const isUsed = isOptionValueUsed(option);

                return props.value.some((val) => ObjectUtils.equals(isUsed ? val : getOptionValue(val), optionValue, equalityKey));
            }

            return false;
        };

        const getLabelByValue = (val) => {
            let option;

            if (props.options) {
                if (props.optionGroupLabel) {
                    for (let optionGroup of props.options) {
                        option = findOptionByValue(val, getOptionGroupChildren(optionGroup));

                        if (option) {
                            break;
                        }
                    }
                } else {
                    option = findOptionByValue(val, props.options);

                    if (ObjectUtils.isEmpty(option)) {
                        option = findOptionByValue(val, props.value);
                    }
                }
            }

            return option ? getOptionLabel(option) : null;
        };

        const findOptionByValue = (val, list) => {
            return list.find((option) => ObjectUtils.equals(getOptionValue(option), val, equalityKey));
        };

        const onFocus = (event) => {
            setFocusedState(true);
            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            setFocusedState(false);
            props.onBlur && props.onBlur(event);
        };

        const isAllSelected = () => {
            if (props.onSelectAll) {
                return props.selectAll;
            } else {
                if (ObjectUtils.isEmpty(visibleOptions)) {
                    return false;
                }

                const options = visibleOptions.filter((option) => !isOptionDisabled(option));

                if (props.optionGroupLabel) {
                    let areAllSelected = true;

                    for (let optionGroup of options) {
                        const visibleOptionsGroupChildren = getOptionGroupChildren(optionGroup).filter((option) => !isOptionDisabled(option));

                        if (visibleOptionsGroupChildren.some((option) => !isSelected(option)) === true) {
                            areAllSelected = false;
                        }
                    }

                    return areAllSelected;
                } else {
                    return !options.some((option) => !isSelected(option));
                }
            }
        };

        const getOptionLabel = (option) => {
            return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
        };

        const getOptionValue = (option) => {
            if (props.useOptionAsValue) {
                return option;
            }

            if (props.optionValue) {
                const data = ObjectUtils.resolveFieldData(option, props.optionValue);

                return data !== null ? data : option;
            }

            return option && option['value'] !== undefined ? option['value'] : option;
        };

        const getOptionRenderKey = (option) => {
            return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
        };

        const getOptionGroupRenderKey = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
        };

        const getOptionGroupLabel = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
        };

        const getOptionGroupChildren = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
        };

        const isOptionDisabled = (option) => {
            if (props.optionDisabled) {
                return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
            }

            return option && option['disabled'] !== undefined ? option['disabled'] : false;
        };

        const isOptionValueUsed = (option) => {
            return (!props.useOptionAsValue && props.optionValue) || (option && option['value'] !== undefined);
        };

        const checkValidity = () => {
            return inputRef.current.checkValidity();
        };

        const removeChip = (event, item) => {
            const value = props.value.filter((val) => !ObjectUtils.equals(val, item, equalityKey));

            if (props.onRemove) {
                props.onRemove({
                    originalEvent: event,
                    value
                });
            }

            updateModel(event, value, item);
        };

        const getSelectedItemsLabel = () => {
            const pattern = /{(.*?)}/;

            if (pattern.test(props.selectedItemsLabel)) {
                return props.selectedItemsLabel.replace(props.selectedItemsLabel.match(pattern)[0], props.value.length + '');
            }

            return props.selectedItemsLabel;
        };

        const getLabel = () => {
            let label;

            if (!empty && !props.fixedPlaceholder) {
                if (ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value.length > props.maxSelectedLabels) {
                    return getSelectedItemsLabel();
                } else {
                    if (ObjectUtils.isArray(props.value)) {
                        return props.value.reduce((acc, value, index) => acc + (index !== 0 ? ', ' : '') + getLabelByValue(value), '');
                    } else {
                        return '';
                    }
                }
            }

            return label;
        };

        const getLabelContent = () => {
            if (props.selectedItemTemplate) {
                if (!empty) {
                    if (ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value.length > props.maxSelectedLabels) {
                        return getSelectedItemsLabel();
                    } else {
                        return props.value.map((val, index) => {
                            const item = ObjectUtils.getJSXElement(props.selectedItemTemplate, val);

                            return <React.Fragment key={index}>{item}</React.Fragment>;
                        });
                    }
                } else {
                    return ObjectUtils.getJSXElement(props.selectedItemTemplate);
                }
            } else {
                if (props.display === 'chip' && !empty) {
                    const value = props.value.slice(0, props.maxSelectedLabels || props.value.length);

                    return value.map((val, i) => {
                        const label = getLabelByValue(val);
                        const iconProps = mergeProps(
                            {
                                key: i,
                                className: cx('removeTokenIcon'),
                                onClick: (e) => removeChip(e, val)
                            },
                            ptm('removeTokenIcon')
                        );
                        const icon = !props.disabled && (props.removeIcon ? IconUtils.getJSXIcon(props.removeIcon, { ...iconProps }, { props }) : <TimesCircleIcon {...iconProps} />);

                        const tokenProps = mergeProps(
                            {
                                className: cx('token')
                            },
                            ptm('token')
                        );

                        const tokenLabelProps = mergeProps(
                            {
                                key: label + i,
                                className: cx('tokenLabel')
                            },
                            ptm('tokenLabel')
                        );

                        return (
                            <div {...tokenProps} key={label}>
                                <span {...tokenLabelProps}>{label}</span>
                                {icon}
                            </div>
                        );
                    });
                }

                return getLabel();
            }
        };

        const getVisibleOptions = () => {
            if (hasFilter) {
                const filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
                const searchFields = props.filterBy ? props.filterBy.split(',') : [props.optionLabel || 'label'];

                if (props.optionGroupLabel) {
                    let filteredGroups = [];

                    for (let optgroup of props.options) {
                        let filteredSubOptions = FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);

                        if (filteredSubOptions && filteredSubOptions.length) {
                            filteredGroups.push({ ...optgroup, ...{ [props.optionGroupChildren]: filteredSubOptions } });
                        }
                    }

                    return filteredGroups;
                } else {
                    return FilterService.filter(props.options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
                }
            } else {
                return props.options;
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getOverlay: () => overlayRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        React.useEffect(() => {
            setTimeout(() => {
                props.overlayVisible ? show() : hide();
            }, 100);
        }, [props.overlayVisible]);

        useUpdateEffect(() => {
            if (overlayVisibleState && filterState && hasFilter) {
                alignOverlay();
            }
        }, [overlayVisibleState, filterState, hasFilter]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(overlayRef.current);
        });

        const createClearIcon = () => {
            const clearIconProps = mergeProps(
                {
                    className: cx('clearIcon'),
                    onClick: (e) => updateModel(e, [], [])
                },
                ptm('clearIcon')
            );

            const icon = props.clearIcon || <TimesIcon {...clearIconProps} />;
            const clearIcon = IconUtils.getJSXIcon(icon, { ...clearIconProps }, { props });

            if (!empty && props.showClear && !props.disabled) {
                return clearIcon;
            }

            return null;
        };

        const createLabel = () => {
            const content = getLabelContent();

            const labelContainerProps = mergeProps(
                {
                    ref: labelRef,
                    className: cx('labelContainer')
                },
                ptm('labelContainer')
            );

            const labelProps = mergeProps(
                {
                    className: cx('label', { empty })
                },
                ptm('label')
            );

            return (
                <div {...labelContainerProps}>
                    <div {...labelProps}>{content || props.placeholder || 'empty'}</div>
                </div>
            );
        };

        const visibleOptions = getVisibleOptions();

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = MultiSelectBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);

        const triggerIconProps = mergeProps(
            {
                className: cx('triggerIcon')
            },
            ptm('triggerIcon')
        );

        const triggerProps = mergeProps(
            {
                className: cx('trigger')
            },
            ptm('trigger')
        );
        const dropdownIcon = <div {...triggerProps}>{props.dropdownIcon ? IconUtils.getJSXIcon(props.dropdownIcon, { ...triggerIconProps }, { props }) : <ChevronDownIcon {...triggerIconProps} />}</div>;

        const label = !props.inline && createLabel();
        const clearIcon = !props.inline && createClearIcon();

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                style: { ...props.style, ...sx('root') },
                className: classNames(props.className, cx('root', { focusedState, overlayVisibleState })),
                ...otherProps,
                onClick: onClick
            },
            MultiSelectBase.getOtherProps(props),
            ptm('root')
        );

        const hiddenInputWrapperProps = mergeProps(
            {
                className: 'p-hidden-accessible'
            },
            ptm('hiddenInputWrapper')
        );

        const inputProps = mergeProps(
            {
                ref: inputRef,
                id: props.inputId,
                name: props.name,
                type: 'text',
                onFocus: onFocus,
                onBlur: onBlur,
                onKeyDown: onKeyDown,
                role: 'listbox',
                'aria-expanded': overlayVisibleState,
                disabled: props.disabled,
                tabIndex: props.tabIndex,
                ...ariaProps
            },
            ptm('input')
        );

        return (
            <>
                <div {...rootProps}>
                    <div {...hiddenInputWrapperProps}>
                        <input {...inputProps} readOnly />
                    </div>
                    {!props.inline && (
                        <>
                            {label}
                            {clearIcon}
                            {dropdownIcon}
                        </>
                    )}
                    <MultiSelectPanel
                        hostName="MultiSelect"
                        ref={overlayRef}
                        visibleOptions={visibleOptions}
                        {...props}
                        onClick={onPanelClick}
                        onOverlayHide={hide}
                        filterValue={filterState}
                        hasFilter={hasFilter}
                        onFilterInputChange={onFilterInputChange}
                        resetFilter={resetFilter}
                        onCloseClick={onCloseClick}
                        onSelectAll={onSelectAll}
                        getOptionLabel={getOptionLabel}
                        getOptionRenderKey={getOptionRenderKey}
                        isOptionDisabled={isOptionDisabled}
                        getOptionGroupChildren={getOptionGroupChildren}
                        getOptionGroupLabel={getOptionGroupLabel}
                        getOptionGroupRenderKey={getOptionGroupRenderKey}
                        isSelected={isSelected}
                        getSelectedOptionIndex={getSelectedOptionIndex}
                        isAllSelected={isAllSelected}
                        onOptionSelect={onOptionSelect}
                        allowOptionSelect={allowOptionSelect}
                        onOptionKeyDown={onOptionKeyDown}
                        in={overlayVisibleState}
                        onEnter={onOverlayEnter}
                        onEntered={onOverlayEntered}
                        onExit={onOverlayExit}
                        onExited={onOverlayExited}
                        ptm={ptm}
                        cx={cx}
                        sx={sx}
                        isUnstyled={isUnstyled}
                        metaData={metaData}
                    />
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} pt={ptm('tooltip')} />}
            </>
        );
    })
);

MultiSelect.displayName = 'MultiSelect';
