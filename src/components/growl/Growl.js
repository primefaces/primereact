import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {GrowlMessage} from './GrowlMessage';
import DomHandler from '../utils/DomHandler';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

var messageIdx = 0;

export class Growl extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        baseZIndex: 0,
        position: 'topright',
        onClick: null,
        onRemove: null
    }

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        baseZIndex: PropTypes.number,
        position: PropTypes.string,
        onClick: PropTypes.func,
        onRemove: PropTypes.func
    };

    constructor(props) {
        super(props)
        this.state = {
            messages: [] 
        };

        this.onClose = this.onClose.bind(this);
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

            this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.generateZIndex());
        }
    }

    clear() {
        this.setState({
            messages: []
        })
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
        let className = classNames('p-growl p-component p-growl-' + this.props.position, this.props.className);

        return (
            <div ref={(el) => { this.container = el; }} id={this.props.id} className={className} style={this.props.style}>
                <TransitionGroup>
                    {this.state.messages.map((message) =>
                        <CSSTransition key={message.id} classNames="p-growl"
                            timeout={{ enter: 250, exit: 500 }}>
                            <GrowlMessage message={message} onClick={this.props.onClick} onClose={this.onClose} />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        );  
    }
}