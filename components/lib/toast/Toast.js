import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classNames, ZIndexUtils } from '../utils/Utils';
import { ToastMessage } from './ToastMessage';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from '../csstransition/CSSTransition';
import PrimeReact from '../api/Api';
import { Portal } from '../portal/Portal';

let messageIdx = 0;

export class Toast extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        baseZIndex: 0,
        position: 'top-right',
        transitionOptions: null,
        appendTo: 'self',
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
        appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        onClick: PropTypes.func,
        onRemove: PropTypes.func,
        onShow: PropTypes.func,
        onHide: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.messages = []
        this.onClose = this.onClose.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExited = this.onExited.bind(this);
    }
    
    setMessages(messages) {
        this.messages = messages
        
        this.forceUpdate()
    }

    show(value) {
        if (value) {
            if (value) {
                let newMessages;

                if (Array.isArray(value)) {
                    for (let i = 0; i < value.length; i++) {
                        value[i].id = messageIdx++;
                        newMessages = [...this.messages, ...value];
                    }
                }
                else {
                    value.id = messageIdx++;
                    newMessages = this.messages ? [...this.messages, value] : [value];
                }

                this.messages.length === 0 && ZIndexUtils.set('toast', this.container, PrimeReact.autoZIndex, this.props.baseZIndex || PrimeReact.zIndex['toast']);

                this.setMessages(newMessages)
            }
        }
    }

    clear() {
        ZIndexUtils.clear(this.container);

        this.setMessages([])
    }

    onClose(message) {
        let newMessages = this.messages.filter(msg => msg.id !== message.id);
                
        this.setMessages(newMessages)

        if (this.props.onRemove) {
            this.props.onRemove(message);
        }
    }

    onEntered() {
        this.props.onShow && this.props.onShow();
    }

    onExited() {
        this.messages.length === 0 && ZIndexUtils.clear(this.container);

        this.props.onHide && this.props.onHide();
    }

    componentWillUnmount() {
        ZIndexUtils.clear(this.container);
    }

    renderElement() {
        let className = classNames('p-toast p-component p-toast-' + this.props.position, this.props.className);

        return (
            <div ref={(el) => { this.container = el; }} id={this.props.id} className={className} style={this.props.style}>
                <TransitionGroup>
                    {
                        this.messages.map((message) => {
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

    render() {
        let element = this.renderElement();

        return <Portal element={element} appendTo={this.props.appendTo} />;
    }
}
