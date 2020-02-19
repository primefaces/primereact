import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class GalleriaSubmenu extends Component {

    render() {
        return (
            <div className="content-section content-submenu p-clearfix">
                <ul>
                    <li><Link to="/galleria">&#9679; Documentation</Link></li>
                    <li><Link to="/galleria/basic">&#9679; Basic</Link></li>
                    <li><Link to="/galleria/indicator">&#9679; Indicator</Link></li>
                    <li><Link to="/galleria/thumbnail">&#9679; Thumbnail</Link></li>
                    <li><Link to="/galleria/preview">&#9679; Preview</Link></li>
                    <li><Link to="/galleria/responsive">&#9679; Responsive</Link></li>
                    <li><Link to="/galleria/fullscreen">&#9679; FullScreen</Link></li>
                    <li><Link to="/galleria/circular">&#9679; Circular</Link></li>
                    <li><Link to="/galleria/caption">&#9679; Caption</Link></li>
                </ul>
            </div>
        );
    }
}
