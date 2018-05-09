import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class TreeTableSubmenu extends Component {

    render() {
        return (
            <div className="content-section content-submenu ui-helper-clearfix">
                <ul>
                    <li><Link to="/treetable">&#9679; Basic</Link></li>
                    <li><Link to="/treetable/selection">&#9679; Selection</Link></li>
                    <li><Link to="/treetable/sort">&#9679; Sort</Link></li>
                </ul>
            </div>
        );
    }
}