import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CurrentPageReport extends Component {

    static defaultProps = {
        pageCount: null,
        page: null,
        template: null
    }

    static propsTypes = {
        pageCount: PropTypes.number,
        page: PropTypes.number,
        template: PropTypes.any
    }
    
    render() {
        let text = this.props.template
            .replace("{currentPage}", this.props.page + 1)
            .replace("{totalPages}", this.props.pageCount);
            
        return <span className="p-paginator-current">{text}</span>
    }
}