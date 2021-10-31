import React, { Component } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

export class CSSTransition extends Component {

    constructor(props) {
        super(props);

        this.onEnter = this.onEnter.bind(this);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExit = this.onExit.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onEnter(node, isAppearing) {
        this.props.onEnter && this.props.onEnter(node, isAppearing); // component
        this.props.options && this.props.options.onEnter && this.props.options.onEnter(node, isAppearing); // user option
    }

    onEntering(node, isAppearing) {
        this.props.onEntering && this.props.onEntering(node, isAppearing); // component
        this.props.options && this.props.options.onEntering && this.props.options.onEntering(node, isAppearing); // user option
    }

    onEntered(node, isAppearing) {
        this.props.onEntered && this.props.onEntered(node, isAppearing); // component
        this.props.options && this.props.options.onEntered && this.props.options.onEntered(node, isAppearing); // user option
    }

    onExit(node) {
        this.props.onExit && this.props.onExit(node); // component
        this.props.options && this.props.options.onExit && this.props.options.onExit(node); // user option
    }

    onExiting(node) {
        this.props.onExiting && this.props.onExiting(node); // component
        this.props.options && this.props.options.onExiting && this.props.options.onExiting(node); // user option
    }

    onExited(node) {
        this.props.onExited && this.props.onExited(node); // component
        this.props.options && this.props.options.onExited && this.props.options.onExited(node); // user option
    }

    render() {
        const immutableProps = { nodeRef: this.props.nodeRef, in: this.props.in, onEnter: this.onEnter, onEntering: this.onEntering, onEntered: this.onEntered, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited };
        const mutableProps = { classNames: this.props.classNames, timeout: this.props.timeout, unmountOnExit: this.props.unmountOnExit };
        const props = { ...mutableProps, ...(this.props.options || {}), ...immutableProps };

        return (
            <ReactCSSTransition {...props}>
                {this.props.children}
            </ReactCSSTransition>
        )
    }
}
