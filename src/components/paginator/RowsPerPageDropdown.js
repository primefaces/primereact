import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class RowsPerPageDropdown extends Component {

    static defaultProps = {
        options: null,
        onChange: null
    }

    static propsTypes = {
        options: PropTypes.array,
        onChange: PropTypes.func
    }
    
    render() {
        if(this.props.options) {
            let options = this.props.options.map((opt, i) => <option key={opt} value={opt}>{opt}</option>);
            
            return <select className="ui-paginator-rpp-options ui-widget ui-state-default" onChange={this.props.onChange}>{options}</select>;
        }
        else {
            return null;
        }
    }
}