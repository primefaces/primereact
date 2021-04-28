import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import ObjectUtils from '../utils/ObjectUtils';
import PrimeReact from '../api/PrimeReact';
import { ZIndexUtils } from '../utils/ZIndexUtils';
import OverlayEventBus from '../overlayeventbus/OverlayEventBus';
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import { Tree } from '../tree/Tree';
import { TreeSelectPanel } from './TreeSelectPanel';
import DomHandler from '../utils/DomHandler';
import { Ripple } from '../ripple/Ripple';

export class TreeSelect extends Component {

    static defaultProps = {
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
        filter: false,
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
        onNodeCollapse: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.any,
        name: PropTypes.string,
        style: PropTypes.object,
        classNames: PropTypes.string,
        disabled: PropTypes.bool,
        options: PropTypes.any,
        scrollHeight: PropTypes.string,
        placeholder: PropTypes.string,
        tabIndex: PropTypes.number,
        inputId: PropTypes.string,
        ariaLabel: PropTypes.string,
        ariaLabelledBy: PropTypes.string,
        selectionMode: PropTypes.string,
        panelStyle: PropTypes.bool,
        panelClassName: PropTypes.string,
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        emptyMessage: PropTypes.string,
        display: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        valueTemplate: PropTypes.any,
        panelHeaderTemplate: PropTypes.any,
        panelFooterTemplate: PropTypes.any,
        transitionOptions: PropTypes.object,
        filter: PropTypes.bool,
        filterBy: PropTypes.any,
        filterMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        filterLocale: PropTypes.string,
        filterInputAutoFocus: PropTypes.bool,
        resetFilterOnHide: PropTypes.bool,
        onShow: PropTypes.func,
        onHide: PropTypes.func,
        onChange: PropTypes.func,
        onNodeSelect: PropTypes.func,
        onNodeUnselect: PropTypes.func,
        onNodeExpand: PropTypes.func,
        onNodeCollapse: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            focused: false,
            overlayVisible: false,
            expandedKeys: {},
            filterValue: ''
        }

