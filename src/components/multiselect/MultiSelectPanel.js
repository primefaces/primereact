import React, { Component } from 'react';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from '../transition/CSSTransition';
import { Portal } from '../portal/Portal';
import { MultiSelectHeader } from './MultiSelectHeader';
import { MultiSelectItem } from './MultiSelectItem';
import ObjectUtils from '../utils/ObjectUtils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';

class MultiSelectPanelComponent extends Component {

    constructor(props) {
        super(props);

        this.onEnter = this.onEnter.bind(this);
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

    onFilterInputChange(event) {
        if (this.virtualScrollerRef) {
            this.virtualScrollerRef.scrollToIndex(0);
        }

        this.props.onFilterInputChange && this.props.onFilterInputChange(event);
    }

    isEmptyFilter() {
        return !(this.props.visibleOptions && this.props.visibleOptions.length) && this.props.hasFilter();
    }

    renderHeader() {
        return (
            <MultiSelectHeader filter={this.props.filter} filterValue={this.props.filterValue} onFilter={this.onFilterInputChange} filterPlaceholder={this.props.filterPlaceholder}
                onClose={this.props.onCloseClick} showSelectAll={this.props.showSelectAll} selectAll={this.props.isAllSelected()} onSelectAll={this.props.onSelectAll} template={this.props.panelHeaderTemplate} />
        );
    }

    renderFooter() {
        if (this.props.panelFooterTemplate) {
            const content = ObjectUtils.getJSXElement(this.props.panelFooterTemplate, this.props, this.props.onOverlayHide);

            return (
                <div className="p-multiselect-footer">
                    {content}
                </div>
            );
        }

        return null;
    }

    renderGroupChildren(optionGroup) {
        const groupChildren = this.props.getOptionGroupChildren(optionGroup);
        return (
            groupChildren.map((option, j) => {
                let optionLabel = this.props.getOptionLabel(option);
                let optionKey = j + '_' + this.props.getOptionRenderKey(option);
                let disabled = this.props.isOptionDisabled(option)
                let tabIndex = disabled ? null : this.props.tabIndex || 0;

                return (
                    <MultiSelectItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate}
                        selected={this.props.isSelected(option)} onClick={this.props.onOptionSelect} onKeyDown={this.props.onOptionKeyDown} tabIndex={tabIndex} disabled={disabled} />
                );
            })
        )
    }

    renderEmptyFilter() {
        const emptyFilterMessage = ObjectUtils.getJSXElement(this.props.emptyFilterMessage, this.props);
        return (
            <li className="p-multiselect-empty-message">
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
                    <li className="p-multiselect-item-group">
                        {groupContent}
                    </li>
                    {groupChildrenContent}
                </React.Fragment>
            )
        }
        else {
            let optionLabel = this.props.getOptionLabel(option);
            let optionKey = index + '_' + this.props.getOptionRenderKey(option);
            let disabled = this.props.isOptionDisabled(option)
            let tabIndex = disabled ? null : this.props.tabIndex || 0;

            return (
                <MultiSelectItem key={optionKey} label={optionLabel} option={option} template={this.props.itemTemplate}
                    selected={this.props.isSelected(option)} onClick={this.props.onOptionSelect} onKeyDown={this.props.onOptionKeyDown} tabIndex={tabIndex} disabled={disabled} />
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

    renderContent() {
        if (this.props.virtualScrollerOptions) {
            const virtualScrollerProps = { ...this.props.virtualScrollerOptions, ...{
                style: {...this.props.virtualScrollerOptions.style, ...{ height: this.props.scrollHeight }},
                className: classNames('p-multiselect-items-wrapper', this.props.virtualScrollerOptions.className),
                items: this.props.visibleOptions,
                itemTemplate: (item, options) => item && this.renderItem(item, options.index),
                contentTemplate: (options) => {
                    const className = classNames('p-multiselect-items p-component', options.className);
                    const content = this.isEmptyFilter() ? this.renderEmptyFilter() : options.children;

                    return (
                        <ul ref={options.ref} className={className} role="listbox" aria-multiselectable>
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
                <div className="p-multiselect-items-wrapper" style={{ maxHeight: this.props.scrollHeight }}>
                    <ul className="p-multiselect-items p-component" role="listbox" aria-multiselectable>
                        {items}
                    </ul>
                </div>
            );
        }
    }

    renderElement() {
        const panelClassName = classNames('p-multiselect-panel p-component', {
            'p-multiselect-limited': !this.props.allowOptionSelect()
        }, this.props.panelClassName);
        const header = this.renderHeader();
        const content = this.renderContent();
        const footer = this.renderFooter();

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.onEnter} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={panelClassName} style={this.props.panelStyle} onClick={this.props.onClick}>
                    {header}
                    {content}
                    {footer}
                </div>
            </CSSTransition>

        );
    }

    render() {
        let element = this.renderElement();

        return <Portal element={element} appendTo={this.props.appendTo} />;
    }
}

export const MultiSelectPanel = React.forwardRef((props, ref) => <MultiSelectPanelComponent forwardRef={ref} {...props} />);
