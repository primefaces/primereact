import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputText } from '../inputtext/InputText';
import { Checkbox } from '../checkbox/Checkbox';
import { Ripple } from '../ripple/Ripple';
import ObjectUtils from '../utils/ObjectUtils';

export class MultiSelectHeader extends Component {

    static defaultProps = {
        filter: false,
        filterValue: null,
        filterPlaceholder: null,
        onFilter: null,
        onClose: null,
        onToggleAll: null,
        allChecked: false,
        template: null
    }

    static propTypes = {
        filter: PropTypes.bool,
        filterValue: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        allChecked: PropTypes.bool,
        onFilter: PropTypes.func,
        onClose: PropTypes.func,
        onToggleAll: PropTypes.func,
        template: PropTypes.any
    }

    constructor(props) {
        super(props);

        this.onFilter = this.onFilter.bind(this);
        this.onToggleAll = this.onToggleAll.bind(this);
    }

    onFilter(event) {
        if (this.props.onFilter) {
            this.props.onFilter({
                originalEvent: event,
                query: event.target.value
            });
        }
    }

    onToggleAll(event) {
        if (this.props.onToggleAll) {
            this.props.onToggleAll({
                originalEvent: event,
                checked: this.props.allChecked
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
        const checkboxElement = <Checkbox checked={this.props.allChecked} onChange={this.onToggleAll} role="checkbox" aria-checked={this.props.allChecked} />;
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
                checked: this.props.allChecked,
                onChange: this.onToggleAll,
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
