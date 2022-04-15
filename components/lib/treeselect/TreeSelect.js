import * as React from 'react';
import PrimeReact, { localeOption } from '../api/Api';
import { useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Ripple } from '../ripple/Ripple';
import { Tree } from '../tree/Tree';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { TreeSelectPanel } from './TreeSelectPanel';

export const TreeSelect = React.memo(React.forwardRef((props, ref) => {
    const [focusedState, setFocusedState] = React.useState(false);
    const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
    const [expandedKeysState, setExpandedKeysState] = React.useState({});
    const [filterValueState, setFilterValueState] = React.useState('');
    const elementRef = React.useRef(null);
    const overlayRef = React.useRef(null);
    const filterInputRef = React.useRef(null);
    const focusInputRef = React.useRef(null);
    const triggerRef = React.useRef(null);
    const selfChange = React.useRef(null);
    const filteredValue = props.onFilterValueChange ? props.filterValue : filterValueState;
    const isValueEmpty = ObjectUtils.isEmpty(props.value);
    const hasNoOptions = ObjectUtils.isEmpty(props.options);
    const isSingleSelectionMode = props.selectionMode === 'single';
    const isCheckboxSelectionMode = props.selectionMode === 'checkbox';

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: elementRef, overlay: overlayRef, listener: (event, { valid }) => {
            valid && hide();
        }, when: overlayVisibleState
    });

    const getLabel = () => {
        return selectedNodes.length ? selectedNodes.map(node => node.label).join(', ') : props.placeholder;
    }

    const show = () => {
        setOverlayVisibleState(true);
    }

    const hide = () => {
        setOverlayVisibleState(false);
    }

    const onInputFocus = () => {
        setFocusedState(true);
    }

    const onInputBlur = () => {
        setFocusedState(false);
    }

    const onClick = (event) => {
        if (!props.disabled && (!overlayRef.current || !overlayRef.current.contains(event.target)) && !DomHandler.hasClass(event.target, 'p-treeselect-close')) {
            focusInputRef.current.focus();
            overlayVisibleState ? hide() : show();
        }
    }

    const onSelectionChange = (event) => {
        if (props.onChange) {
            selfChange.current = true;

            props.onChange({
                originalEvent: event.originalEvent,
                value: event.value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: event.value
                }
            });
        }
    }

    const onNodeSelect = (node) => {
        props.onNodeSelect && props.onNodeSelect(node);
        isSingleSelectionMode && hide();
    }

    const onNodeUnselect = (node) => {
        props.onNodeUnselect && props.onNodeUnselect(node);
    }

    const onNodeToggle = (e) => {
        setExpandedKeysState(e.value);
    }

    const onFilterValueChange = (e) => {
        setFilterValueState(e.value);
    }

    const onOverlayClick = (event) => {
        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: elementRef.current
        });
    }

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
    }

    const onFilterInputKeyDown = (event) => {
        //enter
        if (event.which === 13) {
            event.preventDefault();
        }
    }

    const onFilterInputChange = (event) => {
        const value = event.target.value;

        if (props.onFilterValueChange) {
            props.onFilterValueChange({
                originalEvent: event,
                value
            });
        }
        else {
            setFilterValueState(value);
        }
    }

    const resetFilter = () => {
        setFilterValueState('');
    }

    const onOverlayEnter = () => {
        ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        alignOverlay();
        scrollInView();
    }

    const onOverlayEntered = () => {
        bindOverlayListener();

        if (props.filter && props.filterInputAutoFocus) {
            filterInputRef.current.focus();
        }

        props.onShow && props.onShow();
    }

    const onOverlayExit = () => {
        unbindOverlayListener();
    }

    const onOverlayExited = () => {
        if (props.filter && props.resetFilterOnHide) {
            resetFilter();
        }

        ZIndexUtils.clear(overlayRef.current);

        props.onHide && props.onHide();
    }

    const alignOverlay = () => {
        DomHandler.alignOverlay(overlayRef.current, triggerRef.current.parentElement, props.appendTo || PrimeReact.appendTo);
    }

    const scrollInView = () => {
        const highlightItem = DomHandler.findSingle(overlayRef.current, '.p-treenode-content.p-highlight');
        if (highlightItem && highlightItem.scrollIntoView) {
            highlightItem.scrollIntoView({ block: 'nearest', inline: 'start' });
        }
    }

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
        }
        else {
            for (let childNode of props.options) {
                findSelectedNodes(childNode, keys, selectedNodes);
            }
        }
    }

    const isSelected = (node, keys) => {
        return isCheckboxSelectionMode ? keys[node.key] && keys[node.key].checked : keys[node.key];
    }

    const updateTreeState = () => {
        const keys = isSingleSelectionMode ? { [`${props.value}`]: true } : { ...props.value };

        setExpandedKeysState({});

        if (keys && props.options) {
            updateTreeBranchState(null, null, keys);
        }
    }

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
        }
        else {
            for (let childNode of props.options) {
                updateTreeBranchState(childNode, [], keys);
            }
        }
    }

    const expandPath = (path) => {
        if (path.length > 0) {
            let expandedKeys = { ...(expandedKeysState || {}) };
            for (let key of path) {
                expandedKeys[key] = true;
            }

            setExpandedKeysState(expandedKeys);
        }
    }

    const getSelectedNodes = () => {
        let selectedNodes = [];
        if (ObjectUtils.isNotEmpty(props.value) && props.options) {
            const keys = isSingleSelectionMode ? { [`${props.value}`]: true } : { ...props.value };
            findSelectedNodes(null, keys, selectedNodes);
        }

        return selectedNodes;
    }

    useMountEffect(() => {
        updateTreeState();
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
        return (
            <div className="p-hidden-accessible">
                <input ref={focusInputRef} role="listbox" id={props.inputId} type="text" readOnly aria-expanded={overlayVisibleState}
                    onFocus={onInputFocus} onBlur={onInputBlur} onKeyDown={onInputKeyDown}
                    disabled={props.disabled} tabIndex={props.tabIndex} aria-label={props.ariaLabel} aria-labelledby={props.ariaLabelledBy} />
            </div>
        )
    }

    const createLabel = () => {
        const labelClassName = classNames('p-treeselect-label', {
            'p-placeholder': getLabel() === props.placeholder,
            'p-treeselect-label-empty': !props.placeholder && isValueEmpty
        });

        let content = null;

        if (props.valueTemplate) {
            content = ObjectUtils.getJSXElement(props.valueTemplate, selectedNodes, props);
        }
        else {
            if (props.display === 'comma') {
                content = getLabel() || 'empty';
            }
            else if (props.display === 'chip') {
                content = (
                    <>
                        {
                            selectedNodes && selectedNodes.map((node, index) => {
                                return (
                                    <div className="p-treeselect-token" key={`${node.key}_${index}`}>
                                        <span className="p-treeselect-token-label">{node.label}</span>
                                    </div>
                                )
                            })
                        }

                        {isValueEmpty && (props.placeholder || 'empty')}
                    </>
                )
            }
        }

        return (
            <div className="p-treeselect-label-container">
                <div className={labelClassName}>
                    {content}
                </div>
            </div>
        )
    }

    const createDropdownIcon = () => {
        const iconClassName = classNames('p-treeselect-trigger-icon p-clickable', props.dropdownIcon);

        return (
            <div ref={triggerRef} className="p-treeselect-trigger" role="button" aria-haspopup="listbox" aria-expanded={overlayVisibleState}>
                <span className={iconClassName}></span>
            </div>
        )
    }

    const createContent = () => {
        return (
            <>
                <Tree value={props.options} selectionMode={props.selectionMode} selectionKeys={props.value} metaKeySelection={props.metaKeySelection}
                    onSelectionChange={onSelectionChange} onSelect={onNodeSelect} onUnselect={onNodeUnselect}
                    expandedKeys={expandedKeysState} onToggle={onNodeToggle}
                    onExpand={props.onNodeExpand} onCollapse={props.onNodeCollapse}
                    filter={props.filter} filterValue={filteredValue} filterBy={props.filterBy} filterMode={props.filterMode}
                    filterPlaceholder={props.filterPlaceholder} filterLocale={props.filterLocale} showHeader={false} onFilterValueChange={onFilterValueChange}>
                </Tree>

                {
                    hasNoOptions && (
                        <div className="p-treeselect-empty-message">
                            {props.emptyMessage || localeOption('emptyMessage')}
                        </div>
                    )
                }
            </>
        )
    }

    const createFilterElement = () => {
        if (props.filter) {
            const filterValue = ObjectUtils.isNotEmpty(filteredValue) ? filteredValue : '';

            return (
                <div className="p-treeselect-filter-container">
                    <input ref={filterInputRef} type="text" value={filterValue} autoComplete="off" className="p-treeselect-filter p-inputtext p-component" placeholder={props.filterPlaceholder}
                        onKeyDown={onFilterInputKeyDown} onChange={onFilterInputChange} disabled={props.disabled} />
                    <span className="p-treeselect-filter-icon pi pi-search"></span>
                </div>
            )
        }

        return null;
    }

    const createHeader = () => {
        const filterElement = createFilterElement();
        const closeElement = (
            <button type="button" className="p-treeselect-close p-link" onClick={hide}>
                <span className="p-treeselect-close-icon pi pi-times"></span>
                <Ripple />
            </button>
        );
        const content = (
            <div className="p-treeselect-header">
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
                closeIconClassName: 'p-treeselect-close-icon pi pi-times',
                onCloseClick: hide,
                element: content,
                props
            }

            return ObjectUtils.getJSXElement(props.panelHeaderTemplate, defaultOptions);
        }

        return content;
    }

    const createFooter = () => {
        return ObjectUtils.getJSXElement(props.footer, props);
    }

    const selectedNodes = getSelectedNodes();

    const otherProps = ObjectUtils.findDiffKeys(props, TreeSelect.defaultProps);
    const className = classNames('p-treeselect p-component p-inputwrapper', {
        'p-treeselect-chip': props.display === 'chip',
        'p-disabled': props.disabled,
        'p-focus': focusedState,
        'p-inputwrapper-filled': !isValueEmpty,
        'p-inputwrapper-focus': focusedState || overlayVisibleState
    }, props.className);
    const keyboardHelper = createKeyboardHelper();
    const labelElement = createLabel();
    const dropdownIcon = createDropdownIcon();
    const content = createContent();
    const header = createHeader();
    const footer = createFooter();

    return (
        <div id={props.id} ref={elementRef} className={className} style={props.style} {...otherProps} onClick={onClick}>
            {keyboardHelper}
            {labelElement}
            {dropdownIcon}
            <TreeSelectPanel ref={overlayRef} appendTo={props.appendTo} panelStyle={props.panelStyle} panelClassName={props.panelClassName}
                scrollHeight={props.scrollHeight} onClick={onOverlayClick} header={header} footer={footer} transitionOptions={props.transitionOptions}
                in={overlayVisibleState} onEnter={onOverlayEnter} onEntered={onOverlayEntered} onExit={onOverlayExit} onExited={onOverlayExited}>
                {content}
            </TreeSelectPanel>
        </div>
    )
}));

TreeSelect.displayName = 'TreeSelect';
TreeSelect.defaultProps = {
    __TYPE: 'TreeSelect',
    id: null,
    value: null,
    name: null,
    style: null,
    className: null,
    disabled: false,
    options: null,
    scrollHeight: '400px',
    placeholder: null,
    tabIndex: null,
    inputId: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    selectionMode: 'single',
    panelStyle: null,
    panelClassName: null,
    appendTo: null,
    emptyMessage: null,
    display: 'comma',
    metaKeySelection: true,
    valueTemplate: null,
    panelHeaderTemplate: null,
    panelFooterTemplate: null,
    transitionOptions: null,
    dropdownIcon: 'pi pi-chevron-down',
    filter: false,
    filterValue: null,
    filterBy: 'label',
    filterMode: 'lenient',
    filterPlaceholder: null,
    filterLocale: undefined,
    filterInputAutoFocus: true,
    resetFilterOnHide: false,
    onShow: null,
    onHide: null,
    onChange: null,
    onNodeSelect: null,
    onNodeUnselect: null,
    onNodeExpand: null,
    onNodeCollapse: null,
    onFilterValueChange: null
}
