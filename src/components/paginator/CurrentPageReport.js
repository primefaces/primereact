import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CurrentPageReport extends Component {

    static defaultProps = {
        pageCount: null,
        page: null,
        first: null,
        rows: null,
        totalRecords: null,
        template: '({currentPage} of {totalPages})'
    }

    static propTypes = {
        pageCount: PropTypes.number,
        page: PropTypes.number,
        first: PropTypes.number,
        rows: PropTypes.number,
        totalRecords: PropTypes.number,
        template: PropTypes.string
    }

    render() {
        let text = this.props.template
            .replace("{currentPage}", this.props.page + 1)
            .replace("{totalPages}", this.props.pageCount)
            .replace("{first}", this.props.first + 1)
            .replace("{last}", Math.min(this.props.first + this.props.rows, this.props.totalRecords))
            .replace("{rows}", this.props.rows)
            .replace("{totalRecords}", this.props.totalRecords);

        return <span className="p-paginator-current">{text}</span>
    }
}
