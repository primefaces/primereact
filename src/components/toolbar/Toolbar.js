import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export class Toolbar extends Component {

    static defaultProps = {
        id: null,
        style: null,
        className:null
    };

    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string
    };

    render() {
        let toolbarClass = classNames('p-toolbar p-component', this.props.className)
        return (
            <div id={this.props.id} className={toolbarClass} style={this.props.style} role="toolbar">
                {this.props.children}
            </div>
        );
    }
}
