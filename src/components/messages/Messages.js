import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Messages extends Component {

    static defaultProps = {
        closable: true,
        className: null,
        style: null,
        onClear: null
    }

    static propTypes = {
        closable: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        onClear: PropTypes.func
    };

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

    render() {
        if(this.state.messages && this.state.messages.length) {
            var firstMessage = this.state.messages[0];
            var severity = firstMessage.severity||'info';

            var className = classNames('ui-messages ui-widget ui-corner-all', {
                'ui-messages-info': severity === 'info',
                'ui-messages-warn': severity === 'warn',
                'ui-messages-error': severity === 'error',
                'ui-messages-success': severity === 'success'
            });

            var icon = classNames('ui-messages-icon fa fa-fw fa-2x', {
                'fa-info': severity === 'info',
                'fa-warning': severity === 'warn',
                'fa-close': severity === 'error',
                'fa-check': severity === 'success',
            });

            if(this.props.closable) {
                var closeIcon = <a href="#" className="ui-messages-close" onClick={this.clear}>
                                <i className="fa fa-close"></i>
                            </a>;
            }

            return <div className={className} style={this.props.style} ref={(el) => {this.container = el;}}>
                      {closeIcon}
                      <span className={icon}></span>
                      <ul>
                        {this.state.messages.map((msg) => {
                          return <li key={msg.summary + msg.detail}>
                                    <span className="ui-messages-summary">{msg.summary}</span>
                                    <span className="ui-messages-detail">{msg.detail}</span>
                                </li>;  
                        })}
                      </ul>
                   </div>;
        }
        else {
            return null;
        }   
    }
}