        this.onClick = this.onClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onFilterInputChange = this.onFilterInputChange.bind(this);
        this.onFilterInputKeyDown = this.onFilterInputKeyDown.bind(this);
        this.onOverlayClick = this.onOverlayClick.bind(this);
        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayEntered = this.onOverlayEntered.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.onSelectionChange = this.onSelectionChange.bind(this);
        this.onNodeSelect = this.onNodeSelect.bind(this);
        this.onNodeUnselect = this.onNodeUnselect.bind(this);
        this.onNodeToggle = this.onNodeToggle.bind(this);
        this.onFilterValueChange = this.onFilterValueChange.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);

        this.overlayRef = createRef();
    }

    getSelectedNodes() {
        let selectedNodes = [];
        if (this.props.value && this.props.options) {
            let keys = this.props.selectionMode === 'single' ? {[`${this.props.value}`]: true} : {...this.props.value};
            this.findSelectedNodes(null, keys, selectedNodes);
        }

        return selectedNodes;
    }

    getLabel() {
        let value = this.getSelectedNodes();
        return value.length ? value.map(node => node.label).join(', ') : this.props.placeholder;
    }

    isValueEmpty() {
        return !this.props.value || Object.keys(this.props.value).length === 0;
    }

    hasNoOptions() {
        return !this.props.options || this.props.options.length === 0;
    }

    show() {
        this.setState({ overlayVisible: true });
    }

    hide() {
        this.setState({ overlayVisible: false });
    }

    onInputFocus() {
        this.setState({ focused: true });
    }

    onInputBlur() {
        this.setState({ focused: false });
    }

    onClick(event) {
        if (!this.props.disabled && (!this.overlayRef || !this.overlayRef.current || !this.overlayRef.current.contains(event.target)) && !DomHandler.hasClass(event.target, 'p-treeselect-close')) {
            this.focusInput.focus();

            if (this.state.overlayVisible) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }

    onSelectionChange(event) {
        if (this.props.onChange) {
            this.selfChange = true;

            this.props.onChange({
                originalEvent: event.originalEvent,
                value: event.value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: this.props.name,
                    id: this.props.id,
                    value: event.value
                }
            });
        }
    }

    onNodeSelect(node) {
        this.props.onNodeSelect && this.props.onNodeSelect(node);

        if (this.props.selectionMode === 'single') {
            this.hide();
        }
    }

    onNodeUnselect(node) {
        this.props.onNodeUnselect && this.props.onNodeUnselect(node);
    }

    onNodeToggle(e) {
        this.setState({ expandedKeys: e.value });
    }

    onFilterValueChange(e) {
        this.setState({ filterValue: e.target.value });
    }

    onOverlayClick(event) {
        OverlayEventBus.emit('overlay-click', {
            originalEvent: event,
            target: this.container
        });
    }

    onInputKeyDown(event) {
        switch (event.which) {
            //down
            case 40:
                if (!this.state.overlayVisible && event.altKey) {
                    this.show();
                }
                break;

            //space
            case 32:
                if (!this.state.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;

            //enter and escape
            case 13:
            case 27:
                if (this.state.overlayVisible) {
                    this.hide();
                    event.preventDefault();
                }
                break;

            //tab
            case 9:
                this.hide();
                break;

            default:
                break;
        }
    }

    onFilterInputKeyDown(event) {
        //enter
        if (event.which === 13) {
            event.preventDefault();
        }
    }

    onFilterInputChange(event) {
        this.setState({ filterValue: event.target.value });
    }

    resetFilter() {
        this.setState({ filterValue: '' });
    }

    onOverlayEnter() {
        ZIndexUtils.set('overlay', this.overlayRef.current);
        this.alignOverlay();
        this.scrollInView();
    }

    onOverlayEntered() {
        this.bindDocumentClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        if (this.props.filter && this.props.filterInputAutoFocus) {
            this.filterInput.focus();
        }

        this.props.onShow && this.props.onShow();
    }

    onOverlayExit() {
        this.unbindDocumentClickListener();
        this.unbindScrollListener();
        this.unbindResizeListener();
    }

    onOverlayExited() {
        if (this.props.filter && this.props.resetFilterOnHide) {
            this.resetFilter();
        }

        ZIndexUtils.clear(this.overlayRef.current);

        this.props.onHide && this.props.onHide();
    }

    alignOverlay() {
        DomHandler.alignOverlay(this.overlayRef.current, this.trigger.parentElement, this.props.appendTo || PrimeReact.appendTo);
    }

    scrollInView() {
        let highlightItem = DomHandler.findSingle(this.overlayRef.current, '.p-treenode-content.p-highlight');
        if (highlightItem) {
            highlightItem.scrollIntoView({ block: 'nearest', inline: 'start' });
        }
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = (event) => {
                if (this.state.overlayVisible && this.isOutsideClicked(event)) {
                    this.hide();
                }
            };

            document.addEventListener('click', this.documentClickListener);
        }
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            document.removeEventListener('click', this.documentClickListener);
            this.documentClickListener = null;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.container, () => {
                if (this.state.overlayVisible) {
                    this.hide();
                }
            });
        }

        this.scrollHandler.bindScrollListener();
    }

    unbindScrollListener() {
        if (this.scrollHandler) {
            this.scrollHandler.unbindScrollListener();
        }
    }

    bindResizeListener() {
        if (!this.resizeListener) {
            this.resizeListener = () => {
                if (this.state.overlayVisible && !DomHandler.isAndroid()) {
                    this.hide();
                }
            };
            window.addEventListener('resize', this.resizeListener);
        }
    }

    unbindResizeListener() {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    }

    isOutsideClicked(event) {
        return this.container && !(this.container.isSameNode(event.target) || this.container.contains(event.target)
            || (this.overlayRef && this.overlayRef.current.contains(event.target)));
    }

    findSelectedNodes(node, keys, selectedNodes) {
        if (node) {
            if (this.isSelected(node, keys)) {
                selectedNodes.push(node);
                delete keys[node.key];
            }

            if (Object.keys(keys).length && node.children) {
                for (let childNode of node.children) {
                    this.findSelectedNodes(childNode, keys, selectedNodes);
                }
            }
        }
        else {
            for (let childNode of this.props.options) {
                this.findSelectedNodes(childNode, keys, selectedNodes);
            }
        }
    }

    isSelected(node, keys) {
        return this.props.selectionMode === 'checkbox' ? keys[node.key] && keys[node.key].checked : keys[node.key];
    }

    updateTreeState() {
        let keys = this.props.selectionMode === 'single' ? {[`${this.props.value}`]: true} : {...this.props.value};

        this.setState({ expandedKeys: {} });
        if (keys && this.props.options) {
            this.updateTreeBranchState(null, null, keys);
        }
    }

    updateTreeBranchState(node, path, keys) {
        if (node) {
            if (this.isSelected(node, keys)) {
                this.expandPath(path);
                delete keys[node.key];
            }

            if (Object.keys(keys).length && node.children) {
                for (let childNode of node.children) {
                    path.push(node.key);
                    this.updateTreeBranchState(childNode, path, keys);
                }
            }
        }
        else {
            for (let childNode of this.props.options) {
                this.updateTreeBranchState(childNode, [], keys);
            }
        }
    }

    expandPath(path) {
        if (path.length > 0) {
            let expandedKeys = { ...(this.state.expandedKeys || {}) };
            for (let key of path) {
                expandedKeys[key] = true;
            }

            this.setState({ expandedKeys });
        }
    }

    componentDidMount() {
        this.updateTreeState();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.overlayVisible) {
            if (this.props.filter || prevState.expandedKeys !== this.state.expandedKeys) {
                this.alignOverlay();
            }

            if (prevProps.value !== this.props.value) {
                if (!this.selfChange) {
                    this.updateTreeState();
                }
                this.scrollInView();

                this.selfChange = false;
            }
        }

        if (prevProps.options !== this.props.options) {
            this.updateTreeState();
        }
    }

    componentWillUnmount() {
        this.unbindDocumentClickListener();
        this.unbindResizeListener();
        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        ZIndexUtils.clear(this.overlayRef.current);
    }

    renderKeyboardHelper() {
        return (
            <div className="p-hidden-accessible">
                <input ref={(el) => this.focusInput = el} role="listbox" id={this.props.inputId} type="text" readOnly aria-haspopup="true" aria-expanded={this.state.overlayVisible}
                    onFocus={this.onInputFocus} onBlur={this.onInputBlur} onKeyDown={this.onInputKeyDown}
                    disabled={this.props.disabled} tabIndex={this.props.tabIndex} aria-label={this.props.ariaLabel} aria-labelledby={this.props.ariaLabelledBy} />
            </div>
        );
    }

    renderLabel(selectedNodes) {
        const isValueEmpty = this.isValueEmpty();
        const labelClassName = classNames('p-treeselect-label', {
            'p-placeholder': this.getLabel() === this.props.placeholder,
            'p-treeselect-label-empty': !this.props.placeholder && isValueEmpty
        });

        let content = null;

        if (this.props.valueTemplate) {
            content = ObjectUtils.getJSXElement(this.props.valueTemplate, selectedNodes, this.props);
        }
        else {
            if (this.props.display === 'comma') {
                content = this.getLabel() || 'empty';
            }
            else if (this.props.display === 'chip') {
                const selectedNodes = this.getSelectedNodes();

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

                        {isValueEmpty && (this.props.placeholder || 'empty')}
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
        );
    }

    renderDropdownIcon() {
        return (
            <div ref={(el) => this.trigger = el} className="p-treeselect-trigger" role="button" aria-haspopup="listbox" aria-expanded={this.state.overlayVisible}>
                <span className="p-treeselect-trigger-icon pi pi-chevron-down p-clickable"></span>
            </div>
        );
    }

    renderContent() {
        return (
            <>
                <Tree value={this.props.options} selectionMode={this.props.selectionMode} selectionKeys={this.props.value} metaKeySelection={this.props.metaKeySelection}
                    onSelectionChange={this.onSelectionChange} onSelect={this.onNodeSelect} onUnselect={this.onNodeUnselect}
                    expandedKeys={this.state.expandedKeys} onToggle={this.onNodeToggle}
                    onNodeExpand={this.props.onNodeExpand} onNodeCollapse={this.props.onNodeCollapse}
                    filter={this.props.filter} filterValue={this.state.filterValue} filterBy={this.props.filterBy} filterMode={this.props.filterMode}
                    filterPlaceholder={this.props.filterPlaceholder} filterLocale={this.props.filterLocale} showHeader={false} onFilterValueChange={this.onFilterValueChange}>
                </Tree>

                {
                    this.hasNoOptions() && (
                        <div className="p-treeselect-empty-message">
                            {this.props.emptyMessage}
                        </div>
                    )
                }
            </>
        )
    }

    renderFilterElement() {
        if (this.props.filter) {
            return (
                <div className="p-treeselect-filter-container">
                    <input ref={(el) => this.filterInput = el} type="text" value={this.state.filterValue} autoComplete="off" className="p-treeselect-filter p-inputtext p-component" placeholder={this.props.filterPlaceholder}
                        onKeyDown={this.onFilterInputKeyDown} onChange={this.onFilterInputChange} disabled={this.props.disabled} />
                    <span className="p-treeselect-filter-icon pi pi-search"></span>
                </div>
            );
        }

        return null;
    }

    renderHeader() {
        const filterElement = this.renderFilterElement();
        const closeElement = (
            <button type="button" className="p-treeselect-close p-link" onClick={this.hide}>
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

        if (this.props.header) {
            const defaultOptions = {
                className: 'p-treeselect-header',
                filterElement,
                closeElement,
                closeElementClassName: 'p-treeselect-close p-link',
                closeIconClassName: 'p-treeselect-close-icon pi pi-times',
                onCloseClick: this.hide,
                element: content,
                props: this.props
            }

            return ObjectUtils.getJSXElement(this.props.header, defaultOptions);
        }

        return content;
    }

    render() {
        const className = classNames('p-treeselect p-component p-inputwrapper', {
            'p-treeselect-chip': this.props.display === 'chip',
            'p-disabled': this.props.disabled,
            'p-focus': this.state.focused,
            'p-inputwrapper-filled': !this.isValueEmpty(),
            'p-inputwrapper-focus': this.state.focused || this.state.overlayVisible
        }, this.props.className);

        const selectedNodes = this.getSelectedNodes();

        const keyboardHelper = this.renderKeyboardHelper();
        const labelElement = this.renderLabel(selectedNodes);
        const dropdownIcon = this.renderDropdownIcon();
        const content = this.renderContent();
        const header = this.renderHeader();
        const footer = ObjectUtils.getJSXElement(this.props.footer, this.props);

        return (
            <div id={this.props.id} ref={(el) => this.container = el} className={className} style={this.props.style} onClick={this.onClick}>
                {keyboardHelper}
                {labelElement}
                {dropdownIcon}
                <TreeSelectPanel ref={this.overlayRef} appendTo={this.props.appendTo} panelStyle={this.props.panelStyle} panelClassName={this.props.panelClassName}
                    scrollHeight={this.props.scrollHeight} onClick={this.onOverlayClick} header={header} footer={footer} transitionOptions={this.props.transitionOptions}
                    in={this.state.overlayVisible} onEnter={this.onOverlayEnter} onEntered={this.onOverlayEntered} onExit={this.onOverlayExit} onExited={this.onOverlayExited}>
                    {content}
                </TreeSelectPanel>
            </div>
        )
    }
}
