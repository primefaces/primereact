import React, {Component} from 'react';
import {Link} from 'react-router';

export class DataScrollerSubmenu extends Component {
    render() {
        return (
            <div id="datatable-submenu" className="content-section SubSubMenu ui-helper-clearfix">
                <ul>
                    <li><Link to="/datascroller">&#9679; Window</Link></li>
                    <li><Link to="/datascroller/inline">&#9679; Inline</Link></li>
                    <li><Link to="/datascroller/loader">&#9679; Loader</Link></li>
                    <li><Link to="/datascroller/infinite">&#9679; Infinite</Link></li>
                </ul>
            </div>
        );
    }
}