import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CurrentPageReport extends Component {

    static defaultProps = {
        pageCount: null,
        page: null,
        template: '({currentPage} of {totalPages})'
    }

    static propsTypes = {
        pageCount: PropTypes.number,
        page: PropTypes.number,
        template: PropTypes.string
    }
    
    render() {
        let text = this.props.template
            .replace("{currentPage}", this.props.page + 1)
            .replace("{totalPages}", this.props.pageCount);
            
        return <span className="ui-paginator-current">{text}</span>
    }
}