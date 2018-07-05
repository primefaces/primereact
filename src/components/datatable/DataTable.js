import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Paginator } from '../paginator/Paginator';
import DomHandler from '../utils/DomHandler';
import ObjectUtils from '../utils/ObjectUtils';
import { ScrollableView } from './ScrollableView';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';

export class DataTable extends Component {

    static defaultProps = {
        id: null,
        value: null,
        header: null,
        footer: null,
        style: null,
        className: null,
        tableStyle: null,
        tableClassName: null,
        paginator: false,
        paginatorPosition: 'bottom',
        alwaysShowPaginator: true,
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        paginatorLeft:null,
        paginatorRight: null,
        pageLinkSize: 5,
        rowsPerPageOptions: null,
        first: null,
        rows: null,
        totalRecords: null,
        lazy: false,
        sortField: null,
        sortOrder: null,
        multiSortMeta: null,
        sortMode: 'single',
        emptyMessage: "No records found",
        selectionMode: null,
        selection: null,
        onSelectionChange: null,
        compareSelectionBy: 'deepEquals',
        dataKey: null,
        metaKeySelection: true,
        headerColumnGroup: null,
        footerColumnGroup: null,
        frozenHeaderColumnGroup: null,
        frozenFooterColumnGroup: null,
        rowExpansionTemplate: null,
        expandedRows: null,
        onRowToggle: null,
        responsive: false,
        resizableColumns: false,
        columnResizeMode: 'fit',
        reorderableColumns: false,
        filters: null,
        globalFilter: null,
        scrollable: false,
        scrollHeight: null,
        virtualScroll: false,
        virtualScrollDelay: 500,
        frozenWidth: null,
        unfrozenWidth: null,
        frozenValue: null,
        csvSeparator: ',',
        exportFilename: 'download',
        contextMenu: null,
        rowGroupMode: null,
        autoLayout: false,
        rowClassName: null,
        rowGroupHeaderTemplate: null,
        rowGroupFooterTemplate: null,
        loading: false,
        loadingIcon: 'pi pi-spinner',
        onColumnResizeEnd: null,
        onSort: null,
        onPage: null,
        onFilter: null,
        onVirtualScroll: null,
        onRowClick: null,
        onRowDoubleClick: null,
        onRowSelect: null,
        onRowUnselect: null,
        onRowExpand: null,
        onRowCollapse: null,
        onContextMenuSelect: null,
        onColReorder: null,
        onRowReorder: null
    }

    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.array,
        header: PropTypes.any,
        footer: PropTypes.any,
        style: PropTypes.object,
        className: PropTypes.string,
        tableStyle: PropTypes.any,
        tableClassName: PropTypes.string,
        paginator: PropTypes.bool,
        paginatorPosition: PropTypes.string,
        alwaysShowPaginator: PropTypes.bool,
        paginatorTemplate: PropTypes.string,
        paginatorLeft: PropTypes.any,
        paginatorRight: PropTypes.any,
        pageLinkSize: PropTypes.number,
        rowsPerPageOptions: PropTypes.array,
        first: PropTypes.number,
        rows: PropTypes.number,
        totalRecords: PropTypes.number,
        lazy: PropTypes.bool,
        sortField: PropTypes.string,
        sortOrder: PropTypes.number,
        multiSortMeta: PropTypes.array,
        sortMode: PropTypes.string,
        emptyMessage: PropTypes.string,
        selectionMode: PropTypes.string,
        selection: PropTypes.any,
        onSelectionChange: PropTypes.func,
        compareSelectionBy: PropTypes.string,
        dataKey: PropTypes.string,
        metaKeySelection: PropTypes.bool,
        headerColumnGroup: PropTypes.element,
        footerColumnGroup: PropTypes.element,
        frozenHeaderColumnGroup: PropTypes.element,
        frozenFooterColumnGroup: PropTypes.element,
        rowExpansionTemplate: PropTypes.func,
        expandedRows: PropTypes.array,
        onRowToggle: PropTypes.func,
        responsive: PropTypes.bool,
        resizableColumns: PropTypes.bool,
        columnResizeMode: PropTypes.string,
        reorderableColumns: PropTypes.bool,
        filters: PropTypes.object,
        globalFilter: PropTypes.any,
        scrollable: PropTypes.bool,
        scrollHeight: PropTypes.string,
        virtualScroll: PropTypes.bool,
        virtualScrollDelay: PropTypes.number,
        frozenWidth: PropTypes.string,
        unfrozenWidth: PropTypes.string,
        frozenValue: PropTypes.array,
        csvSeparator: PropTypes.string,
        exportFilename: PropTypes.string,
        contextMenu: PropTypes.any,
        rowGroupMode: PropTypes.string,
        autoLayout: PropTypes.bool,
        rowClassName: PropTypes.func,
        rowGroupHeaderTemplate: PropTypes.func,
        rowGroupFooterTemplate: PropTypes.func,
        loading: PropTypes.bool,
        loadingIcon: PropTypes.string,
        onColumnResizeEnd: PropTypes.func,
        onSort: PropTypes.func,
        onPage: PropTypes.func,
        onFilter: PropTypes.func,
        onVirtualScroll: PropTypes.func,
        onRowClick: PropTypes.func,
        onRowDoubleClick: PropTypes.func,
        onRowSelect: PropTypes.func,
        onRowUnselect: PropTypes.func,
        onRowExpand: PropTypes.func,
        onRowCollapse: PropTypes.func,
        onContextMenuSelect: PropTypes.func,
        onColReorder: PropTypes.func,
        onRowReorder: PropTypes.func
    };

    constructor(props) {
        super(props);
        let state = {};

        if (!this.props.onPage) {
            state.first = props.first;
            state.rows = props.rows;
        }

        if (!this.props.onSort) {
            state.sortField = props.sortField;
            state.sortOrder = props.sortOrder;
            state.multiSortMeta = props.multiSortMeta;
        }

        if (!this.props.onFilter) {
            state.filters = props.filters;
        }

        if (Object.keys(state).length) {
            this.state = state;
        }

        this.onPageChange = this.onPageChange.bind(this);
        this.onSort = this.onSort.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onColumnResizeStart = this.onColumnResizeStart.bind(this);
        this.onHeaderCheckboxClick = this.onHeaderCheckboxClick.bind(this);
        this.onColumnDragStart = this.onColumnDragStart.bind(this);
        this.onColumnDragOver = this.onColumnDragOver.bind(this);
        this.onColumnDragLeave = this.onColumnDragLeave.bind(this);
        this.onColumnDrop = this.onColumnDrop.bind(this);
        this.onVirtualScroll = this.onVirtualScroll.bind(this);
        this.frozenSelectionMode = null;
    }

    getFirst() {
        return this.props.onPage ? this.props.first : this.state.first;
    }

    getRows() {
        return this.props.onPage ? this.props.rows : this.state.rows;
    }

    getSortField() {
        return this.props.onSort ? this.props.sortField : this.state.sortField;
    }

    getSortOrder() {
        return this.props.onSort ? this.props.sortOrder : this.state.sortOrder;
    }

    getMultiSortMeta() {
        return this.props.onSort ? this.props.multiSortMeta : this.state.multiSortMeta;
    }

    getFilters() {
        return this.props.onFilter ? this.props.filters : this.state.filters;
    }

    onPageChange(event) {
        if (this.props.onPage)
            this.props.onPage(event);
        else
            this.setState({first: event.first, rows: event.rows});
    }

    createPaginator(position, totalRecords, data) {
        let className = 'ui-paginator-' + position;

        return <Paginator first={this.getFirst()} rows={this.getRows()} pageLinkSize={this.props.pageLinkSize} className={className} onPageChange={this.onPageChange} template={this.props.paginatorTemplate}
                          totalRecords={totalRecords} rowsPerPageOptions={this.props.rowsPerPageOptions} leftContent={this.props.paginatorLeft} rightContent={this.props.paginatorRight}/>;
    }

    onSort(event) {
        let sortField = event.sortField;
        let sortOrder = (this.getSortField() === event.sortField) ? this.getSortOrder() * -1 : 1;
        let multiSortMeta;

        this.columnSortable = event.sortable;
        this.columnSortFunction = event.sortFunction;

        if(this.props.sortMode === 'multiple') {
            let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
            multiSortMeta = this.getMultiSortMeta();
            if(!multiSortMeta || !metaKey) {
                multiSortMeta = [];
            }

            this.addSortMeta({field: sortField, order: sortOrder}, multiSortMeta);
        }
        
        if (this.props.onSort) {
            this.props.onSort({
                sortField: sortField,
                sortOrder: sortOrder,
                multiSortMeta: multiSortMeta
            });
        }
        else {
            this.setState({
                sortField: sortField,
                sortOrder: sortOrder,
                first: 0,
                multiSortMeta: multiSortMeta
            });
        }
    }

    addSortMeta(meta, multiSortMeta) {
        let index = -1;
        for(let i = 0; i < multiSortMeta.length; i++) {
            if(multiSortMeta[i].field === meta.field) {
                index = i;
                break;
            }
        }

        if(index >= 0)
            multiSortMeta[index] = meta;
        else
            multiSortMeta.push(meta);
    }

    sortSingle(data) {
        let value = [...data];

        if(this.columnSortable && this.columnSortable === 'custom' && this.columnSortFunction) {
            value = this.columnSortFunction({
                field: this.getSortField(),
                order: this.getSortOrder()
            });
        }
        else {
            value.sort((data1, data2) => {
                const sortField = this.getSortField();
                const value1 = ObjectUtils.resolveFieldData(data1, sortField);
                const value2 = ObjectUtils.resolveFieldData(data2, sortField);
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return (this.getSortOrder() * result);
            });
        }

        return value;
    }

    sortMultiple(data) {
         let value = [...data];
         value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.getMultiSortMeta(), 0);
         });

         return value;
    }

    multisortField(data1, data2, multiSortMeta, index) {
        const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
        const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
        let result = null;

        if (typeof value1 === 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 !== value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2, undefined, { numeric: true }));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }

        if(value1 === value2)  {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }

        return (multiSortMeta[index].order * result);
    }

    filter(value, field, mode) {
        this.onFilter({
            value: value,
            field: field,
            matchMode: mode
        });
    }

    onFilter(event) {
        let currentFilters = this.getFilters();
        let newFilters = currentFilters ? {...currentFilters} : {};
        
        if(!this.isFilterBlank(event.value))
            newFilters[event.field] = {value: event.value, matchMode: event.matchMode};
        else if(newFilters[event.field])
            delete newFilters[event.field];

        if (this.props.onFilter) {
            this.props.onFilter({
                filters: newFilters
            });
        }
        else {
            this.setState({
                first: 0,
                filters: newFilters
            });
        }
    }

    isFilterBlank(filter) {
        if(filter !== null && filter !== undefined) {
            if((typeof filter === 'string' && filter.trim().length === 0) || (filter instanceof Array && filter.length === 0))
                return true;
            else
                return false;
        } 
        return true;
    }

    componentDidMount() {
        this.container.style.width = this.getContainerWidth();
    }

    hasFooter() {
        if(this.props.children) {
            if(this.props.footerColumnGroup) {
                return true;
            }
            else {
                if(this.props.children instanceof Array) {
                    for(let i = 0; i < this.props.children.length; i++) {
                        if(this.props.children[i].footer) {
                            return true;
                        }
                    }
                }
                else {
                    return this.props.children.footer !== null;
                }
            }
        }
        else {
            return false;
        }
    }

    onColumnResizeStart(event) {
        let containerLeft = DomHandler.getOffset(this.container).left;
        this.resizeColumn = event.columnEl;
        this.columnResizing = true;
        this.lastResizerHelperX = (event.originalEvent.pageX - containerLeft + this.container.scrollLeft);

        this.bindColumnResizeEvents();
    }

    onColumnResize(event) {
        let containerLeft = DomHandler.getOffset(this.container).left;
        DomHandler.addClass(this.container, 'ui-unselectable-text');
        this.resizerHelper.style.height = this.container.offsetHeight + 'px';
        this.resizerHelper.style.top = 0 + 'px';
        this.resizerHelper.style.left = (event.pageX - containerLeft + this.container.scrollLeft) + 'px';
        
        this.resizerHelper.style.display = 'block';
    }

    onColumnResizeEnd(event) {
        let delta = this.resizerHelper.offsetLeft - this.lastResizerHelperX;
        let columnWidth = this.resizeColumn.offsetWidth;
        let newColumnWidth = columnWidth + delta;
        let minWidth = this.resizeColumn.style.minWidth||15;

        if(columnWidth + delta > parseInt(minWidth, 10)) {
            if(this.props.columnResizeMode === 'fit') {
                let nextColumn = this.resizeColumn.nextElementSibling;
                let nextColumnWidth = nextColumn.offsetWidth - delta;
                
                if(newColumnWidth > 15 && nextColumnWidth > 15) {
                    this.resizeColumn.style.width = newColumnWidth + 'px';
                    if(nextColumn) {
                        nextColumn.style.width = nextColumnWidth + 'px';
                    }
                    
                    if(this.props.scrollable) {
                        let colGroup = DomHandler.findSingle(this.container, 'colgroup.ui-datatable-scrollable-colgroup');
                        let resizeColumnIndex = DomHandler.index(this.resizeColumn);
                        colGroup.children[resizeColumnIndex].style.width = newColumnWidth + 'px';
                        
                        if(nextColumn) {
                            colGroup.children[resizeColumnIndex + 1].style.width = nextColumnWidth + 'px';
                        }
                    }
                }
            }
            else if(this.props.columnResizeMode === 'expand') {
                let table = DomHandler.findSingle(this.container, 'tbody.ui-datatable-data').parentElement;
                table.style.width = table.offsetWidth + delta + 'px';
                this.resizeColumn.style.width = newColumnWidth + 'px';
                let containerWidth = table.style.width;
                
                if(this.props.scrollable) {
                    DomHandler.findSingle(this.container, '.ui-datatable-scrollable-header-box').children[0].style.width = containerWidth;
                    let colGroup = DomHandler.findSingle(this.container, 'colgroup.ui-datatable-scrollable-colgroup');
                    let resizeColumnIndex = DomHandler.index(this.resizeColumn);
                    colGroup.children[resizeColumnIndex].style.width = newColumnWidth + 'px';
                }
                else {
                    this.container.style.width = containerWidth;
                }
            }    
            
            if(this.props.onColumnResizeEnd) {
                this.props.onColumnResizeEnd({
                    element: this.resizeColumn,
                    delta: delta
                });
            }
        }
                
        this.resizerHelper.style.display = 'none';
        this.resizeColumn = null;
        DomHandler.removeClass(this.container, 'ui-unselectable-text');

        this.unbindColumnResizeEvents();
    }

    bindColumnResizeEvents() {
        this.documentColumnResizeListener = document.addEventListener('mousemove', (event) => {
            if(this.columnResizing) {
                this.onColumnResize(event);
            }
        });
        
        this.documentColumnResizeEndListener = document.addEventListener('mouseup', (event) => {
            if(this.columnResizing) {
                this.columnResizing = false;
                this.onColumnResizeEnd(event);
            }
        });
    }

    unbindColumnResizeEvents() {
        document.removeEventListener('document', this.documentColumnResizeListener);
        document.removeEventListener('document', this.documentColumnResizeEndListener);
    }
    
    findParentHeader(element) {
        if(element.nodeName === 'TH') {
            return element;
        }
        else {
            let parent = element.parentElement;
            while(parent.nodeName !== 'TH') {
                parent = parent.parentElement;
                if(!parent) break;
            }
            return parent;
        }
    }
    
    onColumnDragStart(event) {
        if(this.columnResizing) {
            event.preventDefault();
            return;
        }
        
        this.iconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUp);
        this.iconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorUp);

        this.draggedColumn = this.findParentHeader(event.target);
        event.dataTransfer.setData('text', 'b'); // Firefox requires this to make dragging possible
    }
    
    onColumnDragOver(event) {
        let dropHeader = this.findParentHeader(event.target);
        if(this.props.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            let containerOffset = DomHandler.getOffset(this.container);
            let dropHeaderOffset = DomHandler.getOffset(dropHeader);
            
            if(this.draggedColumn !== dropHeader) {
                let targetLeft =  dropHeaderOffset.left - containerOffset.left;
                //let targetTop =  containerOffset.top - dropHeaderOffset.top;
                let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                
                this.reorderIndicatorUp.style.top = dropHeaderOffset.top - containerOffset.top - (this.iconHeight - 1) + 'px';
                this.reorderIndicatorDown.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';

                if(event.pageX > columnCenter) {
                    this.reorderIndicatorUp.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.iconWidth / 2)) + 'px';
                    this.reorderIndicatorDown.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.iconWidth / 2))+ 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUp.style.left = (targetLeft - Math.ceil(this.iconWidth / 2)) + 'px';
                    this.reorderIndicatorDown.style.left = (targetLeft - Math.ceil(this.iconWidth / 2))+ 'px';
                    this.dropPosition = -1;
                }
                                
                this.reorderIndicatorUp.style.display = 'block';
                this.reorderIndicatorDown.style.display = 'block';
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    }
    
    onColumnDragLeave(event) {
        if(this.props.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUp.style.display = 'none';
            this.reorderIndicatorDown.style.display = 'none';
        }
    }
    
    onColumnDrop(event) {
        event.preventDefault();
        if(this.draggedColumn) {
            let dragIndex = DomHandler.index(this.draggedColumn);
            let dropIndex = DomHandler.index(this.findParentHeader(event.target));
            let allowDrop = (dragIndex !== dropIndex);
            if(allowDrop && ((dropIndex - dragIndex === 1 && this.dropPosition === -1) || (dragIndex - dropIndex === 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
        
            if(allowDrop) {
                let columns = this.state.columnOrder ? this.getColumns() : React.Children.toArray(this.props.children);
                ObjectUtils.reorderArray(columns, dragIndex, dropIndex);
                let columnOrder = [];
                for(let column of columns) {
                    columnOrder.push(column.props.columnKey||column.props.field);
                }
                
                this.setState({
                    columnOrder: columnOrder
                });
    
                if (this.props.onColReorder) {
                    this.props.onColReorder({
                        dragIndex: dragIndex,
                        dropIndex: dropIndex,
                        columns: columns
                    });
                }
            }
            
            this.reorderIndicatorUp.style.display = 'none';
            this.reorderIndicatorDown.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    }
    
    onVirtualScroll(event) {
        if(this.virtualScrollTimer) {
            clearTimeout(this.virtualScrollTimer);
        }
                
        this.virtualScrollTimer = setTimeout(() => {
            if (this.props.onVirtualScroll) {
                this.props.onVirtualScroll({
                    first: (event.page - 1) * this.props.rows,
                    rows: this.props.rows
                })
            }
        }, this.props.virtualScrollDelay);
    }

    exportCSV() {
        let data = this.processData();
        let csv = '\ufeff';
        let columns = React.Children.toArray(this.props.children);
        
        //headers
        for(let i = 0; i < columns.length; i++) {
            if(columns[i].props.field) {
                csv += '"' + (columns[i].props.header || columns[i].props.field) + '"';
                
                if(i < (columns.length - 1)) {
                    csv += this.props.csvSeparator;
                }
            }
        }
        
        //body        
        data.forEach((record, i) => {
            csv += '\n';
            for(let i = 0; i < columns.length; i++) {
                if(columns[i].props.field) {
                    csv += '"' + ObjectUtils.resolveFieldData(record, columns[i].props.field) + '"';
                    
                    if(i < (columns.length - 1)) {
                        csv += this.props.csvSeparator;
                    }
                }
            }
        });
        
        let blob = new Blob([csv],{
            type: 'text/csv;charset=utf-8;'
        });
        
        if(window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.props.exportFilename + '.csv');
        }
        else {
            let link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if(link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', this.props.exportFilename + '.csv');
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    }

    onHeaderCheckboxClick(event) {
        let selection;

        if(!event.checked)
            selection = [...this.props.value];
        else
            selection = [];

        this.props.onSelectionChange({originalEvent: event, data: selection});
    }

    filterLocal(value) {
        let filteredValue = [];
        let filters = this.getFilters();
        let columns = React.Children.toArray(this.props.children);

        for(let i = 0; i < value.length; i++) {
            let localMatch = true;
            let globalMatch = false;

            for(let j = 0; j < columns.length; j++) {
                let col = columns[j];
                let filterMeta = filters ? filters[col.props.field] : null;
                
                //local
                if(filterMeta) {
                    let filterValue = filterMeta.value;
                    let filterField = col.props.field;
                    let filterMatchMode = filterMeta.matchMode||col.props.filterMatchMode;
                    let dataFieldValue = ObjectUtils.resolveFieldData(value[i], filterField);
                    let filterConstraint = filterMatchMode === 'custom' ? col.props.filterFunction : ObjectUtils.filterConstraints[filterMatchMode];

                    if(!filterConstraint(dataFieldValue, filterValue)) {
                        localMatch = false;
                    }

                    if(!localMatch) {
                        break;
                    }
                }

                //global
                if(this.props.globalFilter && !globalMatch) {
                    globalMatch = ObjectUtils.filterConstraints['contains'](ObjectUtils.resolveFieldData(value[i], col.props.field), this.props.globalFilter);
                }
            }

            let matches = localMatch;
            if(this.props.globalFilter) {
                matches = localMatch&&globalMatch;
            }

            if(matches) {
                filteredValue.push(value[i]);
            }
        }

        if(filteredValue.length === value.length) {
            filteredValue = value;
        }

        return filteredValue;
    }

    processData() {
        let data = this.props.value;
        if(!this.props.lazy) {
            if(data && data.length) {
                if(this.getSortField() || this.getMultiSortMeta()) {
                    if(this.props.sortMode === 'single')
                        data = this.sortSingle(data);
                    else if(this.props.sortMode === 'multiple')
                        data = this.sortMultiple(data);
                }

                if(this.getFilters() || this.props.globalFilter) {
                    data = this.filterLocal(data);
                }
            }
        }

        return data;
    }

    isAllSelected() {
        return this.props.selection && this.props.value && this.props.selection.length === this.props.value.length;
    }

    getFrozenColumns(columns) {
        let frozenColumns = null;
        
        for(let col of columns) {
            if(col.props.frozen) {
                frozenColumns = frozenColumns||[];
                frozenColumns.push(col);
            }
        }

        return frozenColumns;
    }

    getContainerWidth() {
        if(this.props.scrollable) {
            if(this.props.scrollWidth) {
                return this.props.scrollWidth;
            }
            else if(this.props.frozenWidth && this.props.unfrozenWidth) {
                return parseFloat(this.props.frozenWidth) + parseFloat(this.props.unfrozenWidth) + 'px';
            }
        }
        else {
            return this.props.style ? this.props.style.width : null;
        }
    }

    getScrollableColumns(columns) {
        let scrollableColumns = null;
        
        for(let col of columns) {
            if(!col.props.frozen) {
                scrollableColumns = scrollableColumns||[];
                scrollableColumns.push(col);
            }
        }

        return scrollableColumns;
    }

    getFrozenSelectionModeInColumn(columns) {
        if(Array.isArray(columns)) {
            for(let col of columns) {
                if(col.props.selectionMode)
                   return col.props.selectionMode;
            }
        }

        return null;
    }

    createTableHeader(columns, columnGroup) {
        return <TableHeader onSort={this.onSort} sortField={this.getSortField()} sortOrder={this.getSortOrder()} multiSortMeta={this.getMultiSortMeta()} columnGroup={columnGroup}
                            resizableColumns={this.props.resizableColumns} onColumnResizeStart={this.onColumnResizeStart} onFilter={this.onFilter} 
                            onHeaderCheckboxClick={this.onHeaderCheckboxClick} headerCheckboxSelected={this.isAllSelected()}
                            reorderableColumns={this.props.reorderableColumns} onColumnDragStart={this.onColumnDragStart} filters={this.getFilters()}
                            onColumnDragOver={this.onColumnDragOver} onColumnDragLeave={this.onColumnDragLeave} onColumnDrop={this.onColumnDrop}>
                            {columns}
                          </TableHeader>;
    }

    createTableBody(value, columns) {
        return <TableBody value={value} first={this.getFirst()} rows={this.getRows()} lazy={this.props.lazy} dataKey={this.props.dataKey} compareSelectionBy={this.props.compareSelectionBy}
                        selectionMode={this.props.selectionMode} selection={this.props.selection} metaKeySelection={this.props.metaKeySelection} frozenSelectionMode={this.frozenSelectionMode}
                        onSelectionChange={this.props.onSelectionChange} onRowClick={this.props.onRowClick} onRowDoubleClick={this.props.onRowDoubleClick} onRowSelect={this.props.onRowSelect} onRowUnselect={this.props.onRowUnselect}
                        expandedRows={this.props.expandedRows} onRowToggle={this.props.onRowToggle} rowExpansionTemplate={this.props.rowExpansionTemplate}
                        onRowExpand={this.props.onRowExpand} responsive={this.props.responsive} emptyMessage={this.props.emptyMessage} 
                        contextMenu={this.props.contextMenu} onContextMenuSelect={this.props.onContextMenuSelect} virtualScroll={this.props.virtualScroll}
                        groupField={this.props.groupField} rowGroupMode={this.props.rowGroupMode} rowGroupHeaderTemplate={this.props.rowGroupHeaderTemplate} rowGroupFooterTemplate={this.props.rowGroupFooterTemplate}
                        sortField={this.getSortField()} rowClassName={this.props.rowClassName} onRowReorder={this.props.onRowReorder}>
                        {columns}
                </TableBody>;
    }

    createTableFooter(columns, columnGroup) {
        if(this.hasFooter())
            return <TableFooter columnGroup={columnGroup}>{columns}</TableFooter>;
        else
            return null;
    }

    createScrollableView(value, columns, frozen, headerColumnGroup, footerColumnGroup, totalRecords) {
        return <ScrollableView columns={columns} header={this.createTableHeader(columns, headerColumnGroup)} body={this.createTableBody(value, columns)} frozenBody={this.props.frozenValue ? this.createTableBody(this.props.frozenValue, columns): null} footer={this.createTableFooter(columns, footerColumnGroup)} 
                scrollHeight={this.props.scrollHeight} frozen={frozen} frozenWidth={this.props.frozenWidth} unfrozenWidth={this.props.unfrozenWidth}
                virtualScroll={this.props.virtualScroll} rows={this.props.rows} totalRecords={totalRecords}
                onVirtualScroll={this.onVirtualScroll}></ScrollableView>
    }
    
    getColumns() {
        let columns = React.Children.toArray(this.props.children);
        
        if(this.props.reorderableColumns && this.state.columnOrder) {
            let orderedColumns = [];
            for(let columnKey of this.state.columnOrder) {
                orderedColumns.push(this.findColumnByKey(columns, columnKey));
            }
                        
            return orderedColumns;
        }
        else {
            return columns;
        }
    }
    
    findColumnByKey(columns, key) {
        if(columns && columns.length) {
            for(let i = 0; i < columns.length; i++) {
                let child = columns[i];
                if(child.props.columnKey === key || child.props.field === key) {
                    return child;
                }
            }
        }
        
        return null;
    }
    
    getTotalRecords(data) {
        return this.props.lazy ? this.props.totalRecords : data ? data.length : 0;
    }
    
    renderLoader() {
        let iconClassName = classNames('ui-datatable-loading-icon pi-spin', this.props.loadingIcon);
        
        return (
            <div className="ui-datatable-loader">
                <div className="ui-datatable-loader-overlay ui-widget-overlay"></div>
                <div className="ui-datatable-loader-content">
                    <i className={iconClassName}></i>
                </div>
            </div>
        );
    }

    render() {
        let value = this.processData();
        let columns = this.getColumns();
        let totalRecords = this.getTotalRecords(value);
        let className = classNames('ui-datatable ui-widget', {'ui-datatable-reflow': this.props.responsive, 'ui-datatable-resizable': this.props.resizableColumns, 
                        'ui-datatable-scrollable': this.props.scrollable, 'ui-datatable-virtual-scrollable': this.props.virtualScroll,
                        'ui-datatable-auto-layout': this.props.autoLayout}, this.props.className);
        let paginatorTop = this.props.paginator && this.props.paginatorPosition !== 'bottom' && this.createPaginator('top', totalRecords);
        let paginatorBottom = this.props.paginator && this.props.paginatorPosition !== 'top' && this.createPaginator('bottom', totalRecords);
        let headerFacet = this.props.header && <div className="ui-datatable-header ui-widget-header">{this.props.header}</div>;
        let footerFacet = this.props.footer && <div className="ui-datatable-footer ui-widget-header">{this.props.footer}</div>;
        let resizeHelper = this.props.resizableColumns && <div ref={(el) => {this.resizerHelper = el;}} className="ui-column-resizer-helper ui-state-highlight" style={{display:'none'}}></div>;
        let tableContent = null;
        let resizeIndicatorUp = this.props.reorderableColumns && <span ref={(el) => {this.reorderIndicatorUp = el;}} className="pi pi-arrow-down ui-datatable-reorder-indicator-up" style={{position: 'absolute', display: 'none'}} />
        let resizeIndicatorDown = this.props.reorderableColumns && <span ref={(el) => {this.reorderIndicatorDown = el;}} className="pi pi-arrow-up ui-datatable-reorder-indicator-down" style={{position: 'absolute', display: 'none'}} />;
        let loader;
        
        if(this.props.loading) {
            loader = this.renderLoader();
        }

        if(this.props.scrollable) {
            this.frozenSelectionMode = this.frozenSelectionMode || this.getFrozenSelectionModeInColumn(columns);
            let frozenColumns = this.getFrozenColumns(columns);
            let scrollableColumns = frozenColumns ? this.getScrollableColumns(columns) : columns;
            let frozenView, scrollableView;
            if(frozenColumns) {
                frozenView = this.createScrollableView(value, frozenColumns, true, this.props.frozenHeaderColumnGroup, this.props.frozenFooterColumnGroup, totalRecords);
            }

            scrollableView = this.createScrollableView(value, scrollableColumns, false, this.props.headerColumnGroup, this.props.footerColumnGroup, totalRecords);

            tableContent = <div className="ui-datatable-scrollable-wrapper">
                                {frozenView}
                                {scrollableView}
                          </div>;
        }
        else {
            let tableHeader = this.createTableHeader(columns, this.props.headerColumnGroup);
            let tableBody = this.createTableBody(value, columns);
            let tableFooter = this.createTableFooter(columns, this.props.footerColumnGroup);

            tableContent = <div className="ui-datatable-tablewrapper">
                    <table style={this.props.tableStyle} className={this.props.tableClassName} ref={(el) => {this.table = el;}}>
                        {tableHeader}                        
                        {tableFooter}
                        {tableBody}
                    </table>
                </div>;
        }

        return (
            <div id={this.props.id} className={className} style={this.props.style} ref={(el) => {this.container = el;}}>
                {loader}
                {headerFacet}
                {paginatorTop}
                {tableContent}
                {paginatorBottom}
                {footerFacet}
                {resizeHelper}
                {resizeIndicatorUp}
                {resizeIndicatorDown}
            </div>
        );
    }
}
