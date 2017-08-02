import { Component } from 'react';
import PropTypes from 'prop-types';

export class Column extends Component {

    static defaultProps = {
        field: null,
        header: null,
        footer: null,
        sortable: false,
        filter: false,
        filterMatchMode: 'startsWith',
        style: null,
        className: null,
        rowSpan: null,
        colSpan: null,
        expander: false
    }

    static propsTypes = {
        field: PropTypes.string,
        header: PropTypes.string,
        footer: PropTypes.string,
        sortable: PropTypes.bool,
        filter: PropTypes.bool,
        filterMatchMode: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        rowSpan: PropTypes.number,
        colSpan: PropTypes.number,
        expander: PropTypes.bool
    }
}