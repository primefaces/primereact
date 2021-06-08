import React, { Component } from 'react';
import { InputText } from '../inputtext/InputText';
import { Checkbox } from '../checkbox/Checkbox';
import { Ripple } from '../ripple/Ripple';
import ObjectUtils from '../utils/ObjectUtils';

export class MultiSelectHeader extends Component {

    constructor(props) {
        super(props);

        this.onFilter = this.onFilter.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);
    }

    onFilter(event) {
        if (this.props.onFilter) {
            this.props.onFilter({
                originalEvent: event,
                query: event.target.value
            });
        }
    }

    onSelectAll(event) {
        if (this.props.onSelectAll) {
            this.props.onSelectAll({
                originalEvent: event,
                checked: this.props.selectAll
            });
        }
    }

    renderFilterElement() {
        if (this.props.filter) {
            return (
                <div className="p-multiselect-filter-container">
                    <InputText type="text" role="textbox" value={this.props.filterValue} onChange={this.onFilter}
                        className="p-multiselect-filter" placeholder={this.props.filterPlaceholder} />
                    <span className="p-multiselect-filter-icon pi pi-search"></span>
                </div>
            );
        }

        return null;
    }

    render() {
        const filterElement = this.renderFilterElement();
        const checkboxElement = this.props.showSelectAll && <Checkbox checked={this.props.selectAll} onChange={this.onSelectAll} role="checkbox" aria-checked={this.props.selectAll} />;
        const closeElement = (
            <button type="button" className="p-multiselect-close p-link" onClick={this.props.onClose}>
                <span className="p-multiselect-close-icon pi pi-times"></span>
                <Ripple />
            </button>
        );
        const element = (
            <div className="p-multiselect-header">
                {checkboxElement}
                {filterElement}
                {closeElement}
            </div>
        );

        if (this.props.template) {
            const defaultOptions = {
                className: 'p-multiselect-header',
                checkboxElement,
                checked: this.props.selectAll,
                onChange: this.onSelectAll,
                filterElement,
                closeElement,
                closeElementClassName: 'p-multiselect-close p-link',
                closeIconClassName: 'p-multiselect-close-icon pi pi-times',
                onCloseClick: this.props.onClose,
                element,
                props: this.props
            }

            return ObjectUtils.getJSXElement(this.props.template, defaultOptions);
        }

        return element;
    }
}
