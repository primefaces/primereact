import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { PrimeReactContext } from '../api/Api';
import { useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { SearchIcon } from '../icons/search';
import { TimesIcon } from '../icons/times';
import { OverlayService } from '../overlayservice/OverlayService';
import { Ripple } from '../ripple/Ripple';
import { Tree } from '../tree/Tree';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils, classNames, mergeProps } from '../utils/Utils';
import { TreeSelectBase } from './TreeSelectBase';
import { TreeSelectPanel } from './TreeSelectPanel';
import { useHandleStyle } from '../componentbase/ComponentBase';

export const TreeSelect = React.memo(
    React.forwardRef((inProps, ref) => {
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
        const expandedKeys = props.onToggle ? props.expandedKeys : expandedKeysState;
        const filteredValue = props.onFilterValueChange ? props.filterValue : filterValueState;
        const isValueEmpty = ObjectUtils.isEmpty(props.value);
        const hasNoOptions = ObjectUtils.isEmpty(props.options);
        const isSingleSelectionMode = props.selectionMode === 'single';
        const isCheckboxSelectionMode = props.selectionMode === 'checkbox';

        const { ptm, cx, isUnstyled } = TreeSelectBase.setMetaData({
            props,
            state: {
                focused: focusedState,
                overlayVisible: overlayVisibleState,
                expandedKeys: expandedKeys,
                filterValue: filteredValue
            }
        });

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
        };

        const onInputFocus = () => {
            setFocusedState(true);
        };

        const onInputBlur = () => {
            setFocusedState(false);
        };

        const onClick = (event) => {
            if (!props.disabled && (!overlayRef.current || !overlayRef.current.contains(event.target)) && !DomHandler.hasClass(event.target, 'p-treeselect-close')) {
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

        const onNodeSelect = (node) => {
            props.onNodeSelect && props.onNodeSelect(node);
            isSingleSelectionMode && hide();
        };

        const onNodeUnselect = (node) => {
            props.onNodeUnselect && props.onNodeUnselect(node);
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

        const onInputKeyDown = (event) => {
            switch (event.which) {
                //down
                case 40:
                    if (!overlayVisibleState && event.altKey) {
                        show();
                    }

                    break;

                //space
                case 32:
                    if (!overlayVisibleState) {
                        show();
                        event.preventDefault();
                    }

                    break;

                //enter and escape
                case 13:
                case 27:
                    if (overlayVisibleState) {
                        hide();
                        event.preventDefault();
                    }

                    break;

                //tab
                case 9:
                    hide();
                    break;

                default:
                    break;
            }
        };

        const onFilterInputKeyDown = (event) => {
            //enter
            if (event.which === 13) {
                event.preventDefault();
            }
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
            const highlightItem = DomHandler.findSingle(overlayRef.current, '.p-treenode-content.p-highlight');

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
            focus: () => DomHandler.focus(focusInputRef.current),
            getElement: () => elementRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(focusInputRef, props.inputRef);
        }, [focusInputRef, props.inputRef]);

        useMountEffect(() => {
            updateTreeState();

            if (props.autoFocus) {
                DomHandler.focus(focusInputRef.current, props.autoFocus);
            }
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
                    onFocus: onInputFocus,
                    onBlur: onInputBlur,
                    onKeyDown: onInputKeyDown,
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
                    'aria-haspopup': 'listbox',
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
                        onKeyDown: onFilterInputKeyDown,
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
                        filterInputKeyDown: onFilterInputKeyDown,
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
        const content = createContent();
        const header = createHeader();
        const footer = createFooter();

        return (
            <div {...rootProps}>
                {keyboardHelper}
                {labelElement}
                {dropdownIcon}
                <TreeSelectPanel
                    ref={overlayRef}
                    appendTo={props.appendTo}
                    panelStyle={props.panelStyle}
                    panelClassName={props.panelClassName}
                    scrollHeight={props.scrollHeight}
                    onClick={onOverlayClick}
                    header={header}
                    footer={footer}
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
            </div>
        );
    })
);

TreeSelect.displayName = 'TreeSelect';
