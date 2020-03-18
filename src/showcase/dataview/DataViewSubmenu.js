import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class DataViewSubmenu extends Component {

    render() {
        return (
            <div className="content-section content-submenu p-clearfix">
                <ul>
                    <li><Link to="/dataview">&#9679; Documentation</Link></li>
                    <li><Link to="/dataview/lazy">&#9679; Lazy</Link></li>
                </ul>
            </div>
        );
    }
}
