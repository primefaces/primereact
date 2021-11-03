import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {InputText} from '../inputtext/InputText';

export class ListBoxHeader extends Component {

    static defaultProps = {
        filter: null,
        filterPlaceholder: null,
        disabled: false,
        onFilter: null
    }

    static propTypes = {
        filter: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        disabled: PropTypes.bool,
        onFilter: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.onFilter = this.onFilter.bind(this);
    }

    onFilter(event) {
        if(this.props.onFilter) {
            this.props.onFilter({
                originalEvent: event,
                value: event.target.value
            });
        }
    }

    render() {
        return (
                <div className="p-listbox-header">
                    <div className="p-listbox-filter-container">
                        <InputText type="text" value={this.props.filter} onChange={this.onFilter} className="p-listbox-filter" disabled={this.props.disabled} placeholder={this.props.filterPlaceholder} />
                        <span className="p-listbox-filter-icon pi pi-search"></span>
                    </div>
                </div>
        );
    }
}
