import React, { Component } from 'react';
import ObjectUtils from '../utils/ObjectUtils';
import { DropdownItem } from './DropdownItem';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from '../transition/CSSTransition';
import { Portal } from '../portal/Portal';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';

class DropdownPanelComponent extends Component {

    constructor(props) {
        super(props);

        this.onEnter = this.onEnter.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onFilterInputChange = this.onFilterInputChange.bind(this);
    }

    onEnter() {
        this.props.onEnter(() => {
            if (this.virtualScrollerRef) {
                const selectedIndex = this.props.getSelectedOptionIndex();
                if (selectedIndex !== -1) {
                    this.virtualScrollerRef.scrollToIndex(selectedIndex);
                }
            }
        });
    }

    onEntered() {
        this.props.onEntered(() => {
            if (this.props.filter && this.props.filterInputAutoFocus) {
                this.filterInput.focus();
            }
        });
    }

    onFilterInputChange(event) {
        if (this.virtualScrollerRef) {
            this.virtualScrollerRef.scrollToIndex(0);
        }

        this.props.onFilterInputChange && this.props.onFilterInputChange(event);
    }

    isEmptyFilter() {
        return !(this.props.visibleOptions && this.props.visibleOptions.length) && this.props.hasFilter();
    }

    renderGroupChildren(optionGroup) {
        const groupChildren = this.props.getOptionGroupChildren(optionGroup);
        return (
            groupChildren.map((option, j) => {
                let optionLabel = this.props.getOptionLabel(option);
                let optionKey = j + '_' + this.props.getOptionRenderKey(option);
                let disabled = this.props.isOptionDisabled(option);

                return (
                    <DropdownItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate} selected={this.props.isSelected(option)} disabled={disabled} onClick={this.props.onOptionClick} />
                );
            })
        )
    }

    renderEmptyFilter() {
        const emptyFilterMessage = ObjectUtils.getJSXElement(this.props.emptyFilterMessage, this.props);
        return (
            <li className="p-dropdown-empty-message">
                {emptyFilterMessage}
            </li>
        );
    }

    renderItem(option, index) {
        if (this.props.optionGroupLabel) {
            const groupContent = this.props.optionGroupTemplate ? ObjectUtils.getJSXElement(this.props.optionGroupTemplate, option, index) : this.props.getOptionGroupLabel(option);
            const groupChildrenContent = this.renderGroupChildren(option);
            const key = index + '_' + this.props.getOptionGroupRenderKey(option);

            return (
                <React.Fragment key={key}>
                    <li className="p-dropdown-item-group">
                        {groupContent}
                    </li>
                    {groupChildrenContent}
                </React.Fragment>
            )
        }
        else {
            const optionLabel = this.props.getOptionLabel(option);
            const optionKey = index + '_' + this.props.getOptionRenderKey(option);
            const disabled = this.props.isOptionDisabled(option);

            return (
                <DropdownItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate} selected={this.props.isSelected(option)} disabled={disabled} onClick={this.props.onOptionClick} />
            );
        }
    }

    renderItems() {
        if (this.props.visibleOptions && this.props.visibleOptions.length) {
            return this.props.visibleOptions.map((option, index) => this.renderItem(option, index));
        }
        else if (this.props.hasFilter()) {
            return this.renderEmptyFilter();
        }

        return null;
    }

    renderFilterClearIcon() {
        if (this.props.showFilterClear && this.props.filterValue) {
            return <i className="p-dropdown-filter-clear-icon pi pi-times" onClick={() => this.props.onFilterClearIconClick(() => this.filterInput.focus())}></i>
        }

        return null;
    }

    renderFilter() {
        if (this.props.filter) {
            const clearIcon = this.renderFilterClearIcon();
            const containerClassName = classNames('p-dropdown-filter-container', { 'p-dropdown-clearable-filter': !!clearIcon });
            return (
                <div className="p-dropdown-header">
                    <div className={containerClassName} onClick={this.onFilterContainerClick}>
                        <input ref={(el) => this.filterInput = el} type="text" autoComplete="off" className="p-dropdown-filter p-inputtext p-component" placeholder={this.props.filterPlaceholder}
                            onKeyDown={this.props.onFilterInputKeyDown} onChange={this.onFilterInputChange} value={this.props.filterValue} />
                        {clearIcon}
                        <i className="p-dropdown-filter-icon pi pi-search"></i>
                    </div>
                </div>
            );
        }

        return null;
    }

    renderContent() {
        if (this.props.virtualScrollerOptions) {
            const virtualScrollerProps = { ...this.props.virtualScrollerOptions, ...{
                style: {...this.props.virtualScrollerOptions.style, ...{ height: this.props.scrollHeight }},
                className: classNames('p-dropdown-items-wrapper', this.props.virtualScrollerOptions.className),
                items: this.props.visibleOptions,
                itemTemplate: (item, options) => item && this.renderItem(item, options.index),
                contentTemplate: (options) => {
                    const className = classNames('p-dropdown-items', options.className);
                    const content = this.isEmptyFilter() ? this.renderEmptyFilter() : options.children;

                    return (
                        <ul ref={options.ref} className={className} role="listbox">
                            {content}
                        </ul>
                    );
                }
            }};

            return <VirtualScroller ref={(el) => this.virtualScrollerRef = el} {...virtualScrollerProps} />;
        }
        else {
            const items = this.renderItems();

            return (
                <div className="p-dropdown-items-wrapper" style={{ maxHeight: this.props.scrollHeight || 'auto' }}>
                    <ul className="p-dropdown-items" role="listbox">
                        {items}
                    </ul>
                </div>
            );
        }
    }

    renderElement() {
        const className = classNames('p-dropdown-panel p-component', this.props.panelClassName);
        const filter = this.renderFilter();
        const content = this.renderContent();

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.onEnter} onEntering={this.props.onEntering} onEntered={this.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={className} style={this.props.panelStyle} onClick={this.props.onClick}>
                    {filter}
                    {content}
                </div>
            </CSSTransition>
        );
    }

    render() {
        let element = this.renderElement();

        return <Portal element={element} appendTo={this.props.appendTo} />;
    }

}

export const DropdownPanel = React.forwardRef((props, ref) => <DropdownPanelComponent forwardRef={ref} {...props} />);
