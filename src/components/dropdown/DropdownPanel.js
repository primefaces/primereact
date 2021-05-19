import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { CSSTransition } from '../transition/CSSTransition';
import { Portal } from '../portal/Portal';

class DropdownPanelComponent extends Component {

    static defaultProps = {
        appendTo: null,
        filter: null,
        scrollHeight: null,
        panelClassName: null,
        panelStyle: null,
        onClick: null
    };

    static propTypes = {
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        filter: PropTypes.any,
        scrollHeight: PropTypes.string,
        panelClassName: PropTypes.string,
        panelStyle: PropTypes.object,
        onClick: PropTypes.func
    };

    renderElement() {
        let className = classNames('p-dropdown-panel p-component', this.props.panelClassName);

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.props.onEnter} onEntering={this.props.onEntering} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={className} style={this.props.panelStyle} onClick={this.props.onClick}>
                    {this.props.filter}
                    <div className="p-dropdown-items-wrapper" style={{ maxHeight: this.props.scrollHeight || 'auto' }}>
                        <ul className="p-dropdown-items" role="listbox">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </CSSTransition>
        );
    }

    render() {
        let element = this.renderElement();

        return <Portal element={element} appendTo={this.props.appendTo} />;
    }

}

export const DropdownPanel = React.forwardRef((props, ref) => <DropdownPanelComponent forwardRef={ref} {...props} />);
