import React, {Component} from 'react';
import classNames from 'classnames';

export class Growl extends Component {

    constructor(props) {
        super(props);
        this.state = {messages:this.props.value};
        this.clear = this.clear.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({messages:nextProps.value});
    }

    clear(event) {
        this.setState({messages:[]});
        if(this.props.onClear) {
            this.props.onClear();
        }
        event.preventDefault();
    }

    remove(event, msg, index) {
        var msgs = this.state.messages;
        msgs.splice(index, 1);
        this.setState({messages: msgs});
    }

    render() {
        if(this.state.messages && this.state.messages.length) {
            var className = classNames('ui-growl ui-widget', this.props.className);

            return (
                <div className={className} ref={(el) => {this.container = el;}} style={this.props.style}>
                    {this.state.messages.map((msg, index) => {
                        var severity = msg.severity;
                        var messageClassName = classNames('ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow', {
                            'ui-growl-message-info': severity === 'info',
                            'ui-growl-message-warn': severity === 'warn',
                            'ui-growl-message-error': severity === 'error',
                            'ui-growl-message-success': severity === 'success'
                        });

                        var iconClassName = classNames('ui-growl-image fa fa-2x', {
                            'fa-info': severity === 'info',
                            'fa-warning': severity === 'warn',
                            'fa-close': severity === 'error',
                            'fa-check': severity === 'success'
                        });

                        return <div className={messageClassName} aria-live="polite" key={msg.summary + msg.detail}>
                                    <div className="ui-growl-item ui-helper-clearfix">
                                        <div className="ui-growl-icon-close fa fa-close" onClick={(event) => this.remove(event, msg, index)}></div>
                                        <span className={iconClassName}></span>
                                        <div className="ui-growl-message">
                                            <span className="ui-growl-title">{msg.summary}</span>
                                            <p>{msg.detail}</p>
                                        </div>
                                    </div>
                               </div>;
                    })}
                </div>
            );
        }
        else {
            return null;
        }   
    }
}

Growl.defaultProps = {
    closable: true,
    className: null,
    style: null,
    onClear: null
}

Growl.propTypes = {
    closable: React.PropTypes.bool,
    className: React.PropTypes.string,
    style: React.PropTypes.object,
    onClear: React.PropTypes.func
};