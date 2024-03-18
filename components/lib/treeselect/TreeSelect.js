import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { SearchIcon } from '../icons/search';
import { TimesIcon } from '../icons/times';
import { OverlayService } from '../overlayservice/OverlayService';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { Tree } from '../tree/Tree';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils } from '../utils/Utils';
import { TreeSelectBase } from './TreeSelectBase';
import { TreeSelectPanel } from './TreeSelectPanel';

export const TreeSelect = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = TreeSelectBase.getProps(inProps, context);

        const [focusedState, setFocusedState] = React.useState(false);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const [expandedKeysState, setExpandedKeysState] = React.useState(props.expandedKeys);
        const [filterValueState, setFilterValueState] = React.useState('');
        const elementRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const filterInputRef = React.useRef(null);
        const focusInputRef = React.useRef(props.inputRef);
        const triggerRef = React.useRef(null);
        const selfChange = React.useRef(null);
        const treeRef = React.useRef(null);
        const firstHiddenFocusableElementOnOverlay = React.useRef(null);
        const lastHiddenFocusableElementOnOverlay = React.useRef(null);
        const focusToTree = React.useRef(false);
        const listId = React.useRef('');
        const expandedKeys = props.onToggle ? props.expandedKeys : expandedKeysState;
        const filteredValue = props.onFilterValueChange ? props.filterValue : filterValueState;
        const isValueEmpty = ObjectUtils.isEmpty(props.value);
        const hasNoOptions = ObjectUtils.isEmpty(props.options);
        const isSingleSelectionMode = props.selectionMode === 'single';
        const isCheckboxSelectionMode = props.selectionMode === 'checkbox';
        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);

        const metaData = {
            props,
            state: {
                focused: focusedState,
                overlayVisible: overlayVisibleState,
                expandedKeys: expandedKeys,
                filterValue: filteredValue
            }
        };

        const { ptm, cx, isUnstyled } = TreeSelectBase.setMetaData(metaData);

        useHandleStyle(TreeSelectBase.css.styles, isUnstyled, { name: 'treeselect' });

        const filterOptions = {
            filter: (e) => onFilterInputChange(e),
            reset: () => resetFilter()
        };

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { valid }) => {
                valid && hide();
            },
            when: overlayVisibleState
        });

        const getLabel = () => {
            return selectedNodes.length ? selectedNodes.map((node) => node.label).join(', ') : props.placeholder;
        };

        const show = () => {
            setOverlayVisibleState(true);
        };

        const hide = () => {
            setOverlayVisibleState(false);
            focusInputRef.current && DomHandler.focus(focusInputRef.current);
        };

        const onInputFocus = () => {
            setFocusedState(true);

            props.onFocus && props.onFocus();
        };

        const onInputBlur = () => {
            setFocusedState(false);

            props.onBlur && props.onBlur();
        };

        const onClick = (event) => {
            if (!props.disabled && (!overlayRef.current || !overlayRef.current.contains(event.target)) && !DomHandler.isAttributeEquals(event.target, 'data-pc-section', 'closebutton')) {
                DomHandler.focus(focusInputRef.current);
                overlayVisibleState ? hide() : show();
            }
        };

        const onSelectionChange = (event) => {
            if (props.onChange) {
                selfChange.current = true;

                props.onChange({
                    originalEvent: event.originalEvent,
                    value: event.value,
                    stopPropagation: () => {
                        event.originalEvent.stopPropagation();
                    },
                    preventDefault: () => {
                        event.originalEvent.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: event.value
                    }
                });
            }
        };

        const clear = (event) => {
            if (props.onChange) {
                selfChange.current = true;

                props.onChange({
                    originalEvent: event,
                    value: undefined,
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: undefined
                    }
                });
            }
        };

        const onNodeSelect = (node) => {
            props.onNodeSelect && props.onNodeSelect(node);
            isSingleSelectionMode && hide();
        };

        const onNodeUnselect = (node) => {
            props.onNodeUnselect && props.onNodeUnselect(node);
            isCheckboxSelectionMode && node.originalEvent.stopPropagation();
        };

        const onNodeToggle = (e) => {
            if (props.onToggle) {
                props.onToggle(e);
            } else {
                setExpandedKeysState(e.value);
            }
        };

        const onFilterValueChange = (e) => {
            setFilterValueState(e.value);
        };

        const onOverlayClick = (event) => {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        };

        const onFirstHiddenFocus = (event) => {
            const focusableEl = event.relatedTarget === focusInputRef.current ? DomHandler.getFirstFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : focusInputRef.current;

            DomHandler.focus(focusableEl);
        };

        const onLastHiddenFocus = (event) => {
            const focusableEl = event.relatedTarget === focusInputRef.current ? DomHandler.getLastFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : focusInputRef.current;

            DomHandler.focus(focusableEl);
        };

        const onHeaderElementKeyDown = (event, isHideButton) => {
            switch (event.code) {
                case 'ArrowDown':
                    event.preventDefault();
                    setFocusToFocusableFirstNode();

                    break;

                case 'ArrowUp':
                    event.preventDefault();
                    focusInputRef.current && DomHandler.focus(focusInputRef.current);

                    break;

                case 'Space':
                case 'Enter':
                case 'NumpadEnter':
                    event.preventDefault();

                    if (isHideButton) hide();
                    break;

                case 'Escape':
                    onEscapeKey(event);
                    break;

                default:
                    break;
            }
        };

        const onKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event);
                    break;

                case 'Space':
                case 'Enter':
                case 'NumpadEnter':
                    onEnterKey(event);
                    break;

                case 'Escape':
                    onEscapeKey(event);
                    break;

                case 'Tab':
                    if (overlayVisibleState) {
                        event.preventDefault();

                        if (event.shiftKey) setFocusToFocusableFirstNode();
                        else onTabKey(event);
                    }

                    break;

                default:
                    break;
            }
        };

        const onArrowDownKey = (event) => {
            if (overlayVisibleState) return;
            focusToTree.current = true;
            show();

            event.preventDefault();
        };

        const onEnterKey = (event) => {
            if (overlayVisibleState) {
                hide();
            } else {
                onArrowDownKey(event);
            }

            event.preventDefault();
        };

        const onEscapeKey = (event) => {
            if (overlayVisibleState) {
                hide();
                event.preventDefault();
            }
        };

        const onTabKey = (event, pressedInInputText = false) => {
            if (!pressedInInputText) {
                if (overlayVisibleState && hasFocusableElements()) {
                    DomHandler.focus(firstHiddenFocusableElementOnOverlay.current);

                    event.preventDefault();
                }
            }
        };

        const hasFocusableElements = () => {
            return DomHandler.getFocusableElements(overlayRef.current, ':not([data-p-hidden-focusable="true"])').length > 0;
        };

        const onFilterInputChange = (event) => {
            const value = event.target.value;

            if (props.onFilterValueChange) {
                props.onFilterValueChange({
                    originalEvent: event,
                    value
                });
            } else {
                setFilterValueState(value);
            }
        };

        const resetFilter = () => {
            setFilterValueState('');
        };

        const onOverlayEnter = () => {
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '0', left: '0' });
            setFocusToFocusableFirstNode();
            alignOverlay();
            scrollInView();
        };

        const onOverlayEntered = () => {
            bindOverlayListener();

            if (props.filter && props.filterInputAutoFocus) {
                DomHandler.focus(filterInputRef.current, props.filterInputAutoFocus);
            }

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
            DomHandler.alignOverlay(overlayRef.current, triggerRef.current.parentElement, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
        };

        const scrollInView = () => {
            const highlightItem = DomHandler.findSingle(overlayRef.current, '[data-pc-section="content"][data-p-highlight="true"]');

            if (highlightItem && highlightItem.scrollIntoView) {
                highlightItem.scrollIntoView({ block: 'nearest', inline: 'start' });
            }
        };

        const findSelectedNodes = (node, keys, selectedNodes) => {
            if (node) {
                if (isSelected(node, keys)) {
                    selectedNodes.push(node);
                    delete keys[node.key];
                }

                if (Object.keys(keys).length && node.children) {
                    for (let childNode of node.children) {
                        findSelectedNodes(childNode, keys, selectedNodes);
                    }
                }
            } else {
                for (let childNode of props.options) {
                    findSelectedNodes(childNode, keys, selectedNodes);
                }
            }
        };

        const isSelected = (node, keys) => {
            return isCheckboxSelectionMode ? keys[node.key] && keys[node.key].checked : keys[node.key];
        };

        const updateTreeState = () => {
            const keys = isSingleSelectionMode ? { [`${props.value}`]: true } : { ...props.value };

            setExpandedKeysState({});

            if (keys && props.options) {
                updateTreeBranchState(null, null, keys);
            }
        };

        const setFocusToFocusableFirstNode = () => {
            const treeNodeEl = DomHandler.find(treeRef.current.getElement(), '[data-pc-section="node"]');
            const focusedElement = [...treeNodeEl].find((item) => item.getAttribute('tabindex') === '0');

            DomHandler.focus(focusedElement);
        };

        const updateTreeBranchState = (node, path, keys) => {
            if (node) {
                if (isSelected(node, keys)) {
                    expandPath(path);
                    delete keys[node.key];
                }

                if (Object.keys(keys).length && node.children) {
                    for (let childNode of node.children) {
                        path.push(node.key);
                        updateTreeBranchState(childNode, path, keys);
                    }
                }
            } else {
                for (let childNode of props.options) {
                    updateTreeBranchState(childNode, [], keys);
                }
            }
        };

        const expandPath = (path) => {
            if (path.length > 0) {
                let expandedKeys = { ...(expandedKeysState || {}) };

                for (let key of path) {
                    expandedKeys[key] = true;
                }

                setExpandedKeysState(expandedKeys);
            }
        };

        const getSelectedNodes = () => {
            let selectedNodes = [];

            if (ObjectUtils.isNotEmpty(props.value) && props.options) {
                const keys = isSingleSelectionMode ? { [`${props.value}`]: true } : { ...props.value };

                findSelectedNodes(null, keys, selectedNodes);
            }

            return selectedNodes;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            clear,
            show,
            hide,
            focus: () => DomHandler.focus(focusInputRef.current),
            getElement: () => elementRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(focusInputRef, props.inputRef);
        }, [focusInputRef, props.inputRef]);

        useMountEffect(() => {
            updateTreeState();

            listId.current = UniqueComponentId() + '_list';

            if (props.autoFocus) {
                DomHandler.focus(focusInputRef.current, props.autoFocus);
            }

            alignOverlay();
        });

        useUpdateEffect(() => {
            if (overlayVisibleState && props.filter) {
                alignOverlay();
            }
        });

        useUpdateEffect(() => {
            updateTreeState();
        }, [props.options]);

        useUpdateEffect(() => {
            if (focusToTree.current && overlayVisibleState) {
                focusToTree.current = false;

                setFocusToFocusableFirstNode();
            }
        }, [overlayVisibleState]);

        useUpdateEffect(() => {
            if (overlayVisibleState && expandedKeysState) {
                alignOverlay();
            }
        }, [expandedKeysState]);

        useUpdateEffect(() => {
            if (overlayVisibleState) {
                if (!selfChange.current) {
                    updateTreeState();
                }

                selfChange.current = false;
            }
        }, [props.value]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(overlayRef.current);
        });

        const createKeyboardHelper = () => {
            const hiddenInputWrapperProps = mergeProps(
                {
                    className: 'p-hidden-accessible'
                },
                ptm('hiddenInputWrapper')
            );

            const hiddenInputProps = mergeProps(
                {
                    ref: focusInputRef,
                    role: 'listbox',
                    id: props.inputId,
                    type: 'text',
                    'aria-expanded': overlayVisibleState,
                    'aria-label': props.ariaLabel,
                    'aria-labelledby': props.ariaLabelledBy,
                    'aria-haspopup': 'tree',
                    'aria-controls': listId.current,
                    onFocus: onInputFocus,
                    onBlur: onInputBlur,
                    onKeyDown,
                    disabled: props.disabled,
                    tabIndex: props.tabIndex,
                    ...ariaProps
                },
                ptm('hiddenInput')
            );

            return (
                <div {...hiddenInputWrapperProps}>
                    <input {...hiddenInputProps} readOnly />
                </div>
            );
        };

        const createLabel = () => {
            const tokenProps = mergeProps(
                {
                    className: cx('token')
                },
                ptm('token')
            );
            const tokenLabelProps = mergeProps(
                {
                    className: cx('tokenLabel')
                },
                ptm('tokenLabel')
            );

            const labelContainerProps = mergeProps(
                {
                    className: cx('labelContainer')
                },
                ptm('labelContainer')
            );

            const labelProps = mergeProps(
                {
                    className: cx('label', { isValueEmpty, getLabel })
                },
                ptm('label')
            );

            let content = null;

            if (props.valueTemplate) {
                content = ObjectUtils.getJSXElement(props.valueTemplate, selectedNodes, props);
            } else {
                if (props.display === 'comma') {
                    content = getLabel() || 'empty';
                } else if (props.display === 'chip') {
                    content = (
                        <>
                            {selectedNodes &&
                                selectedNodes.map((node, index) => {
                                    return (
                                        <div {...tokenProps} key={`${node.key}_${index}`}>
                                            <span {...tokenLabelProps}>{node.label}</span>
                                        </div>
                                    );
                                })}

                            {isValueEmpty && (props.placeholder || 'empty')}
                        </>
                    );
                }
            }

            return (
                <div {...labelContainerProps}>
                    <div {...labelProps}>{content}</div>
                </div>
            );
        };

        const createDropdownIcon = () => {
            const triggerProps = mergeProps(
                {
                    ref: triggerRef,
                    className: cx('trigger'),
                    role: 'button',
                    'aria-haspopup': 'tree',
                    'aria-expanded': overlayVisibleState
                },
                ptm('trigger')
            );
            const triggerIconProps = mergeProps(
                {
                    className: cx('triggerIcon')
                },
                ptm('triggerIcon')
            );

            const icon = props.dropdownIcon || <ChevronDownIcon {...triggerIconProps} />;
            const dropdownIcon = IconUtils.getJSXIcon(icon, { ...triggerIconProps }, { props });

            return <div {...triggerProps}>{dropdownIcon}</div>;
        };

        const createClearIcon = () => {
            if (props.value != null && props.showClear && !props.disabled) {
                const clearIconProps = mergeProps(
                    {
                        className: cx('clearIcon'),
                        onPointerUp: clear
                    },
                    ptm('clearIcon')
                );
                const icon = props.clearIcon || <TimesIcon {...clearIconProps} />;

                return IconUtils.getJSXIcon(icon, { ...clearIconProps }, { props });
            }

            return null;
        };

        const createContent = () => {
            const emptyMessageProps = mergeProps(
                {
                    className: cx('emptyMessage')
                },
                ptm('emptyMessage')
            );

            return (
                <>
                    <Tree
                        ref={treeRef}
                        id={listId.current}
                        expandedKeys={expandedKeys}
                        filter={props.filter}
                        filterBy={props.filterBy}
                        filterLocale={props.filterLocale}
                        filterMode={props.filterMode}
                        filterPlaceholder={props.filterPlaceholder}
                        filterValue={filteredValue}
                        metaKeySelection={props.metaKeySelection}
                        nodeTemplate={props.nodeTemplate}
                        onCollapse={props.onNodeCollapse}
                        onExpand={props.onNodeExpand}
                        onFilterValueChange={onFilterValueChange}
                        onSelect={onNodeSelect}
                        onSelectionChange={onSelectionChange}
                        onToggle={onNodeToggle}
                        onUnselect={onNodeUnselect}
                        selectionKeys={props.value}
                        selectionMode={props.selectionMode}
                        showHeader={false}
                        togglerTemplate={props.togglerTemplate}
                        value={props.options}
                        pt={ptm('tree')}
                        __parentMetadata={{ parent: metaData }}
                    ></Tree>

                    {hasNoOptions && <div {...emptyMessageProps}>{props.emptyMessage || localeOption('emptyMessage')}</div>}
                </>
            );
        };

        const createFilterElement = () => {
            if (props.filter) {
                const filterValue = ObjectUtils.isNotEmpty(filteredValue) ? filteredValue : '';
                const filterContainerProps = mergeProps(
                    {
                        className: cx('filterContainer')
                    },
                    ptm('filterContainer')
                );
                const filterProps = mergeProps(
                    {
                        ref: filterInputRef,
                        type: 'text',
                        value: filterValue,
                        autoComplete: 'off',
                        className: cx('filter'),
                        placeholder: props.filterPlaceholder,
                        onKeyDown: (event) => onHeaderElementKeyDown(event, false),
                        onChange: onFilterInputChange,
                        disabled: props.disabled
                    },
                    ptm('filter')
                );

                const filterIconProps = mergeProps(
                    {
                        className: cx('filterIcon')
                    },
                    ptm('filterIcon')
                );
                const icon = props.filterIcon || <SearchIcon {...filterIconProps} />;
                const filterIcon = IconUtils.getJSXIcon(icon, { ...filterIconProps }, { props });

                let filterContent = (
                    <div {...filterContainerProps}>
                        <input {...filterProps} />
                        {filterIcon}
                    </div>
                );

                if (props.filterTemplate) {
                    const defaultContentOptions = {
                        className: 'p-treeselect-filter-container',
                        element: filterContent,
                        filterOptions: filterOptions,
                        filterInputKeyDown: (event) => onHeaderElementKeyDown(event, () => {}),
                        filterInputChange: onFilterInputChange,
                        filterIconClassName: 'p-dropdown-filter-icon',
                        props
                    };

                    filterContent = ObjectUtils.getJSXElement(props.filterTemplate, defaultContentOptions);
                }

                return <>{filterContent}</>;
            }
        };

        const createHeader = () => {
            const filterElement = createFilterElement();
            const closeIconProps = mergeProps(
                {
                    className: cx('closeIcon'),
                    'aria-hidden': true
                },
                ptm('closeIcon')
            );
            const icon = props.closeIcon || <TimesIcon {...closeIconProps} />;
            const closeIcon = IconUtils.getJSXIcon(icon, { ...closeIconProps }, { props });

            const closeButtonProps = mergeProps(
                {
                    type: 'button',
                    className: cx('closeButton'),
                    onKeyDown: (event) => onHeaderElementKeyDown(event, true),
                    onClick: hide,
                    'aria-label': localeOption('close')
                },
                ptm('closeButton')
            );

            const headerProps = mergeProps(
                {
                    className: cx('header')
                },
                ptm('header')
            );

            const closeElement = (
                <button {...closeButtonProps}>
                    {closeIcon}
                    <Ripple />
                </button>
            );
            const content = (
                <div {...headerProps}>
                    {filterElement}
                    {closeElement}
                </div>
            );

            if (props.panelHeaderTemplate) {
                const defaultOptions = {
                    className: 'p-treeselect-header',
                    filterElement,
                    closeElement,
                    closeElementClassName: 'p-treeselect-close p-link',
                    closeIconClassName: 'p-treeselect-close-icon',
                    onCloseClick: hide,
                    element: content,
                    props
                };

                return ObjectUtils.getJSXElement(props.panelHeaderTemplate, defaultOptions);
            }

            return content;
        };

        const createFooter = () => {
            return ObjectUtils.getJSXElement(props.panelFooterTemplate, props);
        };

        const selectedNodes = getSelectedNodes();

        const otherProps = TreeSelectBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const firstHiddenFocusableElementOnOverlayProps = mergeProps(
            {
                ref: firstHiddenFocusableElementOnOverlay,
                role: 'presentation',
                className: 'p-hidden-accessible p-hidden-focusable',
                tabIndex: 0,
                onFocus: onFirstHiddenFocus,
                'aria-hidden': true,
                'data-p-hidden-accessible': true,
                'data-p-hidden-focusable': true
            },
            ptm('firstHiddenFocusableElementOnOverlay')
        );
        const lastHiddenFocusableElementOnOverlayProps = mergeProps(
            {
                ref: lastHiddenFocusableElementOnOverlay,
                role: 'presentation',
                className: 'p-hidden-accessible p-hidden-focusable',
                tabIndex: 0,
                onFocus: onLastHiddenFocus,
                'aria-hidden': true,
                'data-p-hidden-accessible': true,
                'data-p-hidden-focusable': true
            },
            ptm('lastHiddenFocusableElementOnOverlay')
        );
        const rootProps = mergeProps(
            {
                ref: elementRef,
                className: cx('root', { focusedState, overlayVisibleState, isValueEmpty }),
                style: props.style,
                onClick: onClick
            },
            TreeSelectBase.getOtherProps(props),
            ptm('root')
        );

        const keyboardHelper = createKeyboardHelper();
        const labelElement = createLabel();
        const dropdownIcon = createDropdownIcon();
        const clearIcon = createClearIcon();
        const content = createContent();
        const header = createHeader();
        const footer = createFooter();

        return (
            <div {...rootProps}>
                {keyboardHelper}
                {labelElement}
                {clearIcon}
                {dropdownIcon}
                <TreeSelectPanel
                    hostName="TreeSelect"
                    ref={overlayRef}
                    appendTo={props.appendTo}
                    panelStyle={props.panelStyle}
                    panelClassName={props.panelClassName}
                    scrollHeight={props.scrollHeight}
                    onClick={onOverlayClick}
                    header={header}
                    hide={hide}
                    footer={footer}
                    firstHiddenFocusableElementOnOverlay={<span {...firstHiddenFocusableElementOnOverlayProps}></span>}
                    lastHiddenFocusableElementOnOverlay={<span {...lastHiddenFocusableElementOnOverlayProps}></span>}
                    transitionOptions={props.transitionOptions}
                    in={overlayVisibleState}
                    onEnter={onOverlayEnter}
                    onEntered={onOverlayEntered}
                    onExit={onOverlayExit}
                    onExited={onOverlayExited}
                    ptm={ptm}
                    cx={cx}
                >
                    {content}
                </TreeSelectPanel>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </div>
        );
    })
);

TreeSelect.displayName = 'TreeSelect';
