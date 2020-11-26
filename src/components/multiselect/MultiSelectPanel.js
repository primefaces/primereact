import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { classNames } from '../utils/ClassNames';

export class MultiSelectPanel extends Component {

    static defaultProps = {
        appendTo: null,
        header: null,
        onClick: null,
        scrollHeight: null,
        panelClassName: null,
        panelStyle: null,
    };

    static propTypes = {
        appendTo: PropTypes.object,
        header: PropTypes.any,
        onClick: PropTypes.func,
        scrollHeight: PropTypes.string,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
    };

    renderElement() {
        const panelClassName = classNames('p-multiselect-panel p-component', this.props.panelClassName);
        return (
            <div className={panelClassName} style={this.props.panelStyle}
                ref={(el) => this.element = el} onClick={this.props.onClick}>
                {this.props.header}
                <div className="p-multiselect-items-wrapper" style={{ maxHeight: this.props.scrollHeight }}>
                    <ul className="p-multiselect-items p-component" role="listbox" aria-multiselectable>
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
