import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames } from '../utils/ClassNames';
import { ToastMessage } from './ToastMessage';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from '../transition/CSSTransition';
import { ZIndexUtils } from '../utils/ZIndexUtils';

let messageIdx = 0;

export class Toast extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        baseZIndex: 0,
        position: 'top-right',
        transitionOptions: null,
        onClick: null,
        onRemove: null,
        onShow: null,
        onHide: null
    }

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        baseZIndex: PropTypes.number,
        position: PropTypes.string,
        transitionOptions: PropTypes.object,
        onClick: PropTypes.func,
        onRemove: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.onClose = this.onClose.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    show(value) {
        if (value) {
            let newMessages;

            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                    value[i].id = messageIdx++;
                    newMessages = [...this.state.messages, ...value];
                }
            }
            else {
                value.id = messageIdx++;
                newMessages = this.state.messages ? [...this.state.messages, value] : [value];
            }

            this.setState({
                messages: newMessages
            });

            ZIndexUtils.set('toast', this.container, this.props.baseZIndex);
        }
    }

    clear() {
        ZIndexUtils.clear(this.container);

        this.setState({
            messages: []
        });
    }

    onClose(message) {
        let newMessages = this.state.messages.filter(msg => msg.id !== message.id);
        this.setState({
            messages: newMessages
        });

        if (this.props.onRemove) {
            this.props.onRemove(message);
        }
    }

    onEntered() {
        this.props.onShow && this.props.onShow();
    }

    onExited() {
        this.props.onHide && this.props.onHide();
    }

    componentWillUnmount() {
        ZIndexUtils.clear(this.container);
    }

    render() {
        let className = classNames('p-toast p-component p-toast-' + this.props.position, this.props.className);

        return (
            <div ref={(el) => { this.container = el; }} id={this.props.id} className={className} style={this.props.style}>
                <TransitionGroup>
                    {
                        this.state.messages.map((message) => {
                            const messageRef = React.createRef();

                            return (
                                <CSSTransition nodeRef={messageRef} key={message.id} classNames="p-toast-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} onEntered={this.onEntered} onExited={this.onExited} options={this.props.transitionOptions}>
                                    <ToastMessage ref={messageRef} message={message} onClick={this.props.onClick} onClose={this.onClose} />
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </div>
        );
    }
}
