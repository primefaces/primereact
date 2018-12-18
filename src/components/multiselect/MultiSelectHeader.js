import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputText} from '../inputtext/InputText';
import classNames from 'classnames';

export class MultiSelectHeader extends Component {
    
    static defaultProps = {
        filter: false,
        filterValue: null,
        onFilter: null,
        onClose: null,
        onToggleAll: null,
        allChecked: false
    }
    
    static propTypes = {
        filter: PropTypes.bool,
        filterValue: PropTypes.string,
        allChecked: PropTypes.bool,
        onFilter: PropTypes.func,
        onClose: PropTypes.func,
        onToggleAll: PropTypes.func
    }
    
    constructor() {
        super();
        this.onFilter = this.onFilter.bind(this);
        this.onToggleAll = this.onToggleAll.bind(this);
    }
    
    onFilter(event) {
        if(this.props.onFilter) {
            this.props.onFilter({
                originalEvent: event,
                query: event.target.value
            });
        }
    }
    
    onToggleAll(event) {
        if(this.props.onToggleAll) {
            this.props.onToggleAll({
                originalEvent: event,
                checked: this.props.allChecked
            });
        }
    }
        
    render() {
        let filterElement;
        let checkboxClassName = classNames('p-checkbox-box p-component', {'p-highlight': this.props.allChecked});
        let checkboxIcon = classNames('p-checkbox-icon p-clickable', {'pi pi-check': this.props.allChecked});
        
        if(this.props.filter) {
            filterElement = <div className="p-multiselect-filter-container">
                                <InputText type="text" role="textbox" value={this.props.filterValue} onChange={this.onFilter}
                                            className="p-inputtext p-component" />
                                <span className="p-multiselect-filter-icon pi pi-search"></span>
                            </div>;
        }
        
        return (
                <div className="p-multiselect-header">
                    <div className="p-checkbox p-component" onClick={this.onToggleAll}>
                        <div className="p-hidden-accessible">
                            <input type="checkbox" readOnly={true} />
                        </div>
                        <div className={checkboxClassName}>
                            <span className={checkboxIcon}></span>
                        </div>
                    </div>
                    {filterElement}
                    <button className="p-multiselect-close p-link" onClick={this.props.onClose}>
                        <span className="p-multiselect-close-icon pi pi-times"></span>
                    </button>
                </div>
        );
    }
}