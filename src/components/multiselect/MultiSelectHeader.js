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
        let checkboxClassName = classNames('ui-chkbox-box ui-widget ui-corner-all ui-state-default', {'ui-state-active': this.props.allChecked});
        let checkboxIcon = classNames('ui-chkbox-icon ui-clickable', {'pi pi-check': this.props.allChecked});
        
        if(this.props.filter) {
            filterElement = <div className="ui-multiselect-filter-container">
                                <InputText type="text" role="textbox" value={this.props.filterValue} onChange={this.onFilter}
                                            className="ui-inputtext ui-widget ui-state-default ui-corner-all" />
                                <span className="ui-multiselect-filter-icon pi pi-search"></span>
                            </div>;
        }
        
        return (
                <div className="ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix">
                    <div className="ui-chkbox ui-widget" onClick={this.onToggleAll}>
                        <div className="ui-helper-hidden-accessible">
                            <input type="checkbox" readOnly={true} />
                        </div>
                        <div className={checkboxClassName}>
                            <span className={checkboxIcon}></span>
                        </div>
                    </div>
                    {filterElement}
                    <a className="ui-multiselect-close ui-corner-all" onClick={this.props.onClose}>
                        <span className="pi pi-times"></span>
                    </a>
                </div>
        );
    }
}