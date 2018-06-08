import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputText} from '../inputtext/InputText';

export class ListBoxHeader extends Component {
    
    static defaultProps = {
        filter: null,
        disabled: false,
        onFilter: null
    }
    
    static propTypes = {
        filter: PropTypes.string,
        disabled: PropTypes.bool,
        onFilter: PropTypes.func
    }
    
    constructor() {
        super();
        this.onFilter = this.onFilter.bind(this);
    }
    
    onFilter(event) {
        if(this.props.onFilter) {
            this.props.onFilter({
                originalEvent: event,
                query: event.target.value
            });
        }
    }
        
    render() {        
        return (
                <div className="ui-widget-header ui-corner-all ui-listbox-header ui-helper-clearfix">
                    <div className="ui-listbox-filter-container">
                        <InputText type="text" role="textbox" value={this.props.filter} onChange={this.onFilter} disabled={this.props.disabled} />
                        <span className="ui-listbox-filter-icon pi pi-search"></span>
                    </div>
                </div>
        );
    }
}