import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class SplitButtonPanel extends Component {

    static defaultProps = {
        appendTo: null,
        menuStyle: null,
        menuClassName: null,
        id: null
    };

    static propTypes = {
        appendTo: PropTypes.object,
        menustyle: PropTypes.object,
        menuClassName: PropTypes.string,
        id: PropTypes.any
    };

    renderElement() {
        let className = classNames('p-menu p-menu-dynamic p-menu-overlay p-component', this.props.menuClassName);

        return (
            <div className={className} style={this.props.menuStyle} id={this.props.id} ref={(el) => { this.element = el; }}>
                <ul className="p-menu-list p-reset" role="menu">
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
