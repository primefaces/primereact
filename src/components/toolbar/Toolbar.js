import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


export class Toolbar extends Component {

    static defaultProps = {
        style: null,
        styleClass:null
    };

    static propTypes = {
        style: PropTypes.object,
        styleClass: PropTypes.string
    };

    render() {
        let toolbarClass = classNames('ui-toolbar ui-widget ui-widget-header ui-corner-all ui-helper-clearfix', this.props.styleClass)
        return (
            <div className={toolbarClass} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
} 