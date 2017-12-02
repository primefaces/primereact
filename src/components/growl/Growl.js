import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {GrowlMessage} from './GrowlMessage';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var messageIdx = 0;

export class Growl extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        baseZIndex: 0
    }

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        baseZIndex: PropTypes.number
    };

    constructor(props) {
        super(props)
        this.state = {
            messages: null 
        };

        this.onClose = this.onClose.bind(this);
    }

    show(value) {
        if (value) {
            let newMessages;

            if(Array.isArray(value)) {
                for(let i = 0; i < value.length; i++) {
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
    
    onClose(event) {
        let newMessages = this.state.messages.filter(message => message.id !== event.message.id);
        this.setState({
            messages: newMessages
        })
    }

    renderMessages() {
        if(this.state.messages && this.state.messages.length) {
            return this.state.messages.map((message, index) => {
                return <GrowlMessage key={message.id} message={message} onClose={this.onClose} />;
            });
        }
        else {
            return null;
        }
    }
 
    render() {
        let className = classNames('ui-growl ui-widget', this.props.className);
        let messages = this.renderMessages();

        return (
            <div ref={(el) => { this.container = el; }} id={this.props.id} className={className} style={this.props.style}>
                <ReactCSSTransitionGroup
                    transitionName="ui-growl"
                    transitionEnterTimeout={250}
                    transitionLeaveTimeout={250}>
                    {messages}
                </ReactCSSTransitionGroup>
            </div>
        );  
    }
}