import { Component } from 'react';
import PropTypes from 'prop-types';

export class Column extends Component {

    static defaultProps = {
        columnKey: null,
        field: null,
        sortField: null,
        header: null,
        body: null,
        footer: null,
        sortable: false,
        sortFunction: null,
        filter: false,
        filterMatchMode: 'startsWith',
        filterPlaceholder: null,
        filterType: 'text',
        filterMaxLength: null,
        filterElement: null,
        style: null,
        className: null,
        expander: false,
        frozen: false,
        selectionMode: null,
        colSpan: null,
        rowSpan: null,
        editor: null,
        editorValidator: null
    }

    static propsTypes = {
        columnKey: PropTypes.string,
        field: PropTypes.string,
        sortField: PropTypes.string,
        header: PropTypes.any,
        body: PropTypes.any,
        footer: PropTypes.any,
        sortable: PropTypes.bool,
        sortFunction: PropTypes.func,
        filter: PropTypes.bool,
        filterMatchMode: PropTypes.string,
        filterPlaceholder: PropTypes.string,
        filterType: PropTypes.string,
        filterMaxLength: PropTypes.number,
        filterElement: PropTypes.object,
        style: PropTypes.object,
        className: PropTypes.string,
        expander: PropTypes.bool,
        frozen: PropTypes.bool,
        selectionMode: PropTypes.string,
        colSpan: PropTypes.number,
        rowSpan: PropTypes.number,
        editor: PropTypes.func,
        editorValidator: PropTypes.func
    }
}