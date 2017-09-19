import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Paginator} from '../paginator/Paginator';
import {TableHeader} from './TableHeader';
import {TableBody} from './TableBody';
import {TableFooter} from './TableFooter';
import {ScrollableView} from './ScrollableView';
import ObjectUtils from '../utils/ObjectUtils';
import DomHandler from '../utils/DomHandler';

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
        rowExpansionTemplate: null,
        expandedRows: null,
        responsive: false,
        onRowToggle: null,
        resizableColumns: false,
        columnResizeMode: 'fit',
        reorderableColumns: false,
        filters: null,
        globalFilter: null,
        scrollable: false,
        scrollHeight: null,
        frozenWidth: null,
        unfrozenWidth: null,
        frozenValue: null,
        csvSeparator: ',',
        exportFilename: 'download',
        contextMenu: null,
        onColumnResizeEnd: null,
        onSort: null,
        onPage: null,
        onFilter: null,
        onLazyLoad: null,
        onRowClick: null,
        onRowSelect: null,
        onRowUnselect: null,
        onRowExpand: null,
        onRowCollapse: null,
        onContextMenuSelect: null,
        onColReorder: null
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
        headerColumnGroup: PropTypes.object,
        footerColumnGroup: PropTypes.object,
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
        scrollWidth: PropTypes.string,
        scrollHeight: PropTypes.string,
        frozenWidth: PropTypes.string,
        unfrozenWidth: PropTypes.string,
        frozenValue: PropTypes.array,
        csvSeparator: PropTypes.string,
        exportFilename: PropTypes.string,
        contextMenu: PropTypes.any,
        onColumnResizeEnd: PropTypes.func,
        onSort: PropTypes.func,
        onPage: PropTypes.func,
        onFilter: PropTypes.func,
        onLazyLoad: PropTypes.func,
        onRowClick: PropTypes.func,
        onRowSelect: PropTypes.func,
        onRowUnselect: PropTypes.func,
        onRowExpand: PropTypes.func,
        onRowCollapse: PropTypes.func,
        onContextMenuSelect: PropTypes.func,
        onColReorder: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            first: props.first,
            rows: props.rows,
            sortField: props.sortField,
            sortOrder: props.sortOrder,
            multiSortMeta: props.multiSortMeta,
            filters: props.filters
        };

        this.onPageChange = this.onPageChange.bind(this);
        this.onSort = this.onSort.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onColumnResizeStart = this.onColumnResizeStart.bind(this);
        this.onHeaderCheckboxClick = this.onHeaderCheckboxClick.bind(this);
        this.onColumnDragStart = this.onColumnDragStart.bind(this);
        this.onColumnDragOver = this.onColumnDragOver.bind(this);
        this.onColumnDragLeave = this.onColumnDragLeave.bind(this);
        this.onColumnDrop = this.onColumnDrop.bind(this);
    }

    onPageChange(event) {
        this.setState({first: event.first, rows: event.rows});

        if(this.props.lazy) {
            this.props.onLazyLoad({
                first: event.first,
                rows: event.rows,
                sortField: this.state.sortField,
                sortOrder: this.state.sortOrder
            });
        }

        if(this.props.onPage) {
            this.props.onPage(event);
        }
    }

    createPaginator(position, totalRecords) {
        let className = 'ui-paginator-' + position;

        return <Paginator first={this.state.first} rows={this.state.rows} className={className}
                    totalRecords={totalRecords} onPageChange={this.onPageChange} template={this.props.paginatorTemplate} />;
    }

    onSort(event) {
        let sortField = event.sortField;
        let sortOrder = (this.state.sortField === event.sortField) ? this.state.sortOrder * -1 : 1;
        let multiSortMeta;

        if(this.props.sortMode === 'multiple') {
            let metaKey = event.originalEvent.metaKey||event.originalEvent.ctrlKey;
            multiSortMeta = this.state.multiSortMeta;
            if(!multiSortMeta || !metaKey) {
                multiSortMeta = [];
            }

            this.addSortMeta({field: sortField, order: sortOrder}, multiSortMeta);
        }

        this.setState({
            sortField: sortField,
            sortOrder: sortOrder,
            first: 0,
            multiSortMeta: multiSortMeta
        });

        if(this.props.lazy) {
            this.props.onLazyLoad({
                first: this.state.first,
                rows: this.state.rows,
                sortField: sortField,
                sortOrder: sortOrder,
                multiSortMeta: multiSortMeta
            });
        }

        if(this.props.onSort) {
            this.props.onSort({
                sortField: sortField,
                sortOrder: sortOrder,
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
        value.sort((data1, data2) => {
                let value1 = ObjectUtils.resolveFieldData(data1, this.state.sortField);
                let value2 = ObjectUtils.resolveFieldData(data2, this.state.sortField);
                let result = null;

                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2);
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

                return (this.state.sortOrder * result);
            });

        return value;
    }

    sortMultiple(data) {
         let value = [...data];
         value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.state.multiSortMeta, 0);
         });

         return value;
    }

    multisortField(data1, data2, multiSortMeta, index) {
        let value1 = ObjectUtils.resolveFieldData(data1, this.state.multiSortMeta[index].field);
        let value2 = ObjectUtils.resolveFieldData(data2, this.state.multiSortMeta[index].field);
        let result = null;

        if (typeof value1 === 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 !== value2)) {
                return (this.state.multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }

        if(value1 === value2)  {
            return (this.state.multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, this.state.multiSortMeta, index + 1)) : 0;
        }

        return (this.state.multiSortMeta[index].order * result);
    }

    onFilter(event) {
        let filterMetadata = this.state.filters||{};
        if(!this.isFilterBlank(event.value))
            filterMetadata[event.field] = {value: event.value};
        else if(filterMetadata[event.field])
            delete filterMetadata[event.field];

        this.setState({
            first: 0,
            filters: filterMetadata
        });

        if(this.props.onFilter) {
            this.props.onFilter({
                filters: filterMetadata
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

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.lazy && nextProps.value === this.props.value)
            return false;
        else
            return true;
    }

    componentDidMount() {
        if(this.props.lazy) {
            this.props.onLazyLoad({
                first: this.props.first,
                rows: this.props.rows,
                sortField: this.props.sortField,
                sortOrder: this.props.sortOrder,
                multiSortMeta: this.props.multiSortField
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.resizableColumns) {
            this.fixColumnWidths();
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.first !== null) { this.setState({first: nextProps.first}) }
        if(nextProps.rows !== null) { this.setState({rows: nextProps.rows}) }
        if(nextProps.sortField) { this.setState({sortField: nextProps.sortField}) }
        if(nextProps.sortOrder) { this.setState({sortOrder: nextProps.sortOrder}) }
        if(nextProps.multiSortMeta) { this.setState({multiSortMeta: nextProps.multiSortMeta}) }
        if(nextProps.filters) { this.setState({filters: nextProps.filters}) }
    }

    fixColumnWidths() {
        let columns = DomHandler.find(this.container, 'th.ui-resizable-column');
        columns.forEach((col) => {
            col.style.width = col.offsetWidth + 'px';
        });
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
        this.fixColumnWidths();
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
                    
                    /*if(this.scrollable) {
                        let colGroup = this.domHandler.findSingle(this.el.nativeElement, 'colgroup.ui-datatable-scrollable-colgroup');
                        let resizeColumnIndex = this.domHandler.index(this.resizeColumn);
                        colGroup.children[resizeColumnIndex].style.width = newColumnWidth + 'px';
                        
                        if(nextColumn) {
                            colGroup.children[resizeColumnIndex + 1].style.width = nextColumnWidth + 'px';
                        }
                    }*/
                }
            }
            else if(this.props.columnResizeMode === 'expand') {
                this.table.style.width = this.table.offsetWidth + delta + 'px';
                this.resizeColumn.style.width = newColumnWidth + 'px';
                let containerWidth = this.table.style.width;
                
                if(this.scrollable) {
                    /*this.domHandler.findSingle(this.el.nativeElement, '.ui-datatable-scrollable-header-box').children[0].style.width = containerWidth;
                    let colGroup = this.domHandler.findSingle(this.el.nativeElement, 'colgroup.ui-datatable-scrollable-colgroup');
                    let resizeColumnIndex = this.domHandler.index(this.resizeColumn);
                    colGroup.children[resizeColumnIndex].style.width = newColumnWidth + 'px';*/
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
                ObjectUtils.reorderArray(this.props.children, dragIndex, dropIndex);

                if(this.props.onColReorder) {
                    this.onColReorder.emit({
                        dragIndex: dragIndex,
                        dropIndex: dropIndex,
                        columns: this.columns
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

    exportCSV() {
        let data = this.props.value;
        let csv = '\ufeff';
        let columns = React.Children.toArray(this.props.children);
        
        //headers
        for(let i = 0; i < columns.length; i++) {
            if(columns[i].field) {
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
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
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

    filter(value) {
        let filteredValue = [];
        let columns = React.Children.toArray(this.props.children);

        for(let i = 0; i < value.length; i++) {
            let localMatch = true;
            let globalMatch = false;

            for(let j = 0; j < columns.length; j++) {
                let col = columns[j];
                let filterMeta = this.state.filters ? this.state.filters[col.props.field] : null;

                //local
                if(filterMeta) {
                    let filterValue = filterMeta.value;
                    let filterField = col.props.field;
                    let filterMatchMode = col.props.filterMatchMode;
                    let dataFieldValue = ObjectUtils.resolveFieldData(value[i], filterField);
                    let filterConstraint = ObjectUtils.filterConstraints[filterMatchMode];

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
                if(this.state.sortField || this.state.multiSortMeta) {
                    if(this.props.sortMode === 'single')
                        data = this.sortSingle(data);
                    else if(this.props.sortMode === 'multiple')
                        data = this.sortMultiple(data);
                }

                if(this.state.filters || this.props.globalFilter) {
                    data = this.filter(data);
                }
            }
        }

        return data;
    }

    isAllSelected() {
        return this.props.selection && this.props.value && this.props.selection.length === this.props.value.length;
    }

    getFrozenColumns() {
        let frozenColumns = null;
        if(this.props.children && this.props.children.length) {
            for(let col of this.props.children) {
                if(col.props.frozen) {
                    frozenColumns = frozenColumns||[];
                    frozenColumns.push(col);
                }
            }
        }

        return frozenColumns;
    }

    getScrollableColumns() {
        let columns = null;
        if(this.props.children && this.props.children.length) {
            for(let col of this.props.children) {
                if(!col.props.frozen) {
                    columns = columns||[];
                    columns.push(col);
                }
            }
        }

        return columns;
    }

    createTableHeader(columns) {
        return <TableHeader onSort={this.onSort} sortField={this.state.sortField} sortOrder={this.state.sortOrder} multiSortMeta={this.state.multiSortMeta} columnGroup={this.props.headerColumnGroup}
                            resizableColumns={this.props.resizableColumns} onColumnResizeStart={this.onColumnResizeStart} onFilter={this.onFilter} 
                            onHeaderCheckboxClick={this.onHeaderCheckboxClick} headerCheckboxSelected={this.isAllSelected()}
                            reorderableColumns={this.props.reorderableColumns} onColumnDragStart={this.onColumnDragStart} 
                            onColumnDragOver={this.onColumnDragOver} onColumnDragLeave={this.onColumnDragLeave} onColumnDrop={this.onColumnDrop}>
                            {columns}
                          </TableHeader>;
    }

    createTableBody(value, columns) {
        return <TableBody value={value} first={this.state.first} rows={this.state.rows} lazy={this.props.lazy} 
                        selectionMode={this.props.selectionMode} selection={this.props.selection} metaKeySelection={this.props.metaKeySelection}
                        onSelectionChange={this.props.onSelectionChange} onRowClick={this.props.onRowClick} onRowSelect={this.props.onRowSelect} onRowUnselect={this.props.onRowUnselect}
                        expandedRows={this.props.expandedRows} onRowToggle={this.props.onRowToggle} rowExpansionTemplate={this.props.rowExpansionTemplate}
                        onRowExpand={this.props.onRowExpand} responsive={this.props.responsive} emptyMessage={this.props.emptyMessage} 
                        contextMenu={this.props.contextMenu} onContextMenuSelect={this.props.onContextMenuSelect}>
                        {columns}
                </TableBody>;
    }

    createTableFooter(columns) {
        if(this.hasFooter())
            return <TableFooter columnGroup={this.props.footerColumnGroup}>{columns}</TableFooter>;
        else
            return null;
    }

    createScrollableView(value, columns, frozen) {
        return <ScrollableView header={this.createTableHeader(columns)} body={this.createTableBody(value, columns)} frozenBody={this.props.frozenValue ? this.createTableBody(this.props.frozenValue, columns): null} footer={this.createTableFooter(columns)} 
                scrollHeight={this.props.scrollHeight} frozen={frozen} frozenWidth={this.props.frozenWidth} unfrozenWidth={this.props.unfrozenWidth}></ScrollableView>
    }

    render() {
        let value = this.processData();
        let totalRecords = this.props.lazy ? this.props.totalRecords : value ? value.length : 0;
        let className = classNames('ui-datatable ui-widget', {'ui-datatable-reflow': this.props.responsive, 'ui-datatable-resizable': this.props.resizableColumns, 'ui-datatable-scrollable': this.props.scrollable}, this.props.className);
        let paginatorTop = this.props.paginator && this.props.paginatorPosition !== 'bottom' && this.createPaginator('top', totalRecords);
        let paginatorBottom = this.props.paginator && this.props.paginatorPosition !== 'top' && this.createPaginator('bottom', totalRecords);
        let headerFacet = this.props.header && <div className="ui-datatable-header ui-widget-header">{this.props.header}</div>;
        let footerFacet = this.props.footer && <div className="ui-datatable-footer ui-widget-header">{this.props.footer}</div>;
        let resizeHelper = this.props.resizableColumns && <div ref={(el) => {this.resizerHelper = el;}} className="ui-column-resizer-helper ui-state-highlight" style={{display:'none'}}></div>;
        let tableContent = null;
        let resizeIndicatorUp = this.props.reorderableColumns && <span ref={(el) => {this.reorderIndicatorUp = el;}} className="fa fa-arrow-down ui-datatable-reorder-indicator-up" style={{position: 'absolute', display: 'none'}} />
        let resizeIndicatorDown = this.props.reorderableColumns && <span ref={(el) => {this.reorderIndicatorDown = el;}} className="fa fa-arrow-up ui-datatable-reorder-indicator-down" style={{position: 'absolute', display: 'none'}} />;

        if(this.props.scrollable) {
            let frozenColumns = this.getFrozenColumns();
            let scrollableColumns = frozenColumns ? this.getScrollableColumns() : this.props.children;
            let frozenView, scrollableView;
            if(frozenColumns) {
                frozenView = this.createScrollableView(value, frozenColumns, true);
            }

            scrollableView = this.createScrollableView(value, scrollableColumns, false);

            tableContent = <div className="ui-datatable-scrollable-wrapper">
                {frozenView}
                {scrollableView}
            </div>;
        }
        else {
            let tableHeader = this.createTableHeader(this.props.children);
            let tableBody = this.createTableBody(value, this.props.children);
            let tableFooter = this.createTableFooter(this.props.children);

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