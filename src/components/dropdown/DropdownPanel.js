import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export class DropdownPanel extends Component {

    static defaultProps = {
        appendTo: null,
        filter: null,
        scrollHeight: null,
        panelClassName: null,
        panelStyle: null,
        onClick: null
    };

    static propTypes = {
        appendTo: PropTypes.object,
        filter: PropTypes.element,
        scrollHeight: PropTypes.string,
        panelClassName: PropTypes.string,
        panelstyle: PropTypes.object,
        onClick: PropTypes.func
    };

    renderElement() {
        let className = classNames('ui-dropdown-panel ui-widget-content ui-corner-all ui-helper-hidden ui-input-overlay ui-shadow', this.props.panelClassName);

        return (
            <div ref={(el) => this.element = el} className={className} style={this.props.panelStyle} onClick={this.props.onClick}>
                {this.props.filter}
                <div ref={(el) => this.itemsWrapper = el} className="ui-dropdown-items-wrapper" style={{ maxHeight: this.props.scrollHeight || 'auto' }}>
                    <ul className="ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset">
                        {this.props.children}
                    </ul>
                </div>
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