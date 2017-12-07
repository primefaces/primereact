import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class SplitButtonPanel extends Component {

    static defaultProps = {
        appendTo: null,
        menuStyle: null,
        menuClassName: null
    };

    static propTypes = {
        appendTo: PropTypes.object,
        menustyle: PropTypes.object,
        menuClassName: PropTypes.string
    };

    renderElement() {
        let className = classNames('ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-shadow', this.props.menuClassName);

        return (
            <div className={className} style={this.props.menuStyle} ref={(el) => { this.element = el; }}>
                <ul className="ui-menu-list ui-helper-reset">
                    {this.props.children}
                </ul>
            </div>
        );
    }

    render() {
        let element = this.renderElement();

        if (this.props.appendTo) {
            return ReactDOM.createPortal(element, this.props.appendTo);
        }
        else {
            return element;
        }
    }

}