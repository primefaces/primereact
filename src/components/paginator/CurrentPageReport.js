import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CurrentPageReport extends Component {

    static defaultProps = {
        pageCount: null,
        page: null,
        currentPageReportTemplate: null
    }

    static propsTypes = {
        pageCount: PropTypes.number,
        page: PropTypes.number,
        currentPageReportTemplate: PropTypes.any
    }
    
    render() {
        let text = this.props.currentPageReportTemplate ? this.props.currentPageReportTemplate :
            '('+(this.props.page + 1)+' of '+(this.props.pageCount)+')';
            
        return <span className="p-paginator-current">{text}</span>
    }
}