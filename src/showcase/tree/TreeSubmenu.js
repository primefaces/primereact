import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class TreeSubmenu extends Component {

    render() {
        return (
            <div className="content-section content-submenu p-clearfix">
                <ul>
                    <li><Link to="/tree">&#9679; Documentation</Link></li>
                    <li><Link to="/tree/selection">&#9679; Selection</Link></li>
                    <li><Link to="/tree/events">&#9679; Events</Link></li>
                    <li><Link to="/tree/lazy">&#9679; Lazy</Link></li>
                    <li><Link to="/tree/templating">&#9679; Templating</Link></li>
                    <li><Link to="/tree/dragdrop">&#9679; DragDrop</Link></li>
                    <li><Link to="/tree/contextmenu">&#9679; ContextMenu</Link></li>
                    <li><Link to="/tree/filter">&#9679; Filter</Link></li>
                </ul>
            </div>
        );
    }
}