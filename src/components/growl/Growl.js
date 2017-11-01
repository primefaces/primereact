import React, {Component} from 'react';
import PropTypes from 'prop-types';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class Growl extends Component {

    static defaultProps = {
        value: null,
        id: null,
        closable: true,
        className: null,
        style: null,
        baseZIndex: 0,
        sticky: false,
        life: 3000,
        onClick: null,
        onClose: null
    }

    static propTypes = {
        value: PropTypes.array,
        id: PropTypes.string,
        closable: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        baseZIndex: PropTypes.number,
        sticky: PropTypes.bool,
        life: PropTypes.number,
        onClick: PropTypes.func,
        onClose: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            messages: this.props.value
        };
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({
            messages: nextProps.value
        });
    }
    
    remove(event, msg, index) {
        let element = event.target.parentElement.parentElement;
        DomHandler.fadeOut(element, 250);
        
        setTimeout(() => {
            this.removed = true;
            if(this.props.onClose) {
                this.props.onClose({
                    originalEvent: event,
                    message: msg
                });
            }
            this.setState({
                messages: this.state.messages.filter((msg, i) => (i !== index))
            });
        }, 250);
    }
    
    removeAll() {
        if(this.state.messages && this.state.messages.length) {
            DomHandler.fadeOut(this.container, 250);
            setTimeout(() => {                
                this.state.messages.forEach((msg,index) => {
                    this.invokeOnClose(null, msg);
                });
                
                this.setState({
                    messages: null
                });
            }, 250);
        }
    }
    
    invokeOnClose(event, msg) {
        if(this.props.onClose) {
            this.props.onClose({
                originalEvent: null,
                message: msg
            });
        }
    }
    
    onMessageClick(event, msg) {
        if(this.props.onClick) {
            this.props.onClick({
                originalEvent: event,
                message: msg
            })
        }
    }
    
    initTimeout() {
        if(this.timeout) {
            clearTimeout(this.timeout);
        }
        
        this.timeout = setTimeout(() => {
            this.removeAll();
        }, this.props.life);
    }

    componentDidMount() {
        this.show();
        
        if(!this.props.sticky) {
            this.initTimeout();
        }
    }

    componentDidUpdate() {
        if(!this.removed) {
            DomHandler.fadeIn(this.container, 250);
            
            if(!this.props.sticky) {
                this.initTimeout();
            }
        }
        this.removed = false;
    }
    
    show() {
        this.container.style.zIndex = String(this.props.baseZIndex + DomHandler.getZindex() + 1);
        if(this.state.messages) {
            DomHandler.fadeIn(this.container, 250);
        }
    }
    
    render() {
        var className = classNames('ui-growl ui-widget', this.props.className);

        if(this.state.messages) {
            var messageItems = this.state.messages.map((msg, index) => {
            var severity = msg.severity;
            var messageClassName = classNames('ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow', {
                'ui-growl-message-info': severity === 'info',
                'ui-growl-message-warn': severity === 'warn',
                'ui-growl-message-error': severity === 'error',
                'ui-growl-message-success': severity === 'success'
            });

            var iconClassName = classNames('ui-growl-image fa fa-2x', {
                'fa-info-circle': severity === 'info',
                'fa-warning': severity === 'warn',
                'fa-close': severity === 'error',
                'fa-check': severity === 'success'
            });
            
            return <div className={messageClassName} aria-live="polite" key={msg.summary + msg.detail} onClick={(event) => this.onMessageClick(event, msg)}>
                        <div className="ui-growl-item ui-helper-clearfix">
                            <div className="ui-growl-icon-close fa fa-close" onClick={(event) => this.remove(event, msg, index)}></div>
                            <span className={iconClassName}></span>
                            <div className="ui-growl-message">
                                <span className="ui-growl-title">{msg.summary}</span>
                                <p>{msg.detail}</p>
                            </div>
                        </div>
                    </div>;
            });
        }

        return (
            <div id={this.props.id} className={className} ref={(el) => {this.container = el;}} style={this.props.style}>
                {messageItems}
            </div>
        );   
    }
}