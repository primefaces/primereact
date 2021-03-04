import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from 'react-transition-group';

class MultiSelectPanelComponent extends Component {

    static defaultProps = {
        appendTo: null,
        header: null,
        footer: null,
        onClick: null,
        scrollHeight: null,
        panelClassName: null,
        panelStyle: null,
    };

    static propTypes = {
        appendTo: PropTypes.object,
        header: PropTypes.any,
        footer: PropTypes.any,
        onClick: PropTypes.func,
        scrollHeight: PropTypes.string,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
    };

    renderElement() {
        const panelClassName = classNames('p-multiselect-panel p-component', this.props.panelClassName);

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.props.onEnter} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={panelClassName} style={this.props.panelStyle} onClick={this.props.onClick}>
                    {this.props.header}
                    <div className="p-multiselect-items-wrapper" style={{ maxHeight: this.props.scrollHeight }}>
                        <ul className="p-multiselect-items p-component" role="listbox" aria-multiselectable>
                            {this.props.children}
                        </ul>
                    </div>
                    {this.props.footer}
                </div>
            </CSSTransition>

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

export const MultiSelectPanel = React.forwardRef((props, ref) => <MultiSelectPanelComponent forwardRef={ref} {...props} />);
