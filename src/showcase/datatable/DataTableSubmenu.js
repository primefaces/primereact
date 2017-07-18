import React, {Component} from 'react';
import {Link} from 'react-router';

export class DataTableSubmenu extends Component {

    render() {
        return (
            <div className="content-section SubSubMenu ui-helper-clearfix">
                <ul>
                    <li><Link to="/datatable">&#9679; Basic</Link></li>
                    <li><Link to="/datatable/templating">&#9679; Templating</Link></li>
                    <li><Link to="/datatable/paginator">&#9679; Paginator</Link></li>
                    <li><Link to="/datatable/sort">&#9679; Sort</Link></li>
                    <li><Link to="/datatable/selection">&#9679; Selection</Link></li>
                    <li><Link to="/datatable/lazy">&#9679; Lazy</Link></li>
                    <li><Link to="/datatable/colgroup">&#9679; ColGroup</Link></li>
                    <li><Link to="/datatable/rowexpand">&#9679; Expand</Link></li>
                </ul>
            </div>
        );
    }

}