import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class DataTableSubmenu extends Component {

    render() {
        return (
            <div className="content-section content-submenu p-clearfix">
                <ul>
                    <li><Link to="/datatable">&#9679; Documentation</Link></li>
                    <li><Link to="/datatable/basic">&#9679; Basic</Link></li>
                    <li><Link to="/datatable/dynamiccolumns">&#9679; Dynamic</Link></li>
                    <li><Link to="/datatable/templating">&#9679; Templating</Link></li>
                    <li><Link to="/datatable/paginator">&#9679; Paginator</Link></li>
                    <li><Link to="/datatable/sort">&#9679; Sort</Link></li>
                    <li><Link to="/datatable/filter">&#9679; Filter</Link></li>
                    <li><Link to="/datatable/selection">&#9679; Selection</Link></li>
                    <li><Link to="/datatable/edit">&#9679; Edit</Link></li>
                    <li><Link to="/datatable/lazy">&#9679; Lazy</Link></li>
                    <li><Link to="/datatable/scroll">&#9679; Scroll</Link></li>
                    <li><Link to="/datatable/colgroup">&#9679; ColGroup</Link></li>
                    <li><Link to="/datatable/rowgroup">&#9679; RowGroup</Link></li>
                    <li><Link to="/datatable/rowexpand">&#9679; Expand</Link></li>
                    <li><Link to="/datatable/responsive">&#9679; Responsive</Link></li>
                    <li><Link to="/datatable/style">&#9679; Style</Link></li>
                    <li><Link to="/datatable/colresize">&#9679; ColResize</Link></li>
                    <li><Link to="/datatable/reorder">&#9679; Reorder</Link></li>
                    <li><Link to="/datatable/coltoggle">&#9679; ColToggle</Link></li>
                    <li><Link to="/datatable/export">&#9679; Export</Link></li>
                    <li><Link to="/datatable/contextmenu">&#9679; ContextMenu</Link></li>
                    <li><Link to="/datatable/crud">&#9679; Crud</Link></li>
                    <li><Link to="/datatable/state">&#9679; State</Link></li>
                </ul>
            </div>
        );
    }
}
