import React, { Component } from 'react';
import PrimeReact, { localeOption, FilterOperator } from '../api/Api';
import { classNames, ConnectedOverlayScrollHandler, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { CSSTransition } from '../csstransition/CSSTransition';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { InputText } from '../inputtext/InputText';
import { Dropdown } from '../dropdown/Dropdown';
import { Button } from '../button/Button';
import { FilterMatchMode } from '../api/FilterMatchMode';

export class ColumnFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            overlayVisible: false
        };

        this.overlayRef = React.createRef();

        this.filterCallback = this.filterCallback.bind(this);
        this.filterApplyCallback = this.filterApplyCallback.bind(this);
        this.onOperatorChange = this.onOperatorChange.bind(this);
        this.addConstraint = this.addConstraint.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

        this.onOverlayEnter = this.onOverlayEnter.bind(this);
        this.onOverlayExit = this.onOverlayExit.bind(this);
        this.onOverlayExited = this.onOverlayExited.bind(this);
        this.onContentKeyDown = this.onContentKeyDown.bind(this);
        this.onContentClick = this.onContentClick.bind(this);
        this.onContentMouseDown = this.onContentMouseDown.bind(this);
    }

    get field() {
        return this.getColumnProp('filterField') || this.getColumnProp('field');
    }

    get overlay() {
        return this.overlayRef ? this.overlayRef.current : null;
    }

    get filterModel() {
        return this.props.filters[this.field];
    }

    get filterStoreModel() {
        return this.props.filtersStore[this.field];
    }

    hasFilter() {
        if (this.props.filtersStore) {
            const fieldFilter = this.props.filtersStore[this.field];

            return fieldFilter && (fieldFilter.operator ? !this.isFilterBlank(fieldFilter.constraints[0].value) : !this.isFilterBlank(fieldFilter.value));
        }

        return false;
    }

    hasRowFilter() {
        return this.filterModel && !this.isFilterBlank(this.filterModel.value);
    }

    isFilterBlank(filter) {
        return ObjectUtils.isEmpty(filter);
    }

    isRowMatchModeSelected(matchMode) {
        return this.filterModel.matchMode === matchMode;
    }

    showMenuButton() {
        return this.getColumnProp('showFilterMenu') && (this.props.display === 'row' ? this.getColumnProp('dataType') !== 'boolean' : true);
    }

    matchModes() {
        return this.getColumnProp('filterMatchModeOptions') || PrimeReact.filterMatchModeOptions[this.findDataType()].map(key => ({ label: localeOption(key), value: key }));
    }

    isShowMatchModes() {
        return this.getColumnProp('dataType') !== 'boolean' && this.getColumnProp('showFilterMatchModes') && this.matchModes() && this.getColumnProp('showFilterMenuOptions');
    }

    isShowOperator() {
        return this.getColumnProp('showFilterOperator') && this.filterModel && this.filterModel.operator && this.getColumnProp('showFilterMenuOptions');
    }

    showRemoveIcon() {
        return this.fieldConstraints().length > 1;
    }

    isShowAddConstraint() {
        return this.getColumnProp('showAddButton') && this.filterModel && this.filterModel.operator && (this.fieldConstraints() && this.fieldConstraints().length < this.getColumnProp('maxConstraints')) && this.getColumnProp('showFilterMenuOptions');
    }

    isOutsideClicked(target) {
        return !this.isTargetClicked(target) && this.overlayRef && this.overlayRef.current && !(this.overlayRef.current.isSameNode(target) || this.overlayRef.current.contains(target));
    }

    isTargetClicked(target) {
        return this.icon && (this.icon.isSameNode(target) || this.icon.contains(target));
    }

    getColumnProp(prop) {
        return this.props.column.props[prop];
    }

    getDefaultConstraint() {
        if (this.props.filtersStore && this.filterStoreModel) {
            if (this.filterStoreModel.operator) {
                return {
                    matchMode: this.filterStoreModel.constraints[0].matchMode,
                    operator: this.filterStoreModel.operator
                };
            }
            else {
                return {
                    matchMode: this.filterStoreModel.matchMode
                };
            }
        }
    }

    findDataType() {
        const dataType = this.getColumnProp('dataType');
        const matchMode = this.getColumnProp('filterMatchMode');
        const hasMatchMode = (key) => PrimeReact.filterMatchModeOptions[key].some(mode => mode === matchMode);

        if (matchMode === 'custom' && !hasMatchMode(dataType)) {
            PrimeReact.filterMatchModeOptions[dataType].push(FilterMatchMode.CUSTOM);

            return dataType;
        }
        else if (matchMode) {
            return Object.keys(PrimeReact.filterMatchModeOptions).find(key => hasMatchMode(key)) || dataType;
        }

        return dataType;
    };

    clearFilter() {
        const field = this.field;
        const filterClearCallback = this.getColumnProp('onFilterClear');
        const defaultConstraint = this.getDefaultConstraint();
        let filters = { ...this.props.filters };
        if (filters[field].operator) {
            filters[field].constraints.splice(1);
            filters[field].operator = defaultConstraint.operator;
            filters[field].constraints[0] = { value: null, matchMode: defaultConstraint.matchMode };
        }
        else {
            filters[field].value = null;
            filters[field].matchMode = defaultConstraint.matchMode;
        }

        filterClearCallback && filterClearCallback();
        this.props.onFilterChange(filters);
        this.props.onFilterApply();
        this.hide();
    }

    applyFilter() {
        const filterApplyClickCallback = this.getColumnProp('onFilterApplyClick');

        filterApplyClickCallback && filterApplyClickCallback({ field: this.field, constraints: this.filterModel });
        this.props.onFilterApply();
        this.hide();
    }

    toggleMenu() {
        this.setState((prevState) => ({ overlayVisible: !prevState.overlayVisible }));
    }

    onToggleButtonKeyDown(event) {
        switch (event.key) {
            case 'Escape':
            case 'Tab':
                this.hide();
                break;

            case 'ArrowDown':
                if (this.state.overlayVisible) {
                    const focusable = DomHandler.getFirstFocusableElement(this.overlay);
                    focusable && focusable.focus();
                    event.preventDefault();
                }
                else if (event.altKey) {
                    this.setState({ overlayVisible: true });
                    event.preventDefault();
                }
                break;

            default:
                break;
        }
    }

    onContentKeyDown(event) {
        if (event.key === 'Escape') {
            this.hide();
            this.icon && this.icon.focus();
        }
    }

    onInputChange(event, index) {
        let filters = { ...this.props.filters };
        let value = event.target.value;

        if (this.props.display === 'menu') {
            filters[this.field].constraints[index].value = value;
        }
        else {
            filters[this.field].value = value;
        }

        this.props.onFilterChange(filters);

        if (!this.getColumnProp('showApplyButton') || this.props.display === 'row') {
            this.props.onFilterApply();
        }
    }

    onRowMatchModeChange(matchMode) {
        const filterMatchModeChangeCallback = this.getColumnProp('onFilterMatchModeChange');
        let filters = { ...this.props.filters };
        filters[this.field].matchMode = matchMode;

        filterMatchModeChangeCallback && filterMatchModeChangeCallback({ field: this.field, matchMode });
        this.props.onFilterChange(filters);
        this.props.onFilterApply();
        this.hide();
    }

    onRowMatchModeKeyDown(event, matchMode, clear) {
        let item = event.target;

        switch (event.key) {
            case 'ArrowDown':
                const nextItem = this.findNextItem(item);
                if (nextItem) {
                    item.removeAttribute('tabindex');
                    nextItem.tabIndex = 0;
                    nextItem.focus();
                }

                event.preventDefault();
                break;

            case 'ArrowUp':
                const prevItem = this.findPrevItem(item);
                if (prevItem) {
                    item.removeAttribute('tabindex');
                    prevItem.tabIndex = 0;
                    prevItem.focus();
                }

                event.preventDefault();
                break;

            case 'Enter':
                clear ? this.clearFilter() : this.onRowMatchModeChange(matchMode.value);

                event.preventDefault();
                break;

            default:
                break;
        }
    }

    onOperatorChange(e) {
        const filterOperationChangeCallback = this.getColumnProp('onFilterOperatorChange');
        let value = e.value;
        let filters = { ...this.props.filters };
        filters[this.field].operator = value;
        this.props.onFilterChange(filters);

        filterOperationChangeCallback && filterOperationChangeCallback({ field: this.field, operator: value });
        if (!this.getColumnProp('showApplyButton')) {
            this.props.onFilterApply();
        }
    }

    onMenuMatchModeChange(value, index) {
        const filterMatchModeChangeCallback = this.getColumnProp('onFilterMatchModeChange');
        let filters = { ...this.props.filters };
        filters[this.field].constraints[index].matchMode = value;
        this.props.onFilterChange(filters);
        filterMatchModeChangeCallback && filterMatchModeChangeCallback({ field: this.field, matchMode: value, index: index });

        if (!this.getColumnProp('showApplyButton')) {
            this.props.onFilterApply();
        }
    }

    addConstraint() {
        const filterConstraintAddCallback = this.getColumnProp('onFilterConstraintAdd');
        const defaultConstraint = this.getDefaultConstraint();
        let filters = { ...this.props.filters };
        let newConstraint = { value: null, matchMode: defaultConstraint.matchMode };
        filters[this.field].constraints.push(newConstraint);
        filterConstraintAddCallback && filterConstraintAddCallback({ field: this.field, constraint: newConstraint });
        this.props.onFilterChange(filters);

        if (!this.getColumnProp('showApplyButton')) {
            this.props.onFilterApply();
        }
    }

    removeConstraint(index) {
        const filterConstraintRemoveCallback = this.getColumnProp('onFilterConstraintRemove');
        let filters = { ...this.props.filters };
        let removedConstraint = filters[this.field].constraints.splice(index, 1);
        filterConstraintRemoveCallback && filterConstraintRemoveCallback({ field: this.field, constraint: removedConstraint });
        this.props.onFilterChange(filters);

        if (!this.getColumnProp('showApplyButton')) {
            this.props.onFilterApply();
        }
    }

    findNextItem(item) {
        let nextItem = item.nextElementSibling;

        if (nextItem)
            return DomHandler.hasClass(nextItem, 'p-column-filter-separator') ? this.findNextItem(nextItem) : nextItem;
        else
            return item.parentElement.firstElementChild;
    }

    findPrevItem(item) {
        let prevItem = item.previousElementSibling;

        if (prevItem)
            return DomHandler.hasClass(prevItem, 'p-column-filter-separator') ? this.findPrevItem(prevItem) : prevItem;
        else
            return item.parentElement.lastElementChild;
    }

    hide() {
        this.setState({ overlayVisible: false });
    }

    onContentClick(event) {
        this.selfClick = true;

        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: this.overlay
        });
    }

    onContentMouseDown() {
        this.selfClick = true;
    }

    onOverlayEnter() {
        ZIndexUtils.set('overlay', this.overlay, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        DomHandler.alignOverlay(this.overlay, this.icon, PrimeReact.appendTo, false);
        this.bindOutsideClickListener();
        this.bindScrollListener();
        this.bindResizeListener();

        this.overlayEventListener = (e) => {
            if (!this.isOutsideClicked(e.target)) {
                this.selfClick = true;
            }
        }
        OverlayService.on('overlay-click', this.overlayEventListener);
    }

    onOverlayExit() {
        this.onOverlayHide();
    }

    onOverlayExited() {
        ZIndexUtils.clear(this.overlay);
    }

    onOverlayHide() {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
        this.unbindScrollListener();
        OverlayService.off('overlay-click', this.overlayEventListener);
        this.overlayEventListener = null;
    }

    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (!this.selfClick && this.isOutsideClicked(event.target)) {
                    this.hide();
                }
                this.selfClick = false;
            };
            document.addEventListener('click', this.outsideClickListener);
        }
    }

    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
            this.selfClick = false;
        }
    }

    bindScrollListener() {
        if (!this.scrollHandler) {
            this.scrollHandler = new ConnectedOverlayScrollHandler(this.icon, () => {
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
                if (this.state.overlayVisible && !DomHandler.isTouchDevice()) {
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

    fieldConstraints() {
        return this.filterModel ? this.filterModel.constraints || [this.filterModel] : [];
    }

    operator() {
        return this.filterModel.operator;
    }

    operatorOptions() {
        return [
            { label: localeOption('matchAll'), value: FilterOperator.AND },
            { label: localeOption('matchAny'), value: FilterOperator.OR }
        ];
    }

    noFilterLabel() {
        return localeOption('noFilter');
    }

    removeRuleButtonLabel() {
        return localeOption('removeRule');
    }

    addRuleButtonLabel() {
        return localeOption('addRule');
    }

    clearButtonLabel() {
        return localeOption('clear');
    }

    applyButtonLabel() {
        return localeOption('apply');
    }

    filterCallback(value, index = 0) {
        let filters = { ...this.props.filters };
        let meta = filters[this.field];

        this.props.display === 'menu' && meta && meta.operator ? (filters[this.field].constraints[index].value = value) : (filters[this.field].value = value);
        this.props.onFilterChange(filters);
    }

    filterApplyCallback(...args) {
        args && this.filterCallback(args[0], args[1]);

        this.props.onFilterApply();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.display === 'menu' && this.state.overlayVisible) {
            DomHandler.alignOverlay(this.overlay, this.icon, PrimeReact.appendTo, false);
        }
    }

    componentWillUnmount() {
        if (this.overlayEventListener) {
            OverlayService.off('overlay-click', this.overlayEventListener);
            this.overlayEventListener = null;
        }

        if (this.overlay) {
            ZIndexUtils.clear(this.overlay);
            this.onOverlayHide();
        }
    }

    renderFilterElement(model, index) {
        return this.getColumnProp('filterElement') ?
            ObjectUtils.getJSXElement(this.getColumnProp('filterElement'), { field: this.field, index, filterModel: model, value: model.value, filterApplyCallback: this.filterApplyCallback, filterCallback: this.filterCallback })
            : <InputText type={this.getColumnProp('filterType')} value={model.value || ''} onChange={(e) => this.onInputChange(e, index)} className="p-column-filter" placeholder={this.getColumnProp('filterPlaceholder')} maxLength={this.getColumnProp('filterMaxLength')} />;
    }

    renderRowFilterElement() {
        if (this.props.display === 'row') {
            const content = this.renderFilterElement(this.filterModel, 0);

            return (
                <div className="p-fluid p-column-filter-element">
                    {content}
                </div>
            )

        }

        return null;
    }

    renderMenuFilterElement(fieldConstraint, index) {
        if (this.props.display === 'menu') {
            return this.renderFilterElement(fieldConstraint, index);
        }

        return null;
    }

    renderMenuButton() {
        if (this.showMenuButton()) {
            const className = classNames('p-column-filter-menu-button p-link', {
                'p-column-filter-menu-button-open': this.state.overlayVisible,
                'p-column-filter-menu-button-active': this.hasFilter()
            });

            return (
                <button ref={(el) => this.icon = el} type="button" className={className} aria-haspopup aria-expanded={this.state.overlayVisible} onClick={this.toggleMenu} onKeyDown={this.onToggleButtonKeyDown}>
                    <span className="pi pi-filter-icon pi-filter"></span>
                </button>
            )
        }

        return null;
    }

    renderClearButton() {
        if (this.getColumnProp('showClearButton') && this.props.display === 'row') {
            const className = classNames('p-column-filter-clear-button p-link', {
                'p-hidden-space': !this.hasRowFilter()
            });

            return (
                <button className={className} type="button" onClick={this.clearFilter}>
                    <span className="pi pi-filter-slash"></span>
                </button>
            )
        }

        return null;
    }

    renderRowItems() {
        if (this.isShowMatchModes()) {
            const matchModes = this.matchModes();
            const noFilterLabel = this.noFilterLabel();

            return (
                <ul className="p-column-filter-row-items">
                    {
                        matchModes.map((matchMode, i) => {
                            const { value, label } = matchMode;
                            const className = classNames('p-column-filter-row-item', { 'p-highlight': this.isRowMatchModeSelected(value) });
                            const tabIndex = i === 0 ? 0 : null;

                            return (
                                <li className={className} key={label} onClick={() => this.onRowMatchModeChange(value)} onKeyDown={(e) => this.onRowMatchModeKeyDown(e, matchMode)} tabIndex={tabIndex}>
                                    {label}
                                </li>
                            )
                        })
                    }
                    <li className="p-column-filter-separator"></li>
                    <li className="p-column-filter-row-item" onClick={this.clearFilter} onKeyDown={(e) => this.onRowMatchModeKeyDown(e, null, true)}>{noFilterLabel}</li>
                </ul>
            )
        }

        return null;
    }

    renderOperator() {
        if (this.isShowOperator()) {
            const options = this.operatorOptions();
            const value = this.operator();

            return (
                <div className="p-column-filter-operator">
                    <Dropdown options={options} value={value} onChange={this.onOperatorChange} className="p-column-filter-operator-dropdown" />
                </div>
            )
        }

        return null;
    }

    renderMatchModeDropdown(constraint, index) {
        if (this.isShowMatchModes()) {
            const options = this.matchModes();

            return (
                <Dropdown options={options} value={constraint.matchMode} onChange={(e) => this.onMenuMatchModeChange(e.value, index)} className="p-column-filter-matchmode-dropdown" />
            )
        }

        return null;
    }

    renderRemoveButton(index) {
        if (this.showRemoveIcon()) {
            const removeRuleLabel = this.removeRuleButtonLabel();

            return (
                <Button type="button" icon="pi pi-trash" className="p-column-filter-remove-button p-button-text p-button-danger p-button-sm" onClick={() => this.removeConstraint(index)} label={removeRuleLabel} />
            )
        }

        return null;
    }

    renderConstraints() {
        const fieldConstraints = this.fieldConstraints();

        return (
            <div className="p-column-filter-constraints">
                {
                    fieldConstraints.map((fieldConstraint, i) => {
                        const matchModeDropdown = this.renderMatchModeDropdown(fieldConstraint, i)
                        const menuFilterElement = this.renderMenuFilterElement(fieldConstraint, i);
                        const removeButton = this.renderRemoveButton(i);

                        return (
                            <div key={i} className="p-column-filter-constraint">
                                {matchModeDropdown}
                                {menuFilterElement}
                                <div>
                                    {removeButton}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    renderAddRule() {
        if (this.isShowAddConstraint()) {
            const addRuleLabel = this.addRuleButtonLabel();
            return (
                <div className="p-column-filter-add-rule">
                    <Button type="button" label={addRuleLabel} icon="pi pi-plus" className="p-column-filter-add-button p-button-text p-button-sm" onClick={this.addConstraint} />
                </div>
            )
        }

        return null;
    }

    renderFilterClearButton() {
        if (this.getColumnProp('showClearButton')) {
            if (!this.getColumnProp('filterClear')) {
                const clearLabel = this.clearButtonLabel();
                return (
                    <Button type="button" className="p-button-outlined p-button-sm" onClick={this.clearFilter} label={clearLabel} />
                )
            }

            return ObjectUtils.getJSXElement(this.getColumnProp('filterClear'), { field: this.field, filterModel: this.filterModel, filterClearCallback: this.clearFilter });
        }

        return null;
    }

    renderFilterApplyButton() {
        if (this.getColumnProp('showApplyButton')) {
            if (!this.getColumnProp('filterApply')) {
                const applyLabel = this.applyButtonLabel();
                return (
                    <Button type="button" className="p-button-sm" onClick={this.applyFilter} label={applyLabel} />
                )
            }

            return ObjectUtils.getJSXElement(this.getColumnProp('filterApply'), { field: this.field, filterModel: this.filterModel, filterApplyCallback: this.applyFilter });
        }

        return null
    }

    renderButtonBar() {
        const clearButton = this.renderFilterClearButton();
        const applyButton = this.renderFilterApplyButton();

        return (
            <div className="p-column-filter-buttonbar">
                {clearButton}
                {applyButton}
            </div>
        )
    }

    renderItems() {
        const operator = this.renderOperator();
        const constraints = this.renderConstraints();
        const addRule = this.renderAddRule();
        const buttonBar = this.renderButtonBar();

        return (
            <>
                {operator}
                {constraints}
                {addRule}
                {buttonBar}
            </>
        )
    }

    renderOverlay() {
        const style = this.getColumnProp('filterMenuStyle');
        const className = classNames('p-column-filter-overlay p-component p-fluid', this.getColumnProp('filterMenuClassName'), {
            'p-column-filter-overlay-menu': this.props.display === 'menu',
            'p-input-filled': PrimeReact.inputStyle === 'filled',
            'p-ripple-disabled': PrimeReact.ripple === false
        });
        const filterHeader = ObjectUtils.getJSXElement(this.getColumnProp('filterHeader'), { field: this.field, filterModel: this.filterModel, filterApplyCallback: this.filterApplyCallback });
        const filterFooter = ObjectUtils.getJSXElement(this.getColumnProp('filterFooter'), { field: this.field, filterModel: this.filterModel, filterApplyCallback: this.filterApplyCallback });
        const items = this.props.display === 'row' ? this.renderRowItems() : this.renderItems();

        return (
            <Portal>
                <CSSTransition nodeRef={this.overlayRef} classNames="p-connected-overlay" in={this.state.overlayVisible} timeout={{ enter: 120, exit: 100 }}
                    unmountOnExit onEnter={this.onOverlayEnter} onExit={this.onOverlayExit} onExited={this.onOverlayExited}>
                    <div ref={this.overlayRef} style={style} className={className} onKeyDown={this.onContentKeyDown} onClick={this.onContentClick} onMouseDown={this.onContentMouseDown}>
                        {filterHeader}
                        {items}
                        {filterFooter}
                    </div>
                </CSSTransition>
            </Portal>
        )
    }

    render() {
        const className = classNames('p-column-filter p-fluid', {
            'p-column-filter-row': this.props.display === 'row',
            'p-column-filter-menu': this.props.display === 'menu'
        });
        const rowFilterElement = this.renderRowFilterElement();
        const menuButton = this.renderMenuButton();
        const clearButton = this.renderClearButton();
        const overlay = this.renderOverlay();

        return (
            <div className={className}>
                {rowFilterElement}
                {menuButton}
                {clearButton}
                {overlay}
            </div>
        )
    }
}
