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
        let checkboxClassName = classNames('p-chkbox-box p-component', {'p-highlight': this.props.allChecked});
        let checkboxIcon = classNames('p-chkbox-icon p-clickable', {'pi pi-check': this.props.allChecked});
        
        if(this.props.filter) {
            filterElement = <div className="p-multiselect-filter-container">
                                <InputText type="text" role="textbox" value={this.props.filterValue} onChange={this.onFilter}
                                            className="p-inputtext p-component" />
                                <span className="p-multiselect-filter-icon pi pi-search"></span>
                            </div>;
        }
        
        return (
                <div className="p-multiselect-header p-helper-clearfix">
                    <div className="p-chkbox p-component" onClick={this.onToggleAll}>
                        <div className="p-helper-hidden-accessible">
                            <input type="checkbox" readOnly={true} />
                        </div>
                        <div className={checkboxClassName}>
                            <span className={checkboxIcon}></span>
                        </div>
                    </div>
                    {filterElement}
                    <a className="p-multiselect-close" onClick={this.props.onClose}>
                        <span className="pi pi-times"></span>
                    </a>
                </div>
        );
    }
}