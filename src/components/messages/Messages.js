import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UIMessage } from './UIMessage';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from '../transition/CSSTransition';

let messageIdx = 0;

export class Messages extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        transitionOptions: null,
        onRemove: null,
        onClick: null
    }

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        transitionOptions: PropTypes.object,
        onRemove: PropTypes.func,
        onClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }

        this.onClose = this.onClose.bind(this);
    }

    show(value) {
        if (value) {
            let newMessages = [];

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
        }
    }

    clear() {
        this.setState({
            messages: []
        })
    }

    replace(value) {
        this.setState({
            messages: [],
        }, () => this.show(value));
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

    render() {
        return (
            <div id={this.props.id} className={this.props.className} style={this.props.style}>
                <TransitionGroup>
                    {
                        this.state.messages.map((message) => {
                            const messageRef = React.createRef();

                            return (
                                <CSSTransition nodeRef={messageRef} key={message.id} classNames="p-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} options={this.props.transitionOptions}>
                                    <UIMessage ref={messageRef} message={message} onClick={this.props.onClick} onClose={this.onClose} />
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </div>
        );
    }
}
