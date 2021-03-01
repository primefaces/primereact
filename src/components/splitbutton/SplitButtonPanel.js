import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from 'react-transition-group';

class SplitButtonPanelComponent extends Component {

    static defaultProps = {
        appendTo: null,
        menuStyle: null,
        menuClassName: null,
        id: null,
        onClick: null
    };

    static propTypes = {
        appendTo: PropTypes.object,
        menustyle: PropTypes.object,
        menuClassName: PropTypes.string,
        id: PropTypes.any,
        onClick: PropTypes.func
    };

    renderElement() {
        let className = classNames('p-menu p-menu-overlay p-component', this.props.menuClassName);

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }}
                unmountOnExit onEnter={this.props.onEnter} onEntered={this.props.onEntered} onExit={this.props.onExit}>
                <div ref={this.props.forwardRef} className={className} style={this.props.menuStyle} id={this.props.id} onClick={this.onClick}>
                    <ul className="p-menu-list p-reset" role="menu">
                        {this.props.children}
                    </ul>
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

export const SplitButtonPanel = React.forwardRef((props, ref) => <SplitButtonPanelComponent forwardRef={ref} {...props} />);
