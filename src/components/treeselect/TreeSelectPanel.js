import React, { Component } from 'react';
import { classNames } from '../utils/Utils';
import { CSSTransition } from '../csstransition/CSSTransition';
import { Portal } from '../portal/Portal';

class TreeSelectPanelComponent extends Component {

    renderElement() {
        const className = classNames('p-treeselect-panel p-component', this.props.panelClassName);

        return (
            <CSSTransition nodeRef={this.props.forwardRef} classNames="p-connected-overlay" in={this.props.in} timeout={{ enter: 120, exit: 100 }} options={this.props.transitionOptions}
                unmountOnExit onEnter={this.props.onEnter} onEntering={this.props.onEntering} onEntered={this.props.onEntered} onExit={this.props.onExit} onExited={this.props.onExited}>
                <div ref={this.props.forwardRef} className={className} style={this.props.panelStyle} onClick={this.props.onClick}>
                    {this.props.header}
                    <div className="p-treeselect-items-wrapper" style={{ maxHeight: this.props.scrollHeight || 'auto' }}>
                        {this.props.children}
                    </div>
                    {this.props.footer}
                </div>
            </CSSTransition>
        );
    }

    render() {
        let element = this.renderElement();

        return <Portal element={element} appendTo={this.props.appendTo} />;
    }

}

export const TreeSelectPanel = React.forwardRef((props, ref) => <TreeSelectPanelComponent forwardRef={ref} {...props} />);
